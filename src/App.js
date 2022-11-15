import './App.css';
import Footer from './common/Footer/Footer';
import { Outlet } from "react-router-dom";
import Navbar from './common/Navbar/Navbar';

const App = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
}

export default App;
