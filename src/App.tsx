import PublicLayout from "@/layouts/PublicLayout";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;
