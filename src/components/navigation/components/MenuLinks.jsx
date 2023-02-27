import { Box, Stack, Link} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import MenuTabs from "./MenuTabs";

const MenuLinks = ({isOpen}) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
            bg={["transparent", "#404258", "transparent", "transparent"]}
            padding={["none", "10px 14px", "none", "none"]}
            boxShadow={["none", "md", "none", "none"]}
            borderRadius={["none", "1rem", "none", "none"]}
            color={["inherit", "white", "inherit", "inherit"]}
            height={["93vh", "fit-content"]}
        >   
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                height="inherit"
            >
                <Link as={RouterLink}  to="/">
                    <MenuTabs>Home</MenuTabs>
                </Link>
                <Link as={RouterLink}  to="/about">
                    <MenuTabs>About</MenuTabs>
                </Link>
                <MenuTabs to="/project">Project</MenuTabs>
                <MenuTabs to="/blogs">Blogs</MenuTabs>
                <MenuTabs to="/contact">Contact</MenuTabs>
            </Stack>
        </Box>
    )
}

export default MenuLinks;