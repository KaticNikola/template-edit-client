
import React from 'react'

const Image = ({
    url,
    height,
    width,
    id,
}) => {
    const style = {
      height: `${height}px`,
      width: `${width}px`,
    }
    return (
        <img src={url} style={style} id={id} alt=""/>
    )
}

export default Image

