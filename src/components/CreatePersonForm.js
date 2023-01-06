import React from "react";

export default function CreatePersonForm() {

    const [formData, setFormData] = React.useState({
        firstName: "",
        email: "",
        address: "",
        readyToJoin: false,
        gender: "male",
        color: "Yellow"
    });

    function handleChange(event) {
        
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {...prevFormData,
            [name] : type === "checkbox" ? checked: value
        }
        });
    }

    function submitData(event) {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <form className="mt-3">
            <div className="mb-3">
                <label for="firstName" className="form-label">First Name</label>
                <input type="input" onChange={handleChange} value= {formData.firstName} name="firstName" className="form-control" id="firstName" placeholder="First Name" />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" name="email" onChange={handleChange} value={formData.email}  className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="address" class="form-label">Address</label>
                <textarea className="form-control" onChange={handleChange} value= {formData.address} name="address" id="address" rows="3"></textarea>
            </div>
            <div className="mb-3">
            <input className="form-check-input" onChange={handleChange} checked={formData.readyToJoin} name="readyToJoin" type="checkbox"  id="readyToJoin" />
            <label className="form-check-label" htmlFor="readyToJoin">
                Ready to join us?
            </label>
            </div>
            <div className="mb-3">
            <input className="form-check-input" onChange={handleChange} checked={formData.gender === "male"} value="male" name="gender" type="radio"  id="maleRadio" />
            <label className="form-check-label" htmlFor="maleRadio">
                Male
            </label>
            <input className="form-check-input" onChange={handleChange} checked={formData.gender === "female"} value="female" name="gender" type="radio"  id="femaleRadio" />
            <label className="form-check-label" htmlFor="femaleRadio">
                Female
            </label>
            </div>
            <div className="mb-3">
                <label htmlFor="color" class="form-label">Select Color</label>
                <select className="form-select" name="color" id="color" value={formData.color} onChange={handleChange}>
                    <option value="">----Color----</option>
                    <option value="Red">Red</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Green">Green</option>
                </select>
            </div>
            <div className="mb-3">
               <button className="btn btn-primary" onClick={submitData}>Submit</button>
            </div>
        </form>
    );
}