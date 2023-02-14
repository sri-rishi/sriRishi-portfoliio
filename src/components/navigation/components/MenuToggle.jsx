import { Box, Icon} from "@chakra-ui/react";
import {BiMenuAltRight} from "react-icons/bi"
import {FaTimes} from "react-icons/fa"

const MenuToggle = ({isOpen, toggle}) => {
    return(
        <Box cursor="pointer" fontSize="1.8rem" display={{base: "block", md: "none"}} onClick={toggle}>
            <Icon as={isOpen ? FaTimes : BiMenuAltRight }/>
        </Box>
    )
}

export default MenuToggle;