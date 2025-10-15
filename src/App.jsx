import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ToursPage from "./pages/ToursPage";
import WorksPage from "./pages/WorksPage";
import NotFoundPage from "./pages/NotFoundPage";
import TheSummerPortraitAlbum from "./pages/works/TheSummerPortraitAlbum";
import Underwater from "./pages/works/Underwater";
import Elements from "./pages/works/Elements";
import Cinema from "./pages/works/Cinema";
import Undiscovered from "./pages/works/Undiscovered";
import SevenDaysWalking from "./pages/works/SevenDaysWalking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="works" element={<WorksPage />} />
          <Route path="works/the-summer-portraits-album" element={<TheSummerPortraitAlbum />} />
          <Route path="works/underwater" element={<Underwater />} />
          <Route path="works/seven-days-walking" element={<SevenDaysWalking />} />
          <Route path="works/elements" element={<Elements />} />
          <Route path="works/cinema" element={<Cinema />} />
          <Route path="works/undiscovered" element={<Undiscovered />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
