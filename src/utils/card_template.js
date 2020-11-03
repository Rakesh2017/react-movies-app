import React, { Component } from 'react'
import { variables } from './variables'
let base_url = variables.image_url;

class CardTemplate extends Component {
    render() {
        return (
            <div className='card-template-con'>
                {/* left part / movie poster */}
                <div className="img-con"><img src={base_url+this.props.poster} alt="movie name" className="movie-image" /></div>
                {/* right part / image */}
                <div className="content-con">
                    {/* title */}
                    <div>
                        <h5 className="title-h5">{this.props.title}</h5>
                    </div>
                    {/* release date and popularity */}
                    <div className="release-popularity-con">
                        <p className='release-popularity-p' id='release-popularity-id'>Release Date: {this.props.release_date} | Popularity: {this.props.popularity}</p>
                    </div>
                    {/* description */}
                    <div className='description-con'>
                        <p className='description-p' id='description-id'>{this.props.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardTemplate