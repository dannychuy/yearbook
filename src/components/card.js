import React from "react"
import classNames from 'classnames'

import styles from "../components/card.module.css"

export default function FindCard(card) {
	switch (card.type) {
		case 'content':
			return <ContentCard card={card} key={card.id}/>
		case 'header':
			return <HeaderCard card={card} key={card.id}/>
		case 'intro':
			return <IntroCard card={card} key={card.id}/>
		default:
			return <Card card={card} key={card.id}/>
	}
}

export class Card extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.card = props.card;
	}
	render() {
		return (
			<section id={this.card.id} className={styles.postcard}>
				<div className={styles.stampBorder}>
					<div className={styles.filter}></div>
					<div className={styles.stamp}>
					</div>
				</div>
				<div className={styles.header}> 
					<div className={styles.title}> This is a Regular Card. </div>
					<div className={styles.positions}>
						- <b>Boop!</b> <br />
						- Herp Derp Terp <br />
						- Dum dum dan <br />
					</div>
				</div>
				<div className={styles.description}>
					This is an example description. Why can you see it? Danny made a mistake some where :( how sad.
					<br />

				</div>
				<a className={styles.button} href="/#">
					Let's Go!
				</a>
			</section>
	  	)
	}
}

function scrollDown() {
	document.getElementById("background").scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}

export class IntroCard extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.card = props.card;
	}

	
	render() {
		return (
			<section id={this.card.id} className={classNames(styles.postcard, styles.covercard)}>
				<div className={styles.stampBorder}>
					<div className={styles.filter}></div>
					<div className={styles.stamp}>
						<img className={styles.stampImg} src={this.card.image} alt={this.card.id}/>
					</div>
				</div>
				<div className={styles.header}> 
					<div className={styles.title}> {this.card.title} </div>
					<div className={styles.positions}>
						{this.card.ima}
						{this.card.positions.map((position) => (<div key={position.position}>- {position.position} </div>))}
					</div>
				</div>
				<div className={styles.description}>
					{this.card.description} <b>Scroll away!</b>
				</div>
				<div className={styles.arrow} onClick={scrollDown} onKeyDown={scrollDown} role = "button" tabIndex={0}></div>
			</section>
	  	)
	}
}

export class ContentCard extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.card = props.card;
	}
	render() {
		return (
			<section id={this.card.id} className={styles.postcard}>
				<div className={styles.stampBorder}>
					<div className={styles.filter}></div>
					<div className={styles.stamp}>
						<img className={styles.stampImg} src={this.card.image} alt="61B"/>
					</div>
				</div>
				<div className={styles.header}> 
					<div className={styles.title}> {this.card.title} </div>
					<div className={styles.positions}>
						{this.card.positions.map((position) => (<div key={position.position}>- {position.position} </div>))}
					</div>
				</div>
				<div className={styles.description}>
					{this.card.description}
				</div>
				<a className={styles.button} href={this.card.link}>
					Let's Go!
				</a>
			</section>
	  	)
	}
}

export class HeaderCard extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.card = props.card;
	}
	render() {
		return (
			<section id={this.card.id} className={classNames(styles.postcard, styles.headercard)}>
				<div className={classNames(styles.header, styles.middle)}> 
					<div className={styles.title}> {this.card.title} </div>
				</div>
				<div className={classNames(styles.headerDescription, styles.description)}>
					{this.card.description}
				</div>
			</section>
	  	)
	}
}
