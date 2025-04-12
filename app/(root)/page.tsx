import Header from '@/components/Header';
import prisma from '@/lib/prismadb';
import React from 'react';
import InvoicesList from '@/components/InvoicesList/InvoiceList';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { PrismaInvoice } from '@/interfaces/prisma';

type HomeProps = {
  searchParams: Promise<{
    draft: string;
    paid: string;
    pending: string;
  }>;
};
const Home: React.FC<HomeProps> = async (props) => {
  const searchParams = await props.searchParams;

  const { draft, pending, paid } = searchParams;

  const user = await auth();

  if (!user.userId) {
    redirect('/auth/sign-in');
  }

  const filterArray: PrismaInvoice['status'][] = [];
  draft === 'true' && filterArray.push('DRAFT');
  pending === 'true' && filterArray.push('PENDING');
  paid === 'true' && filterArray.push('PAID');

  const invoices = await prisma.invoice.findMany({
    where: {
      userId: user.userId,
      status: {
        in: filterArray.length > 0 ? filterArray : ['DRAFT', 'PENDING', 'PAID'],
      },
    },
    include: {
      itemList: true,
    },
  });
  return (
    <div className={'h-[91vh]'}>
      <Header />
      <InvoicesList invoices={invoices} />
    </div>
  );
};

export default Home;
