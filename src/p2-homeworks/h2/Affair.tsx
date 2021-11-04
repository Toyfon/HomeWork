import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import st from './../h4/common/c2-SuperButton/SuperButton.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.container}>
            <span>{props.affair.name} </span>
            <span> {props.affair.priority} </span>

            <SuperButton className={st.red} onClick={deleteCallback}>X</SuperButton>

        </div>
    )
}

export default Affair
