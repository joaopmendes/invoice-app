import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import invoiceSchema from '@/formSchemas/invoiceSchema';

export const DELETE = async (req: NextRequest, { params }: { params: { invoiceId: string } }) => {
  const id = Number(params.invoiceId);
  if (!id) {
    return NextResponse.json({ message: 'Invalid id' }, { status: 400 });
  }
  const user = auth();
  if (!user.userId) {
    return NextResponse.json({}, { status: 403 });
  }
  try {
    const invoiceResponse = await prisma!.invoice.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json({
      message: 'Invoice deleted successfully',
      data: { ...invoiceResponse },
    });
  } catch (e) {
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
};
