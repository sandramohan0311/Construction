import PublicLayout from "@/layouts/PublicLayout";
import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
