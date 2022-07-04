import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { useDispatch , useSelector } from "react-redux";
import { ADD_CONTACT } from "../../redux/reducers/contactReducer";
import { constant } from "lodash";

const AddPost = ({  addContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const {contactReducer} =useSelector(state => state)
  const contacts = useSelector(state => state)
  console.log(contacts)
 
  const dispatch = useDispatch();


  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.keys(contacts).length!=0){
    

    const checkContactEmailExists =Object.values(contacts).filter(contact=>
      contact.email === email ? contact : null
      
      )


     
  
    const checkContactPhoneExists = Object.values(contacts).filter((contact) =>
      contact.phone === phone ? contact : null
    );

    if (!email || !name || !phone) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error("This phone number already exists!!");
    }
  }
  console.log(name ,"----");
    const data = {
      id:  Date.now(),
      email,
      name,
      phone,
    };

    dispatch( ADD_CONTACT(data) );
    toast.success("Contact added successfully!!");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   contacts: state,
// });


export default AddPost;
