import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
    {
        title: "Australia Education Fair 2026",
        date: "Feb 15, 2026",
        time: "10:00 AM - 4:00 PM",
        location: "Cinnamon Grand, Colombo",
        tag: "Free Entry"
    },
    {
        title: "UK University Application Week",
        date: "Mar 01, 2026",
        time: "9:00 AM - 5:00 PM",
        location: "Edu Globe Office, WTC",
        tag: "Appointment Only"
    },
    {
        title: "Canada Visa Seminar",
        date: "Mar 10, 2026",
        time: "2:00 PM - 5:00 PM",
        location: "Queens Hotel, Kandy",
        tag: "Limited Seats"
    }
];

const Events = () => {
    return (
        <section id="events" className="section bg-light" style={{ backgroundColor: 'var(--bg-light)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Upcoming <span style={{ color: 'var(--secondary)' }}>Events</span></h2>
                        <p style={{ color: 'var(--text-muted)' }}>Join our sessions to meet university representatives directly.</p>
                    </div>
                    <a href="#contact" className="btn btn-outline" style={{ borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>
                        View All Events <ArrowRight size={18} />
                    </a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {events.map((ev, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                padding: '1.5rem',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: 'var(--shadow-sm)',
                                flexWrap: 'wrap',
                                gap: '1.5rem'
                            }}
                            className="event-card"
                        >
                            <div
                                style={{
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    padding: '1rem',
                                    borderRadius: 'var(--radius-sm)',
                                    textAlign: 'center',
                                    minWidth: '80px'
                                }}
                            >
                                <div style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: '1' }}>{ev.date.split(' ')[1].replace(',', '')}</div>
                                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>{ev.date.split(' ')[0]}</div>
                            </div>

                            <div style={{ flex: 1, minWidth: '200px' }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>{ev.title}</h4>
                                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={16} /> {ev.time}</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={16} /> {ev.location}</span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span
                                    style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '50px',
                                        backgroundColor: '#ecfccb',
                                        color: '#4d7c0f',
                                        fontSize: '0.8rem',
                                        fontWeight: '600'
                                    }}
                                >
                                    {ev.tag}
                                </span>
                                <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Register</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .event-card:hover { transform: translateX(5px); border-left: 5px solid var(--secondary); transition: all 0.3s; }
      `}</style>
        </section>
    );
};

export default Events;
