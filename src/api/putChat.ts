import { ChatMessage } from "@types/chat/messageTypes.ts";
import baseAxios from "./axios.ts";

function concatFloat32Array(arrays: Float32Array[]) {
  const result = new Float32Array(arrays.reduce((acc, curr) => acc + curr.length, 0));

  let offset = 0;
  for (const array of arrays) {
    result.set(array, offset);
    offset += array.length;
  }

  return result;
}

async function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = buffer.byteLength;

  for (let i = 0; i < len; i++) { binary += String.fromCharCode(bytes[i]); }
  return window.btoa(binary);
}

async function convertToBase64(recordSamples: Float32Array[]) {
  const concatArray = concatFloat32Array(recordSamples);
  const buffer = concatArray.buffer;

  return await arrayBufferToBase64(buffer);
}

async function putChat(sessionId: string, recordSamples: Float32Array[]) {
  const recordFiles = await convertToBase64(recordSamples);

  try {
    const { data } = await baseAxios.put(
      `session/${sessionId}/chat`,
      JSON.stringify({ audio: recordFiles }),
      { headers: { "Content-Type": "application/json" } }
    );

    const userMessage: ChatMessage = {
      isMine: true,
      messages: [{
        id: "userMessageId",
        formattedText: data.user.formatted_text,
        formattedCorrectText: data.user.content,
        formattedCorrectPronounceText: data.user.pronunciation,
        translatedText: data.user.translated,
      }]
    };
    const characterMessage: ChatMessage = {
      isMine: false,
      messages: [{
        id: "characterMessageId",
        formattedText: data.assistant.content,
        translatedText: data.assistant.translated ? data.assistant.translated : "번역 불가",
      }]
    }

    return { userMessage, characterMessage };
  } catch (e) {
    console.error(e);
  }
}

export default putChat;