import React, { useState } from 'react'

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: "BadLarry",
            image: "https://cdn.pixabay.com/photo/2016/07/30/14/28/yoschi-1557253_960_720.jpg",
            message: "Want to group up?"
        },
        {
            name: "Dolphin",
            image: "https://cdn.pixabay.com/photo/2016/07/30/21/37/mario-1558062_960_720.jpg",
            message: "What role do you main in Overwatch?"
        }
    ])

    return (
        <div className="chatScreen">
            <p>YOU MATCHED WITH BADLARRY ON 11/24/21</p>
        </div>
    )
}

export default ChatScreen
