import { useState, useEffect } from 'react';

export default function useLocalState( key, val = '' ) {
  const [value, setValue] = useState(localStorage.getItem(key) || val);
  useEffect(() => {localStorage.setItem(key, value)}, [key, value]);
  return [value, setValue];
}