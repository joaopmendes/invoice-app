import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/prismadb';
import { STATUSES } from '@/constants/statuses';

export const PUT = async (req: NextRequest, props: { params: Promise<{ invoiceId: string }> }) => {
  const params = await props.params;
  const body = await req.json();
  const id = Number(params.invoiceId);

  if (!id) {
    return NextResponse.json({ message: 'Invalid id' }, { status: 400 });
  }
  const user = await auth();
  if (!user.userId) {
    return NextResponse.json({}, { status: 403 });
  }

  if (!Object.values(STATUSES).includes(body.status)) {
    return NextResponse.json({ message: 'Invalid status' }, { status: 403 });
  }

  try {
    const invoiceResponse = await prisma!.invoice.update({
      where: {
        id: Number(id),
      },
      data: {
        status: body.status,
      },
    });
    return NextResponse.json({
      message: 'Invoice updated successfully',
      data: { ...invoiceResponse },
    });
  } catch (e) {
    console.error(e)
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
};
