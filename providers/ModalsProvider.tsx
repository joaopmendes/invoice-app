"use client";
import {observer} from "mobx-react";
import React from "react";
import rootStore from "@/store/rootStore";
import {InvoicesModal} from "@/components/Modals/InvoicesModal/InvoicesModal";
import invoicesModalStore from "@/store/invoicesModalStore";

const ModalsProvider = () => {
    return (
        <>
            <InvoicesModal
                open={invoicesModalStore.invoiceModal.isOpen}
                invoice={invoicesModalStore.invoiceModal.initialData}
                type={invoicesModalStore.invoiceModal.type}
                close={() => {
                    invoicesModalStore.closeInvoicesModal()
                }}
            />
        </>
    );
};


export default observer(ModalsProvider);