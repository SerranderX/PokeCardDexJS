import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../../context/AppContext';
import GitHubIcon from "./../../assets/icons/social/github";
import LinkedinIcon from "./../../assets/icons/social/linkedin";
import TwitterIcon from "./../../assets/icons/social/twitter";
import FacebookIcon from "./../../assets/icons/social/facebook";
import './Footer.css';


const Footer = () => {
	const { theme } = useContext(AppContext);

    return (
        <footer className="Footer-distributed">
			<div className="Footer-right">
				<motion.a whileHover={{scale: 1.1}} whileTap={{scale: .9}} href="#"><i className="fa fa-facebook">{FacebookIcon(theme)}</i></motion.a>
				<motion.a whileHover={{scale: 1.1}} whileTap={{scale: .9}} href="#"><i className="fa fa-twitter">{TwitterIcon(theme)}</i></motion.a>
				<motion.a whileHover={{scale: 1.1}} whileTap={{scale: .9}} href="#"><i className="fa fa-linkedin">{LinkedinIcon(theme)}</i></motion.a>
				<motion.a whileHover={{scale: 1.1}} whileTap={{scale: .9}} href="#"><i className="fa fa-github">{GitHubIcon(theme)}</i></motion.a>
			</div>
			<div className="Footer-left">
				<p className="Footer-links">
					<a className="link-1" href="#">Home</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
				</p>
				<p>Company Name &copy; 2015</p>
			</div>
		</footer>
    );
};

export { Footer };