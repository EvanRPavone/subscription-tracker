class Category {
    static all = []

    constructor({id, name, subscription_id}) {
        this.id = id
        this.name = name
        this.subscriptionId = subscription_id

        Category.all.push(this)
    }

    renderLi(){
        return `<li>Category - ${this.name}</li>`
    }
}