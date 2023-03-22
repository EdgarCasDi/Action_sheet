import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Root } from './src/components/RootComponent';

const App = () => {
  return (
    <NativeBaseProvider>
      <Root />
    </NativeBaseProvider>
  );
}

export default App;
