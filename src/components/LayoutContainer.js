import React from "react";

function LayoutContainer(props) {
	return (
		<div className="LayoutContainer">
			<img src={props.data.hdurl} img alt={props.data.title} />
			<h2>{props.data.title}</h2>
			<h3>{props.data.date}</h3>
			<p>{props.data.explanation}</p>
            <p>© {props.data.copyright}</p>
		</div>
	);
}

export default LayoutContainer;
