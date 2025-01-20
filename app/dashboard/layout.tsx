export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative flex flex-col'>
      <div className='max-w-7xl mx-auto'>{children}</div>
    </div>
  );
}
