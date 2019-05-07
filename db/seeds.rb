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

l1 = Listing.create({title:"Mission Peak Wine",description:"This property sits at 1600ft on a 150 acre ranch nestled just beneath the famous hiking trails of Mission Peak. ",
host_id: u1.id, long:-122.206088, lat:37.301607, address:"100 Main St, Los Altos, CA 94022", 
daily_price:84, max_capacity:4})

l2 = Listing.create({title:"Camp Nauvoo",description:"Camp Nauvoo was originally bought by the LDS church in the 1960's for a girl's camp. The Boy Scouts of America bought the camp back in 2011. The Rose family bought the property in 2016 with the intent to continue the tradition of tent camping as well as creating some opportunities for glamping, family reunions and events. ",
host_id: u1.id, long:-123.206088, lat:38.301607, address:"200 Main St, Los Altos, CA 94022", 
daily_price:90, max_capacity:2})

l3 = Listing.create({title:"Platform Canvas Tent on Creek",description:"This is a family private owned small campground (16 sites only) located on the outskirts of Placerville. The property features 86.5 secluded Tahoe like acres with beautiful year-round Weber Creek. The camp sites are placed along the creek or the bluff overlooking the creek.",
host_id: u1.id, long:-124.206088, lat:36.301607, address:"300 Main St, Los Altos, CA 94022", 
daily_price:98, max_capacity:3})

file1 = open("https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_960_720.jpg")
file2 = open("https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_960_720.jpg")
file3 = open("https://cdn.pixabay.com/photo/2016/03/09/10/37/trees-1246045_960_720.jpg")
file4 = open("https://cdn.pixabay.com/photo/2017/08/07/18/59/cabin-2606781_960_720.jpg")

l1.images.attach(io: file1, filename: 'file1.jpg')
l1.images.attach(io: file2, filename: 'file2.jpg')
l2.images.attach(io: file3, filename: 'file3.jpg')
l3.images.attach(io: file4, filename: 'file4.jpg')

b1 = Booking.create(guest_id:u2.id,listing_id:l1.id, check_in: DateTime.parse("03/04/2019"),check_out:DateTime.parse("04/04/2019"),num_guests:2)
b2 = Booking.create(guest_id:u2.id,listing_id:l2.id, check_in: DateTime.parse("03/05/2019"),check_out:DateTime.parse("04/05/2019"),num_guests:2)
b3 = Booking.create(guest_id:u2.id,listing_id:l3.id, check_in: DateTime.parse("03/06/2019"),check_out:DateTime.parse("04/06/2019"),num_guests:2)
b4 = Booking.create(guest_id:u2.id,listing_id:l1.id, check_in: DateTime.parse("03/07/2019"),check_out:DateTime.parse("04/07/2019"),num_guests:2)
b5 = Booking.create(guest_id:u3.id,listing_id:l2.id, check_in: DateTime.parse("03/08/2019"),check_out:DateTime.parse("04/08/2019"),num_guests:2)
b6 = Booking.create(guest_id:u3.id,listing_id:l3.id, check_in: DateTime.parse("03/09/2019"),check_out:DateTime.parse("04/09/2019"),num_guests:2)
