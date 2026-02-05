import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock Data for Universities
// Mock Data for Universities
const universitiesData = {
    Australia: [
        {
            name: "University of Melbourne",
            location: "Melbourne, Victoria",
            image: "/mel.webp",
            description: "A public research university located in Melbourne, Australia. It is one of Australia's oldest and most prestigious universities.",
            ranking: "#1 in Australia",
            website: "https://www.unimelb.edu.au"
        },
        {
            name: "University of Sydney",
            location: "Sydney, New South Wales",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/USYD_Quadrangle.jpg",
            description: "Founded in 1850, it is Australia's first university and is regarded as one of the world's leading universities.",
            ranking: "#2 in Australia",
            website: "https://www.sydney.edu.au"
        },
        {
            name: "Monash University",
            location: "Melbourne, Victoria",
            image: "/mon.jpg",
            description: "A public research university based in Melbourne, Australia. Named after prominent World War I general Sir John Monash.",
            ranking: "Top 50 Globally",
            website: "https://www.monash.edu"
        }
    ],
    "United Kingdom": [
        {
            name: "University of Oxford",
            location: "Oxford, England",
            image: "/ox.jpg",
            description: "The oldest university in the English-speaking world, Oxford is a unique and historic institution.",
            ranking: "World Top 5",
            website: "https://www.ox.ac.uk"
        },
        {
            name: "Coventry University",
            location: "Coventry, England",
            image: "/cov.jpg",
            description: "A forward-looking, modern university with a proud tradition as a provider of high-quality education and a focus on applied research.",
            ranking: "Top Modern University",
            website: "https://www.coventry.ac.uk"
        },
        {
            name: "University of Cambridge",
            location: "Cambridge, England",
            image: "/cambridge.jpg",
            description: "Dedicated to the pursuit of education, learning and research at the highest international levels of excellence.",
            ranking: "World Top 5",
            website: "https://www.cam.ac.uk"
        },
        {
            name: "Imperial College London",
            location: "London, England",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Queen%27s_Tower,_Imperial_College_London.jpg",
            description: "A world-class university with a mission to benefit society through excellence in science, engineering, medicine and business.",
            ranking: "World Top 10",
            website: "https://www.imperial.ac.uk"
        },
        {
            name: "University of Edinburgh",
            location: "Edinburgh, Scotland",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Edinburgh_University_Old_College_02.jpg",
            description: "One of the world's top universities, consistently ranked in the global top 50, and located in one of the world's finest cities.",
            ranking: "World Top 20",
            website: "https://www.ed.ac.uk"
        }
    ],
    Canada: [
        {
            name: "University of Toronto",
            location: "Toronto, Ontario",
            image: "/tor.jpg",
            description: "A global leader in research and teaching and a significant footprint, both in Canada and around the world.",
            ranking: "#1 in Canada",
            website: "https://www.utoronto.ca"
        }
    ],
    "New Zealand": [
        {
            name: "University of Auckland",
            location: "Auckland",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_Auckland_Clock_Tower_building_from_front.JPG",
            description: "The University of Auckland is the largest and most comprehensive university in New Zealand.",
            ranking: "#1 in New Zealand",
            website: "https://www.auckland.ac.nz"
        }
    ],
    USA: [
        {
            name: "Harvard University",
            location: "Cambridge, Massachusetts",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Widener_Library,_Harvard_University,_Cambridge_MA.jpg",
            description: "Dedicated to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference globally.",
            ranking: "World #1",
            website: "https://www.harvard.edu"
        },
        {
            name: "Massachusetts Institute of Technology (MIT)",
            location: "Cambridge, Massachusetts",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mitgreatdome.jpg",
            description: "A world-class educational institution known for its strength in science, engineering, and technology.",
            ranking: "World Top 3",
            website: "https://www.mit.edu"
        },
        {
            name: "Stanford University",
            location: "Stanford, California",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stanford_University_Main_Quad_(cropped).jpg",
            description: "Located in the heart of Silicon Valley, Stanford is one of the world's leading research and teaching institutions.",
            ranking: "World Top 5",
            website: "https://www.stanford.edu"
        }
    ],
    Dubai: [
        {
            name: "University of Wollongong in Dubai",
            location: "Dubai Knowledge Park",
            image: "/wol.jpg",
            description: "The first international university in the UAE, providing a world-class education experience.",
            ranking: "5 Star Rating",
            website: "https://www.uowdubai.ac.ae"
        }
    ],
    Malaysia: [
        {
            name: "Monash University Malaysia",
            location: "Subang Jaya",
            image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "The third largest campus of Monash University, offering opportunities for global mobility.",
            ranking: "Top Tier",
            website: "https://www.monash.edu.my"
        }
    ],
    Singapore: [
        {
            name: "National University of Singapore",
            location: "Singapore",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/CREATE,_University_Town,_National_University_of_Singapore,_at_night_-_20140920.jpg",
            description: "A leading global university centered in Asia, influencing the future.",
            ranking: "Asian #1",
            website: "https://www.nus.edu.sg"
        }
    ]
};

const CountryDetails = () => {
    const { countryName } = useParams();
    const universities = universitiesData[countryName] || [];

    return (
        <div className="section-padding" style={{ paddingTop: '8rem', minHeight: '100vh', background: 'var(--bg-light)' }}>
            <div className="container">
                <Link to="/destinations" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem', textDecoration: 'none', fontWeight: '500' }}>
                    <ArrowLeft size={20} />
                    Back to Destinations
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        Universities in <span style={{ color: 'var(--secondary)' }}>{countryName}</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', fontSize: '1.1rem', marginBottom: '3rem' }}>
                        Explore top-ranked institutions and find the perfect campus for your international education journey in {countryName}.
                    </p>
                </motion.div>

                {universities.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                        <h3>No universities listed for this destination yet.</h3>
                        <p>Contact us for more details.</p>
                    </div>
                ) : (
                    <div className="grid grid-3" style={{ gap: '2rem' }}>
                        {universities.map((uni, index) => (
                            <motion.div
                                key={uni.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-md)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img
                                        src={uni.image}
                                        alt={uni.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{uni.name}</h3>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '500', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                        <MapPin size={16} />
                                        {uni.location}
                                    </div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                                        {uni.description}
                                    </p>
                                    <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ background: 'var(--bg-light)', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--secondary)' }}>
                                            {uni.ranking}
                                        </span>
                                        <a href={uni.website} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem' }}>
                                            <Globe size={16} /> Visit Website
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default CountryDetails;
