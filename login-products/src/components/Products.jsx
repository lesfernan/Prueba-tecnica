import DataProvider from "../context/DataContext";
import Navbar from "./Navbar";
import "../css/funt.css";
import "../css/products.css";
import Cataloge from "./Cataloge";

const Products = () => {
  return (
    <DataProvider>
      <div className="position ">
        <video src="../img/fondo.mp4" loop="infinite" muted autoPlay></video>
        <div className="curtain"></div>
        <div className="title d-flex flex-column justify-content-center align-items-center"></div>
        <Navbar />
        <div className="container products">
          <h1 className="text-center text-light mb-5">
            SUBE TODOS LOS PRODUCTOS QUE QUIERAS VENDER
          </h1>
          <Cataloge></Cataloge>
        </div>
      </div>
    </DataProvider>
  );
};

export default Products;
