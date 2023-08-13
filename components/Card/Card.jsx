import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductService from '@/services/ProductService';
import ProductCard from './productCards';
import 'globals.css'
import Header from '../header';
import Footer from '../footer';

const Card = ({query}) => {
  const [page, setPage] = useState('');
  const router = useRouter();

  useEffect(() => {
    update();
  }, [router.query.categoryType]);

  const update = async () => {
    const currentPage = router.query.page ? parseInt(router.query.page, 10) : 1;
    const size = 3;
    const { pathname, query } = router;
    if (pathname === '/') {
      const pageData = await ProductService.getAllInPage(currentPage, size);
      setPage(pageData);
    } else if (query.categoryType>-1) {
      const categoryId = query.categoryType || pathname.split('/')[2]; // Use query parameter or path segment
      //const categoryId=3;
      const categoryPageData = await ProductService.getCategoryInPage(parseInt(categoryId, 10), currentPage, size);
      setPage(categoryPageData);
      //setTitle(categoryPageData.category);
    }
  };
  return (
    <div>
      <Header/>

      {page && (
    <main className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {page.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
  </main>
      )}
        <Footer />
    </div>
  );
};
export default Card;
