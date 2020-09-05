import React from 'react'
import * as THREE from "three"

export const Globe = ( props ) => {
  const scene = props.scene
  const camera = props.camera
  const renderer = props.renderer
  const light = new THREE.DirectionalLight(0xffffff, 0.8);

  const positionX = props.positionX

  var mapSimpleTexture = new THREE.TextureLoader().load( 'earth-simple-shapes.jpg' );
  const globeMesh = new THREE.Mesh(
  new THREE.SphereGeometry(0.8, 32, 32),
  new THREE.MeshPhongMaterial({
    map: mapSimpleTexture
  })
);

  
  globeMesh.position.x = positionX

  const animationLoop = () => {
    requestAnimationFrame( animationLoop )

    globeMesh.rotation.x += 0.01;
    globeMesh.rotation.y += 0.01;

    renderer.render( scene, camera )
  }

  animationLoop()
  light.position.set(5,3,5);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0x333333));
  const fillLight = new THREE.AmbientLight( 0x2e1527 )
  scene.add( fillLight )

  scene.add(globeMesh)


  camera.position.z = 5

  return <></>
}

