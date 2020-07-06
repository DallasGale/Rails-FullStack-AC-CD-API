Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'songs/index'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'songs/create'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'songs/show'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'songs/destroy'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'albums', to: 'albums#index'
      post 'albums/create'
      get '/show/:id', to: 'albums#show'
      delete '/destroy/:id', to: 'albums#destroy'
    end
  end

  root 'homepage#index'
  get '/*path' => 'homepage#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
