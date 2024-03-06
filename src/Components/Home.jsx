import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-border-0">
        <img src="public\assets\images\bg.jpg" className="card-img img-fluid" alt="Background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">Llega la nueva temporada</h5>
            <p className="card-text lead fs-2">
              Mira todas las tendencias
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
