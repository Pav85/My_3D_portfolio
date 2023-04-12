import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 20,
          color: '#f1f1f1',
          fontWeight: 600,
          marginTop: 120
        }}
      >{progress.toFixed()}%</p>
    </Html>
  )
}

export default Loader