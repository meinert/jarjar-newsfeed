import React, { useContext } from 'react';
import { LocalizationContext } from '../context/LocalizationContext';

interface DateTimeFormatterProps {
    date: Date;
    showSeconds?: boolean;
}

const DateTimeFormatter: React.FC<DateTimeFormatterProps> = ({ date, showSeconds }) => {
    const { locale, dateTimeFormatOptions } = useContext(LocalizationContext);

    if (showSeconds !== undefined) {
        dateTimeFormatOptions.second = showSeconds ? '2-digit' : undefined;
    }

    return (
        <span>
            {new Intl.DateTimeFormat(locale, dateTimeFormatOptions).format(date)}
        </span>
    );
};

export default DateTimeFormatter;