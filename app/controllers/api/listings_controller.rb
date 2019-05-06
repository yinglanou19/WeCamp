class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only:[:create]
    def index
        @listings = Listing.all
    end

    def create
        @listing = Listing.new(listings_params)
        @listing.host_id = current_user.id
        if @listing.save
            render 'api/listings/show'
        else
            render json: @listing.errors.full_messages, status:422
        end
    end

    def show
    end

    private

    def listings_params
        params.require(:listing).permit(:title,:description,:long,:lat, :address, :daily_price, :max_capacity,:images)
    end

    
end
