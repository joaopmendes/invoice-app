import {PrismaInvoiceItem} from "@/interfaces/prisma";
import {ItemListRowColumn} from "./ItemListRowColumn";

type ItemListRowProps = {
    item: PrismaInvoiceItem
}
export const ItemListRowItem: React.FC<React.PropsWithChildren<ItemListRowProps>> = ({children, item}) => {

    return <div className={'w-full'}>
        <ItemListRowColumn item={item} />
    </div>
}