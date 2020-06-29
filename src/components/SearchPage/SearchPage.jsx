import React, { Component } from "react";
import { connect } from "react-redux";
import FormControl from "@material-ui/core/FormControl"
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router"
import { Typography, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid"
import { MenuItem } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import Select from "@material-ui/core/Select"
import FormGroup from "@material-ui/core/FormGroup"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Paper from "@material-ui/core/Paper"
import { fade } from "@material-ui/core/styles/colorManipulator";




const styles = theme => ({
    root: {
        marginLeft: theme.spacing(20),
        marginRight: theme.spacing(20),
        marginTop: '100px',
    },
    title: {
        textAlign: 'center',
    },
    helperText: {
        textAlign: 'center',
    },
    boxes: {
        marginTop: 10,
        marginBottom: 10
    },
    button: {
        margin: "20px 30px",
        height: 45,
        width: 180,
        borderRadius: 12,
        display: "flex",
        marginTop: -100
    },
    searchImage: {
        paddingTop: 50
    },
    serviceTitle: {
        paddingTop: 50,
        paddingBottom: 10
    },
    groupCheck: {
        paddingLeft: 400
    },
    serviceType: {
        paddingLeft: 150,
        display: "flex"
    },
    paper: {
        marginTop: 20,
        borderRadius: "5px",
        width: "75%",
        marginLeft: 150,
        border: "2px solid #195C60",
    },
    profPic: {
        marginTop: 20,
        marginBottom: 20,
        border: "2px solid #F8E16C",
        borderRadius: "50px"
    },
    header: {
        backgroundColor: fade("#195C60", 0.50),
    },
    btn: {
        marginBottom: 20,
        marginTop: 20
    },
    certifications: {
        display: "flex",
        backgroundColor: fade("#195C60", 0.25),
        marginBottom: 20,
        paddingLeft: 30,

    },
    aboutMe: {
        display: "flex"
    },
    list: {
        marginBottom: 20,
        marginTop: 10
    }


})



class SearchPage extends Component {

    state = {
        ...this.props.serviceProvider,
        search: ''
    };

    componentDidMount = () => {
        console.log("MOUNTED)")
        
        this.getAllVtInfo()
    }



    getAllVtInfo = () => {
        
        this.props.dispatch({ type: "GET_ALL_VT_DATA" });
    };


    handleChange = (event, property) => {
        console.log(event.target.value, "#####")
        this.setState({
            [property]: event.target.value
        })
    }

    handleCheckChange = (event, property) => {
        console.log(event.target.checked, property)
        this.setState({
            [property]: event.target.checked === true,
        });

    };

    // onChange = e =>{
    //     console.log(e.target.value);

    //     this.setState({search : e.target.value})
    // }



    render() {

        const { classes } = this.props
        //const {search}=this.state;

        return (


            <div className={classes.root}>

                <div>
                   <div>
                     
                        <p>{JSON.stringify(this.props.vtInfo)}</p>
                        
                        
                      
                   </div>
                    <Grid className={classes.title}>
                        <FormControl onSubmit={this.registerUser}>
                            <div>
                                <img className={classes.searchImage} src="/images/search-mag.png" alt="searchIcon" height="75" width="75" />

                            </div>
                            <Typography className={classes.serviceTitle} variant="h4">Find a service provider</Typography>
                        </FormControl>

                        <Typography variant="subtitle1">Filter</Typography>



                        {/* <Input label="Search" onChange={this.onChange}/> */}






                        <Grid container direction={"row"} className={classes.serviceType}>
                            {/* <InputLabel>Service:</InputLabel> */}
                            <Select

                                color="secondary"
                                label="Service"
                                variant="outlined"
                                onChange={(event) => this.handleChange(event, "service_filter")}
                            >
                                <MenuItem value="Select">Select Service Type</MenuItem>
                                <MenuItem value="Sleepover">Pet Sleepover</MenuItem>
                                <MenuItem value="Boarding">Pet Boarding</MenuItem>
                                <MenuItem value="Drop-In">Drop-In</MenuItem>
                                <MenuItem value="Hospice">Hospice</MenuItem>
                            </Select>
                            <FormGroup className={classes.groupCheck} row={true}>
                                {/* <Typography variant="subtitle1">Type:</Typography> */}
                                <FormControlLabel
                                    control={<Checkbox name="dog" />}
                                    onChange={(event) => this.handleCheckChange(event, "dogFilter")}
                                    value={this.state.dogFilter}
                                    label="Dog"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="cat" />}
                                    onChange={(event) => this.handleCheckChange(event, "catFilter")}
                                    value={this.state.catFilter}
                                    label="Cat"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="other" />}
                                    onChange={(event) => this.handleCheckChange(event, "otherFilter")}
                                    value={this.state.otherFilter}
                                    label="Other"
                                />
                            </FormGroup>
                        </Grid>
                        {/* <Grid container> */}
                        {this.props.vtInfo.map((vet, index) => {
                            return (
                                <Grid>
                                    <Paper elevation="5" className={classes.paper}>
                                        <div key={vet.id}>
                                        <CardHeader title={vet.vet_name} className={classes.header} />
                                        <img className={classes.profPic} src="/images/girl-profile.png" alt="profilePic" height="100" width="100" />
                                        <Typography className={classes.certifications} variant="h6">Certifications:</Typography>
                                        <div className={classes.outlined}>
                                            <Typography className={classes.list} variant="subtitle1">
                                            {vet.expertise}
                                    </Typography>
                                        </div>
                                        <div className={classes.outlined}>
                                            <Typography className={classes.certifications} variant="h6">About me:</Typography>
                                        </div>
                                        <div className={classes.outlined}>
                                            <Typography variant="subtitle1">
                                          {vet.bioyourself}
                                    </Typography>
                                        </div>
                                        <Button className={classes.btn} variant="contained" color="primary" >View Profile</Button>
                                        </div>
                                    </Paper>
                                </Grid>
                            )
                        })}
                        {/* </Grid> */}





                        {/* <Grid>
                            
                            <Paper elevation="5" className={classes.paper}>
                                <CardHeader title={this.props.vtInfo.vet_name} className={classes.header} />
                                <img className={classes.profPic} src="/images/girl-profile.png" alt="profilePic" height="100" width="100" />
                                <Typography className={classes.certifications} variant="h6">Certifications:</Typography>
                                <div className={classes.outlined}>
                                    <Typography className={classes.list} variant="subtitle1">
                                        Avian Practice,
                                        Beef Cattle Practice,
                                        Canine and Feline Practice,
                                        Dairy Practice,
                                        Equine Practice
                                    </Typography>
                                </div>
                                <div className={classes.outlined}>
                                    <Typography className={classes.certifications} variant="h6">About me:</Typography>
                                </div>
                                <div className={classes.outlined}>
                                    <Typography variant="subtitle1">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                                    </Typography>
                                </div>
                                <Button className={classes.btn} variant="contained" color="primary" >View Profile</Button>
                            </Paper>
                        </Grid> */}


                        {/* <Grid>

                            <Paper elevation="5" className={classes.paper}>
                                <CardHeader title="Name" className={classes.header} />
                                <img className={classes.profPic} src="/images/girl-profile.png" alt="profilePic" height="100" width="100" />
                                <Typography className={classes.certifications} variant="h6">Certifications:</Typography>
                                <div className={classes.outlined}>
                                    <Typography className={classes.list} variant="subtitle1">
                                        Avian Practice,
                                        Beef Cattle Practice,
                                        Canine and Feline Practice,
                                        Dairy Practice,
                                        Equine Practice
                                    </Typography>
                                </div>
                                <div className={classes.outlined}>
                                    <Typography className={classes.certifications} variant="h6">About me:</Typography>
                                </div>
                                <div className={classes.outlined}>
                                    <Typography variant="subtitle1">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                                    </Typography>
                                </div>
                                <Button className={classes.btn} variant="contained" color="primary" >View Profile</Button>
                            </Paper>
                        </Grid> */}



                    </Grid>

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
   vtInfo: state.vtInfo
    // serviceProvider: {
    //     service_filter: '',
    //     dogFilter: false,
    //     catFilter: false,
    //     otherFilter: false,
    // }
    
    
});


export default withRouter(
    connect(mapStateToProps)(withStyles(styles)(SearchPage))
);