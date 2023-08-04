import { ClipLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <ClipLoader
      color={'dark'}
      loading={true}
      size={150}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  );
};
