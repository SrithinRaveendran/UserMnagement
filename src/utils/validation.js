export const validateUser = (user) => {
  if (!user.firstName || !user.lastName || !user.email || !user.department) {
    return "All fields are required";
  }
  if (!/\S+@\S+\.\S+/.test(user.email)) {
    return "Invalid email format";
  }
  return "";
};
