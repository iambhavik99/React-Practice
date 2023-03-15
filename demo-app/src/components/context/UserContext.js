import React from 'react';

const UserContext = React.createContext('Benjamin');

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;