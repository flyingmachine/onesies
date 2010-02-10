#!/usr/bin/env ruby

# The this script takes text that looks like this:
#
# very_long_argument, :long_key => "value"
# short_arg, :key => "value"
#
# and turns it into this:
# 
# very_long_argument, :long_key => "value"
# short_arg,          :key      => "value"
#
# In other words, it lines up hash rocks and values after commas
# into nice neat columns.
#
# On a mac I use "pbpaste | columnize | pbcopy"

line_section_groups = []
new_line_groups = []

# Divide each line into sections ending in either
# a hash rocket or a comma.
#
# argument1, :key => "value"
#
# is divided into
#
# ["argument1,", ":key ", "=> \"value\""]
#
# * first scan for a key (text before hash rocket; hash rocket not included),
# * then scan for text up to a comma
# * then scan for text up to the end of the string
ARGF.each do |line|
  line_section_groups << line.strip.scan(/(?:[^,]+(?==>)|.+?,|.+$)/)
end

max_number_of_sections = line_section_groups.max{|a, b| a.size <=> b.size}.size

# Go through the sections of all lines one at a time
# and build new sections, left justified with enough space
# to encomass the longest section
0.upto(max_number_of_sections - 1) do |section_index|
  slice = line_section_groups.collect{|group| group[section_index]}
  max_length_of_slice = slice.max{|a,b| a.to_s.size <=> b.to_s.size}.size

  slice.each_with_index do |section, index|
    new_line_groups[index] ||= []
    new_line_groups[index] << section.ljust(max_length_of_slice)
  end
end

new_line_groups.collect!{|g| g.join("").rstrip}
puts new_line_groups.join("\n")