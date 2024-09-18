import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Tech from "./components/Technologys";
import Experience from "./components/Experience";
import Project from "./components/Projects";
import Contect from "./components/Contect";




const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-400 selection:text-red-500 ">
      <div className="top-0 -z-10 h-full w-full ">
        <div className="w-full h-full bg-cyan-800 ">
          <div className="container mx-auto px-8">
            <Navbar />
            <Hero/>
            <About/>
            <Tech/>
            <Experience/>
            <Project/>
            <Contect/>
          </div>
        </div>
      </div>
    </div>
  );
};

//

export default App;
