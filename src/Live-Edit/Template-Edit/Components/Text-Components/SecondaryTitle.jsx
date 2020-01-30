
import React from 'react'

const SecondaryTitle = ({
    tag,
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
    letterSpacing,
    marginTop,
    marginLeft,
    marginBottom,
    marginRight,
    paddingTop,
    paddingLeft,
    paddingBottom,
    paddingRight,
}) => {
    const style = {
        fontSize : `${fontSize}px`,
        fontType,
        fontWeight,
        color: color,
        textTransform,
        fontStyle,
        textAlign,
        textDecoration,
        lineHeight,
        letterSpacing,
        marginTop : `${marginTop}px`,
        marginLeft: `${marginLeft}px`,
        marginBottom : `${marginBottom}px`,
        marginRight : `${marginRight}px`,
        paddingTop : `${paddingTop}px`,
        paddingLeft : `${paddingLeft}px`,
        paddingBottom : `${paddingBottom}px`,
        paddingRight : `${paddingRight}px`,

    }
    return (
        <h2 id={tag} name={actionType} style={style}>{content}</h2>
    )
}

export default SecondaryTitle

