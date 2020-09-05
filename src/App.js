import React, {useEffect, useState} from 'react';
import './App.css';
import * as THREE from 'three'
import {getRandom} from './utils/helpers' 
import { Globe } from './threeJS/shapes/Globe'

import { Line } from './threeJS/shapes/Line'


const scene = new THREE.Scene()
const renderer =  new THREE.WebGLRenderer()
const camera =  new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 )

const bgColor = new THREE.Color("rgb(24, 24, 54)")

renderer.setSize( window.innerWidth, window.innerHeight )

camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

renderer.setClearColor(bgColor)
document.body.appendChild( renderer.domElement )

const drawStars = () => {
  const starTexture = new THREE.TextureLoader().load( "star.jpg" );
  const stars = [];
  for (let i = 0; i < 200; i++) {
    let geometry = new THREE.PlaneGeometry( 0.5, 0.5 );
    let material = new THREE.MeshBasicMaterial( { map: starTexture } );
    let star = new THREE.Mesh( geometry, material );
    star.position.set( getRandom(), getRandom(), getRandom() );
    star.material.side = THREE.DoubleSide;
    stars.push( star );
  }
  }

function App() {
  useEffect(()=>{
    drawStars()

  })

  return (
    <canvas className="app" id="app">
      <Globe
        positionX={0}
        scene={ scene }
        camera={ camera }
        renderer={ renderer }
      />

    </canvas>
  )

}


export default App;
