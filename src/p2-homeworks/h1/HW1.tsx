import React from 'react'
import Message from "./Message";


const messageData = {
    avatar: 'https://tn.fishki.net/26/upload/post/201408/07/1291577/c4f055e9b8d6c200852a3fe3e06b8844.jpg',
    name: 'Bender',
    message: 'Hello, coffin fillings!',
    time: '22:00',
}


function HW1() {

    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
