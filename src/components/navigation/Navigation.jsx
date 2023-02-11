
import {Box} from "@chakra-ui/layout"
import { Logo, MenuToggle } from "./components";


const Navigation = () => {
    return (
        <Box bg='black' w='100%' p={4} color='white'>
            <Logo />
            <MenuToggle />
        </Box>
    )
}

export default Navigation;