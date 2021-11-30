import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import "./ChatScreen.css"

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: "BadLarry",
            image: "https://cdn.pixabay.com/photo/2016/07/30/14/28/yoschi-1557253_960_720.jpg",
            message: "Want to group up?"
        },
        {
            name: "BadLarry",
            image: "https://cdn.pixabay.com/photo/2016/07/30/14/28/yoschi-1557253_960_720.jpg",
            message: "What role do you main in Overwatch?"
        },
        {
            message: "I am a tank main, but I also like playing Ana!"
        }
    ])

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH BADLARRY ON 11/24/21</p>
            {messages.map(message => 
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                
                )}

        </div>
    )
}

export default ChatScreen
