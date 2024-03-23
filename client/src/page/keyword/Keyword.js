import {Title, SubTitle, Paragraph} from "../common/Title";
import Button from "../common/Button";
import React, { useState, useEffect} from "react"
import styles from './Keyword.module.css'; 


const Keyword = () => {
    const ButtonContainer = ({ title, children }) => {
        return (
            <div >
                <SubTitle content={title} />
                <div className={styles.button_container}>
                    {children}
                </div>
            </div>
        );
    }

        // 17:00 일단 버튼 하드코딩함. 추후 DB에서 불러오는 것으로 수정
    return (
        <section>
            <div>
                <SubTitle content={"STEP 2."} />
                <Title content={"이상형의 성격은? "} />
                <Paragraph content={"이상형의 성격을 나타내는 키워드를 모두 선택해주세요."} />
            </div>
            <div className={styles.button_wrap}>
                <ButtonContainer title={"장르"}>
                    <Button text={"러브코미디"} className={styles.button}/>
                    <Button text={"서스펜스"}/>
                    <Button text={"판타지"}/>
                    <Button text={"추리"}/>
                    <Button text={"액션"}/>
                    <Button text={"SF"}/>
                    <Button text={"드라마"}/>
                    <Button text={"스포츠"}/>
                    <Button text={"음악"}/>
                </ButtonContainer>
                <ButtonContainer title={"직업"}>
                    <Button text={"학생"}/>
                    <Button text={"아이돌"}/>
                    <Button text={"배우"}/>
                    <Button text={"비인간"}/>
                    <Button text={"액션"}/>
                    <Button text={"닌자"}/>
                    <Button text={"헌터"}/>
                    <Button text={"사진작가"}/>
                    <Button text={"마법사"}/>
                    <Button text={"흡혈귀"}/>
                    <Button text={"초능력자"}/>
                    <Button text={"모험가"}/>
                    <Button text={"음악가"}/>
                    <Button text={"모델"}/>
                    <Button text={"직원"}/>
                    <Button text={"메이드"}/>
                    <Button text={"의사"}/>
                    <Button text={"킬러"}/>
                    <Button text={"운동선수"}/>
                    <Button text={"대장"}/>
                    <Button text={"번역가"}/>
                    <Button text={"왕족"}/>
                    <Button text={"괴도"}/>
                </ButtonContainer>
                <ButtonContainer title={"관계"}>
                    <Button text={"주인공"}/>
                    <Button text={"악역"}/>
                    <Button text={"주인공 가족"}/>
                    <Button text={"라이벌"}/>
                    <Button text={"스승"}/>
                </ButtonContainer>
                <ButtonContainer title={"성격"}>
                    <Button text={"활발"}/>
                    <Button text={"선함"}/>
                    <Button text={"직설적"}/>
                    <Button text={"쿨싴,"}/>
                    <Button text={"얀데레"}/>
                    <Button text={"요리치"}/>
                    <Button text={"다정"}/>
                    <Button text={"선함"}/>
                    <Button text={"광기"}/>
                    <Button text={"차분"}/>
                    <Button text={"나르시시즘"}/>
                    <Button text={"츤데레"}/>
                    <Button text={"똑똑함"}/>
                    <Button text={"싸움광"}/>
                </ButtonContainer>
                <ButtonContainer title={"성별"}>
                    <Button text={"남"}/>
                    <Button text={"여"}/>
                </ButtonContainer>
            </div>
        </section>
    )
}

export { Keyword };