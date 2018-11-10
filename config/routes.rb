Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/home' => 'static_pages#index'
  get '/pricing' => 'static_pages#index'
  get '/photo' => 'static_pages#index'
  get '/contact' => 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :costumers, only: [:index]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
