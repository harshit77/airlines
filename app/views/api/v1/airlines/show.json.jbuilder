# frozen_string_literal: true

json.airline do
  json.partial! "api/v1/airlines/airline", airline: @airline
  json.reviews @airline.reviews do |review|
    json.extract! review, :id, :title, :description, :score, :airline_id
  end
end
