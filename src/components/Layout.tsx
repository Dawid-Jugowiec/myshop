import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode,
};

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className="flex flex-col bg-green-300 min-h-screen">
        <meta name="description" content="First shop"></meta>
      <Header />
        <div className='flex-grow'>{children}</div>
      <Footer />
    </div>);
};