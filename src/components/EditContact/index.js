import React, { useEffect, useState,useRef } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import { useDispatch , useSelector } from "react-redux";
import { UPDATE_CONTACT } from "../../redux/reducers/contactReducer";

const EditContact = ({updateContact}) => {
  
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const contacts = useSelector(state => state)
  
  const currentContact =useRef(Object.values(contacts.contactReducer).filter(contact=>
    
    contact.id === parseInt(id)
    ))
    console.log(currentContact)
  
 
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [phone, setPhone] = useState("");
    
  useEffect(() => {
    setName(currentContact.current[0].name);
    setAuthor(currentContact.current[0].author);
    setPhone(currentContact.current[0].phone);
  }, [currentContact]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
   

    // if (!email || !name || !phone) {
    //   return toast.warning("Please fill in all fields!!");
    // }
   

    const data = {
      id: currentContact.current[0].id,
      author,
      name,
     
    };
    console.log(name)
    

    updateContact(data);
    toast.success("Quotes updated successfully!!");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => {
                    console.log(e.target.value)
                    setName(e.target.value)}
                  }
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={author}
                  placeholder={"Email"}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              {/* <div className="form-group">
                <input
                  className="form-control"
                  value={phone}
                  placeholder={"Phone"}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div> */}
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update quote
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch(UPDATE_CONTACT(data));
  },
});

export default connect(null, mapDispatchToProps)(EditContact);
