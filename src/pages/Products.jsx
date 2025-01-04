
import FilterProduct from "../components/products/FilterProduct";
// import Searchbar from "../components/products/Searchbar";
import ShowMore from "../components/products/ShowMore";
import ShowProducts from "../components/products/ShowProducts";
import '../css/productPage.css'
const Products = () => {
  return(
    <>
    {/* <Searchbar/> */}
    <FilterProduct/>
    <ShowProducts/>
    <ShowMore/>
    </>
  );
}

export default Products;