import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [foodDeliveryOwners, setFoodDeliveryOwners] = useState([]);
  const [groceryStoreProducts, setGroceryStoreProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL=import.meta.env.VITE_API_URL;
  
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        // Axios requests run in parallel using Promise.all
        const [foodRes, groceryRes] = await Promise.all([
          axios.get(`${baseURL}/api/owners/food-delivery`),
          axios.get(`${baseURL}/api/customer/products/grocery-store`),
        ]);

        if (foodRes.data.success) setFoodDeliveryOwners(foodRes.data.owners);
        else throw new Error('Error loading food delivery products');

        if (groceryRes.data.success) setGroceryStoreProducts(groceryRes.data.products);
        else throw new Error('Error loading grocery store products');
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
useEffect(()=>{
    fetchProducts();
},[])

  return (
    <ProductsContext.Provider
      value={{ foodDeliveryOwners, groceryStoreProducts, loading, error,fetchProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook
export const useProducts = () => useContext(ProductsContext);
