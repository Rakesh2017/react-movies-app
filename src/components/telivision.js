import React, { Component } from 'react'
import CardTemplate from './card-template'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { variables } from '../utils/variables'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

export default class Telivision extends Component {

    constructor(props) {
        super(props);
        // to reduce redundancy and increase reusabilty, every filter will be generated from same set of code with help of state
        this.state = {
            // by default showing {airing_today}
            filter: "airing_today",
            id: [],
            poster: [],
            title: [],
            release_date: [],
            popularity: [],
            description: [],
            value: 'airing_today'
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.filter !== this.state.filter){
            this.componentDidMount();
        }
    }

    componentDidMount() {
        let url = `${variables.base_url}/tv/${this.state.filter}/?api_key=${variables.api}&language=en-US&page=1`
        fetch(url).then(response => {
            return response.json()
        }).then(result => {
            let json = result.results;


            let id = [], poster = [], title = [], release_date = [], popularity = [], description = []
            for (let i = 0; i < json.length; i++) {
                id.push(json[i].id)
                poster.push(json[i].poster_path);
                title.push(json[i].original_title);
                release_date.push(json[i].release_date);
                popularity.push(json[i].popularity);
                description.push(json[i].overview);
            }
            // setting states
            this.setState({
                id: id,
                title: title,
                poster: poster,
                release_date: release_date,
                popularity: popularity,
                description: description
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                {/* movie category select option */}
                <div className='categories_con'>
                    {/* select/ drop down */}
                    <FormControl variant="filled" className={useStyles.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={this.state.value}
                            onChange={(event)=> {       
                                this.setState({
                                    value: event.target.value,
                                    filter: event.target.value,
                                    id: this.state.id
                                })
                            }}
                        >
                            <MenuItem value={"airing_today"}>airing today</MenuItem>
                            <MenuItem value={"on_the_air"}>on the air</MenuItem>
                            <MenuItem value={"popular"}>popular</MenuItem>
                            <MenuItem value={"top_rated"}>top rated</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                {/* list of movies */}

                <div id="movies-dynamic-entries">
                    <ul id="movies-ul">
                        {this.state.id.map((element, index) => {
                            return <CardTemplate
                                filter = {this.state.filter}
                                title={this.state.title[index]}
                                poster={this.state.poster[index]}
                                release_date={this.state.release_date[index]}
                                popularity={this.state.popularity[index]}
                                description={this.state.description[index]}
                            />
                        })}
                    </ul>
                </div>

            </div>
        )
    }
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