import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import ServicePage from "./pages/ServicePage";
import AdminLayout from "./layouts/AdminLayout";
import GalleryPage from "./pages/AdminGalleryPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/services/:type" element={<ServicePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
        <Route index  element={<GalleryPage />} />
        <Route  path="gallery" element={<GalleryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
