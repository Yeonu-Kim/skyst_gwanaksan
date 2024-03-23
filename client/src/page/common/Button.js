


  import React from 'react';
  import styles from './Button.module.css'; 
  
  const Button = ({content}) => {
    return (
        <button className={styles.button}>{content}</button>
    );
  };
  
export default Button;