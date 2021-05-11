import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import CardViewer from './CardViewer/cardViewer';

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
                {
                    category: 'Marvel',
                    question: 'What type of doctor is Stephen Strange?',
                    answer: 'Neurosurgeon'
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
                    answer: 'India Pale Ale'
                },
                {
                    category: 'Beer',
                    question: 'what are the 4 ingredients necessary for brewing beer?',
                    answer: 'Water, Malt, Hops, Yeast'
                },
            ]
            }
        ];

        this.state = {
            collectionNumber: 0,
            cardNumber: 0,
            cardDisplay: null
        }
        
        this.showAnswer = this.showAnswer.bind(this);
        this.goToNextCard = this.goToNextCard.bind(this);
        this.goToPreviousCard = this.goToPreviousCard.bind(this);

    }


    componentDidMount(){
        this.setState({
            cardDisplay: this.collection[this.state.collectionNumber].cards[this.state.cardNumber].question
        });
    }
    
    showAnswer = () =>{
        let cardDisplay = this.collection[this.state.collectionNumber].cards[this.state.cardNumber].question;

        if(this.state.cardDisplay === cardDisplay){
            this.setState({
                cardDisplay: this.collection[this.state.collectionNumber].cards[this.state.cardNumber].answer,
            });
        }
        else{
            this.setState({
                cardDisplay: this.collection[this.state.collectionNumber].cards[this.state.cardNumber].question
            });
        }
    }

    reRender = () =>{
    
            this.setState({
                cardDisplay: this.collection[this.state.collectionNumber].cards[this.state.cardNumber].question
            });
        
    }


    goToNextCard = () =>{
        if(this.state.cardNumber < this.collection[this.state.collectionNumber].cards.length){
            this.setState({
                cardNumber: this.state.cardNumber + 1
            });
            console.log(this.state.cardNumber)
            this.reRender()

        }
        else{
            this.setState({
                cardNumber: 0
            });
        }
    }

    goToPreviousCard = () =>{
        if(this.state.cardNumber > 0){
            this.setState({
                cardNumber: this.state.cardNumber - 1
            });
        }
        else{
            this.setState({
                cardNumber: this.collection[this.state.collectionNumber].cards.length-1
            });
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <CardViewer 
                    title={this.collection[this.state.collectionNumber].title}
                    display={this.state.cardDisplay} 
                    nextCard={() => this.goToNextCard()} 
                    previousCard={() => this.goToPreviousCard()}
                    revealAnswer={() => this.showAnswer()}/>
            </div>
        );
    }
}

export default App;