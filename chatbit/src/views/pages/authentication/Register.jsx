import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project imports
import AuthWrapper1 from './AuthWrapper1';
import AuthCardWrapper from './AuthCardWrapper';
import AuthRegister from '../auth-forms/AuthRegister';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';

export default function Register() {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <AuthWrapper1>
      <Grid container direction="column" sx={{ justifyContent: 'flex-end', minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: 'calc(100vh - 68px)' }}
          >
            <Grid
              sx={{
                m: { xs: 1, sm: 3 },
                mb: 0,
                width: { xs: '90%', sm: '500px', md: '600px' }
              }}
            >
              <AuthCardWrapper sx={{ width: '100%' }}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  direction={downMD ? 'column' : 'row'} // stack vertically on mobile
                >
                  {/* Logo and Sign up */}
                  <Grid
                    container
                    item
                    xs={12}
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    sx={{
                      mb: 2,
                      flexDirection: downMD ? 'column' : 'row' // logo and text stack on mobile
                    }}
                  >
                    <Grid item>
                      <Link to="#" aria-label="theme logo">
                        <Logo />
                      </Link>
                    </Grid>
                    <Grid item>
                      <Typography
                        gutterBottom
                        variant={downMD ? 'h4' : 'h3'}
                        sx={{ color: 'secondary.main', ml: downMD ? 0 : 1, mt: downMD ? 1 : 0 }}
                      >
                        Sign up
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* Subtitle */}
                  <Grid item xs={12}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: '16px',
                        textAlign: 'center',
                        mx: downMD ? 2 : '80px' // horizontal margin smaller on mobile
                      }}
                    >
                      Enter your details to continue
                    </Typography>
                  </Grid>

                  {/* AuthRegister form */}
                  <Grid item xs={12}>
                    <AuthRegister />
                  </Grid>

                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  {/* Already have account */}
                  <Grid item xs={12}>
                    <Grid container justifyContent="center">
                      <Typography
                        component={Link}
                        to="/login"
                        variant="subtitle1"
                        sx={{ textDecoration: 'none', marginLeft:'auto', marginRight:'20px' }}
                      >
                        Already have an account?
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper> 
            </Grid>
          </Grid>
        </Grid>

        {/* Footer */}
        <Grid sx={{ px: 3, mb: 3, mt: 1 }} item xs={12}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
}
