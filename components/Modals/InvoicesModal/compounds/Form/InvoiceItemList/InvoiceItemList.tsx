'use client';
import * as z from "zod";
import {UseFieldArrayReturn, UseFormReturn} from "react-hook-form";
import Typography from "@/components/ui/typography/Typography";
import {Button} from "@/components/ui/button";
import {useEffect} from "react";
import {cn} from "@/lib/utils";
import InvoiceItem from "@/components/Modals/InvoicesModal/compounds/Form/InvoiceItemList/InvoiceItem";
import invoiceSchema from "@/formSchemas/invoiceSchema";

interface InvoiceItemProps {
    itemListControl: UseFieldArrayReturn<z.infer<typeof invoiceSchema>>
    form: UseFormReturn<z.infer<typeof invoiceSchema>>
}

const InvoiceItemList: React.FC<InvoiceItemProps> = ({form, itemListControl}) => {


    useEffect(() => {
        if (itemListControl.fields.length === 0) {
            add()
        }
    }, []);
    const add = () => {
        itemListControl.append({
            "quantity": 0,
            "name": "",
            "price": 0,
            "total": 0,
        })
    }

    function removeItem(index: number) {
        if(itemListControl.fields.length === 1) {
            return;
        }

        itemListControl.remove(index);
    }

    return <>
        <Typography tag={"h3"} color={"dark-blue"} size={"heading-s"}>
            Item List
        </Typography>

        <div className="space-y-4 ">
            {
                itemListControl.fields.map((field, index) => {
                    return (
                        <InvoiceItem index={index} form={form} field={field} onRemoveClick={() => removeItem(index)}/>
                    )
                })
            }
            {form.formState.errors?.itemList?.root?.message &&
                <p className={cn("text-sm font-medium text-light-red")}>{form.formState.errors?.itemList?.root?.message}</p>}
            <Button variant={'ghost'} className={'w-full'} type={'button'} onClick={add}>
                <Typography tag={"span"} color={"dark-grey"} size={"heading-s"}>
                    + Add New Item
                </Typography>
            </Button>
        </div>

    </>;
};

export default InvoiceItemList;