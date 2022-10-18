import React from 'react'
import './css/App.css'
import { Helmet } from 'react-helmet'
import Form from './componentes/Form'
const App = () => {
  return (
    <div>
 <Helmet>
      <link rel="icon" href={require('./img/heart.jpg')} />
<title>Formulario</title>
  </Helmet>
      <Form/>

    </div>
  )
}

export default App