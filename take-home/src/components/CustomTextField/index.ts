import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const CustomTextField = styled(TextField)({
  backgroundColor: 'white',
  borderRadius: '5px 0px 0px 5px',
  width: '100%',
  maxWidth: '600px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '5px 0px 0px 5px',
      borderColor: '#0dc06f',
    },
    '&:hover fieldset': {
      borderRadius: '5px 0px 0px 5px',
      border: '#0dc06f 2px solid',
    },
    '&.Mui-focused fieldset': {
      borderRadius: '5px 0px 0px 5px',
      borderColor: '#0dc06f',
    },
  },
});
