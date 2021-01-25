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

    
}