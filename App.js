import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Split from './composition/Split';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notes from './composition/notes';

const list = [

   {
     title: 'Note1',
     objectID: 0
   },
   {
     title: 'Note2',
     objectID: 1,
   },
 ];


class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          list,
          searchTerm: '',
      };
  }

 render () {

return (
   <main className='App'>


   <Split className='left' >

     <nav class="navbar navbar-light bg-light">
<div class="container-fluid">
<a class="navbar-brand">My Notes</a>
 <form class="d-flex">
   <input id="search" class="form-control me-2" type="search" placeholder="Search"></input>
 </form>
</div>

</nav>
     </Split>

   <Split className='right' flexBasis={4}>
   <div className = "hor">
<Split className='left' >
     <ul>
 <li><a class="active" href="#notes">Notes</a></li>
 <li><a href="#reminders">Reminders</a></li>
 <li><a href="#trash">Trash</a></li>
</ul>
</Split>
<Split className='right' flexBasis={4}>
<div class="container my-3" id="container">
  <div class="form-group">
	<textarea id="addNote" class="form-control"></textarea>
<button id="noteInput">Add Note</button>
</div></div>
   {
    this.state.list.map(item =>
<div class="noteClass">
         <a href={item.url}>{item.title}</a>
</div>
  )}



</Split></div>
     </Split>

   </main>
   )
}

}


export default App;
