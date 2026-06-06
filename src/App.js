import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import CardsSection from "./components/CardsSection";
import { InfoSection } from "./components/InfoSection";
import { FAQ } from "./components/FAQ";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
import MapaPeru from "./components/MapaPeru";
import { ModalRegistro } from "./components/ModalRegistro";

export default function App() {
  return (
    <>
      <Navbar />

      <section id="inicio">
        <Hero />
      </section>

      <section id="formacion">
        <CardsSection />
      </section>

      <section id="publicaciones">
        <InfoSection/>
      </section>

      <section id="proyectos">
        <MapaPeru />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="contacto">
        <Form />
      </section>
      <ModalRegistro />
      <Footer/>
    </>
  );
}
