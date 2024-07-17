import {Col12, Col20} from "@components/atomic/rowAndColumns/Col.tsx";
import {Row12} from "@components/atomic/rowAndColumns/Row.tsx";
import ChatBox, { IMessage } from "@components/chat/ChatBox.tsx";

interface chatData {
  isMine: boolean,
  profileImageURL: string,
  messages: IMessage[]
}

function ReportChat({chatData}: {chatData: Array<chatData>}) {
  return (
    <Col12 width="100%">
      <Col20 width="100%" border="2px solid var(--gray600)" borderBottom="2px solid var(--gray600)" padding="20px 8px 20px 20px" borderRadius={12}>
        <div style={{maxHeight: "340px", overflowY: "scroll", paddingRight: "20px"}}>
          {chatData.map((v, i) =>
            <ChatBox key={i} isMine={v.isMine} profileImgUrl={v.profileImageURL} messages={v.messages}/>
          )}
          {chatData.map((v, i) =>
            <ChatBox key={i} isMine={v.isMine} profileImgUrl={v.profileImageURL} messages={v.messages}/>
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
