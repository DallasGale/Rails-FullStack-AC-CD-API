Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'songs', to: 'songs#index'
      post 'songs/create'
      # get '/show/:id', to: 'songs#show'
      # delete '/destroy/:id', to: 'songs#destroy'

      # resources :albums
   
      get 'albums', to: 'albums#index'
      post 'albums/create'
      get 'albums/show/:id', to: 'albums#show'
      delete 'albums/destroy/:id', to: 'albums#destroy'

      put 'albums/:id', to: 'albums#update'
      patch 'albums/:id', to: 'albums#update'
    end
  end

  root 'homepage#index'
  get '/*path' => 'homepage#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
