import HeaderColumn from "@/app/(root)/[invoiceId]/components/ItemListTable/HeaderColumn";
import Typography from "@/components/ui/typography/Typography";
import formatCurrency from "@/lib/formatCurrency";

type ListTableProps = {}
export const ListTable: React.FC<React.PropsWithChildren<ListTableProps>> = ({children}) => {
    return (
        <section className={'w-full bg-[#F9FAFE] rounded mt-10 dark:bg-[#252945]'}>
            {children}
        </section>
    );
};