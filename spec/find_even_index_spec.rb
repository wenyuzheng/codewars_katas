require './Kyu6/find_even_index'

describe "#find_even_index_spec" do
  it 'example 1' do
    result = find_even_index([1,2,3,4,3,2,1])
    expect(result).to eq 3
  end

  it 'example 2' do
    result = find_even_index([1,100,50,-51,1,1])
    expect(result).to eq 1
  end

  it 'example 3' do
    result = find_even_index([1,2,3,4,5,6])
    expect(result).to eq -1
  end
end

#
#
# Test.assert_equals(find_even_index([1,2,3,4,3,2,1]),3)
# Test.assert_equals(find_even_index([1,100,50,-51,1,1]),1,)
# Test.assert_equals(find_even_index([1,2,3,4,5,6]),-1)
# Test.assert_equals(find_even_index([20,10,30,10,10,15,35]),3)
# Test.assert_equals(find_even_index([20,10,-80,10,10,15,35]),0)
# Test.assert_equals(find_even_index([10,-80,10,10,15,35,20]),6)
