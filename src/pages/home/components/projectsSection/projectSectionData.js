import { ecommerceAppPreview, quizAppPreview, socialMediaPreview } from "../../../../assets/images/images";

export const projects = [
    {
        id: "1",
        projectName: "SocioFlasher",
        description: "SocioFlasher is a social media app like Twitter that let users connect and share there thoughts. Visit app and connect with each other",
        coverImage: socialMediaPreview,
        liveLink: "https://socioflasher.netlify.app/"
    },
    {
        id: "2",
        projectName: "Quizee",
        description: "Quizee is a quiz web app where users can play quizzes based on category. Play and see how well you know these topics and learn while playing.",
        coverImage: quizAppPreview,
        liveLink: "https://quizee-quiz.netlify.app/",
    },
    {
        id: "3",
        projectName: "Nakshatra Cliq",
        description: "Nakshatra Cliq is a e-commerce web app where users can buy various camera products. Buy your camera to capture moments.",
        coverImage: ecommerceAppPreview,
        liveLink: "https://nakshatra-cliq.netlify.app/",
    }
]