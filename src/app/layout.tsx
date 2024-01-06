import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import { ToggleContextProvider } from '@/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vikas Thakur',
  description:
    "I'm software developer. I'm always looking for opportunities that will nurture my passion for programming. I'm eager to learn and explore different areas of technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {' '}
        <ToggleContextProvider>
          <div className="flex">
            <Sidebar />
            <main className="flex-1 sm:ml-56 ">{children}</main>
          </div>
        </ToggleContextProvider>
      </body>
    </html>
  );
}
