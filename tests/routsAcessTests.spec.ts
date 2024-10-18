import { test, expect } from '@playwright/test';

test.describe('Página inicial do pacote task', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('/');
    });
    test('Verifica se o botão Preview Task redireciona corretamente', async ({ page }) => {
        // Clicar no botão Preview Task
        await page.click('text=Preview Task');

        // Verificar se a URL mudou para a página esperada
        await expect(page).toHaveURL('/preview');
    });

    test('Verifica se o botão Registrar Task redireciona corretamente', async ({ page }) => {
        // Clicar no botão Registrar Task
        await page.click('text=Registrar Task');

        // Verificar se a URL mudou para a página esperada
        await expect(page).toHaveURL('/register');
    });

    test('Verifica se o botão Editar Task redireciona corretamente', async ({ page }) => {
        // Clicar no botão Editar Task
        await page.click('text=Editar Task');

        // Verificar se a URL mudou para a página esperada
        await expect(page).toHaveURL('/edit');
    });

    test('Verifica se o botão Visualizar Task redireciona corretamente', async ({ page }) => {
        // Clicar no botão Visualizar Task
        await page.click('text=Visualizar Task');

        // Verificar se a URL mudou para a página esperada
        await expect(page).toHaveURL('/task');
    });
});
