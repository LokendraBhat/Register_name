import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Add_new(props){
  const [ person, setPerson ] = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    if(person !== '') {
      props.handleSubmit(person);
      setPerson('');
  }
    e.preventDefault();
  }

  return (<form onSubmit={handleSubmit}>
    <h2>New Person</h2>
    <input type="text" placeholder='Name of person' onChange={handleChange} value={person}/><br />
    <button type="submit">ADD</button>
  </form>);
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return (<ul>
    <h2>Existing Persons</h2>
    {listItems}
    </ul>);
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <Add_new handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}

const el = <ContactManager data = {['Hello']} />;
ReactDOM.render(
  el,
  document.getElementById('root')
);


