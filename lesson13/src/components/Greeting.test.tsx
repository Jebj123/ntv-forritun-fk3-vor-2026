import { Greeting } from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting', () => {
    it('renders the correct greeting message', async () => {
        const user = userEvent.setup();
        render(<Greeting />);

        const input = screen.getByPlaceholderText('Skrifaðu nafn');
        const button = screen.getByRole('button', { name: 'Senda' });
        const name = 'JohnJingleHeimerSmith';

        await user.type(input, name);
        await user.click(button);
        expect(screen.getByText(`Halló, ${name}!`)).toBeInTheDocument();
});
});
