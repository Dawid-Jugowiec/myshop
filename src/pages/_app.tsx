import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
const client = new QueryClient();
import { Layout } from '@/components/Layout';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <DefaultSeo {...SEO}/>
    <QueryClientProvider client={client}>
    <Component {...pageProps} />
    </QueryClientProvider>
  </Layout> 
  )  
}

