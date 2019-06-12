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


u1 = User.create({username:"Milktea",password:"milktea",first_name:"milk",last_name:"tea", zip_code:"11220"})
# u2 = User.create({username:"bobabutt",password:"bobabutt",first_name:"boba",last_name:"butt", zip_code:"11354"})

u2 = User.create({username:"boba",password:"bobabutt",first_name:"boba",last_name:"butt", zip_code:"11354"})
u3 = User.create({username:"Dragonfruit",password:"dragonfruit",first_name:"dragon",last_name:"fruit", zip_code:"11790"})
u4 = User.create({username:"Maria12", password:"password", first_name:"Maria", last_name:"Key",zip_code:"94501"})
u5 = User.create({username:"PeterReal", password:"password", first_name:"Peter", last_name:"Real", zip_code:"94502"})

l4 = Listing.create({title:"Secluded yurt on a creek",description:"Private land surrounded by large trees on a creek near vineyards. Complete seclusion with no houses in site! Hot tub and a swimming pool available. Local organic garden. Romantic wooden bridge crossing the creek for your morning walk.",
host_id: u1.id, long:-122.216088, lat:37.303607, address:"California Val Z.’s Land", 
daily_price:110, max_capacity:4})

l5= Listing.create({title:"Enchanted Forest Millie Campsite",description:"Forest campsites: Set in an old growth redwood grove looking to the west across a pasture. You'll have the best views of the animals as they graze, and they might even walk right through your campsite in the early morning hours! You can always help us feed them at 7:30 AM or 4:30 PM. Don't forget your flashlight!",
host_id: u1.id, long:-122.215588, lat:37.315607, address:"California Shanti Permaculture Farm", 
daily_price:95, max_capacity:6})

l6 = Listing.create({title:"Secluded Vineyard Walk-In",description:"Yosemite Garden Camp is on 10 acres of grassy meadows, pine and oak trees, and manzanita chaparral in the lower Sierra Nevada mountains, near the town of Groveland, outside Yosemite National Park. The property includes a large vegetable garden and a small vineyard, and borders Federal Bureau of Land Management land. Most of the property has sweeping views across the Central Valley to the Coast Ranges to the west. Sunsets are breathtaking.",
host_id: u1.id, long:-121.995588, lat:37.285786, address:"California Yosemite Garden Camp", 
daily_price:127, max_capacity:3})

l1 = Listing.create({title:"Mission Peak Wine",description:"This property sits at 1600ft on a 150 acre ranch nestled just beneath the famous hiking trails of Mission Peak. ",
host_id: u1.id, long:-122.206088, lat:37.301607, address:"California Mission Peak Camp", 
daily_price:84, max_capacity:4})

l2 = Listing.create({title:"Camp Nauvoo",description:"Camp Nauvoo was originally bought by the LDS church in the 1960's for a girl's camp. The Boy Scouts of America bought the camp back in 2011. The Rose family bought the property in 2016 with the intent to continue the tradition of tent camping as well as creating some opportunities for glamping, family reunions and events. ",
host_id: u1.id, long:-122.208088, lat:37.311607, address:"California Yosemite National Park", 
daily_price:90, max_capacity:2})

l3 = Listing.create({title:"Platform Canvas Tent on Creek",description:"This is a family private owned small campground (16 sites only) located on the outskirts of Placerville. The property features 86.5 secluded Tahoe like acres with beautiful year-round Weber Creek. The camp sites are placed along the creek or the bluff overlooking the creek.",
host_id: u1.id, long:-122.216088, lat:37.307607, address:"California Inyo National Forest Campsite", 
daily_price:98, max_capacity:3})

l7 = Listing.create({title:"Mono Hot Springs Campground", description:"
Mono Hot Springs Campground sits in the High Sierra, on the South Fork of the San Joaquin River in an area known for, you guessed it, hot springs! The camp, nestled into groves of aspen and lodgepole pine, is adjacent to Mono Hot Springs Resort. Each campsite has a picnic table, fire ring/grill, and bear-proof food storage locker. Vault toilets are provided, but for all other supplies head to the resort’s general store. A note to the adventurous: large RV's are not recommended on Kaiser Pass Road. Hot toddies, hot fires, and hot springs. Hot Damn!", 
host_id:u4.id, long:-119.772653 , lat: 37.1910585, address:"California National Forests Sierra National Forest", daily_price: 120, max_capacity: 4})
l8 = Listing.create({title:"Anahata Lake view", description:"Pitch your tent on our grass nole by our wonderful lake. We have organic chicken eggs and veggies for sale from our garden (depending on season) There is a wonderful walk up our hill (Table Mtn) where you can view to the Bay Area. If you walk across the flat top you can view the Sierra high country. A wonderful walk.", 
host_id:u4.id, long: -119.67 , lat: 37.5910585, address:"California Anahata Lake", daily_price: 76, max_capacity:4 })
l9 = Listing.create({title:"Big Trees Deck High Sierra Getaway", description:"Big Trees Deck is a marvelous spot to unwind, relax and simply breathe. From this tree top home you'll find vast vista views with epic sunrises and sunsets! Our  2 bed cabin spares no amenity; equipped with wifi, a gas fireplace, luxurious bedding, coffee, and bath toiletries, you'll have everything you need. Life at Big Trees Deck is easy and centrally located to all the best recreation the Calaveras and Alpine counties offer. Come for the wine, stay for the fun! Our cabin sits at 5000 ft. and is in close proximity to Big Trees State Park, the Stanislaus River and Beautiful Lake Alpine, Utica and Spicer Reservoir. The house setting amongst the Incense Cedar trees is a relaxing  atmosphere to unwind and simply enjoy the peacefulness of the high sierras. The private oversized deck has both a gas and Webber BBQ, wood Fire Pit along with comfy seating with vast views. The interior is a combination of knotty pine planks and stonework with all the amenities including a gas fireplace, a wood burning stove,  laundry, wifi, movies games, and an open floor plan with 2 comfortable snuggly bedrooms. The ambiance of our little cabin will make your getaway moments really enjoyable and lasting.", 
host_id:u4.id, long: -120.01, lat:37.2992 , address:"California Big Trees Deck - Sierra Getaway", daily_price:130 , max_capacity: 6})
# l10 = Listing.create({title:"", description:"", host_id:u4.id, long: , lat: , address:"", daily_price: , max_capacity: })
# l11 = Listing.create({title:"", description:"", host_id:u4.id, long: , lat: , address:"", daily_price: , max_capacity: })
# l12 = Listing.create({title:"", description:"", host_id:u4.id, long: , lat: , address:"", daily_price: , max_capacity: })


file1 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/campfire.jpg")
file2 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/campground.jpg")
file3 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/campingnight.jpg")
file4 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/campingwithdog.jpg")
file5 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/greenpark.jpeg")
file6 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/mountain.jpg")
file7 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/sunsetpark.jpeg")
file8 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/camp8.jpg")
file9 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/camp9.jpg")
file10 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/camp10.jpg")
file11 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/camp11.jpg")
file12 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/camp12.jpg")
file13 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/camp13.jpg")
file14 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/camp14.jpg")
file15 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/camp15.jpg")
file16 = open("https://wecamp-seeds.s3-us-west-1.amazonaws.com/camp16.jpg")


l1.images.attach(io: file1, filename: 'file1.jpg')
l1.images.attach(io: file2, filename: 'file2.jpg')
l2.images.attach(io: file3, filename: 'file3.jpg')
l3.images.attach(io: file4, filename: 'file4.jpg')
l4.images.attach(io: file5, filename: 'file5.jpg')
l5.images.attach(io: file6, filename: 'file6.jpg')
l6.images.attach(io: file7, filename: 'file7.jpg')

l4.images.attach(io: file8, filename: 'file8.jpg')
l5.images.attach(io: file9, filename: 'file9.jpg')
l6.images.attach(io: file10, filename: 'file10.jpg')
l4.images.attach(io: file11, filename: 'file11.jpg')
l5.images.attach(io: file12, filename: 'file12.jpg')
l6.images.attach(io: file13, filename: 'file13.jpg')

l7.images.attach(io: file14, filename: 'file14.jpg')
l7.images.attach(io: file9, filename: 'file9.jpg')
l8.images.attach(io: file15, filename: 'file15.jpg')
l8.images.attach(io: file8, filename: 'file8.jpg')
l9.images.attach(io: file16, filename: 'file16.jpg')
l9.images.attach(io: file11, filename: 'file11.jpg')



b1 = Booking.create(guest_id:u2.id,listing_id:l4.id, check_in: DateTime.parse("03/04/2019"),check_out:DateTime.parse("04/04/2019"),num_guests:2)
b2 = Booking.create(guest_id:u2.id,listing_id:l5.id, check_in: DateTime.parse("03/05/2019"),check_out:DateTime.parse("04/05/2019"),num_guests:2)
b3 = Booking.create(guest_id:u2.id,listing_id:l6.id, check_in: DateTime.parse("03/06/2019"),check_out:DateTime.parse("04/06/2019"),num_guests:2)
b4 = Booking.create(guest_id:u2.id,listing_id:l1.id, check_in: DateTime.parse("03/07/2019"),check_out:DateTime.parse("04/07/2019"),num_guests:2)
b5 = Booking.create(guest_id:u3.id,listing_id:l2.id, check_in: DateTime.parse("03/08/2019"),check_out:DateTime.parse("04/08/2019"),num_guests:2)
b6 = Booking.create(guest_id:u3.id,listing_id:l3.id, check_in: DateTime.parse("03/09/2019"),check_out:DateTime.parse("04/09/2019"),num_guests:2)
