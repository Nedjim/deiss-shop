import React            from 'react';
import cookie           from 'react-cookie';

export default class Profile extends React.Component {

    constructor(){
        super();
        this.state = {}
    }

    componentWillMount(){
        let obj = cookie.load('user').split('j:');
        let user = JSON.parse(obj[1]);

        this.setState({user : user});
    }

    render(){
        return (
            <div>
                <h1>Welcome {this.state.user.pseudo} </h1>
            </div>
        )
    }
}