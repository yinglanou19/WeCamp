# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create({username:"milktea",password:"milktea"})
User.create({username:"bobabutt",password:"bobabutt"})


Listing.create({title:"Mission Peak Wine",description:"This property sits at 1600ft on a 150 acre ranch nestled just beneath the famous hiking trails of Mission Peak. ",
host_id: u1.id, long:-122.206088, lat:37.301607, address:"100 Main St, Los Altos, CA 94022", 
daily_price:84, max_capacity:4})