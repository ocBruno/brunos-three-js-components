import React from 'react'
import { LineBasicMaterial, MeshBasicMaterial, Mesh, Color, BufferGeometry, Vector3, Line as _Line } from "three"

export const Line = ( props ) => {

  const scene = props.scene
  const camera = props.camera
  const renderer = props.renderer
  
  const positionX = props.positionX

  var material = new LineBasicMaterial( { color: 0x0000ff } );

  var points = [];
  points.push( new Vector3( - 10, 0, 0 ) );
  points.push( new Vector3( 0, 10, 0 ) );
  points.push( new Vector3( 10, 0, 0 ) );
  
  let i = 0

const animationLoop = () => {
  requestAnimationFrame( animationLoop )
  points.push( new Vector3( i++, 0, 0 ) );

  renderer.render( scene, camera )
}

animationLoop()
  var geometry = new BufferGeometry().setFromPoints( points );

  var line = new _Line( geometry, material );


  scene.add(line)


  camera.position.z = 5

  return <></>
}

