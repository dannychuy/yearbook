import React from "react"
import classNames from 'classnames'

import styles from "../components/card.module.css"

class Card extends React.Component {
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
						- <b>Undergraduate Student Instructor</b> <br />
						- Head of Tutors <br />
						- Tutor <br />
					</div>
				</div>
				<div className={styles.description}>
					CS61B is the second introductory CS course here at Cal. We cover an assortment of topics like <i>Data Structures</i> (Hashmaps, Balance Trees, Game Trees, Quick Unions) and <i>Algorithms</i> (BFS, Djikstra's, Prims).
					<br />

				</div>
				<a className={styles.button} href="https://inst.eecs.berkeley.edu/~cs61b/">
					Let's Go!
				</a>
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
						{this.card.positions.map((position) => (<div>- {position.position} </div>))}
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

export default Card
