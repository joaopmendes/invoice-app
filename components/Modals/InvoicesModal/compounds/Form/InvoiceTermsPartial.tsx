'use client';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import * as z from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import invoiceSchema from '@/formSchemas/invoiceSchema';
interface InvoiceTermsProps {
  form: UseFormReturn<z.infer<typeof invoiceSchema>>;
}
const paymentTermsOptions = [
  { label: 'Net 1 Day', value: 1 },
  { label: 'Net 7 Days', value: 7 },
  { label: 'Net 14 Days', value: 14 },
  { label: 'Net 30 Days', value: 30 },
] as const;
const InvoiceTermsPartial: React.FC<InvoiceTermsProps> = ({ form }) => {
  return (
    <>
      <div className='grid grid-cols-1 gap-2 tablet:grid-cols-2'>
        <FormField
          control={form.control}
          name='invoiceDate'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Invoice Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal dark:border-[#1E2139] dark:bg-dark-01 dark:text-white',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50 z-30 dark:text-white' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0 border-light-grey' align='start'>
                  <Calendar
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className={
                      'bg-pure-white dark:border-[#1E2139] dark:bg-dark-01 dark:text-white'
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='paymentTerms'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Payment Term</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={cn(
                        'w-[200px] justify-between dark:border-[#1E2139] dark:bg-dark-01 dark:text-white',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value
                        ? paymentTermsOptions.find(
                            (paymentTermOption) => paymentTermOption.value === field.value,
                          )?.label
                        : 'Select payment term'}
                      <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50 dark:text-white' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0 bg-white dark:border-[#1E2139] dark:bg-dark-01 dark:text-white'>
                  <Command>
                    <CommandInput
                      placeholder='Search...'
                      className={'dark:border-[#1E2139] dark:bg-dark-01 dark:text-white'}
                    />
                    <CommandEmpty>No payment term Found</CommandEmpty>
                    <CommandGroup>
                      {paymentTermsOptions.map((paymentTerm) => (
                        <CommandItem
                          value={paymentTerm.label}
                          key={paymentTerm.value}
                          className={'dark:border-[#1E2139] dark:bg-dark-01 dark:text-white'}
                          onSelect={() => {
                            form.setValue('paymentTerms', paymentTerm.value);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              paymentTerm.value === field.value ? 'opacity-100' : 'opacity-0',
                            )}
                          />
                          {paymentTerm.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default InvoiceTermsPartial;
