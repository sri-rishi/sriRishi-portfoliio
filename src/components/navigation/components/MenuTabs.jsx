import { Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const MenuTabs = ({ children, isLast, to, ...rest }) => {
    return (
      <Link as={RouterLink} to={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    )
}

export default MenuTabs;