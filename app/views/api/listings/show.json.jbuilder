
json.extract! @listing, :id, :title, :description,:host_id,:long,:lat, :address,
 :daily_price, :max_capacity, :has_wifi, :pet_friendly, :is_camping, 
 imgUrls: [@listing.images.map{|img| ({ imgUrl: url_for(img) })}]



