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
  title: 'Ready Set Dev PH',
  description: 'Qui veniam pariatur non consectetur. Consequat mollit elit velit in cillum reprehenderit ea. Mollit in eiusmod dolore aliquip consectetur. ',
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
