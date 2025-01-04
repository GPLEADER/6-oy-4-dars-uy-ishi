import React from 'react'
import './App.css'
import Form from './components/form/Form.jsx'
import SecondForm from './components/form2/SecondForm.jsx'
import Password from './components/password/Password.jsx'
import Color from './components/color/Color.jsx'
import PersonalForm from './components/personalForm/PersonalForm.jsx'
import CreateForm from './components/createForm/CreateForm.jsx'
import VotingForm from './components/votes/Votes.jsx'
import Calculator from './components/calculator/Calculator.jsx'
import RequestForm from './components/requestForm/RequestForm.jsx'
import UserForm from './components/userForm/UserForm.jsx'

function App() {
    return (
        <div>
            <Form />
            <SecondForm />
            <Password />
            <Color />
            <br /><br />
            <PersonalForm />
            <br />
            <CreateForm />
            <br />
            <VotingForm />
            <Calculator />
            <br />
            <RequestForm />
            <br />
            <UserForm />
        </div>
    )
}

export default App