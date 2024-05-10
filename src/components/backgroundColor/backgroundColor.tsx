'use client';

export default function BackgroundColor({
  color,
  backButton
}: Readonly<{
  color: string,
  backButton: string
}>) {
  return (
    <style global jsx>{`
      body {
        background: ${color};
      }

      #back {
        color: ${backButton};
      }
    `}</style>
  );
}
