const database = [
    {
        firstName: 'Sam',
        lastName: 'Marston',
        username: 'sammarston15',
        password: 'password',
    },
    {
        firstName: 'Jerry',
        lastName: 'Davis',
        username: 'jdavis',
        password: 'jerry',
    },
    {
        firstName: 'Nathan',
        lastName: 'Johnson',
        username: 'njohnson',
        password: 'nathan',
    }
]

function handleSubmit() {
    const usernameElement = document.getElementById('username');
    const passwordElement = document.getElementById('password');

    const username = usernameElement.value;
    const password = passwordElement.value;

    const foundUser = database.find(function(user) {
        return user.username.trim().toLowerCase() === username.trim().toLowerCase();
    });

    if (!foundUser) alert('incorrect username or password');

    if (foundUser.password === !password) {
        alert('incorrect username or password');
    } else {
        alert(`Welcome, ${foundUser.firstName} ${foundUser.lastName}, you are now logged in!`)
    }

}