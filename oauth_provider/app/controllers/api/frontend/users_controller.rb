# frozen_string_literal: true

module API
  module Frontend
    class UsersController < ::API::Frontend::BaseController
      def index
        render json: { message: 'Rails Frontend API say hello to frontend client' }
      end
    end
  end
end
