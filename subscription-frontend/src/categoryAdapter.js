class CategoryAdapter{
    static baseURL = "http://localhost:3000/categories"

    static fetchAndMakeCategories(){
        return fetch(CategoryAdapter.baseURL)
        .then(res => res.json())
        .then(function(categoryArray){
            return categoryArray.forEach(function(category){
                return new Category(category)
            })
        })
    }
}