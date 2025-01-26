import { TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

interface FormInputProps {
  onChange: (value: string) => void;
  id: string;
  title: string;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  error?: string;
  focus?: boolean;
}

/**
 * FormInput is a React functional component that renders a text field with validation.
 *
 * @param {FormInputProps} props - The properties passed to the component.
 * @param {string} props.id - The unique identifier for the input field.
 * @param {string} props.title - The label for the input field.
 * @param {boolean} [props.multiline] - If true, the input field will be a multiline text area.
 * @param {number} [props.rows] - The number of rows for the multiline text area.
 * @param {boolean} [props.required] - If true, the input field will be marked as required.
 * @param {string} [props.error] - The error message to display when the input is invalid.
 * @param {boolean} [props.focus] - If true, the input field will be focused on mount. If used on multiple fields, only the last one will be focused and the others touched.
 * @param {(value: string) => void} props.onChange - The callback function to handle input changes.
 *
 * @returns {JSX.Element} The rendered text field component.
 */
const FormInput: React.FC<FormInputProps> = ({
  id,
  title,
  multiline = false,
  rows = 4,
  required = false,
  error = 'This field is required',
  focus = false,
  onChange
}) => {
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [touched, setTouched] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    onChange(e.target.value);
  };

  // Update the error message when the content changes and the length of the content is 0
  useEffect(() => {
    if (required && touched && content.length === 0) {
      setErrorMessage(error!);
    } else {
      setErrorMessage('');
    }
  }, [touched, content, error, required]);

  useEffect(() => {
    // Focus the heading input field after a short delay
    setTimeout(() => {
      if (focus && inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  }, [focus]);

  return (
    <TextField
      inputRef={inputRef}
      id={id}
      label={title}
      type="text"
      fullWidth
      variant="outlined"
      multiline={multiline}
      rows={rows}
      value={content}
      onChange={handleChange}
      onBlur={() => setTouched(true)}
      error={!!errorMessage}
      helperText={errorMessage}
      sx={{ mb: 2 }}
    />
  );
};

export default FormInput;
