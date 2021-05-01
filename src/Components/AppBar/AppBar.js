import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PublicIcon from "@material-ui/icons/Public";
import { Link } from "react-router-dom";

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <PublicIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              <Button color="inherit">Nations Router</Button>
            </Link>
          </Typography>
          <Link
            to="/allCountries"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">All Countries</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Home;
