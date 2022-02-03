import propTypes from "prop-types";
import React from "react";

const Card = (props) => {
	return (
		<div className="col">
			<div className="card h-100">
				<img src={props.Image} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.Tittle}</h5>
					<p className="card-text">{props.Text}</p>
				</div>
				<div className="card-footer">
					<small>
						<button type="button" class="btn btn-dark">
							{props.Button}
						</button>
					</small>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	Tittle: propTypes.string,
	Text: propTypes.string,
	Button: propTypes.string,
	Image: propTypes.string,
};
export default Card;
