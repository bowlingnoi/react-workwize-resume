import React, { Component } from 'react'

class Education extends Component {

    constructor(props) {
        super(props)
       
    }

	render() {
		return (
            <div>
            <div className="row">
                <h4 class="col-md-6 text-left">
                    {this.props.degree}
                </h4>
                <h4 class="col-md-6 text-right text-default">{this.props.year}</h4>
            </div>
            <div className="row">
                <div className="col-md-12">{this.props.faculty}
                </div>
            </div>

            </div>
		)
	}
}

export default Education