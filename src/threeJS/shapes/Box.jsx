import React from 'react'
import { BoxGeometry, MeshStandardMaterial, Mesh, Color } from "three"

export const Box = ( props ) => {

  const scene = props.scene
  const camera = props.camera
  const renderer = props.renderer
  
  const positionX = props.positionX
  
  const boxColor = new Color(props.color)

  const boxGeometry = new BoxGeometry()
  
  const boxMaterial = new MeshStandardMaterial( {

    color: 0xffffff,

    roughness: 0.3,
    metalness: 0.7,


    envMap: `exr`, // important -- especially for metals!
    envMapIntensity: 0.4

} );

  const boxMesh = new Mesh(boxGeometry, boxMaterial)
  
  boxMesh.position.x = positionX

  const animationLoop = () => {
    requestAnimationFrame( animationLoop )

    boxMesh.rotation.x += 0.01;
    boxMesh.rotation.y += 0.01;

    renderer.render( scene, camera )
  }

  animationLoop()
  scene.add(boxMesh)


  camera.position.z = 5

  return <></>
}

