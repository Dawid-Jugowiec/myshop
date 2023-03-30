import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '@/components/Main';

export default function AboutPage() {
return (<div className='flex flex-col min-h-screen'>
  <Header />
    <Main> This is about page </Main>
  <Footer />
</div>)
}