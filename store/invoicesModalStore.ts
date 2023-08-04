import {makeObservable, observable, action} from 'mobx'
import type {Invoice} from "@prisma/client";


type InvoiceModalState = {
    isOpen: boolean
    type: 'CREATE'
    initialData: undefined
} | {
    isOpen: boolean
    type: 'EDIT'
    initialData: Invoice
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
        this.invoiceModal.isOpen = true
        this.invoiceModal.type = "CREATE"
    }
    
    openEditInvoice(invoice: Invoice) {
        this.invoiceModal.isOpen = true
        this.invoiceModal.type = "EDIT"
        this.invoiceModal.initialData = invoice
    }
    closeInvoicesModal() {
        this.invoiceModal = initialInvoiceModalState;
    }

}

const invoicesModalStore = new InvoicesModalStore();
export default invoicesModalStore;