class Api::BookingsController < ApplicationController
    before_action :require_logged_in, only:[:create,:update,:destroy,:index]
    def create
        @booking = Booking.new(booking_params)
        
        @booking.guest_id = current_user.id
        if @booking.save
            render 'api/bookings/show'
        else
            render json:@booking.errors.full_messages,status:422
        end
    end

    def update
        @booking = current_user.bookings.find(params[:id])
        if @booking.update_attributes(booking_params)
            render 'api/bookings/show'
        else
            render json: ["Unable to make change"], status: 417
        end
    end

    def show
    end

    def index
        @bookings = current_user.bookings
    end

    def destroy
        @booking = current_user.bookings.find(params[:id])
        if @booking
            @booking.destroy
            render 'api/bookings/show'
        else
            render json:["You can't delete this booking"], status:401
        end
    end

    private 
    def booking_params
        params.require(:booking).permit(:listing_id, :check_in,:check_out, :num_guests)
    end
end
