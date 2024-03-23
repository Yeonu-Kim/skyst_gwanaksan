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
        <span>{content}</span>
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
      <span className={styles.english}>{content}</span>
    </div>
  )
}

const MainSubTitle = ({content}) => {
  return (
    <div className={styles.title}>
      <span className={styles.english}>{content}</span>
    </div>
  );
}

const MainParagraph = ({content}) => {
  return (
    <div className={styles.mainparagraph}>
      <span>{content}</span>
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
export { Title, SubTitle, Paragraph, MainTitle, MainParagraph, MainSubTitle };