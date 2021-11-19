import React from 'react'
import st from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: {
        _id: number,
        name: string,
        priority: string
    } // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={st.wrapper}>
            <div>{props.affair.name}</div>
            <div>{props.affair.priority}</div>
            <button onClick={deleteCallback}>clear</button>
        </div>
    )
}

export default Affair
