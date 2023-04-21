import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import propTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<div className="border p-3">
			<div className="row w-100 col-8">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={rigoImage} alt={props.name} className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button type="button" className="btn" data-bs-toggle="modal" data-bs-target={"#editModal-"+props.index}>
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn" onClick={() => props.onDelete()}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{props.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.email}</span>
				</div>
			</div>
		</div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
    name: propTypes.string,
    phone: propTypes.string,
    address: propTypes.string,
    email: propTypes.string,
    img: propTypes.string,
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
