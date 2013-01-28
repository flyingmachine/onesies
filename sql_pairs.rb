#!/usr/bin/env ruby

# Simple, not robust script for pairing sql fields to values

sql = STDIN.read
# sql = %{INSERT INTO "users" ("username", "email") VALUES ('joe schmoe', 'joe@schmoe.com')}

begin
  fields = /\((.*?)\)/.match(sql)[1].split(",")
  values = /values \((.*?)\)/i.match(sql)[1].split(",")
  0.upto(fields.size) do |i|
    puts "#{fields[i]} => #{values[i]}"
  end
rescue => e
  puts "Could not find pairs for string: #{sql}"
  raise e
end
