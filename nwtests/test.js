module.exports = {
  beforeEach : function(browser) {
    browser.url('http://localhost:4200')
      .waitForElementVisible('body', 1000)
      .setValue('#email', 'test@example.com')
      .setValue('#password', 'test')
      .pause(1000)
      .assert.value('#email', 'test@example.com')
      .assert.value('#password', 'test')
      .click('button')
      .pause(1000)
  },

  'Should have 2 cats by default' : function (browser) {
    browser
      .assert.containsText('body', 'Here are the cats!')
      .assert.elementPresent('tbody > tr:nth-child(2)')
      .end();
  },

  'Can add a new cat' : function (browser) {
    browser
      .click('.btn')
      .assert.containsText('body', 'Add a new cat')
      .setValue('#name', 'Snowglobe')
      .setValue('#age', '5')
      .setValue('#weight', '4')
      .assert.value('#name', 'Snowglobe')
      .assert.value('#age', '5')
      .assert.value('#weight', '4')
      .click('#add-cat')
      .pause(1000)
      .assert.elementPresent('tbody > tr:nth-child(3)')
      .end();
  },

  'Can remove a cat' : function (browser) {
    browser
      .click('.delete-link')
      .pause(1000)
      .assert.elementPresent('tbody > tr:nth-child(1)')
      .assert.elementNotPresent('tbody > tr:nth-child(2)')
      .end();
  },

  'Can remove all cats' : function (browser) {
    browser
      .click('.delete-link')
      .pause(1000) //Edge needs this
      .click('.delete-link')
      .pause(1000)
      .assert.elementNotPresent('tbody > tr:nth-child(1)')
      .assert.containsText('body', 'No cats :(')
      .end();
  }
};
