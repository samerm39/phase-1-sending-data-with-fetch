function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const id = data.id;
        document.body.innerHTML = `<p>${id}</p>`;
      })
      .catch(error => {
        document.body.innerHTML = `<p>${error.message}</p>`;
      });
  }
  