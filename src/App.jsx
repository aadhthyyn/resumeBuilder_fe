import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ResumeGenarate from "./pages/ResumeGenarate";
import ResumeDetails from "./pages/ResumeDetails";
import AllDownload from "./pages/AllDownload";
import SingleResume from "./pages/SingleResume";
import PNF from "./pages/PNF";
import AllResume from "./pages/AllResume";
import { toast } from "react-toastify/unstyled";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeGenarate />} />
        <Route path="/resume-details" element={<ResumeDetails />} />
        <Route path="/all-resume" element={<AllResume />} />
        <Route path="/all-download" element={<AllDownload />} />
        <Route path="/resume/:id" element={<SingleResume />} />

        <Route path="/*" element={<PNF />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
