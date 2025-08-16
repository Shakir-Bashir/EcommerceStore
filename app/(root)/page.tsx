import ProductList from "@/components/shared/header/product/product-list";
import { getLatestProduct } from "@/lib/actions/products.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProduct();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default Homepage;
