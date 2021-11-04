import React, {ChangeEvent, KeyboardEvent} from 'react'
import {UserType} from "./HW3";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import s from './../h4/common/c1-SuperInputText/SuperInputText.module.css'
import st from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    users: Array<UserType>
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    pressingTheEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, pressingTheEnter, error, totalUsers, users} // деструктуризация пропсов
) => {

    const finalInputClassName = `${error? s.errorInput: s.superInput} `
    const userElement = users.map(u => <li key={u._id}>{u.name}</li>)


    return (
        <div className={st.wrapper}>
            <div>
                <SuperInputText className={finalInputClassName}
                                value={name}
                                onChange={setNameCallback}
                                onKeyPress={pressingTheEnter}
                                onBlur={setNameCallback}/>

                <div className={s.error}>{error}</div>
                <div className={st.list}>
                    <ul>
                        {userElement}
                    </ul>
                </div>
            </div>
            <SuperButton className={s.btn}
                         disabled={!name}
                         onClick={addUser}>add</SuperButton>
            <div className={st.count}>{totalUsers}</div>

        </div>

    )
}

export default Greeting
