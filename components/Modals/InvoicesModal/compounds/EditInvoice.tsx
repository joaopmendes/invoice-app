'use client';
import Typography from '@/components/ui/typography/Typography';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';
import invoiceSchema from '@/formSchemas/invoiceSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import StreetInfo from '@/components/Modals/InvoicesModal/compounds/Form/StreetInfo';
import ClientInfoPartial from '@/components/Modals/InvoicesModal/compounds/Form/ClientinfoPartial';
import InvoiceTermsPartial from '@/components/Modals/InvoicesModal/compounds/Form/InvoiceTermsPartial';
import InvoiceItemList from '@/components/Modals/InvoicesModal/compounds/Form/InvoiceItemList/InvoiceItemList';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { observer } from 'mobx-react';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/Loader';
import { useRouter } from 'next/navigation';
import invoicesModalStore from '@/store/invoicesModalStore';
import translateInvoiceToFromFields from '@/lib/translateInvoiceToFromFields';
import type { PrismaInvoiceWithItems } from '@/interfaces/prisma';

type EditInvoiceProps = {
  invoice: PrismaInvoiceWithItems;
};

const EditInvoice: React.FC<EditInvoiceProps> = ({ invoice }) => {
  const form = useForm<z.infer<typeof invoiceSchema>>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: translateInvoiceToFromFields(invoice),
    resetOptions: {
      keepDirtyValues: true, // user-interacted input will be retained
      keepErrors: true, // input errors will be retained with value update
    },
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const itemListControl = useFieldArray({
    control: form.control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'itemList', // unique name for your Field Array
    rules: {
      required: true,
      minLength: 1,
    },
  });

  async function onSubmit(data: z.infer<typeof invoiceSchema>) {
    try {
      setIsLoading(true);
      await axios.put('/api/invoices', data);

      toast('Invoice created successfully', {
        type: 'success',
      });

      invoicesModalStore.closeInvoicesModal();
      router.refresh();
    } catch (e) {
      console.log(e);
      toast('Something went wrong!', {
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  }
  console.log(form.formState.errors);
  return (
    <>
      <Typography size={'heading-m'} color={'dark'} tag={'h2'}>
        Edit{' '}
        <Typography tag={'span'} color={'dark-grey'} size={'heading-m'}>
          #
        </Typography>
        {invoice.displayId}
      </Typography>
      <div className={'mt-10 h-full'}>
        {isLoading ? (
          <div className={'w-full h-[80%] flex justify-center items-center'}>
            <Loader />
          </div>
        ) : (
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
                <Typography tag={'h3'} color={'dark-blue'} size={'heading-s'}>
                  Bill From
                </Typography>
                <StreetInfo
                  form={form}
                  options={{
                    cityKey: 'fromCity',
                    countryKey: 'fromCountry',
                    streetAddressKey: 'fromStreetAddress',
                    postCodeKey: 'fromPostalCode',
                  }}
                />

                <ClientInfoPartial form={form} />

                <InvoiceTermsPartial form={form} />

                <InvoiceItemList itemListControl={itemListControl} form={form} />

                <div className='sticky py-10 bottom-0 left-0 bg-pure-white flex justify-between w-full gap-3 bottom-[80px] desktop:bottom-[0px] dark:bg-[#141625]'>
                  <Button
                    variant={'ghost'}
                    className={'justify-self-start'}
                    type={'button'}
                    onClick={() => invoicesModalStore.closeInvoicesModal()}
                  >
                    <Typography tag={'span'} color={'dark-grey'} size={'heading-s'}>
                      Cancel
                    </Typography>
                  </Button>
                  <Button type='submit' className={'px-8'}>
                    Save & Send
                  </Button>
                </div>

                <div className='h-20 tablet:h-0'></div>
              </form>
            </Form>
          </>
        )}
      </div>
    </>
  );
};

export default observer(EditInvoice);
