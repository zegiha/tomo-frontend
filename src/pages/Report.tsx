import React, {useState} from "react";
import {Col92, Col32, Col22} from "@components/atomic/rowAndColumns/Col.tsx";
import {Row8, RowSpacebetween} from "@components/atomic/rowAndColumns/Row.tsx";
import {ArrowIcon} from "@assets/icons";
import {ReportScore, ReportChat} from "@components/report";



function CharacterDescription({characterImageURL, characterName}: {characterImageURL: string,  characterName: string}) {
  return (
    <Row8 alignItems="center">
      <img src={characterImageURL} alt={`${characterName} profile image`} style={{width: "40px", height: "40px", borderRadius: "20px"}} />
      <span className="text-s-24">{characterName}</span>
    </Row8>
  );
}



function DateReportList({date, children}: {date: string, children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Col22 width="100%">
      <RowSpacebetween alignItems="center">
        <span className="text-m-20" style={{color: "var(--gray800)"}}>{date}</span>
        <div onClick={() => {
          setIsOpen(!isOpen);
          console.log("???");
        }}>
          <ArrowIcon
            width={24}
            height={24}
            style={{transform: `rotate(${isOpen ? 180 : 0}deg)`}}
          />
        </div>

      </RowSpacebetween>
      {isOpen && children}
    </Col22>
  );
}



function Report() {
  return (
    <Col92
      width="100%"
      maxWidth="900px"
      padding="46px 0"
    >
        {dummy.map((v, i) => {
          return (
            <Col32 key={i} width="100%">
              <CharacterDescription
                characterImageURL={v.characterImageURL}
                characterName={v.characterName}
              />
              {v.reportData.map(v => {
                return (
                  <DateReportList date={v.date} key={v.date}>
                    <ReportScore {...v.reportScore}/>
                    <ReportChat chatData={v.chatData}/>
                  </DateReportList>
                );
              })}
            </Col32>
          );
        })}
    </Col92>
  );
}



export default Report;



const dummy = [
  {
    characterName: "서혁 갓",
    characterImageURL: "https://r2.etty.dev/bb.jpg",
    reportData: [
      {
        date: "2024.07.15 - 01:33 ~ 02:16",
        reportScore: {
          allScore: 92,
          subScore: {
            accuracy: 16,
            completeness: 74,
            fluency: 23,
          }
        },
        chatData: [
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
        ],
      },
      {
        date: "2024.07.14 - 01:33 ~ 02:16",
        reportScore: {
          allScore: 92,
          subScore: {
            accuracy: 16,
            completeness: 74,
            fluency: 23,
          }
        },
        chatData: [
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
        ],
      },
    ],
  },
  {
    characterName: "서혁 갓",
    characterImageURL: "https://r2.etty.dev/bb.jpg",
    reportData: [
      {
        date: "2024.07.15 - 01:33 ~ 02:16",
        reportScore: {
          allScore: 92,
          subScore: {
            accuracy: 16,
            completeness: 74,
            fluency: 23,
          }
        },
        chatData: [
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
        ],
      },
      {
        date: "2024.07.14 - 01:33 ~ 02:16",
        reportScore: {
          allScore: 92,
          subScore: {
            accuracy: 16,
            completeness: 74,
            fluency: 23,
          }
        },
        chatData: [
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
        ],
      },
    ],
  },
];