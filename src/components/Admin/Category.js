import React, { useState, useEffect } from "react";
import { Button, Table,Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Category() {
     const [data, setData] = useState([]);
     const [id, setcId] = useState('');
    const navigate=useNavigate();
    
    let history = useNavigate();
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Function to fetch data using Axios
    const fetchData1 = async () => {
      try {
        handleClose();
        localStorage.setItem("id", "");
        localStorage.setItem("Name", "");
        //const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const response = await axios("http://localhost:5001/api/categorys/list");
        console.log(response.data.categories);
        setData(response.data.categories);
        console.log('A'+data);
        console.log("data"+response.data);
        //console.log("data"+response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    // Call fetchData on component mount
    useEffect(() => {
      fetchData1();
    }, []);
    // You may skip this part if you're
    // using react-context api or redux
    function setID(_id, name) {
        console.log("home"+_id);
        localStorage.setItem("id", _id);
        localStorage.setItem("Name", name);
  
    }
 
    // Deleted function - functionality
    // for deleting the entry
  function  deleted(id) {
       
            setcId(id);
            handleShow();
           
        }
      async function  confirmdeleted() {
        try {
            //setID(id);
            //handleShow();
            //setIsLoading(true);
    
     const response=await axios.delete(`http://localhost:5001/api/categorys/${id}`)
          //const responseData=await response.json();
          console.log(response);
           //setIsLoading(false);
    
          } catch (err) {
             console.log("error");
             console.log("Data ", err.response.data.message); 
             console.log("Status ", err.response.status); 
      
          }
      //else end    
      //history("/");
    fetchData1();
      };
 if(setData.length==0)
 {
    //fetchData();
 }
        // We need to re-render the page for getting
        // the results so redirect to same page.
        
    
 
    return (
        <div>
            <h1>Category</h1>
        
        <div class="mainleft">
    
            <Table className="table-image striped bordered hover" size="sm">
                <thead>
                    <tr>

                        <th>Name</th>
  
                    </tr>
                </thead>
                <tbody>
                    {/* Mapping though every element 
                        in the array and showing the 
                        data in the form of table */}
                    {data.map((category) => {
                        return (
                            <tr>
                               
                                <td>{category.name}</td>
                           
 
                                {/* getting theid,name, and 
                                    age for storing these
                                    value in the jsx with 
                                    onclick event */}
                                <td>
                                    <Link to={`/admin/category/edit-category`}>
                                        <Button
                                            onClick={(e) =>
                                                setID(
                                                    category._id,
                                                    category.name
                                                )
                                            }
                                            variant="info"
                                        >
                                            Update
                                        </Button>
                                    </Link>
                                </td>
 
                                {/* Using thr deleted function passing
                                    the id of an entry */}
                                <td>
                                    <Button
                                        onClick={(e) =>
                                            deleted(category._id)
                                        }
                                        variant="danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
 
            {/* Button for redirecting to create page for
                insertion of values */}
            <Link className="d-grid gap-2" to="/admin/category/create-category">
                <Button variant="warning" size="lg">
                    Create Category
                </Button>
            </Link>
        </div>
        <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
             <Modal.Title>Error Message</Modal.Title>
           </Modal.Header>
           <Modal.Body>Are You Sure You Want To Delete This Record ??</Modal.Body>
           <Modal.Footer>
           <Button  variant="danger" onClick={confirmdeleted}>
               Yes
             </Button>
             <Button variant="primary" onClick={handleClose}>
               No
             </Button>
           </Modal.Footer>
         </Modal>
        </div>
        
    );
}
 
export default Category;