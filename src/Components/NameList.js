import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce','Clark','Diana','Bruce']
    const person = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
         }, 
         {
            id:2,
            name:'Clark',
            age:32,
            skill:'Dot net'
         },
         {
            id:3,
            name:'Diana',
            age:34,
            skill:'SQL'
         },
         {
            id:4,
            name:'Mark',
            age:31,
            skill:'React,DOTNET'
         },  
        ]
    const personList = person.map(person => <Person key = {person.name} person={person} />)
    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)
    return (
        <div>
            {
                nameList
            }
        </div>
    )
}

export default NameList