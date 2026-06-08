import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapaPeru() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const geoJsonLayer = useRef(null);

  const [info, setInfo] = useState({
    titulo: "Teen Missions Perú",
    imagen:
      "https://thumbs-us-east-1.myalbum.io/photo/1k0/6221a7c8-89a0-439b-94d4-9a12f32ba52b.jpg",
    descripcion:
      "Selecciona un departamento del mapa para conocer las actividades realizadas por Teen Missions Perú.",
  });

  const departamentos = {
    UCAYALI: {
      titulo: "Ucayali",
      imagen:
        "https://thumbs-us-east-1.myalbum.io/photo/1k0/6221a7c8-89a0-439b-94d4-9a12f32ba52b.jpg",
      descripcion:
        "Evangelismo, discipulado, capacitación de líderes y proyectos comunitarios desarrollados en diversas localidades de Ucayali.",
    },

    LORETO: {
      titulo: "Loreto",
      imagen:
        "https://images.unsplash.com/photo-1511497584788-876760111969",
      descripcion:
        "Trabajo misionero en comunidades amazónicas, promoviendo el servicio, la capacitación y el crecimiento espiritual.",
    },

    AREQUIPA: {
      titulo: "Arequipa",
      imagen:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
      descripcion:
        "Campamentos juveniles, brigadas de servicio y actividades de impacto social desarrolladas por Teen Missions.",
    },
  };

  useEffect(() => {
    if (!mapRef.current) return;
    if (mapInstance.current) return;

    const map = L.map(mapRef.current, {
      zoomControl: true,
      attributionControl: false,
      minZoom: 3,
      maxZoom: 9,
    });

    mapInstance.current = map;

    // MAPA BASE
    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
      }
    ).addTo(map);

    // Vista inicial América
    map.setView([-12, -72], 4);

    const getNombre = (feature) => {
      return (
        feature.properties?.NOMBDEP ||
        feature.properties?.NAME_1 ||
        feature.properties?.name ||
        "SIN NOMBRE"
      ).toUpperCase();
    };

    const estilo = () => ({
      fillColor: "#22c55e",
      weight: 1,
      color: "#ffffff",
      fillOpacity: 0.75,
    });

    const hover = (e) => {
      e.target.setStyle({
        fillColor: "#9b2a92",
        fillOpacity: 1,
        weight: 2,
      });
    };

    const reset = (e) => {
      if (geoJsonLayer.current) {
        geoJsonLayer.current.resetStyle(e.target);
      }
    };

    const clickRegion = (e) => {
      const nombre = getNombre(e.target.feature);

      setInfo(
        departamentos[nombre] || {
          titulo: nombre,
          imagen:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
          descripcion:
            "Próximamente publicaremos información sobre los proyectos realizados en esta región.",
        }
      );
    };

    const onEachFeature = (feature, layer) => {
      const nombre = getNombre(feature);

      layer.bindTooltip(nombre, {
        sticky: true,
      });

      layer.on({
        mouseover: hover,
        mouseout: reset,
        click: clickRegion,
      });
    };

    fetch(`${process.env.PUBLIC_URL}/peru_real.geojson`)
      .then((res) => res.json())
      .then((data) => {
        geoJsonLayer.current = L.geoJSON(data, {
          style: estilo,
          onEachFeature,
        }).addTo(map);

        setTimeout(() => {
          map.invalidateSize();
        }, 500);
      })
      .catch((err) => {
        console.error("Error cargando GeoJSON:", err);
      });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <section
      className="container-fluid py-5"
      style={{
        background:
          "linear-gradient(180deg,#9957aa 0%, #873a6a 100%)",
      }}
    >
      <div className="container">

        <h2 className="text-center text-white fw-bold mb-5">
          Presencia y Proyectos en el Perú
        </h2>

        <div className="row g-4 align-items-stretch">

          {/* MAPA */}

          <div className="col-lg-7">

            <div
              className="shadow-lg"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <div
                ref={mapRef}
                style={{
                  width: "100%",
                  height: "700px",
                }}
              />
            </div>

          </div>

          {/* PANEL */}

          <div className="col-lg-5">

            <div
              className="card border-0 shadow-lg h-100"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >

              <img
                src={info.imagen}
                alt={info.titulo}
                style={{
                  height: "320px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body p-4">

                <span
                  className="badge mb-3"
                  style={{
                    background:
                      "linear-gradient(135deg,#22c55e,#15803d)",
                    fontSize: "0.9rem",
                  }}
                >
                  Proyectos Misioneros
                </span>

                <h3
                  className="fw-bold mb-3"
                  style={{
                    color: "#3d1042",
                  }}
                >
                  {info.titulo}
                </h3>

                <p
                  style={{
                    lineHeight: "1.9",
                    fontSize: "1rem",
                    color: "#555",
                  }}
                >
                  {info.descripcion}
                </p>

                <button
                  className="btn text-white rounded-pill px-4 mt-3"
                  style={{
                    background:
                      "linear-gradient(135deg,#9b2a92,#3d1042)",
                    border: "none",
                  }}
                >
                  Ver Proyecto Completo
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
