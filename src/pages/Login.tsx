import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 3,
        }}
      >
        <Typography variant="h3">Palasio</Typography>
        <Typography variant="h6">
          First of all, enter your email address
        </Typography>
        <Typography variant="body1">
          We suggest using the email address that you yse at work
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            width: '100%',
            maxWidth: 450,
            mt: 5,
            // border: '1px solid red',
          }}
        >
          <TextField size="small" placeholder="name@work-email.com" />
          <TextField size="small" placeholder="Password" />
          <Button
            disableElevation
            variant="contained"
            sx={{
              textTransform: 'initial',
              mt: 2,
            }}
            onClick={() => {
              navigate('/');
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </>
  );
};
