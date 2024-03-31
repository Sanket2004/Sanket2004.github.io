import { useEffect, useState } from "react"
import Preloader from "./components/Preloader"
import Home from "./Home";


function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      setLoaded(false);
    }, 1000);
  }, []);

  return (
    <div className="transition-opacity duration-500">
      {loaded ? <Preloader /> : <Home />}
    </div>
  );
}


export default App
