import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Vector3 } from "three";
import { useGLTF } from "@react-three/drei";

const Square = ({ z, ...props }) => {
  const group = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(
    camera,
    new Vector3(0, 0, z)
  );

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rY: Math.random() * Math.PI,
  });

  useFrame(() => {
    group.current.rotation.set(0, (data.rY += 0.2), 0);
    group.current.position.set(data.x * width, (data.y += 0.0075), z);
    if (data.y > height / 1.5) {
      data.y = -height / 1.5;
    }
  });

  const { nodes, materials } = useGLTF("/square.glb");
  return (
    <group ref={group} {...props} dispose={null} scale={0.25}>
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.Text.geometry}
          material={nodes.Text.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/square.glb");

export default Square;
