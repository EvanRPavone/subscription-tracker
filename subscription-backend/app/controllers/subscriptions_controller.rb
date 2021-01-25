class SubscriptionsController < ApplicationController
    def index
        subscriptions = Subscription.all
        render({json: subscriptions, include: {categries: {except: [:created_at, :updated_at]}}, except: [:created_at, :updated_at]})
    end

    def create
        subscription = Subscription.create(name: params[:name], price: params[:price], paymentDate: params[:paymentDate], plan: params[:plan])
        render({json: subscription})
    end

    private
end
