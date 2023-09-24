import React from 'react'
import {Link} from "react-router-dom"
import {Button} from '@chakra-ui/react'

const NavItem = ({path,label}) => {
  return (
    <div>
        <Link to={path}>
            <Button size="sm" as="li">{label}</Button>
        </Link>
    </div>
  )
}

export default NavItem