import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

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
    const inputClass = error ? s.errorDanger : s.input

    const userElement = users.map(u => <li key={u._id}>{u.name}</li>)


    return (
        <div className={s.wrapper}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyPress={pressingTheEnter}
                       onBlur={setNameCallback}/>

                <div className={s.error}>{error}</div>
                <div className={s.list}>
                    <ul>
                        {userElement}
                    </ul>
                </div>
            </div>
            <button onClick={addUser} className={s.btn}>add</button>
            <div className={s.count}>{totalUsers}</div>

        </div>

    )
}

export default Greeting
