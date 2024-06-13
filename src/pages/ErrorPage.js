import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage  = () => {
    const [address, setAddress] = useState({
      name: '',
      streetName: '',
      pinCode: '',
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setAddress({ ...address, [name]: value });
    };
  
    const validate = () => {
      const newErrors = {};
      if (!address.name) newErrors.name = 'Name is required';
      if (!address.streetName) newErrors.streetName = 'Street Name is required';
      if (!address.pinCode) newErrors.pinCode = 'Pin Code is required';
  
      return newErrors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        setErrors({});
        alert('Order placed successfully');
        console.log('Address details:', address);
      }
    };
  
    return (
      <section id="address_detail" style={{ padding: '40px 0' }}>
        <div
          className="container"
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="address_detail_content">
            <h1
              style={{
                textAlign: 'center',
                marginBottom: '20px',
                fontSize: '1.5em',
                color: '#333',
              }}
            >
              Add Address Details
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={address.name}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1em' }}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Street Name</label>
                <input
                  type="text"
                  name="streetName"
                  value={address.streetName}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1em' }}
                />
                {errors.streetName && <p className="error">{errors.streetName}</p>}
              </div>
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Pin Code</label>
                <input
                  type="text"
                  name="pinCode"
                  value={address.pinCode}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1em' }}
                />
                {errors.pinCode && <p className="error">{errors.pinCode}</p>}
              </div>
              <button
                type="submit"
                style={{ width: '100%', padding: '10px 0', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1em', cursor: 'pointer', marginTop: '10px' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;