"use client";
import {observer} from "mobx-react";
import React from "react";
import {InvoicesModal} from "@/components/Modals/InvoicesModal/InvoicesModal";
import invoicesModalStore from "@/store/invoicesModalStore";
import {clsx} from "clsx";

const ModalsProvider = () => {
    const anyModalOpen = invoicesModalStore.invoiceModal.isOpen;
    return (
        <div className={clsx({
            [`modalOpen`]: anyModalOpen
        })}>
            <InvoicesModal
                open={invoicesModalStore.invoiceModal.isOpen}
                invoice={invoicesModalStore.invoiceModal.initialData}
                type={invoicesModalStore.invoiceModal.type}
                close={() => {
                    invoicesModalStore.closeInvoicesModal()
                }}
            />
        </div>
    );
};


export default observer(ModalsProvider);