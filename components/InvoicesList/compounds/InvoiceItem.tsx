"use client"
import Typography from "@/components/ui/typography/Typography";
import type {PrismaInvoiceWithItems} from "@/interfaces/prisma";
import {observer} from "mobx-react";
import invoicesModalStore from "@/store/invoicesModalStore";
import * as fns from 'date-fns'
import {InvoiceStatus} from "@/components/InvoicesList/compounds/InvoiceStatus";
import Image from "next/image";
import Link from "next/link";
import {clsx} from "clsx";
import formatCurrency from "@/lib/formatCurrency";


interface InvoiceProps {
    invoice: PrismaInvoiceWithItems
}
const InvoiceItem: React.FC<InvoiceProps> = ({invoice}) => {
    return (
        <section>
            {/*Desktop View*/}
            <div key={invoice.id} className={'hidden tablet:flex w-full min-h-[72px] bg-pure-white my-4 rounded-3xl px-8 gap-8  justify-center items-center dark:bg-[#1E2139]'}>
                <DisplayId invoice={invoice} />
                <DisplayDate invoice={invoice} />
                <DisplayName invoice={invoice}/>
                <DisplayPrice invoice={invoice}/>
                <DisplayStatus invoice={invoice}/>
                <DisplayLink invoice={invoice}/>
            </div>
            
            {/*Mobile View*/}
            <div key={invoice.id} className={'block tablet:hidden w-full min-h-[72px] bg-pure-white my-4 rounded-3xl px-8 gap-8  justify-center items-center dark:bg-[#1E2139]'}>
                <Link href={`/${invoice.id}`} >
                    <div className="flex justify-between py-6">
                    <DisplayId invoice={invoice} className={'text-dark-03 text-heading-m'}/>
                    <DisplayName invoice={invoice} className={'text-right'}/>
                    </div>
                    <div className="flex justify-between items-center py-4">
                        <div className="flex flex-col justify-between items-start">
                            <DisplayDate invoice={invoice} />
                            <DisplayPrice invoice={invoice} className={'pt-4'}/>
                            
                        </div>
                        <div className="">
                            <DisplayStatus invoice={invoice}/>
                        </div>
                    </div>
                </Link>
                
            </div>
            
        </section>
    );
};

type MiniComponentsProps = {
    invoice: PrismaInvoiceWithItems
} & React.ComponentProps<'div'>
export const DisplayId: React.FC<MiniComponentsProps> = ({invoice, className}) => {
    return (
        <Typography tag={'div'} color={'dark'} size={'heading-s'} className={clsx('' + className)}>
            <Typography tag={'span'} color={'dark-grey'} size={'heading-s'}>#</Typography>{invoice.displayId}
        </Typography>
    );
};
export const DisplayDate: React.FC<MiniComponentsProps> = ({invoice, className}) => {
    return (
        <Typography tag={'div'} color={'dark-grey'} size={'heading-s-variant'} className={clsx('break-words w-32', className)}>
            Due {fns
                .format(
                    fns.addDays(new Date(invoice.invoiceDate), invoice.paymentTerms),"dd MMM yyyy"
                )
            }
        </Typography>
    );
};
export const DisplayName: React.FC<MiniComponentsProps> = ({invoice, className}) => {
    return (
        <Typography tag={'div'} color={'dark-grey'} size={'heading-s-variant'} className={clsx('break-words w-32', className)}>            {invoice.clientName}
        </Typography>
    );
};
export const DisplayPrice: React.FC<MiniComponentsProps> = (
    {invoice, className}
) => {
    return (
        <Typography tag={'div'} color={'dark-grey'} size={'heading-s-variant'} className={clsx('break-words w-16', className)}>
            {formatCurrency(invoice.itemList.reduce((acc, item) => acc + item.total, 0))}
        </Typography>
    );
};
export const DisplayStatus: React.FC<MiniComponentsProps> = ({invoice, className}) => {
    return (
        <InvoiceStatus status={invoice.status} className={clsx('', className)}/>
    );
};
export const DisplayLink: React.FC<MiniComponentsProps> = ({invoice, className}) => {
    return (
        <Link href={`/${invoice.id}`} className={clsx('', className)}>
            <Image src={"/assets/icon-arrow-right.svg"} alt={'See Details'} width="7" height="10" />
        </Link>
    );
};



export default observer(InvoiceItem);