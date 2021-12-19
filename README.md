# **React Developers | Coding Challenge**

![Logo!](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/320px-Rick_and_Morty.svg.png)

## **Table of content 🗜️**

- [Features](#features-)
- [Technologies](#technologies-)
- [Screenshots](#screenshots-)
- [API](#api-%EF%B8%8F)
- [Author](#author)

##  [project](https://rick-and-morty-emanuel-js.vercel.app/)
### ***Features*** 🔭

- List All Characters
- List Each Character’s Episodes
- Dark and Light modes
- Searching characters by name
- Liking or disliking characters


## **Technologies** <img width="30px" src="https://img.icons8.com/fluency/48/000000/chatbot.png"/>

- NextJs
- ReactJs
- GraphQL(Apollo Client)
- StyledComponents
- React Context

> Dependencies

| Package Names | Version |
| --- | --- |
|graphql|16.2.0|
|next|12.0.7|
|react-icons|4.3.1|
|react|17.0.2|
|styled-components|5.3.3|
|  |  |

>Tools
- Git & GitHub
- VsCode
- CMD

## **Screenshots 📷** 

> Light Theme

<img width=60% src="https://imgur.com/5ilruy7.png" >

<img width=60% src="https://imgur.com/zqd5iv2.png" >

> Dark Theme

<img width=60% src="https://imgur.com/VGiXGix.png" >

<img width=60% src="https://imgur.com/0QHOBeR.png" >

## **API ⚙️**
> https://rickandmortyapi.com/graphql
***Sample query***
```gql

 query {
            characters(page: 1) {
              info {
                count
                pages
              }
              results {
                name
                id
                species
                location {
                  name
                  id
                }
                image
                origin {
                  name
                  id
                }
                episode {
                  id
                  episode
                  air_date
                }
              }
            }
          }
```

## **Author**

> Meet Amanuel Awol <img width="25px" src="https://img.icons8.com/external-linector-flat-linector/64/000000/external-avatar-man-avatar-linector-flat-linector-4.png"/>


I'm a full stack software engineer who enjoys both backend work and frontend work, taking charge of tasks from design to deployment. I have a deep understanding of the MEAN stack and proficiency in many languages. I am always eager to learn new technologies, frameworks, and languages because it is my passion.
