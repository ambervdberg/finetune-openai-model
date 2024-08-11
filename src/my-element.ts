import saveAs from 'file-saver';
import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ChatData } from './chat/chat';

@customElement('my-element')
export class MyElement extends LitElement {
  @state() private userMessage: string = '';
  @state() private assistantMessage: string = '';
  @state() private systemMessage: string = '';

  private chatData?: ChatData;

  private fileData: ChatData[] = [];

  render() {
    return html`
      <div class="container">
        <label>Add you existing .jsonl training data file as a starting point (optional):</label>
        <input type="file" @change=${this.onFileSelected} class="file-input" />

         <div class="input-group">
          <label>System Message:</label>
          <input
            type="text"
            .value=${this.systemMessage}
            @input=${(e: Event) => this.systemMessage = (e.target as HTMLInputElement).value}
          />
        </div>

        <div class="input-group">
          <label>User Message:</label>
          <input
            type="text"
            .value=${this.userMessage}
            @input=${(e: Event) => this.userMessage = (e.target as HTMLInputElement).value}
          />
        </div>
        <div class="input-group">
          <label>Assistant Message:</label>
          <input
            type="text"
            .value=${this.assistantMessage}
            @input=${(e: Event) => this.assistantMessage = (e.target as HTMLInputElement).value}
          />
        </div>
        <div class="button-group">
          <button @click=${this.onAddMessage}>Add messages to current chat</button>
          <button ?disabled=${!Boolean(this.chatData)} @click=${this.onNextChat}>Complete & Start next chat</button>
        </div>        
        
      </div>
      
      <div class="messages-container">
        <button id="save-button" @click=${this.onSaveToFile} class="save-button">Save to file</button>
        <h3>All chats:</h3>
          
        <code>
          <ul>
            ${this.fileData.map((chatData, index) => html`
                <li>
                  <button class="delete-button" @click=${() => this.onDeleteChat(index)}>Delete this chat</button>
                  ${chatData.messages.map((message) => html`
                      <strong>${message.role}:</strong> ${message.content}<br/>
                    `)}        
                  <hr />
                </li>
              `)}
          </ul>
        </code>
      </div>
    `;
  }

  private onNextChat() {
    if (!this.chatData) return;

    if (this.userMessage && this.assistantMessage) {
      this.onAddMessage();
    }

    this.chatData = undefined;
    this.requestUpdate();
  }

  private onAddMessage() {
    if (!this.chatData) {

      if (!this.systemMessage) {
        this.systemMessage = 'You are a helpful assistant!';
      }

      this.chatData = new ChatData(this.systemMessage);
      this.fileData.push(this.chatData);
    }

    if (this.userMessage) {
      this.chatData.addUserMessage(this.userMessage);
      this.userMessage = '';
    }

    if (this.assistantMessage) {
      this.chatData.addAssistantMessage(this.assistantMessage);
      this.assistantMessage = '';
    }

    this.requestUpdate();
  }

  private onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {

      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const text = reader.result as string;
        this.processFileContent(text);
      };

      reader.readAsText(file);
    }
  }

  private processFileContent(text: string) {
    const lines = text.split('\n');

    this.fileData = lines
      .filter(line => line.trim())
      .map(line => JSON.parse(line))
      .map(data => {
        const chatData = new ChatData(this.systemMessage);
        chatData.messages = data.messages;
        return chatData;
      });

    this.systemMessage = this.fileData[0].messages[0].content;

    this.requestUpdate();
  }

  private onSaveToFile() {
    if (this.userMessage && this.assistantMessage) {
      this.onNextChat();
    }

    const jsonlContent = this.transformDataToJSONL(this.fileData);

    const blob = new Blob([jsonlContent], { type: 'application/jsonl' });
    saveAs(blob, 'input.jsonl');
  }

  private transformDataToJSONL(data: ChatData[]) {
    return data.map(item => JSON.stringify(item)).join('\n');
  }

  private onDeleteChat(index: number) {
    this.fileData.splice(index, 1);
    this.requestUpdate();
  }

  static styles = css`
    :host {
      display: block;
      margin: 0 auto;
      padding: 0;
      font-family: Arial, sans-serif;
      height: 100%;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 600px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      padding: 16px;   
      margin: 16px auto;
    }

    .input-group {
      display: flex;
      flex-direction: column;
    }

    label {
      margin-bottom: 4px;
      font-weight: bold;
    }

    input[type="text"] {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }

    .file-input {
      margin-bottom: 16px;
    }

    .button-group {
      display: flex;
      gap: 8px;
    }

    button {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #0056b3;
    }

    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    .save-button {
      align-self: flex-start;
    }

    .messages-container {
      background-color: #1F1F1F;
      padding: 16px;
      height: 50%;
      position: fixed;
      bottom: 0;
      width: 100%;
      overflow-y: auto;
      box-sizing: border-box;
      box-shadow: -1px 1px 20px 0px #747474;

      h3 {
        color: white;
      }
    }

    #save-button {
      margin: 8px 0;
      float: right;
    }

    hr {
      border: none;
      height: 1px;
      background-color: #dddddd;
    }

    code {
      font-family: "Consolas", 'Courier New', monospace;
      font-size: 14px;
      color: #9CDCFE;
      flex-grow: 1;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: left;
    }

    li {
      padding: 4px 0;
    }

    strong {
      color: #d63384;
    }

    .delete-button {
      background: transparent;
      border: none;
      color: white;
      font-weight: bold;
      cursor: pointer;
      float: right;
    }
`;
}


declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
