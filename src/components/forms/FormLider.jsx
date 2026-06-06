import React from "react";

export const FormLider = ({ form, handleChange }) => (
  <div className="row">
    <div className="col-12">
      <div
        className="p-4 rounded-4 shadow-sm"
        style={{
          background: "linear-gradient(135deg,#eef4ff,#ffffff)",
          border: "3px solid rgba(13,110,253,0.2)",
        }}
      >
        <h5
          className="fw-bold"
          style={{
            color: "#0d6efd",
          }}
        >
          Información para Líderes
        </h5>

        <p className="mb-0 text-muted">
          Participa de 4 etapas del Programa Misionero, Seminario (5dias), 
          Entrenamiento (11dias) Proyecto o viaje (20dias), Reporte (3dias), 
          lidera los equipos y desarrolla un trabajo pastoral y misionero. 
          El lider debe ser mayor de 22 años.
        </p>
      </div>
    </div>

    {/* NOMBRE */}
    <div className="col-md-6 mb-3">
      <label className="form-label fw-semibold">Nombre</label>

      <input
        type="text"
        className="form-control form-control-lg rounded-4"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />
    </div>

    {/* APELLIDO */}
    <div className="col-md-6 mb-3">
      <label className="form-label fw-semibold">Apellido</label>

      <input
        type="text"
        className="form-control form-control-lg rounded-4"
        name="apellido"
        value={form.apellido}
        onChange={handleChange}
        required
      />
    </div>

    {/* CELULAR */}
    <div className="col-md-6 mb-3">
      <label className="form-label fw-semibold">Celular</label>

      <input
        type="text"
        className="form-control form-control-lg rounded-4"
        name="celular"
        value={form.celular}
        onChange={handleChange}
      />
    </div>

    {/* DNI */}
    <div className="col-md-6 mb-3">
      <label className="form-label fw-semibold">DNI / Pasaporte</label>

      <input
        type="text"
        className="form-control form-control-lg rounded-4"
        name="documento"
        value={form.documento}
        onChange={handleChange}
      />
    </div>

    {/* PAIS */}
    <div className="col-md-6 mb-3">
      <label className="form-label fw-semibold">País</label>

      <input
        type="text"
        className="form-control form-control-lg rounded-4"
        name="pais"
        value={form.pais}
        onChange={handleChange}
      />
    </div>

    {/* DEPARTAMENTO */}
    <div className="col-md-6 mb-3">
      <label className="form-label fw-semibold">Departamento</label>

      <input
        type="text"
        className="form-control form-control-lg rounded-4"
        name="departamento"
        value={form.departamento}
        onChange={handleChange}
      />
    </div>

    {/* IGLESIA */}
    <div className="col-md-6 mb-3">
      <label className="form-label fw-semibold">Iglesia</label>

      <input
        type="text"
        className="form-control form-control-lg rounded-4"
        name="iglesia"
        value={form.iglesia}
        onChange={handleChange}
      />
    </div>

    {/* EDAD */}
    <div className="col-md-6 mb-3">
      <label className="form-label fw-semibold">Edad</label>

      <input
        type="number"
        className="form-control form-control-lg rounded-4"
        name="edad"
        value={form.edad}
        onChange={handleChange}
      />
    </div>

    {/* ESTADO CIVIL */}
    <div className="col-md-6 mb-3">
      <label className="form-label fw-semibold">Estado Civil</label>

      <select
        className="form-select form-select-lg rounded-4"
        name="estadoCivil"
        value={form.estadoCivil}
        onChange={handleChange}
      >
        <option value="">Seleccione</option>

        <option>Soltero</option>
        <option>Casado</option>
      </select>
    </div>

    {/* HIJOS */}
    <div className="col-md-6 mb-3">
      <label className="form-label fw-semibold">Número de Hijos</label>

      <input
        type="number"
        className="form-control form-control-lg rounded-4"
        name="hijos"
        value={form.hijos}
        onChange={handleChange}
      />
    </div>

    {/* INFO */}
  </div>
);
