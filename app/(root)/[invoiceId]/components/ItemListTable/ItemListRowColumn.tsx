import { PrismaInvoiceItem } from '@/interfaces/prisma';
import Typography from '@/components/ui/typography/Typography';
import formatCurrency from '@/lib/formatCurrency';

type ItemListRowColProps = {
  item: PrismaInvoiceItem;
};
export const ItemListRowColumn: React.FC<React.PropsWithChildren<ItemListRowColProps>> = ({
  children,
  item,
}) => {
  return (
    <>
      <div className={'hidden tablet:flex'}>
        <div className={'w-1/4 py-4 px-8'}>
          <Typography tag={'div'} color={'dark'} size={'heading-s-variant'}>
            {item.name}
          </Typography>
        </div>
        <div className={'w-1/4 py-4 px-8 text-center'}>
          <Typography tag={'div'} color={'dark-grey'} size={'heading-s-variant'}>
            {item.quantity}
          </Typography>
        </div>
        <div className={'w-1/4 py-4 px-8 text-center'}>
          <Typography tag={'div'} color={'dark-grey'} size={'heading-s-variant'}>
            {formatCurrency(item.price)}
          </Typography>
        </div>
        <div className={'w-1/4 py-4 px-8 text-center'}>
          <Typography tag={'div'} color={'dark'} size={'heading-s-variant'}>
            {formatCurrency(item.quantity * item.price)}
          </Typography>
        </div>
      </div>
      <div className={'flex tablet:hidden'}>
        <div className={'w-1/2 py-4 px-8'}>
          <Typography tag={'div'} color={'dark'} size={'heading-s-variant'}>
            {item.name}
          </Typography>
          <Typography tag={'div'} className={'mt-2'} color={'dark-grey'} size={'heading-s-variant'}>
            {item.quantity} x {formatCurrency(item.price)}
          </Typography>
        </div>
        <div className={'w-1/2 py-4 px-8 text-center'}>
          <Typography tag={'div'} color={'dark'} size={'heading-s-variant'}>
            {formatCurrency(item.quantity * item.price)}
          </Typography>
        </div>
      </div>
    </>
  );
};
