class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only:[:create]
    def index
        if (params[:search]!=nil)
            @listings = Listing.where("lower(title) like ? OR lower(address) like ? " , "%#{params[:search].downcase}%", "%#{params[:search].downcase}%"  )
        else
        @listings = Listing.all 
        end
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
        params.require(:listing).permit(:title,:description,:long,:lat, :address, :daily_price, :max_capacity,images:[])
    end

    
end
