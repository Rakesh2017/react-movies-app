import React, { Component } from 'react'
import { variables } from '../utils/variables'
let base_url = variables.image_url;

class CardTemplate extends Component {
    render() {
        return (
            <div className='card-template-con' style={styles.card}>
                {/* left part / movie poster */}
                <div className="img-con">
                    <img style={{marginBottom:'-4px'}} src={base_url + this.props.poster} alt="movie name" className="movie-image" />
                </div>
                {/* right part / image */}
                <div className="content-con" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

                    <div style={styles.stats}>
                        {/* title */}

                        <h5 style={{fontSize:'1rem'}} className="title-h5">{this.props.title}</h5>

                        {/* release date and popularity */}

                        <p style={{ color: 'grey', marginTop: '-15px' }} className='release-popularity-p' id='release-popularity-id'>Release Date: {this.props.release_date} | Popularity: {this.props.popularity}</p>

                    </div>

                    {/* description */}
                    <div style={{padding: '0 10px 0'}} className='description-con'>
                        <p style={{ color: 'grey' }} className='description-p' id='description-id'>{this.props.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    card: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        maxWidth: '800px',
        marginTop: '40px',
        border: 'solid 1px grey',
        boxShadow: '3px 3px 9px grey',
        borderRadius: '2px'
    },
    stats: {
        textAlign: 'center'
    },
}

export default CardTemplate