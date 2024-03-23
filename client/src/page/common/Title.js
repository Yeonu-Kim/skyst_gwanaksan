import React from 'react';
import styles from './Title.module.css'; 

const Title = ({content}) => {
  return (
    <div className={styles.title}>
      {content}
    </div>
  );
}

const SubTitle = ({content}) => {
    return (
      <div className={styles.subtitle}>
        {content}
      </div>
    );
  }

const Paragraph = ({content}) => {
    return (
      <div className={styles.paragraph}>
        {content}
      </div>
    );
  }

export { Title, SubTitle, Paragraph };