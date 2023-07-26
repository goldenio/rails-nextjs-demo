# frozen_string_literal: true

module API
  module Backend
    class BaseController < ::API::BaseController
      before_action :authorize_token

      private

      def authorize_token
        return if doorkeeper_token.application.name == 'credentials-nextjs_backend'

        @errors = 'Invalid token'
        render_failure
      end
    end
  end
end
