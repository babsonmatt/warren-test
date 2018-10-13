import React from 'react';
import { Label } from 'semantic-ui-react';

export default props => (
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
