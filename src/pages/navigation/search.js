import React, { Component } from 'react';
import CardTemplate from '../../utils/card_template';
import { variables } from '../../utils/variables';


export default class Search extends Component {

    constructor(props) {
        super(props);
        // to reduce redundancy and increase reusabilty, every filter will be generated from same set of code with help of state
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
            value: this.props.value
        }
    }

    componentDidUpdate(d, b){
        if(this.props.query !== this.state.query){
            this.setState({
                query: this.props.query
            })
            this.componentDidMount();
            console.log(`valeues=> ${this.props.query}, ${this.state.query}`)
        }
        
        
    }

    componentDidMount() {
        console.log(`searchQuery => ${this.state.query}`)
        let url = `${variables.base_url}/search/${this.props.filter}/?query=${this.props.query}&api_key=${variables.api}&language=en-US&page=1`
        console.log("Search -> componentDidMount -> url", url)

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
            //console.log(err)
        })
    }


    render() {
        return (
            <div>
                {/* list of movies */}
                <div id="movies-dynamic-entries">
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
                        })}
                    </ul>
                </div>

            </div>
        )
    }
}

