import Typography from "@/components/ui/typography/Typography";
import {Invoice} from "@prisma/client";


interface InvoiceProps {
    invoice: Invoice
}
export const InvoiceItem: React.FC<InvoiceProps> = ({invoice}) => {
    return (
        <div key={invoice.id}>
            <Typography tag={'div'} color={'dark'} size={'heading-s'}>{invoice.displayId}</Typography>
        </div>
    );
};