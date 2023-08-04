import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { PrismaInvoice } from '@/interfaces/prisma';
import { RootStore } from '@/store/rootStore';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

type Response = {
  message: string;
};
export default (invoiceId: number, rootStore: RootStore) => {
  const router = useRouter();
  const handleResponse = async (request: AxiosPromise<Response>, redirectToHome = false) => {
    try {
      rootStore.addLoader('INVOICE_ACTION');
      const response = await request;

      toast(response.data.message, {
        type: 'success',
      });
      if (redirectToHome) {
        router.push('/');
      }
      router.refresh();
    } catch (e) {
      toast('Operation failed', {
        type: 'error',
      });
    } finally {
      rootStore.removeLoader('INVOICE_ACTION');
    }
  };

  return {
    delete: async () => {
      await handleResponse(axios.delete(`/api/invoices/${invoiceId}`), true);
    },
    markAsPaid: async (status: PrismaInvoice['status']) => {
      await handleResponse(axios.put(`/api/invoices/${invoiceId}/changeStatus`, { status }));
    },
  };
};
