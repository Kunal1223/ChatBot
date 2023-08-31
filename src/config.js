import { createChatBotMessage } from "react-chatbot-kit";
import Roommates from './components/Roommates'

const botName = "NmitWifiBot";
const config = {

  botName: botName,
  initialMessages: [createChatBotMessage(`Hi I'm ${botName}. I’m here to help you explain how I work.`)
  ],

  state: {
    roommates: ['Ankur', 'Shivansh' , 'Kunal'],
  },

  widgets: [{
    widgetName: "roommates",
    widgetFunc: (props) => <Roommates {...props} />,
    mapStateToProps: ["roommates"],
  },
]  
}

export default config   