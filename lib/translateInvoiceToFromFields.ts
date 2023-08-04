import {Invoice, InvoiceItem} from "@prisma/client";
import * as z from "zod";
import invoiceSchema from "@/formSchemas/invoiceSchema";


const OutputInvoice = invoiceSchema.deepPartial();
export default (invoice: Invoice & {itemList: InvoiceItem[]}): z.infer<typeof OutputInvoice> => {
    return {
        id: invoice.id,
        clientName: invoice.clientName || undefined,
        clientEmail: invoice.clientEmail || undefined,
        clientStreetAddress: invoice.clientStreetAddress || undefined,
        clientCity: invoice.clientCity || undefined,
        clientCountry: invoice.clientCountry || undefined,
        clientPostalCode: invoice.clientPostalCode || undefined,

        fromCity: invoice.fromCity || undefined,
        fromCountry: invoice.fromCountry || undefined,
        fromStreetAddress: invoice.fromStreetAddress || undefined,
        fromPostalCode: invoice.fromPostalCode || undefined,
        invoiceDate: invoice.invoiceDate || undefined,
        paymentTerms: invoice.paymentTerms || undefined,
        projectDescription: invoice.projectDescription || undefined,

        itemList: invoice.itemList.map(item => ({
            id: item.id,
            name: item.name || undefined,
            quantity: item.quantity || undefined,
            price: item.price || undefined,
            total: item.total || undefined,
        })),
    }
}