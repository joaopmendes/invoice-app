"use client"
import Typography from "@/components/ui/typography/Typography";
import {Button} from "@/components/ui/button";
import {observer} from "mobx-react";
import rootStore from "@/store/rootStore";

const  Home = () => {
    return (
        <>
            <Typography color={'dark-03'} tag={'h1'} size={'heading-l'}>Invoices</Typography>

            <Button onClick={() => {
                rootStore.modals.invoiceModal.isOpen = true
            }}>
                <Typography color={'dark-03'} tag={'label'} size={'heading-s'}>Open Modal</Typography>
            </Button>
        </>
    )
}

export default observer(Home)
