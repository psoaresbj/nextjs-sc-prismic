import { Slice } from './Slice';
import PropTypes from 'prop-types';
import React from 'react';
import camelcase from 'camelcase';
import sliceComponents from '../../slices';

const pascalCase = string => camelcase(string, { pascalCase: true });

export const Slices = props => {
  const { slices } = props;

  if (!slices) {
    return null;
  }

  return slices.map((slice, index) => {
    const componentName = pascalCase(slice?.slice_type);
    const component = sliceComponents[componentName];
    const primaryProps = slice?.primary;

    if (!component) {
      return (
        <div key={index}>
          Missing component: <b>{componentName}</b>
        </div>
      );
    }

    return (
      <Slice index={index} key={index}>
        {React.createElement(component, {
          items: slice?.items,
          ...primaryProps
        })}
      </Slice>
    );
  });
};

Slices.propTypes = {
  slices: PropTypes.array
};

export default Slices;
