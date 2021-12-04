import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Vector3 } from "three";

const Laptop = ({ z, ...props }) => {
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(
    camera,
    new Vector3(0, 0, z)
  );

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });
  useFrame(() => {
    group.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.004),
      (data.rZ += -0.0005)
    );
    group.current.position.set(data.x * width, (data.y -= 0.05), z);
    if (data.y < -(height / 1.5)) {
      data.y = height / 1.5;
    }
  });
  const group = useRef();
  const { nodes, materials } = useGLTF("/laptop-v1.glb");
  return (
    <group ref={group} {...props} dispose={null} scale={0.5}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-0.11, 0.14, 0]}
            rotation={[-1.55, 0, -Math.PI]}
            scale={100}
          >
            <mesh
              geometry={nodes.Curve_Apple_Logo_0.geometry}
              material={materials.Apple_Logo}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Macbook_Body_Bottom_0.geometry}
              material={materials.Body_Bottom}
            />
            <mesh
              geometry={nodes.Macbook_Body_Side_0.geometry}
              material={materials.Body_Side}
            />
            <mesh
              geometry={nodes.Macbook_Body_Top_0.geometry}
              material={materials.Body_Top}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/laptop-v1.glb");

export default Laptop;
