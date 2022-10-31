import {
  Instance,
  Instances,
  Point,
  Sphere,
  Trail as Tr,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const CONSTANT_A = 1.5;
const size = new Array(1000).fill(0);

export const NoseHoover = () => {
  return (
    <>
      <Instances>
        <sphereGeometry args={[0.1]} />
        <meshBasicMaterial color={"gold"} />
        {size.map((v, i) => (
          <Trail key={i} position={[1, 0, 0]} idx={i * 0.01} />
        ))}
      </Instances>
    </>
  );
};

export const Trail = ({
  position = [0, 0, 0] as [x: number, y: number, z: number],
  idx = 1,
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  const a = 1.5;

  useFrame(({ clock }) => {
    const dt = (clock.getElapsedTime() + idx) * 0.005;
    const [x, y, z] = ref.current.position.toArray();

    ref.current.position.x += y * dt;
    ref.current.position.y += ((-x + y * z) * dt) / 2;
    ref.current.position.z += (a - Math.pow(y, 2)) * dt;

    /*         ref.current.position.x += (Math.pow(x, 2) - (x * dt) + (y * dt) - y)
        ref.current.position.y += (-Math.pow(y, 2) - Math.pow(dt, 2) - (x * dt) - (y * dt) - y) */
  });

  return (
    <>
      <Instance ref={ref} position={position} />
    </>
  );
};
