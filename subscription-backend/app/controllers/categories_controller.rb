class CategoriesController < ApplicationController
    def create
        category = Category.create(name: params[:name], subscription_id: params[:subscription_id])
        render json: category
    end
end
