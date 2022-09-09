# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

airlines = Airline.create(
  [{
    name: "Vistara",
    image_url: "https://picsum.photos/id/237/200/300"
  }, {
    name: "AirAsia",
    image_url: "https://picsum.photos/id/1/200/300"
  },
                             {
                               name: "Indigo",
                               image_url: "https://picsum.photos/id/10/200/300"
                             },
                             {
                               name: "SpiceJet",
                               image_url: "https://picsum.photos/id/100/200/300"
                             }])

reviews = Review.create(
  [{
    title: "Great Airlines",
    description: "I had a lovely time",
    score: 5,
    airline: airlines.first

  },
                           {
                             title: "Bad Airlines",
                             description: "I had a bad time",
                             score: 1,
                             airline: airlines.first

 }])
