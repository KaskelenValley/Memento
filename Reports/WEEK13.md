# Adil Akhmetov

This week I created a new deployment for a translator service. Along with this I worked on mood tracker service deployment as Heroku was not suitable for this because Heroku slugs are 500 MB max which is not enough for over 800 MB model. So, first, I tried with AWS EC2 Free tier version but it also was not sufficient because of only 1 GB RAM. Then, I tried to buy a droplet on Digital Ocean and it helped, but I needed more RAM since it appeared that pytorch creates default weights which takes another 800+ MB. But I found out a lifehack for this and just created swap file instead of buying another machine. Also I created apps for the production release.

# Madiyar Mukushev

I upgraded YandexSpeechKit from v2 to v3, for this I had to rewrite methods, configurations, etc. The main reason for switching to a newer version was the appearance of punctuator in the API.
At the same time I created a new microservice in Python for text translation. I used the Google Translate API and I made it a separate microservice so that it would be independent of the failure of other services. The microservice was written in web framework FastAPI, with field validations.
I also created a separate microservice, also in Python and FastAPI, to generate quotes and random pictures. This is needed for the main page in the PWA application. The quote generator returns the quote and also the author. The picture generator returns a random picture with specified parameters. There are three parameters: height, width and blur.s

# Balzhan Jumabekova

This week I have been working on research based on current health problems in Kazakhstan. I have collected essential statistics in order to use it in motivation part. There were plenty of related information and I had to opt for right and proper one. In addition, I have read about the difference between motivation and state of the research problem in order to describe them correctly. I have also added some aims and objectives for dissertation. In general, I have been working on the 1st chapter.

# Timur Demenov

This week I was working on finalizing the front-end part of our application. Authorization was slightly redesigned and it was decided to replace Facebook authorization with Twitter. Also on the main page, interface changes were added: new icons, dynamic cards and a calendar. The process of adding gratitude has been moved to a separate interface, where you can also add a photo. Regarding the profile page: everything is ready, the user is defined and it remains only to finalize a couple of things from the design side

# Aruzhan Makhmutova

I worked on the "mood tracker", "profile and settings", and "record statistics" sections. When developing the design, I worked through all of the user transitions from screens in advance, relying on heuristics and interaction patterns. I thought through the main pages and additional functionality, such as daily record reminders and mood definitions for each record by text. I made the functionality wireframes and developed the ui portion of the pages to fit our existing design, using the ui kit and style guide. In the process, there were corrections from the developers and bugs were identified as a result of testing the app with the project manager on a group of people with our target audience. Work is currently underway to improve the user experience of our design.
