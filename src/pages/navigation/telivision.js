import React, { Component } from 'react'
import CardTemplate from '../../utils/card_template'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { variables } from '../../utils/variables';

const url = `${variables.base_url}/tv/on_the_air?api_key=${variables.api}&language=en-US&page=1`

export default class Telivision extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: [],
            poster: [],
            title: [],
            release_date: [],
            popularity: [],
            description: [],
        }
    }

    componentDidMount() {
        fetch(url).then(response => {
            return response.json()
        }).then(result => {
            let json = result.results;


            let id = [], poster = [], title = [], release_date = [], popularity = [], description = []
            for (let i = 0; i < json.length; i++) {
                id.push(json[i].id)
                poster.push(json[i].poster_path);
                title.push(json[i].original_name);
                release_date.push(json[i].first_air_date);
                popularity.push(json[i].popularity);
                description.push(json[i].overview);
            }
            // setting states
            this.setState({ 
                id: id,
                title: title,
                poster: poster,
                release_date: release_date,
                popularity:popularity,
                description:description
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
                    <InputLabel id="demo-simple-select-outlined-label">categories</InputLabel>
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
                </div>

                {/* list of movies */}

                <div id="movies-dynamic-entries">
                    <ul id="movies-ul">
                        {this.state.id.map((element, index) => {
                            return <CardTemplate 
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
