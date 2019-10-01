import React, { Component } from 'react';
import Header from '../Common/header';
import Services from '../Common/Services';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                title="Welcome To Our Studio!"
                subtitle="IT'S NICE TO MEET YOU"
                showButton = {true}
                buttonText = "Tell Me More"
                />
                <Services/>
            </div>
        );
    }
}

export default Home;