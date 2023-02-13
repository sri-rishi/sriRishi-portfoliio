import { Link, Text } from "@chakra-ui/react";

const MenuTabs = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    )
}

export default MenuTabs;