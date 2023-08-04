import { PrismaInvoiceWithItems} from "@/interfaces/prisma";
import HeaderColumn from "./HeaderColumn";
import {ListTable} from "./ListTable";
import {ListTableHeader} from "./ListTableHeader";
import {ListTableBody} from "./ListTableBody";
import {ItemListRowItem} from "./ItemListRow";
import {ItemListTableFooter} from "./ItemListTableFooter";

type ItemListTableProps = {
    invoice: PrismaInvoiceWithItems
}
export const ItemListTable: React.FC<ItemListTableProps> = ({invoice}) => {
    return (
        <ListTable>
            <ListTableHeader>
                <HeaderColumn alignLeft>Item Name</HeaderColumn>
                <HeaderColumn>QTY.</HeaderColumn>
                <HeaderColumn>Price</HeaderColumn>
                <HeaderColumn>Total</HeaderColumn>
            </ListTableHeader>
            
            <ListTableBody>
                {
                    invoice.itemList.map((item) => (
                        <ItemListRowItem key={item.id} item={item} ></ItemListRowItem>
                    ))
                }
            </ListTableBody>
            <ItemListTableFooter invoice={invoice} />
        </ListTable>
    );
};
