import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import "../css/modal.css";

const Modal = () => {
  const { categories, setProduct, setCategory } = useContext(DataContext);
  const [idCategory, setIdCategory] = useState(Number);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const sendingData = () => {
    setProduct({
      name: name,
      description: description,
      price: price,
      image: image,
    });
    setCategory(idCategory);
  };

  return (
    <div
      className="modal fade "
      id="exampleModal"
      tabIndex="-2"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLabel">
              Add Product
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
              <div className="my-3 d-flex justify-content-between align-items-center">
                <label htmlFor="category">Categoria:</label>
                <select
                  name="category"
                  value={idCategory}
                  onChange={(e) => setIdCategory(e.currentTarget.value)}
                  id="category"
                >
                  <option disabled value="0">
                    Elije Una Categoria
                  </option>
                  {categories.map((category, id) => {
                    return (
                      <option key={id + "category"} value={category.id}>
                        {category.name_service}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  onChange={(event) => setName(event.currentTarget.value)}
                />
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Descripcion"
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
                  onChange={(event) => setImage(event.currentTarget.value)}
                />
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <label htmlFor="price">Precio:</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Precio"
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

export default Modal;
