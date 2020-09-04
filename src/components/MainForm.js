import React from "react";
import Container from "@material-ui/core/Container";

import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from '@material-ui/core/styles';

import TextField from "@material-ui/core/TextField";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }
  
  handleChange() {
    this.setState({ age: age + 1 });
  }
  render() {
    return (
      <form>
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "25px" }}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              color="secondary"
              style={{ width: "500px" }}
            />
          </div>
          <div style={{ marginBottom: "25px" }}>
            {" "}
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              color="secondary"
              style={{ width: "500px" }}
            />
          </div>
          <div style={{ marginBottom: "25px" }}>
            {" "}
            <TextField
              id="phone"
              label="Phone"
              variant="outlined"
              color="secondary"
              style={{ width: "500px" }}
            />
          </div>
          <div style={{ marginBottom: "25px" }}>
            {" "}
            <FormControl style ={{margin:"1",minWidth:'120px',width:'500px'}}>
              <InputLabel id="demo-simple-select-label">Car Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.age}
                onChange={this.handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ marginBottom: "25px" }}>
          <FormControl style ={{margin:"1",minWidth:'120px',width:'500px'}}>
              <InputLabel id="demo-simple-select-label">Car Model</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.age}
                onChange={this.handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ marginBottom: "25px" }}>
            {" "}
            <TextField
              id="outlined-secondary"
              label="Outlined secondary"
              variant="outlined"
              color="secondary"
              style={{ width: "500px" }}
            />
          </div>
        </div>
      </form>
    );
  }
}
export default Error;
