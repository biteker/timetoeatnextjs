import axios from 'axios';
import ProductCard from '../components/Card/productCards';
import './globals.css'

const Products = ({ products }) => {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
        </div>
      </main>
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
  