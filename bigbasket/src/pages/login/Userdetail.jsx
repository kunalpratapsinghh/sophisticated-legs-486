import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Container,
    Divider,
    Button,
    Text
  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import {logout} from "../Signup/auth.actions"

const Userdetail = ({name,email}) => {
    let dispatch = useDispatch();

    let handlelogout= ()=>{
        dispatch(logout());

    }


  return (
    <Container>
        <Menu>
            <MenuButton as={Button} color='green'  >
                {name}
            </MenuButton>
            <MenuList>
                <MenuGroup title='Profile'>
                <MenuItem>{name}</MenuItem>
                <MenuItem>{email} </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Help'>
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
                </MenuGroup>
                <Divider />
                <Button onClick={()=>handlelogout()} >Logout</Button>
            </MenuList>
        </Menu>
    </Container>
  )
}

export default Userdetail