import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const [selectColor, setSelectColor] = useState("");

	return (
		<div>
			<div className="Traffic-top"></div>
			<div className="Traffic-light">
				<div
					onClick={() => setSelectColor("red")}
					className={
						"light red " + (selectColor === "red" ? "selected" : "")
					}></div>
				<div
					onClick={() => setSelectColor("yellow")}
					className={
						"light yellow " +
						(selectColor === "yellow" ? "selected" : "")
					}></div>
				<div
					onClick={() => setSelectColor("green")}
					className={
						"light green " +
						(selectColor === "green" ? "selected" : "")
					}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
