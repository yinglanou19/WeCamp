class Booking < ApplicationRecord

    validates :guest_id,:listing_id,:check_in, :check_out,:num_guests, presence:true
    validate :is_not_overlapped
    validate :start_must_come_before_end
    belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing

    private 

    def is_not_overlapped 
    
        overlapped = Booking
            .where.not(id: self.id)
            .where(listing_id: listing_id)
            .where.not('check_in > :check_out OR check_out < :check_in',
                 check_in: check_in, check_out: check_out)
        unless overlapped.empty?
            errors[:base] << 'Booking conflicts with existing ones.'
        end
        
    end

    def start_must_come_before_end
        
        errors[:base] << 'must specify a check in date' unless check_in
        errors[:base] << 'must specify a check out date' unless check_out
        return nil unless check_in && check_out
        errors[:base] << 'check in date must come before check out date' if check_in > check_out
    end


end
