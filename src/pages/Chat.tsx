import styles from "@styles/chat.module.css"
import classNames from "classnames/bind";

import { VoiceBtnIcon, VoiceRecBtnIcon } from "@assets/icons"

import { Col0, Col20 } from "@/components/atomic/rowAndColumns/Col";
import { useId, useRef, useState } from "react";
import ChatBox from "@/components/chat/ChatBox";

const cn = classNames.bind(styles)


class Voice {
  public readonly BUF_SIZE = 4096
  private readonly audioCtx: AudioContext
  private readonly processor: ScriptProcessorNode
  private readonly connectedMediaStreamSource: MediaStreamAudioSourceNode
  public samplesList: Float32Array[]

  constructor(private readonly mediaStream: MediaStream) {
    this.samplesList = []
    this.audioCtx = new AudioContext()
    this.processor = this.audioCtx.createScriptProcessor(this.BUF_SIZE, 1, 1)
    this.processor.onaudioprocess = (ev) => {
      const samples = ev.inputBuffer.getChannelData(0)
      this.samplesList.push(new Float32Array(samples))
    }
    this.processor.connect(this.audioCtx.destination)

    const source = this.audioCtx.createMediaStreamSource(mediaStream);
    source.connect(this.processor)

    this.connectedMediaStreamSource = source
  }

  quit() {
    this.processor.disconnect()
    this.processor.onaudioprocess = null

    this.connectedMediaStreamSource.disconnect()

    const tracks = this.mediaStream.getTracks();
    tracks.forEach(track => track.stop());

    this.audioCtx.close()
  }
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
    },
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
  ]

  const [isRecording, setIsRecording] = useState(false)
  const voice = useRef<Voice | null>(null)

  const handleVoiceBtnClick = async () => {
    setIsRecording((prev) => {
      const next = !prev;

      if (next) {
        navigator.mediaDevices.getUserMedia({
          audio: true
        }).then(ms => {
          voice.current = new Voice(ms)
        }).catch(e => {
          alert("마이크에 접근하지 못했습니다.")
          console.error(e)
        })
      } else {
        if (voice.current) {
          console.log(voice.current.samplesList)
          voice.current.quit()
          voice.current = null
        }
      }

      return next
    })
  }
  return (
    <Col0 padding="46px 0px 0px 0px" maxWidth="900px" margin="0 auto" width="100%">
      <Col20 width="100%" flex="1" padding="0 0 32px 0">
        {chatList.map(e =>
          <ChatBox key={useId()} profileImgUrl={e.profileImgUrl} isMine={e.isMine} messages={e.messages} />
        )}
      </Col20>
      <div className={cn("voiceBottom")}>
        <div className={cn("voiceBtnWrapper")}>
          {
            (() => {
              const VoiceBtn = isRecording ? VoiceRecBtnIcon : VoiceBtnIcon;

              return <VoiceBtn width={100} height={100} onClick={handleVoiceBtnClick} />
            })()
          }
        </div>
      </div>
    </Col0 >
  );
}

export default Chat;
