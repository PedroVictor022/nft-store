import { useState } from 'react'
import { Header } from './components/header'
import styled from 'styled-components'
import { ContainerApp } from './styles/global'
import { FirstSection } from './components/apresentation'
import Stats from './components/stats'
import TopsNFT from './components/tops'
import Colections from './components/colections'

function App() {
  return (
    <ContainerApp>
      <Header />
      <FirstSection />
      <Stats />
      <TopsNFT />
      <Colections />
    </ContainerApp>
  )
}


export default App
