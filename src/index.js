import React from 'react';
import { render } from 'react-dom';
import List from './List';
import Form from './Form/Form';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Root = () => (
  <div style={styles}>
    <div className="topHead"><h2>Logo </h2></div>
    <div className="headerCard">Morbi suscipit massa id vestibulum egestas. Aliquam vestibulum erat et diam commodo, eu condimentum nulla dictum. Cras nibh eros, consectetur vitae semper at, imperdiet non velit.</div>
    <p className="buffer">Your Reading List</p>
    <List
      title="Title der Liste" // Überschrift
      items={[{ _id: 1, name: 'julian' }, { _id: 2, name: 'Moritz' }]} // Liste der jeweiligen IDs
      itemTitle="name" // attribut - Wert für die Überschrift
      itemText="name" // attribut - wert für die TextZeile
      hint="Hinweis zur Liste" // Text im Footer
      modalContent={{}}
      callback={item => console.log(item)} // function die field updated, gibt id zurück
      modal // zeigt an, dass es sich um eine Suche fürs hinzufügen handelt
    >
      <Form
        submitText="Hinzufügen" // öffnen oder
        closeText="Abbrechen"
      />
    </List>
  </div>
);

render(<Root />, document.getElementById('root'));
