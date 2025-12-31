import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
        <div className="fixed inset-0 -z-10">
          <img
            src="/fondo.webp" 
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

      <Header/>
      <main className="flex-grow pt-[17vh]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
