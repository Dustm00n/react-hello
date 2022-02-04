import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import image from "../../img/rigo-baby.jpg";
import Card from "./Card.jsx";
import JumboTron from "./jumbotron.jsx";
import NavBar from "./navbar.jsx";
import SecondsCounter from "./SecondsCounter.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<JumboTron />
			<div className="container-fluid mt-5">
				<div className="row">
					<div className="col">
						<Card
							Tittle="Hola"
							Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec tortor enim. Suspendisse in rhoncus elit. Ut quam sapien, vestibulum ut ornare sed, congue ut risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula vitae tortor et condimentum. Phasellus feugiat ligula ut ligula imperdiet, sit amet vestibulum augue semper. Vivamus orci sapien, mattis sit amet mollis in, faucibus posuere eros. Integer eu convallis tortor. Maecenas dignissim tellus erat, vel rhoncus orci lacinia iaculis."
							Button="PINCHA!"
							Image={image}
						/>
					</div>
					<div className="col">
						<Card
							Tittle="Hola"
							Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec tortor enim. Suspendisse in rhoncus elit. Ut quam sapien, vestibulum ut ornare sed, congue ut risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula vitae tortor et condimentum. Phasellus feugiat ligula ut ligula imperdiet, sit amet vestibulum augue semper. Vivamus orci sapien, mattis sit amet mollis in, faucibus posuere eros. Integer eu convallis tortor. Maecenas dignissim tellus erat, vel rhoncus orci lacinia iaculis."
							Button="PINCHA!"
							Image={image}
						/>
					</div>
					<div className="col">
						<Card
							Tittle="Hola"
							Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec tortor enim. Suspendisse in rhoncus elit. Ut quam sapien, vestibulum ut ornare sed, congue ut risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula vitae tortor et condimentum. Phasellus feugiat ligula ut ligula imperdiet, sit amet vestibulum augue semper. Vivamus orci sapien, mattis sit amet mollis in, faucibus posuere eros. Integer eu convallis tortor. Maecenas dignissim tellus erat, vel rhoncus orci lacinia iaculis."
							Button="PINCHA!"
							Image={image}
						/>
					</div>
					<div className="col">
						<Card
							Tittle="Hola"
							Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec tortor enim. Suspendisse in rhoncus elit. Ut quam sapien, vestibulum ut ornare sed, congue ut risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula vitae tortor et condimentum. Phasellus feugiat ligula ut ligula imperdiet, sit amet vestibulum augue semper. Vivamus orci sapien, mattis sit amet mollis in, faucibus posuere eros. Integer eu convallis tortor. Maecenas dignissim tellus erat, vel rhoncus orci lacinia iaculis."
							Button="PINCHA!"
							Image={image}
						/>
					</div>
				</div>
			</div>
			<SecondsCounter />
		</>
	);
};
SecondsCounter.propTypes = {
	digitSeis: PropTypes.number,
	digiCinco: PropTypes.number,
	digitCuatro: PropTypes.number,
	digitTres: PropTypes.number,
	digitDos: PropTypes.number,
	digitUno: PropTypes.number,
};

let countingNumber = 0;
setInterval(function () {
	let Seis = Math.floor(countingNumber / 100000);
	let Cinco = Math.floor(countingNumber / 10000);
	let Cuatro = Math.floor(countingNumber / 1000);
	let Tres = Math.floor(countingNumber / 100);
	let Dos = Math.floor(countingNumber / 10);
	let Uno = Math.floor(countingNumber / 1);
	countingNumber++;
	ReactDOM.render(
		<Counter
			digitUno={Uno}
			digitTwo={Dos}
			digitThree={Tres}
			digitFour={Cuatro}
			digitFive={Cinco}
			digitSix={Seis}
		/>,
		document.querySelector("#app")
	);
}, 1000);
export default Home;
