import React from "react";

const Speakers = () => {
  return (
    <section className="py-20 container mx-auto px-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-primary">Guests, Speakers & Panelists</h1>
      <div className="text-center text-muted-foreground mb-12">
        Meet the distinguished guests, keynote speakers, and panelists of Savishkar National Workshop 2025.
      </div>

      {/* Chief Guests */}
      <h2 className="text-2xl font-bold mb-4 text-primary">Chief Guests – Inauguration (16 August 2025)</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="card-gradient rounded-lg p-6 tech-shadow">
          <div className="font-bold text-lg mb-1">Prof. S. Sadagopan</div>
          <div className="text-sm text-muted-foreground mb-1">Former Director, IIIT Bangalore (1999–2021)</div>
          <div className="text-xs text-muted-foreground mb-2">Ph.D. (Purdue University, USA)</div>
          <div className="text-xs text-muted-foreground mb-2">Email: <a href="mailto:s.sadagopan@iiitb.ac.in" className="text-primary underline">s.sadagopan@iiitb.ac.in</a></div>
          <ul className="text-xs text-muted-foreground list-disc list-inside mb-2 text-left">
            <li>Graduate of Madras University & Purdue University</li>
            <li>25+ years teaching at IIT Kanpur, IIM Bangalore, IIT Madras, IIIT Bangalore, Rutgers (USA), AIT Bangkok</li>
            <li>Expertise: Operations Research, Optimization, Decision Theory, Simulation, Enterprise Computing, Databases, Multimedia, e-Governance</li>
            <li>Authored 7 books, numerous papers</li>
            <li>Fellow of IEE (UK), Senior Member of IEEE, ACM, AIS</li>
            <li>Served on boards: Bharat Electronics, Neyveli Lignite, Indian Renewable Energy Agency, IIIT Bhubaneshwar, IIIT-Delhi, IBAB</li>
            <li>Member: Karnataka Knowledge Commission, CM's Vision Group on IT, NASSCOM Regional Council</li>
          </ul>
        </div>
        <div className="card-gradient rounded-lg p-6 tech-shadow">
          <div className="font-bold text-lg mb-1">G. Rao</div>
          <div className="text-sm text-muted-foreground mb-1">Director CSR & External Industry Affairs, Volvo Group</div>
          <div className="text-xs text-muted-foreground mb-2">B.E. Mechanical Engineering (Kakatiya Institute of Technology & Science, 1986–1990)</div>
          <div className="text-xs text-muted-foreground mb-2">Bengaluru, Karnataka, India</div>
          <ul className="text-xs text-muted-foreground list-disc list-inside mb-2 text-left">
            <li>Director – JVs Synergy & Special Projects (2017–2019), Volvo Group</li>
            <li>Former VP – Volvo Trucks Product Strategy, Brand & Marketing (2012–2017)</li>
            <li>Leadership in automobile sector, strategic initiatives, partnerships, industry engagement</li>
          </ul>
        </div>
        <div className="card-gradient rounded-lg p-6 tech-shadow">
          <div className="font-bold text-lg mb-1">Dr. K. N. Subramanya</div>
          <div className="text-sm text-muted-foreground mb-1">Principal, RV College of Engineering, Bengaluru</div>
          <div className="text-xs text-muted-foreground mb-2">Host & key dignitary for the inauguration</div>
          <ul className="text-xs text-muted-foreground list-disc list-inside mb-2 text-left">
            <li>Academic leader with extensive contributions to engineering education and institutional growth</li>
          </ul>
        </div>
      </div>

      {/* Keynote Speaker */}
      <h2 className="text-2xl font-bold mb-4 text-primary">Keynote Speaker (16 August 2025)</h2>
      <div className="card-gradient rounded-lg p-6 tech-shadow mb-12">
        <div className="font-bold text-lg mb-1">Shri Krishnaraja M Manjunatha</div>
        <div className="text-sm text-muted-foreground mb-1">Founder, Vishvagra-iRiSEPro</div>
        <div className="text-xs text-muted-foreground mb-2">Email: <a href="mailto:yaanakrishnaraja@gmail.com" className="text-primary underline">yaanakrishnaraja@gmail.com</a></div>
        <ul className="text-xs text-muted-foreground list-disc list-inside mb-2 text-left">
          <li>Postgraduate in Zoology, Sri Ramakrishna Vidyashala, Mysore</li>
          <li>Former senior media professional at ETV, mentored by Sri Ramoji Rao</li>
          <li>Left civil services to build iRiSEPro, 10+ years</li>
          <li>Worked with two Chief Ministers of Karnataka, mentored TV news leaders</li>
          <li>Vision: "Supreme India, Happy Indians"; "A leader is measured by the number of leaders he builds."</li>
        </ul>
      </div>

      {/* Panel Discussion */}
      <h2 className="text-2xl font-bold mb-4 text-primary">Panel Discussion (17 August 2025 – 10:30 AM to 11:30 AM)</h2>
      <div className="card-gradient rounded-lg p-6 tech-shadow mb-4">
        <div className="font-bold text-lg mb-2">Topic: While Studying, Doing the Business and Innovation</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <div className="bg-background rounded-lg p-4 border border-border">
            <div className="font-semibold">Siddharth Narayanan</div>
            <div className="text-xs text-muted-foreground mb-1">Entrepreneur & Innovation Enthusiast</div>
            <div className="text-xs text-muted-foreground">Email: <a href="mailto:siddarthnarayanan7@gmail.com" className="text-primary underline">siddarthnarayanan7@gmail.com</a></div>
          </div>
          <div className="bg-background rounded-lg p-4 border border-border">
            <div className="font-semibold">V. Sudharshan</div>
            <div className="text-xs text-muted-foreground mb-1">Startup Mentor</div>
            <div className="text-xs text-muted-foreground">Email: <a href="mailto:spectrumte@gmail.com" className="text-primary underline">spectrumte@gmail.com</a></div>
          </div>
          <div className="bg-background rounded-lg p-4 border border-border">
            <div className="font-semibold">Kartik Navachar</div>
            <div className="text-xs text-muted-foreground mb-1">Innovator</div>
            <div className="text-xs text-muted-foreground">Email: <a href="mailto:kartik.navachar@gmail.com" className="text-primary underline">kartik.navachar@gmail.com</a></div>
          </div>
          <div className="bg-background rounded-lg p-4 border border-border">
            <div className="font-semibold">Shraddha Kalani</div>
            <div className="text-xs text-muted-foreground mb-1">Business & Social Impact Leader</div>
            <div className="text-xs text-muted-foreground">Email: <a href="mailto:shraddha.kalani@gmail.com" className="text-primary underline">shraddha.kalani@gmail.com</a></div>
          </div>
          <div className="bg-background rounded-lg p-4 border border-border">
            <div className="font-semibold">Suresh Kumar</div>
            <div className="text-xs text-muted-foreground mb-1">Partner, CoCreate Ventures</div>
            <div className="text-xs text-muted-foreground">Email: <a href="mailto:suresh@cocreate.ventures" className="text-primary underline">suresh@cocreate.ventures</a></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
