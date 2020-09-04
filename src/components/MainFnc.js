import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  spacing: {
    marginBottom: "25px",
  },
  widgetalign: {
    textAlign: "center",
    paddingTop: "50px",
  },
  fields: {
    width: "500px",
  },
}));

export const MainFnc=()=> {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [model, setModel] = React.useState("");
  const [namehelpertext, setNameHlprText] = React.useState("");
  const [isnameerror, setNameError] = React.useState(false);
  const [emailhelpertext, setEmailHlprText] = React.useState("");
  const [isemailerror, setEmailError] = React.useState(false);

  const [carcategoryhlperText, setCarCatHlprTxt] = React.useState("");
  const [isCarCatError, setisCarCatError] = React.useState(false);

  const [carmodelhlperText, setCarmodelHlprTxt] = React.useState("");
  const [isCarmodelError, setisCarmodelError] = React.useState(false);



  const [phonehlpertext, setPhoneHlprTxt] = React.useState("");
  const [isphoneerror, setIsPhoneError] = React.useState(false);
  const [cars,setCars] = React.useState([]);
  const [car,setCar]= React.useState({});

  var formatPhone = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
  var formatName = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~123456789]/;
  var formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const handleFielChange = (event) => {
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "model":
        setModel(event.target.value);
        break;
    }
    setAge(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setCar(cars.filter(car =>car.id==event.target.value)[0]);
  
  };
  const handleModelChange = (event) => {
    
    setModel(event.target.value);
    
   //
  };
  const handleSubmit=(e)=>{
    setNameError(true);
    setEmailError(true);
    setisCarCatError(true);
    setisCarmodelError(true);
      if (!name) {
          setNameHlprText("Name is required");
        } else if (formatName.test(namevalue)) {
          setNameHlprText("Invalid name");
        } else {
          setNameHlprText("");
          setNameError(false);
        }
        if (!email) {
          // alert('1')
          setEmailHlprText("Email is required");
        } else if (!formatEmail.test(emailvalue)) {
          // alert('2')
          setEmailHlprText("Invalid email format");
        } else {
          // alert('3')
          setEmailHlprText("");
          setEmailError(false);
        }
        if(phone)
        {
          if (!formatPhone.test(phone)) {
            setPhoneHlprTxt("Invalid Phone number");
          } else {
            setPhoneHlprTxt("");
            setIsPhoneError(false);
          }

        }
        if(!category)
        {
          setCarCatHlprTxt("Category Required!")

        }
        else
        {
          setCarCatHlprTxt("")
          setisCarCatError(false);
          
        }
        if(!model)
        {
          setCarmodelHlprTxt("Category Model!")
        }
        else
        {
          setCarmodelHlprTxt("")
          setisCarmodelError(false)

        }
       
  }
  const checkModel =(event)=>{

    if (!event.target.value) {
      setCarmodelHlprTxt("Model Required");
      setisCarmodelError(true);
    } 
     else {
      setCarmodelHlprTxt("");
      setisCarmodelError(false);
    }
  }
  const checkCategory =(event)=>{

    if (!event.target.value) {
      setCarCatHlprTxt("Category Required");
      setisCarCatError(true);
    } 
     else {
      setCarCatHlprTxt("");
      setisCarCatError(false);
    }
  }
  const handleValidation = (event) => {
    switch (event.target.id) {
      case "name":
        var namevalue = event.target.value;
        setNameError(true);
        if (!namevalue) {
          setNameHlprText("Name is required");
        } else if (formatName.test(namevalue)) {
          setNameHlprText("Invalid name");
        } else {
          setNameHlprText("");
          setNameError(false);
        }
        break;
      case "email":
        // alert('0')
        var emailvalue = event.target.value;
        setEmailError(true);
        if (!emailvalue) {
          // alert('1')
          setEmailHlprText("Email is required");
        } else if (!formatEmail.test(emailvalue)) {
          // alert('2')
          setEmailHlprText("Invalid email format");
        } else {
          // alert('3')
          setEmailHlprText("");
          setEmailError(false);
        }
        break;

      case "phone":
        var phonevalue = event.target.value;
      //  var format = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;

        setIsPhoneError(true);
        if (!formatPhone.test(phonevalue)) {
          setPhoneHlprTxt("Invalid Phone number");
        } else {
          setPhoneHlprTxt("");
          setIsPhoneError(false);
        }

        break;
    }
  };
  var data = {
    category:[{  
        id:"1",
        name:"small",
        models:[{id:"1",name:"Opel Corsa"},{id:"2",name:"Toyota Yaris"},{id:"3",name:"Smart for Two"}]},
        {  
        id:"2",
        name:"Premium",
        models:[{"id":"1","name":"Audi S8"},{"id":"2","name":"Jaguar XJR"},{"id":"3","name":"BMW 750iL"}]},
        {  
        id:"3",
        name:"Van",
        models:[{id:"1",name:"Volkswagen Touran"},{id:"2",name:"Renault Espace"},{id:"3",name:"Fiat Talento"}]}
        
        ]
  }
  useEffect(() => {

    //in case sample api is available
    //xios.get(`http://demo4892872.mockable.io/getcarscategory`).then(res => {
    //alert(JSON.stringify( res.data))
    
    //GetData();
    
    //setCars(res.data.category);
    //   alert(JSON.stringify(data.category[0].models))
    // }
    //  );

   //in case sample api is not available
   setCars(data.category);

  },[]);
 
  return (
    <form className={classes.formControl} >
      <div className={classes.widgetalign}>
        <div className={classes.spacing}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            color="secondary"
            error={isnameerror}
            helperText={namehelpertext}
            onBlur={handleValidation}
            onChange={handleFielChange}
            className={classes.fields}
          />
        </div>
        <div className={classes.spacing}>
          {" "}
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            color="secondary"
            error={isemailerror}
            helperText={emailhelpertext}
            onBlur={handleValidation}
            onChange={handleFielChange}
            className={classes.fields}
          />
        </div>
        <div className={classes.spacing}>
          {" "}
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            color="secondary"
            error={isphoneerror}
            helperText={phonehlpertext}
            onBlur={handleValidation}
            onChange={handleFielChange}
            className={classes.fields}
          />
        </div>
        <div className={classes.spacing}>
          {" "}
          <FormControl className={classes.fields} error ={isCarCatError}>
            <InputLabel id="demo-simple-select-label">Car Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              onChange={handleCategoryChange}
              error = {isCarCatError}
              onBlur = {checkCategory}
            >
             {cars.map((car) => <MenuItem key={car.id} value={car.id}>{car.name}</MenuItem>)}
             
            </Select>
            <FormHelperText>{carcategoryhlperText}</FormHelperText>
          </FormControl>
        </div>
        <div className={classes.spacing}>
          <FormControl className={classes.fields} error={isCarmodelError}>
            <InputLabel id="demo-simple-select-label">Car Model</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="model"
              value={model}
              onChange={handleModelChange}
              error = {isCarmodelError}
              onBlur= {checkModel}
            >
                {car.models?car.models.map((car) => <MenuItem key={car.id} value={car.id}>{car.name}</MenuItem>):<MenuItem>None</MenuItem>}
            </Select>
            <FormHelperText>{carmodelhlperText}</FormHelperText>
          </FormControl>
        </div>
        <div className={classes.spacing}>
          {" "}
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      <div className={classes.widgetalign}>
        <div>name:{name}</div>
        <div>email:{email}</div>
        <div>phone:{phone}</div>
      </div>
    </form>
  );
}
