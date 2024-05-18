import React from 'react'
import PropTypes from 'prop-types'



export default function Hero(props) {
  return (
   <div class="p-5 text-center bg-image" style={{ height: '300px', backgroundColor:"#333331", borderBottom:'1px solid white'}}>
  <div class="mask">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="text-white" style={{width: '28rem'}}>
        <h1 class="mb-3">{props.title}</h1>
        <h4 class="mb-3">{props.description}</h4>
      </div>
    </div>
  </div>
</div>
    
  )
}

Hero.propTypes = {
    title : PropTypes.string,
    description : PropTypes.string
}
