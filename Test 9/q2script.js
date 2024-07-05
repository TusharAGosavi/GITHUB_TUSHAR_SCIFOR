
document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('https://dummyjson.com/users/1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerHTML = `
                <h2>User Data</h2>
                <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Address:</strong> ${data.address.city}, ${data.address.state}</p>
            `;
        })
        .catch(error => {
            document.getElementById('output').textContent = 'Error loading data';
            console.error('Error:', error);
        });
});
