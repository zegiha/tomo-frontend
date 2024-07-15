import { Row8 } from "@/components/atomic/rowAndColumns/Row";
import styles from "@styles/chat.module.css"
import classNames from "classnames/bind";

import { TranslateIcon, VoiceBtnIcon } from "@assets/icons"

import { Col0, Col20, Col8 } from "@/components/atomic/rowAndColumns/Col";
import { useId } from "react";

const cn = classNames.bind(styles)

interface IMessage {
  id: string
  formattedText: string
  formattedCorrectText?: string
  formattedCorrectPronounceText?: string
}

function BotChatBubble(props: { message: IMessage }) {
  return <div className={cn("botChatBubble", "text-m-20")} dangerouslySetInnerHTML={{ __html: props.message.formattedText }} />
}

function MyChatBubble(props: { message: IMessage }) {
  const needSep = props.message.formattedCorrectText || props.message.formattedCorrectPronounceText
  return <div className={cn("myChatBubble", "text-m-20")}>
    <div dangerouslySetInnerHTML={{ __html: props.message.formattedText }} />
    {
      needSep && <div className={cn("sep")} />
    }
    {
      props.message.formattedCorrectText && <div dangerouslySetInnerHTML={{ __html: props.message.formattedCorrectText }} />
    }
    {
      props.message.formattedCorrectPronounceText && <div dangerouslySetInnerHTML={{ __html: props.message.formattedCorrectPronounceText }} />
    }
  </div>
}


interface TranslateButtonProps {
  onClick?: () => void
}

function TranslateButton(props: TranslateButtonProps) {
  return <div className={cn("translateBtn")}>
    <TranslateIcon className={cn("translateBtn__icon")} onClick={props.onClick} />
  </div>
}

interface ChatBoxProps {
  profileImgUrl?: string,
  isMine: boolean
  messages: IMessage[]
}

function ChatBox({ isMine, profileImgUrl, messages }: ChatBoxProps) {
  return (
    <Col8 alignItems={isMine ? 'flex-end' : 'flex-start'}>
      {profileImgUrl && (
        <img className={styles.chatProfileImg} src={profileImgUrl} alt="profile-img" />
      )}
      {messages.map((msg, i) => {
        const isLastMessage = i + 1 === messages.length;
        const ChatBubble = isMine ? MyChatBubble : BotChatBubble;

        return (
          <Row8 key={msg.id} alignItems="center">
            {isLastMessage && isMine && <TranslateButton />}
            <ChatBubble message={msg} />
            {isLastMessage && !isMine && <TranslateButton />}
          </Row8>
        );
      })}
    </Col8>
  );
}

function Chat() {
  const chatList = [
    {
      isMine: false,
      profileImgUrl: "https://r2.etty.dev/bb.jpg",
      messages: [{
        id: "aaaaaa",
        formattedText: "abcd",
      }, {
        id: "bbbbbb",
        formattedText: "abcd",
      }]
    },
    {
      isMine: true,
      profileImgUrl: "https://r2.etty.dev/bb.jpg",
      messages: [{
        id: "jonin",
        formattedText: "abcd",
        formattedCorrectText: "defg",
        formattedCorrectPronounceText: "sfda"
      }, {
        id: "hnybiyu",
        formattedText: "abcd",
      }]
    }
  ]

  return (
    <Col0 padding="46px 20px 0px 20px" maxWidth="900px" margin="0 auto" width="100%">
      <Col20 width="100%" flex="1">
        {chatList.map(e =>
          <ChatBox key={useId()} profileImgUrl={e.profileImgUrl} isMine={e.isMine} messages={e.messages} />
        )}
      </Col20>
      <div className={cn("voiceBottom")}>
        <div className={cn("voiceBtnWrapper")}>
          <VoiceBtnIcon width={100} height={100} />
        </div>
      </div>
    </Col0 >
  );
}

export default Chat;
