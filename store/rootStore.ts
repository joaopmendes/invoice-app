import {makeObservable, observable} from 'mobx'


type ModalState = {
    isOpen: boolean
}

type Modals = {
    invoiceModal: ModalState
}

export type RootStoreType = {
    modals: Modals
}
export const initialRootState: RootStoreType = {
    modals: {
        invoiceModal: {
            isOpen: false
        }
    }
}
export class RootStore implements RootStoreType {
    
    modals: Modals = initialRootState.modals;
    constructor() {
        makeObservable(this, {
            modals: observable
        })
    }
}

export default new RootStore();