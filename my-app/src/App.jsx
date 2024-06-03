import { useState } from "react";
import './App.css';
import FormInput from './components/FormInput';

const App = () => {
  const [values, setvalues] = useState({
    CdName: "",
    CdNum: "",
    Expdate: "",
    Cvv: ""
  });

  const inputs = [
    {
      id:1,
      name: "CdName",
      type:"text",
      placeholder:"CardHolder Name",
      errorMessage:"Only alphabetical characters allowed",
      label: "Cardholder Name",
      pattern: "^[A-Za-z]{1,50}$",
      required: true
    },

    {
      id:2,
      name: "CdNum",
      type:"number",
      placeholder:"XXXX XXXX XXXX XXXX",
      errorMessage:"Enter a Valid Card Number",
      label: "Card Number",
      pattern: "^4[0-9]{12}(?:[0-9]{3})?$",
      required: true
    },

    {
      id:3,
      name: "Expdate",
      type:"number",
      placeholder:"MMYY",
      errorMessage:"Card details are Invalid/ Card Expired",
      label: "Expiration Date",
      pattern: "^SW[0-9]{4}$ ",
      required: true
    },

    {
      id:4,
      name: "Cvv",
      type:"number",
      placeholder:"XXX",
      errorMessage:"Enter the 3-digits behind your card",
      label: "CVV",
      pattern: "^SW[0-9]{3}$ ",
      required: true
    }

  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) =>{
    setvalues({...values, [e.target.name]: e.target.value});
  };

  console.log(values);
  
  return (
  <div className='app1'>
    <form onSubmit={handleSubmit}>
      <h1>Payment details</h1>
      <p>We accept all major credit cards. Please ensure that 
        you enter your details exactly as they appear on your credit card statement. 
        All fileds are reuired unless is indicated</p>
      {inputs.map((input) => (
        <FormInput 
        key={input.id} 
        {...input} 
        value={values[input.name]} 
        onChange={onChange}/>
      ))}
        <button handleSubmit={handleSubmit} >Buy Miles</button>
    </form>
  </div>
  );
};

export default App;

