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

This week I participated in the creation of user stories. This allows us to define the further functionality of the app and also makes the prototype clearer. I pointed out mostly things that would affect me as a developer. Namely, everything related to machine learning backend. This includes speech recognition so that users can record audio, read the text of the recognized audio, and play the recording.
I also added potential risks and non-functional requirements. Non-functional requirements are the tools needed to develop the application, for example, Yandex SpeechKit API for speech recognition. In risks I mentioned potential problems with Speechkit. We are not sure how Speechkit will behave on Kazakh names, cities, and in general its accuracy in texts. Speechkit limits us in this regard to refining speech recognition, but it takes a lot longer to build our own recognizer from scratch.

## Timur Demenov

One of the best things we can do to increase our organic traffic is creating a sitemap. This is a list of all URLs on our site with some information about them. What a site map does is make it easier for search engines to understand and index your content. In the description of the repository, you can see the sitemap, which displays all the possible paths of the site. I also updated the Pages/Activities section, which describes the functionality of each page and also the user story. A user story describes the type of user, what they want and why. A user story helps to create a simplified description of a requirement.

## Adil Akhmetov

This week I configured the mirror repo with a help of Github Actions. For this I used custom action from marketplace called "Repository mirroring action". This action required me to generate SSH keys and basically what it does is trigger on any action like push delete and pushes it to charming hamsters repo. Of course, `SSH_PRIVATE_KEY`, `USERNAME` and `REPO_NAME` are hidden in the repo secrets. I have to mention that I also tried to hide the `REPO_NAME` in the main condition, but it appeared that it is not possible to get access to `secrets` in `if` statement. Plus, I updated the main README file and included "Project Description", "Technologies" and "Goals" parts. In the "Technologies" part the stack is still under consideration since there might be more suitable technology for the specific case.

## Balzhan Jumabekova

This week I have created user personas for our project. The target audience of our application covers people of different ages and genders, prone to mental illness and memory problems. In addition to this, I conducted a market analysis to identify our competitors, peers, market size, and scope. In the future, this will allow us to highlight our unique selling proposition, find our niche, and also find out the strengths and weaknesses of similar existing applications. Furthermore, I conducted a competitor analysis, namely, I analyzed Journify applications and applications with a voice recorder. This gave insight into what these products lack, and what we should rely on in the future when developing our own. In order to make our development team’s work much easier, I have created low-fidelity prototypes likewise. They represent the Memento’s future interface and features. 

Market research, analysis, and so on: https://github.com/KaskelenValley/Memento#team-members

Meeting recording: https://www.youtube.com/watch?v=ffjNIcaJ5d4

## Aruzhan Makhmutova

- Provided design research
- Updated user personas and user stories
- Updated sitemaps and wireframes

Meeting recording: https://www.youtube.com/watch?v=ffjNIcaJ5d4

# Week 4

## Adil Akhmetov
  
This week I mostly research Docker and how to use Docker in CD at Heroku. It appeared that Heroku provides `container` stack for its apps so I decided to go on with it. I tried different approaches like connecting Github repo to Heroku pipeline (that's why I decided to mirror the repo), but unfortunately, it appeared that it's quite tricky in monorepo (which this repo is). There is a custom buildpack for it which declares different folders to extract to code at, but again, it triggers deployment on all the apps on any commit even if this commit doesn't touch the provided folder. So, I came up with the easiest and simpliest solution, let's say following the KISS pattern, which is just hold all CI&CD on Github Action and deploy to Heroku. Also, I added more information in the main README file.

## Timur Demenov

I researched articles about pwa applications and realized that this is the most suitable for us. PWA stands for Progressive Web Application – a website that looks and behaves just like a mobile app. Users can add it to the main screen of their smartphones. PWAs can send push notifications, access the hardware of the mobile device, and even work offline or in an unstable connection. Benefits of PWA apps:
1. Availability in the offline mode
2. Mobile-like behavior
3. Smooth installation
4. No app store submission
5. Use of hardware features 

Progressive Web Apps can also be installed on desktop devices like native apps. PWAs stand to bring desktop users many different benefits. For starters, they’re smaller in size than native desktop apps. They easily update in the background, so there’s no need to encourage users to update their apps on their own. PWAs take no time to install and are reliable. 
About voice recording. The MediaStream Recorder API makes media recording in the browser very easy. It allows capturing chunks of (audio) data from a microphone media stream as blobs, which can later be concatenated in a single audio file. The file can then be saved locally or uploaded/POSTed to the web server.

## Madiyar Mukushev

This week I was testing the Yandex SpeechKit API.  In order to start using SpeechKit I studied the documentation and started registration. Yandex Speechkit API gives a free period of 3 months, which is great for developing an application without budget.
The easiest way to test speechkit is to record a speech in advance, then use the REST API for synchronous recognition to throw a request through curl and wait for a response. In the body of the request, in addition to the recording itself, you should also specify the IAM (temporary) token and folder id. In order to get IAM token, you need to have a service account, and to create it you need to link your bank card, which I actually did. I recorded a short audio with my name and a couple of other examples, the recognition works fine, but my name it does not recognize perfectly.

## Balzhan Jumabekova

I set aside this week to choose a methodology for our project. That is why I have conducted research on possible agile methodologies. As a result, I have chosen the Scrum methodology with elements of Kanban (board). In order to identify the pains and needs of our target audience, I have compiled questions for the customer development interview. In the future, it will also help improve the functionality of the application and make changes to the interface. At the end of the week, I conducted a stand-up on the final revisions of the project idea and planned the following tasks for the team using the “MoSCoW” prioritization method.

Chosen methodology: Scrum 10 weeks = 10 sprints = 5 MVPs  
1-2 weeks: to create 1st MVP - PWA application  
3-4 weeks: to create 2nd MVP - Connect PWA to SRS  
5-10 weeks: to create 3,4,5th MVPs - Features from Future Iterations and Bug Fixing  

3 MVP - 5 + 6 sprint - 9 + 10 weeks ==> async SRS  
4 MVP - 7 + 8 sprint - 11 + 12 weeks ==> mood manager and analyzer  
5 MVP - 9 + 10 sprint - 13 + 14 weeks ==> translator  

*Stand-up recording*: https://youtu.be/CSRB9j0ARyc

## Aruzhan Makhmutova

- Conducted research on possible audio journaling apps' design
- Created the conception about logo of the app
- Conducted research on possible design tools

# Week 5

## Adil Akhmetov

![image](https://user-images.githubusercontent.com/48881444/156602630-055e1502-1813-412d-bb58-62e86d195d8c.png)
 
This week I was busy with tge researching of the tech stack and cloud services. Also, as a perfectionist I wanted us to follow best practices. So, we decided to have a PWA on our front which will let us to deliver the app on any device. We also revised React Native (but I cannot code on it since I don't have Mac), Flutter (noone in our team know Dart), Xamarin (same, we do not know C#) and eventually PWA was the best approach here. The web site will be on Next JS which will give us SEO support and SSR (which will of course minimize the bundle size). For the backend part we decided to stop on three services for now which are Auth service, Main service and SRS. Auth service will let us basically to use Auth 2.0 across of all our microservices with JWT. Main service will support the main logic part. And SRS (Speech Recognition Service) will be the bridge between us and Yandex Speechkit, it will take our data and give us back the result in a way that we want. For saving the auth data we chose PostgreSQL on Heroku (which offers one free connection) and AWS S3 for holding static binary files like audio recordings. I already registered in these services and got Pro account on Heroku and FreeTier machines in AWS.

## Timur Demenov

I chose React and Next.js as the original technology stack. To make Next.js app into PWA, I need the given things - next-pwa package, Service Worker, Manifest & Icons, Maskable Icon, Meta Tags. Creating a PWA can be difficult. However, with Next.js we can easily create one using the next-pwa package. Under the hook this package uses Workbox. Here are some of the features you get from using next-pwa: 
- Zero config for registering and generating service worker
- Optimized precache and runtime cache
- Maximize lighthouse score
- Use workbox and workbox-window v6

To record and convert audio in the application, I used a third-party library called opus-media-recorder. Opus-media-recorder is a MediaRecorder API polyfill written in ES6 and WebAssembly. It aims for cross-browser Opus codec support with various audio formats such as Ogg and WebM. opus-media-recorder can be used as a polyfill, or it can replace the built-in MediaRecorder since opus-media-recorder supports more MIME types. Opus-media-recorder uses WebAssembly compiled from popular libraries (e.g libopus, libogg, libwebm, and speexdsp) to ensure good performance and standards-compliance.

## Madiyar Mukushev

This week I've also been researching Yandex Speechkit and choosing the right programming language and web framework to wrap the service. Why do we need a backend for SpeechKit when we can send requests directly from the frontend? The point is that the backend allows us to add a lot of flexibility to speech recognition. If our SpeechKit doesn't work properly somewhere or doesn't punctuate, we can always fix it in postprocessing. It also adds security, because when you send queries from the frontend, there's a big risk that the tokens for Speechkit will leak out.
Of the programming language, my choice is Python. Since we're originally planning to do a synchronous recognition microservice, we don't need to have threading, etc. A service in Python can be written quickly and reliably. And as a web framework there are several to choose from: Django, Flask, FastAPI. I chose the modern web framework FastAPI because it has many advantages in terms of speed, asynchrony, etc. It also has autogenerated documentation which is very useful for frontend developers.

## Balzhan Jumabekova

This week I have found three respondents for customer development interviews in order to search for some insights and new ideas. That is why I have created a list of questions for the interviews beforehand. These questions are based on tips from “The mom test” book. (https://docs.google.com/document/d/1bxbYIeCK_IvK0GwQUItFhtnjSoPjDfD778IW66IQGBQ/edit?usp=sharing). Then I conducted cust dev and recorded it (https://youtu.be/uLe94i1Rhmo). For the interview, I chose three students. One of them you can see from the video. In addition, I held stand-ups and a sprint review. Since I previously chose Scrum as our methodology, I divided our project into several sprints and ran them in Jira.


![image](https://user-images.githubusercontent.com/48881444/156602551-d25dab62-b807-4535-a1a8-10fdc87190b7.png)

*Cust Dev*: https://youtu.be/uLe94i1Rhmo  
*Stand-up recording*: https://youtu.be/dha8m2Irlow

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

During the development process, I noticed some discrepancies on different platforms and corrected these shortcomings. Apple is a crucial company for the multi-device world, owning iOS, iPadOS, macOS, and Safari. While Apple has never used the term PWA in public, they've been supporting the technologies to make a PWA installable and offline-capable since 2018 on Safari for iPhones and iPads. However, Apple's implementation of the PWA specs misses many features when compared to other browsers, in particular when compared to browsers powered by the Chromium engine. In the middle, we also have Firefox and its Gecko engine with implementations including more PWA specs on Android, and fewer installation capabilities on desktop. Limitations include the lack of push notifications, integration APIs and installation promotion techniques that help users know they can install the current website to get an app experience. In addition, there are several bugs with implemented features.

## Madiyar Mukushev

This week I did synchronous speech recognition. Synchronous speech recognition is when audio is sent only at the end of a recording, when the recording has stopped. The plus side of this approach is that the development complexity is light. The minus is that the recognized text only appears at the end of the recording and can inconvenience the user. To create the microservice, I used the Python programming language and the FastAPI web framework. I used Poetry for dependency management and Dotenv for parsing environment variables.
The SpeechKit API doesn't take all audio formats as input. It supports OggOpus (.ogg), LPCM (.pcm) and a couple of other formats. In consultation with the frontend developer, OggOpus (.ogg) turned out to be the most convenient format. When a recording comes to the endpoint, it is checked for the correspondence of the audio format. If an audio format other than .ogg is received, the service automatically returns a response with the reason for the error. I used pymagick to check the format of the audio file.

## Aruzhan Makhmutova

- Develop an application prototype using data from custdev
- created the ux part of the design
- implemented the logo on the pages
- approved the ux part of our app
- corrected some bugs in the prototype

## Balzhan Jumabekova

This week I have analyzed the data and information received from the cust dev interview. In order to identify essential data, I have created a special Miro canvas with several parts. These parts include a research plan, purpose of the study, respondents' portraits, research hypotheses, questions to confirm/refuse hypotheses, confirmation by respondents, and research findings and insights. In addition, I have created a lean canvas of our potential competitor - the Journify app. Then I highlighted its unique selling proposition, identified key metrics for similar applications (NPS, DAU, MAU, WAU), and highlighted the hidden advantages of competitive applications. At the end of the week, I held a sprint review and retrospective. 

Cust Dev results: https://miro.com/app/board/uXjVOHuA2Gs=/?invite_link_id=19419686422

Lean Canvas: https://docs.google.com/presentation/d/1Gyhk78RX8n16XHadlAt6ffp6hPp8UnBz5U_tnMMqyVE/edit?usp=sharing

Sprint review: https://youtu.be/aGAU258eFNI

# Week 7

## Adil Akhmetov

This week I started researching Yandex Speechkit v3 since we decided to use Node.js for asynchronous speech recognition service. I worked on the template backend on Node.js and now we have to solve the problem with `pcm` audio format which the Yandex Speechkit requires to send. Also, I registered aws account and created a necessary bucket. Yeah, I've said earlier that we use FreeTier but now, I need more researching about the aws bills since it possibly may cost a lot for our team. Also, our team decided to not write an Auth Service and move on from MongoDB because there is a better solution called Firebase which will let us to store the data, auth apps from different social networks and in future support push notifications.

## Aruzhan Makhmutova

This week, I conducted a competitive analysis of the app based on user experience and functionality. Developed detailed mobile app wireframes for the Splash screen, OnBoarding, and Registration sections.
Also, after discussing with the team the possible options of colors, mudboard, references, and deciding on the design based on this, I created several options for the design of the home page

## Balzhan Jumabekova

This week I have added new features to the backlog, but since we are building the MVP, the features from the cust dev are at the bottom in order of priority. We also discussed with the designer possible color options for our future application. Together with the team leader, we discussed the reasons for a slight stagnation, and also changed the product development strategy, revising the goals by SMART technique. I also started researching the material regarding the thesis. That is why, I found several reliable government websites with official statistics and data about mental diseases, especially dementia and Alzheimer’s disease. In addition, I started searching for suitable testees for usability testing. At the end of the week, I held meetings with the team in order to introduce some project and goals changes.

## Madiyar Mukushev

This week I've been exploring streaming recognition in the Yandex SpeechKit API. After developing synchronous recognition, it became necessary to create a microservice for real-time speech recognition. Streaming recognition is designed a little differently than synchronous recognition, gRPC is used instead of REST API. This is due to the fact that there is a constant transmission of data (audio) in real time, which the REST API is not designed for. So I chose suitable programming languages where there is a library that supports gRPC and also has good performance. We need the performance, so that the requests do not hang for a long time, since it is, after all, speech recognition in real time. The most suitable programming language turned out to be Node.js. It's fast enough, good with multithreading and async, and has gRPC support and lots of information about how to hook it up.

## Timur Demenov

This week I created an authorization page that works based on Firebase from Google. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. To sign a user into your app, you first get authentication credentials from the user. These credentials can be the user's email address and password. Then, you pass these credentials to the Firebase Authentication SDK. Firebase backend services will then verify those credentials and return a response to the client. After a successful sign in, you can access the user's basic profile information, and you can control the user's access to data stored in other Firebase products. Also I added libraries to facilitate interface development and discussed the main points of our application with the designer, exchanged tips and came to a common decision.

# Week 8

## Adil Akhmetov

Due to some reasons, our deployed services go to sleep to save our dynos (specific heroku currency). That's why I did some research about heroku dynos. It appeared that hobby tier dynos have to sleep at least 6 hours per day (just like humans), I think they're just limiting us from abusing their service as VPN providers. Unfortunately, only hobby tier dynos are available for us. Then I tried another approach —heroku scheduler and it seems to work okay, but again there are some drawbacks like sleeping and manual scheduling. Eventually I found a solution called [Kaffeine](https://github.com/RomainButteaud/Kaffeine). It just sends `GET` request each 30 minutes waking up our services. Started working on a service that uploads audio to the store, but most likely Timur will work on that. One good news is that I have 1000 hours on hobby tier limit so we will be able to host our services for now.

## Timur Demenov

I laid out the basic components for a minimal interface display using a Material UI. Material UI is a comprehensive library of components that features our implementation of Google's Material Design system. MUI Base is our library of "unstyled" components and low-level hooks. With Base, we gain complete control over your app's CSS and accessibility features.
We can use Firebase Authentication to sign in a user by sending an SMS message to the user's phone. The user signs in using a one-time code contained in the SMS message. Authentication using only a phone number, while convenient, is less secure than the other available methods, because possession of a phone number can be easily transferred between users. Also, on devices with multiple user profiles, any user that can receive SMS messages can sign in to an account using the device's phone number. Firebase's phone number sign-in request quota is high enough that most apps won't be affected.

## Aruzhan Makhmutova

This week I worked on additional screens, such as error screens, new action screens and their different states, etc. We also decided on the visual part of the mobile app design from all the options presented. I collected references for further design of the "sound recording" pages.

## Madiyar Mukushev

This week I wrote a demo of a streaming recognition microservice in Node.js. The demo works without an endpoint, but simply reads the file from local storage, divides the audio file into chunks and recognizes speech. The demo was created to test the API itself before developing the main part of the application. The recognition works fine, maybe a little worse than synchronous because the audio is in chunks and the neural network recognizes it on the fly, which reduces its contextual visibility, unlike synchronous recognition. The chunks themselves should not be sent too often or too infrequently. Optimal is 400ms, not too much latency, and optimal network load.
I also switched from IAM token to API key, since IAM token was temporary and I had to change it every time in services to make SpeechKit work.

## Balzhan Jumabekova

This week I have checked our MVP and conducted a usability test in order to identify bugs during onboarding. I decided to only do usability testing within our team to prevent possible bugs in advance and not waste time on them in subsequent tests with other respondents. In addition, we found some useful insights that can be implemented as new features in further iterations. Also, I have set deadlines for MVPs and started research on the overleaf tool. Furthermore, I have prioritized some tasks on the Kanban board and added several user stories from the customer development interview’s insights. At the end of the week, I held a meeting with the team to detect problems during their work and solve them in a proper way.

# Week 9

## Adil Akhmetov

We have made a decision to change our architecture which I will describe more in detail below. First, we made a decision to have two services for SRS (Speech Recognition Service) for Asynchronous and Synchronous recognition. We will switch between them depending on users internet speed. Thus, I need to research how to deploy an async app with data streaming capabilities. It seems that I have to turn on some configs in Dockerfile and Heroku app to open specific ports. I'm still in the proccess, but I already created a pipeline and reserved an app for our new service. Next week I will be working on the Dockerfile and workflow configs. After some research on AWS FreeTier I decided to not play with fire and just stick with Firebase which also offers storage for binaries. So, I've read a bit about Firebase Storage and created a testing storage.

## Timur Demenov

For the streaming I used the MediaRecorder method start(), which is part of the MediaStream Recording API, begins recording media into one or more Blob objects. We can record the entire duration of the media into a single Blob, or we can specify the number of milliseconds to record at a time. Then, each time that amount of media has been recorded, an event will be delivered to let you act upon the recorded media, while a new Blob is created to record the next slice of the media. There were also problems with the blob in the safari browser and a conversion was needed on the backend side to correct the audio format. Additionally, authorization via social networks was added and additional components for the recording page were created.

## Madiyar Mukushev

This week I was developing a microservice for streaming speech recognition. As a reminder, gRPC is used for streaming speech recognition instead of the REST API. This is because gRPC is very well suited for streaming, unlike the REST API. There was no problem with connecting gRPC for communication between the microservice (backend) and SpeechKit, since Node.js supports gRPC perfectly. But there was a problem with communication between microservice and frontend. The point is that the frontend is essentially a web application with its own limitations. The gRPC is supported in the web application, but not in all of its transfer types. Web gRPC supports synchronous data transfer and server-side streaming, but client-side and bidirectional streaming it does not. Our application uses bidirectional streaming because the user sends us chunks as recording and the server sends him an intermediate response. Next week I will work on a different communication architecture between the microservice and the frontend.

## Aruzhan Makhmutova

This week I changed the visual elements in the design on the home page. I made revisions to the registration section at the developer's request. I drew a quote page and a menu page for adding voice recordings and mood tracking. Also in development are the main record-keeping pages

## Balzhan Jumabekova

At the beginning of this week, I held a meeting with the team for setting goals for our third MVP - async SRS. Also, I have set up KPIs and deadlines for each team member. In addition, I started the research on the diploma document and checked up on our team members' reports in order to start writing a research paper. I wrote two parts of the introduction which include the state of the problem, research objectives and aims, and the research question. In order to write them in a proper way I found and read several appropriate articles regarding diploma dissertations. At the end of the week, I held stand-ups, planned further meetings and reviews, and read some articles and books about how to provide SUS (System Usability Scale) tests.

# Week 10

## Adil Akhmetov

This week I did solve some problems with Heroku dynos sleepings. Our services went to sleep to early thus why I had to change it from 3AM till 9AM. But most importantly I was focused on our diploma documentation. I wanted to deliver the documentation as easy as our code so I researched on local deployment of LaTex files. Yeah, there is an awesome tool like Overleaf but it requires premium to use host like GitHub. So, first I installed [TexLive](https://www.tug.org/texlive/) which is an opensource alternative to deploy `.tex` files on Linux. And I found a most suitable solution to easily edit and deploy Latex.  I added the deployment of diploma project which is a pdf file. I did it with a help of awesome vscode plugin called [Latex Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop). I'm still researching on how to optimize the server and looking for the way to avoid auto-pinger.

## Aruzhan Makhmutova

This week I did some research from the user experience point of view, in different mobile apps, which have a similar structure with record-keeping.
As a result of the analysis, I made a low-fidelity prototype, the frameworks of the pages. I drew a design where a user records audio, pages where recordings are stored and additional pages apart from the main ones, such as delete a record, edit a record and so on. Also, there were adjustments to the ui part, changed fonts and colors of the existing design.

## Balzhan Jumabekova

This week I have held a meeting for the 6th sprint and set new deadlines due to new bugs and issues in the app. Then I have made a research among similar applications and highlighted their features in order to provide the SUS test next week. As competitors, I chose Journify (due to its interface) and VONO (due to its functions).  Also, I have prepared the necessary materials for the customer journey map that will help us navigate further. In the middle of the week, I checked the state of our third MVP and discussed current bugs and errors with the frontend developer and designer. In addition, I added a thesis outline and motivation paragraphs to the dissertation’s introduction.

Journify app: https://apps.apple.com/kz/app/journify-audio-journal/id1516465094

VONO app: https://apps.apple.com/kz/app/vono-for-lecture-recording-and-lecture-notes/id1112942441

## Madiyar Mukushev

This week, I made a working streaming speech recognition microservice. Last week I had a problem with the communication between the microservice and the frontend. The thing is that the web gRPC doesn't support client-side streaming and bidirectional-side streaming, which we need. After reading some articles on the Internet we understood that nobody wrote much about how they connected SpeechKit to the web application, so we had to figure it out by ourselves. Right away we had the idea of using websockets for streaming data. Tried websocket and it worked perfectly and real time speech recognition was no miracle anymore. And as it turned out later, the demo app on the official Yandex SpeechKit page to test streaming recognition uses websockets  there too. The algorithm of the microservice  is as follows: the user goes to the record page in the PWA application, the connection to the web socket is automatically made, but the data is not transmitted anywhere yet. Next, when the user clicks the record button, the microservice (backend) connects to the gRPC YandexSpeechKit. Every 400ms data is sent to backend via websocket, backend sends it via gRPC to SpeechKit server, server returns intermediate result, backend sends it to user. When the recording finished, the connection between the backend and the SpeechKit server closes, but the websocket remains open. As soon as the user leaves the application, the websocket closes.
Also, on the Python microservice where synchronous recognition lies, I added an endpoint that changes the audio format from OggOpus to WAV. The thing is, we had problems with playback in Safari because it doesn't support ogg. I used the ffmpeg library to convert audio formats.

## Timur Demenov

To store data, we needed a database and the choice again settled on a solution from Firebase. Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud. Like Firebase Realtime Database, it keeps our data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity. Cloud Firestore also offers seamless integration with other Firebase and Google Cloud products, including Cloud Functions. Cloud Firestore is a cloud-hosted, NoSQL database that our web app can access directly via native SDKs. Also we used Cloud Storage. Cloud Storage for Firebase is built for app developers who need to store and serve user-generated content, such as photos or videos. Cloud Storage for Firebase is a powerful, simple, and cost-effective object storage service built for Google scale. The Firebase SDKs for Cloud Storage add Google security to file uploads and downloads for Firebase apps, regardless of network quality. A streaming voice recording has also been added, which is in the test

# Week 11

## Adil Akhmetov

Since we are going to have a service which will identify the mood of the text I clearly have to deploy the ML model. So, this week I researched on how to deploy ML server and created a specific pipeline on Heroku. The model is going to be heavy, but heroku offers only 500MB limit slug size so I have to find a different solution. Plus, there might be a problem with hosting the model itself in the codebase. If we commit it directly in the monorepo, then each developer even not our ML dev (Madiyar) will have to pull this heavy model. This is not efficient, so I'm thinking to use Git LFS. Also, I fixed some CI issues in our repo. Then I added a deployment of node-srs (Synchronious Speech Recognition) so that our developers will be able to communicate whith each other remotely.

## Balzhan Jumabekova

This week I have added new changes to our backlog based on System Usability Scale. At the beginning of the week, I agreed with three respondents to conduct usability testing using SUS. Also, I have held a meeting with the team leader in order to discuss our plan. Then checked up our finished user stories using acceptance criteria and the definition of done. At the end of the week, I planned the next sprint and conducted a sprint review. I likewise prepared a list of tasks for each respondent and a table in which I will enter the test results. The essence of the tasks is that the test-taker can make a recording of his voice, read the recording, edit it, send it to someone and delete it. For all three test subjects and for all three applications, I will use the same conditions to correctly evaluate the results.

## Madiyar Mukushev

This week I've been researching the mood tracker. Mood tracker predicts the mood of a text. There are many good ready-made APIs for mood prediction, but they all work well only in English. There are not so many Russian solutions, so we decided to make our own mood tracker. To do that I started to study sentiment analysis algorithms, datasets, and so on. I found some good datasets in Russian and wrote them down in my bookmarks. As an algorithm, we decided to use recurrent neural networks, we considered them the most optimal for our task. Recurrent neural networks are not very difficult to train and implement, while giving good quality. If we use lighter models, such as logistic regression, the quality will be worse. Heavier models on transformers, such as RoBERTa, will take a lot of time not only to train, but also to develop.

## Timur Demenov

This week I made an adaptation to the figma design. The authorization page, the main page were improved with the addition of new cards, icons, a navigation bar and other visual things. The page with the voice recording and the page where all the recordings are stored have also been redesigned. All this has been tested on different browsers. Filter and sort options have been added to the page with all entries

## Aruzhan Makhmutova

This week I've been making changes to the functional part of the design. In the section recording audio and text notes. Also discussed the functionality and feasibility with the project manager and the developer. As a result, I made changes and changed the design

# Week 12

## Adil Akhmetov

This week I helped my frontend developer with the new design on record page. Also, I refactored the code a little bit to follow the clean code. Then, I configured the new server (Synchronous Speech Recognition service) to sleep like the other services. Then, we had a meeting with our designer about the new sections and I approved the design for the record view, search results and filter by day pages. I checked the current MVP on Android device and it seemed to work okay. Finally, I researched platforms where we could write our diploma document on LaTEX and ended up with the decision to use both vscode and overleaf (for collaborative editing with Balzhan).

## Aruzhan Makhmutova

This week I approved the visual design of the new sections. Developed the design for the record review, search results, and filter by day pages. Created the functionality for the "tracker and mood analysis" section

## Balzhan Jumabekova

This week I have used System Usability Scale and provided UX-testing of our app in order to detect possible errors and bugs. Testing showed that the NPS metric of the VONO app was greater than that of the Journify app. Although the interface of the second application was more user-friendly, the first application met all the minimum requirements of the task. According to independent ratings of respondents, the Memento app scored the highest NPS. I have recorded one of the examples of these tests. I found some students to test three apps such as Vono, Journify, and Memento. In addition, I have continued writing an introduction to the document including some research about cognitive diseases. 

Usability testing: https://youtu.be/KaOHNrzbqm4

## Madiyar Mukushev

This week I made a mood tracker. I had several datasets that contained different sources (social networks, news, etc). And I chose the dataset where the source is Twitter, because it is the closest to the potential texts of our target users. There are only two classes, positive and negative. It would be nice to have a third class - neutral, but we will add this class using thresholds.
Neural network architecture (by layers): Embedding -> Bidirectional LSTM (2-layers) -> Linear. 
For this to work properly, we at least need pre-trained Embedding, otherwise the quality of the model will be poor. And I came across one pre-trained Embedding of Russian words with a 1000000 word dictionary, which suits our task perfectly. I trained the network, checked the metrics on the tests, and separately tested on my examples. The model returns one score from 0 to 1. 0 is negative, 1 is positive. I used thresholds to distinguish negative text from positive text, I also added a neutral class. If the score is below 0.25, the result will be negative. If it's higher than 0.7, then it's positive. If between, then it's neutral.

## Timur Demenov

This week I did some code refactoring, stylistic changes and added new components and pages according to the design. The main page was changed and work was done on the authorization page. A card with random quotes was added to the main page. To connect, an endpoint from the backend was used, which pulls up random quotes. Also on the main page is a list of recent entries for convenience and two cards: gratitude and free writing. Inside each of them is described what they do.

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
