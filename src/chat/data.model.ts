export enum Role { 
  system = 'system',
  user = 'user',
  assistant = 'assistant'
}

export interface Message {
  role: Role;
  content: string;
}

export interface ChatModel {
  messages: Message[];
}
