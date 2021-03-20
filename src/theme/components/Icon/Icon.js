import { generateProps } from 'styled-gen';
import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ui from './ui';

const iconsCollections = {
  ui: { ...ui }
};

const iconFamilies = Object.keys(iconsCollections);

const renderPaths = icon =>
  icon.paths.map((path, index) => <path {...path} fill="currentColor" key={`path-${index}`} />);

const IconSvg = ({ className, family, icon }) => {
  const selectedFamily = family && iconsCollections[family] ? family : iconFamilies[0];
  const selectedIcon = iconsCollections[selectedFamily][icon];

  if (!selectedIcon) {
    /* eslint-disable-next-line no-console */
    console.log(`There is no icon ${icon} in the ${selectedFamily}`);

    return (
      <>
        No icon: &#34;<b>{icon}</b>&#34;
      </>
    );
  }

  if (!selectedIcon.viewbox) {
    /* eslint-disable-next-line no-console */
    return console.log(`Icon ${icon} must have viewbox`);
  }

  return (
    <svg className={className} role="img" viewBox={selectedIcon.viewbox}>
      {renderPaths(selectedIcon)}
    </svg>
  );
};

IconSvg.propTypes = {
  className: PropType.string,
  family: PropType.string,
  icon: PropType.string
};

export const Icon = styled(IconSvg)`
  fill: currentColor;
  height: ${({ sHeight }) => (typeof sHeight === 'number' ? `${sHeight}rem` : sHeight || 'auto')};
  vertical-align: middle;
  width: ${({ sWidth }) => (typeof sWidth === 'number' ? `${sWidth}rem` : sWidth || 'auto')};

  ${generateProps}
`;
