import peopleDB from '../../../imports/db/peopleDB';
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router-dom';

class Edit extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name: '',
            mail: '',
            setup: true
        };
    }
    switch = (value) => (event) => {
        if (value === 'name') {
            this.setState({
                name: event.target.value
            })
        }
        else {            
            this.setState({
                mail: event.target.value
            })
        }
    }
    submit = () => {
        peopleDB.update({_id: this.props.match.params.uid}, {
            name: this.state.name,
            mail: this.state.mail,
        });
        this.props.history.push('/');
    }
    render() {
        const { user } = this.props;
        if (user && this.state.setup === true) {
            this.setState({
                name: user.name,
                mail: user.mail,
                setup: false
            })
        }
        return (
            <div>
                <Link to='/'>Home</Link>
                {user && (
                    <div>
                        <input onChange={this.switch('name')} value={this.state.name}></input>
                        <input onChange={this.switch('mail')} value={this.state.mail}></input>
                        <button onClick={this.submit}>Submit</button>
                    </div>
                )}
            </div>
        );
    }
}
export default withTracker(() => {
    const pathname = this.location.pathname.split('/');
    const id = pathname[pathname.length - 1];
    return {
        user: peopleDB.findOne({'_id':id})
    };
})(Edit);