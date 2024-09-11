import Navbar from "./NavBar";
import { Box } from "@mui/material";
import DeveloperWidget from "./widgets/DeveloperWidg";

const Help = (props) => {
    return (
        <Box>
            <Navbar user={props.user} />
            <DeveloperWidget />
        </Box>
    )



}
export default Help;