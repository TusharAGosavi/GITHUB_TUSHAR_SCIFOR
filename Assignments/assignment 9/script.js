// Function to load data using AJAX
document.getElementById('ajaxButton').addEventListener('click', function() {
    
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://dummyjson.com/products/1', true);
    
    xhr.send();
    
    xhr.onload = function() {
        if (xhr.status === 200) { 
            // Parse the JSON response
            const data = JSON.parse(xhr.responseText);
            // Display the data
            document.getElementById('output').innerHTML = `
                <h2>AJAX Data</h2>
                <p>Title: ${data.title}</p>
                <p>Description: ${data.description}</p>
            `;
        } else {
            // If the request was not successful, display an error message
            document.getElementById('output').textContent = 'Error loading data with AJAX';
        }
    };
    
    // Handle network errors
    xhr.onerror = function() {
        document.getElementById('output').textContent = 'Network error';
    };
});



// Function to load data using Fetch API
document.getElementById('fetchButton').addEventListener('click', function() {
    // Fetch data from the API
    fetch('https://dummyjson.com/products/1')
        .then(response => response.json()) // Parse the JSON from the response
        .then(data => {
            // Display the data
            document.getElementById('output').innerHTML = `
                <h2>Fetch API Data</h2>
                <p>Title: ${data.title}</p>
                <p>Description: ${data.description}</p>
            `;
        })
        .catch(error => {
            // If an error occurs, display an error message
            console.error('Error:', error);
            document.getElementById('output').textContent = 'Error loading data with Fetch API';
        });
});
