import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import * as z from 'zod';
import { UseFormReturn } from 'react-hook-form';
import Typography from '@/components/ui/typography/Typography';
import BillFromPartial from '@/components/Modals/InvoicesModal/compounds/Form/StreetInfo';
import invoiceSchema from '@/formSchemas/invoiceSchema';

interface ClientInfoProps {
  form: UseFormReturn<z.infer<typeof invoiceSchema>>;
}

const ClientInfoPartial: React.FC<ClientInfoProps> = ({ form }) => {
  return (
    <>
      <Typography tag={'h3'} color={'dark-blue'} size={'heading-s'}>
        Bill To
      </Typography>

      <FormField
        control={form.control}
        name='clientName'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Client&apos;s Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='clientEmail'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Client&apos; Email</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <BillFromPartial
        form={form}
        options={{
          cityKey: 'clientCity',
          countryKey: 'clientCountry',
          streetAddressKey: 'clientStreetAddress',
          postCodeKey: 'clientPostalCode',
        }}
      />

      <FormField
        control={form.control}
        name='projectDescription'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Description</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default ClientInfoPartial;
