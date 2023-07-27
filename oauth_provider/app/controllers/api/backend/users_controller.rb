# frozen_string_literal: true

module API
  module Backend
    class UsersController < ::API::Backend::BaseController
      def index
        render json: { message: 'Rails Backend API say hello to backend client' }
      end
    end
  end
end
