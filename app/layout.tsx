import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import LoadingAnimation from '../components/LoadingAnimation';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Data Fetching Assignment',
  description: 'An aesthetic and interactive assignment demonstrating client-side and server-side data fetching',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='wrapper'>
        <ThemeProvider attribute="data-theme" defaultTheme="system">
          <LoadingAnimation />
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
