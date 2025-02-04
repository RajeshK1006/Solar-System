import useGravity from '../hooks/useGravity'
import { CameraProvider } from '../context/Camera'
import { ExplosionProvider } from '../context/Explosions'
import { TrailProvider } from '../context/Trails'

import Sun from './Sun'
import Stars from './Stars'
import Planets from './Planets'

// Scene component
const Scene = () => {
    // Custom hook for gravity logic
    useGravity()

    const sunPositions = [
       [1,1,1]
        
      ]

    return (
        <CameraProvider>
            <ExplosionProvider>
                {sunPositions.map((pos, index) => (
        <Sun key={index} position={pos} lightIntensity={30000 + index * 10000} />
      ))}

                <TrailProvider>
                    <Planets />
                </TrailProvider>

                <Stars />
            </ExplosionProvider>
        </CameraProvider>
    )
}

export default Scene