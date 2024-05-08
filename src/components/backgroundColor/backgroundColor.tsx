'use client';

export default function BackgroundColor({
  color
}: Readonly<{
  color: string
}>) {
  return (
    <style global jsx>{`
      body {
        background: ${color};
      }
    `}</style>
  );
}
