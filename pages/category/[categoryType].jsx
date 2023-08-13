import { useRouter } from 'next/router';
import ProductList from '@/components/Card/Card'; // Ürün listesi bileşeni

const CategoryTypePage = () => {
  const router = useRouter();

  return (
      <ProductList/>
  );
};

export default CategoryTypePage;
