import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import invoiceSchema from '@/formSchemas/invoiceSchema';

export const PUT = async (req: NextRequest, { params }: { params: { invoiceId: string } }) => {
  const body = await req.json();
  const id = Number(params.invoiceId);

  if (!id) {
    return NextResponse.json({ message: 'Invalid id' }, { status: 400 });
  }
  const user = auth();
  if (!user.userId) {
    return NextResponse.json({}, { status: 403 });
  }

  if (!['PENDING', 'PAID', 'DRAFT'].includes(body.status)) {
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
