
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WomensHealth from "./pages/WomensHealth";
import ReproductiveHealth from "./pages/ReproductiveHealth";
import PatientResources from "./pages/PatientResources";
import Bahrain from "./pages/Bahrain";
import UAE from "./pages/UAE";
import Dubai from "./pages/Dubai";
import Qatar from "./pages/Qatar";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/womens-health" element={<WomensHealth />} />
        <Route path="/patient-resources" element={<PatientResources />} />
        <Route path="/bahrain" element={<Bahrain />} />
        <Route path="/uae" element={<UAE />} />
        <Route path="/dubai" element={<Dubai />} />
        <Route path="/qatar" element={<Qatar />} />
        <Route path="/contact" element={<Contact />} />

        <Route
  path="/reproductive-health"
  element={<ReproductiveHealth />}
/>
      </Routes>

      <Footer />

      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
