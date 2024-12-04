import React, { useState } from "react";

const PosterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", age: "", description: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", age: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default PosterForm;
