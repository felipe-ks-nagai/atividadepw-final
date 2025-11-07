import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/InputForm";
import Page404 from "./components/page404";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import ListUsers from "./components/ListUsers";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container_css}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calculadora" element={<Form />} />
          <Route path="404" element={<Page404 />} />
          <Route path="/listusers" element={<ListUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;