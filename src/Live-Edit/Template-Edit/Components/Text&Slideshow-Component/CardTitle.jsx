
import React from 'react'

const CardTitle = ({
    tag,
    idIndex,
    actionType,
    content,
    fontSize,
    fontType,
    fontWeight,
    color,
    textTransform,
    fontStyle,
    textAlign,
    textDecoration,
    lineHeight,

    section,
    element
}) => {
    const style = {
        fontSize:`${fontSize}px`,
        fontType: fontType,
        fontWeight: fontWeight,
        color: color,
        textTransform: textTransform,
        fontStyle: fontStyle,
        textAlign: textAlign,
        textDecoration: textDecoration,
        lineHeight: lineHeight,

    }
    return (
    <h2  id={tag} name={actionType} style={ style }>{content}</h2>
    )
}

export default CardTitle

