const subscriptionContainer = document.querySelector('#subscription-container')
const newSubscriptionForm = document.querySelector('#new-subscription-form')
const newSubscriptionNameInput = document.getElementById('new-subscription-name')
const newSubscriptionPriceInput = document.getElementById('new-subscription-price')
const newSubscriptionDateInput = document.getElementById('new-subscription-date')
const newSubscriptionPlanInput = document.getElementById('new-subscription-plan')

subscriptionContainer.addEventListener('submit', handleSubmitCategoryForm)

function handleSubmitCategoryForm(e){
    e.preventDefault()
    if(e.target.className = 'subscription-category-form'){
        let name = e.target.elements[0].value
        let subscriptionId = e.target.dataset.subscriptionId

        fetch("http://localhost:3000/categories", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accepts: 'application/json'
            },
            body: JSON.stringify({
                name: name,
                subscription_id: subscriptionId
            })
        })
        .then(function(resp){
            return resp.json()
        })
        .then(function(categoryJsonObj){
            let subscriptionCategoryUl = document.getElementById(`${categoryJsonObj.subscription_id}-categories`)
            subscriptionCategoryUl.innerHTML += makeOneCategoryObjLI(categoryJsonObj)
        })
    }
}

function makeBody(){
    return JSON.stringify({
        name: newSubscriptionNameInput.value,
        price: newSubscriptionPriceInput.value,
        paymentDate: newSubscriptionDateInput.value,
        plan: newSubscriptionPlanInput.value
    })
}

newSubscriptionForm.addEventListener('submit', function(event){
    event.preventDefault()
    fetch("http://localhost:3000/subscriptions", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accepts: 'application/json'
        },
        body: makeBody()
    })
    .then(function(resp){
        return resp.json()
    })
    .then(function(jsonSubscriptionObj){
        subscriptionContainer.innerHTML += buildSubscriptionDiv(jsonSubscriptionObj)
    })
})

fetch("http://localhost:3000/subscriptions")
.then(function(respFromNetwork){
    return respFromNetwork.json()
})
.then(function(subscriptionsJsObj){
    subscriptionsJsObj.forEach(function(subscriptionObj){
        subscriptionContainer.innerHTML += buildSubscriptionDiv(subscriptionObj)
    })
})

function makeOneCategoryObjLI(categoryObj){
    console.log('Hello, are you working?');
    return `<li>${categoryObj.name}</li>`
}

function buildSubscriptionDiv(subscriptionObj){
    let stringOfCategoryLIs = subscriptionObj.categories ? subscriptionObj.categories.map(makeOneCategoryObjLI).join("") : ''

    return `
    <div id="${subscriptionObj.name}" data-id="${subscriptionObj.id}" class="subscription-div">
        <h3>${subscriptionObj.name}</h3>
        <p>${subscriptionObj.price}</p>
        <p>${subscriptionObj.paymentDate}</p>
        <p>${subscriptionObj.plan}</p>
        <p>Subscription Category:</p>
        <ul id="${subscriptionObj.id}-categories">
            ${stringOfCategoryLIs.length === 0 ? "No Category Assigned" : stringOfCategoryLIs}
        </ul>
        <form data-subscription-id="${subscriptionObj.id}" class="subscription-category-form">
            <input type="text" placeholder="Category Name">
            <br/>
            <input type="submit" value="Add Category!">
            </form>
        </div>
    `
}

