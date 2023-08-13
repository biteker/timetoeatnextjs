import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL; // API URL'sini .env dosyasından alıyoruz

const ProductService = {
  getAllInPage: async (page, size) => {
    const url = `${apiUrl}/product?page=${page}&size=${size}`;
    try {
      const response = await axios.get(url);
      return response.data.content;
    } catch (error) {
      console.error('Get All Failed', error);
      return [];
    }
  },

  getCategoryInPage: async (categoryType, page, size) => {
    const url = `${apiUrl}/category/${categoryType}?page=${page}&size=${size}`;
    //const url = `${apiUrl}/category/0?page=1&size=1`;
    try {
      const response = await axios.get(url);
      return response.data.page.content;
    } catch (error) {
      console.error('Get Category Failed', error);
      return [];
    }
  },

  getDetail: async (id) => {
    const url = `${apiUrl}/product/${id}`;
    try {
      const response = await axios.get(url);
      return response.data.content;;
    } catch (error) {
      console.error('Get Detail Failed', error);
      return null;
    }
  },

  update: async (productInfo) => {
    const url = `${apiUrl}/seller/product/${productInfo.productId}/edit`;
    try {
      const response = await axios.put(url, productInfo);
      return response.data.content;;
    } catch (error) {
      console.error('Update Failed', error);
      return null;
    }
  },

  create: async (productInfo) => {
    const url = `${apiUrl}/seller/product/new`;
    try {
      const response = await axios.post(url, productInfo);
      return response.data.content;;
    } catch (error) {
      console.error('Create Failed', error);
      return null;
    }
  },

  delete: async (productInfo) => {
    const url = `${apiUrl}/seller/product/${productInfo.productId}/delete`;
    try {
      await axios.delete(url);
      return true;
    } catch (error) {
      console.error('Delete Failed', error);
      return false;
    }
  },
};

export default ProductService;
