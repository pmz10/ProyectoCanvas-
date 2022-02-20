import React from 'react'

export const MatricesBlucles = () => {
  return (
    <div 
    className='container-can text-center'
    style={myStyles.BoxOne}
    >
        <h3 >Soy la primera caja</h3>
    </div>
  )
}

let myStyles = {
    BoxOne: {
        backgroundColort: 'red',
        width:'100%',
        height:'10%',
        border: '3px'
    }
}
