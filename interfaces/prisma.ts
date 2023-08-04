import { Invoice, InvoiceItem } from '@prisma/client';

export type PrismaInvoice = Invoice;

export type PrismaInvoiceItem = InvoiceItem;

export type PrismaInvoiceWithItems = PrismaInvoice & { itemList: InvoiceItem[] };
