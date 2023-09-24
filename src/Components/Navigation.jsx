import {Container, Flex, HStack} from '@chakra-ui/react'
import NavItem from './NavItem'
import { Outlet } from 'react-router-dom'


const Navigation = () => {
  return (
    <div>
        <Container as="nav" maxW="1300px">
          <HStack as="ul" my="4">
               <NavItem path="/" label="Home" />
               <NavItem path="/users" label="Users" />
               <NavItem path="/courses" label="Courses" />
          </HStack>
        </Container>
        <Outlet />
    </div>
  )
}

export default Navigation