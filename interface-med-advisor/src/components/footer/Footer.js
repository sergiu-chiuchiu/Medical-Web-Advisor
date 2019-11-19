import React from "react";
import "./Footer.css";
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
    return (
        <footer className="footer">
            <table>
                <tr>
                    <td className="copyright pull-right">
                        <p>
                            &copy; {new Date().getFullYear()}{" "}
                            MedCare 
                        </p>
                    </td>
                    <td className="socialIcons">
                        <SocialIcon url="http://twitter.com/" />&nbsp;&nbsp;
                        <SocialIcon url="http://facebook.com" />&nbsp;&nbsp;
                        <SocialIcon url="http://instagram.com" />&nbsp;&nbsp;
                        <SocialIcon url="http://google.com" />&nbsp;&nbsp;
                        <SocialIcon url="http://youtube.com" />&nbsp;&nbsp;
                    </td>
                </tr>
            </table>
            
      </footer>
    );
};

export default Footer;