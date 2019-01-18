import peopleDB from '../../../imports/db/peopleDB';
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router-dom';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mail: ''
        };
    }
    delete = (id, e) => {
        e.preventDefault();
        peopleDB.remove({
            _id: id
        })
    }
    render() {
        const { users } = this.props;
        return (
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                            <Link to={'/edit/' + user._id}><button>Editer</button></Link>
                        <button onClick={(e) => this.delete(user._id, e)}>X</button>
                        {user.name} {user.mail}
                    </li>
                ))}
            </ul>
        );
    }
}
export default withTracker(() => {
    return {
        users: peopleDB.find().fetch()
    };
})(List);