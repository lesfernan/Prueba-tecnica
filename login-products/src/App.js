import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Products from "./components/Products";
import Introduction from "./components/Introduction";
import Funt from "./components/Funt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Funt />}>
          <Route index element={<Introduction />} />
        </Route>
        <Route path="/signup" element={<Funt />}>
          <Route index element={<Signup />} />
        </Route>
        <Route path="/login" element={<Funt />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
