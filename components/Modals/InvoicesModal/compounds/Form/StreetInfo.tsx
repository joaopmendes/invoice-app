import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import * as z from "zod";
import {UseFormReturn} from "react-hook-form";
import invoiceSchema from "@/formSchemas/invoiceSchema";

interface StreetInfoProps {
    form: UseFormReturn<z.infer<typeof invoiceSchema>>
    options: {
        streetAddressKey: string
        cityKey: string
        postCodeKey: string
        countryKey: string
    }
}

const StreetInfo: React.FC<StreetInfoProps> = ({form, options}) => {
    return <>
        <FormField
            control={form.control}
            name={options.streetAddressKey as keyof typeof form.formState.defaultValues}
            render={({field}) => (
                <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                        <Input {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
        <div className="grid grid-cols-1 gap-2 tablet:grid-cols-3">
            <FormField
                control={form.control}
                name={options.cityKey as keyof typeof form.formState.defaultValues}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name={options.postCodeKey as keyof typeof form.formState.defaultValues}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Post Code</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name={options.countryKey as keyof typeof form.formState.defaultValues}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
        </div>
    </>;
}

export default StreetInfo;