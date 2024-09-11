import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../UI/FlexBetween";
import WidgetWrapper from "../UI/WidgetWrapper";
import ashutosh from '../../assets/ashutosh.jpg'
import pritam from '../../assets/pritam.jpg'
import sahil from '../../assets/sahil.jpg'
import linkedin from '../../assets/linkedin.png'
import FlexD from '../UI/FlexDev'
import FlexDT from "components/UI/FlexForText";

const DeveloperWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper marginTop={"10px"}>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Developers
                </Typography>
                <Typography color={medium}>Team Social Snap</Typography>
            </FlexBetween>
            <FlexD>
                <div className="">
                    <img
                        width="200px"
                        height="250px"
                        alt="advert"
                        src={ashutosh}
                        style={{ borderRadius: "50%", margin: "0.75rem 0" }}
                    />
                    <FlexDT>
                    <Typography color={main}>ASHUTOSH ACHARYA</Typography>
                    <Typography color={medium}>21BCED29</Typography>

                    <Typography color={medium}> <a href="https://www.linkedin.com/in/ashutosh-acharya-50b829240/"><img src={linkedin} alt="linkedin" /></a></Typography>
                    </FlexDT>
                </div>
                <div className="">
                    <img
                        width="200px"
                        height="250px"
                        alt="advert"
                        src={pritam}
                        style={{ borderRadius: "50%", margin: "0.75rem 0" }}
                    />
                    <FlexDT>
                    <Typography color={main}>PRITAM NANDA</Typography>
                    <Typography color={medium}>21BCSB13</Typography>

                    
                    <Typography color={medium}> <a href="https://www.linkedin.com/in/pritam-nanda-linkdin"><img src={linkedin} alt="linkedin" /></a></Typography>
                    </FlexDT>
                </div>
                <div className="">
                    <img
                        width="200px"
                        height="250px"
                        alt="advert"
                        src={sahil}
                        style={{ borderRadius: "50%", margin: "0.75rem 0" }}
                    />
<FlexDT>
                    <Typography color={main}>SMRUTI RANJAN MOHAPATRA</Typography>
                    <Typography color={medium}>21BCSF37</Typography>


                    <Typography color={medium}> <a href="https://www.linkedin.com/in/smruti-ranjan-mohapatra-ba9204254"><img src={linkedin} alt="linkedin" /></a></Typography>
                    </FlexDT>
                </div>



            </FlexD>
            <iframe
                title="Silicon University Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.7805546628915!2d85.80376107469674!3d20.350682310723464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e064769e73%3A0x9288172f3a98c7a4!2sSilicon%20University!5e0!3m2!1sen!2sin!4v1715104353552!5m2!1sen!2sin"
                
                height="450"
                allowFullScreen={true}
                loading="eager"
                style={{border:"0", margin:'7px', width:'100%'}}
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </WidgetWrapper>
    );
};

export default DeveloperWidget;
