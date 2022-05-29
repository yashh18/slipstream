# SLIPSTREAM - The Movie Recommendation Engine

## Submission for MICROSOFT ENGAGE 2022 ✨
![Python](https://img.shields.io/badge/Python-3.10-blueviolet)
![Framework](https://img.shields.io/badge/Framework-Flask-red)
![Frontend](https://img.shields.io/badge/Frontend-HTML/CSS/JS-green)
![API](https://img.shields.io/badge/API-TMDB-important)

Content-Based Recommender System using AJAX which recommends movies similar to the likes of user and analyses the sentiments on the reviews given by the user for that movie.

<p align = "center"> <img src = "https://user-images.githubusercontent.com/81583289/170741737-05f353c4-e2ba-4690-b899-5fe278154596.png"> </p>  
<!-- demo video link with badge -->

This web application provides all the details of the requested movie such as overview, genre, release date, rating, runtime, top cast, reviews, recommended movies, etc.

- The details of the movies(title, genre, runtime, rating, poster, etc) are fetched using an API by TMDB, https://www.themoviedb.org/documentation/api
- Using the IMDB ID of the movie in the API, Web scraping is done to get the reviews given by the user in the IMDB site using `beautifulsoup4` and sentiment analysis is performed on those reviews.

## Features and Interface
1. <b>Home page</b> 

- A pop-up shows up on opening the app telling about the auto suggestion feature used for searching the movies

<img width="1438" alt="Screenshot 2022-05-29 at 7 37 58 PM" src="https://user-images.githubusercontent.com/81583289/170873853-d7e64447-3024-4373-bba1-afef42616c79.png">

- Seamless landing page with `Sign IN/Sign UP` page for login

<img width="1438" alt="Screenshot 2022-05-29 at 7 38 08 PM" src="https://user-images.githubusercontent.com/81583289/170873862-08d65dd7-aec1-4c07-a880-82df00bb5081.png">

2. <b> Feedback form </b>
- One of the most important part of Agile is feedback, therefore the app has a feedback form in the footer

<img width="1438" alt="Screenshot 2022-05-29 at 7 38 30 PM" src="https://user-images.githubusercontent.com/81583289/170873875-48184464-724e-4851-8811-4141c6f629e0.png">

3. <b> Sign IN/Sign UP page </b>
- Users can register themselves on the app and login into their accounts using the credentials

<img width="1438" alt="Screenshot 2022-05-29 at 7 39 01 PM" src="https://user-images.githubusercontent.com/81583289/170873931-04e2f68e-dcc6-47a6-9b49-72de05e088da.png">

<img width="1438" alt="Screenshot 2022-05-29 at 7 39 09 PM" src="https://user-images.githubusercontent.com/81583289/170873939-6fbb15e3-ab1f-4437-9da6-6815b88159b2.png">

4. <b> Searching the movie </b>
- Enter the movie's name you want to get recommendations of 

<img width="1438" alt="Screenshot 2022-05-29 at 7 39 44 PM" src="https://user-images.githubusercontent.com/81583289/170873955-855b73a1-738f-4ac5-a2f9-f891e7c0198e.png">

- The app takes the input of movie and shows all the details of movie like ratings, genre, release date, runtime etc.

<img width="1438" alt="Screenshot 2022-05-29 at 7 40 06 PM" src="https://user-images.githubusercontent.com/81583289/170874013-4e788671-161b-4337-bf61-7136a06e077b.png">

- Shows the top cast of the movie

<img width="1438" alt="Screenshot 2022-05-29 at 7 40 14 PM" src="https://user-images.githubusercontent.com/81583289/170874030-3140fbb7-2861-4786-9402-9affc770cad2.png">

- It also shows the reviews of the movie which are fetched from IMDb

<img width="1438" alt="Screenshot 2022-05-29 at 7 40 40 PM" src="https://user-images.githubusercontent.com/81583289/170874049-d5c69dc9-014a-4e8c-b44c-bbb84043c562.png">

5. <b>Recommendation</b> 

- The app then finally suggests movies similar to the likes of user 

<img width="1438" alt="Screenshot 2022-05-29 at 7 40 50 PM" src="https://user-images.githubusercontent.com/81583289/170874080-abab24b6-4817-4c1f-8f84-3a7581c92f3f.png">

## Architecture
![architecture](architecture.png)

## Similarity Score : 

How does it decide which item is most similar to the item user likes? Here come the similarity scores.
   
It is a numerical value ranges between zero to one which helps to determine how much two items are similar to each other on a scale of zero to one. This similarity score is obtained measuring the similarity between the text details of both of the items. So, similarity score is the measure of similarity between given text details of two items. This can be done by cosine-similarity.
   
## How Cosine Similarity works?
  Cosine similarity is a metric used to measure how similar the documents are irrespective of their size. Mathematically, it measures the cosine of the angle between two vectors projected in a multi-dimensional space. The cosine similarity is advantageous because even if the two similar documents are far apart by the Euclidean distance (due to the size of the document), chances are they may still be oriented closer together. The smaller the angle, higher the cosine similarity.
  
![image](https://user-images.githubusercontent.com/36665975/70401457-a7530680-1a55-11ea-9158-97d4e8515ca4.png)

  
More about Cosine Similarity : [Understanding the Math behind Cosine Similarity](https://www.machinelearningplus.com/nlp/cosine-similarity/)

## Tools and Languages used
<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" alt="pandas" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn" width="40" height="40"/> </a> </p>

## How to get the API key?

Create an account in https://www.themoviedb.org/, click on the `API` link from the left hand sidebar in your account settings and fill all the details to apply for API key. If you are asked for the website URL, just give "NA" if you don't have one. You will see the API key in your `API` sidebar once your request is approved.

## How to run the project?

1. Clone this repository in your local system.
2. Install all the libraries mentioned in the [requirements.txt](https://github.com/kishan0725/The-Movie-Cinema/blob/master/requirements.txt) file with the command `pip install -r requirements.txt`.
3. Replace YOUR_API_KEY in **both** the places (line no. 23 and 43) of `static/recommend.js` file.
4. Open your terminal/command prompt from your project directory and run the `main.py` file by executing the command `python main.py`.
5. Go to your browser and type `http://127.0.0.1:5000/` in the address bar.
6. Hurray! That's it.

### Sources of the datasets 

1. [IMDB 5000 Movie Dataset](https://www.kaggle.com/carolzhangdc/imdb-5000-movie-dataset)
2. [The Movies Dataset](https://www.kaggle.com/rounakbanik/the-movies-dataset)
3. [List of movies in 2018](https://en.wikipedia.org/wiki/List_of_American_films_of_2018)
4. [List of movies in 2019](https://en.wikipedia.org/wiki/List_of_American_films_of_2019)
5. [List of movies in 2020](https://en.wikipedia.org/wiki/List_of_American_films_of_2020)

## Need help?

Feel free to contact me on [LinkedIn](https://www.linkedin.com/in/kataria-yash/) 

[![Instagram](https://img.shields.io/badge/Instagram-follow-purple.svg?logo=instagram&logoColor=white)](https://www.instagram.com/yashkatariaa_) [![Twitter](https://img.shields.io/badge/Twitter-follow-blue.svg?logo=twitter&logoColor=white)](https://twitter.com/yashh18_) 

---------

```javascript

if (youEnjoyed) {
    starThisRepository();
}

```

-----------

