import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/header/product/product-list";
import { data } from "react-router-dom";

const Homepage =  () => {
  return ( <>
   <ProductList data={sampleData.products} title="Newest Arrivals" limit={4}/>
  </> );
}
 
export default Homepage;