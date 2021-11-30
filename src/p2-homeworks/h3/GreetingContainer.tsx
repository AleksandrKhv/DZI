import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// уровень локальной логики
const GreetingContainer = ({users, addUserCallback, ...props}: GreetingContainerPropsType) => {
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
        setError('')
        if (e.currentTarget.value) {
            setError('')
        } else {
            setError('Error')
        }
    }

    const addUser = () => {
        if (name.trim()) {
            addUserCallback(name.trim())
            alert(`Hello ${name.trim()} !`)
            setName('')
        } else {
            setError('Error')
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
