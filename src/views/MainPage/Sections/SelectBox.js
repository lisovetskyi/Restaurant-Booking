import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SimpleSelect(props) {

  const handleChange = (event) => {
    props.onClick(event.target.value)
    console.log(event.target.value)
  };

  return (
    <div style={{ marginTop: "4px"}}>
      <FormControl style={{ width: "100%", marginTop: "8px"}}>
        <InputLabel id="demo-simple-select-label">Distance</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          onChange={handleChange}
        >
          <MenuItem value={1}>+1Km</MenuItem>
          <MenuItem value={2}>+2Km</MenuItem>
          <MenuItem value={3}>+3Km</MenuItem>
          <MenuItem value={4}>+4Km</MenuItem>
          <MenuItem value={5}>+5Km</MenuItem>
          <MenuItem value={10}>+10Km</MenuItem>
          <MenuItem value={20}>+20Km</MenuItem>
          <MenuItem value={30}>+30Km</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
