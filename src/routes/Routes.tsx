import React from 'react'
import { Route, Switch } from 'react-router-dom'
import paths from './path'

const Routes = () => {

    const Test=()=><div>Hello word</div>

  return (
    <Switch >
        <Route exact component={Test} path={paths.home}/>
        
    </Switch>
  )
}

export default Routes