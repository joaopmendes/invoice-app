'use client';
import { Card } from '@/components/Card';
import Typography from '@/components/ui/typography/Typography';
import { InvoiceStatus } from '@/components/InvoicesList/compounds/InvoiceStatus';
import { PrismaInvoiceWithItems } from '@/interfaces/prisma';
import { Button } from '@/components/ui/button';
import useInvoiceActions from '@/hooks/useInvoiceActions';
import { observer } from 'mobx-react';
import invoicesModalStore from '@/store/invoicesModalStore';
import rootStore from '@/store/rootStore';

type HeaderProps = {
  invoice: PrismaInvoiceWithItems;
};
const Header: React.FC<HeaderProps> = ({ invoice }) => {
  const actions = useInvoiceActions(invoice.id, rootStore);

  return (
    <Card className={'tablet:flex justify-between items-center py-4 px-8 w-full'}>
      <div
        className={
          'inline-flex justify-between w-full items-center gap-6 tablet:w-auto tablet:justify-normal'
        }
      >
        <Typography tag={'p'} color={'dark-grey'} size={'body-variant'}>
          Status
        </Typography>
        <InvoiceStatus status={invoice.status} />
      </div>

      <div
        className={
          'fixed bottom-0 bg-pure-white w-full left-0 py-4 flex justify-around tablet:py-0 tablet:relative tablet:justify-end tablet:gap-3 dark:dark:bg-dark-01'
        }
      >
        <Button
          variant={'light'}
          className={'px-6'}
          onClick={() => invoicesModalStore.openEditInvoice(invoice)}
        >
          Edit
        </Button>
        <Button variant={'destruction'} className={'px-6'} onClick={() => actions.delete()}>
          Delete
        </Button>
        {invoice.status === 'PENDING' && (
          <Button className={'px-6'} onClick={() => actions.markAsPaid('PAID')}>
            Mark as Paid
          </Button>
        )}
      </div>
    </Card>
  );
};

export default observer(Header);
