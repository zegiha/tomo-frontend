import { Row8 } from "@/components/atomic/rowAndColumns/Row";
import styles from "@styles/chat.module.css"
import classNames from "classnames/bind";

import { TranslateIcon } from "@assets/icons"
import { Col20, Col8 } from "@/components/atomic/rowAndColumns/Col";

const cn = classNames.bind(styles)


interface IMessage {
  // text: string
  formatted: string
}

interface ChatBubbleProps {
  html: string
}

interface TranslateButtonProps {
  onClick?: () => void
}

function TranslateButton(props: TranslateButtonProps) {
  return <div className={cn("translateBtn")}>
    <TranslateIcon className={cn("translateBtn__icon")} onClick={props.onClick} />
  </div>
}

function ChatBubble(props: ChatBubbleProps) {
  return <div className={cn("chatBubble", "text-m-20")} dangerouslySetInnerHTML={{ __html: props.html }} />
}


interface ChatBoxProps {
  profileImgUrl?: string,
  isMine: boolean
  messages: IMessage[]
}

function ChatBox(props: ChatBoxProps) {
  return <>
    <Col8 alignItems={props.isMine ? "flex-end" : "flex-start"}>
      {props.profileImgUrl && !props.isMine && <img className={styles.chatProfileImg} src={props.profileImgUrl} alt="profile-img" />}
      {props.messages.map((e, i) => <>
        <Row8 alignItems="center">
          {(i + 1) === props.messages.length && props.isMine && <TranslateButton />}
          <ChatBubble html={e.formatted} />
          {(i + 1) === props.messages.length && !props.isMine && <TranslateButton />}
        </Row8>
      </>)}
    </Col8>
  </>
}

function Chat() {
  return (
    <Col20 width="100%" padding="46px 0 0 0" maxWidth="900px">
      <ChatBox profileImgUrl="https://r2.etty.dev/bb.jpg" isMine={false} messages={[{
        formatted: "abcd",
      }, {
        formatted: "abcd",
      }]} />

      <ChatBox profileImgUrl="https://r2.etty.dev/bb.jpg" isMine={true} messages={[{
        formatted: "abcd",
      }, {
        formatted: "abcd",
      }]} />
    </Col20>
  );
}

export default Chat;
