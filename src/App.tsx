import { useState } from 'react'
import './App.css'

function App() {
  const [state,setState] = useState("Ki");
  return (
    <>
      <Fejlec/>
      <ReactKapcsolo state={state} setState={setState}/><br/>
      <KepBetolto url={state == "Ki"?"https://www.w3schools.com/js/pic_bulboff.gif":"https://www.w3schools.com/js/pic_bulbon.gif"}/>
      <Lablec/>
    </>
  )
}

export default App

function Fejlec(){
  return <>
   <h1>Kapcsoló - Állapotkezelés a Reactben</h1>
  </>
}

type KapcsoloProps = {
  state: string;
  setState: (value:string) => void;
}

function ReactKapcsolo({state,setState}:KapcsoloProps){
  return <>
    <button onClick={()=>{state==="Ki"?setState("Be"):setState("Ki")}}>{state}</button>
  </>
}

type KepProps = {
  url:string;
}

function KepBetolto(props:KepProps){
  return <>
    <img src={props.url} alt="" />
  </>

}

function Lablec(){
  return<>
    <p>Készítette: Egres Marcell</p>
  </>
}