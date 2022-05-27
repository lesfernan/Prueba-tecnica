import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "../css/cataloge.css";

const Cataloge = () => {
  const { catalogue, setIdProductDelete, setIdProduct } =
    useContext(DataContext);
  return (
    <div className="catalogo d-flex justify-content-center flex-wrap">
      {catalogue.map((unitProduct, id) => {
        return (
          <div key={id + "product"} className="card m-4 position-relative">
            <img
              width="100%"
              height="200px"
              src={unitProduct.image}
              className="card-img-top"
              alt="CARGANDO..."
            />
            <div className="card-body">
              <h4 className="card-title">{unitProduct.name}</h4>
              <p className="card-text">{unitProduct.description}</p>
              <strong>{unitProduct.category}</strong>
              <p className="card-text">
                <strong className="text-muted">s/{unitProduct.price}</strong>
              </p>
            </div>
            <i
              className="fa-solid fa-pen edit"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
              onClick={() => setIdProduct(unitProduct.id)}
            ></i>
            <i
              className="fa-solid fa-trash delete"
              onClick={() => {
                setIdProductDelete(unitProduct.id);
              }}
            ></i>
          </div>
        );
      })}
    </div>
  );
};

export default Cataloge;
