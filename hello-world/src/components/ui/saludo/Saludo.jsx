import React from 'react'

export const Saludo = ({content= "Mi saludo por defecto", style = "component2"}) => {
  return (
    <h1 className={style}>{content}</h1>
  )
}
