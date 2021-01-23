import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  var state = {
    click:false
  }

  

const datas = [
  {name:'bob',age:19},
  {name:'steve', age:22}
]
function getData(toggelData){
  let string = '';
  state.click = true;
  datas.forEach((data)=>{
    if(toggelData == 'age'){
      string = string + '<br>' + data.age;
    }
    else{
      string = string + '<br>' + data.name;
    }
    
    
  })
  document.getElementById('data').innerHTML = string;
  //var 
  console.log(toggelData)
}

  return (
    <div className="App">
      <h1>Pratcice React</h1>
      <button onClick={()=>getData('name')}>Names</button>
      <button onClick={()=>getData('age')}>Ages</button>
      <div id="data"></div>
     
    </div>
  );
}

export default App;
