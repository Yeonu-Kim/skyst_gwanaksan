import React, { useState } from 'react';
import { Title, Paragraph, SubTitle } from '../common/Title';
import { UserWindow }  from '../common/UserWindow';
import { Button, RadioButton } from '../common/Button';
import styles from './Face.module.css'; 



const Face = () => {
    const [isClicked, setIsClicked] = useState(true);
    
    const handleClick = () => {
      setIsClicked((current) => !current);
    };

    return (
        <section>
            <div>
                <SubTitle content={"STEP 2."}/>
                <Title content={"이상형의 얼굴은?"}/>
                <Paragraph content={"결과물이 이상형의 얼굴과 비슷해졌다면 '완전 좋아❤️' 버튼을 눌러주세요."}/>
            </div>
            <RadioButton text1="텍스트에서 이미지로" text2="이미지 업로드" isClicked={isClicked} upperHandle={handleClick}/>
            <UserWindow isClicked={isClicked}/>
        </section>
    )
}

export { Face }