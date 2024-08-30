import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Feature from "./Feature";
import FeatureProducts from "./FeatureProducts";
import Banner from "./Banner";
import NewArrivals from "./NewArrivals";
import OfferBanners from "./OfferBanners";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

export default function () {
  return (
    <React.Fragment>
      <Header></Header>
      <Hero></Hero>
      <Feature></Feature>
      <FeatureProducts></FeatureProducts>
      <Banner></Banner>
      <NewArrivals></NewArrivals>
      <OfferBanners></OfferBanners>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </React.Fragment>
  );
}
