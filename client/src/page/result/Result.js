import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Result.module.css'; 
import { Title,SubTitle,Paragraph } from '../common/Title';
import { Button }  from '../common/Button';

// const candidatesData = [
//     {
//       imageUrl: 'https://i.namu.wiki/i/xe_mTv5uhI2Wen7WEBDWRMuYYpbb7avQxQvjLQBZC2S7PYUSVQckDtGhEh9KqnnzHHKob3y7ID28Ni-nikbSlrkAai6AFDRDidLuXB1mhc28FwG2p_sNgg8Clfnar3MvdgeM4SPt9ppntWKacrCW4Q.webp',
//       name: '램'
//     },
//     {
//       imageUrl: 'https://i.namu.wiki/i/xe_mTv5uhI2Wen7WEBDWRMuYYpbb7avQxQvjLQBZC2S7PYUSVQckDtGhEh9KqnnzHHKob3y7ID28Ni-nikbSlrkAai6AFDRDidLuXB1mhc28FwG2p_sNgg8Clfnar3MvdgeM4SPt9ppntWKacrCW4Q.webp',
//       name: '미사카 미코토'
//     }
//   ];

const Result = () => {
        const [images, setImages] = useState([]);
        const [names, setNames] = useState([]);
        const [descriptions, setDescriptions] = useState([]);
        const [keywords, setKeywords] = useState([]);
        useEffect(() => {
            fetch('http://ec2-34-228-60-199.compute-1.amazonaws.com/api/image/prompt')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setImages(data.image_url);
                setNames(data.scores.map(score => score.name));
                setDescriptions(data.scores.map(score => score.description));
                const firstItem = data.scores[0];
                setKeywords([
                    firstItem.genre,
                    firstItem.job,
                    firstItem.category,
                    firstItem.personality,
                    firstItem.gender,
                    firstItem.mbti,
                ]);
            });
        }, []);
        // Preparing candidates data dynamically based on fetched data
        const candidatesData = names.slice(1, 3).map((name, index) => ({
            imageUrl: images[index + 1], // Corrects the index to match the sliced names
            name,
        }));
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
        <Keywords keywords={keywords} /> 
        <ResultCandidate candidates={candidatesData} />
        </div>
    )
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

export default Result;