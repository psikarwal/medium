import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import img from './ff.jpeg'
import img_1 from './1.jpeg'

export default class HomepageBlog extends Component {

    science = this.props.blogs.filter(blog => blog.category === 'science')
    nature = this.props.blogs.filter(blog => blog.category === 'nature')
    machineLearning = this.props.blogs.filter(blog => blog.category === 'machine learning')
    ai = this.props.blogs.filter(blog => blog.category === 'ai')

    //setBookmark = this.props.setBookmark

    users = this.props.users

    setBookmark = (event) => {
        console.log(event.target.id)
        this.props.setBookmark(event.target.id)
    }


    render(){
        let [...category] = [this.science, this.nature, this.machineLearning, this.ai]
        console.log('render HomeBlog')
        console.log(category)
        return(
            <div>
                {category.map ( cate => (
                    
                <div>
                    <h4 style={{ letterSpacing: '3px', textAlign: 'left', fontSize:'25px'}}>{cate[0].category.toUpperCase()}</h4>
                    {cate.map(blog => (
                    <div> 
                        <Link to={"/blog/"+blog.id}>
                    <div className="bind">
                        <div className="card-content">
                        
                        <h4>
                            {blog.title}
                        </h4>
                        <p style={{opacity: '0.7'}} id={blog.id}>
                            {blog.content.substring(0,50)+'...'}
                        </p>
                        <p style={{opacity: '0.9'}} id={blog.user_id}>
                            {this.users.filter((user) => user.uid === blog.user_id)[0].name}<br />
                            <span style={{fontSize: 10}}>{blog.timestamp}. <span className="glyphicon glyphicon-star" aria-hidden="true" /></span>
                            <span id={blog.id}className="glyphicon glyphicon-bookmark" aria-hidden="true" onClick={this.setBookmark} style={{float: 'right'}}/>
                            <span className="glyphicon glyphicon-edit" aria-hidden="true" style={{float: 'right', paddingLeft: '2%', paddingRight: '2%'}} />
                        </p>
                        </div>
                        <div className="card-image">
                        <img src={img_1} className="img-responsive" />
                        </div>
                    </div><hr />
                    </Link>
                    </div>
                    ))}
                </div>
                ))}
            </div>
        )
    }
}