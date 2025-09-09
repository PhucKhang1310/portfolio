import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface Props {
  size?: number;
}

const PlanetCanvas = ({ size }: Props) => {
  const planet = useGLTF("./planet/scene.gltf");

  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <primitive object={planet.scene} scale={size || 3} />
    </Canvas>
  );
};

export default PlanetCanvas;
