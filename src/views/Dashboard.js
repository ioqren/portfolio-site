import React from "react";

// MUI Styles
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// MUI Components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// Colors
import grey from "@material-ui/core/colors/grey";
// Images
import background from "../images/bg_colorful.jpg";
// Section Components
import Intro from "./Intro/Intro";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import NavBar from "./Intro/NavBar";
import Footer from "./Contact/Footer";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#2773e1" },
    secondary: { main: "#4b2fe4" }
  },
  typography: {
    h1: {
      fontFamily: "merriweather"
    },
    h2: {
      fontFamily: "merriweather",
      textDecoration: "underline",
      textUnderlinePosition: "under",
      paddingTop: "30px",
      paddingBottom: "30px"
    },
    h3: {
      fontFamily: "montserrat"
    },
    h4: {
      fontFamily: "merriweather",
      fontWeight: "bold",
      paddingTop: "12px"
    },
    button: {
      fontWeight: "bold",
      fontSize: "20px",
      
    },
    body1: {
      fontFamily: "montserrat"
    }
  },
  overrides: {
    MuiTabs: {
      indicator: {
        color: '#fff'
      }
    },
    MuiTab: {
      textColorPrimary: {
        color: '#fff'
      }
    },
    MuiButton: {
      containedSecondary: {
    
        textShadow: "1px 1px 3px #999 ",
        
      },
      outlinedPrimary: {
        marginTop: "20px",
        backgroundColor: "#fff",
        opacity: 0.7,
        "&:hover": {
          backgroundColor: "#fff",
          opacity: 0.9
        }
      }
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
  
  },
  content: {
    padding: 0,
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  pic: {
    width: theme.spacing(30),
    height: theme.spacing(30),
   
  },
  nameText: {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${background})`,
    objectFit: "cover",
    color: "#efefef",
    textShadow: "0 1px 0 #111"
  },
  bgOdd: {
    backgroundColor: grey[300],
    paddingBottom: theme.spacing(5)
  },
  bgEven: {
    backgroundColor: grey[100],
    paddingBottom: theme.spacing(5)
  },
  img: {
    objectFit: "cover",
    height: "300px",
    width: "400px"
  },
  submit: {
    marginTop: "20px",
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    "&:hover": {
      backgroundColor: theme.palette.secondary.main
    }
  },
  actionButton: {
    marginTop: "20px",
    backgroundColor: '#303030',
    color: '#fff',
    "&:hover": {
      backgroundColor: '#303030',
    }
  },
  contactForm: {
    background: "#fff",
    borderRadius: "5px"
  },
  skillsHeader: {
    position: "relative",
    top: "75px"
  },
  socialMediaIcon: {
    margin: "30px",
    "&:hover": {
      color: '#ff9800'
    }
  },
  copyrightText: {
    marginBottom: "5px"
  },
  features: {
    marginBottom: "50px"
  },
  chartStyles: {
    position: "relative",
    top: "-30px"
  },
  bio: {
    display: "block"
  },

  overlay: {
    background: 'rgba(255, 255, 255, 0.7)'
  },
  bioStyles: {
    paddingTop: '20px'
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (

    <ThemeProvider theme={theme} className={classes.root}>
      <CssBaseline />
      <NavBar appBar={classes.appBar} />
      <Container className={classes.content}>
        <Grid container justify="center">
          <Intro
            id="intro"
            actionButton={classes.actionButton}
            nameText={classes.nameText}
          />

          <About
            id="about"
            bgOdd={classes.bgOdd}
            bgEven={classes.bgEven}
            picStyles={classes.pic}
            skillsHeader={classes.skillsHeader}
            features={classes.features}
            chartStyles={classes.chartStyles}
            bioStyles={classes.bioStyles}
          />

          <Portfolio id="portfolio" overlay={classes.overlay} imgStyles={classes.img} bgEven={classes.bgEven} />

          <Contact
            id="contact"
            contactForm={classes.contactForm}
            submit={classes.submit}
            bgOdd={classes.bgOdd}
          />
        </Grid>

        <Grid container justify="center">
          <Grid item>
            <Footer
              socialMediaIcon={classes.socialMediaIcon}
              copyrightText={classes.copyrightText}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>

  );
}
