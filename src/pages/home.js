import React, { Component } from 'react'
import Header from '../components/header'
import Routes from './navigation/routes'
import {variables} from '../utils/variables'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state=({
            filter: "parent",
            query: variables.intial_query,
            index: 1
        })
        this.cat = React.createRef();
    }

    handleFilter = (filter) => {
        this.setState({
            filter: filter
        })
    }

    handleQuery = (query) => {
        this.setState({
            query: query
        })
    }

    handleIndex = (index) => {
        this.setState({
            index: index
        })
    }
    

    componentDidUpdate(prevProps, prevState){
        // change index all the throughh to search
        this.cat.current.setIndex();
        if(prevState.filter !== this.state.filter) {
            console.log(`parentFilterValue: ${this.state.filter}`)
        }
        if(prevState.query !== this.state.query) {
            console.log(`headerQueryValue: ${this.state.query}`)
        }
    }

    componentDidMount(){
        console.log(`parentQueryValue: ${this.state.query}`)
    }

    render() {
        return (
            <div className='home-con'>
                {/* header */}
                <Header
                  onFilterChanged={this.handleFilter}
                  onQueryChanged={this.handleQuery}
                  onIndexChanged={this.handleIndex}
                />
                {/* navigation tabs */}
                <Routes
                    query={this.state.query}
                    index={this.state.index}
                    ref={this.cat}
                />
            </div>
        )
    }
}
