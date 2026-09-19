import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Classes from "./pages/Classes/Classes";
import ClassDetail from "./pages/ClassDetail/ClassDetail";
import Gym from "./pages/Gym/Gym";
import SchedulePage from "./pages/Schedule/Schedule";
import Contact from "./pages/Contact/Contact";
import Trial from "./pages/Trial/Trial";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/clases" element={<Classes />} />
          <Route path="/clases/:slug" element={<ClassDetail />} />
          <Route path="/gimnasio" element={<Gym />} />
          <Route path="/horarios" element={<SchedulePage />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/dia-de-prueba" element={<Trial />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
