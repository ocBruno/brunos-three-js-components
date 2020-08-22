import React, {useEffect, useState} from 'react';
import './App.css';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color
} from 'three'

import { Box } from './threeJS/shapes/Box'

import { Line } from './threeJS/shapes/Line'

import { HackitFox3D } from './threeJS/shapes/HackitFox3D'

const scene = new Scene()
const renderer =  new WebGLRenderer()
const camera =  new PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 )

const bgColor = new Color("rgb(252, 252, 252)")

renderer.setSize( window.innerWidth, window.innerHeight )

camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

renderer.setClearColor(bgColor)
document.body.appendChild( renderer.domElement )

function App() {

  return (
    <div className="App">
      <Box
        color={`rgb(130, 210, 130)`}
        positionX={0}
        scene={ scene }
        camera={ camera }
        renderer={ renderer }
      />
  <HackitFox3D/>
    </div>
  )

}


export default App;
