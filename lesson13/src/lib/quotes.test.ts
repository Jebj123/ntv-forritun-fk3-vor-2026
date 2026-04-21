import {vi, it, expect} from 'vitest';
import { fetchRandomQuote} from './quotes';


vi.mock('./quotes', () => ({
  fetchRandomQuote: vi.fn(),
}));

it('Should fetch a random quote', async () => {
    const mockQuote = '„This is a mock quote“ — Mock Author';
    vi.mocked(fetchRandomQuote).mockResolvedValue(mockQuote);
    const quote = await fetchRandomQuote();
    expect(quote).toBe(mockQuote);
});

it('Should handle errors when fetching a quote', async () => {
    const errorMessage = 'Ekki tókst að sækja quote';
    vi.mocked(fetchRandomQuote).mockRejectedValue(new Error(errorMessage));
    try {
        await fetchRandomQuote();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe(errorMessage);
    }
}); 

