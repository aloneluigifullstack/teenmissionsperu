import React from "react";
import logo from "../assets/logo_TMP.png";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export const Navbar = () => (
  <nav
    className="navbar navbar-expand-xl navbar-dark fixed-top"
    style={{
      background: "rgba(0,0,0,0.35)",
      zIndex: 1000,
    }}
  >
    <div className="container">

      {/* LOGO */}

      <a className="navbar-brand">
        <img src={logo} alt="Teen Missions Perú" width="120" />
      </a>

      {/* MENU MOVIL */}

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="menu"
      >

        {/* MENU */}

        <ul className="navbar-nav mx-auto">

          <li className="nav-item">
            <a className="nav-link fw-semibold" href="#inicio">
              Inicio
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-semibold" href="#formacion">
              Formación
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-semibold" href="#publicaciones">
              Publicaciones
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-semibold" href="#proyectos">
              Mapa de Proyectos
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-semibold" href="#faq">
              Preguntas Frecuentes
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-semibold" href="#contacto">
              Contacto
            </a>
          </li>

        </ul>

        {/* REDES */}

        <div className="social-icons d-flex align-items-center gap-3">

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaFacebook />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaYoutube />
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaTiktok />
          </a>

          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>

    </div>
  </nav>
);