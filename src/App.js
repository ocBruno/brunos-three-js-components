import React, {useEffect, useState} from 'react';
import './App.css';
import * as THREE from 'three'
import {getRandom} from './utils/helpers' 
import { Globe } from './threeJS/shapes/Globe'

import { Line } from './threeJS/shapes/Line'


const scene = new THREE.Scene()
const renderer =  new THREE.WebGLRenderer()
const camera =  new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 500 )

const bgColor = new THREE.Color("rgb(5, 5, 24)")

renderer.setSize( window.innerWidth, window.innerHeight )

camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

renderer.setClearColor(bgColor)
document.body.appendChild( renderer.domElement )

const drawStars = (stars) => {
  const starTexture = new THREE.TextureLoader().load( "star.png" );
  for (let i = 0; i < 1000; i++) {
    let geometry = new THREE.PlaneGeometry( 0.5, 0.5 );
    let material = new THREE.MeshBasicMaterial( { 
      map: starTexture,
      transparent: true,
      depthWrite: true,
      depthTest: true,
      wireframe: true
     } );
    let star = new THREE.Mesh( geometry, material );
    star.position.set( getRandom(), getRandom(), getRandom() );
    star.material.side = THREE.DoubleSide;
    stars.push( star );
  }
  for (let j = 0; j < stars.length; j++) {
    scene.add( stars[j] );
  }
  }

function App() {
  const stars = [];
  
  const animationLoop = () => {
    requestAnimationFrame( animationLoop )

    for (let k = 0; k < stars.length; k++) {
      let star = stars[k];
      star.rotation.x += 0.01;
      star.rotation.y += 0.01;
  }

    renderer.render( scene, camera )
  }

  animationLoop()
  useEffect(()=>{
    drawStars(stars)

  })

  return (
    <div className="app" id="app">
      <Globe
        positionX={-2}
        color="rgb(54,45,252)"
        invertRotation={false}
        rotateAcceleration={1}
        positionY={1}
        scale={0.5}
        scene={ scene }
        camera={ camera }
        renderer={ renderer }
      />
      <Globe
        positionX={-3}
        color="rgb(252,5,5)"
        invertRotation={true}
        rotateAcceleration={7}
        positionY={0}
        scale={0.5}
        scene={ scene }
        camera={ camera }
        renderer={ renderer }
      />
      <Globe
        positionX={0}
        color="rgb(22,44,120)"
        invertRotation={true}
        positionY={2}
        rotateAcceleration={8}
        scale={1}
        scene={ scene }
        camera={ camera }
        renderer={ renderer }
      />
      <Globe
        positionX={1}
        invertRotation={false}
        positionY={-1}
        color="rgb(252,252,252)"
        scale={0.5}
        rotateAcceleration={1}
        scene={ scene }
        camera={ camera }
        renderer={ renderer }
      />
      <Globe
        positionX={1}
        color="rgb(54,45,252)"
        invertRotation={true}
        rotateAcceleration={5}
        positionY={-2}
        scale={0.5}
        scene={ scene }
        camera={ camera }
        renderer={ renderer }
      />
      <Globe
        positionX={3}
        color="rgb(252,5,5)"
        positionY={1}
        invertRotation={false}
        rotateAcceleration={1}
        scale={1.2}
        scene={ scene }
        camera={ camera }
        renderer={ renderer }
      />
      <Globe
        positionX={-3}
        color="rgb(22,44,120)"
        rotateAcceleration={20}
        invertRotation={true}
        positionY={-3}
        scale={1}
        scene={ scene }
        camera={ camera }
        renderer={ renderer }
      />
      <Globe
        positionX={1}
        invertRotation={true}
        positionY={3}
        rotateAcceleration={90}
        color="rgb(252,252,252)"
        scale={0.5}
        scene={ scene }
        camera={ camera }
        renderer={ renderer }
      />
    </div>
  )

}


export default App;
