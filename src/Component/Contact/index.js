import React from 'react';
import './index.css';
const Contacet = () => {
    return (
      <div className="contacet">
        <div className="container">
        <h2 className="contacettitle text-center">Contacet Me</h2>
        <p className="conp text-center text-white ml-auto mr-auto">
                  ArchitectUI comes packed with elements,
                  components and widgets nicely bundled together
           </p>
          <form className="form bg-burbel p-3 shadow rounded">
            <div className="form-row">
            <div className="form-group col-md-6">
              <label>First Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label>Last Name</label>
              <input type="text" className="form-control" />
            </div>
              <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Email</label>
              <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Email</label>
              <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="" />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                  <label htmlFor="inputState">State</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>

            <button type="submit" className="btn bg-yellow text-white">Sign in</button>
          </form>
        </div>
      </div>
    )
  }
  


export default Contacet;
