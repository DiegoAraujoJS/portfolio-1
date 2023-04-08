import {useTexture} from '@react-three/drei'

const TexturedRotatingPlane: React.FC = () => {
const colorMap = useTexture([
    'assets/three.jpg',
    'assets/two.jpg',
    'assets/one.jpeg',
    'assets/four.jpg',
  ]);
  return (
    <mesh>
      <boxBufferGeometry args={[0.7, 0.7, 0.7]} />
        <meshBasicMaterial
          key={colorMap[0].id}
          attach={`material-${0}`}
          map={colorMap[0]}
        />
        <meshBasicMaterial
          key={colorMap[1].id}
          attach={`material-${1}`}
          map={colorMap[1]}
        />
        <meshBasicMaterial
          key={colorMap[2].id}
          attach={`material-${4}`}
          map={colorMap[2]}
        />
        <meshBasicMaterial
          key={colorMap[3].id}
          attach={`material-${5}`}
          map={colorMap[3]}
        />
    </mesh>
  );};

export default TexturedRotatingPlane;
