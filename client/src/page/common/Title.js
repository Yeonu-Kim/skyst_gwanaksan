import React from 'react';
import PropTypes from 'prop-types';
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

const MainTitle = ({content}) => {
  return (
    <div className={styles.maintitle}>
      {content}
    </div>
  )
}

const MainParagraph = ({content}) => {
  return (
    <div className={styles.mainparagraph}>
      {content}
    </div>
  )
}

Title.propTypes = {
  content: PropTypes.string.isRequired
};
SubTitle.propTypes = {
    content: PropTypes.string.isRequired
};
Paragraph.propTypes = {
    content: PropTypes.string.isRequired
};
MainTitle.propTypes = {
  content: PropTypes.string.isRequired
};
MainParagraph.propTypes = {
  content: PropTypes.string.isRequired
};
export { Title, SubTitle, Paragraph, MainTitle, MainParagraph };