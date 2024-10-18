// import Image from "next/image";
import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import Carousel from "./_components/Carousel";
import OfferBanner from "./_components/OfferBanner";
import Explore from "./_components/Explore";
import Brands from "./_components/Brands";
import Product from "./_components/Products";

export default function Home() {
  return (
    <>
      <div className="h-full bg-[#E7E7E3] w-full pt-10 flex flex-col">
        <Header/>
        <Carousel/>
        <OfferBanner/>
        <Explore/>
        <Brands/>
        <Product/>
        <Footer/>

      </div>
    </>
  );
}
