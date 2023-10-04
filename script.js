function loadComponent(component) {
    fetch(component)
        .then(response => response.text())
        .then(data => {
            document.getElementById('component-container').innerHTML = data;
        });
}

function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(`toggle${inputId}`);
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        toggleIcon.textContent = "👁️";
    }
}
// Example POST request to send data to the backend
const requestData = {
    username: 'user',
    password: 'password',
  };
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  
  fetch('https://BASE_URL/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData), 
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      
      console.log(data);
    })
    .catch(error => {
      
      console.error('There was a problem with the fetch operation:', error);
    });
    fetch('https://BASE_URL/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData), 
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          
          console.log(data);
        })
        .catch(error => {
          
          console.error('There was a problem with the fetch operation:', error);
        });
      