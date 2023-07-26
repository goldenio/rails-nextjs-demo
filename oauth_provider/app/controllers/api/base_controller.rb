# frozen_string_literal: true

module API
  class BaseController < ActionController::API
    include ::API::DoorkeeperConcern

    respond_to :json

    private

    def render_success
      render json: { messages: @messages }
    end

    def render_failure
      render json: { errors: @errors, redirect_url: @redirect_url }
    end
  end
end
