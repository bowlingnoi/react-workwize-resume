import React, { Component } from 'react'

class Skill extends Component {

    constructor(props) {
        super(props)
       
    }

	render() {
		return (
			<div className="row">
                <div class="col-md-6">{this.props.title}</div>
                <div class="col-md-6">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
		)
	}

}

export default Skill