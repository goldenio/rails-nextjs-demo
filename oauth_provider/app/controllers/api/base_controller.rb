# frozen_string_literal: true

module API
  class BaseController < ActionController::API
    include ::API::DoorkeeperConcern

    respond_to :json

    private

    def set_current_user
      Current.user = current_resource_owner
    end

    def head_if_no_current_user
      return if Current.user

      head :no_content
    end

    def render_success
      render json: { messages: @messages }
    end

    def render_failure
      render json: { errors: @errors, redirect_url: @redirect_url }
    end
  end
end
