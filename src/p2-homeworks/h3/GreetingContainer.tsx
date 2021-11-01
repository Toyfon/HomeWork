import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let trimName = e.currentTarget.value.trim()

        if (trimName) {
            setName(trimName)
            error && setError('')
        } else {
            name && setName('')
            setError('name is required')
        }
    }


    const addUser = () => {
        addUserCallback(name)
        if (name) {
            alert(`Hello ${name} !`)
            setName('')
        }
    }


    const pressingTheEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
        }
    }



    const totalUsers = users.length

    return (
        <Greeting
            users={users}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            pressingTheEnter={pressingTheEnter}
        />
    )
}

export default GreetingContainer
