# frozen_string_literal: true

module API
  module Frontend
    class UsersController < ::API::Frontend::BaseController
      def index
        render json: { message: 'This is the frontend API' }
      end
    end
  end
end
