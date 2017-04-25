require 'uri'
require 'net/http'
require 'net/https'

class SimpleHTTP

 
  # def initialize(uri, user, pass, account_id) //this is if you are calling this from another file, passes in credentials
  #   @uri = URI.parse(uri)   
  #   @username = user
  #   @password = pass
  #   @account_id = account_id
  # end

def initialize() #this is if you call it from this file.
    @uri = URI.parse('https://api.baseurlhere.com/')
    @username = "username"
    @password = "password"
    @account_id = "account#"
end


  def request path=nil
    https = Net::HTTP.new(@uri.host, 443) #if it is http it uses port 80
    https.use_ssl = true
#    req = Net::HTTP::Get.new(@uri.request_uri)
    req = Net::HTTP::Get.new(@uri + get_uri())
    req.basic_auth(@username, @password)
    https.request(req).code
  
  end
    
  def get_uri()
      "pathhere" + @account_id + "details of what is being pulled back here, varies from API to API"
  end
end

# testconnection = SimpleHTTP.new()
# puts testconnection.request()
def call()
testconnection = SimpleHTTP.new()
  response = testconnection.request()  #pulls back your status code - 200 is success, 401 = access denied which means you are calling correct
                                        #base url, but something could be wrong with credentials or path.
    puts response
 end
      
call() #calls the function to test the API.