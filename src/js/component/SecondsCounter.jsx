import React from "react";

const SecondsCounter = (props) => {
	return (
		<div className="main-counter">
			<div className="clock-calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="Seis">{props.digitSeis % 10}</div>
			<div className="Cinco">{props.digitCinco % 10}</div>
			<div className="Cuatro">{props.digitCuatro % 10}</div>
			<div className="Tres">{props.digitTres % 10}</div>
			<div className="Dos">{props.digitDos % 10}</div>
			<div className="Uno">{props.digitUno % 10}</div>
		</div>
	);
};
export default SecondsCounter;
