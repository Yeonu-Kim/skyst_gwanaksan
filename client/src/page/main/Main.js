import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainTitle, MainParagraph, MainSubTitle } from '../common/Title';
import { SendButton }  from '../common/Button';
import styles from './Main.module.css'; 


const Main = () => {
    const navigate = useNavigate();

    const redirectKeyword = () => {
        navigate('/keyword')
    }
    return (
        <section className={styles.main_background}>
            <div className={styles.main_container}>
            <div >
                <MainTitle content={"LOVE:"}/>
                <MainSubTitle content={"Lookalike Optimal with Valued Enchantment"}/>
                <MainParagraph content={"이상형에 가까운 애니캐릭터 & 버튜버 매칭 서비스"}/>
            </div>
            <SendButton text={"바로 시작해보자구~ 💛"} onClickFunction={redirectKeyword} className={styles.main_btn}/>
            </div>
        </section>
    )
}

export { Main }