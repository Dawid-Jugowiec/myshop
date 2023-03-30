import Link from 'next/link';
import { useRouter } from 'next/router'


export const Header = () => {
  const router = useRouter();


  return (
    <header className='max-w-md mx-auto w-full'>
    <nav className='bg-violet-300 px-4 py-2 text-white'>
      <Link href={'/'} className={router.pathname === '/' ? "selected" : "" }>
        Home
      </Link>
      <Link href={'/about'} className={router.pathname === '/about' ? "selected" : "" }>
        About
      </Link>
    </nav>
</header>
  );
 
};