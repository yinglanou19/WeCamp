# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Listing.destroy_all
Booking.destroy_all


u1 = User.create({username:"milktea",password:"milktea",first_name:"milk",last_name:"tea", zip_code:"11220"})
u2 = User.create({username:"bobabutt",password:"bobabutt",first_name:"boba",last_name:"butt", zip_code:"11354"})
u3 = User.create({username:"dragonfruit",password:"dragonfruit",first_name:"dragon",last_name:"fruit", zip_code:"11790"})

l4 = Listing.create({title:"Secluded yurt on a creek",description:"Private land surrounded by large trees on a creek near vineyards. Complete seclusion with no houses in site! Hot tub and a swimming pool available. Local organic garden. Romantic wooden bridge crossing the creek for your morning walk.",
host_id: u1.id, long:-122.216088, lat:37.303607, address:"California Val Z.’s Land", 
daily_price:110, max_capacity:4})

l5= Listing.create({title:"Enchanted Forest Millie Campsite",description:"Forest campsites: Set in an old growth redwood grove looking to the west across a pasture. You'll have the best views of the animals as they graze, and they might even walk right through your campsite in the early morning hours! You can always help us feed them at 7:30 AM or 4:30 PM. Don't forget your flashlight!",
host_id: u1.id, long:-122.215588, lat:37.315607, address:"California Shanti Permaculture Farm", 
daily_price:110, max_capacity:4})
l6 = Listing.create({title:"Secluded Vineyard Walk-In",description:"Yosemite Garden Camp is on 10 acres of grassy meadows, pine and oak trees, and manzanita chaparral in the lower Sierra Nevada mountains, near the town of Groveland, outside Yosemite National Park. The property includes a large vegetable garden and a small vineyard, and borders Federal Bureau of Land Management land. Most of the property has sweeping views across the Central Valley to the Coast Ranges to the west. Sunsets are breathtaking.",
host_id: u1.id, long:-121.995588, lat:37.285786, address:"California Yosemite Garden Camp", 
daily_price:110, max_capacity:4})

l1 = Listing.create({title:"Mission Peak Wine",description:"This property sits at 1600ft on a 150 acre ranch nestled just beneath the famous hiking trails of Mission Peak. ",
host_id: u1.id, long:-122.206088, lat:37.301607, address:"100 Main St, Los Altos, CA 94022", 
daily_price:84, max_capacity:4})

l2 = Listing.create({title:"Camp Nauvoo",description:"Camp Nauvoo was originally bought by the LDS church in the 1960's for a girl's camp. The Boy Scouts of America bought the camp back in 2011. The Rose family bought the property in 2016 with the intent to continue the tradition of tent camping as well as creating some opportunities for glamping, family reunions and events. ",
host_id: u1.id, long:-122.208088, lat:37.311607, address:"200 Main St, Los Altos, CA 94022", 
daily_price:90, max_capacity:2})

l3 = Listing.create({title:"Platform Canvas Tent on Creek",description:"This is a family private owned small campground (16 sites only) located on the outskirts of Placerville. The property features 86.5 secluded Tahoe like acres with beautiful year-round Weber Creek. The camp sites are placed along the creek or the bluff overlooking the creek.",
host_id: u1.id, long:-122.216088, lat:37.307607, address:"300 Main St, Los Altos, CA 94022", 
daily_price:98, max_capacity:3})

file1 = open("https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_960_720.jpg")
file2 = open("https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_960_720.jpg")
file3 = open("https://cdn.pixabay.com/photo/2016/03/09/10/37/trees-1246045_960_720.jpg")
file4 = open("https://cdn.pixabay.com/photo/2017/08/07/18/59/cabin-2606781_960_720.jpg")
file5 = open("https://cdn.pixabay.com/photo/2017/04/14/19/00/yosemite-2231069_960_720.jpg")
file6 = open("https://cdn.pixabay.com/photo/2017/04/23/20/39/tree-2254979_960_720.jpg")
file7 = open("https://cdn.pixabay.com/photo/2016/07/28/06/05/white-1547092_960_720.jpg")

l1.images.attach(io: file1, filename: 'file1.jpg')
l1.images.attach(io: file2, filename: 'file2.jpg')
l2.images.attach(io: file3, filename: 'file3.jpg')
l3.images.attach(io: file4, filename: 'file4.jpg')
l4.images.attach(io: file5, filename: 'file5.jpg')
l5.images.attach(io: file6, filename: 'file6.jpg')
l6.images.attach(io: file7, filename: 'file7.jpg')


b1 = Booking.create(guest_id:u2.id,listing_id:l1.id, check_in: DateTime.parse("03/04/2019"),check_out:DateTime.parse("04/04/2019"),num_guests:2)
b2 = Booking.create(guest_id:u2.id,listing_id:l2.id, check_in: DateTime.parse("03/05/2019"),check_out:DateTime.parse("04/05/2019"),num_guests:2)
b3 = Booking.create(guest_id:u2.id,listing_id:l3.id, check_in: DateTime.parse("03/06/2019"),check_out:DateTime.parse("04/06/2019"),num_guests:2)
b4 = Booking.create(guest_id:u2.id,listing_id:l1.id, check_in: DateTime.parse("03/07/2019"),check_out:DateTime.parse("04/07/2019"),num_guests:2)
b5 = Booking.create(guest_id:u3.id,listing_id:l2.id, check_in: DateTime.parse("03/08/2019"),check_out:DateTime.parse("04/08/2019"),num_guests:2)
b6 = Booking.create(guest_id:u3.id,listing_id:l3.id, check_in: DateTime.parse("03/09/2019"),check_out:DateTime.parse("04/09/2019"),num_guests:2)
