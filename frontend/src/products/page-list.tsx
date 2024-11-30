import { columns } from './columns';
import { DataTable } from './data-table';
import { Product } from '@/types/product.type';
import { useAxios } from '@/hooks/useAxios';

export default function ProductList() {
  const [loading, data, error] = useAxios<Product[]>({
    method: 'GET',
    url: 'http://localhost:3001/products',
  });

  if (loading) return <p>Loading ....</p>;

  if (error !== '') return <p>{error}</p>;

  if (!data || data.length === 0) return <p>No Records</p>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
