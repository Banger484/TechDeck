const registerFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-register").value.trim();
  const password = document.querySelector("#password-register").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      return document.location.replace("/api/recipes");
    } else {
      return console.error("Invalid Username or Password!");
    }
  }
};

document
  .querySelector(".register-form")
  .addEventListener("submit", registerFormHandler);
