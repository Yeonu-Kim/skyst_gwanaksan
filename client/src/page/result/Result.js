import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Result.module.css'; 
import { SubTitle,Paragraph } from '../common/Title';
import Button  from '../common/Button';

const ResultCard = ({ imageUrl,name, description }) => {
    return (
        <div className={styles.resultCard}>

            <img src={imageUrl} alt="Result" />
            <div className={styles.resultContent}>
            <SubTitle content={name} className={styles.resultName} />
            <Paragraph content={description} className={styles.resultDescription} />
            </div>
        </div>
    );
}

const ResultLink = ({ text, href }) => {
    return (
        <a href={href} className={styles.resultBtn}>
          <Button text={text} originalColor='var(--secondary-color)'/>
        </a>
    );
}
  
const Keywords = ({ keywords }) => {
    return(
        
        <div>
            <SubTitle content="키워드" />
            <div className={styles.keywords} >
            {keywords.map(keyword => 
            <span key={keyword} className={styles.keyword} >
                {keyword}
            </span>
            )} 
            </div>
            
        </div>
    );
}

const ImageComponent = ({ imageUrl, name }) => {
    return (
    <div className={styles.imageComponent}>
      <img src={imageUrl} alt={name}  />
      <Paragraph content={name} />
    </div>
);
}

const ResultCandidate = ({ candidates }) => {
    return (
        <div>
            <SubTitle content="다른 이상형 후보는?" className={styles.resultName} />
            <div className={styles.candidatesContainer}>
                {candidates.map((candidate, index) => (
                <ImageComponent
                key={index}
                imageUrl={candidate.imageUrl}
                name={candidate.name}
            />
        ))}
      </div>
    </div>
        
    );
};

export {ResultCard, ResultLink, Keywords, ImageComponent, ResultCandidate};
