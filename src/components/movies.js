import React, { Component } from 'react'
import CardTemplate from './card-template'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { variables } from '../utils/variables'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

export default class Movies extends Component {

    constructor(props) {
        super(props);
        // to reduce redundancy and increase reusabilty, every filter will be generated from same set of code with help of state
        this.state = {
            // by default showing {now_playing}
            filter: "now_playing",
            id: [],
            poster: [],
            title: [],
            release_date: [],
            popularity: [],
            description: [],
            value: 'now_playing'
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.filter !== this.state.filter){
            this.componentDidMount();
        }
    }

    componentDidMount() {
        let url = `${variables.base_url}/movie/${this.state.filter}/?api_key=${variables.api}&language=en-US&page=1`
        let options = {
            method: "GET" ,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        } ;
        fetch(url, options).then(response => {
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
                <div className='categories_con' style={styles.category}>
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
                            <MenuItem value={"now_playing"}>now playing</MenuItem>
                            <MenuItem value={"popular"}>popular</MenuItem>
                            <MenuItem value={"top_rated"}>top rated</MenuItem>
                            <MenuItem value={"upcoming"}>upcoming</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                {/* list of movies */}

                <div id="movies-dynamic-entries" style={styles.movies}>
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

const styles = {
    category: {
        display: 'flex',
        justifyContent: 'center'
    },
    movies: {
        display: 'flex',
        justifyContent: 'center'
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