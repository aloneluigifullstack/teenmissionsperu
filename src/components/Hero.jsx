import React, { useEffect, useState } from "react";

export const Hero = () => {
  const images = [
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/43388a08-d14d-4933-8284-bc0303d36d4d.jpg",
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000); // cambia cada 10 segundos

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="text-white d-flex align-items-center"
      style={{
        height: "70vh",
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 3s ease-in-out",
        marginTop: "110px"
      }}
    >
      <div
        className="container text-center text-white p-3 rounded-4"
      >
        <h1 className="display-5 fw-bold">
          Teen  Missions  Perú
        </h1>
        <p></p>
        <button
          className="btn btn-outline-modern"
          data-bs-toggle="modal"
          data-bs-target="#registroModal"
        >
          INSCRIBIRSE
        </button>
      </div>
    </div>
  );
};
