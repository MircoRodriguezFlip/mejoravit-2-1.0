import { Section1Lp } from '../exports/Section1Lp';
import { Section2Lp } from '../exports/Section2Lp';
import { Section3Lp } from '../exports/Section3Lp';

export const LandingPage = () => {
    return (
        <main>
            <section>
                <Section1Lp />
            </section>

            <section>
                <Section2Lp />
            </section>

            <section>
                <Section3Lp />
            </section>
        </main>
    );
};
