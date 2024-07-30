// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let subject = document.getElementById('subject').value;
//     let message = document.getElementById('message').value;

//     if (!name || !email || !subject || !message) {
//         alert('All fields are required!');
//         return;
//     }

//     if (!validateEmail(email)) {
//         alert('Please enter a valid email address!');
//         return;
//     }

//     alert('Form submitted successfully!');
// });

// function validateEmail(email) {
//     const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return re.test(String(email).toLowerCase());
// }

// // Back to Top Button
// let backToTopBtn = document.createElement('button');
// backToTopBtn.innerHTML = 'Top';
// backToTopBtn.id = 'back-to-top';
// backToTopBtn.style.display = 'none';
// backToTopBtn.style.position = 'fixed';
// backToTopBtn.style.bottom = '20px';
// backToTopBtn.style.right = '20px';
// backToTopBtn.style.padding = '10px 20px';
// document.body.appendChild(backToTopBtn);

// window.addEventListener('scroll', function() {
//     if (window.scrollY > 200) {
//         backToTopBtn.style.display = 'block';
//     } else {
//         backToTopBtn.style.display = 'none';
//     }
// });

// backToTopBtn.addEventListener('click', function() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });















document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        alert('All fields are required!');
        shakeButton();
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        shakeButton();
        return;
    }

    alert('Form submitted successfully!');
    document.getElementById('contact-form').reset();
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('clear-form').addEventListener('click', function() {
    document.getElementById('contact-form').reset();
});

let backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = 'Top';
backToTopBtn.id = 'back-to-top';
backToTopBtn.style.display = 'none';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.padding = '10px 20px';
backToTopBtn.style.backgroundColor = '#20c997';
backToTopBtn.style.color = '#fff';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '5px';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.fontSize = '1rem';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function shakeButton() {
    let sendButton = document.querySelector('button[type="submit"]');
    sendButton.classList.add('shake');
    setTimeout(() => {
        sendButton.classList.remove('shake');
    }, 1000); // Remove the shake class after 1 second
}
