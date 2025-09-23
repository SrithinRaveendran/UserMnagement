import React, { useState } from "react";
import "./styles/main.css";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import Pagination from "./components/Pagination";
import SearchFilter from "./components/SearchFilter";
import useUsers from "./hooks/useUsers";

function App() {
  const {
    users,
    loading,
    error,
    addUser,
    updateUser,
    deleteUser,
    searchUsers,
    sortUsers,
    filterUsers,
  } = useUsers();

  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setEditingUser(null);
    setShowForm(true);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const handleSubmit = (data) => {
    if (editingUser) {
      updateUser(editingUser.id, data);
    } else {
      addUser(data);
    }
    setShowForm(false);
  };

  return (
    <div className="container">
      <h1>User Management Dashboard</h1>
      <SearchFilter onSearch={searchUsers} onFilter={filterUsers} onSort={sortUsers} />
      <button onClick={handleAdd}>Add User</button>
      {loading && <p>Loading users...</p>}
      {error && <p className="error">{error}</p>}
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      <Pagination />
      {showForm && (
        <div className="form-container">
          <UserForm
            user={editingUser}
            onClose={() => setShowForm(false)}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}

export default App;
