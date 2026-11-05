import { themeFromPreset } from './themes.js';
  var n = 0;
  var S = (type, values, o = {}) => ({ id: o.id || "b" + (++n).toString(36), type, values, hidden: false, anchor: o.anchor || "" });
  var N = (label, link, depth = 0) => ({ id: "n" + (++n).toString(36), label, link, depth });
  var B = (label, link) => ({ label, link });
  var L = {
    page: (pageId) => ({ kind: "page", pageId }),
    sec: (pageId, sectionId) => ({ kind: "section", pageId, sectionId }),
    item: (collection, itemId) => ({ kind: "item", collection, itemId }),
    url: (url) => ({ kind: "url", url, newTab: true }),
    phone: (phone) => ({ kind: "phone", phone }),
    wa: (phone, message) => ({ kind: "whatsapp", phone, message }),
    mail: (email, subject = "") => ({ kind: "email", email, subject }),
    file: (mediaId) => ({ kind: "file", mediaId })
  };
  var page = (id, title, slug, sections, o = {}) => ({
    id,
    title,
    slug,
    parentId: o.parent || null,
    kind: o.kind || "page",
    collection: o.collection || null,
    status: o.status || "live",
    seo: { title: o.seoTitle || "", description: o.seoDesc || "", image: o.seoImage || null },
    sections,
    header: null,
    footer: null
  });
  var notFound = (home = "home") => page("p404", "Page not found", "404", [
    S("hero-bigtype", { eyebrow: "Error 404", title: "This page has moved or no longer exists", body: "Check the address, or start again from the home page.", button: B("Go to the home page", L.page(home)), meta: [], showImage: false })
  ], { kind: "404", seoTitle: "Page not found" });
  var coll = (id, items) => ({ id, name: id === "services" ? "Services" : "Blog", singular: id === "services" ? "Service" : "Post", items: items.map((x) => ({ status: "live", ...x })) });
  var CL_PHONE = "+91 98450 21734";
  var clinic = {
    id: "clinic",
    name: "Clinic",
    business: "Smile Studio Dental",
    industry: "Health",
    style: ["minimal"],
    description: "Calm, trustworthy pages for dental and medical practices: treatments with their own pages, clear fees and easy booking.",
    theme: themeFromPreset("clinic"),
    header: S("header-bar", { logo: "Smile Studio Dental", logoMark: true, showCta: true, cta: B("Book a visit", L.sec("contact", "cl-visit")), sticky: true }, { id: "cl-header" }),
    footer: S("footer-columns", { logo: "Smile Studio Dental", tagline: "Gentle, modern dentistry on 100 Feet Road since 2011.", address: "2nd Floor, 418 100 Feet Road\nIndiranagar, Bengaluru 560038", phone: CL_PHONE, email: "hello@smilestudiodental.in", social: [{ handle: "smilestudio.blr", url: "https://example.com/smilestudio" }], copyright: "\xA9 2026 Smile Studio Dental Care Pvt. Ltd.", dark: false }, { id: "cl-footer" }),
    nav: {
      autoAdd: true,
      header: [N("Home", L.page("home")), N("About", L.page("about")), N("Services", L.page("services")), N("Fees", L.page("fees")), N("Blog", L.page("blog")), N("Contact", L.page("contact"))],
      footer: [
        N("Clinic", L.page("about")),
        N("About us", L.page("about"), 1),
        N("Fees", L.page("fees"), 1),
        N("Contact", L.page("contact"), 1),
        N("Fee schedule (PDF)", L.file("m-file-fees"), 1),
        N("Treatments", L.page("services")),
        N("Teeth whitening", L.item("services", "svc-whitening"), 1),
        N("Root canal treatment", L.item("services", "svc-rct"), 1),
        N("Clear aligners", L.item("services", "svc-aligners"), 1),
        N("Kids\u2019 dentistry", L.item("services", "svc-kids"), 1)
      ]
    },
    pages: [
      page("home", "Home", "", [
        S("hero-split", { eyebrow: "Dental clinic \xB7 Indiranagar", title: "Unhurried dental care for the whole family", body: "From a first check-up for your five-year-old to implants for your parents, our four dentists explain every step before we begin.", primary: B("Book a visit", L.sec("contact", "cl-visit")), secondary: B("See treatments", L.page("services")), image: "m-cl-room", note: "4.9 average from 1,200+ patient reviews", reverse: false }, { id: "cl-hero" }),
        S("features-grid", { eyebrow: "Why patients stay", title: "Care that feels calm, not clinical", intro: "", columns: "3", style: "cards", showImages: false, items: [
          { icon: "clock", title: "On time, every time", text: "Appointments start within 10 minutes of your slot. If we run late, we message you on WhatsApp." },
          { icon: "shield", title: "Sterilised to hospital standards", text: "Class B autoclaves and sealed single-use kits for every patient. We open them in front of you." },
          { icon: "receipt", title: "Fees agreed before treatment", text: "You get a written estimate before we start, and EMI on treatments above \u20B920,000." }
        ] }),
        S("about-story", { eyebrow: "Our story", title: "Started by two sisters who were scared of the dentist as kids", body: "Dr. Ananya and Dr. Kavya Mehta opened Smile Studio in 2011 with one chair and a simple rule: no patient leaves without understanding their treatment.\n\nFifteen years later we have five chairs, an in-house OPG scanner and a play corner for nervous children. The rule has not changed.", image: "m-cl-ananya", stats: [{ value: "15", label: "years in Indiranagar" }, { value: "18,000+", label: "patients treated" }, { value: "4", label: "specialist dentists" }], button: B("Meet the doctors", L.page("about")), imageRight: false, tinted: true }),
        S("testimonials-cards", { eyebrow: "", title: "What our patients say", intro: "", showRating: true, items: [
          { quote: "I put off my root canal for two years out of fear. Dr. Kavya explained it with a model of the tooth and I barely felt a thing.", name: "Rohan Iyer", role: "Patient since 2019", avatar: "m-cl-rohan", rating: 5 },
          { quote: "My daughter now asks when her next visit is. The play corner and the painted ceiling help a lot.", name: "Priya Nair", role: "Parent, HAL 2nd Stage", avatar: "m-cl-priya", rating: 5 },
          { quote: "Clear estimate on day one, and the final bill matched it to the rupee. That alone made me switch clinics.", name: "Suresh Gowda", role: "Patient since 2015", avatar: "m-cl-suresh", rating: 5 }
        ] }),
        S("cta-banner", { title: "Due for a check-up?", text: "A consultation with an X-ray costs \u20B9600 and takes about 30 minutes.", button: B("Book a visit", L.sec("contact", "cl-visit")), secondary: B("WhatsApp us", L.wa(CL_PHONE, "Hi, I would like to book a check-up.")), tone: "primary" }, { id: "cl-home-cta" })
      ], { seoTitle: "Smile Studio Dental \xB7 Dentist in Indiranagar, Bengaluru", seoDesc: "Family dental clinic on 100 Feet Road, Indiranagar. Check-ups, root canals, implants, aligners and kids\u2019 dentistry with fees agreed before treatment.", seoImage: "m-cl-room" }),
      page("about", "About", "about", [
        S("hero-bigtype", { eyebrow: "About us", title: "A neighbourhood clinic with specialist care", body: "Four specialists, five chairs and one rule: you understand your treatment before we begin.", button: { label: "", link: null }, meta: [{ text: "Founded 2011" }, { text: "NABH-compliant sterilisation" }, { text: "Kannada, Hindi, Tamil, Malayalam and English spoken" }], showImage: false, dark: false }),
        S("about-story", { eyebrow: "How we work", title: "Explain first, treat second", body: "Every first visit starts with a conversation and an X-ray, not a drill. We show you what we see on a screen, talk through the options and their costs, and let you decide.\n\n- Written estimates before any treatment\n- A dedicated dentist who follows your case\n- Reminders on WhatsApp, never spam", image: "m-cl-room", stats: [], button: B("Book a visit", L.sec("contact", "cl-visit")), imageRight: true, tinted: false }),
        S("gallery-grid", { eyebrow: "Inside the clinic", title: "Light, quiet and spotless", intro: "", layout: "grid", images: [{ image: "m-cl-lounge", caption: "Waiting lounge" }, { image: "m-cl-room", caption: "Treatment room 2" }, { image: "m-cl-leaves", caption: "Reception" }], tinted: true })
      ], { seoTitle: "About Smile Studio Dental", seoDesc: "Meet the team behind Smile Studio Dental in Indiranagar and see how we work." }),
      page("services", "Services", "services", [
        S("hero-bigtype", { eyebrow: "Treatments", title: "Everything your teeth need, under one roof", body: "Fees shown are starting prices. Your dentist confirms the exact cost in writing after your consultation.", button: B("See all fees", L.page("fees")), meta: [], showImage: false }),
        S("news-list", { eyebrow: "", title: "", intro: "", source: "services", limit: 9, showImages: true, button: { label: "", link: null } })
      ], { kind: "collection", collection: "services", seoTitle: "Dental treatments \xB7 Smile Studio Dental", seoDesc: "Whitening, root canals, implants, clear aligners, kids\u2019 dentistry and cleaning in Indiranagar, Bengaluru." }),
      page("service", "Service page", ":slug", [
        S("entry-detail", { backLabel: "All treatments", showImage: true, button: B("Book a consultation", L.sec("contact", "cl-visit")) }),
        S("cta-banner", { title: "Not sure which treatment you need?", text: "Send us a photo on WhatsApp and a dentist will reply within the day.", button: B("WhatsApp a dentist", L.wa(CL_PHONE, "Hi, I have a question about a treatment.")), secondary: { label: "", link: null }, tone: "soft" })
      ], { parent: "services", kind: "detail", collection: "services" }),
      page("fees", "Fees", "fees", [
        S("hero-bigtype", { eyebrow: "Fees", title: "Clear fees, agreed before we start", body: "Prices include GST. Download the full schedule or ask at the front desk.", button: B("Download fee schedule", L.file("m-file-fees")), meta: [], showImage: false }),
        S("menu-list", { eyebrow: "", title: "Fee schedule", intro: "", items: [
          { group: "Consultation", name: "Consultation with X-ray", price: "\u20B9600", desc: "Adjusted against treatment if you go ahead within 30 days." },
          { group: "Consultation", name: "Emergency visit, same day", price: "\u20B91,000", desc: "" },
          { group: "Cleaning", name: "Scaling and polishing", price: "\u20B91,500", desc: "" },
          { group: "Cleaning", name: "Deep cleaning, per quadrant", price: "\u20B92,500", desc: "" },
          { group: "Treatment", name: "Tooth-coloured filling", price: "from \u20B91,800", desc: "" },
          { group: "Treatment", name: "Root canal treatment", price: "from \u20B96,000", desc: "Crown charged separately." },
          { group: "Treatment", name: "Ceramic crown", price: "from \u20B99,500", desc: "" },
          { group: "Treatment", name: "Dental implant with crown", price: "from \u20B928,000", desc: "" },
          { group: "Cosmetic", name: "Teeth whitening, in clinic", price: "\u20B98,500", desc: "", tag: "Popular" },
          { group: "Cosmetic", name: "Clear aligners, full course", price: "from \u20B965,000", desc: "EMI available." }
        ], note: "Fees last updated 1 October 2026.", tinted: false }, { id: "cl-fee-list" }),
        S("pricing-plans", { eyebrow: "Care plans", title: "Pay once a year, visit without thinking twice", intro: "Plans cover routine visits. Treatments are charged separately at 10\u201315% off.", plans: [
          { name: "Solo", price: "\u20B92,400", period: "/ year", desc: "For one adult.", features: "Two check-ups with cleaning\nOne X-ray\n10% off treatments", featured: false, button: B("Ask about Solo", L.sec("contact", "cl-visit")) },
          { name: "Family of four", price: "\u20B97,800", period: "/ year", desc: "Two adults and two children.", features: "Two check-ups each with cleaning\nFluoride for children\n15% off treatments\nPriority weekend slots", featured: true, flag: "Best value", button: B("Ask about Family", L.sec("contact", "cl-visit")) },
          { name: "Senior", price: "\u20B91,800", period: "/ year", desc: "For anyone over 60.", features: "Two check-ups with cleaning\nDenture adjustments\n15% off treatments", featured: false, button: B("Ask about Senior", L.sec("contact", "cl-visit")) }
        ], tinted: true }),
        S("faq-accordion", { eyebrow: "FAQ", title: "Questions about fees", intro: "Anything else? Call the front desk on " + CL_PHONE + ".", items: [
          { q: "Do you accept insurance?", a: "We offer cashless treatment with most major health insurers. Bring your policy card and we will check your cover before you start." },
          { q: "Can I pay in instalments?", a: "Yes. Treatments above \u20B920,000 can be split into 3, 6 or 9 monthly payments at no extra cost." },
          { q: "Is the first consultation free?", a: "It costs \u20B9600 including an X-ray, and we adjust it against your treatment if you go ahead within 30 days." },
          { q: "What if my treatment costs more than the estimate?", a: "It won\u2019t without your say-so. If we find something new, we stop, explain and give you a revised estimate first." }
        ] }, { anchor: "faq" })
      ], { seoTitle: "Dental fees in Indiranagar \xB7 Smile Studio Dental", seoDesc: "Clear prices for consultations, cleaning, root canals, implants, whitening and aligners, with EMI on larger treatments." }),
      page("blog", "Blog", "blog", [
        S("hero-bigtype", { eyebrow: "Blog", title: "Notes from the chair", body: "Plain-language advice from our dentists, every two weeks.", button: { label: "", link: null }, meta: [], showImage: false }),
        S("news-list", { eyebrow: "", title: "", intro: "", source: "blog", limit: 9, showImages: true, button: { label: "", link: null } })
      ], { kind: "collection", collection: "blog", seoTitle: "Dental advice blog \xB7 Smile Studio Dental", seoDesc: "Plain-language dental advice from the dentists at Smile Studio, Indiranagar." }),
      page("post", "Blog post", ":slug", [
        S("entry-detail", { backLabel: "All posts", showImage: true, button: { label: "", link: null } }),
        S("cta-banner", { title: "Have a question about your teeth?", text: "Book a 30-minute consultation with X-ray for \u20B9600.", button: B("Book a visit", L.sec("contact", "cl-visit")), secondary: { label: "", link: null }, tone: "soft" })
      ], { parent: "blog", kind: "detail", collection: "blog" }),
      page("contact", "Contact", "contact", [
        S("contact-split", { eyebrow: "Visit us", title: "Book a visit", intro: "Call, WhatsApp or send the form. We confirm a slot within two working hours.", address: "2nd Floor, 418 100 Feet Road\nIndiranagar, Bengaluru 560038", phone: CL_PHONE, whatsapp: CL_PHONE, email: "hello@smilestudiodental.in", hours: [{ days: "Monday to Saturday", time: "9:30 am \u2013 8:00 pm" }, { days: "Sunday", time: "10:00 am \u2013 2:00 pm" }], showForm: true, formTitle: "Request a call back", formButton: "Request a call back", formSuccess: "Thanks. We will call you back within two working hours.", showMap: true, map: "m-cl-map" }, { id: "cl-visit", anchor: "visit" }),
        S("faq-accordion", { eyebrow: "", title: "Before your first visit", intro: "", items: [
          { q: "Is there parking?", a: "Two-wheeler parking at the entrance and car parking in the basement (\u20B930 an hour)." },
          { q: "How early should I arrive?", a: "Ten minutes before your slot, so we can fill in your medical history. You can also fill the **new patient form** at home." },
          { q: "Do you treat children?", a: "Yes, from age two. Dr. Lakshmi Rao sees children on weekday afternoons and Saturday mornings." }
        ], tinted: true })
      ], { seoTitle: "Contact Smile Studio Dental, Indiranagar", seoDesc: "Book a dental appointment on 100 Feet Road, Indiranagar. Open Monday to Saturday 9:30 am to 8 pm." }),
      notFound()
    ],
    collections: {
      services: coll("services", [
        { id: "svc-whitening", title: "Teeth whitening", slug: "teeth-whitening", summary: "Brighten your smile by up to eight shades in one 90-minute visit.", price: "\u20B98,500", duration: "90 minutes \xB7 1 visit", image: "m-cl-smile", body: "In-clinic whitening uses a professional gel activated by a cool LED light. We protect your gums first, then apply the gel in three 15-minute rounds.\n\n**Who it suits:** adults with healthy teeth and gums and stains from tea, coffee or age.\n\n- Sensitivity usually settles within 48 hours\n- Results last one to three years\n- A take-home touch-up kit is included" },
        { id: "svc-rct", title: "Root canal treatment", slug: "root-canal-treatment", summary: "Save an infected tooth with a single-sitting rotary root canal under local anaesthesia.", price: "from \u20B96,000", duration: "60\u201390 minutes \xB7 1\u20132 visits", image: "m-cl-room", body: "A root canal removes infected pulp from inside the tooth, cleans the canals and seals them. With rotary instruments and a local anaesthetic, most patients feel no more than a filling.\n\nMost teeth need a crown afterwards to protect them. We quote the crown separately." },
        { id: "svc-implants", title: "Dental implants", slug: "dental-implants", summary: "Replace missing teeth with titanium implants that look, feel and chew like your own.", price: "from \u20B928,000", duration: "2 visits over 3 months", image: "m-cl-leaves", body: "An implant is a small titanium post placed in the jaw. After about three months of healing, we fit a ceramic crown on top.\n\nWe take a 3D scan before we plan, so you see exactly where the implant will go." },
        { id: "svc-aligners", title: "Clear aligners", slug: "clear-aligners", summary: "Straighten your teeth with near-invisible trays you change every two weeks.", price: "from \u20B965,000", duration: "6\u201318 months", image: "m-cl-smile", body: "Aligners are clear trays made from a scan of your teeth. You wear them about 22 hours a day and switch to a new set every two weeks.\n\nDr. Farhan checks progress every six weeks, and EMI is available over 9 months." },
        { id: "svc-kids", title: "Kids\u2019 dentistry", slug: "kids-dentistry", summary: "Gentle check-ups, fluoride and sealants for children from age two.", price: "from \u20B9800", duration: "30 minutes", image: "m-cl-lounge", body: "First visits are mostly about getting comfortable: a ride in the chair, counting teeth and a sticker at the end.\n\nWe recommend a check-up every six months, with fluoride varnish and sealants from age six." },
        { id: "svc-scaling", title: "Scaling and polishing", slug: "scaling-and-polishing", summary: "Remove tartar and stains and check your gums in one 40-minute visit.", price: "\u20B91,500", duration: "40 minutes", image: "m-cl-leaves", body: "An ultrasonic scaler removes hardened tartar that brushing cannot. We finish with a polish and a gum check." }
      ]),
      blog: coll("blog", [
        { id: "post-cleaning", title: "How often should you really get your teeth cleaned?", slug: "how-often-teeth-cleaning", date: "28 Oct 2026", author: "Dr. Lakshmi Rao", excerpt: "Twice a year is the usual advice, but your gums might need more or less. Here is how we decide.", image: "m-cl-leaves", body: "Most adults do well with a cleaning every six months. If you smoke, have diabetes or have had gum disease, every three to four months is safer.\n\nAt each visit we measure the pockets around your teeth. Those numbers, not the calendar, decide your next appointment." },
        { id: "post-whitening", title: "Teeth whitening: what to expect at your first session", slug: "teeth-whitening-first-session", date: "14 Oct 2026", author: "Dr. Ananya Mehta", excerpt: "From the shade check to the sensitivity afterwards, a step-by-step guide to in-clinic whitening.", image: "m-cl-smile", body: "We start by recording your current shade. After protecting your gums, we apply the gel in three short rounds and check the shade again.\n\nAvoid tea, coffee and turmeric-heavy food for 48 hours afterwards." },
        { id: "post-aligners", title: "Clear aligners or braces? A straight comparison for adults", slug: "aligners-or-braces", date: "30 Sep 2026", author: "Dr. Farhan Qureshi", excerpt: "Cost, comfort, speed and discipline: how the two options compare for working adults.", image: "m-cl-room", body: "Braces work for every case and need no discipline from you. Aligners are nearly invisible and removable, but only work if you wear them 22 hours a day." },
        { id: "post-kids", title: "Five habits that protect your child\u2019s teeth", slug: "five-habits-childrens-teeth", date: "12 Sep 2026", author: "Dr. Lakshmi Rao", excerpt: "Small things at home that save big treatments later, from bedtime milk to the first toothbrush.", image: "m-cl-lounge", body: "- Brush twice a day with a rice-grain of fluoride toothpaste\n- No milk bottle in bed after the first teeth appear\n- Swap sticky sweets for fruit at snack time\n- Visit a dentist by the first birthday\n- Let them brush first, then you finish" }
      ])
    }
  };
  var EM_PHONE = "+91 80412 77819";
  var ember = {
    id: "ember",
    name: "Ember",
    business: "Kaapi Katte",
    industry: "Food & drink",
    style: ["editorial"],
    description: "Warm, photo-led pages for caf\xE9s, bakeries and restaurants, with a menu that reads like the one on your counter.",
    theme: themeFromPreset("ember"),
    header: S("header-centered", { topline: "Open daily 7:30 am \u2013 10:30 pm \xB7 41 DVG Road, Basavanagudi", logo: "Kaapi Katte", sticky: false }, { id: "em-header" }),
    footer: S("footer-simple", { logo: "Kaapi Katte", tagline: "Roasted in Bengaluru every Thursday.", copyright: "\xA9 2026 Kaapi Katte" }, { id: "em-footer" }),
    nav: {
      autoAdd: true,
      header: [N("Home", L.page("home")), N("Menu", L.page("menu")), N("Our story", L.page("story")), N("Gallery", L.page("gallery")), N("Visit", L.page("visit"))],
      footer: [N("Menu", L.page("menu")), N("Our story", L.page("story")), N("Visit", L.page("visit")), N("Menu (PDF)", L.file("m-file-menu"))]
    },
    pages: [
      page("home", "Home", "", [
        S("hero-slides", { slides: [
          { image: "m-ember-filter", title: "Filter coffee, the slow way", caption: "Decoction brewed every 40 minutes from beans we roast on Thursdays." },
          { image: "m-ember-latte", title: "And the new way too", caption: "Pour-overs and flat whites from single estates in Chikmagalur and Coorg." },
          { image: "m-ember-buns", title: "Baked here at 5 am", caption: "Butter croissants, ragi banana bread and our cardamom buns." }
        ], button: B("See the menu", L.page("menu")) }),
        S("about-story", { eyebrow: "Since 2017", title: "A katte for the neighbourhood", body: "A katte is the raised platform under a banyan tree where Bengaluru used to sit, argue and drink coffee. We built one indoors, with long tables, slow coffee and no rush to leave.", image: "m-ember-interior", stats: [{ value: "2017", label: "opened on DVG Road" }, { value: "6", label: "estates we buy from" }, { value: "\u20B940", label: "a by-two filter coffee" }], button: B("Read our story", L.page("story")), imageRight: true, tinted: false }),
        S("menu-list", { eyebrow: "Popular right now", title: "What the regulars order", intro: "", items: [
          { group: "", name: "Filter coffee", price: "\u20B960", desc: "Brass-brewed decoction, full-cream milk.", tag: "Bestseller" },
          { group: "", name: "Cold brew tonic", price: "\u20B9220", desc: "18-hour Coorg cold brew over tonic and orange peel." },
          { group: "", name: "Cardamom bun", price: "\u20B9120", desc: "Laminated dough, Idukki cardamom, pearl sugar." },
          { group: "", name: "Masala omelette toast", price: "\u20B9180", desc: "On house sourdough with coriander chutney." }
        ], note: "", tinted: true }),
        S("testimonial-quote", { quote: "The only place in Bengaluru where the filter coffee tastes like my grandmother\u2019s and the croissant tastes like Paris.", name: "Meera Krishnan", role: "Regular since 2018", avatar: "m-ember-guest", dark: true }),
        S("cta-banner", { title: "Hosting a small gathering?", text: "Book the back room for up to 20 people on weekdays after 3 pm.", button: B("Plan an event", L.sec("visit", "em-visit")), secondary: { label: "", link: null }, tone: "primary" })
      ], { seoTitle: "Kaapi Katte \xB7 Filter coffee and bakes in Basavanagudi", seoDesc: "Filter coffee, single-estate pour-overs and fresh bakes on DVG Road, Basavanagudi. Open daily 7:30 am to 10:30 pm.", seoImage: "m-ember-filter" }),
      page("menu", "Menu", "menu", [
        S("hero-bigtype", { eyebrow: "Menu", title: "Coffee, bakes and a few good plates", body: "Prices include GST. Oat or almond milk on request for \u20B940.", button: B("Download the menu", L.file("m-file-menu")), meta: [], showImage: false }),
        S("menu-list", { eyebrow: "", title: "", intro: "", items: [
          { group: "Coffee", name: "Filter coffee", price: "\u20B960", desc: "", tag: "Bestseller" },
          { group: "Coffee", name: "Cappuccino", price: "\u20B9180" },
          { group: "Coffee", name: "Flat white", price: "\u20B9200" },
          { group: "Coffee", name: "Pour-over, today\u2019s estate", price: "\u20B9240" },
          { group: "Coffee", name: "Cold brew", price: "\u20B9200" },
          { group: "Not coffee", name: "Masala chai", price: "\u20B970" },
          { group: "Not coffee", name: "Hot chocolate", price: "\u20B9190" },
          { group: "Not coffee", name: "Kokum soda", price: "\u20B9120" },
          { group: "Bakes", name: "Butter croissant", price: "\u20B9150" },
          { group: "Bakes", name: "Cardamom bun", price: "\u20B9120" },
          { group: "Bakes", name: "Ragi banana bread", price: "\u20B9140" },
          { group: "Bakes", name: "Almond biscotti, three", price: "\u20B9110" },
          { group: "Plates", name: "Masala omelette toast", price: "\u20B9180" },
          { group: "Plates", name: "Akki roti with chutney", price: "\u20B9160", tag: "Vegan" },
          { group: "Plates", name: "Mushrooms on sourdough", price: "\u20B9260" }
        ], note: "Ask us about allergens. Our kitchen handles nuts, gluten and dairy.", tinted: false }),
        S("cta-banner", { title: "Beans to take home", text: "250 g bags of our house blend, ground for filter or espresso, \u20B9450.", button: B("Ask at the counter", L.page("visit")), secondary: { label: "", link: null }, tone: "soft" })
      ], { seoTitle: "Menu \xB7 Kaapi Katte", seoDesc: "Filter coffee from \u20B940, pour-overs, fresh bakes and all-day plates in Basavanagudi." }),
      page("story", "Our story", "our-story", [
        S("about-story", { eyebrow: "Our story", title: "Two cousins, one roaster and a lot of decoction", body: "Arjun learned to roast in Chikmagalur. Divya ran a bakery in Pune. In 2017 they opened Kaapi Katte on the ground floor of their grandfather\u2019s house on DVG Road.\n\nThe brass filters on the counter are his. So is the rule that nobody is asked to leave.", image: "m-ember-barista", stats: [], button: { label: "", link: null }, imageRight: false, tinted: false }),
        S("features-grid", { eyebrow: "How we work", title: "From the estate to your tumbler", intro: "", columns: "3", style: "plain", showImages: false, items: [
          { icon: "leaf", title: "Bought direct", text: "We buy from six estates in Chikmagalur and Coorg and pay above fair-trade prices." },
          { icon: "flame", title: "Roasted every Thursday", text: "Small batches on a 5 kg roaster, so no bean on the shelf is more than a week old." },
          { icon: "cup", title: "Brewed to order", text: "Fresh decoction every 40 minutes. Espresso dialled in twice a day." }
        ], tinted: true })
      ], { seoTitle: "Our story \xB7 Kaapi Katte", seoDesc: "How two cousins turned their grandfather\u2019s house in Basavanagudi into a coffee house." }),
      page("gallery", "Gallery", "gallery", [
        S("gallery-grid", { eyebrow: "Gallery", title: "A morning at the katte", intro: "", layout: "mosaic", images: [
          { image: "m-ember-interior", caption: "The counter at 8 am" },
          { image: "m-ember-filter", caption: "Filter coffee, by-two" },
          { image: "m-ember-buns", caption: "Cardamom buns" },
          { image: "m-ember-latte", caption: "Flat white" },
          { image: "m-ember-beans", caption: "Thursday roast" },
          { image: "m-ember-garden", caption: "Courtyard seating" }
        ] })
      ], { seoTitle: "Gallery \xB7 Kaapi Katte", seoDesc: "Photos from Kaapi Katte in Basavanagudi." }),
      page("visit", "Visit", "visit", [
        S("contact-split", { eyebrow: "Visit", title: "Come for a coffee, stay for a while", intro: "No reservations for tables. For the back room, send us a note.", address: "41 DVG Road, Basavanagudi\nBengaluru 560004", phone: EM_PHONE, whatsapp: "+91 99001 44721", email: "hello@kaapikatte.in", hours: [{ days: "Every day", time: "7:30 am \u2013 10:30 pm" }], showForm: true, formTitle: "Book the back room", formButton: "Send request", formSuccess: "Thanks. We will confirm your booking on WhatsApp.", showMap: false, map: null }, { id: "em-visit", anchor: "visit" }),
        S("faq-accordion", { eyebrow: "", title: "Good to know", intro: "", items: [
          { q: "Is there Wi-Fi?", a: "Yes, and plug points at the long table. We ask laptop users to give up window seats at lunch." },
          { q: "Are pets welcome?", a: "Dogs are welcome in the courtyard. We keep a water bowl by the door." },
          { q: "Do you deliver?", a: "Bakes and beans, yes, within 4 km. Coffee tastes best here." }
        ], tinted: true })
      ], { seoTitle: "Visit Kaapi Katte, Basavanagudi", seoDesc: "Find us at 41 DVG Road, Basavanagudi. Open every day from 7:30 am." }),
      notFound()
    ],
    collections: {
      services: coll("services", [
        { id: "em-svc-room", title: "Back room bookings", slug: "back-room", summary: "A private room for up to 20 people with coffee and bakes.", price: "from \u20B96,000", duration: "3 hours", image: "m-ember-interior", body: "Ideal for book clubs, birthdays and team mornings. Includes a filter coffee bar and a platter of bakes." },
        { id: "em-svc-class", title: "Home brewing class", slug: "home-brewing-class", summary: "Learn filter, pour-over and French press in one Saturday morning.", price: "\u20B91,800", duration: "2 hours", image: "m-ember-latte", body: "Six people per class. You take home 250 g of beans." }
      ]),
      blog: coll("blog", [
        { id: "em-post-1", title: "Meet our new single estate from Baba Budangiri", slug: "baba-budangiri", date: "2 Nov 2026", author: "Arjun", excerpt: "Washed arabica with notes of jaggery and orange.", image: "m-ember-beans", body: "Grown at 1,400 metres in shade, picked by hand and washed at the estate." },
        { id: "em-post-2", title: "Why we still brew decoction in brass", slug: "brass-filters", date: "18 Oct 2026", author: "Divya", excerpt: "Steel is easier to clean. Brass tastes better.", image: "m-ember-filter", body: "Brass holds heat longer, so the decoction drips slowly and evenly." }
      ])
    }
  };
  var midnight = {
    id: "midnight",
    name: "Midnight",
    business: "Loomwork Labs",
    industry: "Tech",
    style: ["dark", "big-type"],
    description: "A dark, confident theme for software studios, SaaS and agencies, with case studies, plans and a blog.",
    theme: themeFromPreset("midnight"),
    header: S("header-bar", { logo: "Loomwork Labs", logoMark: true, showCta: true, cta: B("Start a project", L.page("contact")), sticky: true }, { id: "mi-header" }),
    footer: S("footer-columns", { logo: "Loomwork Labs", tagline: "Product engineering studio in Pune. We build and scale web and mobile products.", address: "7th Floor, Panchshil Tech Park\nYerwada, Pune 411006", phone: "+91 20 4860 1150", email: "hello@loomwork.dev", social: [{ handle: "loomworklabs", url: "https://example.com/loomwork" }], copyright: "\xA9 2026 Loomwork Labs LLP", dark: false }, { id: "mi-footer" }),
    nav: {
      autoAdd: true,
      header: [N("Services", L.page("services")), N("Work", L.page("work")), N("Plans", L.page("plans")), N("Blog", L.page("blog")), N("Contact", L.page("contact"))],
      footer: [N("Studio", L.page("home")), N("Work", L.page("work"), 1), N("Plans", L.page("plans"), 1), N("Contact", L.page("contact"), 1), N("Read", L.page("blog")), N("Blog", L.page("blog"), 1)]
    },
    pages: [
      page("home", "Home", "", [
        S("hero-bigtype", { eyebrow: "Product engineering studio \xB7 Pune", title: "We build software that survives its first million users", body: "Loomwork is 22 engineers and designers. We take products from first sketch to app store, then stay to scale them.", button: B("Start a project", L.page("contact")), meta: [{ text: "Founded 2016" }, { text: "60+ products shipped" }, { text: "Clients in 9 countries" }], showImage: true, image: "m-mid-glow" }),
        S("features-grid", { eyebrow: "What we do", title: "One team from idea to scale", intro: "", columns: "3", style: "plain", showImages: false, items: [
          { icon: "code", title: "Web platforms", text: "React and Node apps built to handle sale-day traffic without a war room." },
          { icon: "mobile", title: "Mobile apps", text: "Android and iOS apps from one codebase, tuned for \u20B910,000 phones." },
          { icon: "sparkle", title: "AI features", text: "Search, support assistants and document reading inside the product you already have." },
          { icon: "shield", title: "Security reviews", text: "Threat models, penetration tests and fixes before your enterprise customers ask." },
          { icon: "chart", title: "Data and analytics", text: "Event tracking and dashboards your founders will actually open." },
          { icon: "layers", title: "Design systems", text: "Component libraries that keep five product teams looking like one." }
        ] }),
        S("testimonials-cards", { eyebrow: "", title: "From the people we build with", intro: "", showRating: false, items: [
          { quote: "Loomwork rebuilt our checkout in six weeks. Drop-off at payment fell from 31% to 12%.", name: "Nikhil B.", role: "CTO, D2C apparel brand", avatar: "m-mid-p1", rating: 5 },
          { quote: "They told us what not to build, which saved us four months and a lot of money.", name: "Aarti D.", role: "Founder, logistics startup", avatar: "m-mid-p2", rating: 5 },
          { quote: "Our app now opens in under two seconds on a three-year-old phone.", name: "Sameer K.", role: "Head of Product, fintech lender", avatar: "m-mid-p3", rating: 5 }
        ] }),
        S("news-list", { eyebrow: "Blog", title: "Notes from the build", intro: "", source: "blog", limit: 3, showImages: true, button: B("All posts", L.page("blog")) }),
        S("cta-banner", { title: "Have a product in mind?", text: "Tell us about it in a 30-minute call. No slides needed.", button: B("Book a call", L.page("contact")), secondary: { label: "", link: null }, tone: "primary" })
      ], { seoTitle: "Loomwork Labs \xB7 Product engineering studio in Pune", seoDesc: "Web, mobile and AI products built and scaled by a 22-person studio in Pune." }),
      page("services", "Services", "services", [
        S("hero-bigtype", { eyebrow: "Services", title: "What we can build with you", body: "Fixed-scope sprints or a dedicated team. Every engagement starts with a two-week discovery.", button: { label: "", link: null }, meta: [], showImage: false }),
        S("news-list", { eyebrow: "", title: "", intro: "", source: "services", limit: 6, showImages: true, button: { label: "", link: null } })
      ], { kind: "collection", collection: "services", seoTitle: "Services \xB7 Loomwork Labs", seoDesc: "Web platforms, mobile apps and AI features." }),
      page("service", "Service page", ":slug", [
        S("entry-detail", { backLabel: "All services", showImage: true, button: B("Talk to us", L.page("contact")) })
      ], { parent: "services", kind: "detail", collection: "services" }),
      page("work", "Work", "work", [
        S("hero-bigtype", { eyebrow: "Work", title: "Selected work", body: "Most of our clients ask us not to name them. The numbers are real.", button: { label: "", link: null }, meta: [], showImage: false }),
        S("gallery-grid", { eyebrow: "", title: "", intro: "", layout: "grid", images: [{ image: "m-mid-screen2", caption: "Checkout rebuild for a D2C fashion brand \xB7 payment drop-off down 61%" }, { image: "m-mid-screen", caption: "Store analytics for a 140-outlet retailer" }, { image: "m-mid-screen3", caption: "Loan app for a Tier-2 lender \xB7 4.6 rating" }] }),
        S("testimonial-quote", { quote: "They shipped faster than our in-house team and left the code better than they found it.", name: "Nikhil B.", role: "CTO, D2C apparel brand", avatar: "m-mid-p1", dark: false })
      ], { seoTitle: "Work \xB7 Loomwork Labs", seoDesc: "Case studies from web, mobile and AI projects." }),
      page("plans", "Plans", "plans", [
        S("pricing-plans", { eyebrow: "Plans", title: "Ways to work with us", intro: "All prices exclude GST. Every plan includes code ownership from day one.", plans: [
          { name: "Sprint", price: "\u20B94.5 lakh", period: "/ 4 weeks", desc: "A fixed-scope build or rescue.", features: "Two engineers and a designer\nWeekly demos\nTwo weeks of support after launch", featured: false, button: B("Plan a sprint", L.page("contact")) },
          { name: "Product team", price: "\u20B99.8 lakh", period: "/ month", desc: "A dedicated team for new products.", features: "Four engineers, a designer and a PM\nDaily stand-ups on your Slack\nCancel with 30 days\u2019 notice", featured: true, button: B("Talk to us", L.page("contact")) },
          { name: "Retainer", price: "\u20B92.2 lakh", period: "/ month", desc: "Keep a live product healthy.", features: "60 engineering hours\nOn-call for outages\nMonthly security patching", featured: false, button: B("Ask about retainers", L.page("contact")) }
        ] }),
        S("faq-accordion", { eyebrow: "", title: "Common questions", intro: "", items: [{ q: "Do you sign NDAs?", a: "Yes, before the first call if you like." }, { q: "Who owns the code?", a: "You do, from the first commit. It lives in your repository." }] })
      ], { seoTitle: "Plans \xB7 Loomwork Labs", seoDesc: "Sprints, dedicated teams and retainers." }),
      page("blog", "Blog", "blog", [
        S("hero-bigtype", { eyebrow: "Blog", title: "Notes from the build", body: "What we learn shipping products for Indian users.", button: { label: "", link: null }, meta: [], showImage: false }),
        S("news-list", { eyebrow: "", title: "", intro: "", source: "blog", limit: 9, showImages: true, button: { label: "", link: null } })
      ], { kind: "collection", collection: "blog", seoTitle: "Blog \xB7 Loomwork Labs", seoDesc: "Engineering notes from Loomwork Labs." }),
      page("post", "Blog post", ":slug", [S("entry-detail", { backLabel: "All posts", showImage: true, button: { label: "", link: null } })], { parent: "blog", kind: "detail", collection: "blog" }),
      page("contact", "Contact", "contact", [
        S("contact-split", { eyebrow: "Contact", title: "Tell us what you\u2019re building", intro: "We reply within one working day.", address: "7th Floor, Panchshil Tech Park\nYerwada, Pune 411006", phone: "+91 20 4860 1150", whatsapp: "", email: "hello@loomwork.dev", hours: [], showForm: true, formTitle: "Project enquiry", formButton: "Send enquiry", formSuccess: "Thanks. A founder will reply within one working day.", showMap: false, map: null }, { anchor: "contact" })
      ], { seoTitle: "Contact \xB7 Loomwork Labs", seoDesc: "Start a project with Loomwork Labs." }),
      notFound()
    ],
    collections: {
      services: coll("services", [
        { id: "mi-svc-web", title: "Web platforms", slug: "web-platforms", summary: "React and Node apps built for sale-day traffic.", price: "from \u20B94.5 lakh", duration: "4\u201312 weeks", image: "m-mid-screen", body: "We design, build and load-test web platforms, then hand over runbooks your team can follow." },
        { id: "mi-svc-mobile", title: "Mobile apps", slug: "mobile-apps", summary: "One codebase for Android and iOS, fast on budget phones.", price: "from \u20B96 lakh", duration: "8\u201316 weeks", image: "m-mid-screen3", body: "We profile on real devices from \u20B98,000 upwards before every release." },
        { id: "mi-svc-ai", title: "AI features", slug: "ai-features", summary: "Search, support assistants and document reading in your product.", price: "from \u20B93 lakh", duration: "3\u20136 weeks", image: "m-mid-glow", body: "We start with an evaluation set from your real data, so you know how well it works before launch." }
      ]),
      blog: coll("blog", [
        { id: "mi-post-1", title: "How we cut app start time by 60% on low-end Android", slug: "faster-app-start", date: "21 Oct 2026", author: "Sameer K.", excerpt: "Lazy modules, smaller images and one surprising font bug.", image: "m-mid-screen3", body: "Cold start went from 4.8 s to 1.9 s on a 2023 budget phone." },
        { id: "mi-post-2", title: "UPI Autopay: what we learned shipping it for a subscription app", slug: "upi-autopay-lessons", date: "6 Oct 2026", author: "Aarti D.", excerpt: "Mandates, retries and the notification you must not forget.", image: "m-mid-screen2", body: "Plan for mandate failures from day one. About 8% of first attempts fail." },
        { id: "mi-post-3", title: "Choosing a cross-platform framework in 2026", slug: "cross-platform-2026", date: "19 Sep 2026", author: "Nikhil B.", excerpt: "Our checklist after 30 mobile projects.", image: "m-mid-glow", body: "Pick the one your team can debug at 2 am." }
      ])
    }
  };
  var atelier = {
    id: "atelier",
    name: "Atelier",
    business: "Studio Aangan",
    industry: "Architecture",
    style: ["minimal", "editorial", "big-type"],
    description: "Quiet, image-first pages for architects, interior designers and design studios. A journal is included.",
    theme: themeFromPreset("atelier"),
    header: S("header-bar", { logo: "Studio Aangan", logoMark: false, showCta: false, cta: B("Contact", L.page("contact")), sticky: false }, { id: "at-header" }),
    footer: S("footer-simple", { logo: "Studio Aangan", tagline: "Architecture for hot climates.", copyright: "\xA9 2026 Studio Aangan Architects" }, { id: "at-footer" }),
    nav: {
      autoAdd: false,
      header: [N("Projects", L.page("projects")), N("Studio", L.page("studio")), N("Journal", L.page("journal")), N("Contact", L.page("contact"))],
      footer: [N("Projects", L.page("projects")), N("Studio", L.page("studio")), N("Journal", L.page("journal")), N("Contact", L.page("contact"))]
    },
    pages: [
      page("home", "Home", "", [
        S("hero-bigtype", { eyebrow: "", title: "Buildings that breathe with the Gujarat sun", body: "Studio Aangan designs homes, schools and workplaces that stay cool without leaning on air-conditioning.", button: B("View projects", L.page("projects")), meta: [{ text: "Ahmedabad" }, { text: "Since 2009" }, { text: "40+ buildings" }], showImage: true, image: "m-at-facade" }),
        S("gallery-grid", { eyebrow: "Selected projects", title: "", intro: "", layout: "mosaic", images: [
          { image: "m-at-court", caption: "Courtyard Flats, Vadodara \xB7 2023" },
          { image: "m-at-arches", caption: "Kutch Craft School, Bhuj \xB7 2024" },
          { image: "m-at-stairs", caption: "Step-well Office, Gandhinagar \xB7 2022" },
          { image: "m-at-interior", caption: "Sabarmati House, Ahmedabad \xB7 2025" },
          { image: "m-at-plan", caption: "Courtyard Flats, ground floor" }
        ] }),
        S("about-story", { eyebrow: "The studio", title: "A practice of twelve", body: "We are architects, a structural engineer and two master masons. We draw by hand first, test light and airflow in models, and build with local brick, lime and stone.", image: "m-at-plan", stats: [{ value: "40+", label: "buildings completed" }, { value: "12", label: "architects and makers" }, { value: "6\xB0C", label: "cooler indoors, on average" }], button: B("About the studio", L.page("studio")), imageRight: true, tinted: false }),
        S("testimonial-quote", { quote: "They spent our first meeting asking where the morning light falls on our plot. Two summers in, we rarely switch on the AC.", name: "Hetal and Kiran Shah", role: "Sabarmati House", avatar: "", dark: true }),
        S("news-list", { eyebrow: "Journal", title: "Writing from the studio", intro: "", source: "blog", limit: 3, showImages: true, button: B("Read the journal", L.page("journal")) })
      ], { seoTitle: "Studio Aangan \xB7 Architects in Ahmedabad", seoDesc: "Climate-first architecture for homes, schools and workplaces in Gujarat." }),
      page("projects", "Projects", "projects", [
        S("hero-bigtype", { eyebrow: "Projects", title: "Work, 2009 to now", body: "Homes, schools, offices and one step-well restoration.", button: { label: "", link: null }, meta: [], showImage: false }),
        S("gallery-grid", { eyebrow: "", title: "", intro: "", layout: "grid", images: [
          { image: "m-at-facade", caption: "Sabarmati House \xB7 Ahmedabad \xB7 Residential" },
          { image: "m-at-arches", caption: "Kutch Craft School \xB7 Bhuj \xB7 Institutional" },
          { image: "m-at-court", caption: "Courtyard Flats \xB7 Vadodara \xB7 Housing" },
          { image: "m-at-stairs", caption: "Step-well Office \xB7 Gandhinagar \xB7 Workplace" },
          { image: "m-at-interior", caption: "Jaali Apartment \xB7 Surat \xB7 Interiors" },
          { image: "m-at-plan", caption: "Lime House \xB7 Bhavnagar \xB7 Residential" }
        ] })
      ], { seoTitle: "Projects \xB7 Studio Aangan", seoDesc: "Homes, schools and workplaces by Studio Aangan." }),
      page("studio", "Studio", "studio", [
        S("about-story", { eyebrow: "Studio", title: "Climate first, then everything else", body: "Every project begins with a year of sun and wind data for the site. Plans, sections and materials follow from there.", image: "m-at-arches", stats: [], button: { label: "", link: null }, imageRight: false, tinted: false }),
        S("features-grid", { eyebrow: "Principles", title: "", intro: "", columns: "3", style: "plain", showImages: false, items: [
          { icon: "sun", title: "Shade before glass", text: "Deep verandahs, jaalis and courtyards do the work that machines usually do." },
          { icon: "hand", title: "Local hands", text: "Masons, carpenters and lime plasterers from within 200 km of each site." },
          { icon: "leaf", title: "Materials that age well", text: "Brick, lime and stone that look better in twenty years than on opening day." }
        ] }),
        S("features-grid", { eyebrow: "Principals", title: "", intro: "", columns: "2", style: "plain", showImages: true, items: [
          { image: "m-at-p1", title: "Ar. Devika Patel", meta: "Founding principal", text: "CEPT graduate. Fifteen years on climate-responsive housing." },
          { image: "m-at-p2", title: "Ar. Ishaan Trivedi", meta: "Principal", text: "Leads institutional work and our step-well restoration." }
        ], tinted: true })
      ], { seoTitle: "Studio \xB7 Studio Aangan", seoDesc: "Who we are and how we design." }),
      page("journal", "Journal", "journal", [
        S("hero-bigtype", { eyebrow: "Journal", title: "Notes on heat, light and lime", body: "", button: { label: "", link: null }, meta: [], showImage: false }),
        S("news-list", { eyebrow: "", title: "", intro: "", source: "blog", limit: 9, showImages: true, button: { label: "", link: null } })
      ], { kind: "collection", collection: "blog", seoTitle: "Journal \xB7 Studio Aangan", seoDesc: "Writing from Studio Aangan." }),
      page("post", "Journal entry", ":slug", [S("entry-detail", { backLabel: "Journal", showImage: true, button: { label: "", link: null } })], { parent: "journal", kind: "detail", collection: "blog" }),
      page("contact", "Contact", "contact", [
        S("contact-split", { eyebrow: "Contact", title: "Tell us about your site", intro: "We take on six new projects a year. Send us the location, size and what you hope to build.", address: "14 Law Garden Road, Ellisbridge\nAhmedabad 380006", phone: "+91 79 2640 3318", whatsapp: "", email: "studio@aangan.in", hours: [{ days: "Monday to Friday", time: "10:00 am \u2013 6:30 pm" }], showForm: true, formTitle: "New project", formButton: "Send", formSuccess: "Thank you. We reply to every enquiry within a week.", showMap: false, map: null }, { anchor: "contact" })
      ], { seoTitle: "Contact \xB7 Studio Aangan", seoDesc: "Start a project with Studio Aangan, Ahmedabad." }),
      notFound()
    ],
    collections: {
      services: coll("services", [
        { id: "at-svc-res", title: "Residential", slug: "residential", summary: "Homes and housing designed around courtyards and shade.", price: "Fee: 8\u201310% of build cost", duration: "18\u201330 months", image: "m-at-facade", body: "From a single house to 40-unit housing." },
        { id: "at-svc-int", title: "Interiors", slug: "interiors", summary: "Interiors in brick, lime and wood, built by local craftspeople.", price: "Fee: from \u20B92,500 / sq m", duration: "6\u201312 months", image: "m-at-interior", body: "We design furniture with the same makers who build it." }
      ]),
      blog: coll("blog", [
        { id: "at-post-1", title: "Why we keep returning to jaali walls", slug: "jaali-walls", date: "24 Oct 2026", author: "Devika Patel", excerpt: "A screen that shades, ventilates and keeps privacy, all at once.", image: "m-at-interior", body: "A well-sized jaali cuts direct sun by 70% and still lets the breeze through." },
        { id: "at-post-2", title: "Measuring a summer at Sabarmati House", slug: "measuring-a-summer", date: "3 Oct 2026", author: "Ishaan Trivedi", excerpt: "What 14 temperature sensors recorded from April to June.", image: "m-at-facade", body: "Indoor peaks stayed 6.2\xB0C below outdoor peaks across the season." },
        { id: "at-post-3", title: "Working with lime plaster in a modern home", slug: "lime-plaster", date: "11 Sep 2026", author: "Devika Patel", excerpt: "Slower to cure, kinder to live with.", image: "m-at-arches", body: "Lime breathes, so walls stay dry through the monsoon." }
      ])
    }
  };
  var VW_PHONE = "+91 94140 63327";
  var vow = {
    id: "vow",
    name: "Vow",
    business: "Marigold & Mehendi Weddings",
    industry: "Weddings",
    style: ["editorial"],
    description: "Romantic, photo-rich pages for wedding planners, photographers and venues, with packages and an enquiry form.",
    theme: themeFromPreset("vow"),
    header: S("header-centered", { topline: "Now booking winter 2026\u201327 weddings in Jaipur, Udaipur and Jodhpur", logo: "Marigold & Mehendi", sticky: false }, { id: "vw-header" }),
    footer: S("footer-columns", { logo: "Marigold & Mehendi", tagline: "Wedding planning and d\xE9cor across Rajasthan since 2014.", address: "C-22 Bhawani Singh Road, C-Scheme\nJaipur 302001", phone: VW_PHONE, email: "namaste@marigoldmehendi.in", social: [{ handle: "marigoldmehendi", url: "https://example.com/marigold" }], copyright: "\xA9 2026 Marigold & Mehendi Weddings", dark: true }, { id: "vw-footer" }),
    nav: {
      autoAdd: true,
      header: [N("Our story", L.page("story")), N("Packages", L.page("packages")), N("Weddings", L.page("weddings")), N("Enquire", L.page("enquire"))],
      footer: [N("Plan", L.page("packages")), N("Packages", L.page("packages"), 1), N("Enquire", L.page("enquire"), 1), N("See", L.page("weddings")), N("Weddings", L.page("weddings"), 1), N("Our story", L.page("story"), 1)]
    },
    pages: [
      page("home", "Home", "", [
        S("hero-slides", { slides: [
          { image: "m-vow-mandap", title: "Weddings that feel like your family", caption: "Planned in Jaipur, celebrated across Rajasthan." },
          { image: "m-vow-marigold", title: "From the first haldi to the vidaai", caption: "One team from start to finish, so no relative ends up managing the caterer." },
          { image: "m-vow-diyas", title: "Small, warm and entirely yours", caption: "Intimate weddings for 50 to 300 guests." }
        ], button: B("Plan your wedding", L.page("enquire")) }),
        S("features-grid", { eyebrow: "What we do", title: "Everything between \u201Cyes\u201D and the vidaai", intro: "", columns: "3", style: "cards", showImages: false, items: [
          { icon: "heart", title: "Planning", text: "Venues, vendors, budgets and a minute-by-minute plan for every function." },
          { icon: "flower", title: "D\xE9cor and florals", text: "Marigold, rajnigandha and mogra sourced fresh from Pushkar the morning of." },
          { icon: "camera", title: "Photos and films", text: "Two photographers and a filmmaker who know when to step back." }
        ] }),
        S("gallery-grid", { eyebrow: "", title: "Recent weddings", intro: "", layout: "strip", images: [{ image: "m-vow-arches", caption: "Haveli courtyard, Jaipur" }, { image: "m-vow-rings", caption: "Ring ceremony" }, { image: "m-vow-marigold", caption: "Haldi" }, { image: "m-vow-diyas", caption: "Sangeet night" }], tinted: true }),
        S("testimonials-cards", { eyebrow: "", title: "From our couples", intro: "", showRating: false, items: [
          { quote: "They handled 240 guests, two baraats and a surprise storm. We only heard about the storm afterwards.", name: "Aditi and Karan", role: "Jaipur, November 2025", avatar: "m-vow-p1", rating: 5 },
          { quote: "My mother cried at the d\xE9cor and my father cried at the bill being under budget.", name: "Ritika and Arjun", role: "Udaipur, February 2026", avatar: "m-vow-p2", rating: 5 }
        ] }),
        S("cta-banner", { title: "Tell us your date", text: "We plan 24 weddings a season so every couple gets a senior planner.", button: B("Check availability", L.page("enquire")), secondary: B("WhatsApp us", L.wa(VW_PHONE, "Hi, we are planning a wedding.")), tone: "primary" })
      ], { seoTitle: "Marigold & Mehendi \xB7 Wedding planners in Jaipur", seoDesc: "Wedding planning, d\xE9cor and photography across Rajasthan." }),
      page("story", "Our story", "our-story", [
        S("about-story", { eyebrow: "Our story", title: "Started at a cousin\u2019s wedding that nearly fell apart", body: "In 2014 Nandini Rathore stepped in when her cousin\u2019s planner vanished two days before the wedding. It went beautifully. Eighty weddings later, she still plans every one personally.", image: "m-vow-p1", stats: [{ value: "80+", label: "weddings planned" }, { value: "24", label: "weddings per season" }, { value: "9", label: "people on the team" }], button: { label: "", link: null }, imageRight: false, tinted: false }),
        S("testimonial-quote", { quote: "Nandini knew our families\u2019 names before we did.", name: "Aditi and Karan", role: "Jaipur, 2025", avatar: "m-vow-p2", dark: true })
      ], { seoTitle: "Our story \xB7 Marigold & Mehendi", seoDesc: "How a family wedding became a planning studio." }),
      page("packages", "Packages", "packages", [
        S("pricing-plans", { eyebrow: "Packages", title: "Choose how much you want us to carry", intro: "Prices are planning fees. Venue, catering and d\xE9cor are billed at cost.", plans: [
          { name: "Day-of coordination", price: "\u20B91.8 lakh", period: "", desc: "You plan; we run the day.", features: "Three planning calls\nFull team on the wedding day\nVendor timeline", featured: false, button: B("Enquire", L.page("enquire")) },
          { name: "Full planning", price: "\u20B96.5 lakh", period: "", desc: "Everything from venue to vidaai.", features: "Senior planner from day one\nVenue and vendor selection\nD\xE9cor design and styling\nGuest travel desk", featured: true, flag: "Most chosen", button: B("Enquire", L.page("enquire")) },
          { name: "Destination", price: "from \u20B912 lakh", period: "", desc: "Palaces, forts and lakeside venues.", features: "Everything in full planning\nRecce trips with you\nHospitality team for guests", featured: false, button: B("Enquire", L.page("enquire")) }
        ] }),
        S("faq-accordion", { eyebrow: "", title: "Questions couples ask", intro: "", items: [{ q: "How early should we book?", a: "Six to nine months for winter dates. Some dates go a year ahead." }, { q: "Do you travel outside Rajasthan?", a: "Yes, for full planning and destination packages." }], tinted: true })
      ], { seoTitle: "Wedding packages \xB7 Marigold & Mehendi", seoDesc: "Day-of coordination, full planning and destination weddings." }),
      page("weddings", "Weddings", "weddings", [
        S("gallery-grid", { eyebrow: "Weddings", title: "Recent celebrations", intro: "", layout: "mosaic", images: [{ image: "m-vow-mandap", caption: "Pheras at a haveli, Jaipur" }, { image: "m-vow-arches", caption: "Courtyard dinner" }, { image: "m-vow-diyas", caption: "Sangeet" }, { image: "m-vow-rings", caption: "Ring ceremony" }, { image: "m-vow-marigold", caption: "Haldi morning" }] }),
        S("cta-banner", { title: "Picture yours here", text: "Share your date and guest count.", button: B("Enquire", L.page("enquire")), secondary: { label: "", link: null }, tone: "soft" })
      ], { seoTitle: "Weddings \xB7 Marigold & Mehendi", seoDesc: "Photos from weddings we have planned." }),
      page("enquire", "Enquire", "enquire", [
        S("contact-split", { eyebrow: "Enquire", title: "Let\u2019s talk about your wedding", intro: "Share your date, city and guest count. Nandini replies personally within a day.", address: "C-22 Bhawani Singh Road, C-Scheme\nJaipur 302001", phone: VW_PHONE, whatsapp: VW_PHONE, email: "namaste@marigoldmehendi.in", hours: [{ days: "Monday to Saturday", time: "11:00 am \u2013 7:00 pm" }], showForm: true, formTitle: "Wedding enquiry", formButton: "Send enquiry", formSuccess: "Thank you. Nandini will call you within a day.", showMap: false, map: null }, { anchor: "enquire" })
      ], { seoTitle: "Enquire \xB7 Marigold & Mehendi", seoDesc: "Check availability for your wedding date." }),
      notFound()
    ],
    collections: {
      services: coll("services", [
        { id: "vw-svc-1", title: "Full planning", slug: "full-planning", summary: "Everything from venue to vidaai with a senior planner.", price: "\u20B96.5 lakh", duration: "6\u201312 months", image: "m-vow-mandap", body: "Our most popular package." },
        { id: "vw-svc-2", title: "D\xE9cor and florals", slug: "decor", summary: "Design and styling for every function.", price: "from \u20B93 lakh", duration: "", image: "m-vow-marigold", body: "Fresh flowers from Pushkar on the morning of each function." }
      ]),
      blog: coll("blog", [
        { id: "vw-post-1", title: "A haveli wedding for 240 guests in Jaipur", slug: "haveli-wedding-jaipur", date: "1 Oct 2026", author: "Nandini Rathore", excerpt: "Two baraats, one courtyard and a storm nobody noticed.", image: "m-vow-arches", body: "We moved the sangeet indoors in 40 minutes." },
        { id: "vw-post-2", title: "Planning a winter wedding in Udaipur", slug: "winter-wedding-udaipur", date: "12 Aug 2026", author: "Nandini Rathore", excerpt: "Dates, venues and what to pack for cold lake evenings.", image: "m-vow-diyas", body: "December evenings drop to 8\xB0C by the lake." }
      ])
    }
  };
  var ES_PHONE = "+91 90009 48210";
  var estate = {
    id: "estate",
    name: "Estate",
    business: "Vasudha Realty",
    industry: "Real estate",
    style: ["editorial"],
    description: "Polished pages for property agents and developers: featured listings, market insights and site-visit booking.",
    theme: themeFromPreset("estate"),
    header: S("header-bar", { logo: "Vasudha Realty", logoMark: true, showCta: true, cta: B("Book a site visit", L.page("contact")), sticky: true }, { id: "es-header" }),
    footer: S("footer-columns", { logo: "Vasudha Realty", tagline: "RERA-registered property advisors in Hyderabad since 2012.", address: "Plot 31, Road No. 2, Financial District\nGachibowli, Hyderabad 500032", phone: ES_PHONE, email: "homes@vasudharealty.in", social: [{ handle: "vasudharealty", url: "https://example.com/vasudha" }], copyright: "\xA9 2026 Vasudha Realty \xB7 TS RERA A02500002871", dark: true }, { id: "es-footer" }),
    nav: {
      autoAdd: true,
      header: [N("Properties", L.page("properties")), N("About", L.page("about")), N("Insights", L.page("insights")), N("Contact", L.page("contact"))],
      footer: [N("Buy and rent", L.page("properties")), N("Properties", L.page("properties"), 1), N("Book a visit", L.page("contact"), 1), N("Company", L.page("about")), N("About", L.page("about"), 1), N("Insights", L.page("insights"), 1)]
    },
    pages: [
      page("home", "Home", "", [
        S("hero-split", { eyebrow: "RERA-registered advisors \xB7 Hyderabad", title: "Find your home in Hyderabad\u2019s best neighbourhoods", body: "Verified listings in Gachibowli, Kondapur, Jubilee Hills and Kokapet, with site visits on your schedule and paperwork handled end to end.", primary: B("Browse properties", L.page("properties")), secondary: B("Talk to an advisor", L.wa(ES_PHONE, "Hi, I am looking for a property.")), image: "m-es-villa", note: "1,400+ families moved in since 2012", reverse: true }),
        S("gallery-grid", { eyebrow: "Featured", title: "Homes this week", intro: "", layout: "grid", images: [{ image: "m-es-villa", caption: "3 BHK villa \xB7 Kokapet \xB7 \u20B92.85 Cr" }, { image: "m-es-living", caption: "2 BHK apartment \xB7 Kondapur \xB7 \u20B91.12 Cr" }, { image: "m-es-facade", caption: "4 BHK duplex \xB7 Jubilee Hills \xB7 \u20B96.40 Cr" }] }),
        S("features-grid", { eyebrow: "Why Vasudha", title: "No surprises after you sign", intro: "", columns: "3", style: "cards", showImages: false, items: [
          { icon: "key", title: "Verified titles", text: "Every listing comes with a 30-year title search by our in-house lawyer." },
          { icon: "map", title: "Neighbourhood reports", text: "Schools, commute times and water supply, checked on the ground." },
          { icon: "fileText", title: "Loans arranged", text: "Pre-approved home loans from six banks, with paperwork done for you." }
        ], tinted: true }),
        S("testimonials-cards", { eyebrow: "", title: "Families who moved with us", intro: "", showRating: true, items: [
          { quote: "We saw eleven homes in two Saturdays and they never once pushed. The one we bought was the cheapest of the lot.", name: "Ravi Teja", role: "Bought in Kondapur, 2026", avatar: "m-es-p1", rating: 5 },
          { quote: "The title search caught a dispute the seller hadn\u2019t mentioned. That alone was worth it.", name: "Sneha Reddy", role: "Bought in Kokapet, 2025", avatar: "m-es-p2", rating: 5 }
        ] }),
        S("news-list", { eyebrow: "Insights", title: "Market notes", intro: "", source: "blog", limit: 3, showImages: true, button: B("All insights", L.page("insights")) }),
        S("cta-banner", { title: "Selling your property?", text: "Get a free valuation within 48 hours.", button: B("Request a valuation", L.page("contact")), secondary: { label: "", link: null }, tone: "invert" })
      ], { seoTitle: "Vasudha Realty \xB7 Property advisors in Hyderabad", seoDesc: "Verified homes in Gachibowli, Kondapur, Jubilee Hills and Kokapet." }),
      page("properties", "Properties", "properties", [
        S("hero-bigtype", { eyebrow: "Properties", title: "Verified homes, updated every Monday", body: "Call us for floor plans and site visits.", button: B("Book a site visit", L.page("contact")), meta: [], showImage: false }),
        S("gallery-grid", { eyebrow: "", title: "", intro: "", layout: "grid", images: [{ image: "m-es-villa", caption: "3 BHK villa \xB7 Kokapet \xB7 \u20B92.85 Cr" }, { image: "m-es-living", caption: "2 BHK \xB7 Kondapur \xB7 \u20B91.12 Cr" }, { image: "m-es-facade", caption: "4 BHK duplex \xB7 Jubilee Hills \xB7 \u20B96.40 Cr" }, { image: "m-es-skyline", caption: "Office floor \xB7 HITEC City \xB7 \u20B94.8 lakh / month" }] })
      ], { seoTitle: "Properties \xB7 Vasudha Realty", seoDesc: "Homes for sale and rent in Hyderabad." }),
      page("about", "About", "about", [
        S("about-story", { eyebrow: "About", title: "Advisors first, agents second", body: "We started in 2012 with one rule: never show a client a home we would not buy ourselves. Fourteen years later, half our clients come from referrals.", image: "m-es-skyline", stats: [{ value: "1,400+", label: "families moved" }, { value: "14", label: "years in Hyderabad" }, { value: "0", label: "title disputes after sale" }], button: { label: "", link: null }, imageRight: false, tinted: false }),
        S("testimonial-quote", { quote: "They talked us out of a flat we loved, and a year later we knew why.", name: "Sneha Reddy", role: "Kokapet", avatar: "m-es-p2", dark: true })
      ], { seoTitle: "About \xB7 Vasudha Realty", seoDesc: "RERA-registered advisors in Hyderabad since 2012." }),
      page("insights", "Insights", "insights", [
        S("hero-bigtype", { eyebrow: "Insights", title: "Hyderabad property, plainly explained", body: "", button: { label: "", link: null }, meta: [], showImage: false }),
        S("news-list", { eyebrow: "", title: "", intro: "", source: "blog", limit: 9, showImages: true, button: { label: "", link: null } })
      ], { kind: "collection", collection: "blog", seoTitle: "Insights \xB7 Vasudha Realty", seoDesc: "Market notes for Hyderabad home buyers." }),
      page("post", "Insight", ":slug", [S("entry-detail", { backLabel: "All insights", showImage: true, button: B("Talk to an advisor", L.page("contact")) })], { parent: "insights", kind: "detail", collection: "blog" }),
      page("contact", "Contact", "contact", [
        S("contact-split", { eyebrow: "Contact", title: "Book a site visit", intro: "Tell us the area and budget. An advisor calls you within two hours.", address: "Plot 31, Road No. 2, Financial District\nGachibowli, Hyderabad 500032", phone: ES_PHONE, whatsapp: ES_PHONE, email: "homes@vasudharealty.in", hours: [{ days: "Monday to Saturday", time: "9:30 am \u2013 7:30 pm" }, { days: "Sunday", time: "Site visits by appointment" }], showForm: true, formTitle: "Site visit request", formButton: "Request a call", formSuccess: "Thanks. An advisor will call you within two hours.", showMap: true, map: "m-es-map" }, { anchor: "contact" })
      ], { seoTitle: "Contact \xB7 Vasudha Realty", seoDesc: "Book a site visit in Hyderabad." }),
      notFound()
    ],
    collections: {
      services: coll("services", [
        { id: "es-svc-buy", title: "Buying", slug: "buying", summary: "Shortlists, site visits, title search and loans.", price: "1% advisory fee", duration: "", image: "m-es-villa", body: "We charge only when you buy." },
        { id: "es-svc-sell", title: "Selling", slug: "selling", summary: "Valuation, photography and verified buyers.", price: "1.5% on sale", duration: "", image: "m-es-facade", body: "Most homes sell within 60 days." }
      ]),
      blog: coll("blog", [
        { id: "es-post-1", title: "Kokapet or Tellapur: where should first-time buyers look in 2027?", slug: "kokapet-vs-tellapur", date: "27 Oct 2026", author: "Ravi Teja", excerpt: "Prices, commute and water supply compared.", image: "m-es-villa", body: "Tellapur is 18% cheaper per sq ft, but adds 15 minutes to a HITEC City commute." },
        { id: "es-post-2", title: "Understanding carpet area before you sign", slug: "carpet-area-explained", date: "9 Oct 2026", author: "Sneha Reddy", excerpt: "Carpet, built-up and super built-up, and why the difference costs lakhs.", image: "m-es-living", body: "RERA requires builders to quote carpet area. Always ask for it in writing." },
        { id: "es-post-3", title: "Rental yields in HITEC City, quarter by quarter", slug: "hitec-city-rental-yields", date: "20 Sep 2026", author: "Ravi Teja", excerpt: "Two-bedroom yields held at 3.4% this year.", image: "m-es-skyline", body: "Demand from new offices kept vacancies under 6%." }
      ])
    }
  };
  var TEMPLATES = [clinic, ember, midnight, atelier, vow, estate];
  var TEMPLATE_BY = Object.fromEntries(TEMPLATES.map((t) => [t.id, t]));
  var INDUSTRIES = ["Food & drink", "Tech", "Architecture", "Health", "Weddings", "Real estate"];


export { TEMPLATES, TEMPLATE_BY, INDUSTRIES, S, N, B, L, page, notFound, coll };
