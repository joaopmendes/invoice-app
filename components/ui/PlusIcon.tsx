import React from 'react';
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';

export const PlusIconComponent = () => {
  return (
    <div
      className={
        'bg-white rounded-full relative left-[-7px] flex justify-center items-center w-8 h-8 mr-2'
      }
    >
      <Image alt={'plus-icon'} src={'/assets/icon-plus.svg'} width={11} height={11} />
    </div>
  );
};
