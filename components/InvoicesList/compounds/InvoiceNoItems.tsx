import Image from 'next/image';

const InvoiceNoItems = () => {
  return (
    <div className={'w-full h-full flex justify-center items-center'}>
      <Image
        src={'/assets/illustration-empty.svg'}
        alt={'No items Imagge'}
        width='242'
        height='200'
      />
    </div>
  );
};

export default InvoiceNoItems;
