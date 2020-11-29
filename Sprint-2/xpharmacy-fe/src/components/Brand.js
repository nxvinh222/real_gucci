import React, { Component } from 'react'

class Brand extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light" style={{
                padding: '30px'
            }}>
                <a className="navbar-brand active" href="#" style={{color: '#33ACFF'}}>xPharmacy.</a>
                <button className="navbar-toggler" type="button" data-toggle="colapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        )
    }
}

export default Brand;
