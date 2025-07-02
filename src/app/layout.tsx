import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/index.css';
import '@/styles/text-shadow.css';
import '@/styles/glitchy.css';

const poppins = Poppins({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Title',
  description: 'Description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
