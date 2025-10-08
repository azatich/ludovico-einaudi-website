import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeSection from "./HomeSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
