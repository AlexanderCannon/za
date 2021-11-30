import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Vector3 } from "three";

const Za = ({ z, ...props }) => {
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
    group.current.position.set(data.x * width, (data.y += 0.025), z);
    if (data.y > height / 1.5) {
      data.y = -height / 1.5;
    }
  });
  const group = useRef();
  const { nodes, materials } = useGLTF("/za-v1-transformed.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-0.36, 0.07, -0.41]}
            rotation={[0.88, -0.22, 0.05]}
            scale={[4.61, 0.1, 4.61]}
          >
            <mesh
              geometry={nodes.Mesh_1.geometry}
              material={materials.Cheese_Mat}
            />
          </group>
          <group
            position={[0.24, 1.5, -1.16]}
            rotation={[0.88, -0.22, 0.05]}
            scale={[4.61, 0.07, 4.61]}
          >
            <mesh
              geometry={nodes.Mesh_0.geometry}
              material={materials.Dough_Mat}
            />
          </group>
          <group
            position={[-0.33, 1.66, -1.07]}
            rotation={[1, -0.2, 0.13]}
            scale={[0.43, 0.02, 0.43]}
          >
            <mesh
              geometry={nodes.Mesh_3.geometry}
              material={nodes.Mesh_3.material}
            />
          </group>
          <group
            position={[-0.45, 2.35, -1.64]}
            rotation={[0.75, 0.35, 0.1]}
            scale={[0.43, 0.02, 0.43]}
          >
            <mesh
              geometry={nodes.Mesh_10.geometry}
              material={nodes.Mesh_10.material}
            />
          </group>
          <group
            position={[0.46, 1.99, -1.26]}
            rotation={[0.82, -0.21, 0.04]}
            scale={[0.43, 0.02, 0.43]}
          >
            <mesh
              geometry={nodes.Mesh_9.geometry}
              material={nodes.Mesh_9.material}
            />
          </group>
          <group
            position={[0.97, 1.4, -0.73]}
            rotation={[0.93, -0.23, 0.09]}
            scale={[0.42, 0.02, 0.42]}
          >
            <mesh
              geometry={nodes.Mesh_8.geometry}
              material={nodes.Mesh_8.material}
            />
          </group>
          <group
            position={[0.22, 0.84, -0.47]}
            rotation={[1.13, -0.13, 0.15]}
            scale={[0.42, 0.02, 0.42]}
          >
            <mesh
              geometry={nodes.Mesh_4.geometry}
              material={nodes.Mesh_4.material}
            />
          </group>
          <group
            position={[-0.67, 0.73, -0.61]}
            rotation={[1.15, -0.2, 0.21]}
            scale={[0.39, 0.02, 0.39]}
          >
            <mesh
              geometry={nodes.Mesh_5.geometry}
              material={nodes.Mesh_5.material}
            />
          </group>
          <group
            position={[-0.73, -0.04, -0.24]}
            rotation={[1.22, -0.12, 0.16]}
            scale={[0.4, 0.02, 0.4]}
          >
            <mesh
              geometry={nodes.Mesh_6.geometry}
              material={nodes.Mesh_6.material}
            />
          </group>
          <group
            position={[-1.3, -0.45, -0.24]}
            rotation={[1.21, -0.24, 0.34]}
            scale={[0.4, 0.02, 0.4]}
          >
            <mesh
              geometry={nodes.Mesh_7.geometry}
              material={nodes.Mesh_7.material}
            />
          </group>
          <group
            position={[0.61, 2.11, -1.37]}
            rotation={[0.88, -0.31, 0.05]}
            scale={[0.16, 0.08, 0.16]}
          >
            <mesh
              geometry={nodes.Mesh_2.geometry}
              material={nodes.Mesh_2.material}
            />
          </group>
          <group
            position={[-0.23, 0.73, -0.59]}
            rotation={[0.88, -0.31, 0.05]}
            scale={[0.16, 0.08, 0.16]}
          >
            <mesh
              geometry={nodes.Mesh_11.geometry}
              material={nodes.Mesh_11.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export default Za;
