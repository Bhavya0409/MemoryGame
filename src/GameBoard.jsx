import React, {Component} from 'react';
import {Button, Row, Col, Container} from 'reactstrap';
import "./GameBoard.scss";

class GameBoard extends Component {
	render() {
		const numCols = [...Array(12).keys()];
		const numRows = [...Array(6).keys()];
		return (
			<Container>
				{numRows.map((value, index) => {
					return (<Row key={index}>
						{numCols.map((value, index) => {
							return (
								<Col key={index}>
									<Button outline color="primary">0</Button>
								</Col>
							)
						})}
					</Row>)
				})}
			</Container>
		)
	}
};

export default GameBoard;