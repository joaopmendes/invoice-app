'use client'
import Typography from "@/components/ui/typography/Typography";
import rootStore from "@/store/rootStore";
import {Button} from "@/components/ui/button";
import { PlusIconComponent} from "@/components/ui/PlusIcon";
import {observer} from "mobx-react";
import invoicesModalStore from "@/store/invoicesModalStore";

const Header = () => {
    return (
        <div className={'flex justify-between'}>
            <Typography color={'dark-03'} tag={'h1'} size={'heading-l'}>Invoices</Typography>
            <Button
                variant={'default'}    
                onClick={() => {
                    invoicesModalStore.openCreateInvoice()
                }
            } >
                <PlusIconComponent />
                <Typography color={'pure-white'} tag={'label'} size={'heading-s'} className={'cursor-pointer'}>New Invoice</Typography>
            </Button>
        </div>
    );
};

export default observer(Header);