import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { NavBar, Footer } from './page/common/NavBar';
import { Keyword } from './page/keyword/Keyword';
import './page/common/Global.css'; 
import { Paragraph, Title } from './page/common/Title';
import {ResultCard, ResultLink, Keywords, ImageComponent, ResultCandidate} from './page/result/Result';
const candidatesData = [
  {
    imageUrl: 'https://i.namu.wiki/i/xe_mTv5uhI2Wen7WEBDWRMuYYpbb7avQxQvjLQBZC2S7PYUSVQckDtGhEh9KqnnzHHKob3y7ID28Ni-nikbSlrkAai6AFDRDidLuXB1mhc28FwG2p_sNgg8Clfnar3MvdgeM4SPt9ppntWKacrCW4Q.webp',
    name: '램'
  },
  {
    imageUrl: 'https://i.namu.wiki/i/xe_mTv5uhI2Wen7WEBDWRMuYYpbb7avQxQvjLQBZC2S7PYUSVQckDtGhEh9KqnnzHHKob3y7ID28Ni-nikbSlrkAai6AFDRDidLuXB1mhc28FwG2p_sNgg8Clfnar3MvdgeM4SPt9ppntWKacrCW4Q.webp',
    name: '미사카 미코토'
  }
];

const router = createBrowserRouter([
  {
    path: '/',
    element: (
    <>
      <NavBar />
      <div>Main Page</div>
    </>
    )
  },
  {
    path: '/face',
    element: (
      <>
        <NavBar />
        <div>Face</div>
      </>
      )
  },
  {
    path: '/keyword',
    element: (
      <>
        <NavBar />
        <Keyword />
      </>
      )
  },
  {
    path: '/result',
    element: (
      <>
        <NavBar />
        <Title content="이상형 매칭 완료 🎁" />
        <Paragraph content="당신의 이상형은 바로..." />
        <ResultCard imageUrl="https://i.namu.wiki/i/xe_mTv5uhI2Wen7WEBDWRMuYYpbb7avQxQvjLQBZC2S7PYUSVQckDtGhEh9KqnnzHHKob3y7ID28Ni-nikbSlrkAai6AFDRDidLuXB1mhc28FwG2p_sNgg8Clfnar3MvdgeM4SPt9ppntWKacrCW4Q.webp" name="키즈나 아이" description="키즈나 아이는 2016년 12월부터 활동한 일본의 버츄얼 유튜버이다"/>
        <ResultLink text="결과 공유 링크 복사하기" href="" />
        <Keywords keywords={["키즈나 아이", "일본", "버츄얼 유튜버", "ENFP", "활발"]} />
        <ResultCandidate candidates={candidatesData} />
      </>
      )
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;