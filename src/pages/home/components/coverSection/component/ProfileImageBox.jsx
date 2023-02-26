import { Box, Image} from "@chakra-ui/react";
import { profileImage } from "../../../../../assets/images/images";

const ProfileImageBox = () => {
    return(
        <Box 
            width={[ "100%", "80%", "80%","40%"]}
            display="flex"
            justifyContent="center"
        >
            <Image 
                src={profileImage} 
                alt="Rishi Srivastava" 
                boxSize="80%"
                transform="rotate(-20deg)"
                _hover={{
                    transform: "rotate(0deg)"
                }}
            />
        </Box>
    )
}

export default ProfileImageBox