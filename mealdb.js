const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    searchField.value = " ";



    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));

}
const displaySearchResult = meals => {
    const searchResults = document.getElementById('searchResults');
    meals.forEach(meal => {
        // console.log(meal);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal}) " class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                 <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
             </div>
        </div>`;
        searchResults.appendChild(div);
    })
}

const loadMealDetail = mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealId(data.meals[0]))

}
const displayMealId = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('mealDetails');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 350)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">See youtube video</a>
    </div>
    `;
    mealDetails.appendChild(div);
}