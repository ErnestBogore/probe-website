export interface ToolOption {
  name: string;
  label: string;
  choices: string[];
  default?: string;
  type?: 'select' | 'radio';
}

export interface UseCase {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface HowToChooseStep {
  title: string;
  description: string;
}

export interface BusinessNameIdea {
  name: string;
  description: string;
}

export interface BusinessNameGeneratorConfig {
  slug: string;
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  inputLabel: string;
  inputPlaceholder: string;
  buttonText: string;
  maxLength: number;
  options: ToolOption[];
  systemPrompt: string;
  useCases: UseCase[];
  faqs: FAQ[];
  howToChoose: {
    intro: string;
    steps: HowToChooseStep[];
  };
  businessNameIdeas: BusinessNameIdea[];
}

export const businessNameGenerators: Record<string, BusinessNameGeneratorConfig> = {
  'aesthetic': {
    slug: 'aesthetic',
    name: 'Aesthetic Business Name Generator',
    title: 'Free AI Aesthetic Business Name Ideas Generator',
    description: 'Generate elegant, sophisticated names for med spas, clinics, and beauty practices.',
    metaDescription: 'Discover a captivating name for your aesthetic business with our AI-powered generator. Create elegant, sophisticated names for med spas, clinics, and beauty practices. Free and easy to use!',
    inputLabel: 'Describe your aesthetic business...',
    inputPlaceholder: 'e.g. A luxury med spa offering Botox, laser treatments, and skincare in Beverly Hills',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Elegant & Sophisticated', 'Modern & Minimal', 'Clinical & Professional', 'Luxurious & Premium'],
        default: 'Elegant & Sophisticated',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the aesthetic, beauty, and wellness industry. Your role is to generate sophisticated, elegant business names that evoke beauty, refinement, and visual appeal for aesthetic clinics, med spas, skincare practices, beauty treatments, and wellness centers.

AESTHETIC INDUSTRY CONTEXT:

The aesthetic industry encompasses:
- Medical aesthetic clinics (Botox, fillers, laser treatments)
- Med spas and wellness centers
- Skincare and dermatology practices
- Beauty and cosmetic treatment centers
- Anti-aging and rejuvenation services
- Body contouring and sculpting businesses
- Holistic beauty and wellness retreats

NAME CHARACTERISTICS FOR AESTHETIC BUSINESSES:

1. **Elegance and Sophistication**
   - Names should convey luxury, refinement, and high-end services
   - Evoke feelings of beauty, transformation, and self-care
   - Use sophisticated vocabulary that appeals to discerning clients
   - Examples: Radiance, Lumière, Ethereal, Pristine

2. **Visual and Sensory Appeal**
   - Names that create mental imagery of beauty and aesthetics
   - Words associated with light, glow, clarity, and perfection
   - Sensory language that suggests transformation
   - Examples: Glow, Illuminate, Sculpt, Refine

3. **Trust and Professionalism**
   - Medical aesthetic businesses need credibility markers
   - Balance between clinical authority and approachable beauty
   - Names that suggest expertise without being cold
   - Examples: Institute, Clinic, Studio, Atelier

4. **Memorability and Uniqueness**
   - Stand out in the competitive aesthetic market
   - Easy to pronounce and spell
   - Distinctive without being confusing
   - Suitable for high-end branding

NAMING PATTERNS FOR AESTHETIC BUSINESSES:

**Pattern 1: Elegance + Service Indicator**
- [Elegant Word] + [Clinic/Studio/Spa]
- Examples: Radiance Clinic, Lumière Studio, Pristine Aesthetics

**Pattern 2: Transformation Words**
- Words suggesting change, improvement, enhancement
- Examples: Renew, Revive, Rejuvenate, Transform, Elevate

**Pattern 3: Light and Glow Imagery**
- Words associated with luminosity and radiance
- Examples: Glow, Luminous, Radiant, Illuminate, Brighten

**Pattern 4: Nature-Inspired Elegance**
- Refined natural imagery suggesting beauty
- Examples: Blossom, Bloom, Flora, Serene, Harmony

**Pattern 5: Greek/Latin Roots**
- Classic linguistic elements suggesting sophistication
- Examples: Aesthé, Derma, Vita, Belle, Nova

**Pattern 6: Compound Elegance**
- Two refined words combined
- Examples: PureGlow, SkinHarmony, BeautyEssence

WORD CATEGORIES TO DRAW FROM:

**Beauty/Aesthetics:**
Aesthetic, Beauty, Allure, Charm, Grace, Elegance, Glamour, Radiance, Splendor

**Light/Glow:**
Luminous, Radiant, Glow, Shine, Illuminate, Brighten, Gleam, Lustrous, Incandescent

**Transformation:**
Renew, Revive, Rejuvenate, Transform, Restore, Enhance, Refine, Polish, Perfect

**Serenity/Wellness:**
Serene, Tranquil, Harmony, Balance, Zen, Pure, Clean, Fresh, Natural

**Sophistication:**
Elite, Luxe, Premier, Prestige, Signature, Atelier, Maison, Boutique

**Clinical/Professional:**
Clinic, Institute, Center, Studio, Practice, Lab, Suite, Med Spa

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for an aesthetic business

Generate names that are:
- 1-3 words maximum
- Easy to spell and pronounce
- Sophisticated without being pretentious
- Appropriate for high-end marketing materials
- Versatile across different aesthetic services`,
    useCases: [
      {
        title: 'Medical Aesthetic Clinic Launch',
        description: 'Dermatologists, plastic surgeons, and aesthetic practitioners launching new clinics use the Aesthetic Business Name Generator to find names that balance medical credibility with beauty appeal. By inputting their specialty focus—whether Botox, laser treatments, or anti-aging services—the tool generates sophisticated names that attract high-end clientele while maintaining professional authority.',
      },
      {
        title: 'Med Spa Rebranding',
        description: 'Established med spas looking to elevate their brand positioning use the generator to explore fresh naming options. Whether transitioning from a general spa to a medical aesthetic focus or simply refreshing their image, the tool provides names that communicate luxury, expertise, and transformation—essential for competing in the premium aesthetic market.',
      },
      {
        title: 'Skincare Practice Differentiation',
        description: 'Estheticians and skincare professionals use the Aesthetic Business Name Generator to create distinctive brand identities that set them apart from competitors. By generating names that reflect their unique treatment philosophy—whether organic, clinical, or holistic—they establish memorable brands that resonate with their target clientele.',
      },
    ],
    faqs: [
      {
        question: 'What makes a good aesthetic business name?',
        answer: 'A good aesthetic business name embodies elegance, sophistication, and allure. It should be memorable and descriptive, conveying the type of services you provide—whether skincare, beauty treatments, or wellness services. The name should be easy to recall and communicate the transformative experience clients can expect.',
      },
      {
        question: 'Should my aesthetic business name include "clinic" or "spa"?',
        answer: 'Including descriptors like "clinic," "spa," "studio," or "aesthetics" can help clarify your business type immediately. "Clinic" suggests medical-grade treatments, while "spa" implies relaxation and pampering. Choose based on your service focus and target market positioning.',
      },
      {
        question: 'How important is the name for branding my aesthetic business?',
        answer: 'Your business name is foundational to your brand identity. In the aesthetic industry, where clients seek transformation and luxury, your name creates the first impression of the experience they\'ll receive. A sophisticated name can justify premium pricing and attract discerning clientele.',
      },
      {
        question: 'Should I use my own name in my aesthetic business?',
        answer: 'Using your name (e.g., "Dr. Smith Aesthetics") can build personal brand recognition and convey expertise, especially for practitioners with established reputations. However, it may limit future sale opportunities. Non-personal names offer more flexibility for growth and eventual sale.',
      },
      {
        question: 'How do I ensure my aesthetic business name is available?',
        answer: 'Check availability across multiple channels: business name registrations in your state, domain names (.com preferred), social media handles, and trademark databases. The aesthetic industry is competitive, so having consistent branding across all platforms is crucial for credibility.',
      },
      {
        question: 'What words work well in aesthetic business names?',
        answer: 'Effective words include those suggesting light and radiance (Glow, Luminous, Radiant), transformation (Renew, Revive, Enhance), elegance (Luxe, Elite, Pristine), and beauty (Allure, Grace, Bloom). Combining these with professional indicators creates balanced, appealing names.',
      },
      {
        question: 'Should my name reflect specific treatments I offer?',
        answer: 'Names that are too specific (e.g., "Botox Beautique") can limit future service expansion. Choose a name broad enough to encompass potential growth while still communicating your aesthetic focus. "Radiance Aesthetics" works for various treatments better than "Filler Factory."',
      },
      {
        question: 'How do I appeal to my target demographic through naming?',
        answer: 'Aesthetic clients typically seek sophistication, results, and a premium experience. Names should feel elevated without being intimidating. Test names with your target demographic—typically women 25-65 with disposable income seeking self-improvement and confidence enhancement.',
      },
      {
        question: 'Can I use foreign words in my aesthetic business name?',
        answer: 'French and Italian words (Belle, Maison, Bella, Via) can add elegance and sophistication. However, ensure they\'re easy to pronounce for your local market and don\'t create confusion about your business type or location.',
      },
      {
        question: 'What mistakes should I avoid when naming my aesthetic business?',
        answer: 'Avoid: overly clinical names that feel cold, trendy spellings that may date quickly, names too similar to competitors, difficult-to-spell words, names that limit service expansion, and anything that could be mispronounced or misunderstood.',
      },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your aesthetic business is a pivotal step in creating a captivating brand that resonates with clients seeking beauty, transformation, and self-improvement. Your business name will appear on everything from your storefront signage to your website, social media profiles, marketing materials, and client referrals. It\'s the first touchpoint potential clients have with your brand, making it essential to select a name that embodies the elegance, professionalism, and transformative experience your aesthetic business provides.',
      steps: [
        {
          title: 'Define Your Brand Positioning and Target Market',
          description: 'Before generating name ideas, clarify your aesthetic business\'s unique positioning. Consider what specific aesthetic services you will offer (medical-grade treatments, relaxation spa services, skincare, or a combination), who your ideal client is (age range, income level, aesthetic goals), what emotions you want your brand to evoke (luxury, trust, transformation, serenity, confidence), what price point and experience level you\'re targeting (premium, mid-range, accessible luxury), and what makes your practice different from competitors in your area. Your answers will guide whether you need a name that sounds clinical and authoritative, spa-like and relaxing, or edgy and modern.',
        },
        {
          title: 'Embody Elegance and Allure',
          description: 'The aesthetic industry is fundamentally about beauty, enhancement, and transformation. Your business name should reflect these qualities through sophisticated word choices that create immediate positive associations. Consider names that evoke visual beauty and refinement, suggest transformation and enhancement, create feelings of luxury and exclusivity, sound pleasant when spoken aloud, and look elegant in written form. Words associated with light (Luminous, Radiant, Glow), transformation (Renew, Revive, Elevate), and sophistication (Luxe, Elite, Atelier) consistently perform well in aesthetic business naming.',
        },
        {
          title: 'Balance Beauty with Credibility',
          description: 'For medical aesthetic businesses offering treatments like injectables, laser procedures, or body contouring, your name must balance beauty appeal with professional credibility. Clients need to feel confident in your expertise while being attracted to the aesthetic experience you provide. Consider including professional indicators like "Clinic," "Institute," "Medical Aesthetics," or "MD" for medical practices. However, avoid names that sound too clinical or hospital-like, which can feel cold and uninviting. The goal is a name that says "expert care" and "beautiful results" simultaneously.',
        },
        {
          title: 'Ensure Memorability and Distinctiveness',
          description: 'In a competitive aesthetic market, your name must stand out while remaining easy to remember. Test potential names against these criteria: Can it be easily spelled after hearing it once? Is it distinct from competitors in your area? Will it be remembered after a single exposure? Does it work well in word-of-mouth recommendations? Is it concise enough to fit on signage and marketing materials? Avoid names that are too similar to established aesthetic brands or that could be confused with other businesses.',
        },
        {
          title: 'Verify Availability for Branding',
          description: 'Once you have promising name candidates, conduct thorough availability checks. Secure the .com domain version if possible, or consider .co, .clinic, or location-specific domains. Check Instagram, Facebook, and other platforms where aesthetic businesses thrive. Verify the name isn\'t already registered in your state. Ensure no trademark conflicts exist in your service category. Confirm no nearby competitors have similar names. In today\'s digital age, having consistent branding across all channels is crucial for building credibility.',
        },
        {
          title: 'Test with Your Target Audience',
          description: 'Before finalizing, test your top name choices with people who represent your target clientele. Ask them what type of business the name suggests, whether it feels premium, accessible, or somewhere in between, if they would feel comfortable recommending this business to friends, what services they imagine this business offers, and whether the name feels trustworthy for aesthetic treatments. Their feedback can reveal perceptions you might have missed and help you select a name that resonates with your actual market.',
        },
        {
          title: 'Consider Long-Term Growth',
          description: 'Choose a name that accommodates future expansion. While you might start with facial treatments, you may later add body contouring, wellness services, or additional locations. Names that are too specific (like "Face Forward Fillers") can limit perceived expertise in new service areas. The ideal aesthetic business name is timeless, versatile, and positions your brand for growth while perfectly capturing the essence of the transformative beauty experience you provide today.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'HarmonyHaven', description: 'A name suggesting a place where aesthetics are in perfect harmony—ideal for med spas offering both relaxation and results-driven treatments.' },
      { name: 'EleganceEmpire', description: 'Implies a grand, comprehensive aesthetic-focused business with authority in the beauty industry.' },
      { name: 'LuminousLegacy', description: 'Suggests enduring beauty and radiant results that stand the test of time.' },
      { name: 'SereneSculpt', description: 'Combines tranquility with transformation—perfect for body contouring and facial sculpting services.' },
      { name: 'RadianceRetreat', description: 'Evokes a sanctuary where clients achieve glowing, beautiful results in a peaceful environment.' },
      { name: 'PristineAesthetics', description: 'Communicates flawless, clean, and perfect results with professional sophistication.' },
      { name: 'BloomBeauty', description: 'Suggests natural flourishing and the revealing of inner beauty—ideal for organic or holistic approaches.' },
      { name: 'LuxeGlow', description: 'Combines luxury positioning with the promise of radiant, glowing skin.' },
      { name: 'VelvetVisage', description: 'Evokes smooth, soft, touchable skin—perfect for skincare and facial treatment specialists.' },
      { name: 'EtherealAesthetics', description: 'Suggests delicate, otherworldly beauty—appealing for high-end, transformative treatments.' },
      { name: 'RefinedRadiance', description: 'Communicates both sophistication and glowing results for discerning clientele.' },
      { name: 'AuraAtelier', description: 'Positions the business as an artisan studio creating beautiful auras and energies.' },
      { name: 'GlowGrace', description: 'Combines radiance with elegance—simple, memorable, and universally appealing.' },
      { name: 'PurePolish', description: 'Suggests clean, refined, and perfected aesthetic results.' },
      { name: 'EnchantedElegance', description: 'Evokes magical transformation and sophisticated beauty.' },
      { name: 'SilkSkinStudio', description: 'Directly communicates smooth, luxurious skin results in a boutique setting.' },
      { name: 'NovaAesthetics', description: 'Suggests new beginnings and stellar, star-quality results.' },
      { name: 'TranscendBeauty', description: 'Implies rising above ordinary beauty to achieve extraordinary results.' },
      { name: 'LumièreLux', description: 'French-inspired elegance suggesting light, luxury, and sophisticated beauty.' },
      { name: 'ZenithSkin', description: 'Communicates reaching the peak of skincare perfection and optimal results.' },
    ],
  },
  'agency': {
    slug: 'agency',
    name: 'Agency Business Name Generator',
    title: 'Free AI Agency Business Name Ideas Generator',
    description: 'Generate professional, trustworthy names for marketing, creative, digital, and consulting agencies.',
    metaDescription: 'Start your agency with a brilliant name from our free AI generator. Create professional, trustworthy names for marketing, creative, digital, and consulting agencies. Effortless and tailor-made!',
    inputLabel: 'Describe your agency...',
    inputPlaceholder: 'e.g. A digital marketing agency specializing in SEO and content marketing for tech startups',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Professional & Trustworthy', 'Modern & Innovative', 'Creative & Bold', 'Strategic & Results-Focused'],
        default: 'Professional & Trustworthy',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in professional service agencies across marketing, creative, digital, PR, advertising, and consulting sectors. Your role is to generate impactful, professional business names that convey expertise, trustworthiness, and industry leadership.

AGENCY INDUSTRY CONTEXT:

The agency sector encompasses:
- Marketing and advertising agencies
- Digital marketing and SEO agencies
- Creative and design agencies
- Public relations and communications firms
- Consulting and strategy agencies
- Social media and content agencies
- Branding and identity agencies
- Web development and tech agencies
- Recruitment and staffing agencies
- Real estate and travel agencies

NAME CHARACTERISTICS FOR AGENCIES:

1. **Professional and Trustworthy**
   - Names should convey reliability and expertise
   - Inspire confidence in potential clients
   - Sound established and capable
   - Examples: Pinnacle, Sterling, Keystone, Apex

2. **Memorable and Impactful**
   - Easy to recall in a crowded market
   - Makes a strong first impression
   - Works well in pitches and presentations
   - Examples: Spark, Elevate, Catalyst, Momentum

3. **Reflective of Agency Focus**
   - Hints at the type of services offered
   - Communicates industry expertise
   - Appeals to target client base
   - Examples: Pixel (digital), Narrative (content), Pulse (PR)

4. **Versatile and Scalable**
   - Works as a small startup or large firm
   - Allows for service expansion
   - International appeal if growth is planned
   - Suitable for partnerships and acquisitions

OUTPUT REQUIREMENTS:

For each agency name generated, provide:
- The business name
- A brief explanation of why it works for an agency

Generate names that are:
- 1-3 words maximum
- Professional without being corporate-boring
- Memorable in competitive pitches
- Appropriate for B2B marketing
- Versatile across agency service types`,
    useCases: [
      {
        title: 'Marketing Agency Startup',
        description: 'Entrepreneurs launching marketing, digital, or advertising agencies use the Agency Business Name Generator to find names that immediately convey expertise and professionalism. By inputting their service focus—whether SEO, social media, or full-service marketing—the tool generates impactful names that help win client trust from the first introduction.',
      },
      {
        title: 'Agency Merger or Rebrand',
        description: 'When agencies merge or undergo strategic rebranding, finding a name that represents the combined entity\'s capabilities is challenging. The generator provides fresh naming options that unify different service offerings under a cohesive, professional brand that appeals to existing and prospective clients alike.',
      },
      {
        title: 'Freelancer to Agency Transition',
        description: 'Freelancers scaling into full-service agencies use the generator to establish names that position them as established firms rather than individual practitioners. A professional agency name helps justify higher rates, attract larger clients, and build a team-based brand identity.',
      },
    ],
    faqs: [
      { question: 'What makes a good agency name?', answer: 'A good agency name is professional and trustworthy, memorable and impactful, and reflective of your agency\'s focus. It should convey expertise while being distinctive enough to stand out in a competitive market.' },
      { question: 'Should my agency name include words like "agency" or "group"?', answer: 'Including descriptors like "Agency," "Group," "Partners," or "Collective" clarifies your business type. However, many successful agencies use standalone names (like Ogilvy or BBDO). Choose based on whether clarity or distinctiveness is more important for your positioning.' },
      { question: 'How important is the agency name for winning clients?', answer: 'Your agency name contributes to first impressions in pitches, RFPs, and referrals. A professional, memorable name suggests competence and stability. However, ultimately your work portfolio and reputation matter most—the name opens doors, but performance keeps clients.' },
      { question: 'Should I use my own name for my agency?', answer: 'Naming agencies after founders (e.g., "Johnson & Associates") can build personal brand equity but may limit scalability and exit opportunities. It works well for boutique consultancies but may feel limiting if you plan to grow a large team or eventually sell.' },
      { question: 'How do I make my agency name memorable?', answer: 'Use words with strong phonetic qualities (sharp consonants, clear vowels), keep it short (1-3 words), ensure it\'s easy to spell and pronounce, and consider alliteration or rhythmic patterns. Test it by saying it aloud in a pitch scenario.' },
      { question: 'What naming styles work for different agency types?', answer: 'Creative agencies can use more playful, abstract names. Corporate consultancies benefit from traditional, authoritative names. Digital agencies often use modern, tech-forward naming. Match your name style to your target clients\' expectations.' },
      { question: 'Should my agency name describe what we do?', answer: 'Descriptive names (like "Social Media Solutions") provide immediate clarity but can limit future service expansion. Abstract names (like "Catalyst") offer flexibility but require more brand building to communicate your services.' },
      { question: 'How do I check if my agency name is available?', answer: 'Verify domain availability (.com preferred for agencies), check social media handles, search business registrations in your state, review trademark databases, and search for existing agencies with similar names in your service area.' },
      { question: 'Can I change my agency name later?', answer: 'Yes, but it\'s costly and complex—requiring new collateral, updated contracts, client communications, and potential SEO impact. Choose carefully initially to avoid the need for rebranding.' },
      { question: 'What agency naming mistakes should I avoid?', answer: 'Avoid: names too similar to established agencies, difficult spellings or pronunciations, overly generic names (like "Marketing Solutions Inc."), names that limit service expansion, and trendy names that may date quickly.' },
    ],
    howToChoose: {
      intro: 'Selecting the right name for your agency business is essential in establishing a strong brand identity that attracts clients, conveys expertise, and sets you apart in a competitive professional services market. Your agency name will be used in pitches, proposals, contracts, and referrals—it needs to inspire confidence while being memorable enough to stick in clients\' minds.',
      steps: [
        { title: 'Define Your Agency\'s Positioning and Services', description: 'Before brainstorming names, clarify your agency\'s strategic positioning. Consider what specific services you offer (full-service marketing, specialized digital, creative only, consulting), who your ideal clients are (startups, enterprises, specific industries), what your competitive differentiation is (innovation, results, relationships, expertise), what price point you target (premium boutique, competitive mid-market, volume-based), and what geographic scope you serve (local, national, international). Your positioning directly influences naming—a boutique creative agency serving luxury brands needs a different name than a results-driven digital agency targeting tech startups.' },
        { title: 'Convey Professionalism and Trustworthiness', description: 'Agencies operate on trust. Clients invest significant budgets based on confidence in your capabilities. Your name should immediately suggest reliability and stability (not fly-by-night), expertise and competence, professional standards and ethics, and a successful track record. Words suggesting excellence (Premier, Apex, Summit), partnership (Alliance, Associates, Collective), and results (Impact, Growth, Catalyst) help establish professional credibility.' },
        { title: 'Make It Memorable and Impactful', description: 'In competitive pitches, your name needs to stick. Consider phonetic memorability (does it sound good when spoken?), visual distinctiveness (does it look professional on a business card?), pitch presence (does it command attention in a presentation?), and referral ease (can clients easily recommend you by name?). Keep names short (1-3 words), avoid difficult spellings, and test pronunciation with diverse audiences. Names with rhythmic qualities or alliteration often have stronger recall.' },
        { title: 'Reflect Your Agency\'s Focus and Personality', description: 'Your name should hint at what makes your agency special. For creative/design focus, use names suggesting imagination, artistry, or visual thinking. For digital/tech focus, use modern, forward-thinking names with innovation connotations. For strategy/consulting focus, use names suggesting insight, planning, and expertise. For results/performance focus, use action-oriented names emphasizing outcomes. However, avoid names so specific they limit future service expansion.' },
        { title: 'Consider Versatility and Scalability', description: 'Choose a name that works as you grow. Consider whether it sounds like a real agency (not just a freelancer), whether you can add offerings without the name feeling limiting, whether it works in new markets without confusion, whether it allows for mergers or acquisitions, and whether it has value independent of the founders.' },
        { title: 'Verify Complete Availability', description: 'Before falling in love with a name, conduct thorough checks. Verify domain name availability (.com is strongly preferred for agencies), secure social media handles on LinkedIn, Twitter, Instagram, and relevant platforms, check business registration for conflicts in your state/country, search trademark databases (USPTO and international if relevant), and ensure no direct competitors have similar names. Consistent naming across all channels builds credibility.' },
        { title: 'Test with Stakeholders', description: 'Before finalizing, gather feedback from team members (do they feel proud representing this name?), potential clients (does it inspire confidence and interest?), industry peers (does it fit professional standards while standing out?), and family/friends (can they spell and pronounce it after hearing it once?). Real-world testing reveals issues that internal brainstorming might miss.' },
      ],
    },
    businessNameIdeas: [
      { name: 'ActionAxis', description: 'Suggests an agency that makes things happen—positioned at the center of activity and results.' },
      { name: 'DynamicDrive', description: 'Implies an agency full of energy and forward momentum that drives client success.' },
      { name: 'PrimePulse', description: 'Suggests being at the heart of the action with premium, vital service delivery.' },
      { name: 'StrategySphere', description: 'Positions the agency as offering comprehensive, 360-degree strategic thinking.' },
      { name: 'CatalystCollective', description: 'Implies a group that sparks transformation and accelerates client growth.' },
      { name: 'ElevatePartners', description: 'Communicates lifting clients to higher levels through collaborative partnership.' },
      { name: 'ApexAgency', description: 'Suggests reaching the pinnacle of performance and results.' },
      { name: 'SparkStrategy', description: 'Combines creative ignition with strategic thinking—ideal for marketing agencies.' },
      { name: 'MomentumMedia', description: 'Implies continuous forward progress in media and marketing efforts.' },
      { name: 'VanguardVentures', description: 'Positions the agency at the forefront of industry innovation and leadership.' },
      { name: 'BrightBridge', description: 'Suggests connecting clients to brilliant solutions and opportunities.' },
      { name: 'ImpactInnovate', description: 'Emphasizes both measurable results and fresh thinking.' },
      { name: 'NexusNetwork', description: 'Implies a central connection point for business growth and relationships.' },
      { name: 'PropelPartners', description: 'Communicates forward thrust and collaborative client relationships.' },
      { name: 'VertexVision', description: 'Suggests peak positioning and forward-looking strategic perspective.' },
      { name: 'AmplifyAgency', description: 'Directly communicates the agency\'s purpose: making clients\' presence larger.' },
      { name: 'FusionForce', description: 'Implies powerful combination of diverse skills and integrated solutions.' },
      { name: 'SummitStrategies', description: 'Positions the agency as helping clients reach their peak performance.' },
      { name: 'LaunchLab', description: 'Perfect for agencies focused on new product introductions and campaign launches.' },
      { name: 'ThriveTeam', description: 'Emphasizes client success and collaborative, team-based approach.' },
    ],
  },
  'app': {
    slug: 'app',
    name: 'App Business Name Generator',
    title: 'Free AI App Business Name Ideas Generator',
    description: 'Generate clear, memorable names for mobile apps, software products, and tech startups.',
    metaDescription: 'Create the perfect name for your app with our AI-powered generator. Generate clear, memorable app names that stand out in app stores and resonate with users. Free and easy to use!',
    inputLabel: 'Describe your app or software...',
    inputPlaceholder: 'e.g. A productivity app that helps remote teams collaborate and track project progress',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Short & Memorable', 'Modern & Tech-Forward', 'Descriptive & Clear', 'Creative & Unique'],
        default: 'Short & Memorable',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in technology, mobile applications, software products, and digital startups. Your role is to generate clear, memorable business names that convey innovation, functionality, and modern appeal for app development companies and software products.

APP BUSINESS CONTEXT:

The app and software industry encompasses:
- Mobile app development companies
- SaaS (Software as a Service) products
- Consumer mobile applications
- B2B software solutions
- Gaming and entertainment apps
- Productivity and utility apps
- Fintech and health tech apps
- AI and machine learning products

NAME CHARACTERISTICS FOR APP BUSINESSES:

1. **Clear and Descriptive**
   - Immediately communicates what the app does
   - Easy for users to understand the value proposition
   - Works in app store searches
   - Examples: Slack (workplace communication), Zoom (video meetings)

2. **Short and Memorable**
   - Easy to type and search
   - Works as an app icon label
   - Shareable in conversation
   - Examples: Uber, Lyft, Snap, Mint

3. **Unique and Brandable**
   - Stands out in crowded app stores
   - Trademarkable and protectable
   - Domain and handle available
   - Examples: Spotify, Figma, Notion

4. **Modern and Tech-Forward**
   - Suggests innovation and digital capability
   - Appeals to tech-savvy users
   - Doesn\'t feel dated
   - Examples: Stripe, Airtable, Canva

OUTPUT REQUIREMENTS:

For each app business name generated, provide:
- The business name
- A brief explanation of why it works for an app

Generate names that are:
- Ideally 1-2 words (8 characters or fewer preferred)
- Easy to spell after hearing once
- Distinctive in app store searches
- Appropriate for pitch decks and investor meetings
- Versatile if the app evolves or expands features`,
    useCases: [
      {
        title: 'App Startup Launch',
        description: 'Entrepreneurs developing new mobile apps or software products use the App Business Name Generator to find names that work perfectly in app stores—short, memorable, and searchable. By inputting the app\'s core function and target audience, the tool generates names optimized for discoverability and user adoption.',
      },
      {
        title: 'Software Development Company Naming',
        description: 'Software development firms and app studios use the generator to create company names that convey technical expertise and innovation. A strong company name helps attract both clients seeking development services and talented developers looking for exciting places to work.',
      },
      {
        title: 'SaaS Product Naming',
        description: 'SaaS founders use the generator to name their software products distinctively. In crowded software categories, a memorable name helps differentiate the product, supports word-of-mouth growth, and creates a foundation for strong brand equity as the company scales.',
      },
    ],
    faqs: [
      { question: 'What makes a good app name?', answer: 'A good app name is clear and descriptive of function, short and memorable (ideally under 8 characters), unique and brandable, and easy to spell and pronounce. It should work well in app store searches and look good as an app icon.' },
      { question: 'How long should an app name be?', answer: 'Shorter is generally better—aim for 8 characters or fewer to display fully under app icons. One-word names (like Uber, Slack, Zoom) are ideal, but two-word compounds (Snapchat, Dropbox) also work well.' },
      { question: 'Should my app name describe what it does?', answer: 'Some clarity helps, but it doesn\'t need to be literal. "Zoom" suggests speed/connection without explicitly saying "video calls." Names that hint at benefits (Calm, Focus, Lift) often work better than purely descriptive names.' },
      { question: 'How do I ensure my app name is available?', answer: 'Check the App Store and Google Play for existing apps, search domain availability, verify social media handles, review trademark databases, and search for existing companies with similar names in your category.' },
      { question: 'Can I use invented words for my app name?', answer: 'Yes—many successful apps use invented words (Spotify, Venmo, Hulu). Invented words offer strong trademark protection and unique branding, though they require more marketing effort to establish meaning.' },
      { question: 'Should my company name and app name be the same?', answer: 'They can be, especially for single-product companies. However, if you plan multiple products, a broader company name (like "Alphabet" for Google\'s parent) gives flexibility while individual apps have their own names.' },
      { question: 'How important is the app name for growth?', answer: 'Very important. App store optimization (ASO) relies partly on your name, and word-of-mouth recommendations need an easy-to-share name. A confusing or hard-to-spell name creates friction in user acquisition.' },
      { question: 'What app naming mistakes should I avoid?', answer: 'Avoid: names too similar to existing apps, difficult spellings, generic names that don\'t stand out, names that limit future feature expansion, and names that don\'t work internationally if you plan global launch.' },
      { question: 'Should I include "app" in my app name?', answer: 'Generally no—users already know they\'re downloading an app. Including "app" in the name wastes characters and can feel amateur. Use the character space for something more distinctive.' },
      { question: 'Can I change my app name after launch?', answer: 'Yes, but it\'s risky—you may lose brand recognition, confuse existing users, and impact ASO rankings. Choose carefully initially to avoid the costly need to rebrand.' },
    ],
    howToChoose: {
      intro: 'Selecting the perfect name for your app business is a crucial step in creating a strong brand that resonates with users, stands out in crowded app stores, and supports sustainable growth. Your app name will appear under your icon on millions of devices, in app store searches, and in everyday conversations—making it one of your most important brand assets.',
      steps: [
        { title: 'Define Your App\'s Core Value and Function', description: 'Before generating names, crystallize what your app does and why users will love it. Consider what the primary problem your app solves is, what the core action users take in your app is, how your app makes users feel (productive, relaxed, connected, entertained), who your target user is (demographics, tech sophistication, use case), and what one word users would use to describe your app\'s benefit. This clarity helps generate names that communicate value instantly. Slack communicates ease, Calm communicates relaxation, and Robinhood communicates democratization.' },
        { title: 'Prioritize Clarity and Memorability', description: 'App names must work in challenging contexts: tiny app icon labels (limited display space under your icon), voice sharing ("You should download [name]" in conversation), search queries (users typing to find you in app stores), and customer support (phone calls asking about "[name]"). Choose names that are short (8 characters or fewer ideal), easy to spell after hearing once, pronounceable in your target markets, and distinctive enough to find in search.' },
        { title: 'Consider App Store Optimization (ASO)', description: 'Your name affects app store discoverability. Consider keyword relevance (including category words can help search ranking), uniqueness (distinctive names rank better than generic ones), competition (check what top competitors are named), and subtitle opportunity (iOS allows subtitles, so your main name can be brandable while subtitle adds description). Balance brandability with discoverability. "Headspace" is memorable and suggests mental space, while its subtitle "Meditation & Sleep" adds search relevance.' },
        { title: 'Test Technical Availability', description: 'Before committing, verify comprehensive availability. Check the App Store for identical or similar names, check Google Play for Android marketplace conflicts, secure your .com, .app, or .io domain name, claim social handles on relevant platforms, review USPTO and international trademark databases, and look for existing businesses or products with the name via web search. App naming conflicts can lead to removal requests or trademark disputes—check thoroughly before investing in branding.' },
        { title: 'Evaluate Global Scalability', description: 'If you plan international expansion, test pronunciation in major languages, check for unintended meanings in other languages, consider cultural associations, and verify availability in international app stores. Names that work globally have enormous advantages as markets expand.' },
        { title: 'Consider Brand Evolution', description: 'Your app will likely evolve—features will be added, markets will expand, and use cases will broaden. Choose a name that isn\'t so specific it limits growth ("Receipt Scanner 2000" is limiting), has room for brand extensions (products, services, categories), works if your core product pivots, and maintains relevance as technology evolves. The most valuable app names are platforms for growth, not descriptions of a single feature.' },
        { title: 'Test with Target Users', description: 'Before finalizing, gather user feedback. Ask if they can spell it after hearing it once, what they think the app does based on the name alone, whether it appeals to them or feels irrelevant, if they would recommend an app with this name to friends, and whether it feels trustworthy for their data/payments. Real user testing reveals perception issues that internal brainstorming might miss.' },
      ],
    },
    businessNameIdeas: [
      { name: 'DigitalDynamics', description: 'Suggests an app business creating dynamic, cutting-edge digital applications.' },
      { name: 'InnovativeInterfaces', description: 'Implies a company known for creating user-friendly, innovative app interfaces.' },
      { name: 'PixelPerfection', description: 'Suggests meticulous attention to detail in app design and development.' },
      { name: 'CodeCraft', description: 'Positions the business as skilled artisans of software code.' },
      { name: 'AppForge', description: 'Implies a workshop where powerful applications are created and refined.' },
      { name: 'SwiftSync', description: 'Suggests fast, seamless synchronization—ideal for productivity or communication apps.' },
      { name: 'FlowState', description: 'Evokes productivity and optimal performance—perfect for focus or workflow apps.' },
      { name: 'NexaApps', description: 'Modern, invented name suggesting next-generation applications.' },
      { name: 'PulseTech', description: 'Implies vital, living technology at the center of user needs.' },
      { name: 'ByteBridge', description: 'Suggests connecting users through digital solutions and data.' },
      { name: 'LaunchPad', description: 'Perfect for an app that helps users start something—projects, businesses, habits.' },
      { name: 'CloudCore', description: 'Implies cloud-based, essential technology services.' },
      { name: 'SnapLogic', description: 'Suggests quick, intuitive functionality—ideal for utility apps.' },
      { name: 'DataDash', description: 'Implies fast access to information and analytics.' },
      { name: 'MobileMatrix', description: 'Suggests comprehensive mobile solutions with interconnected capabilities.' },
      { name: 'AppVenture', description: 'Combines applications with adventure and venture—startup energy.' },
      { name: 'StreamLine', description: 'Communicates simplification and efficiency—perfect for productivity tools.' },
      { name: 'Connectify', description: 'Modern suffix pattern suggesting connection and enhancement.' },
      { name: 'TechNest', description: 'Implies a nurturing home for technology innovation and development.' },
      { name: 'Appify', description: 'Simple, memorable name for a company that creates apps or helps businesses "app-ify."' },
    ],
  },
  'babysitting': {
    slug: 'babysitting',
    name: 'Babysitting Business Name Generator',
    title: 'Free AI Babysitting Business Name Ideas Generator',
    description: 'Generate warm, trustworthy names for babysitting services and childcare businesses.',
    metaDescription: 'Find the perfect name for your babysitting business with our AI-powered generator. Create trustworthy, caring names that reassure parents and build your childcare brand. Quick, free, and sure to impress!',
    inputLabel: 'Describe your babysitting business...',
    inputPlaceholder: 'e.g. A professional babysitting service specializing in infant care and overnight stays',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Warm & Caring', 'Professional & Trustworthy', 'Playful & Fun', 'Nature-Inspired'],
        default: 'Warm & Caring',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in childcare, babysitting, and family services. Your role is to generate warm, trustworthy business names that reassure parents while being friendly and approachable for families seeking childcare services.

BABYSITTING BUSINESS CONTEXT:

The babysitting and childcare industry encompasses:
- Individual babysitting services
- Nanny placement agencies
- After-school care programs
- Date-night babysitting services
- Special needs childcare
- Infant care specialists
- Tutoring and educational childcare
- Emergency and backup childcare

NAME CHARACTERISTICS FOR BABYSITTING BUSINESSES:

1. **Reassuring and Caring**
   - Inspires trust and confidence in parents
   - Emphasizes safety and nurturing
   - Conveys commitment to children's well-being
   - Examples: Safe, Care, Trust, Nurture, Guardian

2. **Friendly and Approachable**
   - Welcoming to both children and parents
   - Not overly formal or clinical
   - Warm and inviting tone
   - Examples: Sunny, Happy, Bright, Buddy, Friend

3. **Reflective of Specializations**
   - Communicates specific services or values
   - Appeals to target parent demographics
   - Suggests educational or developmental benefits
   - Examples: Learning, Growing, Discovery, Play

4. **Professional Yet Warm**
   - Balances business credibility with warmth
   - Suitable for marketing materials
   - Works for individual sitters and larger services
   - Builds confidence in parent decision-making

OUTPUT REQUIREMENTS:

For each babysitting business name generated, provide:
- The business name
- A brief explanation of why it works for a childcare business

Generate names that are:
- Warm and welcoming
- Easy for parents to remember and recommend
- Professional enough for background check contexts
- Appealing when spoken aloud
- Suitable for building long-term client relationships`,
    useCases: [
      { title: 'Launching Professional Babysitting Services', description: 'Individuals starting professional babysitting businesses use the generator to find names that immediately convey trustworthiness and warmth. A well-chosen name helps parents feel confident choosing a new sitter and creates a memorable brand for referrals in local parenting communities.' },
      { title: 'Childcare Agency Branding', description: 'Entrepreneurs starting babysitter placement agencies or childcare services use the generator to create brand names that appeal to both parent clients and caregivers seeking employment. A professional yet caring name attracts quality sitters and reassures parents about the agency\'s standards.' },
      { title: 'Niche Childcare Specialization', description: 'Caregivers specializing in specific areas—infant care, special needs support, educational tutoring, or overnight services—use the generator to find names reflecting their unique expertise. A specialized name helps target the right families and command appropriate rates.' },
    ],
    faqs: [
      { question: 'What makes a good babysitting business name?', answer: 'A good babysitting business name should be reassuring and caring, friendly and approachable, and reflective of your specializations or values. It needs to inspire trust in parents while being warm and appealing.' },
      { question: 'Should my babysitting business name include my personal name?', answer: 'Including your name (like "Sarah\'s Little Angels") adds a personal touch and builds individual brand recognition. However, it may limit growth if you plan to expand with additional sitters. Consider whether you\'re building a personal brand or a scalable business.' },
      { question: 'How important is the name for building trust with parents?', answer: 'Very important. Parents are entrusting their children to you—your name creates the first impression of safety and care. Names that sound professional yet nurturing help parents feel confident in their choice.' },
      { question: 'What words work well in babysitting business names?', answer: 'Effective words include care-related terms (Nurture, Tender, Gentle), safety words (Safe, Trust, Guardian), child-focused words (Little, Kiddo, Angel), happy imagery (Sunshine, Bright, Joy), and growth terms (Bloom, Sprout, Grow).' },
      { question: 'Should I include "babysitting" in my business name?', answer: 'Including "babysitting," "childcare," or "sitters" makes your service immediately clear but can feel limiting. Broader names like "Little Guardians" work for babysitting, tutoring, and other childcare services as you expand.' },
      { question: 'How do I make my name appeal to my target families?', answer: 'Consider your ideal clients\' values. Eco-conscious parents appreciate nature terms. Education-focused parents respond to learning-related names. Busy professional parents value reliability indicators. Match your name to your target market.' },
      { question: 'What should I avoid in a babysitting business name?', answer: 'Avoid: names that sound unprofessional, overly cutesy names that undermine credibility, names similar to existing local childcare businesses, anything that could have negative interpretations, and names that are hard to spell or pronounce.' },
      { question: 'How do I check if my babysitting business name is available?', answer: 'Search local business registrations, check if the domain is available for your website, verify social media handles, and search for other local childcare providers with similar names. Local distinction is important in the babysitting industry.' },
      { question: 'Should my name reflect my service area or specialization?', answer: 'Location-based names (like "Westside Sitters") can help local SEO but limit expansion. Specialization names (like "Infant Angels") clearly communicate expertise but may limit service offerings. Balance specificity with growth potential.' },
      { question: 'Can a good name help me charge higher rates?', answer: 'Yes. A professional, trustworthy name supports premium positioning. Names that suggest quality, experience, and specialized care help justify higher rates compared to generic or unprofessional-sounding alternatives.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your babysitting business is a crucial step in creating a trustworthy brand that resonates with parents. Your business name will appear on business cards, websites, social media profiles, and in word-of-mouth recommendations—making it essential to select a name that conveys safety, warmth, and reliability.',
      steps: [
        { title: 'Understand What Parents Seek', description: 'Parents making childcare decisions prioritize specific qualities. Your name should immediately communicate safety and security (their children will be protected), care and nurturing (their children will be loved and attended to), professionalism (you run a legitimate, responsible business), experience and competence (you know what you\'re doing), and warmth and approachability (their children will be happy with you). Understanding these priorities helps you choose words that resonate emotionally with parents making difficult caregiving decisions.' },
        { title: 'Create Reassurance Through Warmth', description: 'Unlike many businesses where being edgy or clever works, babysitting names should prioritize warmth and reassurance. Consider soft sounds (names with soft consonants like S, L, M, N feel gentler), nurturing words (Care, Love, Tender, Gentle, Warm), safety implications (Trust, Safe, Guardian, Haven), and happy associations (Sunny, Bright, Joy, Rainbow). Avoid harsh-sounding names, clinical terminology, or anything that could feel cold or corporate. Parents want to feel their children are going to a caring person, not an institution.' },
        { title: 'Be Friendly and Approachable', description: 'Your name should welcome both parents and children. Consider how it sounds to a parent reading your business card, to a child hearing where they\'re going, in a recommendation from one parent to another, and on your social media profiles. Names that are too formal may intimidate potential clients, while names that are too casual may seem unprofessional. Strike a balance that feels welcoming yet competent.' },
        { title: 'Reflect Your Specializations or Values', description: 'If you have specific expertise or focus, your name can communicate this. For infant care specialists, use terms like Newborn, Infant, Baby, Cradle. For educational focus, use Learning, Discovery, Explorer, Growing Minds. For special needs experience, use Gentle, Patient, Adaptive, Inclusive. For overnight/emergency services, use Anytime, Night Owl, Reliable. For active/outdoor emphasis, use Adventure, Playground, Sunny Days. Specialized names help you attract families specifically seeking your expertise and support premium pricing.' },
        { title: 'Verify Availability and Local Distinctiveness', description: 'Check that your chosen name is available through business registration (search your state\'s business name database), local competitors (ensure no other childcare providers have similar names), domain name (even for local services, a website adds credibility), social media (secure profiles on Facebook, Instagram, and Nextdoor), and phone book/Google (search for potential conflicts). In the babysitting industry, local reputation is everything. Ensure your name is distinct within your service area.' },
        { title: 'Consider Growth and Evolution', description: 'Think about how your business might evolve: adding team members (does your name work for multiple sitters?), service expansion (could you add tutoring, transportation, or pet care?), geographic growth (does the name work in neighboring areas?), and age range changes (could you serve older children or teens later?). Choosing a flexible name avoids costly rebranding as your business grows.' },
        { title: 'Test with Parents', description: 'Before finalizing, get feedback from parents (ideally in your target demographic). Ask if the name sounds trustworthy, if they would feel comfortable leaving their child with a service with this name, if they can easily remember and spell it, if they would recommend it to other parents, and what services they expect from this business name. Parent feedback is invaluable—they are your actual decision-makers.' },
      ],
    },
    businessNameIdeas: [
      { name: 'KiddoKeepers', description: 'Suggests a babysitting business that keeps kids safe and entertained.' },
      { name: 'CherubChaperones', description: 'Implies angelic care and guidance for precious little ones.' },
      { name: 'TinyTrustees', description: 'Communicates trusted care for the smallest family members.' },
      { name: 'LittleLovebugs', description: 'Warm, affectionate name suggesting gentle care with love.' },
      { name: 'PlayfulPals', description: 'Emphasizes friendship and fun in childcare experience.' },
      { name: 'GentleGuardians', description: 'Combines nurturing gentleness with protective safety.' },
      { name: 'SunshineSitters', description: 'Bright, cheerful name suggesting happy caregiving.' },
      { name: 'SafeHavenChildcare', description: 'Directly communicates the security parents seek.' },
      { name: 'GrowingGiggles', description: 'Suggests developmental care filled with joy and laughter.' },
      { name: 'TenderTots', description: 'Implies gentle, loving care for young children.' },
      { name: 'BrightBeginnings', description: 'Positions childcare as positive start for development.' },
      { name: 'NurtureNest', description: 'Combines nurturing care with cozy, secure imagery.' },
      { name: 'HappyHands', description: 'Suggests caring, helpful assistance with children.' },
      { name: 'LittleLegends', description: 'Makes children feel special while suggesting quality care.' },
      { name: 'CuddleCrew', description: 'Warm, affectionate name for infant and toddler care.' },
      { name: 'MeadowMinders', description: 'Nature-inspired name suggesting outdoor play and gentle care.' },
      { name: 'StardustSitters', description: 'Magical, special name appealing to children\'s imaginations.' },
      { name: 'PetitePatrons', description: 'Suggests dedicated service to small, important clients.' },
      { name: 'TotTutors', description: 'Combines childcare with educational focus and learning.' },
      { name: 'AngelWatch', description: 'Implies guardian-like protection with gentle, loving care.' },
    ],
  },
  'beauty': {
    slug: 'beauty',
    name: 'Beauty Business Name Generator',
    title: 'Free AI Beauty Business Name Ideas Generator',
    description: 'Generate glamorous, sophisticated names for salons, studios, and cosmetics brands.',
    metaDescription: 'Create an alluring name for your beauty business with our AI-powered generator. Generate glamorous, sophisticated names for salons, studios, and cosmetics brands. Free and enchanting!',
    inputLabel: 'Describe your beauty business...',
    inputPlaceholder: 'e.g. A luxury hair salon specializing in color treatments and bridal styling',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Glamorous & Sophisticated', 'Modern & Trendy', 'Natural & Organic', 'Empowering & Bold'],
        default: 'Glamorous & Sophisticated',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the beauty, cosmetics, and personal care industry. Your role is to generate glamorous, sophisticated business names that convey elegance, allure, and the transformative power of beauty services and products.

BEAUTY BUSINESS CONTEXT:

The beauty industry encompasses:
- Salons and hair studios
- Makeup artistry and cosmetics
- Skincare and facial services
- Nail salons and spas
- Lash and brow studios
- Beauty product lines
- Mobile beauty services
- Bridal and special event beauty

NAME CHARACTERISTICS FOR BEAUTY BUSINESSES:

1. **Glamorous and Sophisticated**
   - Evokes luxury and elegance
   - Appeals to clients seeking enhancement
   - Suggests high-quality services/products
   - Examples: Glamour, Luxe, Elite, Allure, Opulent

2. **Memorable and Enchanting**
   - Stands out in competitive beauty market
   - Creates emotional connection
   - Easy to recommend
   - Examples: Enchant, Charm, Captivate, Beguile

3. **Reflective of Beauty Offerings**
   - Communicates specific services
   - Appeals to target clientele
   - Suggests transformative results
   - Examples: Glow, Radiance, Bloom, Polish

4. **Aspirational and Empowering**
   - Makes clients feel beautiful
   - Suggests confidence enhancement
   - Creates desire and aspiration
   - Examples: Confidence, Queen, Goddess, Divine

OUTPUT REQUIREMENTS:

For each beauty business name generated, provide:
- The business name
- A brief explanation of why it works for a beauty business

Generate names that are:
- Elegant and aspirational
- Easy to pronounce and remember
- Suitable for luxury marketing
- Appropriate for diverse beauty services
- Instagram and social media friendly`,
    useCases: [
      { title: 'Salon Launch and Branding', description: 'Entrepreneurs opening hair salons, nail studios, or full-service beauty establishments use the Beauty Business Name Generator to create glamorous brand identities. A sophisticated name helps attract discerning clients, justify premium pricing, and establish a memorable presence in competitive beauty markets.' },
      { title: 'Beauty Product Line Development', description: 'Cosmetics entrepreneurs and beauty product creators use the generator to name new skincare, makeup, or personal care lines. The right name communicates product benefits, appeals to target consumers, and creates shelf presence that competes with established brands.' },
      { title: 'Specialized Beauty Service Branding', description: 'Makeup artists, lash technicians, brow specialists, and other beauty professionals use the generator to create distinctive brand names for their specialized services. A unique name helps them stand out in their niche and attract clients seeking specific expertise.' },
    ],
    faqs: [
      { question: 'What makes a good beauty business name?', answer: 'A good beauty business name should be glamorous and sophisticated, memorable and enchanting, and reflective of your beauty offerings. It needs to evoke elegance while creating emotional connection with clients seeking enhancement.' },
      { question: 'Should my beauty business name describe my services?', answer: 'Including service indicators (like "Lash" or "Skin") provides clarity but can limit expansion. Broader names allow growth into additional services. Consider your long-term vision when deciding.' },
      { question: 'How important is the name for attracting beauty clients?', answer: 'Very important. Beauty clients are seeking transformation and luxury—your name creates the first impression of the experience they\'ll receive. An elegant name supports premium positioning and attracts discerning clientele.' },
      { question: 'What beauty naming trends should I follow or avoid?', answer: 'Current trends include minimalist elegance, empowerment language, and personalized names. Avoid: overly trendy names that may date quickly, names too similar to competitors, and clichés overused in the beauty industry.' },
      { question: 'Should I use my name in my beauty business?', answer: 'Personal names (like "Elena\'s Beauty Studio") build individual brand equity but may limit future sale value. They work well for solo practitioners building personal clientele. Consider your long-term business goals.' },
      { question: 'How do I appeal to my target beauty clientele through naming?', answer: 'Consider your ideal client\'s aesthetic preferences and values. Luxury-seekers respond to elegant, French-inspired names. Younger clients may prefer trendy, Instagram-friendly names. Wellness-focused clients appreciate natural, holistic naming.' },
      { question: 'What words work well in beauty business names?', answer: 'Effective words include glamour terms (Luxe, Allure, Glam), radiance words (Glow, Shine, Luminous), beauty words (Belle, Bella, Beautiful), and empowerment terms (Queen, Goddess, Confidence).' },
      { question: 'Should my beauty business name be Instagram-friendly?', answer: 'Absolutely. Beauty businesses thrive on social media. Choose a name that looks great as a handle, fits well in hashtags, and is easy for clients to tag and share.' },
      { question: 'How do I check beauty business name availability?', answer: 'Search your state\'s business registry, check domain availability, verify Instagram/TikTok handles, search for existing salons with similar names in your area, and review trademark databases.' },
      { question: 'Can I change my beauty business name later?', answer: 'Yes, but rebranding is costly—new signage, marketing materials, and potential client confusion. Choose carefully initially to avoid the disruption of changing names later.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your beauty business is a pivotal step in creating an alluring brand that attracts clients seeking transformation, confidence, and glamour. Your name will appear on everything from storefront signage to social media profiles, creating the first impression of the luxurious experience clients can expect.',
      steps: [
        { title: 'Define Your Beauty Business Identity', description: 'Before brainstorming names, clarify your brand positioning. Consider what specific beauty services or products you offer, who your ideal client is (age, style, values, price sensitivity), what emotions you want clients to feel (glamorous, pampered, confident, natural), what price point you\'re targeting (accessible, mid-range, luxury), and what makes your beauty business different from competitors. Your answers guide whether you need a name that sounds luxurious and exclusive, trendy and youthful, natural and organic, or accessible and welcoming.' },
        { title: 'Embrace Glamour and Sophistication', description: 'The beauty industry is fundamentally about enhancement, transformation, and feeling one\'s best. Your name should reflect these aspirations through elegant vocabulary (words that suggest refinement and luxury), positive associations (terms that create desirable mental imagery), aspirational quality (language that clients want to be associated with), and visual appeal (names that look beautiful in logos and marketing). Avoid anything that sounds ordinary, clinical, or discount-oriented. Your name should make clients feel special for choosing you.' },
        { title: 'Create Memorability and Enchantment', description: 'In the competitive beauty market, your name must stand out. Consider distinctiveness (different from other salons and studios in your area), memorability (clients remember and recommend you easily), emotional impact (creates positive feelings and associations), and shareability (works well in word-of-mouth recommendations). Consider names that tell a story or create intrigue—names that make people want to learn more about your business.' },
        { title: 'Reflect Your Beauty Specialty', description: 'Your name can communicate your specific focus. For hair, use terms suggesting transformation, style, or texture. For skincare, use words about glow, radiance, and complexion. For nails, use names suggesting artistry, polish, or precision. For lashes/brows, use terms about enhancement and framing. For makeup, use language about artistry, color, and transformation. For holistic beauty, use natural, wellness-oriented terminology. However, ensure your name allows for service expansion if you plan to grow beyond your initial specialty.' },
        { title: 'Verify Comprehensive Availability', description: 'Check that your chosen name is available through business registration (state and local requirements), domain name (.com preferred for credibility), social media (Instagram is crucial for beauty businesses), trademark search (ensure no conflicts exist), and local competition (no similar salon names in your market). Beauty businesses depend heavily on online presence and word-of-mouth—consistent naming across all channels is essential.' },
        { title: 'Test the Name\'s Visual and Verbal Appeal', description: 'Your beauty business name should be beautiful when written in elegant fonts, pleasant when spoken aloud, easy for clients to spell correctly, effective as a hashtag, and professional on business documents. Consider how the name will appear on signage, business cards, product packaging, and social media profiles.' },
        { title: 'Consider Your Growth Vision', description: 'Think about your long-term plans: will you expand to additional locations? Might you launch a product line? Could you franchise the concept? Do you plan to eventually sell the business? Names that are too personal or too specific may limit these opportunities. Choose a name that supports your ultimate vision.' },
      ],
    },
    businessNameIdeas: [
      { name: 'GlamorGrove', description: 'Suggests a place filled with glamorous beauty services—a destination for transformation.' },
      { name: 'RadianceRidge', description: 'Implies achieving peak radiance and glowing results.' },
      { name: 'BelleBloom', description: 'French-inspired elegance combined with natural flourishing beauty.' },
      { name: 'LuminousLux', description: 'Double emphasis on light and luxury for premium positioning.' },
      { name: 'VelvetVanity', description: 'Suggests smooth, luxurious beauty with confident self-care.' },
      { name: 'EnchantedElegance', description: 'Creates magical, sophisticated beauty association.' },
      { name: 'GlowGoddess', description: 'Empowering name combining radiance with confidence.' },
      { name: 'PolishedPetal', description: 'Suggests refined, natural beauty with delicate precision.' },
      { name: 'DivineDazzle', description: 'Implies exceptional, eye-catching beauty results.' },
      { name: 'BlushBoutique', description: 'Intimate, specialized beauty shopping experience.' },
      { name: 'CharmChic', description: 'Combines allure with modern sophistication.' },
      { name: 'OpulentOrchid', description: 'Exotic elegance suggesting luxury beauty services.' },
      { name: 'SilkSiren', description: 'Smooth, alluring beauty with captivating appeal.' },
      { name: 'MajesticMane', description: 'Powerful name for hair-focused beauty services.' },
      { name: 'PristinePamper', description: 'Clean, perfect pampering experience for beauty clients.' },
      { name: 'AllureAtelier', description: 'French-inspired workshop for creating captivating beauty.' },
      { name: 'FlawlessFemme', description: 'Positions services as achieving perfect feminine beauty.' },
      { name: 'StardustStyles', description: 'Magical, celestial beauty with stellar results.' },
      { name: 'GraceGlamour', description: 'Combines elegance with showstopping beauty.' },
      { name: 'IconicImage', description: 'Suggests creating memorable, standout beauty looks.' },
    ],
  },
  'boutique': {
    slug: 'boutique',
    name: 'Boutique Business Name Generator',
    title: 'Free AI Boutique Business Name Ideas Generator',
    description: 'Generate chic, unique names for fashion shops, gift stores, and specialty retail.',
    metaDescription: 'Discover chic boutique names with our AI-powered generator. Create unique, stylish names for fashion shops, gift stores, and specialty retail. Fast, free, and sure to impress!',
    inputLabel: 'Describe your boutique...',
    inputPlaceholder: 'e.g. A women\'s fashion boutique featuring curated vintage and modern designer pieces',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Chic & Sophisticated', 'Whimsical & Charming', 'Modern & Minimal', 'Vintage & Classic'], default: 'Chic & Sophisticated', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in retail boutiques, specialty shops, and curated shopping experiences. Your role is to generate chic, unique business names that convey exclusivity, style, and personalized shopping experiences.

BOUTIQUE BUSINESS CONTEXT:

The boutique retail industry encompasses:
- Fashion and clothing boutiques
- Jewelry and accessory shops
- Home décor and gift boutiques
- Bridal and formalwear shops
- Children's boutiques
- Vintage and consignment stores
- Specialty food boutiques
- Artisan and handmade shops

NAME CHARACTERISTICS FOR BOUTIQUES:

1. **Chic and Stylish**
   - Evokes fashion-forward sophistication
   - Appeals to style-conscious shoppers
   - Suggests curated, trendy selection
   - Examples: Chic, Mode, Style, Vogue, Flair

2. **Exclusive and Unique**
   - Implies special, hard-to-find items
   - Creates sense of discovery
   - Positions as alternative to mass retail
   - Examples: Rare, Find, Hidden, Secret, Exclusive

3. **Personal and Intimate**
   - Conveys boutique shopping experience
   - Warm, welcoming atmosphere
   - Individual attention and service
   - Examples: Nest, Nook, Corner, Haven, Atelier

4. **Artisan and Curated**
   - Suggests carefully selected merchandise
   - Quality over quantity
   - Unique, handpicked items
   - Examples: Curated, Collected, Selected, Artisan

OUTPUT REQUIREMENTS:

For each boutique name generated, provide:
- The business name
- A brief explanation of why it works for a boutique

Generate names that are:
- Stylish and memorable
- Appropriate for signage
- Social media friendly
- Appealing to target shoppers
- Distinctive in local market`,
    useCases: [
      { title: 'Fashion Boutique Launch', description: 'Entrepreneurs opening clothing boutiques use the generator to find names that immediately communicate style, exclusivity, and curated fashion. A chic name helps attract fashion-forward customers and creates a brand identity that justifies boutique pricing above mass retail.' },
      { title: 'Gift and Home Décor Shop Naming', description: 'Shop owners specializing in gifts, home décor, or artisan goods use the generator to create names suggesting discovery and unique finds. The right name positions the shop as a destination for special, thoughtful items you can\'t find in chain stores.' },
      { title: 'Online Boutique Brand Building', description: 'E-commerce entrepreneurs launching online boutiques use the generator to create memorable names that work across digital platforms. A distinctive name helps build brand recognition in crowded online marketplaces and supports social media marketing.' },
    ],
    faqs: [
      { question: 'What makes a good boutique name?', answer: 'A good boutique name should be chic and stylish, exclusive and unique, and create a sense of personal, intimate shopping experience. It should differentiate you from mass retailers and appeal to customers seeking special finds.' },
      { question: 'Should my boutique name describe what I sell?', answer: 'Subtle hints work better than explicit descriptions. "Willow & Lace" suggests feminine clothing elegantly, while "Women\'s Fashion Store" sounds generic. Your name should create intrigue while giving shoppers a sense of your aesthetic.' },
      { question: 'How important is the boutique name for attracting customers?', answer: 'Very important. Boutique shoppers seek experiences beyond regular retail—your name creates the first impression of exclusivity and style. An appealing name draws people in and sets expectations for the curated shopping experience inside.' },
      { question: 'What naming styles work for different boutique types?', answer: 'Fashion boutiques suit French/sophisticated names. Gift shops can be whimsical or charming. Home décor benefits from nature-inspired elegance. Children\'s boutiques can be playful and sweet. Match your name style to your merchandise and target customer.' },
      { question: 'Should I use my name in my boutique business?', answer: 'Personal names (like "Sarah\'s Style") create intimacy but may limit scalability and sale potential. They work well for owner-operated boutiques where personal service is the brand. Consider whether you\'re building a personal or scalable brand.' },
      { question: 'How do I make my boutique name memorable?', answer: 'Use evocative imagery, create pleasant sounds (alliteration, rhythm), keep it short (2-3 words maximum), and choose words with positive associations. Test by asking people to recall your name after hearing it once.' },
      { question: 'What boutique naming mistakes should I avoid?', answer: 'Avoid: names too similar to existing local shops, difficult spellings or pronunciations, overly generic names, names that limit product expansion, and anything that sounds like discount or mass retail.' },
      { question: 'How do I check boutique name availability?', answer: 'Search your state\'s business registry, verify domain availability, check Instagram and Pinterest handles, search for existing retailers with similar names in your area, and review trademark databases.' },
      { question: 'Should my boutique name work for online and physical retail?', answer: 'Yes. Even brick-and-mortar boutiques need online presence. Choose a name that works on storefronts, websites, social media, and e-commerce platforms equally well.' },
      { question: 'Can my boutique name help with marketing?', answer: 'Absolutely. A memorable, appealing name generates word-of-mouth, looks great on shopping bags (free advertising), and creates social media shareability. The right name is a marketing asset.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your boutique business is a pivotal step in creating a captivating brand that attracts shoppers seeking unique, curated experiences. Your name will grace storefronts, shopping bags, social media profiles, and word-of-mouth recommendations—making it essential to select a name that embodies the exclusive, stylish shopping experience you provide.',
      steps: [
        { title: 'Define Your Boutique\'s Unique Identity', description: 'Before generating names, clarify what makes your boutique special. Consider what type of products you curate (fashion, gifts, home, jewelry), who your ideal customer is (age, style, values, income level), what aesthetic defines your brand (modern minimalist, romantic vintage, bohemian, classic), what experience you want shoppers to have (discovery, pampering, inspiration), and what differentiates you from other local retailers. Your answers guide the naming style—whether you need something chic and sophisticated, whimsical and playful, or elegant and refined.' },
        { title: 'Embody Chic Style and Sophistication', description: 'Boutiques differentiate from mass retail through curation, quality, and style. Your name should immediately suggest fashion-forward sensibility, carefully selected quality merchandise, sophistication and taste, and style expertise and trend awareness. Consider European-inspired terms (French, Italian), fashion vocabulary, and elegant imagery that positions your shop as a destination for discerning shoppers.' },
        { title: 'Create Exclusivity and Discovery', description: 'The boutique appeal lies in finding special items unavailable elsewhere. Names should evoke uniqueness ("You won\'t find this at the mall"), discovery ("Hidden treasures await"), curation ("Expertly selected for you"), and intimacy ("Personal, not corporate"). Words suggesting secrets, finds, collections, and treasures create this sense of special discovery that boutique shoppers seek.' },
        { title: 'Consider Your Physical and Digital Presence', description: 'Your boutique name must work across multiple contexts: storefront signage (readable, elegant, fits standard sign formats), shopping bags (looks beautiful when carried on the street), business cards (professional and memorable), website and social media (easy to type, search, and share), and word-of-mouth (easy to say and remember in recommendations). Test your name candidates in all these contexts before finalizing.' },
        { title: 'Verify Availability and Distinctiveness', description: 'Ensure your chosen name is available and unique through business registration (state and local requirements), domain name (secure your web presence), social media (Instagram and Pinterest are crucial for boutiques), local competition (no similar shops in your market), and trademark search (check for conflicts). Boutiques thrive on uniqueness—your name must be distinctly yours.' },
        { title: 'Test with Target Customers', description: 'Before finalizing, gather feedback from your ideal shoppers. Ask if the name appeals to their aesthetic sensibilities, if they would be excited to shop at a store with this name, if they would share the name with stylish friends, what type of products they expect inside, and whether it feels special or generic.' },
        { title: 'Consider Growth and Evolution', description: 'Think about your boutique\'s future: additional product categories, second locations or franchise potential, online expansion, and private label merchandise. Choose a name that accommodates growth while capturing your current essence.' },
      ],
    },
    businessNameIdeas: [
      { name: 'VelvetVine', description: 'Luxurious texture meets natural elegance—sophisticated yet approachable.' },
      { name: 'CuratedCharm', description: 'Directly communicates the carefully selected, appealing merchandise.' },
      { name: 'LilyLane', description: 'Sweet, nature-inspired name suggesting a pleasant shopping stroll.' },
      { name: 'BellaFinds', description: 'Italian elegance combined with discovery—beautiful rare items.' },
      { name: 'TheStyledNest', description: 'Cozy, curated space for stylish home and lifestyle products.' },
      { name: 'WhisperWillow', description: 'Soft, romantic name with natural sophistication.' },
      { name: 'PetiteMaison', description: 'French for "small house"—intimate, elegant boutique experience.' },
      { name: 'GoldenThread', description: 'Suggests quality, craftsmanship, and connection.' },
      { name: 'TreasuredFinds', description: 'Positions merchandise as valuable discoveries.' },
      { name: 'ModernMuse', description: 'Contemporary inspiration for the style-conscious shopper.' },
      { name: 'RareBloom', description: 'Exclusive, flowering—special items that flourish.' },
      { name: 'ChicHaven', description: 'Stylish refuge for fashion-forward shoppers.' },
      { name: 'SilverLining', description: 'Optimistic elegance with precious quality.' },
      { name: 'AtelierChérie', description: 'French sophistication—"beloved workshop" for special finds.' },
      { name: 'HiddenGems', description: 'Directly communicates the discovery of special, rare items.' },
      { name: 'MagnoliaMarket', description: 'Southern charm with elegant, nature-inspired beauty.' },
      { name: 'TheStyleStudio', description: 'Positions boutique as creative space for personal style.' },
      { name: 'VintageVelvet', description: 'Classic luxury with timeless appeal.' },
      { name: 'OliveAndGrace', description: 'Natural elegance with sophisticated style.' },
      { name: 'EncoreElegance', description: 'Suggests returning for more—repeat-visit-worthy style.' },
    ],
  },
  'cafe': {
    slug: 'cafe',
    name: 'Cafe Business Name Generator',
    title: 'Free AI Cafe Business Name Ideas Generator',
    description: 'Generate warm, inviting names for coffee shops, bakery cafes, and breakfast spots.',
    metaDescription: 'Get the perfect cafe name without the hassle. Our AI tool creates unique, welcoming names for coffee shops, bakery cafes, and breakfast spots. Free and designed for success!',
    inputLabel: 'Describe your cafe...',
    inputPlaceholder: 'e.g. A cozy neighborhood coffee shop with artisan pastries and a focus on local community',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Warm & Cozy', 'Modern & Artisan', 'Community-Focused', 'Playful & Creative'], default: 'Warm & Cozy', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in cafes, coffee shops, and casual dining establishments. Your role is to generate warm, inviting business names that create welcoming atmospheres and convey the cozy, comfortable experience customers seek.

CAFE BUSINESS CONTEXT:

The cafe industry encompasses:
- Coffee shops and espresso bars
- Tea houses and cafes
- Brunch and breakfast cafes
- Bakery cafes
- Internet cafes and workspaces
- Specialty coffee roasters
- Neighborhood gathering spots
- Artisan and third-wave coffee shops

NAME CHARACTERISTICS FOR CAFES:

1. **Warm and Welcoming**
   - Invites customers to linger
   - Creates sense of comfort
   - Suggests friendly atmosphere
   - Examples: Haven, Nest, Nook, Retreat, Gathering

2. **Aromatic and Sensory**
   - Evokes coffee and food aromas
   - Suggests taste and quality
   - Creates sensory anticipation
   - Examples: Roast, Brew, Aroma, Grind, Bean

3. **Community and Connection**
   - Positions cafe as gathering place
   - Social, neighborhood feel
   - Third place between home and work
   - Examples: Commons, Collective, Local, Neighborhood

4. **Quality and Craft**
   - Suggests artisan approach
   - Quality ingredients and preparation
   - Expertise and care
   - Examples: Craft, Artisan, Roasted, Handmade

OUTPUT REQUIREMENTS:

For each cafe name generated, provide:
- The business name
- A brief explanation of why it works for a cafe

Generate names that are:
- Warm and inviting
- Easy to recommend
- Memorable after one visit
- Appropriate for signage
- Suitable for merchandise (mugs, bags)`,
    useCases: [
      { title: 'New Coffee Shop Launch', description: 'Entrepreneurs opening coffee shops use the Cafe Business Name Generator to find names that immediately convey warmth, quality, and community. A welcoming name helps create the atmosphere customers seek—a third place between home and work where they want to linger.' },
      { title: 'Bakery Cafe Branding', description: 'Bakery owners combining baked goods with cafe service use the generator to create names suggesting both fresh-baked warmth and comfortable gathering space. The right name communicates the dual offering while creating a cohesive brand identity.' },
      { title: 'Specialty Coffee Positioning', description: 'Third-wave coffee enthusiasts opening specialty cafes use the generator to find names that convey craft, quality, and expertise without sounding pretentious. A well-chosen name attracts coffee aficionados while remaining welcoming to all.' },
    ],
    faqs: [
      { question: 'What makes a good cafe name?', answer: 'A good cafe name should be warm and welcoming, suggest quality coffee and food, and create a sense of community gathering space. It should make people want to visit, linger, and return.' },
      { question: 'Should my cafe name include "coffee" or "cafe"?', answer: 'Including coffee-related words provides immediate clarity but isn\'t required. "Morning Brew" clearly suggests coffee while "The Cozy Corner" requires additional context but works if well-marketed. Consider your local competition and signage.' },
      { question: 'How important is the cafe name for attracting customers?', answer: 'Very important. Your name creates the first impression of atmosphere and experience. Warm, inviting names attract people seeking comfortable spaces. Clinical or generic names don\'t inspire visits.' },
      { question: 'What cafe naming trends should I consider?', answer: 'Current trends include location-based names, craft/artisan references, cozy imagery, and playful wordplay. Avoid overused terms like "Java" unless combined creatively. Third-wave coffee shops often use abstract or personal names.' },
      { question: 'Should I name my cafe after myself or family?', answer: 'Personal names (like "Rosa\'s Cafe" or "Anderson\'s Coffee") create intimacy and family feel. They work well for neighborhood cafes but may limit scalability. Consider whether you\'re building a personal legacy or a franchisable brand.' },
      { question: 'How do I create a name that feels like a community gathering space?', answer: 'Use words suggesting gathering (Commons, Collective, Corner), neighborhood (Local, Main Street), and connection (Meet, Gather, Together). Avoid corporate-sounding names that feel impersonal.' },
      { question: 'What words work well in cafe names?', answer: 'Effective words include coffee terms (Bean, Brew, Roast), warmth words (Cozy, Warm, Hearth), comfort terms (Haven, Nest, Nook), and time references (Morning, Dawn, Sunrise).' },
      { question: 'How do I check cafe name availability?', answer: 'Search local business registrations, verify domain availability, check social media handles, search for other cafes with similar names in your area, and consider trademark implications if planning expansion.' },
      { question: 'Should my cafe name work for food and coffee?', answer: 'If you offer significant food alongside coffee, choose a name that accommodates both. "Morning Brew" suggests coffee; "Sunrise Kitchen" suggests food; "The Daily Grind" works for both.' },
      { question: 'Can a good cafe name help with marketing?', answer: 'Absolutely. Memorable names generate word-of-mouth, look great on cups and merchandise, and create social media shareability. The right name becomes a marketing asset people want to share.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your cafe business is an essential step in creating a welcoming brand that attracts customers seeking warmth, quality, and community. Your name will appear on storefronts, coffee cups, menus, and social media—creating the first impression of the cozy experience inside.',
      steps: [
        { title: 'Define Your Cafe\'s Personality and Atmosphere', description: 'Before brainstorming names, clarify your cafe\'s unique character. Consider what type of cafe you\'re creating (coffee shop, bakery cafe, brunch spot, specialty roaster), what atmosphere you want (cozy and intimate, modern and sleek, rustic and homey), who your ideal customer is (remote workers, neighborhood families, coffee enthusiasts, students), what experience you want customers to have (quick and efficient, lingering and relaxed), and what differentiates you from other local cafes. Your answers guide the naming style—whether warm and traditional, modern and minimalist, or quirky and creative.' },
        { title: 'Create Warmth and Welcome', description: 'Cafes succeed by creating environments where people want to spend time. Your name should suggest comfort (a place to relax and unwind), welcome (everyone belongs here), warmth (physical and emotional coziness), and hospitality (care for guests). Words suggesting home, gathering, comfort, and warmth help create this essential cafe atmosphere from the first impression.' },
        { title: 'Evoke Quality and Craft', description: 'Today\'s cafe customers appreciate quality. Your name can communicate fresh ingredients (care in sourcing and preparation), craft approach (attention to detail and expertise), authenticity (real, genuine offerings), and specialty focus (particular expertise like single-origin or specific roasts). Terms suggesting artisan quality, handmade care, and specialty expertise attract discerning customers willing to pay premium prices.' },
        { title: 'Position as Community Gathering Space', description: 'Successful cafes become "third places"—neither home nor work but essential community spaces. Names can suggest neighborhood connection (local, rooted, part of the community), gathering function (where people meet and connect), regularity (part of daily routine), and belonging (a place for everyone).' },
        { title: 'Verify Availability and Fit', description: 'Ensure your chosen name is available and appropriate through business registration (local and state requirements), domain name (for your website and online ordering), social media (Instagram is important for cafes), local landscape (no similar cafes nearby), and trademark search (if planning expansion).' },
        { title: 'Test Practical Applications', description: 'Consider how your name works in real-world use: signage (readable and attractive on storefronts), cups and packaging (looks good on to-go items), menus (fits with your menu design aesthetic), word-of-mouth (easy to recommend to friends), and online search (findable when customers search).' },
        { title: 'Consider Future Growth', description: 'Think about your cafe\'s potential evolution: additional locations, wholesale coffee sales, catering services, and merchandise lines. Choose a name that supports growth while capturing your current essence.' },
      ],
    },
    businessNameIdeas: [
      { name: 'BrewedAwakening', description: 'Playful take on "rude awakening"—perfect for morning coffee spots.' },
      { name: 'TheCozyCorner', description: 'Directly communicates the warm, comfortable atmosphere customers seek.' },
      { name: 'MorningMurmur', description: 'Suggests the quiet bustle of morning cafe activity.' },
      { name: 'GoldenBeanCafe', description: 'Quality coffee focus with premium connotations.' },
      { name: 'HearthHouse', description: 'Warmth and home combined—inviting and comfortable.' },
      { name: 'TheGatheringGrounds', description: 'Community meeting place with coffee grounds wordplay.' },
      { name: 'SunriseSip', description: 'Morning coffee ritual with bright, cheerful energy.' },
      { name: 'ArtisanRoast', description: 'Positions as craft coffee with quality focus.' },
      { name: 'NestledNook', description: 'Cozy, tucked-away feeling of comfort and intimacy.' },
      { name: 'DailyRitual', description: 'Positions cafe as essential part of customer routines.' },
      { name: 'WarmCupCafe', description: 'Simple, direct warmth and comfort communication.' },
      { name: 'TheSteamingMug', description: 'Evokes aromatic, fresh coffee ready to enjoy.' },
      { name: 'CommonGrounds', description: 'Dual meaning—community space and coffee grounds.' },
      { name: 'MorningGloryCafe', description: 'Bright, cheerful energy for breakfast and coffee.' },
      { name: 'PerkUp', description: 'Energizing name for coffee\'s awakening benefits.' },
      { name: 'TheLocalRoast', description: 'Neighborhood positioning with quality coffee focus.' },
      { name: 'BreadAndBrew', description: 'Perfect for bakery cafes combining baked goods with coffee.' },
      { name: 'FiresideCoffee', description: 'Cozy warmth suggesting lingering conversation.' },
      { name: 'UrbanGrind', description: 'Modern, city-focused coffee shop positioning.' },
      { name: 'CuppaComfort', description: 'British-inspired warmth with comfort emphasis.' },
    ],
  },
  'cake': {
    slug: 'cake',
    name: 'Cake Business Name Generator',
    title: 'Free AI Cake Business Name Ideas Generator',
    description: 'Generate tempting, memorable names for bakeries, wedding cake designers, and celebration cake makers.',
    metaDescription: 'Bake up a fantastic cake business name with our free AI generator. Create tempting, memorable names for bakeries, wedding cake designers, and celebration cake makers. Quick, fun, and entirely hassle-free!',
    inputLabel: 'Describe your cake business...',
    inputPlaceholder: 'e.g. A custom wedding cake designer specializing in elegant, multi-tiered fondant cakes',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Elegant & Sophisticated', 'Sweet & Playful', 'Artisan & Crafted', 'Celebratory & Joyful'], default: 'Elegant & Sophisticated', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in bakeries, cake businesses, and confectionery enterprises. Your role is to generate tempting, delicious-sounding business names that evoke the sweetness, artistry, and celebration that cakes represent.

CAKE BUSINESS CONTEXT:

The cake and bakery industry encompasses:
- Custom cake designers
- Wedding cake specialists
- Birthday and celebration cakes
- Cupcake bakeries
- Wholesale cake suppliers
- Home-based cake businesses
- Cake decorating studios
- Specialty dietary cakes (vegan, gluten-free)

NAME CHARACTERISTICS FOR CAKE BUSINESSES:

1. **Tempting and Appetizing**
   - Makes mouths water
   - Evokes delicious anticipation
   - Suggests indulgence and sweetness
   - Examples: Delicious, Tasty, Sweet, Indulgent, Yummy

2. **Memorable and Unique**
   - Stands out among bakeries
   - Easy to recommend
   - Creates brand recognition
   - Examples: Distinctive wordplay, creative combinations

3. **Reflective of Cake Specialty**
   - Communicates specific offerings
   - Appeals to target celebrations
   - Suggests expertise
   - Examples: Wedding, Custom, Artisan, Designer

4. **Celebratory and Joyful**
   - Cakes mark special occasions
   - Happy, festive associations
   - Creates positive emotions
   - Examples: Celebrate, Joy, Party, Happy, Festive

OUTPUT REQUIREMENTS:

For each cake business name generated, provide:
- The business name
- A brief explanation of why it works for a cake business

Generate names that are:
- Deliciously appealing
- Celebration-appropriate
- Easy to remember and recommend
- Suitable for elegant and fun occasions
- Versatile across cake types`,
    useCases: [
      { title: 'Custom Cake Business Launch', description: 'Bakers starting custom cake businesses use the Cake Business Name Generator to find names that communicate artistry, quality, and celebration. A memorable name helps attract customers seeking special occasion cakes and builds a brand worth premium pricing.' },
      { title: 'Wedding Cake Specialization', description: 'Cake artists specializing in wedding cakes use the generator to create elegant brand names that appeal to brides and wedding planners. The right name conveys the sophistication and celebratory nature of wedding confections.' },
      { title: 'Home Bakery Branding', description: 'Home-based bakers transitioning from hobby to business use the generator to create professional brand names that legitimize their offerings. A polished name helps attract customers and supports growth beyond friends and family.' },
    ],
    faqs: [
      { question: 'What makes a good cake business name?', answer: 'A good cake business name should be tempting and appetizing, memorable and unique, and reflective of your cake specialty. It should evoke the sweetness, celebration, and artistry that cakes represent.' },
      { question: 'Should my cake business name include "cake" or "bakery"?', answer: 'Including cake-related words provides immediate clarity about your offerings. However, creative names like "Sweet Layers" suggest cakes without explicitly stating it. Consider your marketing strategy and local competition.' },
      { question: 'How important is the name for attracting cake customers?', answer: 'Very important. Cake customers often find bakers through referrals and online searches. A memorable, professional name that\'s easy to recommend helps word-of-mouth marketing and builds credibility for special occasion cakes.' },
      { question: 'Should I specialize my name (like "Wedding Cakes by...")?', answer: 'Specialized names attract targeted customers but may limit expansion. If you plan to offer birthday, wedding, and specialty cakes, choose a broader name. If focusing exclusively on weddings, specialization can help positioning.' },
      { question: 'Should I use my name in my cake business?', answer: 'Personal names (like "Baker Sarah" or "Emma\'s Cakes") create intimacy and personal connection. They work well for custom cake businesses where the baker\'s artistry is the brand. Consider whether you want to build a personal or scalable brand.' },
      { question: 'What words appeal to cake customers?', answer: 'Effective words include sweet terms (Sugar, Sweet, Honey), indulgence words (Decadent, Divine, Heavenly), baking terms (Layer, Frosted, Batter), and celebration words (Joy, Celebrate, Party).' },
      { question: 'How do I create a name that works for both weddings and birthdays?', answer: 'Choose celebratory terms that work for all occasions. "Sweet Celebrations" and "Joyful Layers" work for weddings and birthdays alike. Avoid names too specifically tied to one occasion type.' },
      { question: 'How do I check cake business name availability?', answer: 'Search your state\'s business registry, verify domain availability, check Instagram handles (important for cake display), search for local bakeries with similar names, and review trademark databases.' },
      { question: 'Should my cake business name photograph well?', answer: 'For cake businesses, visual presentation is crucial. Choose a name that looks elegant on cake boxes, photographs well in Instagram posts, and creates attractive branding for your portfolio.' },
      { question: 'Can I change my cake business name later?', answer: 'Yes, but rebranding is challenging—especially if you\'ve built word-of-mouth reputation. Wedding industry referrals particularly depend on consistent naming. Choose carefully from the start.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your cake business is a pivotal step in creating an irresistible brand that attracts customers celebrating life\'s sweetest moments. Your name will appear on cake boxes, business cards, social media, and in word-of-mouth recommendations—making it essential to select a name that evokes the delicious artistry you create.',
      steps: [
        { title: 'Define Your Cake Business Specialty', description: 'Before brainstorming names, clarify your unique focus. Consider what types of cakes you specialize in (wedding, birthday, custom, cupcakes, specialty dietary), who your ideal customer is (brides, parents, event planners, corporations), what style defines your cakes (elegant, whimsical, modern, classic, rustic), what price point you target (premium, accessible, luxury), and what makes your cakes different from other bakers. Your answers guide whether you need an elegant, sophisticated name or something playful and fun.' },
        { title: 'Create Temptation and Appetite Appeal', description: 'Cakes are indulgent treats—your name should make mouths water. Consider sweetness (words suggesting sugar, honey, and delicious flavors), indulgence (terms implying richness, decadence, and treat-worthy quality), anticipation (names that create desire and craving), and sensory appeal (words that evoke taste, texture, and aroma). Avoid clinical or generic names that don\'t create appetite appeal.' },
        { title: 'Communicate Celebration and Joy', description: 'Cakes mark life\'s special moments. Your name should convey celebration (parties, weddings, birthdays, achievements), joy (happiness, festivity, special occasions), memory-making (moments worth commemorating), and artistry (the craft and creativity in your work). Names that feel celebratory attract customers planning important events.' },
        { title: 'Reflect Your Specialty and Expertise', description: 'Your name can communicate specific strengths. For wedding focus, use elegant, romantic terminology. For children\'s cakes, use playful, whimsical language. For custom artistry, use craft and design references. For dietary specialty, use health or specialty indicators. However, ensure your name allows for service expansion if your offerings might grow.' },
        { title: 'Verify Availability and Professionalism', description: 'Check that your chosen name is available through business registration (state and local requirements), domain name (for your website and online ordering), social media (Instagram is crucial for cake businesses), local competition (no similar bakeries in your area), and trademark search (if planning expansion).' },
        { title: 'Test Visual and Verbal Appeal', description: 'Your cake business name should be beautiful on packaging and cake boxes, easy to say when recommending, memorable after a single mention, professional on contracts and invoices, and attractive in photography and social media.' },
        { title: 'Consider Growth Potential', description: 'Think about future possibilities: expanding cake types, opening a storefront, wholesale opportunities, and catering services. Choose a name that supports growth while capturing your current essence.' },
      ],
    },
    businessNameIdeas: [
      { name: 'SweetLayers', description: 'Directly evokes beautiful, multi-tiered cake artistry.' },
      { name: 'ButtercreamDreams', description: 'Delicious, dreamy quality with specific frosting reference.' },
      { name: 'CakeCouture', description: 'Positions cakes as high-fashion, custom creations.' },
      { name: 'TieredTreasures', description: 'Precious, valuable cakes in beautiful tier arrangements.' },
      { name: 'SugarAndSprinkles', description: 'Sweet, fun, and playful—perfect for celebration cakes.' },
      { name: 'DivineCrumb', description: 'Heavenly quality with baking terminology.' },
      { name: 'FrostedFantasy', description: 'Magical, imaginative cakes with beautiful frosting.' },
      { name: 'VelvetSlice', description: 'Luxurious texture reference suggesting red velvet and elegance.' },
      { name: 'WhiskedWonders', description: 'Baking action combined with amazing results.' },
      { name: 'CelebrationConfections', description: 'Directly ties to special occasion purpose.' },
      { name: 'LayeredLove', description: 'Emotional connection through beautiful cake layers.' },
      { name: 'TheFlourStudio', description: 'Artistic, creative space for baking artistry.' },
      { name: 'SweetElegance', description: 'Combines delicious taste with sophisticated presentation.' },
      { name: 'BatterBliss', description: 'Happy baking process creating joyful results.' },
      { name: 'DecadentDelights', description: 'Rich, indulgent treats that bring pleasure.' },
      { name: 'CrumbAndCelebrate', description: 'Baking reference with celebration focus.' },
      { name: 'SugarCanvas', description: 'Positions cakes as edible art created on sweet surfaces.' },
      { name: 'FlourishedCakes', description: 'Beautiful, elaborate decorations and flourishes.' },
      { name: 'TastyTiers', description: 'Simple, direct appeal to delicious layered cakes.' },
      { name: 'JoyfulConfections', description: 'Happy, celebratory sweets for special occasions.' },
    ],
  },
  'candle': {
    slug: 'candle',
    name: 'Candle Business Name Generator',
    title: 'Free AI Candle Business Name Ideas Generator',
    description: 'Generate evocative, atmospheric names for candle makers and home fragrance brands.',
    metaDescription: 'Let your candle business glow with a perfect name. Our AI generator sparks creativity for candle makers and home fragrance brands. Free and designed to illuminate your brand!',
    inputLabel: 'Describe your candle business...',
    inputPlaceholder: 'e.g. An artisan soy candle brand with natural fragrances inspired by nature and wellness',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Warm & Atmospheric', 'Natural & Eco-Friendly', 'Luxurious & Sophisticated', 'Artisan & Handcrafted'], default: 'Warm & Atmospheric', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in candle businesses, home fragrance, and artisan goods. Your role is to generate evocative, atmospheric business names that capture the warm glow, beautiful scents, and cozy ambiance that candles create.

CANDLE BUSINESS CONTEXT:

The candle industry encompasses:
- Artisan candle makers
- Scented candle brands
- Soy and eco-friendly candles
- Luxury candle lines
- Home fragrance collections
- Seasonal and holiday candles
- Specialty occasion candles
- Custom and personalized candles

NAME CHARACTERISTICS FOR CANDLE BUSINESSES:

1. **Evokes Emotion and Atmosphere**
   - Captures the ambiance candles create
   - Suggests relaxation and comfort
   - Creates sensory anticipation
   - Examples: Glow, Flicker, Warmth, Serenity, Calm

2. **Unique and Memorable**
   - Stands out in crowded candle market
   - Creates strong brand recognition
   - Easy for customers to recall
   - Examples: Distinctive combinations, creative wordplay

3. **Reflects Candle Specialty**
   - Communicates unique offerings
   - Appeals to target aesthetic
   - Suggests quality and craftsmanship
   - Examples: Soy, Handpoured, Artisan, Natural

4. **Sensory and Aromatic**
   - Evokes scent and fragrance
   - Suggests pleasant aromas
   - Creates olfactory anticipation
   - Examples: Scent, Fragrance, Aroma, Note, Essence

OUTPUT REQUIREMENTS:

For each candle business name generated, provide:
- The business name
- A brief explanation of why it works for a candle business

Generate names that are:
- Evocative and atmospheric
- Easy to remember
- Suitable for product labeling
- Appealing for gift-giving
- Versatile across scent collections`,
    useCases: [
      { title: 'Artisan Candle Brand Launch', description: 'Candle makers starting their own brands use the Candle Business Name Generator to find names that capture the atmospheric, sensory experience their candles create. An evocative name helps communicate quality and artistry, supporting premium pricing in competitive markets.' },
      { title: 'E-commerce Candle Shop Naming', description: 'Entrepreneurs launching online candle businesses use the generator to create memorable names that work across e-commerce platforms, social media, and packaging. A distinctive name helps build brand recognition and supports digital marketing efforts.' },
      { title: 'Eco-Friendly Candle Positioning', description: 'Makers specializing in soy, eco-friendly, or natural candles use the generator to find names that communicate their sustainable values. Names reflecting natural ingredients and conscious crafting appeal to environmentally-minded consumers.' },
    ],
    faqs: [
      { question: 'What makes a good candle business name?', answer: 'A good candle business name should evoke emotion and atmosphere, be unique and memorable, and reflect your candle specialty. It should capture the warm glow, beautiful scents, and cozy ambiance that candles create.' },
      { question: 'Should my candle business name include "candle"?', answer: 'Including "candle" provides immediate clarity but isn\'t required. "Ember Glow Candle Co." is clear; "Ember & Glow" suggests candles through imagery. Consider your marketing strategy and whether you might expand into other home fragrance products.' },
      { question: 'How important is the name for candle business success?', answer: 'Very important. The candle market is competitive, and customers often discover brands through social media and gift shopping. A memorable, evocative name that photographs well on labels creates strong brand recognition and supports word-of-mouth marketing.' },
      { question: 'What naming style works for luxury candle brands?', answer: 'Luxury candles benefit from sophisticated, minimal names using elegant words (Lumière, Essence, Maison) or evocative single words. Avoid cutesy or overly casual names that undermine premium positioning.' },
      { question: 'Should I use nature words for eco-friendly candles?', answer: 'Nature-inspired names (Forest, Meadow, Willow, Sage) effectively communicate eco-friendly positioning. They suggest natural ingredients and organic processes that conscious consumers seek.' },
      { question: 'What words work well in candle business names?', answer: 'Effective words include light/fire terms (Glow, Flame, Wick, Ember), atmosphere words (Cozy, Serene, Warm), scent references (Aroma, Fragrance, Essence), and nature terms (Garden, Forest, Wildflower).' },
      { question: 'How do I create a name that works across scent collections?', answer: 'Choose atmospheric names rather than specific scent names. "Ember Glow" works for all scents; "Lavender Light" limits your collection scope. Your brand name should be versatile while individual candles can have specific scent names.' },
      { question: 'How do I check candle business name availability?', answer: 'Search your state\'s business registry, verify domain availability, check Instagram and Etsy for existing candle businesses with similar names, and review trademark databases—especially important in the crowded candle market.' },
      { question: 'Should my candle business name photograph well?', answer: 'Absolutely. Candle businesses rely heavily on product photography for marketing. Choose a name that looks beautiful on labels, works in lifestyle photography, and creates attractive social media content.' },
      { question: 'Can a good name help me charge premium prices?', answer: 'Yes. An evocative, sophisticated name supports premium positioning. Names that suggest artisan quality, luxury, or unique atmosphere justify higher prices compared to generic-sounding alternatives.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your candle business is a crucial step in crafting a captivating brand that captures the warm glow, beautiful fragrances, and cozy ambiance your candles create. Your name will appear on labels, packaging, social media, and in every customer recommendation—making it essential to select a name that resonates with the sensory, atmospheric experience you provide.',
      steps: [
        { title: 'Define Your Candle Brand Identity', description: 'Before brainstorming names, clarify your unique positioning. Consider what type of candles you create (soy, beeswax, luxury, aromatherapy), who your ideal customer is (wellness seekers, gift givers, home decorators), what aesthetic defines your brand (minimal, bohemian, rustic, luxury), what experience you want customers to have (relaxation, romance, energy, focus), and what differentiates your candles from competitors. Your answers guide whether you need a name that sounds luxurious, natural, cozy, or artistic.' },
        { title: 'Evoke Emotion and Atmosphere', description: 'Candles create ambiance—your name should capture this. Consider warmth (the cozy comfort candles provide), light (the gentle glow that transforms spaces), scent (the aromatic experience that defines memories), and mood (the emotional atmosphere candles create). Words that suggest flickering flames, soft light, comfortable warmth, and sensory pleasure help customers anticipate the experience your candles provide.' },
        { title: 'Create Uniqueness and Memorability', description: 'The candle market is crowded—your name must stand out. Consider distinctiveness (different from the many candle brands on Etsy and in stores), memorability (easy for customers to recall when recommending), searchability (findable online without competing with unrelated results), and brandability (works across labels, packaging, and digital platforms). Creative combinations, evocative imagery, and unique wordplay help create names customers remember and share.' },
        { title: 'Reflect Your Specialty', description: 'Your name can communicate specific strengths. For eco-friendly focus, use nature terms and sustainability references. For luxury positioning, use sophisticated, elegant language. For artisan craft, use handmade, handpoured, and craft references. For aromatherapy benefits, use wellness, calm, and sensory terms. However, ensure your name allows for collection expansion as your offerings grow.' },
        { title: 'Verify Availability and Visual Appeal', description: 'Check comprehensive availability through business registration (state requirements), domain name (for your website), social media (Instagram and Pinterest are crucial for candle brands), Etsy and e-commerce (search for existing candle businesses), and trademark search (especially important in competitive market). Also consider how the name looks on product labels—candle packaging is a key brand element.' },
        { title: 'Test Across Brand Applications', description: 'Your candle business name should work beautifully on candle labels of various sizes, in product photography, on shipping boxes and packaging, in social media posts and stories, and in written recommendations. A name that photographs well and looks elegant across applications supports your marketing efforts.' },
        { title: 'Consider Collection and Growth', description: 'Think about future possibilities: seasonal and holiday collections, home fragrance expansion (diffusers, sprays), corporate and wholesale opportunities, and private label possibilities. Choose a name that accommodates growth while capturing your current essence.' },
      ],
    },
    businessNameIdeas: [
      { name: 'EmberGlow', description: 'Warm, glowing embers suggesting lasting warmth and comfort.' },
      { name: 'FlickerAndFlame', description: 'Captures the dancing movement of candlelight.' },
      { name: 'ScentsOfSerenity', description: 'Directly communicates aromatic relaxation and peace.' },
      { name: 'WickWhispers', description: 'Poetic, soft suggestion of gentle candlelight.' },
      { name: 'LuminousNest', description: 'Combines light with cozy home comfort.' },
      { name: 'CraftedGlow', description: 'Emphasizes handmade quality with warm results.' },
      { name: 'TwilightWick', description: 'Evening ambiance for wind-down relaxation.' },
      { name: 'MeadowFlame', description: 'Natural imagery with warm light—perfect for eco-friendly brands.' },
      { name: 'PourAndPonder', description: 'Contemplative, handcrafted candle experience.' },
      { name: 'GoldenHourCandles', description: 'Captures the beautiful, warm light of sunset.' },
      { name: 'SageAndSpark', description: 'Natural scent reference with igniting energy.' },
      { name: 'WhisperedLight', description: 'Soft, gentle illumination and atmosphere.' },
      { name: 'TheGlowingHearth', description: 'Home warmth and comforting fireplace associations.' },
      { name: 'FragrantFlicker', description: 'Combines scent and light in evocative name.' },
      { name: 'HandpouredHaven', description: 'Artisan quality creating peaceful refuge.' },
      { name: 'CozyKindling', description: 'Warm startup imagery for comfortable ambiance.' },
      { name: 'AromaAmbiance', description: 'Directly communicates scent and atmosphere creation.' },
      { name: 'IlluminatedSoul', description: 'Spiritual, meaningful light and reflection.' },
      { name: 'WildflowerWick', description: 'Natural, botanical inspiration for candle creation.' },
      { name: 'MeltedMoments', description: 'Captures the experience of time passing in candlelight.' },
    ],
  },
  'candy': {
    slug: 'candy',
    name: 'Candy Business Name Generator',
    title: 'Free AI Candy Business Name Ideas Generator',
    description: 'Generate sweet, playful names for candy shops, confectioneries, and sweet treat brands.',
    metaDescription: 'Satisfy cravings with an AI-generated candy business name. Create sweet, playful names for candy shops, confectioneries, and sweet treat brands. Quick, free, and designed for success!',
    inputLabel: 'Describe your candy business...',
    inputPlaceholder: 'e.g. A nostalgic candy shop featuring old-fashioned sweets and artisan chocolates',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Sweet & Playful', 'Nostalgic & Classic', 'Whimsical & Magical', 'Modern & Artisan'], default: 'Sweet & Playful', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in candy, confectionery, and sweet treat businesses. Your role is to generate playful, delightful business names that capture the joy, sweetness, and irresistible appeal of candy and confections.

CANDY BUSINESS CONTEXT:

The candy and confectionery industry encompasses:
- Candy shops and sweet stores
- Artisan chocolate makers
- Hard candy and lollipop producers
- Gummy and chewy candy creators
- Old-fashioned candy stores
- Modern candy boutiques
- Candy subscription services
- Custom candy for events

NAME CHARACTERISTICS FOR CANDY BUSINESSES:

1. **Sweet and Playful**
   - Evokes delightful, sugary treats
   - Suggests fun and joy
   - Appeals to children and adults alike
   - Examples: Sweet, Sugar, Treat, Yummy, Tasty

2. **Memorable and Whimsical**
   - Stands out with creative flair
   - Creates sense of wonder
   - Easy to recommend
   - Examples: Playful wordplay, fantasy elements

3. **Reflects Candy Assortment**
   - Communicates product variety
   - Appeals to specific candy lovers
   - Suggests specialty or expertise
   - Examples: Chocolate, Gummy, Lollipop, Vintage

4. **Joyful and Nostalgic**
   - Connects to childhood happiness
   - Creates positive emotions
   - Evokes happy memories
   - Examples: Joy, Happy, Childhood, Magic, Wonder

OUTPUT REQUIREMENTS:

For each candy business name generated, provide:
- The business name
- A brief explanation of why it works for a candy business

Generate names that are:
- Sweet and appealing
- Fun and memorable
- Appropriate for all ages
- Suitable for packaging
- Versatile across candy types`,
    useCases: [
      { title: 'Candy Shop Launch', description: 'Entrepreneurs opening candy stores use the Candy Business Name Generator to find names that immediately evoke sweetness, fun, and the joy of indulgence. A playful, memorable name helps create the whimsical atmosphere that draws customers—both children and nostalgic adults—into the store.' },
      { title: 'Artisan Confectionery Branding', description: 'Artisan candy makers launching their own brands use the generator to create names that communicate handcrafted quality while maintaining the delightful, joyful essence of candy. The right name attracts customers seeking premium, unique confections.' },
      { title: 'Online Candy Business Naming', description: 'Entrepreneurs starting candy subscription services or e-commerce candy businesses use the generator to create memorable names that work across digital platforms. A distinctive name helps build brand recognition and supports social media marketing.' },
    ],
    faqs: [
      { question: 'What makes a good candy business name?', answer: 'A good candy business name should be sweet and playful, memorable and whimsical, and reflective of your candy assortment. It should evoke the joy, sweetness, and irresistible appeal that makes candy delightful.' },
      { question: 'Should my candy business name appeal to children or adults?', answer: 'Both! Children are drawn to playful, fun names, while adults respond to nostalgia and quality cues. Names that work on multiple levels—whimsical yet sophisticated—attract the widest customer base.' },
      { question: 'How important is the name for candy shop success?', answer: 'Very important. Candy shopping is often impulse-driven and emotional. A fun, appealing name draws people into the store, creates positive associations, and makes the shop memorable for return visits and recommendations.' },
      { question: 'Should I include "candy" in my business name?', answer: 'Including candy-related words provides immediate clarity and helps with search discoverability. However, creative names like "Sugar Rush" suggest candy without explicitly stating it. Consider your marketing approach.' },
      { question: 'What words work well in candy business names?', answer: 'Effective words include sweet terms (Sugar, Candy, Sweet, Treat), playful words (Fun, Joy, Magic, Whimsy), texture references (Chewy, Gummy, Crunch), and nostalgic terms (Vintage, Classic, Penny).' },
      { question: 'Should my name reflect specific candy types?', answer: 'If you specialize (like artisan chocolates or gummies), specific names help positioning. If you offer variety, broader names allow flexibility. "Gummy Galaxy" is specific; "Sweet Wonders" accommodates everything.' },
      { question: 'How do I create a nostalgic candy shop name?', answer: 'Use vintage terminology (Penny Candy, Old-Fashioned, Shoppe), reference classic candy types, and evoke childhood memories. Names that connect to simpler times appeal to adults seeking nostalgic experiences.' },
      { question: 'How do I check candy business name availability?', answer: 'Search your state\'s business registry, verify domain availability, check social media handles, search for existing candy shops with similar names, and review trademark databases.' },
      { question: 'Should my candy business name photograph well?', answer: 'Yes! Candy is highly visual, and Instagram-worthy presentation matters. Choose a name that looks great on signage, packaging, and in photography. Bright, fun names translate to colorful branding.' },
      { question: 'Can a good name help me charge premium prices?', answer: 'For artisan or specialty candy, yes. Names suggesting quality, craftsmanship, or unique offerings support premium positioning. "Handcrafted Confections" justifies higher prices than "Discount Candy."' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your candy business is a pivotal step in creating a sweet brand that delights customers of all ages. Your name will appear on storefronts, packaging, social media, and in joyful recommendations—making it essential to select a name that captures the happiness, sweetness, and irresistible appeal that candy represents.',
      steps: [
        { title: 'Define Your Candy Business Identity', description: 'Before brainstorming names, clarify your sweet niche. Consider what types of candy you specialize in (chocolate, gummies, hard candy, artisan confections), who your primary customer is (children, nostalgic adults, gift givers, candy enthusiasts), what experience you want to create (nostalgic, modern, whimsical, sophisticated), what price point you target (bulk candy, premium artisan, accessible treats), and what makes your candy business unique. Your answers guide whether you need a playful, childlike name or something more sophisticated and premium.' },
        { title: 'Capture Sweetness and Playfulness', description: 'Candy is about joy and indulgence. Your name should evoke sweetness (the delicious taste that defines candy), fun (the playful happiness associated with treats), indulgence (the pleasure of enjoying something special), and joy (the smile that candy brings). Names that sound sweet, fun, and delightful attract customers seeking that mood-lifting treat experience.' },
        { title: 'Create Whimsy and Memorability', description: 'Candy businesses thrive on magical, memorable experiences. Consider whimsical names (names that feel enchanting and fantastical), creative wordplay (playful puns and unexpected combinations), distinctiveness (standing out from generic competitors), and shareability (names people enjoy saying and recommending). Consider fantasy elements, playful puns, and creative combinations that capture candy\'s magical appeal.' },
        { title: 'Appeal Across Generations', description: 'The best candy business names work for multiple audiences: children (attracted by fun, colorful, playful names), parents (comfortable bringing children to appropriately-named stores), adults (drawn by nostalgia or premium quality cues), and gift givers (seeking shops with appealing branding). Names that are playful without being juvenile reach the widest customer base.' },
        { title: 'Verify Availability and Visual Potential', description: 'Check comprehensive availability through business registration (state and local requirements), domain name (for online presence and e-commerce), social media (Instagram and TikTok for candy\'s visual appeal), local competition (no similar candy shops in your market), and trademark search (protect your brand). Also consider how the name translates to colorful, attractive packaging and signage.' },
        { title: 'Test with Target Customers', description: 'Before finalizing, gather feedback. Ask if the name sounds appealing and fun, if they would want to visit a candy shop with this name, if it feels appropriate for their anticipated experience, if they can easily remember and spell it, and if they would recommend it to friends.' },
        { title: 'Consider Growth and Expansion', description: 'Think about future possibilities: online sales and shipping, custom candy for events, wholesale to other retailers, and additional locations. Choose a name that accommodates growth while capturing your current sweet essence.' },
      ],
    },
    businessNameIdeas: [
      { name: 'SugarRush', description: 'Captures the energizing excitement of enjoying candy.' },
      { name: 'CandyCornerConfections', description: 'Neighborhood destination for sweet treats.' },
      { name: 'SweetEscape', description: 'Positions candy shop as destination from everyday life.' },
      { name: 'GummyGalaxy', description: 'Playful, cosmic name perfect for chewy candy specialists.' },
      { name: 'LollipopLane', description: 'Nostalgic, whimsical path to sweet treats.' },
      { name: 'TastyTreasures', description: 'Valuable, delicious discoveries await.' },
      { name: 'SugarSparkle', description: 'Shimmering sweetness with magical appeal.' },
      { name: 'WhimsicalSweets', description: 'Playful, imaginative candy experience.' },
      { name: 'CandyKingdom', description: 'Magical realm of sweet delights.' },
      { name: 'SweetDreams', description: 'Dreamy, wonderful candy experience.' },
      { name: 'SugarAndSpice', description: 'Classic phrase with playful, flavorful appeal.' },
      { name: 'ChewyCheers', description: 'Celebration through chewy, delightful treats.' },
      { name: 'CaramelCove', description: 'Cozy destination for caramel and sweet treats.' },
      { name: 'PennyCandy', description: 'Nostalgic, old-fashioned candy shop charm.' },
      { name: 'JoyfulJellies', description: 'Happy, bouncy, colorful candy treats.' },
      { name: 'SweetSensations', description: 'Delightful taste experiences and feelings.' },
      { name: 'CandyCarnival', description: 'Festive, fun, celebratory candy experience.' },
      { name: 'SugarplumShoppe', description: 'Fantasy-inspired, magical sweet destination.' },
      { name: 'TreatTrove', description: 'Treasure chest of delicious candy finds.' },
      { name: 'DelightfulDose', description: 'Perfect measure of sweet happiness.' },
    ],
  },
  'clothing-store': {
    slug: 'clothing-store',
    name: 'Clothing Store Business Name Generator',
    title: 'Free AI Clothing Store Business Name Ideas Generator',
    description: 'Generate trendy clothing store names for apparel shops, fashion boutiques, and retail stores.',
    metaDescription: 'Generate trendy clothing store names effortlessly with our AI-powered tool. Create stylish, memorable names for apparel shops, fashion boutiques, and retail stores. Free and easy to use!',
    inputLabel: 'Describe your clothing store...',
    inputPlaceholder: 'e.g. A trendy streetwear boutique for young professionals in urban areas',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Trendy & Modern', 'Classic & Elegant', 'Casual & Accessible', 'Luxury & Premium'], default: 'Trendy & Modern', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the fashion and clothing retail industry. Your role is to generate stylish, memorable business names that convey fashion expertise, trendy appeal, and unique shopping experiences for clothing stores, apparel shops, and fashion boutiques.

CLOTHING STORE INDUSTRY CONTEXT:

The clothing store industry encompasses:
- Women's and men's fashion boutiques
- Multi-brand clothing retailers
- Streetwear and urban fashion stores
- Sustainable and ethical fashion retailers
- Vintage and consignment stores
- Online clothing retailers
- Plus-size and specialty stores
- Family clothing stores

NAME CHARACTERISTICS FOR CLOTHING STORES:

1. **Relevance to Fashion and Style**
   - Names should clearly connect to clothing, fashion, or apparel
   - Evoke the style, vibe, or niche of the clothing offered
   - Use vocabulary that resonates with fashion-conscious consumers
   - Examples: Thread, Style, Garment, Attire, Wardrobe, Fashion

2. **Memorable and Easy to Pronounce**
   - Names must be easy to remember and recommend
   - Flow well when spoken aloud
   - Catchy and concise for lasting impression
   - Avoid complicated or obscure words

3. **Uniqueness and Trademark Safety**
   - Stand out from other clothing retailers
   - Avoid names similar to established fashion brands
   - Distinctive enough to establish market identity
   - Safe from potential trademark conflicts

4. **Versatility for Growth**
   - Accommodate expanding product lines
   - Work across different clothing categories
   - Suitable for both physical and online retail
   - Scalable for multiple locations

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a clothing store

Generate names that are:
- 1-3 words maximum
- Easy to spell and pronounce
- Stylish without being pretentious
- Appropriate for fashion marketing materials
- Versatile across clothing categories and customer segments`,
    useCases: [
      { title: 'Retail Clothing Store Launch', description: 'Entrepreneurs opening new clothing stores use the Clothing Store Business Name Generator to find names that communicate their style focus and target market. Whether launching a boutique for young professionals, a family clothing store, or a trendy streetwear shop, the generator provides names that attract the right customers and establish brand identity from day one.' },
      { title: 'Online Fashion Boutique Creation', description: 'E-commerce entrepreneurs building online clothing stores leverage the generator to create memorable brand names that work across digital platforms. The tool helps identify names that are available as domain names and social media handles while conveying the store\'s fashion aesthetic and product focus.' },
      { title: 'Clothing Store Rebranding', description: 'Existing apparel retailers looking to refresh their brand or expand into new markets use the generator to explore updated naming options. Whether transitioning from vintage to contemporary fashion or expanding from local to national presence, the tool provides names that reflect evolved positioning while maintaining appeal.' },
    ],
    faqs: [
      { question: 'What makes a good clothing store business name?', answer: 'A good clothing store name should be relevant to fashion and style, memorable and easy to pronounce, and unique enough to stand out. It should give potential customers a clear idea of what they can expect—whether vintage, trendy, luxury, or casual wear—while being catchy enough to remember and recommend.' },
      { question: 'Should my clothing store name include words like "boutique" or "apparel"?', answer: 'Including descriptors like "boutique," "apparel," "fashion," or "clothing" can help clarify your business type immediately. "Boutique" suggests curated, unique selections while "apparel" sounds more comprehensive. Choose based on your positioning and whether clarity or creativity is more important for your brand.' },
      { question: 'How important is my clothing store\'s name for branding?', answer: 'Your business name is foundational to your brand identity. It appears on storefronts, shopping bags, receipts, websites, and social media. A stylish, memorable name can justify premium pricing, attract fashion-conscious customers, and create the word-of-mouth referrals essential for retail success.' },
      { question: 'What naming trends are popular for clothing stores?', answer: 'Current trends include compound words (StyleStitch, ThreadBlend), location-inspired names (Garment Grove, Fashion Harbor), craft-focused names (Stitch Studio, Tailor & Thread), and minimalist single words (Haven, Mode, Thread). The best choice depends on your specific brand positioning.' },
      { question: 'Should I use my own name in my clothing store?', answer: 'Using your name (e.g., "Maria\'s Fashion") creates personal connection and works well for boutique owners building personal brands. However, non-personal names offer more flexibility for future sale or expansion. Consider whether personal branding or business scalability is your priority.' },
      { question: 'How do I ensure my clothing store name is available?', answer: 'Check multiple channels: business registrations in your state, domain names (.com preferred), Instagram and other social media handles, and trademark databases. Fashion retail is competitive, so consistent branding across all platforms is crucial for building recognition.' },
      { question: 'What words work well in clothing store names?', answer: 'Effective words include fashion vocabulary (Thread, Stitch, Fabric, Garment), style indicators (Chic, Vogue, Mode, Style), quality suggestions (Curated, Select, Bespoke), and welcoming places (Haven, Cove, Boutique, Emporium). Combining these creates appealing, relevant names.' },
      { question: 'Should my name reflect the specific clothing I sell?', answer: 'Names that are too specific (e.g., "Denim Dreams") can limit future expansion. Choose a name broad enough to accommodate growth while still communicating your current focus. "Style Haven" works for various clothing types better than "Only Jeans Shop."' },
      { question: 'How can my clothing store name appeal to my target customers?', answer: 'Consider your target demographic\'s values and preferences. Young, trendy customers respond to edgy, modern names. Luxury shoppers prefer sophisticated, refined names. Family-focused customers want welcoming, approachable names. Test options with your target market before finalizing.' },
      { question: 'What mistakes should I avoid when naming my clothing store?', answer: 'Avoid: names too similar to established brands, difficult-to-spell words, overly trendy spellings that date quickly, names that limit product expansion, geographical names that restrict growth, and anything that could be mispronounced or misunderstood by your target market.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your clothing store is a crucial step in building a strong brand that attracts fashion-conscious customers and stands out in the competitive retail market. Your business name will appear on everything from your storefront signage to shopping bags, receipts, websites, social media profiles, and marketing materials. It\'s the first impression potential customers have of your fashion offerings, making it essential to select a name that communicates style, quality, and the unique shopping experience you provide.',
      steps: [
        { title: 'Define Your Brand Identity and Target Market', description: 'Before generating names, clarify your clothing store\'s positioning. Consider what types of clothing you will primarily sell (casual, formal, athletic, vintage, designer), who your ideal customer is (age range, style preferences, budget level), what shopping experience you want to create (boutique luxury, trendy and fun, practical and accessible), what makes your store different from competitors, and whether you will operate online, in physical locations, or both. Your answers determine whether you need a name that sounds exclusive and sophisticated, young and trendy, practical and accessible, or niche-specific.' },
        { title: 'Embody Fashion and Style', description: 'Your clothing store name should connect to the world of fashion and convey style. Consider names that evoke fashion, clothing, or apparel, suggest your specific style aesthetic, sound stylish when spoken aloud, look attractive in written form on signage and marketing, and create positive associations with dressing well. Words like Thread, Style, Fashion, Garment, Attire, and Ensemble immediately communicate clothing retail while allowing creative combinations that establish unique identity.' },
        { title: 'Create Memorability and Distinctiveness', description: 'In a crowded clothing retail market, your name must be memorable and distinct. It should be easy to remember after one exposure, distinct from competitors in your area and online, simple to spell after hearing it spoken, effective for word-of-mouth recommendations, and concise enough for signage and social media handles. Test potential names by sharing them verbally and seeing if people can recall and spell them correctly.' },
        { title: 'Reflect Your Unique Value Proposition', description: 'If you have a specialty or unique selling point, consider incorporating it into your name. For sustainable fashion focus, consider EcoThreads or GreenWardrobe. For vintage/thrift, consider RetroRevive or VintageVault. For plus-size specialty, consider CurvesCollection or AllSizeStyle. For athletic wear, consider ActiveAttire or FitFashion. However, ensure the name remains broad enough to accommodate future expansion into related categories.' },
        { title: 'Verify Comprehensive Availability', description: 'Once you have promising candidates, conduct thorough availability checks. Check domain name availability (secure the .com version if possible for credibility), social media availability (Instagram, Facebook, Pinterest, and TikTok are crucial for fashion retail), business registration (verify the name isn\'t registered in your state), trademark search (ensure no conflicts exist in fashion retail categories), and local competition (confirm no nearby competitors have similar names).' },
        { title: 'Test with Your Target Audience', description: 'Before finalizing, test your top choices with people representing your target customers. Ask what type of clothing store the name suggests, whether it feels premium, accessible, trendy, or classic, whether they would be excited to discover this store, whether they would recommend it to friends, and what price range they would expect. Their feedback reveals perceptions you might have missed.' },
        { title: 'Consider Long-Term Growth and Evolution', description: 'Choose a name that accommodates future expansion: adding new clothing categories, opening additional locations, launching e-commerce alongside physical retail, expanding into accessories, shoes, or related products, and building a private label line. The ideal clothing store name is stylish, memorable, versatile, and positions your brand for growth while perfectly capturing the fashion experience you provide today.' },
      ],
    },
    businessNameIdeas: [
      { name: 'ThreadBlend', description: 'Suggests a variety of clothing styles mixed together—versatile, creative, and fashion-forward.' },
      { name: 'StyleStitch', description: 'Emphasizes craftsmanship and style—perfect for quality-focused clothing retailers.' },
      { name: 'FashionHarbor', description: 'A destination for fashionable items—welcoming and comprehensive selection.' },
      { name: 'ApparelArch', description: 'Architectural, structured approach to comprehensive clothing offerings.' },
      { name: 'FabricFusion', description: 'Implies a mix of different fabrics and styles—creative and diverse.' },
      { name: 'ChicShelter', description: 'A trendy, welcoming place for stylish clothes—boutique appeal with warmth.' },
      { name: 'VestureVault', description: 'Suggests a store full of clothing treasures—sophisticated and curated.' },
      { name: 'ClothCove', description: 'A cozy haven for clothing lovers—intimate and inviting.' },
      { name: 'GarmentGrove', description: 'An abundant selection of clothes—natural, organic growth imagery.' },
      { name: 'EnsembleEmporium', description: 'A wide array of complete outfit sets—comprehensive and coordinated.' },
      { name: 'AttireAlley', description: 'A go-to destination for all attire needs—accessible and varied.' },
      { name: 'WearWharf', description: 'Where various types of clothes arrive—dynamic and ever-changing.' },
      { name: 'OutfitOasis', description: 'A sanctuary for stylish outfits—refreshing fashion destination.' },
      { name: 'WardrobeWaves', description: 'Continuous influx of clothing styles—trendy and constantly updating.' },
      { name: 'TrendTrove', description: 'A treasure trove of trendy clothes—exciting discoveries await.' },
      { name: 'FashionForge', description: 'Where fashion is created and refined—innovative and quality-focused.' },
      { name: 'DapperDome', description: 'A destination for classy, stylish clothes—sophisticated and elegant.' },
      { name: 'CoutureCove', description: 'An intimate exploration of high fashion—boutique luxury appeal.' },
      { name: 'ModeManor', description: 'A sophisticated fashion destination with classic elegance.' },
      { name: 'StyleSanctuary', description: 'A dedicated space for style seekers—focused and fashionable.' },
    ],
  },
  'cookie': {
    slug: 'cookie',
    name: 'Cookie Business Name Generator',
    title: 'Free AI Cookie Business Name Ideas Generator',
    description: 'Generate mouthwatering, memorable names for bakeries, cookie shops, and sweet treat businesses.',
    metaDescription: 'Bake up a delightful cookie business name with our free AI generator. Create mouthwatering, memorable names for bakeries, cookie shops, and sweet treat businesses. Quick, fun, and hassle-free!',
    inputLabel: 'Describe your cookie business...',
    inputPlaceholder: 'e.g. An artisanal cookie bakery specializing in gourmet flavors and custom orders',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Sweet & Playful', 'Artisan & Gourmet', 'Nostalgic & Homey', 'Modern & Trendy'], default: 'Sweet & Playful', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the bakery and cookie industry. Your role is to generate tempting, memorable business names that convey deliciousness, quality, and irresistible appeal for cookie shops, bakeries, and sweet treat businesses.

COOKIE BUSINESS INDUSTRY CONTEXT:

The cookie business industry encompasses:
- Artisanal cookie bakeries and shops
- Gourmet cookie companies
- Cookie delivery services
- Wedding and event cookie caterers
- Wholesale cookie suppliers
- Specialty dietary cookie makers (gluten-free, vegan)
- Cookie subscription box services
- Online cookie retailers
- Cookie food trucks and pop-ups

NAME CHARACTERISTICS FOR COOKIE BUSINESSES:

1. **Mouthwatering and Irresistible**
   - Names should evoke deliciousness and temptation
   - Create cravings through sensory language
   - Suggest warmth, comfort, and indulgence
   - Examples: Crumble, Crisp, Golden, Butter, Sweet

2. **Memorable and Catchy**
   - Easy to remember after one exposure
   - Fun to say and share with others
   - Playful personality appropriate to sweet treats
   - Stand out in competitive bakery market

3. **Reflects Cookie Specialty**
   - Communicate the type of cookies offered
   - Suggest quality, freshness, or uniqueness
   - Align with specific cookie style or focus
   - Examples: Gourmet, Artisan, Classic, Homemade

4. **Warmth and Comfort Appeal**
   - Cookies are comfort food—names should feel warm
   - Evoke happy memories and emotions
   - Suggest the joy cookies bring
   - Family-friendly and approachable

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a cookie business

Generate names that are:
- 1-3 words maximum
- Fun and appetizing
- Easy to spell and pronounce
- Appropriate for food packaging and marketing
- Versatile for various cookie styles and occasions`,
    useCases: [
      { title: 'Artisanal Cookie Shop Launch', description: 'Bakers opening new cookie shops use the Cookie Business Name Generator to find names that convey the quality and deliciousness of their homemade creations. Whether specializing in gourmet flavors, classic favorites, or innovative recipes, the generator provides tempting names that attract sweet-tooth customers and establish a memorable brand identity.' },
      { title: 'Cookie Delivery or Subscription Service', description: 'Entrepreneurs launching cookie delivery or subscription box services use the generator to create memorable brand names that work in e-commerce and social media environments. The tool helps identify names that are catchy enough for viral marketing while conveying the delicious experience customers can expect.' },
      { title: 'Specialty Cookie Business Differentiation', description: 'Bakers specializing in dietary-specific cookies (gluten-free, vegan, keto) or occasion-specific products (wedding cookies, corporate gifts) use the generator to find names that communicate their specialty while maintaining broad appeal for their target market.' },
    ],
    faqs: [
      { question: 'What makes a good cookie business name?', answer: 'A good cookie business name should be mouthwatering and irresistible, making people crave your cookies just by hearing it. It should be memorable and catchy, reflecting your specialty—whether gourmet, classic, or specialty dietary. The name should evoke warmth, comfort, and the joy that cookies bring.' },
      { question: 'Should my cookie business name mention "cookie" directly?', answer: 'Including "cookie" or related words (biscuit, bakery, treats) can help clarify your business instantly. However, creative names without direct mention can work if they evoke sweetness and baking. Consider whether clarity or creative branding is more important for your market position.' },
      { question: 'How important is my cookie business name for marketing?', answer: 'Extremely important for food businesses. Your name appears on packaging, storefronts, social media, and delivery orders. A tempting name can make people crave your cookies before they\'ve even tried them. It should be easy to share and remember for word-of-mouth referrals.' },
      { question: 'What cookie business naming trends are popular now?', answer: 'Current trends include playful alliteration (Cookie Craze, Biscuit Bliss), comfort/nostalgia themes (Grandma\'s Kitchen, Homestyle), texture words (Crumble, Crisp, Chewy), and compound words (SugarSphere, DoughDelight). Authentic, artisanal-sounding names also perform well.' },
      { question: 'Should I use my own name in my cookie business?', answer: 'Using your name (e.g., "Sarah\'s Cookies") creates personal connection and authenticity—valuable for home bakers and artisan brands. However, it may limit sale potential. Non-personal names offer more flexibility for growth. Consider whether personal branding or business scalability matters more.' },
      { question: 'How do I check if my cookie business name is available?', answer: 'Check business registrations in your state, domain names, social media handles (especially Instagram and Facebook), and trademark databases. Also search for similar bakery names in your area. Food businesses benefit greatly from consistent branding across all platforms.' },
      { question: 'What words work well in cookie business names?', answer: 'Effective words include texture descriptions (Crumble, Crisp, Chewy, Melt), sweetness words (Sugar, Sweet, Honey), baking terms (Oven, Fresh, Batch, Dough), indulgence words (Delight, Bliss, Decadent), and welcoming places (Corner, Cottage, Kitchen, Jar).' },
      { question: 'Should my name reflect my cookie specialty?', answer: 'If you have a distinctive specialty (vegan, gluten-free, stuffed cookies), reflecting it can attract your target market. However, names that are too specific may limit future expansion. "Cookie Comfort" works for various styles better than "Only Oatmeal Cookies."' },
      { question: 'How can my cookie business name appeal to gift buyers?', answer: 'Many cookies are purchased as gifts. Names suggesting celebration, joy, or premium quality appeal to gift buyers. Consider how your name sounds in "I\'m sending you cookies from [Your Business Name]"—it should sound generous and special.' },
      { question: 'What mistakes should I avoid when naming my cookie business?', answer: 'Avoid: names that don\'t sound appetizing, difficult-to-spell words, names too similar to established brands, trendy spellings that may date quickly, names that could be confused with non-food businesses, and anything that doesn\'t pass the "craving test"—does hearing it make you want a cookie?' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your cookie business is a pivotal step in creating a tempting brand that makes mouths water and hearts warm. Your business name will appear on packaging, storefronts, delivery orders, social media, and marketing materials—it\'s the first taste customers get of your brand before they\'ve even tried your cookies. A well-chosen name should evoke the deliciousness, warmth, and joy that your cookies provide.',
      steps: [
        { title: 'Define Your Cookie Business Identity', description: 'Before generating names, clarify your cookie business\'s positioning. Consider what types of cookies you will specialize in (classic, gourmet, dietary-specific, decorated), who your ideal customer is (families, corporate clients, gift buyers, health-conscious consumers), what makes your cookies unique (family recipes, premium ingredients, innovative flavors, convenience), what\'s your business model (retail shop, delivery, subscription, wholesale), and what feeling you want customers to associate with your brand. Your answers guide whether you need a name that sounds artisanal and homemade, gourmet and premium, fun and playful, or health-focused and mindful.' },
        { title: 'Evoke Mouthwatering Appeal', description: 'Cookie businesses live and die by appetite appeal. Your name should make people hungry. Use words that evoke taste and texture, create sensory associations, suggest warmth from the oven, imply indulgence and satisfaction, and sound delicious when spoken. Words like Crumble, Golden, Buttery, Sweet, Fresh, and Melt create immediate cravings and positive food associations.' },
        { title: 'Create Memorability and Shareability', description: 'Cookie businesses thrive on recommendations and gifts. Your name must be easy to remember after one mention, fun to say and share with others, simple to spell for online searches, effective in "Have you tried [Your Name]?" conversations, and shareable in social media posts and gift tags. Test names by imagining friends recommending your cookies to each other—the name should feel natural and memorable in that context.' },
        { title: 'Reflect Your Specialty or Unique Value', description: 'If you have a distinctive specialty, consider incorporating it. For gourmet/luxury focus, consider GourmetGlee or DecadentDelights. For family/nostalgic appeal, consider Grandma\'sOven or HearthAndHome. For health-conscious options, consider WholesomeSweets or NutriNibbles. For custom/occasion focus, consider CelebrationCookies or CustomCraft. However, ensure the name remains broad enough to accommodate future product expansion.' },
        { title: 'Verify Comprehensive Availability', description: 'Once you have promising candidates, check availability across domain name (secure .com if possible for credibility), social media (check Instagram, Facebook, and TikTok—crucial for food businesses), business registration (verify the name isn\'t registered in your state), trademark search (ensure no conflicts exist in food/bakery categories), and local competition (confirm no nearby bakeries have similar names). Food businesses particularly need strong visual social media presence, making handle availability crucial.' },
        { title: 'Test with Potential Customers', description: 'Before finalizing, test your top choices. Ask if the name makes them want cookies, what type of cookies they imagine this business makes, whether they would feel excited to receive cookies from this place, whether they would recommend it to friends, and whether it feels premium, homey, or fun. Feedback reveals whether your name creates the right expectations and appetites.' },
        { title: 'Consider Growth and Brand Extension', description: 'Choose a name that accommodates future expansion: adding new baked goods beyond cookies, opening additional locations, launching shipping and e-commerce, creating branded merchandise, and catering and corporate services. The ideal cookie business name is delicious, memorable, versatile, and positions your brand for growth while perfectly capturing the sweet joy your cookies provide today.' },
      ],
    },
    businessNameIdeas: [
      { name: 'CrumbleCorner', description: 'Suggests a cozy destination known for deliciously crumbly cookies.' },
      { name: 'SugarySphere', description: 'A world of sweet, sugary cookie delights—comprehensive and tempting.' },
      { name: 'CrunchCove', description: 'A crunchy cookie haven—perfect for those who love crispy treats.' },
      { name: 'BiscuitBay', description: 'A destination offering a variety of delicious biscuits and cookies.' },
      { name: 'CookieCraze', description: 'Evokes excitement and passion for amazing cookies—energetic and memorable.' },
      { name: 'DelightDough', description: 'Celebrates the delightful cookie dough that creates magic.' },
      { name: 'TastyTreats', description: 'Simple, appetizing, and universally appealing—cookies as treats.' },
      { name: 'MeltMoment', description: 'Captures cookies that melt in your mouth—sensory and indulgent.' },
      { name: 'SweetSensation', description: 'Cookies that create wonderful taste sensations—experiential and delicious.' },
      { name: 'ChocoChamber', description: 'A chocolate cookie lover\'s paradise—rich and indulgent.' },
      { name: 'VanillaVault', description: 'A treasure chest of delightful vanilla and classic cookie flavors.' },
      { name: 'CookieCraft', description: 'Emphasizes artisanal craftsmanship in cookie creation.' },
      { name: 'GourmetGrid', description: 'A sophisticated selection of gourmet cookies—premium positioning.' },
      { name: 'BakersBounty', description: 'Suggests abundant, generous batches of freshly baked cookies.' },
      { name: 'DecadentDelights', description: 'Rich, indulgent cookie experiences for true treat lovers.' },
      { name: 'ScrumptiousSweets', description: 'Irresistibly delicious cookie offerings—playful and appetizing.' },
      { name: 'BiscuitBliss', description: 'Pure cookie happiness—simple and joyful branding.' },
      { name: 'CookieCarnival', description: 'A festive celebration of diverse cookie flavors and styles.' },
      { name: 'GoldenBatch', description: 'Perfectly baked, golden-brown cookie excellence.' },
      { name: 'ComfortCrumb', description: 'Cozy, comforting cookie moments in every crumb.' },
    ],
  },
  'cosmetic': {
    slug: 'cosmetic',
    name: 'Cosmetic Business Name Generator',
    title: 'Free AI Cosmetic Business Name Ideas Generator',
    description: 'Generate elegant, sophisticated names for makeup brands, skincare lines, and beauty products.',
    metaDescription: 'Get the perfect name for your cosmetic business with our AI generator. Create elegant, sophisticated names for makeup brands, skincare lines, and beauty products. Fast, free, and tailored for you!',
    inputLabel: 'Describe your cosmetic business...',
    inputPlaceholder: 'e.g. A clean beauty brand focusing on natural, organic skincare products',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Elegant & Luxurious', 'Natural & Clean', 'Bold & Vibrant', 'Modern & Minimalist'], default: 'Elegant & Luxurious', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the cosmetics and beauty industry. Your role is to generate elegant, alluring business names that convey beauty, quality, and sophistication for cosmetic brands, makeup companies, and beauty product businesses.

COSMETIC BUSINESS INDUSTRY CONTEXT:

The cosmetic business industry encompasses:
- Makeup brands and product lines
- Skincare companies
- Natural and organic beauty brands
- Indie cosmetic startups
- Private label cosmetic businesses
- Color cosmetics (lipstick, eyeshadow, foundation)
- Beauty subscription services
- Professional makeup artistry brands
- Clean beauty and cruelty-free brands

NAME CHARACTERISTICS FOR COSMETIC BUSINESSES:

1. **Beauty and Elegance**
   - Names should embody allure and sophistication
   - Evoke the transformative power of cosmetics
   - Suggest luxury, quality, and desirability
   - Examples: Allure, Radiance, Glamour, Elegance

2. **Memorable and Catchy**
   - Stand out in crowded beauty market
   - Easy to recall and recommend
   - Work well in beauty marketing contexts
   - Suitable for product naming extensions

3. **Reflects Cosmetics Specialty**
   - Communicate your unique beauty focus
   - Whether natural, luxury, colorful, or clinical
   - Align with target customer expectations
   - Examples: Pure, Vibrant, Luxe, Natural

4. **Visual and Aspirational Appeal**
   - Names that look beautiful in packaging
   - Create aspirational associations
   - Work across beauty media and social platforms
   - Evoke the beauty experience itself

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a cosmetic business

Generate names that are:
- 1-3 words maximum
- Beautiful in written and spoken form
- Easy to spell and pronounce
- Appropriate for luxury beauty marketing
- Versatile across cosmetic product categories`,
    useCases: [
      { title: 'Indie Cosmetic Brand Launch', description: 'Entrepreneurs launching new cosmetic brands use the Cosmetic Business Name Generator to find names that communicate their unique beauty philosophy. Whether focusing on clean beauty, bold colors, or luxury formulas, the generator provides elegant names that attract beauty-conscious customers and establish strong brand identity.' },
      { title: 'Private Label Beauty Line Creation', description: 'Beauty entrepreneurs creating private label cosmetic lines use the generator to develop brand names worthy of retail shelves and e-commerce platforms. The tool helps identify sophisticated names that compete with established beauty brands while conveying quality and desirability.' },
      { title: 'Makeup Artistry Business Branding', description: 'Professional makeup artists launching their own product lines or artistry services use the generator to create memorable brand names that reflect their aesthetic and expertise. The tool provides names that work across services, products, and social media platforms.' },
    ],
    faqs: [
      { question: 'What makes a good cosmetic business name?', answer: 'A good cosmetic business name embodies beauty and elegance while being memorable and catchy. It should reflect your cosmetics\' specialty—whether natural, luxury, colorful, or clinical—and evoke the transformative, aspirational experience that beauty products provide.' },
      { question: 'Should my cosmetic brand name include "beauty" or "cosmetics"?', answer: 'Including beauty-related words can help clarify your business type, but many successful cosmetic brands use abstract or evocative names (like Glossier or Fenty). Choose based on whether you want immediate clarity or more creative, aspirational branding.' },
      { question: 'How important is my cosmetic brand name for marketing?', answer: 'Crucial. Your name appears on every product, package, and social media post. In the visual world of beauty marketing, your name must look elegant in logos and packaging while sounding aspirational. It\'s foundational to building a beauty brand customers love.' },
      { question: 'What cosmetic brand naming trends are popular?', answer: 'Current trends include short, punchy names (Milk, Kosas, Ilia), founder names with modern twists, nature-inspired words (Rose, Petal, Bloom), luminosity words (Glow, Radiant, Luminous), and clean/minimal aesthetics reflected in simple names.' },
      { question: 'Should I use my own name in my cosmetic brand?', answer: 'Personal names work well for makeup artists building personal brands or beauty entrepreneurs with strong personal followings. However, non-personal names offer more flexibility for sale and expansion. Consider your long-term business goals and personal branding strategy.' },
      { question: 'How do I ensure my cosmetic brand name is available?', answer: 'Check business registrations, domain names (.com and beauty-specific domains), social media handles (Instagram is critical for beauty), and trademark databases in cosmetic categories. Beauty is highly competitive, so comprehensive checking is essential.' },
      { question: 'What words work well in cosmetic brand names?', answer: 'Effective words include beauty and glow terms (Radiance, Glow, Luminous), elegance words (Luxe, Chic, Elegant), nature words (Blossom, Rose, Petal), color words (Palette, Spectrum, Vivid), and aspirational terms (Goddess, Diva, Belle).' },
      { question: 'Should my name reflect specific products I sell?', answer: 'Names that are too product-specific (e.g., "Lipstick Luxe") limit future expansion. Choose a name broad enough to encompass skincare, makeup, and potential new categories while still communicating your beauty focus.' },
      { question: 'How can my cosmetic brand name appeal to influencers?', answer: 'Influencer-friendly names are: easy to pronounce in videos, photogenic for flat-lays and packaging shots, memorable for recommendations, and shareable across social platforms. Test how your name sounds in "I\'m using products from [Your Brand]."' },
      { question: 'What mistakes should I avoid when naming my cosmetic brand?', answer: 'Avoid: names too similar to established beauty brands, difficult-to-spell words, names that don\'t photograph well, overly trendy terms that may date quickly, names that limit product expansion, and anything that doesn\'t sound beautiful and aspirational.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your cosmetic business is a critical step in creating a captivating beauty brand that resonates with customers seeking transformation, confidence, and self-expression. Your business name will appear on every product, package, and marketing material—it\'s the first impression customers have of your beauty philosophy and product quality.',
      steps: [
        { title: 'Define Your Beauty Brand Identity', description: 'Before generating names, clarify your cosmetic brand\'s positioning. Consider what types of cosmetic products you will offer (makeup, skincare, hybrid, full range), who your ideal customer is (age, style preferences, values, budget), what makes your cosmetics unique (clean ingredients, bold colors, luxury formulas, inclusivity), what beauty philosophy you represent, and how you want customers to feel using your products. Your answers determine whether you need a name that sounds clean and natural, bold and glamorous, luxury and exclusive, or fun and accessible.' },
        { title: 'Embody Beauty and Elegance', description: 'Cosmetic brands sell transformation and confidence. Your name should evoke beauty, allure, and sophistication, create aspirational associations, sound elegant when spoken, look beautiful in written form and packaging, and suggest the transformative experience you provide. Words like Radiance, Glow, Luxe, Bloom, and Allure create immediate beauty associations while allowing creative brand development.' },
        { title: 'Create Memorability for Beauty Marketing', description: 'In the competitive beauty market, memorability is essential. Your name should be easy to remember for repurchase and recommendations, stand out in beauty retail environments, work well in influencer content and reviews, be simple to search and find online, and be effective for word-of-mouth marketing. Test names by imagining them in beauty tutorials, reviews, and friend recommendations—they should feel natural and appealing in these contexts.' },
        { title: 'Reflect Your Specialty or Unique Value', description: 'Consider incorporating your unique positioning. For clean/natural beauty, consider PurePetal, BotanicalBeauty, or GreenGlow. For bold/colorful cosmetics, consider VividVogue, ColorCraft, or SpectrumStyle. For luxury positioning, consider OpulenceBeauty, PrestigePalette, or LuxeLuminous. For inclusive brands, consider AllGlow, EveryBeauty, or TrueHue. However, ensure the name remains broad enough for future product expansion.' },
        { title: 'Verify Comprehensive Availability', description: 'Thoroughly check availability across domain name (secure .com and consider .beauty domain), social media (Instagram availability is crucial for beauty brands), business registration (verify in your state), trademark search (check cosmetic and beauty categories carefully), and international markets (if planning global expansion, check international availability). Beauty brands live on visual platforms, making consistent social media branding essential.' },
        { title: 'Test with Your Target Beauty Consumers', description: 'Before finalizing, test with people representing your target market. Ask if this name feels like a beauty brand, what type of cosmetics they imagine from this name, whether they would be excited to try products from this brand, whether they would recommend it to friends, and whether it feels premium, accessible, or edgy. Their feedback reveals whether your name creates the right beauty expectations.' },
        { title: 'Consider Brand Extension and Growth', description: 'Choose a name that accommodates future expansion: adding new product categories, launching in international markets, creating sub-brands or collections, building into a lifestyle brand, and developing professional vs. consumer lines. The ideal cosmetic business name is beautiful, memorable, versatile, and positions your brand for growth while perfectly capturing the beauty experience you provide.' },
      ],
    },
    businessNameIdeas: [
      { name: 'AllureAlley', description: 'A destination where alluring cosmetics await—inviting and glamorous.' },
      { name: 'BeautyBliss', description: 'Pure happiness through beauty products—simple and joyful.' },
      { name: 'GlamourGrove', description: 'A sophisticated destination filled with glamorous products.' },
      { name: 'RadianceReef', description: 'Products focused on enhancing natural radiance and glow.' },
      { name: 'EleganceEmpire', description: 'A grand cosmetic business offering refined, sophisticated products.' },
      { name: 'ChicCove', description: 'Trendy and stylish cosmetics in an intimate setting.' },
      { name: 'PoshPalette', description: 'High-quality, stylish products across the color spectrum.' },
      { name: 'LushLuster', description: 'Cosmetics that provide rich, luxurious luster and shine.' },
      { name: 'BlossomBeauty', description: 'Natural beauty that helps customers flourish and bloom.' },
      { name: 'DazzleDomain', description: 'A realm of dazzling cosmetics that make customers shine.' },
      { name: 'VibrantVogue', description: 'Lively, fashionable cosmetics for the style-conscious.' },
      { name: 'FinesseFountain', description: 'A source of cosmetic expertise and skillful beauty products.' },
      { name: 'SplendorSpree', description: 'A range of splendid cosmetic products for every occasion.' },
      { name: 'OpulenceOasis', description: 'A luxurious destination filled with premium cosmetics.' },
      { name: 'MajestyMakeup', description: 'Royal-grade cosmetics for those seeking the finest quality.' },
      { name: 'PurityParlor', description: 'Cosmetics focused on pure, natural ingredients and clean beauty.' },
      { name: 'GlamorousGalaxy', description: 'A universe of glamorous cosmetics for endless beauty exploration.' },
      { name: 'RadiantRhapsody', description: 'A beautiful composition of radiant cosmetic products.' },
      { name: 'SatinSanctuary', description: 'Smooth, lustrous cosmetics creating silky perfection.' },
      { name: 'SereneSplendor', description: 'Cosmetics that create a serene, beautiful appearance.' },
    ],
  },
  'craft-store': {
    slug: 'craft-store',
    name: 'Craft Store Business Name Generator',
    title: 'Free AI Craft Store Business Name Ideas Generator',
    description: 'Generate imaginative, inspiring names for art supply shops, craft stores, and creative businesses.',
    metaDescription: 'Craft the perfect name for your store with our AI-powered generator. Create imaginative, inspiring names for art supply shops, craft stores, and creative businesses. Free and easy to use!',
    inputLabel: 'Describe your craft store...',
    inputPlaceholder: 'e.g. A specialty yarn and knitting supply shop with classes for beginners',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Creative & Artistic', 'Cozy & Welcoming', 'Modern & Trendy', 'Professional & Comprehensive'], default: 'Creative & Artistic', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the arts, crafts, and creative retail industry. Your role is to generate imaginative, inspiring business names that convey creativity, artistry, and craftsmanship for craft stores, art supply shops, and creative retail businesses.

CRAFT STORE INDUSTRY CONTEXT:

The craft store industry encompasses:
- General craft supply retailers
- Specialty craft stores (knitting, scrapbooking, jewelry-making)
- Art supply shops
- Fabric and sewing stores
- DIY and maker spaces
- Online craft supply retailers
- Handmade marketplace sellers
- Craft workshop studios
- Educational craft businesses

NAME CHARACTERISTICS FOR CRAFT STORE BUSINESSES:

1. **Artistic and Expressive**
   - Names should evoke creativity and artistry
   - Suggest the beauty of handmade creation
   - Appeal to makers, artists, and craft enthusiasts
   - Examples: Create, Craft, Design, Make, Imagine

2. **Memorable and Inspiring**
   - Easy to remember for repeat visits
   - Spark creative inspiration
   - Stand out in retail landscape
   - Encourage sharing among craft communities

3. **Reflects Craft Focus**
   - Communicate your specialty or range
   - Whether general crafts or specific niche
   - Align with target crafter expectations
   - Examples: Yarn, Paper, Bead, Fabric, Thread

4. **Warmth and Community**
   - Craft stores are community gathering places
   - Names should feel welcoming and inclusive
   - Suggest the joy of creative making
   - Appeal to all skill levels

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a craft store

Generate names that are:
- 1-3 words maximum
- Creative and inspiring
- Easy to spell and pronounce
- Welcoming to all skill levels
- Versatile across craft categories`,
    useCases: [
      { title: 'Craft Supply Store Opening', description: 'Entrepreneurs opening craft supply stores use the Craft Store Business Name Generator to find names that attract creative customers and communicate the breadth of their offerings. Whether providing general craft supplies or specializing in specific materials, the generator provides inspiring names that establish welcoming brand identity.' },
      { title: 'Online Craft Business Launch', description: 'Crafters launching online supply businesses or Etsy shops use the generator to create memorable brand names that work across e-commerce platforms and social media. The tool helps identify names that are available as domain names while conveying creativity and quality.' },
      { title: 'Craft Workshop or Studio Branding', description: 'Craft educators and workshop facilitators use the generator to name businesses that offer both supplies and classes. The tool provides names that communicate both the retail and educational aspects of craft businesses, attracting customers seeking materials and learning opportunities.' },
    ],
    faqs: [
      { question: 'What makes a good craft store business name?', answer: 'A good craft store name should be artistic and expressive, evoking creativity and the joy of making. It should be memorable and inspiring, reflecting your craft focus—whether general supplies or specific niches. The name should feel welcoming to crafters of all skill levels.' },
      { question: 'Should my craft store name mention specific crafts?', answer: 'Including specific crafts (yarn, beads, paper) can attract niche customers but may limit perceived offerings. General terms (Craft, Create, Design) offer more versatility. Choose based on whether you\'re building a specialty shop or comprehensive craft destination.' },
      { question: 'How important is my craft store name for building community?', answer: 'Very important. Craft stores often become community hubs where crafters gather, learn, and share. Your name should feel welcoming and inclusive, encouraging customers to see your store as more than a supplier—as a creative home.' },
      { question: 'What craft store naming trends are popular now?', answer: 'Current trends include artisan/maker vocabulary (Artisan, Maker, Handmade), cozy/cottage imagery (Cottage, Nook, Haven), action words (Create, Make, Stitch), and community-focused names (Collective, Studio, Workshop). Authentic, warm names resonate with crafters.' },
      { question: 'Should I use my own name in my craft store?', answer: 'Using your name creates personal connection, especially for shops known for owner expertise. However, non-personal names offer more flexibility for sale or expansion. Consider whether personal branding or business scalability is your priority.' },
      { question: 'How do I check if my craft store name is available?', answer: 'Check business registrations, domain names, social media handles (Pinterest is crucial for crafts), and trademark databases. Also search craft community platforms and local craft stores. Crafters share discoveries enthusiastically, so unique naming matters.' },
      { question: 'What words work well in craft store names?', answer: 'Effective words include making words (Create, Craft, Make, Design), material words (Yarn, Thread, Bead, Paper), inspiration words (Imagine, Dream, Wonder), cozy places (Cottage, Corner, Nook), and community words (Studio, Workshop, Collective).' },
      { question: 'Should my name reflect my target crafter audience?', answer: 'Consider whether you\'re targeting beginners, advanced crafters, or specific craft communities. Names like "Simply Craft" appeal to beginners, while "Artisan\'s Workshop" attracts experienced makers. Your name should match your target customer\'s identity.' },
      { question: 'How can my craft store name encourage creativity?', answer: 'Names using imagination and creation vocabulary inspire customers. Words like "Dream," "Imagine," "Create," and "Inspire" suggest that your store is where creative ideas come to life. This positions your store as more than supplies—as a source of inspiration.' },
      { question: 'What mistakes should I avoid when naming my craft store?', answer: 'Avoid: names too similar to established craft chains, overly specific names that limit growth, difficult-to-spell words, names that feel exclusive rather than welcoming, and anything that doesn\'t convey the joy and creativity of crafting.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your craft store is a pivotal step in creating an imaginative brand that inspires creativity and welcomes makers of all skill levels. Your business name will appear on your storefront, bags, social media, and marketing materials—it\'s the first touchpoint customers have with your creative brand.',
      steps: [
        { title: 'Define Your Craft Business Identity', description: 'Before generating names, clarify your craft store\'s positioning. Consider what types of craft supplies you will primarily offer (general, yarn/fiber, paper, beads, art supplies), who your ideal customer is (beginners, advanced crafters, specific craft communities), whether you will offer workshops, classes, or community spaces, what makes your store different from craft chains, and what atmosphere you want to create. Your answers determine whether you need a name that sounds specialized or general, professional or cozy, educational or retail-focused.' },
        { title: 'Embody Creativity and Artistry', description: 'Craft stores sell the tools of creative expression. Your name should evoke creativity, imagination, and artistic potential, suggest the joy of making things by hand, sound inspiring and inviting, appeal to the maker identity of your customers, and communicate that creativity happens here. Words like Create, Craft, Design, Imagine, and Artisan create immediate creative associations while allowing unique brand development.' },
        { title: 'Create Warmth and Welcoming Appeal', description: 'Craft stores thrive as community gathering places. Names should feel inclusive and welcoming, suggest a friendly destination for all skill levels, evoke the cozy comfort of creative spaces, encourage browsing, learning, and community, and make customers feel they belong. Words suggesting places (Cottage, Corner, Haven, Nook) create warm, inviting imagery that attracts crafters seeking inspiration and connection.' },
        { title: 'Reflect Your Specialty or Unique Focus', description: 'If you have a distinctive specialty, consider incorporating it. For yarn/fiber arts, consider YarnYonder or FiberFortress. For paper/scrapbooking, consider PaperParadise or CreativeCuts. For beading/jewelry, consider BeadsBay or SparkleSupply. For sewing/quilting, consider StitchStudio or FabricFountain. For general/comprehensive offerings, consider CraftyCove or CreateCorner. Balance specificity with room for future expansion into related categories.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (secure .com if possible), social media (Pinterest is particularly important for craft businesses), business registration (verify in your state), trademark search (check retail and craft categories), and craft platform presence (search Etsy, Ravelry, and craft communities). Crafters actively share discoveries on visual platforms, making consistent branding essential.' },
        { title: 'Test with Your Craft Community', description: 'Before finalizing, test with people representing your target crafters. Ask if this name feels like a creative destination, what types of supplies they would expect to find, whether they would feel welcome regardless of skill level, whether they would recommend this store to fellow crafters, and whether it inspires them to create. Their feedback reveals whether your name creates the right expectations and emotions.' },
        { title: 'Consider Growth and Community Building', description: 'Choose a name that accommodates future expansion: adding new craft categories, opening additional locations, launching e-commerce, expanding workshop and class offerings, and building online community and content. The ideal craft store name is creative, welcoming, versatile, and positions your brand for growth while perfectly capturing the joy of making and creating.' },
      ],
    },
    businessNameIdeas: [
      { name: 'ArtisanArcade', description: 'A destination selling artisan-quality craft supplies with variety.' },
      { name: 'CraftyCove', description: 'A cozy store providing a range of crafty items and inspiration.' },
      { name: 'CreationCorner', description: 'A creative corner full of supplies for endless projects.' },
      { name: 'HandmadeHaven', description: 'A haven offering supplies for handmade creations.' },
      { name: 'DreamyDesigns', description: 'A store known for inspiring dreamy craft designs.' },
      { name: 'InspirationIsle', description: 'A destination that provides creative inspiration and supplies.' },
      { name: 'CraftingCottage', description: 'A cozy cottage feeling with comprehensive craft supplies.' },
      { name: 'ArtfulArc', description: 'Known for artful and high-quality craft items.' },
      { name: 'ImaginationImpulse', description: 'A store that stimulates creative imagination.' },
      { name: 'DesignerDome', description: 'A destination offering designer-quality craft supplies.' },
      { name: 'CreativityCraze', description: 'Capturing the excitement and passion of creative making.' },
      { name: 'MakeAndMold', description: 'Encouraging the hands-on process of making and shaping.' },
      { name: 'StitchSphere', description: 'A comprehensive destination for stitching and sewing supplies.' },
      { name: 'KnitNook', description: 'A cozy corner specializing in knitting supplies.' },
      { name: 'BeadsBay', description: 'A destination known for excellent bead selection.' },
      { name: 'SewingSanctuary', description: 'A dedicated space for sewing enthusiasts.' },
      { name: 'YarnYard', description: 'An abundant selection of yarns for fiber artists.' },
      { name: 'FeltFortress', description: 'A stronghold for felt crafts and textile arts.' },
      { name: 'PaperPantry', description: 'A well-stocked source for paper crafts and supplies.' },
      { name: 'MakersMeadow', description: 'A welcoming space for makers of all kinds.' },
    ],
  },
  'crochet': {
    slug: 'crochet',
    name: 'Crochet Business Name Generator',
    title: 'Free AI Crochet Business Name Ideas Generator',
    description: 'Generate charming, memorable names for yarn shops, handmade goods, and fiber arts businesses.',
    metaDescription: 'Knit together a unique crochet business name with our AI generator. Create charming, memorable names for yarn shops, handmade goods, and fiber arts businesses. Fast, free, and creative!',
    inputLabel: 'Describe your crochet business...',
    inputPlaceholder: 'e.g. A handmade amigurumi shop selling cute crocheted toys and patterns',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Cozy & Charming', 'Modern & Trendy', 'Whimsical & Playful', 'Classic & Elegant'], default: 'Cozy & Charming', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the fiber arts and crochet industry. Your role is to generate charming, creative business names that convey handmade quality, craftsmanship, and cozy appeal for crochet businesses, yarn shops, and handmade goods sellers.

CROCHET BUSINESS INDUSTRY CONTEXT:

The crochet business industry encompasses:
- Handmade crochet product sellers
- Crochet pattern designers
- Yarn and fiber supply shops
- Custom crochet order businesses
- Crochet tutorial and course creators
- Amigurumi and toy makers
- Crochet clothing and accessory designers
- Baby and children's crochet specialists
- Home décor crochet artists

NAME CHARACTERISTICS FOR CROCHET BUSINESSES:

1. **Charming and Handmade**
   - Names should highlight the handmade nature of crochet
   - Evoke warmth, personal touch, and care
   - Suggest the time and skill invested in each piece
   - Examples: Handmade, Crafted, Stitched, Hooked

2. **Memorable and Cozy**
   - Easy to remember and share
   - Evoke the comfort of crocheted items
   - Create warm, fuzzy feelings
   - Suggest the tactile pleasure of yarn

3. **Reflects Crochet Style**
   - Communicate your specific crochet focus
   - Whether modern, vintage, whimsical, or classic
   - Align with target customer aesthetics
   - Examples: Bohemian, Classic, Modern, Whimsical

4. **Fiber Arts Community Appeal**
   - Names that resonate with crochet enthusiasts
   - Suggest expertise and passion
   - Work within the broader yarn crafts community
   - Build connection with fellow fiber artists

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a crochet business

Generate names that are:
- 1-3 words maximum
- Charming and warm
- Easy to spell and pronounce
- Authentic to fiber arts culture
- Versatile across crochet specialties`,
    useCases: [
      { title: 'Handmade Crochet Product Business', description: 'Crocheters launching businesses selling handmade items use the Crochet Business Name Generator to find names that communicate the handcrafted quality and care invested in each piece. Whether selling amigurumi, blankets, or wearables, the generator provides charming names that attract customers seeking unique, handmade goods.' },
      { title: 'Crochet Pattern Designer Branding', description: 'Pattern designers creating and selling crochet patterns use the generator to develop brand names that work across platforms like Ravelry, Etsy, and their own websites. The tool helps identify names that resonate with the fiber arts community while being memorable and professional.' },
      { title: 'Yarn Shop or Crochet Supply Business', description: 'Entrepreneurs opening yarn shops or crochet supply businesses use the generator to create inviting names that attract fiber artists. The tool provides names that communicate expertise in the craft while feeling welcoming to crocheters of all skill levels.' },
    ],
    faqs: [
      { question: 'What makes a good crochet business name?', answer: 'A good crochet business name should be charming and evoke the handmade nature of your products. It should be memorable and cozy, reflecting your crochet style—whether modern, vintage, or whimsical. The name should resonate with the fiber arts community and communicate the care invested in each creation.' },
      { question: 'Should my crochet business name include "crochet" or "yarn"?', answer: 'Including crochet-specific words can help customers immediately understand your business, especially on platforms like Etsy. However, broader fiber arts terms allow flexibility if you expand into knitting or other crafts. Consider your long-term business plans and target audience.' },
      { question: 'How important is my crochet business name on platforms like Etsy?', answer: 'Very important. On Etsy and craft platforms, your name appears in search results and helps customers remember and return to your shop. A distinctive, memorable name also aids word-of-mouth referrals within the tight-knit crochet community.' },
      { question: 'What crochet business naming trends are popular?', answer: 'Current trends include yarn and fiber vocabulary (Loop, Stitch, Hook), cozy/comfort imagery (Nest, Haven, Snug), handmade emphasis (Crafted, Made, Artisan), whimsical names for amigurumi sellers, and modern/minimalist names for contemporary crochet designs.' },
      { question: 'Should I use my own name in my crochet business?', answer: 'Using your name creates personal connection valued by handmade customers who appreciate knowing the maker. Many successful fiber artists use their names. However, consider whether you might sell the business or want the brand to grow beyond you personally.' },
      { question: 'How do I check if my crochet business name is available?', answer: 'Check Etsy shop names, Ravelry designer names, Instagram handles, domain names, and business registrations. Also search general craft platforms and local yarn shops. The crochet community is connected, so having a unique name matters.' },
      { question: 'What words work well in crochet business names?', answer: 'Effective words include crochet terms (Hook, Stitch, Loop, Yarn, Fiber), texture words (Soft, Cozy, Warm, Plush), handmade vocabulary (Crafted, Made, Artisan), comfort words (Nest, Haven, Home), and whimsical terms (Wonder, Magic, Dream).' },
      { question: 'Should my name reflect my crochet specialty?', answer: 'If you have a distinctive specialty (amigurumi, baby items, home décor), reflecting it can attract your target market. However, names that are too specific may limit future expansion. "Cozy Creations" works for various crochet items better than "Only Blankets."' },
      { question: 'How can my crochet business name appeal to gift buyers?', answer: 'Many crochet items are purchased as meaningful gifts. Names suggesting care, comfort, and handmade quality appeal to gift buyers. Consider how your name sounds in "I got you a gift from [Your Business]"—it should convey thoughtfulness and quality.' },
      { question: 'What mistakes should I avoid when naming my crochet business?', answer: 'Avoid: names too similar to established fiber arts brands, spellings that are hard to type in searches, names that don\'t feel handmade or authentic, overly generic terms, and names that limit future expansion. Your name should feel personal and crafted, like your products.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your crochet business is a pivotal step in creating a distinctive brand that resonates with fiber arts enthusiasts and customers seeking handmade quality. Your business name will appear on product tags, Etsy shops, social media, and craft fair displays—it\'s how customers remember and recommend your work.',
      steps: [
        { title: 'Define Your Crochet Business Identity', description: 'Before generating names, clarify your crochet business\'s positioning. Consider what types of crochet items you will create (amigurumi, wearables, home décor, baby items), whether you will sell finished products, patterns, or both, who your ideal customer is (other crocheters, gift buyers, new parents, home decorators), what makes your crochet style unique, and what platforms you will sell on (Etsy, craft fairs, own website). Your answers determine whether you need a name that sounds whimsical and cute, sophisticated and modern, cozy and traditional, or professional and pattern-focused.' },
        { title: 'Embody Handmade Charm', description: 'Crochet customers value the handmade, personal nature of the craft. Your name should evoke the warmth and care of handmade items, suggest the time and skill invested in each piece, sound personal and authentic, create emotional connection, and communicate quality craftsmanship. Words like Handmade, Crafted, Hooked, and Stitched create immediate understanding of your handcrafted offerings.' },
        { title: 'Create Cozy, Memorable Appeal', description: 'Crocheted items are associated with comfort and warmth. Names should evoke cozy feelings, be easy to remember for repeat customers, be pleasant to share within crochet communities, work well for gift-giving contexts, and suggest the tactile pleasure of yarn. Words like Cozy, Warm, Nest, Haven, and Snug create the comfortable imagery associated with crochet.' },
        { title: 'Reflect Your Unique Crochet Style', description: 'If you have a distinctive style, consider incorporating it. For modern/minimalist, consider CleanLines or ModernLoop. For vintage/nostalgic, consider GrandmaStitch or HeritageHook. For whimsical/cute, consider HookedOnWhimsy or YarnMagic. For bohemian, consider BohoStitch or FreeSpiritFiber. For classic/elegant, consider ElegantStitch or RefinedHook. Balance style specificity with room for evolution as your crochet interests develop.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across Etsy (search existing shop names), Ravelry (check designer names), Instagram (crucial for crochet businesses), domain name (for your own website), and business registration (your state requirements). The crochet community actively shares on social platforms, making consistent naming essential.' },
        { title: 'Test with Your Fiber Arts Community', description: 'Before finalizing, test with people representing your target customers. Ask if this name feels like a crochet business, what types of items they would expect from this seller, whether it feels handmade and personal, whether they would recommend it to fellow crocheters, and whether it feels warm and authentic. Their feedback reveals whether your name creates the right expectations and connections.' },
        { title: 'Consider Growth Within Fiber Arts', description: 'Choose a name that accommodates future expansion: adding new crochet categories, expanding into knitting or other fiber arts, launching pattern design alongside products, teaching workshops or courses, and growing beyond Etsy to own e-commerce. The ideal crochet business name is charming, memorable, authentic, and positions your brand for growth while perfectly capturing the handmade warmth of your creations.' },
      ],
    },
    businessNameIdeas: [
      { name: 'StitchSanctuary', description: 'A sanctuary dedicated to beautiful stitches and crochet creations.' },
      { name: 'CraftyCrochet', description: 'Simple, clear, and emphasizing the crafty nature of handmade goods.' },
      { name: 'HookHaven', description: 'A haven for those who love working with the crochet hook.' },
      { name: 'YarnYonder', description: 'Suggesting a journey into the wonderful world of yarn.' },
      { name: 'PatternParadise', description: 'A paradise of beautiful crochet patterns and designs.' },
      { name: 'LoopsLuxury', description: 'Luxurious loops creating premium crochet items.' },
      { name: 'ThreadTreasure', description: 'Treasured items created with thread and care.' },
      { name: 'FiberFantasy', description: 'A fantasy world of fiber creations and possibilities.' },
      { name: 'WeaveWonder', description: 'Creating wonder through the art of weaving yarn.' },
      { name: 'TangleTranquility', description: 'Finding peace and calm through the rhythmic craft of crochet.' },
      { name: 'GrannySquareSanctum', description: 'Celebrating the beloved granny square pattern tradition.' },
      { name: 'KnotNest', description: 'A cozy nest where knots become beautiful creations.' },
      { name: 'PurlPalace', description: 'A grand destination for stitch excellence and quality.' },
      { name: 'LaceLagoon', description: 'Delicate, beautiful lacey crochet creations.' },
      { name: 'HookedHaven', description: 'A haven for those hooked on the art of crochet.' },
      { name: 'CozyCraft', description: 'Emphasizing the cozy comfort of handcrafted crochet items.' },
      { name: 'WovenWhimsy', description: 'Whimsical creations woven with creativity and care.' },
      { name: 'ThreadedTreasures', description: 'Treasured items created thread by thread.' },
      { name: 'YarnYard', description: 'An abundant selection and resource for yarn lovers.' },
      { name: 'SnugStitch', description: 'Creating snug, comfortable items with every stitch.' },
    ],
  },
  'dessert': {
    slug: 'dessert',
    name: 'Dessert Business Name Generator',
    title: 'Free AI Dessert Business Name Ideas Generator',
    description: 'Generate mouthwatering, memorable names for bakeries, patisseries, and sweet shops.',
    metaDescription: 'Sweeten your dessert business with a perfect name from our free AI generator. Create mouthwatering, memorable names for bakeries, patisseries, and sweet shops. Try it now!',
    inputLabel: 'Describe your dessert business...',
    inputPlaceholder: 'e.g. A French-inspired patisserie specializing in macarons and elegant pastries',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Elegant & Sophisticated', 'Sweet & Playful', 'Indulgent & Luxurious', 'Modern & Trendy'], default: 'Elegant & Sophisticated', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the dessert and confectionery industry. Your role is to generate tempting, memorable business names that convey indulgence, sweetness, and delicious appeal for dessert shops, bakeries, and sweet treat businesses.

DESSERT BUSINESS INDUSTRY CONTEXT:

The dessert business industry encompasses:
- Dessert cafes and lounges
- Pastry shops and patisseries
- Ice cream parlors and gelaterias
- Cake and cupcake bakeries
- Gourmet dessert bars
- Dessert catering services
- Specialty dessert makers (macarons, churros, etc.)
- Vegan and health-conscious dessert shops
- Dessert food trucks and pop-ups

NAME CHARACTERISTICS FOR DESSERT BUSINESSES:

1. **Delicious and Indulgent**
   - Names should evoke temptation and craving
   - Suggest rich, satisfying sweetness
   - Create appetite appeal
   - Examples: Decadent, Indulgent, Luscious, Rich

2. **Memorable and Crave-Inducing**
   - Easy to remember and share
   - Create lasting impressions
   - Trigger sweet cravings
   - Stand out among sweet shops

3. **Reflects Dessert Variety**
   - Communicate your sweet offerings
   - Whether cakes, pastries, frozen, or mixed
   - Align with target customer expectations
   - Examples: Pastry, Sweet, Sugar, Confection

4. **Celebratory and Joyful**
   - Desserts accompany celebrations
   - Names should feel festive and happy
   - Suggest the joy sweets bring
   - Appeal to gift and occasion buyers

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a dessert business

Generate names that are:
- 1-3 words maximum
- Appetizing and tempting
- Easy to spell and pronounce
- Appropriate for food marketing
- Versatile across dessert categories`,
    useCases: [
      { title: 'Dessert Café or Lounge Opening', description: 'Entrepreneurs opening dessert cafés use the Dessert Business Name Generator to find names that convey the indulgent, delicious experience they offer. Whether specializing in French pastries, exotic sweets, or Instagram-worthy creations, the generator provides tempting names that attract sweet-lovers and establish memorable brand identity.' },
      { title: 'Specialty Dessert Business Launch', description: 'Bakers specializing in specific desserts (macarons, cheesecakes, churros) use the generator to create memorable brand names that communicate their specialty while appealing to dessert enthusiasts. The tool helps identify names that work across social media, delivery apps, and storefronts.' },
      { title: 'Dessert Catering or Event Service', description: 'Dessert caterers and event service providers use the generator to develop professional, appealing names that attract party planners and event clients. The tool provides names that sound celebratory and premium, appropriate for weddings, corporate events, and special occasions.' },
    ],
    faqs: [
      { question: 'What makes a good dessert business name?', answer: 'A good dessert business name should be delicious and indulgent, making people crave your treats just by hearing it. It should be memorable and crave-inducing, reflecting your dessert variety—whether cakes, pastries, or mixed sweets. The name should feel celebratory and joyful.' },
      { question: 'Should my dessert business name mention specific desserts?', answer: 'Including specific desserts can attract niche customers but may limit perceived offerings. "Macaron Magic" attracts macaron lovers but might not suggest you also sell cakes. General sweet terms offer more versatility as you expand your menu.' },
      { question: 'How important is my dessert business name for marketing?', answer: 'Crucial for food businesses. Your name appears on packaging, storefronts, delivery apps, and social media. A tempting name creates cravings before customers even see your desserts. It should be easy to share for word-of-mouth referrals.' },
      { question: 'What dessert business naming trends are popular?', answer: 'Current trends include indulgence vocabulary (Decadent, Indulgent, Luxe), texture words (Melt, Layer, Crumble), French-inspired terms (Patisserie, Confiserie), playful names for social media appeal, and compound words (SugarCraft, SweetArt).' },
      { question: 'Should I use my own name in my dessert business?', answer: 'Using your name creates personal connection, especially for artisanal dessert businesses. Many successful pastry chefs build personal brands. However, non-personal names offer more flexibility for sale or expansion. Consider your long-term goals.' },
      { question: 'How do I check if my dessert business name is available?', answer: 'Check business registrations, domain names, social media handles (Instagram is crucial for desserts), food delivery app listings, and trademark databases. Also search for similar dessert businesses in your area.' },
      { question: 'What words work well in dessert business names?', answer: 'Effective words include sweetness terms (Sugar, Sweet, Honey), indulgence words (Decadent, Indulgent, Gourmet), texture words (Melt, Crumble, Creamy), celebration words (Delight, Joy, Bliss), and professional terms (Patisserie, Confection, Pastry).' },
      { question: 'Should my name reflect my dessert style?', answer: 'If you have a distinctive style (French, fusion, vegan, retro), reflecting it can attract your target market. However, ensure the name remains broad enough to accommodate menu evolution. "Sweet Haven" works for various desserts better than "French Only Pastry."' },
      { question: 'How can my dessert business name appeal to celebration buyers?', answer: 'Many desserts are purchased for celebrations. Names suggesting joy, indulgence, and special occasions appeal to celebration buyers. Consider how your name sounds in "I\'m ordering from [Your Business] for the party"—it should sound special and appropriate.' },
      { question: 'What mistakes should I avoid when naming my dessert business?', answer: 'Avoid: names that don\'t sound appetizing, difficult-to-spell words, names too similar to existing dessert brands, overly trendy terms that may date, names that limit menu expansion, and anything that doesn\'t pass the "craving test"—does hearing it make you want dessert?' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your dessert business is a pivotal step in creating a tempting brand that makes mouths water and customers crave your sweet creations. Your business name will appear on packaging, storefronts, delivery apps, and social media—it\'s the first taste customers get of your brand.',
      steps: [
        { title: 'Define Your Dessert Business Identity', description: 'Before generating names, clarify your dessert business\'s positioning. Consider what types of desserts you will specialize in (cakes, pastries, ice cream, mixed), who your ideal customer is (dessert enthusiasts, celebration buyers, health-conscious), what makes your desserts unique (artisanal quality, exotic flavors, dietary options), what\'s your business model (café, bakery, delivery, catering), and what atmosphere or experience you want to create. Your answers determine whether you need a name that sounds elegant and French, fun and playful, indulgent and luxurious, or wholesome and natural.' },
        { title: 'Evoke Deliciousness and Indulgence', description: 'Dessert businesses sell pleasure and indulgence. Your name should create immediate cravings, suggest rich, satisfying sweetness, sound delicious when spoken, evoke the sensory experience of your desserts, and communicate the treat you\'re offering. Words like Decadent, Indulgent, Sweet, Melt, and Luscious create immediate appetite appeal.' },
        { title: 'Create Celebratory, Joyful Appeal', description: 'Desserts accompany life\'s celebrations. Names should feel festive and special, suggest the happiness sweets bring, work for gift and occasion purchases, sound appropriate for celebrations, and communicate the joy of treating oneself. Consider how your name sounds in party, wedding, and celebration contexts.' },
        { title: 'Reflect Your Specialty or Unique Value', description: 'If you have a distinctive specialty, consider incorporating it. For French patisserie, consider ParisienneSweets or ConfiserieCraft. For ice cream/frozen, consider FrozenFantasy or GelateriaGlee. For cakes, consider LayerLove or CakeCraft. For healthy/vegan, consider WholesomeSweets or GuiltyFreeGlee. For fusion, consider FlavorsUnite or GlobalSweets. Balance specificity with room for menu expansion.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (secure .com if possible), social media (Instagram is crucial for dessert businesses), delivery apps (check existing listings on major platforms), business registration (your state requirements), and trademark search (food and bakery categories). Dessert businesses thrive on visual platforms, making social media availability particularly important.' },
        { title: 'Test with Dessert Enthusiasts', description: 'Before finalizing, test with people representing your target customers. Ask if this name makes them crave dessert, what types of sweets they imagine from this name, whether they would be excited to discover this place, whether they would recommend it for special occasions, and whether it feels premium, accessible, or fun. Their feedback reveals whether your name creates the right cravings and expectations.' },
        { title: 'Consider Growth and Menu Evolution', description: 'Choose a name that accommodates future expansion: adding new dessert categories, opening additional locations, launching delivery and catering, creating branded merchandise, and developing signature product lines. The ideal dessert business name is delicious, memorable, versatile, and positions your brand for growth while perfectly capturing the sweet indulgence you provide.' },
      ],
    },
    businessNameIdeas: [
      { name: 'SweetSensation', description: 'Desserts that create wonderful taste sensations—experiential and delicious.' },
      { name: 'DelightfulDelicacies', description: 'A business offering delightful dessert delicacies with care.' },
      { name: 'FlavorfulFusion', description: 'Fusing flavors to create unique, exciting desserts.' },
      { name: 'SugarySymphony', description: 'A symphony of sugary treats harmonizing perfectly.' },
      { name: 'GourmetGlee', description: 'Gourmet desserts that bring absolute joy and happiness.' },
      { name: 'IndulgenceIsle', description: 'An island destination for indulgent dessert escapes.' },
      { name: 'DecadentDream', description: 'Decadent desserts from your sweetest dreams.' },
      { name: 'TastyTreats', description: 'Simple, appetizing, universally appealing sweet treats.' },
      { name: 'PatisserieParadise', description: 'A French-inspired paradise for pastry lovers.' },
      { name: 'LusciousLayers', description: 'Desserts with beautifully luscious layers of flavor.' },
      { name: 'HeavenlyHaven', description: 'A heavenly destination for divine desserts.' },
      { name: 'TemptationTerrace', description: 'A terrace of tempting desserts you can\'t resist.' },
      { name: 'DelightDome', description: 'A dome filled with delightful dessert creations.' },
      { name: 'BlissfulBites', description: 'Perfect bites of pure dessert bliss.' },
      { name: 'CrumbleCorner', description: 'A cozy corner known for delicious crumbly desserts.' },
      { name: 'MeltMeadow', description: 'Desserts that melt in your mouth like a dream.' },
      { name: 'GleeGrove', description: 'A grove of desserts that bring pure happiness.' },
      { name: 'DazzleDelights', description: 'Dazzling desserts that impress and delight.' },
      { name: 'SugarSprinkle', description: 'Desserts with that special sugar-sprinkled touch.' },
      { name: 'JoyfulJelly', description: 'Playful, colorful, joyful dessert creations.' },
    ],
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    name: 'Digital Marketing Business Name Generator',
    title: 'Free AI Digital Marketing Business Name Ideas Generator',
    description: 'Generate professional, innovative names for marketing agencies, SEO firms, and advertising businesses.',
    metaDescription: 'Boost your digital marketing venture with an AI-generated name. Create professional, innovative names for marketing agencies, SEO firms, and advertising businesses. Fast, free, and tailored!',
    inputLabel: 'Describe your digital marketing business...',
    inputPlaceholder: 'e.g. A full-service digital marketing agency specializing in SEO and content marketing for B2B companies',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Professional & Trustworthy', 'Innovative & Tech-Forward', 'Results-Driven & Dynamic', 'Creative & Bold'], default: 'Professional & Trustworthy', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the digital marketing and advertising industry. Your role is to generate professional, innovative business names that convey expertise, results, and cutting-edge capabilities for digital marketing agencies, consultancies, and online advertising businesses.

DIGITAL MARKETING INDUSTRY CONTEXT:

The digital marketing business industry encompasses:
- Full-service digital marketing agencies
- SEO and search marketing specialists
- Social media marketing agencies
- PPC and paid advertising agencies
- Content marketing firms
- Email marketing specialists
- Marketing automation consultancies
- Influencer marketing agencies
- Performance marketing agencies
- Digital analytics and data consultancies

NAME CHARACTERISTICS FOR DIGITAL MARKETING BUSINESSES:

1. **Tech-Savvy and Contemporary**
   - Names should reflect cutting-edge digital capabilities
   - Evoke innovation and modern marketing approaches
   - Suggest data-driven, results-oriented services
   - Examples: Digital, Data, Metric, Pixel, Cloud

2. **Professional and Trustworthy**
   - Communicate expertise and reliability
   - Sound reputable for B2B relationships
   - Instill confidence in marketing capabilities
   - Appeal to businesses seeking partners

3. **Memorable and Clear**
   - Easy to recall in competitive agency landscape
   - Clear communication of marketing focus
   - Professional yet approachable
   - Work well in business development contexts

4. **Results and Growth Focus**
   - Suggest outcomes and ROI
   - Communicate growth and success orientation
   - Appeal to results-focused clients
   - Examples: Growth, Boost, Amplify, Scale

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a digital marketing business

Generate names that are:
- 1-3 words maximum
- Professional and innovative
- Easy to spell and pronounce
- Appropriate for agency marketing
- Versatile across digital marketing services`,
    useCases: [
      { title: 'Digital Marketing Agency Launch', description: 'Entrepreneurs starting digital marketing agencies use the Digital Marketing Business Name Generator to find names that communicate expertise, innovation, and results-orientation. Whether offering full-service marketing or specializing in specific channels, the generator provides professional names that attract business clients and establish industry credibility.' },
      { title: 'Marketing Consultancy Branding', description: 'Marketing consultants launching independent practices use the generator to create memorable brand names that position them as experts in the digital marketing space. The tool helps identify names that work for both solo consultants and future agency growth.' },
      { title: 'Specialized Marketing Service Positioning', description: 'Marketing specialists (SEO, social media, PPC) use the generator to develop names that communicate their specific expertise while maintaining room for service expansion. The tool provides names that signal specialization without limiting future diversification.' },
    ],
    faqs: [
      { question: 'What makes a good digital marketing business name?', answer: 'A good digital marketing business name should be tech-savvy and contemporary while remaining professional and trustworthy. It should be memorable and clear, suggesting the results and growth you help clients achieve. The name should appeal to businesses seeking a capable marketing partner.' },
      { question: 'Should my digital marketing name include "agency" or "marketing"?', answer: 'Including professional terms like "agency," "marketing," "media," or "digital" can immediately clarify your business type. However, some successful agencies use abstract names that feel more boutique or creative. Choose based on whether you want immediate clarity or creative differentiation.' },
      { question: 'How important is my agency name for winning clients?', answer: 'Very important for first impressions. Your name appears on proposals, presentations, and professional platforms like LinkedIn. A professional, innovative-sounding name can help establish credibility before your first meeting, while a poor name may create doubts about your capabilities.' },
      { question: 'What digital marketing naming trends are popular?', answer: 'Current trends include compound words (ClickCraft, DataDrive), growth/results vocabulary (Growth Labs, Boost Digital), tech terms (Pixel Partners, Metric Media), and smart/strategy words (Smart Media, Strategy Spark). Modern, clean-sounding names perform well.' },
      { question: 'Should I use my own name in my marketing business?', answer: 'Using your name works well for personal brand consultants but may limit scalability and sale value. For agencies planning to grow beyond the founder, non-personal names offer more flexibility. Consider whether you\'re building a personal practice or a scalable agency.' },
      { question: 'How do I check if my digital marketing name is available?', answer: 'Check business registrations, domain names (.com strongly preferred for agencies), LinkedIn company pages, agency directories, and trademark databases. Also search for similar agency names, as the marketing industry is competitive and clients may confuse similar names.' },
      { question: 'What words work well in digital marketing business names?', answer: 'Effective words include digital terms (Digital, Data, Pixel, Online), marketing terms (Media, Brand, Content, Traffic), results words (Growth, Boost, Convert, Scale), strategy words (Insight, Strategy, Smart), and professional terms (Solutions, Partners, Labs).' },
      { question: 'Should my name reflect specific services I offer?', answer: 'Names that are too specific (e.g., "SEO Only Agency") limit perceived capabilities and future expansion. Choose a name broad enough to encompass potential service additions while still communicating your digital marketing focus.' },
      { question: 'How can my agency name appeal to different industries?', answer: 'Avoid industry-specific terminology that might alienate potential clients. Names like "Tech Marketing Only" limit your market. Broader names like "Growth Digital" appeal across industries while still communicating your marketing expertise.' },
      { question: 'What mistakes should I avoid when naming my digital marketing business?', answer: 'Avoid: overly trendy names that date quickly, names too similar to established agencies, difficult-to-spell or tech jargon words, names that sound unprofessional, names that limit service expansion, and anything that doesn\'t convey expertise and results-orientation.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your digital marketing business is a critical step in creating a professional brand that attracts clients and establishes industry credibility. Your business name will appear on proposals, presentations, LinkedIn, and all client communications—it\'s fundamental to how businesses perceive your capabilities.',
      steps: [
        { title: 'Define Your Digital Marketing Business Identity', description: 'Before generating names, clarify your digital marketing business\'s positioning. Consider what digital marketing services you will offer (full-service, SEO, social, PPC, content), who your ideal client is (industry, company size, budget level), what makes your approach unique (data-driven, creative, technical, strategic), whether you are building a solo consultancy or scalable agency, and what\'s your growth vision for the next 5-10 years. Your answers determine whether you need a name that sounds boutique and creative, enterprise and corporate, technical and data-focused, or results and growth-oriented.' },
        { title: 'Embody Innovation and Expertise', description: 'Digital marketing demands cutting-edge capabilities. Your name should suggest modern, innovative approaches, communicate digital expertise, sound tech-savvy without being intimidating, convey that you understand contemporary marketing, and position you as forward-thinking. Words like Digital, Data, Metric, and Insight create immediate expertise associations while remaining accessible.' },
        { title: 'Project Professionalism and Trust', description: 'B2B clients need confidence in their marketing partners. Names should sound reputable and reliable, be professional enough for corporate relationships, be trustworthy for handling marketing budgets, be credible for strategic recommendations, and be appropriate for all client sizes. Balance creativity with professionalism—too casual sounds inexperienced, too corporate sounds impersonal.' },
        { title: 'Communicate Results and Growth Focus', description: 'Clients hire marketing agencies for outcomes. Your name should suggest the results you help achieve, communicate growth and success orientation, imply ROI and measurable impact, sound action-oriented and dynamic, and appeal to results-focused business leaders. Words like Growth, Boost, Scale, and Convert communicate the outcomes clients seek.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (.com is strongly preferred for agencies), LinkedIn (company page availability), agency directories (check existing agency listings), business registration (your state requirements), and trademark search (marketing and advertising categories). Professional credibility requires consistent branding across all business platforms.' },
        { title: 'Test with Business Decision-Makers', description: 'Before finalizing, test with people representing potential clients. Ask if this name sounds like a capable digital marketing agency, whether they would consider this agency for their business, whether it feels innovative or outdated, whether it feels trustworthy and professional, and what services they would expect this agency to offer. Their feedback reveals whether your name creates the right professional impressions.' },
        { title: 'Consider Agency Growth and Evolution', description: 'Choose a name that accommodates future expansion: adding new marketing services, growing team and capabilities, expanding to new markets or industries, potential acquisition or partnership, and building recognized industry brand. The ideal digital marketing business name is professional, innovative, versatile, and positions your agency for growth while clearly communicating your expertise in driving results.' },
      ],
    },
    businessNameIdeas: [
      { name: 'ClickCove', description: 'A digital marketing destination focused on improving click-through rates and engagement.' },
      { name: 'ConversionCorner', description: 'A business helping clients increase conversion rates and ROI.' },
      { name: 'MetricMatrix', description: 'Excellence in digital marketing metrics and data-driven decisions.' },
      { name: 'SEOsphere', description: 'A comprehensive world of search engine optimization expertise.' },
      { name: 'PixelPulse', description: 'Digital marketing with pixel-perfect precision and dynamic energy.' },
      { name: 'TrafficTrove', description: 'A treasure of strategies to increase web traffic and visibility.' },
      { name: 'OptimizedOasis', description: 'A destination specializing in optimizing digital content and campaigns.' },
      { name: 'StrategySphere', description: 'Comprehensive digital marketing strategies for business success.' },
      { name: 'EngagementEmpire', description: 'Building empires of customer engagement and brand loyalty.' },
      { name: 'DigitalDynamo', description: 'A powerful force in the digital marketing world.' },
      { name: 'ViralVault', description: 'Creating viral digital content that spreads and converts.' },
      { name: 'MediaMatrix', description: 'Excellence in digital media marketing across channels.' },
      { name: 'InsightIsland', description: 'Providing insightful, data-driven digital marketing strategies.' },
      { name: 'ContentCove', description: 'A haven for content creation and content marketing excellence.' },
      { name: 'GrowthGrid', description: 'Systematic approaches to digital growth and scaling.' },
      { name: 'ROIRealm', description: 'Maximizing return on investment in digital marketing.' },
      { name: 'CampaignCastle', description: 'Managing successful, fortress-strong digital campaigns.' },
      { name: 'VisibilityVista', description: 'Enhancing client visibility across the digital landscape.' },
      { name: 'InfluenceInlet', description: 'Helping clients influence their target markets effectively.' },
      { name: 'AdAdvent', description: 'New adventures and innovations in digital advertising.' },
    ],
  },
  'electronics': {
    slug: 'electronics',
    name: 'Electronics Business Name Generator',
    title: 'Free AI Electronics Business Name Ideas Generator',
    description: 'Generate innovative, trustworthy names for tech stores, gadget shops, and device retailers.',
    metaDescription: 'Electrify your electronics business with a perfect name from our free AI generator. Create innovative, trustworthy names for tech stores, gadget shops, and device retailers. Try it now!',
    inputLabel: 'Describe your electronics business...',
    inputPlaceholder: 'e.g. A consumer electronics store specializing in smart home devices and accessories',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Modern & Tech-Forward', 'Professional & Trustworthy', 'Innovative & Cutting-Edge', 'Accessible & Friendly'], default: 'Modern & Tech-Forward', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the electronics and technology retail industry. Your role is to generate innovative, trustworthy business names that convey technical expertise, quality, and modern appeal for electronics stores, tech shops, and gadget retailers.

ELECTRONICS BUSINESS INDUSTRY CONTEXT:

The electronics business industry encompasses:
- Consumer electronics retailers
- Computer and IT equipment stores
- Mobile phone and accessory shops
- Audio and video equipment specialists
- Gaming electronics retailers
- Smart home technology stores
- Electronics repair and service centers
- Online electronics retailers
- B2B electronics suppliers
- Refurbished and used electronics dealers

NAME CHARACTERISTICS FOR ELECTRONICS BUSINESSES:

1. **Tech-Savvy and Modern**
   - Names should convey cutting-edge technology
   - Evoke innovation and contemporary relevance
   - Suggest expertise in latest electronics
   - Examples: Tech, Digital, Circuit, Chip, Gadget

2. **Professional and Trustworthy**
   - Electronics are significant purchases
   - Communicate reliability and expertise
   - Build confidence in product quality
   - Suggest technical knowledge and support

3. **Easy to Spell and Pronounce**
   - Technology names can be complex
   - Keep it accessible for all customers
   - Work well in both online and offline contexts
   - Memorable for word-of-mouth recommendations

4. **Versatility for Product Range**
   - Electronics categories are diverse
   - Names should accommodate various products
   - Allow for evolution with technology
   - Examples: Electronics, Tech, Digital, Devices

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for an electronics business

Generate names that are:
- 1-3 words maximum
- Modern and tech-forward
- Easy to spell and pronounce
- Professional yet accessible
- Versatile across electronics categories`,
    useCases: [
      { title: 'Electronics Retail Store Launch', description: 'Entrepreneurs opening electronics stores use the Electronics Business Name Generator to find names that communicate technical expertise and product quality. Whether offering computers, phones, or home entertainment, the generator provides innovative names that build customer trust and establish market presence.' },
      { title: 'Online Electronics Retailer Branding', description: 'E-commerce entrepreneurs launching online electronics businesses use the generator to create memorable brand names that work across digital platforms. The tool helps identify names that are SEO-friendly, available as domain names, and communicate technology expertise.' },
      { title: 'Electronics Service Business Positioning', description: 'Electronics repair and service businesses use the generator to develop names that convey technical competence and reliability. The tool provides names that attract customers needing expert technical support while maintaining friendly accessibility.' },
    ],
    faqs: [
      { question: 'What makes a good electronics business name?', answer: 'A good electronics business name should be tech-savvy and modern while remaining professional and trustworthy. It should be easy to spell and pronounce, with versatility to accommodate various electronics categories as technology evolves.' },
      { question: 'Should my electronics store name include "electronics" or "tech"?', answer: 'Including tech-related words helps customers immediately understand your business, especially for local search visibility. However, shorter, creative names can work if they sound appropriately technical. Consider your target market and whether clarity or creativity is more important.' },
      { question: 'How important is my electronics store name for building trust?', answer: 'Very important. Electronics are significant purchases where customers need confidence in product quality and after-sales support. A professional, trustworthy-sounding name can increase customer confidence and justify premium pricing.' },
      { question: 'What electronics business naming trends are popular?', answer: 'Current trends include compound tech words (TechTrove, GadgetGrid), innovation vocabulary (NextGen, FutureTech), digital terms (Digital Depot, Cyber Corner), and quality indicators (Premium Tech, Trusted Electronics).' },
      { question: 'Should I use my own name in my electronics business?', answer: 'Personal names work for repair shops and service businesses building trust through owner expertise. For larger retail operations, non-personal names often sound more established and scalable. Consider your business model and growth plans.' },
      { question: 'How do I check if my electronics business name is available?', answer: 'Check business registrations, domain names, Google Business profiles, social media handles, and trademark databases. Also search for similar electronics retailers locally and nationally to avoid confusion.' },
      { question: 'What words work well in electronics business names?', answer: 'Effective words include tech terms (Tech, Digital, Circuit, Chip), device words (Gadget, Device, Gear), innovation words (Innovation, Smart, Modern), trust words (Trusted, Quality, Expert), and place words (Depot, Hub, Center, Store).' },
      { question: 'Should my name reflect specific electronics I sell?', answer: 'Names that are too specific (e.g., "Phones Only") limit future expansion. Choose a name broad enough to accommodate product additions as technology evolves. "Tech Hub" works for various electronics better than "Just Laptops."' },
      { question: 'How can my electronics name appeal to both tech-savvy and general customers?', answer: 'Balance technical credibility with accessibility. Names like "Smart Electronics" sound knowledgeable without being intimidating. Avoid overly technical jargon that might alienate casual consumers while maintaining terms that signal expertise.' },
      { question: 'What mistakes should I avoid when naming my electronics business?', answer: 'Avoid: overly technical jargon that confuses customers, names too similar to major electronics chains, difficult-to-spell tech words, names that sound dated, names that limit product categories, and anything that doesn\'t convey quality and expertise.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your electronics business is a crucial step in creating a trustworthy brand that attracts tech-savvy and general consumers alike. Your business name will appear on storefronts, websites, and receipts—it\'s fundamental to how customers perceive your technical expertise and product quality.',
      steps: [
        { title: 'Define Your Electronics Business Identity', description: 'Before generating names, clarify your electronics business\'s positioning. Consider what types of electronics you will primarily sell (computers, phones, home entertainment, smart home), who your ideal customer is (tech enthusiasts, general consumers, businesses), what makes your store different (expert service, competitive prices, specialized products), whether you will offer services like repair or installation, and whether you are building a local store or national brand. Your answers determine whether you need a name that sounds specialized or general, premium or value-oriented, technical or accessible.' },
        { title: 'Embody Innovation and Technology', description: 'Electronics customers expect cutting-edge products. Your name should suggest modern, innovative technology, sound appropriately technical without intimidation, communicate that you offer the latest products, convey understanding of technology trends, and position you as forward-thinking. Words like Tech, Digital, Circuit, and Smart create immediate technology associations while remaining accessible.' },
        { title: 'Build Trust and Credibility', description: 'Electronics are significant purchases requiring trust. Names should sound reliable and professional, communicate expertise and quality, build confidence in product authenticity, suggest knowledgeable staff and support, and be appropriate for warranty and service contexts. Balance innovation with reliability—customers want cutting-edge products from trustworthy sources.' },
        { title: 'Ensure Accessibility Across Demographics', description: 'Electronics businesses serve diverse customers. Names should work for tech experts and beginners, be easy to spell for online searches, be simple to pronounce for word-of-mouth, not be intimidating to general consumers, and be welcoming to all age groups. Avoid overly technical jargon that might alienate casual consumers while maintaining credibility.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (.com preferred for credibility), Google Business Profile (for local search visibility), social media (YouTube and tech platforms), business registration (your state requirements), and trademark search (electronics and retail categories). Local search visibility is particularly important for physical electronics stores.' },
        { title: 'Test with Target Customers', description: 'Before finalizing, test with people representing your target market. Ask if this name sounds like a reliable electronics store, whether they would feel confident purchasing from this business, what types of electronics they would expect to find, whether it feels premium, value-oriented, or balanced, and whether it is easy to remember and spell. Their feedback reveals whether your name creates the right technical credibility and trust.' },
        { title: 'Consider Technology Evolution', description: 'Choose a name that accommodates future developments: new product categories as technology evolves, adding services like repair or installation, e-commerce expansion alongside physical retail, opening additional locations, and adapting to changing tech terminology. The ideal electronics business name is innovative, trustworthy, accessible, and positions your brand for growth while clearly communicating your technology expertise.' },
      ],
    },
    businessNameIdeas: [
      { name: 'CircuitCentric', description: 'An electronics business centric to circuits and technical excellence.' },
      { name: 'TechTrove', description: 'A trove of technology products and innovations.' },
      { name: 'GadgetGalaxy', description: 'A galaxy of gadgets offering endless tech exploration.' },
      { name: 'DigitalDepot', description: 'A depot known for comprehensive digital electronics.' },
      { name: 'ChipChamber', description: 'A destination for chip-based products and computing.' },
      { name: 'ByteBox', description: 'A compact, comprehensive destination for digital technology.' },
      { name: 'QuantumQuarry', description: 'A quarry of cutting-edge quantum-era electronic products.' },
      { name: 'WiredWorld', description: 'A comprehensive world of wired and connected devices.' },
      { name: 'SmartSource', description: 'A source for smart home and intelligent devices.' },
      { name: 'DeviceDepot', description: 'A depot offering a complete range of electronic devices.' },
      { name: 'GearGrid', description: 'A systematic grid of electronic gear and equipment.' },
      { name: 'FutureTech', description: 'Forward-thinking technology for tomorrow\'s needs.' },
      { name: 'ElectroEmporium', description: 'A grand emporium of electronic products.' },
      { name: 'PrecisionPixel', description: 'Pixel-perfect products with precision quality.' },
      { name: 'TrustedTech', description: 'Technology products you can trust for quality and reliability.' },
      { name: 'CurrentConnect', description: 'Connecting customers with current technology solutions.' },
      { name: 'PowerPulse', description: 'Energetic, powerful electronics for every need.' },
      { name: 'CircuitCarousel', description: 'A rotating selection of circuit-based products and innovations.' },
      { name: 'NexusNetworks', description: 'A nexus connecting customers to networking and tech solutions.' },
      { name: 'DigitalDynamo', description: 'A dynamic force in digital electronics retail.' },
    ],
  },
  'event': {
    slug: 'event',
    name: 'Event Business Name Generator',
    title: 'Free AI Event Business Name Ideas Generator',
    description: 'Generate creative, memorable names for wedding planners, party coordinators, and celebration companies.',
    metaDescription: 'Plan the perfect name for your event business with our free AI generator. Create memorable, creative names for wedding planners, party coordinators, and celebration companies. Quick and easy!',
    inputLabel: 'Describe your event business...',
    inputPlaceholder: 'e.g. A luxury wedding planning company specializing in destination weddings and elegant celebrations',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Elegant & Sophisticated', 'Creative & Memorable', 'Professional & Versatile', 'Fun & Celebratory'], default: 'Elegant & Sophisticated', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the event planning and production industry. Your role is to generate creative, memorable business names that convey expertise, celebration, and unforgettable experiences for event planning companies, wedding planners, and celebration coordinators.

EVENT BUSINESS INDUSTRY CONTEXT:

The event business industry encompasses:
- Wedding planning and coordination
- Corporate event planners
- Party and celebration coordinators
- Conference and meeting planners
- Social event organizers
- Festival and concert producers
- Non-profit event coordinators
- Virtual and hybrid event specialists
- Destination event planners
- Event design and décor companies

NAME CHARACTERISTICS FOR EVENT BUSINESSES:

1. **Creative and Engaging**
   - Names should evoke imagination and creativity
   - Suggest the magic of memorable events
   - Communicate artistic vision and style
   - Examples: Create, Design, Imagine, Craft, Curate

2. **Easy to Remember and Versatile**
   - Memorable across different event types
   - Work for weddings, corporate, and social events
   - Simple to share and recommend
   - Flexible for various occasions

3. **Reflects Event Specializations**
   - Communicate your event focus if specialized
   - Wedding-specific, corporate, or universal
   - Align with target client expectations
   - Examples: Celebrate, Gather, Unite, Occasion

4. **Professional Yet Approachable**
   - Events require trust and collaboration
   - Sound experienced and capable
   - Welcoming and easy to work with
   - Balance professionalism with warmth

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for an event business

Generate names that are:
- 1-3 words maximum
- Creative and memorable
- Easy to spell and pronounce
- Professional yet approachable
- Versatile across event categories`,
    useCases: [
      { title: 'Event Planning Company Launch', description: 'Entrepreneurs starting event planning businesses use the Event Business Name Generator to find names that communicate creativity, expertise, and the ability to create unforgettable experiences. Whether offering full-service planning or specialized coordination, the generator provides memorable names that attract clients and establish professional credibility.' },
      { title: 'Wedding Planning Business Branding', description: 'Wedding planners launching their own businesses use the generator to create romantic, professional names that appeal to engaged couples. The tool helps identify names that work across wedding marketing platforms while conveying the magical experience brides and grooms seek.' },
      { title: 'Corporate Event Service Positioning', description: 'Corporate event planners use the generator to develop names that balance professionalism with creativity. The tool provides names that appeal to business clients seeking memorable corporate experiences while maintaining appropriate professional tone.' },
    ],
    faqs: [
      { question: 'What makes a good event business name?', answer: 'A good event business name should be creative and engaging, easy to remember, and versatile across different event types. It should reflect your specialization if you have one, while remaining professional yet approachable—balancing the trust clients need with the creativity they expect.' },
      { question: 'Should my event business name be event-type specific?', answer: 'If you specialize exclusively (weddings only, corporate only), specific names can attract your target market. However, broader names offer flexibility as your business evolves. Many event planners start specialized and expand, so consider future versatility.' },
      { question: 'How important is my event business name for getting clients?', answer: 'Very important. Event planning relies heavily on referrals and portfolio marketing. A memorable, creative name helps you stand out in a competitive industry and makes it easier for clients to recommend you to others.' },
      { question: 'What event business naming trends are popular?', answer: 'Current trends include celebration vocabulary (Fête, Gala, Soirée), creation words (Curated, Crafted, Designed), magic/wonder imagery (Enchanted, Sparkle, Dream), and experience focus (Memorable Moments, Lasting Impressions). Elegant, sophisticated names remain timeless.' },
      { question: 'Should I use my own name in my event planning business?', answer: 'Personal names work well for event planners building personal brands and reputation. Many successful planners are known by name. However, non-personal names offer more flexibility for team growth or eventual sale. Consider your long-term vision.' },
      { question: 'How do I check if my event business name is available?', answer: 'Check business registrations, domain names, social media handles (Instagram is crucial for event businesses), wedding planning directories, and trademark databases. Also search event planning associations and local competition.' },
      { question: 'What words work well in event business names?', answer: 'Effective words include celebration words (Celebrate, Gala, Fête, Affair), creation words (Create, Design, Craft, Curate), gathering words (Gather, Unite, Together), magic words (Enchant, Dream, Wonder), and elegance words (Elegant, Grand, Refined).' },
      { question: 'Should my name reflect my event style?', answer: 'If you have a distinctive style (minimalist, lavish, bohemian, classic), reflecting it can attract aligned clients. However, ensure the name doesn\'t limit you if your style evolves. "Elegant Events" works for various elegant styles better than "Only Vintage Events."' },
      { question: 'How can my event business name appeal to both wedding and corporate clients?', answer: 'Choose names that suggest celebration and expertise without being too romantic or too corporate. Words like "Events," "Occasions," "Celebrations," and "Productions" work across contexts better than "Bridal" or "Corporate" specifically.' },
      { question: 'What mistakes should I avoid when naming my event business?', answer: 'Avoid: names too similar to established event companies, overly cutesy names that don\'t sound professional, names that limit your event type capabilities, difficult-to-spell words, and anything that doesn\'t convey both creativity and reliability.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your event business is a pivotal step in creating a memorable brand that attracts clients seeking unforgettable celebrations. Your business name will appear on contracts, stationery, websites, and social media—it\'s how clients discover and remember your creative expertise.',
      steps: [
        { title: 'Define Your Event Business Identity', description: 'Before generating names, clarify your event business\'s positioning. Consider what types of events you will specialize in (weddings, corporate, social, all types), who your ideal client is (budget, style preferences, values), what makes your event style unique (aesthetic, approach, philosophy), whether you will offer full planning, coordination, or specific services, and what\'s your growth vision for the business. Your answers determine whether you need a name that sounds romantic and wedding-focused, corporate and professional, creative and artistic, or universally celebratory.' },
        { title: 'Embody Creativity and Celebration', description: 'Event planners create magical experiences. Your name should evoke creativity and imagination, suggest the joy of celebration, sound inspiring and exciting, communicate artistic vision, and promise memorable experiences. Words like Create, Celebrate, Magic, and Wonder capture the transformative nature of event planning.' },
        { title: 'Balance Professionalism with Warmth', description: 'Event planning requires trust and collaboration. Names should sound experienced and capable, communicate professionalism and reliability, remain approachable and welcoming, suggest easy collaboration, and build confidence in your expertise. Clients entrust their most important celebrations to you—your name should inspire confidence.' },
        { title: 'Ensure Versatility Across Event Types', description: 'Unless highly specialized, your name should work for various events: wedding celebrations, corporate conferences and galas, birthday parties and milestones, non-profit fundraisers, and social gatherings. Avoid names so specific they exclude potential event categories you might pursue.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (.com preferred for credibility), social media (Instagram is crucial for event businesses), wedding directories (The Knot, WeddingWire, Zola), business registration (your state requirements), and trademark search (event and wedding planning categories). Event businesses rely heavily on visual portfolios, making Instagram availability particularly important.' },
        { title: 'Test with Target Clients', description: 'Before finalizing, test with people representing your ideal clients. Ask if this name sounds like a creative event planner, what types of events they would expect from this company, whether it feels professional enough for their important celebration, whether they would feel confident entrusting their event to this business, and whether it is memorable enough to recommend to friends. Their feedback reveals whether your name creates the right creative and professional impressions.' },
        { title: 'Consider Brand Growth and Evolution', description: 'Choose a name that accommodates future expansion: adding new event types and services, growing team and capabilities, expanding to destination events, building recognized regional or national brand, and developing event design product lines. The ideal event business name is creative, memorable, professional, and positions your brand for growth while capturing the magic of celebration.' },
      ],
    },
    businessNameIdeas: [
      { name: 'CelebrationCreators', description: 'Creating memorable celebrations with expertise and creativity.' },
      { name: 'BlissfulBeginnings', description: 'Perfect for events marking beautiful new chapters.' },
      { name: 'OccasionOrchestrators', description: 'Expertly orchestrating every detail of special occasions.' },
      { name: 'MagicMoments', description: 'Creating magical moments that last a lifetime.' },
      { name: 'GatheringGrace', description: 'Bringing people together with grace and elegance.' },
      { name: 'EnchantedEvents', description: 'Events that enchant and delight guests.' },
      { name: 'TogetherTimes', description: 'Celebrating the joy of coming together.' },
      { name: 'ElegantAffairs', description: 'Sophisticated, elegant events for discerning clients.' },
      { name: 'SoireeStylist', description: 'Styling unforgettable soirées and celebrations.' },
      { name: 'GrandGatherings', description: 'Grand, impressive gatherings expertly planned.' },
      { name: 'MemorableMoments', description: 'Creating moments that become treasured memories.' },
      { name: 'ExperienceElevated', description: 'Elevating every event into an exceptional experience.' },
      { name: 'PartyPerfected', description: 'Perfecting every detail of party planning.' },
      { name: 'CelebrationCraft', description: 'Crafting celebrations with artistry and care.' },
      { name: 'DreamDayDesigns', description: 'Designing dream days for special occasions.' },
      { name: 'FestivityFoundry', description: 'A foundry of festive, joyful events.' },
      { name: 'SparkleAndSoiree', description: 'Adding sparkle to every celebration.' },
      { name: 'EventElevate', description: 'Elevating events to extraordinary heights.' },
      { name: 'JoyfulJunctions', description: 'Where joyful celebrations come together perfectly.' },
      { name: 'LegacyEvents', description: 'Creating events that leave lasting legacies.' },
    ],
  },
  'fashion-store': {
    slug: 'fashion-store',
    name: 'Fashion Store Business Name Generator',
    title: 'Free AI Fashion Store Business Name Ideas Generator',
    description: 'Generate stylish, memorable names for boutiques, clothing stores, and fashion retailers.',
    metaDescription: 'Start your fashion store on the right foot with a creative name. Generate stylish, memorable names for boutiques, clothing stores, and fashion retailers with our free AI generator!',
    inputLabel: 'Describe your fashion store...',
    inputPlaceholder: 'e.g. A sustainable fashion boutique featuring eco-friendly designer clothing for women',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Chic & Sophisticated', 'Trendy & Modern', 'Luxurious & Premium', 'Accessible & Friendly'], default: 'Chic & Sophisticated', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the fashion retail industry. Your role is to generate stylish, memorable business names that convey fashion expertise, trendy appeal, and unique shopping experiences for fashion stores, clothing boutiques, and style retailers.

FASHION STORE INDUSTRY CONTEXT:

The fashion store industry encompasses:
- Women's fashion boutiques
- Men's fashion retailers
- Multi-brand fashion stores
- Designer fashion shops
- Streetwear and urban fashion stores
- Sustainable and ethical fashion retailers
- Vintage and consignment fashion stores
- Online fashion boutiques
- Plus-size and specialty fashion stores
- Accessories and lifestyle fashion retailers

NAME CHARACTERISTICS FOR FASHION STORE BUSINESSES:

1. **Reflects Fashion Style**
   - Names should communicate your fashion aesthetic
   - Evoke the style and vibe of your offerings
   - Connect with target fashion consumers
   - Examples: Chic, Vogue, Mode, Style, Trend

2. **Unique and Memorable**
   - Stand out in competitive fashion retail
   - Easy to remember and recommend
   - Distinctive from other fashion stores
   - Create strong brand recognition

3. **Suitable for Online Presence**
   - Work as domain name
   - Available on fashion-relevant social platforms
   - SEO-friendly for fashion searches
   - Strong on Instagram and visual platforms

4. **Versatile Yet Focused**
   - Accommodate style evolution
   - Allow for collection expansion
   - Maintain clear fashion identity
   - Work across different fashion categories

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a fashion store

Generate names that are:
- 1-3 words maximum
- Stylish and fashionable
- Easy to spell and pronounce
- Appropriate for fashion marketing
- Versatile across fashion categories`,
    useCases: [
      { title: 'Fashion Boutique Launch', description: 'Entrepreneurs opening fashion boutiques use the Fashion Store Business Name Generator to find names that communicate their unique style aesthetic and attract fashion-forward customers. Whether focusing on designer pieces, streetwear, or sustainable fashion, the generator provides stylish names that establish memorable brand identity.' },
      { title: 'Online Fashion Retailer Branding', description: 'E-commerce entrepreneurs launching online fashion stores use the generator to create memorable brand names that work across digital platforms. The tool helps identify names that are Instagram-ready, SEO-friendly, and communicate fashion expertise.' },
      { title: 'Fashion Store Rebranding', description: 'Existing fashion retailers looking to refresh their brand or reposition in the market use the generator to explore updated naming options. The tool provides names that reflect evolved style direction while maintaining appeal to target fashion consumers.' },
    ],
    faqs: [
      { question: 'What makes a good fashion store business name?', answer: 'A good fashion store name should reflect your fashion style and aesthetic while being unique and memorable. It should be suitable for strong online presence and versatile enough to accommodate style evolution while maintaining clear fashion identity.' },
      { question: 'Should my fashion store name indicate my style specialty?', answer: 'If you have a distinctive style (bohemian, minimalist, streetwear), reflecting it can attract aligned customers. However, ensure the name doesn\'t limit you as trends and your curation evolve. "Chic Boutique" works for various styles better than "Only Boho Fashion."' },
      { question: 'How important is my fashion store name for building a brand?', answer: 'Critical in fashion retail. Your name appears on bags, tags, social media, and marketing materials. A stylish, memorable name helps establish brand recognition and can justify premium pricing. Fashion-forward customers respond to fashionable branding.' },
      { question: 'What fashion store naming trends are popular?', answer: 'Current trends include French-inspired words (Maison, Atelier, Mode), curated vocabulary (Edited, Curated, Selected), single impactful words (Nova, Aura, Haven), and compound words (StyleLab, FashionForge, ChicHouse).' },
      { question: 'Should I use my own name in my fashion store?', answer: 'Personal names work well for fashion boutiques building on personal style expertise or designer brands. Many successful fashion retailers are eponymous. However, non-personal names offer flexibility for sale or team expansion.' },
      { question: 'How do I check if my fashion store name is available?', answer: 'Check domain names, Instagram handles (crucial for fashion), Pinterest, business registrations, and trademark databases. Also search fashion retail directories and competing stores in your market area.' },
      { question: 'What words work well in fashion store names?', answer: 'Effective words include fashion terms (Chic, Vogue, Style, Mode), luxury words (Luxe, Elite, Select, Premier), place words (Boutique, Atelier, House, Studio), and curated words (Edited, Curated, Selected, Styled).' },
      { question: 'Should my name work for both physical and online retail?', answer: 'Absolutely. Most fashion businesses today operate both channels. Choose a name that works on storefronts and websites, fits social media handles, and sounds natural in both "visit our store" and "shop online" contexts.' },
      { question: 'How can my fashion store name appeal to my target demographic?', answer: 'Consider your target customer\'s fashion identity. Young, trend-focused customers respond to edgy, current names. Luxury seekers prefer sophisticated names. Bohemian shoppers connect with natural, artistic names. Match your name to your customer\'s self-image.' },
      { question: 'What mistakes should I avoid when naming my fashion store?', answer: 'Avoid: names too similar to established fashion brands, trendy spellings that date quickly, names that don\'t photograph well, difficult-to-spell words, names that limit style expansion, and anything that doesn\'t sound fashionable and current.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your fashion store is a crucial step in creating a stylish brand that attracts fashion-conscious customers and establishes your unique place in the competitive retail market. Your business name will appear on storefronts, shopping bags, social media, and marketing materials—it\'s the first impression customers have of your fashion aesthetic.',
      steps: [
        { title: 'Define Your Fashion Store Identity', description: 'Before generating names, clarify your fashion store\'s positioning. Consider what fashion style you will curate (contemporary, bohemian, minimalist, streetwear, luxury), who your ideal customer is (age, lifestyle, budget, fashion sensibility), what makes your curation unique (designer access, sustainable focus, trend expertise), whether you will operate online, physical retail, or both, and what\'s your vision for the brand\'s evolution. Your answers determine whether you need a name that sounds luxury and exclusive, young and trendy, artistic and bohemian, or accessible and contemporary.' },
        { title: 'Embody Fashion and Style', description: 'Fashion stores sell style and self-expression. Your name should communicate fashion expertise and taste, evoke your specific aesthetic, sound stylish when spoken, look elegant in written form, and attract customers who share your style sensibility. Words like Chic, Vogue, Style, and Mode create immediate fashion associations while allowing unique brand development.' },
        { title: 'Create Memorability and Distinctiveness', description: 'In competitive fashion retail, standing out matters. Your name should be easy to remember after first exposure, distinct from other fashion retailers, simple to spell for online searches, shareable among fashion-conscious consumers, and effective for word-of-mouth recommendations. Test names among fashion-forward friends to gauge memorability and style appeal.' },
        { title: 'Reflect Your Unique Fashion Perspective', description: 'If you have a distinctive point of view, consider incorporating it. For sustainable/ethical fashion, consider ConsciousCloset or EthicalEdge. For luxury/designer, consider LuxeLabel or PrestigeFashion. For streetwear/urban, consider UrbanEdit or StreetStyle. For vintage/consignment, consider RetroRevive or VintageVault. For minimalist/curated, consider EditedElegance or MinimalMode. Balance distinctiveness with room for style evolution as trends change.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (.com preferred for credibility), social media (Instagram is essential for fashion retail), Pinterest (important for fashion inspiration content), business registration (your state requirements), and trademark search (fashion and retail categories). Fashion businesses thrive on visual platforms, making social media availability crucial.' },
        { title: 'Test with Your Fashion Target Market', description: 'Before finalizing, test with people representing your ideal customers. Ask if this name feels fashionable and stylish, what type of fashion they would expect to find, whether they would be excited to discover this store, whether they would share this store with fashion-forward friends, and whether it feels premium, accessible, or edgy. Their feedback reveals whether your name creates the right style impressions.' },
        { title: 'Consider Brand Growth and Evolution', description: 'Choose a name that accommodates future expansion: adding new fashion categories, evolving style direction with trends, opening additional locations, launching e-commerce alongside physical retail, and building lifestyle brand beyond clothing. The ideal fashion store name is stylish, memorable, versatile, and positions your brand for growth while perfectly capturing your unique fashion perspective.' },
      ],
    },
    businessNameIdeas: [
      { name: 'GlamorGrove', description: 'A destination filled with glamorous fashion finds.' },
      { name: 'StyleSpree', description: 'An exciting selection of fashionable items for style exploration.' },
      { name: 'ChicCavern', description: 'A treasure-filled destination for chic fashion discoveries.' },
      { name: 'VogueVault', description: 'A vault of trendy, fashion-forward pieces.' },
      { name: 'TrendTemple', description: 'A temple dedicated to the latest fashion trends.' },
      { name: 'ModeManor', description: 'A sophisticated manor of fashion and style.' },
      { name: 'CuratedCloset', description: 'A thoughtfully curated selection of fashion pieces.' },
      { name: 'FashionFoundry', description: 'Where personal style is crafted and refined.' },
      { name: 'StyleSanctuary', description: 'A sanctuary for those seeking their perfect style.' },
      { name: 'EditedElegance', description: 'Elegantly edited fashion selections for discerning shoppers.' },
      { name: 'BoldBoutique', description: 'A boutique for those who make bold fashion statements.' },
      { name: 'LuxeLabel', description: 'A destination for luxury labels and premium fashion.' },
      { name: 'ChicHouse', description: 'A house of chic, stylish fashion for every occasion.' },
      { name: 'TrendTrove', description: 'A trove of trendy fashion treasures to discover.' },
      { name: 'ModernMode', description: 'Contemporary fashion for the modern lifestyle.' },
      { name: 'StyleStudio', description: 'A studio where personal style is created and perfected.' },
      { name: 'FashionFable', description: 'Fashion that tells your unique story.' },
      { name: 'SelectStyle', description: 'Carefully selected style for discriminating tastes.' },
      { name: 'NowFashion', description: 'Current, relevant fashion for right now.' },
      { name: 'AtelierAppeal', description: 'Boutique fashion with artisan workshop appeal.' },
    ],
  },
  'fitness': {
    slug: 'fitness',
    name: 'Fitness Business Name Generator',
    title: 'Free AI Fitness Business Name Ideas Generator',
    description: 'Generate motivating, energetic names for gyms, studios, and personal training businesses.',
    metaDescription: 'Shape up your fitness business with an AI-generated name. Create motivating, energetic names for gyms, studios, and personal training businesses. Quick, free, and designed for success!',
    inputLabel: 'Describe your fitness business...',
    inputPlaceholder: 'e.g. A boutique HIIT studio focusing on high-intensity interval training for busy professionals',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Motivating & Energetic', 'Strong & Powerful', 'Balanced & Holistic', 'Fun & Accessible'], default: 'Motivating & Energetic', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the fitness and wellness industry. Your role is to generate motivating, energetic business names that convey strength, vitality, and transformation for gyms, fitness studios, personal training businesses, and wellness centers.

FITNESS INDUSTRY CONTEXT:

The fitness business industry encompasses:
- Gyms and fitness centers
- Personal training services
- Yoga and pilates studios
- CrossFit boxes and functional fitness gyms
- Boutique fitness studios (cycling, boxing, barre)
- Online fitness coaching and programs
- Sports performance training centers
- Wellness and holistic fitness centers
- Corporate fitness services
- Fitness equipment and apparel brands

NAME CHARACTERISTICS FOR FITNESS BUSINESSES:

1. **Motivating and Energetic**
   - Names should inspire action and movement
   - Convey vitality, strength, and determination
   - Evoke the transformation fitness provides
   - Examples: Thrive, Power, Dynamic, Momentum, Elevate

2. **Memorable and Catchy**
   - Easy to remember and recommend
   - Stand out in competitive fitness market
   - Work well for word-of-mouth referrals
   - Suitable for merchandise and branding

3. **Reflects Fitness Niche**
   - Communicate your specific fitness focus
   - Whether strength, cardio, yoga, or functional training
   - Align with target client expectations
   - Examples: Core, Peak, Flex, Balance, Endure

4. **Professional Yet Approachable**
   - Sound expert and credible
   - Welcoming to all fitness levels
   - Balance intensity with accessibility
   - Build trust for health-related services

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a fitness business

Generate names that are:
- 1-3 words maximum
- Energizing and motivating
- Easy to spell and pronounce
- Professional yet approachable
- Versatile across fitness services`,
    useCases: [
      { title: 'Gym or Fitness Center Launch', description: 'Entrepreneurs opening gyms or fitness centers use the Fitness Business Name Generator to find names that motivate potential members and communicate the energy of their facility. Whether launching a traditional gym, boutique studio, or specialized training center, the generator provides powerful names that attract fitness enthusiasts and establish strong brand identity.' },
      { title: 'Personal Training Business Branding', description: 'Personal trainers launching their own businesses use the generator to create memorable brand names that communicate expertise and results-orientation. The tool helps identify names that work across marketing materials, social media, and client referrals while conveying the transformative fitness experience trainers provide.' },
      { title: 'Online Fitness Program Development', description: 'Fitness professionals creating online coaching programs or fitness apps use the generator to develop names that work in digital environments. The tool provides energetic names suitable for websites, mobile apps, and social media marketing campaigns targeting health-conscious consumers.' },
    ],
    faqs: [
      { question: 'What makes a good fitness business name?', answer: 'A good fitness business name should be motivating and energetic, inspiring potential clients to take action. It should be memorable and catchy, reflective of your specific fitness niche, and professional yet approachable—welcoming to all fitness levels while conveying expertise.' },
      { question: 'Should my fitness business name include "gym" or "fitness"?', answer: 'Including fitness-related words can immediately clarify your business type, but it\'s not required. Many successful fitness brands use abstract motivational words. Consider whether immediate clarity or creative differentiation is more important for your target market.' },
      { question: 'How important is my fitness business name for attracting members?', answer: 'Very important. Your name creates the first impression of your fitness brand. A motivating name can inspire people to take the first step toward fitness, while a weak name may fail to convey the energy and transformation you offer. It affects signage, merchandise, and referrals.' },
      { question: 'What fitness business naming trends are popular?', answer: 'Current trends include power words (Forge, Apex, Titan), transformation vocabulary (Evolve, Transform, Elevate), community focus (Tribe, Collective, Squad), and compound words (FitFusion, CoreStrength, FlexZone). Authentic, motivating names resonate with fitness seekers.' },
      { question: 'Should I use my own name in my fitness business?', answer: 'Personal names work well for personal trainers building individual brands and expertise recognition. However, for gyms planning to scale or eventually sell, non-personal names offer more flexibility. Consider your long-term business vision.' },
      { question: 'How do I check if my fitness business name is available?', answer: 'Check business registrations, domain names, social media handles (Instagram is crucial for fitness), fitness directory listings, and trademark databases. Also search for similar gym names in your area to avoid local confusion.' },
      { question: 'What words work well in fitness business names?', answer: 'Effective words include power terms (Strength, Power, Force, Iron), energy words (Vital, Dynamic, Pulse, Thrive), achievement words (Peak, Elite, Champion, Summit), transformation words (Evolve, Transform, Sculpt), and balance words (Core, Zen, Flow, Balance).' },
      { question: 'Should my name reflect my specific fitness specialty?', answer: 'If you have a distinctive specialty (CrossFit, yoga, boxing), reflecting it can attract your target market. However, names that are too specific may limit future expansion. "Power Fitness" works for various services better than "Only Cycling Studio."' },
      { question: 'How can my fitness business name appeal to beginners?', answer: 'Balance motivation with approachability. Names like "Intimidation Gym" may deter beginners. Words suggesting growth and support (Journey, Foundation, Progress, Build) can attract newcomers while maintaining energy. Consider how your name sounds to someone new to fitness.' },
      { question: 'What mistakes should I avoid when naming my fitness business?', answer: 'Avoid: overly aggressive names that intimidate beginners, names too similar to established fitness chains, difficult-to-spell words, names that limit service expansion, trendy terms that may date quickly, and anything that doesn\'t convey energy and motivation.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your fitness business is a pivotal step in creating a motivating brand that inspires people to pursue their health and fitness goals. Your business name will appear on signage, merchandise, marketing materials, and social media—it\'s the first impression potential members have of the energy and transformation you offer.',
      steps: [
        { title: 'Define Your Fitness Business Identity', description: 'Before generating names, clarify your fitness business\'s positioning. Consider what type of fitness services you will offer (general gym, specialized training, yoga, functional fitness), who your ideal client is (beginners, athletes, specific demographics), what makes your approach to fitness unique, what atmosphere and energy you want to create, and what results you help clients achieve. Your answers determine whether you need a name that sounds intense and competitive, supportive and welcoming, specialized and expert, or balanced and holistic.' },
        { title: 'Embody Motivation and Energy', description: 'Fitness businesses sell transformation and empowerment. Your name should inspire action and movement, convey strength, vitality, and determination, sound energizing when spoken, create excitement about fitness, and suggest the results clients can achieve. Words like Power, Thrive, Dynamic, Elevate, and Transform create immediate motivational associations.' },
        { title: 'Balance Intensity with Accessibility', description: 'Fitness businesses serve diverse clients. Names should motivate without intimidating, appeal to both beginners and advanced athletes, sound professional and credible, remain welcoming and approachable, and build trust for health-related services. Avoid names so intense they deter newcomers, while maintaining the energy fitness seekers expect.' },
        { title: 'Reflect Your Fitness Philosophy', description: 'If you have a distinctive approach, consider incorporating it. For strength/bodybuilding, consider IronForge or TitanStrength. For functional fitness, consider MovementMatrix or FunctionalFlow. For mind-body, consider BalanceStudio or ZenStrength. For high-intensity, consider IntensityLab or PeakPulse. For community-focused, consider FitTribe or WellnessCollective. Balance specificity with room for service evolution.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (.com preferred for credibility), social media (Instagram is essential for fitness businesses), business registration (your state requirements), trademark search (fitness and health categories), and local competition (ensure no similar gyms nearby). Fitness businesses rely heavily on visual content, making social media availability crucial.' },
        { title: 'Test with Your Target Members', description: 'Before finalizing, test with people representing your ideal clients. Ask if this name makes you want to work out, whether it feels motivating or intimidating, what type of fitness experience you would expect, whether you would feel comfortable as a beginner here, and whether you would recommend this gym to friends. Their feedback reveals whether your name creates the right energy and accessibility balance.' },
        { title: 'Consider Brand Growth and Expansion', description: 'Choose a name that accommodates future expansion: adding new fitness services, opening additional locations, launching online programs, creating merchandise lines, and building fitness community beyond physical location. The ideal fitness business name is motivating, memorable, accessible, and positions your brand for growth while perfectly capturing the transformative fitness experience you provide.' },
      ],
    },
    businessNameIdeas: [
      { name: 'ThriveThrust', description: 'A fitness business that aims to help clients thrive and push forward.' },
      { name: 'PowerPulse', description: 'Implies empowering workouts that get the heart pumping.' },
      { name: 'DynamicDynamo', description: 'A business that brings dynamic energy to every fitness session.' },
      { name: 'ResilienceRidge', description: 'Focuses on building resilience and overcoming challenges.' },
      { name: 'VigorVista', description: 'Offers a broad view to a vigorous, healthy lifestyle.' },
      { name: 'StaminaSanctuary', description: 'A sanctuary dedicated to building stamina and endurance.' },
      { name: 'EnergizeEden', description: 'A place where clients can energize their bodies and minds.' },
      { name: 'MomentumMatrix', description: 'Keeps clients moving steadily towards their fitness goals.' },
      { name: 'VitalityVault', description: 'A vault of vitality-enhancing fitness programs.' },
      { name: 'PulsePeak', description: 'Brings workouts to peak intensity levels.' },
      { name: 'StrengthSphere', description: 'A comprehensive sphere for strengthening body and mind.' },
      { name: 'EnduranceEmpire', description: 'Builds an empire of endurance and lasting fitness.' },
      { name: 'CoreCove', description: 'Focuses on core strength as the foundation of fitness.' },
      { name: 'FlexFit', description: 'Offers flexible workouts for every fitness level.' },
      { name: 'PinnaclePerformance', description: 'Takes clients to the pinnacle of their performance potential.' },
      { name: 'BalanceBase', description: 'Emphasizes balance in workouts and overall wellness.' },
      { name: 'ActiveArcade', description: 'A place where active, fun fitness activities are the norm.' },
      { name: 'ZealZone', description: 'Brings zeal and passion to every workout session.' },
      { name: 'FlowFountain', description: 'Workouts that flow smoothly from one movement to the next.' },
      { name: 'HarmonyHaven', description: 'Promotes harmony between body, mind, and fitness goals.' },
    ],
  },
  'flower-shop': {
    slug: 'flower-shop',
    name: 'Flower Shop Business Name Generator',
    title: 'Free AI Flower Shop Business Name Ideas Generator',
    description: 'Generate charming, evocative names for florists, floral studios, and flower delivery services.',
    metaDescription: 'Bloom into the flower shop business with a perfect name from our free AI generator. Create charming, memorable names for florists, floral studios, and flower delivery services. Try it now!',
    inputLabel: 'Describe your flower shop...',
    inputPlaceholder: 'e.g. A boutique florist specializing in romantic wedding arrangements and luxury bouquets',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Romantic & Elegant', 'Fresh & Natural', 'Whimsical & Creative', 'Classic & Traditional'], default: 'Romantic & Elegant', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the floral and gift industry. Your role is to generate charming, evocative business names that convey beauty, freshness, and emotional connection for flower shops, florists, and floral design businesses.

FLOWER SHOP INDUSTRY CONTEXT:

The flower shop industry encompasses:
- Retail flower shops and florists
- Wedding and event florists
- Online flower delivery services
- Floral design studios
- Garden centers with cut flowers
- Subscription flower services
- Wholesale florists
- Specialty flower importers
- Funeral and sympathy florists
- Corporate floral services

NAME CHARACTERISTICS FOR FLOWER SHOP BUSINESSES:

1. **Charming and Delightful**
   - Names should evoke the enchanting nature of flowers
   - Suggest beauty, romance, and natural elegance
   - Create warm, inviting feelings
   - Examples: Bloom, Petal, Blossom, Garden, Rose

2. **Memorable and Evocative**
   - Easy to remember and recommend
   - Conjure images of fresh blooms and delightful scents
   - Create emotional connections
   - Suitable for gift-giving contexts

3. **Reflects Floral Specialty**
   - Communicate your unique floral focus
   - Whether weddings, everyday arrangements, or exotic flowers
   - Align with target customer expectations
   - Examples: Bouquet, Arrangement, Design, Garden

4. **Romantic and Sentimental**
   - Flowers accompany life's meaningful moments
   - Names should feel special and heartfelt
   - Appeal to emotional gift-givers
   - Suggest the sentimentality flowers represent

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a flower shop

Generate names that are:
- 1-3 words maximum
- Charming and evocative
- Easy to spell and pronounce
- Romantic yet professional
- Versatile across floral services`,
    useCases: [
      { title: 'Retail Flower Shop Opening', description: 'Entrepreneurs opening flower shops use the Flower Shop Business Name Generator to find names that communicate the beauty and freshness of their floral offerings. Whether specializing in everyday bouquets, exotic flowers, or local blooms, the generator provides charming names that attract customers and establish a memorable brand.' },
      { title: 'Wedding and Event Florist Branding', description: 'Wedding florists launching their own businesses use the generator to create romantic, elegant names that appeal to brides and event planners. The tool helps identify names that work across wedding marketing platforms while conveying the artistry and emotion of floral design.' },
      { title: 'Online Flower Delivery Service', description: 'Entrepreneurs launching flower delivery services use the generator to develop names that work in e-commerce environments. The tool provides evocative names suitable for websites, apps, and digital marketing campaigns targeting gift-givers.' },
    ],
    faqs: [
      { question: 'What makes a good flower shop business name?', answer: 'A good flower shop name should be charming and delightful, evoking the enchanting nature of flowers. It should be memorable and evocative, reflective of your floral specialty, and carry romantic sentiment—appropriate for the meaningful occasions flowers accompany.' },
      { question: 'Should my flower shop name include specific flower names?', answer: 'Including flower names (Rose, Lily, Orchid) can create immediate floral associations but may suggest specialization. General terms (Bloom, Petal, Blossom) offer more versatility. Consider whether you want to highlight a signature flower or remain broadly appealing.' },
      { question: 'How important is my flower shop name for attracting customers?', answer: 'Very important. Flower purchases are often emotional—gifts, celebrations, sympathy. Your name creates the first impression of the beauty and care you provide. A charming name encourages customers to choose your shop for meaningful moments.' },
      { question: 'What flower shop naming trends are popular?', answer: 'Current trends include nature imagery (Garden, Meadow, Grove), botanical terms (Flora, Botanical), romantic words (Bloom, Petal, Blossom), and place-inspired names (Floral Studio, Petal Boutique). Names suggesting freshness and natural beauty resonate with customers.' },
      { question: 'Should I use my own name in my flower shop?', answer: 'Personal names work well for florists building individual brand recognition and personal service reputation. However, non-personal names offer more flexibility for sale or expansion. Consider your long-term business vision.' },
      { question: 'How do I check if my flower shop name is available?', answer: 'Check business registrations, domain names, social media handles (Instagram and Pinterest are crucial for florists), wedding directories, and trademark databases. Also search for similar florists in your service area.' },
      { question: 'What words work well in flower shop names?', answer: 'Effective words include flower terms (Bloom, Petal, Blossom, Flora), garden words (Garden, Meadow, Grove), beauty words (Lovely, Charming, Elegant), fragrance words (Fragrant, Fresh, Sweet), and romantic words (Dream, Romance, Enchanted).' },
      { question: 'Should my name reflect specific occasions I serve?', answer: 'Names that are too occasion-specific (e.g., "Wedding Flowers Only") limit perceived services. Choose a name broad enough to encompass weddings, sympathy, everyday, and corporate while still conveying floral beauty.' },
      { question: 'How can my flower shop name appeal to gift buyers?', answer: 'Most flower purchases are gifts. Names suggesting beauty, sentiment, and special occasions appeal to gift buyers. Consider how your name sounds in "I\'m sending flowers from [Your Shop]"—it should sound thoughtful and quality-focused.' },
      { question: 'What mistakes should I avoid when naming my flower shop?', answer: 'Avoid: names that don\'t evoke flowers or nature, difficult-to-spell words, names too similar to established florists, overly trendy terms that may date, names that limit service expansion, and anything that doesn\'t convey the beauty and emotion flowers represent.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your flower shop is a pivotal step in creating a charming brand that captures the beauty and sentiment flowers represent. Your business name will appear on storefronts, delivery vehicles, cards, and marketing materials—it\'s how customers remember and recommend your floral artistry.',
      steps: [
        { title: 'Define Your Floral Business Identity', description: 'Before generating names, clarify your flower shop\'s positioning. Consider what types of floral services you will offer (retail, weddings, events, delivery), who your ideal customer is (brides, gift-givers, corporate clients, everyday buyers), what makes your floral style unique, what occasions you primarily serve, and what feeling you want customers to experience. Your answers determine whether you need a name that sounds romantic and wedding-focused, fresh and everyday, elegant and sophisticated, or whimsical and creative.' },
        { title: 'Evoke Beauty and Natural Charm', description: 'Flower shops sell beauty and emotion. Your name should conjure images of fresh, beautiful flowers, sound charming and delightful, create warm, inviting feelings, suggest the natural elegance of flowers, and connect to the emotions flowers express. Words like Bloom, Petal, Garden, and Blossom create immediate floral associations while allowing unique brand development.' },
        { title: 'Create Emotional and Romantic Appeal', description: 'Flowers accompany life\'s meaningful moments. Names should feel special and heartfelt, appeal to emotional gift-givers, suggest sentimentality and romance, work for joyful and sympathetic occasions, and create desire to send beautiful flowers. Consider how your name sounds when someone chooses your shop for an important occasion.' },
        { title: 'Reflect Your Floral Specialty', description: 'If you have a distinctive specialty, consider incorporating it. For wedding focus, consider BridalBlooms or WeddingPetals. For exotic/tropical, consider OrchidOasis or TropicalFlorist. For local/sustainable, consider LocalBlooms or GardenFresh. For modern/artistic, consider FloralAtelier or DesignStudio. For classic/traditional, consider ClassicPetals or TimelessBlooms. Balance specialization with room for service expansion.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (.com preferred for credibility), social media (Instagram and Pinterest are essential for florists), wedding directories (The Knot, WeddingWire), business registration (your state requirements), and trademark search (floral and gift categories). Visual platforms are crucial for florists, making social media availability particularly important.' },
        { title: 'Test with Potential Customers', description: 'Before finalizing, test with people representing your ideal customers. Ask if this name makes you think of beautiful flowers, whether you would order flowers from this shop for a special occasion, whether it feels quality-focused and trustworthy, whether it is easy to remember and spell, and whether you would recommend it to friends. Their feedback reveals whether your name creates the right floral impressions.' },
        { title: 'Consider Brand Growth and Evolution', description: 'Choose a name that accommodates future expansion: adding new floral services, opening additional locations, launching delivery and e-commerce, expanding into events and weddings, and building subscription services. The ideal flower shop name is charming, memorable, versatile, and positions your brand for growth while perfectly capturing the beauty and sentiment flowers represent.' },
      ],
    },
    businessNameIdeas: [
      { name: 'BloomBay', description: 'A flower shop filled with beautiful blooming flowers.' },
      { name: 'PetalParadise', description: 'A paradise full of colorful, fragrant petals.' },
      { name: 'BlossomBounty', description: 'Abundant blossoms for every occasion.' },
      { name: 'FloraFountain', description: 'A continuous source of fresh, beautiful flowers.' },
      { name: 'BotanicBoutique', description: 'A boutique offering a curated variety of plants and flowers.' },
      { name: 'RoseReef', description: 'Specializing in beautiful roses and classic arrangements.' },
      { name: 'GardenGrove', description: 'A flower shop that feels like a beautiful garden.' },
      { name: 'DaffodilDome', description: 'Bright, cheerful flowers that bring sunshine indoors.' },
      { name: 'LushLily', description: 'Elegant lilies and luxurious floral arrangements.' },
      { name: 'FragranceFountain', description: 'Known for the lovely fragrance of fresh-cut flowers.' },
      { name: 'PetuniaPalace', description: 'A grand selection of colorful, vibrant blooms.' },
      { name: 'OrchidOasis', description: 'Exotic orchids and sophisticated arrangements.' },
      { name: 'BloomBoutique', description: 'A boutique known for its carefully curated blooms.' },
      { name: 'TulipTerrace', description: 'Spring-fresh tulips and seasonal favorites.' },
      { name: 'DaisyDomain', description: 'Cheerful daisies and happy, bright arrangements.' },
      { name: 'FloraFort', description: 'A fortress of beautiful flora and floral expertise.' },
      { name: 'MagnoliaMeadow', description: 'Southern charm with elegant magnolias and blooms.' },
      { name: 'SunflowerSanctuary', description: 'Bright, sunny flowers that bring joy to any space.' },
      { name: 'FragrantForest', description: 'A forest of fragrant, beautiful flower selections.' },
      { name: 'EnchantedPetals', description: 'Magical, enchanting floral creations for special moments.' },
    ],
  },
  'food': {
    slug: 'food',
    name: 'Food Business Name Generator',
    title: 'Free AI Food Business Name Ideas Generator',
    description: 'Generate appetizing, memorable names for restaurants, food brands, and culinary businesses.',
    metaDescription: 'No more food business name struggles! Our AI generator serves up great names for restaurants, food brands, and culinary businesses. Free, appetizing, and memorable. Try it now!',
    inputLabel: 'Describe your food business...',
    inputPlaceholder: 'e.g. A farm-to-table restaurant focusing on locally sourced organic ingredients',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Gourmet & Sophisticated', 'Fresh & Healthy', 'Comfort & Homestyle', 'Fun & Casual'], default: 'Gourmet & Sophisticated', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the food and culinary industry. Your role is to generate appetizing, memorable business names that convey deliciousness, quality, and culinary expertise for restaurants, food brands, and culinary businesses.

FOOD BUSINESS INDUSTRY CONTEXT:

The food business industry encompasses:
- Restaurants and eateries
- Cafes and casual dining
- Food product brands
- Catering services
- Meal prep and delivery services
- Specialty food shops
- Bakeries and confectioneries
- Food manufacturing
- Farm-to-table establishments
- Ghost kitchens and delivery-only concepts

NAME CHARACTERISTICS FOR FOOD BUSINESSES:

1. **Reflective of Cuisine or Specialty**
   - Names should communicate your food focus
   - Evoke the flavors and style of your offerings
   - Create appetite appeal
   - Examples: Savory, Gourmet, Fresh, Artisan, Harvest

2. **Appetizing and Easy to Remember**
   - Sound delicious and tempting
   - Simple to recall and recommend
   - Work well for word-of-mouth referrals
   - Create cravings when heard

3. **Available for Online Presence**
   - Work as domain names
   - Available on social media platforms
   - SEO-friendly for food searches
   - Suitable for delivery app listings

4. **Quality and Expertise Signals**
   - Suggest culinary skill and quality ingredients
   - Build trust for food purchases
   - Communicate the care in your cooking
   - Appeal to discerning food lovers

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a food business

Generate names that are:
- 1-3 words maximum
- Appetizing and memorable
- Easy to spell and pronounce
- Professional yet inviting
- Versatile across food services`,
    useCases: [
      { title: 'Restaurant Launch', description: 'Entrepreneurs opening restaurants use the Food Business Name Generator to find names that communicate their culinary vision and attract hungry customers. Whether launching a fine dining establishment, casual eatery, or specialty restaurant, the generator provides appetizing names that establish memorable brand identity.' },
      { title: 'Food Product Brand Development', description: 'Food entrepreneurs creating product lines use the generator to develop brand names that work on packaging and in retail environments. The tool helps identify names that are shelf-appealing, memorable, and communicate quality and deliciousness.' },
      { title: 'Catering or Meal Service Business', description: 'Caterers and meal prep services use the generator to create names that communicate quality and culinary expertise. The tool provides appetizing names suitable for corporate clients, event planners, and busy individuals seeking delicious prepared food.' },
    ],
    faqs: [
      { question: 'What makes a good food business name?', answer: 'A good food business name should reflect your cuisine or specialty, be appetizing and easy to remember, and be available for online presence. It should communicate quality and create cravings—making people want to taste your food just by hearing the name.' },
      { question: 'Should my food business name mention specific cuisines?', answer: 'Mentioning cuisine (Italian, Thai, BBQ) can attract customers seeking that specific food but may limit perceived offerings. General appetizing terms offer more flexibility. Consider whether you want to highlight a specialty or remain broadly appealing.' },
      { question: 'How important is my food business name for marketing?', answer: 'Crucial. Your name appears on signage, menus, packaging, delivery apps, and reviews. An appetizing name creates cravings before customers even see your food. It affects word-of-mouth referrals and online searchability.' },
      { question: 'What food business naming trends are popular?', answer: 'Current trends include quality words (Artisan, Craft, Fresh), compound names (TasteTrail, FlavorFusion), simple descriptors (The Kitchen, Table), and playful names for casual concepts. Authentic, appetite-appealing names resonate with food lovers.' },
      { question: 'Should I use my own name in my food business?', answer: 'Personal names work well for chef-driven concepts and build individual reputation. However, non-personal names offer more flexibility for expansion or sale. Consider whether personal branding or business scalability matters more.' },
      { question: 'How do I check if my food business name is available?', answer: 'Check business registrations, domain names, social media handles, delivery app listings (Uber Eats, DoorDash), and trademark databases. Also search for similar restaurants in your area and food category.' },
      { question: 'What words work well in food business names?', answer: 'Effective words include taste terms (Savor, Flavor, Delicious), culinary words (Gourmet, Kitchen, Bistro), quality words (Fresh, Artisan, Prime), abundance words (Bounty, Feast, Harvest), and experience words (Bite, Feast, Table).' },
      { question: 'Should my name reflect my restaurant style?', answer: 'If you have a distinctive style (farm-to-table, fusion, family-style), reflecting it can attract your target market. However, names that are too specific may limit future menu evolution. Balance specificity with flexibility.' },
      { question: 'How can my food business name appeal to delivery customers?', answer: 'With delivery apps, your name needs to stand out in a list. Appetizing, memorable names work better than generic ones. Consider how your name looks in an app search and whether it suggests the delicious experience awaiting.' },
      { question: 'What mistakes should I avoid when naming my food business?', answer: 'Avoid: names that don\'t sound appetizing, difficult-to-spell words, names too similar to established restaurants, overly trendy terms that may date, names that limit menu expansion, and anything that doesn\'t convey the quality and deliciousness of your food.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your food business is a critical step in creating an appetizing brand that attracts hungry customers and communicates the quality of your culinary offerings. Your business name will appear on signage, menus, packaging, and delivery apps—it\'s how customers discover, remember, and recommend your food.',
      steps: [
        { title: 'Define Your Food Business Identity', description: 'Before generating names, clarify your food business\'s positioning. Consider what type of food you will offer (cuisine style, specialty, format), who your ideal customer is (foodies, families, health-conscious, busy professionals), what makes your food unique (ingredients, preparation, experience), what\'s your service model (dine-in, delivery, both), and what atmosphere or experience you create. Your answers determine whether you need a name that sounds gourmet and sophisticated, casual and fun, healthy and fresh, or comforting and homey.' },
        { title: 'Create Appetite Appeal', description: 'Food businesses sell the experience of delicious eating. Your name should sound appetizing and tempting, create cravings when heard, suggest quality and deliciousness, work in "I\'m hungry for [Your Restaurant]" context, and make people want to taste your food. Words like Savory, Gourmet, Fresh, and Feast create immediate appetite associations.' },
        { title: 'Communicate Quality and Expertise', description: 'Food purchases require trust. Your name should suggest culinary skill and care, communicate quality ingredients, build confidence in your food, sound professional and reliable, and appeal to discerning food lovers. Balance appetizing appeal with signals of quality and expertise.' },
        { title: 'Reflect Your Culinary Focus', description: 'If you have a distinctive specialty, consider incorporating it. For gourmet/fine dining, consider EpicureEmporium or GourmetGarden. For casual/comfort, consider CozyCuisine or ComfortKitchen. For fresh/healthy, consider FreshFare or GreenGourmet. For ethnic/specialty, consider [Cuisine]Kitchen or AuthenticEats. For farm-to-table, consider HarvestHaven or FarmFresh. Balance specificity with room for menu evolution.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (.com preferred for credibility), social media (Instagram is crucial for food businesses), delivery apps (Uber Eats, DoorDash, Grubhub listings), business registration (your state requirements), and trademark search (food and restaurant categories). Delivery and online ordering are essential, making digital availability crucial.' },
        { title: 'Test with Potential Customers', description: 'Before finalizing, test with people representing your target market. Ask if this name makes you hungry, what type of food you would expect, whether it feels quality-focused, whether you would order from this place, and whether you would recommend it to friends. Their feedback reveals whether your name creates the right appetite appeal and expectations.' },
        { title: 'Consider Brand Growth and Expansion', description: 'Choose a name that accommodates future expansion: adding new menu items or cuisines, opening additional locations, launching delivery and catering, creating packaged food products, and building food brand beyond restaurant. The ideal food business name is appetizing, memorable, versatile, and positions your brand for growth while perfectly capturing the delicious experience you provide.' },
      ],
    },
    businessNameIdeas: [
      { name: 'SavorySanctuary', description: 'A sanctuary where delicious, savory food is revered.' },
      { name: 'EpicureEmporium', description: 'An emporium offering a variety of gourmet, epicurean delights.' },
      { name: 'FlavorFountain', description: 'A never-ending source of tasty, flavorful dishes.' },
      { name: 'PalateParadise', description: 'Food that delights the palate in a paradise setting.' },
      { name: 'DelishDome', description: 'A dome filled with delicious food options.' },
      { name: 'CulinaryCove', description: 'A hidden gem destination for food enthusiasts.' },
      { name: 'BiteBounty', description: 'A bounty of delicious bites to enjoy.' },
      { name: 'GourmetGrove', description: 'A grove full of high-quality gourmet food.' },
      { name: 'TasteTreasure', description: 'Treasured dishes that delight the taste buds.' },
      { name: 'FeastField', description: 'A vast field of feast-worthy dishes.' },
      { name: 'ScrumptiousSpree', description: 'An abundance of scrumptious food to enjoy.' },
      { name: 'DeliciousDen', description: 'A cozy den filled with delicious food.' },
      { name: 'YumYard', description: 'A yard full of yummy food options.' },
      { name: 'NoshNook', description: 'A cozy nook filled with snackable, delicious foods.' },
      { name: 'MorselMeadow', description: 'A meadow of delightful food morsels.' },
      { name: 'BiteBliss', description: 'A joyful place for food lovers to indulge.' },
      { name: 'GastronomicGarden', description: 'A garden growing with diverse gastro options.' },
      { name: 'SavoryShire', description: 'A community of savory food lovers.' },
      { name: 'PlatterPleasure', description: 'Platters of food that bring pure pleasure.' },
      { name: 'GrubGrotto', description: 'A special grotto for enjoyable, satisfying food.' },
    ],
  },
  'food-truck': {
    slug: 'food-truck',
    name: 'Food Truck Business Name Generator',
    title: 'Free AI Food Truck Business Name Ideas Generator',
    description: 'Generate catchy, memorable names for mobile food vendors and street food businesses.',
    metaDescription: 'Hit the road with a perfect name from our free AI generator for your food truck business. Create catchy, memorable names for mobile food vendors. Quick, appetizing, and free!',
    inputLabel: 'Describe your food truck...',
    inputPlaceholder: 'e.g. A gourmet taco truck serving fusion Mexican-Asian street food',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Catchy & Fun', 'Gourmet & Upscale', 'Street Food Vibe', 'Playful & Creative'], default: 'Catchy & Fun', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the mobile food and street food industry. Your role is to generate catchy, memorable business names that convey deliciousness, mobility, and unique culinary experiences for food trucks, mobile food vendors, and street food businesses.

FOOD TRUCK INDUSTRY CONTEXT:

The food truck business industry encompasses:
- Gourmet food trucks
- Ethnic and specialty cuisine trucks
- Dessert and sweet treat trucks
- Breakfast and coffee trucks
- BBQ and comfort food trucks
- Healthy and vegan food trucks
- Fusion cuisine trucks
- Event and festival food vendors
- Corporate catering trucks
- Late-night food trucks

NAME CHARACTERISTICS FOR FOOD TRUCK BUSINESSES:

1. **Appetizing and Unique**
   - Names should evoke flavor and excitement
   - Suggest the unique mobile food experience
   - Create cravings and curiosity
   - Examples: Flavor, Taste, Gourmet, Street, Rolling

2. **Easy to Remember and Pronounce**
   - Must be catchy and memorable
   - Work in quick street encounters
   - Easy to share and recommend
   - Simple to find on social media

3. **Reflects Cuisine or Theme**
   - Communicate the type of food offered
   - Whether gourmet, ethnic, comfort, or specialty
   - Align with your culinary identity
   - Create expectations that you deliver

4. **Mobile/Movement Element**
   - Names can incorporate mobility concepts
   - Suggest the traveling, street food nature
   - Fun, dynamic vocabulary
   - Examples: Rolling, Cruise, Mobile, Wheels, Transit

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a food truck

Generate names that are:
- 1-3 words maximum
- Catchy and fun
- Easy to spell and remember
- Appropriate for truck branding
- Communicative of food type or experience`,
    useCases: [
      { title: 'Gourmet Food Truck Launch', description: 'Entrepreneurs launching gourmet food trucks use the Food Truck Business Name Generator to find names that communicate culinary quality while capturing the fun, mobile nature of street food. The generator provides catchy names that stand out at food truck festivals and attract hungry customers.' },
      { title: 'Specialty Cuisine Mobile Vendor', description: 'Food truck owners specializing in specific cuisines (tacos, BBQ, Asian fusion) use the generator to create memorable brand names that communicate their specialty while being fun and approachable. The tool helps identify names that work on truck wraps and social media.' },
      { title: 'Event and Festival Food Business', description: 'Mobile food vendors serving events and festivals use the generator to develop attention-grabbing names that draw crowds in competitive festival environments. The tool provides names that are easy to remember and share, essential for building repeat festival customers.' },
    ],
    faqs: [
      { question: 'What makes a good food truck business name?', answer: 'A good food truck name should be appetizing and unique, easy to remember and pronounce, and reflective of your cuisine or theme. It often helps to incorporate movement or mobile elements that capture the fun, traveling nature of food truck culture.' },
      { question: 'Should my food truck name include "truck" or "mobile"?', answer: 'Including vehicle words can reinforce your mobile identity but isn\'t required. Many successful food trucks use creative names without explicit vehicle references. Consider whether you want to emphasize mobility or focus purely on food appeal.' },
      { question: 'How important is my food truck name for attracting customers?', answer: 'Extremely important. Food trucks rely on catching attention quickly on streets and at events. A catchy, memorable name helps customers find you, remember you, and share you with friends. Your name is also crucial for social media tracking.' },
      { question: 'What food truck naming trends are popular?', answer: 'Current trends include playful alliteration (Taco Trek, Grilled Goddess), puns and wordplay, movement words (Rolling, Roaming, Cruising), and cuisine-specific creative names. Fun, shareable names work best for social media virality.' },
      { question: 'Should I use my own name in my food truck?', answer: 'Personal names can build chef recognition but are less common in food truck culture, which tends toward creative, catchy names. Consider whether personal branding or memorable creativity better serves your business goals.' },
      { question: 'How do I check if my food truck name is available?', answer: 'Check social media handles (Instagram is essential), food truck directories, business registrations, domain names, and local food truck listings. Also search for similar names at popular food truck festivals and events.' },
      { question: 'What words work well in food truck names?', answer: 'Effective words include food terms (Flavor, Taste, Gourmet, Grub), movement words (Rolling, Mobile, Cruise, Trek), vehicle words (Truck, Cart, Express, Wheels), and fun words (Feast, Fiesta, Adventure, Safari).' },
      { question: 'Should my name reflect my specific cuisine?', answer: 'If you specialize in specific cuisine, reflecting it helps attract the right customers. However, general names offer flexibility if your menu evolves. Balance cuisine communication with potential for menu changes.' },
      { question: 'How can my food truck name work for social media?', answer: 'Choose names that are easy to hashtag, spell, and find. Short, catchy names work best. Consider how your name looks as @YourTruckName on Instagram and whether customers can easily tag you in posts.' },
      { question: 'What mistakes should I avoid when naming my food truck?', answer: 'Avoid: names that are hard to spell or pronounce, names too long for truck signage, names that don\'t sound appetizing, names too similar to other local trucks, and names that don\'t work well on social media.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your food truck is a crucial step in creating a catchy brand that attracts hungry customers and stands out in the vibrant street food scene. Your business name will appear on your truck wrap, social media, event listings, and word-of-mouth recommendations—it\'s how customers find, remember, and share your mobile food experience.',
      steps: [
        { title: 'Define Your Food Truck Identity', description: 'Before generating names, clarify your food truck\'s positioning. Consider what type of cuisine you will serve (specialty, fusion, comfort, gourmet), who your ideal customer is (foodies, lunch crowds, late-night seekers, families), what makes your food unique, what events and locations you will serve, and what vibe you want to create. Your answers determine whether you need a name that sounds gourmet and sophisticated, fun and playful, ethnic and authentic, or quick and convenient.' },
        { title: 'Create Catchy, Memorable Appeal', description: 'Food trucks need attention-grabbing names. They must be catchy and memorable, work in quick street encounters, be easy to share and recommend, be simple to find on social media, and stand out at festivals and events. In the competitive food truck world, forgettable names mean missed customers.' },
        { title: 'Consider Mobility and Movement', description: 'Food trucks are unique in their mobility. Names can celebrate the traveling nature, movement words add dynamic energy, vehicle references can be fun, street food culture vocabulary works well, and capture the adventure of mobile dining. Words like Rolling, Cruise, Mobile, and Trek add food truck character.' },
        { title: 'Reflect Your Culinary Focus', description: 'Help customers know what to expect. Incorporate cuisine hints when appropriate, balance specificity with flexibility, create appetizing expectations, align name with your food truck\'s personality, and communicate quality level (gourmet, casual, etc.). Your name should make people curious about your menu.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across social media (Instagram is essential for food trucks), domain name (for your website and online ordering), local food truck directories (ensure no conflicts), business registration (your city requirements), and event/festival listings (how you\'ll appear in programs). Social media findability is crucial for food truck success.' },
        { title: 'Test with Potential Customers', description: 'Before finalizing, test with people representing your target market. Ask if this name is catchy and memorable, whether you would look for this truck at a festival, what type of food you would expect, whether you would follow this truck on social media, and whether you would recommend it to friends. Their feedback reveals whether your name has the necessary street appeal.' },
        { title: 'Consider Signage and Branding', description: 'Choose a name that works visually: short enough for bold truck signage, looks good in logos and graphics, works on menus and packaging, appropriate for merchandise, and effective on social media profiles. The ideal food truck name is catchy, appetizing, memorable, and positions your brand for success while perfectly capturing the fun, delicious experience of street food.' },
      ],
    },
    businessNameIdeas: [
      { name: 'FlavorFleet', description: 'A food truck known for its fleet of amazing flavors.' },
      { name: 'TasteTransit', description: 'Transporting delectable tastes to various locations.' },
      { name: 'MealMobile', description: 'A mobile meal service bringing food to hungry customers.' },
      { name: 'CulinaryCaravan', description: 'A caravan of culinary delights traveling the streets.' },
      { name: 'GourmetGuzzler', description: 'Gourmet food to guzzle on the go.' },
      { name: 'DelishDrive', description: 'Taking delicious food on the drive to customers.' },
      { name: 'BistroBus', description: 'A mobile bistro bringing restaurant quality to the streets.' },
      { name: 'EpicureExpress', description: 'Express service of epicurean delights.' },
      { name: 'FoodieFreight', description: 'Freighting loads of foodie delights to hungry crowds.' },
      { name: 'TastyTraveller', description: 'Traveling with tasty food options wherever needed.' },
      { name: 'CuisineCab', description: 'A cab service for cuisines on the move.' },
      { name: 'GastroGo', description: 'Go-to gastro delights on wheels.' },
      { name: 'YumYacht', description: 'A yacht of yumminess sailing through the streets.' },
      { name: 'SavoryShuttle', description: 'Shuttling savory food options to hungry customers.' },
      { name: 'NoshNomad', description: 'A nomadic food truck with nosh-worthy snacks.' },
      { name: 'ChowCart', description: 'A cart of chow options for quick, delicious meals.' },
      { name: 'TreatTrek', description: 'Trekking with treats to events and locations.' },
      { name: 'GrubGypsy', description: 'A gypsy-style food truck offering great grub.' },
      { name: 'PalatePilgrim', description: 'A pilgrim of palate-pleasing foods on a journey.' },
      { name: 'EatsEngine', description: 'An engine that drives eats around to hungry customers.' },
    ],
  },
  'funny': {
    slug: 'funny',
    name: 'Funny Business Name Generator',
    title: 'Free AI Funny Business Name Ideas Generator',
    description: 'Generate witty, clever, laugh-inducing names for entertainment businesses and fun brands.',
    metaDescription: 'Add humor to your brand with an AI-generated funny business name. Create witty, clever, laugh-inducing names for entertainment businesses and fun brands. Quick, free, and creative!',
    inputLabel: 'Describe your business...',
    inputPlaceholder: 'e.g. A comedy club and entertainment venue for stand-up comedy and improv shows',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Witty & Clever', 'Silly & Playful', 'Punny & Wordplay', 'Joyful & Lighthearted'], default: 'Witty & Clever', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in humor-based branding and comedic business naming. Your role is to generate witty, clever, and laugh-inducing business names that convey humor, fun, and memorable entertainment for comedy clubs, entertainment businesses, novelty shops, and brands that use humor as their identity.

FUNNY BUSINESS INDUSTRY CONTEXT:

The funny/humor business industry encompasses:
- Comedy clubs and venues
- Entertainment and novelty businesses
- Humorous product brands
- Party and celebration companies
- Prank and gag gift shops
- Comedy content creators
- Funny merchandise companies
- Entertainment event planners
- Humor-based services
- Any business wanting a lighthearted, fun brand

NAME CHARACTERISTICS FOR FUNNY BUSINESSES:

1. **Witty and Clever**
   - Names should showcase humor and intelligence
   - Use wordplay, puns, and clever combinations
   - Create immediate smile or chuckle
   - Examples: Giggle, Chuckle, Jest, Wit, Humor

2. **Memorable and Laugh-Inducing**
   - Easy to remember because they're funny
   - Create positive emotional response
   - Shareable and conversation-starting
   - Stand out through humor

3. **Reflects Humor Style**
   - Match your comedy approach
   - Whether silly, clever, or dry humor
   - Align with target audience's sense of humor
   - Create appropriate expectations

4. **Professional Despite Humor**
   - Funny but still businesslike
   - Appropriate for marketing and professional contexts
   - Work in all business situations
   - Balance humor with credibility

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a funny business

Generate names that are:
- 1-3 words maximum
- Genuinely funny or clever
- Easy to spell and pronounce
- Professional enough for business
- Memorable through humor`,
    useCases: [
      { title: 'Comedy Venue or Entertainment Business', description: 'Entrepreneurs opening comedy clubs or entertainment venues use the Funny Business Name Generator to find names that immediately communicate the fun, humorous experience they offer. The generator provides witty names that attract comedy lovers and set the right expectations.' },
      { title: 'Novelty or Gag Product Brand', description: 'Creators of humorous products, gag gifts, or novelty items use the generator to develop brand names that match their playful offerings. The tool helps identify names that are funny enough to be memorable while remaining professional for business operations.' },
      { title: 'Lighthearted Service Business Branding', description: 'Service businesses wanting to stand out through humor (party planning, entertainment, creative services) use the generator to create distinctive names that differentiate them from serious competitors and attract clients who appreciate fun, lighthearted approaches.' },
    ],
    faqs: [
      { question: 'What makes a good funny business name?', answer: 'A good funny business name should be witty and clever, creating an immediate smile or chuckle. It should be memorable because of its humor, reflect your specific humor style, and remain professional enough for business contexts despite being funny.' },
      { question: 'Can a business name be both funny and professional?', answer: 'Absolutely. Many successful brands use humor effectively while maintaining professionalism. The key is choosing clever, appropriate humor rather than crude or offensive jokes. Wit and wordplay tend to be professionally acceptable while still being funny.' },
      { question: 'How important is humor consistency in branding?', answer: 'Very important. If your business name is funny, customers expect humor throughout their experience. A funny name creates expectations—make sure your actual business delivers on the fun, lighthearted promise your name makes.' },
      { question: 'What types of humor work best in business names?', answer: 'Clever wordplay and puns tend to work well because they\'re universally accessible and appropriate. Alliteration creates memorable, fun-sounding names. Avoid humor that might be offensive, dated, or too obscure for your target audience.' },
      { question: 'Should I test my funny business name with others?', answer: 'Definitely. Humor is subjective. Test your name with various people to ensure it lands as intended. What\'s hilarious to you might not translate to others, or might even be unintentionally offensive.' },
      { question: 'How do I balance funny with searchable?', answer: 'While creativity is important, ensure your funny name still communicates what you do. People searching for comedy clubs or entertainment won\'t find "Random Absurd Name" easily. Include hints about your business type when possible.' },
      { question: 'What words create humor in business names?', answer: 'Effective humor words include laughter terms (Giggle, Chuckle, Snicker), joy words (Mirth, Glee, Jolly), playful words (Jest, Pun, Wit), and fun places (Grove, Haven, Sphere combined unexpectedly with humor words).' },
      { question: 'Can funny names work for serious industries?', answer: 'Some industries embrace humor better than others. Entertainment, parties, gifts, and creative services welcome humor. More serious industries (legal, medical, financial) typically require more conservative naming, though subtle wit can still work.' },
      { question: 'How do I avoid offensive or inappropriate humor?', answer: 'Avoid humor based on stereotypes, crude jokes, or anything that could offend groups of people. When in doubt, choose clever wordplay over edgy humor. Have diverse people review your name before finalizing.' },
      { question: 'What mistakes should I avoid with funny business names?', answer: 'Avoid: jokes that require explanation, humor that dates quickly, offensive or crude references, names so absurd they\'re confusing, humor that doesn\'t match your actual business, and names that sacrifice professionalism for laughs.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for a humor-based business is a delightful creative challenge. Your business name sets the tone for customer expectations—if your name is funny, customers expect a fun experience. Done well, a funny business name creates instant memorability and positive associations.',
      steps: [
        { title: 'Define Your Humor Style', description: 'Before generating names, clarify your approach to humor. Consider what type of humor fits your brand (witty, silly, dry, clever), who your target audience is and what they find funny, how important humor is to your overall brand identity, what level of professionalism you need to maintain, and what humor styles you should avoid. Your answers guide whether you need clever wordplay, silly fun, subtle wit, or playful absurdity.' },
        { title: 'Create Genuine Humor', description: 'Your name should actually be funny. Aim for immediate smile or chuckle, use clever wordplay or puns, create unexpected combinations, make it memorable through humor, and avoid trying too hard—forced humor falls flat. Test potential names by sharing them—do people smile or laugh?' },
        { title: 'Balance Humor with Professionalism', description: 'Even funny businesses need credibility. Remain appropriate for all contexts, work in professional communications, avoid humor that could offend, still communicate what you do, and build trust despite the fun tone. The best funny names are clever, not crude.' },
        { title: 'Ensure Shareability', description: 'Funny names should spread. They should be easy to tell others about, work in "Have you heard of [Name]?" context, be shareable on social media, be conversation-starting, and be memorable after one exposure. Humor drives word-of-mouth marketing when done well.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (your funny name should be available online), social media (consistent handles across platforms), business registration (your state requirements), trademark search (ensure no conflicts), and similar businesses (avoid confusion with existing funny brands). Funny names are often more unique, improving availability chances.' },
        { title: 'Test with Diverse Audiences', description: 'Before finalizing, test extensively. Ask if it makes different people laugh, whether it is offensive to any groups, whether it communicates your business type, whether it is memorable after hearing once, and whether it works in professional contexts. Humor is subjective—test broadly to ensure your name lands well.' },
        { title: 'Consider Long-Term Appeal', description: 'Choose humor that lasts. Avoid trendy jokes that date quickly, timeless wit ages better than current references, ensure humor stays funny after repeated exposure, consider how the name feels after years of use, and build a brand that sustains the fun promise. The ideal funny business name is genuinely clever, professionally appropriate, memorable through humor, and positions your brand for lasting success while bringing smiles to everyone who encounters it.' },
      ],
    },
    businessNameIdeas: [
      { name: 'GiggleGrove', description: 'A place where giggles and laughter grow abundantly.' },
      { name: 'ChuckleChamber', description: 'A chamber filled with chuckles and good humor.' },
      { name: 'JestJunction', description: 'Where witty jests and jokes come together.' },
      { name: 'MerrimentMatrix', description: 'A matrix of joy, merriment, and laughter.' },
      { name: 'SnickerSphere', description: 'A sphere of snickers and amusing moments.' },
      { name: 'LaughterLagoon', description: 'A lagoon where laughter flows freely.' },
      { name: 'WitWave', description: 'Riding the wave of wit and clever humor.' },
      { name: 'HumorHaven', description: 'A haven for humor and comedic enjoyment.' },
      { name: 'JollyJunction', description: 'Where jolliness and fun come together.' },
      { name: 'HilarityHut', description: 'A hut dedicated to hilarious experiences.' },
      { name: 'FunFountain', description: 'A fountain overflowing with fun and humor.' },
      { name: 'GrinGrid', description: 'A grid of grins and happy expressions.' },
      { name: 'SmilesSphere', description: 'Spreading smiles far and wide.' },
      { name: 'TicklesTrove', description: 'A trove of tickling humor and funny moments.' },
      { name: 'MirthMatrix', description: 'A matrix of mirth and joyful entertainment.' },
      { name: 'JoyfulJade', description: 'Bringing joy and happiness to everyone.' },
      { name: 'GleeGlade', description: 'A glade full of glee and cheerful moments.' },
      { name: 'MerrimentMeadow', description: 'A meadow where merriment and laughter bloom.' },
      { name: 'BlissfulBay', description: 'A bay of blissful, happy experiences.' },
      { name: 'CheeryCove', description: 'A cove of cheeriness and lighthearted fun.' },
    ],
  },
  'furniture-store': {
    slug: 'furniture-store',
    name: 'Furniture Store Business Name Generator',
    title: 'Free AI Furniture Store Business Name Ideas Generator',
    description: 'Generate elegant, inviting names for furniture stores, home décor shops, and interior businesses.',
    metaDescription: 'Furnish your store with a brilliant name from our free AI generator. Create elegant, inviting names for furniture stores, home décor shops, and interior businesses. Effortless and tailor-made!',
    inputLabel: 'Describe your furniture store...',
    inputPlaceholder: 'e.g. A modern furniture showroom specializing in Scandinavian-inspired minimalist designs',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Elegant & Sophisticated', 'Modern & Contemporary', 'Cozy & Comfortable', 'Classic & Traditional'], default: 'Elegant & Sophisticated', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the home furnishings and furniture retail industry. Your role is to generate elegant, inviting business names that convey style, quality, and comfort for furniture stores, home décor shops, and interior furnishing businesses.

FURNITURE STORE INDUSTRY CONTEXT:

The furniture store industry encompasses:
- Full-service furniture retailers
- Specialty furniture stores (bedroom, office, outdoor)
- Designer furniture showrooms
- Discount and value furniture stores
- Vintage and antique furniture shops
- Custom furniture makers
- Online furniture retailers
- Home décor and accessories stores
- Office furniture suppliers
- Children's furniture specialists

NAME CHARACTERISTICS FOR FURNITURE STORES:

1. **Inviting and Descriptive**
   - Names should evoke a welcoming atmosphere
   - Suggest the comfort and beauty of your furniture
   - Create desire to browse and purchase
   - Examples: Home, Comfort, Living, Style, Design

2. **Memorable and Timeless**
   - Easy to remember for repeat visits
   - Avoid trendy names that date quickly
   - Evoke enduring elegance
   - Work for long-term brand building

3. **Reflects Design Aesthetic**
   - Communicate your furniture style
   - Whether modern, classic, rustic, or eclectic
   - Align with target customer tastes
   - Create appropriate style expectations

4. **Quality and Trust Signals**
   - Furniture is a significant purchase
   - Names should convey quality and reliability
   - Build confidence in your offerings
   - Suggest lasting value

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a furniture store

Generate names that are:
- 1-3 words maximum
- Inviting and elegant
- Easy to spell and pronounce
- Professional and trustworthy
- Versatile across furniture types`,
    useCases: [
      { title: 'Furniture Retail Store Launch', description: 'Entrepreneurs opening furniture stores use the Furniture Store Business Name Generator to find names that communicate quality, style, and the inviting nature of their showrooms. Whether offering modern, traditional, or eclectic furniture, the generator provides elegant names that attract home shoppers.' },
      { title: 'Online Furniture Business Branding', description: 'E-commerce entrepreneurs launching online furniture stores use the generator to create memorable brand names that work in digital environments. The tool helps identify names that communicate style and quality while being SEO-friendly and easy to find online.' },
      { title: 'Specialty Furniture Shop Differentiation', description: 'Specialty furniture retailers (vintage, custom, office) use the generator to develop names that communicate their specific focus while maintaining broad appeal. The tool provides names that position the business as experts in their furniture niche.' },
    ],
    faqs: [
      { question: 'What makes a good furniture store business name?', answer: 'A good furniture store name should be inviting and descriptive, memorable and timeless, and reflective of your design aesthetic. It should also signal quality and trustworthiness—important for significant furniture purchases.' },
      { question: 'Should my furniture store name indicate my style specialty?', answer: 'If you have a distinctive style (modern, rustic, vintage), reflecting it can attract the right customers. However, broader names offer flexibility as design trends evolve. Balance style communication with long-term versatility.' },
      { question: 'How important is my furniture store name for building trust?', answer: 'Very important. Furniture purchases are significant investments. A professional, quality-sounding name builds confidence that your furniture is well-made, stylish, and worth the investment. It affects customer willingness to spend.' },
      { question: 'What furniture store naming trends are popular?', answer: 'Current trends include home-focused words (Haven, Nest, Abode), comfort vocabulary (Cozy, Comfort, Plush), design terms (Studio, Design, Style), and compound elegance names (LivingLuxe, HomeHarmony). Timeless, elegant names endure best.' },
      { question: 'Should I use my own name in my furniture store?', answer: 'Personal names work well for designer furniture showrooms and custom furniture makers building personal brand recognition. For larger retail operations, non-personal names often sound more established and offer more flexibility.' },
      { question: 'How do I check if my furniture store name is available?', answer: 'Check business registrations, domain names, social media handles (Instagram and Pinterest are important for furniture), furniture industry directories, and trademark databases. Also search for similar furniture stores in your market area.' },
      { question: 'What words work well in furniture store names?', answer: 'Effective words include home terms (Home, Living, Nest, Haven), comfort words (Comfort, Cozy, Plush), style words (Design, Style, Décor), quality words (Fine, Premium, Elegant), and place words (Lounge, Estate, Studio).' },
      { question: 'Should my name work for both physical and online retail?', answer: 'Yes. Most furniture businesses today operate both channels. Choose a name that works on storefronts and websites, fits digital marketing, and sounds natural in both "visit our showroom" and "shop online" contexts.' },
      { question: 'How can my furniture store name appeal to different budgets?', answer: 'Words like "Elegant" or "Luxury" may deter budget shoppers, while "Discount" may deter quality seekers. Neutral names like "Home Haven" or "Living Style" appeal across budgets. Consider your target market\'s price sensitivity.' },
      { question: 'What mistakes should I avoid when naming my furniture store?', answer: 'Avoid: names that sound cheap when you sell quality, names too trendy that date quickly, difficult-to-spell words, names that limit furniture categories, names too similar to established chains, and anything that doesn\'t communicate home and style.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your furniture store is a pivotal step in creating an inviting brand that attracts customers looking to furnish their homes with quality, style, and comfort. Your business name will appear on storefronts, showrooms, delivery trucks, and marketing materials—it communicates the furniture experience you offer.',
      steps: [
        { title: 'Define Your Furniture Business Identity', description: 'Before generating names, clarify your furniture store\'s positioning. Consider what furniture styles you will primarily offer (modern, traditional, eclectic, rustic), who your ideal customer is (young professionals, families, designers, budget-conscious), what price point and quality level you target, what shopping experience you want to create, and whether you will specialize or offer comprehensive selection. Your answers determine whether you need a name that sounds luxurious and exclusive, friendly and accessible, trendy and modern, or classic and timeless.' },
        { title: 'Create Inviting, Comfortable Appeal', description: 'Furniture represents home comfort. Your name should evoke a welcoming atmosphere, suggest comfort and livability, create desire to browse and buy, sound pleasant and inviting, and connect to home and living. Words like Home, Comfort, Living, and Haven create immediate home associations.' },
        { title: 'Communicate Quality and Style', description: 'Furniture purchases require trust. Names should convey quality, suggest lasting value, communicate your style aesthetic, build confidence in craftsmanship, and appeal to design-conscious buyers. Balance warmth with professionalism to attract quality-seeking customers.' },
        { title: 'Reflect Your Design Aesthetic', description: 'If you have a distinctive style, consider incorporating it. For modern/contemporary, consider ModernManor or ContemporaryComfort. For traditional/classic, consider ClassicHome or HeritageHaven. For rustic/farmhouse, consider RusticRetreat or FarmhouseFurnishings. For luxury/designer, consider LuxeLiving or DesignerDomain. For budget/value, consider SmartHome or ValueVista. Balance style specificity with flexibility for inventory changes.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (.com preferred for credibility), social media (Pinterest and Instagram important for furniture), business registration (your state requirements), trademark search (furniture and home goods categories), and local competition (ensure no similar stores nearby). Furniture stores benefit from visual platforms, making social media availability important.' },
        { title: 'Test with Target Customers', description: 'Before finalizing, test with people representing your ideal customers. Ask if this name makes you want to shop for furniture, what style and quality you would expect, whether it feels trustworthy for a significant purchase, whether you would recommend this store to friends, and whether it is easy to remember and spell. Their feedback reveals whether your name creates the right home and quality impressions.' },
        { title: 'Consider Long-Term Brand Building', description: 'Choose a name that accommodates future expansion: adding furniture categories, opening additional locations, launching e-commerce, expanding into home décor and accessories, and building recognized regional brand. The ideal furniture store name is inviting, quality-focused, memorable, and positions your brand for growth while perfectly capturing the home comfort experience you provide.' },
      ],
    },
    businessNameIdeas: [
      { name: 'ElegantEstates', description: 'Elegant furniture fit for estate-worthy homes.' },
      { name: 'CozyCorner', description: 'Known for cozy, comfortable furniture pieces.' },
      { name: 'DesignDome', description: 'A dome showcasing beautiful furniture designs.' },
      { name: 'LavishLounge', description: 'Lavish furniture for luxurious lounging.' },
      { name: 'FurnishingFantasy', description: 'A fantasy collection of beautiful furnishings.' },
      { name: 'PlushPalace', description: 'A palace of plush, comfortable furniture.' },
      { name: 'ComfortCastle', description: 'Castle-like comfort in every furniture piece.' },
      { name: 'TrendyTerrace', description: 'Trendy furniture for modern terraces and spaces.' },
      { name: 'StylishSanctuary', description: 'A sanctuary of stylish furniture selections.' },
      { name: 'DecorDomain', description: 'A domain of decorative furniture and accessories.' },
      { name: 'LuxuriousLoft', description: 'Luxurious furniture for loft-style living.' },
      { name: 'VogueVilla', description: 'Vogue-worthy furniture for villa-style homes.' },
      { name: 'ChicChateau', description: 'Chic furniture with chateau elegance.' },
      { name: 'PristineParlor', description: 'Pristine furniture for perfect parlors.' },
      { name: 'RegalResidence', description: 'Regal furniture for residence refinement.' },
      { name: 'HarmonyHaven', description: 'Harmonious furniture creating haven-like homes.' },
      { name: 'OpulentOasis', description: 'An oasis of opulent furniture choices.' },
      { name: 'GracefulGrove', description: 'A grove of graceful, elegant furniture.' },
      { name: 'TranquilTerritory', description: 'Furniture creating tranquil living territories.' },
      { name: 'ElegantEmporium', description: 'An emporium of elegant home furnishings.' },
    ],
  },
  'game': {
    slug: 'game',
    name: 'Game Business Name Generator',
    title: 'Free AI Game Business Name Ideas Generator',
    description: 'Generate captivating, memorable names for game studios, gaming companies, and interactive entertainment.',
    metaDescription: 'Level up your game business with an AI-generated name. Create captivating, memorable names for game studios, gaming companies, and interactive entertainment. Quick, free, and tailored for you!',
    inputLabel: 'Describe your game business...',
    inputPlaceholder: 'e.g. An indie game studio developing story-driven RPGs with unique art styles',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Epic & Adventure', 'Tech & Digital', 'Fun & Playful', 'Professional & Studio'], default: 'Epic & Adventure', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the gaming and interactive entertainment industry. Your role is to generate captivating, memorable business names that convey excitement, creativity, and immersive experiences for game development studios, gaming companies, and interactive entertainment businesses.

GAME BUSINESS INDUSTRY CONTEXT:

The game business industry encompasses:
- Video game development studios
- Mobile game companies
- Board game and tabletop publishers
- Gaming cafes and lounges
- Esports organizations
- Game streaming and content creation
- VR/AR gaming companies
- Educational game developers
- Indie game studios
- Gaming merchandise and accessories

NAME CHARACTERISTICS FOR GAME BUSINESSES:

1. **Captivating and Memorable**
   - Names should capture attention instantly
   - Evoke excitement and adventure
   - Be memorable among gamers
   - Examples: Quest, Epic, Adventure, Pixel, Realm

2. **Reflects Game Genre**
   - Communicate your gaming focus
   - Whether action, strategy, casual, or immersive
   - Align with target gamer expectations
   - Create appropriate genre associations

3. **Unique and Brandable**
   - Stand out in crowded gaming market
   - Work as recognizable brand
   - Suitable for games, merchandise, and content
   - Build strong brand recognition

4. **Appeal to Gaming Culture**
   - Resonate with gaming community
   - Use vocabulary gamers appreciate
   - Sound cool and credible
   - Connect with gaming identity

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a game business

Generate names that are:
- 1-3 words maximum
- Captivating and cool
- Easy to spell and pronounce
- Credible in gaming culture
- Versatile across game genres`,
    useCases: [
      { title: 'Game Development Studio Launch', description: 'Game developers launching studios use the Game Business Name Generator to find names that capture the excitement and creativity of their games. Whether developing action, strategy, or casual games, the generator provides captivating names that resonate with gaming audiences.' },
      { title: 'Gaming Café or Entertainment Venue', description: 'Entrepreneurs opening gaming cafés or entertainment venues use the generator to create memorable names that attract gamers. The tool provides names that communicate the fun, social gaming experience customers can expect.' },
      { title: 'Indie Game Studio Branding', description: 'Independent game developers launching their own studios use the generator to develop distinctive brand names that stand out in the crowded indie gaming market. The tool helps identify names that build recognition and credibility with gaming audiences.' },
    ],
    faqs: [
      { question: 'What makes a good game business name?', answer: 'A good game business name should be captivating and memorable, reflective of your game genre or style, unique and brandable, and appealing to gaming culture. It should sound cool and credible within the gaming community.' },
      { question: 'Should my game studio name indicate what types of games I make?', answer: 'Genre hints can help attract the right audience, but many successful studios use evocative names without specific genre references. Consider whether you want to specialize or remain flexible for various game types.' },
      { question: 'How important is my game business name for building a fanbase?', answer: 'Very important. Gamers develop strong attachments to studios they trust. A memorable, cool-sounding name helps build brand recognition and loyalty. Your name will appear on game titles, merchandise, and community content.' },
      { question: 'What game business naming trends are popular?', answer: 'Current trends include fantasy vocabulary (Realm, Kingdom, Quest), tech terms (Pixel, Digital, Virtual), compound names (GameForge, PixelPerfect), and community-focused words (Guild, Collective, Studio). Unique, memorable names resonate best.' },
      { question: 'Should I use my own name in my game studio?', answer: 'Personal names are less common in gaming but can work for indie developers building personal brands. Studio names like "John\'s Games" are rare—creative, evocative names tend to be more effective in gaming culture.' },
      { question: 'How do I check if my game business name is available?', answer: 'Check Steam, app stores, gaming directories, social media (Twitch, Discord, Twitter), domain names, and trademark databases. Also search gaming news sites and review platforms for similar names.' },
      { question: 'What words work well in game business names?', answer: 'Effective words include gaming terms (Quest, Level, Pixel, Arcade), adventure words (Epic, Hero, Journey, Battle), tech words (Digital, Virtual, Cyber), fantasy words (Realm, Kingdom, Magic), and achievement words (Victory, Champion, Elite).' },
      { question: 'Should my name appeal to casual or hardcore gamers?', answer: 'Consider your target audience. Words like "Elite" or "Pro" appeal to hardcore gamers, while "Fun" or "Play" feel more casual. Match your name\'s tone to your primary audience.' },
      { question: 'How can my game business name work for merchandise?', answer: 'Choose names that look good on merchandise—t-shirts, posters, accessories. Short, visually distinctive names work best. Consider how your name looks as a logo and on products.' },
      { question: 'What mistakes should I avoid when naming my game business?', answer: 'Avoid: names too similar to established game companies, overly generic names that don\'t stand out, names that limit game genres, difficult-to-spell words, names that don\'t sound cool to gamers, and anything that lacks the excitement gaming audiences expect.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your game business is a crucial step in creating a brand that resonates with gaming audiences and stands out in the competitive interactive entertainment market. Your business name will appear on game titles, storefronts, social media, and merchandise—it\'s how gamers discover and remember your company.',
      steps: [
        { title: 'Define Your Gaming Business Identity', description: 'Before generating names, clarify your game business\'s positioning. Consider what types of games you will create or offer (action, strategy, casual, indie), who your target gamer audience is (hardcore, casual, mobile, console), what makes your gaming approach unique, what gaming platforms you target, and what\'s your studio\'s personality and culture. Your answers determine whether you need a name that sounds epic and dramatic, fun and casual, tech-forward and innovative, or artistic and indie.' },
        { title: 'Create Captivating, Memorable Appeal', description: 'Gaming is about excitement and engagement. Names should capture attention instantly, evoke the excitement of gaming, be memorable among gamers, sound cool and credible, and create desire to explore your games. Words like Quest, Epic, Pixel, and Realm create immediate gaming associations.' },
        { title: 'Connect with Gaming Culture', description: 'Gaming has its own culture and vocabulary. Use words gamers appreciate, sound authentic to gaming community, resonate with gaming identity, avoid corporate or generic sounds, and build credibility with players. Your name should feel like it belongs in the gaming world.' },
        { title: 'Reflect Your Gaming Focus', description: 'If you have a distinctive specialty, consider incorporating it. For action/adventure, consider EpicAdventures or HeroForge. For strategy, consider StrategyRealm or TacticalGames. For casual/mobile, consider PlayfulPixels or FunFactory. For indie/artistic, consider DreamworldStudios or ArtisticArcade. For VR/immersive, consider VirtualVentures or ImmersiveRealms. Balance specificity with room for expansion into other genres.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across gaming platforms (Steam, app stores, console stores), social media (Twitch, Discord, Twitter, YouTube), domain name (for your studio website), trademark search (gaming and entertainment categories), and similar studios (avoid confusion with existing game companies). Gaming businesses need strong presence across multiple platforms.' },
        { title: 'Test with Gamers', description: 'Before finalizing, test with people representing your target gamers. Ask if this name sounds like a cool game company, what types of games you would expect from them, whether you would follow this studio on social media, whether it is memorable after hearing once, and whether it makes you want to check out their games. Their feedback reveals whether your name has the necessary gaming appeal.' },
        { title: 'Consider Brand Building Across Gaming', description: 'Choose a name that accommodates future expansion: multiple game titles and franchises, merchandise and branded products, content creation and streaming, community building and events, and expansion into different gaming platforms. The ideal game business name is captivating, memorable, culturally credible, and positions your brand for success while perfectly capturing the exciting gaming experiences you create.' },
      ],
    },
    businessNameIdeas: [
      { name: 'FantasyFusion', description: 'Fusing fantasy elements into incredible gaming experiences.' },
      { name: 'PlayParadise', description: 'A paradise of play and gaming enjoyment.' },
      { name: 'InteractiveIsland', description: 'An island of interactive gaming experiences.' },
      { name: 'VirtualVenture', description: 'Virtual game ventures that transport players.' },
      { name: 'PixelPinnacle', description: 'At the pinnacle of pixelated gaming excellence.' },
      { name: 'StrategySanctuary', description: 'A sanctuary for strategy game enthusiasts.' },
      { name: 'AdventureArcade', description: 'An arcade of adventure gaming experiences.' },
      { name: 'GamingGalaxy', description: 'A galaxy of diverse gaming options.' },
      { name: 'FunFusion', description: 'Fusing fun into every gaming experience.' },
      { name: 'EpicElements', description: 'Games with epic elements and experiences.' },
      { name: 'DaringDynamics', description: 'Daring game dynamics that thrill players.' },
      { name: 'PixelPlayground', description: 'A playground of pixel-perfect gaming.' },
      { name: 'QuestQuadrant', description: 'A quadrant of quests and gaming adventures.' },
      { name: 'GameGrove', description: 'A grove growing with gaming experiences.' },
      { name: 'ThrillThreshold', description: 'Pushing the thrill threshold in gaming.' },
      { name: 'VirtualVista', description: 'A vista of virtual gaming experiences.' },
      { name: 'PowerPlay', description: 'Powerful play experiences for gamers.' },
      { name: 'FunFiesta', description: 'A fiesta of fun gaming moments.' },
      { name: 'AdventureArena', description: 'An arena of adventure gaming excellence.' },
      { name: 'EpicEmpire', description: 'An empire of epic gaming experiences.' },
    ],
  },
  'graphic-design': {
    slug: 'graphic-design',
    name: 'Graphic Design Business Name Generator',
    title: 'Free AI Graphic Design Business Name Ideas Generator',
    description: 'Generate creative, professional names for design studios, agencies, and freelancers.',
    metaDescription: 'Design your success with an attractive graphic design business name. Create creative, professional names for design studios, agencies, and freelancers. Our AI tool does it for free!',
    inputLabel: 'Describe your graphic design business...',
    inputPlaceholder: 'e.g. A boutique design studio specializing in brand identity and packaging design',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Creative & Artistic', 'Professional & Corporate', 'Modern & Minimal', 'Bold & Innovative'], default: 'Creative & Artistic', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the creative and design services industry. Your role is to generate creative, professional business names that convey artistic expertise, innovation, and visual excellence for graphic design studios, creative agencies, and design freelancers.

GRAPHIC DESIGN INDUSTRY CONTEXT:

The graphic design business industry encompasses:
- Graphic design studios and agencies
- Freelance graphic designers
- Brand identity specialists
- Web design agencies
- Print design services
- Packaging design studios
- Motion graphics companies
- Illustration services
- UI/UX design firms
- Creative consulting agencies

NAME CHARACTERISTICS FOR GRAPHIC DESIGN BUSINESSES:

1. **Creativity and Originality**
   - Names should showcase creative thinking
   - Suggest innovative, artistic approaches
   - Demonstrate design sensibility
   - Examples: Creative, Artistry, Design, Vision, Imagine

2. **Professional and Trustworthy**
   - Sound credible and reliable
   - Appropriate for business clients
   - Communicate expertise
   - Build confidence in capabilities

3. **Versatile and Timeless**
   - Accommodate business evolution
   - Avoid dating quickly
   - Work across design disciplines
   - Maintain relevance over time

4. **Visual and Aesthetic Appeal**
   - Names that evoke visual beauty
   - Suggest the design work you create
   - Communicate aesthetic sensibility
   - Connect to visual communication

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a graphic design business

Generate names that are:
- 1-3 words maximum
- Creative yet professional
- Easy to spell and pronounce
- Appropriate for business contexts
- Versatile across design services`,
    useCases: [
      { title: 'Graphic Design Studio Launch', description: 'Designers launching their own studios use the Graphic Design Business Name Generator to find names that communicate creativity and professionalism. The generator provides names that attract clients seeking quality design work while showcasing the studio\'s creative approach.' },
      { title: 'Freelance Designer Branding', description: 'Freelance graphic designers building their personal brands use the generator to create memorable business names that position them as creative professionals. The tool helps identify names that work across portfolios, business cards, and client presentations.' },
      { title: 'Creative Agency Development', description: 'Entrepreneurs building creative agencies use the generator to develop names that communicate both creativity and business capability. The tool provides names that appeal to corporate clients while maintaining artistic credibility.' },
    ],
    faqs: [
      { question: 'What makes a good graphic design business name?', answer: 'A good graphic design business name should be creative and original, showcasing your artistic thinking. It should also be professional and trustworthy, versatile and timeless, and have visual and aesthetic appeal—essentially embodying the qualities clients want in a designer.' },
      { question: 'Should my design business name include "design" or "creative"?', answer: 'Including design-related words immediately clarifies your business type, which helps with searchability and first impressions. However, creative abstract names can also work if they effectively communicate your artistic sensibility.' },
      { question: 'How important is my design business name for attracting clients?', answer: 'Very important. Your business name is often the first example of your creative judgment that clients see. A well-crafted name demonstrates the creativity and professionalism they can expect from your design work.' },
      { question: 'What graphic design business naming trends are popular?', answer: 'Current trends include compound creative words (PixelCraft, DesignLab), single evocative words (Apex, Nova, Ember), studio/lab terminology, and minimal, clean names that reflect design aesthetics. Timeless, professional names tend to age best.' },
      { question: 'Should I use my own name in my design business?', answer: 'Personal names work well for freelancers and designers building individual reputations. Names like "Jane Smith Design" can build personal brand recognition. However, studio names offer more flexibility for growth and team expansion.' },
      { question: 'How do I check if my design business name is available?', answer: 'Check domain names (.com and design-specific domains), social media handles (Behance, Dribbble, Instagram), business registrations, and trademark databases. Also search design directories and portfolio platforms.' },
      { question: 'What words work well in graphic design business names?', answer: 'Effective words include creative terms (Design, Create, Artistry, Craft), visual terms (Pixel, Vector, Palette, Hue), professional terms (Studio, Lab, Agency, Works), and quality terms (Premier, Elite, Master, Apex).' },
      { question: 'Should my name reflect my design specialty?', answer: 'If you specialize (web design, brand identity, packaging), reflecting it can attract specific clients. However, broader names offer flexibility as your services evolve. Balance specialization communication with growth potential.' },
      { question: 'How can my design business name demonstrate creativity?', answer: 'Creative names use unexpected combinations, clever wordplay, or evocative imagery. Avoid generic terms that could describe any business. Your name should hint at the creative thinking you bring to client projects.' },
      { question: 'What mistakes should I avoid when naming my design business?', answer: 'Avoid: generic names that don\'t showcase creativity, overly trendy terms that date quickly, names hard to spell or pronounce, names that limit service expansion, and names that feel too casual for business clients or too corporate for creative appeal.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your graphic design business is a pivotal step in creating a brand that attracts clients seeking creative excellence. Your business name will appear on portfolios, business cards, proposals, and client presentations—it\'s the first demonstration of your creative judgment.',
      steps: [
        { title: 'Define Your Design Business Identity', description: 'Before generating names, clarify your design business\'s positioning. Consider what design services you will primarily offer (brand, web, print, motion), who your ideal clients are (startups, corporations, agencies, individuals), what makes your design approach unique, what\'s your design aesthetic and philosophy, and whether you are building a solo practice or a scalable studio. Your answers determine whether you need a name that sounds artistic and boutique, corporate and professional, innovative and cutting-edge, or personal and approachable.' },
        { title: 'Balance Creativity with Professionalism', description: 'Design businesses need both qualities. Names should showcase creative thinking but also build client confidence, demonstrate design sensibility, remain appropriate for business contexts, and work across different client types. Avoid names so creative they seem unprofessional, or so corporate they seem uncreative.' },
        { title: 'Create Visual and Aesthetic Appeal', description: 'Your name should evoke design quality. Suggest visual beauty and aesthetics, sound good when spoken, look good in written form, work in your own branding, and connect to visual communication. Consider how your name will appear in your logo and portfolio.' },
        { title: 'Reflect Your Design Focus', description: 'If you have a specialty, consider incorporating it. For brand/identity, consider BrandForge or IdentityInk. For web/digital, consider PixelCraft or DigitalCanvas. For print/packaging, consider PrintPerfect or PackageDesignCo. For motion/animation, consider MotionMakers or AnimateStudio. For general, consider CreativeStudio or DesignWorks. Balance specificity with flexibility for service evolution.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (.com and design-specific domains like .design, .studio), portfolio platforms (Behance, Dribbble availability), social media (Instagram, Pinterest, LinkedIn), business registration (your state requirements), and trademark search (design and creative services categories). Designers need strong visual platform presence.' },
        { title: 'Test with Potential Clients', description: 'Before finalizing, test with people representing your target clients. Ask if this name sounds like a quality design studio, whether you would hire this company for design work, whether it feels creative and professional, whether it is memorable after hearing once, and what type of design work you would expect. Their feedback reveals whether your name creates the right creative and professional impressions.' },
        { title: 'Consider Brand Growth', description: 'Choose a name that accommodates future expansion: adding new design services, growing team and capabilities, expanding into related creative services, building recognized creative brand, and potential agency growth or partnership. The ideal graphic design business name is creative, professional, memorable, and positions your brand for growth while perfectly demonstrating the design excellence you provide.' },
      ],
    },
    businessNameIdeas: [
      { name: 'PixelPioneer', description: 'Pioneering innovation in graphic design.' },
      { name: 'DesignDreamscape', description: 'Where design dreams become reality.' },
      { name: 'CreativityCove', description: 'A cove where creative ideas flourish.' },
      { name: 'IllustrationIsland', description: 'A hub for illustration and design excellence.' },
      { name: 'ArtistryArch', description: 'An arch showcasing comprehensive design artistry.' },
      { name: 'VisionVoyage', description: 'A journey into creative design vision.' },
      { name: 'AestheticArk', description: 'A sanctuary for beautiful, aesthetic design.' },
      { name: 'PaletteParadise', description: 'Where colors meet exceptional design.' },
      { name: 'SketchSanctuary', description: 'A sanctuary for sketch and design lovers.' },
      { name: 'GraphicGrove', description: 'A grove thriving with graphic design excellence.' },
      { name: 'RenderReef', description: 'A rich reef of rendering and design.' },
      { name: 'VectorVault', description: 'A vault of vector design treasures.' },
      { name: 'ImaginationImpression', description: 'Converting imagination into design impressions.' },
      { name: 'FormatForge', description: 'Forging design formats with expertise.' },
      { name: 'CreativityCradle', description: 'A nurturing environment for design ideas.' },
      { name: 'HueHarbor', description: 'A harbor filled with colorful design concepts.' },
      { name: 'DesignDew', description: 'Fresh, morning-inspired design work.' },
      { name: 'VisionVista', description: 'A broad vista of design possibilities.' },
      { name: 'PixelParlor', description: 'A meeting place for design enthusiasts.' },
      { name: 'ArtisanApex', description: 'The apex of skilled, artisan design.' },
    ],
  },
  'hair': {
    slug: 'hair',
    name: 'Hair Business Name Generator',
    title: 'Free AI Hair Business Name Ideas Generator',
    description: 'Generate stylish, memorable names for salons, stylists, and hair product businesses.',
    metaDescription: 'Hair-raising business name? Not anymore! Our AI generator crafts unique, stylish names for salons, stylists, and hair product businesses. Free, creative, and memorable!',
    inputLabel: 'Describe your hair business...',
    inputPlaceholder: 'e.g. A luxury hair salon specializing in color treatments and bridal styling',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Glamorous & Luxe', 'Trendy & Modern', 'Natural & Organic', 'Classic & Elegant'], default: 'Glamorous & Luxe', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the beauty and hair care industry. Your role is to generate stylish, memorable business names that convey expertise, beauty, and transformation for hair salons, stylists, and hair product businesses.

HAIR BUSINESS INDUSTRY CONTEXT:

The hair business industry encompasses:
- Hair salons and styling studios
- Barbershops
- Hair product brands and lines
- Hair extension services
- Hair coloring specialists
- Natural and organic hair care
- Mobile hair stylists
- Hair education and training
- Hair accessory businesses
- Specialty hair services (bridal, ethnic hair)

NAME CHARACTERISTICS FOR HAIR BUSINESSES:

1. **Trendy and Chic**
   - Names should evoke modern style
   - Suggest fashionable, current approaches
   - Appeal to style-conscious clients
   - Examples: Chic, Vogue, Style, Glam, Luxe

2. **Memorable and Striking**
   - Stand out in competitive hair market
   - Easy to remember and recommend
   - Create strong first impressions
   - Catch attention effectively

3. **Reflects Hair Expertise**
   - Communicate your hair specialty
   - Whether cutting, coloring, styling, or products
   - Align with target client expectations
   - Build confidence in skills

4. **Beauty and Transformation**
   - Hair services transform clients
   - Names should suggest beauty enhancement
   - Evoke confidence and glamour
   - Connect to self-expression through hair

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a hair business

Generate names that are:
- 1-3 words maximum
- Stylish and striking
- Easy to spell and pronounce
- Professional yet creative
- Versatile across hair services`,
    useCases: [
      { title: 'Hair Salon Launch', description: 'Entrepreneurs opening hair salons use the Hair Business Name Generator to find names that communicate style, expertise, and the transformative experience clients can expect. Whether launching a boutique salon or full-service studio, the generator provides striking names that attract style-conscious clients.' },
      { title: 'Independent Stylist Branding', description: 'Independent hair stylists building their own client base use the generator to create memorable brand names that position them as skilled professionals. The tool helps identify names that work across business cards, social media, and salon suite signage.' },
      { title: 'Hair Product Line Development', description: 'Entrepreneurs creating hair care product lines use the generator to develop brand names that communicate quality and beauty results. The tool provides names suitable for packaging, retail, and beauty marketing campaigns.' },
    ],
    faqs: [
      { question: 'What makes a good hair business name?', answer: 'A good hair business name should be trendy and chic, memorable and striking, and reflective of your hair expertise. It should evoke beauty and transformation—the core of what hair services provide to clients.' },
      { question: 'Should my hair salon name include "salon" or "hair"?', answer: 'Including hair-related words can help with search visibility and immediate clarity. However, many successful salons use creative names without explicit hair references. Consider your target market and whether clarity or creativity is more important.' },
      { question: 'How important is my hair business name for attracting clients?', answer: 'Very important. Hair services are personal and style-focused. Your name creates expectations about the experience, style level, and expertise clients can expect. A stylish name attracts style-conscious clients.' },
      { question: 'What hair business naming trends are popular?', answer: 'Current trends include texture words (Glossy, Silk, Lustrous), hair-specific terms (Tress, Locks, Mane), glamour vocabulary (Glam, Luxe, Chic), and transformation words (Renew, Transform, Elevate). Short, memorable names perform well on social media.' },
      { question: 'Should I use my own name in my hair business?', answer: 'Personal names are common in the hair industry and build individual reputation recognition. "Salon by Sarah" or "Jennifer\'s Hair Studio" can create personal connection. However, non-personal names offer flexibility for sale or expansion.' },
      { question: 'How do I check if my hair business name is available?', answer: 'Check business registrations, domain names, social media handles (Instagram is essential for hair businesses), salon directories, and trademark databases. Also search for similar salon names in your area.' },
      { question: 'What words work well in hair business names?', answer: 'Effective words include hair terms (Locks, Tress, Strand, Mane), beauty words (Glamour, Radiant, Gorgeous), texture words (Silk, Gloss, Lustrous), style words (Chic, Vogue, Elegant), and transformation words (Transform, Renew, Perfect).' },
      { question: 'Should my name reflect my hair specialty?', answer: 'If you specialize (color, extensions, natural hair), reflecting it can attract your target market. However, broader names offer flexibility to add services. Balance specialty communication with growth potential.' },
      { question: 'How can my hair business name appeal to my target clients?', answer: 'Consider your ideal client\'s self-image. Luxury seekers respond to elegant names. Trendy clients like fashion-forward names. Natural hair clients appreciate authentic, empowering names. Match your name to your target client\'s identity.' },
      { question: 'What mistakes should I avoid when naming my hair business?', answer: 'Avoid: names that sound dated rather than stylish, difficult-to-spell words, names too similar to local competitors, names that limit service expansion, overly generic salon names, and anything that doesn\'t communicate style and expertise.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your hair business is a pivotal step in creating a stylish brand that attracts clients seeking hair transformation and beauty enhancement. Your business name will appear on salon signage, social media, business cards, and marketing materials—it communicates the style experience clients can expect.',
      steps: [
        { title: 'Define Your Hair Business Identity', description: 'Before generating names, clarify your hair business\'s positioning. Consider what hair services you will primarily offer (cutting, coloring, styling, specialty), who your ideal client is (fashion-forward, classic, natural hair, diverse), what makes your hair approach unique, what salon atmosphere you want to create, and what price point and style level you target. Your answers determine whether you need a name that sounds luxurious and exclusive, trendy and edgy, natural and organic, or classic and elegant.' },
        { title: 'Embody Style and Beauty', description: 'Hair businesses sell transformation and beauty. Names should evoke modern style, suggest the beauty enhancement you provide, sound fashionable and current, create desire for transformation, and connect to self-expression. Words like Glam, Luxe, Style, and Radiant create immediate beauty associations.' },
        { title: 'Create Memorable, Striking Appeal', description: 'In a competitive market, standing out matters. Names should be memorable and striking, easy to remember and recommend, create strong first impressions, work well for word-of-mouth referrals, and stand out from generic salon names. Test names for memorability—can people recall them after hearing once?' },
        { title: 'Reflect Your Hair Expertise', description: 'If you have a distinctive specialty, consider incorporating it. For color specialists, consider ColorCraft or ChromaStudio. For natural/organic, consider NaturalTress or OrganicGlow. For extensions, consider LuxeLength or ExtensionElegance. For curly/textured, consider CurlCove or TextureStudio. For bridal, consider BridalBeauty or WeddingTresses. Balance specialty indication with room for service expansion.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (for your website), social media (Instagram is essential for hair businesses), salon directories (Yelp, StyleSeat, etc.), business registration (your state requirements), and trademark search (beauty and salon categories). Hair businesses rely heavily on visual social media, making Instagram availability crucial.' },
        { title: 'Test with Target Clients', description: 'Before finalizing, test with people representing your ideal clients. Ask if this name sounds like a stylish salon, whether you would book an appointment based on this name, what price level you would expect, whether it is easy to remember and tell friends, and whether it feels like your style. Their feedback reveals whether your name creates the right style impressions.' },
        { title: 'Consider Brand Growth', description: 'Choose a name that accommodates future expansion: adding new hair services, opening additional locations, launching product lines, building education and training, and creating recognized beauty brand. The ideal hair business name is stylish, memorable, expertise-focused, and positions your brand for growth while perfectly capturing the beauty transformation experience you provide.' },
      ],
    },
    businessNameIdeas: [
      { name: 'ShearShine', description: 'Giving customers shiny, expertly sheared styles.' },
      { name: 'TressTreasure', description: 'Treating hair as the treasure it deserves to be.' },
      { name: 'LocksLuxury', description: 'Luxurious treatments for beautiful locks.' },
      { name: 'GlossyGrove', description: 'Known for delivering glossy, gorgeous hair.' },
      { name: 'StyleStrands', description: 'Styling strands in unique, appealing ways.' },
      { name: 'CurlCove', description: 'Specializing in beautiful curly hair styling.' },
      { name: 'SilkenSanctuary', description: 'A sanctuary for achieving silken, smooth hair.' },
      { name: 'RadiantRapunzels', description: 'Turning clients into radiant Rapunzels.' },
      { name: 'ManeMatrix', description: 'A matrix of comprehensive hair services.' },
      { name: 'VelvetVines', description: 'Velvet-smooth, beautiful hair styling.' },
      { name: 'PoshPlaits', description: 'Posh, elegant plaited hairstyles.' },
      { name: 'EleganceEcho', description: 'Echoing elegance in every hairstyle.' },
      { name: 'StrandsSphere', description: 'A sphere of beautiful hair styling.' },
      { name: 'LustrousLocks', description: 'Providing lustrous, shining locks.' },
      { name: 'GracefulGloss', description: 'Delivering glossy hair with grace.' },
      { name: 'FierceFringe', description: 'Fierce, fashionable fringe styles.' },
      { name: 'BoldBraids', description: 'Bold, beautiful braided styles.' },
      { name: 'StylishShimmer', description: 'Stylish hair with beautiful shimmer.' },
      { name: 'MagnificentManes', description: 'Turning hair into magnificent manes.' },
      { name: 'HeavenlyHighlights', description: 'Heavenly hair highlighting services.' },
    ],
  },
  'health': {
    slug: 'health',
    name: 'Health Business Name Generator',
    title: 'Free AI Health Business Name Ideas Generator',
    description: 'Generate credible, compassionate names for wellness centers, health practices, and healthcare services.',
    metaDescription: 'Energize your health business with a perfect name from our free AI generator. Create credible, compassionate names for wellness centers, health practices, and healthcare services. Try it now!',
    inputLabel: 'Describe your health business...',
    inputPlaceholder: 'e.g. A holistic wellness center offering integrative health services and nutrition counseling',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Name style', choices: ['Professional & Clinical', 'Holistic & Wellness', 'Caring & Compassionate', 'Modern & Innovative'], default: 'Professional & Clinical', type: 'select' },
      { name: 'variants', label: 'Generate', choices: ['5 names', '10 names', '15 names'], default: '10 names', type: 'select' },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in the health and wellness industry. Your role is to generate credible, compassionate business names that convey expertise, care, and commitment to wellbeing for health practices, wellness centers, and healthcare service businesses.

HEALTH BUSINESS INDUSTRY CONTEXT:

The health business industry encompasses:
- Medical practices and clinics
- Wellness centers and spas
- Mental health practices
- Physical therapy and rehabilitation
- Chiropractic and alternative medicine
- Nutritional counseling services
- Health coaching businesses
- Holistic health practitioners
- Senior health services
- Corporate wellness programs

NAME CHARACTERISTICS FOR HEALTH BUSINESSES:

1. **Credible and Compassionate**
   - Names should convey medical/health expertise
   - Suggest caring, patient-focused approach
   - Build trust for health decisions
   - Examples: Care, Health, Wellness, Vital, Healing

2. **Clear and Concise**
   - Easy to understand and remember
   - Communicate health focus immediately
   - Work in professional healthcare contexts
   - Avoid confusion about services

3. **Reflects Specializations**
   - Communicate your health focus
   - Whether physical, mental, holistic, or specialized
   - Align with target patient expectations
   - Build appropriate service expectations

4. **Trust and Professionalism**
   - Health decisions require trust
   - Names should sound reliable
   - Communicate expertise and qualifications
   - Appropriate for healthcare environments

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a health business

Generate names that are:
- 1-3 words maximum
- Credible and trustworthy
- Easy to spell and pronounce
- Appropriate for healthcare contexts
- Versatile across health services`,
    useCases: [
      { title: 'Wellness Center Launch', description: 'Entrepreneurs opening wellness centers use the Health Business Name Generator to find names that communicate comprehensive wellbeing services. Whether offering integrative health, fitness, or holistic services, the generator provides credible names that attract health-conscious clients.' },
      { title: 'Healthcare Practice Branding', description: 'Healthcare practitioners launching their own practices use the generator to create professional names that communicate expertise and compassion. The tool helps identify names appropriate for medical contexts while remaining warm and approachable.' },
      { title: 'Health Coaching Business Development', description: 'Health coaches and wellness consultants use the generator to develop names that communicate their commitment to client wellbeing. The tool provides names that work across coaching, consulting, and educational health services.' },
    ],
    faqs: [
      { question: 'What makes a good health business name?', answer: 'A good health business name should be credible and compassionate, clear and concise, and reflective of your health specializations. It must build trust—essential for businesses where people make important health decisions.' },
      { question: 'Should my health business name include "health" or "wellness"?', answer: 'Including health-related words immediately clarifies your business type and helps with search visibility. For healthcare practices, clarity is often more important than creativity due to the trust-sensitive nature of health services.' },
      { question: 'How important is my health business name for building patient trust?', answer: 'Extremely important. Health decisions require trust. Your name should communicate professionalism, expertise, and care. A credible name helps patients feel confident in choosing your services for their health needs.' },
      { question: 'What health business naming trends are popular?', answer: 'Current trends include wellness vocabulary (Wellness, Wellbeing, Thrive), vitality words (Vital, Life, Flourish), holistic terms (Whole, Balance, Harmony), and care-focused words (Nurture, Support, Heal). Professional, credible names perform best.' },
      { question: 'Should I use my own name in my health practice?', answer: 'Personal names are common in healthcare and build practitioner recognition. "Dr. Smith\'s Wellness" or "Johnson Health" create personal trust. However, for businesses planning expansion beyond one practitioner, broader names offer more flexibility.' },
      { question: 'How do I check if my health business name is available?', answer: 'Check business registrations, domain names, healthcare directories, professional licensing requirements, social media handles, and trademark databases. Also verify no conflicts with existing practices in your specialty area.' },
      { question: 'What words work well in health business names?', answer: 'Effective words include health terms (Health, Wellness, Healing, Care), vitality words (Vital, Life, Thrive, Flourish), care words (Compassion, Nurture, Support), professional terms (Center, Clinic, Partners), and positive outcomes (Optimal, Better, Renewed).' },
      { question: 'Should my name reflect my health specialty?', answer: 'If you specialize (mental health, physical therapy, nutrition), reflecting it can attract the right patients. However, broader names offer flexibility if you expand services. Balance specialty clarity with growth potential.' },
      { question: 'Are there regulatory considerations for health business names?', answer: 'Yes. Some healthcare professions have naming regulations. Check with your licensing board about requirements or restrictions. Avoid names that could mislead about qualifications or services.' },
      { question: 'What mistakes should I avoid when naming my health business?', answer: 'Avoid: names that sound unprofessional or untrustworthy, overly creative names that confuse patients, names that could mislead about services or qualifications, difficult-to-spell medical terms, and anything that doesn\'t communicate expertise and care.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your health business is a critical step in creating a trustworthy brand that helps people make confident decisions about their wellbeing. Your business name will appear on signage, referral communications, and patient materials—it fundamentally affects how people perceive your healthcare services.',
      steps: [
        { title: 'Define Your Health Business Identity', description: 'Before generating names, clarify your health business\'s positioning. Consider what health services you will offer (medical, wellness, mental health, specialty), who your ideal patients/clients are (demographics, health needs, preferences), what makes your health approach unique, what atmosphere you want to create, and what level of clinical vs. wellness focus you have. Your answers determine whether you need a name that sounds clinical and professional, warm and holistic, specialized and expert, or accessible and community-focused.' },
        { title: 'Build Trust and Credibility', description: 'Health decisions require confidence. Names should sound credible and expert, communicate qualifications appropriately, build confidence in health capabilities, suggest reliable, professional services, and be appropriate for healthcare contexts. Balance warmth with professionalism—people want caring experts.' },
        { title: 'Communicate Compassion and Care', description: 'Health services are personal. Names should suggest compassionate care, communicate patient-focused approach, feel welcoming and supportive, suggest the healing relationship, and build emotional comfort alongside expertise. Words like Care, Wellness, and Nurture add warmth to credible names.' },
        { title: 'Reflect Your Health Specialization', description: 'If you have a specific focus, consider incorporating it. For mental health, consider MindWellness or ClearMindCare. For physical therapy, consider MoveWell or RecoveryRoad. For holistic, consider WholeHealth or IntegrativeWellness. For nutrition, consider NourishHealth or VitalNutrition. For general wellness, consider WellnessWorks or ThriveHealth. Balance specialty clarity with potential service expansion.' },
        { title: 'Verify Comprehensive Availability', description: 'Check availability across domain name (for your practice website), healthcare directories (Healthgrades, Zocdoc, etc.), professional licensing (any naming requirements), business registration (your state requirements), and trademark search (healthcare categories). Healthcare businesses need professional online presence and directory listings.' },
        { title: 'Test with Potential Patients', description: 'Before finalizing, test with people representing your target patients. Ask if this name sounds like a trustworthy health provider, whether you would feel confident in this practice\'s expertise, whether it feels caring and supportive, whether it is easy to remember and recommend, and what health services you would expect. Their feedback reveals whether your name creates the right trust and care impressions.' },
        { title: 'Consider Professional Growth', description: 'Choose a name that accommodates future expansion: adding new health services, growing practitioner team, opening additional locations, expanding into related wellness services, and building recognized health brand. The ideal health business name is credible, compassionate, clear, and positions your practice for growth while perfectly capturing the caring, expert health services you provide.' },
      ],
    },
    businessNameIdeas: [
      { name: 'WellnessWonder', description: 'A health business bringing wonders in wellness.' },
      { name: 'VitalityVista', description: 'Offering a broad vista of vitality services.' },
      { name: 'HealthHorizons', description: 'Broadening health horizons for every patient.' },
      { name: 'FitnessFountain', description: 'A fountain of fitness and health solutions.' },
      { name: 'VitalVoyage', description: 'Taking patients on a voyage to vitality.' },
      { name: 'WellnessWaves', description: 'Waves of wellness services for complete health.' },
      { name: 'HealthHaven', description: 'A haven for comprehensive health solutions.' },
      { name: 'FitnessFirmament', description: 'A firmament of fitness and health services.' },
      { name: 'VitalValley', description: 'A valley of vitality and wellness.' },
      { name: 'WellnessWellspring', description: 'A wellspring of wellness services.' },
      { name: 'ThriveTherapy', description: 'Therapy services helping patients thrive.' },
      { name: 'BalanceBase', description: 'A foundation for balanced health and wellness.' },
      { name: 'HealingHarbor', description: 'A harbor for healing and health restoration.' },
      { name: 'NourishNest', description: 'A nest for nourishing health practices.' },
      { name: 'RenewalRidge', description: 'Health services focused on renewal and recovery.' },
      { name: 'VibrantVitals', description: 'Promoting vibrant vital health.' },
      { name: 'WholeWellness', description: 'Whole-person wellness services.' },
      { name: 'CareCompass', description: 'Guiding patients toward better health.' },
      { name: 'PeakHealth', description: 'Helping patients reach peak health.' },
      { name: 'FlourishFoundation', description: 'A foundation for flourishing health.' },
    ],
  },
  'ice-cream': {
    slug: 'ice-cream',
    name: 'Ice Cream Business Name Generator',
    title: 'Free AI Ice Cream Business Name Ideas Generator',
    description: 'Generate sweet, memorable names for ice cream shops, gelato parlors, and frozen dessert businesses.',
    metaDescription: 'Scoop up the perfect name for your ice cream shop with our free AI generator. Create sweet, memorable names that customers will crave!',
    inputLabel: 'Describe your ice cream business...',
    inputPlaceholder: 'e.g. An artisan gelato shop offering unique flavors in a beachside location',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Sweet & Playful', 'Premium & Artisan', 'Fun & Family-Friendly', 'Modern & Trendy'],
        default: 'Sweet & Playful',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in ice cream shops, frozen dessert businesses, and gelato parlors. Your role is to generate sweet, irresistible business names that evoke the delightful, refreshing, and indulgent experience of ice cream.

ICE CREAM BUSINESS CONTEXT:

The ice cream industry encompasses:
- Ice cream shops and parlors
- Gelato boutiques
- Frozen yogurt stores
- Soft serve establishments
- Artisan ice cream makers
- Ice cream trucks and mobile vendors
- Popsicle and frozen treat businesses
- Premium and gourmet ice cream brands

NAME CHARACTERISTICS FOR ICE CREAM BUSINESSES:

1. **Sweet and Irresistible**
   - Names should evoke delicious, tempting treats
   - Suggest refreshing coolness and indulgence
   - Create mouth-watering anticipation
   - Examples: Scoop, Swirl, Cream, Frost, Chill

2. **Memorable and Fun**
   - Appeals to all ages, especially families
   - Creates sense of joy and celebration
   - Easy to remember and share
   - Examples: Playful wordplay, alliteration, rhymes

3. **Reflects Frozen Treat Specialty**
   - Communicates specific offerings (gelato, soft serve, artisan)
   - Appeals to target customer base
   - Suggests quality and freshness
   - Examples: Artisan, Homemade, Premium, Crafted

4. **Evokes Cold and Refreshing Imagery**
   - Uses temperature-related words
   - Suggests relief from heat
   - Creates sensory experience
   - Examples: Frozen, Frosty, Cool, Chill, Icy

NAMING PATTERNS TO USE:

- Alliteration: "Scoop Shop," "Creamy Corner"
- Compound words: "Creamery," "Frostworks"
- Sensory words: "Velvet," "Smooth," "Rich"
- Action words: "Scoop," "Swirl," "Dip"
- Place references: "Cove," "Corner," "Parlor"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name is unique and not a well-known existing brand
4. Consider domain name availability potential
5. Ensure appropriate for family-friendly business`,
    useCases: [
      { title: 'Ice Cream Shop Launch', description: 'Entrepreneurs opening new ice cream parlors use the generator to find names that immediately communicate delicious frozen treats and create anticipation. A sweet, memorable name helps attract families and dessert lovers while establishing a fun, welcoming brand identity.' },
      { title: 'Artisan Gelato Branding', description: 'Gelato makers and premium ice cream artisans use the generator to create names suggesting craftsmanship and quality. The right name positions their business as a destination for discerning customers seeking authentic, handcrafted frozen desserts rather than mass-produced options.' },
      { title: 'Mobile Ice Cream Vendor Identity', description: 'Ice cream truck operators and mobile vendors use the generator to find catchy, memorable names that customers will recall when they hear the familiar jingle. A distinctive name helps build recognition across different neighborhoods and events.' },
    ],
    faqs: [
      { question: 'What makes a good ice cream business name?', answer: 'A good ice cream business name should be sweet and irresistible, memorable and fun, and reflective of your unique ice cream flavors or style. It should evoke the delightful experience of enjoying frozen treats.' },
      { question: 'Should I include "ice cream" in my business name?', answer: 'Not necessarily. While it provides clarity, creative names like "Scoop Dreams" or "Frost & Co." can be equally effective. Consider whether you want explicit description or evocative branding.' },
      { question: 'How important is a fun name for an ice cream shop?', answer: 'Very important. Ice cream is associated with joy, celebration, and treats. A playful, fun name sets the right mood and attracts customers seeking a delightful experience, especially families with children.' },
      { question: 'What words work well for ice cream business names?', answer: 'Words like Scoop, Swirl, Frost, Cream, Chill, Sweet, Dreamy, and Delight work well. Temperature words (frozen, cool, icy) and texture words (velvet, smooth, creamy) also resonate.' },
      { question: 'Should my ice cream shop name reflect my specialty?', answer: 'If you specialize in gelato, soft serve, or artisan flavors, incorporating hints of your specialty helps attract the right customers. "Gelato Grove" or "Artisan Freeze" communicates your focus clearly.' },
      { question: 'How do I make my ice cream business name memorable?', answer: 'Use alliteration (Scoop Shop), rhymes (Freeze Please), or playful wordplay. Keep it short, easy to pronounce, and create pleasant associations with cold, refreshing treats.' },
      { question: 'Can I use puns in my ice cream business name?', answer: 'Absolutely! Ice cream puns are beloved by customers. Names like "What\'s the Scoop" or "Sundae Best" add personality and make your brand memorable and shareable.' },
      { question: 'Should I consider seasonal appeal in my name?', answer: 'Consider how your name sounds year-round. While "Summer Scoops" works great in warm months, a name like "Sweet Escape" maintains appeal across all seasons.' },
      { question: 'How do I check if my ice cream business name is available?', answer: 'Search for existing businesses with the same name, check domain availability, verify social media handles, and conduct a trademark search to ensure your chosen name is legally available.' },
      { question: 'What ice cream business naming mistakes should I avoid?', answer: 'Avoid names that are too generic, difficult to spell, or similar to established brands. Also avoid names that limit future expansion (e.g., "Vanilla Only") or inappropriate for families.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your ice cream business is an exciting step in creating a brand that brings joy to customers. Your business name will appear on signage, cups, merchandise, and social media—it needs to capture the sweet, fun essence of the frozen treat experience you provide.',
      steps: [
        { title: 'Define Your Ice Cream Style', description: 'Consider what makes your ice cream unique. Are you offering artisan gelato, classic American flavors, or innovative creations? Your name should hint at your specialty and the experience customers can expect.' },
        { title: 'Know Your Target Audience', description: 'Determine whether you\'re targeting families, young adults, or premium dessert seekers. A family-focused shop might use playful names, while a gourmet parlor could opt for sophisticated elegance.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to ice cream: Scoop, Swirl, Cream, Frost, Sweet, Cool, Dreamy. Also consider emotions you want to evoke: joy, nostalgia, indulgence, refreshment.' },
        { title: 'Create Name Combinations', description: 'Mix your keywords with naming patterns. Try alliteration (Creamy Corner), compound words (Frostworks), or descriptive phrases (The Daily Scoop). Generate multiple options.' },
        { title: 'Test for Memorability', description: 'Say names aloud. Are they easy to pronounce? Do they stick in your mind? Ask friends and family to recall names after hearing them once to test memorability.' },
        { title: 'Check Availability', description: 'Verify your top choices for domain names, social media handles, and trademark conflicts. A perfect name loses value if you can\'t own it across all platforms.' },
        { title: 'Visualize the Brand', description: 'Imagine your chosen name on signage, packaging, and uniforms. Does it look appealing? Does it suggest the colorful, fun nature of ice cream? Choose a name that translates well visually.' },
      ],
    },
    businessNameIdeas: [
      { name: 'ScoopSerenity', description: 'An ice cream business offering a serene scoop experience and peaceful enjoyment.' },
      { name: 'CreamyCreations', description: 'Implies a business known for its creative, creamy ice cream innovations.' },
      { name: 'DelightfulDrips', description: 'Suggests delicious drips of ice cream that bring pure delight.' },
      { name: 'FrozenFantasy', description: 'An ice cream business offering a fantasy world of frozen treats.' },
      { name: 'MeltingMoments', description: 'Business known for ice cream that creates memorable, melting moments.' },
      { name: 'PopsicleParadise', description: 'A paradise destination for popsicle and frozen treat lovers.' },
      { name: 'TastyTwirls', description: 'Implies a business known for its delicious twirled ice cream.' },
      { name: 'CoolCone', description: 'Suggests an ice cream business offering cool, refreshing cone treats.' },
      { name: 'CreamyCraze', description: 'A business known for craze-worthy, irresistibly creamy ice cream.' },
      { name: 'LushLicks', description: 'Suggests an ice cream business known for lush, indulgent licks.' },
      { name: 'FrostyFeast', description: 'Implies a business offering frosty ice cream feasts and celebrations.' },
      { name: 'GelatoGala', description: 'An ice cream business offering a gala of authentic gelato flavors.' },
      { name: 'SwirlSanctuary', description: 'A sanctuary destination for beautifully swirled frozen treats.' },
      { name: 'ChillCharmer', description: 'Business known for charming frozen desserts that chill and delight.' },
      { name: 'VelvetVanilla', description: 'Suggests smooth, velvety ice cream with vanilla sophistication.' },
      { name: 'SundaeSpectacle', description: 'An ice cream business creating spectacular sundae experiences.' },
      { name: 'ArcticArtisan', description: 'Positions as artisan ice cream crafted with arctic freshness.' },
      { name: 'DreamyDesserts', description: 'A dreamy destination for ice cream and frozen dessert lovers.' },
      { name: 'ScoopSociety', description: 'Creates exclusive community of ice cream enthusiasts.' },
      { name: 'BlissfulBites', description: 'Suggests blissful, bite-sized frozen treat experiences.' },
    ],
  },
  'interior-design': {
    slug: 'interior-design',
    name: 'Interior Design Business Name Generator',
    title: 'Free AI Interior Design Business Name Ideas Generator',
    description: 'Generate stylish, elegant names for interior design firms, home décor businesses, and space planning studios.',
    metaDescription: 'Create stunning interior design business names effortlessly with our AI tool. No cost, no hassle, just creativity!',
    inputLabel: 'Describe your interior design business...',
    inputPlaceholder: 'e.g. A luxury residential interior design firm specializing in modern minimalist aesthetics',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Elegant & Sophisticated', 'Modern & Minimal', 'Classic & Timeless', 'Creative & Bold'],
        default: 'Elegant & Sophisticated',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in interior design firms, home décor businesses, and space planning studios. Your role is to generate stylish, elegant business names that convey creativity, sophistication, and transformative design expertise.

INTERIOR DESIGN BUSINESS CONTEXT:

The interior design industry encompasses:
- Residential interior design firms
- Commercial interior design studios
- Home staging businesses
- Space planning consultancies
- Interior decorating services
- Furniture and décor curation
- Sustainable and eco-friendly design
- Luxury interior design boutiques

NAME CHARACTERISTICS FOR INTERIOR DESIGN BUSINESSES:

1. **Stylish and Elegant**
   - Names should convey sophistication and refined taste
   - Suggest artistic vision and creative excellence
   - Appeal to design-conscious clients
   - Examples: Luxe, Refined, Atelier, Curated

2. **Memorable and Visionary**
   - Creates lasting impression of design expertise
   - Suggests transformative capability
   - Inspires confidence in design decisions
   - Examples: Vision, Inspire, Transform, Elevate

3. **Reflects Design Approach**
   - Communicates specific design philosophy
   - Appeals to target clientele (modern, classic, eclectic)
   - Suggests unique perspective
   - Examples: Modern, Vintage, Minimalist, Bold

4. **Professional and Trustworthy**
   - Conveys expertise and reliability
   - Suggests attention to detail
   - Builds client confidence
   - Examples: Studio, Design Co., Interiors, Collective

NAMING PATTERNS TO USE:

- Compound words: "Designscapes," "Interspaces"
- Elegant suffixes: "Atelier," "Studio," "Co."
- Visual words: "Canvas," "Palette," "Spectrum"
- Spatial words: "Space," "Room," "Haven"
- Transformation words: "Reimagine," "Transform," "Elevate"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name conveys design sophistication
4. Consider domain name availability potential
5. Ensure appropriate for professional B2C/B2B services`,
    useCases: [
      { title: 'Interior Design Firm Launch', description: 'New interior designers and decorators use the generator to find names that immediately communicate style, sophistication, and design expertise. A professional name helps establish credibility and attract clients seeking transformative home and office designs.' },
      { title: 'Home Staging Business Branding', description: 'Home stagers use the generator to create names suggesting their ability to transform spaces for real estate sales. The right name positions their services as essential for sellers wanting to maximize property appeal and selling price.' },
      { title: 'Specialty Design Studio Identity', description: 'Designers specializing in sustainable, minimalist, or luxury interiors use the generator to find names reflecting their unique approach. A distinctive name attracts clients who resonate with specific design philosophies and aesthetics.' },
    ],
    faqs: [
      { question: 'What makes a good interior design business name?', answer: 'A good interior design brand name should be stylish and elegant, memorable and visionary, and reflective of your design approach. It should convey the sophistication and transformative capability you bring to spaces.' },
      { question: 'Should I include "interior design" in my business name?', answer: 'It provides clarity but isn\'t required. Names like "Atelier Chic" or "Space & Style" can work well. Consider whether explicit description or evocative branding better suits your positioning.' },
      { question: 'How important is elegance in an interior design name?', answer: 'Very important. Your name is the first impression of your design taste. An elegant, sophisticated name suggests you\'ll bring the same refinement to client projects.' },
      { question: 'What words work well for interior design business names?', answer: 'Words like Design, Studio, Interiors, Space, Atelier, Curated, Luxe, Haven, and Refined work well. Visual words (Canvas, Palette) and transformation words (Elevate, Transform) also resonate.' },
      { question: 'Should my name reflect my design specialty?', answer: 'If you specialize in modern, vintage, or sustainable design, subtle hints help attract ideal clients. "Modern Nest Design" or "EcoSpace Interiors" communicates your focus.' },
      { question: 'How do I make my interior design name memorable?', answer: 'Use evocative imagery, sophisticated vocabulary, and pleasant sounds. Keep it concise (2-3 words), avoid generic terms, and ensure it\'s easy to spell and pronounce.' },
      { question: 'Can I use my own name in my interior design business?', answer: 'Personal names work well for boutique firms where your individual reputation and style are the brand. "Sarah Mills Interiors" creates intimate, personal connection with clients.' },
      { question: 'Should I consider future expansion in my name?', answer: 'Choose a name flexible enough for growth. "Residential Design Studio" limits you, while "Inspired Interiors" allows expansion into commercial work without rebranding.' },
      { question: 'How do I check if my interior design business name is available?', answer: 'Search for existing design firms, check domain availability and social media handles, and conduct a trademark search. Also verify with your state\'s business registry.' },
      { question: 'What interior design naming mistakes should I avoid?', answer: 'Avoid names that are too trendy (may date quickly), too generic, or difficult to spell. Also avoid names suggesting limitations you may want to transcend.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your interior design business is essential in creating a brand that attracts clients seeking beautiful, transformed spaces. Your business name will appear on portfolios, proposals, and marketing materials—it needs to convey the sophistication and creative vision you bring to every project.',
      steps: [
        { title: 'Define Your Design Philosophy', description: 'Consider what makes your approach unique. Are you modern minimalist, classic traditional, or eclectic and bold? Your name should hint at your aesthetic and design values.' },
        { title: 'Identify Your Target Clientele', description: 'Determine whether you\'re targeting luxury homeowners, young professionals, commercial clients, or eco-conscious consumers. Match your name\'s sophistication level to your audience.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to design: Space, Style, Décor, Haven, Nest, Canvas. Include adjectives: Elegant, Modern, Refined, Bold, Serene. Add action words: Transform, Inspire, Elevate.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try elegant structures (Design Atelier), compound concepts (SpaceStyle), or descriptive phrases (The Refined Room). Generate multiple options.' },
        { title: 'Test for Sophistication', description: 'Evaluate each name for its design appeal. Does it sound like a name clients would trust with their spaces? Would it look impressive on a portfolio or business card?' },
        { title: 'Check Availability', description: 'Verify your top choices for domain names, social media handles, and trademark conflicts. In the design industry, a consistent online presence is essential for attracting clients.' },
        { title: 'Consider Visual Impact', description: 'Imagine your chosen name on signage, business cards, and portfolio covers. Does it look elegant and professional? Choose a name that enhances your visual brand identity.' },
      ],
    },
    businessNameIdeas: [
      { name: 'DecorDream', description: 'An interior design business that brings décor dreams to life.' },
      { name: 'StyleSanctuary', description: 'Implies a business focused on creating stylish sanctuaries through design.' },
      { name: 'ElegantEssence', description: 'Suggests capturing the elegant essence of refined interior spaces.' },
      { name: 'SpaceSerenity', description: 'A design business creating serene, harmonious living spaces.' },
      { name: 'ModernMuse', description: 'Contemporary inspiration for the design-conscious homeowner.' },
      { name: 'VisionVault', description: 'Implies a treasure trove of visionary design ideas.' },
      { name: 'AtelierChic', description: 'French sophistication suggesting artistic design workshop.' },
      { name: 'HarmonyHaven', description: 'Creates harmonious, haven-like interior environments.' },
      { name: 'DesignDynasty', description: 'Suggests lasting, dynasty-quality interior design legacy.' },
      { name: 'CuratedCanvas', description: 'Positions spaces as carefully curated artistic canvases.' },
      { name: 'NestNova', description: 'Fresh, innovative approach to creating beautiful home nests.' },
      { name: 'RefinedRooms', description: 'Business known for creating refined, polished room designs.' },
      { name: 'SpaceSpectrum', description: 'Full spectrum of spatial design possibilities and styles.' },
      { name: 'LuxeLiving', description: 'Luxury living spaces crafted with premium design sensibility.' },
      { name: 'InspirationInteriors', description: 'Design firm that creates inspired, inspiring interior spaces.' },
      { name: 'TranquilTransform', description: 'Transforming spaces into tranquil, peaceful environments.' },
      { name: 'UrbanElegance', description: 'City sophistication meets elegant interior design.' },
      { name: 'DesignDwell', description: 'Creating beautifully designed spaces for dwelling and living.' },
      { name: 'ChicSpaces', description: 'Business known for creating chic, fashionable interiors.' },
      { name: 'VogueVista', description: 'Fashionable, visionary approach to interior design.' },
    ],
  },
  'it': {
    slug: 'it',
    name: 'IT Business Name Generator',
    title: 'Free AI IT Business Name Ideas Generator',
    description: 'Generate tech-savvy, professional names for IT companies, technology services, and digital solutions businesses.',
    metaDescription: 'Generate tech-savvy IT business names with our free AI tool. Create professional names that convey innovation and expertise!',
    inputLabel: 'Describe your IT business...',
    inputPlaceholder: 'e.g. A managed IT services company providing cybersecurity and cloud solutions for small businesses',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Professional & Trustworthy', 'Modern & Innovative', 'Technical & Expert', 'Dynamic & Growth-Focused'],
        default: 'Professional & Trustworthy',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in IT companies, technology services, and digital solutions businesses. Your role is to generate tech-savvy, professional business names that convey innovation, expertise, and cutting-edge technological capability.

IT BUSINESS CONTEXT:

The IT industry encompasses:
- IT consulting and services
- Managed IT services (MSPs)
- Software development companies
- Cloud computing services
- Cybersecurity firms
- Network infrastructure services
- Technical support and help desk
- Systems integration

NAME CHARACTERISTICS FOR IT BUSINESSES:

1. **Tech-Savvy and Cutting-Edge**
   - Names should convey technological expertise
   - Suggest innovation and modern solutions
   - Appeal to businesses seeking advanced technology
   - Examples: Digital, Cyber, Tech, Network, Systems

2. **Professional and Trustworthy**
   - Builds confidence in technical capabilities
   - Suggests reliability and security
   - Appeals to enterprise and SMB clients
   - Examples: Solutions, Services, Partners, Group

3. **Memorable and Clear**
   - Easy to remember and communicate
   - Clearly conveys IT focus
   - Straightforward without being generic
   - Examples: Concise, precise terminology

4. **Innovation-Focused**
   - Suggests forward-thinking approach
   - Conveys continuous improvement
   - Appeals to growth-oriented businesses
   - Examples: Innovation, Next, Future, Advanced

NAMING PATTERNS TO USE:

- Tech prefixes: "Tech-," "Cyber-," "Net-"
- Digital suffixes: "Systems," "Solutions," "Labs"
- Compound words: "DataDome," "TechTerrace"
- Action words: "Connect," "Integrate," "Secure"
- Trust words: "Trusted," "Reliable," "Premier"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name conveys IT professionalism
4. Consider domain name availability potential
5. Ensure appropriate for B2B technology services`,
    useCases: [
      { title: 'IT Services Company Launch', description: 'New IT service providers and consultants use the generator to find names that immediately communicate technical expertise and reliability. A professional name helps establish credibility with businesses seeking trusted technology partners.' },
      { title: 'Managed Services Provider Branding', description: 'MSPs use the generator to create names conveying comprehensive, proactive IT management. The right name positions their services as essential for businesses wanting seamless, worry-free technology operations.' },
      { title: 'Specialized IT Firm Identity', description: 'IT companies specializing in cybersecurity, cloud services, or specific industries use the generator to find names reflecting their expertise. A distinctive name attracts clients seeking specialized technical solutions.' },
    ],
    faqs: [
      { question: 'What makes a good IT business name?', answer: 'A good IT brand name should be tech-savvy and cutting-edge, professional and trustworthy, and memorable and clear. It should convey the innovation and effectiveness of your services.' },
      { question: 'Should I include "IT" or "Tech" in my business name?', answer: 'It provides immediate clarity but isn\'t required. Names like "DataDome" or "SynergySystems" communicate technology focus without explicit labels. Consider your target audience\'s expectations.' },
      { question: 'How important is professionalism in an IT business name?', answer: 'Extremely important. Businesses entrust IT providers with critical systems and data. A professional name builds confidence and suggests the reliability clients need from technology partners.' },
      { question: 'What words work well for IT business names?', answer: 'Words like Tech, Data, Systems, Solutions, Network, Digital, Cyber, and Cloud work well. Action words (Connect, Integrate, Optimize) and trust words (Secure, Reliable) also resonate.' },
      { question: 'Should my IT business name reflect my specialty?', answer: 'If you specialize in cybersecurity, cloud services, or specific industries, incorporating hints helps attract ideal clients. "SecureNet Solutions" or "CloudFirst IT" communicates your focus.' },
      { question: 'How do I make my IT business name memorable?', answer: 'Use tech-related wordplay, create compound words, or combine familiar terms in fresh ways. Keep it concise, easy to spell, and avoid overly technical jargon that confuses prospects.' },
      { question: 'Should I use acronyms in my IT business name?', answer: 'Acronyms can work but ensure they\'re memorable and don\'t spell unintended words. Original names like "TechTerrace" often outperform generic acronyms in brand recognition.' },
      { question: 'How do I check if my IT business name is available?', answer: 'Search for existing IT companies, check domain availability (especially .com), verify social media handles, and conduct a trademark search. Also check industry directories.' },
      { question: 'What IT business naming mistakes should I avoid?', answer: 'Avoid names that sound like existing tech giants, use excessive jargon, or are too generic (like "Computer Services Inc."). Also avoid names that limit future service expansion.' },
      { question: 'Should I consider global appeal in my IT name?', answer: 'If serving international clients, ensure your name translates well across languages and cultures. Avoid terms with unintended meanings in other languages.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your IT business is a critical step in establishing credibility with clients who will trust you with their technology infrastructure. Your business name will appear on proposals, contracts, and marketing materials—it needs to convey technical expertise and reliability.',
      steps: [
        { title: 'Define Your IT Specialization', description: 'Consider your core services. Are you focused on cybersecurity, cloud migration, managed services, or general IT support? Your name should hint at your expertise without being too narrow.' },
        { title: 'Identify Your Target Market', description: 'Determine whether you\'re targeting enterprises, SMBs, specific industries, or general businesses. Match your name\'s tone to your audience—enterprise names may be more formal.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to IT: Tech, Data, Network, Systems, Digital, Cyber, Cloud. Include action words: Connect, Solve, Secure, Optimize. Add trust words: Reliable, Premier, Trusted.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try tech compounds (DataDome), service identifiers (NetworkNexus), or solution-focused names (TechSolve). Generate multiple options.' },
        { title: 'Test for Professionalism', description: 'Evaluate each name for business appeal. Does it sound like a company enterprise clients would trust? Would it inspire confidence on proposals and contracts?' },
        { title: 'Check Availability', description: 'Verify your top choices for domain names (prioritize .com), social media handles, and trademark conflicts. In IT, a strong online presence is essential for credibility.' },
        { title: 'Consider Technical Perception', description: 'Imagine your chosen name in client presentations and on business cards. Does it convey technical competence? Choose a name that positions you as experts in your field.' },
      ],
    },
    businessNameIdeas: [
      { name: 'DataDome', description: 'A business that focuses on providing data-related IT services.' },
      { name: 'TechTerrace', description: 'Implies a place where various tech solutions can be found.' },
      { name: 'BinaryBounty', description: 'Suggests a wealth of binary, or digital, solutions.' },
      { name: 'FluxFountain', description: 'A place where tech flux is harnessed for business solutions.' },
      { name: 'SynergySystems', description: 'A business where IT systems work together seamlessly.' },
      { name: 'KernelKingdom', description: 'Masters the kernel, the core of computing systems.' },
      { name: 'DigitalDexterity', description: 'A business adept in all aspects of the digital world.' },
      { name: 'NetworkNexus', description: 'Positioned at the intersection of various network solutions.' },
      { name: 'ByteBlueprint', description: 'Creates strategic blueprints for digital transformation.' },
      { name: 'CircuitCove', description: 'A safe harbor for all circuit and hardware solutions.' },
      { name: 'CodeCatalyst', description: 'Catalyzes business growth through coding excellence.' },
      { name: 'InfraPulse', description: 'The pulse of IT infrastructure services and monitoring.' },
      { name: 'SecureStack', description: 'Focused on building secure technology stacks for clients.' },
      { name: 'TechTrove', description: 'A treasure trove of technological solutions and expertise.' },
      { name: 'PivotPoint IT', description: 'Helps businesses pivot with strategic IT decisions.' },
      { name: 'CloudCrest', description: 'Summit-level cloud computing services and solutions.' },
      { name: 'LogicLabs', description: 'Laboratory of logical IT solutions and innovations.' },
      { name: 'QuantumQuest', description: 'Advanced, quantum-level approach to IT challenges.' },
      { name: 'ReliableTech', description: 'Straightforward reliability in technology services.' },
      { name: 'VelocityNetworks', description: 'High-speed network solutions for demanding businesses.' },
    ],
  },
  'jewelry-store': {
    slug: 'jewelry-store',
    name: 'Jewelry Store Business Name Generator',
    title: 'Free AI Jewelry Store Business Name Ideas Generator',
    description: 'Generate elegant, sparkling names for jewelry stores, boutiques, and fine jewelers.',
    metaDescription: 'Shine in the jewelry business with a sparkling name. Our AI tool crafts unique names without a price tag!',
    inputLabel: 'Describe your jewelry business...',
    inputPlaceholder: 'e.g. A boutique jewelry store specializing in custom engagement rings and wedding bands',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Elegant & Luxurious', 'Modern & Trendy', 'Classic & Timeless', 'Artisan & Handcrafted'],
        default: 'Elegant & Luxurious',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in jewelry stores, boutiques, and fine jewelers. Your role is to generate elegant, sparkling business names that convey the luxury, beauty, and precious nature of fine jewelry.

JEWELRY STORE BUSINESS CONTEXT:

The jewelry industry encompasses:
- Fine jewelry boutiques
- Custom jewelry designers
- Wedding and engagement specialists
- Fashion jewelry retailers
- Artisan handmade jewelry
- Vintage and antique jewelry
- Watch and accessory stores
- Online jewelry boutiques

NAME CHARACTERISTICS FOR JEWELRY BUSINESSES:

1. **Elegant and Sophisticated**
   - Names should convey luxury and refinement
   - Suggest precious quality and value
   - Appeal to discerning jewelry buyers
   - Examples: Luxe, Precious, Fine, Elegant

2. **Memorable and Descriptive**
   - Creates lasting impression of beauty
   - Easy to recall and recommend
   - Clearly suggests jewelry focus
   - Examples: Gem, Jewel, Sparkle, Shine

3. **Reflects Jewelry Specialty**
   - Communicates specific offerings
   - Appeals to target customers
   - Suggests unique positioning
   - Examples: Bridal, Artisan, Vintage, Custom

4. **Available for Branding**
   - Domain and social media availability
   - Trademark clearance potential
   - Works across marketing channels
   - Looks elegant on packaging

NAMING PATTERNS TO USE:

- Gem references: "Diamond," "Ruby," "Sapphire"
- Luxury words: "Luxe," "Opulent," "Regal"
- Light/sparkle words: "Shine," "Glow," "Radiant"
- Precious metal references: "Gold," "Silver," "Platinum"
- Elegant suffixes: "Boutique," "Jewelers," "& Co."

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name conveys jewelry elegance
4. Consider domain name availability potential
5. Ensure appropriate for luxury retail positioning`,
    useCases: [
      { title: 'Fine Jewelry Boutique Launch', description: 'Entrepreneurs opening jewelry stores use the generator to find names that immediately communicate elegance, luxury, and precious quality. A sophisticated name helps attract customers seeking meaningful, high-quality jewelry pieces.' },
      { title: 'Custom Jewelry Designer Branding', description: 'Custom jewelry designers and artisans use the generator to create names suggesting craftsmanship and personalized service. The right name positions their business as a destination for unique, bespoke jewelry creations.' },
      { title: 'Bridal Jewelry Specialist Identity', description: 'Wedding and engagement jewelry specialists use the generator to find names evoking romance and milestone celebrations. A romantic name attracts couples seeking perfect rings and wedding jewelry.' },
    ],
    faqs: [
      { question: 'What makes a good jewelry store name?', answer: 'A good jewelry store brand name should embody elegance and sophistication, be memorable and descriptive, and be available for branding purposes across domains and social media.' },
      { question: 'Should I include "jewelry" in my business name?', answer: 'It provides clarity but isn\'t required. Names like "Brilliance Boutique" or "Radiant & Co." can effectively communicate jewelry focus. Consider your positioning and target audience.' },
      { question: 'How important is elegance in a jewelry business name?', answer: 'Extremely important. Jewelry represents beauty, value, and special occasions. An elegant name creates the right expectation and attracts customers seeking quality and refinement.' },
      { question: 'What words work well for jewelry store names?', answer: 'Words like Gem, Jewel, Sparkle, Shine, Radiant, Luxe, Brilliant, and Precious work well. Gem names (Diamond, Ruby) and metal references (Gold, Silver) also resonate.' },
      { question: 'Should my jewelry store name reflect my specialty?', answer: 'If you specialize in bridal, vintage, or custom pieces, hints help attract ideal customers. "Bridal Brilliance" or "Vintage Gems" clearly communicates your focus.' },
      { question: 'How do I make my jewelry store name memorable?', answer: 'Use sparkling imagery, alliteration, or elegant word combinations. Keep it short, sophisticated, and easy to pronounce. Test how it sounds when recommending to friends.' },
      { question: 'Can I use gem names in my jewelry business name?', answer: 'Gem names like Diamond, Ruby, or Sapphire add immediate jewelry association and elegance. Just ensure your chosen name isn\'t already trademarked by existing jewelers.' },
      { question: 'Should I consider my target market in my name?', answer: 'Absolutely. A luxury boutique targeting affluent clients needs a different name than an affordable fashion jewelry store. Match your name\'s sophistication to your market.' },
      { question: 'How do I check if my jewelry business name is available?', answer: 'Search for existing jewelry stores, check domain availability, verify social media handles, and conduct a trademark search. Also check with jewelry industry associations.' },
      { question: 'What jewelry store naming mistakes should I avoid?', answer: 'Avoid names that sound cheap or generic, are difficult to spell, or are too similar to famous jewelry brands. Also avoid names that limit your product range.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your jewelry store is essential in creating a brand that attracts customers seeking beautiful, meaningful pieces. Your business name will appear on signage, packaging, and marketing materials—it needs to convey the elegance and precious quality of your jewelry offerings.',
      steps: [
        { title: 'Define Your Jewelry Niche', description: 'Consider your specialty. Are you focusing on fine jewelry, fashion accessories, bridal pieces, or artisan creations? Your name should reflect your unique positioning in the market.' },
        { title: 'Know Your Target Customer', description: 'Determine who you\'re serving. Luxury buyers, young fashion-conscious customers, or brides-to-be? Match your name\'s elegance and style to your ideal customer\'s expectations.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to jewelry: Gem, Sparkle, Shine, Radiant, Precious, Brilliant. Include luxury words: Luxe, Fine, Elegant, Regal. Add descriptive words: Boutique, Collection, Treasures.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try elegant structures (Brilliance & Co.), gem references (Sapphire Studio), or descriptive phrases (Precious Finds). Generate multiple options.' },
        { title: 'Test for Elegance', description: 'Evaluate each name for its luxury appeal. Does it sound like a name customers would associate with beautiful, quality jewelry? Would it look impressive on packaging?' },
        { title: 'Check Availability', description: 'Verify your top choices for domain names, social media handles, and trademark conflicts. In jewelry, brand consistency across all touchpoints is essential.' },
        { title: 'Visualize the Brand', description: 'Imagine your chosen name on store signage, jewelry boxes, and shopping bags. Does it convey the elegance and prestige of your jewelry offerings? Choose accordingly.' },
      ],
    },
    businessNameIdeas: [
      { name: 'GemGrove', description: 'A place filled with a beautiful variety of precious gems.' },
      { name: 'BlingBounty', description: 'Implies a store filled with abundant shiny, decorative jewelry.' },
      { name: 'OpulentOasis', description: 'A rich and luxurious jewelry store destination.' },
      { name: 'AdornAbode', description: 'A home for beautiful adornments and jewelry pieces.' },
      { name: 'SparkleSpree', description: 'Suggests a wide, exciting range of sparkly jewelry.' },
      { name: 'CaratCavern', description: 'A place full of precious gemstones and carat treasures.' },
      { name: 'JewelJunction', description: 'A meeting place for jewelry enthusiasts and collectors.' },
      { name: 'OrnamentOrchard', description: 'A fruitful place of beautiful jewelry adornments.' },
      { name: 'LuxeLagoon', description: 'A serene store filled with luxurious jewelry items.' },
      { name: 'DazzleDen', description: 'A cozy place for dazzling jewelry discoveries.' },
      { name: 'GlitterGarden', description: 'A garden-like space filled with sparkling jewels.' },
      { name: 'BaubleBrook', description: 'Suggests a flowing stream of decorative jewelry pieces.' },
      { name: 'CharmedChamber', description: 'A chamber with a variety of charming jewelry items.' },
      { name: 'PreciousPavilion', description: 'A pavilion filled with valuable and beloved jewelry.' },
      { name: 'CrystalCove', description: 'A safe harbor for crystal and gemstone jewelry.' },
      { name: 'EleganceEmporium', description: 'A grand store offering elegant jewelry selections.' },
      { name: 'RadiantRealm', description: 'A realm of radiant, glowing jewelry pieces.' },
      { name: 'TreasureTrove', description: 'A trove of jewelry treasures waiting to be discovered.' },
      { name: 'BrilliantBoutique', description: 'A boutique featuring brilliant, sparkling jewelry.' },
      { name: 'GoldenGrace', description: 'Graceful jewelry featuring golden elegance.' },
    ],
  },
  'lip-gloss': {
    slug: 'lip-gloss',
    name: 'Lip Gloss Business Name Generator',
    title: 'Free AI Lip Gloss Business Name Ideas Generator',
    description: 'Generate alluring, glamorous names for lip gloss brands, cosmetics businesses, and beauty product companies.',
    metaDescription: 'Pucker up your lip gloss business with a sparkling name. Our AI generator sparks creativity for free!',
    inputLabel: 'Describe your lip gloss business...',
    inputPlaceholder: 'e.g. A vegan lip gloss brand targeting Gen Z with bold, trendy colors',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Glamorous & Alluring', 'Fun & Playful', 'Clean & Natural', 'Luxe & Premium'],
        default: 'Glamorous & Alluring',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in lip gloss brands, cosmetics businesses, and beauty product companies. Your role is to generate alluring, glamorous business names that capture the beauty, shine, and confidence that lip gloss products provide.

LIP GLOSS BUSINESS CONTEXT:

The lip gloss industry encompasses:
- Lip gloss brands and lines
- Cosmetics companies
- Beauty entrepreneurs
- Indie makeup brands
- Clean and natural lip products
- Luxury lip cosmetics
- Teen and young adult beauty brands
- Vegan and cruelty-free cosmetics

NAME CHARACTERISTICS FOR LIP GLOSS BUSINESSES:

1. **Alluring and Glamorous**
   - Names should evoke beauty and sophistication
   - Suggest shine, gloss, and attraction
   - Appeal to beauty-conscious customers
   - Examples: Gloss, Shine, Luxe, Glam

2. **Catchy and Memorable**
   - Easy to remember and share
   - Creates immediate brand recognition
   - Works well on social media
   - Examples: Playful, punchy, rhythmic names

3. **Reflects Lip Gloss Variety**
   - Communicates product range
   - Appeals to target demographic
   - Suggests unique brand identity
   - Examples: Pout, Lips, Lush, Kiss

4. **Modern and Trendy**
   - Appeals to current beauty consumers
   - Suggests fashion-forward products
   - Works across digital platforms
   - Photographs and designs well

NAMING PATTERNS TO USE:

- Lip references: "Pout," "Kiss," "Lips"
- Shine words: "Gloss," "Shine," "Glow," "Shimmer"
- Texture words: "Velvet," "Silk," "Lush"
- Alliteration: "Pout Perfect," "Gloss Grove"
- Beauty words: "Luxe," "Glam," "Chic"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name conveys beauty and glamour
4. Consider social media and hashtag potential
5. Ensure appropriate for beauty/cosmetics market`,
    useCases: [
      { title: 'Indie Lip Gloss Brand Launch', description: 'Beauty entrepreneurs launching lip gloss lines use the generator to find names that capture glamour and appeal. A catchy name helps build brand recognition and attract customers on social media platforms.' },
      { title: 'Clean Beauty Lip Product Branding', description: 'Natural and clean beauty brands use the generator to create names suggesting purity and health-conscious beauty. The right name attracts customers seeking glosses made with quality, safe ingredients.' },
      { title: 'Teen Beauty Brand Identity', description: 'Young adult-focused beauty brands use the generator to find fun, trendy names that resonate with Gen Z consumers. A playful, social-media-ready name helps capture the youth market.' },
    ],
    faqs: [
      { question: 'What makes a good lip gloss business name?', answer: 'A good lip gloss brand name should be alluring and glamorous, catchy and memorable, and reflective of your lip gloss variety. It should evoke the beauty and confidence your products provide.' },
      { question: 'Should I include "lip gloss" in my business name?', answer: 'Not necessarily. Names like "Pout Palace" or "Glossy Grove" clearly suggest lip products without being explicit. Consider whether you might expand beyond lip gloss in the future.' },
      { question: 'How important is trendiness in a lip gloss brand name?', answer: 'Very important in beauty. Your name should feel current and appeal to modern beauty consumers. However, balance trendiness with timelessness to avoid dating quickly.' },
      { question: 'What words work well for lip gloss business names?', answer: 'Words like Gloss, Shine, Pout, Kiss, Luxe, Lush, and Glam work well. Texture words (Velvet, Silk) and shine words (Shimmer, Glow) also resonate with lip product consumers.' },
      { question: 'Should my lip gloss brand name target a specific demographic?', answer: 'If targeting teens versus luxury consumers, your name should match. "Gloss Girl" appeals differently than "Luxe Lip Co." Know your audience and name accordingly.' },
      { question: 'How do I make my lip gloss brand name memorable?', answer: 'Use alliteration (Pout Perfect), playful words, or catchy combinations. Ensure it\'s easy to pronounce, spell, and share on social media. Test its hashtag potential.' },
      { question: 'Can I use puns in my lip gloss business name?', answer: 'Lip-related puns can work wonderfully in beauty. Names like "Kiss & Tell" or "Read My Lips" add personality while communicating your product focus.' },
      { question: 'Should I consider Instagram-friendliness?', answer: 'Absolutely. Lip gloss is heavily marketed on social media. Choose a name that looks great in a bio, works as a hashtag, and fits brand aesthetics for visual platforms.' },
      { question: 'How do I check if my lip gloss brand name is available?', answer: 'Search for existing beauty brands, check domain and social media handle availability, and conduct a trademark search. Beauty is competitive, so thorough checking is essential.' },
      { question: 'What lip gloss naming mistakes should I avoid?', answer: 'Avoid names that are too similar to established beauty brands, difficult to spell, or limit product expansion. Also avoid names that might date quickly with passing trends.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your lip gloss business is essential in creating a brand that captures attention in the competitive beauty market. Your business name will appear on packaging, social media, and marketing materials—it needs to convey the glamour and appeal of your products.',
      steps: [
        { title: 'Define Your Brand Identity', description: 'Consider your brand personality. Are you playful and fun, sophisticated and luxe, or natural and clean? Your name should reflect the vibe customers will experience.' },
        { title: 'Know Your Target Audience', description: 'Determine who you\'re targeting. Teens, young professionals, mature women, or all ages? Match your name\'s tone and style to your ideal customer\'s preferences.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to lip gloss: Gloss, Shine, Pout, Kiss, Lips, Glam. Include descriptive words: Luxe, Lush, Velvet, Perfect. Add action words: Pucker, Plump, Shimmer.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try alliteration (Glossy Glam), compound words (PoutPerfection), or playful phrases (Lip Luxe). Generate multiple options.' },
        { title: 'Test for Social Media Appeal', description: 'Check how each name looks in Instagram bios, as hashtags, and on product packaging. Beauty brands live on social media—ensure your name photographs and displays well.' },
        { title: 'Check Availability', description: 'Verify your top choices for domain names, social media handles, and trademark conflicts. In the competitive beauty space, securing your name across all platforms is crucial.' },
        { title: 'Visualize the Brand', description: 'Imagine your chosen name on lip gloss tubes, packaging, and marketing materials. Does it convey the glamour and appeal of your products? Choose a name that looks beautiful.' },
      ],
    },
    businessNameIdeas: [
      { name: 'GlossyGrove', description: 'A lip gloss business offering a grove of glossy products.' },
      { name: 'PoutPerfection', description: 'Implies a business known for its perfect products for your pout.' },
      { name: 'LipLuxury', description: 'A lip gloss business that offers luxury lip products.' },
      { name: 'PoutPalace', description: 'A palace filled with products for your perfect pout.' },
      { name: 'LusciousLaneway', description: 'A laneway of luscious, irresistible lip products.' },
      { name: 'GlossGrotto', description: 'A grotto of beautiful gloss products to explore.' },
      { name: 'LipLuminance', description: 'Lip gloss business offering luminous lip products.' },
      { name: 'PoutPleasure', description: 'Pleasurable products for your beautiful pout.' },
      { name: 'LusciousLand', description: 'A land of luscious lip products and glosses.' },
      { name: 'GlossGrove', description: 'A grove of beautiful, varied gloss products.' },
      { name: 'LipLush', description: 'Lush, luxurious lip products and glosses.' },
      { name: 'PoutPrestige', description: 'Prestigious products for your discerning pout.' },
      { name: 'ShimmerShine', description: 'Lip gloss business specializing in shimmery shine.' },
      { name: 'VelvetVamp', description: 'Velvety, vampy lip products with attitude.' },
      { name: 'GlazedGlam', description: 'Glamorous, glazed finish lip products.' },
      { name: 'KissableChic', description: 'Chic products that make lips irresistibly kissable.' },
      { name: 'PlumpPout', description: 'Lip products that create the perfect plump pout.' },
      { name: 'LacquerLips', description: 'Lacquered, long-lasting lip gloss products.' },
      { name: 'SugarShine', description: 'Sweet, shiny lip products with sugary appeal.' },
      { name: 'GlossGoddess', description: 'Goddess-worthy lip gloss products and finishes.' },
    ],
  },
  'marketing': {
    slug: 'marketing',
    name: 'Marketing Business Name Generator',
    title: 'Free AI Marketing Business Name Ideas Generator',
    description: 'Generate professional, innovative names for marketing agencies, advertising firms, and promotional services businesses.',
    metaDescription: 'Market your business effectively with an AI-generated name. It\'s quick, free, and designed for success!',
    inputLabel: 'Describe your marketing business...',
    inputPlaceholder: 'e.g. A digital marketing agency specializing in social media and content marketing for B2B companies',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Professional & Strategic', 'Creative & Bold', 'Modern & Dynamic', 'Results-Focused'],
        default: 'Professional & Strategic',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in marketing agencies, advertising firms, and promotional services businesses. Your role is to generate professional, innovative business names that convey creativity, strategic thinking, and marketing expertise.

MARKETING BUSINESS CONTEXT:

The marketing industry encompasses:
- Full-service marketing agencies
- Digital marketing firms
- Social media marketing agencies
- Content marketing companies
- Brand strategy consultancies
- Advertising agencies
- PR and communications firms
- Marketing technology companies

NAME CHARACTERISTICS FOR MARKETING BUSINESSES:

1. **Professional and Innovative**
   - Names should convey expertise and creativity
   - Suggest strategic thinking and results
   - Appeal to businesses seeking growth
   - Examples: Strategy, Creative, Growth, Impact

2. **Memorable and Impactful**
   - Creates strong first impression
   - Easy to recall and recommend
   - Suggests marketing effectiveness
   - Examples: Bold, dynamic, action-oriented words

3. **Reflects Marketing Focus**
   - Communicates service specialization
   - Appeals to target client base
   - Suggests unique approach
   - Examples: Digital, Brand, Content, Media

4. **Modern and Dynamic**
   - Conveys current industry relevance
   - Suggests forward-thinking approach
   - Works across digital platforms
   - Appeals to contemporary businesses

NAMING PATTERNS TO USE:

- Action words: "Propel," "Launch," "Boost," "Elevate"
- Growth words: "Growth," "Rise," "Climb," "Ascend"
- Impact words: "Impact," "Effect," "Result," "Force"
- Strategy words: "Strategy," "Tactics," "Blueprint"
- Creative suffixes: "Co.," "Agency," "Group," "Labs"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name conveys marketing professionalism
4. Consider domain name availability potential
5. Ensure appropriate for B2B professional services`,
    useCases: [
      { title: 'Marketing Agency Launch', description: 'New marketing agencies use the generator to find names that immediately communicate creativity, strategy, and business growth expertise. A professional name helps establish credibility and attract clients seeking marketing partners.' },
      { title: 'Digital Marketing Firm Branding', description: 'Digital-focused agencies use the generator to create names suggesting modern, tech-savvy marketing capabilities. The right name positions their services as essential for businesses wanting effective online presence.' },
      { title: 'Specialized Marketing Consultancy Identity', description: 'Consultants specializing in specific industries or marketing channels use the generator to find names reflecting their expertise. A distinctive name attracts clients seeking specialized marketing knowledge.' },
    ],
    faqs: [
      { question: 'What makes a good marketing business name?', answer: 'A good marketing brand name should be professional and innovative, memorable and impactful, and reflective of your marketing focus. It should convey the creativity and strategic approach you bring to clients.' },
      { question: 'Should I include "marketing" in my business name?', answer: 'It provides clarity but isn\'t required. Names like "GrowthForce" or "BrandBoost" can effectively communicate marketing focus. Consider whether explicit description or evocative branding suits your positioning.' },
      { question: 'How important is creativity in a marketing agency name?', answer: 'Very important. Your name is the first demonstration of your creative capabilities. A clever, memorable name suggests you\'ll bring the same creativity to client campaigns.' },
      { question: 'What words work well for marketing business names?', answer: 'Words like Growth, Impact, Strategy, Brand, Creative, and Results work well. Action words (Propel, Launch, Boost) and innovation words (Edge, Frontier, Pioneer) also resonate.' },
      { question: 'Should my marketing agency name reflect my specialty?', answer: 'If you specialize in specific channels or industries, hints can attract ideal clients. "SocialSurge" or "ContentCraft" clearly communicates your focus area.' },
      { question: 'How do I make my marketing agency name memorable?', answer: 'Use dynamic, action-oriented language, create compound words, or combine familiar terms in fresh ways. Test memorability by asking people to recall your name after one hearing.' },
      { question: 'Can I use metaphors in my marketing business name?', answer: 'Marketing metaphors work well. Names suggesting propulsion, growth, or impact (RocketGrowth, ImpactEngine) communicate what clients can expect from your services.' },
      { question: 'Should I consider client industries in my name?', answer: 'If serving specific industries, industry-relevant names help. General names like "MarketMomentum" work for diverse clients, while "HealthCare Marketing Group" targets specific sectors.' },
      { question: 'How do I check if my marketing business name is available?', answer: 'Search for existing marketing agencies, check domain availability, verify social media handles, and conduct a trademark search. Marketing is competitive, so thorough checking matters.' },
      { question: 'What marketing agency naming mistakes should I avoid?', answer: 'Avoid names that are too generic, sound like every other agency, or promise unrealistic results. Also avoid names that limit future service expansion.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your marketing business is essential in establishing credibility with clients who will trust you with their brand growth. Your business name will appear on proposals, presentations, and marketing materials—it needs to convey expertise and creative capability.',
      steps: [
        { title: 'Define Your Marketing Philosophy', description: 'Consider your approach. Are you data-driven, creatively-focused, or strategy-first? Your name should hint at your methodology and what makes your agency different.' },
        { title: 'Identify Your Target Clients', description: 'Determine whether you\'re targeting startups, enterprises, specific industries, or general businesses. Match your name\'s sophistication and style to your ideal client profile.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to marketing: Growth, Brand, Strategy, Creative, Impact. Include action words: Propel, Launch, Drive, Elevate. Add result words: Results, Success, Momentum.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try action-focused structures (PropelMarketing), compound concepts (GrowthEngine), or strategic names (BlueprintBrand). Generate multiple options.' },
        { title: 'Test for Professional Impact', description: 'Evaluate each name for its business appeal. Does it sound like a partner companies would trust with their marketing? Would it impress in proposals and presentations?' },
        { title: 'Check Availability', description: 'Verify your top choices for domain names, social media handles, and trademark conflicts. In marketing, your online presence is your first marketing campaign.' },
        { title: 'Consider Visual Identity', description: 'Imagine your chosen name on business cards, presentations, and case studies. Does it convey professionalism and marketing expertise? Choose a name that enhances your brand.' },
      ],
    },
    businessNameIdeas: [
      { name: 'PropelPromotions', description: 'A marketing business that propels client promotions to success.' },
      { name: 'BoostBrand', description: 'Suggests a marketing business that boosts brand recognition.' },
      { name: 'GrowthGrip', description: 'Implies a firm grasp on strategies that drive business growth.' },
      { name: 'ImpactEngine', description: 'A marketing business that engines impactful campaigns.' },
      { name: 'MarketMomentum', description: 'Building and maintaining momentum in the marketplace.' },
      { name: 'ElevateEdge', description: 'Elevates clients with competitive marketing edge.' },
      { name: 'BrandBlueprint', description: 'Creates strategic blueprints for successful branding.' },
      { name: 'ReachRocket', description: 'Rockets client reach to new heights and audiences.' },
      { name: 'StrategyStudio', description: 'A studio focused on marketing strategy development.' },
      { name: 'CampaignCraft', description: 'Crafts effective, compelling marketing campaigns.' },
      { name: 'InfluencerImpact', description: 'Marketing focused on impactful influencer strategies.' },
      { name: 'VisibilityVenture', description: 'Ventures into visibility for client brand awareness.' },
      { name: 'ConversionCatalyst', description: 'Catalyzes conversions through strategic marketing.' },
      { name: 'AudienceArchitect', description: 'Architects audience growth and engagement strategies.' },
      { name: 'EngagementEngine', description: 'Engines engagement for client success and growth.' },
      { name: 'LeadLaunch', description: 'Launches lead generation campaigns that deliver.' },
      { name: 'BuzzBuild', description: 'Builds buzz and excitement around client brands.' },
      { name: 'RevenueRise', description: 'Marketing focused on rising client revenue results.' },
      { name: 'MediaMagnet', description: 'Attracts media attention and coverage for clients.' },
      { name: 'GrowthGurus', description: 'Expert gurus in marketing-driven business growth.' },
    ],
  },
  'music': {
    slug: 'music',
    name: 'Music Business Name Generator',
    title: 'Free AI Music Business Name Ideas Generator',
    description: 'Generate evocative, expressive names for music businesses, record labels, studios, and music-related enterprises.',
    metaDescription: 'Compose your music business success with a perfect name from our free AI generator. Try it now!',
    inputLabel: 'Describe your music business...',
    inputPlaceholder: 'e.g. A music production studio specializing in hip-hop and R&B for independent artists',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Creative & Artistic', 'Professional & Industry', 'Modern & Trendy', 'Classic & Timeless'],
        default: 'Creative & Artistic',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in music businesses, record labels, studios, and music-related enterprises. Your role is to generate evocative, expressive business names that capture the artistry, emotion, and creative spirit of the music industry.

MUSIC BUSINESS CONTEXT:

The music industry encompasses:
- Music production studios
- Record labels
- Music schools and academies
- Instrument retailers
- Music streaming services
- Concert and event promoters
- Music therapy practices
- Songwriting and composition services

NAME CHARACTERISTICS FOR MUSIC BUSINESSES:

1. **Evocative and Expressive**
   - Names should stir emotions
   - Reflect genre or style specialization
   - Capture musical creativity
   - Examples: Harmony, Melody, Rhythm, Sound

2. **Memorable and Catchy**
   - Easy to remember and share
   - Creates strong brand recognition
   - Works well across music platforms
   - Examples: Rhythmic, musical, flowing names

3. **Reflects Musical Identity**
   - Communicates unique offerings
   - Appeals to target musicians/audiences
   - Suggests specific musical approach
   - Examples: Genre hints, instrument references

4. **Creative and Artistic**
   - Conveys artistic sensibility
   - Suggests innovation in music
   - Appeals to creative community
   - Examples: Sonic, Wave, Pulse, Beat

NAMING PATTERNS TO USE:

- Sound words: "Sound," "Sonic," "Audio," "Acoustic"
- Music elements: "Melody," "Harmony," "Rhythm," "Beat"
- Emotional words: "Soul," "Spirit," "Passion," "Bliss"
- Movement words: "Flow," "Wave," "Pulse," "Groove"
- Place words: "Studio," "House," "Lab," "Collective"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name conveys musical artistry
4. Consider social media and streaming platform fit
5. Ensure appropriate for music industry context`,
    useCases: [
      { title: 'Music Production Studio Launch', description: 'Studio owners use the generator to find names that immediately communicate creative excellence and professional sound quality. A distinctive name helps attract artists seeking production partners for their music.' },
      { title: 'Record Label Branding', description: 'New record labels use the generator to create names suggesting their musical vision and artist development philosophy. The right name attracts musicians who resonate with the label\'s artistic direction.' },
      { title: 'Music School Identity', description: 'Music educators and academies use the generator to find names conveying learning, skill development, and musical passion. An inspiring name attracts students eager to develop their musical talents.' },
    ],
    faqs: [
      { question: 'What makes a good music business name?', answer: 'A good music brand name should be evocative and expressive, memorable and catchy, and reflective of your musical identity. It should capture the artistry and emotion of music.' },
      { question: 'Should I include "music" in my business name?', answer: 'It provides clarity but isn\'t required. Names like "SonicWave" or "HarmonyHouse" clearly suggest music focus. Consider whether explicit description or evocative branding better suits your positioning.' },
      { question: 'How important is emotion in a music business name?', answer: 'Very important. Music is inherently emotional. A name that stirs feelings and suggests artistic expression will resonate with musicians and music lovers alike.' },
      { question: 'What words work well for music business names?', answer: 'Words like Sound, Sonic, Melody, Harmony, Rhythm, Beat, and Wave work well. Emotional words (Soul, Passion, Spirit) and movement words (Flow, Pulse, Groove) also resonate.' },
      { question: 'Should my music business name reflect my genre?', answer: 'If you specialize in specific genres, subtle hints help attract ideal clients. "Jazz Junction" or "RockHouse Studios" clearly communicates your focus.' },
      { question: 'How do I make my music business name memorable?', answer: 'Use musical imagery, rhythmic word combinations, or evocative language. Test how the name sounds when spoken—it should have a pleasant, memorable quality.' },
      { question: 'Can I use musical terms in my business name?', answer: 'Absolutely. Terms like "Studio," "Records," "Sound," and "Productions" immediately communicate music industry focus and professionalism.' },
      { question: 'Should I consider streaming platform presence?', answer: 'Yes. Ensure your name works well on Spotify, Apple Music, and other platforms. Check for existing artists or labels with similar names to avoid confusion.' },
      { question: 'How do I check if my music business name is available?', answer: 'Search music industry databases, check domain and social media handles, verify streaming platforms, and conduct a trademark search. Music is global—check thoroughly.' },
      { question: 'What music business naming mistakes should I avoid?', answer: 'Avoid names too similar to famous artists or labels, difficult to spell or pronounce, or that don\'t convey musical association. Also avoid overly trendy names that may date.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your music business is essential in creating a brand that resonates with artists and music lovers. Your business name will appear on recordings, streaming platforms, and marketing materials—it needs to capture the creative spirit and emotional power of music.',
      steps: [
        { title: 'Define Your Musical Vision', description: 'Consider your artistic direction. Are you focused on specific genres, emerging artists, or established professionals? Your name should hint at your musical philosophy and style.' },
        { title: 'Identify Your Target Audience', description: 'Determine whether you\'re serving independent artists, major label acts, students, or general music consumers. Match your name\'s tone to your audience\'s expectations.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to music: Sound, Melody, Rhythm, Harmony, Beat. Include emotional words: Soul, Passion, Groove, Spirit. Add descriptive words: Studio, Productions, Records, House.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try evocative structures (SonicSanctuary), compound concepts (RhythmLab), or descriptive phrases (Harmony House). Generate multiple options.' },
        { title: 'Test for Musical Appeal', description: 'Evaluate each name for its artistic quality. Does it sound like a name musicians would want to be associated with? Does it convey creativity and professionalism?' },
        { title: 'Check Availability', description: 'Verify your top choices for domain names, social media handles, streaming platforms, and trademark conflicts. In music, consistent presence across platforms is essential.' },
        { title: 'Consider Industry Perception', description: 'Imagine your chosen name on album credits, in industry publications, and on studio signage. Does it convey musical excellence? Choose a name that earns respect in the industry.' },
      ],
    },
    businessNameIdeas: [
      { name: 'HarmoniousHorizons', description: 'A music business offering harmonious musical horizons and experiences.' },
      { name: 'MelodicMasters', description: 'Implies mastery over melodic music creation and production.' },
      { name: 'RhythmicRealm', description: 'A realm of rhythmic music and creative expression.' },
      { name: 'SonicSymphony', description: 'A symphony of sonic sounds and musical experiences.' },
      { name: 'BeatBliss', description: 'Music business offering blissful beats and production.' },
      { name: 'TuneTreasures', description: 'A treasure trove of tunes and musical creations.' },
      { name: 'RhythmRapture', description: 'Rapturous rhythms and captivating musical experiences.' },
      { name: 'MelodyMeadow', description: 'A meadow of beautiful melodies and compositions.' },
      { name: 'SoundSanctuary', description: 'A sanctuary of sounds and musical creation.' },
      { name: 'HarmonicHaven', description: 'A haven for harmonic music and artists.' },
      { name: 'GrooveGuild', description: 'A guild of groove-focused musicians and producers.' },
      { name: 'AudioArtistry', description: 'Artistic approach to audio and music creation.' },
      { name: 'PulsePalace', description: 'Palace of pulsating music and dynamic beats.' },
      { name: 'EchoEssence', description: 'Capturing the essence of music through echo and sound.' },
      { name: 'VibrantVibes', description: 'Vibrant musical vibes and energetic productions.' },
      { name: 'CadenceCraft', description: 'Crafting perfect cadence in music composition.' },
      { name: 'SoulSounds', description: 'Soulful sounds and emotionally resonant music.' },
      { name: 'WaveWorks', description: 'Working with sound waves to create music magic.' },
      { name: 'NoteNexus', description: 'The nexus point for musical notes and creation.' },
      { name: 'TempoTribe', description: 'A tribe united by tempo and musical passion.' },
    ],
  },
  'perfume': {
    slug: 'perfume',
    name: 'Perfume Business Name Generator',
    title: 'Free AI Perfume Business Name Ideas Generator',
    description: 'Generate elegant, sensual names for perfume brands, fragrance houses, and scent-based businesses.',
    metaDescription: 'Enhance your brand with an AI-generated perfume business name. Quick, free, and creative!',
    inputLabel: 'Describe your perfume business...',
    inputPlaceholder: 'e.g. A luxury artisan perfume house creating bespoke fragrances with natural ingredients',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Elegant & Luxurious', 'Natural & Botanical', 'Modern & Minimalist', 'Romantic & Sensual'],
        default: 'Elegant & Luxurious',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in perfume brands, fragrance houses, and scent-based businesses. Your role is to generate elegant, sensual business names that capture the beauty, sophistication, and allure of fine fragrances.

PERFUME BUSINESS CONTEXT:

The perfume industry encompasses:
- Perfume and fragrance brands
- Artisan perfumers
- Fragrance boutiques
- Natural and organic scent lines
- Luxury perfume houses
- Custom fragrance services
- Aromatherapy and scent businesses
- Celebrity and designer fragrances

NAME CHARACTERISTICS FOR PERFUME BUSINESSES:

1. **Elegant and Sensual**
   - Names should evoke luxury and allure
   - Suggest beautiful, captivating scents
   - Appeal to sophisticated fragrance lovers
   - Examples: Essence, Aura, Allure, Mystique

2. **Memorable and Descriptive**
   - Creates lasting impression
   - Easy to recall and recommend
   - Suggests fragrance quality
   - Examples: Scent, Fragrance, Perfume, Aroma

3. **Reflects Fragrance Collection**
   - Communicates scent style or philosophy
   - Appeals to target perfume consumers
   - Suggests unique brand positioning
   - Examples: Floral, Oriental, Fresh, Woody

4. **Luxurious and Sophisticated**
   - Conveys premium quality
   - Suggests artisan craftsmanship
   - Appeals to discerning fragrance buyers
   - Works across luxury marketing

NAMING PATTERNS TO USE:

- Scent words: "Scent," "Aroma," "Fragrance," "Essence"
- Luxury words: "Luxe," "Prestige," "Opulent," "Exquisite"
- Sensory words: "Allure," "Enchant," "Captivate," "Intoxicate"
- Nature words: "Bloom," "Garden," "Orchid," "Jasmine"
- French/elegant suffixes: "Parfum," "Maison," "Atelier"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name conveys fragrance elegance
4. Consider international appeal potential
5. Ensure appropriate for luxury fragrance positioning`,
    useCases: [
      { title: 'Artisan Perfume Brand Launch', description: 'Perfumers launching fragrance lines use the generator to find names that immediately communicate luxury, artistry, and olfactory excellence. An elegant name helps establish prestige and attract fragrance connoisseurs.' },
      { title: 'Natural Fragrance Brand Identity', description: 'Natural and organic perfume brands use the generator to create names suggesting purity and botanical beauty. The right name attracts customers seeking clean, authentic fragrance experiences.' },
      { title: 'Luxury Fragrance House Branding', description: 'Luxury fragrance houses use the generator to find names conveying sophistication and exclusivity. A prestigious name positions the brand among elite perfume offerings.' },
    ],
    faqs: [
      { question: 'What makes a good perfume business name?', answer: 'A good perfume brand name should be elegant and sensual, memorable and descriptive, and reflective of your fragrance collection. It should evoke the beauty and sophistication of fine fragrances.' },
      { question: 'Should I include "perfume" or "fragrance" in my name?', answer: 'It provides clarity but isn\'t required. Names like "Essence Atelier" or "Scented Symphony" communicate fragrance focus elegantly. Consider whether explicit description or evocative branding suits your positioning.' },
      { question: 'How important is elegance in a perfume brand name?', answer: 'Extremely important. Perfume is associated with luxury, beauty, and sophistication. An elegant name creates the right expectation and attracts customers seeking quality fragrances.' },
      { question: 'What words work well for perfume business names?', answer: 'Words like Essence, Aroma, Scent, Fragrance, and Allure work well. Nature words (Bloom, Jasmine, Orchid) and luxury words (Luxe, Prestige, Opulent) also resonate.' },
      { question: 'Should my perfume brand name reflect my scent style?', answer: 'If you specialize in floral, oriental, or woody fragrances, hints can attract ideal customers. "Floral Fantasy" or "Oriental Essence" communicates your signature style.' },
      { question: 'How do I make my perfume brand name memorable?', answer: 'Use sensory, evocative language that suggests scent experiences. Choose words with pleasant sounds and romantic associations. Test international pronunciation for global appeal.' },
      { question: 'Can I use French words in my perfume business name?', answer: 'French words add elegance and authenticity to perfume branding. Terms like "Parfum," "Maison," and "Atelier" convey sophistication and fragrance industry heritage.' },
      { question: 'Should I consider international markets in my name?', answer: 'Perfume is a global industry. Ensure your name translates well, avoids negative connotations in other languages, and sounds elegant internationally.' },
      { question: 'How do I check if my perfume brand name is available?', answer: 'Search existing fragrance brands, check domain availability, verify social media handles, and conduct a trademark search. Perfume is competitive—check thoroughly.' },
      { question: 'What perfume brand naming mistakes should I avoid?', answer: 'Avoid names too similar to famous perfume houses, difficult to pronounce, or lacking elegance. Also avoid names that limit your fragrance range or market positioning.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your perfume business is essential in creating a brand that captivates fragrance lovers. Your business name will appear on bottles, packaging, and marketing materials—it needs to convey the elegance and allure of your scent creations.',
      steps: [
        { title: 'Define Your Fragrance Philosophy', description: 'Consider your olfactory direction. Are you focusing on natural ingredients, luxury blends, or specific scent families? Your name should hint at your fragrance artistry.' },
        { title: 'Know Your Target Audience', description: 'Determine whether you\'re targeting luxury consumers, natural beauty seekers, or specific demographics. Match your name\'s sophistication to your ideal customer\'s preferences.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to fragrance: Scent, Essence, Aroma, Perfume, Fragrance. Include sensory words: Allure, Enchant, Captivate. Add nature words: Bloom, Garden, Floral, Woody.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try elegant structures (Essence Atelier), sensory phrases (Allure Alchemy), or nature-inspired names (Bloom & Blossom). Generate multiple options.' },
        { title: 'Test for Elegance', description: 'Evaluate each name for its luxury appeal. Does it sound like a brand customers would trust for fine fragrances? Would it look prestigious on perfume bottles?' },
        { title: 'Check Availability', description: 'Verify your top choices for domain names, social media handles, and trademark conflicts. In the fragrance industry, global brand protection is important.' },
        { title: 'Visualize the Brand', description: 'Imagine your chosen name on perfume bottles, packaging, and boutique signage. Does it convey the elegance and allure of your fragrances? Choose accordingly.' },
      ],
    },
    businessNameIdeas: [
      { name: 'FragranceFantasy', description: 'A perfume business offering a fantasy of beautiful fragrances.' },
      { name: 'ScentSymphony', description: 'Implies a symphony of scents and olfactory experiences.' },
      { name: 'AromaArcade', description: 'An arcade of aromatic perfume discoveries.' },
      { name: 'EssenceEmpire', description: 'An empire of exquisite fragrance essences.' },
      { name: 'BlossomBouquet', description: 'A bouquet of blossom-inspired scents and perfumes.' },
      { name: 'FloralFusion', description: 'Fusion of floral fragrances and compositions.' },
      { name: 'PerfumeParadise', description: 'A paradise of perfumes and fragrance experiences.' },
      { name: 'AromaAlchemy', description: 'Alchemical approach to creating aromatic perfumes.' },
      { name: 'ScentedSanctuary', description: 'A sanctuary of scented delights and fragrances.' },
      { name: 'BlossomBreeze', description: 'Breezy blossom fragrances and fresh scents.' },
      { name: 'VelvetVapor', description: 'Velvety, luxurious perfume experiences.' },
      { name: 'MystiqueMode', description: 'Mysterious, captivating fragrance creations.' },
      { name: 'OpulentOdor', description: 'Opulent, rich fragrance compositions.' },
      { name: 'LuxeLabyrinth', description: 'A labyrinth of luxurious scent explorations.' },
      { name: 'EnchantedEssence', description: 'Enchanting essence and magical fragrances.' },
      { name: 'SilkScent', description: 'Silky smooth, sophisticated perfume experiences.' },
      { name: 'AuraAtelier', description: 'Atelier crafting beautiful fragrance auras.' },
      { name: 'PetalParfum', description: 'Petal-inspired parfum and floral fragrances.' },
      { name: 'NectarNuance', description: 'Nuanced nectar fragrances and compositions.' },
      { name: 'SensualSpritz', description: 'Sensual spritz perfumes and alluring scents.' },
    ],
  },
  'photography': {
    slug: 'photography',
    name: 'Photography Business Name Generator',
    title: 'Free AI Photography Business Name Ideas Generator',
    description: 'Generate creative, professional names for photography businesses, studios, and visual artists.',
    metaDescription: 'Looking for a catchy name for your photography business? Let AI do the work for you, no cost involved!',
    inputLabel: 'Describe your photography business...',
    inputPlaceholder: 'e.g. A wedding and portrait photography studio specializing in candid, documentary-style images',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Creative & Artistic', 'Professional & Classic', 'Modern & Trendy', 'Elegant & Timeless'],
        default: 'Creative & Artistic',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in photography businesses, studios, and visual artists. Your role is to generate creative, professional business names that convey artistic vision, technical expertise, and the ability to capture meaningful moments.

PHOTOGRAPHY BUSINESS CONTEXT:

The photography industry encompasses:
- Portrait photography studios
- Wedding and event photographers
- Commercial and product photography
- Fashion and editorial photography
- Landscape and nature photographers
- Newborn and family photography
- Real estate and architectural photography
- Photo editing and retouching services

NAME CHARACTERISTICS FOR PHOTOGRAPHY BUSINESSES:

1. **Reflective of Style and Niche**
   - Names should hint at photographic specialty
   - Suggest artistic vision and approach
   - Appeal to target clientele
   - Examples: Portrait, Candid, Fine Art, Documentary

2. **Easy to Remember and Pronounce**
   - Simple yet distinctive
   - Works well in word-of-mouth referrals
   - Memorable for client callbacks
   - Examples: Clear, concise, rhythmic names

3. **Available for Domain and Social Media**
   - Ensures online presence capability
   - Works across digital platforms
   - Supports portfolio website development
   - Checks handle availability

4. **Professional and Artistic**
   - Conveys technical expertise
   - Suggests creative capability
   - Builds client confidence
   - Appeals to quality-seeking clients

NAMING PATTERNS TO USE:

- Photography words: "Capture," "Frame," "Focus," "Lens"
- Light words: "Light," "Glow," "Illuminate," "Radiant"
- Art words: "Canvas," "Portrait," "Gallery," "Vision"
- Moment words: "Moment," "Memory," "Story," "Time"
- Studio suffixes: "Studio," "Photography," "Images," "Photo"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name conveys photographic artistry
4. Consider portfolio and website fit
5. Ensure appropriate for professional photography services`,
    useCases: [
      { title: 'Portrait Photography Studio Launch', description: 'Portrait photographers use the generator to find names that immediately communicate their ability to capture personality and emotion. A professional name helps attract clients seeking meaningful, high-quality portraits.' },
      { title: 'Wedding Photography Branding', description: 'Wedding photographers use the generator to create names suggesting romance, celebration, and the ability to capture once-in-a-lifetime moments. The right name attracts couples seeking their perfect wedding photographer.' },
      { title: 'Commercial Photography Identity', description: 'Commercial photographers use the generator to find names conveying professionalism and technical expertise. A business-focused name attracts companies seeking product, architectural, or corporate photography services.' },
    ],
    faqs: [
      { question: 'What makes a good photography business name?', answer: 'A good photography business name should be reflective of your style and niche, easy to remember and pronounce, and available for domain registration and social media handles.' },
      { question: 'Should I include "photography" in my business name?', answer: 'It provides clarity and helps with searchability. However, creative names like "Captured Moments" or "Light & Frame" can work well. Consider your market and positioning.' },
      { question: 'How important is my name for attracting clients?', answer: 'Very important. Your name is often the first impression potential clients have. A professional, memorable name suggests quality work and helps clients remember you for referrals.' },
      { question: 'What words work well for photography business names?', answer: 'Words like Capture, Frame, Focus, Light, Lens, and Moment work well. Art words (Canvas, Portrait, Vision) and emotion words (Memory, Story, Dream) also resonate.' },
      { question: 'Should my photography business name reflect my specialty?', answer: 'If you specialize in weddings, portraits, or commercial work, hints help attract ideal clients. "Wedding Moments" or "Corporate Focus" communicates your niche clearly.' },
      { question: 'How do I make my photography business name memorable?', answer: 'Use visual imagery, alliteration, or creative word combinations. Keep it short (2-3 words), easy to spell, and ensure it\'s easy to share through word-of-mouth.' },
      { question: 'Can I use my own name in my photography business?', answer: 'Personal names work well for photographers where individual reputation matters. "Sarah Mills Photography" creates personal connection with clients who want to know their photographer.' },
      { question: 'Should I consider SEO in my photography business name?', answer: 'Including location or specialty can help local SEO. "Denver Portrait Studio" or "Chicago Wedding Photography" may help with search visibility but can limit geographic expansion.' },
      { question: 'How do I check if my photography business name is available?', answer: 'Search for existing photography businesses, check domain availability, verify social media handles (especially Instagram), and conduct a trademark search.' },
      { question: 'What photography business naming mistakes should I avoid?', answer: 'Avoid names that are too generic, difficult to spell, or similar to established photographers in your area. Also avoid names that limit your photographic range.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your photography business is essential in creating a brand that attracts clients seeking beautiful, meaningful images. Your business name will appear on your portfolio, social media, and marketing materials—it needs to convey your artistic vision and professional capability.',
      steps: [
        { title: 'Define Your Photography Style', description: 'Consider your artistic approach. Are you documentary-style, fine art, classic, or modern? Your name should hint at your aesthetic and the experience clients can expect.' },
        { title: 'Identify Your Target Clients', description: 'Determine who you\'re serving. Families, couples, businesses, or artists? Match your name\'s tone to your ideal client\'s expectations and emotional needs.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to photography: Capture, Focus, Light, Frame, Lens. Include emotional words: Memory, Moment, Story, Dream. Add descriptive words: Studio, Images, Photo, Visual.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try visual structures (Light & Shadow), moment-focused names (Captured Memories), or artistic phrases (Visual Poetry). Generate multiple options.' },
        { title: 'Test for Memorability', description: 'Say names aloud and test with friends. Does it roll off the tongue? Is it easy to spell when heard? A photography business relies heavily on word-of-mouth referrals.' },
        { title: 'Check Availability', description: 'Verify your top choices for domain names, social media handles (especially Instagram for photographers), and trademark conflicts. Online presence is crucial for photographers.' },
        { title: 'Visualize Your Portfolio', description: 'Imagine your chosen name on your portfolio website, business cards, and watermarks. Does it complement your photographic style? Choose a name that enhances your visual brand.' },
      ],
    },
    businessNameIdeas: [
      { name: 'ShutterSaga', description: 'Indicates the storytelling aspect of photography.' },
      { name: 'CaptureCanvas', description: 'Implies turning photographs into artistic canvases.' },
      { name: 'PixelPioneer', description: 'Pioneering approach to pixel-perfect photography.' },
      { name: 'FocusFable', description: 'Focused photography that tells fables and stories.' },
      { name: 'LuminousLens', description: 'Photography that captures luminous, light-filled images.' },
      { name: 'FrameFusion', description: 'Fusion of perfect framing and artistic vision.' },
      { name: 'MomentMaker', description: 'Creating and capturing meaningful moments.' },
      { name: 'VisionVault', description: 'A vault of visual treasures and photographic vision.' },
      { name: 'SnapSymphony', description: 'A symphony of perfectly snapped photographs.' },
      { name: 'RadiantReels', description: 'Radiant photography and visual storytelling.' },
      { name: 'LensLegacy', description: 'Creating photographic legacies through the lens.' },
      { name: 'FlashFable', description: 'Flash photography that tells visual fables.' },
      { name: 'PicturePoetry', description: 'Photography as visual poetry and expression.' },
      { name: 'ApertureArt', description: 'Artistic approach through aperture mastery.' },
      { name: 'StillStory', description: 'Still images that tell compelling stories.' },
      { name: 'GoldenGaze', description: 'Capturing the golden gaze of beautiful moments.' },
      { name: 'CandidChronicles', description: 'Chronicles of candid, authentic photography.' },
      { name: 'MemoryMosaic', description: 'Creating mosaics of precious memories.' },
      { name: 'ShutterSoul', description: 'Photography that captures the soul of subjects.' },
      { name: 'TimelessTrigger', description: 'Triggering timeless photographic memories.' },
    ],
  },
  'print-shop': {
    slug: 'print-shop',
    name: 'Print Shop Business Name Generator',
    title: 'Free AI Print Shop Business Name Ideas Generator',
    description: 'Generate professional, versatile names for print shops, printing services, and graphic production businesses.',
    metaDescription: 'Print your success story with a standout print shop name. Our AI tool crafts unique names without a price tag!',
    inputLabel: 'Describe your print shop business...',
    inputPlaceholder: 'e.g. A commercial print shop offering large format printing, signage, and custom merchandise',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Professional & Reliable', 'Modern & Creative', 'Fast & Efficient', 'Quality-Focused'],
        default: 'Professional & Reliable',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in print shops, printing services, and graphic production businesses. Your role is to generate professional, versatile business names that convey quality printing, creative capability, and reliable production services.

PRINT SHOP BUSINESS CONTEXT:

The printing industry encompasses:
- Commercial printing services
- Digital printing shops
- Large format and signage printing
- Custom merchandise printing
- Business card and stationery printing
- Banner and promotional item printing
- 3D printing services
- Print-on-demand businesses

NAME CHARACTERISTICS FOR PRINT SHOP BUSINESSES:

1. **Professional and Versatile**
   - Names should convey quality and reliability
   - Suggest wide range of printing capabilities
   - Appeal to diverse business clients
   - Examples: Print, Press, Copy, Graphics

2. **Memorable and Impactful**
   - Creates strong first impression
   - Easy to recall when clients need printing
   - Suggests quality output
   - Examples: Bold, clear, professional names

3. **Reflects Printing Expertise**
   - Communicates service range
   - Appeals to target clients
   - Suggests technical capability
   - Examples: Digital, Custom, Quality, Express

4. **Modern and Reliable**
   - Conveys current technology usage
   - Suggests dependable service
   - Builds client confidence
   - Appeals to businesses seeking trusted printers

NAMING PATTERNS TO USE:

- Print words: "Print," "Press," "Ink," "Copy"
- Quality words: "Quality," "Premium," "Fine," "Precision"
- Speed words: "Express," "Quick," "Fast," "Rapid"
- Creative words: "Creative," "Custom," "Design," "Graphics"
- Professional suffixes: "Solutions," "Services," "Co.," "Shop"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name conveys printing professionalism
4. Consider local business appeal potential
5. Ensure appropriate for B2B and B2C print services`,
    useCases: [
      { title: 'Commercial Print Shop Launch', description: 'Print shop owners use the generator to find names that immediately communicate professional printing capabilities and quality. A reliable name helps attract business clients seeking dependable printing partners.' },
      { title: 'Custom Printing Business Branding', description: 'Custom merchandise and specialty printers use the generator to create names suggesting creativity and personalization. The right name attracts customers seeking unique, customized printed products.' },
      { title: 'Digital Printing Service Identity', description: 'Modern digital printers use the generator to find names conveying technological capability and quick turnaround. A contemporary name attracts clients seeking efficient, high-quality digital printing.' },
    ],
    faqs: [
      { question: 'What makes a good print shop business name?', answer: 'A good print shop brand name should be professional and versatile, memorable and impactful, and reflective of your printing expertise. It should convey quality and reliability.' },
      { question: 'Should I include "print" in my business name?', answer: 'It provides immediate clarity and helps with searchability. Names like "Ink Express" or "Press Perfect" can also effectively communicate print focus without being generic.' },
      { question: 'How important is professionalism in a print shop name?', answer: 'Very important. Businesses trust printers with their marketing materials and brand identity. A professional name builds confidence and suggests quality output.' },
      { question: 'What words work well for print shop names?', answer: 'Words like Print, Press, Ink, Copy, and Graphics work well. Quality words (Premium, Fine, Precision) and service words (Express, Custom, Solutions) also resonate.' },
      { question: 'Should my print shop name reflect my specialty?', answer: 'If you specialize in large format, custom merchandise, or business printing, hints help attract ideal clients. "Banner Pros" or "Corporate Print Solutions" communicates your focus.' },
      { question: 'How do I make my print shop name memorable?', answer: 'Use strong visual words, alliteration, or creative combinations. Keep it concise, professional, and easy to recall when clients need printing services.' },
      { question: 'Should I consider speed or quality in my name?', answer: 'Both are valued in printing. "Express" suggests speed, while "Precision" suggests quality. Choose based on your primary competitive advantage.' },
      { question: 'Should I consider local market in my name?', answer: 'Local print shops often benefit from location-based names for SEO and community recognition. However, avoid overly limiting geographic references if you plan to expand.' },
      { question: 'How do I check if my print shop name is available?', answer: 'Search for existing print businesses, check domain availability, verify social media handles, and conduct a trademark search. Also check local business directories.' },
      { question: 'What print shop naming mistakes should I avoid?', answer: 'Avoid names that are too generic (like "Print Services"), sound outdated, or limit your service range. Also avoid names similar to national print chains.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your print shop is essential in creating a brand that attracts clients seeking quality printing services. Your business name will appear on signage, invoices, and marketing materials—it needs to convey professionalism and printing expertise.',
      steps: [
        { title: 'Define Your Printing Services', description: 'Consider your core offerings. Are you focused on business printing, custom merchandise, large format, or general commercial printing? Your name should hint at your capabilities.' },
        { title: 'Identify Your Target Clients', description: 'Determine whether you\'re serving businesses, individuals, specific industries, or the general public. Match your name\'s tone to your ideal client\'s expectations.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to printing: Print, Press, Ink, Copy, Graphics. Include quality words: Premium, Precision, Quality, Fine. Add service words: Express, Custom, Solutions.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try professional structures (Precision Print Co.), service-focused names (Express Graphics), or creative phrases (Ink Innovation). Generate multiple options.' },
        { title: 'Test for Professional Appeal', description: 'Evaluate each name for its business appeal. Does it sound like a printer businesses would trust with their materials? Would it inspire confidence on quotes and invoices?' },
        { title: 'Check Availability', description: 'Verify your top choices for domain names, social media handles, and trademark conflicts. For local print shops, also check Google Business listings in your area.' },
        { title: 'Consider Signage Impact', description: 'Imagine your chosen name on storefront signage, vehicles, and marketing materials. Does it convey the professionalism and quality of your printing services? Choose accordingly.' },
      ],
    },
    businessNameIdeas: [
      { name: 'PixelParadise', description: 'A print shop offering a paradise of pixel-perfect prints.' },
      { name: 'ImprintImagination', description: 'Imprints imagination into every print project.' },
      { name: 'PressPerfection', description: 'Pursuing perfection in every press run.' },
      { name: 'InkInnovation', description: 'Innovative approach to ink and printing.' },
      { name: 'PrintPulse', description: 'The pulse of quality printing services.' },
      { name: 'GraphicsGuild', description: 'A guild of graphics and printing professionals.' },
      { name: 'ColorCraft', description: 'Crafting beautiful color in every print.' },
      { name: 'CopyCanvas', description: 'Turning copy into canvas-quality prints.' },
      { name: 'PrecisionPress', description: 'Precision in every press operation.' },
      { name: 'DesignDrop', description: 'Dropping designs into quality prints.' },
      { name: 'InkInsight', description: 'Insightful approach to ink and printing.' },
      { name: 'PrintPioneer', description: 'Pioneering printing solutions and services.' },
      { name: 'QualityQuill', description: 'Quill-quality precision in modern printing.' },
      { name: 'ExpressPrint', description: 'Express speed in printing services.' },
      { name: 'MediaMakers', description: 'Making media through print and graphics.' },
      { name: 'PaperPulse', description: 'The pulse of paper printing excellence.' },
      { name: 'VividVision', description: 'Vivid, vibrant printing vision and output.' },
      { name: 'FinishFirst', description: 'First-rate finishing in print production.' },
      { name: 'CustomCraft', description: 'Crafting custom print solutions.' },
      { name: 'PrintPro', description: 'Professional printing services and solutions.' },
    ],
  },
  'real-estate': {
    slug: 'real-estate',
    name: 'Real Estate Business Name Generator',
    title: 'Free AI Real Estate Business Name Ideas Generator',
    description: 'Generate trustworthy, credible names for real estate companies, property agencies, and realty services.',
    metaDescription: 'Find the perfect real estate business name effortlessly using our AI tool. No cost, no hassle, just creativity for your property venture!',
    inputLabel: 'Describe your real estate business...',
    inputPlaceholder: 'e.g. A luxury residential real estate agency serving high-net-worth clients in coastal markets',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Professional & Trustworthy', 'Luxury & Premium', 'Modern & Dynamic', 'Traditional & Established'],
        default: 'Professional & Trustworthy',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in real estate companies, property agencies, and realty services. Your role is to generate trustworthy, credible business names that convey professionalism and expertise in property transactions.

REAL ESTATE BUSINESS CONTEXT:

The real estate industry encompasses:
- Residential real estate agencies
- Commercial property brokers
- Luxury real estate firms
- Property management companies
- Real estate investment firms
- Mortgage and lending services
- Property development companies
- Real estate consulting services

NAME CHARACTERISTICS FOR REAL ESTATE BUSINESSES:

1. **Trustworthy and Credible**
   - Names should evoke reliability and expertise
   - Suggest financial security and confidence
   - Create sense of professional integrity
   - Examples: Premier, Elite, Trust, Equity, Heritage

2. **Memorable and Professional**
   - Easy to remember and recommend
   - Projects sophisticated image
   - Inspires confidence in major transactions
   - Examples: Clean typography, classic appeal

3. **Reflects Real Estate Niche**
   - Communicates specific specialty (luxury, commercial, residential)
   - Appeals to target client base
   - Suggests market expertise
   - Examples: Manor, Estate, Property, Realty, Home

4. **Evokes Property and Investment Imagery**
   - Uses home and property-related words
   - Suggests growth and value
   - Creates aspirational associations
   - Examples: Keys, Foundation, Horizon, Vista, Legacy

NAMING PATTERNS TO USE:

- Compound words: "HomeHaven," "PropertyPeak"
- Alliteration: "Premier Properties," "Realty Ridge"
- Geographic hints: "Vista," "Horizon," "Summit"
- Value words: "Legacy," "Heritage," "Prime"
- Trust words: "Foundation," "Cornerstone," "Anchor"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name is unique and not a well-known existing brand
4. Consider domain name availability potential
5. Ensure appropriate for professional real estate context`,
    useCases: [
      { title: 'New Real Estate Agency Launch', description: 'First-time real estate entrepreneurs use the generator to find names that immediately communicate trust and professionalism. A credible name helps attract both buyers and sellers who are making significant financial decisions and need confidence in their agent.' },
      { title: 'Luxury Property Firm Branding', description: 'High-end real estate firms use the generator to create names suggesting exclusivity and premium service. The right name positions their business as a destination for discerning clients seeking exceptional properties and white-glove service.' },
      { title: 'Property Management Company Identity', description: 'Property managers use the generator to find names that convey reliability and expertise. A strong name reassures property owners that their investments are in capable hands while attracting quality tenants.' },
    ],
    faqs: [
      { question: 'What makes a good real estate business name?', answer: 'A good real estate name should be trustworthy and credible, memorable and professional, and reflective of your real estate niche. It should inspire confidence in clients making major property decisions.' },
      { question: 'Should I include "Realty" or "Properties" in my name?', answer: 'Including industry terms provides immediate clarity but isn\'t required. Names like "HomeHaven" or "Keystone Group" can be equally effective while maintaining professional appeal.' },
      { question: 'How important is location in a real estate business name?', answer: 'Location can be valuable for local agencies but may limit expansion. Consider whether you want regional identity or broader appeal for potential growth.' },
      { question: 'What words work well for real estate business names?', answer: 'Words like Estate, Property, Home, Realty, Premier, Elite, Heritage, Legacy, Keys, and Vista resonate well. Trust-oriented words like Foundation and Cornerstone also work effectively.' },
      { question: 'Should my real estate name reflect my specialty?', answer: 'If you specialize in luxury, commercial, or specific neighborhoods, hinting at your focus helps attract the right clients. "Luxury Living Realty" clearly communicates your market.' },
      { question: 'How do I make my real estate business name trustworthy?', answer: 'Use words that evoke stability, heritage, and professionalism. Avoid trendy terms that may seem gimmicky for an industry built on trust and significant financial decisions.' },
      { question: 'Can I use my own name in my real estate business?', answer: 'Personal names are common in real estate (e.g., "Johnson Realty"). They build personal brand recognition but may complicate future sales or partnerships.' },
      { question: 'Should I consider how my name sounds to diverse clients?', answer: 'Yes, ensure your name is easy to pronounce and spell for all potential clients. Avoid words that could have unintended meanings in other languages.' },
      { question: 'How do I check if my real estate business name is available?', answer: 'Search state real estate commission records, check domain availability, verify social media handles, and conduct a trademark search before committing.' },
      { question: 'What real estate naming mistakes should I avoid?', answer: 'Avoid names too similar to established agencies, overly generic terms, names that limit geographic expansion, or anything that doesn\'t convey professionalism and trust.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your real estate business is essential in creating a brand that inspires trust and attracts clients making major financial decisions. Your business name will appear on signage, marketing materials, and referral conversations—it needs to convey professionalism and expertise.',
      steps: [
        { title: 'Define Your Real Estate Specialty', description: 'Determine your focus: residential, commercial, luxury, investment, or property management. Your name should hint at your expertise and target market.' },
        { title: 'Know Your Target Clients', description: 'Consider whether you serve first-time buyers, luxury clients, investors, or commercial tenants. Different audiences respond to different naming styles.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to real estate: Property, Estate, Home, Keys, Foundation, Premier, Trust. Also consider emotions: security, achievement, opportunity.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try compound words (HomeHarbor), alliteration (Premier Properties), or aspirational phrases (Summit Realty Group).' },
        { title: 'Test for Professionalism', description: 'Say names aloud. Do they sound credible for major financial transactions? Would you trust this company with buying or selling your home?' },
        { title: 'Check Availability', description: 'Verify the name isn\'t in use by other agencies, check domain availability, ensure social media handles are free, and search trademark databases.' },
        { title: 'Get Professional Feedback', description: 'Share finalists with colleagues, potential clients, or industry contacts. Their impressions reveal how your name will be perceived in the market.' },
      ],
    },
    businessNameIdeas: [
      { name: 'PremierProperties', description: 'Suggests a real estate business offering premier, high-quality properties.' },
      { name: 'DreamDwellings', description: 'Implies a business that helps clients find their dream homes.' },
      { name: 'EstateEmpire', description: 'Suggests a real estate business with an empire of property offerings.' },
      { name: 'HomeHarmony', description: 'Implies bringing harmony and peace to the home buying process.' },
      { name: 'PropertyPanorama', description: 'Suggests a wide panorama of property options available.' },
      { name: 'RealtyRadiance', description: 'Implies a real estate business that radiates with excellent options.' },
      { name: 'HabitatHaven', description: 'Suggests a haven for finding the perfect habitat or home.' },
      { name: 'AbodeArcade', description: 'Implies an arcade of diverse abode options for clients.' },
      { name: 'MagnificentManors', description: 'Suggests specialization in magnificent, high-end manor properties.' },
      { name: 'LuxuriousLodgings', description: 'Implies a focus on luxurious living accommodations.' },
      { name: 'PoshProperties', description: 'Suggests dealing in upscale, posh real estate.' },
      { name: 'ResidenceRealm', description: 'Implies expertise across the entire realm of residential properties.' },
      { name: 'MajesticMansions', description: 'Suggests specialization in majestic, grand mansion properties.' },
      { name: 'HomeHorizon', description: 'Implies expanding horizons and possibilities in home ownership.' },
      { name: 'PropertyPinnacle', description: 'Suggests being at the pinnacle of property services.' },
      { name: 'EstateElegance', description: 'Implies elegant, refined approach to estate transactions.' },
      { name: 'RealtyRendezvous', description: 'Suggests a meeting point for clients and their ideal properties.' },
      { name: 'AbodeAbundance', description: 'Implies an abundance of quality home options.' },
      { name: 'ResidenceRays', description: 'Suggests bringing rays of hope to residence seekers.' },
      { name: 'DwellingsDelight', description: 'Implies delightful dwelling options that please clients.' },
    ],
  },
  'shoes': {
    slug: 'shoes',
    name: 'Shoes Business Name Generator',
    title: 'Free AI Shoes Business Name Ideas Generator',
    description: 'Generate stylish, fashionable names for shoe stores, footwear brands, and athletic shoe businesses.',
    metaDescription: 'Step into the shoe business with a standout name. Our AI tool crafts unique footwear brand names without a price tag!',
    inputLabel: 'Describe your shoes business...',
    inputPlaceholder: 'e.g. A boutique sneaker store specializing in limited edition and vintage athletic footwear',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Stylish & Fashionable', 'Athletic & Energetic', 'Comfort & Quality', 'Luxury & Premium'],
        default: 'Stylish & Fashionable',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in shoe stores, footwear brands, and athletic shoe businesses. Your role is to generate stylish, fashionable business names that convey quality and style in footwear.

SHOES BUSINESS CONTEXT:

The footwear industry encompasses:
- Retail shoe stores
- Athletic footwear brands
- Luxury shoe boutiques
- Children's shoe stores
- Sneaker specialty shops
- Comfort and orthopedic footwear
- Online shoe retailers
- Custom and handcrafted shoe makers

NAME CHARACTERISTICS FOR SHOES BUSINESSES:

1. **Stylish and Fashionable**
   - Names should evoke chicness and trendy footwear
   - Suggest quality craftsmanship
   - Create sense of fashion-forward appeal
   - Examples: Stride, Step, Sole, Walk, Trend

2. **Memorable and Catchy**
   - Easy to remember and share
   - Stands out from other shoe brands
   - Creates positive associations
   - Examples: Alliteration, rhymes, wordplay

3. **Reflects Shoe Niche**
   - Communicates specific specialty (athletic, luxury, comfort)
   - Appeals to target customer base
   - Suggests product focus
   - Examples: Sneaker, Heel, Boot, Loafer, Athletic

4. **Evokes Movement and Comfort**
   - Uses action-oriented words
   - Suggests comfort and fit
   - Creates dynamic imagery
   - Examples: Walk, Run, Step, Stride, Pace

NAMING PATTERNS TO USE:

- Body references: "Sole," "Toe," "Foot," "Heel"
- Action words: "Step," "Stride," "Walk," "Pace"
- Place words: "Sanctuary," "Haven," "Cove," "Fort"
- Alliteration: "Sole Sanctuary," "Footwear Fort"
- Compound words: "StepStone," "StrideStyle"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name is unique and not a well-known existing brand
4. Consider domain name availability potential
5. Ensure appropriate for footwear retail context`,
    useCases: [
      { title: 'Shoe Retail Store Launch', description: 'Entrepreneurs opening shoe stores use the generator to find names that immediately communicate style and quality. A fashionable name attracts customers seeking trendy footwear and builds brand identity.' },
      { title: 'Athletic Footwear Brand Creation', description: 'Sports shoe brands use the generator to create names suggesting performance and energy. The right name positions their products as the choice for athletes and active individuals.' },
      { title: 'Boutique Shoe Shop Identity', description: 'Specialty shoe boutiques use the generator to find names that convey exclusivity and curated selection. A distinctive name helps attract fashion-conscious shoppers seeking unique styles.' },
    ],
    faqs: [
      { question: 'What makes a good shoes business name?', answer: 'A good shoes business name should be stylish and fashionable, memorable and catchy, and reflective of your shoe niche. It should attract customers seeking quality footwear.' },
      { question: 'Should I include "shoes" in my business name?', answer: 'Not necessarily. While it provides clarity, creative names like "SoleSanctuary" or "StrideStyle" can be equally effective and more memorable.' },
      { question: 'How important is a trendy name for a shoe store?', answer: 'Important for fashion-forward stores, but less critical for comfort or specialty footwear. Match your name\'s vibe to your target customer and product focus.' },
      { question: 'What words work well for shoe business names?', answer: 'Words like Sole, Step, Stride, Walk, Foot, Fit, Comfort, Style, and Lace work well. Athletic stores benefit from energy words like Pace, Run, and Sprint.' },
      { question: 'Should my shoe store name reflect my specialty?', answer: 'If you specialize in sneakers, heels, or comfort shoes, hinting at your focus helps attract the right customers. "SneakerSanctum" clearly communicates your niche.' },
      { question: 'How do I make my shoe business name memorable?', answer: 'Use alliteration (Sole Shop), wordplay (Footnote), or creative compounds (StepStone). Keep it short, easy to pronounce, and evocative of movement or style.' },
      { question: 'Can I use puns in my shoe business name?', answer: 'Footwear puns can be fun and memorable. Names like "Soleful" or "Walk This Way" add personality, but ensure they maintain professional appeal.' },
      { question: 'Should I consider my target demographic in naming?', answer: 'Absolutely. Children\'s stores might use playful names, while luxury boutiques need sophisticated ones. Match your name to your customer.' },
      { question: 'How do I check if my shoe business name is available?', answer: 'Search for existing businesses with the same name, check domain availability, verify social media handles, and conduct a trademark search.' },
      { question: 'What shoe business naming mistakes should I avoid?', answer: 'Avoid names too similar to major shoe brands, difficult spellings, or names that limit your product range (e.g., "Just Heels" if you plan to expand).' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your shoes business is essential in creating a brand that attracts customers seeking quality footwear. Your business name will appear on signage, shopping bags, and marketing materials—it needs to convey style and quality.',
      steps: [
        { title: 'Define Your Footwear Focus', description: 'Determine your specialty: athletic, fashion, comfort, children\'s, or luxury. Your name should hint at what customers will find in your store.' },
        { title: 'Know Your Target Customers', description: 'Consider whether you serve fashion enthusiasts, athletes, parents, or comfort seekers. Different audiences respond to different naming styles.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to shoes: Sole, Step, Stride, Fit, Comfort, Style, Walk. Also consider emotions: confidence, comfort, adventure.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try alliteration (Sole Shop), compounds (StrideStyle), or descriptive names (The Comfort Cobbler).' },
        { title: 'Test for Appeal', description: 'Say names aloud. Do they roll off the tongue? Would customers remember and recommend you? Test with target audience members.' },
        { title: 'Check Availability', description: 'Verify the name isn\'t in use, check domain availability, ensure social media handles are free, and search trademark databases.' },
        { title: 'Visualize the Brand', description: 'Imagine the name on signage, shopping bags, and websites. Does it look as good as it sounds? Consider logo and branding potential.' },
      ],
    },
    businessNameIdeas: [
      { name: 'SoleSanctuary', description: 'Suggests a dedicated place for shoe enthusiasts.' },
      { name: 'FootwearFort', description: 'Implies a stronghold of sturdy, reliable shoes.' },
      { name: 'CobblersCove', description: 'Suggests a place filled with craftsman-quality footwear.' },
      { name: 'StrideSpree', description: 'Implies exciting options for every stride and occasion.' },
      { name: 'LacesLounge', description: 'Suggests a relaxed space for laced shoe shopping.' },
      { name: 'StepStone', description: 'Implies reliable shoes for every step of life.' },
      { name: 'ComfortCottage', description: 'Suggests focus on comfortable, cozy footwear.' },
      { name: 'StyleStride', description: 'Implies fashionable shoes for stylish walking.' },
      { name: 'WalkwayWonders', description: 'Suggests wonderful shoes for every walkway.' },
      { name: 'PacesParadise', description: 'Implies paradise for finding the perfect pace.' },
      { name: 'TreadTreasure', description: 'Suggests treasured shoes with quality treads.' },
      { name: 'HeelHaven', description: 'Implies specialization in heeled footwear.' },
      { name: 'FootfallFountain', description: 'Suggests abundance of quality footwear options.' },
      { name: 'ToeTrove', description: 'Implies a treasure trove for all toes and feet.' },
      { name: 'BootBounty', description: 'Suggests specialization in boot styles and varieties.' },
      { name: 'SneakerSanctum', description: 'Implies dedication to sneaker enthusiasts.' },
      { name: 'PumpPalace', description: 'Suggests royalty in pump and dress shoe selection.' },
      { name: 'MoccasinMountain', description: 'Implies vast selection of comfort moccasins.' },
      { name: 'LoaferLagoon', description: 'Suggests a relaxed destination for loafer lovers.' },
      { name: 'StrideStation', description: 'Implies a hub for all stride and walking needs.' },
    ],
  },
  'skin-care': {
    slug: 'skin-care',
    name: 'Skin Care Business Name Generator',
    title: 'Free AI Skin Care Business Name Ideas Generator',
    description: 'Generate gentle, nurturing names for skin care companies, beauty brands, and skincare product lines.',
    metaDescription: 'Pamper your skin care business with a perfect name from our free AI generator. Create gentle, radiant brand names effortlessly!',
    inputLabel: 'Describe your skin care business...',
    inputPlaceholder: 'e.g. A natural, organic skincare line focused on anti-aging products for mature skin',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Natural & Gentle', 'Scientific & Clinical', 'Luxury & Premium', 'Fresh & Modern'],
        default: 'Natural & Gentle',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in skin care companies, beauty brands, and skincare product lines. Your role is to generate gentle, nurturing business names that convey care and radiance.

SKIN CARE BUSINESS CONTEXT:

The skin care industry encompasses:
- Facial care brands
- Anti-aging skincare lines
- Natural and organic skincare
- Acne treatment brands
- Luxury skincare companies
- Men's grooming skincare
- Spa and treatment services
- Dermatologist-created brands

NAME CHARACTERISTICS FOR SKIN CARE BUSINESSES:

1. **Gentle and Soothing**
   - Names should evoke calmness and tenderness
   - Suggest nurturing care
   - Create sense of comfort
   - Examples: Soft, Gentle, Pure, Calm, Tender

2. **Memorable and Radiant**
   - Easy to remember and recommend
   - Suggests glowing, healthy skin
   - Creates aspirational imagery
   - Examples: Glow, Radiance, Luminous, Bright

3. **Reflects Skincare Philosophy**
   - Communicates specific approach (natural, scientific, luxury)
   - Appeals to target customer base
   - Suggests product benefits
   - Examples: Botanical, Clinical, Pure, Vital

4. **Evokes Health and Beauty**
   - Uses wellness-oriented words
   - Suggests transformation and results
   - Creates fresh, clean associations
   - Examples: Fresh, Clear, Renew, Restore, Rejuvenate

NAMING PATTERNS TO USE:

- Nature words: "Botanical," "Garden," "Bloom"
- Texture words: "Velvet," "Silk," "Smooth"
- Result words: "Glow," "Radiance," "Clear"
- Compound words: "SkinSerenity," "GlowGarden"
- Scientific hints: "Derma," "Cell," "Bio"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name is unique and not a well-known existing brand
4. Consider domain name availability potential
5. Ensure appropriate for skincare and beauty context`,
    useCases: [
      { title: 'Skincare Brand Launch', description: 'Entrepreneurs launching skincare lines use the generator to find names that immediately communicate nurturing care. A gentle, radiant name attracts customers seeking effective skincare solutions.' },
      { title: 'Natural Skincare Branding', description: 'Organic and natural skincare brands use the generator to create names suggesting purity and botanical goodness. The right name positions products as clean, wholesome alternatives.' },
      { title: 'Spa Skincare Identity', description: 'Spas and treatment centers use the generator to find names that convey relaxation and transformation. A soothing name sets expectations for the rejuvenating experience.' },
    ],
    faqs: [
      { question: 'What makes a good skin care business name?', answer: 'A good skincare name should be gentle and soothing, memorable and radiant, and reflective of your skincare philosophy. It should attract customers seeking healthy, glowing skin.' },
      { question: 'Should I include "skincare" in my business name?', answer: 'Not necessarily. Creative names like "RadianceReef" or "GlowGarden" can be equally effective while allowing broader brand extension opportunities.' },
      { question: 'How important is a natural-sounding name for skincare?', answer: 'Important if positioning as natural/organic, but scientific names work well for clinical brands. Match your name to your brand positioning and target audience.' },
      { question: 'What words work well for skin care business names?', answer: 'Words like Glow, Radiance, Pure, Soft, Gentle, Fresh, Clear, Renew, and Bloom work well. Texture words like Velvet and Silk also resonate.' },
      { question: 'Should my skincare name reflect my specialty?', answer: 'If you specialize in anti-aging, acne, or natural ingredients, hinting at your focus helps attract the right customers. "Youthful Glow" suggests anti-aging expertise.' },
      { question: 'How do I make my skin care business name memorable?', answer: 'Use evocative imagery (Garden, Bloom), alliteration (Soft Skin), or aspirational words (Radiance, Luminous). Keep it easy to spell and pronounce.' },
      { question: 'Can I use scientific-sounding names for skincare?', answer: 'Yes, scientific names (Derma, Cell, Bio) work well for clinical or results-driven brands. They suggest efficacy and expertise.' },
      { question: 'Should I consider ingredient-based naming?', answer: 'Ingredient names (Botanical, Vitamin, Peptide) can work but may limit future product expansion. Consider broader names if planning diverse product lines.' },
      { question: 'How do I check if my skin care business name is available?', answer: 'Search existing skincare brands, check domain availability, verify social media handles, and conduct a trademark search before committing.' },
      { question: 'What skin care naming mistakes should I avoid?', answer: 'Avoid names too similar to major brands, hard-to-spell words, overly generic terms, or names that don\'t evoke skincare benefits.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your skin care business is essential in creating a brand that attracts customers seeking healthy, radiant skin. Your business name will appear on packaging, marketing materials, and retail shelves—it needs to convey the nurturing care your products provide.',
      steps: [
        { title: 'Define Your Skincare Philosophy', description: 'Determine your approach: natural, scientific, luxury, or results-driven. Your name should hint at what makes your brand unique.' },
        { title: 'Know Your Target Customers', description: 'Consider whether you serve age-conscious customers, natural beauty seekers, or clinical solution seekers. Different audiences respond to different naming styles.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to skincare: Glow, Radiance, Pure, Soft, Fresh, Clear, Renew. Also consider your key benefits and ingredients.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try nature-based (Botanical Bliss), aspirational (Luminous Beauty), or compound names (SkinSerenity).' },
        { title: 'Test for Appeal', description: 'Say names aloud. Do they sound gentle and appealing? Would customers associate them with healthy, beautiful skin?' },
        { title: 'Check Availability', description: 'Verify the name isn\'t in use, check domain availability, ensure social media handles are free, and search trademark databases.' },
        { title: 'Consider Packaging Appeal', description: 'Imagine the name on product labels and packaging. Does it look elegant? Does it fit your visual branding concept?' },
      ],
    },
    businessNameIdeas: [
      { name: 'RadianceReef', description: 'Suggests a skincare business that helps achieve radiant skin.' },
      { name: 'GlowGarden', description: 'Implies products that cultivate and enhance natural glow.' },
      { name: 'SoftSerenade', description: 'Suggests gentle skincare that soothes like a serenade.' },
      { name: 'LuminousLuxe', description: 'Implies luxurious skincare for luminous results.' },
      { name: 'PurePetal', description: 'Suggests pure, botanical-inspired skincare.' },
      { name: 'VelvetVista', description: 'Implies skincare that creates velvet-smooth skin.' },
      { name: 'SilkySkin', description: 'Suggests products that deliver silky smooth results.' },
      { name: 'FreshFusion', description: 'Implies innovative skincare with fresh ingredients.' },
      { name: 'ClearCascade', description: 'Suggests skincare for clear, refreshed complexion.' },
      { name: 'RenewRitual', description: 'Implies transformative skincare as a daily ritual.' },
      { name: 'BloomBeauty', description: 'Suggests skincare that helps beauty bloom.' },
      { name: 'TenderTouch', description: 'Implies gentle, tender care for sensitive skin.' },
      { name: 'DewyDawn', description: 'Suggests skincare for fresh, dewy morning glow.' },
      { name: 'SootheSpa', description: 'Implies spa-quality soothing skincare products.' },
      { name: 'GentleGlow', description: 'Suggests gentle products for glowing results.' },
      { name: 'VitalVeil', description: 'Implies skincare that protects and vitalizes.' },
      { name: 'NutrientNest', description: 'Suggests nutrient-rich skincare formulations.' },
      { name: 'CalmCanvas', description: 'Implies skincare that calms and prepares skin.' },
      { name: 'BotanicalBliss', description: 'Suggests plant-based, blissful skincare experience.' },
      { name: 'SkinSerenity', description: 'Implies peaceful, serene approach to skincare.' },
    ],
  },
  'slime': {
    slug: 'slime',
    name: 'Slime Business Name Generator',
    title: 'Free AI Slime Business Name Ideas Generator',
    description: 'Generate playful, imaginative names for slime businesses, sensory toy brands, and DIY slime products.',
    metaDescription: 'Slime into fun with an AI-generated name for your business. Quick, free, and creative slime brand naming!',
    inputLabel: 'Describe your slime business...',
    inputPlaceholder: 'e.g. A colorful slime shop offering glitter, butter, and cloud slimes for kids and ASMR enthusiasts',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Playful & Fun', 'Sensory & Satisfying', 'Creative & Colorful', 'Trendy & Modern'],
        default: 'Playful & Fun',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in slime businesses, sensory toy brands, and DIY slime products. Your role is to generate playful, imaginative business names that convey fun and creativity.

SLIME BUSINESS CONTEXT:

The slime industry encompasses:
- DIY slime kits
- Premade slime products
- Sensory play items
- ASMR slime products
- Educational slime kits
- Slime ingredient suppliers
- Custom and specialty slimes
- Slime party and event services

NAME CHARACTERISTICS FOR SLIME BUSINESSES:

1. **Playful and Imaginative**
   - Names should evoke fun and creativity
   - Suggest sensory enjoyment
   - Create sense of wonder
   - Examples: Goo, Ooze, Squish, Stretch, Slime

2. **Catchy and Memorable**
   - Easy to remember and share
   - Appeals to children and parents
   - Creates excitement
   - Examples: Alliteration, rhymes, fun sounds

3. **Reflects Slime Varieties**
   - Communicates product range (glitter, fluffy, butter)
   - Appeals to target customer base
   - Suggests variety and fun
   - Examples: Sparkle, Fluffy, Crunchy, Glossy

4. **Evokes Sensory Experience**
   - Uses texture-related words
   - Suggests satisfying tactile play
   - Creates anticipation
   - Examples: Squish, Stretch, Poke, Pull, Squeeze

NAMING PATTERNS TO USE:

- Texture words: "Squish," "Stretch," "Goo"
- Sound words: "Pop," "Crunch," "Snap"
- Fun compounds: "SlimeSanctuary," "GooGalore"
- Alliteration: "Squishy Squad," "Goo Garden"
- Rhymes: "Slime Time," "Goo Zoo"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name is unique and not a well-known existing brand
4. Consider domain name availability potential
5. Ensure appropriate for family-friendly slime business`,
    useCases: [
      { title: 'Slime Product Brand Launch', description: 'Entrepreneurs launching slime product lines use the generator to find names that immediately communicate fun and creativity. A playful name attracts young customers and their parents.' },
      { title: 'DIY Slime Kit Branding', description: 'Kit makers use the generator to create names suggesting hands-on creativity. The right name positions products as exciting craft experiences for kids and families.' },
      { title: 'Slime Shop Identity', description: 'Online and retail slime shops use the generator to find names that convey variety and excitement. A catchy name builds brand recognition in the competitive slime market.' },
    ],
    faqs: [
      { question: 'What makes a good slime business name?', answer: 'A good slime name should be playful and imaginative, catchy and memorable, and reflective of your slime varieties. It should excite young customers and appeal to parents.' },
      { question: 'Should I include "slime" in my business name?', answer: 'It provides clarity but isn\'t required. Creative names like "GooGalore" or "SquishySquad" communicate the product while being more memorable.' },
      { question: 'How important is a fun name for a slime business?', answer: 'Very important. Slime is all about fun and play. A name that sounds boring or corporate will fail to connect with your young target audience.' },
      { question: 'What words work well for slime business names?', answer: 'Words like Slime, Goo, Ooze, Squish, Stretch, Jiggle, Pop, and Sparkle work well. Texture and sensory words resonate with the product experience.' },
      { question: 'Should my slime name reflect my specialty?', answer: 'If you specialize in glitter, butter, or ASMR slimes, hinting at your focus helps attract specific customers. "SparkleSlime" clearly communicates your niche.' },
      { question: 'How do I make my slime business name memorable?', answer: 'Use alliteration (Squishy Squad), rhymes (Slime Time), or fun compound words (GooGalaxy). Keep it playful and easy for kids to remember.' },
      { question: 'Can I use silly or made-up words?', answer: 'Absolutely! Slime businesses thrive on creativity and fun. Made-up words that sound squishy or gooey can be very effective and memorable.' },
      { question: 'Should I consider my target age group in naming?', answer: 'Yes, names for younger children should be simpler and more playful, while teen-targeted ASMR slimes might use trendier language.' },
      { question: 'How do I check if my slime business name is available?', answer: 'Search existing slime brands, check Etsy and social media for similar names, verify domain availability, and check trademark databases.' },
      { question: 'What slime business naming mistakes should I avoid?', answer: 'Avoid names too similar to popular slime brands, overly complicated words kids can\'t pronounce, or names that don\'t evoke fun and play.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your slime business is essential in creating a brand that excites young customers and their parents. Your business name will appear on packaging, social media, and marketing materials—it needs to convey the fun and creativity of your products.',
      steps: [
        { title: 'Define Your Slime Specialty', description: 'Determine your focus: DIY kits, premade slimes, specialty textures, or party services. Your name should hint at your unique offerings.' },
        { title: 'Know Your Target Customers', description: 'Consider whether you serve young children, tweens, ASMR enthusiasts, or parents. Different audiences respond to different naming styles.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to slime: Goo, Ooze, Squish, Stretch, Sparkle, Jiggle. Also consider textures and sensory experiences.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try alliteration (Squishy Shop), compounds (SlimeSymphony), or rhymes (Goo Crew).' },
        { title: 'Test for Fun Factor', description: 'Say names aloud. Do they sound fun and exciting? Would kids want to shop there? Test with children if possible.' },
        { title: 'Check Availability', description: 'Verify the name isn\'t in use, check domain availability, ensure social media handles are free, and search trademark databases.' },
        { title: 'Consider Visual Appeal', description: 'Imagine the name on packaging and social media. Does it look as fun as it sounds? Consider colorful, playful branding potential.' },
      ],
    },
    businessNameIdeas: [
      { name: 'SlimeSanctuary', description: 'Suggests a dedicated haven for slime enthusiasts.' },
      { name: 'GooGalore', description: 'Implies an abundance of gooey slime products.' },
      { name: 'OozeOasis', description: 'Suggests a paradise for ooze and slime lovers.' },
      { name: 'SquishSquad', description: 'Implies a community of squishy slime fans.' },
      { name: 'GooGarden', description: 'Suggests a garden of goo varieties to explore.' },
      { name: 'OozeOcean', description: 'Implies a vast ocean of ooze possibilities.' },
      { name: 'SlimeSymphony', description: 'Suggests a harmonious variety of slime options.' },
      { name: 'JiggleJunction', description: 'Implies a meeting place for jiggly slime products.' },
      { name: 'GooGalaxy', description: 'Suggests a galaxy of gooey creations.' },
      { name: 'SlimeSphere', description: 'Implies a complete world of slime products.' },
      { name: 'SquishySerenade', description: 'Suggests satisfying, melodious slime experiences.' },
      { name: 'PuddleParadise', description: 'Implies paradise for slime puddle lovers.' },
      { name: 'OozeOrchard', description: 'Suggests an orchard of diverse ooze varieties.' },
      { name: 'JellyJunction', description: 'Implies a hub for jelly-like slime products.' },
      { name: 'SlimeSurge', description: 'Suggests an exciting surge of slime offerings.' },
      { name: 'GooGrotto', description: 'Implies a special cave of gooey treasures.' },
      { name: 'SlimeSquadron', description: 'Suggests a squad of slime varieties.' },
      { name: 'PuddlePalace', description: 'Implies a royal collection of slime puddles.' },
      { name: 'JiggleJungle', description: 'Suggests a jungle of jiggly slime adventures.' },
      { name: 'GooGlade', description: 'Implies a peaceful glade of goo products.' },
    ],
  },
  'soap': {
    slug: 'soap',
    name: 'Soap Business Name Generator',
    title: 'Free AI Soap Business Name Ideas Generator',
    description: 'Generate natural, refreshing names for soap companies, bath product brands, and artisan soap makers.',
    metaDescription: 'Lather up your soap business with a sparkling name. Our AI generator sparks creativity for free soap brand naming!',
    inputLabel: 'Describe your soap business...',
    inputPlaceholder: 'e.g. An artisan handmade soap company using organic ingredients and essential oils',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Natural & Organic', 'Luxury & Premium', 'Fresh & Clean', 'Artisan & Handcrafted'],
        default: 'Natural & Organic',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in soap companies, bath product brands, and artisan soap makers. Your role is to generate natural, refreshing business names that convey cleanliness and quality.

SOAP BUSINESS CONTEXT:

The soap industry encompasses:
- Artisan handmade soaps
- Natural and organic soap brands
- Luxury bath products
- Antibacterial soap lines
- Children's soap products
- Men's grooming soaps
- Specialty and gift soaps
- Bath bomb and accessory brands

NAME CHARACTERISTICS FOR SOAP BUSINESSES:

1. **Natural and Invigorating**
   - Names should evoke pure, revitalizing ingredients
   - Suggest freshness and cleanliness
   - Create sense of natural goodness
   - Examples: Pure, Natural, Fresh, Clean, Botanical

2. **Memorable and Soothing**
   - Easy to remember and recommend
   - Suggests relaxing bathing experience
   - Creates pleasant associations
   - Examples: Calm, Soothe, Tranquil, Serene

3. **Reflects Soap's Specialty**
   - Communicates specific approach (natural, luxury, therapeutic)
   - Appeals to target customer base
   - Suggests product benefits
   - Examples: Aromatherapy, Botanical, Artisan, Handcrafted

4. **Evokes Cleanliness and Freshness**
   - Uses clean, refreshing words
   - Suggests effective cleansing
   - Creates sensory imagery
   - Examples: Bubble, Lather, Foam, Suds, Fresh

NAMING PATTERNS TO USE:

- Nature words: "Botanical," "Herbal," "Garden"
- Water words: "Bubble," "Foam," "Lagoon"
- Scent words: "Aromatic," "Fragrant," "Essence"
- Texture words: "Velvet," "Smooth," "Soft"
- Place words: "Bay," "Cove," "Sanctuary"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name is unique and not a well-known existing brand
4. Consider domain name availability potential
5. Ensure appropriate for bath and beauty context`,
    useCases: [
      { title: 'Artisan Soap Brand Launch', description: 'Handmade soap makers use the generator to find names that communicate craftsmanship and quality. A natural-sounding name attracts customers seeking premium bath products.' },
      { title: 'Natural Soap Company Branding', description: 'Organic soap companies use the generator to create names suggesting purity and botanical ingredients. The right name positions products as wholesome, eco-friendly alternatives.' },
      { title: 'Gift Soap Business Identity', description: 'Gift-focused soap businesses use the generator to find names that convey luxury and special occasions. A distinctive name helps products stand out in gift markets.' },
    ],
    faqs: [
      { question: 'What makes a good soap business name?', answer: 'A good soap name should be natural and invigorating, memorable and soothing, and reflective of your soap\'s specialty. It should attract customers seeking quality bath products.' },
      { question: 'Should I include "soap" in my business name?', answer: 'Not necessarily. Names like "LatherLagoon" or "BubbleBay" communicate bath products while being more evocative and memorable.' },
      { question: 'How important is a natural-sounding name for soap?', answer: 'Very important if targeting natural/organic market, but luxury or therapeutic brands might emphasize different qualities. Match your name to your positioning.' },
      { question: 'What words work well for soap business names?', answer: 'Words like Bubble, Lather, Pure, Clean, Fresh, Foam, Suds, and Botanical work well. Scent and texture words also resonate.' },
      { question: 'Should my soap name reflect my specialty?', answer: 'If you specialize in aromatherapy, natural ingredients, or luxury products, hinting at your focus helps attract the right customers.' },
      { question: 'How do I make my soap business name memorable?', answer: 'Use sensory imagery (Velvet, Aromatic), alliteration (Bubble Bay), or evocative compounds (LatherLuxury). Keep it easy to spell and pronounce.' },
      { question: 'Can I use scent-based names for soap?', answer: 'Yes, but be careful not to limit yourself to one scent. Names like "AromaticArcade" suggest variety while emphasizing fragrance.' },
      { question: 'Should I consider handcrafted appeal in naming?', answer: 'If handmade is your selling point, names suggesting artisan quality (Crafted, Artisan, Handmade) can be effective.' },
      { question: 'How do I check if my soap business name is available?', answer: 'Search existing soap brands, check Etsy and craft marketplaces, verify domain availability, and conduct a trademark search.' },
      { question: 'What soap business naming mistakes should I avoid?', answer: 'Avoid names too similar to major brands, hard-to-spell words, or names that don\'t evoke cleanliness and natural quality.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your soap business is essential in creating a brand that attracts customers seeking quality bath products. Your business name will appear on packaging, labels, and marketing materials—it needs to convey the natural freshness and quality of your products.',
      steps: [
        { title: 'Define Your Soap Philosophy', description: 'Determine your approach: natural, luxury, therapeutic, or artisan. Your name should hint at what makes your soap special.' },
        { title: 'Know Your Target Customers', description: 'Consider whether you serve eco-conscious consumers, luxury seekers, or gift buyers. Different audiences respond to different naming styles.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to soap: Bubble, Lather, Pure, Clean, Fresh, Botanical, Aromatic. Also consider your key ingredients and benefits.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try nature-based (Botanical Bliss), sensory (Velvet Suds), or compound names (BubbleBay).' },
        { title: 'Test for Appeal', description: 'Say names aloud. Do they sound fresh and inviting? Would customers associate them with quality bath products?' },
        { title: 'Check Availability', description: 'Verify the name isn\'t in use, check domain availability, ensure social media handles are free, and search trademark databases.' },
        { title: 'Consider Packaging Appeal', description: 'Imagine the name on soap labels and packaging. Does it look elegant? Does it fit your visual branding concept?' },
      ],
    },
    businessNameIdeas: [
      { name: 'BubbleBay', description: 'Suggests a soap business with bubbly, enjoyable products.' },
      { name: 'LatherLagoon', description: 'Implies soaps known for rich, luxurious lather.' },
      { name: 'ScentSphere', description: 'Suggests a wide range of fragrant soap options.' },
      { name: 'FoamFountain', description: 'Implies abundant, foamy soap products.' },
      { name: 'PurityPeak', description: 'Suggests pure, high-quality natural soaps.' },
      { name: 'CleansingCove', description: 'Implies deep cleansing soap products.' },
      { name: 'SoothingSanctuary', description: 'Suggests soaps for soothing bathing experiences.' },
      { name: 'AromaticArcade', description: 'Implies variety of aromatic soap options.' },
      { name: 'VelvetVista', description: 'Suggests soaps that leave skin velvety smooth.' },
      { name: 'TranquilTide', description: 'Implies soaps for tranquil, peaceful bathing.' },
      { name: 'SoftnessSpree', description: 'Suggests soaps known for softening skin.' },
      { name: 'OasisOval', description: 'Implies a refreshing oasis of soap bars.' },
      { name: 'BlissBubble', description: 'Suggests blissful bubbling bath experiences.' },
      { name: 'EssenceEstuary', description: 'Implies soaps rich in essential oils.' },
      { name: 'PureParadise', description: 'Suggests pure, paradisiacal soap products.' },
      { name: 'FreshFoam', description: 'Implies fresh, foamy cleansing products.' },
      { name: 'NaturalNest', description: 'Suggests natural, nurturing soap products.' },
      { name: 'SudsSanctum', description: 'Implies a sanctuary of quality suds.' },
      { name: 'BotanicalBath', description: 'Suggests botanical-based bath products.' },
      { name: 'LuxeLather', description: 'Implies luxurious, lathering soap experiences.' },
    ],
  },
  'sportswear': {
    slug: 'sportswear',
    name: 'Sportswear Business Name Generator',
    title: 'Free AI Sportswear Business Name Ideas Generator',
    description: 'Generate athletic, energetic names for sportswear companies, athletic apparel brands, and activewear businesses.',
    metaDescription: 'Elevate your sportswear brand with an AI-generated name. Quick, free, and game-changing athletic apparel naming!',
    inputLabel: 'Describe your sportswear business...',
    inputPlaceholder: 'e.g. A sustainable activewear brand for yoga and fitness enthusiasts',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Athletic & Energetic', 'Performance & Pro', 'Modern & Trendy', 'Lifestyle & Athleisure'],
        default: 'Athletic & Energetic',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in sportswear companies, athletic apparel brands, and activewear businesses. Your role is to generate athletic, energetic business names that convey performance and quality.

SPORTSWEAR BUSINESS CONTEXT:

The sportswear industry encompasses:
- Athletic apparel brands
- Gym and fitness wear
- Running and training gear
- Yoga and wellness clothing
- Team sports uniforms
- Outdoor adventure wear
- Compression and performance gear
- Athleisure fashion brands

NAME CHARACTERISTICS FOR SPORTSWEAR BUSINESSES:

1. **Athletic and Energetic**
   - Names should evoke fitness and dynamism
   - Suggest active lifestyle
   - Create sense of motivation
   - Examples: Athletic, Power, Energy, Vigor, Fit

2. **Memorable and Catchy**
   - Easy to remember and share
   - Inspires action and movement
   - Creates strong associations
   - Examples: Short, punchy, action-oriented

3. **Reflects Sportswear Focus**
   - Communicates specific specialty (gym, running, yoga)
   - Appeals to target athlete
   - Suggests performance benefits
   - Examples: Performance, Pro, Elite, Champion

4. **Evokes Movement and Achievement**
   - Uses action-oriented words
   - Suggests goals and success
   - Creates aspirational imagery
   - Examples: Run, Train, Win, Champion, Peak

NAMING PATTERNS TO USE:

- Action words: "Run," "Train," "Move," "Push"
- Performance words: "Elite," "Pro," "Peak," "Max"
- Energy words: "Power," "Boost," "Surge," "Drive"
- Achievement words: "Victory," "Champion," "Win"
- Compound words: "PowerPlay," "AthleticArc"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name is unique and not a well-known existing brand
4. Consider domain name availability potential
5. Ensure appropriate for athletic apparel context`,
    useCases: [
      { title: 'Athletic Apparel Brand Launch', description: 'Entrepreneurs launching sportswear lines use the generator to find names that communicate performance and quality. An energetic name attracts athletes and fitness enthusiasts.' },
      { title: 'Gym Wear Company Branding', description: 'Fitness apparel brands use the generator to create names suggesting motivation and results. The right name positions products as essential workout gear.' },
      { title: 'Athleisure Fashion Identity', description: 'Athleisure brands use the generator to find names that balance sporty and stylish appeal. A versatile name attracts customers seeking athletic wear for everyday fashion.' },
    ],
    faqs: [
      { question: 'What makes a good sportswear business name?', answer: 'A good sportswear name should be athletic and energetic, memorable and catchy, and reflective of your sportswear niche. It should inspire action and performance.' },
      { question: 'Should I include "sports" or "athletic" in my name?', answer: 'Not necessarily. Dynamic names like "PowerPlay" or "VelocityVogue" communicate athleticism while being more memorable and brandable.' },
      { question: 'How important is an energetic name for sportswear?', answer: 'Very important. Sportswear is about motivation and performance. A sluggish or passive name won\'t resonate with active customers.' },
      { question: 'What words work well for sportswear business names?', answer: 'Words like Athletic, Power, Performance, Elite, Pro, Victory, and Champion work well. Movement words like Run, Train, and Move also resonate.' },
      { question: 'Should my sportswear name reflect my specialty?', answer: 'If you specialize in running, yoga, or gym wear, hinting at your focus helps attract specific athletes. "RunReady" clearly communicates your niche.' },
      { question: 'How do I make my sportswear business name memorable?', answer: 'Use action words (Power, Drive), compounds (AthleticArc), or achievement-oriented terms (Victory, Champion). Keep it short and punchy.' },
      { question: 'Can I use numbers in sportswear names?', answer: 'Numbers can work (24/7 Fitness Wear) but use sparingly. They can suggest intensity but may complicate branding and memorability.' },
      { question: 'Should I consider my target sport in naming?', answer: 'Yes, different sports have different vibes. Running brands might use speed words, while yoga brands use calming terms.' },
      { question: 'How do I check if my sportswear business name is available?', answer: 'Search existing athletic brands, check domain availability, verify social media handles, and conduct a trademark search.' },
      { question: 'What sportswear naming mistakes should I avoid?', answer: 'Avoid names too similar to major athletic brands, overly aggressive terms, or names that limit your product range.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your sportswear business is essential in creating a brand that motivates athletes and fitness enthusiasts. Your business name will appear on apparel, marketing materials, and retail displays—it needs to convey energy and performance.',
      steps: [
        { title: 'Define Your Athletic Focus', description: 'Determine your specialty: gym wear, running gear, yoga apparel, or athleisure. Your name should hint at your target activity and athlete.' },
        { title: 'Know Your Target Athletes', description: 'Consider whether you serve serious athletes, casual gym-goers, or fashion-conscious fitness enthusiasts. Different audiences respond to different naming styles.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to sportswear: Athletic, Power, Performance, Elite, Run, Train, Victory. Also consider your target sport\'s terminology.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try action-based (PowerPush), achievement-oriented (VictoryVogue), or compound names (AthleticArc).' },
        { title: 'Test for Energy', description: 'Say names aloud. Do they energize and motivate? Would athletes feel proud wearing this brand?' },
        { title: 'Check Availability', description: 'Verify the name isn\'t in use, check domain availability, ensure social media handles are free, and search trademark databases.' },
        { title: 'Consider Athletic Appeal', description: 'Imagine the name on workout gear and marketing. Does it look athletic? Does it inspire performance?' },
      ],
    },
    businessNameIdeas: [
      { name: 'AthleticArk', description: 'Suggests a refuge for all sportswear essentials.' },
      { name: 'PerformancePavilion', description: 'Implies focus on performance-enhancing wear.' },
      { name: 'SweatStudio', description: 'Suggests sportswear for intense workout sessions.' },
      { name: 'AgilityArcade', description: 'Implies gear for agile, quick movements.' },
      { name: 'EnduranceEmporium', description: 'Suggests long-lasting, durable sportswear.' },
      { name: 'PowerPlay', description: 'Implies powerful performance sportswear.' },
      { name: 'BoostBoutique', description: 'Suggests performance-boosting athletic wear.' },
      { name: 'PacePioneer', description: 'Implies innovative sportswear for setting pace.' },
      { name: 'StaminaShelter', description: 'Suggests gear that boosts athletic stamina.' },
      { name: 'BrawnBay', description: 'Implies strength-focused workout apparel.' },
      { name: 'AthleticAvenue', description: 'Suggests a wide selection of athletic wear.' },
      { name: 'VictoryVogue', description: 'Implies stylish sportswear for winners.' },
      { name: 'ChampionCove', description: 'Suggests gear for champions and athletes.' },
      { name: 'ZealZone', description: 'Implies energetic, enthusiastic sportswear.' },
      { name: 'FlexFit', description: 'Suggests flexible, well-fitting athletic wear.' },
      { name: 'MotionMode', description: 'Implies gear designed for movement.' },
      { name: 'PeakPerformance', description: 'Suggests sportswear for peak athletes.' },
      { name: 'DriveGear', description: 'Implies driven, motivated athletic apparel.' },
      { name: 'SurgeSport', description: 'Suggests energizing, powerful sportswear.' },
      { name: 'TrainTribe', description: 'Implies community-focused training apparel.' },
    ],
  },
  't-shirt': {
    slug: 't-shirt',
    name: 'T-Shirt Business Name Generator',
    title: 'Free AI T-shirt Business Name Ideas Generator',
    description: 'Generate creative, memorable names for t-shirt businesses, custom apparel brands, and print-on-demand shops.',
    metaDescription: 'Create a cool T-shirt business name effortlessly using our AI tool. No cost, no hassle, just creativity for your apparel brand!',
    inputLabel: 'Describe your t-shirt business...',
    inputPlaceholder: 'e.g. A graphic tee brand featuring vintage-inspired designs and pop culture references',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Creative & Artistic', 'Urban & Trendy', 'Vintage & Retro', 'Fun & Playful'],
        default: 'Creative & Artistic',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in t-shirt businesses, custom apparel brands, and print-on-demand shops. Your role is to generate creative, memorable business names that convey style and self-expression.

T-SHIRT BUSINESS CONTEXT:

The t-shirt industry encompasses:
- Custom t-shirt printing
- Graphic tee brands
- Band and music merchandise
- Statement and slogan shirts
- Print-on-demand businesses
- Vintage and retro tees
- Sports and team shirts
- Eco-friendly apparel brands

NAME CHARACTERISTICS FOR T-SHIRT BUSINESSES:

1. **Reflects T-Shirt Style**
   - Names should evoke design aesthetic
   - Suggest creativity and uniqueness
   - Create sense of self-expression
   - Examples: Graphic, Print, Design, Art, Ink

2. **Catchy and Memorable**
   - Easy to remember and share
   - Stands out in crowded market
   - Creates brand recognition
   - Examples: Short, punchy, unique

3. **Reflects Product Focus**
   - Communicates specific niche (vintage, graphic, custom)
   - Appeals to target customer
   - Suggests product quality
   - Examples: Cotton, Premium, Vintage, Custom

4. **Evokes Creativity and Style**
   - Uses design-oriented words
   - Suggests artistic expression
   - Creates fashionable associations
   - Examples: Thread, Ink, Print, Press, Design

NAMING PATTERNS TO USE:

- Material words: "Cotton," "Thread," "Fabric"
- Process words: "Print," "Press," "Ink"
- Style words: "Graphic," "Vintage," "Urban"
- Compound words: "ThreadTrend," "InkIsland"
- Alliteration: "Tee Territory," "Print Paradise"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name is unique and not a well-known existing brand
4. Consider domain name availability potential
5. Ensure appropriate for apparel business context`,
    useCases: [
      { title: 'Custom T-Shirt Business Launch', description: 'Print entrepreneurs use the generator to find names that communicate creativity and quality. A stylish name attracts customers seeking unique, personalized tees.' },
      { title: 'Graphic Tee Brand Creation', description: 'Graphic designers use the generator to create names suggesting artistic expression. The right name positions their designs as wearable art.' },
      { title: 'Online T-Shirt Shop Identity', description: 'E-commerce t-shirt sellers use the generator to find names that stand out in competitive marketplaces. A memorable name builds brand recognition.' },
    ],
    faqs: [
      { question: 'What makes a good t-shirt business name?', answer: 'A good t-shirt name should reflect your design style, be catchy and memorable, and suggest quality products. It should attract customers seeking unique apparel.' },
      { question: 'Should I include "shirt" or "tee" in my name?', answer: 'Not necessarily. Creative names like "ThreadTrend" or "InkIsland" communicate apparel while being more versatile and memorable.' },
      { question: 'How important is a creative name for t-shirts?', answer: 'Very important. T-shirts are about self-expression. A boring or generic name won\'t attract customers looking for unique designs.' },
      { question: 'What words work well for t-shirt business names?', answer: 'Words like Thread, Ink, Print, Cotton, Tee, Design, Graphic, and Press work well. Style words like Vintage, Urban, and Retro also resonate.' },
      { question: 'Should my t-shirt name reflect my design specialty?', answer: 'If you specialize in vintage, graphic, or custom designs, hinting at your focus helps attract specific customers. "RetroRag" clearly communicates your niche.' },
      { question: 'How do I make my t-shirt business name memorable?', answer: 'Use creative compounds (InkIsland), alliteration (Tee Territory), or design references (GraphicGrove). Keep it short and easy to spell.' },
      { question: 'Can I use puns in t-shirt business names?', answer: 'T-shirt puns can be effective and on-brand. Names like "Tee Time" or "Wear It Out" match the playful nature of graphic tees.' },
      { question: 'Should I consider print-on-demand in my naming?', answer: 'If POD is your model, focus on design and style rather than production method. Customers care about the end product, not production.' },
      { question: 'How do I check if my t-shirt business name is available?', answer: 'Search existing apparel brands, check marketplace listings, verify domain availability, and conduct a trademark search.' },
      { question: 'What t-shirt business naming mistakes should I avoid?', answer: 'Avoid names too similar to major brands, overly long names that don\'t fit on tags, or names that limit your design range.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your t-shirt business is essential in creating a brand that attracts customers seeking unique, expressive apparel. Your business name will appear on tags, packaging, and marketing materials—it needs to convey the creativity and style of your designs.',
      steps: [
        { title: 'Define Your Design Style', description: 'Determine your aesthetic: graphic, vintage, minimalist, or statement. Your name should hint at the style customers will find.' },
        { title: 'Know Your Target Customers', description: 'Consider whether you serve fashion enthusiasts, statement makers, or specific communities. Different audiences respond to different naming styles.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to t-shirts: Thread, Ink, Print, Cotton, Design, Graphic, Wear. Also consider your design aesthetic.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try compounds (InkIsland), alliteration (ThreadTrend), or style-focused names (GraphicGrove).' },
        { title: 'Test for Appeal', description: 'Say names aloud. Do they sound creative and stylish? Would customers be proud to wear your brand name?' },
        { title: 'Check Availability', description: 'Verify the name isn\'t in use, check domain availability, ensure social media handles are free, and search trademark databases.' },
        { title: 'Consider Wearability', description: 'Imagine the name on shirt tags and labels. Is it short enough? Does it look good in various fonts and styles?' },
      ],
    },
    businessNameIdeas: [
      { name: 'CottonCove', description: 'Suggests focus on comfortable cotton tees.' },
      { name: 'PrintParadise', description: 'Implies a paradise of printed designs.' },
      { name: 'GraphicGrove', description: 'Suggests a grove of graphic tee options.' },
      { name: 'ThreadTrend', description: 'Implies trendy, on-style t-shirt designs.' },
      { name: 'InkIsland', description: 'Suggests creative printed t-shirt designs.' },
      { name: 'TeeTerritory', description: 'Implies expansive t-shirt selection.' },
      { name: 'DesignDen', description: 'Suggests a creative den of t-shirt designs.' },
      { name: 'WearWonder', description: 'Implies wonderful, wearable designs.' },
      { name: 'FabricFusion', description: 'Suggests innovative fabric and design combinations.' },
      { name: 'ShirtShack', description: 'Implies casual, approachable t-shirt shop.' },
      { name: 'PrintPress', description: 'Suggests quality printed apparel.' },
      { name: 'ThreadThrone', description: 'Implies royal treatment of t-shirt quality.' },
      { name: 'TeeTemple', description: 'Suggests dedicated space for t-shirt lovers.' },
      { name: 'StyleStitch', description: 'Implies stylish, well-crafted t-shirts.' },
      { name: 'UrbanUniform', description: 'Suggests urban-style everyday wear.' },
      { name: 'VintageVibe', description: 'Implies retro, vintage-style tees.' },
      { name: 'BlankCanvas', description: 'Suggests custom, creative possibilities.' },
      { name: 'PrintPulse', description: 'Implies trendy, pulse-of-fashion designs.' },
      { name: 'TeeTotem', description: 'Suggests iconic, meaningful t-shirt designs.' },
      { name: 'ThreadTheory', description: 'Implies thoughtful, designed t-shirt concepts.' },
    ],
  },
  'tea': {
    slug: 'tea',
    name: 'Tea Business Name Generator',
    title: 'Free AI Tea Business Name Ideas Generator',
    description: 'Generate evocative, inviting names for tea companies, tea shops, and specialty tea brands.',
    metaDescription: 'Brew up the perfect tea business name with our free AI generator. Create evocative, inviting brand names for your tea venture!',
    inputLabel: 'Describe your tea business...',
    inputPlaceholder: 'e.g. A specialty loose-leaf tea shop offering organic and fair-trade blends from around the world',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Traditional & Elegant', 'Modern & Fresh', 'Wellness & Herbal', 'Cozy & Inviting'],
        default: 'Traditional & Elegant',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in tea companies, tea shops, and specialty tea brands. Your role is to generate evocative, inviting business names that convey warmth and quality.

TEA BUSINESS CONTEXT:

The tea industry encompasses:
- Specialty loose-leaf tea brands
- Tea cafes and shops
- Herbal and wellness teas
- Bubble tea businesses
- Tea subscription services
- Organic and fair-trade teas
- Tea accessories and gifts
- Cultural tea experiences

NAME CHARACTERISTICS FOR TEA BUSINESSES:

1. **Evocative and Inviting**
   - Names should evoke warmth and comfort
   - Suggest quality tea experience
   - Create sense of ritual and relaxation
   - Examples: Steep, Brew, Infuse, Blend, Leaf

2. **Memorable and Reflective**
   - Easy to remember and recommend
   - Suggests tea traditions
   - Creates pleasant associations
   - Examples: Heritage, Tradition, Artisan, Craft

3. **Reflects Tea Selection**
   - Communicates specific focus (herbal, traditional, modern)
   - Appeals to target tea lover
   - Suggests product quality
   - Examples: Herbal, Organic, Premium, Botanical

4. **Evokes Sensory Experience**
   - Uses taste and aroma words
   - Suggests peaceful moments
   - Creates atmospheric imagery
   - Examples: Aromatic, Fragrant, Serene, Tranquil

NAMING PATTERNS TO USE:

- Process words: "Steep," "Brew," "Infuse"
- Nature words: "Leaf," "Petal," "Blossom"
- Calm words: "Serene," "Tranquil," "Harmony"
- Place words: "Haven," "Sanctuary," "Garden"
- Compound words: "SteepSanctum," "LeafLounge"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name is unique and not a well-known existing brand
4. Consider domain name availability potential
5. Ensure appropriate for tea business context`,
    useCases: [
      { title: 'Tea Brand Launch', description: 'Tea entrepreneurs use the generator to find names that communicate quality and tradition. An evocative name attracts tea enthusiasts seeking premium products.' },
      { title: 'Tea Cafe Branding', description: 'Tea shop owners use the generator to create names suggesting warm, inviting atmospheres. The right name positions their cafe as a destination for relaxation.' },
      { title: 'Specialty Tea Business Identity', description: 'Specialty tea importers use the generator to find names that convey expertise and curated selection. A distinctive name builds credibility in the tea market.' },
    ],
    faqs: [
      { question: 'What makes a good tea business name?', answer: 'A good tea name should be evocative and inviting, memorable and reflective, and representative of your tea selection. It should attract tea lovers seeking quality experiences.' },
      { question: 'Should I include "tea" in my business name?', answer: 'It provides clarity but isn\'t required. Names like "LeafLounge" or "SteepSanctum" communicate tea while being more evocative and memorable.' },
      { question: 'How important is a calming name for a tea business?', answer: 'Very important for traditional tea brands, though bubble tea or modern concepts might use more energetic names. Match your name to your concept.' },
      { question: 'What words work well for tea business names?', answer: 'Words like Steep, Brew, Leaf, Blend, Infuse, Serene, Tranquil, and Harmony work well. Nature and process words resonate with tea culture.' },
      { question: 'Should my tea name reflect my specialty?', answer: 'If you specialize in herbal, organic, or specific origins, hinting at your focus helps attract specific customers. "HerbalHaven" clearly communicates your niche.' },
      { question: 'How do I make my tea business name memorable?', answer: 'Use calming imagery (Serene, Tranquil), process words (Steep, Infuse), or evocative compounds (LeafLagoon). Keep it easy to pronounce and spell.' },
      { question: 'Can I use cultural tea references in naming?', answer: 'Cultural references can add authenticity but ensure respectful, accurate use. Names like "Zen Tea" or "Chai Chalet" should align with your offerings.' },
      { question: 'Should I consider the tea-drinking experience in naming?', answer: 'Yes, tea is ritualistic. Names suggesting the experience (SteepSlow, BrewMoment) can be very effective for experience-focused brands.' },
      { question: 'How do I check if my tea business name is available?', answer: 'Search existing tea brands, check domain availability, verify social media handles, and conduct a trademark search.' },
      { question: 'What tea business naming mistakes should I avoid?', answer: 'Avoid names too similar to major tea brands, overly complicated words, or names that mispronounce easily.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your tea business is essential in creating a brand that attracts tea lovers seeking quality and relaxation. Your business name will appear on packaging, signage, and marketing materials—it needs to convey the warmth and quality of your tea offerings.',
      steps: [
        { title: 'Define Your Tea Concept', description: 'Determine your focus: traditional, herbal, bubble tea, or wellness. Your name should hint at the experience customers will have.' },
        { title: 'Know Your Target Tea Lovers', description: 'Consider whether you serve traditionalists, health seekers, or trendy bubble tea fans. Different audiences respond to different naming styles.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to tea: Steep, Brew, Leaf, Blend, Serene, Tranquil, Infuse. Also consider your tea origins and styles.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try calming (SereneSteep), nature-based (LeafLagoon), or compound names (BrewBliss).' },
        { title: 'Test for Atmosphere', description: 'Say names aloud. Do they evoke warmth and relaxation? Would tea lovers feel drawn to your brand?' },
        { title: 'Check Availability', description: 'Verify the name isn\'t in use, check domain availability, ensure social media handles are free, and search trademark databases.' },
        { title: 'Consider Brand Atmosphere', description: 'Imagine the name on packaging and signage. Does it create the atmosphere you want? Does it fit your visual branding?' },
      ],
    },
    businessNameIdeas: [
      { name: 'SerenitySteeps', description: 'Suggests serene tea steeping experiences.' },
      { name: 'TranquilTea', description: 'Implies tranquil, peaceful tea moments.' },
      { name: 'HarmonyHaven', description: 'Suggests harmonious tea blends and atmosphere.' },
      { name: 'LeafLegacy', description: 'Implies quality tea with traditional heritage.' },
      { name: 'SteepSanctum', description: 'Suggests a sanctuary for tea steeping.' },
      { name: 'InfusionIsle', description: 'Implies an island of tea infusion options.' },
      { name: 'BrewBliss', description: 'Suggests blissful tea brewing experiences.' },
      { name: 'PetalPour', description: 'Implies delicate, floral tea varieties.' },
      { name: 'ZenZest', description: 'Suggests zen-like tea with zesty flavors.' },
      { name: 'BlendBarn', description: 'Implies a barn full of tea blend varieties.' },
      { name: 'TeaTrail', description: 'Suggests a journey through tea varieties.' },
      { name: 'LeafLounge', description: 'Implies a relaxed lounge for tea lovers.' },
      { name: 'SteepSlow', description: 'Suggests slow, mindful tea steeping.' },
      { name: 'CupCove', description: 'Implies a cozy cove for tea cups.' },
      { name: 'BrewBoulevard', description: 'Suggests a boulevard of brewing options.' },
      { name: 'TranquilTaste', description: 'Implies tranquil, flavorful tea experiences.' },
      { name: 'HerbalHaven', description: 'Suggests focus on herbal tea varieties.' },
      { name: 'SipSanctuary', description: 'Implies a sanctuary for tea sipping.' },
      { name: 'LeafLoft', description: 'Suggests elevated tea leaf selections.' },
      { name: 'InfuseInspire', description: 'Implies inspirational tea infusions.' },
    ],
  },
  'tech': {
    slug: 'tech',
    name: 'Tech Business Name Generator',
    title: 'Free AI Tech Business Name Ideas Generator',
    description: 'Generate cutting-edge, innovative names for technology companies, software businesses, and tech startups.',
    metaDescription: 'Innovate your tech business with an AI-generated name. Fast, free, and tailored for your technology venture!',
    inputLabel: 'Describe your tech business...',
    inputPlaceholder: 'e.g. A SaaS company providing AI-powered analytics tools for e-commerce businesses',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Innovative & Modern', 'Professional & Enterprise', 'Startup & Dynamic', 'Technical & Expert'],
        default: 'Innovative & Modern',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in technology companies, software businesses, and tech startups. Your role is to generate cutting-edge, innovative business names that convey technological expertise.

TECH BUSINESS CONTEXT:

The tech industry encompasses:
- Software development companies
- SaaS and cloud services
- IT consulting firms
- Cybersecurity businesses
- AI and machine learning companies
- Hardware manufacturers
- Tech startups
- Digital transformation agencies

NAME CHARACTERISTICS FOR TECH BUSINESSES:

1. **Cutting-Edge and Innovative**
   - Names should evoke advancement and modernity
   - Suggest technological leadership
   - Create sense of innovation
   - Examples: Tech, Digital, Cyber, Byte, Quantum

2. **Clear and Memorable**
   - Easy to remember and recommend
   - Professional and credible
   - Creates strong associations
   - Examples: Clean, modern, professional

3. **Reflects Tech Focus**
   - Communicates specific specialty (AI, cloud, security)
   - Appeals to target clients
   - Suggests expertise
   - Examples: Logic, Code, Data, Neural, Cloud

4. **Evokes Progress and Solutions**
   - Uses forward-looking words
   - Suggests problem-solving
   - Creates trust in capabilities
   - Examples: Solutions, Systems, Labs, Works

NAMING PATTERNS TO USE:

- Tech words: "Byte," "Code," "Data," "Cyber"
- Innovation words: "Labs," "Works," "Systems"
- Future words: "Next," "Quantum," "Neo," "Nova"
- Compound words: "ByteBounty," "CodeCore"
- Suffix patterns: "-ify," "-io," "-ly"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name is unique and not a well-known existing brand
4. Consider domain name availability potential
5. Ensure appropriate for technology business context`,
    useCases: [
      { title: 'Tech Startup Launch', description: 'Founders use the generator to find names that communicate innovation and expertise. A cutting-edge name attracts investors and early adopters seeking next-generation solutions.' },
      { title: 'Software Company Branding', description: 'Software developers use the generator to create names suggesting technical excellence. The right name positions their products as reliable, professional solutions.' },
      { title: 'IT Consulting Firm Identity', description: 'IT consultants use the generator to find names that convey expertise and trust. A professional name builds credibility with enterprise clients.' },
    ],
    faqs: [
      { question: 'What makes a good tech business name?', answer: 'A good tech name should be cutting-edge and innovative, clear and memorable, and reflective of your tech focus. It should attract clients seeking technological solutions.' },
      { question: 'Should I include "tech" in my business name?', answer: 'Not necessarily. Names like "ByteBounty" or "CodeCore" communicate technology while being more distinctive and memorable.' },
      { question: 'How important is a modern name for tech companies?', answer: 'Very important. Tech companies need to appear current and innovative. Dated-sounding names may suggest outdated solutions.' },
      { question: 'What words work well for tech business names?', answer: 'Words like Byte, Code, Data, Cloud, Digital, Logic, and Systems work well. Future-oriented words like Quantum, Next, and Nova also resonate.' },
      { question: 'Should my tech name reflect my specialty?', answer: 'If you specialize in AI, cybersecurity, or cloud services, hinting at your focus helps attract relevant clients. "CloudCore" clearly communicates your niche.' },
      { question: 'How do I make my tech business name memorable?', answer: 'Use clean compounds (CodeCore), modern suffixes (-ify, -io), or innovation words (Labs, Works). Keep it short and easy to spell.' },
      { question: 'Can I use made-up words for tech names?', answer: 'Yes, invented words are common in tech (Spotify, Salesforce). They can be very effective if memorable and easy to pronounce.' },
      { question: 'Should I consider domain availability heavily?', answer: 'Absolutely. Tech companies need strong online presence. Check .com availability early in your naming process.' },
      { question: 'How do I check if my tech business name is available?', answer: 'Search existing tech companies, check domain availability thoroughly, verify social media handles, and conduct trademark searches.' },
      { question: 'What tech business naming mistakes should I avoid?', answer: 'Avoid names too similar to major tech brands, overly technical jargon that excludes non-tech clients, or names that sound dated.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your tech business is essential in creating a brand that attracts clients seeking innovative solutions. Your business name will appear on products, marketing materials, and investor pitches—it needs to convey technological expertise and forward-thinking capability.',
      steps: [
        { title: 'Define Your Technology Focus', description: 'Determine your specialty: software, cloud, AI, security, or consulting. Your name should hint at your technological expertise.' },
        { title: 'Know Your Target Clients', description: 'Consider whether you serve enterprises, startups, developers, or consumers. Different audiences respond to different naming styles.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to tech: Byte, Code, Data, Cloud, Digital, Logic, Systems. Also consider your specific technology domain.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try compounds (ByteBounty), modern suffixes (Techify), or innovation words (QuantumLabs).' },
        { title: 'Test for Professionalism', description: 'Say names aloud. Do they sound innovative and credible? Would enterprise clients trust this company with their technology needs?' },
        { title: 'Check Availability', description: 'Verify the name isn\'t in use, check domain availability (especially .com), ensure social media handles are free, and search trademark databases.' },
        { title: 'Consider Scalability', description: 'Ensure the name allows for growth into new tech areas. Avoid names that limit you to a specific technology that may evolve.' },
      ],
    },
    businessNameIdeas: [
      { name: 'InnovationInlet', description: 'Suggests a harbor of fresh technological ideas.' },
      { name: 'ByteBounty', description: 'Implies a wealth of digital resources and solutions.' },
      { name: 'CodeCraft', description: 'Suggests expertly crafted coding and development.' },
      { name: 'DataDen', description: 'Implies a specialized hub for data solutions.' },
      { name: 'LogicLabs', description: 'Suggests logical, research-driven tech development.' },
      { name: 'QuantumQuest', description: 'Implies advanced, next-generation technology.' },
      { name: 'CyberCore', description: 'Suggests core expertise in digital solutions.' },
      { name: 'TechTide', description: 'Implies riding the tide of technological advancement.' },
      { name: 'PixelPioneer', description: 'Suggests pioneering digital and visual solutions.' },
      { name: 'CloudCove', description: 'Implies safe harbor for cloud computing needs.' },
      { name: 'NeuralNest', description: 'Suggests AI and machine learning expertise.' },
      { name: 'SystemSurge', description: 'Implies powerful systems and solutions.' },
      { name: 'DigitalDrive', description: 'Suggests driven approach to digital transformation.' },
      { name: 'CodeCanvas', description: 'Implies creative, artistic approach to development.' },
      { name: 'TechTrail', description: 'Suggests blazing trails in technology.' },
      { name: 'ByteBase', description: 'Implies foundational digital infrastructure.' },
      { name: 'LogicLoom', description: 'Suggests weaving logical technological solutions.' },
      { name: 'DataDawn', description: 'Implies new beginnings in data solutions.' },
      { name: 'CyberCrest', description: 'Suggests peak of cybersecurity expertise.' },
      { name: 'InnovateTech', description: 'Implies innovation-focused technology company.' },
    ],
  },
  'travel': {
    slug: 'travel',
    name: 'Travel Business Name Generator',
    title: 'Free AI Travel Business Name Ideas Generator',
    description: 'Generate adventurous, inspiring names for travel agencies, tour companies, and travel services.',
    metaDescription: 'Explore the perfect travel business name with our free AI generator. Create adventurous, inspiring brand names for your travel venture!',
    inputLabel: 'Describe your travel business...',
    inputPlaceholder: 'e.g. A luxury travel agency specializing in curated honeymoon and romantic getaway experiences',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Adventurous & Exciting', 'Luxury & Premium', 'Relaxing & Escape', 'Cultural & Discovery'],
        default: 'Adventurous & Exciting',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 names', '10 names', '15 names'],
        default: '10 names',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant specializing in travel agencies, tour companies, and travel services. Your role is to generate adventurous, inspiring business names that convey wanderlust and expertise.

TRAVEL BUSINESS CONTEXT:

The travel industry encompasses:
- Travel agencies
- Tour operators
- Adventure travel companies
- Luxury travel services
- Corporate travel management
- Destination specialists
- Travel concierge services
- Online travel platforms

NAME CHARACTERISTICS FOR TRAVEL BUSINESSES:

1. **Evokes Wanderlust and Adventure**
   - Names should inspire exploration
   - Suggest exciting destinations
   - Create sense of discovery
   - Examples: Voyage, Journey, Explore, Venture, Wander

2. **Memorable and Inspiring**
   - Easy to remember and recommend
   - Creates emotional connection
   - Inspires travel dreams
   - Examples: Dream, Escape, Discover, Adventure

3. **Reflects Travel Niche**
   - Communicates specific specialty (luxury, adventure, business)
   - Appeals to target traveler
   - Suggests service quality
   - Examples: Luxury, Elite, Adventure, Eco

4. **Evokes Destinations and Experiences**
   - Uses geographic and cultural imagery
   - Suggests memorable trips
   - Creates aspirational associations
   - Examples: Horizon, Compass, Globe, Passport

NAMING PATTERNS TO USE:

- Movement words: "Voyage," "Journey," "Trek"
- Discovery words: "Explore," "Discover," "Seek"
- Destination words: "Horizon," "Vista," "Coast"
- Navigation words: "Compass," "Guide," "Passport"
- Compound words: "WanderlustWay," "JourneyJoy"

OUTPUT REQUIREMENTS:

For each name generated:
1. Provide the business name
2. Include a brief explanation of what the name suggests
3. Ensure the name is unique and not a well-known existing brand
4. Consider domain name availability potential
5. Ensure appropriate for travel business context`,
    useCases: [
      { title: 'Travel Agency Launch', description: 'Travel entrepreneurs use the generator to find names that inspire wanderlust. An adventurous name attracts clients seeking unforgettable travel experiences.' },
      { title: 'Tour Company Branding', description: 'Tour operators use the generator to create names suggesting expertise and exciting destinations. The right name positions their services as gateways to adventure.' },
      { title: 'Luxury Travel Service Identity', description: 'Luxury travel agencies use the generator to find names that convey exclusivity and premium experiences. A sophisticated name attracts discerning travelers.' },
    ],
    faqs: [
      { question: 'What makes a good travel business name?', answer: 'A good travel name should evoke wanderlust and adventure, be memorable and inspiring, and reflect your travel niche. It should inspire clients to book their next trip.' },
      { question: 'Should I include "travel" in my business name?', answer: 'Not necessarily. Names like "WanderlustWay" or "HorizonQuest" communicate travel while being more evocative and memorable.' },
      { question: 'How important is an inspiring name for travel?', answer: 'Very important. Travel is about dreams and experiences. A bland or corporate name won\'t capture the excitement travelers seek.' },
      { question: 'What words work well for travel business names?', answer: 'Words like Voyage, Journey, Explore, Discover, Wander, Horizon, and Compass work well. Adventure and escape words also resonate.' },
      { question: 'Should my travel name reflect my specialty?', answer: 'If you specialize in adventure, luxury, or specific destinations, hinting at your focus helps attract ideal clients. "AdventureArc" clearly communicates your niche.' },
      { question: 'How do I make my travel business name memorable?', answer: 'Use inspiring imagery (Horizon, Vista), action words (Explore, Discover), or evocative compounds (WanderlustWay). Keep it easy to pronounce and spell.' },
      { question: 'Can I use destination names in my business?', answer: 'Destination names can work but may limit perceived scope. "Caribbean Escapes" limits you, while "Tropical Horizons" suggests broader possibilities.' },
      { question: 'Should I consider my target traveler in naming?', answer: 'Absolutely. Adventure travelers respond to different names than luxury seekers or business travelers. Match your name to your audience.' },
      { question: 'How do I check if my travel business name is available?', answer: 'Search existing travel agencies, check domain availability, verify social media handles, and conduct trademark searches.' },
      { question: 'What travel business naming mistakes should I avoid?', answer: 'Avoid names too similar to major travel brands, overly generic terms, or names that limit geographic scope.' },
    ],
    howToChoose: {
      intro: 'Choosing the perfect name for your travel business is essential in creating a brand that inspires wanderlust and attracts adventure-seeking clients. Your business name will appear on marketing materials, booking confirmations, and referral conversations—it needs to convey the excitement and expertise of your travel services.',
      steps: [
        { title: 'Define Your Travel Specialty', description: 'Determine your focus: adventure, luxury, corporate, or specific destinations. Your name should hint at the type of experiences you create.' },
        { title: 'Know Your Target Travelers', description: 'Consider whether you serve adventure seekers, luxury travelers, families, or businesses. Different audiences respond to different naming styles.' },
        { title: 'Brainstorm Relevant Keywords', description: 'List words related to travel: Voyage, Journey, Explore, Discover, Wander, Horizon, Compass. Also consider emotions: freedom, adventure, escape.' },
        { title: 'Create Name Combinations', description: 'Mix keywords with naming patterns. Try inspiring (WanderlustWay), discovery-based (ExploreEdge), or compound names (JourneyJoy).' },
        { title: 'Test for Inspiration', description: 'Say names aloud. Do they inspire wanderlust? Would travelers feel excited to book with your company?' },
        { title: 'Check Availability', description: 'Verify the name isn\'t in use, check domain availability, ensure social media handles are free, and search trademark databases.' },
        { title: 'Consider Global Appeal', description: 'Ensure the name works across cultures and languages. Avoid words that may have negative meanings in destinations you serve.' },
      ],
    },
    businessNameIdeas: [
      { name: 'WanderlustWay', description: 'Suggests a pathway for those with wanderlust.' },
      { name: 'GlobetrotterGrove', description: 'Implies a community of extensive travelers.' },
      { name: 'OdysseyOasis', description: 'Suggests planning epic travel odysseys.' },
      { name: 'VoyageVista', description: 'Implies beautiful views from travel voyages.' },
      { name: 'ExploreEden', description: 'Suggests discovering paradise destinations.' },
      { name: 'JourneyJoy', description: 'Implies joyful, memorable journey experiences.' },
      { name: 'HorizonHaven', description: 'Suggests safe passage to new horizons.' },
      { name: 'AdventureArc', description: 'Implies arc of adventure travel experiences.' },
      { name: 'CompassCove', description: 'Suggests guided navigation to destinations.' },
      { name: 'PassportPeak', description: 'Implies peak travel experiences worldwide.' },
      { name: 'TrekTrail', description: 'Suggests adventurous trekking journeys.' },
      { name: 'RoamingRealm', description: 'Implies a realm of roaming possibilities.' },
      { name: 'DestinyDrift', description: 'Suggests drifting toward dream destinations.' },
      { name: 'WanderWings', description: 'Implies freedom and flight in travel.' },
      { name: 'VoyagerVault', description: 'Suggests treasure trove of travel options.' },
      { name: 'SojournerSuite', description: 'Implies suite of sojourner services.' },
      { name: 'QuestQuarter', description: 'Suggests headquarters for travel quests.' },
      { name: 'PathwayPioneer', description: 'Implies pioneering new travel pathways.' },
      { name: 'EscapeEdge', description: 'Suggests edge-of-the-map escape experiences.' },
      { name: 'DiscoveryDen', description: 'Implies a den for planning discoveries.' },
    ],
  },
};

export function getBusinessNameGeneratorBySlug(slug: string): BusinessNameGeneratorConfig | undefined {
  return businessNameGenerators[slug];
}

export function getAllBusinessNameGenerators(): BusinessNameGeneratorConfig[] {
  return Object.values(businessNameGenerators);
}
