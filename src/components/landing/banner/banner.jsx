import React, { Component } from 'react';

import classnames from 'classnames';

import injectSheet from 'react-jss/lib/injectSheet';

import AtomicButton from '../../smallviews/buttons/atomic_button';

import Bg1 from '../../../medias/images/backgrounds/1.jpeg';

import styles from './banner_styles';

const backgrounds = [Bg1];

class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentBackground: 0
		}
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	changeBackground = () => {
		const { currentBackground } = this.state;
		let nextBackground = null;
		if (currentBackground >= backgrounds.length - 1) {
			nextBackground = 0;
		} else {
			nextBackground = currentBackground + 1;
		}
		this.setState({
			currentBackground: nextBackground
		});
	}

	interval = setInterval(this.changeBackground, 5000);

	render() {
		const { sheet: { classes } } = this.props;
		const { currentBackground } = this.state;

		return (
			<div
				className={classnames(classes.container)}
				style={{
					backgroundImage: `url('${backgrounds[currentBackground]}')`
				}}
			>
				<div className={classnames(classes.darken)} />
				<div className={classnames(classes.contentContainer)}>
					<div className={classnames(classes.content)}>
						<div className={classnames(classes.title)}>
							{'Interventions & Questions'}
						</div>
						<div className={classnames(classes.description)}>
							{'Notre équipe est à votre écoute !'}
						</div>
						<div className={classnames(classes.buttons)}>
							<AtomicButton>
								{'Demander une intervention'}
							</AtomicButton>
							<AtomicButton>
								{'Voir la F.A.Q'}
							</AtomicButton>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default injectSheet(styles)(Banner);