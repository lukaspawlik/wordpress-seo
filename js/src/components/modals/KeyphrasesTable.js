/* External dependencies */
import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "@wordpress/element";

/**
 * The Related Keyphrases table component.
 */
class KeyphrasesTable extends React.Component {
	/**
	 * Constructs the Related Keyphrases table.
	 *
	 * @param {Object} props The props for the Related Keyphrases table.
	 *
	 * @returns {void}
	 */
	constructor( props ) {
		super( props );
	}

	/**
	 * Renders the Related Keyphrases table.
	 *
	 * @returns {ReactElement} The Related Keyphrases table.
	 */
	render() {
		return (
			<Fragment>
				<h2 fakeProp={ this.props.fakeProp }>Keyphrase table</h2>
				<p>The Keyphrase table will come here!</p>
			</Fragment>
		);
	}
}

KeyphrasesTable.propTypes = {
	fakeProp: PropTypes.string,
};

KeyphrasesTable.defaultProps = {
	fakeProp: "",
};

export default KeyphrasesTable;