# do not display constants if they are not included in another constant
# and if nothing subclasses them?
#
# do not display default constants?

default_constants = `ruby -e 'puts Module.constants'`.split("\n")

class Object
  def self.inherited(subclass)
    puts "#{subclass.name} inherited from #{self.name}"
  end
end

class Module
  def initialize
    puts "included"
  end
end

module MyModule
end

class A
  include MyModule
end

at_exit do 
  
end