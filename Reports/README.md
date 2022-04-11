> This folders will contain your reports

## Week by week plan

Chosen methodology: Scrum
10 weeks = 10 sprints = 5 MVPs

1-2 weeks: to create 1st MVP - PWA application

3-4 weeks: to create 2nd MVP - Connect PWA to SRS

5-10 weeks: to create 3,4,5th MVPs - Features from Future Iterations and Bug Fixing

UPDATE:  
3 MVP - 5 + 6 sprint - 9 + 10 weeks ==> async SRS  
4 MVP - 7 + 8 sprint - 11 + 12 weeks ==> mood manager and analyzer  
5 MVP - 9 + 10 sprint - 13 + 14 weeks ==> translator

# Adil Akhmetov

Sprint #1

- Research cloud services
- Research tech stack
- Research best practices
- Draw architecture diagram
- Sign in necessary services

Sprint #2

- Prepare repo for ci&cd
- Setup Docker container for PWA
- Setup Docker container for Python microservice
- Setup Docker container for Golang microservice
- Setup mongodb on mongo.com

Sprint #3

- Research AWS S3
- Setup S3
- Create microservice that saves audio to S3
- If s3 doesn't play then try to use Google Firebase
- Setup Firebase

Sprint #4

- Research Heroku Dynos
- Find out the way to not made sleep dynos
- Repair broken pipelines
- Configure heroku scheduler or auto pinger

Sprint #5

- Research on how to deploy async servers to Heroku
- Create new deployment pipeline
- Research Firebase Storage
- Setup Firebase Storage

Sprint #6

- Solve possible errors
- Optimize new server with streaming
- Find a workaround on how to avoid auto-pinger
- Deploy latex file in our repo

Sprint #7

- Draw new architecture diagram
- Research how to deploy ML server
- Create new deployment pipeline
- Setup new server
- Configure ci&cd

Sprint #8

- Test the upcoming service
- Optimize the ML server
- Try to apply MLOps best practices
- Research Latex language to start filling diploma document

Sprint #9

- Setup new deployment for translation if necessary
- Start to prepare for production release
- Create production deployments for all existing services
- Research on domain names

Sprint #10

- Research on how to wrap PWA in Cordova
- Wrap PWA in Cordova if possible
- Release all services to production
- Use domain name for production release if possible

Sprint #11

- As a team leader final check of the product
- Minor and major bug fixes in production release
- Finish filling the diploma document if necessary

# Balzhan Jumabekova

Sprint #1

- To conduct competitors analysis and highlight their unique selling proposition
- To conduct Customer Development in order to find useful features and identify the shortcomings of other analogues
- To hold stand-ups
- To create a lean canvas of the product
- To hold sprint review and sprint retrospective

Sprint #2

- To conduct prototype analysis with UX/UI designer and frontend developer
- To process information received from customer development interviews and apply it in product creation
- To add and edit existing user stories.
- To hold stand-ups
- To conduct sprint review and sprint retrospective, highlighting MVP

Sprint #3

- To add new features to the backlog from the customer development interview
- To discuss with the designer possible color options for the future application
- To discuss with the team leader future and current bugs
- To change the product development strategy, revising the goals
- To start researching the material regarding the thesis

Sprint #4

- To check our 2nd MVP
- To conduct a UX-test in order to identify bugs during onboarding
- To set deadlines for the rest MVPs
- To start research on the overleaf tool
- To hold meetings with the team to detect problems during their work and solve them

Sprint #5

- Hold a meeting for our third MVP
- Set up KPIs and deadlines for the team
- Start research on the diploma document
- Check up on our team members' reports in order to start writing a research paper

Sprint #6

- Add new tasks in the backlog and prioritize them
- Check our 3d MVP before the release
- Conduct a SUS testing with several students in order to define the level of convenience
- Hold a meeting for the next sprint
- Start to fill diploma document in overleaf
- Draw a CJM (customer journey map) for our product

Sprint #7

- Add new changes in our backlog related to SUS results
- Hold a meeting with the team leader in order to discuss our plan
- Check up finished user stories using acceptance criteria and definition of done
- Plan the next sprint and conduct sprint review

Sprint #8

- Check our 4th MVP before the release
- Conduct a SUS testing with several students in order to define the level of convenience
- Add new tasks in the backlog and prioritize them
- Continue to work on our diploma document by collecting necessary and essential data
- Hold a meeting for the next sprint and plan the rest user stories

Sprint #9

- Conduct customer development interviews in order to check our finished user stories
- Collect data related to our diploma topic
- Add new tasks in the backlog and prioritize them
- Hold a meeting with the team leader in order to discuss our plan
- Hold a sprint review and sprint planning

Sprint #10

- Conduct final preparations before the release of the 5th MVP
- Check up finished user stories using acceptance criteria and definition of done
- Continue to work on our diploma document by collecting necessary and essential data
- Plan next MVP criteria if needed

Sprint #11

- Finish our diploma document
- Conduct final check-up of our product
- Hold a meeting related to bug fixing and possible future iterations

# Madiyar Mukushev

Sprint #1

- Research Yandex SpeechKit API.
- Research synchronous recognition.
- Test API with simple curl requests.
- Research Python web frameworks that are suitable for audio streaming.
- Make a simple application using the web framework.

Sprint #2

- Research Streaming Speech Recognition.
- Test Speech Recognition with hard examples.
- Research and find Python library that works with PCM format for audio streaming.
- Design the architecture of communication of synchronous Python SRS (Speech Recognition Service) and PWA.

Sprint #3

- Write backend of synchronous speech recognition in Python web framework.
- Test speech recognition microservice with Postman.
- Find possible errors in the speech recognition microservice that can occur.
- Add exception handling for possible errors.

Sprint #4

- Help to connect speech recognition service with PWA (frontend).
- Test performance with multiple parallel requests.
- Calculate the average speed of the service, including transfer time of audio.
- Change IAM (expires every 24 hours) Token to API Key in order to not update the IAM key every 24 hours.

Sprint #5

- Research streaming speech recognition in Yandex SpeechKit API.
- Research gRPC and Protobuff for implementing streaming speech recognition.
- Find the most suitable programming language for streaming recognition.
- Write a simple application in that programming language.
- Test a simple demo of streaming recognition.

Sprint #6

- Find libraries for audio and data exchange, because gRPC doesn't support client-side streaming in browsers.
- Write gRPC client that connects with the gRPC server of SpeechKit.
- Add client-side streaming (using libraries) and try to send data to the backend.
- Add server-side listening and streaming for receiving and sending data.
- Add exception handling for possible errors.
- Test endpoint with hard examples and try to break service.

Sprint #7

- Research sentiment analysis algorithms.
- Find data for sentiment analysis in the Russian language.
- Design architecture of connection between mood tracker and PWA.
- Find a suitable library for sentiment analysis in Python.

Sprint #8

- Train a good sentiment analysis model (mood tracker).
- Check the performance of the model using different metrics.
- Try lighter and heavier architectures of neural networks and choose one.
- Add model inference method in the backend.

Sprint #9

- Research translate algorithms.
- Research API (Google, Yandex, DeepL) for translating text that has good accuracy in translating Russian-English, Russian-Kazakh, and vice-versa.
- Design architecture of communication between translator microservice and PWA.
- Research API of translate service.

Sprint #10

- Add translator service to backend.
- Write simple documentation of translator service.
- Help to connect translator service to PWA.
- Test translator service with hard examples.
- Test performance of translator service.

Sprint #11

- Improve speech recognition service.
- Try to optimize the performance of services.
- Write documentation for all services.

# Timur Demenov

Sprint #1

- monitor and analyze all types of web applications
- study and compare the most relevant technologies
- weigh all the pros and cons of frameworks and approaches and choose the best
- draw a diagram with technology stack
- initialize an empty project

Sprint #2

- build a data flow architecture
- choose the right system for working with audio objects
- study the documentation of the voice recognition service
- get tokens and test the voice recognition service with an example
- implement streaming voice recognition on the front side

Sprint #3

- create an authorization page
- add TypeScript support
- initialize required env’s
- optimize bundle size

Sprint #4

- initialize and configure firebase SDK
- create all the ui components for the authorization page, including input validation
- explore and add a library for processing forms to the project
- set up OTP authorization (via phone number)

Sprint #5

- fix audio format compatibility issues for browsers
- explore additional libraries for audio processing
- optimize synchronous voice recognition
- explore more about audio streaming and recognition

Sprint #6

- stream recording and processing testing
- adding error handlers to the PWA
- update styles received from the designer
- develop components to improve the user experience
- test the app on different devices

Sprint #7

- create navigation bar for app
- create and style the main page
- refactor and split all components into subcomponents
- look for suitable and compatible libraries for creating a calendar
- configure filtering and search

Sprint #8

- set up mood recognition by receiving data from backend
- test the mood tracking functionality in the application
- create a page and styles with animations for the recognizer
- test for compatibility with browsers/devices

Sprint #9

- add internationalization for the application
- add new style theme
- add a service worker to optimize background processes
- explore application build types

Sprint #10

- connect to backend for translator function
- test the functionality of the translator in the PWA
- perform load testing
- create components to render the translator

Sprint #11

- write documentation and leave comments
- optimize the project
- test and fix bugs

# Aruzhan Makhmutova

Sprint #1:

- Searching and collecting all data about design, users’ expectation
- Creating brand book for our app, with colors, fonts and style
- Creating jtbd for design
- Preparing workspace for our app
- Creating ui elements for starting
- To analyze competitors' design
- To create medium fidelity prototype (wireframes)
- To create the final version of product's logo

Sprint #2:

- To use the data from custdev and use it in developing prototype
- To create the ux part of design and testing it
- To implement the logo in the pages
- Approving the ux part of our app
- to fix some bugs in the prototype

Sprint #3:

- Conduct design research.
- Competitive analysis in terms of ux (user experience)
- Analyze user baseline scenarios in similar apps
- Create a low-fidelity prototype structure for the registration process in the app
- Document overall conclusions of the analysis considering usability and interesting features
- Make changes to sitemaps and wireframes

Sprint #4:

- Develop user flow
- Work through all the user transitions scenarios from screens in user flow development
- Assemble a mudboard and references for the mobile app
- Make a high-fidelity prototype for user registrations
- Create an app logo concept

Sprint #5:

- Draw several variants of the home page design
- Choose the right design considering the combination of style and our content
- Design the homepage using auto layouts and components
- Create Ui Kit and style guide from existing elements in the design
- To think about the functionality of the sound recording, lecture and sound converting section and the text of the possibility of correcting them

Sprint #6:

- Draw all additional screens in addition to the main ones in the drawn designs of the finished sections
- To use and complement the design system
- Analyze the use of voice recording features in old applications
- Assemble reverence design elements of voice recording pages, lectures
- Approve the functional part of the sound recording section
- Draw ui elements in the sound recording section
- Prepare files for layout

Sprint #7:

- Dorisize all additional screens
- Approve the visual design of new sections
- Design the functionality for the share records, view records, search results, and filter by day pages.
- Draw a prototype design for the new functionality
- Approve the design of the functionality in the new record pages

Sprint #8:

- Draw the visual part of the design of the record pages
- Refine the pages in the mood tracker and analysis section
- Make changes on team comments in the design
- Test new interface features on users
- Make adjustments based on the results of testing in the design

Sprint #9:

- Finalize all user flow scripts
- Draw the prototype design in the records translation section
- Approve the functional part of the design
- Draw the visual part of the design
- Test the record translation interface

Sprint #10:

- Make revisions to comments and new features
- Refine the design on the record translation pages
- Add new elements to the system design
- Test the interface for translating records

Sprint #11:

- Supervise the process of layout design
- Leave comments on elements that were not made according to the drawings
- Fix pages with bugs
