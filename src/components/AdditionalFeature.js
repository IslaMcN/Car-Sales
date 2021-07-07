import React from 'react';
import toggleItem from '../actions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.toggleItem(props.Store)}
      className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {toggleItem})(AdditionalFeature)


