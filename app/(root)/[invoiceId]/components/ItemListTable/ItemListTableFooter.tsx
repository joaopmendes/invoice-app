import Typography from "@/components/ui/typography/Typography";
import formatCurrency from "@/lib/formatCurrency";
import {PrismaInvoiceWithItems} from "@/interfaces/prisma";
type ItemListTableFooterProps = {
    invoice: PrismaInvoiceWithItems
}
export const ItemListTableFooter: React.FC<ItemListTableFooterProps> = ({invoice}) => {
    return (
        <div className={'w-full flex justify-between bg-[#373B53] px-10 py-5 rounded-2xl rounded-tl-none rounded-tr-none'}>
            <Typography tag={'div'} color={'pure-white'} size={'body'}>Amount Due</Typography>
            <Typography tag={'div'} color={'pure-white'} size={'heading-m'}>
                {formatCurrency(invoice.itemList.reduce((acc, item) => acc + item.total, 0))}
            </Typography>

        </div>
    );
};