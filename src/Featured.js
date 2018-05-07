import React, { Component } from 'react'
import img from './ff.jpeg'
import img_1 from './1.jpeg'
import Popular from './Popular.js'
import HomepageBlog from './HomepageBlog.js'
import WantToRead from './WantToRead.js'
import Bookmarks from './Bookmarks.js'

export default class Featured extends Component {
    
    blogs = this.props.blogs
    users = this.props.users
    setBookmark = this.props.setBookmark
    bookmark = this.props.bookmark
    render(){
        return(
            <section id="blog">
            <div className="container">
                <div className="col-md-12">
                    <img src={img} style={{width: '100%'}} />
                </div>
                
                <div className="col-md-8 col-xs-12" style={{width: '62%', marginTop: '3%'}}>
                    <div className="panel with-nav-tabs panel-default">
                    <div className="panel-heading">
                        <ul className="nav nav-tabs">
                        <li className="active"><a href="#tab1default" data-toggle="tab">Featured for members</a></li>
                        <li><a href="#tab2default" data-toggle="tab">Read from your favourites</a></li>
                        <li><a href="#tab3default" data-toggle="tab">Bookmarks</a></li>
                        </ul>
                    </div>
                    <div className="panel-body">
                        <div className="tab-content">
                        <div className="tab-pane fade in active" id="tab1default">
                            <HomepageBlog blogs={this.blogs} users={this.users} setBookmark={this.setBookmark}/>
                        </div>
                        <div className="tab-pane fade" id="tab2default">
                            <WantToRead/>
                        </div>
                        <div className="tab-pane fade" id="tab3default">
                            <Bookmarks blogs={this.blogs} users={this.users} setBookmark={this.setBookmark} bookmark={this.bookmark}/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Popular/>
            </div>
          </section>
        )
    }
}