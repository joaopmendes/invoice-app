import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { DarkModeSwitch } from '@/components/DarkModeSwitch';

const Navbar = () => {
  return (
    <header>
      <nav
        className={`
                navbar bg-dark-01 flex justify-between items-center
                desktop:rounded-3xl desktop:rounded-tl-none desktop:rounded-bl-none desktop:flex-col desktop:items-center desktop:pr-0
            `}
      >
        <div className='relative logo-container'>
          <Image src={'/logo.svg'} alt={'Logo'} fill quality={100} />
        </div>
        <div className={'flex justify-center items-center desktop:flex-col'}>
          <DarkModeSwitch />

          <div
            className={`
                    flex justify-center items-center h-full w-[96px]
                    desktop:h-[88px] desktop:w-full desktop:border-t-white desktop:border-solid
                    `}
          >
            <UserButton afterSignOutUrl='/' />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
