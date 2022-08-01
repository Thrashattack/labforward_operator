import React, {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
} from 'react';

const Button = ({
  children,
  ...props
}: ComponentPropsWithoutRef<ElementType>): ReactElement => (
  <button
    style={{
      borderRadius: 8,
      width: 128,
      height: 64,
    }}
    {...props}
  >
    {children}
  </button>
);

export default Button;
