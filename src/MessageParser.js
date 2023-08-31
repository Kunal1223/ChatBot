class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
   
    parse(message) {
      const lowerCase = message.toLowerCase();

      if(lowerCase.includes("kunal") || lowerCase.includes("kishor")){
        this.actionProvider.kunalHandler();
      }

      else if(lowerCase.includes("roommates")){
        this.actionProvider.todoHandler();
      }
      else if(lowerCase.includes("thank")){
        this.actionProvider.thankHandler();
      }

      else{
        this.actionProvider.errorHandler();
      }
    }
  }
  
  export default MessageParser;