import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import "../css/modalput.css";

const ModalPut = () => {
  const { setCategory, edit, setEdit } = useContext(DataContext);
  const { name, description, price, image } = edit;
  const [idCategory] = useState(Number);
  const [nameProduct, setName] = useState("");
  const [descriptionProduct, setDescription] = useState("");
  const [priceProduct, setPrice] = useState("");
  const [imageProduct, setImage] = useState("");
  const sendingData = () => {
    setEdit({
      name: nameProduct,
      description: descriptionProduct,
      price: priceProduct,
      image: imageProduct,
    });
    setCategory(idCategory);
    window.location.reload(true);
  };
  useEffect(() => {
    setName(name);
    setDescription(description);
    setImage(image);
    setPrice(price);
  }, [edit]);

  return (
    <div
      className="modal fade"
      id="exampleModal2"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLabel">
              Edit Product
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="add-product" action="addProduct">
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  defaultValue={nameProduct}
                  onChange={(event) => setName(event.currentTarget.value)}
                />
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Descripcion"
                  defaultValue={descriptionProduct}
                  onChange={(event) =>
                    setDescription(event.currentTarget.value)
                  }
                />
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <label htmlFor="imagen">Imagen:</label>
                <input
                  type="text"
                  name="imagen"
                  placeholder="Imagen"
                  defaultValue={imageProduct}
                  onChange={(event) => setImage(event.currentTarget.value)}
                />
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <label htmlFor="price">Precio:</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Precio"
                  defaultValue={priceProduct}
                  onChange={(event) => setPrice(event.currentTarget.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-info text-light"
              data-bs-dismiss="modal"
              onClick={(e) => {
                e.preventDefault();
                sendingData();
              }}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPut;
