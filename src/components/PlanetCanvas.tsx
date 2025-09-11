import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface Props {
  size?: number;
  rotateSpeed?: number;
}

const PlanetCanvas = ({ size, rotateSpeed = 5 }: Props) => {
  const planet = useGLTF("./planet/scene.gltf");

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        frameloop="demand"
        camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
      >
        <OrbitControls
          autoRotate
          autoRotateSpeed={rotateSpeed}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <primitive object={planet.scene} scale={size || 3} />
      </Canvas>
    </div>
  );
};

export default PlanetCanvas;
