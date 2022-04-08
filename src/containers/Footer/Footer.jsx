import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../../context/AppContext';
import GitHubIcon from "./../../assets/icons/social/github";
import LinkedinIcon from "./../../assets/icons/social/linkedin";
import TwitterIcon from "./../../assets/icons/social/twitter";
import FacebookIcon from "./../../assets/icons/social/facebook";
import { ENV } from "../../shared/Env";
import './Footer.css';


const Footer = () => {
	const { theme } = useContext(AppContext);

    return (
        <footer className="Footer-distributed">
			<div className="Footer-right">
				<motion.a whileHover={{scale: 1.1}} whileTap={{scale: .9}} href={ENV.developerData.facebook}><i className="fa fa-facebook">{FacebookIcon({theme})}</i></motion.a>
				<motion.a whileHover={{scale: 1.1}} whileTap={{scale: .9}} href={ENV.developerData.twitter}><i className="fa fa-twitter">{TwitterIcon({theme})}</i></motion.a>
				<motion.a whileHover={{scale: 1.1}} whileTap={{scale: .9}} href={ENV.developerData.linkedin}><i className="fa fa-linkedin">{LinkedinIcon({theme})}</i></motion.a>
				<motion.a whileHover={{scale: 1.1}} whileTap={{scale: .9}} href={ENV.developerData.gitHub}><i className="fa fa-github">{GitHubIcon({theme})}</i></motion.a>
			</div>
			<div className="Footer-left">
				<p className="Footer-links">
					<a href="/">Home</a>
					<a href="/pokedex">Pokedex</a>
					<a href="/about">About</a>
				</p>
				<p>{ENV.developerData.signature} &copy; 2022</p>
			</div>
		</footer>
    );
};

export { Footer };