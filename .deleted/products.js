import axios from 'axios';
import ProductCard from '../components/Card/productCards';
import 'globals.css'
import Header from '../components/header';
import Footer from '../components/footer';


import React, { useEffect, useState } from 'react';
import ProductService from '@/services/ProductService';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Sayfa yüklendiğinde ürünleri almak için ProductService kullanıyoruz.
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // ProductService'den tüm ürünleri getiriyoruz.
      const productsData = await ProductService.getAllInPage(1, 4);
      setProducts(productsData); // Ürünleri state'e atıyoruz.
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  return (
    <div>
    <Header/>
    <main className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
  </main>
  <Footer />
    </div>
  );
};

export default ProductsPage;
/*
const Products = ({ products }) => {
  return (
    <div>
    <Header/>
    <main className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
  </main>
  <Footer />




  
  </div>
  );
};

export async function getServerSideProps() {
  //const response = await axios.get('https://fakestoreapi.com/products');
  //const response = await axios.get('http://timetoeat.herokuapp.com/api/product');
  const response = await axios.get('http://timetoeat.herokuapp.com/api/product', {
    params: {
      size: 15,
    },
  });

  const products = response.data.content;
  return {
    props: {
      products,
    },
  };
}

export default Products;
*/