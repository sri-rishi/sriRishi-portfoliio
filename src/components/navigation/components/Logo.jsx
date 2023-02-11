import { Box , Text} from "@chakra-ui/layout"

const Logo = (props) => {
    return(
        <Box {...props}>
            <Text fontSize="lg" fontWeight="bold">
                RS
            </Text>
        </Box>
    )
}

export default Logo;