import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Switch from "@material-ui/core/Switch";


import Uppy from '@uppy/core';
import DragDrop from '@uppy/react/lib/DragDrop';
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  inputs: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  flex: {
    flexGrow: 1,
    marginRight: 10,
  },
  city: {
    width: "50%",
    marginRight: 10,
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
    height: 45,
    widith: 180,
    borderRadius: 12,
  },
  botBtn: {
    margin: "60px 30px 20px 30px",
    height: 45,
    width: 180,
    borderRadius: 12,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "left",
    border: "2px solid #195C60",
  },
  cardBox: {
    textAlign: "center",
    width: "85%",
  },
  toggle: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    marginTop: -6,
    marginRight: 20,
  },
  description: {
    marginLeft: 60,
  },
  switch: {
    marginTop: -10
  },
  title: {
    marginTop: 100
  }
};

class VTPage1 extends Component {
  state = {
    file: this.props.vtInfoPage1.file,
    ...this.props.vtInfoPage1.text,
  };

  handleInputChange = (property) => (event) => {
    console.log('changing', property, event.target.value)
    this.setState({
      [property]: event.target.value,
    });
  };

  handleToggleChange = (property) => (event) => {
    this.setState({
      [property]: event.target.checked === true,
    });
  };

  handleUploadPhoto = () => {
    alert("Photo upload needs set up");
  };

  handleNext = () => {
    this.props.onNext();
    this.props.dispatch({
      type: 'SET_VT_DATA_PAGE_1',
      payload: {
        file: this.state.file,
        text: {
          vet_name: this.state.vet_name,
          home_address_house: this.state.home_address_house,
          apt_suite: this.state.apt_suite,
          city: this.state.city,
          state: this.state.state,
          zip_code: this.state.zip_code,
          profile_img: this.state.profile_img,
          sleep_over: this.state.sleep_over,
          boarding: this.state.boarding,
          dropin_care: this.state.dropin_care,
          hospice: this.state.hospice,
          about_vet: this.state.about_vet,
        }
      },
    })
    console.log('Vet reg data page 1:', this.state)
  };

  //-----------------------------------


  uppy = Uppy({
    meta: { type: 'profilePicture' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

  reader = new FileReader()

  componentDidMount = () => {
    console.log('data in vt state 1:', this.state)

    this.uppy.on('upload', file => {
      let fileKey = Object.keys(this.uppy.state.files)[0];
      let fileFromUppy = this.uppy.state.files[fileKey].data;
      this.setImage(fileFromUppy);
    })

    this.reader.onloadend = () => {
      this.setState({
        text: {
          ...this.state,

        },
        profile_img: this.reader.result,


      })
    }
    console.log('data from client reg page 1', this.state)

  }

  setImage = file => {
    //reads the file into a local data url
    this.reader.readAsDataURL(file);
    this.setState({
      ...this.state,

      file: file,
    })
  }
  //-----------------------------------




  render() {
    const { classes } = this.props;
    console.log('----page1-------->', this.props.vtInfoPage1)

    return (
      <Container className={classes.root} maxWidth="sm">
        <Typography variant="h3" className={classes.title}>
          Hi {this.props.user.username}! Let's set up your profile!
        </Typography>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"Your name"}
            fullWidth
            color="secondary"
            variant="outlined"
            value={this.state.vet_name}
            onChange={this.handleInputChange("vet_name")}
          />
        </div>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"Home Address"}
            fullWidth
            color="secondary"
            variant="outlined"
            value={this.state.home_address_house}
            onChange={this.handleInputChange("home_address_house")}
          />
        </div>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"Apartment or Suite #"}
            fullWidth
            color="secondary"
            variant="outlined"
            value={this.state.apt_suite}
            onChange={this.handleInputChange("apt_suite")}
          />
        </div>
        <div className={classes.inputs}>
          <TextField
            id="outlined-basic"
            label={"City"}
            variant="outlined"
            value={this.state.city}
            color="secondary"
            onChange={this.handleInputChange("city")}
            className={classes.city}
          />
          <TextField
            id="outlined-basic"
            label={"State"}
            variant="outlined"
            value={this.state.state}
            color="secondary"
            onChange={this.handleInputChange("state")}
            className={classes.flex}
          />
          <TextField
            id="outlined-basic"
            label={"Zip_code"}
            variant="outlined"
            color="secondary"
            value={this.state.zip_code}
            onChange={this.handleInputChange("zip_code")}
          />
        </div>
        <div>
          <Typography variant="h5">
            You look purr-fect! Let's add a photo for your profile!
          </Typography>


          {/* <Button
            className={classes.btn}
            onClick={this.handleUploadPhoto}
            variant="contained"
            color="primary"
          >
            Select Photo to Upload
          </Button> */}
          {/* //--------------------------------------------------------- */}
          <DragDrop
            uppy={this.uppy}
          />
          <img className={classes.img} src={this.state.profile_img} alt="profilePictureUrl" width="50%" height="50%" />

          {/* //--------------------------------------------------------- */}

        </div>
        <div>
          <Typography variant="h5">
            Tell us which services you'd like to offer.
          </Typography>
          <Typography variant="body1">
            Toggle selections to inculde them in your profile.
          </Typography>
          <Container className={classes.cardBox}>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.toggle}>
                  <img
                    className={classes.logo}
                    src="/images/sleepover-icon.png"
                    alt="Sleepover"
                    height="50"
                    width="50"
                  />
                  <Typography variant="h5" className={classes.flex}>
                    Pet Sleepover
                  </Typography>
                  <CardActions>
                    <Switch
                      checked={this.state.sleep_over}
                      onChange={this.handleToggleChange("sleep_over")}
                      size="medium"
                      name="petSleepover"
                      className={classes.switch}
                    />
                  </CardActions>
                </div>
                <Typography
                  color="textSecondary"
                  className={classes.description}
                >
                  You care for pets in the owner's home.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.toggle}>
                  <img
                    className={classes.logo}
                    src="/images/boarding-icon.png"
                    alt="Boarding"
                    height="50"
                    width="50"
                  />
                  <Typography variant="h5" className={classes.flex}>
                    Pet Boarding
                  </Typography>
                  <CardActions>
                    <Switch
                      checked={this.state.boarding}
                      onChange={this.handleToggleChange("boarding")}
                      size="medium"
                      name="petBoarding"
                      className={classes.switch}
                    />
                  </CardActions>
                </div>
                <Typography
                  color="textSecondary"
                  className={classes.description}
                >
                  You care for pets at your home.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.toggle}>
                  <img
                    className={classes.logo}
                    src="/images/drop-in-care-icon.png"
                    alt="Drop In Care"
                    height="50"
                    width="50"
                  />
                  <Typography variant="h5" className={classes.flex}>
                    Drop In Care
                  </Typography>
                  <CardActions>
                    <Switch
                      checked={this.state.dropin_care}
                      onChange={this.handleToggleChange("dropin_care")}
                      size="medium"
                      name="dropInCare"
                      className={classes.switch}
                    />
                  </CardActions>
                </div>
                <Typography
                  color="textSecondary"
                  className={classes.description}
                >
                  You provide medical services in a client's home.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.toggle}>
                  <img
                    className={classes.logo}
                    src="/images/hospice-icon.png"
                    alt="Hospice"
                    height="50"
                    width="50"
                  />
                  <Typography variant="h5" className={classes.flex}>
                    Hospice Care
                  </Typography>
                  <CardActions>
                    <Switch
                      checked={this.state.hospice}
                      onChange={this.handleToggleChange("hospice")}
                      size="medium"
                      name="hospiceCare"
                      className={classes.switch}
                    />
                  </CardActions>
                </div>
                <Typography
                  color="textSecondary"
                  className={classes.description}
                >
                  You care for pets in client's home with hospice needs and
                  services.
                </Typography>
              </CardContent>
            </Card>
          </Container>
          <div>
            <Typography variant="h5">Tell us more about yourself!</Typography>
            <TextField
              value={this.state.about_vet}
              label={"About your house, lifestyle, and pets..."}
              variant="outlined"
              className={classes.inputs}
              fullWidth
              color="secondary"
              multiline
              rows={7}
              onChange={this.handleInputChange("about_vet")}
            />
          </div>
          <div>
            {/* <Button
              className={classes.botBtn}
              onClick={this.handleBack}
              variant="contained"
              color="primary"
            >
              Back
            </Button> */}
            <Button
              className={classes.botBtn}
              onClick={this.handleNext}
              variant="contained"
              color="primary"
            >
              Save and Continue
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  // vtInfoPage1: {
  //   vet_name: '',
  //   home_address_house: "",
  //   apt_suite: "",
  //   city: "",
  //   state: "",
  //   zip_code: "",
  //   profile_img: "",
  //   sleep_over: false,
  //   boarding: false,
  //   dropin_care: false,
  //   hospice: false,
  //   about_vet: "",

  //   ...state.vtInfoPage1, // overrides default with any existing vt values
  // },
  // errors: state.errors,
  vtInfoPage1: state.vtInfoPage1,
  user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(VTPage1));
