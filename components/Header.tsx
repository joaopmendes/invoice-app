'use client';
import Typography from '@/components/ui/typography/Typography';
import rootStore from '@/store/rootStore';
import { Button } from '@/components/ui/button';
import { PlusIconComponent } from '@/components/ui/PlusIcon';
import { observer } from 'mobx-react';
import invoicesModalStore from '@/store/invoicesModalStore';

const Header = () => {
  return (
    <div className={'flex justify-between'}>
      <Typography color={'dark'} tag={'h1'} size={'heading-l'}>
        Invoices
      </Typography>
      <Button
        variant={'default'}
        onClick={() => {
          invoicesModalStore.openCreateInvoice();
        }}
      >
        <PlusIconComponent />
        New Invoice
      </Button>
    </div>
  );
};

export default observer(Header);
