import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
const client = new QueryClient();
import { Layout } from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <QueryClientProvider client={client}>
    <Component {...pageProps} />
    </QueryClientProvider>
  </Layout> 
  )  
}

