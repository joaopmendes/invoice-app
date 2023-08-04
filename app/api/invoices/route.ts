import {NextRequest, NextResponse} from "next/server";
import invoiceSchema from "@/formSchemas/invoiceSchema";
import {auth} from "@clerk/nextjs";
import generateRandomInvoiceId from "@/lib/generateRandomInvoiceId";


export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const user = auth();
    
    if(!user.userId) {
        return NextResponse.json({}, {status: 403});
    }
    if (body["invoiceDate"]) {
        body["invoiceDate"] = new Date(body["invoiceDate"]);
    }
    const validatorResponse = invoiceSchema.safeParse(body);
    if (!validatorResponse.success) {
        return NextResponse.json({message: "Invalid request", errors: validatorResponse.error.errors}, {status: 400});
    }
    
    
    const invoice = validatorResponse.data;

    try {
        
        const invoiceResponse = await prisma!.invoice.create({
            data: {
                "displayId": generateRandomInvoiceId(),
                "userId": user.userId,
                "fromStreetAddress": invoice.fromStreetAddress,
                "fromCity": invoice.fromCity,
                "fromPostalCode": invoice.fromPostalCode,
                "fromCountry": invoice.fromCountry,
                "status": "PENDING",
                "clientName": invoice.clientName,
                "clientEmail": invoice.clientEmail,
                "clientStreetAddress": invoice.clientStreetAddress,
                "clientCity": invoice.clientCity,
                "clientPostalCode": invoice.clientPostalCode,
                "clientCountry": invoice.clientCountry,
    
                "invoiceDate": invoice.invoiceDate,
                "paymentTerms": invoice.paymentTerms,
                "projectDescription": invoice.projectDescription,
    
                "itemList": {
                    create: invoice.itemList.map(item => (
                        {
                            "quantity": item.quantity,
                            "name": item.name,
                            "price": item.price,
                            "total": item.total,
                        }
                    ))
                },
            }
        });
        return NextResponse.json({message: "Invoice created successfully", data: {...invoiceResponse}});
        
    } catch (e) {
        return NextResponse.json({message: "Something went wrong"}, {status: 500});
    }
    
}


export const PUT = async (req: NextRequest) => {
    const body = await req.json();
    const user = auth();

    if(!user.userId) {
        return NextResponse.json({}, {status: 403});
    }
    if (body["invoiceDate"]) {
        body["invoiceDate"] = new Date(body["invoiceDate"]);
    }
    const validatorResponse = invoiceSchema.safeParse(body);
    if (!validatorResponse.success) {
        return NextResponse.json({message: "Invalid request", errors: validatorResponse.error.errors}, {status: 400});
    }


    const invoice = validatorResponse.data;

    try {

        const invoiceResponse = await prisma!.invoice.update({
            where: {
                id: Number(invoice.id)
            },
            data: {
                "fromStreetAddress": invoice.fromStreetAddress,
                "fromCity": invoice.fromCity,
                "fromPostalCode": invoice.fromPostalCode,
                "fromCountry": invoice.fromCountry,
                    
                "clientName": invoice.clientName,
                "clientEmail": invoice.clientEmail,
                "clientStreetAddress": invoice.clientStreetAddress,
                "clientCity": invoice.clientCity,
                "clientPostalCode": invoice.clientPostalCode,
                "clientCountry": invoice.clientCountry,

                "invoiceDate": invoice.invoiceDate,
                "paymentTerms": invoice.paymentTerms,
                "projectDescription": invoice.projectDescription,

                "itemList": {
                    update: invoice.itemList.filter(item => Boolean(item.id)).map(item => (
                        {
                            where: {
                                id: Number(item.id)
                            },
                            data: {
                                "quantity": item.quantity,
                                "name": item.name,
                                "price": item.price,
                                "total": item.total,
                            }
                        }
                    )),
                    create: invoice.itemList.filter(item => !Boolean(item.id)).map(item => (
                        {
                            "quantity": item.quantity,
                            "name": item.name,
                            "price": item.price,
                            "total": item.total,
                        }
                    )),
                },
            }
        });
        return NextResponse.json({message: "Invoice updated successfully", data: {...invoiceResponse}});

    } catch (e) {
        return NextResponse.json({message: "Something went wrong"}, {status: 500});
    }

}



