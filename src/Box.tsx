import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Mesh, Vector3 } from "three";

const Box = ({ z }) => {
  const ref = useRef<Mesh>();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(
    camera,
    new Vector3(0, 0, z)
  );

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
  });

  useFrame(() => {
    // ref.current.position.z = THREE.MathUtils.lerp(
    //   ref.current.position.z,
    //   clicked ? 1 : 0,
    //   0.1
    // );
    ref.current.position.set(data.x * width, (data.y += 0.1), z);
    if (data.y > height / 1.5) {
      data.y = -height / 1.5;
    }
  });

  return (
    <mesh
      ref={ref}
      // onClick={() => {
      //   setClicked(!clicked);
      // }}
    >
      <boxGeometry />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

export default Box;
