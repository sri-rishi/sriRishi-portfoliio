import { Box, Image } from "@chakra-ui/react";
import { profileImage } from "../../../assets/images/images";

const ProfileImageBox = () => {
    return(
        <Box boxSize={["60%", "60%", "30%", "30%"]}>
            <Image src={profileImage} alt="Rishi Srivastava"  boxSize="100%"/>
        </Box>
    )
}

export default ProfileImageBox