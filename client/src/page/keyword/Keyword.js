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
                    <Button content={"러브코미디"} className={styles.button}/>
                    <Button content={"서스펜스"}/>
                    <Button content={"판타지"}/>
                    <Button content={"추리"}/>
                    <Button content={"액션"}/>
                    <Button content={"SF"}/>
                    <Button content={"드라마"}/>
                    <Button content={"스포츠"}/>
                    <Button content={"음악"}/>
                </ButtonContainer>
                <ButtonContainer title={"직업"}>
                    <Button content={"학생"}/>
                    <Button content={"아이돌"}/>
                    <Button content={"배우"}/>
                    <Button content={"비인간"}/>
                    <Button content={"액션"}/>
                    <Button content={"닌자"}/>
                    <Button content={"헌터"}/>
                    <Button content={"사진작가"}/>
                    <Button content={"마법사"}/>
                    <Button content={"흡혈귀"}/>
                    <Button content={"초능력자"}/>
                    <Button content={"모험가"}/>
                    <Button content={"음악가"}/>
                    <Button content={"모델"}/>
                    <Button content={"직원"}/>
                    <Button content={"메이드"}/>
                    <Button content={"의사"}/>
                    <Button content={"킬러"}/>
                    <Button content={"운동선수"}/>
                    <Button content={"대장"}/>
                    <Button content={"번역가"}/>
                    <Button content={"왕족"}/>
                    <Button content={"괴도"}/>
                </ButtonContainer>
                <ButtonContainer title={"관계"}>
                    <Button content={"주인공"}/>
                    <Button content={"악역"}/>
                    <Button content={"주인공 가족"}/>
                    <Button content={"라이벌"}/>
                    <Button content={"스승"}/>
                </ButtonContainer>
                <ButtonContainer title={"성격"}>
                    <Button content={"활발"}/>
                    <Button content={"선함"}/>
                    <Button content={"직설적"}/>
                    <Button content={"쿨싴,"}/>
                    <Button content={"얀데레"}/>
                    <Button content={"요리치"}/>
                    <Button content={"다정"}/>
                    <Button content={"선함"}/>
                    <Button content={"광기"}/>
                    <Button content={"차분"}/>
                    <Button content={"나르시시즘"}/>
                    <Button content={"츤데레"}/>
                    <Button content={"똑똑함"}/>
                    <Button content={"싸움광"}/>
                </ButtonContainer>
                <ButtonContainer title={"성별"}>
                    <Button content={"남"}/>
                    <Button content={"여"}/>
                </ButtonContainer>
            </div>
        </section>
    )
}

export { Keyword };