import React, { Component } from 'react';

class EmptyPrompt extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h2>Sorry, there are no results</h2>
            </div>
        );
    }
}

export default EmptyPrompt;