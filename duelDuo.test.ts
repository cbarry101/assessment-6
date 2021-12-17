
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking draw button displays the div with id "choices"', async () => {
    await driver.findElement(By.id('draw')).click()
    driver.sleep(3000)
 
    const checkDivId = await driver.findElement(By.id('choices'))
    const displayed = await checkDivId.isDisplayed()
    expect(displayed).toBe(true)
})
test('Clicking on the duel button adds bots to choose from', async () => {
    await driver.findElement(By.css('#duel')).click()
    await driver.sleep(3000)
    const checkBots = await driver.findElements(By.css('.bot-card outline'))
    expect(checkBots).toHaveLength(5)
})
//Trying another way

test('Add to duo button displays player-id div', async() => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)

    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(3000)

    const div = await driver.findElement(By.id('player-id'))
    const displayed = await div.isDisplayed()
    expect(displayed).toBe(true)
})
