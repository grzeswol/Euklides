require 'sinatra'

def nwd(a,b)
	a, b = a.abs, b.abs
	while b > 0
		a,b = b, a % b
	end
	a
end


get '/' do
	erb :index, :layout => false do
		erb :page_layout
	end
end
