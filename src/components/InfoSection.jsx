import React from "react";

export const InfoSection = () => {
  const posts = [
    {
      title: "Experiencias Misioneras que Transforman Vidas",
      text: `
        Descubre cómo jóvenes alrededor del mundo participan en programas
        misioneros para impactar comunidades y fortalecer su fe.
        Cada experiencia representa una oportunidad única de crecimiento
        espiritual, liderazgo y servicio.
      `,
      image:
        "https://thumbs-us-east-1.myalbum.io/photo/1k0/6221a7c8-89a0-439b-94d4-9a12f32ba52b.jpg",
    },

    {
      title: "Entrenamiento y Preparación para Nuevos Misioneros",
      text: `
        Nuestro programa de capacitación prepara a cada participante
        con herramientas espirituales, emocionales y prácticas para
        afrontar desafíos reales en diferentes partes del mundo.
      `,
      image:
        "https://thumbs-us-east-1.myalbum.io/photo/1k0/62df36bb-b612-40da-a352-d9f662036dbb.jpg",
    },
  ];

  return (
    <section
      className="container-fluid py-5"
      style={{
        background:
          "linear-gradient(180deg, rgba(155,42,146,1) 0%, rgba(61,16,66,1) 100%)",
      }}
    >
      <div className="container">

        {/* TITULO GENERAL */}
        <div className="text-center text-white mb-5">
          <h1 className="fw-bold display-5">
            Últimas Publicaciones
          </h1>

          <p
            className="mx-auto"
            style={{
              maxWidth: "700px",
              opacity: 0.9,
            }}
          >
            Historias, experiencias y entrenamiento misionero que inspiran
            a jóvenes a impactar vidas alrededor del mundo.
          </p>
        </div>

        {/* PUBLICACIONES */}
        {posts.map((post, index) => (
          <div
            key={index}
            className={`row align-items-center g-5 mb-5 ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >

            {/* IMAGEN */}
            <div className="col-lg-6">

              <div
                className="overflow-hidden shadow-lg"
                style={{
                  borderRadius: "30px",
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="img-fluid w-100"
                  style={{
                    height: "450px",
                    objectFit: "cover",
                    transition: "0.4s",
                  }}
                />
              </div>

            </div>

            {/* CONTENIDO */}
            <div className="col-lg-6 text-white">

              <span
                className="badge px-3 py-2 mb-3"
                style={{
                  background: "rgba(12, 1, 8, 0.15)",
                  fontSize: "14px",
                  borderRadius: "30px",
                }}
              >
                News
              </span>

              <h2
                className="fw-bold mb-4"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: "1.2",
                }}
              >
                {post.title}
              </h2>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.9",
                  opacity: 0.92,
                }}
              >
                {post.text}
              </p>

              {/* BOTONES */}
              <div className="d-flex flex-wrap gap-3 mt-4">

                <button
                  className="btn px-4 py-2 rounded-pill fw-semibold"
                  style={{
                    background: "white",
                    color: "#3d1042",
                    border: "none",
                  }}
                >
                  Leer más
                </button>

                <button
                  className="btn px-4 py-2 rounded-pill text-white"
                  style={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Compartir
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};