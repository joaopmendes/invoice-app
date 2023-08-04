import { PrismaInvoiceWithItems } from '@/interfaces/prisma';
import Typography from '@/components/ui/typography/Typography';
import Color from '@/components/ui/typography/interfaces/Color';
import { cn } from '@/lib/utils';

type InvoiceStatusProps = {
  status: PrismaInvoiceWithItems['status'];
} & React.ComponentProps<'div'>;
export const InvoiceStatus: React.FC<InvoiceStatusProps> = ({ status, className, ...rest }) => {
  const getStatusMessage = () => {
    switch (status) {
      case 'DRAFT':
        return 'Draft';
      case 'PENDING':
        return 'Pending';
      case 'PAID':
        return 'Paid';
      default:
        return 'Draft';
    }
  };
  const getStatusColor = (): Color => {
    switch (status) {
      case 'DRAFT':
        return 'dark';
      case 'PENDING':
        return 'orange';
      case 'PAID':
        return 'green';
      default:
        return 'dark';
    }
  };

  return (
    <div
      className={cn({
        [`bg-${getStatusColor()}-opacity rounded-lg`]: true,
        [`${className}`]: !!className,
      })}
      {...rest}
    >
      <Typography
        tag={'div'}
        color={getStatusColor()}
        size={'heading-s-variant'}
        className={`break-words relative small-ball-before py-2 px-4 pl-8`}
      >
        {getStatusMessage()}
      </Typography>
    </div>
  );
};
