import React from "react";

export const FormVoluntario = ({
  form,
  handleChange,
}) => {

  const especialidades = [

    "Cocina",
    "Albañilería",
    "Electricidad",
    "Mecánica",
    "Chofer",
    "Limpieza",
    "Fotografía",
    "Multimedia",
    "Enfermería",
    "Músico",
    "Social Media",
    "Seguridad",

  ];

  return (

    <div className="row">
         
       <div className="col-12">

      <div
        className="p-4 rounded-4 shadow-sm"
        style={{
          background:
            "linear-gradient(135deg,#eef4ff,#ffffff)",
          border:
            "3px solid rgba(13,110,253,0.2)",
        }}
      >

        <h5
          className="fw-bold"
          style={{
            color: "#0d6efd",
          }}
        >
          Información para Voluntarios
        </h5>

        <p className="mb-0 text-muted">
         Participa y colabora en las diferentes actividades durante, el seminario, 
         entrenamiento y reporte, no participa del proyecto o viaje, su trabajo 
         suma a la organización del evento. mayores de 22 años 
         y puede elegir en que etapa participar.
        </p>

      </div>

    </div>
      {/* NOMBRE */}
      <div className="col-md-6 mb-3">

        <label className="form-label fw-semibold">
          Nombre
        </label>

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

        <label className="form-label fw-semibold">
          Apellido
        </label>

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

        <label className="form-label fw-semibold">
          Celular
        </label>

        <input
          type="text"
          className="form-control form-control-lg rounded-4"
          name="celular"
          value={form.celular}
          onChange={handleChange}
        />

      </div>

      {/* IGLESIA */}
      <div className="col-md-6 mb-3">

        <label className="form-label fw-semibold">
          Iglesia
        </label>

        <input
          type="text"
          className="form-control form-control-lg rounded-4"
          name="iglesia"
          value={form.iglesia}
          onChange={handleChange}
        />

      </div>

      {/* ESPECIALIDAD */}
      <div className="col-12 mb-4">

        <label className="form-label fw-semibold">
          Especialidad Principal
        </label>

        <select
          className="form-select form-select-lg rounded-4"
          name="especialidad"
          value={form.especialidad}
          onChange={handleChange}
          required
        >

          <option value="">
            Seleccione una especialidad
          </option>

          {especialidades.map(
            (item, index) => (

              <option
                key={index}
                value={item}
              >
                {item}
              </option>

            )
          )}

        </select>

      </div>

      {/* EXPERIENCIA */}
      <div className="col-12 mb-4">

        <label className="form-label fw-semibold">
          Experiencia o Comentario
        </label>

        <textarea
          className="form-control rounded-4"
          rows="4"
          name="comentario"
          value={form.comentario}
          onChange={handleChange}
          placeholder="Cuéntanos sobre tu experiencia o cómo deseas ayudar..."
        ></textarea>

      </div>

      {/* INFO */}
      <div className="col-12">

        <div
          className="p-4 rounded-4 shadow-sm"
          style={{
            background:
              "linear-gradient(135deg,#e9fff4,#ffffff)",

            border:
              "1px solid rgba(25,135,84,0.2)",
          }}
        >

          <h5
            className="fw-bold"
            style={{
              color: "#198754",
            }}
          >
            Área de Servicio
          </h5>

          <p className="mb-0 text-muted">

            Los voluntarios apoyarán
            en logística, multimedia,
            construcción, transporte,
            producción y distintas áreas
            del proyecto misionero.

          </p>

        </div>

      </div>

    </div>

  );

};