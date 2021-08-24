import { Component } from 'react';
import './TypeWritter.scss'

class TypeWritter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      arrayPhrases: [
        'a felicidade...',
        'momentos...',
      ], 
      isDeleting: false,
      period: 2000,
      txt: '',
      numLoop: 0
    }
  }

  componentDidMount() {
    this.startTyping(this.state);
  }

  startTyping(state) {
    const stateCopy = state;
    let index = stateCopy.numLoop % stateCopy.arrayPhrases.length;
    let fullText = stateCopy.arrayPhrases[index];

    if(stateCopy.isDeleting) {
      stateCopy.txt = fullText.substring(0, stateCopy.txt.length - 1);
    } else {
      stateCopy.txt = fullText.substring(0, stateCopy.txt.length + 1);
    }

    let delta = 200 - Math.random() * 100;

    if(stateCopy.isDeleting) {
      delta /= 2;
    }

    if(!stateCopy.isDeleting && stateCopy.txt === fullText) {
      delta = stateCopy.period;
      stateCopy.isDeleting = true;
    } else if (stateCopy.isDeleting && stateCopy.txt === '' ) {
      stateCopy.isDeleting = false;
      stateCopy.numLoop++;
      delta = 500;
    }

    let that = this;
    this.setState( stateCopy );

    setTimeout( function() {
      that.startTyping(that.state);
    }, delta);
  }

  render() {
    const { txt } = this.state;
    return (
        <div className="typewritter-container">
          <div className="typewritter">
              Registrando <span className="wrap"> {txt} </span>
            <span className="cursor"></span>
          </div>
        </div>
    )
  }
}

export default TypeWritter;