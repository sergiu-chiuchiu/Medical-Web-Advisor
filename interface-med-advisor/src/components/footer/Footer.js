import React from "react";
import "./Footer.css";
import { Grid } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
    return (
        // <div >
        //     <footer className="footer is-primary">
        //         <div className="container">
        //             <div className="columns">
        //                 <div className="column">
        //                     <p>Footer</p>
        //                 </div>
        //                 <div className="column has-text-right">
        //                     <a className="icon" href="#"><i className="fa fa-facebook"></i></a>
        //                     <a className="icon" href="#"><i className="fa ta-twitter"></i></a>
        //                 </div>
        //             </div>
        //         </div>
        //     </footer>
        // </div>
        <footer className="footer">
            
            <table>
                <tr>
                    <td>
                        <p>Site map</p>
                        <nav >
                            <ul>
                                <li>
                                    <a className="link" href="/home">Home</a>
                                </li>
                                <li>
                                    <a className="link" href="/medicalStaff">Medical Staff</a>
                                </li>
                                <li>
                                    <a className="link" href="/feeds">Feeds</a>
                                </li>
                                <li>
                                    <a className="link" href="/contact">Contact</a>
                                </li>
                                <li>
                                    <a className="link" href="/about">About</a>
                                </li>
                                <li>
                                    <a className="link" href="/login">Login</a>
                                </li>
                                <li>
                                    <a className="link" href="/register">Register</a>
                                </li>
                            </ul>
                        </nav>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="socialIcons">
                        <div className="column has-text-right">
                            <SocialIcon url="http://twitter.com/" />&nbsp;&nbsp;
                            <SocialIcon url="http://facebook.com" />&nbsp;&nbsp;
                            <SocialIcon url="http://instagram.com" />&nbsp;&nbsp;
                            <SocialIcon url="http://google.com" />&nbsp;&nbsp;
                            <SocialIcon url="http://youtube.com" />&nbsp;&nbsp;
                        </div>
                    </td>
                </tr>
                
                
            </table>
          
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
              Medical Advisor
          </p>
          
      </footer>
    );
};

export default Footer;