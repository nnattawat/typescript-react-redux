import React from 'react';

interface AppProps {
  color?: string
};

export default function App({ color }: AppProps): JSX.Element {
  return (
    <div>
      {color}
    </div>
  );
}