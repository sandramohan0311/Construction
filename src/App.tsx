import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import ServicePage from "./pages/ServicePage";
import AdminLayout from "./layouts/AdminLayout";
import GalleryPage from "./pages/AdminGalleryPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="gallery" element={<GalleryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
