import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.css'; 
  
const Button = ({text, onClickColor='var(--highlight-pink)', originalColor='var(--primary-color)', onClickTextColor='var(--white-color)', onClickFunction, title=""}) => {
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
      setIsClicked((current) => !current);
      console.log(!isClicked);
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

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClickColor: PropTypes.string,
    backgroundColor: PropTypes.string,
};

export { Button, SendButton };
