import TourCard from "./Card";
import Header from '../UI/Header';
import Footer from '..//UI/Footer';

const Tour = () => {
  return (
    <>
      <Header />
      <div className="main">
        <TourCard />
      </div>
      <Footer />
    </>
  )
};

export default Tour;