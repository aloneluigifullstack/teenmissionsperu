import React, { useState } from "react";
import * as bootstrap from "bootstrap";
import "../App.css";

import {
  FaCampground,
  FaUserTie,
  FaHandsHelping,
  FaWhatsapp,
} from "react-icons/fa";

import { FormCampista } from "./forms/FormCampista";
import { FormLider } from "./forms/FormLider";
import { FormVoluntario } from "./forms/FormVoluntario";

export const ModalRegistro = () => {
  const [tipo, setTipo] = useState("");

  const [loading, setLoading] = useState(false);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzd1-Y7nfs-73K7XmdHfFg73GBM_c_bJT4Z11GxNIhiwWy0hwYD-lm_QeZMgMU215F9/exec";

  const [form, setForm] = useState({
    tipo: "",

    nombre: "",
    apellido: "",
    celular: "",
    tipo_celular:"",

    documento: "",
    pais: "",
    departamento: "",

    iglesia: "",
    edad: "",

    proyecto: "",

    estadoCivil: "",
    hijos: "",

    especialidad: "",
    comentario: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setForm({
        ...form,
        especialidades: [...form.especialidades, value],
      });
    } else {
      setForm({
        ...form,
        especialidades: form.especialidades.filter((item) => item !== value),
      });
    }
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",

        mode: "no-cors",

        headers: {
          "Content-Type": "text/plain",
        },

        body: JSON.stringify({
          ...form,
          tipo,
        }),
      });

      alert("Registro enviado correctamente");

      // ✅ CERRAR MODAL
      const modalElement = document.getElementById("registroModal");

      const modalInstance = bootstrap.Modal.getInstance(modalElement);

      if (modalInstance) {
        modalInstance.hide();
      }

      // ✅ LIMPIAR BODY
      setTimeout(() => {
        document.body.classList.remove("modal-open");

        document.body.style.removeProperty("overflow");

        document.body.style.removeProperty("padding-right");

        document
          .querySelectorAll(".modal-backdrop")
          .forEach((el) => el.remove());
      }, 300);

      // ✅ RESET
      setForm({
        tipo: "",

        nombre: "",
        apellido: "",
        celular: "",
        tipo_celular:"",

        documento: "",
        pais: "",
        departamento: "",

        iglesia: "",
        edad: "",

        proyecto: "",

        estadoCivil: "",
        hijos: "",

        especialidad: "",
        comentario: "",
      });

      setTipo("");
    } catch (error) {
      alert("Error al enviar formulario");
    }

    setLoading(false);
  };

  return (
    <div className="modal fade" id="registroModal" tabIndex="-1">
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div
          className="modal-content border-0 shadow-lg"
          style={{
            borderRadius: "25px",
            overflow: "hidden",
          }}
        >
          {/* HEADER */}
          <div
            className="text-white p-4"
            style={{
              background: "linear-gradient(135deg,#9b2a92,#3d1042)",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="fw-bold">Registro Teen Missions Perú</h3>

                <p className="mb-0 opacity-75">Completa tu inscripción</p>
              </div>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>
          </div>

          {/* BODY */}
          <div className="modal-body p-4">
            {/* SELECTOR SIMPLE */}
            <div className="selector-inscripcion d-flex justify-content-center gap-3 mb-4 flex-wrap">
              <button
                type="button"
                className={`selector-btn ${
                  tipo === "campista" ? "selector-btn-active" : ""
                }`}
                onClick={() => setTipo("campista")}
              >
                Campista
              </button>

              <button
                type="button"
                className={`selector-btn ${
                  tipo === "lider" ? "selector-btn-active" : ""
                }`}
                onClick={() => setTipo("lider")}
              >
                Líder
              </button>

              <button
                type="button"
                className={`selector-btn ${
                  tipo === "voluntario" ? "selector-btn-active" : ""
                }`}
                onClick={() => setTipo("voluntario")}
              >
                Voluntario
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={enviarFormulario}>
              {tipo === "campista" && (
                <FormCampista form={form} handleChange={handleChange} />
              )}

              {tipo === "lider" && (
                <FormLider form={form} handleChange={handleChange} />
              )}

              {tipo === "voluntario" && (
                <FormVoluntario
                  form={form}
                  handleChange={handleChange}
                  handleCheckbox={handleCheckbox}
                />
              )}

              {tipo && (
                <div className="d-flex justify-content-between align-items-center mt-4">
                  {/* WHATSAPP */}
                  <a
                    href="https://wa.me/51999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success rounded-pill px-4"
                  >
                    <FaWhatsapp className="me-2" />
                    WhatsApp
                  </a>

                  {/* BOTON */}
                  <button
                    type="submit"
                    className="btn btn-lg text-white rounded-pill px-5"
                    style={{
                      background: "linear-gradient(135deg,#9b2a92,#3d1042)",
                      border: "none",
                    }}
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "Guardar Registro"}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
