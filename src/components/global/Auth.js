import React from 'react'

const {Provider, Consumer: AuthConsumer} = React.createContext({
  isAutorized: false
})

class AuthProvider extends React.Component {
  state = { isAutorized: false }

  autorize = () => {
    this.setState({isAutorized: true})
  }

  render() {
    const { isAutorized } = this.state

    return(
      <Provider value={{isAutorized, autorize: this.autorize}}>
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

export default AuthProvider
