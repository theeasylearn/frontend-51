// import reactdom  
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create functional Components 1st letter must be capital
function MyHeader() {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">

      <a className="navbar-brand fw-bold fs-3" href="#">THE EASYLEARN</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>)
}
function MYFooter() {
  return (<footer className="bg-dark text-white py-4 mt-5">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <p className="mb-1 fs-5">the easylearn</p>
          <p className="mb-2">We build amazing digital experiences</p>
        </div>
      </div>
      <div className="row border-top border-secondary pt-3">
        <div className="col-12 text-center">
          <small>&copy; 2026 the easylearn. All Rights Reserved.</small>
        </div>
      </div>

    </div>
  </footer>)
}
function Website() {
  return (
    <div>
      <MyHeader />
      <div className='container mt-5'>
        <div className="row">
          <div className="col-12">
            <h1>Welcome to site</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor tempore qui magnam nostrum eos laudantium, voluptatum culpa quidem pariatur a iure ducimus est sequi, architecto ut modi? Vitae, quos?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor tempore qui magnam nostrum eos laudantium, voluptatum culpa quidem pariatur a iure ducimus est sequi, architecto ut modi? Vitae, quos?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor tempore qui magnam nostrum eos laudantium, voluptatum culpa quidem pariatur a iure ducimus est sequi, architecto ut modi? Vitae, quos?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor tempore qui magnam nostrum eos laudantium, voluptatum culpa quidem pariatur a iure ducimus est sequi, architecto ut modi? Vitae, quos?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor tempore qui magnam nostrum eos laudantium, voluptatum culpa quidem pariatur a iure ducimus est sequi, architecto ut modi? Vitae, quos?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor tempore qui magnam nostrum eos laudantium, voluptatum culpa quidem pariatur a iure ducimus est sequi, architecto ut modi? Vitae, quos?</p>
            
          </div>
        </div>
      </div>
      <MYFooter />
    </div>
  )
}
root.render(<Website />);
