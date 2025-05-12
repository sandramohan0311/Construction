import PublicLayout from "@/layouts/PublicLayout";
import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;
