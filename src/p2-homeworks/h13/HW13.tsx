import React, {ChangeEvent, useState} from "react";
import {Request} from "./Request";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import { requestsAPI} from "./api";



export const HW13 = () => {
    const [checked, setChecked] = useState(true)
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const onChangeRequest = (e: ChangeEvent<HTMLInputElement>) => {
        let check = e.currentTarget.checked
        setChecked(check)
        requestsAPI.getPost(check)
            .then(res => setText(res.data.info))
            .catch(error => {
                setError(error.response ? error.response.data.errorText : error.message);
            })
    }
    return (
        <div>

            homeworks 13
            <hr/>

            <SuperCheckbox checked={checked} onChange={onChangeRequest}>
                hi
            </SuperCheckbox>

            <hr/>
            <Request error={error} info={text}/>
        </div>
    )
}
