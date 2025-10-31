// Essential variables
var markedJobs = [];
var currentJobId = null;

// Jobs array with existing jobs (IDs 1-14) plus the newly added jobs (IDs 15-25)
const jobs = [
  {
    title: "Academic Office Assistant/Front Desk Receptionist",
    department: "LeBow Graduate Student Services",
    education: "Sophomore",
    description: `The Drexel LeBow Graduate Student Services office is looking for Work-Study eligible students to serve as an office assistant/receptionist. Daily duties include full front reception desk coverage, greet all students and visitors, navigate front office traffic flow, answering phones and taking messages, sign for packages, assist with projects/event preparation, run on-campus errands, and other duties as assigned. Multiple students may be hired to ensure continuous coverage at the reception desk.`,
    qualifications: `To qualify, inquiring students must be eligible for the Federal Work-Study Program and have available work-study funds; Have in-person availability between 9:00am - 5:00pm, Monday through Friday (minimum 2-hours per shift); Reliable, punctual, and a professional work demeanor; Self-starter and ability to complete tasks with minimal direction; Knowledge of Microsoft Office Suite; Strong organizational and communication skills. *Must be comfortable with frequent social interactions, you will be expected to initiate conversations with all office visitors and callers.*`,
    positions: 4,
    campus:"UNIVERSITY CITY",
    location: "LeBow College of Business, Gerri C. LeBow Hall",
    supervisor: { name: "Candelaria,Erin", email: "ejk42@drexek.edu", phone: "215.571.3751" },
    marked: false,
    id: 1
  },
  {
    title: "Academic Research & Content Strategy Assistant",
    department: "Enrollment Management, Inter-College Advising",
    education: "Freshman",
    description: `The Office of Inter-College Advising is seeking a motivated and detail-oriented work-study student to support our academic research, benchmarking, and web content initiatives. This role offers a unique opportunity to gain experience in higher education administration by assisting in data-driven decision-making and creating valuable resources for our students and faculty.

Responsibilities: 

1. Academic-Focused Research: 
                         o	Conduct research on academic policies, programs, and trends to support institutional decision-making. 

                         o	Collect and synthesize data on best practices in curriculum design, student support services, and academic success initiatives. 

2. Benchmarking Against Other Institutions: 

                         o	Perform competitive benchmarking studies by analyzing data from peer institutions. 

                         o	Identify emerging trends and strategies that can help our university improve academic offerings and student outcomes. 

3. Web Content Creation and Management: 

                         o	Assist in developing and updating academic-related web content for university sites. 

                         o	Ensure web content is accurate, accessible, and aligned with institutional branding and messaging.`,
    qualifications: `•Current undergraduate or graduate student. •Strong research and analytical skills, with attention to detail. •	Excellent written communication skills and attention to detail.  •	Ability to work independently and meet deadlines.`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Other, Korman",
    supervisor: { name: "Spina,Michelle", email: "mfs79@drexel.edu", phone: "2158952000" },
    marked: false,
    id: 2
  },
  {
    title: "Academic Resource Center (ARC) Ambassador",
    department: "EMSS",
    education: "Sophomore",
    description: `The ARC Ambassador supports the leadership team at the ARC and is a peer advocate for academic support. Duties include providing front desk service at the ARC, tabling at events to represent the ARC, supporting ARC events, and giving tours of the ARC.  ARC Ambassadors will interact with peer educators and professional staff/faculty at the ARC and participate in trainings/professional development.  The primary role is to help other students learn about resources and encourage them to utilize those supports.  ARC Ambassadors may be asked to serve on panels, answering emails and phone calls.  In addition, ARC Ambassadors may be asked to create resources, do data entry, copying, scheduling, monitoring of supplies, and other administrative tasks as needed.`,
    qualifications: `A qualified candidate will have customer service experience, be familiar with Microsoft suite including Word and Excel, and have a positive, friendly demeanor. Punctuality and reliability a must.  Evening hours available. To apply, please email arc@drexel.edu with your resume.`,
    positions: 5,
    campus:"UNIVERSITY CITY",
    location: "Other, Korman",
    supervisor: { name: "Weidensaul,Rebecca", email: "weidenrl@drexel.edu", phone: "2158956092" },
    marked: false,
    id: 3
  },
  {
    title: "Administrative Assistant",
    department: "Office of the Dean",
    education: "Freshman",
    description: `The College of Engineering in the Office of the Dean is looking for students to serve as an office assistant/receptionist.  Responsibilities will include office reception, greeting visitors, answering telephone calls/taking messages, photocopying, sorting mail, data entry, re-stocking supplies, running errands on campus, setting-up and breaking-down of events, and other duties as assigned.`,
    qualifications: `Current Drexel student in good standing with the University. Positive attitude, friendly, flexible schedule, dependable, and ability to work as a part of a team. Knowledge of Microsoft Office Suite and Outlook. Prior customer service or office experience is a plus.`,
    positions: 5,
    campus:"UNIVERSITY CITY",
    location: "College of Engineering, CAT",
    supervisor: { name: "Nakazawa,Keiko", email: "kn52@drexel.edu", phone: "215-895-2210" },
    marked: false,
    id: 4
  },
  {
    title: "Admissions Operations Assistant",
    department: "EMSS, Operations",
    education: "Freshman",
    description: `Are you a detail-oriented student with a knack for organization and tech? We’re looking for dedicated individuals to join our team for a part-time role that fits within your class schedule. We have the perfect opportunity for you! 

Why Apply? 

•	Flexible hours to work around your classes  
•	Gain valuable experience in a supportive environment  
•	Build skills that will boost your future career  

Essential Functions: 

•	Perform data entry and attach documents to records  
•	Calculate GPAs and additional data points 
•	Open, sort, and scan documents  
•	Handle letter requests for prospective students  
•	Assemble and organize packets and packages`,
    qualifications: `•	Availability: At least 5-10 hours/week, Monday to Friday, between 8 AM - 4 PM •	Commitment: Be punctual and reliable with your scheduled hours •	Skills: Love working with data, have great attention to detail, and enjoy hands-on tasks •	Applicants must have Federal Work Study awarded`,
    positions: 10,
    campus:"UNIVERSITY CITY",
    location: "Other, Main Building",
    supervisor: { name: "Sheppard,Chanelle", email: "cba25@drexel.edu", phone: "215-895-0938" },
    marked: false,
    id: 5
  },
  {
    title: "Admissions Services Assistant",
    department: "Strategic Enrollment Services",
    education: "Sophomore",
    description: `Admissions Services is looking for a student to support in duties related to data entry and applicant communication via phone, email, and mail. 

Currently looking for a Winter term Student Worker.`,
    qualifications: `The ideal candidate is responsible, reliable, and possesses strong communication skills. The ideal candidate has a strong work ethic, strong communication skills, and ability to handle confidential matters. Ability to work independently or collaboratively. Experience with telephone communication is preferred. Experience with Microsoft Office tools required.`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Other, Main",
    supervisor: { name: "Mitnick,Hilary", email: "hrm45@drexel.edu", phone: "215-895-6128" },
    marked: false,
    id: 6
  },
  {
    title: "AI/ML Programming Assistant",
    department: "MEM",
    education: "Pre-Junior",
    description: `Translate undergraduate level knowledge of ML/AI methods including neural networks to our lab's wiki, including sharing of course notes, doing a tutorial, etc.`,
    qualifications: `Note: position requires someone with prior experience/coursework in ML/AI methods and knows how to use neural networks. If you qualify, email a one slide and one paragraph example of something you can share`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "College of Engineering, 3701 Market St",
    supervisor: { name: "Chang,Wesley", email: "wc552@drexel.edu", phone: "9092670312" },
    marked: false,
    id: 7
  },
  {
    title: "Aircraft Simulator Software Manager",
    department: "Mechanical Engineering and Mechanics",
    education: "Sophomore",
    description: `Use of commercial image processing software to project on cylindrical screen`,
    qualifications: `Computer usage and affinity for Airplanes`,
    positions: 2,
    campus:"UNIVERSITY CITY",
    location: "College of Engineering, 3101 Market Street",
    supervisor: { name: "Yousuff,Ajmal", email: "ay29@drexel.edu", phone: "2158951868" },
    marked: false,
    id: 8
  },
  {
    title: "Alumni Engagement Assistant",
    department: "Institutional Advancement",
    education: "Freshman",
    description: `The Alumni Relations Alumni Engagement Assistant will support the team by helping to research, prepare, execute, and report on various events and programs hosted through the Office of Alumni Relations. Sample projects include but are not limited to Office Reception, shipping and fulfillment, event venue and format research,  nametag and agenda development, and inventory management. The Office of Alumni Relations operates in a hybrid schedule subject to discussion upon hiring.`,
    qualifications: `Must have Federal work study funds. Strong organizational skills, friendly attitude, and motivated self-starter.`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Other, Peck Alumni Center",
    supervisor: { name: "Logue,Marlyn", email: "mjl367@drexel.edu", phone: "215-895-2586" },
    marked: false,
    id: 9
  },
  {
    title: "Archives & Special Collections Assistant",
    department: "Legacy Center Archives",
    education: "Freshman",
    description: `Assist with tasks and projects related to access to archival materials, such as photo and document scanning and metadata creation, inventorying collections and data entry, researcher assistance, historical research, and social media. The Legacy Center Archives manages and shares materials reflecting the 170+ year history of Drexel and its predecessor institutions, Woman's Medical College of Pennsylvania and Hahnemann University. For more info, visit https://drexel.edu/legacy-center/ 

Flexible scheduling Monday-Friday 8am-5pm. 

This job is designed for students considering careers in Archives, Library, Special Collections, and Museum fields. If this isn’t you but you’re interested, please see our other Work-Study listing for Archives Support Technician..`,
    qualifications: `Computer savvy (Windows and/or Mac) and willing to attend to detail. Interest in or experience with history or historical materials a plus but not necessary.`,
    positions: 2,
    campus:"QUEEN LANE",
    location: "College of Medicine, Virtual work available as well as onsite Queen Lane Campus",
    supervisor: { name: "Herbison,Matt", email: "mh683@drexel.edu", phone: "215-991-8340" },
    marked: false,
    id: 10
  },
  {
    title: "Archives Support Technician",
    department: "Legacy Center Archives",
    education: "Freshman",
    description: `Support archives tasks and projects such as transcription of historical handwriting, data entry, inventorying collections, and scanning historical materials. Tasks may be customized to the individual and include historical research or social media. The Legacy Center Archives manages and shares materials reflecting the 170+ year history of Drexel and its predecessor institutions, Woman's Medical College of Pennsylvania and Hahnemann University. For more info, visit https://drexel.edu/legacy-center/ 

Most of our students do remote work. Onsite work at our offices at Drexel's Queen Lane campus is also an option. 

Very flexible scheduling, adapting to students’ changing academic schedules. 

This job is designed for students in any field. Our other Work-Study posting for Archives & Special Collections Assistant is geared to students considering careers in Archives, Library, Special Collections, or Museum fields.`,
    qualifications: `Computer savvy (Windows and/or Mac) and willing to attend to detail. Interest in or experience with history or historical materials a plus but not necessary.`,
    positions: 2,
    campus:"QUEEN LANE",
    location: "College of Medicine, Virtual work available as well as onsite Queen Lane Campus",
    supervisor: { name: "Herbison,Matt", email: "mh683@drexel.edu", phone: "215-991-8340" },
    marked: false,
    id: 11
  },
  {
    title: "ASAP Shabbat Work Study",
    department: "Hillel at Drexel University",
    education: "Freshman",
    description: `Dates and hours: 

-Up to 10 hours/week 

-Hours: Fridays starting at 10 or 11 am, and working until 3 or 4 pm; potential to work additional days 

Responsibilities may include: 

-Assisting with setup for weekly Shabbat dinners, including setting tables, receiving food delivery, and tidying the space 
-Helping braid challah 
-Taking regular inventory of Shabbat supplies 
-Helping with data entry to keep track of Shabbat dinner attendance 
-Potential to work additional days in order to support setting up rooms, organizing the building, and other logistics.`,
    qualifications: `N/A`,
    positions: 2,
    campus:"UNIVERSITY CITY",
    location: "Other, Perelman Center for Jewish Life",
    supervisor: { name: "Rosenberg,Hannah", email: "hrosenberg@drexelhillel.org", phone: "203-382-3829" },
    marked: false,
    id: 12
  },
  {
    title: "Athletic Equipment Assistant",
    department: "Athletics",
    education: "Freshman",
    description: `This position will assist the athletic equipment staff with laundry operations at the athletic centers. This position will run through summer, fall, winter and spring semesters.`,
    qualifications: `Work study`,
    positions: 12,
    campus:"UNIVERSITY CITY",
    location: "Other, Daskalakis Athletic Center",
    supervisor: { name: "Armstrong,Brendan", email: "bja63@drexel.edu", phone: "2677675970" },
    marked: false,
    id: 13
  },
  {
    title: "Athletic Fueling Station Attendant",
    department: "Athletics",
    education: "Freshman",
    description: `The Fueling Station Attendant will assist the sports dietitian in all aspects of the student-athlete fueling station. Responsibilities include but are not limited to the following: Interacting with Drexel Varsity Athletes, stocking/restocking food items; accepting food items; maintaining a clean work environment; providing quality customer service.`,
    qualifications: `Good communication and interpersonal skills.`,
    positions: 10,
    campus:"UNIVERSITY CITY",
    location: "Other, Daskalakis Athletic Center",
    supervisor: { name: "Irvine,Andrea", email: "acg46@drexel.edu", phone: "215-571-3772" },
    marked: false,
    id: 14
  },
  // Newly added jobs
  {
    title: "Battery Lab Assistant",
    department: "MEM",
    education: "Junior",
    description: `Assist with laboratory research protocols related to batteries and electrochemistry, including 1) improving resolution of an optical microscope, 2) 3D printing and machining things, 3) general improvements to some of our software and code`,
    qualifications: `Prior experience in a chemistry lab, or with programming in Python, able to respond quick, communicate effectively and promptly`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "College of Engineering, 3701 Market St",
    supervisor: { name: "Chang,Wesley", email: "wc552@drexel.edu", phone: "9092670312" },
    marked: false,
    id: 15
  },
  {
    title: "Biomedical Research Lab Assistant",
    department: "Microbiology and Immunology",
    education: "Freshman",
    description: `This position is designed to provide key support in general lab maintenance within a biomedical research lab. This includes assisting in maintaining accurate records of inventory, cleaning and prepping of surgical equipment and laboratory supplies, the preparation of buffers and media, and assisting with general lab tidiness. The lab assistant will work directly with senior lab members and with additional training can expand to assist with experiment support. Expected hours can range from a minimum commitment of 10 hours/week up to 20 hours/week, morning or afternoon.`,
    qualifications: `Reliable, responsible, excellent communication skills, availability during standard work hours (9am-5pm)`,
    positions: 2,
    campus:"CENTER CITY",
    location: "College of Medicine, New College Building",
    supervisor: { name: "Hope,Jenna", email: "jlh434@drexel.edu", phone: "267-359-2365" },
    marked: false,
    id: 16
  },
  {
    title: "Biostatistics Marketing Assistant",
    department: "Epidemiology and Biostatistics",
    education: "Freshman",
    description: `This candidate will assist Dr. Loni Philip Tabb in her role as Associate Professor of Biostatistics and will be expected to assist in marketing and administrative needs in the field of biostatistics. The candidate should have:   

Great communication skills  
⁃	written (emails, guides, mini reports) 
⁃	oral (meetings) 
Ability to meet weekly with Dr. Tabb 
⁃	30–45-minute meeting 1-2 times per week 
Social media, marketing and research abilities 
⁃	develop weekly schedule for online content  
⁃	locate free and/or minimal cost websites for higher education faculty 
⁃	develop how to guide on setting up and maintaining website content  
⁃	assist in biostatistical research needs (i.e. descriptive and inferential statistical analyses)`,
    qualifications: `The candidate will also have experience in: Microsoft (word, power point),  Adobe,  Google,  LinkedIn,   Bluesky,   Instagram/Facebook`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Dornsife School of Public Health, Nesbitt Hall",
    supervisor: { name: "Tabb,Loni", email: "lpp22@drexel.edu", phone: "267.359.6217" },
    marked: false,
    id: 17
  },
  {
    title: "CAT Work Study Student",
    department: "Creative Arts Therapies Department",
    education: "Graduate Student",
    description: `The Creative Arts Therapies Department is seeking work-study students who are detail-oriented, organized, and dependable to serve as studio stewards, display assistants, social media and administrative assistants. Duties will include independent and collaborative maintenance of studio and display spaces and communication efforts as well as community building efforts and the administrative tasks associated with each of these posts and tasks assigned by faculty.`,
    qualifications: `Applicants must be accountable to self and others and embody good communication and creative problem-solving skills.`,
    positions: 25,
    campus:"UNIVERSITY CITY",
    location: "College of Nursing and Health Professions, Health Sciences Building",
    supervisor: { name: "Kaimal,Girija", email: "gk27@drexel.edu", phone: "267-359-5507" },
    marked: false,
    id: 18
  },
  {
    title: "CATALYST Fellow",
    department: "Westphal College Dean’s Office of Inclusion, Diversity, Equity, and Anti-Racism",
    education: "Freshman",
    description: `Position: CATALYST FELLOW in the Westphal College Dean’s Office of Inclusion, Diversity, Equity, and Anti-Racism

Compensation: Work Study Allotment

Description: CATALYST stands for Creatives Activating Talent, Advocacy, & Leadership Yielding Social Transformation. CATALYST Fellows receive work study compensation for contributions to the realization and implementation of strategic goals advancing inclusion, diversity, equity, and anti-racism at Westphal College.

Assignments: They may be assigned to support any of the projects in the Westphal Dean’s Office of IDEA such as Westphal BRIDGE Scholars Program, M2M Apprenticeship, IDEA Pedagogy Series, Community Care Day, and other events and projects.

Faculty Student Collaboration: CATALYST Scholars are advised by and collaborate with Associate Dean and Professor Francis Aguas on any projects they want to initiate in addition to the projects they are assigned to complete and support in the Westphal Dean’s Office of Inclusion, Diversity, Equity, and Anti-Racism. They also report to Westphal IDEA Office Administrator Mysha Harrell.

Eligibility: All undergraduate and graduate students with Work Study allocation are eligible to apply.

Application: Applicants are required to submit their updated resume which should include their latest GPA, and a 250 word (maximum )cover letter stating their rationale, skills set, and passion for inclusion, diversity, equity, anti-racism and belonging. They are also required to state which aspect of the Westphal Dean’s Office of IDEA they want to work on such as Westphal BRIDGE, or they can propose a self-initiated IDEA project utilizing their creativity and academic or career interests.`,
    qualifications: `Catalyst Fellows are selected for their outstanding leadership potential, creativity, artistry, academic excellence and demonstrated commitment to the ideals of belonging, inclusion, diversity, equity, and anti-racism`,
    positions: 3,
    campus:"UNIVERSITY CITY",
    location: "Westphal College of Media Arts & Design, URBN Center",
    supervisor: { name: "Aguas,Francis", email: "fa548@drexel.edu", phone: "215-895-2386" },
    marked: false,
    id: 19
  },
  {
    title: "Chemical analysis of materials",
    department: "Chemical and Biological Engineering",
    education: "Sophomore",
    description: `Student will work in a research lab on campus to clean glassware, mix reagents, monitor chemical processes, analyze data and submit reports.`,
    qualifications: `Current STEM student`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "College of Engineering, CAT",
    supervisor: { name: "Fafarman,Aaron", email: "fafarman@drexel.edu", phone: "2158955818" },
    marked: false,
    id: 20
  },
  {
    title: "Chemistry Instructional Recitation Assistants",
    department: "Chemistry",
    education: "Sophomore",
    description: `We are seeking undergraduate students who received a grade of B+ or higher in CHEM 101 or CHEM 121 to serve as Instructional Recitation Assistants for the General Chemistry I (CHEM 101) course during Fall 2024.  The recitation assistants will be required to:  1) attend weekly meetings with the course coordinator, as well as participate in the general, all-instructors meetings held at the beginning and at the end of the term;  2) teach and grade two or three General Chemistry Recitation sections per week (50 min each), according to a predetermined teaching schedule and following closely the provided syllabus and course policies;  3) schedule 1 office hour per week; and 4) proctor exams as assigned. The total number of hours for this position would be up to 8 hours per week (depending on the number of recitations taught).`,
    qualifications: `Undergraduate students who received a grade of B+ or higher in CHEM 101 or CHEM 121 (or equivalent course if transfer student)`,
    positions: 5,
    campus:"UNIVERSITY CITY",
    location: "College of Arts and Sciences, Disque Hall",
    supervisor: { name: "Farasat,Reza", email: "rf485@drexel.edu", phone: "(215)895-4970" },
    marked: false,
    id: 21
  },
  {
    title: "COE Innovation Studio Jr. Lab Technician",
    department: "College of Engineering",
    education: "Freshman",
    description: `Assist with design-build projects that involve 3D printing and other maker-space innovation activities in collaboration with faculty, students, and staff. Build teaming, professional, and leadership skills through education, mentoring, and project management. Also assisting in the following departments within the College of Engineering: Chemical and Biological Engineering Civil, Architectural and Environmental Engineering Engineering Technology Electrical and Computer Engineering Machine Shop Materials Science and Engineering Mechanical Engineering and Mechanics and Outreach.`,
    qualifications: `Engineering Preferred`,
    positions: 15,
    campus:"UNIVERSITY CITY",
    location: "Engineering Preferred",
    supervisor: { name: "Bradley Eshelman", email: "bre22@drexel.edu", phone: "215-895-6010" },
    marked: false,
    id: 22
  },
  {
    title: "Communication and Content Creation Work Study",
    department: "Cinema & Television",
    education: "Graduate Student",
    description: `The Television & Media Management Graduate Program at Drexel University is seeking a motivated and creative work-study student to assist with communication and content creation. This position offers the opportunity to gain hands-on experience in media management, content development, and digital communication strategies.`,
    qualifications: `Current Drexel University student enrolled in a related program. Strong written and verbal communication skills. Experience with social media platforms and digital content creation. Ability to work independently and as part of a team. Familiarity with video editing a plus.`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Westphal College of Media Arts & Design, University Crossings",
    supervisor: { name: "McHugh,Michelle", email: "pmb92@drexel.edu", phone: "215-895-2172" },
    marked: false,
    id: 23
  },
  {
    title: "Communications Assistant",
    department: "Communications and Marketing",
    education: "Sophomore",
    description: `Drexel University’s College of Engineering Marketing and Communication office helps to engage and make connections with its external and internal audiences. The Communications Assistant is a part-time student position that will work on content creation for the web, newsletters, social media and other related channels. Responsibilities include: making outreach to students and student organizations, attending college activities, student organization events in order to interview, record video and/or take photos for social media and college news feeds. Writes captions, posts, edits video to prepare content for newsletters and social media. Is creative in the use of social media with the goal of promoting engagement. Collaborates with engineering students, faculty and staff members to develop ideas and content; Makes recommendations on the latest trends in communications and social media and implements new ways to reach target audiences. PLUS: background and interests in journalism, communications, graphic design and/or photography skills that will support written content.`,
    qualifications: `Communications or Marketing`,
    positions: 2,
    campus:"UNIVERSITY CITY",
    location: "College of Engineering, LeBow Engineering",
    supervisor: { name: "Branscom,Yael", email: "ylb23@drexel.edu", phone: "215-534-5433" },
    marked: false,
    id: 24
  },
  {
    title: "Community-Engaged Learning Assistants - Dance",
    department: "Performing Arts",
    education: "Freshman",
    description: `The Dance Program is seeking work-study students to support community-engaged learning dance programming on campus as well as off-site. Off-site locations include the Dornsife Center at 3509 Spring Garden St. and a variety of Philadelphia elementary schools.

Responsibilities may include supporting with social media, accompanying elementary school performances to operate sound, checking in students at the Dornsife Center, refilling SEPTA cards, and other related administrative tasks.

Monday, 3:30-6:30 pm, Wednesday, 11:30 am-1:30 pm, and/or Friday, 8 am-11:50 am are preferred. Additional hours on campus are available as well.

Clearances to work with minors are required. The process can be supported after hiring.`,
    qualifications: `Work Study eligible, can obtain minor clearances`,
    positions: 3,
    campus:"UNIVERSITY CITY",
    location: "Westphal College of Media Arts & Design, MacAlister Hall",
    supervisor: { name: "Ifill,Valerie", email: "vji24@drexel.edu", phone: "215-571-4443" },
    marked: false,
    id: 25
  },

  {
    title: "Content Creator",
    department: "Communications and Marketing",
    education: "Freshman",
    description: `We are looking for students to help with creating content.`,
    qualifications: `Photography, video, graphic design, marketing and communications students, especially with experience in social media`,
    positions: 2,
    campus:"UNIVERSITY CITY",
    location: "College of Nursing and Health Professions, Health Sciences Building",
    supervisor: { name: "Perry,Roberta", email: "rsp74@drexel.edu", phone: "610-761-5585" },
    marked: false,
    id: 26
  },

  {
    title: "Dance Program Assistant",
    department: "Department: Performing Arts",
    education: "Sophomore",
    description: `This position will assist the Program Director with various office and dance studio tasks.`,
    qualifications: `N/A`,
    positions: 2,
    campus:"UNIVERSITY CITY",
    location: "Westphal College of Media Arts & Design, Mandell",
    supervisor: { name: "Morley,Jennifer", email: "jsm76@drexel.edu", phone: "jsm76@drexel.edu" },
    marked: false,
    id: 27
  },

  {
    title: "Desk Assistant Millennium Hall",
    department: "Housing and Residence Life",
    education: "Freshman",
    description: `The primary role of the Desk Assistant (DA) is to monitor access to the Residence Halls, provide quality customer service to individuals throughout the residence hall, and provide administrative and clerical support to the Residential Desk Coordinators (RDC) and Assistant Director/Resident Director (AD/RD). The student will also ensure policies within the resident halls and safety measures are adhered to.`,
    qualifications: `MUST HAVE WORK STUDY FUNDS. Positive and friendly attitude. No experience neccesary. The shifts available include week day, week night, and weekend shifts. Schedule flexible dependent on class schedule.  Please fill out the application here: https://forms.gle/iqkzQDsAWWduUNi79`,
    positions: 10,
    campus:"UNIVERSITY CITY",
    location: "Other, Millenium Hall",
    supervisor: { name: "Whitney,Samira", email: "snw52@drexel.edu", phone: "(215) 571-3150" },
    marked: false,
    id: 28
  },

  {
    title: "Diatom Herbarium Collection Assistant",
    department: "Diatom Herbarium",
    education: "Freshman",
    description: `The job will consist of organizing the Diatom Herbarium at the Academy of Natural Sciences. The collection assistant will help with relabeling microscope slides, organizing herbarium cabinets, slide data entry, and taking an inventory of missing slides.`,
    qualifications: `Proficiency in Microsoft Excel`,
    positions: 2,
    campus:"ACADEMY OF NATURAL SCIENCES ",
    location: "Other, Academy of Natural Sciences",
    supervisor: { name: "Aycock,Laura", email: "lla32@drexel.edu", phone: "(215)299-1024" },
    marked: false,
    id: 29
  },

  {
    title: "Dornsife Center Community Martial Arts Assistant",
    department: "Dornsife Center for Neighborhood Partnerships",
    education: "Sophomore",
    description: `Position supports community Youth & Adult Martial arts outreach programs. Job will include: 
    - Communicating with students & student’s parents  
    - Assisting with attendance & classroom setup  
    - Supporting class as a Classroom aide in bi weekly classes  
    - Assisting with creating classroom materials `,
    qualifications: `Sincere desire to support area youth. Must pass child abuse clearance. (we can help with this process!)`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Other, Ryan Hall (at Dornsife Center)",
    supervisor: { name: "Spahr,Chris", email: "cms679@drexel.edu", phone: "215.571.4023" },
    marked: false,
    id: 30
  },

  {
    title: "Dornsife Center Music Teacher",
    department: "Performing Arts",
    education: "Freshman",
    description: `Teach guitar, piano, and voice for the Dornsife Center After-School Music Program.`,
    qualifications: `performing student/grad student`,
    positions: 3,
    campus:"UNIVERSITY CITY",
    location: "Westphal College of Media Arts & Design, MacAlister",
    supervisor: { name: "Madeleine Riley", email: "mcr27@drexel.edu", phone: "215-895-2451" },
    marked: false,
    id: 31
  },

  {
    title: "Drexel Central Student Admissions Representative",
    department: "Drexel Central",
    education: "Freshman",
    description: `Under the guidance of the Assistant Director of Drexel Central, the Coordinator will assist in recruiting and enrolling first-year, transfer, and graduate students. As a current Drexel student, you will serve as a key contact for prospective students, their families, and other stakeholders via phone and email. This role involves authentically representing Drexel, understanding the University’s brand and policies, and providing proactive support to prospective students.`,
    qualifications: `Availability: At least 8 hours/week, with the potential of 20 hours/week. Monday to Friday, between 9 AM - 4 PM - Current Enrollment: Must be a current Drexel student with Federal Work Study awarded. - Communication Skills: Strong verbal and written skills to represent Drexel and explain its offerings. - Enthusiasm: Enjoy working with students and their families. - Team Collaboration: Ability to work well with staff, faculty, and peers. - Experience: No prior customer service experience required; student experience valued. - Organizational Skills: Excellent organizational skills and a positive attitude. - Technical Proficiency: Basic computer skills; Microsoft Office familiarity is helpful. - Diverse Populations: Experience with diverse groups is a plus.`,
    positions: 5,
    campus:"UNIVERSITY CITY",
    location: "Other, Main",
    supervisor: { name: "Steltz,Taylor", email: "trs63@drexel.edu", phone: "215.895.1024" },
    marked: false,
    id: 32
  },

  {
    title: "Drexel Mascot, Mario the Magnificent",
    department: "Athletics",
    education: "Freshman",
    description: `The official mascot of Drexel University is the Dragon, named Mario the Magnificent.   Mario gets his name from a Drexel Alumni, Mario V. Mascioli, who didn't miss a Drexel game for more than 20 years. Just like the man he is named for, Mario is an enormous fan of both Drexel and Drexel Athletics.  He can be seen rooting on teams from the sidelines, dancing on the court during timeouts, and causing general lighthearted mayhem around campus. Mario enjoys posing for pictures, high-fives, and signing autographs for Dragon Fans.
    All Mascots are expected to perform with the highest level of dedication and commitment. All Mascots must be full time Drexel students in good academic standing. The typical time commitment for Mario ranges from 0-5 hours a week for the entire school year. A schedule is provided for all home men's and women's basketball games, which fall on evenings and weekends. (The greatest time commitment falls between November-March.) Appearances outside of basketball games are filled on a rolling basis, as requests come in.`,
    qualifications: `Mascots must be in good physical shape and able to wear the full costume for a period of 2 hours with a few breaks, the length of most basketball games.  All mascots must fill out paperwork and be approved by our sports medicine department following a tryout.`,
    positions: 7,
    campus:"UNIVERSITY CITY",
    location: "Other, DAC",
    supervisor: { name: "Joyce,Sean", email: "sean.joyce@drexel.edu", phone: "215-895-1588" },
    marked: false,
    id: 33
  },

  {
    title: "Drexel Student Ambassador",
    department: "Enrollment Management",
    education: "Freshman",
    description: `Admissions tour guide and university brand ambassador responsible for supporting recruitment and enrollment to Drexel through engaging prospective students & families and telling Drexel's story. Application process required. Positions available for winter term. More information available here: https://drexel.edu/admissions/contact/student-ambassadors/become-a-student-ambassador.`,
    qualifications: `Full-time undergraduate student in good academic standing`,
    positions: 20,
    campus:"UNIVERSITY CITY",
    location: "Other, Main Building",
    supervisor: { name: "Irelan,Bridget", email: "bmi23@drexel.edu", phone: "215-895-1612" },
    marked: false,
    id: 34
  },

  {
    title: "Drexel Tree Canopy Arbor Pro data entry and updates",
    department: "Climate & Sustainability",
    education: "Sophomore",
    description: `Drexel Climate & Sustainability, working with Landscaping and Grounds, has one position open that will update the Drexel Campus Tree Inventory using the ArborPro Tree Inventory software.
The position will be supervised by the Executive Director of Climate and Sustainability and will update the Tree Inventory with details as to condition, height, trunk width, and  location. Many weeks will be self-directed with goals for updating a set number of Trees per week. The position will also attend Eco-Rep meetings and will assist with other projects throughout the school year such as Earth Day, Race to Zero Waste, Tree of the Year nominations and additional student and community events.`,
    qualifications: `Interest in Sustainability and Trees on campus`,
    positions: 3,
    campus:"UNIVERSITY CITY",
    location: "Other, PSA",
    supervisor: { name: "Solomon,Bo", email: "jbs328@drexel.edu", phone: "2674419030" },
    marked: false,
    id: 35
  },


  {
    title: "Drexel University Physical Therapy Front Desk Receptionist",
    department: "Physical Therapy and Rehabilitation Sciences",
    education: "Graduate Student",
    description: `This job assists with the general operation of the Physical Therapy practice in the Drexel University Recreation Center.  The individual in this position assists with patient scheduling, insurance verification, communication with patients and other health care providers, and billing as well as other tasks as assigned.`,
    qualifications: `Graduate student enrolled in the DPT program or interested in physical therapy`,
    positions: 2,
    campus:"UNIVERSITY CITY",
    location: "College of Nursing and Health Professions, Recreation Center",
    supervisor: { name: "Gard,Kevin", email: "kg29@drexel.edu", phone: "267-359-5534" },
    marked: false,
    id: 36
  },

  {
    title: "ENSS Major Assistant",
    department: "BEES",
    education: "Freshman",
    description: `Assist ENSS Director in updating requirements for the Environmental Studies and Sustainability major and minor, and contribute to raising the profile of ENSS by helping with event planning and execution, as well as by developing sample plans of study for dual majors and major-minor combinations.`,
    qualifications: `ENSS major preferred but not required`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "College of Arts and Sciences, PISB",
    supervisor: { name: "Ottinger,Gwen", email: "ottinger@drexel.edu", phone: "215.571.4651" },
    marked: false,
    id: 37
  },

  {
    title: "Fashion Drawing Model",
    department: "Fashion Design",
    education: "Freshman",
    description: `Fashion Design is seeking reliable students to meet during Drawing For Fashion class times and pose for sketches. Opportunity that will start in the Fall quarter and may continue throughout the year. This role does not need specific height or measurements. The model will wear a tank top (or sports bra) & leggings or compression shorts. We try to have a few different models to do a rotation, so students get good practice with different faces, hair and body types.   The fall quarter starts Sept.23rd and runs until Dec. 5th. The time slots we will have available for Fashion Drawing class are as follows: 

  

Mon/Wed 3:30-5:30pm, FASH 211 Sec 001 

Tue/Thur 10:00-12:00, FASH 211 Sec 002 

Tue/Thurs 1:00-3:00pm,FASH 211 Sec 003 `,
    qualifications: `availabile during at least one of the listed course times`,
    positions: 10,
    campus:"UNIVERSITY CITY",
    location: "Westphal College of Media Arts & Design, URBN",
    supervisor: { name: "Golembuski,Cynthia", email: "cag48@drexel.edu", phone: "2155713269" },
    marked: false,
    id: 38
  },

  {
    title: "Fit Model - Menswear and Womens Wear Proto-type",
    department: "Fashion Design",
    education: "Freshman",
    description: `The fit-model will need to be within a specific height & size range for our base size prototype that corresponds with our dress forms. In the industry a designer & patternmaker would develop a base size and then grade the patterns into various size ranges depending on the specific company but for our students, they are just making one base size proto-type and doing fittings on dress form and fit models. We will need models for both womenswear and menswear and possibly specialty categories depending on what market category our students are designing for. 

  

The fit model will do fittings with the instructor & student in the fashion studios.  They will wear an under garment and get fitted into the prototype samples. The instructor & student will observe the fit and make adjustment by marking on sample or pinning adjustments. The area for fittings is in a more private location where model can change behind curtains or behind a screen.  Sometimes models bring a lightweight robe to wear between fittings. `,
    qualifications: `Prototype Fit Model for Womenswear  Wolf Form Sportswear 6/8 apparel  Height between 5'7"- 6'  Chest 32"-36"  Waist 24"-27"  Hips 35"-38"     Prototype Fit Model for Menswear apparel  Height between 5' 11" - 6' 3"  Chest between 38" - 41"  Waist 29 -32"  hips between 39-41"`,
    positions: 10,
    campus:"UNIVERSITY CITY",
    location: "Westphal College of Media Arts & Design, URBN",
    supervisor: { name: "Golembuski,Cynthia", email: "cag48@drexel.edu", phone: "2155713269" },
    marked: false,
    id: 39
  },

  {
    title: "Front Desk Assistant",
    department: "Office of Academic Advising",
    education: "Freshman",
    description: `The Office of Academic Advising is seeking work study students to answer phones, greet visitors and assist advisors when needed during opertating hours. 

Working hours for work study are: 

Monday - Friday; 9:00am - 4:30pm`,
    qualifications: `must be work study eligible`,
    positions: 8,
    campus:"UNIVERSITY CITY",
    location: "Westphal College of Media Arts & Design, URBN",
    supervisor: { name: "Gibson,Denise", email: "jacksode@drexel.edu", phone: "215-895-2396" },
    marked: false,
    id: 40
  },

  {
    title: "(Spring 2025) Desk Assistant-Race Hall",
    department: "Housing and Residence Life",
    education: "Freshman",
    description: `The primary role of the Desk Assistant (DA) is to monitor access to the Residence Halls, provide quality customer service to individuals throughout the residence hall, and provide administrative and clerical support to the Residential Desk Coordinators (RDC) and Assistant Director/Resident Director (AD/RD). The student will also ensure policies within the resident halls and safety measures are adhered to.`,
    qualifications: `MUST HAVE FEDERAL WORK STUDY FUNDS. Positive and friendly attitude. No experience neccesary. The shifts available include week day, week night, and weekend shifts. Schedule flexible dependent on class schedule.`,
    positions: 5,
    campus:"UNIVERSITY CITY",
    location: "Other, Race Street Residences",
    supervisor: { name: "Scarborough,Dara", email: "dcs348@drexel.edu; kr997@drexel.edu", phone: "215-571-3103" },
    marked: false,
    id: 41
  },

  {
    title: "Gallery Attendant",
    department: "Leonard Pearlstein Gallery",
    education: "Freshman",
    description: `Pearlstein Gallery Attendants perform a range of jobs; they are our visitor services associates, security staff, office admins, event producers, communications department and marketing team. Primary responsibilities are greeting visitors and answering questions concerning gallery exhibitions and events, opening and closing the gallery. Gallery staff also regularly produce and distribute promotional content using MailChimp and social media platforms, maintain the office and gallery spaces, and assist with the installation and break down of exhibitions and events. Depending on a student’s special skills and interests, additional projects may be available as needed including graphic design work, sound engineering, event production and others. Regular meetings, some nights and weekends are required. Staff members will have an opportunity to particpiate in great programming throughout the year including live music, dance, literary events, film festivals and more. To apply please send an email with your resume to gallery@drexel.edu`,
    qualifications: `Open to all Majors`,
    positions: 6,
    campus:"UNIVERSITY CITY",
    location: "Westphal College of Media Arts & Design, URBN Annex",
    supervisor: { name: "Stockton,Mark", email: "gallery@drexel.edu", phone: "215-895-2548" },
    marked: false,
    id: 42
  },

  {
    title: "Gallery Attendant",
    department: "Atwater Kent Collection/Lenfest Center for Cultural Partnerships",
    education: "Freshman",
    description: `To provide general information to visitors of “Philadelphia Revealed” an exhibit of the Atwater Kent Collection at Drexel and support general collections activities as needed. Temporary role during the open hours of the exhibition. The Gallery Attendant provides an invaluable service to the Atwater Kent Collection and the public by creating a welcoming and informative environment for all visitors while overseeing the safety of the exhibited artwork. Be punctual and professional; be able to stand and remain alert while visitors are in the gallery; enforce gallery rules in a courteous manner; answer general questions as necessary.`,
    qualifications: `Personable and comfortable working with the public; organized and self-motivated`,
    positions: 1,
    campus:"CENTER CITY",
    location: "Other, PAFA/Hamilton Building",
    supervisor: { name: "Swigart,Stacey", email: "sas639@drexel.edu", phone: "215-972-2032" },
    marked: false,
    id: 43
  },

  {
    title: "Graduate Admissions Office Assistant",
    department: "EMSS; Graduate Admissions",
    education: "Pre-Junior",
    description: `We are seeking a motivated Federal Work-Study Student to provide essential administrative support within our team. This role involves data entry, event research, calendar coordination, and email distribution, as well as assisting with call campaigns and event logistics. The ideal candidate will demonstrate strong organizational and communication skills while managing multiple tasks effectively. This position offers valuable hands-on experience in a dynamic environment, allowing students to enhance their professional skills while contributing to our departmental initiatives.`,
    qualifications: `Must be a full-time student. Demonstrate a positive-attitude, strong work ethic, and a desire to with people. Must have the ability to work in a fast-paced environment. Must be availabel to work between 12 to 20 hours per week, with 12 hours being the minimum. Interest in higher education, admissions processes, or data entry is a plus.`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Other, Main Building",
    supervisor: { name: "Montgomery,Zeke", email: "zm93@drexel.edu", phone: "n/a" },
    marked: false,
    id: 44
  },

  {
    title: "Healing Hurt People Program Assistant",
    department: "Community Health and Prevention",
    education: "Senior",
    description: `Healing Hurt People (HHP), a program of the Center for Nonviolence and Social Justice at Dornsife School of Public Health, is looking for a work-study student for up to 20 weekly hours. The student will perform the following duties: 

 Contribute to updating HHP's Implementation Manual. The student will review existing documents, interview HHP leadership and staff, work closely with the CNSJ Executive Director and the CNSJ Program Manager, coordinate meetings, and assist with the timeline and project deliverables. 

Front Desk Coverage (once a week, 2-4 hours). This task requires the student to be highly dependable and committed to creating a safe and welcoming space for all HHP's clients and stakeholders. 

Supporting outreach events in Philadelphia communities who experience violence and need mental health services. The goal is for the student to attend 1-2 monthly events. `,
    qualifications: `Undergraduate senior with some research experience`,
    positions: 1,
    campus:"CENTER CITY",
    location: "Dornsife School of Public Health, Berman Building",
    supervisor: { name: "Zinny,Arturo", email: "aaz42@drexel.edu", phone: "2678793132" },
    marked: false,
    id: 45
  },

  {
    title: "Herbarium Assistant",
    department: "Botany",
    education: "Sophomore",
    description: `This position will assist the Collection Manager in the herbarium at the Academy of Natural Sciences. Tasks could include specimen mounting, databasing, and/or imaging.`,
    qualifications: `attention to detail, basic computer skills`,
    positions: 1,
    campus:"ACADEMY OF NATURAL SCIENCES",
    location: "College of Arts and Sciences, Academy of Natural Sciences",
    supervisor: { name: "Smith,Chelsea", email: "crs344@drexel.edu", phone: "2152991157" },
    marked: false,
    id: 46
  },

  {
    title: "Lab Assistant",
    department: "Neurobiology & Anatomy",
    education: "Graduate Student",
    description: `We are looking for a part-time laboratory assistant to undertake a variety of laboratory procedures, including maintaining a transgenic mouse colony and running quantitative real-time PCR testing. This will involve breeding and genotyping mice and maintaining relevant records, as well as extracting RNA from animal tissues and preparing and testing cDNA in PCR reactions. Over time, the person will work independently on these tasks.`,
    qualifications: `Degree in biology, chemistry, or relevant field. The individual should be proficient in standard methods of data entry and recordkeeping (paper and electronic), be compliant with environmental health and safety guidelines, execute laboratory testing according to standard procedures, and record and report observations.`,
    positions: 1,
    campus:"QUEEN LANE",
    location: "College of Medicine, Queen Lane",
    supervisor: { name: "Barson,Jessica", email: "rb455@drexel.edu", phone: "215-991-8848" },
    marked: false,
    id: 47
  },

  {
    title: "Laboratory assistant",
    department: "Biochemistry & Molecular Biology",
    education: "Freshman",
    description: `Assist in maintaining the lab as an active research environment by supplying necessary reagents and ensuring the proper functioning of equipment. Responsibilities may include, but are not limited to, preparing buffers and reagents, preparing growth media, and cleaning and sterilizing glassware, plasticware, and other laboratory equipment. Once proficient in basic laboratory tasks, the work-study student may also participate in performing assigned experiments to develop familiarity with fundamental laboratory techniques.`,
    qualifications: `Biology, chemistry, or related major`,
    positions: 1,
    campus:"CENTER CITY",
    location: "College of Medicine, New College Building",
    supervisor: { name: "Noguchi,Eishi", email: "en34@drexel.edu", phone: "267-359-2662" },
    marked: false,
    id: 48
  },

  {
    title: "Laboratory Assistant",
    department: "Chemical and Biological Engineering",
    education: "Sophomore",
    description: `Student will work in a research lab on campus to clean glassware, mix reagents, monitor chemical processes, analyze data and submit reports.`,
    qualifications: `Current STEM student`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "College of Engineering, CAT",
    supervisor: { name: "Fafarman,Aaron", email: "fafarman@drexel.edu", phone: "2158955818" },
    marked: false,
    id: 49
  },

  {
    title: "Library Assistant",
    department: "Legal Research Center",
    education: "Graduate Student",
    description: `The Legal Research Center solicits applications from second and third year law students for the position of Library Assistant to begin in November 2024 and continue through the end of the Spring Semester 2025. 

 The Library Assistant, under the direction of the Research & Instructional Services librarians, works on research projects for law school faculty members and the Legal Research Center librarians. Past research projects have dealt with traditional legal research topics and various interdisciplinary subjects including business, education, and psychology. The successful candidate will have opportunities to work with faculty members, make full use of the library’s collection, and develop excellent research and writing skills. 

 The fellow works 10 hours per week. The fellow doesn’t work during reading, exam, or break periods. 

 Pay is $15.00/Hour. To apply, please send a cover letter, resume, and brief writing sample to Lindsay Steussy, Research & Instructional Services Librarian, at lawlib@drexel.edu.`,
    qualifications: `Must be a 2L o 3L law student`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Kline School of Law, Law School Building",
    supervisor: { name: "Steussy,Lindsay", email: "lawlib@drexel.edu", phone: "215-571-4772" },
    marked: false,
    id: 50
  },


  {
    title: "Lindy Center Front Desk and Administrative Office Support",
    department: "Lindy Center for Civic Engagement",
    education: "Freshman",
    description: `We are seeking an individual interested in civic engagement to join our team as Front Desk and Administrative Office Support. This position will provide essential front desk assistance while also contributing to the efficient operation of the Lindy Center’s administrative office functions.  

Front Desk Duties:  

 - Greet visitors, students, faculty, and staff in a friendly and professional manner.  

 - Answer phone calls and respond to inquiries or direct calls to appropriate personnel.  

 - Maintain cleanliness and organization of the Lindy Center.  

 - Support event planning and coordination efforts as needed.  

 - Administrative Office Support:  

 - Assist with general office tasks such as filing, scanning, copying, and data entry.  

 - Help prepare documents, reports, and presentations as needed.  

 - Support event planning and coordination efforts, including logistics and attendee management.  

 - Assist with inventory management and preparing office supply orders.  

 - Handle incoming and outgoing mail and shipments.  

 - Answer general inquiry emails sent to the Lindy Center’s central inbox.`,
    qualifications: `Work study funding for the current academic year.   Availability from 9am – 5pm Monday – Friday for a minimum of 8 hours per week.   Proficiency in Microsoft Office Suite and previous office support experience preferred but not required.`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Other, 3210 Cherry St",
    supervisor: { name: "Levy-Dyer,Zack", email: "zl338@drexel.edu", phone: "215-895-6130" },
    marked: false,
    id: 51
  },


  {
    title: "Lindy Center Front Desk and Event Coordination Support",
    department: "Lindy Center for Civic Engagement",
    education: "Freshman",
    description: `We are seeking an individual interested in civic engagement to join our team as Front Desk and Event Coordination Support. This position will involve providing excellent customer service at the front desk while also assisting with the planning and execution of various civic engagement focused events to enhance the Lindy Center’s programs and initiatives.  

Front Desk Duties:  

 - Greet visitors, students, faculty, and staff in a friendly and professional manner.  

 - Answer phone calls and respond to inquiries or direct calls to appropriate personnel.  

 - Maintain cleanliness and organization of the Lindy Center.  

-Assist with general office tasks such as filing, copying, and data entry as needed.   

 Event Coordination Support:  

 - Assist in the planning and coordination of events, including logistics, scheduling, and attendee management.  

-Support event setup, teardown, and on-site coordination as needed.  

 - Help prepare event materials and distribute event fliers around campus.   

 - Assist with post-event activities, such as attendee feedback collection and event evaluation.`,
    qualifications: `Work study funding for the current academic year.   Availability from 9am – 5pm Monday – Friday for a minimum of 8 hours per week.   Proficiency in Microsoft Office Suite, Canva and previous event support experience preferred but not required.`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Other, 3210 Cherry St",
    supervisor: { name: "Levy-Dyer,Zack", email: "zl338@drexel.edu", phone: "215-895-6130" },
    marked: false,
    id: 52
  },

  {
    title: "Lindy Center Front Desk and Newsletter Coordinator",
    department: "Lindy Center for Civic Engagement",
    education: "Freshman",
    description: `We are seeking an individual interested in civic engagement to join our team as Front Desk and Newsletter Coordinator. This position will play a vital role in providing exceptional customer service at the front desk while also managing the creation and distribution of the Lindy Center’s newsletters to enhance communication and engagement.  

Front Desk Duties:  

 - Greet visitors, students, faculty, and staff in a friendly and professional manner.  

 - Answer phone calls and respond to inquiries or direct calls to appropriate personnel. 

-Maintain cleanliness and organization of the Lindy Center.  

 - Assist with general office tasks such as filing, copying, and data entry as needed.   

 - Support event planning and coordination efforts as needed.  

 - Newsletter Coordination:  

 - Plan, coordinate, and create content for regular newsletters under the guidance of the Lindy Center staff.  

 - Collect and compile relevant information, announcements, and updates from various campus and community partners.  

 - Write and edit newsletter articles, announcements, and other content ensuring accuracy and alignment with Lindy Center’s civic engagement mission.  

 - Design and layout newsletters using Mailchimp.  

 - Manage the distribution of newsletters through email campaigns or other distribution channels.  

 - Monitor and analyze newsletter performance metrics (e.g., open rates, click-through rates) to assess effectiveness and make recommendations for improvement.`,
    qualifications: `Work study funding for the current academic year.   Availability from 9am – 5pm Monday – Friday for a minimum of 8 hours per week.   Familiarity with Mailchimp or previous experience with newsletter creation preferred but not required.`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Other, 3210 Cherry St",
    supervisor: { name: "Levy-Dyer,Zack", email: "zl338@drexel.edu", phone: "215-895-6130" },
    marked: false,
    id: 53
  },

  {
    title: "Lindy Center Front Desk and Social Media Support",
    department: "Lindy Center for Civic Engagement",
    education: "Freshman",
    description: `We are seeking an individual interested in civic engagement to join our team as Front Desk and Social Media support. This position plays a pivotal role in providing excellent customer service at the front desk while also managing our social media presence to enhance the Lindy Center’s visibility and engagement.  

  

Front Desk Duties:  

 - Greet visitors, students, faculty, and staff in a friendly and professional manner.  

 - Answer phone calls and respond to inquiries or direct calls to appropriate personnel.  

 - Maintain cleanliness and organization of the Lindy Center.  

 - Assist with general office tasks such as filing, copying, and data entry as needed.   

 - Support event planning and coordination efforts as needed.  

 Social Media Coordination:  

 - Support Lindy Center staff in developing and implementing social media strategies to increase our organization's online presence.  

 - Create engaging content (posts, videos, graphics) for various social media platforms.  

 - Analyze social media analytics to gauge the success of campaigns and make data-driven decisions.  

 - Stay current with social media trends and best practices to optimize content and strategies.`,
    qualifications: `Work study funding for the current academic year.   Availability from 9am – 5pm for a minimum of 8 hours per week.   Experience with social media and graphic design tools such as Canva preferred but not required.`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Other, 3210 Cherry St",
    supervisor: { name: "Levy-Dyer,Zack", email: "zl338@drexel.edu", phone: "215-895-6130" },
    marked: false,
    id: 54
  },

  {
    title: "Marketing & Communications Assistant_College of Arts & Sciences",
    department: "Marketing",
    education: "Freshman",
    description: `The Marketing and Communications Department is responsible for strategic direction and creative execution for the College of Arts and Sciences’ messaging and branding. A work study employee would support our team by assisting with the creation of written and visual content.   

  

Responsibilities include:   

  

Taking photos and writing content for social media to highlight College of Arts and Sciences students, faculty, programs, events and courses.  

Assisting with video production and editing  to highlight work of students and faculty in the college.  

Interview. faculty and fellow students and writing news stories for our website.  

Supporting marketing team at college events  

 Student can work primarily remotely but must have the flexibility to attend in-person meetings, events, and video shoots.`,
    qualifications: `Must be a currently enrolled student at Drexel University in good academic standing with federal work study funding. Must be able to commit to working 4-8 hours per week and be able to work independently while maintaining dependable and timely communication. Excellent written and verbal communication skills and an interest in learning more about the field of higher education marketing and communications. Experience with editorial writing and video editing software (such as Adobe Premiere Pro) a plus.`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "College of Arts and Sciences, MacAlister",
    supervisor: { name: "Rose,Lauren", email: "LKR49@drexel.edu", phone: "215-920-2605" },
    marked: false,
    id: 55
  },

  {
    title: "Modern Language Tutors (Chinese, French, Japanese, Spanish)",
    department: "Global Studies and Modern Languages",
    education: "Sophomore",
    description: `Language tutors are nominated and trained by language faculty to assist lower-level students with speaking and writing assignments in one-on-one sessions. Language tutors do not correct grammar or vocabulary directly; they identify patterns of mistakes (such as verbs, pronouns, pronunciation, etc.) and go over those grammatical points with the student.`,
    qualifications: `Some knowledge of grammar and how learning a second language works is required (i.e., being a native speaker is not enough).`,
    positions: 6,
    campus:"UNIVERSITY CITY",
    location: "College of Arts and Sciences, Academic Building",
    supervisor: { name: "Carpenter,Donna", email: "dgc64@drexel.edu", phone: "215-895-1863" },
    marked: false,
    id: 56
  },

  {
    title: "Office Assistance",
    department: "Community Health & Prevention",
    education: "Graduate Student",
    description: `This position supports faculty members in course preparation. Duties include technical assistance with the Blackboard Learning Management system, editing syllabi and other course materials using Word, conducting library searches, finding articles and links, posting materials on Blackboard, grading assignments using a scoring matrix, and other administrative duties.`,
    qualifications: `Experience with MS Word & Excel`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Dornsife School of Public Health, Nesbitt Hall",
    supervisor: { name: "Thurman,Wendy", email: "wmt29@drexel.edu", phone: "267.359.6172" },
    marked: false,
    id: 57
  },

  {
    title: "Office Assistant",
    department: "Mechanical Engineering & Mechanics",
    education: "Freshman",
    description: `Greets students, parents, and campus community in person and by phone -Retriving mail and packages -Performing general office duties, such as copying, campus delivery, filing -Maintain and organize the front office, supply room, and the kitchen area -Other duties as assigned.`,
    qualifications: `Be courteous and helpful at all times to faculty, staff and students -Strong customer service skills -Responsible and dependable -Basic knowledge of personal computers and applications -Personal calls and visitors kept to a minimum`,
    positions: 3,
    campus:"UNIVERSITY CITY",
    location: "College of Engineering, Randell Hall",
    supervisor: { name: "Stanger,Elsa", email: "es3343@drexel.edu", phone: "215-571-4354" },
    marked: false,
    id: 58
  },

  {
    title: "Office Assistant",
    department: "Global Studies and Modern Languages",
    education: "Freshman",
    description: `The Department of Global Studies and Modern Languages is looking for office assistants to cover the front desk, greet visitors, perform routine office duties, assist faculty and staff, and work on special projects as needed, such as alumni outreach and podcast programming. Must be eligible for work study.`,
    qualifications: `Must be organized and willing to learn new skills such as book scanning, assisting with podcasts (communications and tech knowledge), creating flyers (graphic design), and tracking inventory.`,
    positions: 3,
    campus:"UNIVERSITY CITY",
    location: "College of Arts and Sciences, Academic Building",
    supervisor: { name: "Carpenter,Donna", email: "dgc64@drexel.edu", phone: "215-895-1863" },
    marked: false,
    id: 59
  },

  {
    title: "Office Assistant",
    department: "Accounting",
    education: "Freshman",
    description: `The Department of Accounting is seeking a work-study student who is detailed oriented, organized, dependable and outgoing to serve as a receptionist/office assistant.  Duties will include greeting visitors, answering phones, sorting mail, photocopying, mailings, light typing, running on-campus errands, events assistance & other duties as assigned.`,
    qualifications: `Applicants must be customer service oriented with good communication skills, dependable, and have moderate computer skills. Experience with excel and powerpoint a plus.`,
    positions: 3,
    campus:"UNIVERSITY CITY",
    location: "LeBow College of Business, Gerri C. LeBow",
    supervisor: { name: "O'Brien,Vanessa", email: "vno24@drexel.edu", phone: "215-895-2116" },
    marked: false,
    id: 60
  },

  {
    title: "Office Assistant",
    department: "Physics",
    education: "Freshman",
    description: `The Department of Physics is seeking a work-study student who is detailed oriented, organized, dependable and outgoing to serve as a receptionist/office assistant.  Duties will include greeting visitors, answering phones, sorting mail, photocopying, mailings, light typing, running on campus errands and other duties as assigned.`,
    qualifications: `Applicants must be customer service oriented with good communications skills, dependable, and have basic computer skills.`,
    positions: 3,
    campus:"UNIVERSITY CITY",
    location: "College of Arts and Sciences, Disque Hall",
    supervisor: { name: "Goldberg,David", email: "dmg39@drexel.edu", phone: "215-895-2715" },
    marked: false,
    id: 61
  },

  {
    title: "Office Assistant (Hybrid)",
    department: "Office of Faculty",
    education: "Graduate Student",
    description: `The Office of Faculty at the College of Medicine seeks a remote Office Assistant to support faculty members by inputting curriculum vitae information into the Faculty Affairs Dashboard (FAD). This hybrid role includes limited on-site work at the New College Building, assisting with cataloguing and packing files. 

  

Key Responsibilities: 

  

    Assist in cataloguing and packing files at the New College Building. 

  

    Input curriculum vitae information into the Faculty Affairs Dashboard (FAD). 

  

    Send out instructions to account holders on how to activate their accounts using Excel and mail merge. 

  

    Receive training on how to use the Faculty Affairs Dashboard system. 

  

    Pull faculty profile information from other sources and compile it into an Excel spreadsheet according to profile requirements. 

Maintain strict confidentiality of all faculty information and records.`,
    qualifications: `Proficiency in Excel and mail merge.  Strong organizational skills and attention to detail.  Ability to work independently and remotely with minimal supervision.  Effective communication skills to interact with faculty and staff.  Commitment to maintaining confidentiality and handling sensitive information discreetly.  Previous administrative experience is a plus.`,
    positions: 8,
    campus:"CENTER CITY",
    location: "College of Medicine, New College Building/Remote",
    supervisor: { name: "Cain,Alli", email: "ac4342@drexel.edu", phone: "267.359.2389" },
    marked: false,
    id: 62
  },

  {
    title: "Office Assistant, Dornsife Office for Experiential Learning",
    department: "Dornsife Office For Experiential Learning",
    education: "Sophomore",
    description: `The Dornsife Office for Experiential Learning engages students and industry through consulting projects, international travel, workshops, lecture series, and other special events. Duties of the Dornsife Office Federal Work Study employee will include but are not limited to the following items that support the events listed above:   

  

Maintain confidentiality of any partnerships, consulting projects, etc.   

  

Research potential speakers and guests.   

  

Provide student perspective on recruitment strategies.   

  

Help develop office communications.   

  

Identify catering options within a budget.   

  

Prepare materials for event attendees ie: printing presentations, filling folders with promotional materials, creating and printing name tags or name tents, etc.   

  

Acquire necessary technology from LeBow Tech ie: laptops, lapel mics, etc.   

  

Set-up for event ie: tables, promotional materials, food, etc.   

  

Manage event sign-in.    

  

Attend to any issues that arise during events.   

  

Break-down event ie: reset classrooms, dispose of food, return LeBow Tech property, etc.`,
    qualifications: `Dress code: relaxed business casual ie: no shorts, flip flops, graphic tees, sweatshirts, or hats.    Office greeting: open door if locked and greet everyone walking in; ask if they are here for an appointment.    Complete office work before doing homework.     Refrain from using the suite outside of work schedule and normal business hours, unless for a special event.     Professionalism: Sit upright at desk, eat discreetly, and keep desk free of food or trash. Please do not invite friends to sit with you.`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "LeBow College of Business, Gerri C. LeBow Hall",
    supervisor: { name: "Amber,Kelly", email: "ka973@drexel.edu", phone: "2158952387" },
    marked: false,
    id: 63
  },

  {
    title: "Operations/Front Desk Assistant (Fall Term)",
    department: "CCI",
    education: "Freshman",
    description: `The College of Computing & Informatics is looking for work-study students to assist with front desk coverage and other general operational tasks this fall.  Daily tasks may include reception desk coverage, answering phones and taking messages, assisting faculty with packing/unpacking for office moves, signing for packages, making departmental deliveries, sorting mail, running on-campus errands, assisting with project/event preparation as they arise, and other duties as assigned. Multiple students will be hired to ensure continuous coverage at the reception desk. Most days the office is not busy, and you will be free to sit in the office and work on your schoolwork.`,
    qualifications: `Must have Federal Work Study award funding. No experience necessary, just a positive, friendly attitude, and able to work as a part of a team. Must be comfortable with social interactions, as you will be expected to initiate conversations with office visitors and callers as needed. Schedule flexible dependent upon class schedule. We do have a fun, active atmosphere, but we rely on work study students to be dependable and show up in the office at their scheduled times.`,
    positions: 2,
    campus:"UNIVERSITY CITY",
    location: "College of Computing & Informatics, 3675 Market Street",
    supervisor: { name: "Raiken,David", email: "dr366@drexel.edu", phone: "215-895-2485" },
    marked: false,
    id: 64
  },

  {
    title: "OUR Office Assistant",
    department: "Office of the University Registrar",
    education: "Freshman",
    description: `The Office of the University Registrar is seeking a reliable student for the position of Office Clerk. Under the direct supervision of the Assistant Registrar, the Office Clerk will provide front desk coverage for the Registrar's Office, greeting walk-in visitors and assisting with triage. The Office Clerk will also assist in day to day operations of the Registrar's Office with light filing and processing of documentation. Students create their own work schedule based upon the student's availability before and after scheduled classes.`,
    qualifications: `N/A`,
    positions: 3,
    campus:"UNIVERSITY CITY",
    location: "Other, University Crossings",
    supervisor: { name: "Wooten,Danielle", email: "daw82@drexel.edu", phone: "2159918206" },
    marked: false,
    id: 65
  },

  {
    title: "Parking Services Student Monitor",
    department: "Parking Services",
    education: "Freshman",
    description: `Walk Drexel parking lots for quality assurance and enforcment. Issue citations to vehicles that are parked without authorization.`,
    qualifications: `Ability to effectively communicate in a professional manner.`,
    positions: 2,
    campus:"UNIVERSITY CITY",
    location: "Other, General Services",
    supervisor: { name: "Cloud,Francis", email: "frc35@drexel.edu", phone: "215-895-2813" },
    marked: false,
    id: 66
  },

  {
    title: "Project assistant",
    department: "Neurobioloay and Anatomy",
    education: "Graduate Student",
    description: `helping with data collection, data analysis, and manuscript write up processes`,
    qualifications: `Prior research experience`,
    positions: 3,
    campus:"UNIVERSITY CITY",
    location: "College of Medicine, HSB",
    supervisor: { name: "Azim,Homaira", email: "ha845@drexel.edu", phone: "(215) 991-8828" },
    marked: false,
    id: 67
  },

  {
    title: "Project Assistant",
    department: "Gupta Governance Institute",
    education: "Sophomore",
    description: `Assist GGI professional staff and faculty with projects related to furthering the institute's strategic priorities including fundraising, programming and content development, and stakeholder engagement.`,
    qualifications: `Excellent communication skills, fluency in excel and other relevant programs, experience with social media marketing`,
    positions: 1,
    campus:"CENTER CITY",
    location: "LeBow College of Business, GHall",
    supervisor: { name: "Woods,Lisa", email: "lw883@drexel.edu", phone: "6108120248" },
    marked: false,
    id: 68
  },

  {
    title: "Project Assistant",
    department: "AJ Drexel Autism Institute",
    education: "Freshman",
    description: `The Early Detection and Intervention (EDI) program at the AJ Drexel Autism Institute focuses on research to improve screening, diagnosing, and treating autism spectrum disorder (ASD) as early as possible in order to improve lifelong outcomes. The EDI program is engaged in several projects in the community, including active screening of toddlers at pediatric check-ups and community-based settings and evidence-based treatment delivered in children’s homes or in other community settings. Driving/having a car is not required, but some sessions require traveling with other team members. The key responsibilities will include: - Assisting with the administration of experimental and standardized testing measures to young children with an autism spectrum disorder, single and double entry of data - Assisting the clinical team with scoring measures used in diagnostic evaluations for preschoolers with autism - Assisting the clinical team in preparing written feedback to families by transferring scores from scoring software to tables in Microsoft Word - Setting up, filming, and cleaning up from diagnostic evaluations - Facilitating recruitment and raise awareness about our studies in community events - Attending weekly lab meetings - Assisting with literature reviews – Participant communication including recruitment calls, scheduling, sending reports – Ordering lab supplies – Taking meeting minutes and assisting in find meeting times – creating participant folders`,
    qualifications: `enrolled in undergraduate or graduate studies`,
    positions: 4,
    campus:"UNIVERSITY CITY",
    location: "Other, 3020 Market St Suite 560",
    supervisor: { name: "Sand,Katherine", email: "kaw369@drexel.edu", phone: "6106757988" },
    marked: false,
    id: 69
  },

  {
    title: "Project Manager Intern, Planning & Design",
    department: "Planning, Design & Construction",
    education: "Freshman",
    description: `The PM intern will provide support to PDC staff including Planning, Design and general office organizational functions.  Responsibilities will inclide diagramming and space analysis, basic graphic design and visual presentation and some limited design support for architecture and interiors projects.  Some general office organizational work such as document filing and organization will be required.`,
    qualifications: `Expereince with Architecture and Design, Use of computer modeling and graphics programs including Adobe Photoshop, Illustrator, In-Design.`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Other, Administrative Services Bldg",
    supervisor: { name: "Bracali,Anthony", email: "st93tf7b@drexel.edu", phone: "267383486" },
    marked: false,
    id: 70
  },

  {
    title: "Prototype Fit Model for Womenswear",
    department: "Fashion Design",
    education: "Freshman",
    description: `Apparel fit modeling for the fashion Design program. If interested and within the measurement & height range for our Proto-type fit model needs and have availability on the dates listed.  

  

We will be having Fashion Drawing Model opportunity that will start in the Fall quarter. This role does not need specific height or measurements. The model will wear a tank top (or sports bra) & leggings or compression shorts. We try to have a few different models to do a rotation, so students get good practice with different faces, hair and body types.   The fall quarter starts Sept.23rd and runs until Dec. 5th. The time slots we will have available for Fashion Drawing class are as follows: 

  

Mon/Wed 3:30-5:30pm, FASH 211 Sec 001 

Tue/Thur 10:00-12:00, FASH 211 Sec 002 

Tue/Thurs 1:00-3:00pm,FASH 211 Sec 003`,
    qualifications: `Wolf Form Sportswear 6/8 apparel Height between 5'7"- 6' Chest 32"-36" Waist 24"-27" Hips 35"-38"`,
    positions: 10,
    campus:"UNIVERSITY CITY",
    location: "Westphal College of Media Arts & Design, URBN",
    supervisor: { name: "Golembuski,Cynthia", email: "cag48@drexel.edu", phone: "2155713269" },
    marked: false,
    id: 71
  },

  {
    title: "Rare Book Preservation Assistant",
    department: "Library and Archives",
    education: "Sophomore ",
    description: `This position will assist in preservation tasks relating to the Rare Book Collection at the Library ofthe Academy of Natural Sciences of Drexel University. Responsibilities include writing conditionreports for materials in the collection, moving materials between different storage areas, andcreating housing for materials. 10 hours per week; schedule can be flexible between 8:30 AM and 4PM on weekdays. `,
    qualifications: `Strong attention to detail and ability to follow written instructions. Comfortable handling fragilematerials. Good communication. Interest in library work a plus but not required. `,
    positions: 1,
    campus:"ACADEMY OF NATURAL SCIENCES",
    location: "Other, Academy of Natural Sciences ",
    supervisor: { name: "Manahan-Phelan,Kelsey", email: "km3476@drexel.edu", phone: "1040" },
    marked: false,
    id: 72
  },

  {
    title: "Residence Hall Desk Assistant ",
    department: "Housing and Residence Life",
    education: "Freshman",
    description: `POSITION SUMMARY The primary role of the Desk Assistant (DA) is to monitor access to the Residence Halls, provide quality customer service to individuals throughout the residence hall, and provide administrative and clerical support to the Residential Desk Coordinators (RDC) and Area CoOrdinators (AC). REPORTS TO Residential Desk Coordinators (RDC) RESPONSIBILITIES Safety and Security • Monitor and control entry and exit of all residents, staff and guests via a computerized access system • Maintain guest policy procedures • Receive and secure guest identification cards • Understand the function on Public Safety and communicate as necessary • Be knowledgeable of all emergency and evacuation policies • Report any concerns immediately to RDC or appropriate responder • Maintain confidentiality of specific information and adhere to FERPA Customer Service • Courteously greet residents, guests, and others who enter the residence hall • Answer phone inquiries, transfer calls, and take messages • Aid in maintaining a positive physical environment of lobby and desk area of residence hall • Manage resources for residents’ usage, including but not limited to board games, recreational supplies, and spare keys. Student Conduct • Report any University infractions witnessed to hall staff • Work with RDCs to educate and reinforce University Policies • Hold residents accountable for their actions as defined by University Policy Housing Operations & Facilities • Serve as a resource in assisting students with maintenance and custodial issues in the hall • Assist RDCs in monitoring all functions of the mail delivery / distribution process for the Residence Hall • Report any concerns or damages • Assist RDCs with Opening and closing preparation and procedures Personal Requirements • Be a positive role model and University Representative • Semi-professional attire required: no garments with holes, rips, or blemishes, no profanity or inappropriate graphics or references • Abide by all policies and procedures as outlined in the Student Handbook and the Front Desk Manual Meetings and Trainings • Complete initial Desk Assistant training and participate in required ongoing trainings throughout the year • Attend scheduled meetings with RDCs • Attend all desk staff meetings • Respond to any communications from the RDC or desk staff in timely manner Other Duties As Assigned `,
    qualifications: `Current Drexel student in good standing with the University Have a flexible schedule and ability to be part of a rotation for desk hours (including weekends, holidays, term breaks, final week, opening and closing, etc.) MUST complete 10 hours of training within first month of employment. `,
    positions: 15,
    campus:"UNIVERSITY CITY",
    location: "Other, Bentley Hall ",
    supervisor: { name: "Spencer,LaShay", email: "ls3567@drexel.edu", phone: "2155713080" },
    marked: false,
    id: 73
  },

  {
    title: "SCDI Student Ambassador ",
    department: "Student Center for Diversity and Inclusion",
    education: "Freshman",
    description: `The SCDI is looking for new student ambassadors! Student Ambassadors assist with the critical day-to-day functions of the Student Center for Diversity and Inclusion. Student Ambassadors have a handful of responsibilities such as assisting students utilizing the center, attending and facilitating SCDI programs, and completing light housekeeping duties to maintain the SCDI spaces. The student ambassador position requires that students are highly organized, timely, have a positive attitude, and strong customer service skills. `,
    qualifications: `Undergraduate `,
    positions: 8,
    campus:"UNIVERSITY CITY",
    location: "Other, Rush",
    supervisor: { name: "Johnson,Melissa", email: "mlj72@drexel.edu", phone: "(215) 571-4228" },
    marked: false,
    id: 74
  },

  {
    title: "Television & Media Management Communications & Content Creation Work Study ",
    department: "Cinema & Television",
    education: "Graduate Student ",
    description: `The Television & Media Management Graduate Program at Drexel University is seeking a motivated and creative work-study student to assist with communication and content creation. This position offers the opportunity to gain hands-on experience in media management, content development, and digital communication strategies. `,
    qualifications: `Current Drexel University student enrolled in a related program. Strong written and verbal communication skills. Experience with social media platforms and digital content creation. Ability to work independently and as part of a team. `,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "Westphal College of Media Arts & Design, University Crossings ",
    supervisor: { name: "McHugh,Michelle", email: "pmb92@drexel.edu", phone: "215-895-2172" },
    marked: false,
    id: 75
  },

  {
    title: "Vidas Facilities Assistant",
    department: "Athletics",
    education: "Freshman ",
    description: `Oversee evening and weekend operations at Vidas Athletic Complex, check in with Club and Intramural groups, ensure upkeep of Vidas Athletic Complex, track field usage, assist Public Safety in ensuring facility protocols are followed `,
    qualifications: `n/a `,
    positions: 10,
    campus:"UNIVERSITY CITY",
    location: "Other, Vidas Athletic Complex - Friel Field House",
    supervisor: { name: "Sabatino,Olivia", email: "os356@drexel.edu", phone: "2158951337" },
    marked: false,
    id: 76
  },

  {
    title: "Video Assistant",
    department: "Marketing and Communications",
    education: "Pre-Junior",
    description: `The College of Engineering is looking for a video or film student to help create new promotional materials and social media content for the college. Skills required include art direction, video capture, video editing, and sound editing. Animation is a plus. Students should demonstrate professional, but creative thinking and a vision to help us create marketing/promotional materials and make a video or shorts for our programs and recruiting materials. Work will be project-based, but ongoing. Must have own equipment.`,
    qualifications: `Film, TV, Video, Animation `,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "College of Engineering, LeBow Engineering",
    supervisor: { name: "Branscom,Yael", email: "ylb23@drexel.edu", phone: "215-534-5433" },
    marked: false,
    id: 77
  },

  {
    title: "Video editing and transcription assistant",
    department: "Library and Archives",
    education: "Sophomore ",
    description: `This position will assist in editing and transcribing video files generated in the context of the Academy Oral Histories Program led by the Library & Archives of the Academy of Natural Sciences of Drexel University. Responsibilities include editing video files, assisting with the production of short clips for promotional and educational purposes, and producing and editing transcripts. 10 hours per week; schedule can be flexible between 9:00 AM and 4 PM on weekdays.`,
    qualifications: `Interest and previous experience in video editing and transcription. Strong attention to detail and ability to follow written instructions. Good communication. Interest in history and the natural and environmental sciences a plus but not required.`,
    positions: 1,
    campus:"ACADEMY OF NATURAL SCIENCES",
    location: "Other, Academy of Natural Sciences",
    supervisor: { name: "Raposo,Pedro", email: "pmr64@drexel.edu", phone: "2152991027" },
    marked: false,
    id: 78
  },

  {
    title: "Volcanology Lab Assistant",
    department: "Biodiversity, Earth and Environmental Science",
    education: "Junior",
    description: `The volcanology research group at Drexel University seeks a lab assistant. In this position, the successful applicant will be tasked with analyzing spatial data, generate digital elevation models from structure-from-motion imagery, and prepare data products (e.g., graphs, figures) for ongoing research projects and publications`,
    qualifications: `Relevant major (GEO, ENVS) preferred. Experience with GIS and photogrammetry desired`,
    positions: 1,
    campus:"CENTER CITY",
    location: "College of Arts and Sciences, PISB",
    supervisor: { name: "Vanderkluysen,Loyc", email: "lv322@drexel.edu", phone: "215-571-4673" },
    marked: false,
    id: 79
  },

  {
    title: "Administrative Coordinator",
    department: "Office of the Dean",
    education: "Freshman",
    description: `The Office of the Dean of the College of Arts and Sciences is seeking a student to work as an Administrative Coordinator. Under the supervision of the Associate Dean of Undergraduate Education, this student will help support various projects and initiatives, including the Arts and Sciences Undergraduate Research Support (ASURS) Fund, a project that matches students and faculty to work together on research projects for six months; science tutoring at the Academic Resource Center; and Curriculum Committee work for the College. The Administrative Coordinator will gather data, organize events, interact with Dean’s Office units such as Marketing and Finance, process paperwork, handle inquiries, and track documentation. Students with appropriate skills and interests can also help analyze data from College initiatives. The student can create a flexible work schedule based upon their classes, although students would need to be available for some office hours and events.`,
    qualifications: `Organized, self-motivated, good writing and communication skills, reliable`,
    positions: 1,
    campus:"UNIVERSITY CITY",
    location: "College of Arts and Sciences, MacAlister Hall",
    supervisor: { name: "Warnock,Scott", email: "sjwarnock@drexel.edu", phone: "215-895-0377" },
    marked: false,
    id: 80
  }

];
function filterJobs() {
  const educationFilter = document.getElementById("education-filter").value;
  const departmentFilter = document.getElementById("department-filter").value;
  const positionFilter = document.getElementById("position-filter").value;
  const campusFilter = document.getElementById("campus-filter").value; // Get campus filter value

  return jobs.filter(job => {
    let matchesAllFilters = true; // Assume job matches all filters initially

    if (educationFilter) { // Check if education filter has a value selected
      matchesAllFilters = matchesAllFilters && job.education === educationFilter;
    }
    if (departmentFilter) { // Check if department filter has a value selected
      matchesAllFilters = matchesAllFilters && job.department === departmentFilter;
    }
    if (positionFilter) { // Check if position filter has a value selected
      matchesAllFilters = matchesAllFilters && job.title === positionFilter;
    }
    if (campusFilter) { // Check if campus filter has a value selected (case-insensitive comparison)
      matchesAllFilters = matchesAllFilters && job.campus.toUpperCase() === campusFilter.toUpperCase();
    }

    return matchesAllFilters; // Return true only if job matches ALL applied filters
  });
}


function clearFilters() {
  document.getElementById("education-filter").value = "";
  document.getElementById("department-filter").value = "";
  document.getElementById("position-filter").value = "";
  document.getElementById("campus-filter").value = "";
  showJobs();
}

function displayJobCards(jobList) {
  var container = document.getElementById("opp");
  container.innerHTML = "";

  if (jobList.length === 0) {
    container.innerHTML = "<p>No opportunities match your criteria.</p>";
    return;
  }

  jobList.forEach(job => {
    var card = document.createElement("div");
    card.className = "job-card";
    card.setAttribute("data-id", job.id);

    var cardHTML = `
      <h2 class="job-title">${job.title}</h2>
      <div class="job-department">Department: ${job.department}</div>
      <div class="job-education">${job.education}</div>
      <div class="job-section">
        <h3>Job Description</h3>
        <p>${job.description}</p>
        <h3>Qualifications</h3>
        <p>${job.qualifications}</p>
        <h3>Available Positions: ${job.positions}</h3>
        <h3>Location</h3>
        <p>${job.location} - ${job.campus} Campus</p>
        <h3>Supervisor</h3>
        <p>Name: ${job.supervisor.name}</p>
        <p>Email: <a href="mailto:${job.supervisor.email}">${job.supervisor.email}</a></p>
        <p>Phone: ${job.supervisor.phone}</p>
      </div>
      <div class="card-buttons">
        <button class="message-btn" data-id="${job.id}">Message</button>
        <button class="email-btn" data-id="${job.id}" onclick="window.location.href='mailto:${job.supervisor.email}?subject=${encodeURIComponent(job.title)}'">Email Us Now!</button>
        ${job.marked
          ? `<button class="mark-btn marked" data-id="${job.id}">Unsave</button>`
          : `<button class="mark-btn" data-id="${job.id}">Save</button>`
        }
      </div>
    `;

    card.innerHTML = cardHTML;
    container.appendChild(card);
  });
}

function updateMarkedJobs() {
  var markedContainer = document.getElementById("mp");
  markedContainer.innerHTML = "";
  if (markedJobs.length === 0) {
    markedContainer.innerHTML = "<p class='no-marked'>No marked posts.</p>";
    return;
  }
  markedJobs.slice().reverse().forEach(currentJobId => {
    const job = jobs.find(job => job.id === currentJobId && job.marked === true);
    if (job) {
      var markedBox = document.createElement("div");
      markedBox.className = "marked-box";
      var markedHTML = "";
      markedHTML += "<strong>" + job.title + "</strong><br>";
      markedHTML += "Contact: " + job.supervisor.name + "<br>";
      markedHTML += "Email: <a href='mailto:" + job.supervisor.email + "'>" + job.supervisor.email + "</a><br>";
      markedHTML += "<button class='remove-mark-btn' data-id='" + job.id + "'>Remove</button>";
      markedBox.innerHTML = markedHTML;
      markedBox.querySelector(".remove-mark-btn").onclick = function(event) {
        var idToRemove = parseInt(event.target.getAttribute("data-id"), 10);
        toggleMark(idToRemove);
      };
      markedContainer.appendChild(markedBox);
    }
  });
}

function showJobs() {
  var container = document.getElementById("opp");
  container.style.display = "block";
  var filteredJobs = filterJobs();

  if (filteredJobs.length === 0) {
    container.innerHTML = "<p>No opportunities match your selected criteria.</p>";
  } else {
    displayJobCards(filteredJobs);
  }
  updateMarkedJobs();
}

function openChat(id) {
  var foundJob = jobs.find(job => job.id === id);
  if (foundJob) {
    currentJobId = id;
    modalHeader.textContent = "Chat with " + foundJob.supervisor.name + " about: " + foundJob.title;
    modal.style.display = "flex";
    loadConversation();
  }
}

function closeChat() {
  modal.style.display = "none";
  modalBody.innerHTML = "";
  messageInput.value = "";
  currentJobId = null;
}

function loadConversation() {
  modalBody.innerHTML = "";
  var convKey = "conv_" + currentJobId;
  var conversation = localStorage.getItem(convKey);
  if (conversation) {
    try {
      conversation = JSON.parse(conversation);
      conversation.forEach(function(message) {
        showMessage(message);
      });
    } catch (e) {
      console.error("Error parsing conversation", e);
    }
  }
  modalBody.scrollTop = modalBody.scrollHeight;
}

function saveMessage(message) {
  var convKey = "conv_" + currentJobId;
  var conversation = localStorage.getItem(convKey);
  conversation = conversation ? JSON.parse(conversation) : [];
  conversation.push(message);
  localStorage.setItem(convKey, JSON.stringify(conversation));
}

function showMessage(message) {
  var msgDiv = document.createElement("div");
  msgDiv.className = "message " + message.sender;
  var textDiv = "<div>" + message.text + "</div>";
  var timeString = new Date(message.timestamp).toLocaleString();
  var timestampDiv = "<div class='timestamp'>" + timeString + "</div>";
  msgDiv.innerHTML = textDiv + timestampDiv;
  modalBody.appendChild(msgDiv);
}

function sendMessage() {
  var text = messageInput.value.trim();
  if (text === "") return;
  var message = {
    sender: "user",
    text: text,
    timestamp: new Date().getTime()
  };
  saveMessage(message);
  showMessage(message);
  messageInput.value = "";
  modalBody.scrollTop = modalBody.scrollHeight;
  setTimeout(autoReply, 2000);
}

function autoReply() {
  var replies = [
    "Can you tell more?",
    "I'll get back to you shortly.",
    "How can I help you out?",
    "I appreciate your message.",
    "Thanks for reaching out."
  ];
  var replyText = replies[Math.floor(Math.random() * replies.length)];
  var message = {
    sender: "contact",
    text: replyText,
    timestamp: new Date().getTime()
  };
  saveMessage(message);
  showMessage(message);
  modalBody.scrollTop = modalBody.scrollHeight;
}

function toggleMark(jobIdToToggle) {
  for (var i = 0; i < jobs.length; i++) {
    if (jobs[i].id === jobIdToToggle) {
      jobs[i].marked = !jobs[i].marked;
      if (jobs[i].marked) {
        markedJobs.push(jobIdToToggle);
        setTimeout(function() {
          scrollToJob(jobIdToToggle);
        }, 100);
      } else {
        for (var j = 0; j < markedJobs.length; j++) {
          if (markedJobs[j] === jobIdToToggle) {
            markedJobs.splice(j, 1);
            break;
          }
        }
      }
      break;
    }
  }
  updateMarkedJobs();
  showJobs();
}

function scrollToJob(jobIdToScroll) {
  var jobCards = document.getElementsByClassName("job-card");
  for (var i = 0; i < jobCards.length; i++) {
    var card = jobCards[i];
    if (parseInt(card.getAttribute("data-id"), 10) === jobIdToScroll) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.style.transition = "box-shadow 0.3s";
      card.style.boxShadow = "0 0 10px #6a5acd";
      (function(highlightedCard) {
        setTimeout(function() {
          highlightedCard.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
        }, 1000);
      })(card);
      break;
    }
  }
}

// Event Listeners
if (document.getElementById("apply-filters")) {
  document.getElementById("apply-filters").onclick = showJobs;
}
document.getElementById("clear-filters").onclick = clearFilters;
document.getElementById("opp").onclick = function(event) {
  var targetElement = event.target;
  if (targetElement.className.indexOf("mark-btn") !== -1) {
    var jobIdNumber = parseInt(targetElement.getAttribute("data-id"), 10);
    toggleMark(jobIdNumber);
  } else if (targetElement.className.indexOf("message-btn") !== -1) {
    var jobIdNumber = parseInt(targetElement.getAttribute("data-id"), 10);
    openChat(jobIdNumber);
  }
};

// Modal element references
var modal = document.getElementById("chatModal");
var modalHeader = document.querySelector(".modal-header .modal-title");
var modalBody = document.querySelector(".modal-body");
var closeButton = document.querySelector(".close-button");
var sendButton = document.getElementById("sendButton");
var messageInput = document.getElementById("messageInput");

modal.onclick = function(e) {
  if (e.target === modal) {
    closeChat();
  }
};

closeButton.onclick = function() {
  closeChat();
};

sendButton.onclick = function() {
  sendMessage();
};

messageInput.onkeypress = function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
};

// Initialize on page load
document.addEventListener("DOMContentLoaded", showJobs);
document.getElementById("education-filter").addEventListener("change", showJobs);
document.getElementById("department-filter").addEventListener("change", showJobs);
document.getElementById("position-filter").addEventListener("change", showJobs);
document.getElementById("campus-filter").addEventListener("change", showJobs);
