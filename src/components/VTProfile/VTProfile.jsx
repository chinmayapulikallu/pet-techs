import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControl } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';

import { withRouter } from "react-router-dom";
import vtInfo from "../../redux/reducers/vetTechReducer";



import Uppy from '@uppy/core';
import DragDrop from '@uppy/react/lib/DragDrop';
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'

const PROFILE_IMG_HEIGHT = 225;

const styles = (theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  paper: {
    border: "2px solid #195C60",
    borderRadius: 5,
    marginTop: 50,
  },
  mainHeader: {
    backgroundColor: fade("#FFC2B4", 0.25),
    paddingBottom: 10,
  },
  editContainer: {
    paddingTop: 80,
    paddingBottom: 20,
  },
  header: {
    backgroundColor: fade("#195C60", 0.25),
    paddingLeft: 10,
    paddingTop: 2.5,
    paddingBottom: 2.5,
  },
  body: {
    paddingLeft: 15,
    paddingTop: 2.5,
    paddingBottom: 2.5,
  },
  location: {
    marginTop: 10,
    marginBottom: 30,
  },
  btn: {
    marginRight: 20,
  },
  profilePic: {
    marginTop: -(PROFILE_IMG_HEIGHT / 3),
    height: PROFILE_IMG_HEIGHT,
    borderRadius: "50%",
    width: theme.spacing(25),
    height: theme.spacing(25),

    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },
  profilePicContainer: {
    display: "flex",
    justifyContent: "center",
  },
  pic: {
    marginTop: 30,
  },
  headingTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  listItem: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  equipment: {
    marginTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    maxWidth: "95%",
  },
  size: {
    textAlign: "center",
    backgroundColor: fade("#195C60", 0.25),
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
  },
  botBtn: {
    marginTop: 25,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  progressLoad: {
    position: 'absolute',
    justifyContent: "center",
    marginLeft: '45%',
    // background: 'rgba(0, 0, 0, 0.5)',
  }
});

class VTProfile extends Component {
  state = {
    ...this.props.vetProfile,
    editable: false,
    open: false,
    setLoading: false,
  };

  componentWillReceiveProps = () => {
    this.setState({
      ...this.state,
      open: this.props.open,
    })
  }
  handleClickOpen = () => {
    this.setState({
      ...this.state,
      open: true,
      setLoading: false,

    })
  }

  handleCancel = () => {
    this.setState({
      ...this.state,
      open: false,
    });
  };

  handleSubmitImg = () => {
    this.props.dispatch({
      type: 'UPDATE_VT_PROFILE_PICTURE',
      payload: {
        file: this.state.file
      }
    })
    this.setState({
      ...this.state,
      setLoading: true,

    });
  };

  handleEdit = () => {
    console.log(this.state);
    this.setState((prevState) => ({
      editable: !prevState.editable,
    }));
    this.props.dispatch({
      type: "UPDATE_VT_DATA",
      payload: {
        ...this.state,
      },
    });
  };

  handleChange = (property) => (event) => {
    console.log(event.target.value, property);
    this.setState({
      [property]: event.target.value,
    });
  };

  handleToggleChange = (property) => (event) => {
    this.setState({
      [property]: event.target.checked === true,
    });
  };

  handleChecked = (event, property) => {
    if (event.target.checked === true) {
      this.setState({
        [property]: true,
      });
    } else if (event.target.checked === false) {
      this.setState({
        [property]: false,
      });
    }
  };

  handleRadio = (event, property) => {
    this.setState({
      [property]: event.target.value === "true",
    });
  };

  handleServiceRequest = () => {
    console.log("service user id:::::", this.props.vetProfile.user_id)
    this.props.history.push(`/client_service/${this.props.vetProfile.user_id}`);
  };

  handleBack = () => {
    this.props.history.goBack();
    console.log(this.props.vtInfo);
    this.props.history.push('/search');
  };

  //-----------------------------------

  uppy = Uppy({
    meta: { type: 'profilePicture' },
    restrictions: {
      maxNumberOfFiles: 1,
      maxFileSize: 5000000,
      allowedFileTypes: ['image/*'],
      // dimensions: { width: 1200, height: 800 },
    },
    autoProceed: true
  })
  reader = new FileReader()


  componentDidMount() {
    // this.props.dispatch({ type: "GET_VT_DATA" });
    console.log(`HERE!!!!!`, this.props.vtInfo);
    window.scrollTo(0, 0)

    this.uppy.on('upload', file => {
      let fileKey = Object.keys(this.uppy.state.files)[0];
      let fileFromUppy = this.uppy.state.files[fileKey].data;
      this.setImage(fileFromUppy);
    })

    this.reader.onloadend = () => {
      this.setState({
        profile_img: this.reader.result,
      })
    }
    console.log('data from client profile', this.state)
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
    return (
      <div>
        {/* {JSON.stringify(this.props.vetProfile)} */}
        <div className={classes.mainHeader}>
          <Container maxWidth="md" className={classes.root}>
            <Grid container spacing={10} className={classes.editContainer}>
              {this.props.isVetTech && (
                <>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="subtitle1" gutterBottom>
                      This is how your profile appears to the public.
                    </Typography>
                    <Typography variant="subtitle1">
                      If you would like to edit any part of your profile click
                      the edit button.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.btn}
                      onClick={this.handleEdit}
                    >
                      {this.state.editable ? "Save" : "Edit my profile"}
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </Container>
          <Container maxWidth="md" classesName={classes.root}>
            <Grid container spacing={10}>
              <Grid item xs={12} sm={5}></Grid>
              <Grid item xs={12} sm={7}>
                <Typography variant="h3">
                  {this.state.editable ? (
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      color="secondary"
                      variant="outlined"
                      defaultValue={this.state.vet_name}
                      onChange={this.handleChange("vet_name")}
                    />
                  ) : (
                      this.state.vet_name
                    )}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container maxWidth="md" classesName={classes.root}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={5}>


              <div className={classes.profilePicContainer}>


                {this.state.editable ?
                  <>
                    <img src="images/edit.png" alt="edit_button" height="30" width="30" onClick={this.handleClickOpen} />
                    {this.state.profile_img === '3e541de1f0419c15034e45c05eb3becd' ?
                      <>
                        <Avatar className={classes.profilePic}
                          src="images/blank-profile-picture.png" alt="profile" />
                      </>
                      :
                      <Avatar className={classes.profilePic} src={this.state.media_url} alt={this.state.profile_img}  />
                    }

                    <Dialog
                      open={this.state.open}
                      onClose={this.handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">{"Edit Your Profile Picture"}</DialogTitle>
                      <DialogContent>

                        <DragDrop
                          uppy={this.uppy}
                        />
                        {this.state.setLoading ?
                          <>
                            <CircularProgress className={classes.progressLoad} />
                          </>
                          :
                          ''
                        }
                        <img src={this.state.profile_img} alt='profile_picture' height="100%" width="100%" />
                      </DialogContent>

                      <DialogActions>
                        <Button onClick={this.handleCancel} color="secondary" variant="outlined" size= 'small'>Cancel</Button>
                        <Button onClick={this.handleSubmitImg} color="secondary" variant="outlined" size= 'small' autoFocus>Upload</Button>
                      </DialogActions>
                    </Dialog>
                  </>
                  :
                  <>
                    {this.state.profile_img === '3e541de1f0419c15034e45c05eb3becd' ?
                      <>
                        <Avatar className={classes.profilePic}
                          src="images/blank-profile-picture.png" alt="profile" />
                      </>
                      :
                      <Avatar className={classes.profilePic} src={this.state.media_url} alt={this.state.profile_img} />
                    }
                  </>
                }
              </div>



              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h5" className={classes.headingTitle}>
                    Services Offered
                  </Typography>
                </header>
                <Typography variant="h6" className={classes.body}>
                  {this.state.editable ? (
                    <>
                      <div className={classes.listItem}>
                        <FormControlLabel
                          label="Pet Sleepovers"
                          control={
                            <Switch
                              checked={this.state.sleep_over}
                              onChange={this.handleToggleChange("sleep_over")}
                              name="checkedPetSleepovers"
                              color="secondary"
                            />
                          }
                        />
                      </div>
                      <div className={classes.listItem}>
                        <FormControlLabel
                          label="Boarding"
                          control={
                            <Switch
                              checked={this.state.boarding}
                              onChange={this.handleToggleChange("boarding")}
                              name="checkedBoarding"
                              color="secondary"
                            />
                          }
                        />
                      </div>
                      <div className={classes.listItem}>
                        <FormControlLabel
                          label="Drop In Care"
                          control={
                            <Switch
                              checked={this.state.dropin_care}
                              onChange={this.handleToggleChange("dropin_care")}
                              name="checkedDropInCare"
                              color="secondary"
                            />
                          }
                        />
                      </div>
                      <div className={classes.listItem}>
                        <FormControlLabel
                          label="Hospice Care"
                          control={
                            <Switch
                              checked={this.state.hospice}
                              onChange={this.handleToggleChange("hospice")}
                              name="checkedHospiceCare"
                              color="secondary"
                            />
                          }
                        />
                      </div>
                    </>
                  ) : (
                      <>
                        {this.state.sleep_over ? (
                          <div className={classes.listItem}>Pet Sleepovers</div>
                        ) : (
                            ""
                          )}
                        {this.state.boarding ? (
                          <div className={classes.listItem}>Boarding</div>
                        ) : (
                            ""
                          )}
                        {this.state.dropin_care ? (
                          <div className={classes.listItem}>Drop In Care</div>
                        ) : (
                            ""
                          )}
                        {this.state.hospice ? (
                          <div className={classes.listItem}>Hospice Care</div>
                        ) : (
                            ""
                          )}
                      </>
                    )}
                </Typography>
              </Paper>
              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h6">
                    {this.state.vet_name}'s Care Equipment
                  </Typography>
                </header>
                <Typography variant="body1" className={classes.body}>
                  {this.state.editable ? (
                    <TextField
                      className={classes.equipment}
                      id="outlined-basic"
                      label="Equipment List"
                      color="secondary"
                      multiline
                      fullWidth
                      rows={5}
                      variant="outlined"
                      defaultValue={this.state.equipment_list}
                      onChange={this.handleChange("equipment_list")}
                    />
                  ) : (
                      <div className={classes.equipment}>
                        {this.state.equipment_list}
                      </div>
                    )}
                </Typography>
              </Paper>
              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h6">
                    {this.state.vet_name}'s Preferences
                  </Typography>
                </header>
                <Typography variant="body1" className={classes.body}>
                  {this.state.editable ? (
                    <>
                      <div>
                        Provides service for:
                        <FormControl>
                          <FormGroup row>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.dogs}
                                  onChange={(event) =>
                                    this.handleChecked(event, "dogs")
                                  }
                                  name="Dogs"
                                />
                              }
                              label="Dogs"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.cats}
                                  onChange={(event) =>
                                    this.handleChecked(event, "cats")
                                  }
                                  name="Cats"
                                />
                              }
                              label="Cats"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.other}
                                  onChange={(event) =>
                                    this.handleChecked(event, "other")
                                  }
                                  name="Other"
                                />
                              }
                              label="Other"
                            />
                          </FormGroup>
                        </FormControl>
                      </div>
                      <div>
                        Bathroom Breaks every:
                        <FormControl>
                          <FormGroup row>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.zero_two}
                                  onChange={(event) =>
                                    this.handleChecked(event, "zero_two")
                                  }
                                  name="zero_two"
                                />
                              }
                              label="0-2"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.two_four}
                                  onChange={(event) =>
                                    this.handleChecked(event, "two_four")
                                  }
                                  name="two_four"
                                />
                              }
                              label="2-4"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.four_eight}
                                  onChange={(event) =>
                                    this.handleChecked(event, "four_eight")
                                  }
                                  name="four_eight"
                                />
                              }
                              label="4-8"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.not_available}
                                  onChange={(event) =>
                                    this.handleChecked(event, "not_available")
                                  }
                                  name="not_available"
                                />
                              }
                              label="N/A"
                            />
                          </FormGroup>
                        </FormControl>
                      </div>
                      <div>
                        Will host animals from multiple families
                        <FormControl component="fieldset">
                          <RadioGroup
                            row
                            aria-label="pet_more_than_one_family"
                            name="pet_more_than_one_family"
                            value={String(this.state.pet_more_than_one_family)}
                            onChange={(event) =>
                              this.handleRadio(
                                event,
                                "pet_more_than_one_family"
                              )
                            }
                          >
                            <FormControlLabel
                              value="false"
                              control={<Radio />}
                              label="No"
                            />
                            <FormControlLabel
                              value="true"
                              control={<Radio />}
                              label="Yes"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                      <div>
                        Will host pets younger than one years old
                        <FormControl component="fieldset">
                          <RadioGroup
                            row
                            aria-label="pet_younger_than_one"
                            name="pet_younger_than_one"
                            value={String(this.state.pet_younger_than_one)}
                            onChange={(event) =>
                              this.handleRadio(event, "pet_younger_than_one")
                            }
                          >
                            <FormControlLabel
                              value="false"
                              control={<Radio />}
                              label="No"
                            />
                            <FormControlLabel
                              value="true"
                              control={<Radio />}
                              label="Yes"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                      <div>
                        Animal size prefrences:
                        <FormControl>
                          <FormGroup row>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.small_dog}
                                  onChange={(event) =>
                                    this.handleChecked(event, "small_dog")
                                  }
                                  name="small_dog"
                                />
                              }
                              label="Small"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.medium_dog}
                                  onChange={(event) =>
                                    this.handleChecked(event, "medium_dog")
                                  }
                                  name="medium_dog"
                                />
                              }
                              label="Medium"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.large_dog}
                                  onChange={(event) =>
                                    this.handleChecked(event, "large_dog")
                                  }
                                  name="large_dog"
                                />
                              }
                              label="Large"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.giant_dog}
                                  onChange={(event) =>
                                    this.handleChecked(event, "giant_dog")
                                  }
                                  name="giant_dog"
                                />
                              }
                              label="Giant"
                            />
                          </FormGroup>
                        </FormControl>
                      </div>
                    </>
                  ) : (
                      <>
                        <div className={classes.equipment}>
                          Provides services for {this.state.dogs ? "dogs" : ""}{" "}
                          {this.state.cats ? " cats" : ""}{" "}
                          {this.state.other ? " and other types of animals" : ""}
                        </div>
                        <div className={classes.equipment}>
                          Bathroom Breaks every{" "}
                          {this.state.zero_two ? "0-2 hours" : ""}{" "}
                          {this.state.two_four ? "2-4 hours" : ""}{" "}
                          {this.state.four_eight ? "4-8 hours" : ""}{" "}
                          {this.state.not_available ? "Not Applicable" : ""}
                        </div>
                        <div className={classes.equipment}>
                          {this.state.pet_more_than_one_family
                            ? "Hosts animals from multiple families"
                            : "Will only host animals from one family"}
                        </div>
                        <div className={classes.equipment}>
                          {this.state.pet_younger_than_one
                            ? "Hosts pets younger than one years old"
                            : "Will only host pets older than one"}
                        </div>
                        <div className={classes.equipment}>
                          Animal Size Preferences:
                        <Grid container>
                            {this.state.small_dog ? (
                              <Grid item xs={12} sm={3}>
                                <Paper className={classes.size}>Small</Paper>
                              </Grid>
                            ) : (
                                ""
                              )}
                            {this.state.medium_dog ? (
                              <Grid item xs={12} sm={3}>
                                <Paper className={classes.size}>Medium</Paper>
                              </Grid>
                            ) : (
                                ""
                              )}
                            {this.state.large_dog ? (
                              <Grid item xs={12} sm={3}>
                                <Paper className={classes.size}>Large</Paper>
                              </Grid>
                            ) : (
                                ""
                              )}
                            {this.state.giant_dog ? (
                              <Grid item xs={12} sm={3}>
                                <Paper className={classes.size}>Giant</Paper>
                              </Grid>
                            ) : (
                                ""
                              )}
                          </Grid>
                        </div>
                      </>
                    )}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography variant="h6" className={classes.location}>
                {this.state.editable ? (
                  <>
                    <TextField
                      id="outlined-basic"
                      label="City"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      defaultValue={this.state.city}
                      onChange={this.handleChange("city")}
                    />
                    <TextField
                      id="outlined-basic"
                      label="State"
                      color="secondary"
                      variant="outlined"
                      size="small"
                      defaultValue={this.state.state}
                      onChange={this.handleChange("state")}
                    />
                  </>
                ) : (
                    <>
                      {this.state.city}, {this.state.state}
                    </>
                  )}
              </Typography>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  onClick={this.handleBack}
                  disabled={this.props.isVetTech}
                >
                  Back to Search
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btnRS}
                  disabled={this.props.isVetTech}
                  onClick={this.handleServiceRequest}
                >
                  Request Service
                </Button>
              </div>
              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h6">Qualifications</Typography>
                </header>
                <Typography variant="body1" className={classes.body}>
                  {this.state.editable ? (
                    <>
                      <TextField
                        className={classes.equipment}
                        id="outlined-basic"
                        label="Years of Experience"
                        color="secondary"
                        size="small"
                        variant="outlined"
                        defaultValue={this.state.experience}
                        onChange={this.handleChange("experience")}
                      />
                      <TextField
                        className={classes.equipment}
                        id="outlined-basic"
                        label="Education/Degree/Cerifications"
                        color="secondary"
                        multiline
                        fullWidth
                        rows={5}
                        variant="outlined"
                        defaultValue={this.state.certifications}
                        onChange={this.handleChange("certifications")}
                      />
                      <TextField
                        className={classes.equipment}
                        id="outlined-basic"
                        label="Current Job Title"
                        color="secondary"
                        size="small"
                        variant="outlined"
                        defaultValue={this.state.current_job_title}
                        onChange={this.handleChange("current_job_title")}
                      />
                    </>
                  ) : (
                      <>
                        <div className={classes.equipment}>
                          Professional pet experiences: {this.state.experience}{" "}
                        years
                      </div>
                        <div className={classes.equipment}>
                          Education/Degree/Cerifications:
                        <div className={classes.listItem}>
                            {this.state.certifications}
                          </div>
                        </div>
                        <div className={classes.equipment}>
                          Current Job Title: {this.state.current_job_title}
                        </div>
                      </>
                    )}
                </Typography>
              </Paper>
              <Paper variant="outlined" className={classes.paper}>
                <header className={classes.header}>
                  <Typography variant="h6">
                    About {this.state.vet_name}
                  </Typography>
                </header>
                <Typography variant="body1" className={classes.body}>
                  {this.state.editable ? (
                    <TextField
                      className={classes.equipment}
                      id="outlined-basic"
                      label="About yourself"
                      color="secondary"
                      multiline
                      fullWidth
                      rows={7}
                      variant="outlined"
                      defaultValue={this.state.bioyourself}
                      onChange={this.handleChange("bioyourself")}
                    />
                  ) : (
                      <div className={classes.equipment}>
                        {this.state.bioyourself}
                      </div>
                    )}
                </Typography>
              </Paper>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={8}>
                  <Paper variant="outlined" className={classes.paper}>
                    <header className={classes.header}>
                      <Typography variant="h6">
                        Experience & Relevant Skills
                      </Typography>
                    </header>
                    <Typography variant="body1" className={classes.body}>
                      {this.state.editable ? (
                        <TextField
                          className={classes.equipment}
                          id="outlined-basic"
                          label="Experience and Relevant Skills"
                          color="secondary"
                          multiline
                          fullWidth
                          rows={5}
                          variant="outlined"
                          defaultValue={this.state.expertise}
                          onChange={this.handleChange("expertise")}
                        />
                      ) : (
                          <div className={classes.equipment}>
                            {this.state.expertise}
                          </div>
                        )}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <img
                    src="/images/careTakerDog.png"
                    alt="Care Taker"
                    height="150"
                    className={classes.pic}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {this.props.isVetTech && (
            <>
              <Grid container spacing={10}>
                <Grid item xs={12} sm={5}></Grid>
                <Grid item xs={12} sm={7}>
                  <div className={classes.botBtn}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleBack}
                    >
                      Back to DashBoard
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (reduxState, ownProps) => {
  const vetId = Number(ownProps.match.params.id);
  console.log("ownProps::::", ownProps)
  const vetProfile = reduxState.vtInfo.filter(
    (vet) => vet.user_id === vetId
  )[0];

  return {
    vetProfile,
    user: reduxState.user,
    isVetTech: reduxState.user.user_type === 1,
  };
};

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(VTProfile))
);
