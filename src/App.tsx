import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <Routes>
      
        <Route index element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/admin" element={<AdminLayout />} />
      
    </Routes>
  );
}

export default App;
