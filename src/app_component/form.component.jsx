import React from 'react';

const Form = (props) => {
  return(
    <div className="container">
    <form onSubmit={props.loadweather}>
      <div>{props.error ? error() : ""}</div>
      <div className="row">
        <div className="cod-md-3">
          <input type="text" className="form-control" name="city" autoComplete="off"></input>
        </div>
        <div className="cod-md-3">
        <input type="text" className="form-control" name="country" autoComplete="off"></input>
        </div>
        <div className="cod-md-3">
          <button className="btn btn-warning">Get Weather</button>
        </div>
      </div>
      </form>
    </div>
  )
}

function error () {
  return(
    <div className="alert">Error</div>
  )
}

export default Form;