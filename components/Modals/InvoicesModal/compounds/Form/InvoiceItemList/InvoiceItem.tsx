import {FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {clsx} from "clsx";
import {Input} from "@/components/ui/input";
import {FieldArrayWithId, UseFormReturn, useWatch} from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import invoiceSchema from "@/formSchemas/invoiceSchema";

type InvoiceItemProps = {
    index: number,
    form: UseFormReturn<z.infer<typeof invoiceSchema>>
    field: FieldArrayWithId<z.infer<typeof invoiceSchema>>
    onRemoveClick: () => void  
}
const InvoiceItem: React.FC<InvoiceItemProps> = ({index, form, field, onRemoveClick}) => {
    const values = useWatch({
        name: 'itemList',
        control: form.control,
    });
    const total = values[index].quantity * values[index].price;
    return (
        <div key={field.id} className={'flex flex-wrap tablet:flex-nowrap gap-2'}>
            <FormItem className={'flex-grow w-full  tablet:w-auto'}>
                <FormLabel smaller className={clsx({[`tablet:hidden`]: index != 0})}>Name</FormLabel>
                <FormControl>
                    <Input
                        key={field.id} {...form.register(`itemList.${index}.name` as const, {required: true})} />
                </FormControl>
                <FormMessage/>
            </FormItem>
            <FormItem className={'w-[15%] tablet:w-[80px] desktop:w-[48px]'}>
                <FormLabel smaller className={clsx({[`tablet:hidden`]: index != 0})}>Qty.</FormLabel>
                <FormControl>
                    <Input key={field.id} 
                           {...form.register(`itemList.${index}.quantity` as const, {
                                valueAsNumber: true,
                                required: true
                            })}
                    />
                </FormControl>
                <FormMessage/>
            </FormItem>
            <FormItem className={'w-[28%] tablet:w-[100px] desktop:w-[100px]'}>
                <FormLabel smaller className={clsx({[`tablet:hidden`]: index != 0})}>Price</FormLabel>
                <FormControl>
                    <Input key={field.id} {...form.register(`itemList.${index}.price` as const, {
                                valueAsNumber: true,
                                required: true
                            })}
                   />
                </FormControl>
                <FormMessage/>
            </FormItem>

            <FormItem className={'w-[28%] tablet:w-[100px] desktop:w-[100px]'}>
                <FormLabel smaller className={clsx({[`tablet:hidden`]: index != 0})}>Total</FormLabel>
                <FormControl>
                    <Input key={"total_" + index} value={isNaN(total) ? 0 : total} disabled={true}/>
                </FormControl>
            </FormItem>

            {
                <div className={'space-y-2 flex justify-center w-auto tablet:w-[85px] flex-col'}>
                    <FormLabel smaller className={"text-white"}>Actions</FormLabel>

                    <div className={'relative w-full'}>
                        <Image alt={"Remove Item"} src={'/assets/icon-delete.svg'} width={13} height={16} onClick={onRemoveClick}/>
                    </div>
                </div>
            }


        </div>
    );
};

export default InvoiceItem