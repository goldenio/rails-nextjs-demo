Rails.application.routes.draw do
  use_doorkeeper
  devise_for :managers
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    namespace :frontend do
      resources :users, only: :index
    end

    namespace :backend do
      resources :users, only: :index
    end
  end
end
