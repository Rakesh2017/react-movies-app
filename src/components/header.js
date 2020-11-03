import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export default class Header extends Component {
    render() {
        return (
            <div className='header-con'>
                {/* title */}
                <h1 className="header-title">React Movies App</h1>
                {/* search input */}
                <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
                {/* select/ drop down */}
                <InputLabel id="demo-simple-select-outlined-label">Search type</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={1}
                    // onChange={handleChange}
                    label="Search Type"
                >
                    <MenuItem value={1}>Movie</MenuItem>
                    <MenuItem value={2}>Multi</MenuItem>
                    <MenuItem value={3}>TV Shows</MenuItem>
                </Select>
                {/* button */}
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </div>
        )
    }
}
