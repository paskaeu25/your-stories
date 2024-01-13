# Your Stories

Your Stories is an app that lets users log in with their Google account, create, and share stories. They can write a title, description, and publish stories as private or public. Explore the public stories page, delve into details with "Read More," or click on a user to view all their stories.

### Demo 1
![story-demo-1](https://github.com/paskaeu25/your-stories/assets/60621475/03ea48fc-9464-492a-8569-2d4391be082c)
### Demo 2
![stories-demo-2](https://github.com/paskaeu25/your-stories/assets/60621475/cc840f77-dcd7-447a-9027-d90de3c7802f)
### Demo 3
![stories-demo-3](https://github.com/paskaeu25/your-stories/assets/60621475/e4b2fc4c-b88b-4e5f-baee-76e9bb7e2c37)



## How It's Made
Built with Node, Express, and Handlebars for views. MongoDB handles the database, ensuring seamless data management. Materialize for styling.

**Tech used:** Node, Express, Handlebars, MongoDB, Materialize.

StoryHub utilizes Node.js and Express on the server, Handlebars for dynamic views, and MongoDB with Mongoose for data storage. Google OAuth ensures secure user authentication, while Materialize and JavaScript enhance frontend design and interactivity. 


## Optimizations

- Add Login with email/username and password
- Add a modal window to confirm delete
- Implement WebSocket technology for real-time updates
- Add comments to stories

## Lessons Learned

- **OAuth Integration**: Gained expertise in integrating Google OAuth for user authentication.
- **Handlebars Mastery**: Improved skills in crafting dynamic views using Handlebars templates.
- **First time using Materialize**: Acquired proficiency in leveraging Materialize CSS for efficient and visually appealing frontend styling


## How to Use

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/paskaeu25/your-stories myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Create config.env inside config folder

# Add variables to config.env

PORT = [desired port number]
MONGO_URI = [your mongo db connection string]
GOOGLE_CLIENT_ID = [google oath20 api client id]
GOOGLE_CLIENT_SECRET = [google oath20 api client secret]

# Then simply start your app
npm run start

# Then start json server
npm run start
```



