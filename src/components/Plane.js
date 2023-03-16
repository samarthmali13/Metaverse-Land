const Plane = () => {
    return (
        <mesh position={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
            <meshStandardMaterial color={"#904040"} />
        </mesh>
    );
}

export default Plane;