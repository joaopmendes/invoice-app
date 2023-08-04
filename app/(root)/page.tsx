import Header from '@/components/Header';
import prisma from '@/lib/prismadb';
import React from 'react';
import InvoicesList from '@/components/InvoicesList/InvoiceList';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
const Home = async () => {
  const user = auth();

  if (!user.userId) {
    redirect('/auth/sign-in');
  }
  const invoices = await prisma.invoice.findMany({
    where: {
      userId: user.userId,
    },
    include: {
      itemList: true,
    },
  });
  return (
    <div className={'min-h-screen h-full'}>
      <Header />
      <InvoicesList invoices={invoices} />
    </div>
  );
};

export default Home;
