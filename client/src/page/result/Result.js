import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Result.module.css'; 
import { Title,SubTitle,Paragraph } from '../common/Title';
import { Button }  from '../common/Button';
import { useNavigate } from 'react-router-dom';

const Result = () => {
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [names, setNames] = useState([]);
    const [descriptions, setDescriptions] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [candidatesData, setCandidatesData] = useState([]);
    const navigate = useNavigate();
    if (window.sessionStorage.getItem('scores') === null) {
        navigate('/');
    }
    useEffect(() => {

    const storedScores = window.sessionStorage.getItem('scores');
        const scoresData = JSON.parse(storedScores);
        setData(scoresData);
        setImages(scoresData.map(score => `/images/${score.id_x}.png`)); 
        setNames(scoresData.map(score => score.name));
        setDescriptions(scoresData.map(score => score.description));
        const firstItem = scoresData[0];
        if (firstItem) {
            setKeywords([
                firstItem.genre,
                firstItem.job,
                firstItem.category,
                firstItem.personality,
                firstItem.gender,
                firstItem.mbti,
            ]);
        }
        setCandidatesData(scoresData.slice(1, 3).map(score => ({
            imageUrl: `/images/${score.id_x}.png`,
            name: score.name,
        })));
    }, []);
    return (
        <div className={styles.resultContainer}>
        <Title content="이상형 매칭 완료 🎁" />
        <Paragraph content="당신의 이상형은 바로..." />
        {images.length > 0 && descriptions.length > 0 && (
                <ResultCard 
                    imageUrl={images[0]} 
                    name={names[0]} 
                    description={descriptions[0]} 
                />
            )}
        <ResultLink text="결과 공유 링크 복사하기" href="" />
        <div className={styles.resultFooter}>
        <Keywords keywords={keywords} /> 
        <ResultCandidate candidates={candidatesData} />
        </div>
        
        </div>
    );
}

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
        
        <div className={styles.keywords_wrap}>
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
        <div className={styles.candidates_wrap}>
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
}

export default Result;