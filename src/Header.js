import React, { Component } from 'react'

export default class Header extends Component {
    render(){
        return(
            <section id="header">
            <div className="container">
              <div className="col-md-4 col-xs-6 col-md-offset-4">
                <h1 style={{fontWeight: 600, textAlign: 'center'}}>Medium</h1>
              </div>
              <div className="col-md-12 col-xs-12" style={{textAlign: 'center'}}>
                <nav className="navbar navbar-default" role="navigation">
                  <div className="container">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="navbar-brand-centered">
                      <ul className="nav navbar-nav navbar-center">
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                      </ul>
                    </div>{/* /.navbar-collapse */}
                  </div>{/* /.container-fluid */}
                </nav>
              </div>
            </div>
          </section>
        )
    }
}