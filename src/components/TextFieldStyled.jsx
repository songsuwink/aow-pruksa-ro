import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const StyleTextField = styled(TextField)(({ variant, theme }) => ({
  width: '100%',
  marginTop: '8px',
  marginBottom: '8px',
  '& .MuiInputLabel-root:not(.MuiInputLabel-shrink)': {
    transform: 'translate(14px, 14px) scale(1)',
  },
  '& .MuiInputBase-input': {
    padding: 8,
  },
  '& label.Mui-focused': {
    color: 'grey',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#fff',
    borderRadius: 12,
    '&:hover fieldset': {
      borderColor: '#E5E7EB',
    },
    '&.Mui-focused fieldset': {
      border: '1px solid #E5E7EB',
    },
    '& .MuiOutlinedInput-input': {
      padding: '13.5px 14px',
    },
    '& .MuiInputBase-inputMultiline': {
      padding: 0,
    },
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: '#E5E7EB',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const TextFieldStyled = forwardRef((props, ref) => {
  return <StyleTextField ref={ref} {...props} />;
});

export default TextFieldStyled;
