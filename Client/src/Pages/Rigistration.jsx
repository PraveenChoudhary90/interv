import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
const Registration = ()=>{
    const [input, setInput] = useState({});

    const handelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);

    }

    const HandelSubmit =async (e)=>{
        e.preventDefault();
        const api = "http://localhost:8000/student/insertstudent";
        try {
            const response = await axios.post(api, input).then(()=>{
                console.log(response.data);
                window.alert("Student is Inserted");
            })
        } catch (error) {
            console.log(error);
            
        }
    }
    return(
        <>
        <div id="form" style={{margin:"auto", width:"500px" }}>
            <h1>Student Registration From</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" name='name' value={input.name} onChange={handelInput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmailr">
        <Form.Label>Enter Your Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email" name='email' value={input.email} onChange={handelInput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmailf">
        <Form.Label>Enter Your Course</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Course" name='course' value={input.course} onChange={handelInput} />
      </Form.Group>


       <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Your City</Form.Label>
        <Form.Control type="text" placeholder="Enter Your City" name='city' value={input.city} onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={handelInput}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={HandelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Registration;