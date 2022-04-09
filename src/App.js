import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const assets = `${process.env.PUBLIC_URL}/images`;
  const [brands, setBrands] = useState([
    { id: 1, name: '', logo: `${assets}/1-150x150.png` },
    { id: 2, name: '', logo: `${assets}/2-150x150.png` },
    { id: 3, name: '', logo: `${assets}/3-150x150.png` },
    { id: 4, name: '', logo: `${assets}/4-150x150.png` },
    { id: 5, name: '', logo: `${assets}/5-150x150.png` },
    { id: 6, name: '', logo: `${assets}/6-150x150.png` },
    { id: 7, name: '', logo: `${assets}/7-150x150.png` },
    { id: 8, name: '', logo: `${assets}/8-150x150.png` },
    { id: 9, name: '', logo: `${assets}/9-150x150.png` },
    { id: 10, name: '', logo: `${assets}/10-150x150.png` },
  ]);

  return (
    <div className="App">
      <Home brands={brands} />
    </div>
  );
}

export default App;
