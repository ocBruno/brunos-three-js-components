import {
  SVGLoader,
  Group,
  MeshBasicMaterial,
  DoubleSide,
  ShapeBufferGeometry,
  Mesh
} from 'three'

export const handleSvgIsLoaded = data => {}

export const returnGroup = data => {
  const paths = data.paths

  const group = new Group()

  for (var i = 0; i < paths.length; i++) {
    var path = paths[i]

    var material = new MeshBasicMaterial({
      color: path.color,
      side: DoubleSide,
      depthWrite: false
    })

    var shapes = path.toShapes(true)

    for (var j = 0; j < shapes.length; j++) {
      var shape = shapes[j]
      var geometry = new ShapeBufferGeometry(shape)
      var mesh = new Mesh(geometry, material)

      group.add(mesh)
    }
    return group
  }
}

export const handleSvgIsLoading = xhr => {
  console.log(`loading svg, xhr:`)
  console.log(xhr)
}

export const handleSvgLoadingError = error => {
  console.error(error)
}

export const returnSvgGroupByUrl = url => {
  // instantiate a loader
  const loader = new SVGLoader()

  // load a SVG resource
  loader.load(
    // resource URL
    url,
    // called when the resource is loaded
    function (data) {
      return returnGroup(data)
    },
    // called when loading is in progresses
    function (xhr) {
      handleSvgIsLoading(xhr)
    },
    // called when loading has errors
    function (error) {
      handleSvgLoadingError(error)
    }
  )
}
