import classNames from "classnames/bind"
import { Col8 } from "../atomic/rowAndColumns/Col"
import styles from "@styles/chat.module.css"
import { TranslateIcon } from "@/assets/icons"
import {useEffect, useState} from "react"
import { Row8 } from "../atomic/rowAndColumns/Row"

const cn = classNames.bind(styles)

interface IMessage {
    id: string
    formattedText: string
    translatedText: string
    formattedCorrectText?: string
    formattedCorrectPronounceText?: string
}

function BotChatBubble(props: { message: IMessage, isTranslated: boolean }) {
    return <div className={cn("botChatBubble", "text-m-20")}>
        <div dangerouslySetInnerHTML={{ __html: props.message.formattedText }}/>
        {props.isTranslated && props.message.translatedText && <div className={cn("sep")}/>}
        {
          props.isTranslated && props.message.translatedText && <div dangerouslySetInnerHTML={{__html: props.message.translatedText}}/>
        }
    </div>
}

function MyChatBubble(props: { message: IMessage, isTranslated: boolean }) {
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
        {props.isTranslated && props.message.translatedText && <div className={cn("sep")}/>}
        {
          props.isTranslated && props.message.translatedText && <div dangerouslySetInnerHTML={{__html: props.message.translatedText}}/>
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
    const [translated, setTranslated] = useState(false)

    const handleTranslate = () => {
        setTranslated((prev) => !prev)
    }

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
                        {isLastMessage && isMine && <TranslateButton onClick={handleTranslate} />}
                        <ChatBubble message={msg} isTranslated={translated} />
                        {isLastMessage && !isMine && <TranslateButton onClick={handleTranslate} />}
                    </Row8>
                );
            })}
        </Col8>
    );
}

export default ChatBox