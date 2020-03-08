import React, { useEffect } from 'react'
import Preloader from '../../global/Preloader'
import { withAuth } from '../../global/Auth'

// пока не удаляю на случай, если хуки неправильно работают 

// class CallbackPage extends React.Component {
//     componentDidMount() {
//         const { handleAuthentication } = this.props

//         if (handleAuthentication) {
//             handleAuthentication()
//         }
//     }

//     render() {
//         return (
//             <Preloader active />
//         )
//     }
// }

const CallbackPage = ({ handleAuthentication }) => {
    useEffect(() => {
        if (handleAuthentication) {
            handleAuthentication()
        }
    }, [handleAuthentication])
    return (
        <Preloader active />
    )
}
  
export default withAuth(CallbackPage)
