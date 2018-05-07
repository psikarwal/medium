import React, { Component } from 'react'

export default class Popular extends Component {
    render(){
        return(
            <div className="col-md-4 col-xs-12 blog-panel" style={{marginLeft: '2% !important', marginTop: '3%', padding: 0}}>
                <h4 style={{paddingLeft: '4%', width: '60%'}}>
                Popular on Medium
                <hr />
                </h4>
                <div className="bind">
                <div className="card-content" style={{width: '100%'}}>
                    <h4>
                    The Teddy Affair
                    </h4>
                    <p style={{opacity: '0.7'}} id="Description">
                    There were many things I found strange when I first moved to...
                    </p>
                    <p style={{opacity: '0.9'}} id="author">
                    Dasha Ziborova in spiralbound<br />
                    <span style={{fontSize: 10}}>May 4. <span className="glyphicon glyphicon-star" aria-hidden="true" /></span>
                    </p>
                    <hr />
                </div>
                </div>
            </div>
        )
    }
}