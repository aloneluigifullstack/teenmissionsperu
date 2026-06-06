import React from "react";
import {
  FaQuestionCircle,
  FaUsers,
  FaCampground,
  FaMoneyBillWave,
  FaShieldAlt,
  FaBus,
  FaWhatsapp,
} from "react-icons/fa";

export const FAQ = () => {
  const preguntas = [
    {
      icono: <FaUsers />,
      pregunta: "¿Quiénes pueden participar?",
      respuesta:
        "Pueden participar jóvenes, líderes y voluntarios que deseen crecer espiritualmente, servir y formar parte de la visión misionera de Teen Missions Perú.",
    },

    {
      icono: <FaCampground />,
      pregunta: "¿Qué es un Campista?",
      respuesta:
        "Es un participante que forma parte del programa de entrenamiento misionero, recibiendo formación espiritual, práctica y ministerial.",
    },

    {
      icono: <FaUsers />,
      pregunta: "¿Qué es un Líder?",
      respuesta:
        "Es una persona con experiencia ministerial o liderazgo que acompaña, guía y supervisa grupos durante las actividades y entrenamientos.",
    },

    {
      icono: <FaShieldAlt />,
      pregunta: "¿Es seguro participar?",
      respuesta:
        "Sí. Contamos con protocolos de seguridad, supervisión constante, personal capacitado y coordinación con iglesias y responsables locales.",
    },

    {
      icono: <FaMoneyBillWave />,
      pregunta: "¿Tiene algún costo?",
      respuesta:
        "Algunos programas tienen una contribución destinada a cubrir alimentación, materiales y logística. Los detalles se informan durante el proceso de inscripción.",
    },

    {
      icono: <FaBus />,
      pregunta: "¿El transporte está incluido?",
      respuesta:
        "Dependiendo del programa, algunos incluyen transporte interno y otros requieren que el participante llegue al punto de encuentro establecido.",
    },

    {
      icono: <FaWhatsapp />,
      pregunta: "¿Cómo puedo comunicarme para más información?",
      respuesta:
        "Puedes escribirnos directamente por WhatsApp o mediante nuestro formulario de contacto. Nuestro equipo responderá tus consultas lo antes posible.",
    },
  ];

  return (
    <section
      className="container-fluid py-5"
      style={{
        backgroundImage: `
      linear-gradient(
        rgba(61,16,66,0.85),
        rgba(155,42,146,0.85)
      ),
      url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Preguntas Frecuentes</h2>

          <p className="text-white opacity-75">
            Resolvemos las dudas más comunes sobre nuestros programas.
          </p>
        </div>

        <div className="accordion" id="faqTeenMissions">
          {preguntas.map((item, index) => (
            <div
              className="accordion-item border-0 shadow-sm mb-3"
              key={index}
              style={{
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    index !== 0 ? "collapsed" : ""
                  } fw-semibold`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${index}`}
                >
                  <span
                    className="me-3"
                    style={{
                      color: "#9b2a92",
                      fontSize: "1.2rem",
                    }}
                  >
                    {item.icono}
                  </span>

                  {item.pregunta}
                </button>
              </h2>

              <div
                id={`faq${index}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                data-bs-parent="#faqTeenMissions"
              >
                <div className="accordion-body">{item.respuesta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
