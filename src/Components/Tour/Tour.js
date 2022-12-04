import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


import TourCard from "./Card";
import Header from '../UI/Header';
import Footer from '..//UI/Footer';

import { fetchProducts } from "../../store/actions/travelPackage";

const Tour = () => {

  const dispatch = useDispatch();

  const [products, setProducts] = useState([])

  useEffect(() => {
    const products = async () => {
      try {
        const res = await dispatch(fetchProducts())
          .then(response => ({ response }))
          .catch(error => ({ error }))
        console.log(res.response.data)
        setProducts(res.response.data.products)
      } catch (error) {
        console.log('error adalah', error);
      }
    };
    products();
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="main">
        <div className="card-container">
          {
            products.map((product, index) => {
              return <TourCard
                product={product}
              />
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Tour;