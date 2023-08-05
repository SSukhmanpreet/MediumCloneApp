Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :articles
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # get all articles -> if given parameter filters data accordingly
  root "api/v1/articles#index"

  # search articles -> user can search by providing anything from title, author, topic
  get 'search', to: 'api/v1/articles#search'

  # create article
  post 'create', to: 'api/v1/articles#create'

  # delete article
  delete 'delete', to: 'api/v1/articles#delete'

  # update article
  put 'update', to: 'api/v1/articles#update'

  # recommended posts
  get 'recommended_posts', to: 'api/v1/articles#recommended_posts'

  # top posts
  get 'top_posts', to: 'api/v1/articles#top_posts'

  # articles by topic
  get 'articles_by_topic', to: 'api/v1/articles#articles_by_topic'

  # get all drafts
  get 'drafts', to: 'api/v1/articles#drafts'

  # get all revisions
  get 'revisions', to: 'api/v1/articles#revisions'

  # articles saved for later for each user
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