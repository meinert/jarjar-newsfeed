import React from 'react';

interface LocalizationContextProps {
  locale: string;
  setLocale: (locale: string) => void;
  dateTimeFormatOptions: Intl.DateTimeFormatOptions;
}

export const LocalizationContext = React.createContext<LocalizationContextProps>({
  locale: 'da',
  setLocale: () => {},
  dateTimeFormatOptions: {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }
});
