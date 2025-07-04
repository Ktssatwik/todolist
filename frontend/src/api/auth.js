export const loginUser = async ({ username, email, password }) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    });

    return await res.json();
  } catch (err) {
    console.error("Registration error:", err);
    return { success: false, message: "Server error. Try again later." };
  }
};
