import React, {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
} from 'react';

const Container = ({
  children,
  ...props
}: ComponentPropsWithoutRef<ElementType>): ReactElement => (
  <div
    style={{
      fontFamily: 'sans-serif',
      backgroundColor: '#fffffa',
      width: '1fr',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: 16,
      padding: 36,
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    }}
    {...props}
  >
    {children}
  </div>
);

export default Container;
