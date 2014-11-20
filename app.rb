require_relative 'config/environment'

class App < Sinatra::Base

  get "/" do
    @i = 0
    erb :'index'
  end

end