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
            query: this.props.query
        })
        this.moon = React.createRef();
    }

    setIndex = () => {
        this.setState({
            index: this.props.index,
        })
        this.setState({
            query: this.props.query
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query) {
            // this.moon.current.changeName();
            console.log(`me=> ${this.state.query}`)
        }
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
                        {console.log(`routesQuery => ${this.state.query}`)}
                        <Search
                            query={this.state.query}
                            ref={this.moon}
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
