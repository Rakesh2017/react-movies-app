import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Movies from './movies'
import Search from './search'
import Telivision from './telivision'


export default class routes extends Component {
    render() {
        return (
            <div className='routes-con'>
                <Tabs>
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
                        <Search />
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
