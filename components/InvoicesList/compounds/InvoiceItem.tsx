"use client"
import Typography from "@/components/ui/typography/Typography";
import type {PrismaInvoiceWithItems} from "@/interfaces/prisma";
import {observer} from "mobx-react";
import invoicesModalStore from "@/store/invoicesModalStore";


interface InvoiceProps {
    invoice: PrismaInvoiceWithItems
}
const InvoiceItem: React.FC<InvoiceProps> = ({invoice}) => {
    return (
        <div key={invoice.id}>
            <Typography tag={'div'} color={'dark'} size={'heading-s'} onClick={() => invoicesModalStore.openEditInvoice(invoice)}>{invoice.displayId}</Typography>
        </div>
    );
};

export default observer(InvoiceItem);