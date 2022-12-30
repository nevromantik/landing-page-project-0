import React from "react";
import "./Layout.css";
import Hero from "../components/Hero";
import Section1 from "../components/sections/Section1";
import Table from "../components/table/Table";
import CardsAnimated from "../components/cardsAnimated/CardsAnimated";
import CardsContainer from "../components/cardscontainer/CardsContainer";
import GalleryCards from "../components/gallery/galleryCards";
import Gallery from "../components/gallery/Gallery";
import SectionParallax from "../components/sections/section3/sectionParallax";
import Footer from "../components/footer";
import Menu from "../components/side-menu/Menu";
const Layout = (props) => {
  return (
    <>
      <div className="lay">
        <Menu></Menu>
        <Hero></Hero>
        <Section1></Section1>
        <Table></Table>
        <CardsAnimated></CardsAnimated>
        <CardsContainer></CardsContainer>
        <Gallery></Gallery>
        <SectionParallax></SectionParallax>
        <Footer></Footer>
      </div>
    </>
  );
};
export default Layout;
