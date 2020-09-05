import React from 'react'
import * as THREE from "three"
import { DoubleSide } from 'three'

export const Globe = ( props ) => {
  const scene = props.scene
  const camera = props.camera
  const renderer = props.renderer
  const light = new THREE.DirectionalLight(0xffffff, 0.8);

  const positionX = props.positionX
  const positionY = props.positionY

  var mapSimpleTexture = new THREE.TextureLoader().load( 'earth-simple-shapes.png' );
  var bumpMapSimpleTexture = new THREE.TextureLoader().load( 'earth-simple-shapes-bump-map.png' );
  mapSimpleTexture.anisotropy = 16
  mapSimpleTexture.encoding = THREE.sRGBEncoding;
  const globeMesh = new THREE.Mesh(
  new THREE.SphereGeometry(1 * props.scale, 34, 34),
  new THREE.MeshPhongMaterial({
    map: mapSimpleTexture,
    transparent: true,
    bumpMap: bumpMapSimpleTexture,
    bumpScale: 1,
    alphaTest: 0.4,
    color: props.color,
    shininess: 50,
    side: THREE.DoubleSide
  })
);

  
  globeMesh.position.x = positionX
  globeMesh.position.y = positionY

  const animationLoop = () => {
    requestAnimationFrame( animationLoop )
    if(props.invertRotation === true) {
      globeMesh.rotation.x -= 0.01 * props.rotateAcceleration / 10;
      globeMesh.rotation.y -= 0.01 * props.rotateAcceleration / 10;
    } else {
      globeMesh.rotation.x += 0.01 * props.rotateAcceleration / 10;
      globeMesh.rotation.y += 0.01 * props.rotateAcceleration / 10;

    }


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

