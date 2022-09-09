# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "home#index"

  namespace :api, defaults: { format: :json } do
    namespace :v1, defaults: { format: :json } do
      resources :airlines, param: :slug
      resources :reviews, only: %i[create destroy]
      resources :users, only: :create
      resource :session, only: :create
    end
  end

  get "*path", to: "home#index", via: :all
end
