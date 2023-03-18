import { expect, describe, test, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Home from '@/pages';

describe('Home', () => {
  test('Renders main content', () => {
    render(<Home isMobile />);

    // First section
    const mainWrapper = within(screen.getByTestId('home-content-wrapper-001'));
    const mainTitle = within(
      mainWrapper.getByRole('heading', { level: 1, name: 'Sueli Takayama' })
    );
    const whatsAppButton = mainWrapper.getByRole('button', {
      name: /whatsapp/i,
    });
    const mainKeepReading = mainWrapper.getByRole('button', {
      name: /continue lendo/i,
    });

    expect(mainTitle).toBeDefined();
    expect(within(whatsAppButton)).toBeDefined();
    expect(mainKeepReading).toBeDefined();

    // Second section
    const secondWrapper = within(
      screen.getByTestId('home-content-wrapper-002')
    );
    const secondKeepReading = secondWrapper.getByRole('button', {
      name: /continue lendo/i,
    });
    expect(
      within(secondWrapper.getByRole('heading', { level: 2, name: 'PSYCH-K' }))
    ).toBeDefined();
    expect(secondKeepReading).toBeDefined();

    // Third section
    const thirdWrapper = within(screen.getByTestId('home-content-wrapper-003'));
    const thirdKeepReading = thirdWrapper.getByRole('button', {
      name: /continue lendo/i,
    });
    expect(
      within(
        thirdWrapper.getByRole('heading', {
          level: 2,
          name: 'Barras de Access',
        })
      )
    ).toBeDefined();
    expect(thirdKeepReading).toBeDefined();

    // Fourth section
    const fourthWrapper = within(
      screen.getByTestId('home-content-wrapper-004')
    );
    const fourthKeepReading = fourthWrapper.getByRole('button', {
      name: /continue lendo/i,
    });
    expect(
      within(
        fourthWrapper.getByRole('heading', {
          level: 2,
          name: 'Constelações familiares',
        })
      )
    ).toBeDefined();
    expect(fourthKeepReading).toBeDefined();

    // Last section
    const lastWrapper = within(screen.getByTestId('home-content-wrapper-005'));
    const backToTop = lastWrapper.getByRole('button', {
      name: /voltar para o topo/i,
    });
    expect(backToTop).toBeDefined();
  });
});
