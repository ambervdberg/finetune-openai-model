import { Message, Role } from "./data.model";

export class ChatData {
  messages: Message[] = [];

  constructor(systemMessage: string) {
    this.addSystemMessage(systemMessage);
  }

  private addMessage(role: Role, content: string) {
    this.messages.push({ role, content });
  }

  addUserMessage(content: string) {
    this.addMessage(Role.user, content);
  }

  addAssistantMessage(content: string) {
    this.addMessage(Role.assistant, content);
  }

  private addSystemMessage(content: string) {
    this.addMessage(Role.system, content);
  }
}