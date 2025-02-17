// Filename - Edit.js
import React, { useEffect, useState } from "react";
import { Button, Form,Table,Modal  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function EditCategory() {
	// Here usestate has been used in order
	// to set and get values from the jsx
	const [name, setname] = useState("");
	const [id, setid] = useState("");
	const [data, setData] = useState([]);
	const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
	const [show, setShow] = useState(false);
	// Used for navigation with logic in javascript
	let history = useNavigate();
const navigate=useNavigate();
	const handelSubmit =async (event) => {
		event.preventDefault();
          
       handleShow();
              
                
                try {
    
          console.log("id"+id);
           const response=await axios.put(`http://localhost:5001/api/categorys/${id}`,
                    {
                      name
                    }
                  )
  
                //console.log(response);
          
                //setIsLoading(false);
          navigate("/admin/category");
                } catch (err) {
                   console.log("error");
                   console.log("Data ", err.response.data.message); 
                   console.log("Status ", err.response.status); 
                   ///console.log("Headers ", err.response.headers); 
                   //setIsLoading(false);
                 //setError(err.response.data.message || 'Something went wrong, please try again.');
                 //setErrorMessage(err.response.data.message);
                //setIsModalOpen(true);
                }
            //else end    
              
          
            };
          
          
            const errorHandler = () => {
              //console.log("hi");
              //setError(null);
            };

	// Useeffect take care that page will
	// be rendered only once

	// const fetchData = async () => {
    //     //const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //     const response = await axios("http://localhost:5001/api/categorys/list");
          
    //     // setname(response.name);
    //     // setdescription(response.description);
    //     setData(response.data);
    //     // console.log(setData);

    //     console.log(response.data);
    //  }
     useEffect(() => {
		//localStorage.getItem("id");
		setname(localStorage.getItem("Name"));
		setid(localStorage.getItem("id"));
        //fetchData();
    }, []);

	return (
		<div class="mainleft">
			<h1>Edit Category</h1>
			<Form
				className="d-grid gap-2"
				style={{ margin: "5rem" }}
			>
				
				<Form.Group
					className="mb-3"
					controlId="formBasicEmail"
				>
					<Form.Control
						value={name}
						onChange={(e) =>
							setname(e.target.value)
						}
						type="text"
						placeholder="Enter Name"
					/>
				</Form.Group>
				

				{/* Hadinling an onclick event 
					running an edit logic */}
				<Button
					onClick={(e) => handelSubmit(e)}
					variant="primary"
					type="submit"
					size="lg"
				>
					Update
				</Button>

				
				
			</Form>
			
		</div>
	);
}

export default EditCategory;
