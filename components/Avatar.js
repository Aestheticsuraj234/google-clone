import React from 'react'

const Avatar = ({url,className}) => {
  return (
    <img
    loading={"lazy"}
    src={url}
    className={` h-10 rounded-full cursor-pointer duration-150 transform transition hover:scale-110  ${className}`}
    alt='Avatar'
    />
  )
}

export default Avatar