@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :description,:host_id,:long,:lat, :address, :daily_price, :max_capacity,:has_wifi, :pet_friendly, :is_camping
  end
end