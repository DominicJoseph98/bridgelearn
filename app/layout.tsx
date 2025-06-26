// app/layout.tsx
export const metadata = {
  title: 'BridgeLearn',
  description: 'Connecting volunteers with underprivileged students',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
