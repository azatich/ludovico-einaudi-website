import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MusicsPage from "./pages/MusicsPage";
import ToursPage from "./pages/ToursPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/musics" element={<MusicsPage />} />
          <Route path="/tours" element={<ToursPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
