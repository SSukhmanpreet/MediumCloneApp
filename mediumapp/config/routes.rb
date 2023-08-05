Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :articles
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "api/v1/articles#index"
  get 'search', to: 'api/v1/articles#search'
  post 'create', to: 'api/v1/articles#create'
  delete 'delete', to: 'api/v1/articles#delete'
  put 'update', to: 'api/v1/articles#update'

  get 'recommended_posts', to: 'api/v1/articles#recommended_posts'
  get 'top_posts', to: 'api/v1/articles#top_posts'
  get 'articles_by_topic', to: 'api/v1/articles#articles_by_topic'

  get 'drafts', to: 'api/v1/articles#drafts'

  get 'revisions', to: 'api/v1/articles#revisions'

  get 'save_for_later', to: 'api/v1/articles#save_for_later'
  

  # route for login
  resources :users, only: [:create]
  post '/login', to: 'authentication#create'
  get '/login', to: 'authentication#new' # Route to render the login form view

  #route for register
  post 'register', to: 'registration#create'

  # route for follow and unfollow
  resources :profiles, only: [:show] do
    member do
      post 'follow'
      delete 'unfollow'
    end
    collection do
      get :my_profile
    end
  end
end