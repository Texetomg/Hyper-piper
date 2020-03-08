import React from 'react'
import auth0 from 'auth0-js'
import { withRouter } from 'react-router-dom'

const {Provider, Consumer: AuthConsumer} = React.createContext({
  isAutorized: false
})

class AuthProvider extends React.Component {
  state = { isAutorized: false }

  auth0 = new auth0.WebAuth({
    domain: 'dev-8ldxy1ri.auth0.com',
    clientID: '3HTPqeNQr7VbAub3YUhvnu56zz3XbbKO',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  })

  autorize = () => {
    this.auth0.authorize();
  }

  handleAuthentication = () => {
    this.auth0.parseHash((error, authResult) => {
      if (authResult && authResult.accessToken) {
        this.setState({ isAutorized: true }, () => {
          this.props.history.push('/')
        })
      } else if (error) {
        console.log(error)
      }
    })
  }

  render() {
    const { isAutorized } = this.state

    return(
      <Provider value={{
        isAutorized,
        autorize: this.autorize,
        handleAuthentication: this.handleAuthentication
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export function withAuth(WrappedComponent) {
  return class AuthHOC extends React.Component {
    render() {
      return (
        <AuthConsumer>
          {contextProps => (
            <WrappedComponent {...contextProps} {...this.props} />
          )}
        </AuthConsumer>
      )
    }
  }
}

const AuthProviderWithRouter = withRouter(AuthProvider)

export  { AuthProviderWithRouter as AuthProvider }
