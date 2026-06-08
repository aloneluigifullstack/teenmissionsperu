import React from "react";

export const Card = ({
  title,
  desc,
  image,
  variant = "purple",
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="col-lg-6">

      <div className={`feature-card feature-${variant}`}>

        <div className="feature-image">
          <img src={image} alt={title} />
        </div>

        <div className="feature-content">

          <h3>{title}</h3>

          <p>{desc}</p>

          {buttonText && (
            <div className="text-center">
            <button
              className="btn-modern-purple"
              data-bs-toggle="modal"
              data-bs-target="#registroModal"
            >
              {buttonText}
            </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};