import * as z from "zod";

export default z.object({

    "id": z.number().optional(),
    "status": z.string().optional(),
    // Bill From Partial
    "fromStreetAddress": z.string(),
    "fromCity": z.string(),
    "fromPostalCode": z.string(),
    "fromCountry": z.string(),

    // Client Partial
    "clientName": z.string(),
    "clientEmail": z.string().email(),
    "clientStreetAddress": z.string(),
    "clientCity": z.string(),
    "clientPostalCode": z.string(),
    "clientCountry": z.string(),

    "invoiceDate": z.date(),
    "paymentTerms": z.number(),
    // Project Descrition
    "projectDescription": z.string(),

    // Item List
    itemList: z.array(z.object({
        "id": z.number().optional(),
        "quantity": z.number(),
        "name": z.string(),
        "price": z.number(),
        "total": z.number(),
    })),
})