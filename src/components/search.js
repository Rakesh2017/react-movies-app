import React, { Component } from 'react';
import CardTemplate from './card-template'
import { variables } from '../utils/variables';
import EmptyPrompt from './empty-prompt'

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // by default showing {now_playing}
            filter: this.props.filter,
            query: this.props.query,
            id: [],
            poster: [],
            title: [],
            release_date: [],
            popularity: [],
            description: [],
            value: this.props.value,
            bool: false,
        }
    }

    componentDidUpdate(d, b) {
        if (this.props.query !== this.state.query) {
            this.setState({
                query: this.props.query,
            })
            this.componentDidMount();
        }
        if (this.props.filter !== this.state.filter) {
            this.setState({
                filter: this.props.filter,
            })
            this.componentDidMount();
        }
    }

    componentDidMount() {
       
        let url = `${variables.base_url}/search/${this.props.filter}/?query=${this.props.query}&api_key=${variables.api}&language=en-US&page=1`
       

        fetch(url).then(response => {
            return response.json()
        }).then(async result => {
            let json = result.results;

            if (await result.results == "")
                this.setState({
                    bool: true
                });
            else
                this.setState({
                    bool: false
                })

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
            // console.log(err)
        })
    }


    render() {
        return (
            <div>
                {/* list of movies */}
                <div id="movies-dynamic-entries">
                   
                    {  this.state.bool ? <EmptyPrompt /> :
                        <ul id="movies-ul">
                            {this.state.id.map((element, index) => {
                                return <CardTemplate
                                    filter={this.state.filter}
                                    title={this.state.title[index]}
                                    poster={this.state.poster[index]}
                                    release_date={this.state.release_date[index]}
                                    popularity={this.state.popularity[index]}
                                    description={this.state.description[index]}
                                />
                            })
                            }
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

