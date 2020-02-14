import React from 'react';
import './App.css';
import {ExtendedButton, ButtonTypes} from './ExtendedButton'
import {ExtendedSelectableButton, SelectableButtonTypes} from './ExtendedSelectableButton'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ExtendedButton type={ButtonTypes.Important} text="Hit me!" action={ () => {
          alert("Important")
        }} />
        
        <ExtendedButton type={ButtonTypes.Irrelevant} text="If you want..." action={ () => {
          alert("Whatever...")
        }} />
        
        <ExtendedButton type={ButtonTypes.Optional} text="Not required" action={ () => {
          alert("...if you insist")
        }} />
        
        <ExtendedSelectableButton type={SelectableButtonTypes.Important} text="Select me!!" action={ (selected) => {
          console.log(selected) 
        }} />       
        
      </header>
    </div>
  );
}

export default App;
