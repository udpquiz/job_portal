import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './components/Auth/Register';
import Home from './components/Home/Home';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

const App = ()=>{
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/job/getall" element={<Jobs />} /> */}
          {/* <Route path="/job/:id" element={<JobDetails />} /> */}
          {/* <Route path="/application/:id" element={<Application />} /> */}
          {/* <Route path="/applications/me" element={<MyApplications />} /> */}
          {/* <Route path="/job/post" element={<PostJob />} /> */}
          {/* <Route path="/job/me" element={<MyJobs />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
        {/* <Toaster /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
