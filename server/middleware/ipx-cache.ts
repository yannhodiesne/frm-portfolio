import { PassThrough, Writable, type WritableOptions } from 'stream';
import { promises as fs, existsSync, createReadStream, mkdirSync } from 'fs';
import path from 'path';
import type { ServerResponse } from 'http';
import crypto from 'crypto';
import { defineEventHandler, sendStream } from 'h3';

export default defineEventHandler(async (event) => {
  const cacheDir = path.resolve('./.ipx-cache');
  const reqUrl = event.node.req.url || '';

  if (!reqUrl.startsWith('/_ipx/')) return;

  const strippedUrl = reqUrl.replace('/_ipx/', '');
  const originalUrl = strippedUrl.split('/').slice(1).join('/');
  const originalFilePath = path.resolve('./public', originalUrl); // Path to the original image
  const cacheFilePath = path.resolve(cacheDir, strippedUrl);
  const hashFilePath = `${cacheFilePath}.hash`;

  if (!existsSync(path.dirname(cacheFilePath))) {
    mkdirSync(path.dirname(cacheFilePath), { recursive: true });
  }

  if (existsSync(cacheFilePath) && existsSync(hashFilePath)) {
    const cachedHash = await fs.readFile(hashFilePath, 'utf-8');
    const currentHash = await generateFileHash(originalFilePath);

    if (cachedHash === currentHash) {
      // console.log(`Serving from cache: ${cacheFilePath}`);
      return sendStream(event, createReadStream(cacheFilePath));
    }
  }

  const originalRes = event.node.res;
  const passThrough = new PassThrough();
  const captureStream = new CaptureStream();

  passThrough.pipe(captureStream);

  const originalWrite = originalRes.write.bind(originalRes) as (
    chunk: Buffer | string,
    encoding?: BufferEncoding | ((error: Error | null | undefined) => void),
    callback?: (error: Error | null | undefined) => void
  ) => boolean;

  const originalEnd = originalRes.end.bind(originalRes) as (
    chunk?: Buffer | string | undefined,
    encoding?: BufferEncoding | ((error: Error | null | undefined) => void),
    callback?: () => void
  ) => ServerResponse;

  originalRes.write = (
    chunk: Buffer | string,
    encodingOrCallback?:
      | BufferEncoding
      | ((error: Error | null | undefined) => void),
    callback?: (error: Error | null | undefined) => void
  ): boolean => {
    passThrough.write(chunk, encodingOrCallback as BufferEncoding, callback);
    return originalWrite(
      chunk,
      encodingOrCallback as BufferEncoding,
      callback
    );
  };

  originalRes.end = (
    chunk?: never,
    encodingOrCallback?:
      | BufferEncoding
      | ((error: Error | null | undefined) => void),
    callback?: () => void
  ): ServerResponse => {
    if (chunk)
      passThrough.write(
        chunk,
        encodingOrCallback as BufferEncoding,
        callback
      );

    originalEnd(chunk, encodingOrCallback, callback);

    if (originalRes.statusCode !== 200) return originalRes;

    mkdirSync(path.dirname(cacheFilePath), { recursive: true });
    const buffer = captureStream.getBuffer();
    fs.writeFile(cacheFilePath, buffer)
      .then(async () => {
        const hash = await generateFileHash(originalFilePath);
        await fs.writeFile(hashFilePath, hash);
        // console.log(`Cached image: ${cacheFilePath}`);
      })
      .catch((err) => {
        console.error(`Error caching image: ${err}`);
      });
    return originalRes;
  };

  return;
});

class CaptureStream extends Writable {
  private chunks: Buffer[];

  constructor(options?: WritableOptions) {
    super(options);
    this.chunks = [];
  }

  override _write(
    chunk: Buffer | string,
    encoding: BufferEncoding,
    callback: (error?: Error | null) => void
  ): void {
    this.chunks.push(
      Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encoding)
    );
    callback();
  }

  getBuffer(): Buffer {
    return Buffer.concat(this.chunks);
  }
}

async function generateFileHash(filePath: string): Promise<string> {
  const fileBuffer = await fs.readFile(filePath);
  return generateBufferHash(fileBuffer);
}

function generateBufferHash(buffer: Buffer): string {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}
