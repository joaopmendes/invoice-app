import {makeObservable, observable, action} from 'mobx'
import type {PrismaInvoiceWithItems} from "@/interfaces/prisma";


type InvoiceModalState = {
    isOpen: boolean
    type: 'CREATE'
    initialData: undefined
} | {
    isOpen: boolean
    type: 'EDIT'
    initialData: PrismaInvoiceWithItems
}
export const initialInvoiceModalState: InvoiceModalState = {
    isOpen: false,
    type: 'CREATE',
    initialData: undefined
}
class InvoicesModalStore {
    invoiceModal: InvoiceModalState = initialInvoiceModalState;

    constructor() {
        makeObservable(this, {
            invoiceModal: observable,
            openEditInvoice: action,
            openCreateInvoice: action,
            closeInvoicesModal: action,
        })
    }

    openCreateInvoice() {
        window.scrollTo(0,0)
        this.invoiceModal.isOpen = true
        this.invoiceModal.type = "CREATE"
    }
    
    openEditInvoice(invoice: PrismaInvoiceWithItems) {
        window.scrollTo(0,0)
        
        this.invoiceModal.isOpen = true
        this.invoiceModal.type = "EDIT"
        this.invoiceModal.initialData = invoice
    }
    closeInvoicesModal() {
        this.invoiceModal = {...initialInvoiceModalState};
    }

}

const invoicesModalStore = new InvoicesModalStore();
export default invoicesModalStore;