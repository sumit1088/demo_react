import React from 'react'
import Person from './Person'

function NameList() {
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
    const personList = person.map(person => <Person person={person} />)
    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameList