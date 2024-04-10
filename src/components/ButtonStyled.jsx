import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyleButtonBlue = styled(Button)(({ variant, color, theme }) => ({
  fontSize: '0.875rem',
  ...(variant === 'default' && {
    minWidth: '100px',
    backgroundColor: '#fff',
    color: 'grey',
    borderRadius: 12,
    paddingLeft: 24,
    paddingRight: 24,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }),
  ...(variant === 'contained' && {
    minWidth: '100px',
    borderColor: '#43a047',
    color: '#fff',
    backgroundColor: '#43a047',
    borderRadius: 12,
    paddingLeft: 24,
    paddingRight: 24,
    textTransform: 'none',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    '&:hover': {
      borderColor: '#388e3c',
      backgroundColor: '#388e3c',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
  }),
  ...(variant === 'outlined' && {
    minWidth: '100px',
    borderColor: '#43a047',
    backgroundColor: 'transparent',
    color: '#43a047',
    borderRadius: 12,
    paddingLeft: 24,
    paddingRight: 24,
    textTransform: 'none',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    '&:hover': {
      color: '#388e3c',
      borderColor: '#388e3c',
      backgroundColor: '#ffebee',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
  }),
}));

const ButtonStyled = (props) => {
  return (
    <StyleButtonBlue
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      variant={props.variant}
      disabled={props.disabled}
      size='large'
      {...props}
    >
      {props.children}
    </StyleButtonBlue>
  );
};

export default ButtonStyled;
