import prisma from '@/lib/prismadb'
import React from "react";
import {auth} from "@clerk/nextjs";
import {redirect} from "next/navigation";
import {GoBackButton} from "./components/GoBackButton";
import Header from "./components/Header";
import InvoiceDetail from "./components/InvoiceDetail";


type InvoicePageProps = {
    params: {
        invoiceId: string
    }
}
const InvoicePageProps: React.FC<InvoicePageProps> = async ({params : {invoiceId}}) => {
    const user = auth();
    if (!user.userId) {
        redirect("/auth/sign-in");
    }
    if (!invoiceId) {
        redirect("/");
    }
    const invoice = await prisma.invoice.findFirst({
        where: {
            userId: user.userId,
            id: Number(invoiceId)
        },
        include: {
            itemList: true
        }
    });
    if (!invoice) {
        redirect("/");
    }
    return (
        <section className={"flex flex-col gap-6 min-h-screen h-full"}>
            <GoBackButton/>
            <Header invoice={invoice} />
            <InvoiceDetail invoice={invoice}/>
        </section>
    )
}

export default InvoicePageProps
