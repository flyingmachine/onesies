module WrapMethod
  def wrap_method(method_name)
    metaclass = class << self; self; end
    metaclass.class_eval do
      define_method method_name do
        puts "wrap start"
        super
        puts "wrap stop"
      end
    end
  end
end

class A
  include WrapMethod
  def something
    puts "something"
  end
end

a = A.new
a.something
a.wrap_method(:something)
a.something