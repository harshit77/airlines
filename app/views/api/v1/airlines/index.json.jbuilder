json.airlines @airlines do |airline|
  json.partial! 'api/v1/airlines/airline', airline:
end
