class Booking < ApplicationRecord

    validates :guest_id,:listing_id,:check_in, :check_out,:num_guests, presence:true

    belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing

end
