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
            <div className='routes-con' style={{ marginTop: '40px' }}>
                <Tabs style={{ border: 'solid 1px grey', borderRadius: '5px' }} selectedIndex={this.state.index} onSelect={index => this.setState({ index: index })}>
                    {/* titles */}
                    <TabList style={styles.tabList} >
                        <Tab style={{display: 'flex', justifyContent: 'stretch'}}>MOVIES</Tab>
                        <Tab>SEARCH RESULTS</Tab>
                        <Tab>TV SHOWS</Tab>
                    </TabList>
                    {/* components */}

                    {/* movies */}
                    <TabPanel style={styles.mainContainerStyle}>
                        <Movies />
                    </TabPanel>
                    {/* search */}
                    <TabPanel style={styles.mainContainerStyle}>
                        {this.props.query === "$" || this.props.query === "" ? <SearchPrompt /> :
                            <Search
                                query={this.state.query}
                                filter={this.state.filter}
                            />}
                    </TabPanel>
                    {/* TV */}
                    <TabPanel style={styles.mainContainerStyle}>
                        <Telivision />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

const styles = {
    mainContainerStyle: {
        paddingTop: '20px',
        overflowY: 'scroll',
        height: '1500px'
    },
    tabList: {
        background: 'rgba(192, 192, 192, 0.23)',
        display: 'flex',
        justifyContent: 'space-around'
    },
}