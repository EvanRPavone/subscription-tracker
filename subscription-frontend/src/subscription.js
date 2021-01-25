class Subscription {
    static all = []
    static subscriptionContainer = document.getElementById('subscription-container')

    constructor({id, name, price, paymentDate, plan}) {
        this.id = id
        this.name = name
        this.price = price
        this.paymentDate = paymentDate
        this.plan = plan

        this.main = document.createElement('div')
        this.main.id = `subs-${this.id}`
        this.details = document.createElement('div')
        this.details.id = `subs-${this.id}-details`
        this.categories = document.createElement('div')
        this.categories.id = `subs-${this.id}-categories`
        this.editButton = document.createElement('button')
        this.editButton.innerText = "Edit Subscription"
        this.main.append(this.details, this.categories, this.editButton)

        this.form = document.createElement('form')

        this.editButton.addEventListener('click', this.renderEditSubscriptionForm)
        this.form.addEventListener('submit', this.submitEditSubscriptionForm)
        Subscription.all.push(this)
    }

    renderDetails() {
        this.details.innerHTML = `
        <p>Name: <span>${this.name}</span></p>
        <p>Price: <span>$${this.price}</span></p>
        <p>Re-occuring Date: <span>${this.paymentDate}</span></p>
        <p>Plan: <span>${this.plan}</span></p>`
    }

    allCategories(){
        return Category.all.filter(category => category.subscriptionId == this.id)
    }

    renderCategories(){
        this.categories.innerHTML = this.allCategories().map(category => category.renderLi()).join("")
    }

    renderEditSubscriptionForm = () => {
        this.editButton.disabled = true
        console.log(this);
        this.details.innerHTML = ' '
        this.details.appendChild(this.form)
        this.form.innerHTML = `
        <label>Name:</label>
        <input type="text" name="name" value="${this.name}">
        <br/>
        <label>Price:</label>
        <input type="text" name="price" value="${this.price}">
        <br/>
        <label>Re-Occuring Date:</label>
        <input type="date" name="paymentDate" value="${this.paymentDate}">
        <br/>
        <label>Plan:</label>
        <input type="text" name="plan" value="${this.plan}">
        <br/>
        <input id="edit-subscription" type="submit" value="Edit">
        `
    }

    submitEditSubscriptionForm = (e) => {
        e.preventDefault()
        this.form.querySelectorAll('input').forEach(function(input){
            input.name !== "submit" && (this[`${input.name}`] = input.value)
        }, this)
        this.editButton.disabled = false
        this.renderDetails()
        SubscriptionAdapter.editSubscription(this)
    }

    
}