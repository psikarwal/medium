import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Featured from './Featured'
import './syle.css'
import WantToRead from './WantToRead';
import BlogTest from './BlogTest.js'
import {Route} from 'react-router-dom'

class App extends Component {

    state = {
        blogs: [
            {
                id: '1',
                title: 'First A Blog',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor in, accumsan non quam. Nam consectetur porttitor rhoncus. Curabitur eu est et leo feugiat auctor vel quis lorem. Ut et ligula dolor, sit amet consequat lorem. Aliquam porta eros sedorci. Morbi congue viverra nisl nec rhoncus.Integer mattis, ipsum a tincidunt commodo, lacus arcu elementum elit, at mollis eros ante acrisus. In volutpat, ante at pretium ultricies, velit magna suscipit enim, aliquet blandit massaorci nec lorem. Nulla facilisi. Duis eu vehicula arcu. Nulla facilisi. Maecenas pellentesquevolutpat felis, quis tristique ligula luctus vel. Sed nec mi eros. Integer augue enim, sollicitudinullamcorper mattis eget, aliquam in est. Morbi sollicitudin libero nec augue dignissim utconsectetur dui volutpat. Nulla facilisi. Mauris egestas vestibulum neque cursus tincidunt.Donec sit amet pulvinar orci.Quisque volutpat pharetra tincidunt. Fusce sapien arcu, molestie eget varius egestas,faucibus ac urna. Sed at nisi in velit egestas aliquam ut a felis. Aenean malesuada iaculis nisl,ut tempor lacus egestas consequat. Nam nibh lectus, gravida sed egestas ut, feugiat quisdolor. Donec eu leo enim, non laoreet ante. Morbi dictum tempor vulputate. Phasellusultricies risus vel augue sagittis euismod. Vivamus tincidunt placerat nisi in aliquam. Crasquis mi ac nunc pretium aliquam. Aenean elementum erat ac metus commodo rhoncus.Aliquam nulla augue, porta non sagittis quis, accumsan vitae sem. Phasellus id lectus tortor,eget pulvinar augue. Etiam eget velit ac purus fringilla blandit. Donec odio odio, sagittis sediaculis sed, consectetur eget sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas accumsan velit vel turpis rutrum in sodales diam placerat.Quisque luctus ullamcorper velit sit amet lobortis. Etiam ligula felis, vulputate quis rhoncusnec, fermentum eget odio. Vivamus vel ipsum ac augue sodales mollis euismod nec tellus.Fusce et augue rutrum nunc semper vehicula vel semper nisl. Nam laoreet euismod quam atvarius. Sed aliquet auctor nibh. Curabitur malesuada fermentum lacus vel accumsan. Duisornare scelerisque nulla, ac pulvinar ligula tempus sit amet. In placerat nulla ac antescelerisque posuere. Phasellus at ante felis. Sed hendrerit risus a metus posuere rutrum.Phasellus eu augue dui. Proin in vestibulum ipsum. Aenean accumsan mollis sapien, uteleifend sem blandit at. Vivamus luctus mi eget lorem lobortis pharetra. Phasellus at tortorquam, a volutpat purus. Etiam sollicitudin arcu vel elit bibendum et imperdiet risus tincidunt.Etiam elit velit, posuere ut pulvinar ac, condimentum eget justo. Fusce a erat velit. Vivamusimperdiet ultrices orci in hendrerit.',
                category: 'science',
                timestamp: 'May 18,2018 11:29 PM',
                url: '',
                user_id: '1user'
            },
        
            {
                id: '5',
                title: 'First B Blog',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor in, accumsan non quam. Nam consectetur porttitor rhoncus. Curabitur eu est et leo feugiat auctor vel quis lorem. Ut et ligula dolor, sit amet consequat lorem. Aliquam porta eros sedorci. Morbi congue viverra nisl nec rhoncus.Integer mattis, ipsum a tincidunt commodo, lacus arcu elementum elit, at mollis eros ante acrisus. In volutpat, ante at pretium ultricies, velit magna suscipit enim, aliquet blandit massaorci nec lorem. Nulla facilisi. Duis eu vehicula arcu. Nulla facilisi. Maecenas pellentesquevolutpat felis, quis tristique ligula luctus vel. Sed nec mi eros. Integer augue enim, sollicitudinullamcorper mattis eget, aliquam in est. Morbi sollicitudin libero nec augue dignissim utconsectetur dui volutpat. Nulla facilisi. Mauris egestas vestibulum neque cursus tincidunt.Donec sit amet pulvinar orci.Quisque volutpat pharetra tincidunt. Fusce sapien arcu, molestie eget varius egestas,faucibus ac urna. Sed at nisi in velit egestas aliquam ut a felis. Aenean malesuada iaculis nisl,ut tempor lacus egestas consequat. Nam nibh lectus, gravida sed egestas ut, feugiat quisdolor. Donec eu leo enim, non laoreet ante. Morbi dictum tempor vulputate. Phasellusultricies risus vel augue sagittis euismod. Vivamus tincidunt placerat nisi in aliquam. Crasquis mi ac nunc pretium aliquam. Aenean elementum erat ac metus commodo rhoncus.Aliquam nulla augue, porta non sagittis quis, accumsan vitae sem. Phasellus id lectus tortor,eget pulvinar augue. Etiam eget velit ac purus fringilla blandit. Donec odio odio, sagittis sediaculis sed, consectetur eget sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas accumsan velit vel turpis rutrum in sodales diam placerat.Quisque luctus ullamcorper velit sit amet lobortis. Etiam ligula felis, vulputate quis rhoncusnec, fermentum eget odio. Vivamus vel ipsum ac augue sodales mollis euismod nec tellus.Fusce et augue rutrum nunc semper vehicula vel semper nisl. Nam laoreet euismod quam atvarius. Sed aliquet auctor nibh. Curabitur malesuada fermentum lacus vel accumsan. Duisornare scelerisque nulla, ac pulvinar ligula tempus sit amet. In placerat nulla ac antescelerisque posuere. Phasellus at ante felis. Sed hendrerit risus a metus posuere rutrum.Phasellus eu augue dui. Proin in vestibulum ipsum. Aenean accumsan mollis sapien, uteleifend sem blandit at. Vivamus luctus mi eget lorem lobortis pharetra. Phasellus at tortorquam, a volutpat purus. Etiam sollicitudin arcu vel elit bibendum et imperdiet risus tincidunt.Etiam elit velit, posuere ut pulvinar ac, condimentum eget justo. Fusce a erat velit. Vivamusimperdiet ultrices orci in hendrerit.',
                category: 'science',
                timestamp: 'May 18,2018 11:29 PM',
                url: '',
                user_id: '2user'
            },

            {
                id: '2',
                title: 'Second Blog',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor in, accumsan non quam. Nam consectetur porttitor rhoncus. Curabitur eu est et leo feugiat auctor vel quis lorem. Ut et ligula dolor, sit amet consequat lorem. Aliquam porta eros sedorci. Morbi congue viverra nisl nec rhoncus.Integer mattis, ipsum a tincidunt commodo, lacus arcu elementum elit, at mollis eros ante acrisus. In volutpat, ante at pretium ultricies, velit magna suscipit enim, aliquet blandit massaorci nec lorem. Nulla facilisi. Duis eu vehicula arcu. Nulla facilisi. Maecenas pellentesquevolutpat felis, quis tristique ligula luctus vel. Sed nec mi eros. Integer augue enim, sollicitudinullamcorper mattis eget, aliquam in est. Morbi sollicitudin libero nec augue dignissim utconsectetur dui volutpat. Nulla facilisi. Mauris egestas vestibulum neque cursus tincidunt.Donec sit amet pulvinar orci.Quisque volutpat pharetra tincidunt. Fusce sapien arcu, molestie eget varius egestas,faucibus ac urna. Sed at nisi in velit egestas aliquam ut a felis. Aenean malesuada iaculis nisl,ut tempor lacus egestas consequat. Nam nibh lectus, gravida sed egestas ut, feugiat quisdolor. Donec eu leo enim, non laoreet ante. Morbi dictum tempor vulputate. Phasellusultricies risus vel augue sagittis euismod. Vivamus tincidunt placerat nisi in aliquam. Crasquis mi ac nunc pretium aliquam. Aenean elementum erat ac metus commodo rhoncus.Aliquam nulla augue, porta non sagittis quis, accumsan vitae sem. Phasellus id lectus tortor,eget pulvinar augue. Etiam eget velit ac purus fringilla blandit. Donec odio odio, sagittis sediaculis sed, consectetur eget sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas accumsan velit vel turpis rutrum in sodales diam placerat.Quisque luctus ullamcorper velit sit amet lobortis. Etiam ligula felis, vulputate quis rhoncusnec, fermentum eget odio. Vivamus vel ipsum ac augue sodales mollis euismod nec tellus.Fusce et augue rutrum nunc semper vehicula vel semper nisl. Nam laoreet euismod quam atvarius. Sed aliquet auctor nibh. Curabitur malesuada fermentum lacus vel accumsan. Duisornare scelerisque nulla, ac pulvinar ligula tempus sit amet. In placerat nulla ac antescelerisque posuere. Phasellus at ante felis. Sed hendrerit risus a metus posuere rutrum.Phasellus eu augue dui. Proin in vestibulum ipsum. Aenean accumsan mollis sapien, uteleifend sem blandit at. Vivamus luctus mi eget lorem lobortis pharetra. Phasellus at tortorquam, a volutpat purus. Etiam sollicitudin arcu vel elit bibendum et imperdiet risus tincidunt.Etiam elit velit, posuere ut pulvinar ac, condimentum eget justo. Fusce a erat velit. Vivamusimperdiet ultrices orci in hendrerit.',
                category: 'nature',
                timestamp: 'May 18,2018 11:29 PM',
                url: '',
                user_id: '2user'
            },

            {
                id: '3',
                title: 'Third Blog',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor in, accumsan non quam. Nam consectetur porttitor rhoncus. Curabitur eu est et leo feugiat auctor vel quis lorem. Ut et ligula dolor, sit amet consequat lorem. Aliquam porta eros sedorci. Morbi congue viverra nisl nec rhoncus.Integer mattis, ipsum a tincidunt commodo, lacus arcu elementum elit, at mollis eros ante acrisus. In volutpat, ante at pretium ultricies, velit magna suscipit enim, aliquet blandit massaorci nec lorem. Nulla facilisi. Duis eu vehicula arcu. Nulla facilisi. Maecenas pellentesquevolutpat felis, quis tristique ligula luctus vel. Sed nec mi eros. Integer augue enim, sollicitudinullamcorper mattis eget, aliquam in est. Morbi sollicitudin libero nec augue dignissim utconsectetur dui volutpat. Nulla facilisi. Mauris egestas vestibulum neque cursus tincidunt.Donec sit amet pulvinar orci.Quisque volutpat pharetra tincidunt. Fusce sapien arcu, molestie eget varius egestas,faucibus ac urna. Sed at nisi in velit egestas aliquam ut a felis. Aenean malesuada iaculis nisl,ut tempor lacus egestas consequat. Nam nibh lectus, gravida sed egestas ut, feugiat quisdolor. Donec eu leo enim, non laoreet ante. Morbi dictum tempor vulputate. Phasellusultricies risus vel augue sagittis euismod. Vivamus tincidunt placerat nisi in aliquam. Crasquis mi ac nunc pretium aliquam. Aenean elementum erat ac metus commodo rhoncus.Aliquam nulla augue, porta non sagittis quis, accumsan vitae sem. Phasellus id lectus tortor,eget pulvinar augue. Etiam eget velit ac purus fringilla blandit. Donec odio odio, sagittis sediaculis sed, consectetur eget sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas accumsan velit vel turpis rutrum in sodales diam placerat.Quisque luctus ullamcorper velit sit amet lobortis. Etiam ligula felis, vulputate quis rhoncusnec, fermentum eget odio. Vivamus vel ipsum ac augue sodales mollis euismod nec tellus.Fusce et augue rutrum nunc semper vehicula vel semper nisl. Nam laoreet euismod quam atvarius. Sed aliquet auctor nibh. Curabitur malesuada fermentum lacus vel accumsan. Duisornare scelerisque nulla, ac pulvinar ligula tempus sit amet. In placerat nulla ac antescelerisque posuere. Phasellus at ante felis. Sed hendrerit risus a metus posuere rutrum.Phasellus eu augue dui. Proin in vestibulum ipsum. Aenean accumsan mollis sapien, uteleifend sem blandit at. Vivamus luctus mi eget lorem lobortis pharetra. Phasellus at tortorquam, a volutpat purus. Etiam sollicitudin arcu vel elit bibendum et imperdiet risus tincidunt.Etiam elit velit, posuere ut pulvinar ac, condimentum eget justo. Fusce a erat velit. Vivamusimperdiet ultrices orci in hendrerit.',
                category: 'machine learning',
                timestamp: 'May 18,2018 11:29 PM',
                url: '',
                user_id: '3user'
            },

            {
                id: '4',
                title: 'Fourth Blog',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor in, accumsan non quam. Nam consectetur porttitor rhoncus. Curabitur eu est et leo feugiat auctor vel quis lorem. Ut et ligula dolor, sit amet consequat lorem. Aliquam porta eros sedorci. Morbi congue viverra nisl nec rhoncus.Integer mattis, ipsum a tincidunt commodo, lacus arcu elementum elit, at mollis eros ante acrisus. In volutpat, ante at pretium ultricies, velit magna suscipit enim, aliquet blandit massaorci nec lorem. Nulla facilisi. Duis eu vehicula arcu. Nulla facilisi. Maecenas pellentesquevolutpat felis, quis tristique ligula luctus vel. Sed nec mi eros. Integer augue enim, sollicitudinullamcorper mattis eget, aliquam in est. Morbi sollicitudin libero nec augue dignissim utconsectetur dui volutpat. Nulla facilisi. Mauris egestas vestibulum neque cursus tincidunt.Donec sit amet pulvinar orci.Quisque volutpat pharetra tincidunt. Fusce sapien arcu, molestie eget varius egestas,faucibus ac urna. Sed at nisi in velit egestas aliquam ut a felis. Aenean malesuada iaculis nisl,ut tempor lacus egestas consequat. Nam nibh lectus, gravida sed egestas ut, feugiat quisdolor. Donec eu leo enim, non laoreet ante. Morbi dictum tempor vulputate. Phasellusultricies risus vel augue sagittis euismod. Vivamus tincidunt placerat nisi in aliquam. Crasquis mi ac nunc pretium aliquam. Aenean elementum erat ac metus commodo rhoncus.Aliquam nulla augue, porta non sagittis quis, accumsan vitae sem. Phasellus id lectus tortor,eget pulvinar augue. Etiam eget velit ac purus fringilla blandit. Donec odio odio, sagittis sediaculis sed, consectetur eget sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas accumsan velit vel turpis rutrum in sodales diam placerat.Quisque luctus ullamcorper velit sit amet lobortis. Etiam ligula felis, vulputate quis rhoncusnec, fermentum eget odio. Vivamus vel ipsum ac augue sodales mollis euismod nec tellus.Fusce et augue rutrum nunc semper vehicula vel semper nisl. Nam laoreet euismod quam atvarius. Sed aliquet auctor nibh. Curabitur malesuada fermentum lacus vel accumsan. Duisornare scelerisque nulla, ac pulvinar ligula tempus sit amet. In placerat nulla ac antescelerisque posuere. Phasellus at ante felis. Sed hendrerit risus a metus posuere rutrum.Phasellus eu augue dui. Proin in vestibulum ipsum. Aenean accumsan mollis sapien, uteleifend sem blandit at. Vivamus luctus mi eget lorem lobortis pharetra. Phasellus at tortorquam, a volutpat purus. Etiam sollicitudin arcu vel elit bibendum et imperdiet risus tincidunt.Etiam elit velit, posuere ut pulvinar ac, condimentum eget justo. Fusce a erat velit. Vivamusimperdiet ultrices orci in hendrerit.',
                category: 'ai',
                timestamp: 'May 18,2018 11:29 PM',
                url: '',
                user_id: '4user'
            },
        ],


        users: [
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
        ],

        bookmark: ['1'],
        wantToRead: ['1']


        
}
    //Assuming that user_1 is logged in
    setBookmark = (blog) => {
        //let user_book = this.state.users[0].bookmarks
        let user_book = this.state.bookmark
        console.log(user_book)
        console.log('yeah set bookmark')
        this.setState({bookmarks: user_book.push(blog)})
        console.log(this.state.bookmark)
    }

    setWantToRead = () => {

    }
    render() {
        return (
            
        <div>
            {/* Latest compiled and minified CSS */}
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
            {/* Latest compiled and minified JavaScript */}
            <link rel="stylesheet" type="text/css" href="syle.css" />
            
            <Header/>
            <Route
            path="/"
            exact
            render={() => (
            <div>
                <Featured blogs={this.state.blogs} users={this.state.users} setBookmark={this.setBookmark} bookmark={this.state.bookmark}/>
            </div>
            )}/>
            
            <Route path='/blog/:number' component={BlogTest}/>            
        </div>
            
        )
    }
}

export default App;
