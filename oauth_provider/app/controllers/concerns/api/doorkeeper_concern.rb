# frozen_string_literal: true

module API
  module DoorkeeperConcern
    extend ActiveSupport::Concern

    def doorkeeper_unauthorized_render_options(error:)
      Rails.logger.warn error.inspect
      { json: { errors: 'Not Authorized' } }
    end

    private

    def current_resource_owner
      # It won't have resource_owner_id when accessing endpoint in client credentials flow
      return if doorkeeper_token.nil? || doorkeeper_token.resource_owner_id.blank?

      ::User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end

    def render_doorkeeper_unauthorized
      Rails.logger.warn @error.inspect
      @errors ||= 'Invalid Grant'
      render_failure
    end
  end
end
