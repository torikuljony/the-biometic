export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.7} color="#dfe8ff" />
      <directionalLight
        castShadow
        position={[4.5, 4.5, 6]}
        intensity={2.8}
        color="#7CFFCB"
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-5, 2, 5]} intensity={2.1} color="#6EA8FF" />
      <pointLight position={[0, 0, 4]} intensity={18} distance={12} color="#A4C8FF" />
      <pointLight position={[0, -1.8, -3]} intensity={14} distance={10} color="#7CFFCB" />
    </>
  );
}
