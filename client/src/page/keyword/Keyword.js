import {Title, SubTitle, Paragraph} from "../common/Title";
import { useNavigate } from "react-router-dom";
import { Button, MemoizedButton, SendButton } from "../common/Button";
import React, { useState, useEffect} from "react"
import styles from './Keyword.module.css'; 

const ButtonContainer = ({ title, children }) => {
    return (
        <div>
            <SubTitle content={title} />
            <div className={styles.button_container}>
                {children}
            </div>
        </div>
    );
}

const Keyword = () => {
    const [selectedValues, setSelectedValues] = useState(
        {
            "genre": [],
            "job": [],
            "category": [],
            "personality": [],
            "gender": [],
            "mbti": [],
        }
    );
    const navigate = useNavigate();

    const handleButtonClick = (key, value) => {
        setSelectedValues((current) => {
            const newValue = { ...current };
            
            const index = newValue[key].indexOf(value);

            if (index !== -1) {  
                newValue[key] = newValue[key].filter((item, idx) => idx !== index)
            }
            else {
                newValue[key] = [...newValue[key], value];
            }
    
            console.log(newValue);
            return newValue;
        });
    }

    const handleSendData = () => {
        console.log("click")
        console.log(JSON.stringify(selectedValues));
        fetch('http://ec2-34-228-60-199.compute-1.amazonaws.com/api/keywords', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedValues)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            window.sessionStorage.setItem('keyword_list', JSON.stringify(data));
            navigate('/face');
        })
        .catch(error => {
            console.log(error);
        })
    }

    // 17:00 일단 버튼 하드코딩함. 추후 DB에서 불러오는 것으로 수정
    return (
        <section className={styles.main_body}>
            <div>
                <SubTitle content={"STEP 2."} />
                <Title content={"이상형의 성격은? "} />
                <Paragraph content={"이상형의 성격을 나타내는 키워드를 모두 선택해주세요."} />
            </div>
            <div className={styles.button_wrap}>
                <ButtonContainer title={"장르"}>
                    <Button text={"러브코미디"} title={"genre"} onClickFunction={handleButtonClick}/>
                    <Button text={"서스펜스"} title={"genre"} onClickFunction={handleButtonClick}/>
                    <Button text={"판타지"} title={"genre"} onClickFunction={handleButtonClick}/>
                    <Button text={"추리"} title={"genre"} onClickFunction={handleButtonClick}/>
                    <Button text={"액션"} title={"genre"} onClickFunction={handleButtonClick}/>
                    <Button text={"SF"} title={"genre"} onClickFunction={handleButtonClick}/>
                    <Button text={"드라마"} title={"genre"} onClickFunction={handleButtonClick}/>
                    <Button text={"스포츠"} title={"genre"} onClickFunction={handleButtonClick}/>
                    <Button text={"음악"} title={"genre"} onClickFunction={handleButtonClick}/>
                </ButtonContainer>
                <ButtonContainer title={"직업"}>
                    <Button text={"학생"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"아이돌"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"배우"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"비인간"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"액션"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"닌자"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"헌터"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"사진작가"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"마법사"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"흡혈귀"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"초능력자"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"모험가"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"음악가"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"모델"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"직원"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"메이드"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"의사"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"킬러"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"운동선수"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"대장"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"번역가"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"왕족"} title={"job"} onClickFunction={handleButtonClick}/>
                    <Button text={"괴도"} title={"job"} onClickFunction={handleButtonClick}/>
                </ButtonContainer>
                <ButtonContainer title={"관계"}>
                    <Button text={"주인공"} title={"category"} onClickFunction={handleButtonClick}/>
                    <Button text={"악역"} title={"category"} onClickFunction={handleButtonClick}/>
                    <Button text={"주인공 가족"} title={"category"} onClickFunction={handleButtonClick}/>
                    <Button text={"라이벌"} title={"category"} onClickFunction={handleButtonClick}/>
                    <Button text={"스승"} title={"category"} onClickFunction={handleButtonClick}/>
                </ButtonContainer>
                <ButtonContainer title={"성격"}>
                    <Button text={"활발"} title={"personality"} onClickFunction={handleButtonClick}/>
                    <Button text={"선함"} title={"personality"} onClickFunction={handleButtonClick}/>
                    <Button text={"직설적"} title={"personality"} onClickFunction={handleButtonClick}/>
                    <Button text={"쿨싴,"} title={"personality"} onClickFunction={handleButtonClick}/>
                    <Button text={"얀데레"} title={"personality"} onClickFunction={handleButtonClick}/>
                    <Button text={"요리치"} title={"personality"} onClickFunction={handleButtonClick}/>
                    <Button text={"다정"} title={"personality"} onClickFunction={handleButtonClick}/>
                    <Button text={"선함"} title={"personality"} onClickFunction={handleButtonClick}/>
                    <Button text={"광기"} title={"personality"} onClickFunction={handleButtonClick}/>
                    <Button text={"차분"} title={"personality"} onClickFunction={handleButtonClick}/>
                    <Button text={"나르시시즘"} title={"personality"} onClickFunction={handleButtonClick}/>
                    <Button text={"츤데레"} title={"personality"} onClickFunction={handleButtonClick}/>
                    <Button text={"똑똑함"} title={"personality"} onClickFunction={handleButtonClick}/>
                    <Button text={"싸움광"} title={"personality"} onClickFunction={handleButtonClick}/>
                </ButtonContainer>
                <ButtonContainer title={"성별"}>
                    <Button text={"남"} title={"gender"} onClickFunction={handleButtonClick}/>
                    <Button text={"여"} title={"gender"} onClickFunction={handleButtonClick}/>
                </ButtonContainer>
                <ButtonContainer title={"MBTI"}>
                    <Button text={"ISTJ"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"INTJ"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"ESTJ"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"ENTJ"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"ISTP"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"INTP"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"ESTP"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"ENTP"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"ISFJ"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"INFJ"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"ESFJ"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"ENFJ"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"ISFP"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"INFP"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"ESFP"} title={"mbti"} onClickFunction={handleButtonClick}/>
                    <Button text={"ENFP"} title={"mbti"} onClickFunction={handleButtonClick}/>
                </ButtonContainer>
            </div>
            <SendButton text={"선택 완료~ 🎵"} onClickFunction={handleSendData}/>
        </section>
    )
}

export { Keyword };