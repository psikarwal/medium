import React, { Component } from 'react'
import HomepageBlog from './HomepageBlog.js'

export default class Bookmarks extends Component {
    setBookmark = this.props.setBookmark
    users = this.props.users
    blogs = this.props.blogs
    bookmark = this.props.bookmark

    
    render(){
        let bookmarkedBlogs = this.bookmark.map(bkmark => (this.blogs.filter(blog => blog.id === bkmark))[0])
        console.log(bookmarkedBlogs)
        console.log(this.blogs)
        return(
            <div>
                <h1> Bookmarks </h1>
                
            </div>
        )
    }
}