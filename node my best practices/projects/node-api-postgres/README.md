npm init -y
npm i express pg


//Add a new user with the name Elaine and email elaine@example.com.
curl --data "name=Elaine&email=elaine@example.com" http://localhost:3000/users

//Update the user with id 1 to have the name Kramer and email kramer@example.com.
curl -X PUT -d "name=Kramer" -d "email=kramer@example.com" http://localhost:3000/users/1


//Delete the user with id 5.
curl -X "DELETE" http://localhost:3000/users/5
