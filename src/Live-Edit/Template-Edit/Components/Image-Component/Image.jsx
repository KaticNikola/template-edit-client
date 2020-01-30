
import React from 'react'

const Image = ({
    url,
    height,
    width,
    tag,
}) => {
    const style = {
      height: `${height}px`,
      width: `${width}px`,
    }
    return (
        <img src={url} style={style} id={tag} alt=""/>
    )
}

export default Image

