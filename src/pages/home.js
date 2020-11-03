import React, { Component } from 'react'
import Header from '../components/header'
import Routes from './navigation/routes'

export default class Home extends Component {
    render() {
        return (
            <div className='home-con'>
                {/* header */}
                <Header />
                {/* navigation tabs */}
                <Routes />
            </div>
        )
    }
}
