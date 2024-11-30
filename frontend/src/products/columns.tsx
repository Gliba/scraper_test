'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Product } from '@/types/product.type';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      console.log(row);

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Show Product</Button>
          </DialogTrigger>
          <DialogContent className="bg-white sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>{row.original.name}</DialogTitle>
              <DialogDescription>
                <img src={row.original.image} />
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p>{row.original.description}</p>
            </div>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
