import { useState, useEffect } from "react";
import { fetchUsers, createUser, updateUserService, deleteUserService } from "../services/userService";
import { sortByKey } from "../utils/sort";

function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Failed to load');
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (user) => {
    const newUser = await createUser(user);
    setUsers((prev) => [...prev, { ...user, id: newUser.id }]);
  };

  const updateUser = async (id, user) => {
    await updateUserService(id, user);
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...user } : u)));
  };

  const deleteUser = async (id) => {
    await deleteUserService(id);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const searchUsers = (query) => {
    if (!query) {
      loadUsers();
    } else {
      setUsers((prev) => prev.filter((u) => u.firstName.toLowerCase().includes(query.toLowerCase())));
    }
  };

  const filterUsers = (department) => {
    if (!department) {
      loadUsers();
    } else {
      setUsers((prev) => prev.filter((u) => u.department === department));
    }
  };

  const sortUsers = (key) => {
    setUsers((prev) => sortByKey(prev, key));
  };

  return { users, loading, error, addUser, updateUser, deleteUser, searchUsers, filterUsers, sortUsers };
}

export default useUsers;
