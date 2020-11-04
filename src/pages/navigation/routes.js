import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Movies from '../../components/movies'
import Search from '../../components/search'
import Telivision from '../../components/telivision'
import SearchPrompt from '../../components/search-prompt'

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
            <div className='routes-con' style={{marginTop: '10px'}}>
                <Tabs style={{border: 'solid 1px grey', padding: '10px', borderRadius:'5px'}} selectedIndex={this.state.index} onSelect={index => this.setState({ index: index })}>
                    {/* titles */}
                    <TabList  >
                        <Tab>Movies</Tab>
                        <Tab>Search Results</Tab>
                        <Tab>TV Shows</Tab>
                    </TabList>
                    {/* components */}

                    {/* movies */}
                    <TabPanel style={mainContainerStyle}>
                        <Movies />
                    </TabPanel>
                    {/* search */}
                    <TabPanel style={mainContainerStyle}>
                        {this.props.query === "$" || this.props.query === "" ? <SearchPrompt /> :
                            <Search
                                query={this.state.query}
                                filter={this.state.filter}
                            />}
                    </TabPanel>
                    {/* TV */}
                    <TabPanel style={mainContainerStyle}>
                        <Telivision />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

const mainContainerStyle = {
    paddingTop: '50px',
    overflowY: 'scroll',
    height: '1500px'
}