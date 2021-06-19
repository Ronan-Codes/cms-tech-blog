# The Tech Blog [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Description

* The Tech Blog allows developers to publish blog posts that other users can comment on. When logged in, users can update or delete their own posts. Users can also delete their own comments. This is a CMS-style blog, much like a Wordpress site.

 ## Table of Contents

1. [Description](#Description)
2. [Technologies](#Technologies)
3. [Installation](#Installation)
4. [Usage](#Usage)
5. [License](#License)
6. [Contributing](#Contributing)
7. [Author](#Author)
8. [GitHub](#GitHub)


## Technologies
* Bootstrap & CSS
* JavaScript
* Express.js
* MySQL2
* Sequelize
* Dotenv
* Express, Express-Session, Express-Handlebars
* Connect-Session-Sequelize
* Bcrypt

## Installation
1. Clone repository
2. `npm install` at root of folder
    * This will install all the dependencies listed in package.json
3. At root of application, create an .env file and insert MySQL credentials (username & password). DB_Name must be 'tech_blog_db'
    * DB_NAME='tech_blog_db'
    * DB_USER='username'
    * DB_PW='password'


## Usage
### Run Locally
1. At application's root, connect to mysql and run "source db/schema.sql". (Creates tech_blog_db).
3. Initiate the server with "npm start".
4. Visit http://localhost:3001/login in your browser (Preferred: Chrome / Safari)
5. Now, you can sign-up/login, create a post, edit/delete your own post, & read/comment on other posts.

### Heroku
1. Visit the live site at [heroku]()
2. Now, you can sign-up/login, create a post, edit/delete your own post, & read/comment on other posts.

## License
This project is in the public domain and free for any and all users! For more information on this (un)licensing statement, visit https://unlicense.org/

## Contributing
* If you'd like to contribute to this project, please follow the rules of the [Contributor Covenant](https://www.contributor-covenant.org/)


## Author
This application was written and developed by Ronan Galvez for Module 14th's challenge assignment of the UCF Coding Bootcamp. For any questions/suggestions/concerns, open an issue or contact me directly at [galv.ronan@gmail.com](galv.ronan@gmail.com). Check out the rest of my work on GitHub at [Ronan-Codes](https://github.com/Ronan-Codes).

## GitHub
 * [GitHub Repository](https://github.com/Ronan-Codes/cms-tech-blog.git)
