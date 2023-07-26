# frozen_string_literal: true

module API
  module Backend
    class UsersController < ::API::Backend::BaseController
      def index
        render json: { message: 'This is the backend API' }
      end
    end
  end
end
