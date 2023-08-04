import React from 'react';

export const ListTableHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={'hidden tablet:flex'}>{children}</div>;
};
