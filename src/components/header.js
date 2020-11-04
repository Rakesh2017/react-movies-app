import React, { Component } from 'react'
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default class Header extends Component {

    constructor(props) {
        super(props);
        // to reduce redundancy and increase reusabilty, every filter will be generated from same set of code with help of state
        this.state = {
            // by default showing {now_playing}
            value: 'movie',
            filter: "movie",
            // though index can be handled at parent{home}, but this can be handy if tabs positions chnaged in future
            index: 1
        }
    }

    render() {
        return (
            <div className='header-con'>
                {/* title */}
                <h1 style={{display:'flex', justifyContent: 'center'}} className="header-title">React Movie App</h1>
                {/* search input */}

                <div style={{display:'flex', justifyContent: 'center'}}>
                    <div style={mainContainerStyle}>

                        <TextField id="outlined-search" placeholder="search movie, tv shows" label="Search" type="search" variant="outlined" />
                        {/* categories */}
                        <div className='categories_con' style={{ display: 'flex', justifyContent: 'center' }}>
                            {/* select/ drop down */}
                            <FormControl variant="filled" className={useStyles.formControl}>
                                <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={this.state.value}
                                    onChange={(event) => {
                                        this.setState({
                                            value: event.target.value,
                                            filter: event.target.value,
                                        })
                                    }}
                                >
                                    <MenuItem value={"movie"}>Movies</MenuItem>
                                    <MenuItem value={"tv"}>TV Shows</MenuItem>
                                    <MenuItem value={"multi"}>Multi</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        {/* button */}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={event => {
                                this.props.onFilterChanged(this.state.filter,)
                                this.props.onQueryChanged(document.getElementById('outlined-search').value)
                                this.props.onIndexChanged(this.state.index)
                            }}
                        >
                            Search
                </Button>
                    </div>
                </div>
            </div>
        )
    }
}

const mainContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    // maxWidth: '1000px'
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));