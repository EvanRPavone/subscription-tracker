class CategoriesController < ApplicationController
    # def index
    #     categories = Category.all
    #     render({json: categories, include: {subscriptions: {except: [:created_at, :updated_at]}}, except: [:created_at, :updated_at]})
    # end

    def create
        category = Category.create(name: params[:name], subscription_id: params[:subscription_id])
        render json: category
    end
end
