describe "Index" do
  include Capybara::DSL
  include Capybara::RSpecMatchers

  before(:each) do
    visit "/"
  end

  it "increments the score when a mole is clicked" do
    score = page.find("#counter").text.to_i
    sleep(1)
    page.execute_script('$(".mole:visible").click()')
    sleep(1)
    expect(page.find("#counter").text).to eq("#{score + 1}")
  end
  
end