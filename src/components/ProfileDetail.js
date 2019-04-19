import React, { Component } from 'react'

class ProfileDetail extends Component {

    constructor(props) {
        super(props)
       
    }

	render() {
		return (
        <div className="row">
            <div className="col-md-4 text-left">{this.props.title}</div>
            <div className="col-md-8 text-left">{this.props.value}</div>
        </div>
		)
	}

}

export default ProfileDetail