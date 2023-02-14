import { Box, Flex, theme } from "@chakra-ui/react";
import { useState } from "react";
import { Logo, MenuLinks, MenuToggle } from "./components";
import {ThemeSwitcher} from "../index";

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
            background={["black"]}
            theme={theme}
        >
            <Logo  />
            <Box display="flex" alignItems="center" gap="2rem">
                <ThemeSwitcher display={["block", "block", "none", "none"]}/>
                <MenuToggle toggle={toggle} isOpen={isOpen} />
            </Box>
            <MenuLinks isOpen={isOpen}/>
        </Flex>
    )
}

export default Navbar;