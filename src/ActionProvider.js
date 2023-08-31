class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  // coustamize actionProvider

  kunalHandler =() =>{
    const message = this.createChatBotMessage("Welcome kunal in NMIT WifiBot, How can i help you");
    this.setChatbotMessage(message);
  }

  todoHandler =() =>{
    const message = this.createChatBotMessage("Sure",
    {widget: 'roommates'});
    this.setChatbotMessage(message);
  }
  
  thankHandler =() =>{
    const message = this.createChatBotMessage("Your welcome")
    this.setChatbotMessage(message);
  }

  errorHandler = () =>{
    const message = this.createChatBotMessage("Sorry, I Don't have any data about this please check once");
    this.setChatbotMessage(message);
  }


  setChatbotMessage = (message) => {
    this.setState(state => ({ ...state, messages: [...state.messages, message] }))
  }
}
export default ActionProvider;