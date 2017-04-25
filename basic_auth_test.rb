require "minitest/autorun"
require_relative 'basic_auth.rb'
require 'uri'
require 'net/http'
require 'net/https'
load "../local_env.rb" if File.exists?("../local_env.rb")

class TestBasicCredentials < Minitest::Test

    def test_unsuccessful_connection_access_denied_401
        uri = 'https://api.baseurl.com/'
        username = 'wrongkey'
        secret = 'wrong_user_secret'
        account_id = '12345'
        testconnection = SimpleHTTP.new(uri, username, secret, account_id)
        response = testconnection.request()
        response_code = response
		assert_equal("401", response_code)
	end	

    def test_successful_connection_returns_code_200
        uri = 'https://api.baseurl.com/'
        username = "username"
        secret = "password/api key"
        account_id = "12345"
        testconnection = SimpleHTTP.new(uri, username, secret, account_id)
        response = testconnection.request()
        response_code = response
		assert_equal("200", response_code)
	end	
    
    def test_create_uri_string
        uri = 'https://api.rubiconproject.com/'
        username = "username"
        secret = "password/api key"
        account_id = "12345"
        testconnection = SimpleHTTP.new(uri, username, secret, account_id)
        full_uri = testconnection.get_uri
        assert_equal("testing building of path", full_uri)
    end
        
end