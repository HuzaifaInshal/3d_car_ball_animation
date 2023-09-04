import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css'
import Main from './components/Main';

function App() {
  return (
    <>
  <Canvas id="three-canvas-container" shadows >
   <Suspense fallback={<></>}>
     <Main />        
   </Suspense>
  </Canvas>
    </>
  );
}

export default App;
