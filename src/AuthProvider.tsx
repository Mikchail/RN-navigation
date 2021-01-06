import React,{Component} from 'react'
import { AsyncStorage } from 'react-native';

interface UserContext {
  user: string | null,
  login: () => void,
  logout: () => void
}
export const AuthContext = React.createContext<UserContext>({
  user: null,
  login: () => {},
  logout: () => {}
})

interface AuthProviderProps {}
interface AuthProviderState {
  user: string | null
}

export class AuthProvider extends Component<AuthProviderProps,AuthProviderState,{}> {
  public state: AuthProviderState

  constructor(props: AuthProviderProps){
    super(props);
    this.state={
      user: null
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  /**
   * setUser
   */
  protected login() {
    this.setState({user: 'Mikchail'})
    AsyncStorage.setItem('user','Mikchail')
  }
  protected logout() {
    this.setState({user: ''})
    AsyncStorage.removeItem('user')
  }
  render(){
    return(
      <AuthContext.Provider value={{
        user: this.state.user,
        login: this.login,
        logout: this.logout,
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}