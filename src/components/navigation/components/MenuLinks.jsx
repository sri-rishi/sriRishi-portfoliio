import { Box, Stack,} from "@chakra-ui/react";
import {ThemeSwitcher} from "../../index";
import MenuTabs from "./MenuTabs";

const MenuLinks = ({isOpen}) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >   
            <Stack
                spacing={8}
                align="center"
                height={["93vh", "fit-content"]}
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                bg={["transparent", "#404258", "transparent", "transparent"]}
                padding={["none", "10px 14px", "none", "none"]}
                boxShadow={["none", "md", "none", "none"]}
                borderRadius={["none", "1rem", "none", "none"]}
                color={["inherit", "white", "inherit", "inherit"]}
            >
                <MenuTabs to="/">Home</MenuTabs>
                <MenuTabs to="/about">About</MenuTabs>
                <MenuTabs to="/project">Project</MenuTabs>
                <MenuTabs to="/contact">Contact</MenuTabs>
                <ThemeSwitcher display={["none", "none", "block", "block"]}/>
            </Stack>
        </Box>
    )
}

export default MenuLinks;