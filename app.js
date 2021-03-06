const searchfood = () =>{
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   // error handling
   if(searchText == ''){
      console.log('please write something to display');
   }else{
      // console.log(searchText);
   searchField.value = '';
   // loadDataSection
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   // console.log(url);
   fetch(url)
      .then(response => response.json())
      .then(data => displaySearchResult(data.meals))
}
// searchfood();
   }
//    // console.log(searchText);
//    searchField.value = '';
//    // loadDataSection
//    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
//    // console.log(url);
//    fetch(url)
//       .then(response => response.json())
//       .then(data => displaySearchResult(data.meals))

// }
// // searchfood();

const displaySearchResult = meals =>{
   // console.log(meals);
   
   const searchResult = document.getElementById('search-result');
   // searchResult.innerHTML = '';//not recommanded
   searchResult.textContent = '';//recommanded
   // error handling
   if(meals.length === 0){
      console.log('No result found');
   }else{
      console.log('fine');
   }
   
   meals.forEach(meal =>{
   // console.log(meal);
   
   const div = document.createElement('div');
  
   div.classList.add('col');
   div.innerHTML = `
     <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100"> 
      <img src="${meal.strMealThumb}" class="card-img-top" alt="">
      <div class="card-body">

        <h5 class="card-title font-monospace fs-3 text">${meal.strMeal}</h5> 

        <p class="card-text text-wrap">${meal.strInstructions.slice(0,150)}</p>
      </div>
    </div>
   `;
searchResult.appendChild(div);
   })
 
}

const loadMealDetails = idMeal =>{
   // console.log(idMeal);
   const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
   fetch(url)
   .then(response => response.json())
   .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal =>{
   console.log(meal);
   const mealDetails = document.getElementById('meal-details');
   mealDetails.textContent = ''; // empty section
   const div = document.createElement('div');
   div.classList.add('card');
   div.innerHTML =`
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
         <a href="${meal.strYoutube}" class="btn btn-primary">Enjoy</a>
         </div>
         
   `;
   mealDetails.appendChild(div);
}