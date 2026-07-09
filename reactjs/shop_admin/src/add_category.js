import React from 'react';
export default class AddCategory extends React.Component {
  render() {
    return (<div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <a className="sidebar-brand" href="index.html">
            <span className="sidebar-brand-text align-middle">
              Administrator
            </span>
          </a>
          <ul className="sidebar-nav">
            <li className="sidebar-header">
              Modules
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                <span className="align-middle text-white">Dashboards</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main">
        <nav className="navbar navbar-expand navbar-light navbar-bg">
          <a className="sidebar-toggle js-sidebar-toggle">
            <i className="hamburger align-self-center" />
          </a>
        </nav>
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3" />
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title mb-0 text-dark">
                      <span className="text-bg-primary p-1">Add category</span> - Category management
                    </h4>
                  </div>
                  <div className="card-body">
                    <form method="post">
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="photo" className="form-label">Photo</label>
                        <input type="file" className="form-control" id="photo" name="photo" required />
                      </div>
                      {/* need radio buttons for is_live */}
                      <div className="mb-3">
                        <label className="form-label">Is Live?</label>
                        <div>
                          <input className="form-check-input" type="radio" name="is_live" id="yes" defaultValue={1} required />
                          <label className="form-check-label" htmlFor="yes">Yes</label>
                        </div>
                        <div>
                          <input className="form-check-input" type="radio" name="is_live" id="no" defaultValue={0} required />
                          <label className="form-check-label" htmlFor="no">No</label>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">Save Category</button>
                      <button type="reset" className="btn btn-secondary">Clear all</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row text-muted">
              <div className="col-12">
                <p className="text-center">Developed @ the easylearn academy</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    );
  }
}