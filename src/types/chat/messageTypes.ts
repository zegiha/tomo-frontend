interface Message {
  id: string;
  formattedText: string;
  translatedText: string;
  formattedCorrectText?: string;
  formattedCorrectPronounceText?: string;
}

interface ChatMessage {
  isMine: boolean;
  profileImgUrl?: string;
  messages: Message[];
}

export type {
  Message,
  ChatMessage,
}