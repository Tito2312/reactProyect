import React from 'react'
import { Logo } from '../../ui/Logo/Logo'
import { NameCompany } from '../../ui/NameCompany/NameCompany'
import { NavBar } from '../../ui/NavBar/NavBar'


export const Header = ({props}) => {
  return (
    <header className={props}>
      <Logo props= "logo"></Logo>
      <NameCompany content="BMW" props="nameCompany"></NameCompany>
      <NavBar></NavBar>
    </header>
  )
}
