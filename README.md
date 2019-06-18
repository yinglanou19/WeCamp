# Wecamp

## [Live demo](https://wecamp8.herokuapp.com/#/)

Wecamp is a clone of Hipcamp. User can browse campsite listings and book their trip. User can also manage their bookings. Wecamp also allows user to search campsites.

Wecamp is builded using Rails and PostgreSQL on backend, React and Redux on frontend.

## Features

- Secure frontend to backend user authentication using BCrypt to hash sensitive information.

- Allowing users to explore and book campsites, as well as create a new listing to host their campsites.

- User friendly management page for editing or deleting user's bookings.

- Equipped with keyword searching functionality and result rendering with Google Map API.

## Highlights

### Keyword Search

![alt text](public/ezgif.com-video-to-gif.gif "search for listings")

Upon entering a keyword to the search bar, the Rails backend controller will query the database to find potential results. These data is returned to the frontend over HTTP and is then dispatched to the Redux store, allowing them to be rendered on the customized Map React component.

### Multiple Images Upload

![alt text](public/ezgif.com-crop.gif "upload images when creating a listing")

When user creates a new listing, Wecamp allows users to upload multiple images at the same time. Wecamp utilizes Amazon S3 and Rails' Active Storage to safely and efficiently store and manage images.

### Double Booking Prevention

```ruby
class Booking < ApplicationRecord

    validate :is_not_overlapped

    # ...

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

end
```

A listing can be booked by many users, we want to make sure that it is not booked by more than one user in any given day. In order to do so, I wrote a function in the Booking model that validates the incoming booking before creating or editing it. The function utilizes ActiveRecord::Relation by keep chaining constraints onto it until all conditions are checked.
The idea is to find the booking(s) that
(1)is not the incoming booking itself,
(2)has the same foreign key(belongs to the same listing as the incoming booking), and
(3)has a check in date that is later than the incoming booking's check out date, and a check out date that is earlier than the incoming booking's check in date.
If there isn't any bookings that meet such conditions, the incoming booking will not overlaps with any bookings in the database. We can then create and save that booking.

## Install

`$ git clone https://github.com/yinglanou19/WeCamp.git`

`$ cd WeCamp`

`$ npm install`

`$ bundle install`

Database initialization:

`$ bundle exec rails db:setup`

Deployment instructions:

`$ npm start`

`$ bundle exec rails s`

## Languages

Ruby
Javascript
HTML
CSS
