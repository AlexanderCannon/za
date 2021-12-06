import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Paren from "./Paren";
import Laptop from "./Laptop";
import { useGLTF, Environment } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Depth,
} from "@react-three/postprocessing";
import Overlay from "./Overlay";
import Square from "./Square";
import Curly from "./Curly";

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

const App = ({ count = 10, depth = 80 }) => {
  return (
    <>
      <Canvas
        gl={{ alpha: false }}
        camera={{ near: 0.01, far: 110, fov: 30 }}
        style={{ position: "fixed", top: 0 }}
      >
        <color attach="background" args={["#a8c7f7"]} />
        <spotLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          {Array.from({ length: 20 }, (_, i) => (
            <Laptop key={i} z={(-i / count) * depth - 40} />
          ))}
          <Environment preset="sunset" />
          <EffectComposer>
            <DepthOfField
              target={[0, 0, depth / 2]}
              focalLength={0.6}
              bokehScale={3}
              height={700}
            />
          </EffectComposer>
        </Suspense>
        <Suspense fallback={null}>
          {Array.from({ length: 20 }, (_, i) => (
            <Paren z={1} key={`paren-${i}`} />
          ))}
          {Array.from({ length: 20 }, (_, i) => (
            <Square z={1} key={`square-${i}`} />
          ))}
          {Array.from({ length: 20 }, (_, i) => (
            <Curly z={1} key={`curly-${i}`} />
          ))}
        </Suspense>

        {/* <Test /> */}
      </Canvas>
      <Overlay />
    </>
  );
};

export default App;
