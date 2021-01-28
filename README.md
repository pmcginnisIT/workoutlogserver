# workoutlogserver
BlueBadgeWorkout Log Server



/user/register	POST	Allows a new user to be created with a username and password.
https://user-images.githubusercontent.com/73722071/106084375-41f42600-60ec-11eb-9a26-c246727e58d5.JPG

/user/login	POST	Allows log in with an existing user.
https://user-images.githubusercontent.com/73722071/106084446-605a2180-60ec-11eb-9ac6-bd488745d646.JPG

/log/	POST	Allows users to create a workout log with descriptions, definitions, results, and owner properties.
https://user-images.githubusercontent.com/73722071/106084481-6d771080-60ec-11eb-846b-bea9f99ca0c4.JPG


/log/	GET	Gets all logs for an individual user.
https://user-images.githubusercontent.com/73722071/106084500-78ca3c00-60ec-11eb-9b85-08f0f16abc35.JPG


/log/:id	GET	Gets individual logs by id for an individual user.
https://user-images.githubusercontent.com/73722071/106084514-8089e080-60ec-11eb-8ce4-c970c0f036f8.JPG

/log/:id	PUT	Allows individual logs to be updated by a user.
https://user-images.githubusercontent.com/73722071/106084534-88498500-60ec-11eb-9bbf-20a4082555d5.JPG


/log/:id	DELETE	Allows individual logs to be deleted by a user.
https://user-images.githubusercontent.com/73722071/106084553-8f709300-60ec-11eb-9899-72a49d3f2dfb.JPG
