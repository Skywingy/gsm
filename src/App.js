import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layouts";
import One from "./components/1";
import Two from "./components/2";
import Three from "./components/3";
import Four from "./components/4";
import Five from "./components/5";
import Six from "./components/6";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="One" element={<One />} />
          <Route path="Two" element={<Two />} />
          <Route path="Three" element={<Three />} />
          <Route path="Four" element={<Four />} />
          <Route path="Five" element={<Five />} />
          <Route path="Six" element={<Six />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}