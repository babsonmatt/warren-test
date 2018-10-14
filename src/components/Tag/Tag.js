import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const Tag = props => (
  <Label
    size="small"
    style={{
      fontWeight: 'bold',
      borderRadius: 15,
      ...props.style,
    }}
  >
    {props.children}
  </Label>
);

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tag;
