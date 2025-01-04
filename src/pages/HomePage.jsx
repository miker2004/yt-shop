import ProductType from "../components/homepage/ProductType";
import FeaturedProducts from "../components/homepage/FeaturedProducts";
import TopHome from "../components/homepage/TopHome";
import FollowMe from "../components/homepage/FollowMe";
import ReviewsHome from "../components/homepage/ReviewsHome";
import SupportOffer from "../components/homepage/SupportOffer";
import './css/HomePage.css'

const HomePage = () => {
  return(
    <>
    <TopHome />
    <ProductType />
    <FeaturedProducts />
    <ReviewsHome />
    <SupportOffer/>
    <FollowMe />
    </>
  );
}

export default HomePage;