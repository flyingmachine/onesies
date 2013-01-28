#!/usr/bin/env ruby
sql = STDIN.read
# sql = %{INSERT INTO "users" ("username", "email") VALUES ('joe schmoe', 'joe@schmoe.com')}

begin
  fields = /\((.*?)\)/.match(sql)[1].split(",")
  values = /values \((.*?)\)/i.match(sql)[1].split(",")
rescue
  puts "Could not find pairs for string: #{sql}"
end

0.upto(fields.size) do |i|
  puts "#{fields[i]} => #{values[i]}"
end
