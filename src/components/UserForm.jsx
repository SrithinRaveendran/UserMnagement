import React, { useState, useEffect } from "react";
import { validateUser } from "../utils/validation";

function UserForm({ user, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validateUser(formData);
    if (err) {
      setError(err);
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
      <button type="submit">{user ? "Update" : "Add"}</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
}

export default UserForm;
