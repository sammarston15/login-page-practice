const database = [
    {
     firstName: 'Jayson',
     lastName: 'Parker',
     username: 'jayn9c',
     password: 'secrets'
    },
    {
     firstName: 'Jessica',
     lastName: 'Linch',
     username: 'jeslinch',
     password: '123'
    },
    {
     firstName: 'Grayson',
     lastName: 'Parker',
     username: 'littleman',
     password: '321'
    }
 ]
 
 
 
 function handleSubmit() {
     const usernameElement = document.getElementById('username');
     const passwordElement = document.getElementById('password');
   
     const username = usernameElement.value;
     const password = passwordElement.value;
   
     // get user by username
     const foundUser = database.find(function(user) {
       return user.username.trim().toLowerCase() === username.trim().toLowerCase()
     })
   
     if (!foundUser) {
       alert('username or password is incorrect')
     }
   
     // compare password. Does the password match?
     if (foundUser.password !== password) {
       alert('username or password is incorrect')
     } else {
       alert(`Welcome, ${foundUser.firstName} ${foundUser.lastName}`)
     }
   
   }