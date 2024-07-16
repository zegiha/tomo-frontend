import axios from "axios";
import {ChatMessage, Message} from "../types/chat/messageTypes.ts";

async function getSessionLog() {
  try {
    const {data} = await axios.get("https://tomo.deltalab.dev/session/0/log", {
      headers: {
        "Content-Type": "application/json",
      }
    });
    console.log(data);

    const result: Array<ChatMessage> = [];
    data.map(v => {
      const tmpMessage: Message = {
        id: `${v.role}MessageId`,
        formattedText: v.role === "user" ? v.formatted_text : v.content,
        translatedText: v.translated,
        formattedCorrectText: v.content,
        formattedCorrectPronounceText: v.pronunciation,
      }
      const tmp: ChatMessage = {
        isMine: v.role === "user",
        messages: [tmpMessage],
      }
      result.push(tmp);
    })

    return result;
  } catch (e) {
    console.error(e);
  }
}

export default getSessionLog;