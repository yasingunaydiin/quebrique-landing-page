import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quebrique - Custom Brick Design Service',
  description:
    'Design your own custom bricks with Quebrique. Trust, Design, Craft.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
