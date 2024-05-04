import React from 'react'
import "./Alert.css"

export const Alert = ({ mensaje, color }) => {
    return (
        <>
            {
                mensaje && 
                (
                    color === 'red' ?
                    <div className="alert alert-danger alert-mensaje" role="alert">{mensaje}</div>
                    :
                    <div className="alert alert-primary alert-mensaje" role="alert">{mensaje}</div>
                )
            }
        </>
    )
}