import React from 'react'
import { returnSvgGroupByUrl } from '../utils/svg'

export const HackitFox3D = () => {
  
  const svgGroup = returnSvgGroupByUrl(`/svgs/hackitFox.svg`)

  console.log(svgGroup)
  
  return (
    <div>
      
    </div>
  )
}
