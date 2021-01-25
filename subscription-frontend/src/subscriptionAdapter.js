class SubscriptionAdapter{
    static baseURL = "http://localhost:3000/subscriptions"

    static fetchAndMakeSubscriptions(){
        return fetch(SubscriptionAdapter.baseURL)
        .then((obj) => obj.json())
        .then(function(subsArray){
            return subsArray.forEach(function(subscription){
                return new Subscription(subscription)
            })
        })
    }

    static editSubscription({id, name, price, paymentDate, plan}){
        return fetch(`${SubscriptionAdapter.baseURL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                subscription: {
                    name,
                    price,
                    paymentDate,
                    plan
                }
            })
        })
    }
}