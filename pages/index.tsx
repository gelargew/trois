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
    <>
      <main>
        <div>
          <h1>QWEQWEQWEQEWe</h1>
        </div>
        <div>
          <h1>QWEQWEQWEQEWe</h1>
        </div>
        <div>
          <h1>QWEQWEQWEQEWe</h1>
        </div>
        <div>
          <h1>QWEQWEQWEQEWe</h1>
        </div>
      </main>
      <style jsx>
        {`
          main > div {
            background: gray;
            height: 90vh;
          }
        `}
      </style>
    </>
  );
};

export default Home;
