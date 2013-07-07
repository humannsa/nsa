Trainer Signup:
-------------------------
POST email, password, password_confirm
Look up user by email in Trainers node
if user exists then return "No way, honkey!"
else
  create new Trainer with email, salt, password_hash
  create new session object and put session.id in cookie
  redirect user to /home or /clients

Trainer Login:
-------------------------
POST email, password
Look up user by email in Trainers node
Hash POST password and compare password_hash to user.password_hash
If password_hash === user.password_hash then create new session object and put session.id in cookie
else return "No way, honkey!!" with a 404(?) status

Client Login:
-------------------------
POST email, password
Look up user by email in Clients node
Hash POST password and compare password_hash to user.password_hash
If password_hash === user.password_hash then create new session object and put session.id in cookie
else return "No way, honkey!!" with a 404(?) status

Trainer Invite Client:
-------------------------
POST email address (invitee.email)
Create invite object with ID, user email, and unique identifying hash (for obscure URL)
Retrieve the hash of created invite object and send an email to invite.email with a url in the form:
  http://nsa.heroku.com/join?invite=<UNIQUE_HASH>
Show list of pending invites or redirect trainer to /clients page





