import React from "react"
import { Helmet } from "react-helmet"

import styles from "./index.module.css"

import Background from "../components/background.js"
import Card, { HeaderCard, ContentCard} from "../components/card.js"
import { Cards } from "../data/cards.js"

const IndexPage = () => (<Index />)

function FindCard(card) {
	switch (card.type) {
		case 'content':
			return <ContentCard card={card}/>
		case 'header':
			return <HeaderCard card={card}/>
		default:
			return <Card card={card}/>
	}
}

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = { winWidth: 0, winHeight: 0 };
		this.jumpHeight = 150;
		this.rotateRange = 50;
		this.scrollSpeed = 150;
		this.scrollFreq = this.scrollSpeed * Math.PI;
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
		document.getElementById("background").addEventListener('scroll' , this.handleScroll)
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
		document.getElementById("background").removeEventListener('scroll',this.handleScroll);
	}

	updateWindowDimensions() {
		this.setState({ winWidth: window.innerWidth, winHeight: window.innerHeight });
	}

	handleScroll  = (event) => {
		let sections = Cards.map((card) => card.id);
		let postcards = document.querySelectorAll("section");

		let index = 0;
		let next_index = index+1;
		let card = document.getElementById(sections[index]);
		let queued_card = document.getElementById(sections[next_index]);
		let background = document.getElementById("background");

		next_index =  Math.floor(background.scrollTop/this.scrollFreq) % sections.length;

		// Find new card
		index = next_index;
		card.style.transform = "translate(-50%, -50%)";
		// postcards.style.zIndex = 0;
		for (const element of postcards) {
			element.style.zIndex = 0;
			element.style.transform = "translate(-50%, -50%) rotate(0deg)";
		}

		card = document.getElementById(sections[next_index]);
		card.style.zIndex = 2;

		queued_card = document.getElementById(sections[(next_index+1) % sections.length]);
		queued_card.style.zIndex = 1;

		card.style.transform = "translate(-50%, -" + (50 + Math.abs(this.jumpHeight*Math.sin(background.scrollTop/this.scrollSpeed))) + "%) " +
					"rotate(-" + (Math.abs(this.rotateRange*Math.sin(background.scrollTop/this.scrollSpeed))) + "deg)";

		// Switch current card from front/back
		if (background.scrollTop%this.scrollFreq > this.scrollFreq/2) {
			card.style.zIndex = 0;
		} else {
			card.style.zIndex = 2;
		}
	}

	render() {
	    return (
	    	<div>
				<Helmet>
					<meta charSet="utf-8" />
					<title>Danny Chu</title>
				</Helmet>
				
				<div id="background" className={styles.background}>
					{Cards.map((card) => (<Background/>))}
				</div>

				<div>
					{Cards.map((card) => (FindCard(card))).reverse()}
				</div>
				
				
			</div>
		);
	}
}

export default IndexPage
