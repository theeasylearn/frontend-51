// import reactdom  
import ReactDOM from 'react-dom/client';
import React from 'react';
// create class 
class ShopMenu extends React.Component {
    constructor(props) {
        super(props)
        //create state variable
        this.state = {
            isLoggedIn: false
        }
    }
    doLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    }
    logout = () => {
        this.setState({
            isLoggedIn: false
        })
    }
    GuestMenu = () => {

        return (<>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Register</a>
            </li>
            <li className="nav-item">
                <button onClick={this.doLogin} className="nav-link text-bg-primary" type='button' >Login</button>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Forgot Password</a>
            </li>
        </>)
    }
    UserMenu = () => {
        return (<>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Cart</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Change Password</a>
            </li>

            <li className="nav-item">
                <button className="nav-link text-danger fw-medium"
                    onClick={this.logout}>Logout</button>
            </li>
        </>)
    }
    render() {
        return (<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                {/* Brand */}
                <a className="navbar-brand fw-bold text-dark" href="#">MyShop</a>
                {/* Toggler */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Menu Items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Shop</a>
                        </li>
                    </ul>
                    {/* Auth Links */}
                    <ul className="navbar-nav">
                        {(this.state.isLoggedIn === false) ? <this.GuestMenu /> : <this.UserMenu /> }
                        
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ShopMenu />)