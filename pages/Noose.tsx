import { OrbitControls, TorusKnot } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Suspense } from "react";
import styles from "../styles/Home.module.css";
import { NoseHoover, Trail } from "./components/NoseHoover";

const Home: NextPage = () => {
  return (
    <main>
      <Canvas camera={{ position: [0, 0, 10], far: 2000 }}>
        <ambientLight />
        <Suspense fallback={null}>
          <NoseHoover />
          <OrbitControls />
        </Suspense>

        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.3} />
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={400}
          />
        </EffectComposer>
      </Canvas>
    </main>
  );
};

export default Home;
