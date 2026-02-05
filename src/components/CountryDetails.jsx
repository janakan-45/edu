import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Globe, Compass, GraduationCap, Coffee, Landmark, Sun, Music, BookOpen, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useModal } from '../components/ModalContext';

// Helper icon component
const BriefcaseIcon = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="6" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
);

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

const uniqueThingsData = {
    Australia: {
        title: "The Land Down Under",
        pages: [
            {
                type: 'cover',
                title: 'Australia',
                subtitle: 'The Land Down Under'
            },
            {
                type: 'text',
                heading: "Nature & Wildlife",
                content: "Australia is world-famous for its natural wonders and wide-open spaces, its beaches, deserts, 'the bush', and 'the Outback'. It is diverse with unique wildlife like Kangaroos, Koalas, and Quokkas found nowhere else on earth.",
                icon: <Sun size={40} className="text-secondary mb-4" />
            },
            {
                type: 'image',
                heading: "Iconic Landscapes",
                image: '/aus.jpg',
                caption: "The stunning Australian coastline."
            },
            {
                type: 'text',
                heading: "Vibrant Cities",
                content: "From the iconic Sydney Opera House to Melbourne's coffee culture, Australian cities are consistently ranked among the world's most livable. Enjoy a laid-back lifestyle with a perfect work-life balance.",
                icon: <Coffee size={40} className="text-secondary mb-4" />
            },
            {
                type: 'text',
                heading: "Education System",
                content: "Australia has a world-class education system with a strong reputation for research and innovation. Graduates are highly sought after by employers globally.",
                icon: <GraduationCap size={40} className="text-secondary mb-4" />
            },
            {
                type: 'end',
                content: "Contact us to start your journey."
            },
        ]
    },
    "United Kingdom": {
        title: "A Royal Heritage",
        pages: [
            {
                type: 'cover',
                title: 'United Kingdom',
                subtitle: 'A Royal Heritage'
            },
            {
                type: 'text',
                heading: "History & Culture",
                content: "The UK is steeped in history, from ancient Stonehenge to medieval castles. It is the birthplace of Shakespeare and The Beatles, offering a rich tapestry of art, theatre, and music.",
                icon: <Landmark size={40} className="text-secondary mb-4" />
            },
            {
                type: 'image',
                heading: "Historic Landmarks",
                image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                caption: "Big Ben and the Houses of Parliament."
            },
            {
                type: 'text',
                heading: "Global Hub",
                content: "London is a global financial and cultural center. Studying here connects you to the rest of Europe and the world. Enjoy the traditional afternoon tea and the cozy pub culture.",
                icon: <Globe size={40} className="text-secondary mb-4" />
            },
            {
                type: 'text',
                heading: "Academic Excellence",
                content: "Home to some of the world's oldest and most prestigious universities, the UK offers a unique learning environment that combines tradition with modern innovation.",
                icon: <BookOpen size={40} className="text-secondary mb-4" />
            }
        ]
    },
    Canada: {
        title: "The Great White North",
        pages: [
            {
                type: 'cover',
                title: 'Canada',
                subtitle: 'The Great White North'
            },
            {
                type: 'text',
                heading: "Breathtaking Landscapes",
                content: "Canada features majestic mountains, rolling plains, not to mention the famous Niagara Falls. It is a haven for outdoor enthusiasts, offering skiing, hiking, and kayaking.",
                icon: <Sun size={40} className="text-secondary mb-4" />
            },
            {
                type: 'image',
                heading: "Natural Beauty",
                image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                caption: "Toronto skyline and CN Tower."
            },
            {
                type: 'text',
                heading: "Diverse & Welcoming",
                content: "Known for its politeness and multiculturalism, Canada welcomes students from all over. Cities like Toronto and Vancouver are melting pots of cultures and cuisines.",
                icon: <Music size={40} className="text-secondary mb-4" />
            }
        ]
    },
    "New Zealand": {
        title: "Middle-earth",
        pages: [
            {
                type: 'cover',
                title: 'New Zealand',
                subtitle: 'Adventure Capital'
            },
            {
                type: 'text',
                heading: "Adventure Capital",
                content: "New Zealand is famous for its adrenaline-pumping activities like bungy jumping and skydiving in Queenstown. Its scenery was the backdrop for The Lord of the Rings.",
                icon: <Sun size={40} className="text-secondary mb-4" />
            },
            {
                type: 'image',
                heading: "Scenic Views",
                image: '/new.jpg',
                caption: "Breathtaking landscapes of New Zealand."
            },
            {
                type: 'text',
                heading: "Maori Culture",
                content: "Experience the rich indigenous Maori culture, known for its Haka dance and warm hospitality (Manaakitanga). It is one of the safest and most peaceful countries.",
                icon: <Landmark size={40} className="text-secondary mb-4" />
            }
        ]
    },
    USA: {
        title: "Land of Opportunity",
        pages: [
            {
                type: 'cover',
                title: 'USA',
                subtitle: 'Land of Opportunity'
            },
            {
                type: 'text',
                heading: "Innovation Leader",
                content: "The USA is a global leader in technology and innovation, home to Silicon Valley and top research institutions. It offers a dynamic campus life with sports and greek life.",
                icon: <BriefcaseIcon size={40} className="text-secondary mb-4" />
            },
            {
                type: 'image',
                heading: "Campus Life",
                image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                caption: "Iconic American university architecture."
            },
            {
                type: 'text',
                heading: "Cultural Melting Pot",
                content: "From the busy streets of NYC to the sunny beaches of California, the US offers endless diversity. Experience Thanksgiving, Hollywood movies, and a vast array of food.",
                icon: <Music size={40} className="text-secondary mb-4" />
            }
        ]
    },
    Dubai: {
        title: "City of the Future",
        pages: [
            {
                type: 'cover',
                title: 'Dubai',
                subtitle: 'City of the Future'
            },
            {
                type: 'text',
                heading: "Modern Marvels",
                content: "Home to the Burj Khalifa and Palm Jumeirah, Dubai is a city of superlatives. It is a rapidily growing hub for business, tourism, and education in the Middle East.",
                icon: <Landmark size={40} className="text-secondary mb-4" />
            },
            {
                type: 'image',
                heading: "Skyline",
                image: '/dubai.jpg',
                caption: "The futuristic skyline of Dubai."
            },
            {
                type: 'text',
                heading: "Luxury & Tradition",
                content: "Experience ultra-modern luxury shopping alongside traditional Souks. Dubai offers a tax-free income potential and a safe, multicultural environment.",
                icon: <Sun size={40} className="text-secondary mb-4" />
            }
        ]
    },
    Malaysia: {
        title: "Truly Asia",
        pages: [
            {
                type: 'cover',
                title: 'Malaysia',
                subtitle: 'Truly Asia'
            },
            {
                type: 'text',
                heading: "Cultural Harmony",
                content: "Malaysia is a unique blend of Malay, Chinese, and Indian cultures. This diversity is reflected in its festivals, architecture, and most importantly, its food.",
                icon: <Globe size={40} className="text-secondary mb-4" />
            },
            {
                type: 'image',
                heading: "City Vibes",
                image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                caption: "Kuala Lumpur's vibrant street scene."
            },
            {
                type: 'text',
                heading: "Affordable Excellence",
                content: "Kuala Lumpur offers a high quality of life at an affordable cost. Malaysia is home to some of the oldest rainforests and beautiful islands like Langkawi.",
                icon: <Coffee size={40} className="text-secondary mb-4" />
            }
        ]
    },
    Singapore: {
        title: "The Garden City",
        pages: [
            {
                type: 'cover',
                title: 'Singapore',
                subtitle: 'The Garden City'
            },
            {
                type: 'text',
                heading: "Green & Clean",
                content: "Singapore is known for its cleanliness and lush greenery, seamlessly blended with futuristic architecture like Gardens by the Bay. It is a smart nation.",
                icon: <Sun size={40} className="text-secondary mb-4" />
            },
            {
                type: 'image',
                heading: "Modern Living",
                image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                caption: "Singapore's iconic architecture."
            },
            {
                type: 'text',
                heading: "Gateway to Asia",
                content: "As a global commerce finance and transport hub, it offers immense career opportunities. The food scene is legendary, from hawker centers to Michelin stars.",
                icon: <Coffee size={40} className="text-secondary mb-4" />
            }
        ]
    }
};

const CountryDetails = () => {
    const { countryName } = useParams();
    const { openModal } = useModal();
    const universities = universitiesData[countryName] || [];
    const uniqueInfo = uniqueThingsData[countryName] || {
        title: `Explore ${countryName}`,
        pages: []
    };

    const [viewMode, setViewMode] = useState('guide'); // 'guide' or 'universities'

    // Filter pages for the new layout
    const coverPage = uniqueInfo.pages.find(p => p.type === 'cover');
    const contentPages = uniqueInfo.pages.filter(p => p.type === 'text' || p.type === 'image');
    const endPage = uniqueInfo.pages.find(p => p.type === 'end');

    return (
        <div className="section-padding" style={{ paddingTop: '8rem', minHeight: '100vh', background: 'var(--bg-light)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <Link to="/destinations" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: '500' }}>
                        <ArrowLeft size={20} />
                        Back to Destinations
                    </Link>

                    <button
                        onClick={() => setViewMode(viewMode === 'guide' ? 'universities' : 'guide')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '50px',
                            background: viewMode === 'guide' ? 'var(--primary)' : 'white',
                            color: viewMode === 'guide' ? 'white' : 'var(--primary)',
                            boxShadow: 'var(--shadow-sm)',
                            cursor: 'pointer',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            border: viewMode === 'guide' ? 'none' : '2px solid var(--primary)'
                        }}
                    >
                        {viewMode === 'guide' ? (
                            <>
                                <GraduationCap size={20} />
                                View Universities
                            </>
                        ) : (
                            <>
                                <Compass size={20} />
                                View Country Guide
                            </>
                        )}
                    </button>
                </div>

                <motion.div
                    key={viewMode}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    {viewMode === 'guide' ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                            {/* Hero / Cover Section */}
                            {coverPage && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ textAlign: 'center', marginBottom: '1rem' }}
                                >
                                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--primary)', lineHeight: 1.1 }}>
                                        {coverPage.title}
                                    </h1>
                                    <p style={{ fontSize: '1.5rem', color: 'var(--secondary)', fontWeight: '500' }}>
                                        {coverPage.subtitle}
                                    </p>
                                    <div style={{ width: '80px', height: '6px', background: 'var(--accent)', margin: '2rem auto', borderRadius: '4px' }}></div>
                                </motion.div>
                            )}

                            {/* Content Grid */}
                            <div className="grid grid-2" style={{ gap: '2.5rem' }}>
                                {contentPages.map((page, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        style={{
                                            backgroundColor: 'white',
                                            borderRadius: 'var(--radius-lg)',
                                            overflow: 'hidden',
                                            boxShadow: 'var(--shadow-md)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            cursor: 'default'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                        }}
                                    >
                                        {page.type === 'image' ? (
                                            <>
                                                <div style={{ height: '250px', overflow: 'hidden' }}>
                                                    <img
                                                        src={page.image}
                                                        alt={page.heading}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                </div>
                                                <div style={{ padding: '2rem' }}>
                                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{page.heading}</h3>
                                                    {page.caption && <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>{page.caption}</p>}
                                                </div>
                                            </>
                                        ) : (
                                            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                                {page.icon && (
                                                    <div style={{
                                                        width: '60px',
                                                        height: '60px',
                                                        borderRadius: '50%',
                                                        background: 'var(--bg-light)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginBottom: '1.5rem',
                                                        color: 'var(--secondary)'
                                                    }}>
                                                        {page.icon}
                                                    </div>
                                                )}
                                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>{page.heading}</h3>
                                                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-body)', flex: 1 }}>
                                                    {page.content}
                                                </p>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer / CTA Section */}
                            {endPage && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    style={{
                                        marginTop: '1rem',
                                        padding: '4rem 2rem',
                                        background: 'linear-gradient(135deg, var(--primary), #1a2c42)',
                                        borderRadius: 'var(--radius-lg)',
                                        color: 'white',
                                        textAlign: 'center',
                                        boxShadow: 'var(--shadow-lg)'
                                    }}
                                >
                                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Start Your Journey</h3>
                                    <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
                                        {endPage.content}
                                    </p>
                                    <Link
                                        to="/contact"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            background: 'var(--accent)',
                                            color: 'var(--primary)',
                                            padding: '1rem 3rem',
                                            borderRadius: '50px',
                                            textDecoration: 'none',
                                            fontWeight: '700',
                                            fontSize: '1.1rem',
                                            transition: 'transform 0.2s',
                                            boxShadow: '0 4px 15px rgba(242, 169, 0, 0.3)'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        Contact Us <GraduationCap size={24} />
                                    </Link>
                                </motion.div>
                            )}
                        </div>
                    ) : (
                        <>
                            <div style={{ marginBottom: '2rem' }}>
                                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                    Universities in <span style={{ color: 'var(--secondary)' }}>{countryName}</span>
                                </h1>
                                <p style={{ color: 'var(--text-muted)', maxWidth: '700px', fontSize: '1.1rem' }}>
                                    Explore top-ranked institutions and find the perfect campus for your international education journey in {countryName}.
                                </p>
                            </div>

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
                                                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                                        <span style={{ background: 'var(--bg-light)', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--secondary)' }}>
                                                            {uni.ranking}
                                                        </span>
                                                        <a href={uni.website} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem' }}>
                                                            <Globe size={16} /> Visit Website
                                                        </a>
                                                    </div>
                                                    <button
                                                        onClick={openModal}
                                                        style={{
                                                            width: '100%',
                                                            padding: '0.85rem',
                                                            background: 'var(--primary)',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: 'var(--radius-md)',
                                                            fontWeight: '600',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            gap: '0.5rem',
                                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                                            transition: 'transform 0.2s',
                                                            fontSize: '1rem'
                                                        }}
                                                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                                    >
                                                        <Phone size={18} />
                                                        Book Free Consultation
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </motion.div>
            </div>
            <style>{`
                /* Optional fix for text centering if needed */
                .demoPage {
                    /* user-select: none; */
                }
            `}</style>
        </div>
    );
};

export default CountryDetails;
