import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



import { withStyles } from '@material-ui/core/styles';
// import Slide from "@material-ui/core/Slide";
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const styles = theme => ({
  root: {
    backgroundColor: '#f7f7f7',
    backgroundSize: 'cover',
    marginTop: 50,
    width: '100%',
    height: '70px',
    // zIndex: theme.zIndex.drawer + 1,
  },
  icons: {
    float: 'right',
    marginTop: 20,
    marginRight: 50,
  }

})

// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }



class Footer extends Component {


  render() {
    const { classes } = this.props;
    return (
      // <HideOnScroll {...this.props}>

      <div className={classes.root}>

        {/* Show the link to the info page and the logout button if the user is logged in */}
        {this.props.user.id && (
          <>
            <div className="footer_links">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/">
                Browse
              </Link>
              <Link className="nav-link" to="/">
                About
              </Link>
              <Link className="nav-link" to="/">
                F.A.Q.
              </Link>
              <Link className="nav-link" to="/">
                Leanring & Resources
              </Link>

            </div>
            <div className={classes.icons}>

              {/* <img src="images/blank-profile-picture.png" alt="profile" height="30" width="30" />
                <a className="social-nav__link" href="https://www.twitter.com">
                  <svg className="social-nav__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a> */}
              <header className="main-hero">
                <nav className="social-nav">
                  <a className="social-nav__link" href="https://twitter.com/PetTechs">
                    <svg className="social-nav__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </a>

                  <a className="social-nav__link" href=" https://www.instagram.com/pettechsofficial/">
                    <svg className="social-nav__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="50 0 190 230">
                      <g>
                        <path d="M195.93,63.708H95.38c-17.47,0-31.672,14.211-31.672,31.672v100.56
		c0,17.47,14.211,31.672,31.672,31.672h100.56c17.47,0,31.672-14.211,31.672-31.672V95.38
		C227.611,77.919,213.4,63.708,195.93,63.708z M205.908,82.034l3.587-0.009v27.202l-27.402,0.091l-0.091-27.202
		C182.002,82.116,205.908,82.034,205.908,82.034z M145.66,118.239c22.732,0,27.42,21.339,27.42,27.429
		c0,15.103-12.308,27.411-27.42,27.411c-15.121,0-27.42-12.308-27.42-27.411C118.23,139.578,122.928,118.239,145.66,118.239z
		 M209.65,193.955c0,8.658-7.037,15.704-15.713,15.704H97.073c-8.667,0-15.713-7.037-15.713-15.704v-66.539h22.759
		c-2.112,5.198-3.305,12.299-3.305,18.253c0,24.708,20.101,44.818,44.818,44.818s44.808-20.11,44.808-44.818
		c0-5.954-1.193-13.055-3.296-18.253h22.486v66.539L209.65,193.955z"></path>
                      </g>
                    </svg>
                  </a>
                  <a className="social-nav__link" href="https://www.facebook.com/PetTechsinc">
                    <svg className="social-nav__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg>
                  </a>

                </nav>
              </header>
            </div>
          </>
        )
        }
      </div>
      // </HideOnScroll>

    )
  }

};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Footer));
