class Listing < ApplicationRecord
    validates :title, :description, :host_id, presence:true
    validates :long,:lat,:address,:daily_price, :max_capacity, presence:true
    validates :has_wifi, :pet_friendly, :is_camping, inclusion:{in:[true,false]}


    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User
    
    has_many :bookings,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Booking

end
