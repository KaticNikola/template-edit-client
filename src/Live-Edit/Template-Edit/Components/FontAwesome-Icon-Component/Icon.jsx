
import React from 'react'

const Icon = ({
    icon,
    fontSize,
    color,
    textAlign,
    tag,
}) => {
    const style = {
        fontSize: `${fontSize}px`,
        color,
        textAlign,
    }
    return (
        <i style={style} className={icon} id={tag} />
    )
}

export default Icon

