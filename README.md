## Get Started
Create a directory,Cd into that directory and type the code:
npm init
Follow the instructions and fill in where necessary.
Then make a new file,let that file be an html file,also
create a javascript file where you Api will reside.

##Notes
If this repo is cloned,it wont run because its a tutorial repo for understanding socket.io.Thanks

## Updates 
Enter my repo in the api.js file,i did a simple 'hello world' with express 
server and socket.io.Added a script source to socket.io in my index.html.

## Event handler
Going back to the api.js file,you will observe how i handled both a default Event and a Custom event.I also used the 'emit event' from the client,an emit function on the socket object in index.html file.

## Sending Broadcast
We are going to be using 'io.sockets.emit' function to send broadcast to connected clients as illustrated 
in my api.js file. All these changes are commented to enable programmers find ways around the code.
Also edited the index.html file(comment will direct you).
  New client was also added and broadcasted to..the comments on both api.js and index.html should guide you hopefully.


