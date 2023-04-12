import { useState } from 'react'
import { Header } from './components/header'
import styled from 'styled-components'
import { ContainerApp } from './styles/global'
import { FirstSection } from './components/apresentation'

function App() {
  return (
    <ContainerApp>
      <Header />
      <FirstSection />
    </ContainerApp>
  )
}


export default App
