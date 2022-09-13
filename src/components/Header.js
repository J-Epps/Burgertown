import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Breadcrumbs,
  Button,
  Badge
} from "@material-ui/core/";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import PropTypes from "prop-types";

const styles = (theme) => ({
  root: {},
  flex: {
    flex: 1
  },
  title: {
    flex: 1,
    flexGrow: 1
  },
  link: {
    display: "flex",
    position: "relative",
    float: "center",
    justifyContent: "space-between"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  }
});

function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cartQty, setCartQty] = useState(0);
  const { classes } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const cartItems = (cart) => {
      let qty = 0;
      for (let i = 0; i < cart.length; i++) {
        qty += cart[i].qty;
      }
      setCartQty(qty);
    };
    cartItems(props.cart);
  });

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#20a546", color: "black" }}
      >
        <Toolbar>
          <h2 className={classes.title}>Burgertown</h2>
          <Breadcrumbs open={Boolean(anchorEl)}>
            <Button
              style={{ color: "black" }}
              onClick={handleClick}
              component={Link}
              to="/"
              className={classes.link}
            >
              <HomeIcon className={classes.icon} />
              Home
            </Button>
            <Button
              style={{ color: "black" }}
              onClick={handleClick}
              component={Link}
              to="/Menu"
              className={classes.link}
            >
              <RestaurantIcon className={classes.icon} />
              Menu
            </Button>
            <Button
              style={{ color: "black" }}
              onClick={handleClick}
              component={Link}
              to="/Cart"
              className={classes.link}
            >
              <ShoppingCartIcon className={classes.icon} />
              Cart ({cartQty})
            </Button>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(Header));
