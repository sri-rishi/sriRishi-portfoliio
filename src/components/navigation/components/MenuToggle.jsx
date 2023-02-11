import { CloseIcon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/layout"
import { MenuIcon } from "@chakra-ui/menu"

const MenuToggle = ({props}) => {
    return(
        <Box display={{base: "block", md:"none"}} onClick={() =>props.toggle}>
            {
                props.isOpen ? <CloseIcon /> : <MenuIcon />
            }
        </Box>
    )
}

export default MenuToggle;