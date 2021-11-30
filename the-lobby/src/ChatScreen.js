import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import "./ChatScreen.css"

function ChatScreen() {
    const [input, setInput] = useState('');
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
    ]);

    const handleSubmit = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    }

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
            
                <form className="chatScreen__input">
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="chatScreen__inputField"
                        placeholder="Type a message..."
                        type="text"
                     />
                    
                    <button onClick={handleSubmit} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            

        </div>
    )
}

export default ChatScreen
