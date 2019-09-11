import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';
import toggleItem from '../actions';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.Store.length ? (
        <ol type="1">
          {props.Store.map(item => (
            <AdditionalFeature key={item.id} feature={item}
            toggleItem={props.toggleItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(null, {toggleItem})(AdditionalFeatures);
