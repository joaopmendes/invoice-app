import { Card } from '@/components/Card';
import { PrismaInvoiceWithItems } from '@/interfaces/prisma';
import Typography from '@/components/ui/typography/Typography';
import * as fns from 'date-fns';
import { ItemListTable } from './ItemListTable';

type HeaderProps = {
  invoice: PrismaInvoiceWithItems;
};
const InvoiceDetail: React.FC<HeaderProps> = ({ invoice }) => {
  return (
    <Card className={'px-5 py-5 tablet:px-10 tablet:py-10 mb-28 tablet:mb-4'}>
      <div className='flex flex-col gap-10 justify-between tablet:flex-row tablet:gap-0'>
        <div className='flex flex-col gap-1'>
          <Typography tag={'h1'} color={'dark-01'} size={'heading-s'}>
            <Typography tag={'span'} color={'dark-grey'} size={'heading-s'}>
              #
            </Typography>
            {invoice.displayId}
          </Typography>
          <Typography tag={'p'} color={'dark-grey'} size={'body'}>
            {invoice.projectDescription}
          </Typography>
        </div>

        <div className='flex flex-col gap-1'>
          <Typography tag={'p'} color={'dark-grey'} size={'body'}>
            {invoice.fromStreetAddress}
          </Typography>
          <Typography tag={'p'} color={'dark-grey'} size={'body'}>
            {invoice.fromCity}
          </Typography>
          <Typography tag={'p'} color={'dark-grey'} size={'body'}>
            {invoice.fromPostalCode}
          </Typography>
          <Typography tag={'p'} color={'dark-grey'} size={'body'}>
            {invoice.fromCountry}
          </Typography>
        </div>
      </div>
      <div className='flex gap-x-20 gap-y-8 tablet:gap-x-40 flex-wrap mt-10'>
        <div className='flex flex-col gap-8'>
          {/*Invoice Date*/}
          <div className='flex flex-col gap-2'>
            <Typography tag={'p'} color={'dark-grey'} size={'body'}>
              Invoice Date
            </Typography>
            <Typography tag={'p'} color={'dark-01'} size={'heading-s'}>
              {fns.format(new Date(invoice.invoiceDate), 'dd MMM yyyy')}
            </Typography>
          </div>
          {/*Payment Due*/}
          <div className='flex flex-col gap-2'>
            <Typography tag={'p'} color={'dark-grey'} size={'body'}>
              Invoice Due
            </Typography>
            <Typography tag={'p'} color={'dark-01'} size={'heading-s'}>
              {fns.format(
                fns.addDays(new Date(invoice.invoiceDate), invoice.paymentTerms),
                'dd MMM yyyy',
              )}
            </Typography>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <Typography tag={'p'} color={'dark-grey'} size={'body'}>
            Bill To
          </Typography>
          <Typography tag={'p'} color={'dark-01'} size={'heading-s'}>
            {invoice.clientName}
          </Typography>

          <Typography tag={'p'} color={'dark-grey'} size={'body'}>
            {invoice.clientStreetAddress}
          </Typography>
          <Typography tag={'p'} color={'dark-grey'} size={'body'}>
            {invoice.clientCity}
          </Typography>
          <Typography tag={'p'} color={'dark-grey'} size={'body'}>
            {invoice.clientPostalCode}
          </Typography>
          <Typography tag={'p'} color={'dark-grey'} size={'body'}>
            {invoice.clientCountry}
          </Typography>
        </div>
        <div className='flex flex-col gap-1'>
          <Typography tag={'p'} color={'dark-grey'} size={'body'}>
            Sent To
          </Typography>
          <Typography tag={'p'} color={'dark-01'} size={'heading-s'}>
            {invoice.clientEmail}
          </Typography>
        </div>
      </div>
      <ItemListTable invoice={invoice} />
    </Card>
  );
};

export default InvoiceDetail;
