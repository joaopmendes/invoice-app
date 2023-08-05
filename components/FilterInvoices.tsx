'use client'
import {
  DropdownMenu, DropdownMenuCheckboxItem,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import Typography from '@/components/ui/typography/Typography';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
type Checked = DropdownMenuCheckboxItemProps["checked"]


export const FilterInvoices = () => {
  const params = useSearchParams();
  const router = useRouter();
  
  const onCheckedChange = (param: string) => (checked: Checked) => { 
    let newSearchParams = new URLSearchParams();
    
    if (param == 'draft') {
      newSearchParams.set('draft', checked?.toString() || "false");
    } else {
      newSearchParams.set('draft', params.get('draft') || "false");
    }
    if (param == 'paid') {
      newSearchParams.set('paid', checked?.toString() || "false");
    } else {
      newSearchParams.set('paid', params.get('paid') || "false");
    }
    if (param == 'pending') {
      newSearchParams.set('pending', checked?.toString() || "false");
    }
    else {
      newSearchParams.set('pending', params.get('pending') || "false");
    }
    
    router.push('/?' + newSearchParams.toString());
    router.refresh();
  }
  
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className={'flex items-center gap-2'}> 
          <Typography tag={'span'} color={'dark'} size={'heading-s-variant'}>Filter by status</Typography> <Image src={'/assets/icon-arrow-down.svg'} width="11" height="7" alt={"Arrow Down"}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={'bg-pure-white border-none dark:bg-dark dark:text-white'}>
          <DropdownMenuCheckboxItem
            checked={params.get('draft')=== 'true'}
            onCheckedChange={onCheckedChange('draft')}
          >
            Draft
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={params.get('paid')=== 'true'}
            onCheckedChange={onCheckedChange('paid')}
          >
            Paid
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={params.get('pending')=== 'true'}
            onCheckedChange={onCheckedChange('pending')}
          >
            Pending
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};