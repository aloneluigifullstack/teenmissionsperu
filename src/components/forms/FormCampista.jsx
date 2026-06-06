import React from "react";

export const FormCampista = ({ form, handleChange }) => (
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
          Información para Campistas
        </h5>

        <p className="mb-0 text-muted">
          Participa de las 3 etapas del Programa Misionero, Entrenamiento
          (11dias), Proyecto o viaje (20dias), Reporte (3dias) Edades: 13-20
          años.
        </p>
      </div>
    </div>

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

    <div className="col-md-6 mb-3">
      <label className="form-label fw-semibold">Apellido</label>

      <input
        type="text"
        className="form-control form-control-lg rounded-4"
        name="apellido"
        value={form.apellido}
        onChange={handleChange}
      />
    </div>

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

    <div className="col-md-6 mb-3">
      <label className="form-label fw-semibold">Tipo de Celular</label>

      <select
        className="form-select form-select-lg rounded-4"
        name="tipo_celular"
        value={form.tipo_celular}
        onChange={handleChange}
      >
        <option value="">Tipo</option>

        <option>Personal</option>
        <option>Apoderado</option>
        
      </select>
    </div>
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

    <div className="col-12 mb-4">
      <label className="form-label fw-semibold">Proyecto Misionero</label>

      <select
        className="form-select form-select-lg rounded-4"
        name="proyecto"
        value={form.proyecto}
        onChange={handleChange}
      >
        <option value="">Seleccione un proyecto</option>

        <option>Tumbes</option>
        <option>Tacna</option>
        <option>Puno</option>
        <option>Arequipa</option>
      </select>
    </div>

    {/* PAGO */}
    <div className="col-12">
      <div
        className="p-4 rounded-4 text-center shadow-sm"
        style={{
          background: "linear-gradient(135deg,#f5e6f5,#ffffff)",
          border: "2px dashed #9b2a92",
        }}
      >
        <h5
          className="fw-bold mb-2"
          style={{
            color: "#9b2a92",
          }}
        >
          Separa tu cupo
        </h5>

        <p className="mb-1">Pago inicial:</p>

        <h3 className="fw-bold">S/20</h3>

        <p className="mb-1">Yape / Plin:</p>

        <h4
          className="fw-bold"
          style={{
            color: "#9b2a92",
          }}
        >
          999 999 999
        </h4>
      </div>
    </div>
  </div>
);
