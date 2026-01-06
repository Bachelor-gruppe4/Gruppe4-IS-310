import { Link } from 'react-router-dom';

export default function Bacheloroppgave() {
    return (
        <div>
            {/* Banner */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    background: '#ffffff',
                    color: '#3d5229',
                    padding: '3rem 0',
                    textAlign: 'left',
                    paddingLeft: '3rem',
                    fontSize: '2rem',
                    fontWeight: '700',
                    letterSpacing: '0.05em',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                }}
            >
                GRUPPE 4

                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '3rem',
                        transform: 'translateY(-50%)',
                        display: 'flex',
                        gap: '2.5rem',
                        alignItems: 'center',
                    }}
                >
                    <a
                        href="https://youtu.be/JQs3_z8rsVQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            color: '#3d5229',
                            textDecoration: 'none',
                        }}
                    >
                        Promovideo
                    </a>

                    <a
                        href="/#members"
                        style={{
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            color: '#3d5229',
                            textDecoration: 'none',
                        }}
                    >
                        Medlemmer
                    </a>

                    <Link
                        to="/projects"
                        style={{
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            color: '#3d5229',
                            textDecoration: 'none',
                        }}
                    >
                        Prosjekter
                    </Link>

                    <Link
                        to="/bacheloroppgave"
                        style={{
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            color: '#3d5229',
                            textDecoration: 'none',
                        }}
                    >
                        Bacheloroppgave
                    </Link>

                    <a
                        href="/#contact"
                        style={{
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            color: '#3d5229',
                            textDecoration: 'none',
                        }}
                    >
                        Kontakt oss
                    </a>
                </div>
            </div>

            {/* Page Content */}
            <div style={{ padding: '8rem 2rem 2rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ color: '#3d5229' }}>Bacheloroppgave</h1>

                <section style={{marginTop: '2rem'}}>
                    <h2 style={{color: '#719867'}}>Oppgave</h2>

                    <p>
                        Problemstillingen vår er: Hvordan påvirker Norgespris strømforbruket til Ola Nordmann? Vi skal
                        bruke dataanalyse og maskinlæring for å sammenligne strømforbruk før og etter innføringen av
                        Norgespris, og undersøke om det finnes endringer eller trender i forbruket. Dette er et
                        utforskende prosjekt, og sluttproduktet vil derfor utvikles underveis basert på hva analysen
                        avdekker.
                    </p>

                    <p>
                        Kvaliteten på produktet vurderes ut fra faglig korrekt bruk av data og metoder, god
                        dokumentasjon og relevans for samarbeidspartnerne. Disse aspektene er viktige for å sikre
                        troverdige resultater og for å oppfylle kravene til bacheloroppgaven. Kvalitet sikres og
                        vurderes gjennom jevnlige oppfølgingsmøter med Capgemini og Å Energi, arbeid etter
                        SCRUM-metodikk, samt interne gjennomganger av analyser og resultater.
                    </p>

                    <p>
                        Planlegging, backlogg og oppfølging av arbeid gjøres i Trello. Plan og backlogg kvalitetssikres
                        gjennom kontinuerlig oppdatering, sprintplanlegging og evaluering. Estimater settes på oppgaver,
                        og faktisk tidsbruk føres i daglig logg. Sammenligning av estimert og faktisk tidsbruk brukes
                        aktivt for å ha kontroll på fremdrift og ressursbruk, og for å justere planleggingen underveis.
                    </p>

                    <p>
                        Før vi starter arbeidet med bacheloroppgaven skal vi ferdigstille gruppekontrakt, sette oss inn
                        i kravene til oppgaven og etablere nødvendige verktøy og rutiner for samarbeid og dokumentasjon.
                    </p>
                </section>


                <section style={{marginTop: '2rem'}}>
                    <h2 style={{color: '#719867'}}>Status 1</h2>
                    <p>
                        ...
                    </p>
                </section>

                <section style={{marginTop: '2rem'}}>
                    <h2 style={{color: '#719867'}}>Status 2</h2>
                    <p>
                        ...
                    </p>
                </section>
            </div>

            {/* Divider */}
            <div
                style={{
                    width: '60%',
                    height: '2px',
                    backgroundColor: '#719867',
                    margin: '3rem auto',
                }}
            ></div>

            {/* Footer */}
            <footer id="contact">
                <div style={{maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem'}}>
                    <h2
                        style={{
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            color: '#3d5229',
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            textAlign: 'center',
                        }}
                    >
                        Kontakt oss
                    </h2>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2.5rem',
                            color: '#3d5229',
                            fontSize: '1rem',
                            marginBottom: '2rem',
                        }}
                    >
                        {/* E-post */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="20" height="20" fill="none" stroke="#3d5229" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#3d5229" />
                                <path d="M3 5l9 7 9-7" stroke="#3d5229" />
                            </svg>
                            <a href="mailto:svelethea@gmail.com" style={{ color: '#3d5229', textDecoration: 'underline' }}>
                                svelethea@gmail.com
                            </a>
                        </div>

                        {/* Telefon */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="20" height="20" fill="none" stroke="#3d5229" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.24.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 012.11-.45c1.08.35 2.19.59 3.32.72a2 2 0 011.72 2z" stroke="#3d5229" />
                            </svg>
                            <a href="tel:+4790874373" style={{ color: '#3d5229', textDecoration: 'underline' }}>
                                +47 908 74 373
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
