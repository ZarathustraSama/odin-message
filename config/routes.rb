Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'profile/show(/:id?)' => 'profile#show'
      put 'profile/update'
      post 'profile/create'
      get 'users/index'
      get 'messages/index'
      post 'messages/create'
    end
  end
  root 'homepage#index'
  get '/profile(/:id?)' => 'profile#index'

  devise_for :users, controllers: { registrations: 'users/registrations' }

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
