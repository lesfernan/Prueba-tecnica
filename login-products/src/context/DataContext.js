import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ApiBase from "../api/ApiBase";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({});
  const [login, setLogin] = useState({});
  const [edit, setEdit] = useState({});
  const [categories, setCategories] = useState([]);
  const [catalogue, setCatalogue] = useState([]);
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState(Number);
  const [idProductDelete, setIdProductDelete] = useState(Number);
  const [idProduct, setIdProduct] = useState(Number);

  const postSignup = (signup) => {
    ApiBase.post("v1/signup/", signup).then((res) => {
      alert("Registro Sastifactorio");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("firstName", res.data.first_name);
      localStorage.setItem("email", res.data.email);
      navigate("/login");
    });
  };

  const postLogin = (login) => {
    ApiBase.post("v1/signin/", login).then((res) => {
      alert("Logueo Sastifactorio");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("firstName", res.data.first_name);
      localStorage.setItem("email", res.data.email);
      navigate("/products");
    });
  };

  const postProduct = (product, category) => {
    ApiBase.post(`service/services/${category}`, product).then((res) => {
      getCataloge();
    });
  };

  const deleteProduct = (idProductDelete) => {
    ApiBase.delete(`service/services/${idProductDelete}`).then((res) =>
      getCataloge()
    );
  };
  const putProduct = (idProduct, edit) => {
    ApiBase.put(`service/services/${idProduct}`, edit).then((res) =>
      getCataloge()
    );
  };
  const getProduct = (idProduct) => {
    ApiBase.get(`v1/service/services/${idProduct}`).then((res) =>
      setEdit(res.data)
    );
  };

  const getCategories = () => {
    ApiBase.get("v1/service/categories/").then((res) => {
      setCategories(res.data);
    });
  };
  const getCataloge = () => {
    ApiBase.get("v1/service/services/").then((res) => {
      setCatalogue(res.data);
    });
  };

  useEffect(() => {
    postProduct(product, category);
  }, [product]);

  useEffect(() => {
    getProduct(idProduct);
  }, [idProduct]);

  useEffect(() => {
    deleteProduct(idProductDelete);
  }, [idProductDelete]);

  useEffect(() => {
    putProduct(idProduct, edit);
  }, [edit]);

  useEffect(() => {
    getCataloge();
  }, [setCatalogue]);

  useEffect(() => {
    getCategories();
  }, [setCategories]);

  useEffect(() => {
    postSignup(signup);
  }, [signup]);

  useEffect(() => {
    postLogin(login);
  }, [login]);

  console.clear();
  console.log(
    "Desarrollado por Lesfer Garcia Developer Fullstak 👩‍💻 Email-Contact:yelesfer@gmail.com"
  );
  return (
    <DataContext.Provider
      value={{
        setSignup,
        setLogin,
        categories,
        setCategory,
        setProduct,
        catalogue,
        setIdProductDelete,
        setIdProduct,
        edit,
        setEdit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
