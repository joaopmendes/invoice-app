import {Invoice} from "@prisma/client";
import Typography from "@/components/ui/typography/Typography";

type EditInvoiceProps = {
    invoice: Invoice
}

export const EditInvoice: React.FC<EditInvoiceProps> = () => {
    return (
        <>
            <Typography size={'heading-m'} color={'dark'} tag={'h2'}>
                Edit Invoice
            </Typography>
        </>
    );
};