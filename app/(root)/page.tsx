import Header from '@/components/Header';
import prisma from '@/lib/prismadb';
import React from 'react';
import InvoicesList from '@/components/InvoicesList/InvoiceList';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { PrismaInvoice } from '@/interfaces/prisma';
import { Filter } from 'lucide-react';
import { log } from 'util';


type HomeProps = {
  searchParams: {
    draft: string;
    paid: string;
    pending: string;
  }
}
const Home: React.FC<HomeProps> = async ({searchParams: { draft, pending, paid }}) => {
  const user = auth();

  if (!user.userId) {
    redirect('/auth/sign-in');
  }
  
  const filterArray: PrismaInvoice['status'][] = [];
  draft === 'true' && filterArray.push('DRAFT');
  pending === 'true'  && filterArray.push('PENDING');
  paid === 'true'  && filterArray.push('PAID');
  
  
  const invoices = await prisma.invoice.findMany({
    where: {
      userId: user.userId,
      status: {
        in: filterArray.length > 0 ? filterArray : ['DRAFT', 'PENDING', 'PAID'],
      }
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
