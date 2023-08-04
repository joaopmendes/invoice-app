import {clsx} from "clsx";
import {ModalOverlay} from "@/components/ModalOverlay";
import React from "react";
import type {Invoice} from "@prisma/client";
import CreateInvoice from "@/components/Modals/InvoicesModal/compounds/CreateInvoice";
import {EditInvoice} from "@/components/Modals/InvoicesModal/compounds/EditInvoice";

type ModalProps = {
    open: boolean;
    close: () => void
    type: 'CREATE' | 'EDIT'
    invoice?: Invoice
}
export const InvoicesModal: React.FC<ModalProps> = ({ open, close, type, invoice }) => {
    if(!open) return null;
    
    return (
        <>
           <ModalOverlay close={close}/>
           <div className={clsx({
               [`fixed top-[80px] left-0 z-20 bg-pure-white w-screen overflow-y-scroll h-full`]: true,
               [`tablet:rounded-tl-none tablet:rounded-bl-none tablet:w-[617px]`]: true,
               [`desktop:rounded-tl-none desktop:rounded-bl-none desktop:w-[617px] desktop:left-[103px] desktop:top-[0px]`]: true
           })}>
               <div className="w-[90%] mx-auto mt-10 h-full">
                   {
                       type == "CREATE" ? <CreateInvoice /> : <EditInvoice invoice={invoice!}/>
                   }
               </div>
           </div>
        </> 
    );
};