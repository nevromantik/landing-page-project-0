import "./App.css";
import React from "react";
import Layout from "./layout/Layout";
import Hero from "./components/Hero";
import Section1 from "./components/sections/Section1";
import Table from "./components/table/Table";
import CardsAnimated from "./components/cardsAnimated/CardsAnimated";
import Gallery from "./components/gallery/Gallery";
import CardsContainer from "./components/cardscontainer/CardsContainer";
import Menu from "./components/side-menu/Menu";
import SectionParallax from "./components/sections/section3/sectionParallax";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Menu></Menu>
      <Hero></Hero>
      <Section1></Section1>
      <Table></Table>
      <CardsAnimated></CardsAnimated>
      <CardsContainer></CardsContainer>
      <Gallery></Gallery>
      <SectionParallax></SectionParallax>
      <Footer></Footer>
    </>
  );
}

export default App;
