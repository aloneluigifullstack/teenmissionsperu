import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export const Form = () => (
  <section
    id="contacto"
    className="py-5"
    style={{
      background:
        "linear-gradient(135deg, #0e0110 0%, #140312 50%, #2e7d32 100%)",
      color: "white",
    }}
  >
    <div className="container">
      <div className="row g-5 align-items-start">
        {/* SOBRE NOSOTROS */}
        <div className="col-lg-5">
          <h2 className="fw-bold mb-4">Sobre Teen Missions Perú</h2>

          <p
            style={{
              lineHeight: "1.5",
              textAlign: "justify",
            }}
          >
            Teen Missions Perú es un ministerio comprometido con la formación,
            capacitación y movilización de jóvenes con pasión por Dios y por las
            misiones. A través de programas de entrenamiento misionero,
            academias, proyectos comunitarios y experiencias de servicio,
            buscamos preparar una generación que impacte vidas y transforme
            comunidades llevando el evangelio donde Dios los llame.
          </p>

          <div className="d-flex gap-3 mt-4">
            <a href="https://www.facebook.com/TMIP1/" className="social-link text-white">
              <FaFacebook />
            </a>

            <a href="https://www.instagram.com/teenmissionsperu/" className="social-link text-white">
              <FaInstagram />
            </a>

            <a href="https://www.youtube.com/@teenmissionsperu" className="social-link text-white">
              <FaYoutube />
            </a>

            <a href="https://www.tiktok.com/@teenmissionsperu" className="social-link text-white">
              <FaTiktok />
            </a>

            <a href="https://wa.me/51987706440" className="social-link text-white">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* CONTACTO */}
        <div className="col-lg-4">
          <h3 className="fw-bold mb-4">Información de Contacto</h3>

          <div className="mb-4">
            <h6 className="fw-bold">
              <FaMapMarkerAlt className="me-2" />
              Ubicación
            </h6>

            <p className="mb-0">Pucallpa, Ucayali, Perú</p>
          </div>

          <div className="mb-4">
            <h6 className="fw-bold">
              <FaPhoneAlt className="me-2" />
              Celular
            </h6>

            <p className="mb-0">+51 999 999 999</p>
          </div>

          <div className="mb-4">
            <h6 className="fw-bold">
              <FaWhatsapp className="me-2" />
              WhatsApp
            </h6>

            <p className="mb-0">+51 999 999 999</p>
          </div>

          <div>
            <h6 className="fw-bold">
              <FaEnvelope className="me-2" />
              Correo
            </h6>

            <p className="mb-0">contacto@teenmissionsperu.org</p>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="col-lg-3">
          <div
            className="p-4 rounded-4 shadow"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h4 className="fw-bold mb-3">Suscríbete</h4>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Correo electrónico"
            />

            <button
              className="btn w-100 text-white"
              style={{
                background: "linear-gradient(135deg,#2e7d32,#66bb6a)",
                border: "none",
              }}
            >
              Suscribirme
            </button>
          </div>
        </div>
      </div>

      <hr
        className="my-5"
        style={{
          borderColor: "rgba(255,255,255,.2)",
        }}
      />
    </div>
  </section>
);
