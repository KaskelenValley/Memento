# CSS 410 Research tools and methods

## Warning

This is only a mirror. Original project is hosted there: https://github.com/KaskelenValley/Memento

## Team members

- **Adil Akhmetov** (_180103095_)- DevOps (GitHub account: @weeebdev)
- **Aruzhan Makhmutova** (_180103156_) - UI&UX Designer (GitHub account: @aruzhanm)
- **Balzhan Jumabekova** (_180103008_) - Project Manager (GitHub account: @balzhann)
- **Madiyar Mukushev** (_180113016_) - ML Engineer (GitHub account: @truebeliever17)
- **Timur Demenov** (_180103284_) - FullStack Developer (GitHub account: @timmydream)

## Project

Memento - an application that helps you to remember your daily highlights. Basically it's an audio diary or journaling app that helps you to record your daily activities and save them in a cloud. With a powerful searching engine you're able to find any memory that you've recorded. You can also share your recordings with your friends and family. *Never forget the matter!*

## Alternatives / Market research

| Research alternatives
- Journify
- VK audio messages
- Telegram saved messages

| Market Research:

- About 10,000 people in Kazakhstan are diagnosed with some type of dementia. The Ministry of Health predicts approximately 150-200 thousand patients in the country, and if they are identified, then the state will definitely think about this problem.
- In Kazakhstan, for 30 years of independence, the study of the problem of dyslexia has not yet begun. The country has never conducted research on the number of dyslexics, moreover, there are no recommendations for working with children with such a developmental feature. 
- Journify App (iOS and Android) on january 2022:  
<5000 downloads worldwide  
<$5000 revenue  
- VK App (iOS and Android) on january 2022:  
1m downloads worldwide  
$400K revenue  
- Telegram (iOS and Android) on january 2022:  
27m downloads worldwide  
- Notion (iOS and Android) on january 2022:  
600K downloads worldwide  
$40K revenue  
- Direct competitors: Journify
- Secondary competitors: Telegram saved messages, VK audio messages
- Distant competitors: Mobile notes, diary  
Resources:  
- (https://vlast.kz/obsshestvo/46142-my-ozidaem-primerno-150-200-tysac-bolnyh-demenciej-i-boleznu-alcgejmera.html)
- https://vlast.kz/obsshestvo/40445-zabytaa-stranoj-disleksia.html
- https://app.sensortower.com



## Technologies

In our project we use:
- React
- Nodejs
- Golang
- MongoDB
- Figma
- Python 
   
Will be updated during development

## Pages / Activities

We will have following pages:

- Login page
- Register page
- Personal page
- Journal entries page
- Record page
- Statistics page
- Settings page

## Goals

- To help people to remember their daily activities
- To help people with cognitive/visual/other disabilities to facilitate their lives
- Instead of writing manually the user will be able to record their voice and save it in a cloud
- To help people to find their memories
- To help people record lectures and other important events

Will be updated during development

## User Personas

The 1st user: Berik the dyslexic  
Occupation: artist/ graphic designer  
Age: 27  
Gender: male  
Location: Almaty, Kazakhstan  
Education: Art School  

Description: Berik is an artist who suffers from dyslexia. He likes to read books, but has to do it by audiobooks. Berik is a creative person that likes to take some quick notes, sketches while he has an inspiration. It would be really easy for him to record his ideas using audio journaling and after that to send the converted text to his clients.

The 2nd user: Galmyzhan Ata the pensioner  
Occupation: pensioner  
Age: 67  
Gender: male  
Location: Semey, Kazakhstan  
Education: Polytechnic institute 

Description: Galymzhan Ata is a pensioner with dementia. The doctors advised him to write down everything he had done earlier in a diary and reread it. But since Galymzhan gets tired of constantly writing down his thoughts, it is easier for him to record them on a dictaphone. However, listening to your audio recordings is completely inconvenient, so an audio journaling will help him with this, converting speech into text.

The 3d user: Alina the student  
Occupation: -  
Age: 19  
Gender: female  
Location: Nur-Sultan, Kazakhstan  
Education: IT   

Description: Alina is a student whose studies fell during the pandemic and online learning. Due to the huge amount of information, it is very difficult for her to constantly write notes of long lectures. An audio journaling integrated into the zoom will help solve her problem, recording the speech of the teacher and converting it into text.

## User stories

- As a user I want to register in the app
- As a user I want to record a voice that will automatically be converted to text, so I don't have to write it down manually
- As a user I want to record lectures, so that I can listen to the recordings later
- As a user I want to view my old notes with the generated text and original audio, so I can look up what I need or remember something
- As a user I want to edit the generated text, so that I can correct possible errors
- As a user I want to delete notes that I don't need
- As a user I want to share records with others, so that others can view my records
- As a user I want to find a note by words, so I don't have to go through them all manually
- As a user I want to filter records by date, so that I can see what I need

## Sitemap, Page descriptions

![sitemap](https://user-images.githubusercontent.com/49468087/153760602-6a2d0ca3-e1bc-4480-8646-f72d2fbd3db4.png)

## Non-Functional requirements

- The application must be built in React
- The application must be hosted on Heroku
- The application must use Yandex SpeechKit voice recognition framework
- The application must use FastAPI for ML backend services

## Risks

- There may be problems integrating the [Yandex SpeechKit](https://cloud.yandex.ru/services/speechkit) voice recognition framework
- There may be problems with recognition of names, company names and the like, which can frustrate the user
- Speech recognition performance may not be good enough that the user may prefer to write by hand rather than record the voice

## Mockups, Wireframes

_Put here images of your wireframes_

## Future iterations

- Mood manager/analyzer
- Translator
- Summary of the record
- Integration with OK Google and Siri
