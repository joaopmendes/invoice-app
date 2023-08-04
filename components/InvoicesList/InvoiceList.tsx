import InvoiceItem from '@/components/InvoicesList/compounds/InvoiceItem';
import InvoiceNoItems from '@/components/InvoicesList/compounds/InvoiceNoItems';
import { PrismaInvoiceWithItems } from '@/interfaces/prisma';

interface InvoiceListProps {
  invoices: PrismaInvoiceWithItems[];
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices }) => {
  return (
    <section id={'invoices-list'} className={'grid grid-cols-1 w-full py-12'}>
      {invoices.length ? (
        invoices.map((invoice) => <InvoiceItem key={invoice.id} invoice={invoice} />)
      ) : (
        <InvoiceNoItems />
      )}
    </section>
  );
};

export default InvoiceList;
