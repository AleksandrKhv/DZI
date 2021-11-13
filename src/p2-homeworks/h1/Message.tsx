import React from 'react'
import st from './Message.module.css'

type tpMess = {
    avatar: string
    name: string
    message: string
    time: string | number
}

function Message(props: tpMess) {
    return (
        <div className={st.wrapper}>
            <img src={props.avatar} alt=""/>
            <div className={st.message}>
                <div className={st.name}>
                    {props.name}
                </div>
                <div className={st.messages}>
                    {props.message}
                </div>
                <div className={st.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}


export default Message
