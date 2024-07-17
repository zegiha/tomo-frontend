import { Col92, Col32, Col4 } from "@components/atomic/rowAndColumns/Col.tsx";
import { Row12 } from "@components/atomic/rowAndColumns/Row.tsx";

import { homeStyle } from "@styles/index";
import { ReportScore, ReportChat } from "@/components/report";

import bannerAImg from "@assets/img/bannerA.png"
import bannerBImg from "@assets/img/bannerB.png"
import Button from "@/components/common/Button";
import getReport from "@/api/report";
import { useEffect, useState } from "react";
import { getList } from "@/api";

function CharacterItem({ title, subTitle }: { title: string, subTitle: string }) {
  return (
    <Row12
      width="max-content"
      alignItems="center"
      padding="12px"
      backgroundColor="var(--gray500)"
      borderRadius={12}
    >
      <div style={{ width: "64px", height: "64px", borderRadius: "64px", backgroundColor: "var(--gray900)" }} />
      <Col4>
        <span className="text-m-20">{title}</span>
        <div className={`${homeStyle.characterItemContents} text-m-16`}>{subTitle}</div>
      </Col4>
    </Row12>
  );
}

function RecentlyTalkedCharacter() {
  return (
    <Col32>
      <span className="text-s-24">최근 대화한 캐릭터!</span>
      <div className={homeStyle.characterContainer}>
        {Array.from(Array(5)).map((_, i) => (<CharacterItem key={i} title={"지동갓"} subTitle={"ソユルああ日本語勉強していますか？ ソユルああ日本語勉強していますか？"} />))}
      </div>
    </Col32>
  );
}



const chatData = [
  {
    isMine: false,
    profileImageURL: "https://r2.etty.dev/bb.jpg",
    messages: [
      {
        id: "1",
        formattedText: "Lorem ipsum dolor amet sit?",
      },
      {
        id: "2",
        formattedText: "Lorem ipsum dolor amet sit?",
      }
    ]
  },
  {
    isMine: true,
    profileImageURL: "https://r2.etty.dev/bb.jpg",
    messages: [
      {
        id: "1",
        formattedText: "Lorem ipsum dolor amet sit?",
        formattedCorrectText: "Lorem ipsum do l or amet sit?",
        formattedCorrectPronounceText: "발음 발음 입숨 발음 발음 발음 발음",
      },
      {
        id: "2",
        formattedText: "Lorem ipsum dolor amet sit?",
      }
    ]
  },
];

function LastReport() {
  const [score, setScore] = useState(0)

  useEffect(() => {
    getList().then(res => {
      const last = res.sort((a: any, b: any) => b.last_active - a.last_active)[0]
      getReport(last.session_id).then(res => setScore(res.average_pronunciation))
    })

  }, [])

  return (
    <Col32>
      <span className="text-s-24">마지막 리포트</span>
      <ReportScore
        allScore={Math.floor(score)}
        subScore={{
          accuracy: Math.floor(score * 0.9),
          completeness: Math.floor(score * 0.8),
          fluency: Math.floor(score * 0.75),
        }}
      />
      <ReportChat
        chatData={chatData as any}
      />
    </Col32>
  );
}



function DefaultCharacter() {
  return (
    <Col32>
      <span className="text-s-24">기본 제공 캐릭터</span>
      <div className={homeStyle.characterContainer}>
        {Array.from(Array(3)).map((_, i) => (<CharacterItem key={i} title="기본" subTitle="특징 설명 특징 설명 특징 설명 특징 설명 특징 설명 특징 설명 " />))}
      </div>
    </Col32>
  );
}



function MakeNewCharacter() {
  return (
    <>
      <Col32>
        <span className="text-s-24">나만의 새로운 캐릭터!</span>
        <Col32>
          <div className={homeStyle.bannerImgWrapper} data-first>
            <img src={bannerAImg} alt="" />
            <img src={bannerAImg} alt="" />
          </div>
          <div className={homeStyle.bannerText}>
            원하는 모든 캐릭터를
            <br />
            <span>만들고, 대화하고, 공부하세요!</span>
          </div>
          <div className={homeStyle.bannerImgWrapper} data-second>
            <img src={bannerBImg} alt="" />
            <img src={bannerBImg} alt="" />
          </div>

          <Button className={homeStyle.newCharacterBtn}>
            캐릭터 추가하기
          </Button>
        </Col32>
      </Col32>
    </>
  );
}



function Home() {
  return (
    <Col92
      width="100%"
      maxWidth="900px"
      padding="46px 0"
    >
      <RecentlyTalkedCharacter />
      <LastReport />
      <DefaultCharacter />
      <MakeNewCharacter />
    </Col92>
  );
}

export default Home;
