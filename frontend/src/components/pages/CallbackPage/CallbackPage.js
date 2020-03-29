import React, { useEffect } from 'react'
import Preloader from '../../global/Preloader'
import { withAuth } from '../../helpers/Auth'

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
