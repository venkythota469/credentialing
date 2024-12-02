

import { Helmet } from 'react-helmet';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Button, Fade } from '@mui/material';
import { VerifiedUser, Security, Speed, EmojiEvents } from '@mui/icons-material';
import  './staticpage.css'
import { useNavigate } from 'react-router-dom';
const theme = createTheme({
  palette: {
    primary: {
      main: '#007',
    },
    secondary: {
      main: '#00B4D8',
    },
  },
});



const features = [
  { title: 'Secure Verification', icon: <VerifiedUser />, description: 'Ensure the highest standards of credential verification for healthcare professionals.' },
  { title: 'Compliance Assurance', icon: <Security />, description: 'Stay up-to-date with regulatory requirements and industry standards.' },
  { title: 'Streamlined Process', icon: <Speed />, description: 'Expedite credentialing with our efficient and user-friendly platform.' },
  { title: 'Quality Assurance', icon: <EmojiEvents />, description: 'Maintain excellence in healthcare delivery through rigorous credentialing.' },
];

export default function HealthcareCredentialing() {

    const navigate = useNavigate();



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <title>Healthcare Credentialing Solutions</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <div className="min-vh-100 d-flex flex-column">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6">Genamplify Solutions</Typography>
          </Toolbar>
        </AppBar>
        <main className="flex-grow-1">
        <section className="py-5 text-center container">
  <div className="row py-lg-5"   style={{
    backgroundImage: `url('https://www.pyramidsglobal.com/wp-content/uploads/2024/05/Medical-Credentialing-A-Step-by-Step-Guide-for-Providers.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional overlay effect
    color: 'black', // Text color for contrast
  }}>
    <div className="col-lg-6 col-md-8 mx-auto">
      <h1 className="fw-light" style={{fontWeight: 'bold'}}>Healthcare Credentialing</h1>
      <p className="lead text-muted" style={{color:'red' ,fontSize:'30px', }}>
      <strong>Streamline your healthcare credentialing process with our cutting-edge solutions.</strong>
      </p>
      <Button variant="contained" color="secondary" size="large" className="mt-3" onClick={() => navigate('/register')}>
        Get Started
      </Button>
    </div>
  </div>

  {/* Flash Screen Image Section */}
  <div className="flash-screen">
    <div className="flash-images">
       {/* <img src="do.png" alt="Flash 1" /> */}
      {/* <img src="dow.jpg" alt="Flash 2" /> */}
      {/* <img src="Medical.jpg" alt="Flash 3" /> */}
      {/* <img src="Health.png" alt="Flash 4" />  */}
      {/* <img src="im.jpg" alt="Flash 5" /> */}
    </div>
  </div>
</section>

          <Container className="py-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Fade in={true} style={{ transitionDelay: `${index * 200}ms` }} key={index}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Card className="h-100 shadow-sm">
                      <CardContent className="text-center">
                        {feature.icon}
                        <Typography variant="h5" component="h2" className="mt-3">
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="mt-2">
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Fade>
              ))}
            </Grid>
          </Container>
          <section className="bg-light py-5">
            <Container>
              <h2 className="text-center mb-5">Our Credentialing Process</h2>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title">1. Application Submission</h5>
                      <p className="card-text">Submit your credentials through our secure online portal.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title">2. Verification</h5>
                      <p className="card-text">Our team verifies your credentials with primary sources.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title">3. Approval</h5>
                      <p className="card-text">Receive your credentialing approval and start practicing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </main>
        <footer className="bg-dark text-light py-4">
          <Container>
            <Typography variant="body2" align="center">
              © 2024 Genamplify  Solutions. All rights reserved.
            </Typography>
          </Container>
        </footer>
      </div>
    </ThemeProvider>
  );
}

