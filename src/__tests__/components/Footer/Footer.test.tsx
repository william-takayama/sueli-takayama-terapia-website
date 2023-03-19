import { Footer } from '@/components/Footer/Footer';
import { SocialMedia } from '@/constants/social';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('Footer', () => {
  test('Renders with social media icons', () => {
    render(<Footer />);
    const footer = screen.getByRole('footer');
    const buttonGroup = within(footer).getByRole('group');

    const whatsapp = within(buttonGroup).getByRole('link', {
      name: /whatsapp/i,
    });
    const instagram = within(buttonGroup).getByRole('link', {
      name: /instagram/i,
    });
    const facebook = within(buttonGroup).getByRole('link', {
      name: /facebook/i,
    });

    expect(whatsapp).toBeDefined();
    expect(instagram).to.have.property('href', SocialMedia.INSTAGRAM);
    expect(facebook).to.have.property('href', SocialMedia.FACEBOOK);
  });
});
