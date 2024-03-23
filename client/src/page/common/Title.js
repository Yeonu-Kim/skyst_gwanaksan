import React from 'react';
import styles from './Title.module.css'; 

const Title = () => {
  return (
    <div className={styles.title}>
      LOVE
    </div>
  );
}

const SubTitle = () => {
    return (
      <div className={styles.subtitle}>
        Lookalike Optimal with Valued Enchantment
      </div>
    );
  }

const Paragraph = () => {
    return (
      <div className={styles.paragraph}>
        이상형에 가까운 애니 캐릭터 & 버튜버 매칭 서비스
      </div>
    );
  }

export { Title, SubTitle, Paragraph };