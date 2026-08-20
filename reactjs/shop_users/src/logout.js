import React from 'react';
import withHooks from './hoc';

class Logout extends React.Component {
    componentDidMount() {
        this.props.removeCookie('id');
        this.props.removeCookie('id', { path: '/' });
        this.props.navigate('/');
    }

    render() {
        return null;
    }
}

export default withHooks(Logout);
