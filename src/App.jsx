import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Box from "./Box";
import Za from "./Za";
import { useGLTF, Environment } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Depth,
} from "@react-three/postprocessing";
import Overlay from "./Overlay";

// const Test = () => {
//   const { viewport, camera } = useThree();
//   const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -10]);
//   return (
//     <mesh position={[0, 0, -10]} scale={[width, height, 1]}>
//       <planeGeometry />
//       <meshBasicMaterial color="blue" />
//     </mesh>
//   );
// };

const App = ({ count = 100, depth = 80 }) => {
  return (
    <>
      <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30 }}>
        <color attach="background" args={["#fac832"]} />
        <spotLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          {Array.from({ length: count }, (_, i) => (
            <Za key={i} z={(-i / count) * depth - 20} />
          ))}
          <Environment preset="sunset" />
          <EffectComposer>
            <DepthOfField
              target={[0, 0, depth / 2]}
              focalLength={0.5}
              bokehScale={4}
              height={700}
            />
          </EffectComposer>
        </Suspense>

        {/* <Test /> */}
      </Canvas>
      <Overlay />
    </>
  );
};

export default App;
