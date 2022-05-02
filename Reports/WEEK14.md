# Adil Akhmetov

This week I created another service for quotes and images. Also, mostly I was researching on Literature Review and I have found some interesting articles. Primarily, I was using webofscience and google scholar and read more than 10 articles. And on top of that, I was trying to fix the bug with our mirroring service, and the reason behind that is that our remote repo doesn't have setup Git LFS. I'm still in progress of solving this issue.

# Balzhan Jumabekova

This week I did a research on the structure of the dissertation introduction. To do this, I used several sources. I also found the official statistics of psychological illnesses among Kazakhstanis. Next, I set the goal of the dissertation and tasks to achieve this goal. Then I structured the entire document, making it a brief overview in the thesis outline.

# Aruzhan Makhmutova

This week I made changes to the initial pages of onboardings that welcome the user. I added illustrations and worked the text to match the main benefits of our app. Made changes to the registrations under the developer's comments. Made the same design for all pages, with a pop up feature. Added new types of gratitude and free writing posts and made a user manual for users of this type of posts. Design the gratitude and free writing page itself. Also, added all new elements in the UI kit and components. Redesigned cards of various types, such as check in, gratitude and so on. Reflected new cards on all the entries. Also collected references and worked on the visual part of the mud tracker.

# Madiyar Mukushev

This week I added a health check for both streaming and synchronous services. While testing the application, we encountered the problem that occasionally the Speechkit API doesn't work. We currently have two services, one synchronous service, which only sends the result at the end of the recording, and a streaming one, which sends the result in real time as we record. The default is streaming mode, but if the health check reports that the service isn't working, it automatically switches to synchronous speech recognition. If synchronous doesn't work either, the application will let the client know that the speech recognition doesn't work.

# Timur Demenov

This week, I've been hooking up a service status check endpoint. Thanks to this, before recording audio, we have a check that allows you to switch between services. I also added a page with a choice of today's mood, it allows you to determine the current mood of the client and writes everything to the database. In the future, it is planned to display graphs using all the collected statistics. Additionally, I started finalizing the gratitude and free writing pages, the profile page was slightly changed, where dynamic fields were added
