import { Box, Flex} from "@chakra-ui/react";
import { useState } from "react";
import { Logo, MenuLinks, MenuToggle } from "./components";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle =() => setIsOpen(!isOpen);

    return (
        <Flex
            as="nav"
            alignItems="center"
            justify="space-between"
            wrap="wrap"
            p="1rem 2rem"
            w="100%"
            height="fit-content"
            position="fixed"
            zIndex="50"
        >
            <Logo  />
            <Box display="flex" alignItems="center" gap="2rem">
                <MenuToggle toggle={toggle} isOpen={isOpen} />
            </Box>
            <MenuLinks isOpen={isOpen}/>
        </Flex>
    )
}

export default Navbar;