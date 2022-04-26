const {Builder, Capabilities} = require('selenium-webdriver')
const { By } = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})




// And after our test has completed, we want to close our browser
test('I Can Make A Movie', async () => {
    let moviebox = await driver.findElement(By.name("YoMe"))

    await moviebox.sendKeys('Movie1\n')
  
    await moviebox.sendKeys('Hoooooooooo\n')
  
    
    await moviebox.sendKeys('Hoooooooooo\n')
    
     let justEnteredMovie = await driver.findElement(By.xpath('//li/span'))
   
     justEnteredMovie.click()
     let messageText = await driver.findElement(By.id('message')).getText()
     console.log(messageText)
     expect(messageText).toEqual('Movie1 watched!')
     justEnteredMovie.click()
     let SecondmessageText = await driver.findElement(By.id('message')).getText()
     console.log(SecondmessageText)
     expect(SecondmessageText).toEqual('Movie1 added back!')
     let justEnteredMovie1 = driver.findElement(By.id('Movie1'))
     justEnteredMovie1.click()
     let ThirdMessageText = await driver.findElement(By.id('message')).getText()
    console.log(ThirdMessageText)
    expect(ThirdMessageText).toEqual('Movie1 deleted!')
})
afterAll(async () => {
    await (await driver).quit()
})