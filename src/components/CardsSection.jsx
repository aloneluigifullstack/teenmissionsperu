import React from "react";
import { Card } from "./Card";

export default function CardsSection() {
  const cards = [
    {
      title: "PROGRAMAS DE ENTRENAMIENTO MISIONERO",

      desc: "Capacitación práctica y espiritual para jóvenes que desean servir en proyectos misioneros nacionales e internacionales.",

      image:
        "https://thumbs-us-east-1.myalbum.io/photo/1k0/6221a7c8-89a0-439b-94d4-9a12f32ba52b.jpg",

      variant: "purple",

      buttonText: "Inscribirme al campamento",
    },

    {
      title: "ACADEMIA MISIONERA",

      desc: "Programa de formación continua para fortalecer liderazgo cristiano, discipulado y servicio transcultural.",

      image:
        "https://thumbs-us-east-1.myalbum.io/photo/1k0/62df36bb-b612-40da-a352-d9f662036dbb.jpg",

      variant: "green",
    },
  ];

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2
          className="fw-bold"
          style={{
            color: "#f6f0f7",
          }}
        >
          Formación y Capacitación
        </h2>

        <p className="text-white">
          Preparando jóvenes para impactar vidas y transformar comunidades.
        </p>
      </div>

      <div className="row g-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
