import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.collection = [
            {title: 'Marvel', cards: [
                {
                    category: 'Marvel',
                    question: 'What is the name of Thor\'s hammer?',
                    answer : 'Mjolnir'
                },
                {
                    category: 'Marvel',
                    question: 'What is Captain America\'s shield made out of?',
                    answer: 'Vibranium'
                },
            ]
            },

            {title: 'Beer', cards: [
                {
                    category: 'Beer',
                    question: 'What style of beer originated in the city of cologne, Germany?',
                    answer: 'Kolsch' 
                },
                {
                    category: 'Beer',
                    question: 'What does IPA stand for?',
                    answer: 'India Pale Ale',
                },
            ]
            },
        ];
        
        this.state = {
            collectionNumber: 0,
            cardNumber: 0,
        } 
    }
    state = { }
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row row-spacer">
                    <div className="col">
                        {}
                    </div>
                    <div className="col">
                        <h1>{this.collection[this.state.collectionNumber].title}</h1>
                        <h4>{this.collection[this.state.collectionNumber].cards[this.state.cardNumber].question}</h4>
                    </div>
                    <div className="col">
                        {}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;