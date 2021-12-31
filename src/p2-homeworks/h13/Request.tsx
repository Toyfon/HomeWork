import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import s from './HW13.module.css'
import {FC} from "react";


type RequestType = {
    info: string
    error: string
}

export const Request: FC<RequestType> = ({info,error}) => {


    return <div>

        <div>{info}</div>

        <div>{error}</div>


    </div>
}