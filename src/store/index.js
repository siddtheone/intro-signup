import React from 'react';

const globalStateContext = React.createContext({});

export const Provider = globalStateContext.Provider;
export const Consumer = globalStateContext.Consumer;
export default globalStateContext;