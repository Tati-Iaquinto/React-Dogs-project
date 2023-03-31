import React from 'react'
import { UserContext } from '../../UserContext'
import { Navigate } from 'react-router-dom'
//verifica se o login foi feito e redireciona ao login ou outra pagina como children

const ProtectedRoute = ({children}) => {
  const { login } =React.useContext(UserContext)

  return login ? children : <Navigate to="/login"/>
  
}

export default ProtectedRoute