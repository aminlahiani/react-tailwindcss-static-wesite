import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Accueil />} />
          <Route path="apropos" element={<APropos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}