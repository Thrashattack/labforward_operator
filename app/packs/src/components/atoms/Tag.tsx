import React, {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
} from 'react';

const Tag = ({
  children,
  ...props
}: ComponentPropsWithoutRef<ElementType>): ReactElement => (
  <div
    style={{
      padding: 8,
      borderRadius: 16,
      height: 36,
      backgroundColor: props.color,
      color: props.textcolor,
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2)',
    }}
    {...props}
  >
    <span>{children}</span>
  </div>
);

export default Tag;
