const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const server = require('../src/app');

jest.setTimeout(30000);

/*
Teste de Interface.
Acessar o servidor e carregar o conteudo do index.html

Simular um usuario abrindo o navegador mesmo.
*/
describe('Teste E2E com Selenium', () => {
  let driver;

  beforeAll(async () => {
    const options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
    if (server) {
      server.close();
    }
  });

  test('Deve abrir a rota /index e validar o texto da página', async () => {
    await driver.get('http://localhost:3000/');

    const texto = await driver.findElement(By.tagName('p')).getText();
    expect(texto).toContain('teste legal');
  });
});
