import  React from "react"
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import RealWeddings from "./components/RealWeddings";

function App() {
  return (
    <div>
     <Header/>
     <Hero/>
     <Explore/>
     <RealWeddings/>
    </div>
  );
}

export default App;
