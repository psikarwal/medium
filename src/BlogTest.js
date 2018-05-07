import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import img from './ff.jpeg'
import img_1 from './1.jpeg'
import img_2 from './2.jpg'
import img_3 from './3.png'

export default class BlogTest extends Component {
    blogs= [
        {
            id: '1',
            title: 'First A Blog',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor in, accumsan non quam. Nam consectetur porttitor rhoncus. Curabitur eu est et leo feugiat auctor vel quis lorem. Ut et ligula dolor, sit amet consequat lorem. Aliquam porta eros sedorci. Morbi congue viverra nisl nec rhoncus.Integer mattis, ipsum a tincidunt commodo, lacus arcu elementum elit, at mollis eros ante acrisus. In volutpat, ante at pretium ultricies, velit magna suscipit enim, aliquet blandit massaorci nec lorem. Nulla facilisi. Duis eu vehicula arcu. Nulla facilisi. Maecenas pellentesquevolutpat felis, quis tristique ligula luctus vel. Sed nec mi eros. Integer augue enim, sollicitudinullamcorper mattis eget, aliquam in est. Morbi sollicitudin libero nec augue dignissim utconsectetur dui volutpat. Nulla facilisi. Mauris egestas vestibulum neque cursus tincidunt.Donec sit amet pulvinar orci.Quisque volutpat pharetra tincidunt. Fusce sapien arcu, molestie eget varius egestas,faucibus ac urna. Sed at nisi in velit egestas aliquam ut a felis. Aenean malesuada iaculis nisl,ut tempor lacus egestas consequat. Nam nibh lectus, gravida sed egestas ut, feugiat quisdolor. Donec eu leo enim, non laoreet ante. Morbi dictum tempor vulputate. Phasellusultricies risus vel augue sagittis euismod. Vivamus tincidunt placerat nisi in aliquam. Crasquis mi ac nunc pretium aliquam. Aenean elementum erat ac metus commodo rhoncus.Aliquam nulla augue, porta non sagittis quis, accumsan vitae sem. Phasellus id lectus tortor,eget pulvinar augue. Etiam eget velit ac purus fringilla blandit. Donec odio odio, sagittis sediaculis sed, consectetur eget sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas accumsan velit vel turpis rutrum in sodales diam placerat.Quisque luctus ullamcorper velit sit amet lobortis. Etiam ligula felis, vulputate quis rhoncusnec, fermentum eget odio. Vivamus vel ipsum ac augue sodales mollis euismod nec tellus.Fusce et augue rutrum nunc semper vehicula vel semper nisl. Nam laoreet euismod quam atvarius. Sed aliquet auctor nibh. Curabitur malesuada fermentum lacus vel accumsan. Duisornare scelerisque nulla, ac pulvinar ligula tempus sit amet. In placerat nulla ac antescelerisque posuere. Phasellus at ante felis. Sed hendrerit risus a metus posuere rutrum.Phasellus eu augue dui. Proin in vestibulum ipsum. Aenean accumsan mollis sapien, uteleifend sem blandit at. Vivamus luctus mi eget lorem lobortis pharetra. Phasellus at tortorquam, a volutpat purus. Etiam sollicitudin arcu vel elit bibendum et imperdiet risus tincidunt.Etiam elit velit, posuere ut pulvinar ac, condimentum eget justo. Fusce a erat velit. Vivamusimperdiet ultrices orci in hendrerit.',
            category: 'science',
            timestamp: 'May 18,2018 11:29 PM',
            url: '',
            user_id: '1user',
            likes: 0
        },
    
        {
            id: '5',
            title: 'First B Blog',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor in, accumsan non quam. Nam consectetur porttitor rhoncus. Curabitur eu est et leo feugiat auctor vel quis lorem. Ut et ligula dolor, sit amet consequat lorem. Aliquam porta eros sedorci. Morbi congue viverra nisl nec rhoncus.Integer mattis, ipsum a tincidunt commodo, lacus arcu elementum elit, at mollis eros ante acrisus. In volutpat, ante at pretium ultricies, velit magna suscipit enim, aliquet blandit massaorci nec lorem. Nulla facilisi. Duis eu vehicula arcu. Nulla facilisi. Maecenas pellentesquevolutpat felis, quis tristique ligula luctus vel. Sed nec mi eros. Integer augue enim, sollicitudinullamcorper mattis eget, aliquam in est. Morbi sollicitudin libero nec augue dignissim utconsectetur dui volutpat. Nulla facilisi. Mauris egestas vestibulum neque cursus tincidunt.Donec sit amet pulvinar orci.Quisque volutpat pharetra tincidunt. Fusce sapien arcu, molestie eget varius egestas,faucibus ac urna. Sed at nisi in velit egestas aliquam ut a felis. Aenean malesuada iaculis nisl,ut tempor lacus egestas consequat. Nam nibh lectus, gravida sed egestas ut, feugiat quisdolor. Donec eu leo enim, non laoreet ante. Morbi dictum tempor vulputate. Phasellusultricies risus vel augue sagittis euismod. Vivamus tincidunt placerat nisi in aliquam. Crasquis mi ac nunc pretium aliquam. Aenean elementum erat ac metus commodo rhoncus.Aliquam nulla augue, porta non sagittis quis, accumsan vitae sem. Phasellus id lectus tortor,eget pulvinar augue. Etiam eget velit ac purus fringilla blandit. Donec odio odio, sagittis sediaculis sed, consectetur eget sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas accumsan velit vel turpis rutrum in sodales diam placerat.Quisque luctus ullamcorper velit sit amet lobortis. Etiam ligula felis, vulputate quis rhoncusnec, fermentum eget odio. Vivamus vel ipsum ac augue sodales mollis euismod nec tellus.Fusce et augue rutrum nunc semper vehicula vel semper nisl. Nam laoreet euismod quam atvarius. Sed aliquet auctor nibh. Curabitur malesuada fermentum lacus vel accumsan. Duisornare scelerisque nulla, ac pulvinar ligula tempus sit amet. In placerat nulla ac antescelerisque posuere. Phasellus at ante felis. Sed hendrerit risus a metus posuere rutrum.Phasellus eu augue dui. Proin in vestibulum ipsum. Aenean accumsan mollis sapien, uteleifend sem blandit at. Vivamus luctus mi eget lorem lobortis pharetra. Phasellus at tortorquam, a volutpat purus. Etiam sollicitudin arcu vel elit bibendum et imperdiet risus tincidunt.Etiam elit velit, posuere ut pulvinar ac, condimentum eget justo. Fusce a erat velit. Vivamusimperdiet ultrices orci in hendrerit.',
            category: 'science',
            timestamp: 'May 18,2018 11:29 PM',
            url: '',
            user_id: '2user',
            likes: 0
        },

        {
            id: '2',
            title: 'Second Blog',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor in, accumsan non quam. Nam consectetur porttitor rhoncus. Curabitur eu est et leo feugiat auctor vel quis lorem. Ut et ligula dolor, sit amet consequat lorem. Aliquam porta eros sedorci. Morbi congue viverra nisl nec rhoncus.Integer mattis, ipsum a tincidunt commodo, lacus arcu elementum elit, at mollis eros ante acrisus. In volutpat, ante at pretium ultricies, velit magna suscipit enim, aliquet blandit massaorci nec lorem. Nulla facilisi. Duis eu vehicula arcu. Nulla facilisi. Maecenas pellentesquevolutpat felis, quis tristique ligula luctus vel. Sed nec mi eros. Integer augue enim, sollicitudinullamcorper mattis eget, aliquam in est. Morbi sollicitudin libero nec augue dignissim utconsectetur dui volutpat. Nulla facilisi. Mauris egestas vestibulum neque cursus tincidunt.Donec sit amet pulvinar orci.Quisque volutpat pharetra tincidunt. Fusce sapien arcu, molestie eget varius egestas,faucibus ac urna. Sed at nisi in velit egestas aliquam ut a felis. Aenean malesuada iaculis nisl,ut tempor lacus egestas consequat. Nam nibh lectus, gravida sed egestas ut, feugiat quisdolor. Donec eu leo enim, non laoreet ante. Morbi dictum tempor vulputate. Phasellusultricies risus vel augue sagittis euismod. Vivamus tincidunt placerat nisi in aliquam. Crasquis mi ac nunc pretium aliquam. Aenean elementum erat ac metus commodo rhoncus.Aliquam nulla augue, porta non sagittis quis, accumsan vitae sem. Phasellus id lectus tortor,eget pulvinar augue. Etiam eget velit ac purus fringilla blandit. Donec odio odio, sagittis sediaculis sed, consectetur eget sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas accumsan velit vel turpis rutrum in sodales diam placerat.Quisque luctus ullamcorper velit sit amet lobortis. Etiam ligula felis, vulputate quis rhoncusnec, fermentum eget odio. Vivamus vel ipsum ac augue sodales mollis euismod nec tellus.Fusce et augue rutrum nunc semper vehicula vel semper nisl. Nam laoreet euismod quam atvarius. Sed aliquet auctor nibh. Curabitur malesuada fermentum lacus vel accumsan. Duisornare scelerisque nulla, ac pulvinar ligula tempus sit amet. In placerat nulla ac antescelerisque posuere. Phasellus at ante felis. Sed hendrerit risus a metus posuere rutrum.Phasellus eu augue dui. Proin in vestibulum ipsum. Aenean accumsan mollis sapien, uteleifend sem blandit at. Vivamus luctus mi eget lorem lobortis pharetra. Phasellus at tortorquam, a volutpat purus. Etiam sollicitudin arcu vel elit bibendum et imperdiet risus tincidunt.Etiam elit velit, posuere ut pulvinar ac, condimentum eget justo. Fusce a erat velit. Vivamusimperdiet ultrices orci in hendrerit.',
            category: 'nature',
            timestamp: 'May 18,2018 11:29 PM',
            url: '',
            user_id: '2user',
            likes: 0
        },

        {
            id: '3',
            title: 'Third Blog',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor in, accumsan non quam. Nam consectetur porttitor rhoncus. Curabitur eu est et leo feugiat auctor vel quis lorem. Ut et ligula dolor, sit amet consequat lorem. Aliquam porta eros sedorci. Morbi congue viverra nisl nec rhoncus.Integer mattis, ipsum a tincidunt commodo, lacus arcu elementum elit, at mollis eros ante acrisus. In volutpat, ante at pretium ultricies, velit magna suscipit enim, aliquet blandit massaorci nec lorem. Nulla facilisi. Duis eu vehicula arcu. Nulla facilisi. Maecenas pellentesquevolutpat felis, quis tristique ligula luctus vel. Sed nec mi eros. Integer augue enim, sollicitudinullamcorper mattis eget, aliquam in est. Morbi sollicitudin libero nec augue dignissim utconsectetur dui volutpat. Nulla facilisi. Mauris egestas vestibulum neque cursus tincidunt.Donec sit amet pulvinar orci.Quisque volutpat pharetra tincidunt. Fusce sapien arcu, molestie eget varius egestas,faucibus ac urna. Sed at nisi in velit egestas aliquam ut a felis. Aenean malesuada iaculis nisl,ut tempor lacus egestas consequat. Nam nibh lectus, gravida sed egestas ut, feugiat quisdolor. Donec eu leo enim, non laoreet ante. Morbi dictum tempor vulputate. Phasellusultricies risus vel augue sagittis euismod. Vivamus tincidunt placerat nisi in aliquam. Crasquis mi ac nunc pretium aliquam. Aenean elementum erat ac metus commodo rhoncus.Aliquam nulla augue, porta non sagittis quis, accumsan vitae sem. Phasellus id lectus tortor,eget pulvinar augue. Etiam eget velit ac purus fringilla blandit. Donec odio odio, sagittis sediaculis sed, consectetur eget sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas accumsan velit vel turpis rutrum in sodales diam placerat.Quisque luctus ullamcorper velit sit amet lobortis. Etiam ligula felis, vulputate quis rhoncusnec, fermentum eget odio. Vivamus vel ipsum ac augue sodales mollis euismod nec tellus.Fusce et augue rutrum nunc semper vehicula vel semper nisl. Nam laoreet euismod quam atvarius. Sed aliquet auctor nibh. Curabitur malesuada fermentum lacus vel accumsan. Duisornare scelerisque nulla, ac pulvinar ligula tempus sit amet. In placerat nulla ac antescelerisque posuere. Phasellus at ante felis. Sed hendrerit risus a metus posuere rutrum.Phasellus eu augue dui. Proin in vestibulum ipsum. Aenean accumsan mollis sapien, uteleifend sem blandit at. Vivamus luctus mi eget lorem lobortis pharetra. Phasellus at tortorquam, a volutpat purus. Etiam sollicitudin arcu vel elit bibendum et imperdiet risus tincidunt.Etiam elit velit, posuere ut pulvinar ac, condimentum eget justo. Fusce a erat velit. Vivamusimperdiet ultrices orci in hendrerit.',
            category: 'machine learning',
            timestamp: 'May 18,2018 11:29 PM',
            url: '',
            user_id: '3user',
            likes: 0
        },

        {
            id: '4',
            title: 'Fourth Blog',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor in, accumsan non quam. Nam consectetur porttitor rhoncus. Curabitur eu est et leo feugiat auctor vel quis lorem. Ut et ligula dolor, sit amet consequat lorem. Aliquam porta eros sedorci. Morbi congue viverra nisl nec rhoncus.Integer mattis, ipsum a tincidunt commodo, lacus arcu elementum elit, at mollis eros ante acrisus. In volutpat, ante at pretium ultricies, velit magna suscipit enim, aliquet blandit massaorci nec lorem. Nulla facilisi. Duis eu vehicula arcu. Nulla facilisi. Maecenas pellentesquevolutpat felis, quis tristique ligula luctus vel. Sed nec mi eros. Integer augue enim, sollicitudinullamcorper mattis eget, aliquam in est. Morbi sollicitudin libero nec augue dignissim utconsectetur dui volutpat. Nulla facilisi. Mauris egestas vestibulum neque cursus tincidunt.Donec sit amet pulvinar orci.Quisque volutpat pharetra tincidunt. Fusce sapien arcu, molestie eget varius egestas,faucibus ac urna. Sed at nisi in velit egestas aliquam ut a felis. Aenean malesuada iaculis nisl,ut tempor lacus egestas consequat. Nam nibh lectus, gravida sed egestas ut, feugiat quisdolor. Donec eu leo enim, non laoreet ante. Morbi dictum tempor vulputate. Phasellusultricies risus vel augue sagittis euismod. Vivamus tincidunt placerat nisi in aliquam. Crasquis mi ac nunc pretium aliquam. Aenean elementum erat ac metus commodo rhoncus.Aliquam nulla augue, porta non sagittis quis, accumsan vitae sem. Phasellus id lectus tortor,eget pulvinar augue. Etiam eget velit ac purus fringilla blandit. Donec odio odio, sagittis sediaculis sed, consectetur eget sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas accumsan velit vel turpis rutrum in sodales diam placerat.Quisque luctus ullamcorper velit sit amet lobortis. Etiam ligula felis, vulputate quis rhoncusnec, fermentum eget odio. Vivamus vel ipsum ac augue sodales mollis euismod nec tellus.Fusce et augue rutrum nunc semper vehicula vel semper nisl. Nam laoreet euismod quam atvarius. Sed aliquet auctor nibh. Curabitur malesuada fermentum lacus vel accumsan. Duisornare scelerisque nulla, ac pulvinar ligula tempus sit amet. In placerat nulla ac antescelerisque posuere. Phasellus at ante felis. Sed hendrerit risus a metus posuere rutrum.Phasellus eu augue dui. Proin in vestibulum ipsum. Aenean accumsan mollis sapien, uteleifend sem blandit at. Vivamus luctus mi eget lorem lobortis pharetra. Phasellus at tortorquam, a volutpat purus. Etiam sollicitudin arcu vel elit bibendum et imperdiet risus tincidunt.Etiam elit velit, posuere ut pulvinar ac, condimentum eget justo. Fusce a erat velit. Vivamusimperdiet ultrices orci in hendrerit.',
            category: 'ai',
            timestamp: 'May 18,2018 11:29 PM',
            url: '',
            user_id: '4user',
            likes: 0
        },
    ]


    users= [
        {
            uid: '1user',
            name: 'First Person',
            about: 'hey there, here I am the first person',
            wantToRead: [],
            bookmarks: []
        },

        {
            uid: '2user',
            name: 'Second Person',
            about: 'hey there, here I am the second person',
            wantToRead: [],
            bookmarks: []
        },
        
        {
            uid: '3user',
            name: 'Third Person',
            about: 'hey there, here I am the third person',
            wantToRead: [],
            bookmarks: []
        },
        
        {
            uid: '4user',
            name: 'Fourth Person',
            about: 'hey there, here I am the fourth person',
            wantToRead: [],
            bookmarks: []
        },
    ]

    onLike = (event) => {
        (this.blogs.filter(blog => blog.id === event.target.id))[0].likes++
        console.log((this.blogs.filter(blog => blog.id === event.target.id))[0].likes)
    }

    blog_id = this.props.match.params.number
    render(){
        let blog = (this.blogs.filter(b => b.id === this.blog_id))[0]
        let user = (this.users.filter(user => user.uid === blog.user_id))[0]
        console.log(blog)
        console.log(user)
        return(
            <div>
          <section id="blog_content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xs-12" style={{paddingLeft: '3%'}}>
                  
                  <h1>
                    {blog.title}
                  </h1>
                  <h4 style={{fontWeight: 600, opacity: '0.6'}}>
                    {user.about}
                  </h4>
                  <div className="combine">
                    <div className="blog_content_img">
                      <img src={img_1} className="img-responsive img-circle" />
                    </div>
                    <div className="author-detail">
                      <span>{user.name}</span>&nbsp; <span className="follow_author">Follow</span><br />
                      <span style={{fontSize: 12}}>{blog.timestamp}. <span className="glyphicon glyphicon-star" aria-hidden="true" /></span>
                      <span/>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <img src={img_2} className="img-responsive" />
                </div>
                <div className="col-md-2" style={{marginTop: '5%'}}>
                  <div className="work">
                    <img src={img_3} className="img-responsive" />
                  </div>
                  <div style={{position: 'absolute'}} data-scroll="fixed">
                    <div className="follow_us">
                      <span id={blog.id} onClick={this.onLike}className="glyphicon glyphicon-heart" aria-hidden="true"><span style={{paddingLeft: '5px'}}className="follow-text">{blog.likes}</span></span>
                      <span className="glyphicon glyphicon-bookmark" aria-hidden="true" />
                      <span className="glyphicon glyphicon-globe" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <div className="col-md-10" style={{marginTop: '3%'}}>
                  <h4 style={{textAlign: 'justify'}}>
                    {blog.content}
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </div>
        )
    }
}