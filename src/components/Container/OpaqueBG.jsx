import React from 'react'

const OpaqueBG = ({show = ""}) => { 
  return (
    <div className={`${show} fixed inset-0 bg-black bg-opacity-25`} />
  )
}

export default OpaqueBG