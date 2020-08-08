import React, { Component } from 'react';
import './index.css';
import {randomWord} from './words.js';
import '../Button';
import PageDefault from '../PageDefault';
import {Link} from 'react-router-dom'
import Button from '../Button'

import step0 from '../../assets/img/forca_img/0.png';
import step1 from '../../assets/img/forca_img/1.png';
import step2 from '../../assets/img/forca_img/2.png';
import step3 from '../../assets/img/forca_img/3.png';
import step4 from '../../assets/img/forca_img/4.png';
import step5 from '../../assets/img/forca_img/5.png';
import step6 from '../../assets/img/forca_img/6.png';

class Forca extends Component {
    static defaultProps = {
      maxWrong: 6,
      images: [step0, step1, step2, step3, step4, step5, step6]
    }
  
    constructor(props) {
      super(props);
      this.state = {
        mistake: 0,
        guessed: new Set([]),
        answer: randomWord()
      }
    }
  
    handleGuess = e => {
      let letter = e.target.value;
      this.setState(st => ({
        guessed: st.guessed.add(letter),
        mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
      }));
    }
  
    guessedWord() {
      return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    }
  
    generateButtons() {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => (
        <button
          class='btn btn-lg btn-primary m-2'
          key={letter}
          value={letter}
          onClick={this.handleGuess}
          disabled={this.state.guessed.has(letter)}
        >
          {letter}
        </button>
      ));
    }
  
    resetButton = () => {
      this.setState({
        mistake: 0,
        guessed: new Set([]),
        answer: randomWord()
      });
    }
  
    render() {
      const gameOver = this.state.mistake >= this.props.maxWrong;
      const isWinner = this.guessedWord().join("") === this.state.answer;
      let gameStat = this.generateButtons();
  
      if (isWinner) {
        gameStat = "Você venceu!!!"
      }
  
      if (gameOver) {
        gameStat = "Você perdeu."
      }
  
      return (
        <PageDefault className="Forca">
          <h1 className='text-center'>404</h1>
          <div className="float-right">Erros: {this.state.mistake} de {this.props.maxWrong}</div>
          <div className="text-center">
            <img src={this.props.images[this.state.mistake]} alt=""/>
          </div>
          <div className="text-center">
            <p>Adivinhe a palavra:</p>
            <p>
              {!gameOver ? this.guessedWord() : this.state.answer}
            </p>
            <p>{gameStat}</p>
            <Button className='btn btn-info' onClick={this.resetButton}>Tentar novamente</Button>
          </div>
        </PageDefault>
      )
    }
  }

export default Forca;