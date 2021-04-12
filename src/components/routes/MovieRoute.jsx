import React from 'react'
import { Route } from 'react-router'
import { AddMovie } from '../pages/AddMovie'
import { EditMovie } from '../pages/EditPage'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { MoviePage } from '../pages/MoviePage'
import { Register } from '../pages/Register'

export const MovieRoute = ()=>{
    return(
        <div>
            <Route path= "/" exact render = {()=><Register/>}/>
            <Route path = "/login" exact render = {()=><Login/>}/>
            <Route path = "/dashboard" exact render= {()=><Home/>}/>
            <Route path = "/addMovie" exact render = {()=><AddMovie/>}/>
            <Route path = "/editMovie/:id" exact render ={(props)=><EditMovie {...props}/>}/>
            <Route path = "/movie/:id" exact render ={(props)=><MoviePage {...props}/>}/>
        </div>
    )
}