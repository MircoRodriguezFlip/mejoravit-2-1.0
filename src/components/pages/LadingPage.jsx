import { Section1Lp } from '../exports/Section1Lp';
import { Section2Lp } from '../exports/Section2Lp';
import { Section3Lp } from '../exports/Section3Lp';
import { Section4Lp } from '../exports/Section4Lp';
import { Section5Lp } from '../exports/Section5Lp';

export const LandingPage = () => {
    return (
        <main>
            <section>
                <Section1Lp />
            </section>

            <section>
                <Section2Lp />
            </section>

            <div className="div-pag">
                <hr />
            </div>

            <section>
                <Section3Lp />
            </section>

            <div className="div-pag">
                <hr />
            </div>

            <section>
                <Section4Lp />
            </section>

            <section>
                <Section5Lp />
            </section>
        </main>
    );
};
