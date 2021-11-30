import React from 'react'
import "./Chats.css";
import Chat from "./Chat.js";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="BadLarry"
                message="Want to group up?"
                timestamp="17 minutes ago"
                profilePic="https://cdn.pixabay.com/photo/2016/07/30/14/28/yoschi-1557253_960_720.jpg"
            />
             <Chat
                name="Dolphin"
                message="What role do you main in Overwatch?"
                timestamp="32 minutes ago"
                profilePic="https://cdn.pixabay.com/photo/2016/07/30/21/37/mario-1558062_960_720.jpg"
            />

            
        </div>
    )
}

export default Chats
