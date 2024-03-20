'use client';

import Link from 'next/link';
import logoImg from '@/assets/logo.png'; // @는 루트 디렉토리를 가리킴
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import { usePathname } from 'next/navigation';

const MainHeader = () => {
  const path = usePathname();

  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
        <Link className={classes.logo} href='/'> {/* 로고 클릭 시 첫 페이지로 이동 */}
            <Image src={logoImg} alt='A plate with food on it' priority/>
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link 
                      href='/meals' 
                      className={path.startsWith('/meals') ? classes.active : undefined}
                    >
                      Browse Meals
                    </Link>
                </li>
                <li>
                    <Link 
                      href='/community'
                      className={path === '/community' ? classes.active : undefined}
                    >
                      Foodies Community
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default MainHeader