import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Page1Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inpVal1: "",
      inpVal2: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ inpVal1: e.target.value });
  }
  onSubmit(e) {
    // this.setState({ inpVal2: e.target.value });
    // e.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="Search">
          This is Search Place!
          <br />
          <form onSubmit={this.onSubmit}>
            {/* <p>{this.state.inpVal1}</p>
            <p>{this.state.inpuVal2}</p> */}
            {/* <input
              type="text"
              value={this.state.inpVal1}
              onChange={this.onChange}
            /> */}
            <TextField id="standard-basic" label="Standard" />
            <Button variant="contained" color="primary">
              primary
            </Button>
            {/* <input type="submit" value="submit" /> */}
            {/* <button onClick={this.onSubmit}>submit</button> */}
          </form>
        </div>
        <hr />
        <div className="Grid">This is Grid Place!</div>
      </div>
    );
  }
}

export default Page1Body;
