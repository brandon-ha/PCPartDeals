import React from 'react';
import snoowrap from 'snoowrap';
import SelectorButton from './SelectorButton';

const Selector = () => (
  <div className="selector">
    <div className="container selector__content">
      <SelectorButton keyword="CPU" />
      <SelectorButton keyword="Video Card" />
      <SelectorButton keyword="Memory" />
      <SelectorButton keyword="Motherboard" />
      <SelectorButton keyword="Power Supply" />
      <SelectorButton keyword="Hard Drive" />
      <SelectorButton keyword="SSD" />
      <SelectorButton keyword="Case" />
      <SelectorButton keyword="Cooler" />
      <SelectorButton keyword="Fan" />
      <SelectorButton keyword="All" />
    </div>
  </div>
);

export default Selector;