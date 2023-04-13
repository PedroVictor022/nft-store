import { useState } from 'react'
import { Header } from './components/header'
import styled from 'styled-components'
import { ContainerApp } from './styles/global'
import { FirstSection } from './components/apresentation'
import Stats from './components/stats'

function App() {
  return (
    <ContainerApp>
      <Header />
      <FirstSection />
      <Stats />
    </ContainerApp>
  )
}


export default App
