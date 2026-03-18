import { Routes, Route } from "react-router-dom";
import Portal from "./pages/Portal";
import PromoPage from "./pages/PromoPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portal />} />
      <Route path="/promo/:promoId" element={<PromoPage />} />
    </Routes>
  );
}
