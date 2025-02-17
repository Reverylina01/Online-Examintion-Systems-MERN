import React, { useState} from "react";
import { Button, Form,Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from '../UIElements/LoadingSpinner'

import axios from "axios";
function CreateCategory() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errortxt, setErrortxt] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
            const handelSubmit = async (event) => {
                setIsLoading(true);
              event.preventDefault();
          
              
                
                try {
          
           const response=await axios.post('http://localhost:5001/api/categorys/add',{
            name
        });
        if(response.status==201)
            {
      
                console.log(response);
                setName("");
                navigate("/admin/category/");
                //setIsLoading(false);
            }
            else
            {
                setErrortxt(response.data.message);
            }
            setIsLoading(false);
                } catch (err) {
                   console.log("error");
                   console.log("Data ", err.response.data.message); 
                   console.log("Status ", err.response.status); 
                   setErrortxt(err.response.data.message);
                   ///console.log("Headers ", err.response.headers); 
                   setIsLoading(false);
                 //setError(err.response.data.message || 'Something went wrong, please try again.');
                 //setErrorMessage(err.response.data.message);
                //setIsModalOpen(true);
                }
                if( errortxt!="")
                    handleShow();
            //else end    
              
          
            };
          
          
            const errorHandler = () => {
              //console.log("hi");
              //setError(null);
            };
 
    return (
        <div class="mainleft">
            <h1>Create Category</h1>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
                onSubmit={handelSubmit}
            >
                {/* Fetching a value from input textfirld 
                    in a setname using usestate*/}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicName"
                >
                    <Form.Control
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        type="text"
                        value={name}
                        placeholder="Enter Name"
                        required
                    />
                </Form.Group>
 
                {/* Fetching a value from input textfirld in
                    a setage using usestate*/}
                
               
                
                {/* handing a onclick event in button for
                    firing a function */}
                <Button
                   
                    variant="primary"
                    type="submit"
                    
                >
                    Submit
                </Button>
 
                {/* Redirecting back to home page  */}
                <Link className="d-grid gap-2" to="/">
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
      
         {isLoading && <LoadingSpinner asOverlay />}



 

         <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
             <Modal.Title>Error Message</Modal.Title>
           </Modal.Header>
           <Modal.Body>{errortxt}</Modal.Body>
           <Modal.Footer>
            
             <Button variant="primary" onClick={handleClose}>
               Close
             </Button>
           </Modal.Footer>
         </Modal>
           
           
     </div>
     
    );
}
 
export default CreateCategory;