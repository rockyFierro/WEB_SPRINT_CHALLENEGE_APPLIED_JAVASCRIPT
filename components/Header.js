// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(date, title, temp) {
    const headerBox = document.createElement('div')
    headerBox.classList.add('header')
    const dateLine = document.createElement('span')
    dateLine.classList.add('date')
    const newspaperTitle = document.createElement('h1')
    const tempDay = document.createElement('span')
    tempDay.classList.add('temp')

    headerBox.appendChild(dateLine)
    headerBox.appendChild(newspaperTitle)
    headerBox.appendChild(tempDay)

    return headerBox
}

document.getElementsByClassName('header-container')[0].appendChild(
    Header('MARCH 28, 2020', 'Lambda Times', '98°')
)
