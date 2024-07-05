document.getElementById('ajaxButton').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dummyjson.com/products/1', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.getElementById('output').innerHTML = `
                <h2>Product Data</h2>
                <p><strong>Title:</strong> ${data.title}</p>
                <p><strong>Description:</strong> ${data.description}</p>
                <p><strong>Price:</strong> $${data.price}</p>
            `;
        } else {
            document.getElementById('output').textContent = 'Error loading data';
        }
    };
    xhr.send();
});
