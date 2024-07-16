import {Col12, Col20} from "@components/atomic/rowAndColumns/Col.tsx";
import {Row12} from "@components/atomic/rowAndColumns/Row.tsx";
import ChatBox from "@components/chat/ChatBox.tsx";

const chatData = [
  {
    isMine: false,
    profileImgUrl: "https://r2.etty.dev/bb.jpg",
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
    profileImgUrl: "https://r2.etty.dev/bb.jpg",
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
]

function ReportChat() {
  return (
    <Col12 width="100%">
      <Col20 width="100%" border="2px solid var(--gray600)" borderBottom="2px solid var(--gray600)" padding="20px 8px 20px 20px" borderRadius={12}>
        <div style={{maxHeight: "340px", overflowY: "scroll", paddingRight: "20px"}}>
          {chatData.map((v, i) =>
            <ChatBox key={i} isMine={v.isMine} profileImgUrl={v.profileImgUrl} messages={v.messages}/>
          )}
          {chatData.map((v, i) =>
            <ChatBox key={i} isMine={v.isMine} profileImgUrl={v.profileImgUrl} messages={v.messages}/>
          )}
        </div>
      </Col20>
      <Row12 width="100%" justifyContent="end">
        <span className="text-m-16" style={{color: "var(--gray800)"}}>발음</span>
        <span className="text-m-16" style={{color: "var(--gray800)"}}>문법</span>
      </Row12>
    </Col12>
  );
}

export default ReportChat;
