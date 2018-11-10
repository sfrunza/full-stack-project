Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/home' => 'static_pages#index'
  get '/pricing' => 'static_pages#index'
  get '/photo' => 'static_pages#index'
  get '/contact' => 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :costumers, only: [:index, :create]
    end
  end

end
