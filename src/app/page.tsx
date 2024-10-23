// import Image from "next/image";
import Carousel from "./_components/Carousel";
import OfferBanner from "./_components/OfferBanner";
import Explore from "./_components/Explore";
import Brands from "./_components/Brands";
import Product from "./_components/Products";
import { frontendApi } from "./api/frontendApi";

export default async function Home() {

  const response = await frontendApi.getHomePageData()
  const brand = response.data.data.brand
  const category = response.data.data.category
  const products = response.data.data.products
  const offerProducts = response.data.data.offerProduct
  const productBySubCategory = response.data.data.productBySubCategory.subCategoryProduct
  const response1 = await frontendApi.getBannerCarousal()
  const carousel = response1.data.data

  // console.log('first::::::::::::',brand)
  // console.log(response.data.data.category)
  // console.log(productBySubCategory)

  return (
    <>
      <div className=" bg-[#E7E7E3]">
        <Carousel carousel={carousel}/>
        <OfferBanner products={products}/>
        <Explore  category={category}/>
        <Brands 
        brands={brand}
        />
        <Product offerProducts={offerProducts} subCategoryProducts={productBySubCategory}/>

      </div>
    </>
  );
}
