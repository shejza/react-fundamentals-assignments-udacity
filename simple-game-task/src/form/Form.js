import React, { useState , useEffect} from "react";
import Input from "../components/Input";
import Error from "../components/Error";

const Form = ({ addUser, users }) => {
const formDefaultValues = {
    firstName: '',
    lastName: '',
    username: '',
    games: 0,
    unique: true
}

const [formValues, setFormValues] = useState(formDefaultValues);
const handleChange = (event	) => {
  const { name, value } = event.target;
     setFormValues((prevState) => ({
      ...prevState, 
      [name]: value,
       unique: true
    }));
}
  
 const handleSubmit = (e) => {
    e.preventDefault();
    const filteredUsers = users.filter(user => user.username === formValues.username).length > 0
    
   if(!filteredUsers) {
      addUser({...formValues})
     setFormValues({...formValues, unique: true})
   } else {
     setFormValues({...formValues, unique: false})
   }
   
    
  };


  const [isDisabled, setDisabled] = useState(false)
 
  const valid = formValues.firstName.length > 0 && formValues.lastName.length > 0 && formValues.username.length > 0;

   useEffect(() => {
    if(valid) {
      setDisabled(true)
    }
  }, [formValues]);
  
  const { firstName, lastName, username } = users;
 
  const { unique } = formValues;

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Input value={firstName} name={'firstName'} handleChange={handleChange} placeholder={'First Name'} />
        <Input value={lastName} name={'lastName'} handleChange={handleChange} placeholder={'Last Name'} />
        <Input value={username} name={'username'} handleChange={handleChange} placeholder={'Username'} />
        <button disabled={!isDisabled}>Add User</button>
        <br/>
       {!unique && <Error text={'User already taken'}/>}
      </form>
    </React.Fragment>
  );
};

export default Form;
