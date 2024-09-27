import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        //Shot circuit operator
        //return this.state.isLoggedIn && <div>Welcome Sumit</div> 

        //Turnary operator
        return (
            this.state.isLoggedIn ?
                <div>Welcome Sumit</div> :
                <div>Welcome Guest</div>
        )

        //if-else variable operator
        // let message
        // if (this.state.isLoggedIn) {
        //     <div>
        //         Welcome Sumit
        //     </div>
        // }
        // else {
        //     <div>
        //         Welcome Guest
        //     </div>
        // }

        // return <div>{message}</div>

        //if-else conditional operator
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Sumit
        //         </div>
        //     )
        // }
        // else
        // {
        //   return(
        //     <div>
        //         Welcome Guest
        //     </div>
        //   )
        // }

        // return (
        //     <div>
        //          <div>Welcome Sumit</div>
        //          <div>Welcome Guest</div>
        //     </div>

        // )
    }
}

export default UserGreeting