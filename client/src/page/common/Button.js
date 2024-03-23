import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.css'; 
  
const Button = ({text,
                onClickColor='var(--highlight-pink)',
                originalColor='var(--primary-color)',
                onClickTextColor='var(--white-color)',
                onClickFunction,
                title="",
                defaultClick=false
              }) => {
    const [isClicked, setIsClicked] = useState(defaultClick);
    
    const handleClick = () => {
      setIsClicked((current) => !current);
      if (onClickFunction) {
          onClickFunction(title, text);
      }
    };

    const buttonClasses = `${styles.button} ${isClicked ? styles.clicked : ''}`;
    const buttonStyle = {
      backgroundColor: isClicked ? onClickColor : originalColor,
      color: isClicked ? onClickTextColor : 'black',
    };

    return (
      <button 
      className={buttonClasses} 
      onClick={handleClick} 
      style={buttonStyle}
    >  
        <span className={styles.btnText}>{text}</span>
    </button>
    );
};

const SendButton = ({text, originalColor='var(--secondary-color)', onClickFunction}) => {
    const buttonStyle = {
      backgroundColor: originalColor,
    };

    return (
      <button
      className={styles.button}
      onClick={onClickFunction}
      style={buttonStyle}
    > 
      <span className={styles.btnText}>{text}</span>
    </button>
    );
}

const RadioButton = ({text1, text2, upperHandle}) => {
  const [isClicked, setIsClicked] = useState(true)
  const firstButtonClasses = `${styles.button} ${isClicked ? styles.clicked : ''}`;
  const secondButtonClasses = `${styles.button} ${!isClicked ? styles.clicked : ''}`;
  const firstButtonStyle = {
    backgroundColor: isClicked ? 'var(--highlight-pink)' : 'var(--primary-color)',
    color: isClicked ? 'var(--white-color)' : 'black',
  };
  const secondButtonStyle = {
    backgroundColor: !isClicked ? 'var(--highlight-pink)' : 'var(--primary-color)',
    color: !isClicked ? 'var(--white-color)' : 'black',
  };

  const handleClick = (event) => {
    if (isClicked && event.target.textContent === text1) {
      return; 
    }
    if (!isClicked && event.target.textContent === text2) {
      return; 
    }
    setIsClicked((current) => !current);
    upperHandle((current) => !current);
  }

  return (
    <div>
      <button
        className={firstButtonClasses} 
        onClick={handleClick} 
        style={firstButtonStyle}
      >  
          <span className={styles.btnText}>{text1}</span>
      </button>
      <button
        className={secondButtonClasses} 
        onClick={handleClick} 
        style={secondButtonStyle}
      >  
          <span className={styles.btnText}>{text2}</span>
      </button>
    </div>
  );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClickColor: PropTypes.string,
    backgroundColor: PropTypes.string,
};

export { Button, SendButton, RadioButton };
