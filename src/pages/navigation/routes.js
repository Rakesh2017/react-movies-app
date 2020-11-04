import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Movies from './movies'
import Search from './search'
import Telivision from './telivision'

export default class routes extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            // by default movie tab
            index: 0,
            query: this.props.query,
             filter: "movie"
        })
        this.moon = React.createRef();
    }

    setIndex = () => {
        this.setState({
            index: this.props.index,
            query: this.props.query,
            filter: this.props.filter,
        })
    }


    render() {

        return (
            <div className='routes-con'>
                <Tabs selectedIndex={this.state.index} onSelect={index => this.setState({ index: index })}>
                    {/* titles */}
                    <TabList>
                        <Tab>Movies</Tab>
                        <Tab>Search Results</Tab>
                        <Tab>TV Shows</Tab>
                    </TabList>
                    {/* components */}

                    {/* movies */}
                    <TabPanel>
                        <Movies />
                    </TabPanel>
                    {/* search */}
                    <TabPanel>
                        <Search
                            query={this.props.query}
                            filter={this.props.filter}
                        />
                    </TabPanel>
                    {/* TV */}
                    <TabPanel>
                        <Telivision />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
