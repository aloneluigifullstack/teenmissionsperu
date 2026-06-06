import React from "react";

export const Footer = () => (
  <footer className="bg-dark text-white text-center py-4"
            style={{
      background:
        "linear-gradient(135deg, #0d010f 0%, #370a33 100%, #0f5513 100%)",
      color: "white",
    }}
        >
       <div className="text-center">
        © {new Date().getFullYear()} Teen Missions Perú. Todos los derechos reservados.
      </div>
  </footer>
);