require "graphql/client"
require "graphql/client/http"

class GithubGraphqlApiClient
  attr_reader :client, :schema

  def client
    @client ||= GraphQL::Client.new(schema: schema, execute: http)
  end

  def schema
    schema ||= GraphQL::Client.load_schema(http)
  end

  private

  def http
    @http ||= GraphQL::Client::HTTP.new(endpoint) do
      def headers(context)
        {
          Authorization: "Bearer #{ENV['GITHUB_ACCESS_TOKEN']}"
        }
      end
    end
  end

  def endpoint
    "https://api.github.com/graphql"
  end
end
