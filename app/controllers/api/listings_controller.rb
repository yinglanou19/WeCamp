class Api::ListingsController < ApplicationController
    def index
    end

    def create
        @listing = Listing.new(listings_params)
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
        params.require(:listings).permit(:title,:description,:host_id,:long,:lat, :address, :daily_price, :max_capacity)
    end

    
end
