import React, { Component } from 'react'

class Experience extends Component {

    constructor(props) {
        super(props)
    }

	render() {
		return (
            <div className="row">
                <h4 class="col-md-8 text-left">{this.props.title} <small>,{this.props.position}</small></h4>
                <h4 class="col-md-4 text-right text-default">{this.props.year}</h4>
            </div>
		)
	}
}

export default Experience