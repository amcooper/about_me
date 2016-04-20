original = [
  [200,200,0],
  [0,0,30],
  [0,0,10],
  [0,0,100],
  [0,0,500],
  [5,9,5],
  [7,7,5]
]

def resize(two_array, multiplier)
  two_array.map! do |subarray|
    subarray.map! do |size|
      if size == 0
        size
      else
        (size * multiplier).round(2)
      end
    end
  end
  return two_array
end

def css_output( a )
  result = ""
  a.map! do |subarray|
    subarray.map! do |size|
      if size == 0
        size
      else
        size.to_s + "px"
      end
    end
  end
  result = "#on\n {\n  min-width: 95px;\n  font: normal #{a[0][0]}/ #{a[0][1]} 'Neona', Helvetica, sans-serif;\n  color: #EEDDE0;\n  text-shadow: #{a[1][0]} #{a[1][1]} #{a[1][2]} #EC637B, \n    #{a[2][0]} #{a[2][1]} #{a[2][2]} rgba(230, 161, 173, 0.41), \n    #{a[3][0]} #{a[3][1]} #{a[3][2]} #E6A1AD, \n    #{a[4][0]} #{a[4][1]} #{a[4][2]} #F36780, \n    #{a[5][0]} #{a[5][1]} #{a[5][2]} rgba(0, 0, 0, 0.5);  \n}\n\n#off\n.off {\n  color: rgba(46, 46, 46, 0.61);\n  text-shadow: #{a[6][0]} #{a[6][1]} #{a[6][2]} rgba(0, 0, 0, 0.5);\n}"
  return result
end

print "Enter multiplier: "
input_multiplier = gets.chomp.to_f
puts css_output( resize( original, input_multiplier ))