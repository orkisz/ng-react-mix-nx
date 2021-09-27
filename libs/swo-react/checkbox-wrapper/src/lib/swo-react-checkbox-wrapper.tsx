import './swo-react-checkbox-wrapper.module.scss';
import React from 'react';

/* eslint-disable-next-line */
export interface SwoReactCheckboxWrapperProps {
  radio?: boolean;
  indeterminate?: boolean;
  children: React.ReactNode;
}

export function SwoReactCheckboxWrapper(props: SwoReactCheckboxWrapperProps) {
  const childrenArray = React.Children.toArray(props.children);
  let input;
  if (props.radio) {
    input = childrenArray.find(n => n)
  }
  return (
    <label>

    </label>
  );
}

export default SwoReactCheckboxWrapper;
