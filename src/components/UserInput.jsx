export default function UserInput({ onChange, userInput }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">INITIAL INVESTIMENT</label>
                    <input
                        type="number"
                        value={userInput.initialInvestment}
                        required
                        onChange={(event) =>
                            onChange("initialInvestment", event.target.value)
                        }
                    />
                </p>
                <p>
                    <label htmlFor="">ANNUAL INVESTIMENT</label>
                    <input
                        type="number"
                        value={userInput.annualInvestment}
                        required
                        onChange={(event) =>
                            onChange("annualInvestment", event.target.value)
                        }
                    />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label htmlFor="">EXPECTED RETURN</label>
                    <input
                        type="number"
                        value={userInput.expectedReturn}
                        required
                        onChange={(event) =>
                            onChange("expectedReturn", event.target.value)
                        }
                    />
                </p>
                <p>
                    <label htmlFor="">DURATION</label>
                    <input
                        type="number"
                        value={userInput.duration}
                        required
                        onChange={(event) =>
                            onChange("duration", event.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    );
}
