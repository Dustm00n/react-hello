import React from "react";

const JumboTron = (props) => {
	return (
		<div className="container p-1 bg-light">
			<div className="jumbotron">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg "
						href="#"
						role="button d-inline-flex p-2 bd-highlight">
						Learn more
					</a>
				</p>
			</div>
		</div>
	);
};
export default JumboTron;
