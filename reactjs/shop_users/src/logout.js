import React from 'react';
import withHooks from './hoc';

class Logout extends React.Component {
    componentDidMount() {
        this.props.removeCookie('id', { path: '/' });
        setTimeout(() => {
            this.props.navigate('/');
        }, 100);
    }

    render() {
        return null;
    }
}

export default withHooks(Logout);
