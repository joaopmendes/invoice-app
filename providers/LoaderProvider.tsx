'use client';
import { ClipLoader } from 'react-spinners';
import rootStore from '@/store/rootStore';
import { observer } from 'mobx-react';

const LoaderProvider = () => {
  return (
    <>
      {rootStore.state.loaders.length > 0 && (
        <div className='fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-dark opacity-50'>
          <ClipLoader
            color={'#fff'}
            loading={true}
            size={150}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        </div>
      )}
    </>
  );
};

export default observer(LoaderProvider);
