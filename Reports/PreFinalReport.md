- [Week 3](#week-3)
	- [Madiyar Mukushev](#madiyar-mukushev)
	- [Timur Demenov](#timur-demenov)
	- [Adil Akhmetov](#adil-akhmetov)
	- [Balzhan Jumabekova](#balzhan-jumabekova)
	- [Aruzhan Makhmutova](#aruzhan-makhmutova)
- [Week 4](#week-4)
	- [Adil Akhmetov](#adil-akhmetov-1)
	- [Timur Demenov](#timur-demenov-1)
	- [Madiyar Mukushev](#madiyar-mukushev-1)
	- [Balzhan Jumabekova](#balzhan-jumabekova-1)
	- [Aruzhan Makhmutova](#aruzhan-makhmutova-1)
- [Week 5](#week-5)
	- [Adil Akhmetov](#adil-akhmetov-2)
	- [Timur Demenov](#timur-demenov-2)
	- [Madiyar Mukushev](#madiyar-mukushev-2)
	- [Balzhan Jumabekova](#balzhan-jumabekova-2)
	- [Aruzhan Makhmutova](#aruzhan-makhmutova-2)
- [Week 6](#week-6)
	- [Adil Akhmetov](#adil-akhmetov-3)
	- [Timur Demenov](#timur-demenov-3)
	- [Madiyar Mukushev](#madiyar-mukushev-3)
	- [Aruzhan Makhmutova](#aruzhan-makhmutova-3)
	- [Balzhan Jumabekova](#balzhan-jumabekova-3)
- [Week 7](#week-7)
	- [Adil Akhmetov](#adil-akhmetov-4)
	- [Aruzhan Makhmutova](#aruzhan-makhmutova-4)
	- [Balzhan Jumabekova](#balzhan-jumabekova-4)
	- [Madiyar Mukushev](#madiyar-mukushev-4)
	- [Timur Demenov](#timur-demenov-4)
- [Week 8](#week-8)
	- [Adil Akhmetov](#adil-akhmetov-5)
	- [Timur Demenov](#timur-demenov-5)
	- [Aruzhan Makhmutova](#aruzhan-makhmutova-5)
	- [Madiyar Mukushev](#madiyar-mukushev-5)
	- [Balzhan Jumabekova](#balzhan-jumabekova-5)
- [Week 9](#week-9)
	- [Adil Akhmetov](#adil-akhmetov-6)
	- [Timur Demenov](#timur-demenov-6)
	- [Madiyar Mukushev](#madiyar-mukushev-6)
	- [Aruzhan Makhmutova](#aruzhan-makhmutova-6)
	- [Balzhan Jumabekova](#balzhan-jumabekova-6)
- [Week 10](#week-10)
	- [Adil Akhmetov](#adil-akhmetov-7)
	- [Aruzhan Makhmutova](#aruzhan-makhmutova-7)
	- [Balzhan Jumabekova](#balzhan-jumabekova-7)
	- [Madiyar Mukushev](#madiyar-mukushev-7)
	- [Timur Demenov](#timur-demenov-7)
- [Week 11](#week-11)
	- [Adil Akhmetov](#adil-akhmetov-8)
	- [Balzhan Jumabekova](#balzhan-jumabekova-8)
	- [Madiyar Mukushev](#madiyar-mukushev-8)
	- [Timur Demenov](#timur-demenov-8)
	- [Aruzhan Makhmutova](#aruzhan-makhmutova-8)
- [Week 12](#week-12)
	- [Adil Akhmetov](#adil-akhmetov-9)
	- [Aruzhan Makhmutova](#aruzhan-makhmutova-9)
	- [Balzhan Jumabekova](#balzhan-jumabekova-9)
	- [Madiyar Mukushev](#madiyar-mukushev-9)
	- [Timur Demenov](#timur-demenov-9)
- [Week 13](#week-13)
	- [Adil Akhmetov](#adil-akhmetov-10)
	- [Madiyar Mukushev](#madiyar-mukushev-10)
	- [Balzhan Jumabekova](#balzhan-jumabekova-10)
	- [Timur Demenov](#timur-demenov-10)
	- [Aruzhan Makhmutova](#aruzhan-makhmutova-10)
- [Week 14](#week-14)
	- [Adil Akhmetov](#adil-akhmetov-11)
	- [Balzhan Jumabekova](#balzhan-jumabekova-11)
	- [Aruzhan Makhmutova](#aruzhan-makhmutova-11)
	- [Madiyar Mukushev](#madiyar-mukushev-11)
	- [Timur Demenov](#timur-demenov-11)
- [Week 15](#week-15)
	- [Adil Akhmetov](#adil-akhmetov-12)
	- [Balzhan Jumabekova](#balzhan-jumabekova-12)
	- [Aruzhan Makhmutova](#aruzhan-makhmutova-12)
	- [Madiyar Mukushev](#madiyar-mukushev-12)
	- [Timur Demenov](#timur-demenov-12)

# Week 3

## Madiyar Mukushev

- Created user stories
- Added risks and non-functional requirements to the documentation

## Timur Demenov

- Created Sitemap section
- Created Pages/Activities Section
- Updated User Stories section

## Adil Akhmetov

This week I configured the mirror repo with a help of Github Actions. For this I used custom action from marketplace called "Repository mirroring action". This action required me to generate SSH keys and basically what it does is trigger on any action like push delete and pushes it to charming hamsters repo. Of course, `SSH_PRIVATE_KEY`, `USERNAME` and `REPO_NAME` are hidden in the repo secrets. I have to mention that I also tried to hide the `REPO_NAME` in the main condition, but it appeared that it is not possible to get access to `secrets` in `if` statement. Plus, I updated the main README file and included "Project Description", "Technologies" and "Goals" parts. In the "Technologies" part the stack is still under consideration since there might be more suitable technology for the specific case.

## Balzhan Jumabekova

- Created user personas
- Provided market research
- Provided competitor analysis
- Created low fidelity prototypes
- Updated Future iterations

## Aruzhan Makhmutova

- Provided design research
- Updated user personas and user stories
- Updated sitemaps and wireframes

Meeting recording: https://www.youtube.com/watch?v=ffjNIcaJ5d4

# Week 4

## Adil Akhmetov
  
This week I mostly research Docker and how to use Docker in CD at Heroku. It appeared that Heroku provides `container` stack for its apps so I decided to go on with it. I tried different approaches like connecting Github repo to Heroku pipeline (that's why I decided to mirror the repo), but unfortunately, it appeared that it's quite tricky in monorepo (which this repo is). There is a custom buildpack for it which declares different folders to extract to code at, but again, it triggers deployment on all the apps on any commit even if this commit doesn't touch the provided folder. So, I came up with the easiest and simpliest solution, let's say following the KISS pattern, which is just hold all CI&CD on Github Action and deploy to Heroku. Also, I added more information in the main README file.

## Timur Demenov

- Research PWA on mobile
- Build test app
- Explore methods for managing audio streaming in a web application

## Madiyar Mukushev

- Research sentiment analysis algorithm
- Test SpeechKit API
- Explore data for sentimental analysis model

## Balzhan Jumabekova

- Conducted research on possible agile methodologies
- Composed questions for customer development
- Conducted a stand-up on the final revisions of the project idea and planned the following tasks for the team

## Aruzhan Makhmutova

- Conducted research on possible audio journaling apps' design
- Created the conception about logo of the app
- Conducted research on possible design tools

# Week 5

## Adil Akhmetov

![image](https://user-images.githubusercontent.com/48881444/156602630-055e1502-1813-412d-bb58-62e86d195d8c.png)
 
This week I was busy with tge researching of the tech stack and cloud services. Also, as a perfectionist I wanted us to follow best practices. So, we decided to have a PWA on our front which will let us to deliver the app on any device. We also revised React Native (but I cannot code on it since I don't have Mac), Flutter (noone in our team know Dart), Xamarin (same, we do not know C#) and eventually PWA was the best approach here. The web site will be on Next JS which will give us SEO support and SSR (which will of course minimize the bundle size). For the backend part we decided to stop on three services for now which are Auth service, Main service and SRS. Auth service will let us basically to use Auth 2.0 across of all our microservices with JWT. Main service will support the main logic part. And SRS (Speech Recognition Service) will be the bridge between us and Yandex Speechkit, it will take our data and give us back the result in a way that we want. For saving the auth data we chose PostgreSQL on Heroku (which offers one free connection) and AWS S3 for holding static binary files like audio recordings. I already registered in these services and got Pro account on Heroku and FreeTier machines in AWS.

## Timur Demenov

- initialized the project with a specific tech stack
- defined the flow of data exchanges
- tried to connect to the backend
- set up speech recognition in the application

## Madiyar Mukushev

- Found the most suitable framework for the project - FastAPI
- Created poetry environment with necessary libraries
- Researched Yandex SpeechKit Documentation
- Tested SpeechKit API with simple curl requests
- Developed simple application using FastAPI

## Balzhan Jumabekova

![image](https://user-images.githubusercontent.com/48881444/156602551-d25dab62-b807-4535-a1a8-10fdc87190b7.png)

- Found 2 respondents for customer development in order to search for some insights and new ideas

- Created a list of qustions for interview based on tips from "The mom test" book (https://docs.google.com/document/d/1bxbYIeCK_IvK0GwQUItFhtnjSoPjDfD778IW66IQGBQ/edit?usp=sharing)

- Conducted customer development and recorded it

- Held stand-ups (https://youtu.be/dha8m2Irlow)

- Set up jira for sprints

The rest tasks from my plan will be completed on Friday and weekends.

## Aruzhan Makhmutova

- Gathered a mudboard and references for the design of the app
- Created a brand book for our app, with colors, fonts and style
- Made a jtbd / userstory for the app design
- Studied competitor designs of similar apps
- Createed medium fidelity prototype (wireframes)
- Made a product logo

# Week 6

## Adil Akhmetov

This week I was working on preparing the repo for CI&CD. In the previous weeks I was still experimenting on the stuff the successfully deliver the code to CD from our monorepo which as I said is tricky. I came up with an idea of delivering the code to Heroku register through Github Actions. So, the solution is quite easy, we trigger on changes in the respective folders in `Project` folder then with a help of `git subtree` we slice the repo and push **only**  the folder with the code to Heroku register. Thus, Heroku thinks that the subtree is a whole repo itself and then deploys the containter. Of course, for this to work you have to have following workflows and Dockerfiles. Hence, I configured Dockerfiles for PWA app and Python microservice. At the end I want to say that unfortunately we decided to move from Heroku Postgre and PostgreSQL itself and stop on MongoDB which is a NoSQL solution helping us to not establish the scheme and it offers free deploy on mongo.com letting us more than 1 concurrent connection. 

## Timur Demenov

- Research Web Audio API
- Investigated the compatibility of the application with mobile browser clients
- Set up synchronous file transfer from frontend to backend

## Madiyar Mukushev

- Make synchronous voice recognition endpoint
- Research gRPC
- Research Streaming Voice Recognition gRPC API in Yandex SpeechKit

## Aruzhan Makhmutova

- Develop an application prototype using data from custdev
- created the ux part of the design
- implemented the logo on the pages
- approved the ux part of our app
- corrected some bugs in the prototype

## Balzhan Jumabekova

- Analysed the information received from the customer development (https://miro.com/app/board/uXjVOHuA2Gs=/?invite_link_id=19419686422)
- Created lean canvas of Journify app (competitor analysis)
- Highlighted their unique selling proposition
- Identified key metrics for similar applications (NPS, DAU, MAU, WAU)
- Highlighted the hidden advantages of competitive applications
- Held sprint review and retrospective (https://youtu.be/aGAU258eFNI)

# Week 7

## Adil Akhmetov

This week I started researching Yandex Speechkit v3 since we decided to use Node.js for asynchronous speech recognition service. I worked on the template backend on Node.js and now we have to solve the problem with `pcm` audio format which the Yandex Speechkit requires to send. Also, I registered aws account and created a necessary bucket. Yeah, I've said earlier that we use FreeTier but now, I need more researching about the aws bills since it possibly may cost a lot for our team. Also, our team decided to not write an Auth Service and move on from MongoDB because there is a better solution called Firebase which will let us to store the data, auth apps from different social networks and in future support push notifications.

## Aruzhan Makhmutova

This week, I conducted a competitive analysis of the app based on user experience and functionality. Developed detailed mobile app wireframes for the Splash screen, OnBoarding, and Registration sections.
Also, after discussing with the team the possible options of colors, mudboard, references, and deciding on the design based on this, I created several options for the design of the home page

## Balzhan Jumabekova

This week I added new features to the backlog, but since we are building the wireframe, the features from the custdev are at the bottom in order of priority. We also discussed with the designer possible color options for the future application. Together with the team leader, we discussed the reasons for a slight stagnation, and also changed the product development strategy, revising the goals. I also started researching the material regarding the thesis.

## Madiyar Mukushev

It was decided to use Node.js as the language for streaming speech recognition. This is necessary in order to have less delay. But synchronous recognition will remain in python, because a delay of a couple of tens of milliseconds is not critical for synchronous recognition. We will look at the Internet status, if the Internet is fast and has low latency - we use streaming speech recognition, if not - synchronous. At the moment there is a template backend Node.js service and streaming recognition on gRPC is being finalized

## Timur Demenov

This week I added some new features to our project. An authorization page was created, a couple of add-ons to optimize the project, and several new auxiliary libraries were installed. I also discussed the main points of our application with the designer, exchanged tips and came to a common decision.

# Week 8

## Adil Akhmetov

Due to some reasons, our deployed services go to sleep to save our dynos (specific heroku currency). That's why I did some research about heroku dynos. It appeared that hobby tier dynos have to sleep at least 6 hours per day (just like humans), I think they're just limiting us from abusing their service as VPN providers. Unfortunately, only hobby tier dynos are available for us. Then I tried another approach —heroku scheduler and it seems to work okay, but again there are some drawbacks like sleeping and manual scheduling. Eventually I found a solution called [Kaffeine](https://github.com/RomainButteaud/Kaffeine). It just sends `GET` request each 30 minutes waking up our services. Started working on a service that uploads audio to the store, but most likely Timur will work on that. One good news is that I have 1000 hours on hobby tier limit so we will be able to host our services for now.

## Timur Demenov

This week I added more basic display components. Then I connected firebase to our project and through it added authorization through a phone number with the ability to verify the code that is sent to the phone number. Further, it is also planned to add new components and work on the main page.

## Aruzhan Makhmutova

This week I worked on additional screens, such as error screens, new action screens and their different states, etc. We also decided on the visual part of the mobile app design from all the options presented. I collected references for further design of the "sound recording" pages.

## Madiyar Mukushev

I made a demo version in Node.js of streaming recognition in order to test the functionality and further understand the development of this service. The service takes an LPCM audio file and splits it into small parts. The parts it sends to the yandex server and gets a response. I have developed the principle of further work of our service, we will have a separate server and a client on gRPC with streaming. The frontend will send the chunks (small audio parts) to my service, and this service will send them to the Yandex server with the necessary preprocessing.

## Balzhan Jumabekova

This week I have checked our MVP and conducted ux-test in order to identify bugs during onboarding. Also I have set deadlines for mvps and started research on overleaf tool. Recently I have held meeting with the team to detect problems during their work and solve them in a proper way.

# Week 9

## Adil Akhmetov

We have made a decision to change our architecture which I will describe more in detail below. First, we made a decision to have two services for SRS (Speech Recognition Service) for Asynchronous and Synchronous recognition. We will switch between them depending on users internet speed. Thus, I need to research how to deploy an async app with data streaming capabilities. It seems that I have to turn on some configs in Dockerfile and Heroku app to open specific ports. I'm still in the proccess, but I already created a pipeline and reserved an app for our new service. Next week I will be working on the Dockerfile and workflow configs. After some research on AWS FreeTier I decided to not play with fire and just stick with Firebase which also offers storage for binaries. So, I've read a bit about Firebase Storage and created a testing storage.

## Timur Demenov

This week I've been investigating how streaming works, reviewing the list of libraries, and fixing compatibility issues with the safari browser. I also added authorization through social networks and created components for the audio recording page

## Madiyar Mukushev

This week we tried to create a client on gRPC. But unfortunately web gRPC does not support client-side and bidirectional streaming. We have developed another architecture of communication for bidirectional streaming. And now we're researching libraries and tools for data streaming (audio and text).

## Aruzhan Makhmutova

This week I changed the visual elements in the design on the home page. I made revisions to the registration section at the developer's request. I drew a quote page and a menu page for adding voice recordings and mood tracking. Also in development are the main record-keeping pages

## Balzhan Jumabekova

This week I have held a meeting with my team for setting goals of our third MVP. Also I have set up KPIs and deadlines for the team, started the research on the diploma document and checked up on our team members' reports in order to start writing a research paper.

# Week 10

## Adil Akhmetov

This week I did solve some problems with Heroku dynos sleepings. Our services went to sleep to early thus why I had to change it from 3AM till 9AM. But most importantly I was focused on our diploma documentation. I wanted to deliver the documentation as easy as our code so I researched on local deployment of LaTex files. Yeah, there is an awesome tool like Overleaf but it requires premium to use host like GitHub. So, first I installed [TexLive](https://www.tug.org/texlive/) which is an opensource alternative to deploy `.tex` files on Linux. And I found a most suitable solution to easily edit and deploy Latex.  I added the deployment of diploma project which is a pdf file. I did it with a help of awesome vscode plugin called [Latex Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop). I'm still researching on how to optimize the server and looking for the way to avoid auto-pinger.

## Aruzhan Makhmutova

This week I did some research from the user experience point of view, in different mobile apps, which have a similar structure with record-keeping.
As a result of the analysis, I made a low-fidelity prototype, the frameworks of the pages. I drew a design where a user records audio, pages where recordings are stored and additional pages apart from the main ones, such as delete a record, edit a record and so on. Also, there were adjustments to the ui part, changed fonts and colors of the existing design.

## Balzhan Jumabekova

This week I have held a meeting for the 6th sprint and set new deadlines due to new bugs and issues in the app. Then I have made a research among similar applications and highlighted their features in order to provide SUS-test next week. Also I have prepared necessary materials for customer journey map that will help us navigate further. In the middle of the week I have checked the state of our MVP and discussed current bugs and errors with frontend developer and designer.

## Madiyar Mukushev

This week I made a service that converts audio from ogg to wav. Safari doesn't not support the ogg audio format, so we decided to convert to another supported audio format. I also made a streaming speech recognition service. Node.js acts as a gRPC client for Yandex Speechkit API and also as a server for the websocket.

## Timur Demenov

This week I created components for the main page, and also connected the service to the database, which allows you to read, delete and edit content. It was possible to set up a connection using sockets for streaming voice recognition and test it on devices

# Week 11

## Adil Akhmetov

Since we are going to have a service which will identify the mood of the text I clearly have to deploy the ML model. So, this week I researched on how to deploy ML server and created a specific pipeline on Heroku. The model is going to be heavy, but heroku offers only 500MB limit slug size so I have to find a different solution. Plus, there might be a problem with hosting the model itself in the codebase. If we commit it directly in the monorepo, then each developer even not our ML dev (Madiyar) will have to pull this heavy model. This is not efficient, so I'm thinking to use Git LFS. Also, I fixed some CI issues in our repo. Then I added a deployment of node-srs (Synchronious Speech Recognition) so that our developers will be able to communicate whith each other remotely.

## Balzhan Jumabekova

This week I have added new changes in our backlog based on SUS results. Also I have held a meeting with the team leader in order to discuss our plan. Then checked up our finished user stories using acceptance criteria and definition of done. At the end of the week I have planned the next sprint and conducted sprint review.

## Madiyar Mukushev

This week I researched sentimental analysis algorithms for the mood tracker. I have found a list of datasets with Russian text (labeled and unlabeled) to train the model.

## Timur Demenov

This week I fixed bugs and adapted the design for our service. I laid out the main page, authorization and a page with a voice recording in several stages, and the page itself, where all the recordings are stored. Also added the ability to filter records and made minor performance improvements

## Aruzhan Makhmutova

This week I've been making changes to the functional part of the design. In the section recording audio and text notes. Also discussed the functionality and feasibility with the project manager and the developer. As a result, I made changes and changed the design

# Week 12

## Adil Akhmetov

This week I helped my frontend developer with the new design on record page. Also, I refactored the code a little bit to follow the clean code. Then, I configured the new server (Synchronous Speech Recognition service) to sleep like the other services. Then, we had a meeting with our designer about the new sections and I approved the design for the record view, search results and filter by day pages. I checked the current MVP on Android device and it seemed to work okay. Finally, I researched platforms where we could write our diploma document on LaTEX and ended up with the decision to use both vscode and overleaf (for collaborative editing with Balzhan).

## Aruzhan Makhmutova

This week I approved the visual design of the new sections. Developed the design for the record review, search results, and filter by day pages. Created the functionality for the "tracker and mood analysis" section

## Balzhan Jumabekova

This week I have used System Usability Scale and provided UX-testing of our app in order to detect possible errors and bugs. I found some students to test three apps such as Vono, Journify and Memento. Also I have started writing an introduction to the document including some research about cognitive diseases.

## Madiyar Mukushev

This week I collected data and trained a baseline sentimental analysis model. I also added a separate endpoint in the backend for this service.

## Timur Demenov

This week I did some code refactoring, stylistic changes and added new components and pages according to the design. The main page was changed and work was done on the authorization page. Auxiliary libraries for styling the project have also been added.

# Week 13

## Adil Akhmetov

This week I created a new deployment for a translator service. Along with this I worked on mood tracker service deployment as Heroku was not suitable for this because Heroku slugs are 500 MB max which is not enough for over 800 MB model. So, first, I tried with AWS EC2 Free tier version but it also was not sufficient because of only 1 GB RAM. Then, I tried to buy a droplet on Digital Ocean and it helped, but I needed more RAM since it appeared that pytorch creates default weights which takes another 800+ MB. But I found out a lifehack for this and just created swap file instead of buying another machine. Also I created apps for the production release.

## Madiyar Mukushev

I upgraded YandexSpeechKit from v2 to v3, for this I had to rewrite methods, configurations, etc. The main reason for switching to a newer version was the appearance of punctuator in the API.
At the same time I created a new microservice in Python for text translation. I used the Google Translate API and I made it a separate microservice so that it would be independent of the failure of other services. The microservice was written in web framework FastAPI, with field validations.
I also created a separate microservice, also in Python and FastAPI, to generate quotes and random pictures. This is needed for the main page in the PWA application. The quote generator returns the quote and also the author. The picture generator returns a random picture with specified parameters. There are three parameters: height, width and blur.s

## Balzhan Jumabekova

This week I have been working on research based on current health problems in Kazakhstan. I have collected essential statistics in order to use it in motivation part. There were plenty of related information and I had to opt for right and proper one. In addition, I have read about the difference between motivation and state of the research problem in order to describe them correctly. I have also added some aims and objectives for dissertation. In general, I have been working on the 1st chapter.

## Timur Demenov

This week I was working on finalizing the front-end part of our application. Authorization was slightly redesigned and it was decided to replace Facebook authorization with Twitter. Also on the main page, interface changes were added: new icons, dynamic cards and a calendar. The process of adding gratitude has been moved to a separate interface, where you can also add a photo. Regarding the profile page: everything is ready, the user is defined and it remains only to finalize a couple of things from the design side

## Aruzhan Makhmutova

I worked on the "mood tracker", "profile and settings", and "record statistics" sections. When developing the design, I worked through all of the user transitions from screens in advance, relying on heuristics and interaction patterns. I thought through the main pages and additional functionality, such as daily record reminders and mood definitions for each record by text. I made the functionality wireframes and developed the ui portion of the pages to fit our existing design, using the ui kit and style guide. In the process, there were corrections from the developers and bugs were identified as a result of testing the app with the project manager on a group of people with our target audience. Work is currently underway to improve the user experience of our design.

# Week 14

## Adil Akhmetov

This week I created another service for quotes and images. Also, mostly I was researching on Literature Review and I have found some interesting articles. Primarily, I was using webofscience and google scholar and read more than 10 articles. And on top of that, I was trying to fix the bug with our mirroring service, and the reason behind that is that our remote repo doesn't have setup Git LFS. I spent the whole week on it ending up with hosting my own custom action for this and moving from Git LFS to Google Drive for model hosting, because Github have such a dummy policy with the bandwidth of 1500MB for free tier repos (which we use) and it spent with like only two pulls (notice, model weight is 800MB). I'm still in progress of solving this issue.

## Balzhan Jumabekova

This week I did a research on the structure of the dissertation introduction. To do this, I used several sources. I also found the official statistics of psychological illnesses among Kazakhstanis. Next, I set the goal of the dissertation and tasks to achieve this goal. Then I structured the entire document, making it a brief overview in the thesis outline.

## Aruzhan Makhmutova

This week I made changes to the initial pages of onboardings that welcome the user. I added illustrations and worked the text to match the main benefits of our app. Made changes to the registrations under the developer's comments. Made the same design for all pages, with a pop up feature. Added new types of gratitude and free writing posts and made a user manual for users of this type of posts. Design the gratitude and free writing page itself. Also, added all new elements in the UI kit and components. Redesigned cards of various types, such as check in, gratitude and so on. Reflected new cards on all the entries. Also collected references and worked on the visual part of the mud tracker.

## Madiyar Mukushev

This week I added a health check for both streaming and synchronous services. While testing the application, we encountered the problem that occasionally the Speechkit API doesn't work. We currently have two services, one synchronous service, which only sends the result at the end of the recording, and a streaming one, which sends the result in real time as we record. The default is streaming mode, but if the health check reports that the service isn't working, it automatically switches to synchronous speech recognition. If synchronous doesn't work either, the application will let the client know that the speech recognition doesn't work.

## Timur Demenov

This week, I've been hooking up a service status check endpoint. Thanks to this, before recording audio, we have a check that allows you to switch between services. I also added a page with a choice of today's mood, it allows you to determine the current mood of the client and writes everything to the database. In the future, it is planned to display graphs using all the collected statistics. Additionally, I started finalizing the gratitude and free writing pages, the profile page was slightly changed, where dynamic fields were added

# Week 15

## Adil Akhmetov

This week I have been working on SSL certificate and custom domain name for our mood tracker service. First, I bought a custom domain name. I was trying to establish SSL with Let's Encrypt free SSL certificates. But it was quite tricky to use it on Heroku with custom domain name. So first I changed the holder of domain name service to Cloudfare and then with a help of Cloudfare I managed to add both SSL and domain name. Also, I deployed the most important of our services to production. There were also some bug fixes. Over all, I am working on the documentation of the application like fixing the refernces order (now it has random ordering). In the end, I fixed the mirroring completely getting rid of Git LFS.

## Balzhan Jumabekova

This week I have been working on diploma thesis where I have started writing Chapter 4. This chapter is about implementation of the project. It is divided into several parts with a detailed information about each member’s contribution. In addition, it contains the structure of the app, including some technology data. In order to write the 4th chapter in a proper way I have searched for similar examples of other diploma templates and highlighted the best ones. I have also added some information from our custdevs and SUS-testings for accuracy. At the end of the sprint I would like to conduct one more testing for detecting the rest of the bugs.

## Aruzhan Makhmutova

I've been supervising the design and layout process this week. Left comments on elements that were not done according to the drawings.There were design refinements on features to automatically add a mood to each entry, with input functions and using a filter to search for entries. Worked on the ability to edit tags and sentiment which the program detects and generates automatically by text, for the accuracy of our functions to determine the sentiment. There were also improvements on the profile pages and on the page of statistics on the use of the application.

## Madiyar Mukushev

This week I optimized the streaming speech recognition service. I added an automatic disconnect from gRPC SpeechKit API if the user does not send any messages. This way we save API resources and bypass potential bugs. I also did code refactoring and documentation, and optimized code where possible.

## Timur Demenov

This week I was busy fixing bugs and developing a page with user statistics. A beautiful graph was developed with the output of all user activities, thanks to which he will be able to understand on which days he was more active, how many entries were made, and so on. Many pages lack smooth animation, so work on this has been started. Now navigating through the application has become more pleasant
