import baseAxios from "./axios.ts";
import { ChatMessage, Message } from "../types/chat/messageTypes.ts";

interface ISessionLogRes {
  role: string; formatted_text: string; content: string; translated: any; pronunciation: any;
}

async function getSessionLog(sessionId: string = "0") {
  try {
    const { data } = await baseAxios.get(`session/${sessionId}/log`, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    console.log(data);

    const result: Array<ChatMessage> = [];
    data.map((v: ISessionLogRes) => {
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