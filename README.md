# 📽️ CineFlix - An app for renting movies

It is an online movie store where users can see a list
of movies listed for the renting purpose.

## Features

- View list of movies - movies are fetched from appwrite service
- View each movie details like price, rating, release year etc
- Add movie to the cart
- Remove the selected movie from the cart.

## Technologies

- `Next.js`
- `Tailwind CSS`
- `Redux-toolkit`
- `Appwrite`: `Storage` and `Databases`
- `Axios`

## Local setup

### Clone the Repository:

```
git clone https://github.com/yourusername/CineFlix.git
cd CineFlix
```

### Install Dependencies:

```
npm install
```

### Appwrite Setup:

- Visit [Appwrite](https://cloud.appwrite.io/login) Dashboard and create an account or if you have an account then login to your account.
- Create a new project in the Appwrite dashboard.
- Set up a database named movies in the Appwrite project.
- Configure Appwrite storage for handling movie images.

### Environment Variables:

- Create a .env.local file in the project root.
- Add the following environment variables:

```
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_movies_databases_id
NEXT_PUBLIC_APPWRITE_MOVIES_COLLECTION_ID=your_movies_collection_id
NEXT_PUBLIC_APPWRITE_BUCKET_ID=your_storage_id
```

### Run the App:

```
npm run dev
```

### Open in Browser:

```
Open your browser and go to http://localhost:3000.
```
