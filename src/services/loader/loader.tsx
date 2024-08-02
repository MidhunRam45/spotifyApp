import React from 'react'
import { useSelector } from 'react-redux'

const Loader = () => {
  const layoutsettings = useSelector((state: any) => state?.layoutsettings)

  return (
    <div className='loader-main'>
      {/* <span className="page-loader"></span> */}
      <img src={layoutsettings?.loading_animation}></img>
    </div>
  )
}

export default Loader
