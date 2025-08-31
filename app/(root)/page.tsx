import ProductList from "@/components/shared/header/product/product-list";
import {
  getLatestProduct,
  getFeaturedProducts,
} from "@/lib/actions/products.actions";
import ProductsCarousel from "@/components/shared/header/product/product-carousel";
import ViewAllProductButton from "@/components/view-all-product-buttons";
import IconBoxes from "@/components/icon-boxes";
import DealCountdown from "@/components/deal-countdown";

const Homepage = async () => {
  const latestProducts = await getLatestProduct();
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductsCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
      <ViewAllProductButton />
      <DealCountdown />
      <IconBoxes />
    </>
  );
};

export default Homepage;
