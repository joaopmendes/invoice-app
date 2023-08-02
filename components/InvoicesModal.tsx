import {clsx} from "clsx";
import {ModalOverlay} from "@/components/ModalOverlay";
import React from "react";

type ModalProps = {
    open: boolean;
    close: () => void
}
export const InvoicesModal: React.FC<ModalProps> = ({ open, close }) => {
    return (
       <section id={'invoice-modal'} className={clsx({[`hidden`]: !open})}>
           <ModalOverlay close={close}/>
           <div className={clsx({
               [`fixed top-[80px] left-0 h-screen z-20 bg-pure-white w-screen`]: true,
               [`tablet:rounded-3xl tablet:rounded-tl-none tablet:rounded-bl-none tablet:w-[617px]`]: true,
               [`desktop:rounded-3xl desktop:rounded-tl-none desktop:rounded-bl-none desktop:w-[617px] desktop:left-[103px] desktop:top-[0px]`]: true
           })}>
               Invoice Modal
           </div>
       </section>
    );
};