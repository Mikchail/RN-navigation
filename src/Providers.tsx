import React,{Component} from 'react';
import { AuthProvider } from './AuthProvider';
import { Router } from './routes';

interface ProvidersProps {

}

export class Providers extends Component<ProvidersProps,{},{}>{
  render(){
    return (
      <AuthProvider>
          <Router/>
      </AuthProvider>
    )
  }
}
