import React from 'react';
import {TOGGLE_ITEM, toggleItem, removeItem} from './actions';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  

  const removeFeature = item => {
    // dispatch an action here to remove an item
    removeItem(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    toggleItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header  />
        <AddedFeatures  />
        <button onClick={removeFeature}>Remove</button>
        <button onClick={buyItem}>Buy</button>
      </div> 
      <div className="box">
        <AdditionalFeatures  />
        <Total  />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(
  mapStateToProps, {})(App);
