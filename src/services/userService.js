const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch users");
  const data = await res.json();
  return data.map((u) => ({
    id: u.id,
    firstName: u.name.split(" ")[0],
    lastName: u.name.split(" ")[1] || "",
    email: u.email,
    department: "IT",
  }));
};

export const createUser = async (user) => {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Failed to create user");
  return await res.json();
};

export const updateUserService = async (id, user) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Failed to update user");
  return await res.json();
};

export const deleteUserService = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete user");
  return true;
};
