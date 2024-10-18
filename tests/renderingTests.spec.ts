import { test, expect } from '@playwright/test';

test.describe('Renderização das páginas do pacote task', () => {

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('/');
    });

    //   test('Verifica renderização da página Preview Task', async ({ page }) => {

    //     // Clicar no botão Preview Task
    //     await page.click('text=Preview Task');

    //     // Verificar se o título ou elemento principal da página Preview Task está presente
    //     await expect(page.locator('h1')).toHaveText('Preview Task');
    //     await expect(page.locator('.preview-content')).toBeVisible(); // Supondo que a classe do conteúdo da página seja .preview-content
    //   });

    //   test('Verifica renderização da página Registrar Task', async ({ page }) => {
    //     await page.goto('/');

    //     // Clicar no botão Registrar Task
    //     await page.click('text=Registrar Task');

    //     // Verificar se o formulário de registro está visível
    //     await expect(page.locator('h1')).toHaveText('Registrar Task');
    //     await expect(page.locator('form#registrar-task-form')).toBeVisible(); // Supondo que o formulário tenha o id #registrar-task-form
    //   });

    //   test('Verifica renderização da página Editar Task', async ({ page }) => {
    //     await page.goto('/');

    //     // Clicar no botão Editar Task
    //     await page.click('text=Editar Task');

    //     // Verificar se o formulário de edição está visível
    //     await expect(page.locator('h1')).toHaveText('Editar Task');
    //     await expect(page.locator('form#editar-task-form')).toBeVisible(); // Supondo que o formulário tenha o id #editar-task-form
    //   });

    //   test('Verifica renderização da página Visualizar Task', async ({ page }) => {
    //     await page.goto('/');

    //     // Clicar no botão Visualizar Task
    //     await page.click('text=Visualizar Task');

    //     // Verificar se a visualização dos detalhes da task está presente
    //     await expect(page.locator('h1')).toHaveText('Visualizar Task');
    //     await expect(page.locator('.task-details')).toBeVisible(); // Supondo que a classe dos detalhes da task seja .task-details
    //   });

    test('verifica se a barra de navegação superior foi renderizada', async ({ page }) => {
        await page.getByRole('link', { name: '(icon) Preview Task' }).click();
        await expect(page.getByRole('link', { name: 'Voltar Voltar' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Edit Voltar' })).toBeVisible();
        await expect(page.getByLabel('Light Switch')).toBeVisible();
    });
});

