import prisma from '@/lib/prismadb';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { GoBackButton } from './components/GoBackButton';
import Header from './components/Header';
import InvoiceDetail from './components/InvoiceDetail';

type PageProps = {
  params: Promise<{
    invoiceId: string;
  }>;
};

const InvoicePage: React.FC<PageProps> = async (props) => {
  const params = await props.params;

  const { invoiceId } = params;

  const { userId } = await auth();
  if (!userId) {
    redirect('/auth/sign-in');
  }

  const invoice = await prisma.invoice.findFirst({
    where: {
      userId,
      id: Number(invoiceId),
    },
    include: {
      itemList: true,
    },
  });

  if (!invoice) {
    redirect('/');
  }

  return (
    <section className='flex flex-col gap-6 min-h-screen h-full'>
      <GoBackButton />
      <Header invoice={invoice} />
      <InvoiceDetail invoice={invoice} />
    </section>
  );
};

export default InvoicePage;
