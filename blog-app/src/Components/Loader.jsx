import React from 'react'
import Loading from "../images/loading.gif"

export const Loader = () => {
  return (
    <div className='loader'>
        <div className="loader__image">
            <img src={Loading} alt="" />
        </div>
    </div>
  )
}
