"use client";
import {observer} from "mobx-react";
import React from "react";
import rootStore from "@/store/rootStore";
import {InvoicesModal} from "@/components/InvoicesModal";

const ModalsProvider = () => {
    return (
        <>
            <InvoicesModal
                open={rootStore.modals.invoiceModal.isOpen}
                close={() => {
                    rootStore.modals.invoiceModal.isOpen = false
                }}
            />
        </>
    );
};


export default observer(ModalsProvider);