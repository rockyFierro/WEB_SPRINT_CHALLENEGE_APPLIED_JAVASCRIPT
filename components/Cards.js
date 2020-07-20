// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function cardMaker(article){
    const cardBox = document.createElement('div')
    cardBox.classList.add('card')
    const cardHeadline = document.createElement('div')
    cardHeadline.classList.add('headline')
    const cardAuthorProfile = document.createElement('div')
    cardAuthorProfile.classList.add('author')
    const cardPicContainer = document.createElement('div')
    cardPicContainer.classList.add('img-container')
    const cardImg = document.createElement('img')
    const cardAuthorName = document.createElement('span')

    cardHeadline.textContent = article.headline
    cardAuthorName.textContent = `By ${article.authorName}`
    cardImg.src = article.authorPhoto

    cardBox.appendChild(cardHeadline)
    cardBox.appendChild(cardAuthorProfile)
    cardAuthorProfile.appendChild(cardPicContainer)
    cardPicContainer.appendChild(cardImg)
    cardAuthorProfile.appendChild(cardAuthorName)

    return cardBox
}

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(
        response => Object.values(response.data.articles).forEach(
            el => {
                el.forEach(
                    el2 => {
                        document.getElementsByClassName('cards-container')[0].appendChild(
                            cardMaker(el2)
                        )
                        console.log(el2)
                    }
                )
            }
        )
    )