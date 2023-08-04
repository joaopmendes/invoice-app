import {Invoice, InvoiceItem} from "@prisma/client";
import * as z from "zod";
import invoiceSchema from "@/formSchemas/invoiceSchema";

export default (invoice: Invoice & {itemList: InvoiceItem[]}): z.infer<typeof invoiceSchema> => {
    return {
        id: invoice.id,
        clientName: invoice.clientName,
        clientEmail: invoice.clientEmail,
        clientStreetAddress: invoice.clientStreetAddress,
        clientCity: invoice.clientCity,
        clientCountry: invoice.clientCountry,
        clientPostalCode: invoice.clientPostalCode,

        fromCity: invoice.fromCity,
        fromCountry: invoice.fromCountry,
        fromStreetAddress: invoice.fromStreetAddress,
        fromPostalCode: invoice.fromPostalCode,
        invoiceDate: invoice.invoiceDate,
        paymentTerms: invoice.paymentTerms,
        projectDescription: invoice.projectDescription,

        itemList: invoice.itemList.map(item => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.total,
        })),
    }
}