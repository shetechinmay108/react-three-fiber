import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

function App() {
  return (
    <>
    
    <Canvas flat camera={{ fov: 80 }}>
      <OrbitControls />
      <ambientLight />
      <Cyl />
      <EffectComposer>
        {/* your effects go here */}
        <Bloom
          mipmapBlur
          intensity={10.0} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value
          luminanceSmoothing={0} // smoothness of the luminance
        />
        {/* <ToneMapping adaptive /> */}
      </EffectComposer>
    </Canvas>
  
    </>
  );
}

export default App;
