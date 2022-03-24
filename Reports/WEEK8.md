# Adil Akhmetov
Due to some reasons, our deployed services go to sleep to save our dynos (specific heroku currency). That's why I did some research about heroku dynos. Unfortunately, only hobby tier dynos are available for us. Then I tried another approach —heroku scheduler and it seems to work okay. Started working on a service that uploads audio to the store.

# Timur Demenov
This week I added more basic display components. Then I connected firebase to our project and through it added authorization through a phone number with the ability to verify the code that is sent to the phone number. Further, it is also planned to add new components and work on the main page.

# Aruzhan Makhmutova
This week I worked on additional screens, such as error screens, new action screens and their different states, etc. We also decided on the visual part of the mobile app design from all the options presented. I collected references for further design of the "sound recording" pages.

# Madiyar Mukushev
I made a demo version in Node.js of streaming recognition in order to test the functionality and further understand the development of this service. The service takes an LPCM audio file and splits it into small parts. The parts it sends to the yandex server and gets a response. I have developed the principle of further work of our service, we will have a separate server and a client on gRPC with streaming. The frontend will send the chunks (small audio parts) to my service, and this service will send them to the Yandex server with the necessary preprocessing.

# Balzhan Jumabekova
This week I have checked our MVP and conducted ux-test in order to identify bugs during onboarding. Also I have set deadlines for mvps and started research on overleaf tool. Recently I have held meeting with the team to detect problems during their work and solve them in a proper way.