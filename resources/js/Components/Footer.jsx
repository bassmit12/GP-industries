import SocialMediaLink from "@/Components/SocialMediaLink";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="mb-2">Follow us on social media!</p>
                <div className="flex justify-center space-x-4">
                    <SocialMediaLink
                        icon={FaInstagram}
                        link="https://www.instagram.com/g.p.stapper/"
                    />
                    <SocialMediaLink
                        icon={SiTiktok}
                        link="https://www.tiktok.com/@gpstapper?lang=nl-NL"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
