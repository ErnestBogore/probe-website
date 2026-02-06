// Chinese (zh) Business Name Generator Configurations
// Auto-generated translations from English source

import { BusinessNameGeneratorConfig } from '../business-name-generators-config';

export const businessNameGeneratorsZh: Record<string, BusinessNameGeneratorConfig> = {
  // ==================== CHINESE (zh) TRANSLATION - BATCH 1 (1-5) ====================

  'aesthetic': {
    slug: 'aesthetic',
    name: '美学企业名称生成器',
    title: '免费 AI 美学企业名称创意生成器',
    description: '为医疗美容院、诊所和美容机构生成优雅、精致的名称。',
    metaDescription: '使用我们的AI驱动生成器，为您的美学企业发现一个迷人的名称。为医疗美容院、诊所和美容机构创建优雅、精致的名称。免费且易于使用！',
    inputLabel: '描述您的美学企业...',
    inputPlaceholder: '例如：一家提供肉毒素、激光治疗和皮肤护理的高端医疗美容院，位于上海',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['优雅 & 精致', '现代 & 简约', '临床 & 专业', '奢华 & 高端'],
        default: '优雅 & 精致',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the aesthetic, beauty, and wellness industry. Your role is to generate sophisticated, elegant business names that evoke beauty, refinement, and visual appeal for aesthetic clinics, med spas, skincare practices, beauty treatments, and wellness centers.

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

2. **Visual and Sensory Appeal**
   - Names that create mental imagery of beauty and aesthetics
   - Words associated with light, glow, clarity, and perfection

3. **Trust and Professionalism**
   - Medical aesthetic businesses need credibility markers
   - Balance between clinical authority and approachable beauty

4. **Memorability and Uniqueness**
   - Stand out in the competitive aesthetic market
   - Easy to pronounce and spell

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for an aesthetic business

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      {
        title: '医疗美容诊所开业',
        description: '皮肤科医生、整形外科医生和美容从业者在开设新诊所时，使用美学企业名称生成器来寻找兼具医疗公信力和美容吸引力的名称。通过输入他们的专业方向——肉毒素、激光治疗或抗衰老服务——该工具会生成精致的名称，既能吸引高端客户，又能保持专业权威。',
      },
      {
        title: '医疗水疗中心品牌重塑',
        description: '希望提升品牌定位的成熟医疗水疗中心使用该生成器来探索新的命名方案。无论是从普通水疗中心转型为医疗美容方向，还是简单地刷新品牌形象，该工具都能提供传达奢华、专业和蜕变感的名称——这些是在高端美容市场竞争的关键要素。',
      },
      {
        title: '护肤诊所差异化定位',
        description: '美容师和护肤专业人士使用美学企业名称生成器来创建独特的品牌形象，使自己在竞争中脱颖而出。通过生成反映其独特治疗理念的名称——无论是有机、临床还是整体疗法——他们能建立令人难忘的品牌，与目标客户产生共鸣。',
      },
    ],
    faqs: [
      { question: '什么样的美学企业名称才算好？', answer: '好的美学企业名称应体现优雅、精致和魅力。它应该令人难忘且具有描述性，传达您提供的服务类型——护肤、美容治疗或养生服务。名称应易于记忆，并传达客户可以期待的蜕变体验。' },
      { question: '我的美学企业名称应该包含"诊所"或"水疗"吗？', answer: '包含"诊所"、"水疗"、"工作室"或"美学"等描述词可以帮助立即明确您的企业类型。"诊所"暗示医疗级别的治疗，而"水疗"则意味着放松和呵护。请根据您的服务重点和目标市场定位来选择。' },
      { question: '名称对美学企业品牌建设有多重要？', answer: '您的企业名称是品牌形象的基础。在美容行业中，客户追求蜕变和奢华，您的名称创造了他们对即将获得的体验的第一印象。一个精致的名称可以证明高端定价的合理性，并吸引挑剔的客户群。' },
      { question: '如何让我的美学企业名称独一无二？', answer: '组合不同类别的词汇（美容+地点、蜕变+奢华），使用希腊语或拉丁语元素，创建复合词，或添加地理位置描述。避免使用通用术语和可能过时的流行词汇。' },
      { question: '美学企业名称必须给人奢华感吗？', answer: '不一定，但大多数美学企业都受益于高端定位。即使是平价诊所也可以使用有追求感的语言。但请确保您的名称与您的价格和定位相匹配，以避免期望落差。' },
      { question: '可以在美学企业名称中使用外来词吗？', answer: '法语和意大利语词汇（Belle、Maison、Bella、Via）可以增添优雅和精致感。但请确保这些词在您的本地市场中易于发音，不会造成关于企业类型或位置的混淆。' },
      { question: '命名美学企业时应避免哪些错误？', answer: '避免：过于临床化而显得冷淡的名称、可能很快过时的时髦拼写、与竞争对手过于相似的名称、难以拼写的词汇、限制服务扩展的名称，以及任何可能被误读或误解的内容。' },
      { question: '应该在企业名称中包含个人姓名吗？', answer: '包含您的名字可以建立个人信誉和信任，特别是对于医疗专业人员。但这可能会使未来的出售或扩张变得复杂。请根据您的长期目标，考虑"李医生美学"与"光彩美学诊所"之间的取舍。' },
      { question: '名称如何影响我的线上营销？', answer: '您的企业名称影响线上可发现性。独特的名称更容易在搜索排名中脱颖而出，而通用名称可能会淹没在搜索结果中。在选择时还要考虑域名和社交媒体账号的可用性。' },
      { question: '以后可以更改美学企业名称吗？', answer: '可以，但品牌重塑涉及大量成本和潜在的品牌认知度损失风险。最好现在就花时间找到合适的名称。如果必须更改，请规划一个完整的过渡方案，包括客户沟通。' },
    ],
    howToChoose: {
      intro: '为您的美学企业选择完美的名称，是创建能引起客户共鸣的品牌的关键一步——这些客户追求美丽、蜕变和自我提升。您的企业名称将出现在门店招牌、网站、社交媒体资料、营销材料和客户推荐中。它是潜在客户与您的品牌的第一个接触点，因此选择一个体现优雅、专业和蜕变体验的名称至关重要。',
      steps: [
        { title: '明确品牌定位和目标市场', description: '在生成名称创意之前，请明确您的美学企业的独特定位。考虑您将提供哪些具体的美容服务（医疗级治疗、放松型水疗服务、皮肤护理或组合服务）、您的理想客户是谁（年龄范围、收入水平、美容目标）、您希望品牌唤起什么情感（奢华、信任、蜕变、宁静、自信）、您的价格和体验定位（高端、中端、轻奢）以及什么让您的诊所与该地区的竞争对手不同。' },
        { title: '体现优雅与魅力', description: '美学行业的核心是美丽、提升和蜕变。您的企业名称应通过精致的用词来反映这些品质，创造即时的正面联想。考虑唤起视觉美感和精致感的名称、暗示蜕变和提升的名称、营造奢华和独特感的名称、说出来悦耳动听的名称以及书写出来优雅美观的名称。与光（璀璨、焕彩、晶莹）、蜕变（焕新、重塑、升华）和精致（臻美、卓越、雅致）相关的词汇在美学企业命名中表现一致出色。' },
        { title: '平衡美感与专业信誉', description: '对于提供注射、激光手术或体型塑造等治疗的医疗美学企业，您的名称必须在美感吸引力和专业信誉之间取得平衡。客户需要对您的专业能力充满信心，同时被您提供的美学体验所吸引。考虑加入"诊所"、"医学美容"或"研究所"等专业指标。但避免听起来过于临床或医院化的名称，因为那会让人感到冷漠和不友好。' },
        { title: '确保记忆力和辨识度', description: '在竞争激烈的美容市场中，您的名称必须脱颖而出，同时容易记住。用以下标准测试潜在名称：听一次后能否轻松记住？它是否与您所在地区的竞争对手有明显区别？一次接触后能否记住？在口碑推荐中是否效果好？是否足够简洁，适合放在招牌和营销材料上？' },
        { title: '验证品牌可用性', description: '一旦有了有前景的候选名称，请进行全面的可用性检查。如果可能，获取.com域名版本，或考虑.cn、.clinic或特定地区的域名。检查微信公众号、微博、小红书和其他美容企业活跃的平台。确认该名称尚未被注册。确保在您的服务类别中不存在商标冲突。' },
        { title: '与目标受众测试', description: '在最终确定之前，与代表您目标客户群的人测试您的首选名称。询问他们该名称暗示什么类型的企业、它感觉是高端、平价还是介于两者之间、他们是否愿意向朋友推荐这家企业、他们想象这家企业提供什么服务，以及该名称对于美容治疗是否感觉值得信赖。' },
        { title: '考虑长期增长', description: '选择一个能适应未来扩展的名称。虽然您可能从面部治疗开始，但以后可能会增加体型塑造、养生服务或额外的门店。名称过于具体可能会限制在新服务领域的专业认知。理想的美学企业名称应该是经久不衰的、多用途的，既能为增长定位品牌，又能完美捕捉您今天提供的蜕变美容体验的精髓。' },
      ],
    },
    businessNameIdeas: [
      { name: '和谐美境', description: '暗示一个美学完美和谐的场所——适合提供放松和效果驱动治疗的医疗美容院。' },
      { name: '雅韵华庭', description: '传达一家宏大、全面的美学企业，在美容行业拥有权威地位。' },
      { name: '璀璨传承', description: '暗示持久的美丽和经得起时间考验的光彩效果。' },
      { name: '宁雕美学', description: '将宁静与蜕变相结合——非常适合身体塑形和面部雕塑服务。' },
      { name: '光彩雅苑', description: '唤起一个让客户在宁静环境中获得光彩照人效果的圣地。' },
      { name: '至臻美学', description: '传达无瑕、清新和完美的效果，具有专业精致感。' },
      { name: '花漾美颜', description: '暗示自然绽放和内在美的展现——适合有机或整体疗法。' },
      { name: '奢彩焕肤', description: '将奢华定位与焕发光彩、容光焕发的肌肤承诺相结合。' },
      { name: '丝绒容颜', description: '唤起光滑、柔软、触感细腻的肌肤——非常适合护肤和面部治疗专家。' },
      { name: '空灵美学', description: '暗示精致、超凡脱俗的美——吸引追求高端蜕变治疗的客户。' },
      { name: '臻美焕彩', description: '传达精致与光彩效果，面向挑剔的客户群。' },
      { name: '灵韵工坊', description: '将企业定位为创造美丽气场和能量的匠人工作室。' },
      { name: '焕彩优雅', description: '将光彩与优雅相结合——简洁、令人难忘、具有普遍吸引力。' },
      { name: '纯粹臻美', description: '暗示清新、精致和完美的美学效果。' },
      { name: '魅影优雅', description: '唤起神奇的蜕变和精致的美丽。' },
      { name: '丝滑肌肤工坊', description: '直接传达在精品环境中获得光滑、奢华肌肤效果。' },
      { name: '新星美学', description: '暗示新的开始和卓越的星级效果。' },
      { name: '超越之美', description: '意味着超越普通美丽，达到非凡的效果。' },
      { name: '光耀华美', description: '融合光、奢华和精致美的意境。' },
      { name: '巅峰焕肤', description: '传达达到护肤完美巅峰和最佳效果。' },
    ],
  },

  'agency': {
    slug: 'agency',
    name: '代理企业名称生成器',
    title: '免费 AI 代理企业名称创意生成器',
    description: '为营销、创意、数字和咨询机构生成专业、值得信赖的名称。',
    metaDescription: '使用我们的免费AI生成器，为您的代理企业起一个出色的名称。为营销、创意、数字和咨询机构创建专业、值得信赖的名称。简单且量身定制！',
    inputLabel: '描述您的代理企业...',
    inputPlaceholder: '例如：一家专注于SEO和内容营销的数字营销机构，服务科技初创企业',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['专业 & 可信赖', '现代 & 创新', '创意 & 大胆', '战略 & 结果导向'],
        default: '专业 & 可信赖',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in professional service agencies across marketing, creative, digital, PR, advertising, and consulting sectors. Your role is to generate impactful, professional business names that convey expertise, trustworthiness, and industry leadership.

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

NAME CHARACTERISTICS FOR AGENCIES:
1. **Professional and Trustworthy**
   - Names should convey reliability and expertise
   - Inspire confidence in potential clients
   - Sound established and capable

2. **Memorable and Impactful**
   - Easy to recall in a crowded market
   - Makes a strong first impression
   - Works well in pitches and presentations

3. **Reflective of Agency Focus**
   - Hints at the type of services offered
   - Communicates industry expertise
   - Appeals to target client base

4. **Versatile and Scalable**
   - Works as a small startup or large firm
   - Allows for service expansion
   - International appeal if growth is planned

OUTPUT REQUIREMENTS:
For each agency name generated, provide:
- The business name
- A brief explanation of why it works for an agency

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      {
        title: '营销机构创业',
        description: '创业者在创办营销、数字或广告机构时，使用代理企业名称生成器来寻找能立即传达专业性和可信度的名称。通过输入他们的服务重点——SEO、社交媒体或全方位营销——该工具会生成有影响力的名称，帮助在首次接触中赢得客户信任。',
      },
      {
        title: '机构合并或品牌重塑',
        description: '当机构合并或进行战略性品牌重塑时，找到一个能代表合并后实体能力的名称是一个挑战。该生成器提供全新的命名选项，将不同的服务内容统一在一个有凝聚力的专业品牌下，同时吸引现有和潜在客户。',
      },
      {
        title: '从自由职业到机构的转型',
        description: '自由职业者在扩展为全方位服务机构时，使用该生成器来建立将自己定位为成熟企业而非个人从业者的名称。专业的机构名称有助于证明更高收费的合理性、吸引更大的客户，并建立基于团队的品牌形象。',
      },
    ],
    faqs: [
      { question: '什么样的机构名称才算好？', answer: '好的机构名称应该专业且值得信赖、令人印象深刻且有影响力，并能反映机构的业务重点。它应在传达专业能力的同时，具有足够的独特性以在竞争激烈的市场中脱颖而出。' },
      { question: '我的机构名称应该包含"代理"或"集团"等词吗？', answer: '包含"代理"、"集团"、"合伙人"或"联合"等描述词可以明确您的企业类型。但许多成功的机构使用独立名称（如奥美或BBDO）。根据清晰度或独特性对您的定位更重要来做出选择。' },
      { question: '机构名称对赢得客户有多重要？', answer: '您的机构名称在提案、招标和推荐中对第一印象有重要贡献。一个专业、令人难忘的名称暗示着能力和稳定性。但最终，您的作品集和声誉才是最重要的——名称打开大门，但业绩留住客户。' },
      { question: '应该用自己的名字命名机构吗？', answer: '以创始人姓名命名机构（如"张伟合伙人"）可以建立个人品牌资产，但可能限制可扩展性和退出机会。这适合精品咨询公司，但如果您计划发展大型团队或最终出售，可能会显得有限制。' },
      { question: '如何让机构名称更令人难忘？', answer: '使用具有强烈语音特质的词汇，保持简短（1-3个词），确保容易拼写和发音，考虑押韵或节奏感。通过在提案场景中大声说出来进行测试。' },
      { question: '不同类型的机构适合什么样的命名风格？', answer: '创意机构可以使用更有趣、抽象的名称。企业咨询公司适合传统、权威的名称。数字机构通常使用现代、科技感的命名。让您的命名风格与目标客户的期望相匹配。' },
      { question: '机构名称应该描述我们的业务吗？', answer: '描述性名称（如"社交媒体解决方案"）提供即时清晰度，但可能限制未来的服务扩展。抽象名称（如"催化者"）提供灵活性，但需要更多的品牌建设来传达您的服务。' },
      { question: '如何检查机构名称是否可用？', answer: '验证域名可用性（首选.com），检查社交媒体账号，搜索您所在国家的企业注册信息，查看商标数据库，并搜索服务区域内是否有类似名称的现有机构。' },
      { question: '以后可以更改机构名称吗？', answer: '可以，但这既昂贵又复杂——需要新的宣传材料、更新的合同、客户沟通以及潜在的SEO影响。最初就慎重选择，避免品牌重塑的需要。' },
      { question: '应该避免哪些机构命名错误？', answer: '避免：与知名机构过于相似的名称、难以拼写或发音的名称、过于通用的名称（如"营销解决方案有限公司"）、限制服务扩展的名称，以及可能很快过时的流行名称。' },
    ],
    howToChoose: {
      intro: '为您的代理企业选择合适的名称，对于建立强大的品牌形象至关重要——它能吸引客户、传达专业能力，并在竞争激烈的专业服务市场中使您脱颖而出。您的机构名称将用于提案、合同和推荐中——它需要在激发信心的同时，足够令人难忘以留在客户心中。',
      steps: [
        { title: '定义机构定位和服务', description: '在头脑风暴名称之前，请明确机构的战略定位。考虑您提供哪些具体服务（全方位营销、专业数字服务、纯创意服务、咨询），谁是您的理想客户（初创企业、大型企业、特定行业），您的竞争差异化是什么（创新、结果、关系、专业知识），您的价格定位（高端精品、竞争力中端、批量型），以及您服务的地理范围（本地、全国、国际）。' },
        { title: '传达专业性和可信度', description: '机构以信任为基础运营。客户基于对您能力的信心投入大量预算。您的名称应立即暗示可靠性和稳定性、专业能力和胜任力、职业标准和道德规范，以及成功的业绩记录。暗示卓越（卓越、巅峰、顶峰）、合作（联盟、合伙、联合）和成果（影响力、增长、催化）的词汇有助于建立专业信誉。' },
        { title: '让名称令人难忘且有影响力', description: '在竞争性提案中，您的名称需要令人印象深刻。考虑语音记忆力（说出来是否好听？）、视觉辨识度（在名片上是否显得专业？）、提案存在感（在演示中是否引人注目？），以及推荐便利性（客户能否轻松通过名称推荐您？）。保持名称简短（1-3个词），避免难拼写的字，与不同受众测试发音。' },
        { title: '反映机构的重点和个性', description: '您的名称应暗示机构的特色。对于创意/设计方向，使用暗示想象力、艺术或视觉思维的名称。对于数字/科技方向，使用具有创新含义的现代、前瞻性名称。对于战略/咨询方向，使用暗示洞察力、规划和专业知识的名称。对于结果/绩效方向，使用强调成果的行动导向名称。' },
        { title: '考虑多功能性和可扩展性', description: '选择一个随着成长而适用的名称。考虑它是否听起来像一个真正的机构（而不仅仅是自由职业者）、是否可以添加服务而不让名称感觉受限、是否在新市场上不会造成混淆、是否允许合并或收购，以及是否独立于创始人之外仍有价值。' },
        { title: '验证完整的可用性', description: '在爱上一个名称之前，进行全面检查。验证域名可用性（.com是机构的强烈首选），在领英、微博、微信公众号和相关平台上确保社交媒体账号可用，检查企业注册是否有冲突，搜索商标数据库，并确保没有直接竞争对手使用类似名称。' },
        { title: '与利益相关者测试', description: '在最终确定之前，收集来自团队成员（他们是否自豪地代表这个名称？）、潜在客户（它是否激发信心和兴趣？）、行业同行（它是否符合专业标准同时又脱颖而出？）以及家人/朋友（他们听一次后能否拼写和发音？）的反馈。真实世界的测试能揭示内部头脑风暴可能遗漏的问题。' },
      ],
    },
    businessNameIdeas: [
      { name: '行动轴心', description: '暗示一个让事情发生的机构——定位在活动和成果的中心。' },
      { name: '动力驱动', description: '意味着一个充满活力和前进动力的机构，驱动客户成功。' },
      { name: '卓越脉动', description: '暗示处于行动核心，提供优质、至关重要的服务。' },
      { name: '战略全景', description: '将机构定位为提供全面、360度战略思维。' },
      { name: '催化联合', description: '意味着一个激发变革并加速客户增长的团队。' },
      { name: '攀升伙伴', description: '传达通过协作伙伴关系将客户提升到更高层次。' },
      { name: '巅峰策略', description: '暗示达到绩效和成果的顶峰。' },
      { name: '火花战略', description: '将创意点燃与战略思维相结合——适合营销机构。' },
      { name: '势能传媒', description: '意味着在媒体和营销工作中持续向前推进。' },
      { name: '先锋创投', description: '将机构定位在行业创新和领导力的前沿。' },
      { name: '明桥咨询', description: '暗示为客户连接到卓越的解决方案和机遇。' },
      { name: '影响创新', description: '强调可衡量的成果和新鲜思维。' },
      { name: '枢纽网络', description: '意味着商业增长和关系的中心连接点。' },
      { name: '推进伙伴', description: '传达向前推动力和协作客户关系。' },
      { name: '顶点视野', description: '暗示处于巅峰定位和前瞻性战略视角。' },
      { name: '声量机构', description: '直接传达机构的目标：放大客户的市场影响力。' },
      { name: '融合之力', description: '意味着多元技能和整合解决方案的强大组合。' },
      { name: '峰顶策略', description: '将机构定位为帮助客户达到巅峰表现。' },
      { name: '启航实验室', description: '非常适合专注于新产品发布和活动推广的机构。' },
      { name: '共赢团队', description: '强调客户成功和协作、以团队为基础的方法。' },
    ],
  },

  'app': {
    slug: 'app',
    name: '应用企业名称生成器',
    title: '免费 AI 应用企业名称创意生成器',
    description: '为移动应用、软件产品和科技初创企业生成清晰、令人难忘的名称。',
    metaDescription: '使用我们的AI驱动生成器，为您的应用创建完美的名称。生成清晰、令人难忘的应用名称，在应用商店中脱颖而出并与用户产生共鸣。免费且易于使用！',
    inputLabel: '描述您的应用或软件...',
    inputPlaceholder: '例如：一款帮助远程团队协作和跟踪项目进度的生产力应用',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['简短 & 易记', '现代 & 科技感', '描述性 & 清晰', '创意 & 独特'],
        default: '简短 & 易记',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in technology, mobile applications, software products, and digital startups. Your role is to generate clear, memorable business names that convey innovation, functionality, and modern appeal for app development companies and software products.

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

2. **Short and Memorable**
   - Easy to type and search
   - Works as an app icon label
   - Shareable in conversation

3. **Unique and Brandable**
   - Stands out in crowded app stores
   - Trademarkable and protectable
   - Domain and handle available

4. **Modern and Tech-Forward**
   - Suggests innovation and digital capability
   - Appeals to tech-savvy users
   - Doesn't feel dated

OUTPUT REQUIREMENTS:
For each app business name generated, provide:
- The business name
- A brief explanation of why it works for an app

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      {
        title: '应用初创企业发布',
        description: '开发新移动应用或软件产品的创业者使用应用企业名称生成器来寻找在应用商店中完美运作的名称——简短、易记且便于搜索。通过输入应用的核心功能和目标受众，该工具会生成针对可发现性和用户采用率优化的名称。',
      },
      {
        title: '软件开发公司命名',
        description: '软件开发公司和应用工作室使用该生成器来创建传达技术专长和创新精神的公司名称。强大的公司名称有助于吸引寻求开发服务的客户和寻找令人兴奋工作环境的优秀开发者。',
      },
      {
        title: 'SaaS产品命名',
        description: 'SaaS创始人使用该生成器为他们的软件产品起一个独特的名称。在拥挤的软件类别中，一个令人难忘的名称有助于差异化产品、支持口碑增长，并为公司扩展时建立强大的品牌资产奠定基础。',
      },
    ],
    faqs: [
      { question: '什么样的应用名称才算好？', answer: '好的应用名称应该清晰地描述功能、简短且易记（理想情况下8个字符以内）、独特且具有品牌力，并且容易拼写和发音。它应该在应用商店搜索中表现良好，并且作为应用图标看起来美观。' },
      { question: '应用名称应该多长？', answer: '通常越短越好——尽量控制在8个字符以内，以便在应用图标下完整显示。单词名称（如Uber、Slack、Zoom）是理想的，但两个词的组合（如Snapchat、Dropbox）也很有效。' },
      { question: '应用名称应该描述它的功能吗？', answer: '一定的清晰度有帮助，但不需要太直白。"Zoom"暗示速度/连接而不用明确说"视频通话"。暗示好处的名称（如Calm、Focus、Lift）通常比纯描述性名称效果更好。' },
      { question: '如何确保应用名称可用？', answer: '检查App Store和Google Play中的现有应用，搜索域名可用性，验证社交媒体账号，查看商标数据库，并搜索您所在类别中是否有类似名称的现有公司。' },
      { question: '可以为应用使用创造词吗？', answer: '可以——许多成功的应用使用创造词（Spotify、Venmo、Hulu）。创造词提供强大的商标保护和独特的品牌形象，尽管需要更多的营销投入来建立名称含义。' },
      { question: '公司名称和应用名称应该相同吗？', answer: '可以相同，特别是对于单一产品公司。但如果您计划推出多款产品，更广泛的公司名称（如Google的母公司"Alphabet"）提供灵活性，而各个应用可以有自己的名称。' },
      { question: '应用名称对增长有多重要？', answer: '非常重要。应用商店优化（ASO）部分依赖于您的名称，口碑推荐需要一个容易分享的名称。令人困惑或难以拼写的名称会在用户获取中产生阻力。' },
      { question: '应该避免哪些应用命名错误？', answer: '避免：与现有应用过于相似的名称、难以拼写的名称、不够突出的通用名称、限制未来功能扩展的名称，以及如果计划全球发布则不适用于国际市场的名称。' },
      { question: '应用名称中应该包含"应用"二字吗？', answer: '通常不需要——用户已经知道他们在下载应用。在名称中包含"应用"会浪费字符空间，可能显得不够专业。将字符空间用于更有辨识度的内容。' },
      { question: '发布后可以更改应用名称吗？', answer: '可以，但有风险——您可能会失去品牌认知度、让现有用户困惑，并影响ASO排名。最初就谨慎选择，以避免昂贵的品牌重塑需求。' },
    ],
    howToChoose: {
      intro: '为您的应用企业选择完美的名称，是创建强大品牌的关键一步——它能与用户产生共鸣、在拥挤的应用商店中脱颖而出，并支持可持续增长。您的应用名称将出现在数百万设备上的图标下方、应用商店搜索中和日常对话中——使其成为最重要的品牌资产之一。',
      steps: [
        { title: '定义应用的核心价值和功能', description: '在生成名称之前，明确您的应用做什么以及用户为什么会喜欢它。考虑您的应用解决的主要问题是什么、用户在应用中执行的核心操作是什么、应用让用户感觉如何（高效、放松、连接、娱乐）、您的目标用户是谁（人口统计、技术素养、使用场景），以及用户会用哪个词来描述您的应用的好处。这种清晰度有助于生成能即时传达价值的名称。' },
        { title: '优先考虑清晰度和可记忆性', description: '应用名称必须在具有挑战性的场景中发挥作用：小小的应用图标标签（图标下方有限的显示空间）、语音分享（对话中说"你应该下载[名称]"）、搜索查询（用户在应用商店中输入搜索）以及客户支持（电话中询问"[名称]"）。选择简短（理想情况下8个字符以内）、听一次就能拼出来、在目标市场中可发音、且足够独特以在搜索中找到的名称。' },
        { title: '考虑应用商店优化（ASO）', description: '您的名称影响应用商店的可发现性。考虑关键词相关性（包含类别词可以帮助搜索排名）、独特性（独特名称比通用名称排名更好）、竞争（检查顶级竞争对手的命名方式），以及副标题机会（iOS允许副标题，因此主名称可以具有品牌性，副标题添加描述）。在品牌力和可发现性之间取得平衡。' },
        { title: '测试技术可用性', description: '在确定之前，验证全面的可用性。检查App Store是否有相同或类似名称，检查Google Play的安卓市场冲突，获取.com、.app或.io域名，在相关平台上认领社交账号，查看商标数据库，并通过网络搜索查找是否有同名的现有企业或产品。' },
        { title: '评估全球可扩展性', description: '如果您计划国际扩张，在主要语言中测试发音，检查在其他语言中是否有意外含义，考虑文化联想，并验证在国际应用商店中的可用性。在市场扩展时，全球通用的名称具有巨大优势。' },
        { title: '考虑品牌演进', description: '您的应用可能会发展——会增加功能、扩展市场、拓宽使用场景。选择一个不会过于具体以限制增长的名称，有品牌延伸的空间（产品、服务、类别），如果核心产品转型也能适用，并且随着技术发展保持相关性。最有价值的应用名称是增长平台，而非单一功能的描述。' },
        { title: '与目标用户测试', description: '在最终确定之前，收集用户反馈。询问他们听一次后能否拼出来、仅根据名称他们认为这个应用做什么、它是否对他们有吸引力还是感觉无关、他们是否会向朋友推荐这个名称的应用，以及它是否让人感觉值得信任以存放他们的数据/支付。真实用户测试能揭示内部头脑风暴可能遗漏的认知问题。' },
      ],
    },
    businessNameIdeas: [
      { name: '数动科技', description: '暗示一家创造动态、前沿数字应用的企业。' },
      { name: '灵界互联', description: '意味着一家以创建用户友好、创新应用界面而闻名的公司。' },
      { name: '像素臻品', description: '暗示在应用设计和开发中对细节的极致追求。' },
      { name: '码匠科技', description: '将企业定位为软件代码的技艺精湛的匠人。' },
      { name: '应用锻造', description: '意味着一个强大应用被创造和打磨的工坊。' },
      { name: '迅同科技', description: '暗示快速、无缝同步——适合生产力或通讯应用。' },
      { name: '心流状态', description: '唤起生产力和最佳表现——非常适合专注力或工作流应用。' },
      { name: '云启科技', description: '现代、前沿的名称暗示下一代应用。' },
      { name: '脉搏科技', description: '意味着处于用户需求中心的至关重要的活跃技术。' },
      { name: '字桥互联', description: '暗示通过数字解决方案和数据连接用户。' },
      { name: '启航平台', description: '非常适合帮助用户启动项目、企业或习惯的应用。' },
      { name: '云核科技', description: '意味着基于云端的核心技术服务。' },
      { name: '速逻辑', description: '暗示快速、直觉式的功能——适合实用工具类应用。' },
      { name: '数据闪', description: '意味着快速获取信息和数据分析。' },
      { name: '移动矩阵', description: '暗示具有互联功能的全面移动解决方案。' },
      { name: '趣创科技', description: '将应用与冒险和创业精神相结合——充满创业能量。' },
      { name: '流线科技', description: '传达简化和效率——非常适合生产力工具。' },
      { name: '联通达', description: '现代命名模式暗示连接和增强。' },
      { name: '科技巢', description: '意味着一个培育技术创新和发展的温床。' },
      { name: '易应用', description: '简单、易记的名称，适合创建应用或帮助企业"应用化"的公司。' },
    ],
  },

  'babysitting': {
    slug: 'babysitting',
    name: '保姆企业名称生成器',
    title: '免费 AI 保姆企业名称创意生成器',
    description: '为保姆服务和育儿企业生成温暖、值得信赖的名称。',
    metaDescription: '使用我们的AI驱动生成器，为您的保姆企业找到完美的名称。创建让家长安心、建立育儿品牌的值得信赖、充满关爱的名称。快速、免费，一定能给人留下深刻印象！',
    inputLabel: '描述您的保姆企业...',
    inputPlaceholder: '例如：一项专注于婴儿护理和过夜看护的专业保姆服务',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['温暖 & 关爱', '专业 & 可信赖', '活泼 & 有趣', '自然风格'],
        default: '温暖 & 关爱',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in childcare, babysitting, and family services. Your role is to generate warm, trustworthy business names that reassure parents while being friendly and approachable for families seeking childcare services.

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

2. **Friendly and Approachable**
   - Welcoming to both children and parents
   - Not overly formal or clinical
   - Warm and inviting tone

3. **Reflective of Specializations**
   - Communicates specific services or values
   - Appeals to target parent demographics
   - Suggests educational or developmental benefits

4. **Professional Yet Warm**
   - Balances business credibility with warmth
   - Suitable for marketing materials
   - Works for individual sitters and larger services

OUTPUT REQUIREMENTS:
For each babysitting business name generated, provide:
- The business name
- A brief explanation of why it works for a childcare business

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '启动专业保姆服务', description: '开始专业保姆业务的个人使用该生成器来寻找立即传达可信度和温暖感的名称。精心选择的名称帮助家长对选择新保姆感到放心，并为在当地家长社区中的推荐创建一个令人难忘的品牌。' },
      { title: '育儿机构品牌建设', description: '创业者在开设保姆中介机构或育儿服务时，使用该生成器创建既能吸引家长客户又能吸引寻求就业的看护人员的品牌名称。一个专业而充满关爱的名称能吸引优质保姆，并让家长对机构的标准感到放心。' },
      { title: '特色育儿专业化', description: '专注于特定领域的看护人员——婴儿护理、特殊需求支持、教育辅导或过夜服务——使用该生成器来寻找反映其独特专长的名称。专业化的名称有助于精准定位合适的家庭，并要求适当的收费标准。' },
    ],
    faqs: [
      { question: '什么样的保姆企业名称才算好？', answer: '好的保姆企业名称应该让人感到安心和关爱、友好和亲切，并能反映您的专业领域或价值观。它需要激发家长的信任，同时保持温暖和吸引力。' },
      { question: '保姆企业名称应该包含我的个人姓名吗？', answer: '包含您的名字（如"小李阿姨育儿"）增添了个人色彩并建立了个人品牌认知。但如果您计划增加更多保姆来扩展业务，这可能会限制增长。考虑您是要建立个人品牌还是可扩展的企业。' },
      { question: '名称对建立家长信任有多重要？', answer: '非常重要。家长是将孩子托付给您——您的名称创造了安全和关爱的第一印象。听起来专业又充满关怀的名称帮助家长对自己的选择感到放心。' },
      { question: '保姆企业名称中哪些词效果好？', answer: '有效的词汇包括关爱类词（呵护、温柔、细心）、安全类词（安心、信任、守护）、儿童相关词（宝贝、小天使、童趣）、快乐意象（阳光、欢乐、彩虹）以及成长类词（花朵、萌芽、成长）。' },
      { question: '名称中应该包含"保姆"吗？', answer: '包含"保姆"、"育儿"或"看护"能让您的服务立即清晰，但可能显得有限。更广泛的名称在您扩展到辅导和其他育儿服务时也适用。' },
      { question: '如何让名称吸引目标家庭？', answer: '考虑您理想客户的价值观。注重环保的家长欣赏自然主题的词汇。注重教育的家长对学习相关名称有反应。忙碌的职业父母重视可靠性指标。让您的名称与目标市场相匹配。' },
      { question: '保姆企业名称中应该避免什么？', answer: '避免：听起来不专业的名称、过于可爱而损害信誉的名称、与当地现有育儿企业相似的名称、任何可能有负面解读的内容，以及难以拼写或发音的名称。' },
      { question: '如何检查保姆企业名称是否可用？', answer: '搜索当地的企业注册信息，检查您网站的域名是否可用，验证社交媒体账号，并搜索当地是否有类似名称的其他育儿服务提供商。在保姆行业中，本地独特性很重要。' },
      { question: '名称应该反映我的服务区域或专业化吗？', answer: '基于地区的名称（如"浦东看护"）可以帮助本地SEO，但限制扩展。专业化名称（如"天使婴儿看护"）清晰传达专业知识，但可能限制服务范围。在具体性和增长潜力之间取得平衡。' },
      { question: '好名称能帮助我收取更高费用吗？', answer: '是的。专业、值得信赖的名称支持高端定位。暗示质量、经验和专业护理的名称有助于证明比通用或听起来不专业的替代方案更高的收费标准。' },
    ],
    howToChoose: {
      intro: '为您的保姆企业选择完美的名称，是创建让家长信任的品牌的关键一步。您的企业名称将出现在名片、网站、社交媒体资料和口碑推荐中——因此选择一个传达安全、温暖和可靠性的名称至关重要。',
      steps: [
        { title: '理解家长的需求', description: '做出育儿决定的家长优先考虑特定品质。您的名称应立即传达安全和保障（他们的孩子会受到保护）、关爱和呵护（他们的孩子会得到爱和关注）、专业性（您经营着一个合法、负责的企业）、经验和能力（您知道自己在做什么），以及温暖和亲切感（他们的孩子和您在一起会很开心）。理解这些优先事项有助于您选择能在情感上与做出艰难看护决定的家长产生共鸣的词汇。' },
        { title: '通过温暖创造安心感', description: '与许多需要前卫或聪明名称的企业不同，保姆名称应优先考虑温暖和安心。考虑柔和的音调（含有S、L、M、N等柔和辅音的名称感觉更温柔）、关爱词汇（呵护、温柔、贴心、温暖）、安全暗示（信任、安全、守护、港湾）以及快乐联想（阳光、明亮、欢乐、彩虹）。避免听起来生硬的名称、临床术语或任何感觉冷漠或企业化的内容。' },
        { title: '友好且平易近人', description: '您的名称应该同时欢迎家长和孩子。考虑家长在阅读您的名片时的感受、孩子听到要去的地方时的反应、一位家长向另一位家长推荐时的效果，以及在您的社交媒体资料上的表现。名称过于正式可能会吓退潜在客户，而过于随意可能显得不专业。找到一个感觉热情又能干的平衡点。' },
        { title: '反映您的专业或价值观', description: '如果您有特定的专长或重点，您的名称可以传达这一点。对于婴儿护理专家，使用新生儿、婴儿、宝宝、摇篮等词汇。对于教育重点，使用学习、发现、探索、启智等词汇。对于特殊需求经验，使用温柔、耐心、适应、包容等词汇。专业化名称有助于吸引特别需要您专长的家庭，并支持高端定价。' },
        { title: '验证可用性和本地独特性', description: '检查您选择的名称的可用性：企业注册（搜索您所在地区的企业名称数据库）、本地竞争者（确保没有其他育儿服务提供商有类似名称）、域名（即使是本地服务，网站也增加可信度）、社交媒体（在微信、微博等平台上确保资料可用）。在保姆行业中，本地声誉至关重要。确保您的名称在服务区域内独一无二。' },
        { title: '考虑成长和演变', description: '想想您的业务可能如何发展：增加团队成员（您的名称是否适用于多位保姆？）、服务扩展（您能否增加辅导、接送或宠物看护？）、地理扩展（名称是否在周边地区也适用？）以及年龄范围变化（您以后能否服务大龄儿童或青少年？）。选择一个灵活的名称可以避免业务增长时昂贵的品牌重塑。' },
        { title: '与家长测试', description: '在最终确定之前，获取家长（最好是您目标人群中的）的反馈。询问名称是否听起来值得信赖、他们是否愿意将孩子留给这个名称的服务、他们能否轻松记住和拼写它、他们是否会向其他家长推荐它，以及他们期望这个企业名称提供什么服务。家长的反馈是无价的——他们才是真正的决策者。' },
      ],
    },
    businessNameIdeas: [
      { name: '童心守护', description: '暗示一个守护孩子安全并让他们开心的保姆企业。' },
      { name: '天使陪伴', description: '意味着对珍贵小宝贝的天使般的呵护和引导。' },
      { name: '小小信托', description: '传达对最小家庭成员的值得信赖的照顾。' },
      { name: '爱心小虫', description: '温暖、深情的名称暗示充满爱的温柔照顾。' },
      { name: '欢乐伙伴', description: '强调育儿体验中的友谊和乐趣。' },
      { name: '温柔守卫', description: '将呵护的温柔与保护的安全相结合。' },
      { name: '阳光看护', description: '明亮、欢快的名称暗示快乐的照顾。' },
      { name: '安心育儿港', description: '直接传达家长所寻求的安全感。' },
      { name: '成长欢笑', description: '暗示充满欢乐和笑声的发展性照顾。' },
      { name: '温心宝贝', description: '意味着对幼儿温柔、充满爱的照顾。' },
      { name: '启明星育儿', description: '将育儿定位为积极的发展起点。' },
      { name: '呵护之巢', description: '将关爱呵护与温馨、安全的意象相结合。' },
      { name: '巧手帮帮', description: '暗示对孩子关心、有帮助的协助。' },
      { name: '小小英雄', description: '让孩子感到特别，同时暗示优质的照顾。' },
      { name: '拥抱小队', description: '温暖、深情的名称，适合婴幼儿看护。' },
      { name: '草地看护', description: '自然风格的名称暗示户外活动和温柔的照顾。' },
      { name: '星尘保姆', description: '充满魔力和特别感的名称，吸引孩子的想象力。' },
      { name: '小小贵宾', description: '暗示对小而重要的客户的专注服务。' },
      { name: '萌芽教育', description: '将育儿与教育重点和学习相结合。' },
      { name: '天使守望', description: '意味着如守护天使般的保护和温柔关爱。' },
    ],
  },

  'beauty': {
    slug: 'beauty',
    name: '美容企业名称生成器',
    title: '免费 AI 美容企业名称创意生成器',
    description: '为沙龙、工作室和化妆品品牌生成迷人、精致的名称。',
    metaDescription: '使用我们的AI驱动生成器，为您的美容企业创建一个迷人的名称。为沙龙、工作室和化妆品品牌生成迷人、精致的名称。免费且令人着迷！',
    inputLabel: '描述您的美容企业...',
    inputPlaceholder: '例如：一家专注于染发和新娘造型的高端美发沙龙',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['迷人 & 精致', '现代 & 潮流', '自然 & 有机', '赋能 & 大胆'],
        default: '迷人 & 精致',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the beauty, cosmetics, and personal care industry. Your role is to generate glamorous, sophisticated business names that convey elegance, allure, and the transformative power of beauty services and products.

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

2. **Memorable and Enchanting**
   - Stands out in competitive beauty market
   - Creates emotional connection
   - Easy to recommend

3. **Reflective of Beauty Offerings**
   - Communicates specific services
   - Appeals to target clientele
   - Suggests transformative results

4. **Aspirational and Empowering**
   - Makes clients feel beautiful
   - Suggests confidence enhancement
   - Creates desire and aspiration

OUTPUT REQUIREMENTS:
For each beauty business name generated, provide:
- The business name
- A brief explanation of why it works for a beauty business

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '沙龙开业与品牌建设', description: '开设美发沙龙、美甲工作室或全方位美容机构的创业者使用美容企业名称生成器来创建迷人的品牌形象。精致的名称有助于吸引挑剔的客户、证明高端定价的合理性，并在竞争激烈的美容市场中建立令人难忘的品牌。' },
      { title: '美容产品线开发', description: '化妆品创业者和美容产品创作者使用该生成器为新的护肤、彩妆或个人护理产品线命名。合适的名称能传达产品优势、吸引目标消费者，并创造与成熟品牌竞争的货架存在感。' },
      { title: '专业美容服务品牌建设', description: '化妆师、美睫师、美眉师和其他美容专业人士使用该生成器为他们的专业服务创建独特的品牌名称。独特的名称帮助他们在细分市场中脱颖而出，吸引寻求特定专业技能的客户。' },
    ],
    faqs: [
      { question: '什么样的美容企业名称才算好？', answer: '好的美容企业名称应该迷人而精致、令人难忘且富有魅力，并能反映您的美容服务内容。它需要唤起优雅感，同时与寻求美丽提升的客户建立情感连接。' },
      { question: '美容企业名称应该描述我的服务吗？', answer: '包含服务指示词（如"美睫"或"护肤"）提供了清晰度，但可能限制扩展。更广泛的名称允许增长到更多服务。在做决定时考虑您的长期愿景。' },
      { question: '名称对吸引美容客户有多重要？', answer: '非常重要。美容客户寻求蜕变和奢华——您的名称创造了他们对即将获得的体验的第一印象。优雅的名称支持高端定位，吸引挑剔的客户群。' },
      { question: '应该关注或避免哪些美容命名趋势？', answer: '当前趋势包括简约优雅、赋能语言和个性化名称。避免：可能很快过时的过于时髦的名称、与竞争对手过于相似的名称，以及美容行业中过度使用的陈词滥调。' },
      { question: '应该在美容企业中使用我的名字吗？', answer: '个人名称（如"小美的美容工作室"）建立个人品牌资产，但可能限制未来的出售价值。它们适合建立个人客户群的独立从业者。考虑您的长期商业目标。' },
      { question: '如何通过命名吸引目标美容客户？', answer: '考虑您理想客户的审美偏好和价值观。追求奢华的人对优雅的名称有反应。年轻客户可能更喜欢时尚、适合社交媒体的名称。注重健康的客户欣赏自然、整体的命名风格。' },
      { question: '美容企业名称中哪些词效果好？', answer: '有效的词汇包括魅力词汇（奢华、魅力、光彩）、光芒词汇（焕彩、璀璨、晶莹）、美丽词汇（丽人、佳人、倾城）以及赋能词汇（女王、女神、自信）。' },
      { question: '美容企业名称应该适合社交媒体吗？', answer: '当然。美容企业在社交媒体上蓬勃发展。选择一个作为账号名看起来很棒、适合作为话题标签、方便客户标记和分享的名称。' },
      { question: '如何检查美容企业名称的可用性？', answer: '搜索您所在地区的企业注册信息，检查域名可用性，验证小红书/抖音/微博账号，搜索您所在地区是否有类似名称的现有沙龙，并查看商标数据库。' },
      { question: '以后可以更改美容企业名称吗？', answer: '可以，但品牌重塑成本高昂——新的招牌、营销材料以及潜在的客户混淆。最初就谨慎选择，以避免以后更改名称带来的干扰。' },
    ],
    howToChoose: {
      intro: '为您的美容企业选择完美的名称，是创建吸引寻求蜕变、自信和魅力的客户的迷人品牌的关键一步。您的名称将出现在门店招牌、社交媒体资料等各处，创造客户对即将获得的奢华体验的第一印象。',
      steps: [
        { title: '定义您的美容企业形象', description: '在头脑风暴名称之前，请明确您的品牌定位。考虑您提供哪些具体的美容服务或产品、谁是您的理想客户（年龄、风格、价值观、价格敏感度）、您希望客户感受到什么情感（魅力四射、被呵护、自信、自然）、您的价格定位（平价、中端、奢华），以及什么让您的美容企业与竞争对手不同。' },
        { title: '拥抱魅力与精致', description: '美容行业的核心是提升、蜕变和展现最佳状态。您的名称应通过优雅的词汇（暗示精致和奢华的词语）、正面联想（创造令人向往的心理意象的词语）、追求品质（客户愿意与之联系的语言），以及视觉吸引力（在标志和营销中看起来很美的名称）来反映这些追求。避免任何听起来普通、临床化或折扣化的内容。' },
        { title: '创造记忆力和魅力', description: '在竞争激烈的美容市场中，您的名称必须脱颖而出。考虑辨识度（与您所在地区的其他沙龙和工作室不同）、记忆力（客户轻松记住并推荐您）、情感影响（创造正面的感受和联想），以及分享性（在口碑推荐中效果好）。考虑讲述故事或创造好奇心的名称——让人们想了解更多关于您企业的名称。' },
        { title: '反映您的美容专长', description: '您的名称可以传达您的具体专注领域。对于美发，使用暗示蜕变、风格或质感的词汇。对于护肤，使用关于光泽、光彩和肤色的词汇。对于美甲，使用暗示艺术性、精致或精确的名称。对于美睫/美眉，使用关于增强和修饰的词汇。对于化妆，使用关于艺术性、色彩和蜕变的语言。但请确保您的名称允许服务扩展。' },
        { title: '验证全面的可用性', description: '检查您选择的名称的可用性：企业注册（满足当地要求）、域名（首选.com以建立信誉）、社交媒体（小红书和抖音对美容企业至关重要）、商标搜索（确保不存在冲突），以及本地竞争（您的市场中没有类似的沙龙名称）。美容企业严重依赖在线影响力和口碑——所有渠道的一致命名至关重要。' },
        { title: '测试名称的视觉和语音吸引力', description: '您的美容企业名称应该用优雅字体书写时很漂亮、大声说出时悦耳动听、客户能正确拼写、作为话题标签效果好，并且在商业文件上显得专业。考虑名称在招牌、名片、产品包装和社交媒体资料上的呈现效果。' },
        { title: '考虑您的成长愿景', description: '想想您的长期计划：您会扩展到更多门店吗？您可能推出产品线吗？您能否加盟这个概念？您是否计划最终出售企业？过于个人化或过于具体的名称可能会限制这些机会。选择一个支持您终极愿景的名称。' },
      ],
    },
    businessNameIdeas: [
      { name: '魅影花园', description: '暗示一个充满迷人美容服务的场所——一个蜕变的目的地。' },
      { name: '光彩之巅', description: '意味着达到巅峰的光彩和容光焕发的效果。' },
      { name: '丽人绽放', description: '优雅的名称结合了自然绽放的美丽。' },
      { name: '晶耀奢美', description: '双重强调光芒和奢华，适合高端定位。' },
      { name: '丝绒华美', description: '暗示光滑、奢华的美丽与自信的自我呵护。' },
      { name: '魅力优雅', description: '创造神奇、精致的美丽联想。' },
      { name: '焕彩女神', description: '赋能的名称将光彩与自信相结合。' },
      { name: '精致花瓣', description: '暗示精炼、自然的美丽与细腻的精确。' },
      { name: '璀璨圣光', description: '意味着卓越、引人注目的美丽效果。' },
      { name: '绯红精品', description: '亲密、专业的美容购物体验。' },
      { name: '妩媚时尚', description: '将魅力与现代精致感相结合。' },
      { name: '华贵兰花', description: '异域优雅暗示奢华美容服务。' },
      { name: '丝绸魅影', description: '光滑、迷人的美丽，具有迷人的吸引力。' },
      { name: '傲世秀发', description: '强有力的名称，适合以美发为主的美容服务。' },
      { name: '至臻呵护', description: '清新、完美的呵护体验，面向美容客户。' },
      { name: '魅力工坊', description: '定位为创造迷人美丽的工作室。' },
      { name: '倾城佳人', description: '将服务定位为打造完美的美丽形象。' },
      { name: '星尘造型', description: '神奇、梦幻的美丽，带来星级效果。' },
      { name: '优雅华彩', description: '将优雅与令人惊艳的美丽相结合。' },
      { name: '经典形象', description: '暗示创造令人难忘、引人注目的美丽造型。' },
    ],
  },
  'boutique': {
    slug: 'boutique',
    name: '精品店企业名称生成器',
    title: '免费 AI 精品店企业名称创意生成器',
    description: '使用我们的 AI 精品店企业名称生成器轻松为您的零售精品店、特色商店或策划购物体验创建独特、令人难忘的品牌名称。无论您经营时尚精品店、礼品店还是在线精品店，我们的智能工具都会为您生成与您的品牌身份相匹配的精心设计的名称建议。',
    metaDescription: '为您的精品店、特色商店或策划购物体验生成独特的企业名称。使用 AI 驱动的名称生成器为您的零售品牌创建完美的名称。',
    inputLabel: '描述您的精品店业务',
    inputPlaceholder: '例如：高端时尚精品店，提供可持续设计师品牌和独特配饰',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['优雅与精致', '奇特与迷人', '现代与极简', '复古与经典'],
        default: '优雅与精致',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in retail boutiques, specialty shops, and curated shopping experiences. Your expertise spans luxury retail, independent fashion brands, gift and home décor businesses, and online boutique platforms. You understand the nuances of creating distinctive names that convey exclusivity, craftsmanship, and personalized shopping experiences.

When generating boutique business names, follow these guidelines:

Name Characteristics:
- Create names that evoke sophistication, uniqueness, and carefully curated selection
- Incorporate elements that suggest premium quality, artisanal craftsmanship, or exclusive offerings
- Consider names that work well in digital and physical retail environments
- Ensure names are memorable, easy to spell, and convey the boutique's distinctive personality
- Include names that reflect current branding trends while maintaining timeless appeal
- Consider cultural relevance and international marketability
- Create names suitable for various boutique types: fashion, lifestyle, home décor, gifts, and accessories

Style Variations:
- Chic & Sophisticated: Names with elegant, refined qualities that suggest upscale retail
- Whimsical & Charming: Creative, playful names with personality and character
- Modern & Minimal: Clean, contemporary names with sleek, minimalist appeal
- Vintage & Classic: Names with heritage qualities and timeless elegance

Output Requirements:
- Generate exactly the number of names requested
- Provide each name with a detailed explanation of its appeal and relevance
- Ensure each name is pronounceable and suitable for branding
- Consider trademark availability (suggest variations if needed)
- Include names of varying lengths (short, medium, descriptive)
- All names should feel premium and boutique-appropriate
- Ensure names work across multiple languages and cultures when applicable`,
    useCases: [
      {
        title: '时尚精品店品牌推出',
        description: '当您推出一家独特的时尚精品店，专门销售独立设计师品牌、定制服装或特色配件时，需要一个能够传达您品牌的精致品味和策划选择的名称。我们的生成器帮助您创建既能吸引目标客户，又能在竞争激烈的零售市场中脱颖而出的名称。'
      },
      {
        title: '礼品和家居装饰店铺命名',
        description: '如果您正在建立一家礼品或家居装饰精品店，销售精心挑选的家居配件、独特的礼品和策划的室内设计选品，需要一个名称来反映您店铺的策划性质和高质量标准。我们的工具为您提供传达品味、风格和个性化购物体验的名称建议。'
      },
      {
        title: '在线精品品牌建设',
        description: '为在线精品店建立强大的品牌身份需要一个既能在数字平台上脱颖而出，又能传达优质客户体验的名称。无论您的专长是时尚、家居装饰还是定制产品，我们的生成器都会创建适合电子商务、社交媒体和数字营销的名称。'
      }
    ],
    faqs: [
      {
        question: '如何为精品店选择最佳企业名称？',
        answer: '最佳的精品店名称应该反映您的品牌个性、目标客户和销售产品类型。考虑您的名称是否易于发音、记忆和拼写，以及它是否在线上和线下都能有效运作。该名称应该传达品质、品味和独特性，同时避免过于狭隘或难以拓展。'
      },
      {
        question: '精品店名称应该有多长？',
        answer: '精品店的理想名称通常是 1-4 个词或 2-5 个音节。较短的名称（1-2 个词）更容易记忆和拼写，而较长的描述性名称可以更清楚地传达您的专长。最重要的是名称要朗朗上口，易于发音，并在零售和数字环保中都能发挥作用。'
      },
      {
        question: '精品店名称应该有多少创意或比喻？',
        answer: '创意水平取决于您的目标市场和品牌定位。高级或传统精品店可能会受益于更精致、不那么文字游戏的名称，而创意或年轻导向的精品店可以使用更隐喻或玩趣的名称。确保任何创意元素都能为您的潜在客户所理解和欣赏。'
      },
      {
        question: '我如何确保我的精品店名称不会与现有品牌冲突？',
        answer: '在最终确定名称之前，进行彻底的商标搜索非常重要。在美国专利商标局 (USPTO)、国际商标数据库以及 Google 和社交媒体等搜索引擎上搜索您的潜在名称。考虑相似的名称和相关术语，以避免法律问题和品牌混淆。'
      },
      {
        question: '我应该在精品店名称中包含我的具体产品或风格吗？',
        answer: '这取决于您的业务战略。包括特定产品（如"鞋"或"珠宝"）可以帮助客户立即理解您的业务，但可能会限制您未来拓展到其他产品类别的能力。更通用的名称提供了更多的灵活性和拓展空间，同时仍然可以通过您的品牌描述和营销来传达您的专长。'
      },
      {
        question: '对于在线和实体精品店，什么样的名称效果最好？',
        answer: '同时运营在线和实体精品店的最佳名称应该易于在 URL 中使用，在社交媒体上易于输入，并在店铺标牌上看起来很好。避免使用过多的特殊字符或数字，确保名称在各种上下文中都能清晰显示，并且易于通过口头进行传播。'
      },
      {
        question: '我的精品店名称应该反映我所在的地理位置吗？',
        answer: '地理位置可以是精品店名称的有力补充，尤其是在建立当地品牌身份时。然而，如果您计划扩展到其他位置或在线销售，仅限于一个位置的名称可能会限制您的增长。如果您包括位置，请确保它是您品牌故事的核心部分，而不仅仅是一个任意的地理参考。'
      },
      {
        question: '我应该在我的精品店名称中使用我自己的名字吗？',
        answer: '使用您自己的名字可以为您的品牌增加个人风格和真实性，尤其是在您因设计眼光或品味而受到关注的情况下。然而，这也会将品牌与个人联系起来，这可能在出售业务或扩展时造成问题。考虑您的长期业务目标，以及个人名称是否与您的品牌身份相符。'
      },
      {
        question: '如何测试精品店名称的有效性？',
        answer: '向您的目标客户征询反馈。进行焦点小组讨论或在线调查，询问他们对潜在名称的第一印象。评估名称的发音难度、令人难忘程度以及它是否准确传达了您的品牌价值。还要考虑名称在社交媒体、网站和店铺标牌上的视觉效果。'
      },
      {
        question: '精品店名称的流行趋势是什么？',
        answer: '当前精品店命名的趋势包括使用描述性的、暗示精心策划和品质的名称；融入文化或全球参考的名称；以及强调可持续性、工艺或独特性的名称。许多精品店正在远离通用术语，转向更具体的、讲述品牌故事的名称。然而，永恒的名称经得起时间的考验，超越了短期趋势。'
      }
    ],
    howToChoose: {
      intro: '为您的精品店选择完美的企业名称需要考虑多个因素，包括您的品牌身份、目标市场和长期业务目标。遵循这些步骤来选择最适合您精品店的名称：',
      steps: [
        {
          title: '定义您的品牌身份和定位',
          description: '在选择名称之前，清楚地定义您的精品店的核心身份。考虑您的目标客户、您销售的产品类型、您的价格点以及您希望传达的品牌个性。您是否专注于可持续的时尚、独立设计师品牌、家居装饰还是礼品？您的名称应该反映这种独特的定位，并与您的目标市场产生共鸣。'
        },
        {
          title: '头脑风暴并生成名称选项',
          description: '使用我们的 AI 精品店企业名称生成器创建大量候选名称。在头脑风暴会议中尝试不同的风格和变体。考虑能够传达您的品牌价值、易于发音和记忆的名称。不要限制自己——生成尽可能多的选项，以便您有很大的范围来选择。'
        },
        {
          title: '评估名称的实用性和可用性',
          description: '一旦您缩小了名称列表范围，请进行彻底的可用性检查。检查 URL 可用性、社交媒体句柄的可用性，以及相关的商标申请。搜索互联网以确保名称中没有相关的现有企业或品牌。这个步骤对于避免法律问题和品牌混淆至关重要。'
        },
        {
          title: '与目标客户进行用户测试',
          description: '向您的目标市场的代表收集反馈。进行焦点小组讨论、在线调查或一对一访谈，询问他们对您的首选名称的看法。注意他们的第一印象、发音、他们认为企业应该销售什么，以及名称是否易于记忆。目标客户的反馈可以提供关键见解，帮助您做出最终决定。'
        },
        {
          title: '考虑扩展性和长期潜力',
          description: '选择一个在未来不会限制您增长的名称。如果您计划扩展您的产品线、开设其他位置或在国际上销售，请确保您的名称足够通用，可以适应这些变化。避免过于狭隘的名称，可能会让您陷入单一产品类别或地理位置。'
        },
        {
          title: '评估品牌视觉和营销潜力',
          description: '想象您的精品店名称在各种营销渠道中的外观——在店铺标牌上、网站上、社交媒体账户上、包装上和广告中。考虑名称的视觉吸引力、它是否适合您想象的品牌美学，以及它在不同上下文中的运作效果。一个伟大的名称应该在视觉和语言上都是强大的。'
        },
        {
          title: '做出决定并注册您的品牌',
          description: '一旦您选择了完美的精品店名称，请立即采取行动确保您的权利。获取域名、注册社交媒体句柄，并根据您计划在哪些市场经营，提交商标申请。标记您的品牌名称以保护您的知识产权。最后，开发您的品牌指南，以确保您的品牌在所有接触点保持一致。'
        }
      ]
    },
    businessNameIdeas: [
      {
        name: '锦绣阁',
        description: '优雅精品店的经典名称，传达精心策划的高级品质、丝绸般的奢华和精致的品味。"锦绣"指的是华丽的刺绣布料，"阁"暗示了一个精选物品的高级空间。'
      },
      {
        name: '雅韵精品',
        description: '强调精致和谐的名称，完美适合出售设计师品牌和独特配饰的精品店。暗示优雅的审美和对细节的关注。'
      },
      {
        name: '素心坊',
        description: '温和而精致，这个名称传达了真实性和对高质量工艺的专注。非常适合强调可持续和道德商业实践的精品店。'
      },
      {
        name: '时尚私邸',
        description: '现代而精致，暗示独家购物体验和个性化服务。完美适合高端时尚精品店或定制零售环境。'
      },
      {
        name: '绮美阁',
        description: '美丽和诗意，这个名称唤起了精致和奇特的东西的感觉。适合销售独特、艺术性产品的精品店，如家居装饰或手工艺品。'
      },
      {
        name: '匠心斋',
        description: '强调工艺和创意的名称，暗示每件产品都是精心制作的。适合销售独立设计师和手工制作商品的精品店。'
      },
      {
        name: '晓月轩',
        description: '温和而优雅，这个名称传达了平静和精致的品味。完美适合销售服装、配饰和生活方式产品的精品店。'
      },
      {
        name: '琢玉坊',
        description: '强调精美工艺和精细加工的名称，暗示高质量和价值。适合出售精选珠宝、配饰和手工制作物品的精品店。'
      },
      {
        name: '雅舍美学',
        description: '现代和精致，这个名称强调对美学和设计的关注。完美适合销售家居装饰、艺术品和设计对象的精品店。'
      },
      {
        name: '芳菲集',
        description: '诗意和优雅，这个名称唤起了新鲜、自然和美丽的感觉。适合销售美容、护肤或自然生活方式产品的精品店。'
      },
      {
        name: '拾光阁',
        description: '温和而怀旧，这个名称暗示了寻找特殊东西的喜悦。适合销售复古物品、二手设计师品牌或独特发现的精品店。'
      },
      {
        name: '凝墨轩',
        description: '艺术性和精致，这个名称传达了创意和文化品味。完美适合销售艺术品、书籍、工艺品和文化物品的精品店。'
      },
      {
        name: '韵味坊',
        description: '强调风格和个性的名称，传达优雅的品味和独特的审美。适合任何专注于精心策划和艺术选择的精品店。'
      },
      {
        name: '璨然集',
        description: '闪闪发光和优雅，这个名称唤起了奢华和精致的感觉。适合销售珠宝、奢侈品和高端配饰的精品店。'
      },
      {
        name: '慧品堂',
        description: '暗示知识和品味的名称，传达对卓越品质的理解和欣赏。完美适合销售艺术品、书籍和文化产品的精品店。'
      },
      {
        name: '婉约坊',
        description: '温柔而精致，这个名称强调优雅和细致入微的审美。适合销售服装、配饰和生活方式产品的高端精品店。'
      },
      {
        name: '诗意阁',
        description: '富有艺术性和浪漫的名称，暗示独特和想象的东西。完美适合销售设计师品牌、艺术品和特殊物品的精品店。'
      },
      {
        name: '云裳坊',
        description: '轻松而优雅，这个名称唤起了柔软、精致和轻盈的感觉。适合销售服装、围巾和面料配饰的精品店。'
      },
      {
        name: '珺玥阁',
        description: '精致而闪闪发光，这个名称暗示美丽和珍贵。适合销售珠宝、奢侈品和精心策划的高端商品的精品店。'
      },
      {
        name: '悠韵轩',
        description: '悠闲而优雅，这个名称传达了品味、放松和精致的购物体验。完美适合销售生活方式产品、家居装饰和设计对象的精品店。'
      }
    ]
  },
  'cafe': {
    slug: 'cafe',
    name: '咖啡馆企业名称生成器',
    title: '免费 AI 咖啡馆企业名称创意生成器',
    description: '使用我们的 AI 咖啡馆企业名称生成器为您的咖啡馆、咖啡店或休闲餐饮业务创建独特而难忘的品牌名称。无论您正在开设一家舒适的邻里咖啡馆、艺术家友好的聚集地还是现代咖啡馆，我们的智能工具都会生成与您的品牌身份和氛围相匹配的精心策划的名称建议。',
    metaDescription: '为您的咖啡馆、咖啡店或茶馆生成独特的企业名称。使用 AI 驱动的名称生成器为您的咖啡馆品牌创建完美的名称。',
    inputLabel: '描述您的咖啡馆业务',
    inputPlaceholder: '例如：舒适的邻里咖啡馆，强调本地烘焙咖啡和工作场所社区',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['温暖与舒适', '现代与工匠', '社区专注', '有趣与创意'],
        default: '温暖与舒适',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in cafes, coffee shops, tea houses, and casual dining establishments. Your expertise encompasses specialty coffee businesses, community gathering spaces, contemporary coffee culture, and cozy neighborhood hangouts. You understand how to create names that evoke warmth, comfort, creativity, and community connection.

When generating cafe business names, follow these guidelines:

Name Characteristics:
- Create names that convey warmth, comfort, and welcoming atmospheres
- Incorporate elements that suggest quality beverages, community, and relaxation
- Consider names that appeal to both regulars and new customers
- Ensure names are memorable, easy to pronounce, and suitable for word-of-mouth marketing
- Include names that work well on storefronts, coffee cups, and social media
- Create names that reflect contemporary coffee culture while remaining approachable
- Consider names that suggest the cafe's unique personality and values

Style Variations:
- Warm & Cozy: Names that evoke comfort, intimacy, and a welcoming environment
- Modern & Artisan: Contemporary names that suggest quality, craftsmanship, and specialty coffee
- Community-Focused: Names that emphasize gathering, connection, and social spaces
- Playful & Creative: Fun, imaginative names with personality and character

Output Requirements:
- Generate exactly the number of names requested
- Provide each name with a detailed explanation of its appeal and relevance
- Ensure each name is pronounceable and suitable for branding
- Consider how names work across different contexts (physical signage, digital platforms, word-of-mouth)
- Include names of varying lengths and styles
- All names should feel inviting and appropriate for a cafe environment
- Ensure names work in local and potentially international markets`,
    useCases: [
      {
        title: '新咖啡馆的启动和品牌定位',
        description: '当您开设一家新咖啡馆时，创建一个能够立即传达您的品牌身份和氛围的名称至关重要。无论您专注于专业咖啡、舒适的社区空间还是现代艺术环境，我们的生成器都会帮助您创建一个名称，该名称吸引您的目标客户并在竞争激烈的咖啡馆市场中脱颖而出。'
      },
      {
        title: '茶馆或专业饮料业务',
        description: '如果您正在开设专注于优质茶、热巧克力、冰沙或其他特种饮料的茶馆或咖啡馆，您需要一个反映您专长和品质承诺的名称。我们的工具生成能够传达您的独特产品提供和品牌身份的名称。'
      },
      {
        title: '现有咖啡馆的重新品牌或扩展',
        description: '如果您正在重新品牌现有咖啡馆或开设新的位置，新的名称可以帮助刷新您的品牌或创建一致的身份系统。我们的生成器帮助您创建与您的业务演变相符、保留现有客户忠诚度的名称，同时吸引新客户。'
      }
    ],
    faqs: [
      {
        question: '咖啡馆名称应该有多长？',
        answer: '理想的咖啡馆名称通常是 1-3 个词或 2-4 个音节。较短的名称更容易记住和传达，而较长的描述性名称可以更清楚地传达您的专长。最重要的是名称要朗朗上口、易于发音，并在咖啡杯、标牌和社交媒体上看起来很好。'
      },
      {
        question: '我的咖啡馆名称应该包含"咖啡"或"咖啡馆"这个词吗？',
        answer: '不一定。包含"咖啡"或"咖啡馆"可以清楚地传达您的业务，但可能会限制您未来拓展到其他饮料或食品提供的能力。更通用的名称提供了更多的灵活性和创意自由，同时仍然可以通过您的品牌描述和营销来传达您是一家咖啡馆。'
      },
      {
        question: '什么样的咖啡馆名称最容易被记住？',
        answer: '最容易被记住的咖啡馆名称通常具有以下特点：一致的节奏（特别是关键词的组合）、容易发音、独特的声音品质、或强烈的视觉联想。避免使用过于复杂或不寻常的拼写。名称应该很容易通过口头传播，并能够立即唤起咖啡馆体验的某个方面。'
      },
      {
        question: '我应该在咖啡馆名称中使用我自己的名字吗？',
        answer: '使用您自己的名字可以增加个人风格和品牌真实性，尤其是在您因特定专长（如烘焙或冲泡技巧）而受到认可的情况下。然而，这也会将品牌与您的个人身份联系起来，这可能在出售业务或扩展时造成问题。考虑您的长期业务目标。'
      },
      {
        question: '咖啡馆名称中的地理位置参考有帮助吗？',
        answer: '地理位置参考（如邻里名称或城市名称）可以帮助建立本地身份，但可能会在扩展到其他位置时限制您。如果您计划保持单一位置或地理位置是您品牌故事的核心部分，这可能效果很好。否则，选择一个更通用的名称，可以随着业务的增长而伸缩。'
      },
      {
        question: '我应该在咖啡馆名称中包含我的品牌承诺吗？',
        answer: '在您的名称中融合品牌承诺（如"有机"、"公平交易"或"可持续"）可以与具有这些价值观的客户产生共鸣。然而，这也会限制您未来改变承诺或扩展您的产品线的灵活性。如果这些价值观是您身份的核心，那么将它们纳入您的名称可能是值得的。'
      },
      {
        question: '什么使咖啡馆名称感到"温暖和舒适"？',
        answer: '"温暖和舒适"的名称通常使用柔和的声音、熟悉的词语或唤起放松和安全感觉的含义。它们可能暗示家庭、社区、自然或舒适的活动。这些名称通常为一个或两个词，易于理解，并在视觉和听觉上都有吸引力。'
      },
      {
        question: '应该如何测试咖啡馆名称的有效性？',
        answer: '向您的目标客户和潜在定期客户征询反馈。进行焦点小组讨论或在线调查，询问他们对潜在名称的第一印象、它唤起什么样的咖啡馆体验，以及他们是否会被名称所吸引。还评估名称在标牌上、菜单上和社交媒体上的外观。'
      },
      {
        question: '对于咖啡馆名称，什么是当前的命名趋势？',
        answer: '当前咖啡馆命名的趋势包括使用本地或地区性参考；融入社区或可持续价值观；使用简化、现代名称；以及强调特定产品（如单来源咖啡或手工糕点）的名称。许多咖啡馆正在采用更个性化、讲述品牌故事的名称，而不是通用术语。'
      },
      {
        question: '我的咖啡馆名称应该有多少创意或比喻？',
        answer: '创意水平取决于您的目标市场和品牌身份。一个专业的第三波咖啡馆可能会受益于更精致、不那么文字游戏的名称，而一个古怪、艺术家友好的咖啡馆可以使用更有想象力或隐喻的名称。确保任何创意元素都能为您的潜在客户所理解，并准确反映您的品牌。'
      }
    ],
    howToChoose: {
      intro: '为您的咖啡馆选择完美的企业名称需要考虑多个因素，包括您的品牌身份、目标客户和咖啡馆的独特氛围。遵循这些步骤来选择最适合您咖啡馆的名称：',
      steps: [
        {
          title: '定义您的咖啡馆身份和氛围',
          description: '在选择名称之前，清楚地定义您的咖啡馆的核心身份和您想要创造的氛围。考虑您是否想要一个舒适的邻里空间、现代艺术馆、忙碌的早晨目的地，还是安静的远程工作空间。您的名称应该立即传达这个身份并吸引您理想的客户。思考您的咖啡馆所代表的感受和价值观。'
        },
        {
          title: '头脑风暴并生成名称选项',
          description: '使用我们的 AI 咖啡馆企业名称生成器创建大量候选名称。尝试不同的风格和变体。考虑能够传达您的品牌价值、咖啡馆的独特品质以及目标客户期望的名称。不要限制自己——生成尽可能多的选项，以便您有很大的范围来选择。'
        },
        {
          title: '评估可用性和可行性',
          description: '一旦您缩小了名称列表范围，请检查可用性。验证域名可用性、社交媒体句柄可用性，并进行商标搜索。搜索互联网以确保名称中没有现有的咖啡馆或竞争对手。检查名称在本地是否容易获取，以及在您的地理位置是否有任何不利的含义。'
        },
        {
          title: '考虑语言和文化相关性',
          description: '如果您计划吸引多种语言或文化背景的客户，请研究您的名称在不同语言中的含义和发音。确保名称不会在任何语言中产生不幸的含义，并且易于所有目标客户发音和拼写。这对于国际咖啡馆或多文化社区特别重要。'
        },
        {
          title: '与目标客户进行用户测试',
          description: '向您的目标市场的代表收集反馈。在调查或焦点小组中询问他们的第一印象、他们期望从使用这个名称的咖啡馆购买什么，以及名称是否容易记住和发音。收集他们对咖啡馆品质和氛围的期望的反馈。这个反馈可以指导您的最终选择。'
        },
        {
          title: '可视化品牌实现',
          description: '想象您的咖啡馆名称在各种实现中的外观——在店铺标牌、咖啡杯、菜单上、在线和社交媒体上。考虑名称的视觉吸引力、它与您的品牌美学的融合，以及它在不同设计应用中的工作效果。伟大的咖啡馆名称应该在视觉和语言上都很强大。'
        },
        {
          title: '确保您的品牌并启动营销',
          description: '选择名称后，立即保护您的品牌。获取域名、注册所有相关社交媒体句柄，并根据需要提交商标申请。开发您的品牌指南和视觉身份。开始建立您的品牌身份，通过提前向您的社区宣布您的咖啡馆，以建立期待并建立客户基础。'
        }
      ]
    },
    businessNameIdeas: [
      {
        name: '温煦轩',
        description: '温暖和舒适的名称，暗示一个欢迎、舒适的空间，客人可以放松和享受。完美适合邻里咖啡馆强调社区和舒适的氛围。'
      },
      {
        name: '晨韵咖啡',
        description: '诗意和舒适，这个名称暗示开始新一天的仪式和咖啡馆文化。适合早间咖啡馆或强调日常咖啡仪式重要性的地方。'
      },
      {
        name: '悠闲集',
        description: '放松和社区焦点，这个名称暗示一个人们可以聚集、放松和连接的空间。适合社区导向的咖啡馆或社交聚集地。'
      },
      {
        name: '匠心烘焙咖啡',
        description: '强调工艺和品质，这个名称暗示用心烘焙和优质咖啡豆的承诺。完美适合专业咖啡馆或强调其烘焙工艺的地方。'
      },
      {
        name: '云端咖啡',
        description: '梦幻和轻盈，这个名称暗示逃离日常生活和进入宁静空间。适合宁静、冥想或艺术导向的咖啡馆。'
      },
      {
        name: '融茶坊',
        description: '温和和融合，这个名称暗示不同茶和咖啡选项的融合。适合茶和咖啡杂交馆或多样化饮料选择的地方。'
      },
      {
        name: '意韵咖啡馆',
        description: '艺术和优雅，这个名称暗示咖啡馆是文化和创意表达的空间。适合艺术馆咖啡馆或强调文化和创意的地方。'
      },
      {
        name: '闲适角',
        description: '舒适和个人，这个名称暗示一个安全的角落，客人可以独处、工作或与朋友聚集。适合远程工作友好的咖啡馆。'
      },
      {
        name: '焙语咖啡',
        description: '简洁和现代，这个名称暗示烘焙过程的艺术和语言。适合现代专业咖啡馆强调其制作过程。'
      },
      {
        name: '心居咖啡',
        description: '温暖和个人，这个名称暗示咖啡馆作为第二个家的概念。适合强调舒适、欢迎和社区的邻里咖啡馆。'
      },
      {
        name: '时光驿站',
        description: '怀旧和聚集，这个名称暗示咖啡馆作为旅途中停止和重新连接的地方。适合社区咖啡馆强调其重要的社交角色。'
      },
      {
        name: '灵感馆',
        description: '创意和现代，这个名称暗示咖啡馆作为灵感和想象力的来源。适合艺术家友好的咖啡馆或创意工作空间。'
      },
      {
        name: '醇香轩',
        description: '精致和品质焦点，这个名称暗示对咖啡风味和精选豆品的关注。适合强调咖啡质量和品尝体验的专业咖啡馆。'
      },
      {
        name: '朝阳咖啡',
        description: '积极和充满希望，这个名称暗示新的开始和早晨的活力。适合早晨忙碌的咖啡馆或强调新鲜开始的地方。'
      },
      {
        name: '逸享咖啡',
        description: '放纵和放松，这个名称暗示享受优质咖啡和舒适时刻的奢侈。适合高档或休闲咖啡馆强调品质和放松。'
      },
      {
        name: '流光茶社',
        description: '艺术和时间的流逝，这个名称暗示咖啡馆作为反思和观察时间通过的地方。适合哲学或艺术导向的咖啡馆。'
      },
      {
        name: '素心坊',
        description: '简洁和真实，这个名称暗示对真实咖啡体验和质量的专注。适合强调简洁性和真实性的现代咖啡馆。'
      },
      {
        name: '漫步咖啡',
        description: '放松和悠闲，这个名称暗示放慢步伐和享受此刻的邀请。适合强调放松和正念的咖啡馆。'
      },
      {
        name: '邂逅咖啡馆',
        description: '浪漫和聚集，这个名称暗示巧妙相遇和连接的地方。适合社交或约会友好的咖啡馆。'
      },
      {
        name: '韵味咖啡',
        description: '品尝和个性，这个名称暗示每杯咖啡都有其独特的品味和个性。适合强调品质和特色咖啡的咖啡馆。'
      }
    ]
  },
  'cake': {
    slug: 'cake',
    name: '蛋糕企业名称生成器',
    title: '免费 AI 蛋糕企业名称创意生成器',
    description: '使用我们的 AI 蛋糕企业名称生成器为您的蛋糕店、面包店或定制蛋糕业务创建独特而难忘的品牌名称。无论您专注于艺术定制设计、手工烘焙还是庆祝蛋糕，我们的智能工具都会生成与您的品牌身份和甜蜜工艺相匹配的精心策划的名称建议。',
    metaDescription: '为您的蛋糕店、面包店或定制蛋糕业务生成独特的企业名称。使用 AI 驱动的名称生成器为您的烘焙品牌创建完美的名称。',
    inputLabel: '描述您的蛋糕业务',
    inputPlaceholder: '例如：艺术定制蛋糕店，专门为婚礼和特殊活动制作精美的手工蛋糕',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['优雅与精致', '甜蜜与好玩', '工匠与精心制作', '庆祝与欢乐'],
        default: '优雅与精致',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in cake businesses, bakeries, custom cake design, and confectionery services. Your expertise encompasses artisan cake makers, custom wedding cakes, cupcake shops, wholesale bakeries, and celebration cake businesses. You understand how to create names that evoke sweetness, craftsmanship, joy, and celebration.

When generating cake business names, follow these guidelines:

Name Characteristics:
- Create names that convey sweetness, artistry, and celebration
- Incorporate elements that suggest quality ingredients, handcrafted designs, and special occasions
- Consider names that appeal to event planners, families, and celebration seekers
- Ensure names are memorable, easy to pronounce, and convey indulgence and joy
- Include names that work well on storefronts, packaging, and social media
- Create names that reflect both tradition and contemporary cake design trends
- Consider names that suggest personalization and custom service capabilities

Style Variations:
- Elegant & Sophisticated: Names that evoke refinement and special occasions
- Sweet & Playful: Fun, whimsical names that suggest indulgence and joy
- Artisan & Crafted: Names that emphasize handmade quality and artistry
- Celebratory & Joyful: Names that convey celebration, happiness, and special moments

Output Requirements:
- Generate exactly the number of names requested
- Provide each name with a detailed explanation of its appeal and relevance
- Ensure each name is pronounceable and suitable for branding
- Consider how names work across different contexts (weddings, birthdays, corporate events)
- Include names of varying lengths and styles
- All names should feel premium and appropriate for a cake business
- Ensure names work in local and potentially international markets`,
    useCases: [
      {
        title: '定制婚礼蛋糕业务启动',
        description: '当您推出专门从事定制婚礼蛋糕和特殊活动设计的高端蛋糕业务时，您需要一个传达优雅、工艺和个性化服务的名称。我们的生成器帮助您创建一个名称，该名称吸引活动策划者、新娘和客户，并在高端庆祝蛋糕市场中建立您的品牌。'
      },
      {
        title: '本地面包店或杯子蛋糕店',
        description: '对于面向社区的本地面包店或杯子蛋糕店，提供日常享受和特殊场合蛋糕，您需要一个名称，该名称传达可访问性、品质和欢迎的温暖。我们的工具生成能够吸引邻里客户和定期访客的名称。'
      },
      {
        title: '在线蛋糕配送或全国配送服务',
        description: '对于在线蛋糕业务或全国配送服务，您需要一个名称，该名称在数字平台上脱颖而出，传达品质、新鲜度和可靠的配送。我们的生成器创建在网站、社交媒体和电子邮件营销上有效的名称。'
      }
    ],
    faqs: [
      {
        question: '蛋糕店名称应该提及"蛋糕"或"面包店"吗？',
        answer: '不一定。包含"蛋糕"或"面包店"可以清楚地传达您的业务，但可能会限制您的品牌标识。更富有想象力的名称提供了品牌灵活性和创意自由。然而，对于本地业务，在名称中包含"蛋糕"或"面包店"可能有助于 SEO 和本地搜索可见性。'
      },
      {
        question: '什么使蛋糕店名称"优雅和精致"？',
        answer: '优雅的蛋糕店名称通常使用精细的语言、经典的参考或暗示工艺和精致品味的含义。它们通常避免过于休闲或幼稚的语言，而是强调品质和精心设计。这些名称可能包含关于奢华、艺术或庆祝的暗示。'
      },
      {
        question: '我应该在蛋糕店名称中使用我的名字或昵称吗？',
        answer: '使用您的名字可以为品牌增加个人风格，特别是在您因特定的蛋糕设计或配方而出名的情况下。然而，这也会将品牌与您的个人身份联系起来。考虑您的长期目标——您是否计划保持个人品牌，还是创建可以转移或扩展的独立品牌实体？'
      },
      {
        question: '蛋糕店名称应该有多长？',
        answer: '理想的蛋糕店名称通常是 1-3 个词或 2-4 个音节。较短的名称更容易记住和传达，而较长的描述性名称可以更清楚地传达您的专长（例如"艺术婚礼蛋糕"）。最重要的是名称要易于记住、容易发音，并在包装和标牌上看起来很好。'
      },
      {
        question: '我应该在蛋糕店名称中包含"定制"或"手工"吗？',
        answer: '在您的名称中突出"定制"或"手工"可以强调您的工艺和个性化服务，这对于高端蛋糕业务很有价值。然而，这也会给您的品牌增加特定含义。如果您计划提供库存蛋糕和定制选项的混合，更通用的名称可能提供更多的灵活性。'
      },
      {
        question: '地理位置参考对蛋糕店名称有帮助吗？',
        answer: '地理位置参考可以帮助建立本地身份，特别是对于本地面包店。然而，如果您计划在线配送或扩展到多个位置，基于位置的名称可能会限制您。评估您的业务模式和增长计划，以确定地理参考是否合适。'
      },
      {
        question: '什么使蛋糕店名称感到"甜蜜和好玩"？',
        answer: '"甜蜜和好玩"的名称通常使用轻松的语言、文字游戏、有趣的类比或暗示乐趣和享受的含义。这些名称可能包含关于甜蜜、庆祝或幻想的参考。它们通常在音调上更休闲和平易近人，特别是对于面向儿童或以庆祝为中心的业务。'
      },
      {
        question: '如何测试蛋糕店名称的有效性？',
        answer: '向您的目标客户收集反馈——活动策划者、新娘、父母或日常消费者（取决于您的焦点）。进行焦点小组讨论或在线调查。询问他们对名称的第一印象、他们对使用这个名称的蛋糕店的期望，以及名称是否容易记住。评估名称在包装和社交媒体上的视觉效果。'
      },
      {
        question: '蛋糕店名称的当前趋势是什么？',
        answer: '当前蛋糕店命名的趋势包括使用工匠或手工制作的参考；融入对可持续性或有机成分的承诺；使用更现代和最小化的名称；以及强调特定专长（如无麸质、素食或主题蛋糕）的名称。许多蛋糕企业正在采用讲述品牌故事的更个性化名称。'
      },
      {
        question: '我的蛋糕店名称应该有多少创意或比喻？',
        answer: '创意水平取决于您的目标市场。高端婚礼蛋糕业务可能会受益于更精致的名称，而针对儿童的杯子蛋糕店或主题蛋糕业务可以使用更有想象力或俏皮的名称。确保任何创意元素都能为您的潜在客户所理解，并准确反映您的品牌身份和产品。'
      }
    ],
    howToChoose: {
      intro: '为您的蛋糕业务选择完美的企业名称需要考虑多个因素，包括您的蛋糕的风格、目标客户和您的品牌定位。遵循这些步骤来选择最适合您蛋糕业务的名称：',
      steps: [
        {
          title: '定义您的蛋糕业务身份',
          description: '在选择名称之前，清楚地定义您的蛋糕业务的核心身份。您是专注于高端婚礼蛋糕、日常邻里面包店、主题蛋糕还是以杯子蛋糕为中心的业务？您的目标客户是谁——新娘、家庭、企业客户？您想要传达的品牌个性是什么——优雅、俏皮、工艺导向还是庆祝性的？'
        },
        {
          title: '头脑风暴并生成名称选项',
          description: '使用我们的 AI 蛋糕企业名称生成器创建大量候选名称。尝试不同的风格和变体。考虑能够传达您的蛋糕设计哲学、工艺水平和品牌个性的名称。不要限制自己——生成尽可能多的选项，以便您有很大的范围来选择。'
        },
        {
          title: '评估名称的实用性',
          description: '一旦您缩小了名称列表范围，请检查实用性。验证域名可用性、社交媒体句柄（特别是 Instagram，对蛋糕业务至关重要），并进行商标搜索。搜索互联网以确保没有同名的现有蛋糕企业。检查名称是否易于拼写和记住。'
        },
        {
          title: '考虑视觉品牌影响',
          description: '想象您的蛋糕店名称在各种视觉应用中的外观——在蛋糕盒上、包装纸上、社交媒体标志上、菜单上和店铺标牌上。考虑名称与您设想的视觉美学的融合。蛋糕业务强烈依赖视觉，所以您的名称应该与您的品牌视觉身份相容。'
        },
        {
          title: '与目标客户进行用户测试',
          description: '向您的目标市场的代表收集反馈。进行调查或焦点小组讨论。询问他们对名称的第一印象、他们认为该业务会提供什么样的蛋糕、名称是否容易记住和传播，以及名称是否准确反映您的品牌身份。根据反馈进行调整。'
        },
        {
          title: '评估未来扩展潜力',
          description: '选择一个不会限制您业务增长的名称。如果您计划扩展您的产品线（例如从婚礼蛋糕到所有活动蛋糕）或开设多个位置，请确保您的名称足够通用。避免过于狭隘的名称，这可能会限制您对某些产品类别或专长的认知。'
        },
        {
          title: '确保您的品牌并启动营销',
          description: '选择名称后，立即保护您的品牌。获取域名、注册所有相关社交媒体句柄（特别是 Instagram），并根据需要提交商标申请。开发您的品牌指南。开始通过社交媒体、本地博主合作或早期客户活动建立营销，以在推出时建立期待和动力。'
        }
      ]
    },
    businessNameIdeas: [
      {
        name: '玉糕坊',
        description: '精致和优雅，这个名称暗示蛋糕的精细工艺和美丽。适合高端定制蛋糕业务强调工艺和优质。'
      },
      {
        name: '甜蜜梦想',
        description: '梦幻和庆祝，这个名称暗示蛋糕为特殊时刻带来的喜悦和魔法。适合婚礼或活动蛋糕业务。'
      },
      {
        name: '馨香烘焙',
        description: '温暖和舒适，这个名称暗示家制蛋糕的温暖和吸引力。适合邻里面包店或强调家庭烘焙工艺的业务。'
      },
      {
        name: '艺蛋坊',
        description: '创意和工匠，这个名称暗示蛋糕设计中的艺术。适合强调定制设计和艺术蛋糕的业务。'
      },
      {
        name: '幸福时刻',
        description: '庆祝和喜悦，这个名称暗示蛋糕与特殊时刻和庆祝的联系。适合以活动为中心的蛋糕业务。'
      },
      {
        name: '享糕时光',
        description: '放纵和乐趣，这个名称暗示享受美味蛋糕的愉悦。适合日常蛋糕或杯子蛋糕业务强调享受。'
      },
      {
        name: '匠心蛋糕',
        description: '工艺和质量焦点，这个名称暗示对精心烘焙和设计的承诺。适合强调手工制作和品质的面包店。'
      },
      {
        name: '丝滑烘焙',
        description: '精细和优雅，这个名称暗示蛋糕的光滑、精致纹理。适合强调高级烘焙技术和成分的业务。'
      },
      {
        name: '缤纷甜蜜',
        description: '充满活力和有趣，这个名称暗示各种多彩的蛋糕选项。适合为儿童或主题活动提供彩色和俏皮蛋糕的业务。'
      },
      {
        name: '雅蕾烘焙坊',
        description: '精致和女性化，这个名称暗示优雅的蛋糕设计和细致的工艺。适合高端婚礼或活动蛋糕业务。'
      },
      {
        name: '爱之烘焙',
        description: '温暖和个人，这个名称暗示蛋糕中投入的爱和关怀。适合强调热情和个性化服务的业务。'
      },
      {
        name: '奢华层味',
        description: '精致和高级，这个名称暗示精美的多层蛋糕和精细的风味。适合高端定制蛋糕业务。'
      },
      {
        name: '糖心梦工场',
        description: '创意和想象力，这个名称暗示蛋糕作为梦想和幻想实现的地方。适合主题或角色蛋糕业务。'
      },
      {
        name: '晶莹甜心',
        description: '闪闪发光和精致，这个名称暗示精美装饰的精美蛋糕。适合强调装饰设计和优雅的业务。'
      },
      {
        name: '柔情蛋糕',
        description: '温柔和周到，这个名称暗示烘焙中的温柔护理和关注。适合强调个性化和客户关怀的业务。'
      },
      {
        name: '金色烘焙坊',
        description: '高级和贵族，这个名称暗示优质成分和高级烘焙。适合强调使用优质黄油、巧克力和成分的业务。'
      },
      {
        name: '甜蜜灵感',
        description: '创意和灵感，这个名称暗示每个蛋糕都是定制灵感的结果。适合强调定制设计和创意咨询的业务。'
      },
      {
        name: '蕾丝花园',
        description: '优雅和自然，这个名称暗示花卉装饰和精致设计。适合强调自然灵感和花卉设计的蛋糕业务。'
      },
      {
        name: '雪域甜蜜',
        description: '清爽和精致，这个名称暗示光滑的白色蛋糕和精细的冰糖霜。适合强调白色婚礼蛋糕和精细装饰的业务。'
      },
      {
        name: '钻石蛋糕',
        description: '优质和高级，这个名称暗示蛋糕的贵族品质和亮晶晶的外观。适合高端定制蛋糕业务。'
      }
    ]
  },
  'candle': {
    slug: 'candle',
    name: '蜡烛企业名称生成器',
    title: '免费 AI 蜡烛企业名称创意生成器',
    description: '使用我们的 AI 蜡烛企业名称生成器为您的蜡烛公司、香氛企业或工匠蜡烛业务创建独特而难忘的品牌名称。无论您专注于手工蜡烛、天然蜡烛还是家居芬香体验，我们的智能工具都会生成与您的品牌身份和产品价值相匹配的精心策划的名称建议。',
    metaDescription: '为您的蜡烛公司、芬香企业或工匠蜡烛业务生成独特的企业名称。使用 AI 驱动的名称生成器为您的蜡烛品牌创建完美的名称。',
    inputLabel: '描述您的蜡烛业务',
    inputPlaceholder: '例如：手工天然蜡烛公司，使用可持续成分和独特的香气配合，强调生态友好和工匠工艺',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['温暖与舒适', '自然与生态友好', '豪华与精致', '工匠与手工制作'],
        default: '温暖与舒适',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in candle businesses, home fragrance companies, and artisan candle makers. Your expertise encompasses luxury candles, eco-friendly candles, handmade candle crafts, scent creation, and home ambiance businesses. You understand how to create names that evoke warmth, relaxation, sustainability, and artisanal quality.

When generating candle business names, follow these guidelines:

Name Characteristics:
- Create names that convey warmth, comfort, and relaxation
- Incorporate elements that suggest natural ingredients, artistry, and home ambiance
- Consider names that appeal to wellness-conscious consumers and home decor enthusiasts
- Ensure names are memorable, easy to pronounce, and evoke sensory experiences
- Include names that work well on luxury packaging, websites, and retail shelves
- Create names that reflect both sustainability values and contemporary design trends
- Consider names that suggest scent, atmosphere, and emotional benefits

Style Variations:
- Warm & Atmospheric: Names that evoke coziness, warmth, and inviting spaces
- Natural & Eco-Friendly: Names that suggest sustainable ingredients and environmental consciousness
- Luxurious & Sophisticated: Names that convey premium quality and refinement
- Artisan & Handcrafted: Names that emphasize handmade quality and artistry

Output Requirements:
- Generate exactly the number of names requested
- Provide each name with a detailed explanation of its appeal and relevance
- Ensure each name is pronounceable and suitable for branding
- Consider how names work across different contexts (retail, online, luxury gifts)
- Include names of varying lengths and styles
- All names should feel premium and appropriate for a candle business
- Ensure names work in local and potentially international markets`,
    useCases: [
      {
        title: '手工蜡烛工艺业务启动',
        description: '当您推出专注于手工蜡烛制作、小批量生产和独特香气配合的工匠蜡烛业务时，您需要一个传达工艺、品质和创意的名称。我们的生成器帮助您创建一个名称，该名称吸引家居装饰爱好者、礼品购买者和对工艺蜡烛有欣赏的客户。'
      },
      {
        title: '可持续和天然蜡烛品牌',
        description: '对于强调生态友好成分、可持续实践和自然香气的蜡烛品牌，您需要一个名称，该名称传达环境意识和健康承诺。我们的工具生成反映可持续价值观和自然起源的名称。'
      },
      {
        title: '高级蜡烛和家居芬香零售',
        description: '对于高级蜡烛和家居芬香零售业务或线上商店，您需要一个名称，该名称在豪华市场中脱颖而出，传达品质、精致和生活方式。我们的生成器创建适合高端零售、礼品市场和电子商务的名称。'
      }
    ],
    faqs: [
      {
        question: '蜡烛企业名称应该提及"蜡烛"或"芬香"吗？',
        answer: '不一定。在您的名称中包含"蜡烛"或"芬香"可以清楚地传达您的产品，但可能会限制您的品牌扩展潜力。更抽象或诗意的名称提供了品牌灵活性和创意自由。然而，对于新业务，包含"蜡烛"可能有助于搜索可见性和品牌清晰度。'
      },
      {
        question: '什么使蜡烛企业名称"温暖和舒适"？',
        answer: '"温暖和舒适"的蜡烛名称通常使用柔和的声音、温暖的含义（如光、火、怀抱）或暗示放松和家庭的词语。它们通常给人一种安全、舒适和欢迎的感觉。这些名称可能包含关于自然（壁炉、家庭、日落）的参考。'
      },
      {
        question: '我应该在蜡烛企业名称中使用我的名字吗？',
        answer: '使用您的名字可以增加个人品牌身份和工匠的真实性，特别是如果您以特定的香气创意或烛光设计而闻名。然而，这也会将品牌与您的个人身份联系起来。考虑您的长期目标——您是否计划保持个人品牌，还是创建可以独立运营和扩展的品牌实体？'
      },
      {
        question: '蜡烛企业名称应该有多长？',
        answer: '理想的蜡烛企业名称通常是 1-4 个词或 2-5 个音节。较短的名称更容易记住和容易使用，而较长的描述性名称可以更清楚地传达您的专长或价值观。最重要的是名称要易于记住、容易发音，并在蜡烛标签、包装和标牌上看起来很好。'
      },
      {
        question: '我的蜡烛企业名称应该反映我使用的香气吗？',
        answer: '在您的名称中暗示特定的香气（如"茉莉"或"薰衣草"）可以传达您的产品风格，但可能会限制您未来添加其他香气的灵活性。更通用的名称允许您随着时间的推移扩展您的产品线，而无需改变品牌标识。'
      },
      {
        question: '我应该在蜡烛企业名称中强调"天然"或"生态友好"吗？',
        answer: '突出"天然"或"生态友好"可以与具有这些价值观的消费者产生强烈共鸣，并为您的品牌增加价值。然而，这也意味着您需要始终坚持这些承诺。如果您的产品线变得多样化，或者如果您想保留未来改变成分或方法的灵活性，这可能会带来问题。'
      },
      {
        question: '什么使蜡烛企业名称感到"豪华和精致"？',
        answer: '"豪华和精致"的蜡烛名称通常使用优雅的语言、精美的声音或暗示奢华、珍贵或高级的含义。它们可能包含关于珠宝、高级成分或奢华体验的参考。这些名称在音调上倾向于正式和精致，特别是对于高端市场。'
      },
      {
        question: '如何测试蜡烛企业名称的有效性？',
        answer: '向您的目标客户收集反馈——家居装饰爱好者、礼品购买者、以及对自然和可持续产品感兴趣的人。进行焦点小组讨论或在线调查。询问他们对名称的第一印象、他们认为使用这个名称的蜡烛会是什么样子，以及名称是否容易记住。评估名称在包装上的视觉效果。'
      },
      {
        question: '蜡烛企业命名的当前趋势是什么？',
        answer: '当前蜡烛企业命名的趋势包括强调可持续性和天然成分；使用与自然灵感相关的诗意名称；突出手工制作和工匠质量；以及融入健康和保健理念的名称。许多蜡烛企业正在采用更精致、故事驱动的名称，而不是基于功能的名称。'
      },
      {
        question: '我的蜡烛企业名称应该有多少创意或比喻？',
        answer: '创意水平取决于您的目标市场和品牌定位。高端或设计师蜡烛可能受益于更抽象或诗意的名称，而日常或实用蜡烛可以使用更直接的名称。确保任何创意元素都能为您的潜在客户所理解，并准确反映您的品牌身份和产品理念。'
      }
    ],
    howToChoose: {
      intro: '为您的蜡烛企业选择完美的企业名称需要考虑多个因素，包括您的品牌价值观、目标客户和您的产品独特性。遵循这些步骤来选择最适合您蜡烛企业的名称：',
      steps: [
        {
          title: '定义您的蜡烛企业品牌身份',
          description: '在选择名称之前，清楚地定义您的蜡烛企业的核心身份。您是专注于手工蜡烛、天然和可持续蜡烛、高端豪华蜡烛，还是特定香气或设计美学？您的目标客户是谁——家居装饰爱好者、礼品购买者、健康意识消费者？您的品牌代表什么价值观——手工工艺、可持续性、奢华、放松？'
        },
        {
          title: '头脑风暴并生成名称选项',
          description: '使用我们的 AI 蜡烛企业名称生成器创建大量候选名称。尝试不同的风格和变体。考虑能够传达您的品牌价值观、产品品质和目标客户情感反应的名称。不要限制自己——生成尽可能多的选项，以便您有很大的范围来选择。'
        },
        {
          title: '评估名称的实用性和可用性',
          description: '一旦您缩小了名称列表范围，请检查可用性。验证域名可用性、社交媒体句柄可用性（特别是 Instagram，对视觉产品很重要），并进行商标搜索。搜索互联网以确保没有同名的现有蜡烛企业。检查名称是否易于拼写和国际发音。'
        },
        {
          title: '考虑视觉品牌和包装潜力',
          description: '想象您的蜡烛企业名称在各种视觉应用中的外观——在蜡烛标签上、豪华包装上、产品盒上、网站上和社交媒体账户上。考虑名称与您设想的视觉美学和品牌颜色的融合。蜡烛业务高度依赖视觉吸引力，所以您的名称应该在视觉上与您的品牌相容。'
        },
        {
          title: '与目标客户进行用户测试',
          description: '向您的目标市场的代表收集反馈。进行调查或焦点小组讨论。询问他们对名称的第一印象、他们认为该企业会销售什么样的蜡烛、名称是否暗示品质和风格，以及名称是否容易记住和分享。评估他们的情感反应和购买意向。'
        },
        {
          title: '评估品牌扩展和增长潜力',
          description: '选择一个在您的业务增长时不会限制您的名称。如果您计划添加新产品线（如香氛配件或家居产品）或扩展到零售和在线销售，请确保您的名称足够通用。避免过于狭隘的名称，这可能会在您试图扩展时变得限制性。'
        },
        {
          title: '确保您的品牌并启动营销',
          description: '选择名称后，立即保护您的品牌。获取域名、注册所有相关社交媒体句柄，并根据需要提交商标申请。开发您的品牌指南和视觉身份系统。开始通过社交媒体、影响者合作和本地礼品店关系建立营销，以在推出时建立品牌知晓度。'
        }
      ]
    },
    businessNameIdeas: [
      {
        name: '暖光手作',
        description: '温暖和手工制作的感觉，这个名称暗示手工蜡烛和它们创造的温暖光线。适合强调工匠工艺和温暖氛围的蜡烛业务。'
      },
      {
        name: '纯心香家',
        description: '自然和纯净，这个名称暗示天然成分和家居香氛。适合强调天然蜡烛和家居健康的业务。'
      },
      {
        name: '诗意烛光',
        description: '浪漫和艺术性，这个名称暗示蜡烛创造的诗意和梦幻质量。适合专注于设计和氛围创造的高级蜡烛业务。'
      },
      {
        name: '舒心坊',
        description: '舒适和放松，这个名称暗示蜡烛能够放松和舒适。适合强调放松和健康益处的蜡烛业务。'
      },
      {
        name: '生命之光',
        description: '能量和生活力，这个名称暗示蜡烛作为生命和活力的光源。适合强调自然、活力和生活方式焦点的业务。'
      },
      {
        name: '森呼吸',
        description: '自然和清新，这个名称暗示森林香气和天然香氛。适合专注于植物和生态友好成分的蜡烛业务。'
      },
      {
        name: '月韵坊',
        description: '宁静和冥想，这个名称暗示在月光下放松和宁静时刻。适合强调放松和冥想气氛的蜡烛业务。'
      },
      {
        name: '琥珀光辉',
        description: '温暖和奢华，这个名称暗示琥珀色的蜡烛和温暖的光线。适合强调高级成分和豪华设计的蜡烛业务。'
      },
      {
        name: '芳园梦',
        description: '花卉和梦幻，这个名称暗示花卉香氛和梦幻气氛。适合强调天然花卉香气的蜡烛业务。'
      },
      {
        name: '晓露蜡语',
        description: '自然和新鲜，这个名称暗示早晨露水和自然香气。适合强调新鲜、清爽香氛的蜡烛业务。'
      },
      {
        name: '余晖居舍',
        description: '温暖和家庭，这个名称暗示夕阳和舒适的家庭环境。适合强调创建温暖家居氛围的蜡烛业务。'
      },
      {
        name: '琉璃香',
        description: '精致和透明，这个名称暗示精美的玻璃蜡烛和清晰的香气。适合强调设计和高级香氛的业务。'
      },
      {
        name: '心岸',
        description: '和平和安全，这个名称暗示在暴风雨中的避难所。适合强调舒适和心理健康益处的蜡烛业务。'
      },
      {
        name: '星汇之光',
        description: '魔幻和特殊，这个名称暗示星光和特殊时刻。适合强调创造特殊时刻和魔幻气氛的蜡烛业务。'
      },
      {
        name: '薄雾花园',
        description: '柔软和自然，这个名称暗示花园和早晨薄雾。适合强调天然和花卉香氛的蜡烛业务。'
      },
      {
        name: '琳琅烛光',
        description: '精美和多样，这个名称暗示精美的蜡烛和多种颜色选择。适合强调设计多样性和工艺的蜡烛业务。'
      },
      {
        name: '燃情之舞',
        description: '充满激情和能量，这个名称暗示蜡烛的活动光焰。适合强调创意和能量的蜡烛业务。'
      },
      {
        name: '慧思烛坊',
        description: '思想和光明，这个名称暗示蜡烛提供的清晰性和光照。适合强调冥想和设计思维的蜡烛业务。'
      },
      {
        name: '晨曦手作',
        description: '新鲜和手工制作，这个名称暗示新一天的开始和手工工艺。适合强调早晨香气和工匠质量的蜡烛业务。'
      },
      {
        name: '沉香之家',
        description: '奢华和静修，这个名称暗示沉香和宁静的家庭空间。适合强调高级成分和家居宁静的蜡烛业务。'
      }
    ]
  },
  'candy': {
    slug: 'candy',
    name: '糖果企业名称生成器',
    title: '免费 AI 糖果企业名称创意生成器',
    description: '使用我们的 AI 糖果企业名称生成器为您的糖果公司、甜品店或糖果制造业务创建独特而难忘的品牌名称。无论您专注于手工糖果、复古糖果还是创意糖果设计，我们的智能工具都会生成与您的品牌身份和甜蜜吸引力相匹配的精心策划的名称建议。',
    metaDescription: '为您的糖果公司、甜品店或糖果制造业务生成独特的企业名称。使用 AI 驱动的名称生成器为您的糖果品牌创建完美的名称。',
    inputLabel: '描述您的糖果业务',
    inputPlaceholder: '例如：手工糖果店，专门生产复古影院糖果和创意主题糖果，强调品质和怀旧。',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['甜蜜与好玩', '怀旧与经典', '奇特与魔幻', '现代与工匠'],
        default: '甜蜜与好玩',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in candy businesses, confectionery companies, and sweet treat enterprises. Your expertise encompasses artisan candy makers, nostalgic candy shops, gourmet sweets, bulk candy retailers, and specialty confectionery. You understand how to create names that evoke joy, nostalgia, sweetness, and whimsy.

When generating candy business names, follow these guidelines:

Name Characteristics:
- Create names that convey sweetness, fun, and joy
- Incorporate elements that suggest indulgence, playfulness, and special treats
- Consider names that appeal to children, families, and adults seeking nostalgia
- Ensure names are memorable, easy to pronounce, and convey happiness
- Include names that work well on candy packaging, storefronts, and online platforms
- Create names that reflect both classic candy traditions and contemporary design trends
- Consider names that suggest specific candy types or experience qualities

Style Variations:
- Sweet & Playful: Fun, whimsical names that suggest indulgence and joy
- Nostalgic & Classic: Names that evoke memories and classic candy traditions
- Whimsical & Magical: Imaginative, fantastical names with personality
- Modern & Artisan: Contemporary names that suggest quality and craftsmanship

Output Requirements:
- Generate exactly the number of names requested
- Provide each name with a detailed explanation of its appeal and relevance
- Ensure each name is pronounceable and suitable for branding
- Consider how names work across different contexts (retail, wholesale, online)
- Include names of varying lengths and styles
- All names should feel fun and appropriate for a candy business
- Ensure names work in local and potentially international markets`,
    useCases: [
      {
        title: '手工糖果店或糖果工坊启动',
        description: '当您推出专注于手工糖果制作、独特配方和自定义糖果混合的手工糖果业务时，您需要一个传达创意、品质和手工工艺的名称。我们的生成器帮助您创建一个名称，该名称吸引糖果爱好者、礼品购买者和寻求独特甜蜜体验的客户。'
      },
      {
        title: '复古或怀旧糖果店',
        description: '对于专注于复古糖果、经典甜味和怀旧体验的糖果店，您需要一个名称，该名称唤起美好的记忆和经典感受。我们的工具生成能够传达怀旧吸引力和传统糖果品质的名称。'
      },
      {
        title: '在线糖果零售或批发业务',
        description: '对于在线糖果零售或批发业务，您需要一个名称，该名称在数字平台上脱颖而出，传达多样性、品质和便捷性。我们的生成器创建在网站、社交媒体和电子邮件营销上有效的名称。'
      }
    ],
    faqs: [
      {
        question: '糖果企业名称应该有多长？',
        answer: '理想的糖果企业名称通常是 1-3 个词或 2-4 个音节。较短的名称更容易记住和传达，特别是对于可能由儿童阅读的标签。较长的描述性名称可以传达特定产品（如"复古电影糖果"），但应仍然易于发音和记忆。'
      },
      {
        question: '我应该在糖果企业名称中使用我的名字吗？',
        answer: '使用您的名字可以为品牌增加个人风格和真实性，特别是如果您因特定的糖果配方或创意而闻名。然而，这也会将品牌与您的个人身份联系起来。考虑您的长期目标——您是否计划保持个人品牌，还是创建可以独立运营和扩展的品牌实体？'
      },
      {
        question: '什么使糖果企业名称感到"甜蜜和好玩"？',
        answer: '"甜蜜和好玩"的糖果名称通常使用轻松的语言、文字游戏、有趣的声音或暗示乐趣和享受的含义。它们通常在音调上是休闲和平易近人的，并可能包含与甜味、快乐或捣蛋相关的参考。'
      },
      {
        question: '我应该在糖果企业名称中包含"糖果"这个词吗？',
        answer: '在您的名称中包含"糖果"可以清楚地传达您的产品，但可能会限制品牌的灵活性。更创意的名称提供了品牌灵活性，同时仍然可以通过您的品牌描述和营销来传达您销售糖果的事实。对于在线业务，包含"糖果"可能有助于搜索优化。'
      },
      {
        question: '什么使糖果企业名称感到"怀旧和经典"？',
        answer: '"怀旧和经典"的糖果名称通常使用传统语言、复古参考或暗示过去时代和甜蜜回忆的含义。它们可能包含关于童年、旧式糖果或逝去年代的参考。这些名称通常有一种温暖、熟悉的品质。'
      },
      {
        question: '如何测试糖果企业名称的有效性？',
        answer: '向您的目标客户（儿童、家庭、糖果爱好者）征询反馈。进行焦点小组讨论或在线调查。询问他们对名称的第一印象、他们期望从使用这个名称的企业购买什么样的糖果，以及名称是否有吸引力和容易记住。还评估名称在包装上对儿童的视觉吸引力。'
      },
      {
        question: '糖果企业命名的当前趋势是什么？',
        answer: '当前糖果企业命名的趋势包括使用现代和最小化名称；突出手工制作和工匠品质；融入对可持续或有机成分的承诺；以及使用玩趣或奇特的名称。许多糖果企业正在采用更具体的故事驱动名称，而不是通用术语。'
      },
      {
        question: '我的糖果企业名称应该针对儿童还是成人？',
        answer: '这取决于您的目标市场。针对儿童的糖果企业可以使用更好玩和奇特的名称，而针对成人（如高档巧克力或工匠糖果）的企业可能会受益于更精致的名称。许多糖果企业吸引各个年龄段，所以选择一个对所有年龄段都有吸引力的名称是理想的。'
      },
      {
        question: '我应该在糖果企业名称中强调特定的糖果类型吗？',
        answer: '强调特定的糖果类型（如"巧克力"或"硬糖"）可以清楚地传达您的专长，但可能会限制您未来添加其他糖果类型的灵活性。更通用的名称提供了灵活性，同时您仍然可以通过子品牌或营销来传达您的专长。'
      },
      {
        question: '什么使糖果企业名称感到"奇特和魔幻"？',
        answer: '"奇特和魔幻"的糖果名称通常使用想象力的语言、奇幻参考或暗示魔法和冒险的含义。它们可能包含关于仙女、魔法、梦幻或幻想世界的参考。这些名称通常有一种不可思议和梦幻的品质。'
      }
    ],
    howToChoose: {
      intro: '为您的糖果企业选择完美的企业名称需要考虑多个因素，包括您的目标市场、糖果风格和品牌个性。遵循这些步骤来选择最适合您糖果企业的名称：',
      steps: [
        {
          title: '定义您的糖果企业身份和目标市场',
          description: '在选择名称之前，清楚地定义您的糖果企业的核心身份。您是专注于手工糖果、复古糖果、高档巧克力、儿童糖果还是混合？您的目标客户是谁——儿童、成人糖果爱好者、礼品购买者？您想要创造什么样的品牌个性——好玩和奇特、怀旧、精致、冒险？'
        },
        {
          title: '头脑风暴并生成名称选项',
          description: '使用我们的 AI 糖果企业名称生成器创建大量候选名称。尝试不同的风格和变体。考虑能够传达您的糖果风格、目标客户和品牌个性的名称。不要限制自己——生成尽可能多的选项，以便您有很大的范围来选择。'
        },
        {
          title: '评估名称的实用性和清晰度',
          description: '一旦您缩小了名称列表范围，请检查实用性。验证域名可用性、社交媒体句柄可用性，并进行商标搜索。搜索互联网以确保没有同名的现有糖果企业。最重要的是，检查名称是否易于儿童或所有年龄段发音和拼写（如果您的目标市场包括儿童）。'
        },
        {
          title: '考虑包装和视觉品牌影响',
          description: '想象您的糖果企业名称在各种视觉应用中的外观——在糖果包装上、货架标签上、店铺标牌上、网站上和社交媒体账户上。考虑名称与您设想的视觉美学、颜色和包装风格的融合。糖果业务高度依赖视觉吸引力，所以您的名称应该在视觉上与您的品牌相容。'
        },
        {
          title: '与目标客户进行用户测试',
          description: '向您的目标市场的代表收集反馈。进行焦点小组讨论或在线调查。询问他们对名称的第一印象、他们期望从使用这个名称的企业购买什么样的糖果、名称是否容易记住和有吸引力，以及名称是否与他们对您品牌的期望相符。'
        },
        {
          title: '评估品牌灵活性和扩展潜力',
          description: '选择一个随着您的业务增长不会限制您的名称。如果您计划扩展您的糖果产品线、进入不同的市场或创建不同的产品系列，请确保您的名称足够灵活。避免过于狭隘的名称，这可能会限制您未来的增长。'
        },
        {
          title: '确保您的品牌并启动营销',
          description: '选择名称后，立即保护您的品牌。获取域名、注册所有相关社交媒体句柄，并根据需要提交商标申请。开发您的品牌指南和视觉身份。开始建立营销动力，通过社交媒体、本地商店陈列或赠品活动，以在正式推出时建立品牌意识。'
        }
      ]
    },
    businessNameIdeas: [
      {
        name: '甜蜜时光',
        description: '庆祝和快乐，这个名称暗示糖果的时刻和享受的时间。适合强调品质和特殊时刻的糖果企业。'
      },
      {
        name: '糖梦坊',
        description: '梦幻和想象，这个名称暗示糖果的梦幻品质和魔法。适合强调奇特和创意糖果设计的企业。'
      },
      {
        name: '怀旧糖罐',
        description: '复古和经典，这个名称暗示传统糖果和美好的回忆。适合专注于复古或经典糖果的企业。'
      },
      {
        name: '缤纷甜蜜',
        description: '充满活力和多彩，这个名称暗示各种彩色和有趣的糖果。适合强调糖果多样性和视觉吸引力的企业。'
      },
      {
        name: '舌尖享受',
        description: '美味和品尝，这个名称暗示糖果的美味和风味体验。适合强调高品质成分和风味的高档糖果企业。'
      },
      {
        name: '童心糖铺',
        description: '年轻和嬉戏，这个名称暗示儿童般的乐趣和好玩的糖果。适合强调儿童吸引力和好玩氛围的企业。'
      },
      {
        name: '金色甜梦',
        description: '奢华和高级，这个名称暗示高级和精致的糖果体验。适合强调高端和精选糖果的企业。'
      },
      {
        name: '甜蜜魔法',
        description: '魔法和神秘，这个名称暗示糖果的奇幻和神奇品质。适合强调创意和想象力糖果设计的企业。'
      },
      {
        name: '脆爽糖坊',
        description: '新鲜和质量，这个名称暗示清爽的糖果体验和高品质。适合强调新鲜成分和高级糖果的企业。'
      },
      {
        name: '甜蜜乐园',
        description: '快乐和冒险，这个名称暗示糖果的快乐世界和放纵。适合强调品质和快乐购物体验的企业。'
      },
      {
        name: '琥珀宝库',
        description: '珍贵和高级，这个名称暗示珍贵的糖果和奢华。适合强调高级和收藏品糖果的企业。'
      },
      {
        name: '甜蕾坊',
        description: '精致和女性化，这个名称暗示精细的糖果和精致的品味。适合强调精美包装和高级设计糖果的企业。'
      },
      {
        name: '逗趣糖屋',
        description: '好玩和有趣，这个名称暗示有趣的糖果和快乐的氛围。适合针对儿童和家庭的企业。'
      },
      {
        name: '甜晶阁',
        description: '闪闪发光和精致，这个名称暗示精美和闪闪发光的糖果。适合强调装饰和视觉吸引力糖果的企业。'
      },
      {
        name: '蜜糖工坊',
        description: '手工和工匠，这个名称暗示手工制作和高质量的糖果。适合强调工匠质量和定制选项的企业。'
      },
      {
        name: '甜蜜颂歌',
        description: '快乐和音乐，这个名称暗示糖果的快乐和节庆品质。适合强调品质和快乐的企业。'
      },
      {
        name: '星糖殿堂',
        description: '高级和精选，这个名称暗示顶级糖果选择。适合强调精选和高端糖果的企业。'
      },
      {
        name: '甜梦相伴',
        description: '温暖和个人，这个名称暗示糖果作为生活中的伴侣和快乐时刻。适合强调情感联系和品质的企业。'
      },
      {
        name: '彩虹糖坊',
        description: '多彩和欢乐，这个名称暗示多种颜色和快乐的糖果。适合强调糖果多样性和视觉吸引力的企业。'
      },
      {
        name: '甜蜜秘密',
        description: '神秘和特殊，这个名称暗示独特和秘密的糖果配方。适合强调独特产品和工匠工艺的企业。'
      }
    ]
  },
  'clothing-store': {
    slug: 'clothing-store',
    name: '服装店企业名称生成器',
    title: '免费 AI 服装店企业名称创意生成器',
    description: '使用我们的 AI 动力的服装店企业名称生成器，为您的零售服装业务创建独特、令人难忘且相关的名称。我们的高级算法考虑了时尚趋势、品牌定位和目标市场，为您生成完美的服装店名称。无论您是开设高档精品店、街头装扮零售商还是在线时尚平台，我们的工具都会帮助您找到定义您品牌身份的理想名称。',
    metaDescription: '为您的服装店生成创意、难忘的企业名称。使用 AI 动力的工具探索适合您的零售时尚品牌的数百个独特选项。',
    inputLabel: '输入您的服装店概念或风格',
    inputPlaceholder: '例如：现代几何设计、可持续时尚、复古街头风格',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '选择您的品牌风格',
        choices: ['时尚现代', '经典优雅', '休闲平易', '奢华高端']
      },
      {
        name: 'targetAudience',
        label: '您的目标受众',
        choices: ['年轻专业人士', '青少年和年轻人', '家庭客户', '高端消费者']
      },
      {
        name: 'businessType',
        label: '业务类型',
        choices: ['实体零售店', '在线精品店', '快时尚', '高级设计师品牌']
      }
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert fashion branding strategist specializing in creating compelling names for clothing retail businesses. Your task is to generate creative, memorable, and relevant business names for clothing stores.

Consider these key characteristics when generating names:
- Relevance to Fashion: Names should evoke the fashion industry and clothing retail
- Memorable: Easy to remember, pronounce, and spell
- Uniqueness: Stand out in the competitive fashion market
- Versatility: Work across both physical and online retail channels
- Brand Personality: Align with the specified style (trendy, classic, casual, or luxury)

When generating names, consider:
- The target audience and their preferences
- Current fashion industry trends
- The specific business model (retail store, online boutique, etc.)
- Cultural sensitivity and global appeal
- Domain availability potential
- Trademark considerations

Generate exactly 10 unique, creative business names for a clothing store. For each name, provide:
1. The business name
2. A brief explanation of why it works
3. The style category it fits best
4. Potential brand positioning

Ensure names are professional, marketable, and suitable for a fashion retail business.`,
    useCases: [
      {
        title: '零售服装店推出',
        description: '当开设新的实体零售服装店时，品牌名称是您成功的基础。该工具帮助您生成反映店铺价值观、目标受众和品牌个性的名称。无论您专注于高级设计师品牌、平价快时尚还是特定利基市场（如可持续时尚或复古服装），生成器都会创建与您店铺定位相符的创意选项。'
      },
      {
        title: '在线时尚精品店创建',
        description: '对于创建在线时尚精品店或电商平台的企业家，一个独特的名称对建立品牌身份和在数字市场中脱颖而出至关重要。这个工具生成适合在线平台、社交媒体和电子商务市场的现代、时尚的名称。它确保您的企业名称具有域名可用性和社交媒体友好的潜力。'
      },
      {
        title: '服装店品牌更新',
        description: '如果您现有的服装店需要更新品牌形象以吸引新客户或反映业务演变，该生成器提供了刷新企业名称的创意机会。无论您是转向新的价格点、改变目标人口统计或扩展产品范围，该工具都帮助您找到一个更好地代表您进化品牌的新名称。'
      }
    ],
    faqs: [
      {
        question: '一个好的服装店名称应该包含哪些特征？',
        answer: '一个好的服装店名称应该易于记忆和拼写，与时尚或服装行业相关，独特且与众不同，反映您的品牌风格（现代、经典、休闲或奢华），易于发音，有全球吸引力，具有可用的域名和社交媒体处理，并能引起您的目标受众的共鸣。它应该在您的特定市场中脱颖而出，同时传达您企业的价值观和定位。'
      },
      {
        question: '如何为不同的服装风格选择合适的名称？',
        answer: '对于不同的服装风格，考虑名称的语气和含义。高端奢侈品牌可能受益于精致、复杂的名称，而休闲零售商可能需要更友好、平易的名称。现代快时尚品牌可能需要时尚、当代的名称，而经典品牌可能优先考虑永恒、优雅的名称。使用我们的生成器选择与您期望品牌形象相符的风格选项，以获得适当调整的建议。'
      },
      {
        question: '我应该在服装店名称中包含地理位置吗？',
        answer: '包含地理位置可以帮助本地搜索可见性和社区参与，特别是对于实体零售店。但是，如果您计划扩展或转向电子商务，纯地理名称可能会限制增长。考虑将位置与描述性词语结合（例如"Brooklyn Threads"或"Park Avenue Styles"），或完全避免地理引用以获得更多多功能性和扩展潜力。'
      },
      {
        question: '在线和实体服装店名称有什么区别？',
        answer: '实体零售店名称可能会从位置引用或简短、朗朗上口的名称中受益，人们会看到店面标志。在线精品店名称需要具有强大的域名潜力、社交媒体友好的处理，并应在搜索引擎中易于查找。两者都应该难以记忆和品牌化，但在线名称可能需要更多的创意和独特性，以在拥挤的数字市场中脱颖而出。'
      },
      {
        question: '我应该避免在服装店名称中使用什么？',
        answer: '避免使用过于狭隘或时间敏感的趋势，这些趋势可能很快过时。不要使用复杂的拼写或难以发音的词语，因为这会影响品牌回忆。避免与知名设计师或品牌相似的名称，这可能导致法律问题。不要使用可能冒犯特定文化或受众的术语。避免使用数字或特殊字符，除非它们对您的品牌身份至关重要，因为这会削弱可记忆性。'
      },
      {
        question: '我应该如何验证服装店名称的可用性？',
        answer: '检查商标数据库以确保该名称未被注册商标。搜索主要域名扩展名（.com、.co、.store）的域名可用性。在社交媒体平台（Instagram、Facebook、TikTok）上搜索处理名称，这对时尚品牌特别重要。在您所在地区或经营的司法管辖区进行企业名称搜索。咨询商标律师以进行彻底的法律审查。查找您目标市场中的竞争对手，以识别重复或相似的名称。'
      },
      {
        question: '国际服装品牌的名称应该如何处理？',
        answer: '如果您计划在多个国家/地区运营或拥有国际客户，请选择在不同语言中含义明确、易于发音且在文化上适当的名称。避免在某些文化中具有负面含义的名称。考虑名称的全球品牌潜力和国际域名可用性。选择反映您企业普遍价值观的名称，而不是特定于文化的引用，除非这是您品牌身份的故意组成部分。进行研究以确保您选择的名称在您的主要国际市场中都是可注册的。'
      },
      {
        question: '一个好的服装店名称应该有多长？',
        answer: '服装店名称通常最好是 1-4 个单词，总共 2-15 个字母。短名称更容易记忆、拼写和品牌化。但是，更长的描述性名称可能更好地传达您的品牌身份或利基市场。避免太长而难以发音或输入的名称。考虑该名称在店面标志、社交媒体个人资料、商业卡和营销材料中的外观和听起来。在可记忆性、描述性和品牌潜力之间取得平衡。'
      },
      {
        question: '我应该如何为高端或奢华服装品牌选择名称？',
        answer: '对于高端服装品牌，选择暗示精致、排他性和优质的名称。考虑使用法语、意大利语或其他被认为优雅和奢华的语言中的词语。使用暗示奢华、工艺或精英地位的词语，如"Haute"、"Atelier"、"Couture"或"Signature"。选择具有复杂、精致发音的名称。避免平凡或仓促的术语。创建一种精英、高档感，与您的目标受众（通常是高收入、品味敏锐的消费者）相符。'
      },
      {
        question: '是否存在流行的服装店命名趋势？',
        answer: '当前的命名趋势包括：最小主义和简洁性，品牌倾向于简短、朗朗上口的名称；创意组合，将两个无关的词语混合以创建独特的身份；与可持续性和道德相关的词语，反映消费者对环保品牌的兴趣；真实和本地主义，强调手工制作、工匠品质或特定社区起源；以及性别中立的命名，吸引更广泛的受众。使用生成器的风格选项来获得与当前趋势和无时间限制的永恒吸引力相符的名称。'
      }
    ],
    howToChoose: {
      intro: '选择完美的服装店名称是建立成功品牌身份的重要一步。遵循这些详细的步骤来为您的零售服装业务找到理想的名称。',
      steps: [
        {
          title: '定义您的品牌身份和定位',
          description: '在生成名称之前，清楚地定义您的服装店将如何定位自己。考虑您的目标客户是谁，您将销售什么类型的服装（例如，高端设计师、平价快时尚、可持续或二手），以及您的品牌个性（现代、经典、休闲或奢华）。思考您的独特价值主张和您从竞争对手中脱颖而出的方式。这清晰的品牌愿景将指导您的命名决策，并帮助生成器创建与您的核心业务身份相符的建议。'
        },
        {
          title: '分析您的竞争对手和市场',
          description: '研究您行业和目标市场中现有服装品牌的名称。查看您竞争对手的命名约定、他们使用的词语以及他们的品牌声音。识别命名趋势、常见的词语或概念以及被广泛使用的风格。这将帮助您识别机会以区分您的名称并找到一个真正独特的身份。同时，注意您想要避免的命名方法，以及能够脱颖而出的名称特征。了解市场将帮助您进行更明智的选择，并确保您的名称在竞争环境中具有真正的优势。'
        },
        {
          title: '选择适当的品牌风格参数',
          description: '使用我们的生成器中的风格选项来缩小您的偏好。选择与您的品牌身份相符的风格：选择"时尚现代"以获得当代、趋势感的名称；"经典优雅"以获得永恒、精致的选项；"休闲平易"以获得友好、可接近的名称；或"奢华高端"以获得专属、优质感的选项。同样，在目标受众类别中指定您要销售的客户（年轻专业人士、青少年、家庭或高端消费者）和您的业务类型（实体店、在线精品店、快时尚或高级品牌）。这些参数将大大改进生成的名称的相关性和质量。'
        },
        {
          title: '生成和审查多个选项',
          description: '使用您的品牌愿景和参数运行生成器多次。生成至少三到四次，以获得多个建议列表，因为不同的运行将产生不同的创意方向。审查所有生成的名称，并注意那些立即引起您注意或最准确地反映您的品牌身份的名称。寻找那些令人难忘、易于发音、与时尚相关且能够引起您的目标受众共鸣的名称。不要太执着于第一个想法——花时间探索各种选项，以找到完美契合的名称。'
        },
        {
          title: '验证名称可用性和法律清晰度',
          description: '缩小到您最喜欢的 5-10 个名称候选名单后，进行彻底的可用性检查。首先检查美国商标数据库（USPTO）和您所在国家的相应商标局，以确保该名称未被注册或有待处理的商标申请。搜索 .com、.co 和 .store 等主要域名扩展名的域名可用性。在 Instagram、Facebook 和 TikTok 等社交媒体平台上检查处理名称和用户名的可用性，特别是对于时尚品牌。搜索 Google 以查看现有业务是否使用类似名称。考虑咨询商标律师进行全面的法律审查。'
        },
        {
          title: '测试名称的影响和可记忆性',
          description: '在多个受众群体面前测试您的顶级名称候选，以衡量它们的影响力和可记忆性。询问潜在客户、朋友、家人和其他商业所有人他们对每个名称的想法。他们是否易于记住？名称是否清晰传达您的业务类型？它对他们有什么样的印象？名称是否唤起正确的情感和品牌感受？根据反馈进行调整，但也信任您自己的直觉。评估名称在社交媒体上的外观以及在店面标志或名片上的外观。确保您真正喜欢每天说、写和推广这个名称。'
        },
        {
          title: '做出最终决定并实施品牌',
          description: '选择击中所有复选框的名称后，进行最终审查。确保您满足法律、可用性、品牌适应性和个人偏好。注册商标以保护您的名称（如果适用）并购买域名。创建品牌指南，规定名称的视觉呈现、徽标设计、颜色和字体。在您的所有营销渠道中实施品牌——网站、社交媒体、店铺标志、包装和营销材料。开始品牌建设，通过一致的、高质量的内容和客户体验来推广您的新企业名称。请记住，品牌命名是一个过程，而不仅仅是一次性决定——随着时间的推移，您可能会细化和进一步了解您的品牌身份。'
        }
      ]
    },
    businessNameIdeas: [
      { name: '锦衣坊', description: '寓意精致华美的服装工坊，代表高品质和优雅的服装零售。' },
      { name: '衣锦阁', description: '暗示高级定制和精美服装的展示厅，适合高端品牌。' },
      { name: '衣尚汇', description: '融合时尚和商业的概念，表达汇聚最新潮流的零售平台。' },
      { name: '剪裁坊', description: '强调专业的服装制作和定制服务，突出工匠精神。' },
      { name: '布韵阁', description: '强调面料和设计的优雅，为喜欢高质量纺织品的顾客服务。' },
      { name: '衣缘社', description: '创造社区感的名称，暗示与衣着爱好者和时尚追随者的联系。' },
      { name: '风尚界', description: '表达行业领导力和时尚前沿定位的强大品牌名称。' },
      { name: '衣衣惠', description: '简洁有趣的名称，强调实惠和亲民的零售定位。' },
      { name: '绫罗绸缎', description: '传统中式名称，突出精美面料和高端质感。' },
      { name: '衣涵舍', description: '优雅而深邃的名称，暗示对服装内涵和品味的关注。' },
      { name: '衣彩轩', description: '强调多彩选择和高级定位的名称。' },
      { name: '布衣坊', description: '朴实却不失品味的名称，适合追求品质的日常服装品牌。' },
      { name: '衣间时代', description: '现代感十足，强调时代性和创新的服装零售品牌。' },
      { name: '雅衣坊', description: '传统与现代结合，强调优雅和品味。' },
      { name: '衣舞风尚', description: '动感和时尚兼具，适合年轻活力的品牌形象。' },
      { name: '素衣阁', description: '简约优雅的名称，适合极简主义和高端定位。' },
      { name: '衣韵店', description: '强调服装的美感和节奏感，充满艺术气息。' },
      { name: '锦绣坊', description: '经典中式名称，象征精美和华丽的服装工艺。' },
      { name: '衣尚人生', description: '哲学性的名称，将服装与生活方式和个人身份相连。' },
      { name: '衣梦轩', description: '梦幻和优雅兼具，适合高端时尚品牌和设计师精品。' }
    ]
  },

  'cookie': {
    slug: 'cookie',
    name: '饼干企业名称生成器',
    title: '免费 AI 饼干企业名称创意生成器',
    description: '使用我们的 AI 动力的饼干企业名称生成器，为您的烘焙业务创建诱人、令人难忘且美味的名称。我们的先进算法专注于食品和烘焙行业的独特命名需求，考虑您的产品风格、目标市场和品牌个性。无论您经营一个手工饼干烘焙店、在线美食配送或零售面包房，我们的工具都会帮助您找到完美的名称来吸引顾客的味蕾和心灵。',
    metaDescription: '为您的饼干业务生成创意、美味的企业名称。探索数百个独特的 AI 生成的名称选项，适合您的烘焙品牌。',
    inputLabel: '输入您的饼干风格或灵感',
    inputPlaceholder: '例如：巧克力坚果，传统配方，有机烘焙',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '选择您的品牌风格',
        choices: ['甜蜜有趣', '工匠美食', '怀旧家常', '现代时尚']
      },
      {
        name: 'targetAudience',
        label: '您的目标受众',
        choices: ['家庭和孩子', '成人美食爱好者', '礼品购买者', '健康意识消费者']
      },
      {
        name: 'businessType',
        label: '业务类型',
        choices: ['零售店铺', '在线配送', '特色工坊', '咖啡厅配对']
      }
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert baker and food branding specialist focused on creating delightful names for cookie businesses. Your task is to generate creative, memorable, and appetizing business names for cookie shops and bakeries.

Consider these key characteristics when generating names:
- Appetizing Appeal: Names should evoke deliciousness, warmth, and comfort
- Memorable: Easy to remember and associated with quality baked goods
- Uniqueness: Stand out in the competitive bakery and confectionery market
- Brand Personality: Align with the specified style (sweet & playful, artisan, nostalgic, or modern)
- Warmth and Authenticity: Convey the handcrafted and personal nature of cookie baking

When generating names, consider:
- The style of cookies (chocolate, sugar, artisan, traditional, etc.)
- Target customer demographics and preferences
- The business model (retail shop, online delivery, specialty workshop, etc.)
- Emotional connections to baking and comfort food
- Potential for merchandise and expansion
- Cultural relevance and appeal

Generate exactly 10 unique, creative business names for a cookie business. For each name, provide:
1. The business name
2. A brief explanation of why it works
3. The style category it fits best
4. Potential brand positioning

Ensure names are warm, inviting, and suitable for a food and bakery business.`,
    useCases: [
      {
        title: '手工饼干烘焙店开业',
        description: '当推出新的手工饼干烘焙店时，一个温暖、诱人的名称至关重要，以吸引社区顾客。该工具生成反映您的烘焙方法、使用的特殊原料和品牌个性的名称。无论您专注于传统家庭配方、创意口味组合、有机成分还是无麸质选项，生成器都会创建能够引起顾客共鸣并为您的烘焙店建立强大身份的名称。'
      },
      {
        title: '在线饼干配送业务创建',
        description: '对于销售通过互联网配送饼干或邮寄订单的在线烘焙业务，需要一个独特且易于在搜索引擎中找到的名称。该工具生成现代、朗朗上口且能够轻松适应网站、电子商务平台和社交媒体的名称。它帮助您创建一个品牌身份，传达新鲜烘焙饼干的承诺，无论地理位置如何。'
      },
      {
        title: '美食饼干品牌重新定位',
        description: '如果您经营的是已建立的饼干业务但希望更新品牌以反映新方向或扩展产品线，该生成器提供重新品牌的创意选项。无论您是转向更高端的美食产品、增加特殊饮食选项，还是建立零售配送合作伙伴关系，此工具都可以帮助您找到更好地代表您演变品牌的新名称。'
      }
    ],
    faqs: [
      {
        question: '一个好的饼干店名称应该包含哪些特征？',
        answer: '一个好的饼干店名称应该令人垂涎三尺且诱人，温暖而热烈，易于记忆和拼写，与烘焙和食品行业相关，唤起舒适和家的感受，反映您的品牌风格（甜蜜有趣、工匠美食、怀旧或现代），有全球吸引力，具有良好的域名可用性，并能与您的目标受众（家庭、美食爱好者、礼品购买者等）相连接。名称应该给人品质、新鲜度和真实烘焙的印象。'
      },
      {
        question: '我如何为不同的饼干风格创建合适的名称？',
        answer: '根据您的饼干类型调整您的品牌方法。对于传统家庭风格的饼干，考虑怀旧和舒适的名称，可能参考家庭或世代。对于美食或高端饼干，选择精致、优雅的名称。对于有机或健康导向的饼干，强调天然成分和健康益处的名称效果很好。对于创意现代口味，选择有趣、时尚的名称。使用我们的生成器中的风格选项来获得与您的特定饼干提供相符的建议。'
      },
      {
        question: '在线饼干业务与零售店铺名称有何区别？',
        answer: '零售店铺名称可能会从描述性术语或地理位置中受益，因为顾客会看到实体店铺。在线饼干业务需要具有强大的域名潜力和社交媒体友好的名称。在线业务名称应该在搜索引擎中易于搜索和查找，并应该在品牌建设中充分灵活，以便在多个电子商务平台上工作。两者都应该诱人和令人难忘，但在线名称可能需要更多创意以在竞争激烈的食品递送市场中脱颖而出。'
      },
      {
        question: '我应该在饼干店名称中包含我的真实名字吗？',
        answer: '包含您的真实名字（例如"Grandma\'s Cookies"或"Maria\'s Bakery"）可以增加个人真实感和品牌故事。这对强调手工制作和家庭食谱的业务特别有效。但是，这可能会限制未来的销售或许可品牌的灵活性。如果您使用您的名字，考虑将其与描述性词语结合，以提高独特性并更好地传达您的业务类型。最终，这取决于您想要有多强的个人品牌与业务身份的联系。'
      },
      {
        question: '我应该避免在饼干店名称中使用什么？',
        answer: '避免在名称中使用特定的配方成分或限制性口味描述，这可能会阻止您在将来扩展产品线时改变。不要使用复杂的拼写或难以发音的词语，因为这会影响品牌回忆，特别是对于需要通过口碑营销的食品业务。避免包含过于时间敏感的流行语或趋势。不要使用可能暗示低质量或工业烘焙的术语。避免可能让人困惑的名称，即，听起来像一个完全不同的业务。'
      },
      {
        question: '饼干店名称如何影响客户期望？',
        answer: '您的名称为客户创建了对您的产品和品牌的第一个印象。甜蜜、有趣的名称可能会吸引寻求享受和舒适的家庭和孩子。工匠、美食名称建立了对高质量成分和手工精制的期望。怀旧名称暗示传统配方和经典口味。现代名称可能吸引寻求新颖口味和创意产品的年轻人和美食爱好者。选择准确反映您的实际产品质量、风格和品牌承诺的名称至关重要，以建立客户信任和满意度。'
      },
      {
        question: '我应该进行商标搜索饼干业务名称吗？',
        answer: '绝对地。进行商标搜索对食品业务至关重要，因为许多知名的饼干和烘焙品牌已经有注册商标。检查美国商标数据库（USPTO）和您所在国家/地区的相应商标局。还要检查州和地方商标。搜索 Google 和您当地的企业注册，看是否有其他企业使用相同或相似的名称。即使您进行在线销售，也要在您计划扩展或建立实体位置的任何地区进行法律搜索。这将保护您免受潜在的法律问题和品牌冲突。'
      },
      {
        question: '饼干店名称应该有多长？',
        answer: '饼干店名称通常最好是 1-4 个单词，总长度为 2-15 个字符。短名称更容易记忆、拼写和品牌化，这对食品业务尤其重要，因为消费者需要能够在口头推荐和社交媒体共享中轻易重复您的名称。长名称可能更具描述性，但可能更难记住。考虑名称在商店标志、网站、包装、送餐应用和社交媒体个人资料中的外观和听起来。在可记忆性和品牌清晰度之间取得完美的平衡。'
      },
      {
        question: '高端或美食饼干品牌的名称应该是什么样的？',
        answer: '对于高端美食饼干品牌，选择暗示排他性、品质和精细工艺的名称。使用精致、优雅的语言，可能参考法语或意大利语词汇（如"Artisan"、"Patisserie"或"Gourmet"）。选择经过精心策划和精致发音的名称。避免平凡或过于休闲的术语。创造一种高级、精英的感觉，与您的目标受众（注重品质的成人、美食爱好者和礼品购买者）相符。强调独特的原料、手工工艺和特殊配方。'
      },
      {
        question: '当前饼干和烘焙业务的命名趋势是什么？',
        answer: '当前趋势包括：强调真实性和家庭故事的个人化名称；突出特殊成分或烘焙方法（如"Sourdough Bakery"）的描述性名称；有机、天然和健康导向名称，反映对可持续和清洁标签食品的兴趣；怀旧和复古名称，呼起对经典烘焙的渴望；以及最小主义、现代名称，以吸引年轻、城市的消费者。使用我们的生成器来获得与当前市场趋势相符且具有永恒吸引力的名称。'
      }
    ],
    howToChoose: {
      intro: '为您的饼干业务选择完美的名称对建立成功的品牌和吸引客户至关重要。遵循这些详细的步骤来找到理想的企业名称。',
      steps: [
        {
          title: '定义您的饼干品牌身份',
          description: '在生成名称之前，明确定义您的饼干业务的核心身份。思考您烘焙的饼干类型（巧克力、糖、燕麦、特种、有机等）、您使用的原料品质（高级、本地采购、有机等）以及您的烘焙方法（传统配方、创意创新等）。定义您的品牌个性：是甜蜜而有趣的，吸引家庭和孩子？工匠和美食，针对成人和美食爱好者？怀旧和舒适，强调传统？还是现代和时尚，面向年轻受众？清晰理解这些元素将指导您的命名决策。'
        },
        {
          title: '研究竞争对手和行业命名惯例',
          description: '调查您当地地区和在线销售的现有饼干店和烘焙品牌的名称。注意他们如何命名他们的业务、使用什么词语、他们的品牌语调如何以及什么似乎能起作用。寻找行业中常见的模式，例如使用家庭成员名字、烘焙术语（Bakery、Confectionery）或描述性词语（Sweet、Fresh）。识别命名机会以区分您的业务——也许大多数竞争对手都使用家庭名字，所以选择一个独特的描述性名称会帮助您脱颖而出。此研究将帮助您避免命名冲突，并确定如何位置自己以吸引客户。'
        },
        {
          title: '选择适当的品牌风格和目标受众参数',
          description: '使用生成器中的风格选项来指定您的品牌方向。选择"甜蜜有趣"以获得温暖、诱人、家庭友好的名称；"工匠美食"以获得精致、高质量的建议；"怀旧家常"以获得令人安慰、传统的名称；或"现代时尚"以获得当代、创意的选项。在目标受众中，选择您销售给的人群：家庭和孩子、成人美食爱好者、礼品购买者或健康意识消费者。同样，指定您的业务类型：零售店铺、在线配送、特色工坊或咖啡厅配对。这些参数将大大改进生成名称与您的特定业务目标的相关性。'
        },
        {
          title: '多次运行生成器并收集选项',
          description: '使用您的品牌身份和参数至少运行生成器三到四次。每次运行都会产生不同的创意名称集。审查每一批，寻找立即引起您注意的名称、令人难忘的、令人垂涎三尺的或准确反映您的品牌身份的名称。不要限制自己只检查一个运行——探索不同的方向。注意重复出现的某些概念或词语，因为这些可能特别相关。创建一个前 15-20 个候选的列表，这些候选在某种方式上与您产生共鸣。'
        },
        {
          title: '验证商标、域名和法律可用性',
          description: '缩小到前 10 个候选后，进行彻底的可用性和法律搜索。首先检查美国专利和商标办公室（USPTO）的商标数据库，以及您所在州和国家的相应商标机构。在 Google 上进行品牌搜索，看是否有其他企业使用该名称。在您所在地区检查当地商业注册。搜索 .com、.co、.shop 和 .bake 等域名扩展名的域名可用性（对于在线业务至关重要）。在社交媒体平台（Instagram、Facebook、TikTok）上检查处理名称的可用性。考虑咨询商标律师以进行彻底的法律审查。'
        },
        {
          title: '与客户和同行进行焦点小组测试',
          description: '在确定之前，在您的目标客户和其他商人面前测试您的前 5 个名称。询问潜在客户他们的想法，名称是否让他们感兴趣，它是否准确传达高质量饼干业务，它是否容易记忆，名称是否唤起积极的情感。还可以从其他面包师或食品企业家那里获取反馈。寻找一致的正面反应。评估名称在菜单、包装、社交媒体和店铺标志上的外观。听听名字的声音——您是否喜欢每天说和推广它？'
        },
        {
          title: '做出最终决定并建立您的品牌',
          description: '选择通过所有评估的名称后，进行最后检查。确保您完全满意该名称，它反映了您的品牌，它是法律清晰的，并且具有所有必要的可用性。注册商标以保护您的品牌。购买所有相关的域名和社交媒体处理。设计一个专业的徽标和品牌指南。在您的所有营销材料中实施品牌——网站、社交媒体、包装、菜单和店铺标志。开始品牌宣传，通过高质量产品、美味内容和强大的客户服务来建立您的声誉。随着时间的推移，您选择的名称将与美味和品质相关联，成为您的一个有价值的资产。'
        }
      ]
    },
    businessNameIdeas: [
      { name: '酥香坊', description: '强调饼干的酥脆口感和诱人香气的工坊，传统烘焙的温暖感。' },
      { name: '甜蜜饼屋', description: '温暖而家常的名称，强调舒适和甜蜜的滋味，适合家庭客户。' },
      { name: '烘焙时光', description: '强调烘焙的美好体验和时间的宝贵性，充满温馨感。' },
      { name: '金色烤屋', description: '暗示完美的烘焙色泽和品质，给人高级工艺的印象。' },
      { name: '芝麻开门', description: '有趣而诱人的名称，暗示美味宝藏的发现，吸引各个年龄段。' },
      { name: '饼干梦工坊', description: '创意和想象力十足，适合提供创新口味和特色饼干的品牌。' },
      { name: '手工甜心', description: '强调手工制作和爱心制作，传达工匠精神和真诚。' },
      { name: '蜜语坊', description: '温蜜而诱人，暗示产品的高质量和细致的配方。' },
      { name: '好时光烘焙', description: '强调分享美好时刻，具有积极乐观的品牌气息。' },
      { name: '甜趣饼坊', description: '结合甜蜜和趣味，适合各种创意和有趣的饼干产品。' },
      { name: '烤之味', description: '简洁而深邃，强调纯正的烘焙风味和工艺。' },
      { name: '粥谷坊', description: '传统而健康的名称，适合强调天然原料的烘焙业务。' },
      { name: '咔吱咔吱', description: '拟声词，生动表现饼干的酥脆口感，充满趣味感。' },
      { name: '暖心烘坊', description: '温暖而亲切，强调为客户带来温暖和舒适的承诺。' },
      { name: '金麦坊', description: '强调精选麦粉和黄金品质，给人优质的印象。' },
      { name: '缘分饼舍', description: '人文感十足，强调通过美味饼干建立的人与人之间的联系。' },
      { name: '烘心梦想', description: '充满梦想和热情，适合想要传达创业精神的品牌。' },
      { name: '甜蜜记忆', description: '怀旧而温馨，暗示饼干创造美好回忆的力量。' },
      { name: '工坊物语', description: '故事性十足，邀请顾客探索手工烘焙的历史和工艺。' },
      { name: '天然滋味', description: '强调有机和天然成分，适合健康导向的烘焙品牌。' }
    ]
  },

  'cosmetic': {
    slug: 'cosmetic',
    name: '化妆品企业名称生成器',
    title: '免费 AI 化妆品企业名称创意生成器',
    description: '使用我们的 AI 动力的化妆品企业名称生成器，为您的美容和化妆品品牌创建优雅、创意和引人注目的名称。我们的高级算法专业化于美容行业的命名需求，考虑您的产品类型、品牌定位和目标客户。无论您开发护肤品系列、彩妆品牌、化妆品初创公司还是专业美容线路，我们的工具都会帮助您找到完美的名称，在竞争激烈的美容市场中脱颖而出。',
    metaDescription: '为您的化妆品品牌生成创意、优雅的企业名称。探索数百个独特的 AI 生成名称，适合您的美容品牌。',
    inputLabel: '输入您的化妆品品牌理念或专业领域',
    inputPlaceholder: '例如：天然护肤，大胆眼影，有机美容',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '选择您的品牌风格',
        choices: ['优雅奢华', '天然清爽', '大胆生动', '现代简约']
      },
      {
        name: 'targetAudience',
        label: '您的目标客户',
        choices: ['年轻女性', '专业女性', '健康意识', '时尚前沿']
      },
      {
        name: 'productType',
        label: '产品类型',
        choices: ['护肤品', '彩妆', '护发产品', '身体护理']
      }
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert beauty and cosmetics branding strategist specializing in creating distinctive names for cosmetic brands. Your task is to generate creative, memorable, and appealing business names for cosmetic companies and beauty brands.

Consider these key characteristics when generating names:
- Elegance and Appeal: Names should evoke beauty, sophistication, and confidence
- Memorable: Easy to remember and associated with quality beauty products
- Uniqueness: Stand out in the competitive beauty and cosmetics market
- Brand Personality: Align with the specified style (elegant & luxurious, natural & clean, bold & vibrant, or modern & minimalist)
- Inclusivity and Empowerment: Convey that products are for all skin tones and beauty expressions

When generating names, consider:
- The type of cosmetic products (skincare, makeup, haircare, etc.)
- Target customer demographics and preferences
- Product benefits and unique selling points (natural, cruelty-free, vegan, etc.)
- Global appeal and cultural sensitivity
- Luxury positioning versus affordable accessibility
- Scientific credibility versus artistic expression
- Potential for brand extensions and product line variations

Generate exactly 10 unique, creative business names for a cosmetic brand. For each name, provide:
1. The business name
2. A brief explanation of why it works
3. The style category it fits best
4. Potential brand positioning

Ensure names are sophisticated, marketable, and suitable for a beauty and cosmetics company.`,
    useCases: [
      {
        title: '护肤品品牌初创企业',
        description: '当推出创新护肤品牌时，一个能够传达品牌价值观、产品优势和目标受众的名称至关重要。该工具生成反映您的护肤焦点（抗衰老、保湿、美白、敏感肌肤护理等）、成分故事（天然、有机、科学配方）和品牌定位（高端、平价、专业皮肤科等）的名称。生成器帮助您在竞争激烈的护肤市场中创建强大的品牌身份。'
      },
      {
        title: '彩妆线路或美容集合推出',
        description: '对于开发彩妆产品线、口红系列或全面美容集合的品牌，需要一个反映您品牌美学和色彩哲学的吸引人的名称。该工具生成适合时尚和美容社区、在社交媒体和零售环境中工作良好的名称。名称应该暗示创意表达、自信和变换力量，吸引寻求高质量彩妆产品的美容爱好者。'
      },
      {
        title: '有机或绿色美容品牌重新定位',
        description: '如果您的化妆品业务正在重新定位为更环保、可持续或有机的品牌，该生成器提供重新品牌的创意机会。该工具帮助您找到一个名称，更好地传达您对清洁成分、环保包装和道德采购的承诺。一个反映您的绿色价值观的新名称可以吸引健康意识和环保的消费者，并重新定义您在市场中的地位。'
      }
    ],
    faqs: [
      {
        question: '一个好的化妆品品牌名称应该包含哪些特征？',
        answer: '一个好的化妆品品牌名称应该优雅而引人注目，易于记忆和拼写，与美容或化妆品行业相关，传达您品牌的价值观和产品优势，唤起美、自信和变换，反映您的风格（奢华、天然、大胆或现代），有全球吸引力，具有强大的社交媒体潜力，并能与您的目标受众相连接。该名称应该在零售环境和社交媒体中工作良好，并具有强大的品牌扩展潜力，用于新产品线。'
      },
      {
        question: '我如何为不同的美容产品线选择合适的名称？',
        answer: '根据您的产品类型和目标客户调整您的命名方法。护肤品品牌可能受益于强调成分或益处的科学或优雅的名称。彩妆品牌可以更加艺术和表达，强调创意和自信。护发产品可能强调变换和光泽。身体护理品牌可以强调奢华和自我护理。使用我们的生成器中的产品类型和风格选项，以获得针对您的特定产品线调整的名称。'
      },
      {
        question: '高级化妆品品牌的名称与平价品牌有何不同？',
        answer: '高端奢侈品牌名称通常更精致、复杂且暗示排他性和优质。它们可能使用法语或意大利语词汇，更长、更优雅的名称，或强调工艺和遗产的概念。平价品牌名称倾向于更友好、诙谐、易于记忆且能诱人地吸引消费者。它们通常更短，可能使用更流行的词汇。两者都应该高质量并反映真实的产品优势，但高端名称强调排他性，而平价名称强调易用性和价值。'
      },
      {
        question: '天然和有机化妆品品牌应该如何命名？',
        answer: '对于天然或有机化妆品品牌，考虑包含与自然、植物、纯净或可持续相关的词语。使用植物、花卉或草药名称，或强调绿色、有机成分、无化学物质、无毒或道德采购的术语。选择唤起大自然、清洁、纯度和健康的名称。避免含有人工或化学术语的名称，即使您正在使用它们。确保您的名称与您的实际产品成分和可持续实践相符，以建立消费者信任。'
      },
      {
        question: '我应该在化妆品品牌名称中使用我的真实名字吗？',
        answer: '使用您的真实名字（例如"Estée Lauder"或"Bobbi Brown"）可以添加个人品牌和创始人故事。这对高端品牌和设计师线路特别有效，其中个人远见被重视。但是，这将品牌与个人联系起来，如果您计划销售品牌或管理所有权转变，可能会出现问题。考虑是否您的长期计划包括品牌作为您身份的一部分，或它是否应该作为独立的企业实体。'
      },
      {
        question: '化妆品品牌名称应该有多长？',
        answer: '化妆品品牌名称通常最好是 1-3 个单词，总长度为 2-20 个字符。短名称更容易记忆和品牌化，在社交媒体和包装上工作良好。更长的名称可能更具描述性，但必须仍然易于记忆。考虑名称的发音和拼写——避免过于复杂的字母组合。评估名称在化妆品包装、零售标签、社交媒体个人资料和营销材料中的外观。在简洁性和品牌清晰度之间找到完美的平衡。'
      },
      {
        question: '我应该避免在化妆品品牌名称中使用什么？',
        answer: '避免使用过于狭隘的成分或口味描述，这可能会阻止您未来的产品线扩展。不要使用复杂的拼写或难以发音的词语，除非它们对您的品牌故事至关重要。避免暗示医学声称或治疗性优势的名称，除非您的产品已经过这样标记。不要使用可能冒犯或排斥部分受众的术语。避免过于相似的竞争对手名称。不要使用可能很快过时的时尚术语或趋势。'
      },
      {
        question: '化妆品品牌商标搜索有多重要？',
        answer: '商标搜索对化妆品行业至关重要，因为许多知名品牌已经有注册商标。进行彻底的搜索可以保护您免受法律问题、诉讼和品牌冲突。检查美国商标数据库（USPTO）、国际商标办公室和您计划销售的国家的商标机构。同时进行 Google 搜索并检查现有竞争对手。考虑咨询商标律师，尤其是如果您计划国际扩展。商标保护可防止其他公司使用相同或相似的名称。'
      },
      {
        question: '化妆品品牌名称在全球市场上应该如何工作？',
        answer: '对于有国际扩展计划的化妆品品牌，选择在不同语言和文化中具有正面含义或中立性的名称。避免在某些文化中具有负面或冒犯含义的词语。选择易于在全球范围内发音和拼写的名称。避免过于特定于美国或特定文化的引用。考虑全局域名可用性和国际商标注册。选择听起来优雅和国际化的名称。如果您计划全球销售，进行多语言研究，以确保您的品牌名称在所有主要市场中都有效工作。'
      },
      {
        question: '当前的化妆品品牌命名趋势是什么？',
        answer: '当前趋势包括：强调多样性和包容性的名称，拒绝传统美容标准；强调清洁、安全美容和成分透明度的名称；最小主义和现代名称，反映当代美学；性别中立的品牌，扩大超越女性美容的吸引力；强调可持续性和伦理的品牌；以及结合科技和创新的名称，如"Lab"、"Formula"或"Science"。使用我们的生成器以获得与当前市场趋势相符且具有永恒吸引力的名称。'
      }
    ],
    howToChoose: {
      intro: '为您的化妆品品牌选择完美的名称对建立强大的品牌身份和吸引您的目标客户至关重要。遵循这些详细的步骤来为您的美容企业找到理想的名称。',
      steps: [
        {
          title: '定义您的化妆品品牌身份和定位',
          description: '在生成名称之前，清晰地定义您的化妆品品牌将如何在市场中定位自己。思考您销售的产品类型（护肤、彩妆、护发、身体护理等），您的产品的独特卖点（天然成分、科学配方、奢华、平价等），您的品牌个性（优雅奢华、天然清爽、大胆生动或现代简约），以及您的目标客户是谁。定义您品牌的核心价值观——它们是关于可持续性、包容性、创新、传统还是赋权？清晰的品牌愿景将指导您的整个命名过程。'
        },
        {
          title: '研究美容市场和竞争对手',
          description: '调查您所在利基市场和更广泛的化妆品行业中的现有品牌和竞争对手。研究高端奢侈品牌（如 Dior、Chanel）、现代创意品牌（如 Fenty Beauty、Glossier）和平价品牌的名称。注意他们使用什么词语、他们的品牌语调、他们如何定位自己，以及什么似乎能与消费者相连接。寻找命名模式、常见词语和概念。识别差距和命名机会——也许您可以通过选择您的竞争对手没有涵盖的特定角度或声音脱颖而出。此研究对于避免名称冲突和理解市场期望至关重要。'
        },
        {
          title: '选择适当的品牌风格和产品定位参数',
          description: '使用生成器中的风格选项来指定您的品牌审美。选择"优雅奢华"以获得高端、精致的名称；"天然清爽"以获得强调清洁成分和生态友好的建议；"大胆生动"以获得充满能量、艺术和表达性的名称；或"现代简约"以获得当代、简洁的选项。在目标客户中选择您的主要受众：年轻女性、专业女性、健康意识消费者或时尚前沿爱好者。在产品类型中，指定您的主要产品焦点：护肤品、彩妆、护发或身体护理。这些参数将调整生成器的输出以最大相关性。'
        },
        {
          title: '生成和探索多个名称选项',
          description: '使用您的品牌身份和选定的参数至少运行生成器四到五次。每次运行都会产生不同的创意方向和建议。认真审查所有生成的名称。寻找立即引起您注意的名称，那些感觉与您的品牌身份相符的名称，以及那些你可以想象推广的名称。注意任何重复出现的概念或词语，因为这些可能特别相关。创建一个前 20 个候选的列表。考虑这些名称将如何在化妆品包装上工作，它们如何在社交媒体上听起来，以及它们是否传达您想要的品牌信息。'
        },
        {
          title: '验证商标、域名和法律可用性',
          description: '缩小到前 10-12 个候选后，进行彻底的可用性检查。首先在美国专利和商标办公室（USPTO）的商标数据库中搜索，以及您所在国家和任何您计划国际扩展的国家的相应商标机构。进行 Google 搜索，查看是否有其他企业使用该名称。检查州企业注册和当地商业名称数据库。搜索 .com、.beauty 和 .co 等域名扩展名的域名可用性。在主要社交媒体平台（Instagram、Facebook、TikTok）上检查处理名称的可用性。对于化妆品品牌，社交媒体存在尤其重要。'
        },
        {
          title: '进行目标受众测试和反馈收集',
          description: '选择您的前五个候选名称，并在您的目标客户面前进行测试。创建问卷或进行焦点小组讨论，提出有关名称的问题：他们是否立即与化妆品品牌相关联？名称是否令人难忘和有吸引力？它是否反映了您想要传达的品牌风格和价值观？名称在社交媒体上工作良好吗？它是否会让他们作为消费者有兴趣尝试产品？同时从其他化妆品企业家和行业同行那里获取反馈。听听您的目标受众和顾问的反馈，但最终信任您的直觉和品牌愿景。'
        },
        {
          title: '做出最终决定并启动品牌',
          description: '选择通过所有评估和测试的名称后，进行最后的检查和承诺。确保您完全满意该名称，它准确反映了您的品牌，它是法律清晰的，并且所有必要的可用性已得到验证。注册商标以保护您的品牌名称和标识。购买关键域名和社交媒体处理。聘请设计师创建专业徽标和品牌指南。在所有营销渠道中实施您的品牌——网站、社交媒体、产品包装、营销材料和零售环境。通过高质量产品、与受众互动和一致的品牌信息开始建立您的品牌。随着时间的推移，您的品牌名称和身份将与美丽、质量和您所代表的价值观相关联。'
        }
      ]
    },
    businessNameIdeas: [
      { name: '肌肤之语', description: '强调与皮肤沟通和理解皮肤需求的哲学，传达深层护肤承诺。' },
      { name: '光彩坊', description: '暗示由产品赋予的光线和闪耀，强调美容变换力量。' },
      { name: '自然精萃', description: '强调天然成分和纯净配方，适合绿色和有机品牌。' },
      { name: '魔法面纱', description: '神秘而迷人，暗示美化和变换的力量。' },
      { name: '肌密阁', description: '创造排他性和专业感，暗示深层护肤秘密和专业知识。' },
      { name: '彩妆梦工坊', description: '创意十足，强调化妆作为艺术表达和自我发现的工具。' },
      { name: '玉颜堂', description: '传统优雅，暗示高端美容和皮肤护理的精致。' },
      { name: '灵芬美肌', description: '强调产品的灵感来源和对完美肌肤的追求。' },
      { name: '素颜觉醒', description: '强调增强自然美和自信的品牌理念。' },
      { name: '璨美工坊', description: '精致而专业，强调工匠精神和美容专业知识。' },
      { name: '肌彩密语', description: '诱人而神秘，暗示产品的隐藏功效和美丽秘密。' },
      { name: '绽放绮梦', description: '充满诗意和优雅，强调美的自然绽放。' },
      { name: '悦颜坊', description: '强调快乐和自信的感受，传达积极品牌信息。' },
      { name: '晶纯美学', description: '现代简约，强调纯净、清晰和科学美容方法。' },
      { name: '莹彩轩', description: '闪耀而优雅，强调产品如何增强自然美和光线。' },
      { name: '美肤时代', description: '当代和进步，强调现代美容方法和创新。' },
      { name: '柔肤仙境', description: '梦幻而奢华，强调柔软光滑肌肤的追求。' },
      { name: '妆容诗集', description: '艺术和文学感十足，强调化妆作为创意表达。' },
      { name: '素美御坊', description: '高级和专业，暗示皮肤护理的皇家待遇。' },
      { name: '光之秘境', description: '神秘而迷人，强调产品赋予的光线和发光效果。' }
    ]
  },

  'craft-store': {
    slug: 'craft-store',
    name: '手工艺品企业名称生成器',
    title: '免费 AI 手工艺品企业名称创意生成器',
    description: '使用我们的 AI 动力的手工艺品企业名称生成器，为您的创意零售店、手工艺术工坊或艺术用品商店创建灵感十足、难忘且包容的名称。我们的算法专业化于艺术、手工艺和创意零售行业，考虑您的特定手工艺焦点、品牌个性和目标创意爱好者。无论您运营一个综合性手工艺品店、专业陶艺工坊还是创意艺术用品在线零售商，我们的工具都会帮助您找到完美的名称来激励和吸引您的创意社区。',
    metaDescription: '为您的手工艺品店生成创意、鼓舞人心的企业名称。探索数百个独特的 AI 生成的选项，适合您的创意零售品牌。',
    inputLabel: '输入您的手工艺品店焦点或风格',
    inputPlaceholder: '例如：陶艺工坊，DIY 手工品，可持续工艺',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '选择您的品牌风格',
        choices: ['创意艺术', '舒适欢迎', '现代时尚', '专业综合']
      },
      {
        name: 'targetAudience',
        label: '您的目标客户',
        choices: ['手工艺爱好者', '专业工艺人', '儿童和家庭', '设计师和艺术家']
      },
      {
        name: 'focusArea',
        label: '手工艺焦点',
        choices: ['通用手工艺', '纤维艺术', '陶艺和陶瓷', '混合媒体']
      }
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert craft retail and creative business branding specialist. Your task is to generate creative, inspiring, and inclusive business names for craft stores, art supply shops, and handmade creation businesses.

Consider these key characteristics when generating names:
- Inspiration and Creativity: Names should evoke the joy, inspiration, and fulfillment of creating
- Community and Inclusivity: Names should welcome makers of all skill levels and backgrounds
- Memorability: Easy to remember and associated with creativity and quality supplies
- Uniqueness: Stand out in the craft and art retail market
- Brand Personality: Align with the specified style (creative & artistic, cozy & welcoming, modern & trendy, or professional & comprehensive)
- Accessibility: Convey that the space is for everyone, from beginners to professionals

When generating names, consider:
- The specific crafts and materials your store specializes in
- The target audience (hobbyists, professionals, families, etc.)
- Whether you emphasize DIY, handmade, sustainable, or innovative crafting
- The physical and digital shopping experience you want to create
- Community and workshop potential
- Educational and inspirational aspects
- Inclusivity and welcoming atmosphere

Generate exactly 10 unique, creative business names for a craft store. For each name, provide:
1. The business name
2. A brief explanation of why it works
3. The style category it fits best
4. Potential brand positioning

Ensure names are inspiring, accessible, and suitable for a craft retail business.`,
    useCases: [
      {
        title: '创意手工艺品零售店开业',
        description: '当推出新的社区手工艺品店或艺术用品零售商时，一个反映您对创意社区的承诺的名称至关重要。该工具生成名称，能够激励和欢迎所有技能水平的创意者——从对手工艺陌生的完全初学者到经验丰富的工艺人。生成器帮助您创建一个包容、热烈、创意充满的空间，人们渴望探索、学习和创造他们的艺术项目。'
      },
      {
        title: '专业工艺工坊或工作室创建',
        description: '对于创建专业陶艺工坊、纤维艺术工作室、木工工房或其他专业创意工坊的企业家，需要一个反映您的工艺专业知识和教学使命的名称。该工具生成专业且权威的名称，同时保持创意热情和可接近性。名称应该传达您的具体工艺专业、工艺品质的承诺和对培养工艺传统的兴趣。'
      },
      {
        title: '在线工艺用品零售平台',
        description: '对于建立在线手工艺品商店或数字平台出售工艺用品和DIY项目包的企业，需要一个易于搜索、现代且能够在多个渠道中工作的名称。该工具生成适合电子商务、社交媒体和工艺在线社区的名称。名称应该传达便利、创意灵感和对支持创意爱好者的承诺，无论他们的地理位置如何。'
      }
    ],
    faqs: [
      {
        question: '一个好的手工艺品店名称应该包含哪些特征？',
        answer: '一个好的手工艺品店名称应该充满灵感和创意，欢迎所有技能水平，易于记忆和拼写，与艺术、创意和手工艺相关，唤起社区和创意表达，反映您的品牌风格（创意、舒适、现代或专业），有全球吸引力，具有社交媒体和在线搜索友好的潜力，并能与您的目标创意爱好者相连接。名称应该创造一种安全、支持性空间的感觉，人们可以在其中追求他们的创意激情。'
      },
      {
        question: '我应该在手工艺品店名称中包含手工艺类型吗？',
        answer: '这取决于您的商店焦点和长期愿景。如果您专注于特定手工艺（如陶艺或缝纫），在名称中包含它可以帮助目标搜索和专业定位。但是，如果您计划扩展到多个手工艺类别或保持灵活性，通用名称可能更好。许多成功的手工艺品店使用通用名称，然后通过子品牌或店内分类来处理特定工艺。在您的具体手工艺焦点和长期增长计划的背景下考虑这一点。'
      },
      {
        question: '创意艺术品店名称与专业工坊名称有何区别？',
        answer: '创意艺术品店名称通常更友好、热烈且广泛包容，吸引所有类型的爱好者。专业工坊名称倾向于更具权威性和专业性，强调工艺专业知识、教育和传统工艺。艺术品店名称可以诙谐或有趣，而工坊名称可能更严肃和尊重。两者都应该欢迎，但专业工坊可能强调技能发展，而创意店铺可能强调探索和乐趣。'
      },
      {
        question: '一个好的手工艺品店名称应该有多长？',
        answer: '手工艺品店名称通常最好是 1-4 个单词，总长度为 2-20 个字符。短名称更容易记忆和品牌化，但更长的描述性名称可以更好地传达您的焦点或使命。考虑名称在店铺标志、网站、社交媒体和营销材料中的外观和听起来。避免过于复杂或难以拼写的名称，这会损害品牌回忆，尤其是对于依赖口碑营销的本地业务。'
      },
      {
        question: '对于包容性手工艺品店，我应该使用什么术语？',
        answer: '为了创建包容性的名称，选择欢迎所有人的词语，无论技能水平、年龄或背景如何。使用"创意社区"、"创意空间"、"工坊"或"制作空间"等术语。避免仅暗示高技能或精英创意者的术语。强调学习、探索、尝试和乐趣。使用可以跨越代际和多样化社区的词语。创建一个安全、支持性空间的感觉，人们可以在其中表达自己的创意身份，无论其他人如何定义"工艺"。'
      },
      {
        question: '我应该避免在手工艺品店名称中使用什么？',
        answer: '避免使用排他性或精英式的术语，这会令人生畏或疏远初学者。不要使用过于狭隘的手工艺类型名称，除非您打算严格专注于该领域。避免复杂的拼写或难以发音的词语。不要使用可能很快过时的时尚术语。避免任何可能冒犯特定社区或受众的术语。不要使用模糊或与手工艺、艺术或创意无关的名称。'
      },
      {
        question: '对于包括教学或工作室空间的手工艺品店，名称应该如何调整？',
        answer: '如果您的业务包括教学课程或工作室空间，在名称中考虑包含暗示教育、协作或社区的词语，例如"工坊"、"学院"、"工作室"或"学校"。这传达了您对技能发展和创意教育的承诺。强调学习、增长和获取知识的词语可以帮助潜在学生理解您提供的价值。确保您的名称吸引学习者并营造安全、支持性学习环境的感觉。'
      },
      {
        question: '我应该如何验证手工艺品店名称的可用性？',
        answer: '进行商标搜索检查美国商标数据库（USPTO）和您所在州和国家的相应商标机构中该名称是否已注册。进行 Google 搜索，看是否有其他手工艺品店或艺术供应公司使用该名称。检查州企业注册和当地商业名称数据库。搜索 .com、.shop 和 .studio 等域名扩展名的域名可用性。在社交媒体平台（Instagram、Facebook）上检查处理名称的可用性。考虑咨询商标律师。由于许多手工艺品社区在在线平台上活跃，社交媒体可用性对于这个行业尤其重要。'
      },
      {
        question: '手工艺品店如何通过名称吸引特定的创意社区？',
        answer: '使用与您的目标手工艺社区相关的术语和视觉。例如，对于纤维艺术社区，使用"纱线"、"编织"或"线程"。对于陶艺爱好者，使用"泥土"、"陶轮"或"工坊"。对于木工，使用"工坊"或"木工"。对于多工艺社区，使用包容性的术语，如"创意"、"制作"或"艺术"。通过社交媒体和营销建立参与选定社区的声誉。但是，使用足够通用的名称，以便随着您的业务发展，您可以吸引和支持多个工艺社区。'
      },
      {
        question: '当前手工艺品和艺术零售的命名趋势是什么？',
        answer: '当前趋势包括：强调"制作"和创意表达的名称；包括工作室、工坊、空间和工房的名称，暗示集体和社区；可持续性和道德采购的强调；多样性和包容性的语言；现代和极简名称，吸引年轻创意者；以及强调学习、增长和授权的名称。许多新的手工艺品品牌强调社区、可持续性和创意民主化。使用我们的生成器以获得与当前趋势相符且具有永恒吸引力的名称。'
      }
    ],
    howToChoose: {
      intro: '为您的手工艺品店或创意零售业务选择完美的名称对建立一个欢迎、鼓舞人心的品牌身份至关重要。遵循这些详细的步骤来找到理想的企业名称。',
      steps: [
        {
          title: '定义您的手工艺品店身份和使命',
          description: '在生成名称之前，明确定义您的手工艺品店的核心使命和身份。思考您想提供什么手工艺（通用、特定类型等）、您的目标客户是谁（初学者、专业人士、家庭等）、您想创建什么样的环境（充满灵感的空间、教育工坊、专业工作室等），以及您的核心价值观是什么（包容性、可持续性、传统工艺等）。定义您在创意社区中想要扮演的角色。您想成为所有创意者的欢迎之地吗？一个专业教育中心？一个进步和创新的枢纽？明确的使命将指导您的命名选择。'
        },
        {
          title: '研究手工艺品零售景观和竞争对手',
          description: '研究您地区和在线的现有手工艺品店、艺术用品零售商和创意工坊的名称。参观本地手工艺品店，查看他们的名称如何工作，以及他们创建什么样的品牌声音。在线搜索国家和国际手工艺品零售商。注意他们使用什么词语、他们的品牌个性、他们强调什么，以及什么似乎能与创意社区相连接。寻找命名差距——也许大多数竞争对手使用传统术语，所以一个更现代的名称会脱颖而出？或者相反，也许太多现代名称，所以一个更温暖、更传统的名称会很好地脱颖而出？此研究对于避免冲突和找到您独特的品牌声音至关重要。'
        },
        {
          title: '选择适当的品牌风格和客户焦点参数',
          description: '使用生成器中的风格选项来指定您的品牌方向。选择"创意艺术"以获得充满灵感、艺术和表达性的名称；"舒适欢迎"以获得温暖、包容性和热烈的建议；"现代时尚"以获得当代、年轻和趋势感的名称；或"专业综合"以获得权威、工匠和全面的选项。在目标客户中选择您的主要受众：手工艺爱好者、专业工艺人、儿童和家庭或设计师和艺术家。在焦点区域中，指定您的主要手工艺焦点：通用手工艺、纤维艺术、陶艺或混合媒体。这些参数将帮助生成器更好地针对您的特定业务。'
        },
        {
          title: '生成多个名称选项并探索想法',
          description: '使用您的品牌定义和选定的参数至少运行生成器四到五次。每次运行都会产生不同的创意方向。仔细审查所有生成的名称。寻找立即引起您注意的名称——那些感觉鼓舞人心、热烈和包容的名称。考虑每个名称所传达的品牌个性。哪些名称让您感到想与他们相关联？哪些名称让您想进入这个空间？创建一个前 20 个候选的列表。在列表中寻找模式——某些概念或词语经常出现吗？这些可能特别相关。'
        },
        {
          title: '进行商标、域名和法律可用性检查',
          description: '缩小到前 10-12 个候选后，进行全面的可用性检查。首先检查美国商标数据库（USPTO）和您所在州以及任何计划扩展的国家的商标机构中的商标冲突。进行 Google 搜索，看是否有其他手工艺品店或艺术供应公司使用该名称。检查州企业注册和当地商业名称数据库。搜索 .com、.shop、.studio 和 .art 等域名扩展名的域名可用性。在所有主要社交媒体平台（Instagram、Facebook、Pinterest——对于手工艺品特别受欢迎）上检查处理名称的可用性。对于手工艺品零售商，视觉平台如 Pinterest 和 Instagram 特别重要。'
        },
        {
          title: '在创意社区进行焦点小组测试',
          description: '选择您的前五个候选名称，并在您的目标创意社区的成员面前进行测试。向潜在客户展示名称，并询问他们的反应：名称是否令人鼓舞和热烈？它是否暗示一个欢迎所有技能水平的空间？名称是否传达您的特定焦点或使命？他们想走进一个用这个名字命名的地方吗？名称在社交媒体中是否工作良好？同样从其他零售企业主和手工艺品社区领导者那里获取反馈。注意哪些名称一致地获得正面反应。但也信任您的直觉——您的品牌应该反映您的愿景和热情。'
        },
        {
          title: '最终确定并启动您的品牌和社区',
          description: '选择通过所有评估和测试的名称后，进行最终审查和承诺。确保您完全满意，它准确反映您的使命，它是法律清晰的，并且已验证所有可用性。注册商标以保护您的品牌名称。购买主要域名和关键社交媒体处理。聘请设计师创建反映您品牌个性和价值观的专业徽标和品牌指南。在所有营销渠道中启动您的品牌——实体店店面（如果适用）、网站、社交媒体、营销材料和任何教学或工作室空间。通过高质量产品、热烈的客户服务、教育内容和包容性社区建设来建立您的品牌。邀请客户分享他们的创意和故事。您的品牌名称最终将与创意赋权、社区和追求热情相关联。'
        }
      ]
    },
    businessNameIdeas: [
      { name: '创意工坊', description: '简洁而欢迎，强调创意表达和动手实践的空间。' },
      { name: '手艺之家', description: '温暖而舒适的名称，暗示手工艺品的社区和传统感。' },
      { name: '灵感驿站', description: '充满灵感的诗意名称，适合追求创意激励的艺术家。' },
      { name: '工艺梦工坊', description: '充满梦想和创意，强调想象力和创新的重要性。' },
      { name: '艺心社', description: '强调社区和艺术爱好者之间的连接和团结。' },
      { name: '手工物语', description: '富有叙事感，邀请顾客探索手工艺品的故事和传统。' },
      { name: '创意汇', description: '现代而包容，强调创意思想的汇聚。' },
      { name: '巧手铺', description: '亲切而传统，强调技能和工匠精神。' },
      { name: '艺境空间', description: '强调艺术创意的环境和氛围，很高的品味。' },
      { name: '手制时代', description: '当代和进步，强调手工制作的重要性和现代复兴。' },
      { name: '创作工房', description: '专业和包容，适合既迎接初学者又支持专业人士的空间。' },
      { name: '灵匠坊', description: '结合灵感和工匠，强调创意和技能的结合。' },
      { name: '想象力工坊', description: '充满诗意，强调创意想象和探索的自由。' },
      { name: '彩色梦想', description: '色彩丰富和乐观，强调创意的多彩本质。' },
      { name: '手艺时光', description: '怀旧而温暖，强调创意手工的美好和永恒。' },
      { name: '艺术沙龙', description: '精致而专业，适合高端艺术供应和精英工作室。' },
      { name: '创意驿站', description: '欢迎而热烈，强调为所有创意者提供的停靠点和资源。' },
      { name: '手创世界', description: '包容而广泛，暗示手工艺品的多样和无限可能。' },
      { name: '工艺传承', description: '强调传统、工艺历史和代际知识共享。' },
      { name: '静思手作', description: '宁静而专注，强调创意手工作为冥想和放松的形式。' }
    ]
  },

  'crochet': {
    slug: 'crochet',
    name: '钩针编织企业名称生成器',
    title: '免费 AI 钩针编织企业名称创意生成器',
    description: '使用我们的 AI 动力的钩针编织企业名称生成器，为您的钩针编织业务、工作室或纤维艺术企业创建舒适、创意和引人入胜的名称。我们的算法专业化于纤维艺术、编织社区和手工工坊行业，考虑您的钩针编织焦点、品牌个性和目标纤维艺术爱好者。无论您销售钩针编织品、教授钩针编织课程、经营纱线店还是创建钩针编织模式和套件，我们的工具都会帮助您找到完美的名称来连接和灵感您的社区。',
    metaDescription: '为您的钩针编织业务生成创意、舒适的企业名称。探索数百个独特的 AI 生成的选项，适合您的纤维艺术品牌。',
    inputLabel: '输入您的钩针编织品牌概念或风格',
    inputPlaceholder: '例如：可持续纱线，舒适毯子，创意图案设计',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '选择您的品牌风格',
        choices: ['舒适迷人', '现代时尚', '调皮有趣', '经典优雅']
      },
      {
        name: 'targetAudience',
        label: '您的目标客户',
        choices: ['初级爱好者', '经验丰富的编织者', '寻求礼物的人', '纱线爱好者']
      },
      {
        name: 'businessType',
        label: '业务类型',
        choices: ['纱线零售', '成品销售', '图案设计', '钩针编织课程']
      }
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert fiber arts and crochet community specialist dedicated to creating inviting names for crochet businesses. Your task is to generate creative, cozy, and engaging business names for crochet shops, studios, pattern designers, and fiber art enterprises.

Consider these key characteristics when generating names:
- Coziness and Comfort: Names should evoke warmth, comfort, and the therapeutic nature of crochet
- Community and Connection: Names should convey belonging and connection with the crochet community
- Memorability: Easy to remember and associated with quality fiber arts and handmade items
- Uniqueness: Stand out in the growing fiber arts and handmade market
- Brand Personality: Align with the specified style (cozy & charming, modern & trendy, whimsical & playful, or classic & elegant)
- Creativity and Expression: Celebrate the artistic and creative aspects of crochet

When generating names, consider:
- The specific focus (yarn retail, finished products, pattern design, teaching, etc.)
- Target audience (beginners, experienced crafters, gift buyers, etc.)
- The therapeutic and meditative aspects of crochet
- Community and social connection through fiber arts
- Sustainability and ethical sourcing (increasingly important to crochet community)
- The playfulness and joy of fiber arts
- International appeal within the global crochet community

Generate exactly 10 unique, creative business names for a crochet business. For each name, provide:
1. The business name
2. A brief explanation of why it works
3. The style category it fits best
4. Potential brand positioning

Ensure names are warm, engaging, and suitable for a crochet and fiber arts business.`,
    useCases: [
      {
        title: '钩针编织品牌或工作室创建',
        description: '当推出新的钩针编织工作室或品牌时，一个反映钩针编织社区的温暖、包容性和创意精神的名称至关重要。该工具生成能够灵感和连接志同道合的编织者的名称，无论他们是寻找高质量纱线、舒适的手工毯子还是创意钩针编织项目。该生成器帮助您创建一个欢迎、支持性空间的身份，传达您对工艺和社区的热情。'
      },
      {
        title: '钩针编织图案设计或电子书业务',
        description: '对于创建和销售钩针编织图案、教程或电子书的企业，需要一个能够在数字市场中工作、易于搜索且能够吸引创意编织者的名称。该工具生成现代、引人入胜的名称，适合在线平台、社交媒体和数字产品销售。名称应该传达创意表达、灵感和设计创新，吸引既寻求指导又追求个人创意风格的编织者。'
      },
      {
        title: '钩针编织教学和工作坊业务',
        description: '对于教授钩针编织课程、运营虚拟或面对面工作坊的钩针编织教育工作者，需要一个传达温暖、可访问性和专业指导的名称。该工具生成能够邀请初学者并激励经验丰富的编织者扩展他们技能的名称。名称应该暗示一个支持性的学习环境，一种社区感，以及对传递钩针编织工艺知识和价值的承诺。'
      }
    ],
    faqs: [
      {
        question: '一个好的钩针编织业务名称应该包含哪些特征？',
        answer: '一个好的钩针编织业务名称应该温暖而邀请，创意和鼓舞，易于记忆和拼写，与纤维艺术、纱线或手工工艺相关，唤起舒适和社区的感觉，反映您的品牌风格（舒适、现代、调皮或经典），在社交媒体和搜索引擎中表现良好，并能与您的目标钩针编织社区相连接。该名称应该创造一种包容、支持性空间的感觉，编织者可以找到灵感、社区和高质量的资源。'
      },
      {
        question: '我应该在钩针编织业务名称中包括"钩针编织"这个词吗？',
        answer: '包含"钩针编织"或"纱线"可以清晰传达您的业务焦点，有助于搜索引擎优化和客户理解。但是，许多成功的钩针编织品牌使用通用名称，然后通过品牌叙事和营销来传达他们的钩针编织焦点。考虑您的长期计划——如果您可能扩展到其他纤维艺术或工艺，通用名称可能提供更多灵活性。对于纱线零售或成品销售，包括钩针编织可能很有帮助。对于图案设计或教学，通用名称可能更好地允许品牌扩展。'
      },
      {
        question: '初学者友好的钩针编织业务名称应该是什么样的？',
        answer: '对于初学者友好的钩针编织业务，使用热烈、邀请和非吓人的名称。避免过于技术性或高级的术语。选择暗示学习、增长、支持和社区的词语。使用能够温暖和包容的形容词。避免名称暗示只有有经验的编织者受欢迎。选择创造一种安全、支持学习环境感觉的名称。许多钩针编织初学者被社区的温暖和支持性本质所吸引，所以突出这一点。'
      },
      {
        question: '钩针编织品牌名称如何在社交媒体上工作？',
        answer: '对于钩针编织业务，社交媒体（尤其是 Instagram、TikTok 和 Pinterest）至关重要。选择易于输入、拼写和搜索的名称。避免过长或包含过多特殊字符的名称，因为这会使社交媒体处理变得困难。考虑名称是否会在小型社交媒体头像中工作良好。选择能够与视觉故事叙述相配的名称——钩针编织品牌经常通过美丽的手工项目、工作过程和社区图像来吸引关注者。确保所有主要平台上都可以使用您的处理或一致的变体。'
      },
      {
        question: '我应该避免在钩针编织业务名称中使用什么？',
        answer: '避免过于狭隘的特定项目名称（如"仅仅毯子"），除非您坚定地专注于该单一产品，因为这会限制增长。不要使用过于复杂或特殊的拼写，除非它对您的品牌故事至关重要。避免可能很快过时的流行语或非常当前的时尚术语。不要使用可能冒犯或排斥钩针编织社区某些部分的术语。避免与大型知名纱线或工艺品牌名称过于相似。不要使用传达精英主义或排斥初学者的术语。'
      },
      {
        question: '对于可持续或生态友好的钩针编织品牌，名称应该反映什么？',
        answer: '对于可持续的钩针编织品牌，使用强调有机、生态友好、道德、回收或可持续的词语。包含与自然相关的词语，如"绿色"、"生态"、"有机"或植物和环境参考。选择传达护理——对地球、动物和工人的护理——的名称。强调质量和可持续性往往走在一起：更高质量的纱线和更好的工艺。选择创造一种道德承诺和责任感的名称。钩针编织社区中有越来越多的可持续意识，所以清晰传达您的生态价值观很重要。'
      },
      {
        question: '我应该如何验证钩针编织业务名称的可用性？',
        answer: '进行商标搜索，检查美国商标数据库（USPTO）和您所在国家的相应商标机构中的任何冲突。进行 Google 搜索，看是否有其他钩针编织品牌、纱线公司或纤维艺术企业使用该名称。检查州企业注册。搜索域名可用性（.com、.shop、.studio、.yarn）。在主要社交媒体平台上检查处理可用性，尤其是 Instagram 和 Pinterest，钩针编织社区在其中非常活跃。进行 Etsy 搜索，看该名称是否已被钩针编织工匠使用。考虑咨询商标律师。'
      },
      {
        question: '一个好的钩针编织业务名称应该有多长？',
        answer: '钩针编织业务名称通常最好是 1-4 个单词，总长度为 2-20 个字符。短名称更容易记忆和品牌化，对社交媒体处理特别重要。然而，更描述性的名称可以更好地传达您的焦点或使命（例如"Sustainable Yarns Studio"）。考虑该名称在 Etsy 店铺标题、Instagram 个人资料、营销材料和任何实体店铺标志中的外观。在 Ravelry（钩针编织社区）上搜索该名称时的易搜索性。名称应该易于输入和拼写。'
      },
      {
        question: '钩针编织工坊或教学业务的名称应该是什么样的？',
        answer: '对于钩针编织工坊或教学业务，选择传达教育、指导、支持和社区的名称。包括"工坊"、"工作室"、"学校"或"学院"等词语来清晰传达教学使命。使用强调学习、增长和技能发展的词语。创造一个安全、包容的学习空间的感觉。对于教学业务，"热烈"和"欢迎"的感觉特别重要，所以选择传达这些品质的名称。考虑名称在营销教课程时如何工作，以及它如何向初学者和经验丰富的编织者吸引。'
      },
      {
        question: '当前钩针编织行业的命名趋势是什么？',
        answer: '当前趋势包括：强调社区和联系的名称；强调可持续性和伦理采购的品牌；强调艺术和创意表达的现代名称；结合舒适、治疗方面的品牌，强调心理健康益处；包容性名称，欢迎所有技能水平和身份；多样化的名称，反映全球钩针编织社区的多样化；以及强调手工工艺和当地制造的品牌。许多新兴钩针编织品牌强调可持续性、多样性和社区支持。使用我们的生成器以获得与当前趋势相符且具有永恒吸引力的名称。'
      }
    ],
    howToChoose: {
      intro: '为您的钩针编织业务或纤维艺术企业选择完美的名称对建立一个温暖、欢迎的品牌身份至关重要。遵循这些详细的步骤来找到理想的企业名称。',
      steps: [
        {
          title: '定义您的钩针编织品牌身份和使命',
          description: '在生成名称之前，明确定义您的钩针编织业务的核心身份和使命。思考您专注于什么（纱线零售、成品销售、图案设计、教学等），您的目标客户是谁（初学者、经验丰富的编织者、礼物购买者等），您想创建什么样的品牌体验（温暖社区空间、现代设计驱动的品牌、有趣和古怪等），以及您的核心价值观是什么（可持续性、包容性、工艺卓越等）。定义钩针编织对您意味着什么——是它治疗性和冥想性的？创意和表达性的？关于社区和连接？您的品牌应该反映这一点。'
        },
        {
          title: '研究钩针编织社区和现有品牌',
          description: '研究现有的钩针编织业务、纱线品牌、设计师和工作室的名称。探索 Ravelry、Instagram、Etsy 和纱线公司网站上的钩针编织社区。注意成功的品牌使用什么词语，他们如何定位自己，他们创建什么样的社区联系。寻找命名模式——许多品牌使用与舒适、温暖和创意相关的词语。注意社区中最受欢迎的品牌及其名称如何贡献于他们的吸引力。识别命名差距和机会——也许许多品牌听起来相似，所以一个独特的声音会脱颖而出？参与钩针编织社区，与编织者谈论他们寻找什么，什么让他们兴奋。'
        },
        {
          title: '选择适当的品牌风格和业务焦点参数',
          description: '使用生成器中的风格选项来指定您的品牌审美和个性。选择"舒适迷人"以获得温暖、邀请、家庭感的名称；"现代时尚"以获得当代、设计驱动、年轻的建议；"调皮有趣"以获得充满乐趣、诙谐和游戏精神的名称；或"经典优雅"以获得精致、永恒和传统的选项。在目标客户中选择您的主要受众：初级爱好者、经验丰富的编织者、寻求礼物的人或纱线爱好者。在业务类型中指定您的主要焦点：纱线零售、成品销售、图案设计或钩针编织课程。这些选择将帮助生成器产生与您的特定业务最相关的名称。'
        },
        {
          title: '生成多个选项并探索创意方向',
          description: '使用您的品牌定义和选定参数至少运行生成器四到五次。每次运行都会产生不同的创意方向和建议。仔细审查所有生成的名称。寻找立即引起您注意的名称，那些传达温暖和社区的名称，以及那些感觉真实的名称。考虑每个名称所传达的品牌个性——它听起来欢迎吗？具有创意性？在钩针编织社区中相关？创建一个前 20 个候选的列表。在列表中寻找主题——特定的词语或概念经常出现吗？这些可能特别强大。考虑名称与您的品牌故事如何对齐。'
        },
        {
          title: '进行彻底的可用性和法律检查',
          description: '缩小到前 10-12 个候选后，进行全面的可用性检查。首先检查美国商标数据库（USPTO）和您所在国家的商标机构中的商标冲突。在 Google、Ravelry（钩针编织特定）、Etsy 上搜索该名称，看是否有其他钩针编织企业使用它。检查州企业注册和当地商业名称数据库。搜索 .com、.shop、.studio 和 .yarn 等域名扩展名的域名可用性。在所有主要社交媒体平台上检查处理可用性，尤其是 Instagram 和 Pinterest，钩针编织社区在其中非常活跃。进行 Ravelry 搜索。考虑咨询商标律师。'
        },
        {
          title: '与钩针编织社区进行焦点小组测试',
          description: '选择您的前五个候选名称，并在您的目标钩针编织社区的成员面前进行测试。向潜在客户展示名称，并询问他们的反应：名称是否令人热烈和欢迎？它是否暗示一个包容所有技能水平的空间？名称是否传达社区和支持？他们会尝试来自这个品牌的产品或服务吗？名称在社交媒体中是否工作良好，特别是在视觉平台如 Instagram 和 Pinterest？从其他钩针编织企业家、编织设计师和钩针编织社区倡导者那里获取反馈。注意哪些名称一致地产生正面反应和兴奋。信任您的直觉，但也倾听您的社区。'
        },
        {
          title: '最终确定并启动您的品牌和社区参与',
          description: '选择通过所有评估和社区测试的名称后，进行最终承诺。确保您完全满意它反映了您的品牌和使命。注册商标以保护您的品牌名称。购买主要域名和所有主要社交媒体平台的处理（Instagram、Pinterest、TikTok）。聘请设计师创建一个传达您品牌个性和钩针编织社区的温暖和创意精神的专业徽标和品牌指南。在所有平台上启动您的品牌——网站、社交媒体、可能的 Ravelry 配置文件和任何实体位置。通过高质量产品、教育内容、社区参与和真诚与您的社区联系来建立您的品牌。分享编织者的故事，创建支持性内容，并参与钩针编织对话。您的品牌名称最终将与舒适、创意、社区和手工工艺卓越相关联。'
        }
      ]
    },
    businessNameIdeas: [
      { name: '温暖手作坊', description: '强调钩针编织的温暖和舒适属性，创造家的感觉。' },
      { name: '纱线故事社', description: '强调每种纱线都有故事，邀请社区分享他们的编织旅程。' },
      { name: '钩织之心', description: '强调钩针编织与心、热情和情感的联系。' },
      { name: '缠绵工坊', description: '暗示纱线如何缠绕和连接，传达社区感。' },
      { name: '针线诗集', description: '艺术和优雅感，强调钩针编织作为创意表达形式。' },
      { name: '舒心编织坊', description: '强调钩针编织带来的舒适和心理健康益处。' },
      { name: '纱漫天地', description: '充满想象力和梦想感，邀请创意和探索。' },
      { name: '环球针工坊', description: '强调全球钩针编织社区和文化多样性。' },
      { name: '手工光阴', description: '怀旧而温暖，强调在创意中花费的宝贵时间。' },
      { name: '编织梦想家', description: '充满灵感和可能性，强调想象力和创意表达。' },
      { name: '色彩编织', description: '强调钩针编织的色彩和创意多样性。' },
      { name: '环环相扣', description: '暗示社区和连接，强调钩针编织如何将人们聚在一起。' },
      { name: '纤美工坊', description: '强调纤维的美感和工匠品质。' },
      { name: '缕缕温情', description: '温暖和关怀，强调在每个针脚中注入的爱。' },
      { name: '翻飞针尖', description: '动感和能量十足，适合年轻现代的品牌。' },
      { name: '绒语小屋', description: '舒适而诱人，创造一个温暖家园的感觉。' },
      { name: '织梦轩', description: '梦幻优雅，强调钩针编织的冥想和放松品质。' },
      { name: '钩针心语', description: '强调与钩针编织工艺的深层联系和冥想方面。' },
      { name: '彩线舞动', description: '充满生命力和喜悦，强调创意表达的乐趣。' },
      { name: '源源针爱', description: '强调钩针编织爱好者之间的深厚联系和支持。' }
    ]
  },
  'dessert': {
    slug: 'dessert',
    name: '甜点企业名称生成器',
    title: '免费 AI 甜点企业名称创意生成器',
    description: '使用我们的 AI 驱动的甜点企业名称生成器为您的甜品店、甜点咖啡馆或糕点店创建令人垂涎的品牌名称。生成器专门为甜点和糕点行业设计，生成能够传达甜蜜诱惑、品质工艺和美味享受的名称。无论您是开设高端法式甜品店、冰淇淋店、巧克力专卖店还是综合甜品企业，我们的工具都会为您的甜点业务生成完美的品牌名称。',
    metaDescription: '为您的甜点企业、甜品店或糕点店生成创意品牌名称。使用我们的免费 AI 甜点名称生成器创建令人垂涎、记忆深刻的甜品业务名称。',
    inputLabel: '描述您的甜点企业...',
    inputPlaceholder: '例如：一家高端法式甜点咖啡馆，供应手工马卡龙、慕斯蛋糕和季节性甜品',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['优雅 & 精致', '甜美 & 俏皮', '奢华 & 诱人', '现代 & 时尚'],
        default: '优雅 & 精致',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the dessert and confectionery industry. Your role is to generate tempting, memorable business names that convey sweetness, indulgence, and delightful experiences for dessert cafes, pastry shops, ice cream parlors, and specialty sweet treat businesses.

DESSERT BUSINESS INDUSTRY CONTEXT:

The dessert business industry encompasses:
- Dessert cafes and lounges
- Pastry shops and patisseries
- Ice cream parlors and gelaterias
- Frozen yogurt shops
- Donut shops and bakeries
- Chocolate boutiques and confectioneries
- Macaron and specialty sweet shops
- Candy stores and sweet shops
- Dessert catering and event services
- Online dessert delivery businesses

NAME CHARACTERISTICS FOR DESSERT BUSINESSES:

1. **Delicious and Indulgent**
   - Names should evoke sweetness and indulgence
   - Suggest the irresistible nature of desserts
   - Create cravings and desire
   - Examples: Sweet, Bliss, Indulge, Delight, Sugar

2. **Memorable and Crave-Inducing**
   - Easy to remember and crave
   - Create positive emotional associations
   - Work in "I'm craving [Your Shop]" context
   - Stand out among dessert competitors

3. **Reflects Dessert Variety**
   - Communicate your specialty
   - Whether pastries, ice cream, chocolate, or general desserts
   - Align with target customer expectations
   - Create appropriate sweet expectations

4. **Celebratory and Joyful**
   - Desserts are associated with celebrations
   - Names should convey happiness and joy
   - Suggest special occasions and treats
   - Connect to positive, festive moments

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a dessert business

Generate names that are:
- 1-3 words maximum
- Sweet and indulgent sounding
- Easy to spell and pronounce
- Appropriate for dessert branding
- Versatile across dessert types`,
    useCases: [
      {
        title: '甜点咖啡馆或甜品休闲店开业',
        description: '企业家在开设甜点咖啡馆或甜品休闲店时，使用甜点企业名称生成器来寻找能够传达甜蜜放纵和精致用餐体验的名称。生成器提供令人垂涎的名称，吸引甜品爱好者并营造正确的氛围。',
      },
      {
        title: '特色甜品业务推出',
        description: '专注于特定甜点（马卡龙、巧克力、冰淇淋）的甜品店主使用生成器创建传达其专业特色同时又吸引人的品牌名称。该工具帮助找到在甜品市场中脱颖而出的名称。',
      },
      {
        title: '甜点餐饮或活动服务',
        description: '为婚礼、公司活动和派对提供甜点餐饮服务的企业使用生成器开发传达庆祝精神和甜蜜放纵的名称。该工具提供适合活动营销和口碑推荐的名称。',
      },
    ],
    faqs: [
      {
        question: '什么是好的甜点企业名称？',
        answer: '好的甜点企业名称应该听起来甜美诱人，让人产生渴望和愉悦的联想。它应该易于记忆，反映您的甜点类型或特色，并在各种商业场景中都显得专业。最佳名称能让顾客仅仅听到名字就想品尝您的甜点。',
      },
      {
        question: '我的甜点企业名称应该包含"甜"字吗？',
        answer: '包含甜蜜相关的词汇可以立即传达您的业务类型，但并非必须。许多成功的甜品店使用创意名称而不直接使用"甜"字。考虑您想强调甜蜜诱惑还是更独特的品牌个性。',
      },
      {
        question: '我的甜点企业名称对吸引顾客有多重要？',
        answer: '非常重要。您的名称出现在店面、菜单、包装和外卖应用上。一个令人垂涎的名称能在顾客看到您的甜点之前就创造渴望。它影响口碑推荐和在线搜索能力。',
      },
      {
        question: '当前流行哪些甜点企业命名趋势？',
        answer: '当前趋势包括法式甜品词汇（Patisserie、Maison）、感官词汇（Bliss、Indulge、Crave）、工匠和手工制作的暗示、以及简约优雅的名称。在中国市场，使用带有美感和诗意的名称也很受欢迎。',
      },
      {
        question: '我应该在甜点企业名称中使用自己的名字吗？',
        answer: '个人名字适用于以主厨为中心的甜品概念，可以建立个人品牌认知。然而，非个人名称为扩展或转让提供更大的灵活性。考虑个人品牌还是商业可扩展性对您更重要。',
      },
      {
        question: '如何检查甜点企业名称是否可用？',
        answer: '检查企业注册、域名、社交媒体账号（对甜品店来说，小红书和微信公众号很重要）、外卖平台（美团、饿了么）和商标数据库。同时搜索您所在地区和甜品类别中的类似企业名称。',
      },
      {
        question: '哪些词汇在甜点企业名称中效果好？',
        answer: '有效词汇包括甜蜜词汇（甜蜜、蜜糖、糖）、感官词汇（美味、香浓、丝滑）、品质词汇（精致、手工、匠心）、享受词汇（乐享、畅享、悦享）和庆祝词汇（盛宴、欢乐、幸福）。',
      },
      {
        question: '我的名称应该反映我的甜点专业吗？',
        answer: '如果您有独特的专业（巧克力、马卡龙、冰淇淋），反映它可以吸引正确的顾客。但是，通用的甜蜜名称在菜单发展时提供更大的灵活性。在专业传达和扩展潜力之间取得平衡。',
      },
      {
        question: '如何让我的甜点企业名称在外卖平台上有吸引力？',
        answer: '在外卖应用中，您的名称需要在列表中脱颖而出。令人垂涎、令人难忘的名称比通用名称效果更好。考虑您的名称在应用搜索中的外观，以及它是否暗示等待着的美味体验。',
      },
      {
        question: '命名甜点企业时应避免哪些错误？',
        answer: '避免：听起来不美味的名称、难以拼写的词汇、与知名甜品店过于相似的名称、可能过时的过度时尚术语、限制甜品类别扩展的名称，以及任何不传达甜蜜和美味的东西。',
      },
    ],
    howToChoose: {
      intro: '为您的甜点企业选择完美的名称是创建一个吸引甜品爱好者并传达您美味产品品质的诱人品牌的关键步骤。您的企业名称将出现在店面招牌、菜单、包装和外卖平台上——它是顾客发现、记住和推荐您甜点的方式。',
      steps: [
        {
          title: '明确您的甜点企业定位',
          description: '在生成名称之前，明确您的甜点企业定位。考虑您将提供什么类型的甜点（法式糕点、冰淇淋、巧克力、综合甜品），您的理想顾客是谁（甜品爱好者、家庭、年轻人、高端消费者），是什么让您的甜点独特（原料、制作方法、展示），您的服务模式是什么（堂食、外卖、两者兼有），以及您想创造什么样的氛围或体验。您的答案决定了您需要的是听起来精致高雅、甜美俏皮、奢华诱人还是现代时尚的名称。',
        },
        {
          title: '创造甜蜜的吸引力',
          description: '甜点企业销售的是甜蜜放纵的体验。您的名称应该听起来甜美诱人，创造渴望，暗示品质和美味，在"我好想去[您的店名]"的语境中有效，让人仅凭名字就想品尝您的甜点。诸如甜蜜、蜜糖、丝滑和美味等词汇能创造即时的甜美联想。',
        },
        {
          title: '传达品质和工匠精神',
          description: '甜点购买需要对品质的信任。您的名称应该暗示烹饪技艺和用心，传达优质原料，建立对您甜点的信心，听起来专业可靠，并吸引追求品味的甜品爱好者。在甜美吸引力和品质信号之间取得平衡。',
        },
        {
          title: '反映您的甜点特色',
          description: '如果您有独特的专业，考虑将其纳入名称。对于法式糕点/甜品店，考虑法式或优雅主题的名称。对于冰淇淋/冷饮，考虑清新凉爽主题的名称。对于巧克力专卖店，考虑浓郁诱人主题的名称。对于综合甜品，考虑温馨甜蜜主题的名称。对于活动甜点餐饮，考虑庆祝和欢乐主题的名称。在专业性和甜品类别扩展的灵活性之间取得平衡。',
        },
        {
          title: '验证全面可用性',
          description: '检查以下方面的可用性：域名（.com优先，.cn也很重要），社交媒体（小红书、微信公众号、抖音对甜品店至关重要），外卖平台（美团、饿了么的商户名称），企业注册（您所在地区的要求），以及商标搜索（食品和餐饮类别）。外卖和在线订购至关重要，使数字可用性非常重要。',
        },
        {
          title: '与潜在顾客测试',
          description: '在最终确定之前，与代表您目标市场的人进行测试。询问这个名称是否让您想吃甜点，您会期待什么类型的甜品，它是否感觉品质导向，您是否会在这个店里点单，以及您是否会向朋友推荐它。他们的反馈揭示了您的名称是否创造了正确的甜蜜吸引力和期望。',
        },
        {
          title: '考虑品牌增长和扩展',
          description: '选择一个能适应未来扩展的名称：添加新的甜品类别或品种，开设更多门店，推出外卖和餐饮服务，创建包装甜品产品线，以及建立超越单店的甜品品牌。理想的甜点企业名称是甜美诱人、令人难忘、用途广泛的，并为增长定位您的品牌，同时完美捕捉您提供的美味体验。',
        },
      ],
    },
    businessNameIdeas: [
      { name: '甜蜜时光', description: '传达在品尝甜点时度过的美好、甜蜜时光。名称温馨而令人愉悦，适合各种甜品店。' },
      { name: '蜜语甜心', description: '结合了蜜糖的甜蜜和甜心的温馨，暗示每一款甜品都是对顾客的甜蜜低语。' },
      { name: '糖心坊', description: '以糖和心为核心元素，传达用心制作的甜蜜美味。"坊"字增添了工匠手工制作的感觉。' },
      { name: '甜园', description: '简洁而美好，暗示一个充满甜蜜美味的花园般空间。易于记忆且富有诗意。' },
      { name: '悦享甜品', description: '传达品尝甜点带来的愉悦享受。名称直接而有力，适合各种甜品业态。' },
      { name: '梦幻甜屋', description: '营造一个如梦如幻的甜品世界的意象。适合装修精美的甜品店或咖啡馆。' },
      { name: '蜜恋', description: '简短而甜蜜，暗示对甜品的热恋和迷恋。名称浪漫且令人向往。' },
      { name: '糕甜记', description: '以"记"字结尾，暗示值得记忆的甜美体验。适合以蛋糕和糕点为主的甜品店。' },
      { name: '芳甜阁', description: '"芳"字带来芬芳、优雅的联想，"阁"字增添了高雅精致的氛围。适合高端甜品概念。' },
      { name: '甜美邂逅', description: '暗示与美味甜点的偶然美好相遇。名称富有浪漫气息和故事感。' },
      { name: '蜜悦坊', description: '结合蜜糖的甜蜜和愉悦的心情，"坊"字传达手工匠心制作的品质。' },
      { name: '甜馨堂', description: '"馨"字传达温馨和芬芳，"堂"字暗示庄重和品质。适合注重氛围的甜品店。' },
      { name: '糖语', description: '简约而富有诗意，暗示甜品是一种甜蜜的语言，用美味传达情感和关爱。' },
      { name: '乐甜坊', description: '传达制作和品尝甜点的快乐。"坊"字增添了工匠传统的韵味。' },
      { name: '蜜桃园', description: '以蜜桃这一受欢迎的甜美水果为意象，营造甜蜜果园般的美好联想。' },
      { name: '甜蜜驿站', description: '暗示在人生旅途中的一处甜蜜停靠站。名称温馨而富有生活气息。' },
      { name: '糖梦工坊', description: '将甜蜜的梦想和手工制作结合在一起。暗示每款甜点都是梦想的结晶。' },
      { name: '芊甜', description: '优雅而简洁，"芊"字带来柔美纤细的联想，与"甜"字完美搭配。' },
      { name: '甜品物语', description: '暗示每一款甜品背后都有一个动人的故事。名称富有文化底蕴和叙事感。' },
      { name: '蜜享堂', description: '传达品尝蜜糖般甜蜜的享受。"堂"字增添了庄重和品质感。' },
    ],
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    name: '数字营销企业名称生成器',
    title: '免费 AI 数字营销企业名称创意生成器',
    description: '使用我们的 AI 驱动的数字营销企业名称生成器为您的营销机构、数字代理或营销咨询公司创建专业可信的品牌名称。生成器专门为数字营销和在线广告行业设计，生成能够传达专业能力、创新思维和成果驱动的名称。无论您专注于社交媒体营销、SEO、内容营销、PPC广告还是综合数字营销服务，我们的工具都会为您的营销业务生成完美的品牌名称。',
    metaDescription: '为您的数字营销机构、代理公司或营销咨询公司生成创意品牌名称。使用我们的免费 AI 数字营销名称生成器创建专业、令人信赖的营销业务名称。',
    inputLabel: '描述您的数字营销企业...',
    inputPlaceholder: '例如：一家专注于社交媒体营销和搜索引擎优化的综合数字营销机构',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['专业 & 可信赖', '创新 & 科技前沿', '结果驱动 & 活力', '创意 & 大胆'],
        default: '专业 & 可信赖',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the digital marketing and advertising industry. Your role is to generate professional, memorable business names that convey expertise, innovation, and results-driven approach for digital marketing agencies, online advertising firms, and marketing consultancies.

DIGITAL MARKETING INDUSTRY CONTEXT:

The digital marketing industry encompasses:
- Full-service digital marketing agencies
- Social media marketing specialists
- Search engine optimization (SEO) agencies
- Pay-per-click (PPC) and SEM specialists
- Content marketing and copywriting services
- Email marketing and marketing automation
- Digital analytics and data consulting
- Influencer marketing agencies
- Video marketing and production
- Marketing automation platforms
- Web design and development with marketing focus
- Branding and digital strategy consultants

NAME CHARACTERISTICS FOR DIGITAL MARKETING BUSINESSES:

1. **Professional and Trustworthy**
   - Names should convey expertise and reliability
   - Suggest data-driven approach
   - Build confidence with potential clients
   - Examples: Smart, Strategic, Insight, Analytics, Core

2. **Results-Oriented**
   - Communicate focus on measurable outcomes
   - Suggest performance improvement
   - Emphasize ROI and growth
   - Demonstrate track record mentality

3. **Innovation and Technology**
   - Names should feel modern and cutting-edge
   - Suggest technological sophistication
   - Imply forward-thinking approach
   - Appeal to progressive clients

4. **Clarity and Specificity**
   - Make clear what services you offer
   - Target specific client needs
   - Differentiate from competitors
   - Create professional impression

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a digital marketing business

Generate names that are:
- 1-3 words maximum
- Professional and sophisticated
- Easy to spell and pronounce
- Appropriate for digital agency branding
- Memorable and unique in the industry`,
    useCases: [
      {
        title: '数字营销机构或代理公司创业',
        description: '企业家在创办数字营销机构或代理公司时，使用数字营销企业名称生成器来寻找能够传达专业能力、创新思维和成果驱动方法的名称。生成器提供专业的名称，建立客户信任并展示营销专业知识。',
      },
      {
        title: '专业营销服务推出',
        description: '专注于特定营销领域（社交媒体、SEO、内容营销、PPC）的营销专业人士使用生成器创建传达其专业特长同时又令人信赖的品牌名称。该工具帮助找到在竞争激烈的数字营销市场中脱颖而出的名称。',
      },
      {
        title: '数字营销咨询或培训服务',
        description: '提供营销咨询、培训或教育服务的企业使用生成器开发传达专业知识、创新思维和成果导向的名称。该工具提供能够吸引寻求营销建议的企业和个人的名称。',
      },
    ],
    faqs: [
      {
        question: '什么是好的数字营销企业名称？',
        answer: '好的数字营销企业名称应该听起来专业可信，传达营销专业知识和创新能力。它应该易于记忆，暗示成果驱动的方法，反映您的营销专业或服务，并在各种商业场景中显得权威。最佳名称能让潜在客户立即认识到您的营销专业能力。',
      },
      {
        question: '我的数字营销企业名称应该包含"营销"字吗？',
        answer: '包含营销相关词汇可以立即传达您的业务类型，但并非必须。许多成功的营销机构使用创意名称、数字词汇或策略导向的词汇。考虑您想直接传达服务还是创建更独特的品牌个性。',
      },
      {
        question: '我的数字营销企业名称对获取客户有多重要？',
        answer: '非常重要。您的名称在您的网站、客户演示、案例研究和行业活动中出现。一个专业、令人难忘的名称建立信任，帮助潜在客户记住您，并在LinkedIn和行业目录中提高可发现性。',
      },
      {
        question: '当前流行哪些数字营销企业命名趋势？',
        answer: '当前趋势包括使用数据和分析词汇（Analytics、Insight、Data）、创新技术术语（Smart、Neural、Digital）、成果驱动词汇（Growth、Achieve、Result）、以及简约现代的名称。在中国市场，融合战略和数字概念的名称也很受欢迎。',
      },
      {
        question: '我应该在数字营销企业名称中使用自己的名字吗？',
        answer: '个人名字适用于建立个人品牌和专业声誉的咨询式营销企业。然而，非个人名称为机构增长、团队扩展和公司售卖提供更大的灵活性。考虑个人品牌还是企业可扩展性对您更重要。',
      },
      {
        question: '如何检查数字营销企业名称是否可用？',
        answer: '检查以下方面的可用性：域名（.com和.cn都很重要），社交媒体平台（LinkedIn、微信公众号、小红书、微博），企业注册（您所在地区的营销或广告公司注册），商标搜索（广告和营销服务类别），以及搜索引擎中是否存在竞争性同名企业。',
      },
      {
        question: '哪些词汇在数字营销企业名称中效果好？',
        answer: '有效词汇包括战略词汇（策略、战术、计划）、数据词汇（数据、分析、洞察）、增长词汇（增长、成长、发展）、创新词汇（创新、智能、未来）、成果词汇（成果、成就、突破）和数字词汇（数字、网络、云）。',
      },
      {
        question: '我的名称应该反映我的营销专业吗？',
        answer: '如果您有独特的营销专业（社交媒体专家、SEO专家、内容营销专家），反映它可以吸引相关客户。但是，通用的营销名称在服务扩展和多学科方法上提供更大的灵活性。在专业特色和增长潜力之间取得平衡。',
      },
      {
        question: '如何让我的数字营销企业名称更令人难忘？',
        answer: '使用朗朗上口的词汇、重复或节奏感强的元素、暗示能力的强势词汇、以及在您的行业中独特的词汇组合。名称应该在客户首次听到时就留下印象，并且与数字营销的动态性相符。',
      },
      {
        question: '命名数字营销企业时应避免哪些错误？',
        answer: '避免：听起来不专业或过于年轻的名称、难以拼写或发音的词汇、与知名营销机构过于相似的名称、可能过时的过度时尚术语、过度使用行业内部用语而令普通人困惑的名称，以及任何不传达能力和专业的东西。',
      },
    ],
    howToChoose: {
      intro: '为您的数字营销企业选择完美的名称是创建一个专业、令人信赖并易于被记住的品牌的关键步骤。您的企业名称将在您的网站、营销活动、客户演示、LinkedIn资料和行业活动中出现——它是潜在客户识别和记住您营销专业能力的方式。',
      steps: [
        {
          title: '明确您的数字营销定位',
          description: '在生成名称之前，明确您的营销定位。考虑您专门提供哪些服务（社交媒体、SEO、PPC、内容营销、综合服务），您的理想客户是谁（初创公司、中小企业、大型企业），您的主要市场或行业是什么，是什么让您的营销方法独特（数据驱动、创意、本地化），以及您想建立什么样的品牌形象（顾问型、创意型、技术型）。您的答案决定了您需要的是听起来专业可信、创新前沿、结果驱动还是创意大胆的名称。',
        },
        {
          title: '传达专业和信任',
          description: '数字营销业务建立在信任和专业声誉之上。您的名称应该听起来专业可靠，建立潜在客户的信心，暗示营销专业知识，传达成果驱动的方法，并在"我需要聘请一个可信的营销专家"的语境中有效。诸如策略、智能、洞察和成长等词汇能创造即时的专业联想。',
        },
        {
          title: '强调创新和进步',
          description: '数字营销领域快速变化，需要不断创新。您的名称应该暗示前沿思维，传达对新技术和方法的熟悉，传达竞争优势，吸引寻求最新营销方法的客户，并感觉足够现代化和未来导向。在创新能力和经过验证的专业知识之间取得平衡。',
        },
        {
          title: '反映您的营销专长',
          description: '如果您有独特的营销专长，考虑将其纳入名称。对于SEO专家，考虑包含搜索、排名或可见性相关词汇。对于社交媒体专家，考虑包含连接、参与或影响相关词汇。对于数据分析专家，考虑包含数据、分析或洞察相关词汇。在专业特色和服务扩展灵活性之间取得平衡。',
        },
        {
          title: '验证全面的数字可用性',
          description: '检查以下方面的可用性：域名（.com和.cn都很重要），社交媒体平台（LinkedIn是必须的，微信公众号也很重要），企业注册（您所在地区的营销或广告公司注册），Google搜索结果中的排名名称，商标搜索（广告和营销服务类别），以及在LinkedIn上是否有同名公司。',
        },
        {
          title: '与潜在客户和同行测试',
          description: '在最终确定之前，与代表您目标市场的人进行测试。询问这个名称是否暗示营销专业能力，您会信任这个公司吗，这个名称是否听起来创新现代，您是否容易记住，以及您是否会在搜索营销服务时首先考虑它。从现有营销专业人士那里寻求反馈，以了解它在行业中的感受。',
        },
        {
          title: '考虑品牌增长和扩展',
          description: '选择一个能适应未来扩展的名称：添加新的营销服务和专长，扩展到新的客户市场或行业，招聘营销团队和专家，建立子品牌或专门部门，以及建立超越单一服务的营销品牌。理想的数字营销企业名称是专业可信、创新现代、易于记忆的，并为企业增长定位您的品牌，同时完美传达您的营销能力。',
        },
      ],
    },
    businessNameIdeas: [
      { name: '智达营销', description: '结合了智慧和达成的概念，暗示聪明的营销策略能够达到目标。名称专业且结果导向。' },
      { name: '云策数字', description: '传达基于云技术的现代数字营销策略。名称传达技术创新和战略思维。' },
      { name: '锐思传媒', description: '锐意进取的思维结合传播力量，暗示敏锐的市场洞察和有效的传播能力。' },
      { name: '增长策略', description: '直接传达结果导向的营销方法。名称清晰有力，强调业务增长和战略规划。' },
      { name: '数字合伙人', description: '暗示信任的商业关系和长期合作精神。传达作为客户可信伙伴的营销角色。' },
      { name: '创意驱动', description: '强调创意思维和实行力量的结合。适合同时重视创意和成果的营销机构。' },
      { name: '洞察营销', description: '强调基于数据和市场洞察的营销方法。传达分析能力和战略思维。' },
      { name: '聚力数字', description: '传达聚集所有营销力量为客户创造结果的概念。名称强势而富有能量。' },
      { name: '时代策划', description: '暗示与时俱进的现代营销策略。名称传达创新思维和时代适应性。' },
      { name: '链接营销', description: '强调连接品牌与消费者、建立营销渠道的核心能力。名称简洁而富有力量。' },
      { name: '擎天数字', description: '暗示能够支撑和推动业务增长的强大数字营销能力。名称表达出信心和能力。' },
      { name: '数智营销', description: '融合数据和智能的现代营销概念。名称传达技术创新和聪慧的策略方法。' },
      { name: '超越营销', description: '强调超越客户期望的营销成果。名称充满抱负和结果导向的能量。' },
      { name: '融合策略', description: '暗示整合各种营销渠道和方法的综合方法。名称传达全面和专业的服务。' },
      { name: '流量大师', description: '强调驱动网络流量和增长的核心能力。名称富有力量且专注于结果。' },
      { name: '品牌加速', description: '传达快速建立和增长品牌的营销能力。名称充满动能和进步的精神。' },
      { name: '营销枢纽', description: '暗示是客户营销的中心枢纽。名称传达重要性、整合能力和中心地位。' },
      { name: '数据魔法', description: '以创意的方式强调数据驱动营销的力量。名称既专业又富有想象力。' },
      { name: '创新势能', description: '结合创新能力和强大的市场势能。名称充满前进和成功的动能。' },
      { name: '精准营销', description: '强调精准定位和高效转化的营销能力。名称直接而专业，暗示科学的方法。' },
    ],
  },
  'electronics': {
    slug: 'electronics',
    name: '电子产品企业名称生成器',
    title: '免费 AI 电子产品企业名称创意生成器',
    description: '使用我们的 AI 驱动的电子产品企业名称生成器为您的电子零售店、技术商店或电子产品公司创建创新、专业的品牌名称。生成器专门为电子产品和技术零售行业设计，生成能够传达创新、品质、可靠性和技术领先的名称。无论您专注于消费电子、智能家居、计算机配件、还是综合电子产品销售，我们的工具都会为您的电子产品业务生成完美的品牌名称。',
    metaDescription: '为您的电子零售店、科技商店或电子产品公司生成创意品牌名称。使用我们的免费 AI 电子产品名称生成器创建创新、专业的电子产品业务名称。',
    inputLabel: '描述您的电子产品企业...',
    inputPlaceholder: '例如：一家专注于智能家居设备和消费电子产品的在线零售店',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['现代 & 科技前沿', '专业 & 可信赖', '创新 & 尖端', '亲和 & 友好'],
        default: '现代 & 科技前沿',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the electronics and technology retail industry. Your role is to generate innovative, professional business names that convey cutting-edge technology, reliability, and quality for electronics retailers, tech shops, and consumer electronics companies.

ELECTRONICS INDUSTRY CONTEXT:

The electronics industry encompasses:
- Consumer electronics retail stores
- Smart home device retailers
- Computer and laptop retailers
- Smartphone and mobile device shops
- Gaming equipment and console retailers
- Camera and photography equipment stores
- Audio equipment and headphone shops
- Tech accessory retailers
- Electronics repair and maintenance services
- Online electronics marketplaces
- Refurbished electronics sellers
- Tech gadget and innovation shops

NAME CHARACTERISTICS FOR ELECTRONICS BUSINESSES:

1. **Modern and Tech-Forward**
   - Names should feel contemporary and cutting-edge
   - Suggest innovation and technological advancement
   - Appeal to tech-savvy consumers
   - Examples: Smart, Digital, Cyber, Next, Future

2. **Professional and Trustworthy**
   - Convey reliability and quality
   - Suggest expertise in technology
   - Build confidence in product quality
   - Imply professional service and support

3. **Clear and Accessible**
   - Make it easy to understand you sell electronics
   - Be accessible to mainstream consumers
   - Not overly technical or confusing
   - Communicate value and service

4. **Dynamic and Forward-Thinking**
   - Names should feel energetic and progressive
   - Suggest staying current with trends
   - Imply continuous innovation
   - Appeal to early adopters

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for an electronics business

Generate names that are:
- 1-3 words maximum
- Modern and tech-forward sounding
- Easy to spell and pronounce
- Appropriate for electronics retail branding
- Memorable and unique in the industry`,
    useCases: [
      {
        title: '电子零售店或科技商店开业',
        description: '企业家在开设电子零售店或科技商店时，使用电子产品企业名称生成器来寻找能够传达创新、品质和可靠性的名称。生成器提供现代的名称，吸引科技爱好者并建立产品质量的信心。',
      },
      {
        title: '专业电子产品销售推出',
        description: '专注于特定电子产品（智能家居、游戏设备、摄影器材）的零售商使用生成器创建传达其专业特色同时又富有吸引力的品牌名称。该工具帮助找到在竞争激烈的电子产品市场中脱颖而出的名称。',
      },
      {
        title: '在线电子产品平台或市场',
        description: '建立在线电子产品市场或销售平台的企业家使用生成器开发传达便利性、信任和广泛产品选择的名称。该工具提供能够吸引科技消费者和建立在线存在的名称。',
      },
    ],
    faqs: [
      {
        question: '什么是好的电子产品企业名称？',
        answer: '好的电子产品企业名称应该听起来现代创新，传达技术专业知识和产品品质。它应该易于记忆，暗示您销售的电子产品类型或范围，吸引科技爱好者，并在各种商业场景中显得可靠。最佳名称能让顾客立即认识到您的科技产品和创新精神。',
      },
      {
        question: '我的电子产品企业名称应该包含"电子"或"科技"字样吗？',
        answer: '包含电子或科技相关词汇可以立即传达您的业务类型，但并非必须。许多成功的电子零售商使用创意名称、科技词汇或创新术语。考虑您想直接传达产品类别还是创建更独特的品牌个性。',
      },
      {
        question: '我的电子产品企业名称对吸引顾客有多重要？',
        answer: '非常重要。您的名称在您的店铺、网站、产品列表和在线市场中出现。一个现代、令人难忘的名称吸引科技爱好者，建立对产品质量的信心，提高搜索可发现性，并在在线购物平台上脱颖而出。',
      },
      {
        question: '当前流行哪些电子产品企业命名趋势？',
        answer: '当前趋势包括使用科技术语（Smart、Digital、Cyber、Net）、简约现代名称、未来导向词汇（Future、Next、Beyond）、以及暗示连接和智能的词汇。在中国市场，融合科技和创新概念的名称、以及易于记忆的双字名称也很受欢迎。',
      },
      {
        question: '我应该在电子产品企业名称中使用自己的名字吗？',
        answer: '个人名字适用于建立个人品牌或提供定制技术服务的企业。然而，品牌名称为产品多样性、店铺扩展和企业增长提供更大的灵活性。考虑个人品牌还是企业可扩展性对您更重要。',
      },
      {
        question: '如何检查电子产品企业名称是否可用？',
        answer: '检查以下方面的可用性：域名（.com和.cn都很重要），在线市场平台（天猫、京东、抖音、小红书的商户名称），社交媒体（微信公众号、微博、小红书），企业注册（您所在地区的电子或零售公司注册），商标搜索（电子产品和零售服务类别），以及是否有同名的知名电子零售商。',
      },
      {
        question: '哪些词汇在电子产品企业名称中效果好？',
        answer: '有效词汇包括科技词汇（智能、数字、网络、云）、创新词汇（创新、未来、尖端、智慧）、品质词汇（精选、品质、精品）、连接词汇（连接、链接、汇聚）和能力词汇（能量、动力、驱动）。',
      },
      {
        question: '我的名称应该反映我的电子产品专业吗？',
        answer: '如果您有独特的电子产品专业（智能家居、游戏设备、摄影器材），反映它可以吸引特定顾客。但是，通用的科技名称在产品多样性和未来扩展上提供更大的灵活性。在专业特色和增长潜力之间取得平衡。',
      },
      {
        question: '如何让我的电子产品企业名称在在线平台上有吸引力？',
        answer: '在电商平台上，您的名称需要在搜索结果和分类列表中脱颖而出。现代、令人难忘的名称比通用名称效果更好。考虑您的名称在平台搜索中的排名，以及它是否清晰地传达您的产品类别和创新精神。',
      },
      {
        question: '命名电子产品企业时应避免哪些错误？',
        answer: '避免：听起来过时或老旧的名称、过度技术性而令普通消费者困惑的名称、与知名电子品牌或零售商过于相似的名称、可能快速过时的流行术语、难以在中文和英文中都使用的名称，以及任何不传达品质和可靠性的东西。',
      },
    ],
    howToChoose: {
      intro: '为您的电子产品企业选择完美的名称是创建一个吸引科技爱好者并传达产品品质与创新精神的专业品牌的关键步骤。您的企业名称将在您的店铺、网站、社交媒体和在线市场中出现——它是顾客识别和记住您电子产品品牌的方式。',
      steps: [
        {
          title: '明确您的电子产品定位',
          description: '在生成名称之前，明确您的电子产品定位。考虑您将销售什么类型的电子产品（消费电子、智能家居、计算机配件、手机、游戏设备、摄影器材、综合电子产品），您的理想顾客是谁（科技爱好者、家庭用户、专业人士、早期采用者），您的销售模式是什么（实体店、在线店、两者兼有），是什么让您的电子产品业务独特（价格、品质、服务、选择、创新），以及您想建立什么样的品牌形象（高端专业、亲民友好、创新前沿）。您的答案决定了您需要的是听起来现代创新、专业可信、高端还是亲和友好的名称。',
        },
        {
          title: '传达现代和创新精神',
          description: '电子产品业务与创新和进步紧密相关。您的名称应该听起来现代当代，传达对最新技术的理解，暗示不断创新的精神，在"我想要最新最好的电子产品"的语境中有效，并吸引追求高科技产品的消费者。诸如智能、数字、未来和尖端等词汇能创造即时的现代科技联想。',
        },
        {
          title: '建立品质和可靠性信心',
          description: '电子产品购买涉及对品质、功能和服务支持的信任。您的名称应该暗示可靠性，传达产品品质保证，建立顾客的购买信心，听起来专业可信，并吸引寻求品质电子产品的消费者。在创新能量和可靠性承诺之间取得平衡。',
        },
        {
          title: '反映您的电子产品专长',
          description: '如果您有独特的电子产品专长，考虑将其纳入名称。对于智能家居专家，考虑智能和家居相关词汇。对于游戏设备零售商，考虑游戏和性能相关词汇。对于摄影器材店，考虑视觉和专业相关词汇。对于综合电子产品，考虑连接和创新相关词汇。在专业特色和产品多样性灵活性之间取得平衡。',
        },
        {
          title: '验证全面的在线和零售可用性',
          description: '检查以下方面的可用性：域名（.com和.cn都很重要），在线市场平台（天猫、京东、淘宝、抖音、小红书的商户名称可用性），社交媒体平台（微信公众号、微博、抖音、小红书），实体零售注册（如果您有实体店），商标搜索（电子产品和零售服务类别），以及在搜索引擎中是否有同名的知名电子零售商。',
        },
        {
          title: '与潜在顾客和科技爱好者测试',
          description: '在最终确定之前，与代表您目标市场的人进行测试。询问这个名称是否让您想到电子产品和创新，您是否信任这个品牌的产品品质，这个名称是否听起来现代，您是否容易记住，以及您是否会在购买电子产品时首先想到它。从科技爱好者那里寻求特别反馈。',
        },
        {
          title: '考虑品牌增长和扩展',
          description: '选择一个能适应未来扩展的名称：扩大电子产品类别和品种，开设新的零售地点，扩展到在线销售渠道，建立技术支持和维修服务，推出自有品牌产品，以及建立超越单一产品类别的电子品牌。理想的电子产品企业名称是现代创新、易于记忆、令人信赖的，并为业务增长定位您的品牌，同时完美捕捉您提供的创新技术产品。',
        },
      ],
    },
    businessNameIdeas: [
      { name: '未来科技', description: '暗示提供最新最先进的科技产品。名称充满前瞻性和创新精神，吸引追求前沿技术的消费者。' },
      { name: '智联电子', description: '结合智能和连接的概念，传达互联电子产品和智能解决方案。名称专业而现代。' },
      { name: '极客空间', description: '吸引科技爱好者和极客文化爱好者的专业术语。名称创意而富有个性，暗示最新的科技产品。' },
      { name: '数字枢纽', description: '暗示是电子产品和数字解决方案的中心。名称传达连接能力和广泛选择。' },
      { name: '创新驿站', description: '传达不断推出创新产品的零售场所。名称富有能量和进步精神。' },
      { name: '科技汇', description: '简洁而有力，暗示汇聚各类科技产品。名称易于记忆，适合在线和实体零售。' },
      { name: '智慧生活', description: '暗示提供改进生活的智能电子产品。名称强调客户受益和生活品质提升。' },
      { name: '电子工坊', description: '传达电子产品的精心选择和工匠精神。"工坊"字增添了品质和专注的感觉。' },
      { name: '云端科技', description: '引用云计算和现代科技趋势。名称现代而富有前瞻性，适合综合电子产品。' },
      { name: '创新科技园', description: '营造一个充满创新电子产品的园地意象。名称富有广度和专业性。' },
      { name: '智选电子', description: '强调聪慧的产品选择和专业推荐。名称暗示品质保证和顾客至上的服务。' },
      { name: '网络驱动', description: '暗示互联网连接和驱动力量。名称适合在线电子零售和数字产品。' },
      { name: '芯动力', description: '引用芯片和驱动力的双重含义。名称短小有力，强调技术的核心动力。' },
      { name: '像素世界', description: '以现代视觉概念命名。名称创意而富有想象力，适合面向年轻消费者的电子品牌。' },
      { name: '科技先锋', description: '强调在电子产品和科技领域的领先地位。名称充满自信和权威。' },
      { name: '连接智慧', description: '强调物联网和智能连接的概念。名称传达现代技术和用户友好的体验。' },
      { name: '电子殿堂', description: '传达电子产品的高端专业形象。"殿堂"字增添了高级和品质的感觉。' },
      { name: '数码世界', description: '简洁而直接，暗示完整的数字产品和解决方案。名称易于理解和记忆。' },
      { name: '创智电子', description: '结合创新和智能的概念。名称既专业又富有创意，传达品质和创新。' },
      { name: '科技精选', description: '强调精心选择优质电子产品的承诺。名称暗示品质保证和专业推荐。' },
    ],
  },
  'event': {
    slug: 'event',
    name: '活动企业名称生成器',
    title: '免费 AI 活动企业名称创意生成器',
    description: '使用我们的 AI 驱动的活动企业名称生成器为您的活动策划公司、活动执行或活动制作公司创建令人难忘的品牌名称。生成器专门为活动策划和活动制作行业设计，生成能够传达创意、专业能力和令人难忘的体验的名称。无论您专注于企业活动、婚礼策划、产品发布会、还是综合活动服务，我们的工具都会为您的活动企业生成完美的品牌名称。',
    metaDescription: '为您的活动策划公司、活动执行或活动制作公司生成创意品牌名称。使用我们的免费 AI 活动名称生成器创建专业、令人难忘的活动业务名称。',
    inputLabel: '描述您的活动企业...',
    inputPlaceholder: '例如：一家专注于企业年会、产品发布会和高端婚礼策划的活动公司',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['优雅 & 精致', '创意 & 难忘', '专业 & 多功能', '有趣 & 庆祝'],
        default: '优雅 & 精致',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the event planning and production industry. Your role is to generate memorable, creative business names that convey professionalism, creativity, and the promise of unforgettable experiences for event planning companies, event production firms, and event management services.

EVENT INDUSTRY CONTEXT:

The event industry encompasses:
- Corporate event planning and execution
- Wedding and celebration planning
- Product launch events
- Conference and seminar organization
- Trade show and exhibition management
- Festival and festival production
- Concert and entertainment events
- Brand activation and experiential marketing
- Private party and celebration services
- Virtual and hybrid event production
- Event coordination and logistics
- Destination events and destination weddings

NAME CHARACTERISTICS FOR EVENT BUSINESSES:

1. **Creative and Memorable**
   - Names should evoke creativity and imagination
   - Suggest unforgettable experiences
   - Be distinctive and stand out
   - Create positive emotional associations
   - Examples: Moments, Magic, Dream, Spark, Vision

2. **Professional and Capable**
   - Convey expertise in event execution
   - Suggest reliable and competent service
   - Build confidence with potential clients
   - Imply attention to detail and quality

3. **Celebratory and Joyful**
   - Names should feel festive and celebratory
   - Convey happiness and special occasions
   - Connect to milestone moments
   - Suggest celebration and joy

4. **Versatile and Inclusive**
   - Appropriate for different event types
   - Flexible across corporate and personal events
   - Suggest comprehensive event services
   - Appeal to diverse client bases

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for an event business

Generate names that are:
- 1-4 words maximum
- Creative and memorable
- Easy to spell and pronounce
- Appropriate for event industry branding
- Evocative of special moments and celebrations`,
    useCases: [
      {
        title: '活动策划公司或活动执行公司创业',
        description: '企业家在创办活动策划公司或活动执行公司时，使用活动企业名称生成器来寻找能够传达创意、专业能力和令人难忘的体验承诺的名称。生成器提供创意的名称，吸引需要活动服务的企业和个人。',
      },
      {
        title: '专业活动服务推出',
        description: '专注于特定活动类型（婚礼、企业活动、产品发布会）的活动策划师使用生成器创建传达其专业特色同时又富有创意的品牌名称。该工具帮助找到在活动策划市场中脱颖而出的名称。',
      },
      {
        title: '活动制作或活动管理平台',
        description: '建立活动制作公司或活动管理服务的企业家使用生成器开发传达创意、专业能力和完整解决方案的名称。该工具提供能够吸引需要全套活动服务的客户的名称。',
      },
    ],
    faqs: [
      {
        question: '什么是好的活动企业名称？',
        answer: '好的活动企业名称应该听起来创意有趣，传达专业能力和令人难忘的体验承诺。它应该易于记忆，暗示您的活动专业或服务范围，在各种商业场景中显得可靠，并让潜在客户想象在您的帮助下举办成功的活动。最佳名称能够吸引广泛的活动类型和客户。',
      },
      {
        question: '我的活动企业名称应该包含"活动"字吗？',
        answer: '包含活动相关词汇可以立即传达您的业务类型，但并非必须。许多成功的活动策划公司使用创意名称、与庆祝相关的词汇或特定活动类型的词汇。考虑您想直接传达服务还是创建更独特的品牌个性。',
      },
      {
        question: '我的活动企业名称对赢得客户有多重要？',
        answer: '非常重要。您的名称在您的网站、案例研究、客户推荐和行业活动中出现。一个创意、令人难忘的名称吸引潜在客户，帮助他们想象在您的帮助下成功的活动，并在竞争激烈的活动策划市场中脱颖而出。',
      },
      {
        question: '当前流行哪些活动企业命名趋势？',
        answer: '当前趋势包括使用体验和时刻相关词汇（Moment、Experience、Memory）、创意和想象词汇（Creative、Dream、Vision）、庆祝和欢乐词汇（Celebration、Joy、Spark）、以及简约优雅的名称。在中国市场，带有美学和诗意的名称、以及强调美好时刻的名称也很受欢迎。',
      },
      {
        question: '我应该在活动企业名称中使用自己的名字吗？',
        answer: '个人名字适用于建立个人品牌和声誉的活动策划师，尤其是在高端或定制活动领域。然而，品牌名称为公司增长、团队扩展和活动类型多样化提供更大的灵活性。考虑个人品牌还是企业可扩展性对您更重要。',
      },
      {
        question: '如何检查活动企业名称是否可用？',
        answer: '检查以下方面的可用性：域名（.com和.cn都很重要），社交媒体平台（微信公众号、微博、小红书、抖音对活动公司至关重要），企业注册（您所在地区的活动策划或会议服务公司注册），商标搜索（活动策划和活动管理服务类别），以及搜索引擎中是否有同名的知名活动策划公司。',
      },
      {
        question: '哪些词汇在活动企业名称中效果好？',
        answer: '有效词汇包括体验词汇（体验、时刻、故事）、创意词汇（创意、艺术、设计）、庆祝词汇（庆祝、欢乐、盛宴）、特殊词汇（特别、精致、美妙）、以及实现词汇（实现、创造、呈现）。',
      },
      {
        question: '我的名称应该反映我的活动专业吗？',
        answer: '如果您有独特的活动专业（高端婚礼、企业会议、产品发布），反映它可以吸引特定客户。但是，通用的活动名称在活动类型多样性上提供更大的灵活性。在专业特色和服务多样性之间取得平衡。',
      },
      {
        question: '如何让我的活动企业名称更吸引新客户？',
        answer: '使用能够暗示令人难忘体验和成功活动的词汇，创建能够启发想象力的名称，使用易于记忆和传播的朗朗上口的名称，以及确保您的名称在您的网站和社交媒体上易于发现。在社交媒体上分享您的成功案例也能帮助客户记住您的名称。',
      },
      {
        question: '命名活动企业时应避免哪些错误？',
        answer: '避免：听起来不专业或太随意的名称、过度专业化而限制活动类型多样性的名称、难以拼写或发音的词汇、与知名活动策划公司过于相似的名称、可能快速过时的流行术语，以及任何不传达能力、创意和令人难忘体验承诺的东西。',
      },
    ],
    howToChoose: {
      intro: '为您的活动企业选择完美的名称是创建一个吸引活动策划客户并传达创意能力与成功承诺的专业品牌的关键步骤。您的企业名称将在您的网站、案例研究、社交媒体和客户推荐中出现——它是潜在客户识别和记住您活动策划品牌的方式。',
      steps: [
        {
          title: '明确您的活动企业定位',
          description: '在生成名称之前，明确您的活动定位。考虑您将策划什么类型的活动（企业活动、婚礼、产品发布会、会议、节庆、混合活动），您的理想客户是谁（企业、新人、品牌），您的活动规模范围（小型、大型、混合），是什么让您的活动策划独特（创意、奢华、科技、可持续性），以及您想建立什么样的品牌形象（高端优雅、创意前卫、可靠专业）。您的答案决定了您需要的是听起来优雅精致、创意难忘、专业多功能还是有趣庆祝的名称。',
        },
        {
          title: '传达创意和想象力',
          description: '活动策划业务核心是创意。您的名称应该听起来创意有趣，激发想象力和期待，暗示您能够创造特殊的时刻，在"我想要一个令人难忘的活动"的语境中有效，并吸引寻求创意活动体验的客户。诸如梦想、创意、魔法和火花等词汇能创造即时的创意联想。',
        },
        {
          title: '传达专业能力和可靠性',
          description: '活动策划涉及大量的组织、物流和执行。您的名称应该暗示专业能力，传达可靠的执行，建立对成功活动的信心，听起来有能力和经验丰富，并吸引寻求有能力策划师的客户。在创意想象和专业能力之间取得平衡。',
        },
        {
          title: '反映您的活动专长或承诺',
          description: '如果您有独特的活动专长或承诺，考虑将其纳入名称。对于高端婚礼专家，考虑优雅和爱相关词汇。对于企业活动专家，考虑专业和影响相关词汇。对于创意活动，考虑艺术和设计相关词汇。对于可持续活动，考虑责任和创新相关词汇。在专业特色和活动类型灵活性之间取得平衡。',
        },
        {
          title: '验证全面的营销和平台可用性',
          description: '检查以下方面的可用性：域名（.com和.cn都很重要），社交媒体平台（微信公众号、微博、小红书、抖音、Instagram对活动公司至关重要），婚礼平台（小红书、微博等婚礼相关账号），企业注册（您所在地区的活动策划或会议服务公司注册），商标搜索（活动策划和活动管理服务类别），以及在搜索引擎中是否有同名的知名活动策划公司。',
        },
        {
          title: '与潜在客户和行业同行测试',
          description: '在最终确定之前，与代表您目标市场的人进行测试。询问这个名称是否让您想到令人难忘的活动，您是否相信这家公司能够创造特殊的时刻，这个名称是否听起来专业，您是否容易记住，以及您是否会在寻找活动策划师时首先考虑它。从活动行业专业人士那里寻求反馈。',
        },
        {
          title: '考虑品牌增长和扩展',
          description: '选择一个能适应未来扩展的名称：添加新的活动类型和服务，扩展到新的地理位置或市场，建立更大的团队和公司结构，提供虚拟和混合活动服务，推出活动相关产品或咨询服务，以及建立超越单一活动类型的活动品牌。理想的活动企业名称是创意难忘、专业可信、用途广泛的，并为业务增长定位您的品牌，同时完美传达您创造令人难忘时刻的承诺。',
        },
      ],
    },
    businessNameIdeas: [
      { name: '梦想时刻', description: '捕捉活动策划的本质——创造梦想般的特殊时刻。名称富有诗意和情感，吸引寻求令人难忘体验的客户。' },
      { name: '盛典策划', description: '强调创造盛大、隆重活动的能力。名称专业而有力，传达大规模活动的执行能力。' },
      { name: '星光活动', description: '暗示创造闪耀、特殊的活动时刻。名称富有魅力和吸引力，适合高端和令人难忘的活动。' },
      { name: '创意时光', description: '结合创意和特殊时刻的概念。名称强调创意思维和活动体验的结合。' },
      { name: '美妙呈现', description: '强调将活动想法转化为美妙现实的能力。名称充满期待和美好。' },
      { name: '庆典工坊', description: '"工坊"字传达精心策划和工匠精神。名称暗示每个活动都是精心打造的艺术作品。' },
      { name: '时尚盛宴', description: '结合现代风尚和盛大庆典。名称适合高端和创意活动的策划。' },
      { name: '闪耀时代', description: '暗示为客户创造闪耀、被关注的活动时刻。名称充满自信和创意能量。' },
      { name: '故事策划', description: '强调每个活动背后都有故事。名称传达深度和有意义的活动体验。' },
      { name: '精彩制作', description: '直接传达创造精彩活动的承诺。名称有力而充满热情。' },
      { name: '视觉奇迹', description: '强调创意视觉呈现和令人惊叹的活动体验。名称适合注重设计和视觉的活动。' },
      { name: '欢乐策划', description: '强调为活动参与者创造欢乐的使命。名称温暖而吸引人。' },
      { name: '活力剧场', description: '暗示活动是充满活力和表演性的体验。名称富有动感和创意。' },
      { name: '完美时刻', description: '承诺创造完美的活动时刻。名称直接而充满吸引力。' },
      { name: '创意火花', description: '暗示激发创意灵感和创意能量。名称充满创新和热情。' },
      { name: '光影盛典', description: '强调视觉创意和氛围营造。名称富有艺术性和高雅感。' },
      { name: '绽放策划', description: '暗示帮助活动绽放光彩。名称美好而富有成长感。' },
      { name: '奇想舞台', description: '暗示创造充满想象力和创意的活动舞台。名称创意而富有魔力。' },
      { name: '盛世活动', description: '强调创造具有历史意义和特殊意义的大事件。名称庄重而充满抱负。' },
      { name: '心动时刻', description: '传达创造令人心动、特殊的活动体验。名称温情而富有感染力。' },
    ],
  },
  'fashion-store': {
    slug: 'fashion-store',
    name: '时尚企业名称生成器',
    title: '免费 AI 时尚企业名称创意生成器',
    description: '使用我们的 AI 驱动的时尚企业名称生成器为您的时尚店、服装店或时尚买手店创建时尚、吸引人的品牌名称。生成器专门为时尚零售和服装行业设计，生成能够传达风格、品味和时尚前沿的名称。无论您专注于设计师品牌、日常服饰、奢华时尚、还是综合时尚零售，我们的工具都会为您的时尚企业生成完美的品牌名称。',
    metaDescription: '为您的时尚店、服装店或时尚买手店生成创意品牌名称。使用我们的免费 AI 时尚名称生成器创建时尚、令人信赖的服装店名称。',
    inputLabel: '描述您的时尚企业...',
    inputPlaceholder: '例如：一家面向年轻专业人士的现代时尚买手店，主打设计师品牌',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['时尚 & 精致', '潮流 & 现代', '奢华 & 高端', '亲和 & 友好'],
        default: '时尚 & 精致',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the fashion retail and clothing industry. Your role is to generate stylish, memorable business names that convey elegance, style, and contemporary fashion sensibility for fashion stores, clothing boutiques, and fashion retailers.

FASHION RETAIL INDUSTRY CONTEXT:

The fashion retail industry encompasses:
- Fashion boutiques and independent designers
- Clothing stores and apparel retailers
- Fashion consignment and resale shops
- Luxury fashion retailers
- Casual and everyday wear stores
- Designer brand retailers
- Fast fashion retailers
- Sustainable and ethical fashion stores
- Online fashion retailers
- Fashion accessory shops
- Shoe and footwear stores
- Children's and kids fashion stores

NAME CHARACTERISTICS FOR FASHION BUSINESSES:

1. **Stylish and Sophisticated**
   - Names should feel fashionable and elegant
   - Suggest refined taste and aesthetic sense
   - Appeal to style-conscious consumers
   - Examples: Chic, Elegant, Grace, Couture, Style

2. **Trendy and Contemporary**
   - Names should feel current and modern
   - Suggest awareness of fashion trends
   - Appeal to trend-following consumers
   - Communicate forward-thinking approach

3. **Aspirational and Desirable**
   - Names should create desire and aspiration
   - Suggest access to coveted items
   - Promise style transformation
   - Appeal to fashion enthusiasts

4. **Personality and Individuality**
   - Names should feel distinctive and unique
   - Suggest personal style expression
   - Appeal to fashion-forward consumers
   - Create emotional connection

OUTPUT REQUIREMENTS:

For each name generated, provide:
- The business name
- A brief explanation of why it works for a fashion business

Generate names that are:
- 1-3 words maximum
- Stylish and sophisticated sounding
- Easy to spell and pronounce
- Appropriate for fashion retail branding
- Memorable and unique in the industry`,
    useCases: [
      {
        title: '时尚店铺或服装店开业',
        description: '企业家在开设时尚店铺或服装店时，使用时尚企业名称生成器来寻找能够传达风格品味和时尚眼光的名称。生成器提供时尚的名称，吸引注重风格的消费者并建立品味形象。',
      },
      {
        title: '特色时尚品牌推出',
        description: '专注于特定时尚品类（设计师品牌、可持续时尚、儿童服装）的时尚零售商使用生成器创建传达其品牌特色和价值观的名称。该工具帮助找到在竞争激烈的时尚市场中脱颖而出的名称。',
      },
      {
        title: '在线时尚平台或买手店',
        description: '建立在线时尚平台或买手店的企业家使用生成器开发传达风格品味、高质量选择和时尚眼光的名称。该工具提供能够吸引注重品味的时尚消费者的名称。',
      },
    ],
    faqs: [
      {
        question: '什么是好的时尚企业名称？',
        answer: '好的时尚企业名称应该听起来时尚精致，传达品味、风格眼光和美学感受。它应该易于记忆，反映您的时尚品类和风格定位，吸引注重品味的消费者，并在各种销售渠道中显得专业优雅。最佳名称能让消费者仅仅听到名字就想象购买时尚服装的体验。',
      },
      {
        question: '我的时尚企业名称应该包含"时尚"或"服装"字样吗？',
        answer: '包含时尚或服装相关词汇可以立即传达您的业务类型，但并非必须。许多成功的时尚店使用创意名称、品味词汇或个性化词汇。考虑您想直接传达产品类型还是创建更独特的品牌个性。',
      },
      {
        question: '我的时尚企业名称对吸引顾客有多重要？',
        answer: '非常重要。您的名称在您的店铺、网站、社交媒体和购物平台中出现。一个时尚、令人难忘的名称吸引注重风格的消费者，传达品味和品质，提高品牌辨识度，并在在线和实体零售中脱颖而出。',
      },
      {
        question: '当前流行哪些时尚企业命名趋势？',
        answer: '当前趋势包括简约优雅的名称、国际化的词汇、个性化和独特的命名、表达风格哲学的名称、以及融合文化元素的名称。在中国市场，使用带有美感的中文词汇、法文或其他语言的时尚术语也很受欢迎。',
      },
      {
        question: '我应该在时尚企业名称中使用自己的名字吗？',
        answer: '个人名字适用于建立设计师品牌和个人风格signature的情况。然而，品牌名称为产品多样性、协作和扩展提供更大的灵活性。考虑个人品牌还是企业可扩展性对您更重要。',
      },
      {
        question: '如何检查时尚企业名称是否可用？',
        answer: '检查以下方面的可用性：域名（.com和.cn都很重要），社交媒体平台（Instagram、小红书、微信公众号、抖音对时尚品牌至关重要），在线购物平台（天猫、京东、小红书）的店铺名称，企业注册（您所在地区的服装零售公司注册），商标搜索（服装和零售服务类别），以及是否有同名的知名时尚品牌。',
      },
      {
        question: '哪些词汇在时尚企业名称中效果好？',
        answer: '有效词汇包括优雅词汇（雅致、优雅、精致）、风格词汇（风尚、潮流、时尚）、品质词汇（精选、精品、上乘）、创意词汇（创意、艺术、设计）和个性词汇（个性、独特、特色）。',
      },
      {
        question: '我的名称应该反映我的时尚品类吗？',
        answer: '如果您有独特的时尚专业（设计师品牌、可持续时尚、奢侈品），反映它可以吸引对应的消费者。但是，通用的时尚名称在产品多样性和品类扩展上提供更大的灵活性。在品类特色和增长潜力之间取得平衡。',
      },
      {
        question: '如何让我的时尚企业名称在社交媒体上更吸引人？',
        answer: '使用易于作为社交媒体账号名称的词汇，创建在小红书和Instagram上易于搜索和记忆的名称，使用在视觉上吸引人的词汇，并确保您的名称易于在购物应用中发现。定期分享时尚内容和风格启示也能帮助消费者记住您的品牌。',
      },
      {
        question: '命名时尚企业时应避免哪些错误？',
        answer: '避免：听起来不时尚或过时的名称、难以拼写或发音的词汇、与知名时尚品牌过于相似的名称、可能快速过时的过度流行术语、限制时尚品类或风格扩展的名称，以及任何不传达品味、风格或品质的东西。',
      },
    ],
    howToChoose: {
      intro: '为您的时尚企业选择完美的名称是创建一个吸引注重品味的消费者并传达您时尚眼光与风格品质的专业品牌的关键步骤。您的企业名称将在您的店铺、网站、社交媒体和购物平台中出现——它是消费者识别和记住您时尚品牌的方式。',
      steps: [
        {
          title: '明确您的时尚定位',
          description: '在生成名称之前，明确您的时尚定位。考虑您将销售什么类型的时尚产品（设计师品牌、日常服饰、奢华时尚、可持续服装、儿童服装、综合时尚），您的理想消费者是谁（专业人士、年轻人、家庭、高端消费者），您的品牌风格是什么（优雅、前卫、复古、最小主义、奢华），您的价格定位是什么（亲民、中端、奢侈），以及您想建立什么样的品牌形象（高级时装、街头时尚、持续风格）。您的答案决定了您需要的是听起来时尚精致、潮流现代、奢华高端还是亲和友好的名称。',
        },
        {
          title: '传达品味和审美',
          description: '时尚业务建立在审美品味和风格眼光之上。您的名称应该听起来有品味，暗示精致的审美，传达对风格的理解，在"这个品牌很有品味"的语境中有效，并吸引注重风格的消费者。诸如优雅、精致、时尚和艺术等词汇能创造即时的品味联想。',
        },
        {
          title: '强调风格和个性',
          description: '时尚消费者购买风格自我表达。您的名称应该暗示独特的风格视角，传达风格个性和差异化，帮助消费者想象通过您的产品表达他们的个性，并吸引寻求风格表达的消费者。在品味权威和个性表达之间取得平衡。',
        },
        {
          title: '反映您的时尚专长和品牌价值',
          description: '如果您有独特的时尚专长或品牌价值，考虑将其纳入名称。对于设计师品牌，考虑创意和艺术相关词汇。对于可持续时尚，考虑责任和环保相关词汇。对于奢侈品，考虑豪华和优越相关词汇。对于街头时尚，考虑潮流和现代相关词汇。在品牌价值传达和通用时尚吸引力之间取得平衡。',
        },
        {
          title: '验证全面的数字和社交媒体可用性',
          description: '检查以下方面的可用性：域名（.com和.cn都很重要），社交媒体平台（Instagram、小红书、微信公众号、抖音、微博对时尚品牌至关重要），在线购物平台（天猫、京东、小红书等平台的商户名称），企业注册（您所在地区的服装零售公司注册），商标搜索（服装和零售服务类别），以及在搜索引擎中是否有同名的知名时尚品牌。',
        },
        {
          title: '与目标消费者测试',
          description: '在最终确定之前，与代表您目标市场的人进行测试。询问这个名称是否听起来时尚专业，您是否相信这个品牌有品味，这个名称是否让您想购买服装，您是否容易记住，以及您是否会在社交媒体或购物平台上关注或搜索它。从时尚爱好者那里寻求特别反馈。',
        },
        {
          title: '考虑品牌增长和扩展',
          description: '选择一个能适应未来扩展的名称：添加新的时尚品类或产品线，扩展到不同的消费者群体，开设更多零售地点或拓展在线渠道，推出配饰或相关产品，以及建立超越单一品类的时尚品牌。理想的时尚企业名称是时尚精致、易于记忆、富有品味的，并为品牌增长定位您的企业，同时完美传达您提供的风格体验和品质承诺。',
        },
      ],
    },
    businessNameIdeas: [
      { name: '雅致汇', description: '强调汇聚优雅和精致的时尚品味。名称简洁而有品味，传达高质量的时尚选择。' },
      { name: '潮流域', description: '"域"字暗示一个时尚聚集地。名称现代而充满能量，适合关注潮流的消费者。' },
      { name: '衣尚坊', description: '结合衣服和时尚的概念，"坊"字传达精心选择和工匠精神。名称温暖而专业。' },
      { name: '风尚社', description: '暗示一个共享时尚品味和风格理念的社区。名称强调时尚联系和品味共鸣。' },
      { name: '素雅阁', description: '"素"字传达简约品味，"阁"字增添了高雅氛围。适合注重简约和品质的时尚品牌。' },
      { name: '时光衣柜', description: '传达随时间推移的永恒风格和衣柜投资。名称富有诗意和品味。' },
      { name: '艺术衣间', description: '强调时尚作为艺术和自我表达的形式。名称创意而富有文化感。' },
      { name: '质感衣局', description: '强调高质量材料和精致做工。"局"字增添了专业和权威的感觉。' },
      { name: '逸品坊', description: '"逸品"传达高端品质和优雅品味。名称精致而富有意境。' },
      { name: '衣选美学', description: '强调精心选择和审美哲学。名称传达品味导向和风格认知。' },
      { name: '优衣库艺', description: '结合优质和艺术的概念。名称传达品质和创意设计的结合。' },
      { name: '风尚工坊', description: '"工坊"字传达精心制作和工匠精神。名称强调每件服装的品质和用心。' },
      { name: '衣馆', description: '简洁而优雅的名称，暗示一个精致的服装馆。易于记忆和识别。' },
      { name: '衣美人', description: '强调通过衣服提升个人美感和气质。名称温柔而吸引人。' },
      { name: '时尚驿站', description: '暗示一个寻找和发现时尚风格的停靠点。名称富有旅程感和期待。' },
      { name: '衣梦工坊', description: '暗示实现时尚梦想的地方。名称充满想象力和创意能量。' },
      { name: '款意坊', description: '强调每件衣服背后的设计意图和风格理念。名称富有深度和品味。' },
      { name: '衣间艺术', description: '强调服装和个人风格的艺术性。名称创意而富有表达力。' },
      { name: '质造衣馆', description: '强调高质量制造和精细选择。名称传达品质承诺和专业素养。' },
      { name: '衣选时光', description: '传达在时光流逝中精心选择永恒风格的过程。名称富有诗意和意义。' },
    ],
  },
  'fitness': {
    slug: 'fitness',
    name: '健身企业名称生成器',
    title: '免费 AI 健身企业名称创意生成器',
    description: '为健身房、个人训练业务和在线健身课程生成激励性、充满活力的名称。',
    metaDescription: '使用我们的AI驱动生成器，为您的健身企业发现一个充满活力的名称。为健身房、个人训练和在线健身项目创建激励性、令人难忘的名称。免费且易于使用！',
    inputLabel: '描述您的健身企业...',
    inputPlaceholder: '例如：一家高端健身房，专注于CrossFit、力量训练和个人教练服务',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['激励 & 充满活力', '强力 & 强大', '平衡 & 整体', '有趣 & 易接近'],
        default: '激励 & 充满活力',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the fitness and wellness industry. Your role is to generate sophisticated, motivating business names that evoke energy, strength, and transformation for fitness centers, personal training businesses, yoga studios, CrossFit gyms, boutique fitness studios, online coaching programs, and wellness facilities.

FITNESS INDUSTRY CONTEXT:
The fitness industry encompasses:
- Gyms and fitness centers (full-service, budget, premium)
- Personal training and coaching businesses
- Yoga and Pilates studios
- CrossFit boxes and strength training facilities
- Boutique fitness studios (spinning, HIIT, dance fitness)
- Online fitness programs and virtual coaching
- Wellness and holistic fitness centers
- Specialized training (functional fitness, sports training)

NAME CHARACTERISTICS FOR FITNESS BUSINESSES:
1. **Motivating and Energetic**
   - Names should inspire action and commitment
   - Evoke feelings of strength, transformation, and achievement
   - Create a sense of excitement and possibility
   - Appeal to both beginners and advanced fitness enthusiasts

2. **Memorable and Catchy**
   - Stick in people's minds after hearing once
   - Work well in word-of-mouth marketing
   - Easy to pronounce and spell
   - Suitable for social media and online platforms

3. **Reflects Fitness Niche**
   - Clearly communicate the type of fitness offered
   - Appeal to target clientele (hardcore athletes, wellness seekers, busy professionals)
   - Differentiate from competitors
   - Create clear expectations about the fitness experience

4. **Professional Yet Approachable**
   - Balance credibility with accessibility
   - Welcome new members while impressing experienced athletes
   - Convey professionalism without being intimidating
   - Create an inclusive community atmosphere

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a fitness business

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      {
        title: '健身房或健身中心启动',
        description: '健身房主和企业家在开设新健身中心时，使用健身企业名称生成器来找到既能激励会员又能在竞争对手中脱颖而出的名称。无论是全服务健身房、精品健身工作室还是高端力量训练设施，该工具会生成能传达您的健身哲学和品牌个性的名称，同时吸引您的目标成员。',
      },
      {
        title: '个人训练业务品牌建设',
        description: '独立培训师和教练使用该生成器来建立个人品牌形象，而不仅仅依赖于自己的名字。对于希望扩展到多个培训师的小型训练团队，或建立在线教练课程的培训师，企业名称比个人品牌更具专业性和可扩展性。生成器提供能传达专业实力、奉献精神和转变结果的名称。',
      },
      {
        title: '在线健身项目开发',
        description: '创建虚拟健身课程、应用或会员制计划的创业者使用该工具来建立与线下健身房同样专业、令人难忘的在线品牌形象。一个有力的企业名称帮助在线健身项目在众多数字健身选项中脱颖而出，并建立社区和承诺感。',
      },
    ],
    faqs: [
      { question: '什么样的健身企业名称最有效？', answer: '有效的健身企业名称应该是激励性的、令人难忘的，并清楚地传达您的健身专长。它应该唤起力量、转变或成就的感觉，同时易于发音和拼写。最好的名称能够吸引您的目标受众——无论是寻求激烈锻炼的运动员还是追求整体健康的初学者。' },
      { question: '我的健身中心名称中应该包含"健身"或"健身房"这样的词吗？', answer: '这取决于您的品牌战略。包含"健身"、"工作室"或"健身房"等词可以立即明确您的业务类型，这对当地SEO有帮助。但请记住，许多成功的健身品牌使用更具创意的名称（如CrossFit或Orangetheory），这些名称更独特且更容易商标化。考虑您的目标市场和长期增长计划。' },
      { question: '健身企业名称对吸引会员有多重要？', answer: '您的企业名称是潜在会员对您品牌的第一印象。一个激励性、专业的名称可以吸引认真的健身爱好者并建立信誉。同样，一个友好、平易近人的名称可以欢迎初学者。您的名称有助于设定关于您的品牌个性、强度水平和社区氛围的期望。' },
      { question: '如何让我的健身企业名称与众不同？', answer: '使用强有力的动词（推进、点燃、转变）、结合强度与结果的概念、融入地理位置元素以增加本地化影响、创造新词或组合词、使用与您的专业健身方向相关的比喻。避免使用过于通用的术语或太多的竞争对手都在使用的名称。' },
      { question: '在线健身业务的名称应该与物理健身房的名称不同吗？', answer: '在线健身名称可以更具创意和品牌化，因为它们不需要立即向人们传达物理位置的概念。但是，名称仍应清楚地传达这是一个健身/健康品牌。在线健身名称通常受益于记忆力强、易于在社交媒体中使用、易于建立在线社区的特质。' },
      { question: '我应该在企业名称中使用我的个人名字吗？', answer: '使用您的名字（如"John的CrossFit"）可以建立个人品牌和信誉，特别是作为个人培训师。但这可能会在您想扩展团队或出售业务时变得复杂。企业名称提供更大的灵活性和专业性。如果您确实使用个人名字，请考虑将其与专业术语相结合（"John的力量工作室"而不是仅仅"John"）。' },
      { question: '健身企业名称应该传达什么样的情绪或感觉？', answer: '这取决于您的目标市场。力量和CrossFit企业可能希望传达强度、挑战和奋斗。瑜伽和普拉提工作室可能希望传达平衡、宁静和转变。通用健身房可能希望传达动力、包容和可达性。您的名称应与您想在会员心目中建立的品牌个性相匹配。' },
      { question: '命名健身企业时应避免哪些错误？', answer: '避免：过于具体的名称，可能限制未来的服务扩展、难以拼写或发音的名称、可能与竞争对手混淆的名称、包含可能很快过时的流行或潮流词汇、可能具有冒犯性或排斥性的名称、与健身无关的名称会让潜在成员困惑。' },
      { question: '企业名称如何影响定价和品牌定位？', answer: '您的企业名称设定了关于您品牌高端程度的期望。"精英力量馆"暗示高级课程和高端定价，而"社区健身工作室"则暗示更平价的方式。确保您的名称与您的目标定价策略一致。更高端的名称可能需要相应的设施、教练和会员经验来支持定价。' },
      { question: '我的健身企业名称应该在域名和社交媒体上可用吗？', answer: '强烈推荐。在选择最终名称之前，请检查.com域名的可用性（或您所在地区的相关域名），以及在Instagram、Facebook和TikTok等主要社交媒体平台上的可用性。如果您的首选名称不可用，这可能会限制您的在线影响力和可发现性。确保您选择的名称在多个平台上都一致可用。' },
    ],
    howToChoose: {
      intro: '为您的健身企业选择完美的名称是建立强大品牌形象的关键一步——这个形象能激励会员、传达您的专业知识、并在拥挤的健身市场中脱颖而出。您的企业名称将出现在健身房招牌、在线营销、社交媒体、会员证和口碑推荐中。它是潜在健身者与您品牌的第一个接触点，因此选择一个既激励又专业的名称至关重要。',
      steps: [
        { title: '定义您的健身专长和品牌个性', description: '在生成名称创意之前，请明确您的健身企业的身份。您提供什么类型的健身（力量训练、瑜伽、有氧运动、CrossFit、综合）？您的目标成员是谁（精英运动员、忙碌的专业人士、健康意识的老年人、初学者、特定性别）？您的价格定位是什么（预算、中端、高端）？您对健身的理念是什么——竞争与胜利、内在转变、社区和乐趣、还是科学与成果？您的品牌个性是严肃且聚焦，还是友好且平易近人，或介于两者之间？所有这些因素应该在您的名称选择中体现。' },
        { title: '使用强有力的、激励性的语言', description: '健身企业名称的关键是使用能够激励和鼓舞的语言。寻找包含强有力动词（推进、点燃、释放、征服、转变）的名称、传达力量和能量的词汇（铁、火、闪电、风暴、雷鸣、爆发）、体现个人成长和成就的名称、创造紧迫感和兴奋感的短语、听起来令人难忘且充满活力的名称。避免被动或消极的词汇，这些词汇可能会削弱您的品牌信息。最有效的健身名称会让人立即产生行动和奉献的感觉。' },
        { title: '清楚地传达您的健身利基和专业知识', description: '您的名称应该帮助潜在会员迅速了解您提供的是什么类型的健身体验。如果您专注于瑜伽，您的名称可能包含瑜伽相关的词汇或宁静的意象。如果您经营CrossFit或力量训练，您的名称可能会传达强度和挑战。如果您提供通用健身服务，您的名称可能会传达多功能性和整体转变。仔细考虑您的利基如何应该在您的名称选择中体现，以确保会员理解您的承诺和专业知识。' },
        { title: '确保可记忆性和本地品牌影响力', description: '在竞争激烈的健身市场中，您的名称必须脱颖而出并且容易记住。测试潜在名称的标准包括：会员是否在听一次后就能记住？与您所在城市的竞争对手有明显区别吗？是否在口碑推荐中表现出色？是否足够简洁适合标志和营销材料？会员是否能轻易地在社交媒体上找到并关注？是否具有足够的本地或社区感，吸引您所在地区的人们？' },
        { title: '验证品牌和在线可用性', description: '一旦您确定了有前景的候选名称，请进行全面的可用性检查。尽可能获取.com域名版本，或考虑.cn或特定地区的域名。在Instagram、Facebook、微信公众号和小红书等平台检查可用性。确保该名称尚未在您的城市或地区注册为企业。进行商标搜索，确认没有现有的商标冲突，特别是在健身行业。如果可用性有问题，考虑名称的变体。' },
        { title: '与潜在成员和教练团队进行测试', description: '在最终确定之前，与代表您目标会员群体的人测试您的首选名称。询问他们这个名称暗示什么类型的健身体验、它感觉是高端、平价还是介于两者之间、他们是否会因为这个名称而被吸引来查看更多、他们想象这个健身企业提供什么服务、名称是否听起来可信和专业。同样，获取您的教练团队的反馈——他们每天代表这个品牌，他们的认可很重要。' },
        { title: '考虑长期增长和可扩展性', description: '选择一个足够灵活以适应未来扩展的名称。虽然您可能从CrossFit或瑜伽开始，但您可能会在将来添加个人训练、营养咨询或在线课程。过于具体的名称（如"Bob的CrossFit"或"瑜伽工作室"）可能会限制您添加新服务的能力。理想的健身企业名称应该是：足够具体以清楚传达您的身份，但足够通用以允许增长、经久不衰而不依赖于短暂的趋势、既能在当地市场成功，如果有朝一日扩展也能在线成功。寻找一个既激励和鼓舞今天的会员，又为建立持久、蓬勃发展的健身品牌奠定基础的名称。' },
      ],
    },
    businessNameIdeas: [
      { name: '铁力健身', description: '传达力量、决心和坚定不移的承诺。完美适合力量训练和CrossFit专家。' },
      { name: '活力源', description: '暗示能量、动力和持久的体力——适合全面的健身和锻炼体验。' },
      { name: '巅峰力量', description: '强调达到最大潜能和顶级表现的目标。' },
      { name: '火焰锻炼工作室', description: '唤起热情、强度和高能量锻炼的意象。' },
      { name: '转变体育馆', description: '强调个人蜕变和健身旅程的力量。' },
      { name: '闪电健身', description: '传达速度、力量和爆炸性的健身成果。' },
      { name: '融合健康', description: '暗示多种健身方式的融合和整体方法。' },
      { name: '胜者圈', description: '建立竞争性和成就导向的社区感。' },
      { name: '脉动健身', description: '唤起心脏跳动、能量和生命力的意象。' },
      { name: '精英体能', description: '传达专业水平和高端健身体验。' },
      { name: '无限潜力', description: '激励会员超越极限并实现他们认为不可能的事情。' },
      { name: '钢铁工坊', description: '暗示力量训练的艺术性和工艺，充满专业精神。' },
      { name: '风暴健身', description: '唤起强大的自然力量和无法阻挡的力量。' },
      { name: '真实实力', description: '强调真实的、来之不易的健身成果而不是流行。' },
      { name: '动力中心', description: '传达赋予和激励会员的共同使命。' },
      { name: '昇华瑜伽工作室', description: '非常适合瑜伽和冥想实践，暗示个人成长和精神转变。' },
      { name: '核心健身', description: '强调力量训练和核心稳定性的基础原则。' },
      { name: '释放能量', description: '传达释放内在力量并充分表达的感觉。' },
      { name: '荣誉竞技馆', description: '创建竞争、尊重和成就的意象。' },
      { name: '忍耐训练', description: '强调健身的心理和身体耐力方面，适合高强度编程。' },
    ],
  },

  'flower-shop': {
    slug: 'flower-shop',
    name: '花店企业名称生成器',
    title: '免费 AI 花店企业名称创意生成器',
    description: '为花店和花卉设计企业生成浪漫、优雅的名称。',
    metaDescription: '使用我们的AI驱动生成器，为您的花店发现一个迷人的名称。为花卉设计、花束和礼品企业创建浪漫、优雅的名称。免费且易于使用！',
    inputLabel: '描述您的花店...',
    inputPlaceholder: '例如：一家提供定制婚礼花卉、事件装饰和日常鲜花送货的高端花店',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['浪漫 & 优雅', '新鲜 & 自然', '梦幻 & 创意', '经典 & 传统'],
        default: '浪漫 & 优雅',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the floral and gift industry. Your role is to generate beautiful, memorable business names that convey artistry, elegance, and emotional connection for flower shops, floral design studios, event florists, and gift boutiques.

FLORAL AND GIFT INDUSTRY CONTEXT:
The floral industry encompasses:
- Retail flower shops and boutiques
- Wedding and event floral design
- Corporate gifting and arrangement services
- Subscription flower services
- Online flower delivery platforms
- Floral workshops and classes
- Luxury gift and flower combinations
- Seasonal and holiday floral services

NAME CHARACTERISTICS FOR FLOWER BUSINESSES:
1. **Romantic and Elegant**
   - Names should evoke beauty, love, and celebration
   - Create emotional connections to life's special moments
   - Use sophisticated, refined language
   - Appeal to romantics, gift-givers, and special occasion planners

2. **Fresh and Natural**
   - Convey the vitality and natural beauty of flowers
   - Suggest growth, renewal, and authenticity
   - Use nature-inspired vocabulary and imagery
   - Feel organic and genuine

3. **Memorable and Distinctive**
   - Stand out in a competitive floral market
   - Easy to pronounce and remember
   - Work well in both visual and spoken contexts
   - Create lasting impressions

4. **Versatile and Timeless**
   - Appeal across age groups and occasions
   - Work for weddings, sympathy, congratulations, and everyday gifting
   - Avoid trendy language that may date quickly
   - Remain relevant across seasons and celebrations

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a floral business

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      {
        title: '花店零售业务启动',
        description: '花店主和企业家在开设新花店时，使用花店企业名称生成器来找到既能传达品牌个性又能吸引不同顾客群体的名称。无论是精品高端花卉设计工作室、亲切的社区花店还是现代的在线花卉送货服务，该工具会生成能立即传达您的专业精神和美学方向的名称。' },
      {
        title: '婚礼和活动策划品牌建设',
        description: '专业的婚礼和活动策划师使用该生成器来建立专业的花卉设计品牌，使自己与竞争对手区分开来。一个精心选择的名称可以吸引计划重大生活事件的新娘、活动策划者和企业客户。该工具生成能传达工艺、艺术性和对细节关注的名称，这些对高端婚礼花卉至关重要。' },
      {
        title: '在线花卉和礼品送货服务',
        description: '创建在线花卉送货平台或订阅花卉服务的企业家使用该工具来建立与线下花店同样优雅、令人难忘的品牌形象。一个精妙的花卉企业名称帮助在线服务在众多数字礼品选项中脱颖而出，同时建立信任、品质和浪漫的感觉。' },
    ],
    faqs: [
      { question: '什么样的花店名称最有效？', answer: '有效的花店名称应该是美丽的、令人难忘的，并清楚地传达您提供花卉和礼品的事实。最好的名称唤起浪漫、庆祝、自然美或情感联系的感觉。名称应该易于发音、易于拼写，并且对任何年龄和背景的人都具有吸引力。它应该反映您的美学风格——无论是经典和传统、现代和时尚，还是富有想象力和创意的。' },
      { question: '花店名称中应该包含"花"或"花卉"这个词吗？', answer: '这取决于您的品牌战略。包含"花"、"花卉"、"花店"或"花束"等词可以立即明确您的业务类型，对SEO和本地搜索有帮助。但许多成功的花店使用更具创意和优雅的名称（如"自然之声"或"绽放时刻"），这些名称更独特、更令人难忘。考虑您的目标顾客以及名称是否足够清楚地暗示花卉和礼品。' },
      { question: '花店的名称对吸引客户有多重要？', answer: '您的花店名称是潜在顾客对您品牌的第一印象。一个精美、优雅的名称可以吸引那些庆祝特殊时刻、赠送礼物或为自己购买花卉的人。名称设定了关于您的品质水平、定价和美学风格的期望。一个精心选择的名称可以使顾客相信您会创建美丽、深思熟虑的安排。' },
      { question: '如何让我的花店名称与众不同？', answer: '使用与特定花卉相关的诗意语言、融合自然和情感的概念、创造新颖的词汇组合、使用地理位置或文化元素、采用花卉设计或花束创作的比喻语言、融入庆祝和特殊时刻的暗示。避免使用过于通用的词汇或太多竞争对手都在使用的名称。最好的花店名称感觉是独特的，同时立即唤起对美、花卉和特殊时刻的感觉。' },
      { question: '婚礼花卉设计业务的名称应该与零售花店的名称不同吗？', answer: '是的，专业的婚礼花卉设计师通常受益于反映高端、专业和工艺的名称。这可能包括诸如"设计"、"工作室"或"创意"之类的词，这些词暗示定制、艺术性和高水平的服务。而零售花店的名称可能更强调可达性和日常庆祝。然而，许多花店同时处理零售和婚礼业务，所以名称应该足够灵活以涵盖两者。' },
      { question: '我的花店名称应该涵盖我提供的所有服务吗？', answer: '您的企业名称不需要具体列出您提供的所有服务。相反，它应该传达品牌的本质和风格。花卉、礼品、装饰、订阅服务、家送或事件设计可以通过标语或营销材料来传达。一个强大的花店名称应该足够通用和优雅，以允许多种服务和未来的增长。' },
      { question: '季节或事件主题的花店名称是好主意吗？', answer: '虽然季节名称可能令人吸引，但请考虑长期影响。"樱花春天"或"圣诞花坊"可能在特定季节有效，但全年可能感觉不相关。最好选择一个全年都能共鸣的名称，特别是如果您计划全年经营。您可以通过营销和装饰来强调季节性，而不是锁定在您的企业名称中。' },
      { question: '命名花店时应避免哪些错误？', answer: '避免：过于具体的名称，可能限制服务扩展、难以拼写或发音的名称、包含可能快速过时的流行词汇、与竞争对手过于相似的名称、对您的目标市场不清楚的含义、暗示平价而您提供高端服务的名称，反之亦然、任何可能具有冒犯性的含义。' },
      { question: '花店的名称应该传达什么样的情感或感觉？', answer: '这取决于您的品牌定位。高端婚礼花卉设计应该传达优雅、精致和奢华。社区花店可能希望传达温暖、可达性和庆祝。现代在线花卉服务可能希望传达便利、清新和新颖。创意精品花店可能希望传达艺术性、个性和想象力。您的名称应该与您想在顾客心目中建立的品牌个性和定位相匹配。' },
      { question: '我的花店名称如何影响我的在线存在和营销？', answer: '您的花店名称影响在线可发现性和品牌认知。独特的名称更容易在搜索排名中脱颖而出，而通用名称可能会淹没在结果中。在社交媒体、Google My Business、Instagram和Facebook上的一致名称使用可以提高品牌认知。确保您的首选名称在.com域名和所有主要社交媒体平台上可用。好的花店名称应该既优雅又可在数字平台上易于搜索和发现。' },
    ],
    howToChoose: {
      intro: '为您的花店选择完美的名称是建立优雅、令人难忘的品牌形象的关键一步——这个形象能吸引顾客在庆祝、表达爱意、或向他人传达感情时想到您。您的企业名称将出现在店面招牌、网站、社交媒体、包装、发票和口碑推荐中。它是顾客与您品牌的第一个接触点，因此选择一个既美丽又专业的名称至关重要。',
      steps: [
        { title: '定义您的花卉美学和品牌个性', description: '在生成名称创意之前，请明确您的花店的身份。您提供什么类型的花卉安排（婚礼、葬礼、日常、节日、企业活动）？您的美学风格是什么（传统经典、现代简约、波西米亚艺术、富有想象力的创意）？您的目标顾客是谁（新娘、公司采购、情侣、忙碌的专业人士、礼品赠送者）？您的价格定位是什么（预算、中端、高端、奢侈）？您对花卉设计的理念是什么——极简主义或丰富、传统或创新、随意或精心设计？您想通过您的花卉和服务传达什么样的情感？所有这些因素应该在您的名称选择中体现。' },
        { title: '使用浪漫、优雅的语言', description: '花店名称的关键是使用浪漫、优雅和美丽的语言。寻找包含诗意词汇的名称、与爱、庆祝和特殊时刻相关的词汇、唤起自然和花卉美感的词汇、传达情感联系和转变的词汇、听起来优雅且易于记忆的名称。考虑使用与花卉相关的比喻（绽放、盛开、盛放、绽开）、与自然季节相关的图像（春天、新芽、繁荣）、与庆祝和珍贵时刻相关的语言、与浪漫和爱情相关的诗意描述。避免听起来过于商业或不够感人的名称。' },
        { title: '清楚地传达您的花卉和礼品专长', description: '您的名称应该帮助潜在顾客迅速了解您提供花卉、礼品和庆祝安排。虽然名称不需要包含"花"这个词，但它应该通过暗示美丽、自然、庆祝或浪漫来传达这一点。如果您专注于婚礼，您的名称可能会暗示奢华、精致和承诺。如果您专注于日常花卉，您的名称可能会暗示可达性、欢乐和日常美丽。确保您的名称清晰足以让人们理解您是花卉业务。' },
        { title: '确保可记忆性和视觉吸引力', description: '在竞争激烈的花卉市场中，您的名称必须脱颖而出并且容易记住。使用以下标准测试潜在名称：是否在听一次后容易记住？是否与您所在城市的竞争对手有明显区别？是否在口碑推荐中表现出色？是否足够简洁适合标志和营销材料？名称的视觉外观是否优雅？是否在社交媒体档案中看起来很好？是否可以创建一个与品牌相匹配的标志？' },
        { title: '验证品牌和在线可用性', description: '一旦您确定了有前景的候选名称，请进行全面的可用性检查。尽可能获取.com域名版本，或考虑.cn或特定地区的域名。在Instagram、Facebook、微博和微信等平台检查可用性。确保该名称尚未在您的城市注册为企业。进行商标搜索，确认没有现有的商标冲突。为在线花卉送货服务的潜在扩展保留域名。' },
        { title: '与目标顾客和关键利益相关者进行测试', description: '在最终确定之前，与代表您目标顾客群体的人测试您的首选名称。询问他们该名称暗示什么类型的花卉企业、它感觉是高端、平价还是介于两者之间、他们是否会因为这个名称而被吸引来了解更多、他们想象这家花店提供什么服务、该名称是否传达了优雅和品质。同样，获取婚礼策划师、活动协调员或其他可能推荐您的专业人士的反馈。' },
        { title: '考虑长期增长和服务扩展', description: '选择一个足够灵活以适应未来增长的名称。虽然您可能从零售花店开始，但您可能会在未来添加婚礼设计、订阅服务、在线送货或企业账户。过于具体的名称（如"玫瑰之家"或"婚礼花卉设计"）可能会限制您添加新服务的能力。理想的花店名称应该是：在所有花卉和礼品服务中足够通用以允许增长、足够优雅和永恒以经受时间考验、既能在本地社区成功，又能在线扩展、既传达您今天的专长，又为建立一个令人尊敬的、蓬勃发展的花卉品牌奠定基础。' },
      ],
    },
    businessNameIdeas: [
      { name: '花语轩', description: '暗示花卉有隐密的语言和含义，传达艺术性和诗意——适合高端设计工作室。' },
      { name: '百花苑', description: '唤起一个汇集多种花卉和美丽的花园圣地。' },
      { name: '绽放时刻', description: '传达庆祝、开花和特殊时刻的喜悦。' },
      { name: '玫瑰密语', description: '创建浪漫和亲密的感觉，特别适合婚礼和情侣。' },
      { name: '花海映象', description: '唤起丰富的色彩和花卉的自然美。' },
      { name: '芬芳工坊', description: '强调手工制作、工艺和精心设计的花卉安排。' },
      { name: '幸福花园', description: '传达欢乐、庆祝和美丽的感觉。' },
      { name: '晶彩绽放', description: '结合光泽和颜色的意象，意味着花卉以其全部荣耀绽放。' },
      { name: '馨香花房', description: '暗示一个充满香气、美丽和专业设计的花卉空间。' },
      { name: '悦芳坊', description: '传达喜悦和香气，适合全面的花卉体验。' },
      { name: '诗意花店', description: '强调创意和艺术方法以及浪漫的花卉安排。' },
      { name: '倾城花艺', description: '暗示能够改变场景和创造令人惊艳时刻的艺术花卉。' },
      { name: '缘花坊', description: '传达命运、联系和通过花卉建立的关系。' },
      { name: '云端之花', description: '唤起梦幻、浪漫和超越现实的感觉。' },
      { name: '心之语花店', description: '强调通过花卉表达情感和深层情感的能力。' },
      { name: '盛放年代', description: '传达充满活力的盛期和美丽的时刻。' },
      { name: '玉兰花语', description: '参考特定花卉，暗示精致、纯洁和美感。' },
      { name: '时尚花艺', description: '适合现代、当代的花卉设计工作室。' },
      { name: '花漾生活', description: '传达通过花卉将美丽融入日常生活。' },
      { name: '至美绽开', description: '强调完美和最高质量的花卉和礼品体验。' },
    ],
  },

  'food': {
    slug: 'food',
    name: '餐饮企业名称生成器',
    title: '免费 AI 餐饮企业名称创意生成器',
    description: '为餐厅、咖啡馆和食品企业生成美味、吸引人的名称。',
    metaDescription: '使用我们的AI驱动生成器，为您的餐饮企业发现一个诱人的名称。为餐厅、咖啡馆和烹饪企业创建美味、令人难忘的名称。免费且易于使用！',
    inputLabel: '描述您的食品业务...',
    inputPlaceholder: '例如：一家提供现代日本美食和手工鸡尾酒的高端家庭餐厅',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['美食 & 精致', '新鲜 & 健康', '舒适 & 家常', '有趣 & 随意'],
        default: '美食 & 精致',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the food and culinary industry. Your role is to generate memorable, appetizing business names that convey quality, flavor, and dining experience for restaurants, cafes, food delivery services, catering businesses, and food-related enterprises.

FOOD AND CULINARY INDUSTRY CONTEXT:
The food industry encompasses:
- Full-service restaurants and fine dining establishments
- Casual dining and family restaurants
- Cafes and coffee shops
- Quick-service restaurants and fast casual
- Food delivery and ghost kitchen services
- Catering and event food services
- Food trucks and mobile food vendors
- Specialty food shops and bakeries
- Healthy/organic food and wellness cafes
- Ethnic and international cuisines

NAME CHARACTERISTICS FOR FOOD BUSINESSES:
1. **Appetizing and Evocative**
   - Names should trigger positive food and flavor associations
   - Create cravings and desire to visit
   - Suggest quality ingredients and preparation
   - Appeal to food enthusiasts and casual diners alike

2. **Reflective of Cuisine Type**
   - Communicate the style of food served
   - Appeal to target customer expectations
   - Hint at culinary expertise and authenticity
   - Differentiate from competitors

3. **Memorable and Distinctive**
   - Stand out in competitive food market
   - Easy to pronounce and spell
   - Work well in word-of-mouth marketing
   - Create lasting brand associations with taste

4. **Warm and Inviting**
   - Create sense of community and comfort
   - Encourage repeat visits and loyalty
   - Balance professionalism with approachability
   - Suggest hospitality and care in preparation

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a food business

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      {
        title: '餐厅或咖啡馆启动',
        description: '餐厅主和厨师在开设新餐饮地点时，使用餐饮企业名称生成器来找到能传达他们的烹饪风格和品牌个性的名称。无论是精致的美食餐厅、舒适的家常菜馆还是现代的专业咖啡馆，该工具会生成能吸引正确的食客并建立起对美味、高质量体验期望的名称。' },
      {
        title: '食品交付或幽灵厨房扩展',
        description: '经营虚拟食品业务或专业厨房的企业家使用该生成器来建立与物理餐厅同样专业和吸引力的品牌。对于没有前厅用餐区的食品业务，一个强大的品牌名称在菜单、应用程序、包装和在线订购平台上建立专业性和可信度至关重要。' },
      {
        title: '食品业务品牌重塑或扩展',
        description: '成熟的食品企业希望刷新品牌形象或进入新的菜系时，使用该生成器来探索新的命名选项。无论是添加新的餐厅概念、扩展菜单范围，还是重新定位以吸引新的客户群，该工具提供能传达烹饪抱负和品质承诺的名称。' },
    ],
    faqs: [
      { question: '什么样的食品企业名称最有效？', answer: '有效的食品企业名称应该是诱人的、令人难忘的，并清楚地传达您提供的美食体验类型。最好的名称唤起味道、质量或舒适感，易于发音，并能吸引您的目标食客。名称应该反映您的烹饪风格——无论是精致美食、家常舒适还是健康和创新——同时在当地社区中感觉真实和欢迎。' },
      { question: '食品企业名称中应该包含食物类型吗？', answer: '这取决于您的品牌战略。包含"披萨"、"咖啡馆"、"面馆"或"烧烤"等词可以立即明确您提供的内容，这对SEO和本地搜索有帮助。但许多成功的餐厅使用更具创意的名称，这些名称更独特且更容易记住。您应该在立即清晰和品牌创意之间取得平衡。确保您的名称足够清楚，使潜在食客理解您提供的食物类型。' },
      { question: '餐厅名称对吸引客户有多重要？', answer: '您的食品企业名称是潜在食客对您品牌的第一印象。一个诱人、精心选择的名称可以吸引饥饿的客户、鼓励他们查看您的菜单、建立对美食和质量的期望。一个平凡或不吸引人的名称可能会导致食客选择竞争对手。食品业务的名称应该唤起欲望、信任和您提供的独特烹饪体验。' },
      { question: '如何让我的食品企业名称与众不同？', answer: '使用描述性的食物相关词汇、融合您的烹饪理念或成分的创意组合、融入地理位置或文化参考、创建新颖的词汇组合、使用诗意或令人惊讶的语言、融入您的专业或个人背景。避免使用过于通用的词汇或太多竞争对手都在使用的概念。最好的食品企业名称感觉是真实的、独特的，同时立即传达食物的乐趣和品质。' },
      { question: '精致美食餐厅与家常菜馆的名称应该不同吗？', answer: '是的，他们通常应该。精致美食名称可能使用更复杂、精致或国际化的语言，暗示高端、精致和专业性。家常菜馆的名称可能使用更温暖、友好和易接近的语言，暗示舒适、真实性和关怀。咖啡馆名称可能强调温暖、社区和放松。您的名称应该与您的定价、环境和服务风格相匹配，以设定正确的顾客期望。' },
      { question: '我应该在餐厅名称中包含我的名字或地点吗？', answer: '包含您的名字可以建立个人品牌和真实感，特别是对于以您的烹饪风格或家族食谱而闻名的餐厅。包含位置可以帮助本地SEO，但可能会限制未来的扩张。许多成功的餐厅使用既能传达个人联系又能允许增长的名称。考虑"王家麻辣烫"（个人风格）与"川味麻辣烫"（更通用、更容易扩展）。' },
      { question: '命名食品企业时应避免哪些错误？', answer: '避免：过于描述性的名称，限制菜单的灵活性（"只有汉堡"在您想添加其他选项时不起作用）、难以拼写或发音的名称、包含可能快速过时的流行词汇、与竞争对手过于相似的名称、对您的目标市场不清楚的含义、暗示的食物品质与您实际提供的不匹配。' },
      { question: '食品企业名称应该传达什么样的情感或感觉？', answer: '这取决于您的品牌定位。精致美食应该传达复杂性、精致和专业性。家常和舒适食品应该传达温暖、真实性和关怀。健康美食应该传达活力、清新和福利。创意或融合美食应该传达冒险、创新和食物的乐趣。您的名称应该设定关于您顾客在用餐时可以期待的体验和情感的期望。' },
      { question: '我的食品企业名称应该在域名和社交媒体上可用吗？', answer: '强烈推荐。在选择最终名称之前，请检查.com域名的可用性，以及Instagram、Facebook、微博和小红书等平台上的可用性。如果您的首选名称不可用，这可能会限制您的在线营销和品牌认知度。许多食品企业严重依赖社交媒体进行营销，所以一致的品牌命名很重要。确保您的名称在所有主要平台上都可用。' },
      { question: '以后可以更改食品企业名称吗？', answer: '可以，但涉及大量成本和潜在的品牌认知度损失。如果您建立了忠实的食客和口碑推荐，改名可能会导致您失去一些客户。最好现在花时间找到合适的名称。如果您必须更改，请规划完整的品牌过渡，包括重新装修、新菜单、营销活动和对现有顾客的沟通。' },
    ],
    howToChoose: {
      intro: '为您的食品企业选择完美的名称是建立吸引饥饿顾客、传达您的烹饪愿景和建立忠实食客基础的品牌的关键一步。您的企业名称将出现在餐厅招牌、菜单、在线订购平台、社交媒体、配送应用程序和食客的口碑中。它是潜在顾客与您品牌的第一个接触点，因此选择一个诱人、令人难忘且准确反映您的食物体验的名称至关重要。',
      steps: [
        { title: '明确您的烹饪身份和品牌个性', description: '在生成名称创意之前，请明确您的食品企业的身份。您提供什么类型的美食（中餐、日本菜、意大利菜、融合菜、健康食品）？您的定价和餐饮风格是什么（精致美食、休闲就餐、快速供应、家常舒适）？您的目标食客是谁（美食家、忙碌的上班族、家庭、年轻专业人士、健康意识的人）？您对烹饪的理念是什么（传统与创新、本地与国际、简单与复杂）？您想通过食物传达什么情感（舒适、冒险、优雅、亲密、社区）？您与其他餐厅的区别是什么——您的特色菜、特殊成分、烹饪技术或服务哲学？所有这些因素应该在您的名称选择中体现。' },
        { title: '使用食物和味道相关的有诱惑力的语言', description: '食品企业名称的关键是使用唤起食物、味道和美食乐趣的语言。寻找描述性地传达食物品质或风味的名称、与您的烹饪传统或成分相关的名称、暗示美食乐趣和满足感的名称、传达温暖、舒适或社区的名称、听起来诱人且令人难忘的名称。考虑使用与味道相关的词汇（美味、鲜香、诱人、香喷喷）、与文化和传统相关的词汇、与烹饪和工艺相关的词汇、暗示高质量和护理的语言。避免听起来太商业或不够真实的名称。' },
        { title: '清楚地传达您的烹饪风格和食物类型', description: '您的名称应该帮助潜在食客迅速了解您提供什么类型的美食体验。虽然名称不需要具体列出您的每一道菜，但它应该暗示您的烹饪风格和食物品质。如果您提供精致的日本美食，您的名称可能会传达精致和工艺。如果您提供家常意大利菜，您的名称可能会传达温暖和真实性。如果您提供创新的融合美食，您的名称可能会暗示冒险和创意。确保您的名称足够清楚，食客能理解您提供的食物类型和品质水平。' },
        { title: '确保可记忆性和本地品牌影响力', description: '在竞争激烈的食品市场中，您的名称必须脱颖而出并且容易记住。使用以下标准测试潜在名称：听一次后是否容易记住？与您所在城市的竞争对手有明显区别吗？在口碑推荐中是否表现出色？（"我建议您尝试..."是一个好名字吗）是否足够简洁适合标志、菜单和营销材料？在社交媒体上是否看起来很有吸引力？通过位置搜索容易找到吗？' },
        { title: '验证品牌和在线可用性', description: '一旦您确定了有前景的候选名称，请进行全面的可用性检查。尽可能获取.com域名版本，或考虑.cn或特定地区的域名。在Instagram、Facebook、微博和微信等平台检查可用性。检查Uber Eats、美团、饿了么等食品送货应用的名称可用性。确保该名称尚未在您的城市注册为企业。进行商标搜索，确认没有现有的商标冲突。' },
        { title: '与目标食客和社区进行测试', description: '在最终确定之前，与代表您目标食客群体的人测试您的首选名称。询问他们该名称暗示什么类型的食物、它感觉是高端、平价还是介于两者之间、他们会因为这个名称而被吸引进来吃饭吗、他们想象这家餐厅提供什么菜、他们认为食物的品质如何、名称是否传达您想要的烹饪风格。同样，获取厨师、服务员或其他食品专业人士的反馈。' },
        { title: '考虑长期增长和菜单灵活性', description: '选择一个足够灵活以适应菜单增长和可能的扩张的名称。虽然您可能从专注于特定菜肴开始，但您可能会在将来添加新菜肴、特色菜或服务。过于具体的名称（"王家水饺馆"）可能会限制您添加其他菜肴的能力或在新位置扩展。理想的食品企业名称应该是：在您的烹饪类型内足够灵活以允许菜单增长、经久不衰而不依赖于短暂的食品趋势、足够独特以建立强势品牌、既能在当地社区成功，又能如果您决定扩展也能在多个位置成功。寻找一个既传达您今天的烹饪愿景，又为建立一个受尊敬、蓬勃发展的食品品牌奠定基础的名称。' },
      ],
    },
    businessNameIdeas: [
      { name: '味道乡', description: '传达家常、真实的食物和怀旧的舒适感。完美适合传统家庭菜肴。' },
      { name: '鲜味坊', description: '强调新鲜、高质量的食材和美食的本质。' },
      { name: '香喷厨房', description: '唤起诱人的食物香气和热情的烹饪。' },
      { name: '食光时刻', description: '传达通过美食庆祝和共享特殊时刻的乐趣。' },
      { name: '美食工坊', description: '强调手工烹饪、工艺和对细节的关注。' },
      { name: '舌尖享受', description: '强调味道体验和美食满足的喜悦。' },
      { name: '厨心缘', description: '传达来自厨师心脏的真实关怀和热情。' },
      { name: '山珍饭馆', description: '暗示高质量的食材和精心烹饪的宴会。' },
      { name: '百味堂', description: '传达多样的菜肴和各种美食传统的融合。' },
      { name: '鲜颂坊', description: '强调新鲜度和对美食的庆祝。' },
      { name: '桌边故事', description: '强调通过食物分享故事和建立联系。' },
      { name: '食味坊', description: '简洁、优雅，强调食物味道的本质。' },
      { name: '悠哉食馆', description: '传达悠闲、放松的用餐体验。' },
      { name: '臻味阁', description: '暗示精致、精心选择的美食体验。' },
      { name: '厨芸菜坊', description: '强调烹饪工艺和对菜肴的热情。' },
      { name: '尝尝鲜', description: '传达探索和尝试新风味的兴奋感。' },
      { name: '老灶火', description: '暗示传统、真实的烹饪和怀旧感。' },
      { name: '飨宴坊', description: '强调高质量的美食享受和盛宴的庆祝。' },
      { name: '家味餐厅', description: '传达温暖、舒适、真实的家庭烹饪感受。' },
      { name: '采鲜坊', description: '强调选择最新鲜的食材和精心精选的菜肴。' },
    ],
  },

  'food-truck': {
    slug: 'food-truck',
    name: '餐车企业名称生成器',
    title: '免费 AI 餐车企业名称创意生成器',
    description: '为食品卡车和街头美食企业生成朗朗上口、引人注目的名称。',
    metaDescription: '使用我们的AI驱动生成器，为您的食品卡车发现一个引人注目的名称。为移动食品和街头美食企业创建朗朗上口、令人难忘的名称。免费且易于使用！',
    inputLabel: '描述您的食品卡车...',
    inputPlaceholder: '例如：一辆提供地道墨西哥街头小食和手工虾米玉米粥的食品卡车',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['朗朗上口 & 有趣', '美食 & 高端', '街头食品氛围', '俏皮 & 创意'],
        default: '朗朗上口 & 有趣',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the mobile food and street food industry. Your role is to generate catchy, memorable business names that convey authenticity, adventure, and delicious street food for food trucks, mobile food vendors, pop-up food experiences, and street food businesses.

MOBILE FOOD AND STREET FOOD INDUSTRY CONTEXT:
The mobile food industry encompasses:
- Traditional food trucks and mobile kitchens
- Street food vendors and carts
- Pop-up restaurants and temporary food experiences
- Catering trucks and event food services
- Specialty mobile food (tacos, banh mi, crepes, etc.)
- Ghost kitchens supporting delivery-only models
- Seasonal and festival food operations
- Food cart clusters and street food markets

NAME CHARACTERISTICS FOR FOOD TRUCKS:
1. **Catchy and Memorable**
   - Names should be instantly memorable and shareable
   - Work well in word-of-mouth marketing
   - Easy to say and spell
   - Create strong social media presence potential

2. **Conveying Street Food Authenticity**
   - Evoke genuine street food experience
   - Appeal to food adventurers and casual eaters
   - Suggest quick, satisfying meals
   - Create sense of culinary authenticity

3. **Playful and Personality-Driven**
   - Bring personality and fun to the brand
   - Reflect the casual, mobile nature of the business
   - Stand out in crowded food truck markets
   - Create emotional connections with customers

4. **Mobile and Flexible Positioning**
   - Work for multiple locations
   - Suit quick-service format
   - Appeal to broad customer base
   - Allow for future expansion or menu changes

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a food truck

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      {
        title: '食品卡车启动和品牌建设',
        description: '餐车企业家和流动美食贩子使用食品卡车企业名称生成器来创建朗朗上口、令人难忘的品牌，在拥挤的街头美食市场中脱颖而出。由于食品卡车依赖于社交媒体营销、口碑推荐和在多个位置的可见性，一个强大的、令人难忘的名称是品牌成功的关键。该工具会生成传达您的美食身份和街头美食冒险精神的名称。' },
      {
        title: '多卡车扩展的品牌标准化',
        description: '运营多辆食品卡车或计划扩展的所有者使用该生成器来创建足够灵活的品牌名称，可以在多个位置和多种烹饪风格中保持一致。随着企业的增长，拥有一个强大的企业品牌名称比依赖于位置或个人名字更可扩展和专业。' },
      {
        title: '特殊活动和节日餐车定位',
        description: '为特定活动、季节或节日运营弹出式食品体验或临时餐车的企业家使用该生成器来建立临时但令人难忘的品牌。即使是季节性或一次性的食品卡车概念也可以受益于强大的、有趣的名称，这些名称会吸引对探索新美食体验感兴趣的食客。' },
    ],
    faqs: [
      { question: '什么样的食品卡车名称最有效？', answer: '有效的食品卡车名称应该是朗朗上口、容易记住、充满个性的。最好的名称立即传达您提供的美食类型或风格、唤起冒险或乐趣的感觉、易于发音和拼写、在社交媒体上看起来很棒、引发对话和兴奋。食品卡车的名称应该比传统餐厅的名称更俏皮和非正式，同时仍然专业和值得信赖。' },
      { question: '我的食品卡车名称应该包括我提供的食物类型吗？', answer: '这取决于您的品牌战略。包含"塔可"、"面条"或"烧烤"等词可以立即明确您的专长，这可以帮助SEO和菜单期望。但许多成功的食品卡车使用更具创意、更难忘的名称，这些名称不具体说明食物。最好的方法是在清晰和品牌创意之间取得平衡——确保您的名称足够清楚，人们理解您是食品卡车，但足够创意和独特以脱颖而出。' },
      { question: '食品卡车名称对吸引顾客有多重要？', answer: '食品卡车的名称至关重要，因为您依赖于社交媒体宣传、口碑推荐和随意的发现。一个朗朗上口、有趣的名称会引发人们的共享和讨论。它是潜在顾客首次了解您的方式，通常是通过朋友的推荐或社交媒体帖子。强大的食品卡车名称应该令人难忘、值得分享，并激发人们想尝试您的美食的渴望。' },
      { question: '如何让我的食品卡车名称与众不同？', answer: '使用双关语、文字游戏或聪明的措辞、融合文化和烹饪背景、创意使用地形或地标、与流行文化或趋势的有趣引用、不寻常的词汇组合、融入您的个人特色或故事、使用幽默和俏皮语言。最好的食品卡车名称感觉是真实、有趣且令人难忘的——它们会让人笑、思考或兴奋。' },
      { question: '我应该在食品卡车名称中包含我的个人名字吗？', answer: '这取决于您的品牌战略。使用您的名字（"Maria的塔可车"）可以建立个人联系和真实感，特别是如果您的烹饪声誉是您品牌的一部分。但这可能会在您想扩展多辆卡车或出售业务时变得复杂。更通用的企业名称提供更大的灵活性。许多成功的食品卡车平衡两者——创意企业名称，但在社交媒体上也突显厨师或所有者。' },
      { question: '食品卡车名称应该传达什么样的个性？', answer: '食品卡车名称应该反映您的品牌个性和您提供的美食体验。街头塔可卡车可能希望传达真实、俏皮和冒险。高端美食卡车可能希望传达精致和创新。家庭风格美食可能希望传达温暖和真实性。快速、休闲的美食可能希望传达有趣、便利和欲望。您的名称应该是潜在顾客能够立即理解您品牌个性的第一方式。' },
      { question: '命名食品卡车时应避免哪些错误？', answer: '避免：难以拼写或发音的名称、与竞争对手太相似的名称、可能很快过时的流行词汇或参考、包含可能冒犯的内容、与您提供的食物不匹配的名称、限制菜单灵活性的过于具体的名称、对不同文化不尊重的名称。' },
      { question: '食品卡车的名称应该与固定位置餐厅的名称不同吗？', answer: '通常是的。食品卡车名称可以也应该更非正式、更有趣、更个性化。由于食品卡车是移动的、更随意的，他们可以利用更俏皮的品牌。但他们仍然应该传达对食物质量和顾客体验的尊重。食品卡车名称通常受益于更快的、更容易分享的名称，而不是更正式或复杂的餐厅名称。' },
      { question: '我的食品卡车名称在社交媒体和在线中如何表现？', answer: '您的食品卡车名称应该在Instagram、Facebook和TikTok等社交媒体平台上看起来很好，并且容易搜索。确保名称在所有主要平台上可用作用户名。您的名称应该很有趣且可分享——您希望顾客在他们的故事中标记您，向朋友推荐您。确保名称适合您的标志和卡车品牌设计，并且可以以有吸引力的方式呈现。' },
      { question: '我的食品卡车名称应该暗示位置吗？', answer: '这取决于您的业务模式。如果您在特定位置经营或计划留在一个区域，包括邻里或地标可以帮助本地SEO。但如果您计划移动或在多个位置经营，更通用的名称提供更大的灵活性。许多食品卡车使用通用名称，但在社交媒体和营销中突显他们今天的位置。这给了他们品牌的一致性，同时保持位置灵活性。' },
    ],
    howToChoose: {
      intro: '为您的食品卡车选择完美的名称是建立令人难忘、可分享的品牌形象的关键一步——这个形象会在社交媒体上传播、在朋友之间流传、并在拥挤的街头美食市场中吸引渴望的顾客。您的企业名称将出现在卡车外观、社交媒体账户、菜单、包装上，并通过口碑推荐传播。与传统餐厅不同，食品卡车名称需要在社交媒体和对话中脱颖而出——它应该是令人难忘的、容易分享的、充满个性的。',
      steps: [
        { title: '定义您的美食身份和品牌个性', description: '在生成名称创意之前，请明确您的食品卡车的身份。您提供什么类型的美食（街头塔可、亚洲面条、美国烧烤、法国糕点）？您的目标顾客是谁（青年专业人士、美食家、家庭、节日游客、上班族寻求快餐）？您的价格点和定位是什么（经济实惠、中端、高端）？您对食品和服务的理念是什么（真实和传统、创新和创意、快速和便利、品质和工艺）？您想通过您的品牌传达什么样的个性——有趣和俏皮、精致和优雅、热烈和真实、大胆和冒险？您与其他食品卡车的区别是什么？您的故事是什么——您来自哪里，您为什么提供这种美食，是什么激发了您？' },
        { title: '使用朗朗上口、有趣和可分享的语言', description: '食品卡车名称的关键是使用朗朗上口、令人难忘和充满个性的语言。寻找包含文字游戏、双关语或聪明措辞的名称、唤起冒险或乐趣的感觉的名称、短小而容易记住的名称、在社交媒体上看起来很好的名称、引起好奇心或欲望的名称。考虑使用幽默和俏皮的语言、与流行文化的有趣引用、不寻常或令人惊讶的词汇组合、与您的烹饪风格或故事相关的双关语。最好的食品卡车名称会让人笑、思考、讨论或兴奋。' },
        { title: '清楚地传达您的美食风格，但保持创意', description: '您的名称应该帮助潜在顾客迅速了解您提供的美食类型，但不需要过于描述。虽然"Maria的真实街头塔可"明确传达美食，但"Maria的冒险餐车"也可能工作，如果配合社交媒体内容。最好的方法是平衡清晰和品牌创意——确保您的名称足够清楚，人们知道您是食品卡车和美食类型的线索，但足够创意和有趣以脱颖而出和分享。' },
        { title: '确保可记忆性和社交可分享性', description: '在依赖于社交媒体宣传和口碑推荐的市场中，您的名称必须容易记住和分享。使用以下标准测试潜在名称：人们在听一次后是否容易记住？它是否在对话中听起来不错？它在社交媒体上是否看起来很有趣？朋友会因为这个名称而向他人推荐吗？它是否激发对话或好奇心？它是否适合有趣的标志或卡车设计？人们是否会在Instagram故事中标记您因为他们喜欢这个名称？' },
        { title: '验证社交媒体和在线可用性', description: '对于食品卡车，社交媒体存在至关重要。在选择最终名称之前，确保它在Instagram、Facebook、TikTok、微博和微信等所有主要平台上可用。检查.com或.cn域名是否可用。如果可能，获取多个社交媒体句柄变体。确保该名称尚未在您的城市或地区注册为企业。进行快速Google搜索，确保没有同名的知名企业或有问题的关联。' },
        { title: '与目标顾客和社区进行测试', description: '在最终确定之前，与代表您目标顾客群体的人测试您的首选名称。询问他们该名称暗示什么类型的食物、它感觉是高端、平价还是介于两者之间、它是否令人难忘和容易记住、他们是否会因为这个名称而被吸引来尝试您的美食、他们想象这辆食品卡车会在哪里、名称是否传达您想要的个性。同样，获取您的潜在顾客基地的反馈——他们的热情和反应非常宝贵。' },
        { title: '考虑长期增长和品牌灵活性', description: '选择一个足够灵活以适应菜单演变、可能的扩展为多辆卡车，或甚至有朝一日从移动到固定位置的名称。过于具体的名称（"蚌埠街道塔可卡"或"2025年弹出式体验"）可能会在您的业务演变时变得过时。理想的食品卡车名称应该是：足够具体以传达美食身份，但足够通用以允许增长、经久不衰而不依赖于短暂的趋势或特定位置、在社交媒体上工作并在多个位置分享、既能为今天的顾客立即吸引，又为建立一个持久的、成功的食品卡车品牌奠定基础。寻找一个既俏皮和有趣，又足够聪明和灵活以支持您长期美食梦想的名称。' },
      ],
    },
    businessNameIdeas: [
      { name: '流动厨房', description: '简洁、直接，暗示优质的食物在轮子上移动。' },
      { name: '街味号', description: '传达真实的街头美食体验和冒险。' },
      { name: '美食轮旅', description: '结合美食和移动概念，暗示美食冒险。' },
      { name: '舌尖流浪', description: '浪漫化移动美食的想法，暗示每个停靠点都有新的美食发现。' },
      { name: '飞轮美食', description: '结合运动和美食，暗示快速、令人兴奋的餐饮体验。' },
      { name: '香喷轮子', description: '诱人且令人难忘，立即传达美食卡车。' },
      { name: '食尚驿站', description: '暗示时尚的、流行的美食体验和聚集点。' },
      { name: '游走美食库', description: '强调食品卡车的移动本质和美食多样性。' },
      { name: '路边美味', description: '传达正宗的街头美食和随意的诱惑。' },
      { name: '轮上风味', description: '强调移动格式和令人印象深刻的美食质量。' },
      { name: '食味驿轨', description: '暗示在各个站点停靠的美食冒险。' },
      { name: '香气四溅号', description: '有趣且诱人，唤起烹饪香气的意象。' },
      { name: '挪动私厨', description: '暗示高质量、个性化的烹饪在便利的移动格式中。' },
      { name: '流浪美食人', description: '传达冒险、真实和对美食的热情。' },
      { name: '快乐咬轮', description: '有趣和直接，暗示美食卡车的便利和乐趣。' },
      { name: '车来了美食', description: '朗朗上口，传达兴奋和期待。' },
      { name: '点燃味蕾', description: '激励性且有影响力，暗示令人难忘的美食体验。' },
      { name: '巷弄食车', description: '传达真实、本地的街头美食。' },
      { name: '咂咂嘴美食车', description: '有趣且有表现力，暗示美味。' },
      { name: '移动美食坊', description: '精品且专业，暗示在移动格式中的高质量烹饪。' },
    ],
  },

  'funny': {
    slug: 'funny',
    name: '有趣企业名称生成器',
    title: '免费 AI 有趣企业名称创意生成器',
    description: '为喜剧企业和幽默品牌生成聪慧、俏皮的名称。',
    metaDescription: '使用我们的AI驱动生成器，为您的幽默企业发现一个聪慧的名称。为喜剧企业、趣味品牌和有趣的业务创建俏皮、令人难忘的名称。免费且易于使用！',
    inputLabel: '描述您的幽默企业...',
    inputPlaceholder: '例如：一家提供喜剧表演、脱口秀和讽刺互联网内容的幽默内容公司',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['机智 & 聪慧', '愚蠢 & 俏皮', '双关 & 文字游戏', '快乐 & 轻松'],
        default: '机智 & 聪慧',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in humor-based branding and comedic business naming. Your role is to generate clever, witty, and memorable business names that convey humor, personality, and entertainment value for comedy venues, humor-focused content creators, funny merchandise brands, entertainment services, and humorous businesses.

HUMOR-BASED BUSINESS INDUSTRY CONTEXT:
The humor industry encompasses:
- Comedy clubs and live entertainment venues
- Stand-up comedians and comedy tours
- Humor content creators and digital comedians
- Funny merchandise and novelty brands
- Comedy writing and scriptwriting services
- Parody and satire content companies
- Humorous greeting cards and gifts
- Comedy podcasts and entertainment channels
- Joke/meme merchandise and apparel
- Entertainment and party services

NAME CHARACTERISTICS FOR HUMOR BUSINESSES:
1. **Witty and Clever**
   - Names should demonstrate intelligence and wordplay
   - Use puns, double meanings, or clever references
   - Appeal to humor-appreciating audiences
   - Create immediate recognition of comedic intent

2. **Silly and Playful**
   - Names should evoke laughter and joy
   - Be unafraid of absurdity or unexpected humor
   - Create lighthearted, fun brand associations
   - Encourage playful interactions

3. **Punny and Wordplay-Oriented**
   - Use linguistic playfulness and creative language
   - Combine words in surprising or clever ways
   - Play with common phrases or expectations
   - Create memorable through humor

4. **Joyful and Lighthearted**
   - Convey positive emotions and happiness
   - Create sense of fun and entertainment
   - Appeal to people seeking laughter and joy
   - Balance humor with approachability and inclusivity

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a humor business

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      {
        title: '喜剧俱乐部或现场表演场地品牌建设',
        description: '喜剧俱乐部主人和活动经营者使用有趣企业名称生成器来创建令人难忘、吸引喜剧爱好者的品牌。一个精心选择的幽默名称为场地定调，设定访客对他们将体验的娱乐和欢笑的期望。该工具会生成聪慧、俏皮且易于在口碑宣传中传播的名称。' },
      {
        title: '喜剧内容和互联网创意品牌化',
        description: '内容创作者、YouTuber、播客主持人和社交媒体喜剧演员使用该生成器来建立强大的品牌身份，使自己在拥挤的娱乐空间中脱颖而出。在数字时代，一个朗朗上口、俏皮的名称对于在社交媒体上获得关注、建立粉丝群和创造可分享的品牌内容至关重要。' },
      {
        title: '幽默商品和衣服品牌',
        description: '设计和销售幽默商品、俏皮服装或有趣礼品的企业家使用该工具来创建反映其品牌个性和幽默风格的品牌名称。对于这些业务，名称本身是营销的一部分——客户被聪慧的品牌所吸引，甚至在查看产品之前就想要穿上或分享该品牌。' },
    ],
    faqs: [
      { question: '什么样的有趣企业名称最有效？', answer: '有效的有趣企业名称应该是聪慧的、令人难忘的、令人惊讶的，或完全愚蠢的——只要它能让人发笑或微笑。最好的名称使用文字游戏、双关语、对期望的巧妙颠覆、对流行文化的聪明引用，或出乎意料的词汇组合。名称应该足够清楚，人们理解您在娱乐或幽默业务中，但足够俏皮以展示您的个性和幽默风格。' },
      { question: '我应该在有趣企业名称中包含与幽默相关的词汇吗？', answer: '这取决于您的方法。包含"喜剧"、"笑声"或"有趣"等词可以立即明确您的意图。但许多最令人难忘的幽默企业名称不直接说出"有趣"——相反，它们通过聪慧、意外或愚蠢的措辞本身表明幽默。最好的做法是让您的名称自己说明问题——如果名称足够俏皮或聪慧，人们会立即得到这是一个幽默品牌的玩笑。' },
      { question: '有趣企业名称对品牌认知有多重要？', answer: '对于幽默企业，名称非常重要——它是您品牌身份和幽默风格的核心。一个精心选择的名称立即为您的品牌设定语调、向观众传达期望的幽默类型，并使品牌可分享和令人难忘。在社交媒体和口碑宣传中，一个好名称可以做很多工作——它本身就可以很有趣，无需解释。' },
      { question: '如何让我的有趣企业名称与众不同？', answer: '使用意外的词汇组合、创意双关语或文字游戏、对熟悉短语的聪明颠覆、对流行文化或时事的聪慧引用、完全荒谬或愚蠢的措辞、融合对立概念的想法、使用不寻常的语言游戏或拼写。最好的幽默名称让人停顿、思考或笑出来。他们出乎意料但完全有意义——通常一旦得到玩笑。' },
      { question: '我应该在企业名称中包含我的个人名字吗？', answer: '如果您的个人品牌和幽默风格是企业的核心（如对于独角喜剧演员），包含您的名字可以工作。但对于试图建立超越任何一个人的品牌的企业，或如果您计划扩展或与其他演员/创作者合作，一个创意企业名称提供更大的灵活性。许多成功的幽默品牌有聪慧的企业名称，但在内容或营销中仍然突出创意负责人。' },
      { question: '有趣企业名称应该传达什么样的个性？', answer: '这取决于您的幽默风格。黑暗喜剧或讽刺可能希望传达聪慧和机智的个性。荒谬的幽默可能希望传达怪异和意外。亲切的家庭幽默可能希望传达温暖和可访问性。政治或社会讽刺可能希望传达聪慧和大胆。您的名称应该给潜在观众关于他们将遇到什么类型的幽默的线索。' },
      { question: '命名幽默企业时应避免哪些错误？', answer: '避免：对众人不清楚的名称——最好的双关语应该易于破解、可能造成冒犯或跨越界限的名称——了解您的受众、与竞争对手太相似的名称、依赖于快速过时的流行的名称、在专业背景下看起来不好的名称、太长或复杂以至于难以分享的名称、任何可能有意外负面含义的名称。' },
      { question: '我应该担心我的有趣企业名称可能会冒犯人吗？', answer: '是的，您应该在目标受众中进行平衡的思考。最好的幽默在机智和包容之间找到平衡。您可以聪慧、俏皮，甚至有点边缘，但避免名称可能使潜在客户或观众感到不被欢迎。花时间进行名称测试，看看它与代表您潜在受众的不同人群如何共鸣。' },
      { question: '我的有趣企业名称如何在社交媒体和在线中表现？', answer: '对于幽默企业，社交媒体存在至关重要。确保您的名称在Instagram、TikTok、Facebook、微博和微信等所有主要平台上可用。名称应该在社交媒体个人资料中看起来很好，在帖子和评论中听起来很有趣，并鼓励人们分享或标记您。理想的幽默企业名称应该在社交媒体上的风险和可分享性中自然工作。' },
      { question: '我的有趣企业名称可以改变或演变吗？', answer: '可以，有趣的企业通常可以随着时间的推移而进化或季节性调整其品牌信息，同时保持核心企业名称。您的核心名称可以保持不变，而您的内容或营销信息随着您的作品演变而变化。但完全改名会失去已建立的品牌认知。最好是现在选择足够聪慧和灵活的名称，可以随着您的幽默和品牌的成长而工作。' },
    ],
    howToChoose: {
      intro: '为您的幽默企业选择完美的名称是创建令人难忘、可分享的品牌形象的关键一步——这个形象在社交媒体上传播、在朋友之间传播、并为您的幽默或娱乐产品吸引观众。您的企业名称将出现在俱乐部招牌、网站、社交媒体账户、商品、播客标题和口碑推荐中。对于幽默企业，名称本身应该是品牌承诺的一部分——它应该聪慧、俏皮、令人惊讶或完全有趣。',
      steps: [
        { title: '定义您的幽默风格和品牌个性', description: '在生成名称创意之前，请明确您的幽默企业的身份。您提供什么类型的幽默（黑暗喜剧、讽刺、荒谬、家庭友好、政治、社交评论、怪异、恐怖、浪漫）？您的目标观众是谁（青年、知识精英、全家庭、特定文化或次文化社区）？您的幽默的基调是什么（聪慧和机智、无害和好玩、大胆和冒犯、荒谬和意外、温暖和亲切）？您为什么进入幽默业务——您想教育、激励、挑战或只是让人笑？您的独特幽默观点是什么——什么让您的幽默或品牌与众不同？您想通过您的品牌传达什么样的能量——欣快、愤怒、荒谬、诙谐还是聪慧？' },
        { title: '使用聪慧、俏皮和令人惊讶的语言', description: '有趣企业名称的关键是使用聪慧、俏皮和令人惊讶的语言，让人停顿、思考或发笑。寻找包含文字游戏、双关语或聪明措辞的名称、对熟悉短语或期望的聪慧颠覆的名称、出乎意料或荒谬组合的词汇的名称、对流行文化或时事的聪明引用的名称、完全愚蠢或荒谬但令人难忘的名称。考虑使用：与笑声或幽默相关的措辞（但创意方式）、令人惊讶的词汇配对、对常见短语的颠覆、与您的幽默主题相关的聪明隐喻、故意的拼写错误或创意拼写。最好的幽默名称让人获得这个笑话。' },
        { title: '清楚地传达您在娱乐或幽默业务中，但保持神秘或俏皮', description: '虽然您的名称不需要直接说"喜剧"或"幽默"，但它应该足够清楚，人们理解您在进行某种形式的娱乐或幽默。这可以通过聪慧的措辞、您的幽默风格的线索、或对您所涉及内容的微妙参考来完成。最好的方法是让您的名称自己说明问题——如果它足够俏皮或聪慧，人们会立即明白您正在做有趣的事情。' },
        { title: '确保可记忆性和社交可分享性', description: '对于幽默企业，您的名称必须容易记住和分享。使用以下标准测试潜在名称：人们在听一次后是否容易记住？它是否在对话中有趣或有趣？朋友会因为名称本身而向他人推荐吗？它在社交媒体上是否看起来很有趣？人们是否会在帖子或故事中自然标记或分享您？名称是否激发讨论或好奇心？它是否有多个解释或笑话层？' },
        { title: '验证社交媒体和在线可用性', description: '对于幽默企业，社交媒体存在至关重要。在选择最终名称之前，确保它在Instagram、TikTok、Facebook、微博和微信等所有主要平台上可用。检查.com或.cn域名是否可用。如果可能，获取多个社交媒体句柄变体（如不同的拼写或引用）。确保该名称尚未被其他幽默创作者或企业广泛使用。快速Google搜索，检查是否有任何不希望的关联。' },
        { title: '与潜在观众和同行进行测试', description: '在最终确定之前，与代表您目标观众群体的人测试您的首选名称。询问他们该名称意味着什么、他们是否认为这很有趣、他们是否理解这个笑话（如果有的话）、他们会因为这个名称而被吸引来了解更多吗、名称是否传达您想要的幽默风格。同样，获取其他幽默创作者或来自您的社区的人的反馈——他们会指出您可能错过的文化参考或潜在的问题。' },
        { title: '考虑长期相关性和增长灵活性', description: '选择一个足够灵活以随着您的事业成长和演变而工作的名称。如果您的幽默或品牌随时间变化，您的名称应该仍然工作。避免依赖特定时刻事件、非常新的流行文化参考，或者太具体的笑话，如果您扩展或改变您的内容类型，这些笑话会看起来过时或混淆。理想的有趣企业名称应该是：足够聪慧以表明您明白幽默，但足够灵活以随着您的增长而工作、经久不衰而不完全依赖于现在的流行或时事、既有即时吸引力，也有长期留存价值、足够原创以建立品牌身份，足够通用以允许服务或内容的扩展。寻找一个既聪慧和俏皮，又足够强大以支持您在娱乐和幽默中的长期野心的名称。' },
      ],
    },
    businessNameIdeas: [
      { name: '笑翻天', description: '直接、朗朗上口，传达极端的欢笑和娱乐。' },
      { name: '欢乐谷', description: '暗示一个充满欢乐、幽默和欢笑的地方。' },
      { name: '趣味工坊', description: '强调有趣内容和娱乐的创意方面。' },
      { name: '笑声工厂', description: '暗示幽默的大规模生产和可靠的娱乐。' },
      { name: '俏皮企鹅', description: '俏皮且令人难忘，使用动物参考添加个性。' },
      { name: '开心麻花', description: '华丽且充满欢乐的意象，暗示放松和欢笑。' },
      { name: '幽默密室', description: '暗示进入一个特殊的只有幽默和欢笑的地方。' },
      { name: '玩笑工作室', description: '传达双关语的创意方面和有趣内容的制作。' },
      { name: '聪慧猫头鹰', description: '聪慧且令人难忘的名称，暗示聪慧的幽默。' },
      { name: '疯笑乐园', description: '传达快乐、兴奋和放纵娱乐。' },
      { name: '漫谈天地', description: '暗示轻松的、相关的喜剧对话。' },
      { name: '逗笑工艺', description: '强调幽默创作的精心工艺。' },
      { name: '荒诞派对', description: '暗示荒谬、意外的幽默和有趣的聚集。' },
      { name: '噗呲一笑', description: '拟声词且俏皮，立即传达幽默。' },
      { name: '妙语工坊', description: '暗示聪慧的言辞和精心打造的幽默。' },
      { name: '千古笑谈', description: '暗示经久不衰的幽默和娱乐价值。' },
      { name: '快乐密码', description: '神秘和令人内向的，暗示发现幽默的秘密。' },
      { name: '爆笑频道', description: '充满活力且媒体相关，暗示内容和直播娱乐。' },
      { name: '怪趣说', description: '俏皮且独特，暗示奇异、有趣的视角。' },
      { name: '笑言笑语', description: '朗朗上口且充满魅力，传达谈话喜剧和有趣的言辞。' },
    ],
  },
  'furniture-store': {
    slug: 'furniture-store',
    name: '家具店企业名称生成器',
    title: '免费 AI 家具店企业名称创意生成器',
    description: '为家具店、家居装饰店和室内家居企业生成优雅而温馨的名称。',
    metaDescription: '用我们的免费人工智能生成器为您的家具店创意命名。为家具店、家居装饰店和室内家居企业创建优雅而温馨的名称。轻松又量身定制！',
    inputLabel: '描述您的家具店...',
    inputPlaceholder: '例如：一家专营北欧极简风格家具的现代家具展厅',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      { name: 'style', label: '名称风格', choices: ['优雅与精致', '现代与当代', '舒适与温暖', '经典与传统'], default: '优雅与精致', type: 'select' },
      { name: 'variants', label: '生成数量', choices: ['5 个名称', '10 个名称', '15 个名称'], default: '10 个名称', type: 'select' },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the home furnishings and furniture retail industry. Your role is to generate elegant, inviting business names that convey style, quality, and comfort for furniture stores, home décor shops, and interior furnishing businesses.

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
      { title: '家具零售店开业', description: '创业者开设家具店时，使用家具店名称生成器来寻找能够传达品质、风格和展厅温馨气质的名称。无论经营现代、传统还是折衷家具，生成器都能提供优雅名称来吸引家居购物者。' },
      { title: '在线家具业务品牌建设', description: '电商创业者推出在线家具店时，使用生成器创建在数字环境中运作良好的令人难忘的品牌名称。该工具帮助识别传达风格和品质的名称，同时具有SEO友好性和在线易找性。' },
      { title: '专业家具店差异化', description: '专业家具零售商（古董、定制、办公）使用生成器来开发名称，既能传达其特定关注点又能保持广泛吸引力。该工具提供能将企业定位为家具利基专家的名称。' },
    ],
    faqs: [
      { question: '什么是好的家具店企业名称？', answer: '好的家具店名称应该具有邀请性和描述性、难忘且经久不衰，并反映您的设计美学。它还应该传达品质和可信度——这对重大家具购买至关重要。' },
      { question: '我的家具店名称应该表明我的风格专长吗？', answer: '如果您有独特的风格（现代、素朴、古董），反映它可以吸引合适的顾客。但更宽泛的名称提供灵活性，因为设计趋势会演变。平衡风格表达与长期多功能性。' },
      { question: '我的家具店名称对建立信任有多重要？', answer: '非常重要。家具购买是重大投资。专业的、品质感十足的名称能建立信心，使顾客相信您的家具设计精良、时尚且值得投资。这影响客户的消费意愿。' },
      { question: '家具店命名有哪些流行趋势？', answer: '当前趋势包括以家居为中心的词汇（Haven、Nest、Abode）、舒适词汇（Cozy、Comfort、Plush）、设计术语（Studio、Design、Style）和复合优雅名称（LivingLuxe、HomeHarmony）。永恒的、优雅的名称最能持久。' },
      { question: '我应该在我的家具店中使用我自己的名字吗？', answer: '个人名字对设计家具展厅和定制家具制造商建立个人品牌认可度效果很好。对于大型零售业，非个人名字通常听起来更具成熟感，并提供更多灵活性。' },
      { question: '我如何检查我的家具店名称是否可用？', answer: '检查商业登记、域名、社交媒体账号（Instagram和Pinterest对家具很重要）、家具行业目录和商标数据库。也要搜索您市场区域内的类似家具店。' },
      { question: '什么词适用于家具店名称？', answer: '有效词汇包括家居术语（Home、Living、Nest、Haven）、舒适词汇（Comfort、Cozy、Plush）、风格词汇（Design、Style、Décor）、品质词汇（Fine、Premium、Elegant）和地点词汇（Lounge、Estate、Studio）。' },
      { question: '我的名称应该同时适用于实体和在线零售吗？', answer: '是的。大多数家具业务现在都运营两个渠道。选择在店面和网站上都适用的名称，符合数字营销，在"参观我们的展厅"和"在线购物"语境中听起来都很自然。' },
      { question: '我的家具店名称如何吸引不同预算的顾客？', answer: '"优雅"或"奢侈"等词可能会吓退预算购物者，而"折扣"可能会吓退品质寻求者。"Home Haven"或"Living Style"这样的中性名称可吸引各种预算。考虑目标市场的价格敏感度。' },
      { question: '我在为家具店命名时应该避免什么错误？', answer: '避免：听起来廉价但您销售品质产品的名称、过于时尚很快过时的名称、难以拼写的词、限制家具类别的名称、太相似于老牌连锁店的名称，以及任何未能传达家居和风格的内容。' },
    ],
    howToChoose: {
      intro: '为您的家具店选择完美名称是创建温馨品牌的关键步骤，该品牌能吸引希望用品质、风格和舒适度来布置家居的客户。您的企业名称将出现在店面、展厅、配送卡车和营销材料上——它传达了您提供的家具体验。',
      steps: [
        { title: '定义您的家具店企业身份', description: '生成名称之前，先明确您家具店的定位。考虑您主要提供什么家具风格（现代、传统、折衷、素朴），理想客户是谁（年轻专业人士、家庭、设计师、预算有限），您针对的价位和品质水平，想要创建什么购物体验，以及是否专业化或提供全方位选择。您的回答决定了您是否需要听起来奢华排他的名称、友好易接近的名称、新潮现代的名称，还是经典永恒的名称。' },
        { title: '创造温馨舒适的吸引力', description: '家具代表家居舒适。您的名称应该唤起热情欢迎的氛围、暗示舒适和宜居性、创造浏览购买的欲望、听起来愉快和温馨，并连接到家和生活。像Home、Comfort、Living和Haven这样的词汇创造了立即的家居关联。' },
        { title: '传达品质和风格', description: '家具购买需要信任。名称应该传达品质、暗示持久价值、传达您的风格美学、建立工艺信心、吸引设计意识的购买者。在温暖和专业之间平衡，以吸引品质寻求者。' },
        { title: '反映您的设计美学', description: '如果您有独特风格，考虑融入其中。对于现代/当代，考虑ModernManor或ContemporaryComfort。对于传统/经典，考虑ClassicHome或HeritageHaven。对于素朴/农舍，考虑RusticRetreat或FarmhouseFurnishings。对于奢侈/设计师，考虑LuxeLiving或DesignerDomain。对于预算/价值，考虑SmartHome或ValueVista。平衡风格具体性与库存变化的灵活性。' },
        { title: '验证全面可用性', description: '检查域名(.com首选信誉度）、社交媒体（Pinterest和Instagram对家具很重要）、商业登记（您所在州要求）、商标搜索（家具和家居商品类别）以及本地竞争（确保周边无类似店铺）的可用性。家具店受益于视觉平台，使社交媒体可用性重要。' },
        { title: '与目标顾客测试', description: '最终确定前，与代表理想客户的人群进行测试。询问这个名称是否让人想购买家具、您期望什么风格和品质、它对重大购买是否感觉值得信任、您是否会向朋友推荐这家店、名称是否易于记忆和拼写。他们的反馈显示您的名称是否创造了正确的家居和品质印象。' },
        { title: '考虑长期品牌建设', description: '选择容纳未来扩展的名称：添加家具类别、开设额外地点、推出电商、扩展到家居装饰和配件、建立公认的地区品牌。理想的家具店名称是温馨的、品质专注的、难忘的，并为您的品牌增长定位，同时完美捕捉您提供的家居舒适体验。' },
      ],
    },
    businessNameIdeas: [
      { name: '雅居', description: '优雅的家具适合高档家居。' },
      { name: '舒心角', description: '以舒适温暖的家具而闻名。' },
      { name: '设计殿', description: '展示美丽家具设计的殿堂。' },
      { name: '奢华厅', description: '奢华家具供豪华休闲。' },
      { name: '梦幻家居', description: '美丽家居用品的梦幻收藏。' },
      { name: '绒绒宫', description: '柔软舒适家具的宫殿。' },
      { name: '舒适城堡', description: '每件家具都有城堡般的舒适。' },
      { name: '潮流阳台', description: '现代空间的潮流家具。' },
      { name: '雅致空间', description: '雅致家具选择的圣地。' },
      { name: '装饰领地', description: '装饰性家具和配件的领地。' },
      { name: '豪华阁楼', description: '阁楼生活的豪华家具。' },
      { name: '时尚别墅', description: '别墅风格的时尚优雅家具。' },
      { name: '精致城堡', description: '精致家具拥有城堡优雅。' },
      { name: '完美厅房', description: '完美客厅的精致家具。' },
      { name: '尊贵居所', description: '住宅优雅的尊贵家具。' },
      { name: '和谐之家', description: '和谐家具创造家园般的居所。' },
      { name: '富贵绿洲', description: '富贵家具选择的绿洲。' },
      { name: '优雅林地', description: '优雅精致的家具林地。' },
      { name: '宁静领地', description: '创造宁静生活的家具。' },
      { name: '典雅家苑', description: '典雅家居家具的苑区。' },
    ],
  },
  'game': {
    slug: 'game',
    name: '游戏企业名称生成器',
    title: '免费 AI 游戏企业名称创意生成器',
    description: '为游戏工作室、游戏公司和互动娱乐企业生成引人注目、难忘的名称。',
    metaDescription: '用人工智能生成的名称为您的游戏事业升级。为游戏工作室、游戏公司和互动娱乐创建引人注目、难忘的名称。快速、免费且量身定制！',
    inputLabel: '描述您的游戏企业...',
    inputPlaceholder: '例如：一家开发故事驱动RPG游戏且拥有独特艺术风格的独立游戏工作室',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      { name: 'style', label: '名称风格', choices: ['史诗与冒险', '科技与数字', '趣味与欢乐', '专业与工作室'], default: '史诗与冒险', type: 'select' },
      { name: 'variants', label: '生成数量', choices: ['5 个名称', '10 个名称', '15 个名称'], default: '10 个名称', type: 'select' },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the gaming and interactive entertainment industry. Your role is to generate captivating, memorable business names that convey excitement, creativity, and immersive experiences for game development studios, gaming companies, and interactive entertainment businesses.

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
      { title: '游戏开发工作室成立', description: '游戏开发者成立工作室时使用游戏企业名称生成器来寻找能捕捉他们游戏兴奋和创意的名称。无论开发动作、策略还是休闲游戏，生成器都提供引人注目的名称与游戏玩家产生共鸣。' },
      { title: '游戏咖啡厅或娱乐场所', description: '创业者开设游戏咖啡厅或娱乐场所时使用生成器创建吸引玩家的难忘名称。该工具提供传达玩家可期望的有趣社交游戏体验的名称。' },
      { title: '独立游戏工作室品牌建设', description: '独立游戏开发者启动自己的工作室时使用生成器开发与众不同的品牌名称，在拥挤的独立游戏市场中脱颖而出。该工具帮助识别与游戏玩家建立认可和可信度的名称。' },
    ],
    faqs: [
      { question: '什么是好的游戏企业名称？', answer: '好的游戏企业名称应该引人注目且难忘、反映您的游戏类型或风格、独特且可品牌化，以及吸引游戏文化。它在游戏社区中应该听起来很酷且可信。' },
      { question: '我的游戏工作室名称应该表明我开发的游戏类型吗？', answer: '类型提示可以帮助吸引合适的受众，但许多成功的工作室使用不含具体类型参考的暗示性名称。考虑您是想专业化还是对各种游戏类型保持灵活性。' },
      { question: '我的游戏企业名称对建立粉丝群有多重要？', answer: '非常重要。玩家会对信任的工作室产生强大的依恋。难忘的、听起来酷的名称帮助建立品牌认可和忠诚度。您的名称将出现在游戏标题、商品和社区内容中。' },
      { question: '游戏企业命名有哪些流行趋势？', answer: '当前趋势包括奇幻词汇（Realm、Kingdom、Quest）、科技术语（Pixel、Digital、Virtual）、复合名称（GameForge、PixelPerfect）和社区专注词汇（Guild、Collective、Studio）。独特难忘的名称最能产生共鸣。' },
      { question: '我应该在我的游戏工作室中使用我自己的名字吗？', answer: '个人名字在游戏中不太常见，但可用于建立个人品牌的独立开发者。"John\'s Games"这样的工作室名称很少见——创意暗示性名称在游戏文化中往往更有效。' },
      { question: '我如何检查我的游戏企业名称是否可用？', answer: '检查Steam、应用商店、游戏目录、社交媒体（Twitch、Discord、Twitter）、域名和商标数据库。也要搜索游戏新闻网站和评价平台的类似名称。' },
      { question: '什么词适用于游戏企业名称？', answer: '有效词汇包括游戏术语（Quest、Level、Pixel、Arcade）、冒险词汇（Epic、Hero、Journey、Battle）、科技词汇（Digital、Virtual、Cyber）、奇幻词汇（Realm、Kingdom、Magic）和成就词汇（Victory、Champion、Elite）。' },
      { question: '我的名称应该吸引休闲玩家还是硬核玩家？', answer: '考虑您的目标受众。"Elite"或"Pro"等词吸引硬核玩家，而"Fun"或"Play"感觉更休闲。使您的名称语调与主要受众匹配。' },
      { question: '我的游戏企业名称如何用于商品？', answer: '选择在商品上看起来不错的名称——t恤、海报、配件。短而视觉独特的名称最有效。考虑您的名称作为徽标和产品上的外观。' },
      { question: '我在为游戏企业命名时应该避免什么错误？', answer: '避免：太相似于已建立游戏公司的名称、过于通用不脱颖而出的名称、限制游戏类型的名称、难以拼写的词、对玩家来说听起来不酷的名称，以及任何缺乏游戏玩家期望的兴奋感的内容。' },
    ],
    howToChoose: {
      intro: '为您的游戏企业选择完美名称是创建在竞争激烈的互动娱乐市场中与游戏玩家产生共鸣并脱颖而出品牌的关键步骤。您的企业名称将出现在游戏标题、商店、社交媒体和商品上——它是游戏玩家如何发现和记住您的公司。',
      steps: [
        { title: '定义您的游戏企业身份', description: '生成名称之前，先明确您游戏企业的定位。考虑您将创建或提供什么类型游戏（动作、策略、休闲、独立），目标游戏玩家受众是谁（硬核、休闲、手机、主机），您的游戏方法有什么独特之处，您目标的游戏平台，以及工作室的个性和文化。您的回答决定了您是否需要听起来宏大戏剧化的名称、有趣休闲的名称、科技创新的名称，还是艺术独立的名称。' },
        { title: '创造引人注目难忘的吸引力', description: '游戏是关于兴奋和参与。名称应该立即抓住注意力、唤起游戏的兴奋、在玩家中难忘、听起来很酷且可信，并创造探索您的游戏的欲望。像Quest、Epic、Pixel和Realm这样的词汇创造了立即的游戏关联。' },
        { title: '与游戏文化连接', description: '游戏有其自己的文化和词汇。使用玩家欣赏的词汇、对游戏社区听起来真实、与游戏身份产生共鸣、避免公司或通用声音、与玩家建立信誉。您的名称应该感觉它属于游戏世界。' },
        { title: '反映您的游戏关注', description: '如果您有独特专长，考虑融入其中。对于动作/冒险，考虑EpicAdventures或HeroForge。对于策略，考虑StrategyRealm或TacticalGames。对于休闲/手机，考虑PlayfulPixels或FunFactory。对于独立/艺术，考虑DreamworldStudios或ArtisticArcade。对于VR/沉浸，考虑VirtualVentures或ImmersiveRealms。平衡具体性与扩展到其他类型的余地。' },
        { title: '验证全面可用性', description: '检查游戏平台（Steam、应用商店、主机商店）、社交媒体（Twitch、Discord、Twitter、YouTube）、域名（用于工作室网站）、商标搜索（游戏和娱乐类别）以及类似工作室（避免与现有游戏公司混淆）的可用性。游戏企业需要在多个平台上有强大存在。' },
        { title: '与玩家测试', description: '最终确定前，与代表目标玩家的人群进行测试。询问这个名称是否听起来像一家很酷的游戏公司、您会期望什么类型的游戏、您是否会在社交媒体上关注这家工作室、听一次后是否难忘，以及它是否让您想要查看他们的游戏。他们的反馈显示您的名称是否具有必要的游戏吸引力。' },
        { title: '考虑跨游戏品牌建设', description: '选择容纳未来扩展的名称：多个游戏标题和特许经营权、商品和品牌产品、内容创作和流媒体、社区建设和活动，以及扩展到不同游戏平台。理想的游戏企业名称是引人注目的、难忘的、文化可信的，并为您的品牌成功定位，同时完美捕捉您创建的令人兴奋的游戏体验。' },
      ],
    },
    businessNameIdeas: [
      { name: '奇幻融合', description: '将奇幻元素融合到不可思议的游戏体验中。' },
      { name: '嬉戏乐园', description: '嬉戏和游戏享受的乐园。' },
      { name: '互动岛屿', description: '互动游戏体验的岛屿。' },
      { name: '虚拟冒险', description: '传送玩家的虚拟游戏冒险。' },
      { name: '像素巅峰', description: '处于像素游戏卓越的巅峰。' },
      { name: '策略圣地', description: '策略游戏爱好者的圣地。' },
      { name: '冒险街机', description: '冒险游戏体验的街机。' },
      { name: '游戏星系', description: '多样游戏选项的星系。' },
      { name: '趣味融合', description: '将趣味融合到每个游戏体验中。' },
      { name: '史诗元素', description: '拥有史诗元素的游戏和体验。' },
      { name: '大胆动态', description: '大胆的游戏动态刺激玩家。' },
      { name: '像素游乐场', description: '像素完美游戏的游乐场。' },
      { name: '任务象限', description: '任务和游戏冒险的象限。' },
      { name: '游戏林地', description: '生长游戏体验的林地。' },
      { name: '刺激边界', description: '推向游戏中刺激的边界。' },
      { name: '虚拟景观', description: '虚拟游戏体验的景观。' },
      { name: '强大游戏', description: '游戏玩家的强大游戏体验。' },
      { name: '趣味庆典', description: '有趣游戏时刻的庆典。' },
      { name: '冒险竞技场', description: '冒险游戏卓越的竞技场。' },
      { name: '史诗帝国', description: '史诗游戏体验的帝国。' },
    ],
  },
  'graphic-design': {
    slug: 'graphic-design',
    name: '平面设计企业名称生成器',
    title: '免费 AI 平面设计企业名称创意生成器',
    description: '为设计工作室、代理公司和自由职业设计师生成创意、专业的名称。',
    metaDescription: '用吸引人的平面设计企业名称设计您的成功。为设计工作室、代理公司和自由职业设计师创建创意、专业的名称。我们的人工智能工具免费提供！',
    inputLabel: '描述您的平面设计企业...',
    inputPlaceholder: '例如：专门从事品牌认知和包装设计的精品设计工作室',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      { name: 'style', label: '名称风格', choices: ['创意与艺术', '专业与企业', '现代与极简', '大胆与创新'], default: '创意与艺术', type: 'select' },
      { name: 'variants', label: '生成数量', choices: ['5 个名称', '10 个名称', '15 个名称'], default: '10 个名称', type: 'select' },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the creative and design services industry. Your role is to generate creative, professional business names that convey artistic expertise, innovation, and visual excellence for graphic design studios, creative agencies, and design freelancers.

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
      { title: '平面设计工作室开业', description: '设计师启动自己的工作室时使用平面设计企业名称生成器来寻找传达创意和专业的名称。生成器提供的名称吸引寻求优质设计工作的客户，同时展示工作室的创意方法。' },
      { title: '自由职业设计师品牌建设', description: '建立个人品牌的自由平面设计师使用生成器创建难忘的商业名称，将其定位为创意专业人士。该工具帮助识别在作品集、名片和客户演示中有效的名称。' },
      { title: '创意代理公司发展', description: '建立创意代理公司的创业者使用生成器开发传达创意和商业能力的名称。该工具提供吸引企业客户同时保持艺术可信度的名称。' },
    ],
    faqs: [
      { question: '什么是好的平面设计企业名称？', answer: '好的平面设计企业名称应该创意原创、展示您的艺术思维。它也应该专业可信、通用永恒、具有视觉美感吸引力——本质上体现了客户在设计师身上想要的品质。' },
      { question: '我的设计企业名称应该包含"设计"或"创意"吗？', answer: '包含与设计相关的词汇立即阐明您的业务类型，有助于搜索易用性和第一印象。但有创意的抽象名称如果能有效传达您的艺术敏感性也能奏效。' },
      { question: '我的设计企业名称对吸引客户有多重要？', answer: '非常重要。您的企业名称通常是客户看到的您创意判断的第一个例子。精心制作的名称展示了他们可从您的设计工作中期望的创意和专业性。' },
      { question: '平面设计企业命名有哪些流行趋势？', answer: '当前趋势包括复合创意词汇（PixelCraft、DesignLab）、单个暗示词汇（Apex、Nova、Ember）、工作室/实验室术语和反映设计美学的极简干净名称。永恒、专业的名称往往经得起时间考验。' },
      { question: '我应该在我的设计企业中使用我自己的名字吗？', answer: '个人名字对建立个人声誉的自由职业者和设计师效果很好。像"Jane Smith Design"这样的名称可建立个人品牌认可。但工作室名称提供更多增长和团队扩展的灵活性。' },
      { question: '我如何检查我的设计企业名称是否可用？', answer: '检查域名（.com和设计特定域名）、社交媒体账号（Behance、Dribbble、Instagram）、商业登记和商标数据库。也要搜索设计目录和作品集平台。' },
      { question: '什么词适用于平面设计企业名称？', answer: '有效词汇包括创意术语（Design、Create、Artistry、Craft）、视觉术语（Pixel、Vector、Palette、Hue）、专业术语（Studio、Lab、Agency、Works）和品质术语（Premier、Elite、Master、Apex）。' },
      { question: '我的名称应该反映我的设计专长吗？', answer: '如果您专业化（网页设计、品牌身份、包装），反映它可以吸引特定客户。但更宽泛的名称提供灵活性随着服务演变。平衡专业化传达与增长潜力。' },
      { question: '我的设计企业名称如何展现创意？', answer: '创意名称使用意想不到的组合、聪明文字游戏或暗示性意象。避免可能描述任何企业的通用术语。您的名称应该暗示您为客户项目带来的创意思维。' },
      { question: '我在为设计企业命名时应该避免什么错误？', answer: '避免：未展示创意的通用名称、过于时尚很快过时的术语、难以拼写或发音的名称、限制服务扩展的名称，以及感觉对商业客户过于随意或对创意吸引力过于企业的名称。' },
    ],
    howToChoose: {
      intro: '为您的平面设计企业选择完美名称是创建吸引寻求创意卓越客户品牌的关键步骤。您的企业名称将出现在作品集、名片、建议和客户演示中——它是您创意判断的首次展示。',
      steps: [
        { title: '定义您的设计企业身份', description: '生成名称之前，先明确您设计企业的定位。考虑您主要提供什么设计服务（品牌、网页、印刷、动态）、理想客户是谁（初创公司、公司、代理、个人）、您的设计方法有什么独特之处、您的设计美学和哲学，以及您是建立个人实践还是可扩展工作室。您的回答决定了您是否需要听起来艺术精品的名称、企业专业的名称、创新尖端的名称，还是个人易接近的名称。' },
        { title: '平衡创意与专业', description: '设计企业需要两种品质。名称应该展示创意思维但也建立客户信心、展示设计敏感性、对商业语境保持适当、跨不同客户类型有效。避免听起来太创意显得不专业的名称，或太企业显得不创意的名称。' },
        { title: '创造视觉美学吸引力', description: '您的名称应该唤起设计品质。暗示视觉美和美学、听起来悦耳、看起来得体、在您自己的品牌中有效、连接到视觉传达。考虑您的名称在徽标和作品集中的外观。' },
        { title: '反映您的设计专注', description: '如果您有专长，考虑融入其中。对于品牌/身份，考虑BrandForge或IdentityInk。对于网页/数字，考虑PixelCraft或DigitalCanvas。对于印刷/包装，考虑PrintPerfect或PackageDesignCo。对于动态/动画，考虑MotionMakers或AnimateStudio。对于通用，考虑CreativeStudio或DesignWorks。平衡具体性与服务演变的灵活性。' },
        { title: '验证全面可用性', description: '检查域名（.com和设计特定域名如.design、.studio）、作品集平台（Behance、Dribbble可用性）、社交媒体（Instagram、Pinterest、LinkedIn）、商业登记（您所在州要求）和商标搜索（设计和创意服务类别）的可用性。设计师需要强大的视觉平台存在。' },
        { title: '与潜在客户测试', description: '最终确定前，与代表目标客户的人群进行测试。询问这个名称是否听起来像高品质设计工作室、您是否会为设计工作雇用这家公司、它是否感觉创意和专业、听一次后是否难忘，以及您会期望什么类型的设计工作。他们的反馈显示您的名称是否创造了正确的创意和专业印象。' },
        { title: '考虑品牌增长', description: '选择容纳未来扩展的名称：添加新设计服务、增长团队和能力、扩展到相关创意服务、建立公认创意品牌、以及潜在代理增长或合作。理想的平面设计企业名称是创意的、专业的、难忘的，并为您的品牌增长定位，同时完美展现您提供的设计卓越。' },
      ],
    },
    businessNameIdeas: [
      { name: '像素先锋', description: '平面设计创新的先驱。' },
      { name: '设计梦景', description: '设计梦想成为现实的地方。' },
      { name: '创意小湾', description: '创意想法兴盛的小湾。' },
      { name: '插画岛', description: '插画和设计卓越的中心。' },
      { name: '艺术拱门', description: '展示全面设计艺术的拱门。' },
      { name: '远景之旅', description: '进入创意设计远景的旅程。' },
      { name: '美学方舟', description: '美丽美学设计的圣地。' },
      { name: '调色乐园', description: '色彩与卓越设计相遇的地方。' },
      { name: '草图圣地', description: '草图和设计爱好者的圣地。' },
      { name: '图形林地', description: '兴盛平面设计卓越的林地。' },
      { name: '渲染礁', description: '丰富的渲染和设计资源。' },
      { name: '矢量金库', description: '矢量设计珍宝的金库。' },
      { name: '想象印象', description: '将想象转化为设计印象。' },
      { name: '格式锻造', description: '用专业知识锻造设计格式。' },
      { name: '创意摇篮', description: '设计想法的培育环境。' },
      { name: '色彩港湾', description: '充满彩色设计概念的港湾。' },
      { name: '设计晨露', description: '清新早晨启发的设计工作。' },
      { name: '远景景观', description: '设计可能性的广阔景观。' },
      { name: '像素客厅', description: '设计爱好者的聚会场所。' },
      { name: '工匠巅峰', description: '技艺娴熟工匠设计的巅峰。' },
    ],
  },
  'hair': {
    slug: 'hair',
    name: '美发企业名称生成器',
    title: '免费 AI 美发企业名称创意生成器',
    description: '为沙龙、发型师和头发产品业务生成时尚、难忘的名称。',
    metaDescription: '不再有令人头疼的企业名称！我们的人工智能生成器为沙龙、发型师和头发产品业务创造独特时尚的名称。免费、创意且难忘！',
    inputLabel: '描述您的美发企业...',
    inputPlaceholder: '例如：专门从事染色护理和新娘造型的豪华美发沙龙',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      { name: 'style', label: '名称风格', choices: ['魅力与豪华', '潮流与现代', '自然与有机', '经典与优雅'], default: '魅力与豪华', type: 'select' },
      { name: 'variants', label: '生成数量', choices: ['5 个名称', '10 个名称', '15 个名称'], default: '10 个名称', type: 'select' },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the beauty and hair care industry. Your role is to generate stylish, memorable business names that convey expertise, beauty, and transformation for hair salons, stylists, and hair product businesses.

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
      { title: '美发沙龙开业', description: '创业者开设美发沙龙时使用美发企业名称生成器来寻找传达风格、专业知识和客户可期望的转变体验的名称。无论启动精品沙龙还是全面工作室，生成器都提供吸引时尚意识客户的出众名称。' },
      { title: '独立发型师品牌建设', description: '建立自己客户基础的独立发型师使用生成器创建难忘的品牌名称，将自己定位为技艺娴熟的专业人士。该工具帮助识别在名片、社交媒体和沙龙工作室招牌中有效的名称。' },
      { title: '头发产品线开发', description: '创建头发护理产品线的创业者使用生成器开发传达品质和美容效果的品牌名称。该工具提供适合包装、零售和美容营销活动的名称。' },
    ],
    faqs: [
      { question: '什么是好的美发企业名称？', answer: '好的美发企业名称应该潮流时尚、难忘出众，并反映您的美发专业知识。它应该唤起美和变换——头发服务为客户提供的核心。' },
      { question: '我的美发沙龙名称应该包含"沙龙"或"头发"吗？', answer: '包含头发相关词汇可以帮助搜索可见性和即时清晰。但许多成功的沙龙使用不含明确头发参考的创意名称。考虑目标市场以及清晰或创意对您更重要。' },
      { question: '我的美发企业名称对吸引客户有多重要？', answer: '非常重要。头发服务是个人和时尚专注的。您的名称创造对体验、风格水平和客户可期望的专业知识的预期。时尚名称吸引时尚意识的客户。' },
      { question: '美发企业命名有哪些流行趋势？', answer: '当前趋势包括纹理词汇（Glossy、Silk、Lustrous）、头发特定术语（Tress、Locks、Mane）、魅力词汇（Glam、Luxe、Chic）和变换词汇（Renew、Transform、Elevate）。短难忘名称在社交媒体上表现良好。' },
      { question: '我应该在我的美发企业中使用我自己的名字吗？', answer: '个人名字在头发产业中很常见，建立个人声誉认可。"Salon by Sarah"或"Jennifer\'s Hair Studio"可创建个人连接。但非个人名称提供销售或扩展的灵活性。' },
      { question: '我如何检查我的美发企业名称是否可用？', answer: '检查商业登记、域名、社交媒体账号（Instagram对美发企业至关重要）、沙龙目录和商标数据库。也要搜索您地区类似的沙龙名称。' },
      { question: '什么词适用于美发企业名称？', answer: '有效词汇包括头发术语（Locks、Tress、Strand、Mane）、美容词汇（Glamour、Radiant、Gorgeous）、纹理词汇（Silk、Gloss、Lustrous）、风格词汇（Chic、Vogue、Elegant）和变换词汇（Transform、Renew、Perfect）。' },
      { question: '我的名称应该反映我的美发专长吗？', answer: '如果您专业化（染色、延长、自然头发），反映它可以吸引您的目标市场。但更宽泛的名称提供灵活性添加服务。平衡专业化传达与增长潜力。' },
      { question: '我的美发企业名称如何吸引我的目标客户？', answer: '考虑您理想客户的自我形象。奢侈寻求者对优雅名称有反应。潮流客户喜欢时尚前卫名称。自然头发客户欣赏真实赋权名称。使您的名称与目标客户身份匹配。' },
      { question: '我在为美发企业命名时应该避免什么错误？', answer: '避免：听起来过时而非时尚的名称、难以拼写的词、太相似于本地竞争对手的名称、限制服务扩展的名称、过于通用的沙龙名称，以及任何未传达风格和专业知识的内容。' },
    ],
    howToChoose: {
      intro: '为您的美发企业选择完美名称是创建时尚品牌的关键步骤，该品牌吸引寻求头发变换和美容增强的客户。您的企业名称将出现在沙龙招牌、社交媒体、名片和营销材料上——它传达了客户可期望的时尚体验。',
      steps: [
        { title: '定义您的美发企业身份', description: '生成名称之前，先明确您美发企业的定位。考虑您主要提供什么头发服务（剪裁、染色、造型、特色）、理想客户是谁（时尚前卫、经典、自然头发、多样化），您的头发方法有什么独特之处，想要创建什么沙龙氛围，以及针对什么价位和风格水平。您的回答决定了您是否需要听起来奢华排他的名称、潮流前卫的名称、自然有机的名称，还是经典优雅的名称。' },
        { title: '体现风格和美', description: '美发业务销售变换和美。名称应该唤起现代风格、暗示您提供的美增强、听起来时尚当下、创造变换欲望、连接到通过头发的自我表达。像Glam、Luxe、Style和Radiant这样的词汇创造了立即的美关联。' },
        { title: '创造难忘出众的吸引力', description: '在竞争市场中，脱颖而出很重要。名称应该难忘且出众、易于记忆和推荐、创造强有力的首印象、对口碑推荐有效、从通用沙龙名称中脱颖而出。测试名称的难忘性——听一次后人们能回忆它吗？' },
        { title: '反映您的美发专业知识', description: '如果您有独特专长，考虑融入其中。对于染色专家，考虑ColorCraft或ChromaStudio。对于自然/有机，考虑NaturalTress或OrganicGlow。对于延长，考虑LuxeLength或ExtensionElegance。对于卷/纹理，考虑CurlCove或TextureStudio。对于新娘，考虑BridalBeauty或WeddingTresses。平衡专业化指示与服务扩展的余地。' },
        { title: '验证全面可用性', description: '检查域名（用于网站）、社交媒体（Instagram对美发企业至关重要）、沙龙目录（Yelp、StyleSeat等）、商业登记（您所在州要求）和商标搜索（美容和沙龙类别）的可用性。美发企业大量依赖视觉社交媒体，使Instagram可用性至关重要。' },
        { title: '与目标客户测试', description: '最终确定前，与代表理想客户的人群进行测试。询问这个名称是否听起来像时尚沙龙、基于这个名称您是否会预约、您会期望什么价位、它是否易于记忆和告诉朋友、它是否感觉像您的风格。他们的反馈显示您的名称是否创造了正确的风格印象。' },
        { title: '考虑品牌增长', description: '选择容纳未来扩展的名称：添加新头发服务、开设额外地点、推出产品线、建立教育和培训、创建公认美容品牌。理想的美发企业名称是时尚的、难忘的、专业知识专注的，并为您的品牌增长定位，同时完美捕捉您提供的美变换体验。' },
      ],
    },
    businessNameIdeas: [
      { name: '剪刀光彩', description: '给顾客闪亮专业剪裁的风格。' },
      { name: '秀发珍宝', description: '将头发视为应得珍视的珍宝。' },
      { name: '发束奢华', description: '美丽发束的奢华护理。' },
      { name: '光泽林地', description: '以提供光泽华丽头发而闻名。' },
      { name: '风格秀发', description: '以独特吸引方式造型秀发。' },
      { name: '卷发小湾', description: '专科美丽卷发造型。' },
      { name: '丝质圣地', description: '实现丝质光滑头发的圣地。' },
      { name: '璀璨长发公主', description: '将客户变成璀璨长发女神。' },
      { name: '发丝矩阵', description: '全面头发服务的矩阵。' },
      { name: '天鹅绒藤蔓', description: '天鹅绒光滑美丽的头发造型。' },
      { name: '精致辫子', description: '优雅精致的辫子发型。' },
      { name: '优雅回响', description: '每个发型都回响优雅。' },
      { name: '秀发球体', description: '美丽头发造型的球体。' },
      { name: '光泽秀发', description: '提供有光泽闪亮的秀发。' },
      { name: '优雅光彩', description: '用优雅传递光泽头发。' },
      { name: '凶悍齐肩', description: '凶悍时尚的齐肩发型。' },
      { name: '大胆编织', description: '大胆美丽的编织发型。' },
      { name: '时尚闪烁', description: '拥有美丽闪烁的时尚头发。' },
      { name: '壮丽秀发', description: '将头发变成壮丽秀发。' },
      { name: '天堂亮点', description: '天堂级的头发亮点护理。' },
    ],
  },
  'health': {
    slug: 'health',
    name: '健康企业名称生成器',
    title: '免费 AI 健康企业名称创意生成器',
    description: '为健康中心、医疗实践和医疗服务生成可信、富有同情心的名称。',
    metaDescription: '用完美的名称激励您的健康企业——从我们的免费人工智能生成器。为健康中心、医疗实践和医疗服务创建可信富有同情心的名称。现在试试！',
    inputLabel: '描述您的健康企业...',
    inputPlaceholder: '例如：提供综合健康服务和营养咨询的整体健康中心',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      { name: 'style', label: '名称风格', choices: ['专业与临床', '整体与健康', '关怀与同情', '现代与创新'], default: '专业与临床', type: 'select' },
      { name: 'variants', label: '生成数量', choices: ['5 个名称', '10 个名称', '15 个名称'], default: '10 个名称', type: 'select' },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in the health and wellness industry. Your role is to generate credible, compassionate business names that convey expertise, care, and commitment to wellbeing for health practices, wellness centers, and healthcare service businesses.

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
      { title: '健康中心开业', description: '创业者开设健康中心时使用健康企业名称生成器来寻找传达全面健康服务的名称。无论提供综合健康、健身还是整体服务，生成器都提供吸引健康意识客户的可信名称。' },
      { title: '医疗实践品牌建设', description: '医疗从业者启动自己的实践时使用生成器创建传达专业知识和同情的专业名称。该工具帮助识别适合医疗语境同时保持温暖易接近的名称。' },
      { title: '健康教练业务发展', description: '健康教练和健康顾问使用生成器开发传达对客户福祉承诺的名称。该工具提供跨教练、咨询和教育健康服务有效的名称。' },
    ],
    faqs: [
      { question: '什么是好的健康企业名称？', answer: '好的健康企业名称应该可信富有同情心、清晰简洁，并反映您的健康专科。它必须建立信任——对于人们做重要健康决定的企业至关重要。' },
      { question: '我的健康企业名称应该包含"健康"或"健康"吗？', answer: '包含健康相关词汇立即阐明您的业务类型并帮助搜索可见性。对于医疗实践，由于健康服务信任敏感性质，清晰通常比创意更重要。' },
      { question: '我的健康企业名称对建立患者信任有多重要？', answer: '极为重要。健康决定需要信任。您的名称应该传达专业知识、专业知识和关怀。可信名称帮助患者有信心为他们的健康需求选择您的服务。' },
      { question: '健康企业命名有哪些流行趋势？', answer: '当前趋势包括健康词汇（Wellness、Wellbeing、Thrive）、活力词汇（Vital、Life、Flourish）、整体术语（Whole、Balance、Harmony）和关怀专注词汇（Nurture、Support、Heal）。专业可信名称表现最好。' },
      { question: '我应该在我的健康实践中使用我自己的名字吗？', answer: '个人名字在医疗中很常见并建立从业者认可。"Dr. Smith\'s Wellness"或"Johnson Health"创建个人信任。但对于计划扩展超过一个从业者的企业，更宽泛名称提供更多灵活性。' },
      { question: '我如何检查我的健康企业名称是否可用？', answer: '检查商业登记、域名、医疗目录、专业执照要求、社交媒体账号和商标数据库。也要验证您专业领域内现有实践没有冲突。' },
      { question: '什么词适用于健康企业名称？', answer: '有效词汇包括健康术语（Health、Wellness、Healing、Care）、活力词汇（Vital、Life、Thrive、Flourish）、关怀词汇（Compassion、Nurture、Support）、专业术语（Center、Clinic、Partners）和积极成果（Optimal、Better、Renewed）。' },
      { question: '我的名称应该反映我的健康专科吗？', answer: '如果您专业化（心理健康、物理治疗、营养），反映它可以吸引合适的患者。但更宽泛的名称提供灵活性如果您扩展服务。平衡专科清晰与增长潜力。' },
      { question: '健康企业名称有监管考量吗？', answer: '是的。某些医疗专业有命名规定。与您的执照委员会检查要求或限制。避免可能误导关于资格或服务的名称。' },
      { question: '我在为健康企业命名时应该避免什么错误？', answer: '避免：听起来不专业或不可信的名称、可能困惑患者的过度创意名称、可能误导关于服务或资格的名称、难以拼写的医学术语，以及任何未传达专业知识和关怀的内容。' },
    ],
    howToChoose: {
      intro: '为您的健康企业选择完美名称是创建值得信赖品牌的关键步骤，帮助人们对其健康做出自信决定。您的企业名称将出现在招牌、转诊沟通和患者材料上——它从根本上影响人们如何看待您的医疗服务。',
      steps: [
        { title: '定义您的健康企业身份', description: '生成名称之前，先明确您健康企业的定位。考虑您将提供什么健康服务（医疗、健康、心理健康、专业）、理想患者/客户是谁（人口统计、健康需求、偏好），您的健康方法有什么独特之处，想要创建什么氛围，以及您的临床与健康关注程度。您的回答决定了您是否需要听起来临床专业的名称、温暖整体的名称、专业专家的名称，还是易接近社区专注的名称。' },
        { title: '建立信任和可信度', description: '健康决定需要信心。名称应该听起来可信专家、适当传达资格、建立健康能力信心、暗示可靠专业服务、适合医疗语境。平衡温暖与专业——人们想要关怀的专家。' },
        { title: '传达同情和关怀', description: '健康服务是个人的。名称应该暗示富有同情心的关怀、传达患者专注方法、感觉热情支持、暗示治疗关系、建立专业知识旁的情感舒适。像Care、Wellness和Nurture这样的词汇为可信名称增添温暖。' },
        { title: '反映您的健康专科', description: '如果您有具体关注，考虑融入其中。对于心理健康，考虑MindWellness或ClearMindCare。对于物理治疗，考虑MoveWell或RecoveryRoad。对于整体，考虑WholeHealth或IntegrativeWellness。对于营养，考虑NourishHealth或VitalNutrition。对于通用健康，考虑WellnessWorks或ThriveHealth。平衡专科清晰与潜在服务扩展。' },
        { title: '验证全面可用性', description: '检查域名（用于实践网站）、医疗目录（Healthgrades、Zocdoc等）、专业执照（任何命名要求）、商业登记（您所在州要求）和商标搜索（医疗类别）的可用性。医疗企业需要专业在线存在和目录列表。' },
        { title: '与潜在患者测试', description: '最终确定前，与代表目标患者的人群进行测试。询问这个名称是否听起来像可信健康提供者、您是否会对这个实践的专业知识有信心、它是否感觉关怀支持、是否易于记忆和推荐，以及您会期望什么健康服务。他们的反馈显示您的名称是否创造了正确的信任和关怀印象。' },
        { title: '考虑专业增长', description: '选择容纳未来扩展的名称：添加新健康服务、增长从业者团队、开设额外地点、扩展到相关健康服务、建立公认健康品牌。理想的健康企业名称是可信的、富有同情心的、清晰的，并为您的实践增长定位，同时完美捕捉您提供的关怀专家健康服务。' },
      ],
    },
    businessNameIdeas: [
      { name: '健康奇迹', description: '在健康中带来奇迹的企业。' },
      { name: '活力景观', description: '提供广泛活力服务的景观。' },
      { name: '健康地平线', description: '为每个患者拓宽健康地平线。' },
      { name: '健身泉源', description: '健身和健康解决方案的泉源。' },
      { name: '活力之旅', description: '将患者带入活力之旅。' },
      { name: '健康波浪', description: '完整健康的健康波浪服务。' },
      { name: '健康港湾', description: '全面健康解决方案的港湾。' },
      { name: '健身穹顶', description: '健身和健康服务的穹顶。' },
      { name: '活力山谷', description: '活力和健康的山谷。' },
      { name: '健康源泉', description: '健康服务的源泉。' },
      { name: '蓬勃疗法', description: '帮助患者蓬勃的疗法服务。' },
      { name: '平衡基地', description: '平衡健康和健康的基础。' },
      { name: '治疗港湾', description: '治疗和健康恢复的港湾。' },
      { name: '滋养之巢', description: '滋养健康实践的巢。' },
      { name: '更新山脊', description: '专注更新和恢复的健康服务。' },
      { name: '活跃生命力', description: '促进活跃生命力健康。' },
      { name: '整体健康', description: '全人健康服务。' },
      { name: '关怀指南针', description: '引导患者走向更好健康。' },
      { name: '高峰健康', description: '帮助患者达到高峰健康。' },
      { name: '蓬勃基地', description: '蓬勃健康的基础。' },
    ],
  },
  'ice-cream': {
    slug: 'ice-cream',
    name: '冰淇淋企业名称创意生成器',
    title: '免费 AI 冰淇淋企业名称创意生成器',
    description: '为冰淇淋店、gelato店和冷冻甜点企业生成甜蜜、难忘的名称。',
    metaDescription: '使用我们的免费 AI 生成器为您的冰淇淋店创建完美名称。生成顾客渴望的甜蜜、难忘的名字！',
    inputLabel: '描述您的冰淇淋企业...',
    inputPlaceholder: '例如：一家在海滨提供独特风味的工匠 gelato 店',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['甜蜜趣味型', '高级工匠型', '有趣家庭型', '现代潮流型'],
        default: '甜蜜趣味型',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in ice cream shops, frozen dessert businesses, and gelato parlors. Your role is to generate sweet, irresistible business names that evoke the delightful, refreshing, and indulgent experience of ice cream.

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
      { title: '冰淇淋店开张', description: '创业者在开设冰淇淋店时使用生成器来找到能够立即传达美味冷冻甜点并创造期待的名称。一个甜蜜、难忘的名称有助于吸引家庭和甜点爱好者，同时建立一个有趣、受欢迎的品牌形象。' },
      { title: '工匠 Gelato 品牌推广', description: 'Gelato 制作者和高级冰淇淋工匠使用生成器创建暗示工艺和质量的名称。正确的名称将其企业定位为寻求真正手工冷冻甜点而非批量生产产品的顾客的目的地。' },
      { title: '移动冰淇淋摊贩身份识别', description: '冰淇淋车运营商和移动摊贩使用生成器找到易记、易记的名称，客户在听到熟悉的旋律时会想起来。独特的名称有助于在不同社区和活动中建立品牌认可度。' },
    ],
    faqs: [
      { question: '什么是好的冰淇淋企业名称？', answer: '好的冰淇淋企业名称应该甜蜜且富有吸引力、易记且有趣、反映您独特的冰淇淋口味或风格。它应该唤起享受冷冻甜点的美妙体验。' },
      { question: '我应该在企业名称中包含"冰淇淋"吗？', answer: '不一定。虽然它提供了清晰度，但"Scoop Dreams"或"Frost & Co."之类的创意名称同样有效。考虑您是否想要明确描述或引人入胜的品牌。' },
      { question: '有趣的名称对冰淇淋店有多重要？', answer: '非常重要。冰淇淋与欢乐、庆祝和零食有关。一个有趣、有趣的名称营造了合适的气氛，吸引寻求美妙体验的顾客，特别是有孩子的家庭。' },
      { question: '什么单词适用于冰淇淋企业名称？', answer: '诸如 Scoop、Swirl、Frost、Cream、Chill、Sweet、Dreamy 和 Delight 的单词效果很好。温度单词（冷冻、凉爽、冰冷）和质地单词（天鹅绒、光滑、奶油状）也很受欢迎。' },
      { question: '我的冰淇淋店名称应该反映我的专业吗？', answer: '如果您专门制作 gelato、软冰淇淋或工匠风味，结合您的专业提示会有帮助。"Gelato Grove"或"Artisan Freeze"清楚地传达了您的重点。' },
      { question: '我如何让我的冰淇淋企业名称易记？', answer: '使用头韵法（Scoop Shop）、押韵（Freeze Please）或有趣的文字游戏。保持简短、易发音，并创建与冷、清爽甜点的愉快联想。' },
      { question: '我可以在冰淇淋企业名称中使用双关语吗？', answer: '绝对可以！冰淇淋双关语深受顾客喜爱。诸如"What\'s the Scoop"或"Sundae Best"之类的名称增加了个性，使您的品牌易记且可分享。' },
      { question: '季节性冰淇淋店的企业名称应该如何处理？', answer: '季节性冰淇淋店需要一个能够吸引夏季顾客的名称，同时允许冬季适应。避免过于夏季特定的名称。考虑使用不受季节限制的名称，如"Frozen Bliss"或"The Creamery"，这样您可以全年运营而不会显得过时或不相关。' },
      { question: '如何为我的工匠或手工冰淇淋店选择一个突出质量的名称？', answer: '强调您的手工工艺对于区分您与主流连锁店至关重要。在名称中使用"工匠"、"手工"、"手制"或"小批量"等词语。名称如"Artisan Creamery"、"Handcrafted Gelato"或"Small Batch Freeze"清楚地传达您对质量和传统工艺的承诺，吸引寻求高级冷冻甜点的客户。' },
      { question: '我的冰淇淋店名称如何影响定价策略？', answer: '您的企业名称强烈影响顾客对价格的期望。高级名称如"Velvet Parlor"或"Premium Gelato House"可以证明更高的价格合理性，因为客户期望更好的质量。相反，有趣、休闲的名称如"The Scoop"可能会导致更低的价格预期。选择一个与您的定价策略一致的名称以确保客户对价值的看法与现实相符。' },
    ],
    howToChoose: {
      intro: '为冰淇淋企业选择完美的名称是创建为顾客带来欢乐的品牌的令人兴奋的一步。您的企业名称将出现在标牌、杯子、商品和社交媒体上——它需要捕捉您提供的冷冻甜点体验的甜蜜、有趣的本质。',
      steps: [
        { title: '定义您的冰淇淋风格', description: '考虑您的冰淇淋有什么独特之处。您提供的是工匠 gelato、经典美式风味还是创意创作？您的名称应该暗示您的专业和顾客可以期待的体验。' },
        { title: '了解您的目标受众', description: '确定您的目标是家庭、年轻成人还是高级甜点寻求者。以家庭为中心的店铺可能会使用有趣的名称，而美食店可以选择精致优雅。' },
        { title: '头脑风暴相关关键词', description: '列出与冰淇淋相关的词汇：Scoop、Swirl、Cream、Frost、Sweet、Cool、Dreamy。同时考虑您想要唤起的情感：快乐、怀旧、沉溺、清爽。' },
        { title: '创建名称组合', description: '混合您的关键词与命名模式。尝试头韵法（Creamy Corner）、复合词（Frostworks）或描述性短语（The Daily Scoop）。生成多个选项。' },
        { title: '测试易记性', description: '大声说出名称。它们容易发音吗？它们会在您脑海中留下印象吗？请朋友和家人在听到名称一次后回忆名称以测试易记性。' },
        { title: '检查可用性', description: '验证您的首选选项中的域名、社交媒体账号和商标冲突。完美的名称如果您无法在所有平台上拥有它，就会失去价值。' },
        { title: '可视化品牌', description: '想象您选择的名称在标牌、包装和制服上。它看起来有吸引力吗？它暗示冰淇淋的多彩、有趣本质吗？选择一个能很好地在视觉上翻译的名称。' },
      ],
    },
    businessNameIdeas: [
      { name: '舀雪梦', description: '提供宁静舀冰淇淋体验和平和享受的冰淇淋企业。' },
      { name: '奶油创造', description: '暗示以创意、奶油冰淇淋创新而闻名的企业。' },
      { name: '美味滴滴', description: '暗示将纯粹喜悦的冰淇淋滴下。' },
      { name: '冻梦幻想', description: '提供冷冻甜点梦幻世界的冰淇淋企业。' },
      { name: '融化时刻', description: '以创造难忘、融化时刻的冰淇淋而闻名的企业。' },
      { name: '冰棍天堂', description: '冰棍和冷冻甜点爱好者的天堂目的地。' },
      { name: '味漩涡', description: '暗示以美味旋转冰淇淋而闻名的企业。' },
      { name: '冷锥形', description: '暗示提供冷爽、清爽锥形甜点的冰淇淋企业。' },
      { name: '奶油狂热', description: '以引人瞩目、不可抗拒奶油冰淇淋而闻名的企业。' },
      { name: '豪华舔舐', description: '暗示以豪华、沉溺舔舐而闻名的冰淇淋企业。' },
      { name: '霜冻盛宴', description: '暗示提供霜冻冰淇淋盛宴和庆祝的企业。' },
      { name: '意式冰淇淋盛典', description: '提供正宗 gelato 风味盛典的冰淇淋企业。' },
      { name: '旋涡圣殿', description: '为美丽旋转冷冻甜点的圣殿目的地。' },
      { name: '冷魅力者', description: '以迷人冷冻甜点而闻名的企业，令人高兴。' },
      { name: '天鹅绒香草', description: '暗示具有香草精致的光滑、天鹅绒冰淇淋。' },
      { name: '圣代奇观', description: '创造壮观圣代体验的冰淇淋企业。' },
      { name: '北极工匠', description: '以北极新鲜工匠冰淇淋为位置。' },
      { name: '梦幻甜点', description: '冰淇淋和冷冻甜点爱好者的梦幻目的地。' },
      { name: '舀社团', description: '创建冰淇淋爱好者的独家社团。' },
      { name: '福乐咬嚼', description: '暗示福乐、字节大小的冷冻甜点体验。' },
    ],
  },
  'interior-design': {
    slug: 'interior-design',
    name: '室内设计企业名称创意生成器',
    title: '免费 AI 室内设计企业名称创意生成器',
    description: '为室内设计公司、家居装饰企业和空间规划工作室生成时尚、优雅的名称。',
    metaDescription: '使用我们的人工智能工具轻松创建令人惊艳的室内设计企业名称。无需成本，无需麻烦，只需创意！',
    inputLabel: '描述您的室内设计企业...',
    inputPlaceholder: '例如：一家专门从事现代极简美学的奢华住宅室内设计公司',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['优雅精致型', '现代极简型', '经典永恒型', '创意大胆型'],
        default: '优雅精致型',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in interior design firms, home décor businesses, and space planning studios. Your role is to generate stylish, elegant business names that convey creativity, sophistication, and transformative design expertise.

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
      { title: '室内设计公司启动', description: '新室内设计师和装饰师使用生成器来寻找能够立即传达风格、精致和设计专业知识的名称。专业的名称有助于建立信誉并吸引寻求变革性住宅和办公室设计的客户。' },
      { title: '家庭暂存业务品牌推广', description: '家庭装扮者使用生成器创建暗示其改变房地产销售空间能力的名称。正确的名称将其服务定位为对想要最大化房产吸引力和售价的卖家而言至关重要。' },
      { title: '专业设计工作室身份识别', description: '专门从事可持续、极简或奢侈室内设计的设计师使用生成器来寻找反映其独特方法的名称。独特的名称吸引与特定设计理念和美学相呼应的客户。' },
    ],
    faqs: [
      { question: '什么是好的室内设计企业名称？', answer: '好的室内设计品牌名称应该时尚优雅、易记有远见、反映您的设计方法。它应该传达您为空间带来的精致和变革能力。' },
      { question: '我应该在企业名称中包含"室内设计"吗？', answer: '它提供了清晰度但不是必需的。"Atelier Chic"或"Space & Style"之类的名称效果很好。考虑明确描述还是富有表现力的品牌更适合您的定位。' },
      { question: '优雅对室内设计名称有多重要？', answer: '非常重要。您的名称是对您设计品味的第一印象。优雅、精致的名称暗示您会将同样的精致带到客户项目中。' },
      { question: '什么单词适用于室内设计企业名称？', answer: '诸如 Design、Studio、Interiors、Space、Atelier、Curated、Luxe、Haven 和 Refined 之类的单词效果很好。视觉词汇（Canvas、Palette）和转变词汇（Elevate、Transform）也很受欢迎。' },
      { question: '我的名称应该反映我的设计专业吗？', answer: '如果您专注于现代、复古或可持续设计，微妙的提示有助于吸引理想客户。"Modern Nest Design"或"EcoSpace Interiors"清楚地传达了您的重点。' },
      { question: '我如何让我的室内设计名称易记？', answer: '使用引人入胜的意象、精致的词汇和愉快的声音。保持简洁（2-3 个词），避免使用通用术语，并确保易于拼写和发音。' },
      { question: '我可以在室内设计企业中使用自己的名字吗？', answer: '个人名字适用于精品公司，您的个人声誉和风格是品牌。"Sarah Mills Interiors"创建与客户的亲密个人联系。' },
      { question: '我的室内设计企业名称如何影响客户期望和定价？', answer: '您的名称设定了客户对您服务质量和价格的期望。像"Luxury Design Studio"这样的高档名称可以支持更高的设计费用，因为客户期望高端、个性化的服务。相反，"Budget Interiors"可能会吸引寻求价格实惠的客户。选择一个与您的目标市场和定价策略相符的名称，以确保客户对您的服务价值的看法与现实相符。' },
      { question: '室内设计公司如何平衡专业化和多功能性？', answer: '如果您专门从事住宅设计，包含"Residential"会有帮助，但它也可能限制您向商业客户扩展的能力。一个稍微更广泛的名称如"Design Collective"或"Space Artistry"可以容纳多个设计服务，同时仍然显得专业和专门化。考虑您的长期增长计划以及您是否可能想要扩展到不同类型的项目。' },
      { question: '室内设计企业名称对线上营销和搜索引擎优化有何影响？', answer: '您的企业名称应该易于搜索和记忆。包含"Interior Design"或"Interiors"等关键词会提高您在搜索引擎中的可见性，特别是对于本地搜索。但是，如果您的名称太通用，可能很难脱颖而出。平衡使用可搜索术语与创意、难忘的名称。在您的品牌名称中结合位置词（如城市或社区名称）也可以帮助本地搜索可见性和客户发现。' },
    ],
    howToChoose: {
      intro: '为室内设计企业选择完美的名称对于创建吸引寻求美丽、改造空间的客户的品牌至关重要。您的企业名称将出现在投资组合、提案和营销材料上——它需要传达您在每个项目中带来的精致和创意远见。',
      steps: [
        { title: '定义您的设计哲学', description: '考虑是什么使您的方法独特。您是现代极简主义、经典传统还是折衷大胆？您的名称应该暗示您的美学和设计价值观。' },
        { title: '识别您的目标客户', description: '确定您是针对奢侈业主、年轻专业人士、商业客户还是生态意识消费者。将您的名称的精致水平与您的观众相匹配。' },
        { title: '头脑风暴相关关键词', description: '列出与设计相关的词汇：Space、Style、Décor、Haven、Nest、Canvas。包括形容词：Elegant、Modern、Refined、Bold、Serene。添加动作词汇：Transform、Inspire、Elevate。' },
        { title: '创建名称组合', description: '混合关键词与命名模式。尝试优雅结构（Design Atelier）、复合概念（SpaceStyle）或描述性短语（The Refined Room）。生成多个选项。' },
        { title: '测试精致度', description: '评估每个名称的设计吸引力。这听起来像是客户会信任其空间的名称吗？它会在投资组合或名片上看起来令人印象深刻吗？' },
        { title: '检查可用性', description: '验证您的首选选项中的域名、社交媒体账号和商标冲突。在设计行业中，一致的在线形象对吸引客户至关重要。' },
        { title: '考虑视觉影响', description: '想象您选择的名称在标牌、名片和投资组合封面上。它看起来优雅和专业吗？选择一个增强您的视觉品牌身份的名称。' },
      ],
    },
    businessNameIdeas: [
      { name: '装饰梦想', description: '一家将装饰梦想变为现实的室内设计企业。' },
      { name: '风格圣殿', description: '暗示一家通过设计专注于创建时尚圣殿的企业。' },
      { name: '优雅本质', description: '暗示捕捉精致内部空间的优雅本质。' },
      { name: '空间宁静', description: '通过设计创建宁静、和谐生活空间的设计企业。' },
      { name: '现代缪斯', description: '为具有设计意识的业主提供当代灵感。' },
      { name: '远见金库', description: '暗示富有远见设计理念的宝库。' },
      { name: '工坊优雅', description: '法国精致暗示艺术设计工作室。' },
      { name: '和谐天堂', description: '通过设计创建和谐、天堂般的内部环境。' },
      { name: '设计王朝', description: '暗示持久、王朝品质的室内设计遗产。' },
      { name: '策划画布', description: '将空间定位为精心策划的艺术画布。' },
      { name: '巢新星', description: '为创建美丽家庭巢穴的新鲜创新方法。' },
      { name: '精致房间', description: '以创建精致、抛光房间设计而闻名的企业。' },
      { name: '空间谱系', description: '空间设计可能性和风格的全谱。' },
      { name: '豪华生活', description: '以高级设计敏感性精心打造的奢侈生活空间。' },
      { name: '灵感内部设计', description: '创建受启发、鼓舞内部空间的设计公司。' },
      { name: '宁静转变', description: '将空间转变为宁静、和平的环境。' },
      { name: '城市优雅', description: '城市精致遇见优雅室内设计。' },
      { name: '设计居住', description: '为生活和居住创建精美设计空间。' },
      { name: '高雅空间', description: '以创建高雅、时尚室内而闻名的企业。' },
      { name: '时尚远景', description: '室内设计的时尚、富有远见的方法。' },
    ],
  },
  'it': {
    slug: 'it',
    name: 'IT 企业名称创意生成器',
    title: '免费 AI IT 企业名称创意生成器',
    description: '为 IT 公司、技术服务和数字解决方案企业生成科技、专业的名称。',
    metaDescription: '使用我们的免费人工智能工具生成科技 IT 企业名称。创建传达创新和专业知识的专业名称！',
    inputLabel: '描述您的 IT 企业...',
    inputPlaceholder: '例如：为小企业提供网络安全和云解决方案的托管 IT 服务公司',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['专业可信型', '现代创新型', '技术专家型', '动态增长型'],
        default: '专业可信型',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in IT companies, technology services, and digital solutions businesses. Your role is to generate tech-savvy, professional business names that convey innovation, expertise, and cutting-edge technological capability.

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
      { title: 'IT 服务公司启动', description: '新的 IT 服务提供商和顾问使用生成器来寻找能够立即传达技术专业知识和可靠性的名称。专业的名称有助于与寻求可信技术合作伙伴的企业建立信誉。' },
      { title: '托管服务提供商品牌推广', description: 'MSP 使用生成器创建传达全面、主动 IT 管理的名称。正确的名称将其服务定位为对想要无缝、无忧技术运营的企业而言至关重要。' },
      { title: '专业 IT 公司身份识别', description: '专门从事网络安全、云服务或特定行业的 IT 公司使用生成器来寻找反映其专业知识的名称。独特的名称吸引寻求专业技术解决方案的客户。' },
    ],
    faqs: [
      { question: '什么是好的 IT 企业名称？', answer: '好的 IT 品牌名称应该科技娴熟且尖端、专业可信、易记清晰。它应该传达您的服务的创新和有效性。' },
      { question: '我应该在企业名称中包含"IT"或"Tech"吗？', answer: '它提供了立即清晰度但不是必需的。"DataDome"或"SynergySystems"之类的名称在不显式标签的情况下传达技术焦点。考虑您的目标受众的期望。' },
      { question: '专业精神对 IT 企业名称有多重要？', answer: '极其重要。企业将关键系统和数据的信任交给 IT 提供商。专业的名称建立信心并暗示客户从技术合作伙伴需要的可靠性。' },
      { question: '什么单词适用于 IT 企业名称？', answer: '诸如 Tech、Data、Systems、Solutions、Network、Digital、Cyber 和 Cloud 之类的单词效果很好。动作词汇（Connect、Integrate、Optimize）和信任词汇（Secure、Reliable）也很受欢迎。' },
      { question: '我的 IT 企业名称应该反映我的专业吗？', answer: '如果您专注于网络安全、云服务或特定行业，包含提示有助于吸引理想客户。"SecureNet Solutions"或"CloudFirst IT"清楚地传达了您的焦点。' },
      { question: '我如何让我的 IT 企业名称易记？', answer: '使用技术相关的文字游戏、创建复合词或以新鲜方式结合熟悉术语。保持简洁、易拼写，避免过度技术行话导致潜在客户困惑。' },
      { question: '我应该在 IT 企业名称中使用首字母缩略词吗？', answer: '首字母缩略词可以工作，但要确保它们易记且不会拼写意外的单词。诸如"TechTerrace"之类的原始名称通常优于通用首字母缩略词的品牌认可度。' },
      { question: 'IT 企业名称如何影响企业客户信任和企业采用？', answer: '您的 IT 企业名称是企业客户对您可靠性和专业性的第一印象。专业、可信的名称如"Enterprise Solutions Group"或"Digital Security Partners"立即传达您理解企业需求并可以处理关键任务系统的信息。一个过于非正式或模糊的名称可能会导致潜在客户怀疑您的能力。在企业 B2B 技术市场中，名称的专业精神直接影响销售和合同获取。' },
      { question: 'IT 初创公司与成熟公司的命名策略应该有所不同吗？', answer: '是的。IT 初创公司通常使用更现代、前沿的名称来显示创新性（"AiRevolution"、"CloudNative Labs"），而成熟的 IT 公司往往使用更传统、企业级的名称（"Enterprise Systems Inc."、"Trusted Tech Solutions"）。初创公司可以通过更冒险的名称脱颖而出，但要确保它仍然传达专业精神。您的名称应该匹配您公司的成熟度和目标客户的期望。' },
      { question: 'IT 企业名称在技术营销和品牌区分中的作用是什么？', answer: 'IT 市场竞争激烈，名称对于区分至关重要。一个独特的、令人难忘的名称有助于您在拥挤的搜索结果和销售活动中脱颖而出。考虑在您的名称中加入一个关键的区分因素——无论是解决方案类型（"SecureCloud"）、方法（"AgileIT Consulting"）还是行业重点（"HealthTech Solutions"）。良好的 IT 企业名称不仅沟通专业精神，还沟通您独特的价值主张。' },
    ],
    howToChoose: {
      intro: '为您的 IT 企业选择完美的名称是建立与将信任您其技术基础设施的客户信誉的关键步骤。您的企业名称将出现在提案、合同和营销材料上——它需要传达技术专业知识和可靠性。',
      steps: [
        { title: '定义您的 IT 专业', description: '考虑您的核心服务。您专注于网络安全、云迁移、托管服务还是常规 IT 支持？您的名称应该暗示您的专业知识而不会过于狭隘。' },
        { title: '识别您的目标市场', description: '确定您是针对企业、中小企业、特定行业还是一般企业。将您的名称的语气与您的受众相匹配——企业名称可能更正式。' },
        { title: '头脑风暴相关关键词', description: '列出与 IT 相关的词汇：Tech、Data、Network、Systems、Digital、Cyber、Cloud。包括动作词汇：Connect、Solve、Secure、Optimize。添加信任词汇：Reliable、Premier、Trusted。' },
        { title: '创建名称组合', description: '混合关键词与命名模式。尝试技术复合词（DataDome）、服务标识符（NetworkNexus）或以解决方案为中心的名称（TechSolve）。生成多个选项。' },
        { title: '测试专业度', description: '评估每个名称的业务吸引力。这听起来像是企业客户会信任的公司吗？它会在提案和合同上激励信心吗？' },
        { title: '检查可用性', description: '验证您的首选选项中的域名（优先选择 .com）、社交媒体账号和商标冲突。在 IT 中，强大的在线形象对信誉至关重要。' },
        { title: '考虑技术感知', description: '想象您选择的名称在客户演讲和名片上。它传达技术能力吗？选择一个将您定位为您所在领域专家的名称。' },
      ],
    },
    businessNameIdeas: [
      { name: '数据穹顶', description: '一家专注于提供数据相关 IT 服务的企业。' },
      { name: '科技平台', description: '暗示可以找到各种技术解决方案的地点。' },
      { name: '二进制财富', description: '暗示二进制或数字解决方案的财富。' },
      { name: '流量喷泉', description: '利用技术流量为企业解决方案的地点。' },
      { name: '协同系统', description: '一家 IT 系统无缝协作的企业。' },
      { name: '内核王国', description: '掌握计算系统核心的主人。' },
      { name: '数字灵巧', description: '精通数字世界各个方面的企业。' },
      { name: '网络纽带', description: '位于各种网络解决方案交点处。' },
      { name: '字节蓝图', description: '为数字转型创建战略蓝图。' },
      { name: '电路湾', description: '所有电路和硬件解决方案的安全港。' },
      { name: '代码催化剂', description: '通过编码卓越推动业务增长。' },
      { name: '基础设施脉搏', description: 'IT 基础设施服务和监控的脉搏。' },
      { name: '安全堆栈', description: '专注于为客户构建安全技术堆栈。' },
      { name: '技术宝库', description: '技术解决方案和专业知识的宝库。' },
      { name: '枢纽点 IT', description: '帮助企业通过战略 IT 决策实现枢纽。' },
      { name: '云峰', description: '顶级云计算服务和解决方案。' },
      { name: '逻辑实验室', description: '逻辑 IT 解决方案和创新的实验室。' },
      { name: '量子探索', description: '对 IT 挑战的先进、量子级方法。' },
      { name: '可靠技术', description: '技术服务的直接可靠性。' },
      { name: '速度网络', description: '为高要求企业的高速网络解决方案。' },
    ],
  },
  'jewelry-store': {
    slug: 'jewelry-store',
    name: '珠宝店企业名称创意生成器',
    title: '免费 AI 珠宝店企业名称创意生成器',
    description: '为珠宝店、精品店和精细珠宝商生成优雅、闪闪发光的名称。',
    metaDescription: '用闪闪发光的名称在珠宝业务中闪耀。我们的人工智能工具无需价格就能打造独特的名称！',
    inputLabel: '描述您的珠宝企业...',
    inputPlaceholder: '例如：一家专门制作定制婚戒和婚礼乐队的精品珠宝店',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['优雅豪华型', '现代潮流型', '经典永恒型', '工匠手工型'],
        default: '优雅豪华型',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in jewelry stores, boutiques, and fine jewelers. Your role is to generate elegant, sparkling business names that convey the luxury, beauty, and precious nature of fine jewelry.

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
      { title: '精细珠宝精品店启动', description: '开设珠宝店的创业者使用生成器来寻找能够立即传达优雅、豪华和珍贵品质的名称。精致的名称有助于吸引寻求有意义、高质量珠宝的客户。' },
      { title: '定制珠宝设计师品牌推广', description: '定制珠宝设计师和工匠使用生成器创建暗示工艺和个性化服务的名称。正确的名称将其企业定位为独特、定制珠宝创作的目的地。' },
      { title: '婚礼珠宝专家身份识别', description: '婚礼和订婚珠宝专家使用生成器来寻找唤起浪漫和里程碑庆祝的名称。浪漫的名称吸引寻求完美戒指和婚礼珠宝的夫妻。' },
    ],
    faqs: [
      { question: '什么是好的珠宝店名称？', answer: '好的珠宝店品牌名称应该体现优雅精致、易记描述、在域名和社交媒体上可用于品牌推广。' },
      { question: '我应该在企业名称中包含"珠宝"吗？', answer: '它提供了清晰度但不是必需的。"Brilliance Boutique"或"Radiant & Co."之类的名称可以有效地传达珠宝焦点。考虑您的定位和目标受众。' },
      { question: '优雅对珠宝企业名称有多重要？', answer: '极其重要。珠宝代表美丽、价值和特殊场合。优雅的名称创造了正确的期望并吸引寻求质量和精致的客户。' },
      { question: '什么单词适用于珠宝店名称？', answer: '诸如 Gem、Jewel、Sparkle、Shine、Radiant、Luxe、Brilliant 和 Precious 之类的单词效果很好。宝石名称（Diamond、Ruby）和金属参考（Gold、Silver）也很受欢迎。' },
      { question: '我的珠宝店名称应该反映我的专业吗？', answer: '如果您专注于新娘、复古或定制作品，提示有助于吸引理想客户。"Bridal Brilliance"或"Vintage Gems"清楚地传达了您的焦点。' },
      { question: '我如何让我的珠宝店名称易记？', answer: '使用闪闪发光的意象、头韵或优雅的词汇组合。保持简短、精致且易发音。在向朋友推荐时测试其听起来如何。' },
      { question: '我可以在珠宝企业名称中使用宝石名称吗？', answer: '诸如 Diamond、Ruby 或 Sapphire 之类的宝石名称增加了即时珠宝协会和优雅。只需确保您选择的名称未被现有珠宝商商标。' },
      { question: '珠宝店名称如何影响定价感知和客户期望？', answer: '您的珠宝店名称强烈影响客户对价格和质量的期望。奢侈品听起来的名称如"Precious Treasures"或"Diamond Palace"可以证明高价格合理，因为客户期望精细、高质量的珠宝。相反，一个过于休闲的名称可能导致客户期望平价珠宝。选择一个与您的定价策略和目标市场一致的名称，确保客户对价值的看法与您提供的产品一致。' },
      { question: '新娘和婚礼珠宝商应该如何处理命名？', answer: '如果您专门从事新娘珠宝，强调这一点可以帮助您吸引最正确的客户。名称如"Bridal Brilliance"、"Forever Jewels"或"Wedding Gem"清楚地沟通您的专业并吸引订婚和婚礼购物者。但是，如果您想保持灵活性以供应其他珠宝类型，考虑一个不那么婚礼特定的名称，仍然传达您的优雅和精致。' },
      { question: '定制或工匠珠宝企业如何在名称中强调工艺？', answer: '定制和工匠珠宝工作室应该在其名称中强调手工工艺和个性化。名称如"Artisan Gems"、"Handcrafted Jewelry Atelier"或"Bespoke Sparkle"清楚地传达您对定制设计和工匠质量的承诺。这有助于将您与批量生产、大众市场珠宝商区分开来，并证明您的高端定价。一个强调您独特工艺和设计方法的名称直接影响客户对其珍贵和排他性价值的认知。' },
    ],
    howToChoose: {
      intro: '为珠宝店选择完美的名称对于创建吸引寻求美丽、有意义作品的客户的品牌至关重要。您的企业名称将出现在标牌、包装和营销材料上——它需要传达您的珠宝产品的优雅和珍贵品质。',
      steps: [
        { title: '定义您的珠宝利基', description: '考虑您的专业。您专注于精细珠宝、时尚配饰、新娘作品还是工匠创作？您的名称应该反映您在市场中的独特定位。' },
        { title: '了解您的目标客户', description: '确定您服务的是奢侈品买家、年轻时尚意识的客户还是新娘。将您的名称的优雅和风格与您的理想客户的期望相匹配。' },
        { title: '头脑风暴相关关键词', description: '列出与珠宝相关的词汇：Gem、Sparkle、Shine、Radiant、Precious、Brilliant。包括豪华词汇：Luxe、Fine、Elegant、Regal。添加描述词汇：Boutique、Collection、Treasures。' },
        { title: '创建名称组合', description: '混合关键词与命名模式。尝试优雅结构（Brilliance & Co.）、宝石参考（Sapphire Studio）或描述性短语（Precious Finds）。生成多个选项。' },
        { title: '测试优雅度', description: '评估每个名称的豪华吸引力。这听起来像是客户会将其与美丽、优质珠宝相关联的名称吗？它会在包装上看起来令人印象深刻吗？' },
        { title: '检查可用性', description: '验证您的首选选项中的域名、社交媒体账号和商标冲突。在珠宝中，跨所有接触点的品牌一致性至关重要。' },
        { title: '可视化品牌', description: '想象您选择的名称在店铺标牌、珠宝盒和购物袋上。它传达了您珠宝产品的优雅和威望吗？相应地选择。' },
      ],
    },
    businessNameIdeas: [
      { name: '宝石林地', description: '一个充满各种珍贵宝石的美丽地点。' },
      { name: '闪耀财富', description: '暗示一家商店充满闪闪发光、装饰性珠宝。' },
      { name: '华丽绿洲', description: '一个富有奢华的珠宝店目的地。' },
      { name: '装饰府邸', description: '美丽装饰品和珠宝的家。' },
      { name: '闪闪购物狂欢', description: '暗示各种闪闪发光珠宝的范围广泛、令人兴奋。' },
      { name: '克拉特洞穴', description: '充满珍贵宝石和克拉珠宝的地点。' },
      { name: '珠宝交汇点', description: '珠宝爱好者和收藏家的相遇地点。' },
      { name: '装饰果园', description: '充满美丽珠宝装饰的果实地点。' },
      { name: '豪华泻湖', description: '一个充满奢侈珠宝的宁静商店。' },
      { name: '炫耀窝', description: '闪亮珠宝发现的舒适地点。' },
      { name: '闪闪花园', description: '一个充满闪闪发光珍贵宝石的花园般空间。' },
      { name: '饰品小溪', description: '暗示装饰珠宝的流动溪流。' },
      { name: '魅力室', description: '一间充满各种迷人珠宝的房间。' },
      { name: '珍贵馆', description: '充满珍贵和深爱珠宝的场馆。' },
      { name: '水晶湾', description: '水晶和宝石珠宝的安全港。' },
      { name: '优雅商业广场', description: '一家宏大商店提供精雅珠宝选择。' },
      { name: '光芒王国', description: '光芒闪闪、闪闪发光珠宝的王国。' },
      { name: '宝藏宝库', description: '等待发现的珠宝宝藏的宝库。' },
      { name: '辉煌精品', description: '一家精品店展示辉煌、闪闪发光珠宝。' },
      { name: '金色优雅', description: '优雅风格的金色珠宝。' },
    ],
  },
  'lip-gloss': {
    slug: 'lip-gloss',
    name: '唇彩企业名称创意生成器',
    title: '免费 AI 唇彩企业名称创意生成器',
    description: '为唇彩品牌、化妆品企业和美容产品公司生成诱人、魅力十足的名称。',
    metaDescription: '用闪闪发光的名称为您的唇彩企业增光。我们的人工智能生成器免费激发创意！',
    inputLabel: '描述您的唇彩企业...',
    inputPlaceholder: '例如：一个针对 Z 世代的纯素唇彩品牌，拥有大胆、潮流的颜色',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['魅力诱人型', '有趣玩乐型', '清爽自然型', '奢侈高端型'],
        default: '魅力诱人型',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in lip gloss brands, cosmetics businesses, and beauty product companies. Your role is to generate alluring, glamorous business names that capture the beauty, shine, and confidence that lip gloss products provide.

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
      { title: '独立唇彩品牌启动', description: '推出唇彩系列的美容企业家使用生成器来寻找捕捉魅力和吸引力的名称。一个吸人的名称有助于建立品牌认可度并在社交媒体平台上吸引客户。' },
      { title: '清洁美容唇部产品品牌推广', description: '天然和清洁美容品牌使用生成器创建暗示纯净和健康意识美容的名称。正确的名称吸引寻求用优质、安全成分制成的唇彩的客户。' },
      { title: '青少年美容品牌身份识别', description: '针对年轻成人的美容品牌使用生成器来寻找与 Z 世代消费者相呼应的有趣、潮流名称。一个有趣、社交媒体就绪的名称有助于捕捉青年市场。' },
    ],
    faqs: [
      { question: '什么是好的唇彩企业名称？', answer: '好的唇彩品牌名称应该诱人迷人、朗朗上口、易记、反映您的唇彩多样性。它应该唤起您的产品提供的美丽和自信。' },
      { question: '我应该在企业名称中包含"唇彩"吗？', answer: '不一定。"Pout Palace"或"Glossy Grove"之类的名称在不明确的情况下清楚地暗示唇部产品。考虑您将来是否可能超越唇彩。' },
      { question: '潮流对唇彩品牌名称有多重要？', answer: '在美容中非常重要。您的名称应该感觉当代并吸引现代美容消费者。但是，将时尚与永恒相平衡以避免快速过时。' },
      { question: '什么单词适用于唇彩企业名称？', answer: '诸如 Gloss、Shine、Pout、Kiss、Luxe、Lush 和 Glam 之类的单词效果很好。质地词汇（Velvet、Silk）和光芒词汇（Shimmer、Glow）也与唇部产品消费者相呼应。' },
      { question: '我的唇彩品牌名称应该针对特定人群吗？', answer: '如果针对青少年与奢侈消费者，您的名称应该相应地匹配。"Gloss Girl"的吸引力与"Luxe Lip Co."不同。了解您的受众并相应地命名。' },
      { question: '我如何让我的唇彩品牌名称易记？', answer: '使用头韵法（Pout Perfect）、有趣的词汇或吸人的组合。确保易于发音、拼写和在社交媒体上分享。测试其主题标签潜力。' },
      { question: '我可以在唇彩企业名称中使用双关语吗？', answer: '与唇相关的双关语可以在美容中很好地工作。"Kiss & Tell"或"Read My Lips"之类的名称增加了个性，同时传达了您的产品焦点。' },
      { question: '唇彩品牌名称如何影响社交媒体营销和品牌推广？', answer: '唇彩品牌在社交媒体（特别是 Instagram 和 TikTok）上取得成功。一个有吸引力、可转发的名称有助于品牌发现和分享。考虑您的名称作为主题标签的外观、它在社交媒体平台上的可用性以及它是否适合美容影响者在内容中推广。一个易于拼写、视觉吸引、可记忆的名称将促进有机社交媒体增长和用户生成的内容。' },
      { question: '唇彩企业应该如何在名称中平衡趣味和优雅？', answer: '唇彩市场范围很广，从有趣、顽皮的品牌到精致、豪华的品牌。您的名称应该反映您的品牌定位。一个有趣、性感的名称如"Pout Perfection"或"Glossy Dreams"吸引寻求乐趣和自信的年轻客户。一个更精致的名称如"Luxe Lips"或"Velvet Gloss Co."吸引寻求高质量、奢侈品感的成熟消费者。选择一个准确代表您的品牌个性的名称，这样您可以吸引正确的客户群。' },
      { question: '唇彩品牌名称如何支持产品扩展和品牌增长？', answer: '虽然您可能从唇彩开始，但许多品牌会扩展到整个嘴部护理系列或更广泛的美容产品。选择一个有足够灵活性的名称，可以容纳这种增长而不会显得过时或局限。名称如"Luxe Beauty"或"Kiss Co."比"Gloss Only"或"Lip Gloss Paradise"更具适应性。考虑您的长期愿景，并选择一个支持品牌扩展的名称，同时清楚地沟通您当前的核心产品焦点。' },
    ],
    howToChoose: {
      intro: '为唇彩企业选择完美的名称对于在竞争激烈的美容市场中创建吸引注意力的品牌至关重要。您的企业名称将出现在包装、社交媒体和营销材料上——它需要传达您的产品的魅力和吸引力。',
      steps: [
        { title: '定义您的品牌身份', description: '考虑您的品牌个性。您是调皮有趣、精致豪华还是自然清洁？您的名称应该反映客户将体验的氛围。' },
        { title: '了解您的目标受众', description: '确定您的目标是青少年、年轻专业人士、成熟女性还是各个年龄段。将您的名称的语气和风格与您的理想客户的偏好相匹配。' },
        { title: '头脑风暴相关关键词', description: '列出与唇彩相关的词汇：Gloss、Shine、Pout、Kiss、Lips、Glam。包括描述词汇：Luxe、Lush、Velvet、Perfect。添加动作词汇：Pucker、Plump、Shimmer。' },
        { title: '创建名称组合', description: '混合关键词与命名模式。尝试头韵法（Glossy Glam）、复合词（PoutPerfection）或有趣短语（Lip Luxe）。生成多个选项。' },
        { title: '测试社交媒体吸引力', description: '检查每个名称在 Instagram 生物学、作为主题标签和产品包装上的外观。美容品牌生活在社交媒体上——确保您的名称拍照和展示良好。' },
        { title: '检查可用性', description: '验证您的首选选项中的域名、社交媒体账号和商标冲突。在竞争激烈的美容空间中，在所有平台上保护您的名称至关重要。' },
        { title: '可视化品牌', description: '想象您选择的名称在唇彩管、包装和营销材料上。它传达了您产品的魅力和吸引力吗？选择看起来漂亮的名称。' },
      ],
    },
    businessNameIdeas: [
      { name: '光泽林地', description: '一家唇彩企业提供各种光泽产品。' },
      { name: '嘴唇完美', description: '暗示一家以完美产品为您嘴唇而闻名的企业。' },
      { name: '唇彩豪华', description: '一家提供豪华唇部产品的唇彩企业。' },
      { name: '嘴唇宫殿', description: '充满您完美嘴唇产品的宫殿。' },
      { name: '甜蜜小巷', description: '充满美味、不可抗拒唇部产品的小巷。' },
      { name: '光泽洞穴', description: '一个充满美丽光泽产品的洞穴来探索。' },
      { name: '唇光芒', description: '唇彩企业提供光芒唇部产品。' },
      { name: '嘴唇快乐', description: '为您美丽嘴唇的快乐产品。' },
      { name: '甜蜜乐园', description: '充满美味唇部产品和光泽的乐园。' },
      { name: '光泽林地', description: '充满美丽、多种光泽产品的林地。' },
      { name: '唇部豪华', description: '豪华、奢侈唇部产品和光泽。' },
      { name: '嘴唇名誉', description: '为您挑剔嘴唇的名誉产品。' },
      { name: '闪闪发光闪耀', description: '唇彩企业专门制作闪闪发光光泽。' },
      { name: '天鹅绒吸血鬼', description: '具有态度的天鹅绒、吸血鬼式唇部产品。' },
      { name: '光泽琉璃', description: '魅力十足、琉璃面唇部产品。' },
      { name: '可接吻精致', description: '精致产品使嘴唇不可抗拒地可接吻。' },
      { name: '丰满嘴唇', description: '创建完美丰满嘴唇的唇部产品。' },
      { name: '漆嘴唇', description: '漆面、长效唇彩产品。' },
      { name: '糖闪闪', description: '具有糖果吸引力的甜、闪闪发光唇部产品。' },
      { name: '光泽女神', description: '女神风格的唇彩产品和饰面。' },
    ],
  },
  'marketing': {
    slug: 'marketing',
    name: '营销企业名称生成器',
    title: '免费 AI 市场营销企业名称创意生成器',
    description: '为营销机构、广告公司和推广服务企业生成专业、创新的名称。',
    metaDescription: '用我们的人工智能生成的名称有效地推销您的业务。快速、免费，旨在取得成功！',
    inputLabel: '描述您的营销业务...',
    inputPlaceholder: '例如：专门从事B2B公司社交媒体和内容营销的数字营销机构',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['专业与战略', '创意与大胆', '现代与动态', '以结果为中心'],
        default: '专业与战略',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in marketing agencies, advertising firms, and promotional services businesses. Your role is to generate professional, innovative business names that convey creativity, strategic thinking, and marketing expertise.

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
      { title: '营销机构启动', description: '新的营销机构使用该生成器来寻找能够立即传达创意、战略和业务增长专业知识的名称。专业名称有助于建立信誉并吸引寻求营销合作伙伴的客户。' },
      { title: '数字营销公司品牌塑造', description: '以数字为中心的机构使用该生成器来创建名称，建议具有现代、技术精通的营销能力。合适的名称将其服务定位为对想要有效在线展现的企业至关重要。' },
      { title: '专业营销咨询公司身份', description: '专门从事特定行业或营销渠道的顾问使用该生成器来寻找反映其专业知识的名称。独特的名称吸引寻求专业营销知识的客户。' },
    ],
    faqs: [
      { question: '什么是好的营销企业名称？', answer: '好的营销品牌名称应该专业且创新、容易记住且有影响力、反映您的营销重点。它应该传达您为客户带来的创意和战略方法。' },
      { question: '我应该在业务名称中包含"营销"吗？', answer: '它提供了清晰度，但不是必需的。像"GrowthForce"或"BrandBoost"这样的名称可以有效地传达营销重点。考虑显式描述还是暗示品牌塑造是否适合您的定位。' },
      { question: '创意在营销机构名称中有多重要？', answer: '非常重要。您的名称是对您创意能力的第一次展示。聪明、令人难忘的名称表明您会为客户活动带来同样的创意。' },
      { question: '什么词语适用于营销企业名称？', answer: '诸如增长、影响、战略、品牌、创意和结果之类的词语效果很好。行动词汇（推进、启动、提升）和创新词汇（优势、前沿、先驱）也引起共鸣。' },
      { question: '我的营销机构名称应该反映我的专业吗？', answer: '如果您专门从事特定渠道或行业，提示可以吸引理想的客户。"SocialSurge"或"ContentCraft"清楚地表达了您的专注领域。' },
      { question: '我如何使我的营销机构名称容易记住？', answer: '使用动态、面向行动的语言、创建复合词或以全新的方式组合熟悉的术语。通过要求人们在听一遍后回想您的名称来测试可记忆性。' },
      { question: '我可以在营销企业名称中使用隐喻吗？', answer: '营销隐喻效果很好。建议推进、增长或影响的名称（RocketGrowth、ImpactEngine）传达了客户对您服务的期望。' },
      { question: '我应该在名称中考虑客户行业吗？', answer: '如果服务于特定行业，与行业相关的名称会有所帮助。"MarketMomentum"等通用名称适用于不同的客户，而"HealthCare Marketing Group"针对特定行业。' },
      { question: '我如何检查我的营销企业名称是否可用？', answer: '搜索现有营销机构，检查域名可用性，验证社交媒体句柄，并进行商标搜索。营销竞争激烈，因此彻底检查很重要。' },
      { question: '我应该避免哪些营销机构命名错误？', answer: '避免过于通用的名称、听起来像其他每个机构的名称或承诺不现实结果的名称。同样避免限制未来服务扩展的名称。' },
    ],
    howToChoose: {
      intro: '为您的营销业务选择完美的名称对于建立与将信任您其品牌增长的客户的信誉至关重要。您的业务名称将出现在提案、演示文稿和营销材料中——它需要传达专业知识和创意能力。',
      steps: [
        { title: '定义您的营销理念', description: '考虑您的方法。您是数据驱动、创意集中还是战略优先的吗？您的名称应该暗示您的方法论以及使您的机构与众不同之处。' },
        { title: '识别您的目标客户', description: '确定您是针对初创企业、企业、特定行业还是一般业务。将您的名称风格与您的理想客户档案匹配。' },
        { title: '集思广益相关关键词', description: '列出与营销相关的词语：增长、品牌、战略、创意、影响。包含行动词：推进、启动、驱动、提升。添加结果词：结果、成功、势头。' },
        { title: '创建名称组合', description: '混合关键词与命名模式。尝试以行动为重点的结构（PropelMarketing）、复合概念（GrowthEngine）或战略名称（BlueprintBrand）。生成多个选项。' },
        { title: '测试专业影响', description: '评估每个名称的商业吸引力。听起来像是公司会信任的营销合作伙伴吗？会在提案和演示中给人留下深刻印象吗？' },
        { title: '检查可用性', description: '验证您的首选项是否有域名、社交媒体句柄和商标冲突。在营销中，您的在线展现是您的第一个营销活动。' },
        { title: '考虑视觉身份', description: '想象您选择的名称出现在名片、演示文稿和案例研究中。它传达专业精神和营销专业知识吗？选择增强您的品牌的名称。' },
      ],
    },
    businessNameIdeas: [
      { name: '推动传播', description: '将客户推广推向成功的营销企业。' },
      { name: '品牌增强', description: '建议营销企业增强品牌认知度。' },
      { name: '增长掌控', description: '对驱动业务增长的战略有坚实掌握。' },
      { name: '影响引擎', description: '推动有影响力活动的营销企业。' },
      { name: '市场势头', description: '在市场中建立和维持势头。' },
      { name: '优化优势', description: '通过竞争营销优势提升客户。' },
      { name: '品牌蓝图', description: '为成功的品牌塑造创建战略蓝图。' },
      { name: '触及火箭', description: '将客户触及范围火箭推升到新高度。' },
      { name: '战略工作室', description: '专注于营销战略开发的工作室。' },
      { name: '活动工艺', description: '精心打造有效、引人注目的营销活动。' },
      { name: '影响力冲击', description: '专注于有影响力营销战略的营销。' },
      { name: '可见性风险', description: '冒险拓展客户品牌意识的可见性。' },
      { name: '转化催化剂', description: '通过战略营销催化转化。' },
      { name: '观众建筑师', description: '构建观众增长和参与战略。' },
      { name: '参与引擎', description: '为客户成功和增长推动参与。' },
      { name: '潜在客户启动', description: '启动提供的潜在客户生成活动。' },
      { name: '热度构建', description: '围绕客户品牌建立热度和兴奋。' },
      { name: '收入上升', description: '专注于提高客户收益结果的营销。' },
      { name: '媒体磁石', description: '为客户吸引媒体关注和报道。' },
      { name: '增长大师', description: '营销驱动的业务增长专家。' },
    ],
  },
  'music': {
    slug: 'music',
    name: '音乐企业名称生成器',
    title: '免费 AI 音乐企业名称创意生成器',
    description: '为音乐企业、唱片公司、工作室和音乐相关企业生成富有表现力、表达性的名称。',
    metaDescription: '使用我们免费的人工智能生成器用完美的名称创作您的音乐业务成功。立即尝试！',
    inputLabel: '描述您的音乐业务...',
    inputPlaceholder: '例如：一个专门为独立艺术家从事嘻哈和R&B的音乐制作工作室',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['创意与艺术', '专业与行业', '现代与时尚', '经典与永恒'],
        default: '创意与艺术',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in music businesses, record labels, studios, and music-related enterprises. Your role is to generate evocative, expressive business names that capture the artistry, emotion, and creative spirit of the music industry.

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
      { title: '音乐制作工作室启动', description: '工作室所有者使用该生成器来寻找能够立即传达创意卓越和专业音质的名称。独特的名称有助于吸引寻求制作合作伙伴的艺术家。' },
      { title: '唱片公司品牌塑造', description: '新的唱片公司使用该生成器来创建建议其音乐愿景和艺术家发展理念的名称。合适的名称吸引与唱片公司艺术方向产生共鸣的音乐家。' },
      { title: '音乐学校身份', description: '音乐教育工作者和学院使用该生成器来寻找表达学习、技能发展和音乐热情的名称。鼓舞人心的名称吸引渴望发展音乐才华的学生。' },
    ],
    faqs: [
      { question: '什么是好的音乐企业名称？', answer: '好的音乐品牌名称应该富有表现力和表达性、容易记住和朗朗上口、反映您的音乐身份。它应该捕捉音乐的艺术性和情感。' },
      { question: '我应该在业务名称中包含"音乐"吗？', answer: '它提供了清晰度，但不是必需的。"SonicWave"或"HarmonyHouse"等名称清楚地表明音乐焦点。考虑显式描述还是暗示品牌塑造是否更适合您的定位。' },
      { question: '情感在音乐企业名称中有多重要？', answer: '非常重要。音乐本质上是情感的。唤起感受和建议艺术表达的名称将与音乐家和音乐爱好者产生共鸣。' },
      { question: '什么词语适用于音乐企业名称？', answer: '诸如声音、音速、旋律、和声、节奏、节拍和波浪之类的词语效果很好。情感词汇（灵魂、激情、精神）和运动词汇（流动、脉搏、沟槽）也引起共鸣。' },
      { question: '我的音乐企业名称应该反映我的流派吗？', answer: '如果您专门从事特定流派，细微提示有助于吸引理想客户。"Jazz Junction"或"RockHouse Studios"清楚地表达了您的专注。' },
      { question: '我如何使我的音乐企业名称容易记住？', answer: '使用音乐意象、有节奏的词语组合或富有表现力的语言。测试名称在说出时的效果——它应该具有令人愉快、容易记住的品质。' },
      { question: '我可以在业务名称中使用音乐术语吗？', answer: '绝对可以。诸如"Studio"、"Records"、"Sound"和"Productions"之类的术语可以立即传达音乐行业焦点和专业性。' },
      { question: '我应该考虑流媒体平台的存在吗？', answer: '是的。确保您的名称在Spotify、Apple Music和其他平台上效果良好。检查现有艺术家或唱片公司是否有相似的名称以避免混淆。' },
      { question: '我如何检查我的音乐企业名称是否可用？', answer: '搜索音乐行业数据库、检查域名和社交媒体句柄、验证流媒体平台、进行商标搜索。音乐是全球性的——彻底检查。' },
      { question: '我应该避免哪些音乐企业命名错误？', answer: '避免名称与著名艺术家或唱片公司过于相似、难以拼写或发音或不传达音乐关联。同样避免过于时尚可能会过时的名称。' },
    ],
    howToChoose: {
      intro: '为您的音乐企业选择完美的名称对于创建与艺术家和音乐爱好者产生共鸣的品牌至关重要。您的业务名称将出现在录音、流媒体平台和营销材料中——它需要捕捉音乐的创意精神和情感力量。',
      steps: [
        { title: '定义您的音乐愿景', description: '考虑您的艺术方向。您专注于特定流派、新兴艺术家还是成熟的专业人士？您的名称应该暗示您的音乐理念和风格。' },
        { title: '识别您的目标受众', description: '确定您是否为独立艺术家、大唱片公司艺术家、学生或一般音乐消费者服务。使您名称的语气与您的观众期望相匹配。' },
        { title: '集思广益相关关键词', description: '列出与音乐相关的词语：声音、旋律、节奏、和声、节拍。包含情感词：灵魂、激情、沟槽、精神。添加描述性词：工作室、制作、记录、房子。' },
        { title: '创建名称组合', description: '混合关键词与命名模式。尝试唤起结构（SonicSanctuary）、复合概念（RhythmLab）或描述性短语（Harmony House）。生成多个选项。' },
        { title: '测试音乐吸引力', description: '评估每个名称的艺术品质。听起来像是音乐家想要关联的名称吗？它传达创意和专业性吗？' },
        { title: '检查可用性', description: '验证您的首选项是否有域名、社交媒体句柄、流媒体平台和商标冲突。在音乐中，跨平台的一致存在至关重要。' },
        { title: '考虑行业感知', description: '想象您的选择名称出现在唱片歌词、行业出版物和工作室标牌中。它传达音乐卓越性吗？选择在行业中赢得尊重的名称。' },
      ],
    },
    businessNameIdeas: [
      { name: '和谐地平线', description: '提供和谐音乐视野和体验的音乐企业。' },
      { name: '旋律大师', description: '暗示对旋律音乐创作和制作的掌握。' },
      { name: '节奏领域', description: '节奏音乐和创意表达的领域。' },
      { name: '音速交响乐', description: '声音交响乐和音乐体验。' },
      { name: '节拍幸福', description: '提供幸福节拍和制作的音乐企业。' },
      { name: '调调宝藏', description: '调调和音乐创作的宝藏库。' },
      { name: '节奏狂喜', description: '狂喜的节奏和迷人的音乐体验。' },
      { name: '旋律草地', description: '美丽旋律和作曲的草地。' },
      { name: '声音圣所', description: '声音和音乐创作的圣所。' },
      { name: '和谐港湾', description: '和声音乐和艺术家的港湾。' },
      { name: '沟槽工会', description: '以沟槽为中心的音乐家和制作人的工会。' },
      { name: '音频艺术性', description: '对音频和音乐创作的艺术方法。' },
      { name: '脉搏宫殿', description: '跳动音乐和动态节拍的宫殿。' },
      { name: '回声精髓', description: '通过回声和声音捕捉音乐的精髓。' },
      { name: '充满活力的氛围', description: '充满活力的音乐气氛和精力充沛的制作。' },
      { name: '节奏工艺', description: '在音乐创作中打造完美的节奏。' },
      { name: '灵魂音声', description: '灵魂和情感共鸣的音乐。' },
      { name: '波浪工作', description: '与声波合作创作音乐魔力。' },
      { name: '音符纽带', description: '音乐音符和创作的纽带点。' },
      { name: '速度部落', description: '由速度和音乐热情团结的部落。' },
    ],
  },
  'perfume': {
    slug: 'perfume',
    name: '香水企业名称生成器',
    title: '免费 AI 香水企业名称创意生成器',
    description: '为香水品牌、香水屋和基于香气的企业生成优雅、感官的名称。',
    metaDescription: '用我们免费的人工智能生成器提升您的香水企业名称品牌。快速、免费和创意！',
    inputLabel: '描述您的香水业务...',
    inputPlaceholder: '例如：使用天然成分创作定制香水的奢华工匠香水屋',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['优雅与奢华', '天然与植物', '现代与简约', '浪漫与感官'],
        default: '优雅与奢华',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in perfume brands, fragrance houses, and scent-based businesses. Your role is to generate elegant, sensual business names that capture the beauty, sophistication, and allure of fine fragrances.

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
      { title: '工匠香水品牌推出', description: '推出香水线的调香师使用该生成器来寻找能够立即传达奢华、艺术性和嗅觉卓越性的名称。优雅的名称有助于建立声誉并吸引香水鉴赏家。' },
      { title: '天然香水品牌身份', description: '天然和有机香水品牌使用该生成器来创建建议纯净和植物美感的名称。合适的名称吸引寻求干净、真实香气体验的客户。' },
      { title: '奢华香水屋品牌塑造', description: '奢华香水屋使用该生成器来寻找传达精致和独占性的名称。声誉卓著的名称将品牌定位在精英香水产品中。' },
    ],
    faqs: [
      { question: '什么是好的香水企业名称？', answer: '好的香水品牌名称应该优雅和感官、容易记住和描述性、反映您的香水系列。它应该唤起美、精致和精美香水的魅力。' },
      { question: '我应该在名称中包含"香水"或"香水"吗？', answer: '它提供了清晰度，但不是必需的。"Essence Atelier"或"Scented Symphony"等名称优雅地传达了香水焦点。考虑显式描述还是暗示品牌塑造是否适合您的定位。' },
      { question: '优雅在香水品牌名称中有多重要？', answer: '极其重要。香水与奢华、美和精致有关。优雅的名称创造正确的期望并吸引寻求优质香水的客户。' },
      { question: '什么词语适用于香水企业名称？', answer: '诸如精髓、香气、香气、香水和诱惑之类的词语效果很好。自然词汇（盛开、茉莉、兰花）和奢华词汇（豪华、声誉、豪华）也引起共鸣。' },
      { question: '我的香水品牌名称应该反映我的香气风格吗？', answer: '如果您专门从事花香、东方或木质香水，提示可以吸引理想的客户。"Floral Fantasy"或"Oriental Essence"传达了您的签名风格。' },
      { question: '我如何使我的香水品牌名称容易记住？', answer: '使用感官、唤起语言来建议香气体验。选择具有令人愉快声音和浪漫关联的词语。测试国际发音以获得全球吸引力。' },
      { question: '我可以在香水企业名称中使用法文词汇吗？', answer: '法文词汇为香水品牌增添了优雅和真实性。诸如"Parfum"、"Maison"和"Atelier"之类的术语传达了精致和香水行业遗产。' },
      { question: '我应该在名称中考虑国际市场吗？', answer: '香水是全球行业。确保您的名称翻译良好，避免其他语言的负面含义，并在国际上听起来优雅。' },
      { question: '我如何检查我的香水品牌名称是否可用？', answer: '搜索现有香水品牌、检查域名可用性、验证社交媒体句柄、进行商标搜索。香水具有竞争性——彻底检查。' },
      { question: '我应该避免哪些香水品牌命名错误？', answer: '避免名称与著名香水屋过于相似、难以发音或缺乏优雅。同样避免限制您的香水范围或市场定位的名称。' },
    ],
    howToChoose: {
      intro: '为您的香水企业选择完美的名称对于创建迷住香水爱好者的品牌至关重要。您的业务名称将出现在瓶子、包装和营销材料中——它需要传达香气创作的优雅和诱惑。',
      steps: [
        { title: '定义您的香水理念', description: '考虑您的嗅觉方向。您专注于天然成分、奢华混合还是特定香气系列？您的名称应该暗示您的香水艺术性。' },
        { title: '了解您的目标受众', description: '确定您是针对奢华消费者、天然美容寻求者还是特定人口统计。将名称的精致程度与理想客户的偏好相匹配。' },
        { title: '集思广益相关关键词', description: '列出与香水相关的词语：香气、精髓、香气、香水、香水。包含感官词：诱惑、着迷、迷住。添加自然词：盛开、花园、花卉、木质。' },
        { title: '创建名称组合', description: '混合关键词与命名模式。尝试优雅的结构（Essence Atelier）、感官短语（Allure Alchemy）或自然启发的名称（Bloom & Blossom）。生成多个选项。' },
        { title: '测试优雅度', description: '评估每个名称的奢华吸引力。听起来像是客户会信任精美香水的品牌吗？它在香水瓶上看起来会很高贵吗？' },
        { title: '检查可用性', description: '验证您的首选项是否有域名、社交媒体句柄和商标冲突。在香水行业，全球品牌保护很重要。' },
        { title: '想象品牌', description: '想象您的选择名称出现在香水瓶、包装和精品店标牌中。它传达您香水的优雅和诱惑吗？相应选择。' },
      ],
    },
    businessNameIdeas: [
      { name: '香气幻想', description: '提供美丽香水幻想的香水企业。' },
      { name: '香气交响乐', description: '暗示香气和嗅觉体验的交响乐。' },
      { name: '香气拱廊', description: '香气香水发现的拱廊。' },
      { name: '精髓帝国', description: '精美香水精髓的帝国。' },
      { name: '花朵花束', description: '花朵启发香气和香水的花束。' },
      { name: '花卉融合', description: '花香和配方的融合。' },
      { name: '香水天堂', description: '香水和香气体验的天堂。' },
      { name: '香气炼金术', description: '创造芳香香水的炼金术方法。' },
      { name: '香气圣所', description: '芳香美味和香水的圣所。' },
      { name: '花朵微风', description: '微风花朵香气和新鲜香气。' },
      { name: '天鹅绒蒸气', description: '柔软、奢华的香水体验。' },
      { name: '神秘模式', description: '神秘、迷人的香水创作。' },
      { name: '豪华气味', description: '豪华、丰富的香水成分。' },
      { name: '豪华迷宫', description: '奢华香气探索的迷宫。' },
      { name: '着迷精髓', description: '着迷的精髓和魔法香水。' },
      { name: '丝香', description: '丝般光滑、精致的香水体验。' },
      { name: '光环工作室', description: '精心打造美丽香气光环的工作室。' },
      { name: '花瓣香水', description: '花瓣启发的香水和花香。' },
      { name: '花蜜细微差别', description: '细致的花蜜香水和配方。' },
      { name: '感官喷雾', description: '感官喷雾香水和诱人香气。' },
    ],
  },
  'photography': {
    slug: 'photography',
    name: '摄影企业名称生成器',
    title: '免费 AI 摄影企业名称创意生成器',
    description: '为摄影企业、工作室和视觉艺术家生成创意、专业的名称。',
    metaDescription: '寻找摄影企业的吸引人名称？让人工智能为您完成工作，无需成本！',
    inputLabel: '描述您的摄影业务...',
    inputPlaceholder: '例如：专门从事坦率纪录风格图像的婚礼和肖像摄影工作室',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['创意与艺术', '专业与经典', '现代与时尚', '优雅与永恒'],
        default: '创意与艺术',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in photography businesses, studios, and visual artists. Your role is to generate creative, professional business names that convey artistic vision, technical expertise, and the ability to capture meaningful moments.

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
      { title: '肖像摄影工作室推出', description: '肖像摄影师使用该生成器来寻找能够立即传达他们捕捉个性和情感的能力的名称。专业名称有助于吸引寻求有意义、高质量肖像的客户。' },
      { title: '婚礼摄影品牌塑造', description: '婚礼摄影师使用该生成器来创建建议浪漫、庆祝和捕捉千载难逢时刻能力的名称。合适的名称吸引寻求完美婚礼摄影师的新婚夫妇。' },
      { title: '商业摄影身份', description: '商业摄影师使用该生成器来寻找传达专业精神和技术专业知识的名称。以业务为中心的名称吸引寻求产品、建筑或企业摄影服务的公司。' },
    ],
    faqs: [
      { question: '什么是好的摄影企业名称？', answer: '好的摄影企业名称应该反映您的风格和专业领域、容易记住和发音、可用于域名注册和社交媒体句柄。' },
      { question: '我应该在业务名称中包含"摄影"吗？', answer: '它提供了清晰度并有助于可搜索性。然而，"Captured Moments"或"Light & Frame"等创意名称可以很好地工作。考虑您的市场和定位。' },
      { question: '我的名称对吸引客户有多重要？', answer: '非常重要。您的名称通常是潜在客户的第一印象。专业、容易记住的名称表明工作质量并帮助客户记住您以获取推荐。' },
      { question: '什么词语适用于摄影企业名称？', answer: '诸如捕捉、框架、焦点、光线、镜头和时刻之类的词语效果很好。艺术词汇（画布、肖像、愿景）和情感词汇（记忆、故事、梦想）也引起共鸣。' },
      { question: '我的摄影企业名称应该反映我的专业吗？', answer: '如果您专门从事婚礼、肖像或商业工作，提示可以吸引理想的客户。"Wedding Moments"或"Corporate Focus"清楚地传达了您的细节。' },
      { question: '我如何使我的摄影企业名称容易记住？', answer: '使用视觉意象、头韵或创意词语组合。保持简短（2-3个词），易于拼写，并确保易于通过口碑分享。' },
      { question: '我可以在摄影企业中使用我自己的名字吗？', answer: '个人名称对摄影师效果很好，因为个人声誉很重要。"Sarah Mills Photography"与想要认识摄影师的客户建立了个人联系。' },
      { question: '我应该在摄影企业名称中考虑搜索引擎优化吗？', answer: '在名称中包含位置或专业可以帮助本地搜索引擎优化。"Denver Portrait Studio"或"Chicago Wedding Photography"可能会帮助提高搜索能见度，但可能会限制地理扩展。' },
      { question: '我如何检查我的摄影企业名称是否可用？', answer: '搜索现有摄影企业、检查域名可用性、验证社交媒体句柄（尤其是Instagram）、进行商标搜索。' },
      { question: '我应该避免哪些摄影企业命名错误？', answer: '避免过于通用的名称、难以拼写的名称或与您所在地区的已建立摄影师相似的名称。同样避免限制您的摄影范围的名称。' },
    ],
    howToChoose: {
      intro: '为您的摄影企业选择完美的名称对于创建吸引寻求美丽、有意义图像的客户的品牌至关重要。您的业务名称将出现在您的作品集、社交媒体和营销材料中——它需要传达您的艺术愿景和专业能力。',
      steps: [
        { title: '定义您的摄影风格', description: '考虑您的艺术方法。您是纪录风格、美术、经典还是现代？您的名称应该暗示客户可以期望的美学和体验。' },
        { title: '确定您的目标客户', description: '确定您服务的人群。家庭、夫妇、企业还是艺术家？使您名称的语气与您的理想客户期望和情感需求相匹配。' },
        { title: '集思广益相关关键词', description: '列出与摄影相关的词语：捕捉、焦点、光线、框架、镜头。包含情感词：记忆、时刻、故事、梦想。添加描述性词：工作室、图像、照片、视觉。' },
        { title: '创建名称组合', description: '混合关键词与命名模式。尝试视觉结构（Light & Shadow）、以时刻为中心的名称（Captured Memories）或艺术短语（Visual Poetry）。生成多个选项。' },
        { title: '测试可记忆性', description: '大声说出名称并与朋友测试。它是否容易说出？听到时是否容易拼写？摄影企业严重依赖口碑推荐。' },
        { title: '检查可用性', description: '验证您的首选项是否有域名、社交媒体句柄（尤其是Instagram）和商标冲突。在线展现对摄影师至关重要。' },
        { title: '想象您的作品集', description: '想象您的选择名称出现在您的作品集网站、名片和水印中。它补充您的摄影风格吗？选择增强您视觉品牌的名称。' },
      ],
    },
    businessNameIdeas: [
      { name: '快门传奇', description: '表示摄影的故事方面。' },
      { name: '捕捉画布', description: '暗示将照片变成艺术画布。' },
      { name: '像素先驱', description: '先锋的像素完美摄影方法。' },
      { name: '焦点寓言', description: '聚焦摄影讲述寓言和故事。' },
      { name: '明亮的镜头', description: '捕捉明亮、充满光线图像的摄影。' },
      { name: '框架融合', description: '完美框架和艺术愿景的融合。' },
      { name: '时刻制造者', description: '创建和捕捉有意义的时刻。' },
      { name: '愿景金库', description: '视觉财富和摄影愿景的金库。' },
      { name: '快照交响乐', description: '完美拍摄照片的交响乐。' },
      { name: '辐射卷轴', description: '辐射摄影和视觉故事。' },
      { name: '镜头遗产', description: '通过镜头创建摄影遗产。' },
      { name: '闪光寓言', description: '讲述视觉寓言的闪光摄影。' },
      { name: '图像诗歌', description: '作为视觉诗歌和表达的摄影。' },
      { name: '光圈艺术', description: '通过光圈掌握的艺术方法。' },
      { name: '静止故事', description: '讲述引人注目故事的静止图像。' },
      { name: '黄金凝视', description: '捕捉美好时刻的黄金凝视。' },
      { name: '坦率编年史', description: '坦率、真实摄影的编年史。' },
      { name: '记忆马赛克', description: '创建珍贵回忆的马赛克。' },
      { name: '快门灵魂', description: '捕捉受试者灵魂的摄影。' },
      { name: '永恒触发', description: '触发永恒摄影回忆。' },
    ],
  },
  'print-shop': {
    slug: 'print-shop',
    name: '印刷店企业名称生成器',
    title: '免费 AI 印刷店企业名称创意生成器',
    description: '为印刷店、印刷服务和图形制作企业生成专业、多功能的名称。',
    metaDescription: '用杰出的印刷店名称打印您的成功故事。我们的人工智能工具制作独特的名称，无需价格标签！',
    inputLabel: '描述您的印刷店业务...',
    inputPlaceholder: '例如：提供大幅印刷、标牌和定制商品的商业印刷店',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['专业与可靠', '现代与创意', '快速与高效', '质量专注'],
        default: '专业与可靠',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in print shops, printing services, and graphic production businesses. Your role is to generate professional, versatile business names that convey quality printing, creative capability, and reliable production services.

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
      { title: '商业印刷店启动', description: '印刷店所有者使用该生成器来寻找能够立即传达专业印刷能力和质量的名称。可靠的名称有助于吸引寻求可靠的印刷合作伙伴的企业客户。' },
      { title: '定制印刷业务品牌塑造', description: '定制商品和专业打印机使用该生成器来创建建议创意和个性化的名称。合适的名称吸引寻求独特、定制打印产品的客户。' },
      { title: '数字印刷服务身份', description: '现代数字打印机使用该生成器来寻找传达技术能力和快速周转的名称。当代名称吸引寻求高效、高质量数字印刷的客户。' },
    ],
    faqs: [
      { question: '什么是好的印刷店企业名称？', answer: '好的印刷店品牌名称应该专业且多功能、容易记住且有影响力、反映您的印刷专业知识。它应该传达质量和可靠性。' },
      { question: '我应该在业务名称中包含"print"吗？', answer: '它提供了立即清晰度并有助于可搜索性。然而，"Ink Express"或"Press Perfect"等名称也可以有效地传达打印焦点而不是通用的。' },
      { question: '专业精神在印刷店名称中有多重要？', answer: '非常重要。企业信任打印机进行营销材料和品牌身份。专业名称建立信心并表明高质量输出。' },
      { question: '什么词语适用于印刷店名称？', answer: '诸如打印、印刷、油墨、副本和图形之类的词语效果很好。质量词（溢价、美好、精密）和服务词（快速、定制、解决方案）也引起共鸣。' },
      { question: '我的印刷店名称应该反映我的专业吗？', answer: '如果您专门从事大幅面、定制商品或企业印刷，提示可以吸引理想的客户。"Banner Pros"或"Corporate Print Solutions"传达了您的专注。' },
      { question: '我如何使我的印刷店名称容易记住？', answer: '使用强大的视觉词语、头韵或创意组合。保持简洁、专业，当客户需要打印服务时易于回忆。' },
      { question: '我应该在名称中考虑速度或质量吗？', answer: '"Express"表示速度，而"Precision"表示质量。两者在印刷中都很有价值。根据您的主要竞争优势进行选择。' },
      { question: '我应该在名称中考虑本地市场吗？', answer: '本地印刷店通常受益于基于位置的名称以获取搜索引擎优化和社区认可。但是，如果您计划扩展，请避免过度限制地理参考。' },
      { question: '我如何检查我的印刷店名称是否可用？', answer: '搜索现有打印企业、检查域名可用性、验证社交媒体句柄、进行商标搜索。同样检查您所在地区的本地商务目录。' },
      { question: '我应该避免哪些印刷店命名错误？', answer: '避免过于通用的名称（如"Print Services"）、听起来过时或限制您的服务范围的名称。同样避免与全国打印链相似的名称。' },
    ],
    howToChoose: {
      intro: '为您的印刷店选择完美的名称对于创建吸引寻求质量印刷服务的客户的品牌至关重要。您的业务名称将出现在标牌、发票和营销材料中——它需要传达专业精神和印刷专业知识。',
      steps: [
        { title: '定义您的印刷服务', description: '考虑您的核心产品。您专注于商业印刷、定制商品、大幅面还是一般商业印刷？您的名称应该暗示您的能力。' },
        { title: '确定您的目标客户', description: '确定您是否为企业、个人、特定行业或一般公众服务。使您名称的语气与您的理想客户期望相匹配。' },
        { title: '集思广益相关关键词', description: '列出与印刷相关的词语：打印、印刷、油墨、副本、图形。包含质量词：溢价、精密、质量、美好。添加服务词：快速、定制、解决方案。' },
        { title: '创建名称组合', description: '混合关键词与命名模式。尝试专业结构（Precision Print Co.）、以服务为中心的名称（Express Graphics）或创意短语（Ink Innovation）。生成多个选项。' },
        { title: '测试专业吸引力', description: '评估每个名称的商业吸引力。听起来像是企业会信任其材料的打印机吗？会在报价和发票上激发信心吗？' },
        { title: '检查可用性', description: '验证您的首选项是否有域名、社交媒体句柄和商标冲突。对于本地印刷店，同样检查您所在地区的Google Business列表。' },
        { title: '考虑标牌影响', description: '想象您的选择名称出现在店面标牌、车辆和营销材料中。它传达您的印刷服务的专业精神和质量吗？相应选择。' },
      ],
    },
    businessNameIdeas: [
      { name: '像素天堂', description: '提供像素完美印刷天堂的印刷店。' },
      { name: '印记想象', description: '将想象力印记到每个印刷项目中。' },
      { name: '印刷完美', description: '在每个印刷运行中追求完美。' },
      { name: '油墨创新', description: '对油墨和印刷的创新方法。' },
      { name: '打印脉搏', description: '质量印刷服务的脉搏。' },
      { name: '图形工会', description: '图形和印刷专业人士的工会。' },
      { name: '彩色工艺', description: '在每个印刷中精心打造美丽的颜色。' },
      { name: '副本画布', description: '将副本变成画布质量的印刷品。' },
      { name: '精密印刷', description: '每个印刷操作的精密性。' },
      { name: '设计下降', description: '将设计下降到质量印刷中。' },
      { name: '油墨洞察', description: '对油墨和印刷的有见地的方法。' },
      { name: '打印先驱', description: '先驱印刷解决方案和服务。' },
      { name: '质量羽毛笔', description: '现代印刷的羽毛笔质量精度。' },
      { name: '快速打印', description: '印刷服务的快速速度。' },
      { name: '媒体制造商', description: '通过印刷和图形制作媒体。' },
      { name: '纸脉搏', description: '纸质印刷卓越的脉搏。' },
      { name: '生动愿景', description: '生动、充满活力的印刷愿景和输出。' },
      { name: '完成第一', description: '印刷制作中的一流完成。' },
      { name: '定制工艺', description: '精心打造定制印刷解决方案。' },
      { name: '打印专家', description: '专业印刷服务和解决方案。' },
    ],
  },
  'real-estate': {
    slug: 'real-estate',
    name: '房地产企业名称创意生成器',
    title: '免费 AI 房地产企业名称创意生成器',
    description: '为房地产公司、房产中介和不动产服务生成值得信赖、可信度高的企业名称。',
    metaDescription: '轻松找到完美的房地产企业名称。我们的AI工具无需付费，无需复杂流程，只需创意为您的房产事业添彩！',
    inputLabel: '描述您的房地产企业...',
    inputPlaceholder: '例如：一家高端住宅房地产中介，专注于高净值客户在沿海市场的服务',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['专业可信', '奢华高端', '现代活力', '传统稳重'],
        default: '专业可信',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in real estate companies, property agencies, and realty services. Your role is to generate trustworthy, credible business names that convey professionalism and expertise in property transactions.

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
      { title: '新房地产中介创业', description: '首次创办房地产中介的企业家使用生成器寻找能够立即传达信任和专业性的名称。可信的企业名称能够吸引正在做出重大经济决策的买家和卖家。' },
      { title: '高端房地产公司品牌塑造', description: '高端房地产公司使用生成器创建表明专属性和高级服务的名称。合适的名称将企业定位为寻求卓越房产和白手套服务的尊贵客户的目标。' },
      { title: '物业管理公司身份建设', description: '物业管理公司使用生成器寻找能够传达可靠性和专业性的名称。强大的名称向房产业主保证其投资在有能力的手中，同时吸引优质租户。' },
    ],
    faqs: [
      { question: '什么样的房地产企业名称才是优秀的？', answer: '优秀的房地产企业名称应该可信可靠、令人难忘且专业，并反映您的房地产专业方向。它应该能够激发客户对重大房产决策的信心。' },
      { question: '我应该在企业名称中包含"房地产"或"房产"吗？', answer: '包含行业术语能够提供清晰性，但不是必须的。像"家居港湾"或"地产基石"这样的创意名称同样有效，同时保持专业吸引力。' },
      { question: '地理位置对房地产企业名称有多重要？', answer: '地理位置对本地代理非常有价值，但可能会限制扩展。考虑您是需要地区身份还是为潜在增长寻求更广泛的吸引力。' },
      { question: '哪些词汇适合房地产企业名称？', answer: '像"地产""房产""家""物业""顶级""精选""传承""遗产""钥匙"和"远景"这样的词汇效果很好。像"基石"和"方舟"这样的信任导向词汇也非常有效。' },
      { question: '我的房地产名称应该反映我的专业方向吗？', answer: '如果您专门从事奢华、商业或特定社区房产，在企业名称中暗示您的专业方向可以帮助吸引合适的客户。"奢华生活地产"清晰传达了您的市场定位。' },
      { question: '我如何使我的房地产企业名称具有可信度？', answer: '使用能够唤起稳定性、传承和专业性的词汇。避免对于一个建立在信任和重大经济决策基础上的行业来说看起来华而不实的潮流术语。' },
      { question: '我可以在房地产企业名称中使用自己的名字吗？', answer: '个人名字在房地产行业很常见（例如"约翰逊房地产"）。它们建立个人品牌认可度，但可能会复杂化未来的销售或合作。' },
      { question: '房地产企业名称如何影响客户信任和交易成功？', answer: '在房地产中，信任是最关键的。您的企业名称应该立即传达专业性、诚信和市场知识。一个专业的、令人难忘的名称如"Heritage Homes"或"Prime Properties Group"建立了立即的可信度，使潜在客户更倾向于与您合作来进行最大的购买决定。客户判断您的可信度和专业精神的很大程度上取决于您名称的专业性和清晰性，所以选择一个反映您承诺、诚实和结果的名称。' },
      { question: '房地产代理应该如何在名称中平衡个人品牌与公司身份？', answer: '许多房地产代理使用个人名字（"Sarah Johnson Realty"）来建立个人品牌，而其他人则建立公司身份（"Elite Home Sales"）以支持团队增长。如果您计划建立一个有多个代理的团队或未来出售企业，一个公司名称提供了灵活性。如果您是独立代理，个人名字可以区分您并建立强大的个人声誉。考虑您的长期目标以决定是强调个人还是公司身份。' },
      { question: '房地产企业名称如何支持不同的专业和市场定位？', answer: '选择一个清楚表达您的专业和市场定位的名称至关重要。如果您专注于奢华房产，"Luxury Estates International"或"High-End Homes Collective"会更有效地沟通您的专业，而不是一个通用名称。如果您专门从事投资物业，"Investment Properties Plus"或"Real Estate Investment Advisors"会清楚地向寻求这些具体服务的客户传达。特定的、定位的名称有助于您吸引合适的客户，同时在您的专业中建立专业声誉。' },
    ],
    howToChoose: {
      intro: '为您的房地产企业选择完美的名称对于创建激发客户信任的品牌至关重要。您的企业名称将出现在招牌、营销材料和推荐对话中——它需要传达专业性和房地产专业知识。',
      steps: [
        { title: '确定您的房地产专业方向', description: '确定您的专注点：住宅、商业、奢华、投资或物业管理。您的企业名称应该暗示您的专业知识和目标市场。' },
        { title: '了解您的目标客户', description: '考虑您是否为首次购房者、高端客户、投资者或商业租户服务。不同的客户群体对不同的命名风格做出反应。' },
        { title: '集思广益列出相关关键词', description: '列出与房地产相关的词汇：房产、地产、家、钥匙、基石、顶级、信任。也考虑情感因素：安全感、成就感、机会。' },
        { title: '创建企业名称组合', description: '混合关键词和命名模式。尝试复合词（家园港湾）、头韵（顶级房产）或抱负名称（地产集团峰值）。' },
        { title: '专业性测试', description: '大声说出企业名称。它们听起来值得信赖吗？您会信任这家公司处理买卖您的房产吗？' },
        { title: '检查可用性', description: '验证该名称未被其他代理使用，检查域名可用性，确保社交媒体账户免费，并搜索商标数据库。' },
        { title: '获取专业反馈', description: '与同事、潜在客户或行业联系人分享最终候选者。他们的印象揭示您的企业名称如何在市场中被认知。' },
      ],
    },
    businessNameIdeas: [
      { name: '尊品地产', description: '表示一家房地产企业提供顶级、高质量房产。' },
      { name: '梦想家园', description: '暗示帮助客户找到梦想家园的企业。' },
      { name: '地产帝国', description: '表示拥有庞大房产组合的房地产企业。' },
      { name: '家庭和谐', description: '暗示为购房过程带来和谐与和平的企业。' },
      { name: '房产全景', description: '表示提供广泛房产选择的企业。' },
      { name: '地产光芒', description: '暗示一家闪耀着优秀选择的房地产企业。' },
      { name: '居家天堂', description: '表示寻找完美家园的天堂。' },
      { name: '居所廊道', description: '暗示多样化居所选择的走廊。' },
      { name: '宏伟庄园', description: '表示专门从事宏伟高端庄园房产。' },
      { name: '奢华居所', description: '暗示专注于奢华生活住宅。' },
      { name: '雅致房产', description: '表示从事高端、优雅房地产。' },
      { name: '住宅领域', description: '暗示在整个住宅房产领域的专业知识。' },
      { name: '宏伟豪宅', description: '表示专门从事宏伟、气派的豪宅房产。' },
      { name: '家居视野', description: '暗示扩大家庭所有权的视野和可能性。' },
      { name: '房产巅峰', description: '表示处于房地产服务的巅峰。' },
      { name: '地产优雅', description: '暗示对地产交易的优雅、精致方法。' },
      { name: '地产约会', description: '表示客户与理想房产相遇的地方。' },
      { name: '居所丰富', description: '暗示拥有丰富优质的家居选择。' },
      { name: '家居之光', description: '表示为家园寻求者带来希望之光。' },
      { name: '家居愉悦', description: '暗示令人愉快的家居选择能够满足客户。' },
    ],
  },
  'shoes': {
    slug: 'shoes',
    name: '鞋业企业名称创意生成器',
    title: '免费 AI 鞋业企业名称创意生成器',
    description: '为鞋店、鞋履品牌和运动鞋企业生成时尚、优雅的企业名称。',
    metaDescription: '用我们免费的AI生成器为您的鞋业企业起个出众名字。快速、免费、富有创意！',
    inputLabel: '描述您的鞋业企业...',
    inputPlaceholder: '例如：一家精品运动鞋店，专营限量版和复古运动鞋',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['时尚优雅', '运动活力', '舒适品质', '奢华高端'],
        default: '时尚优雅',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in shoe stores, footwear brands, and athletic shoe businesses. Your role is to generate stylish, fashionable business names that convey quality and style in footwear.

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
      { title: '鞋店零售创业', description: '开办鞋店的企业家使用生成器寻找能够立即传达风格和品质的名称。时尚的企业名称吸引寻求潮流鞋履的客户并建立品牌身份。' },
      { title: '运动鞋品牌创建', description: '运动鞋品牌使用生成器创建暗示性能和活力的名称。合适的名称将产品定位为运动员和活跃人士的首选。' },
      { title: '精品鞋店身份建设', description: '专业鞋店使用生成器寻找传达专属性和精心挑选的名称。独特的企业名称帮助吸引寻求独特风格的时尚意识购物者。' },
    ],
    faqs: [
      { question: '什么样的鞋业企业名称才是优秀的？', answer: '优秀的鞋业企业名称应该时尚优雅、令人难忘且朗朗上口，并反映您的鞋业专业方向。它应该吸引寻求品质鞋履的客户。' },
      { question: '我应该在企业名称中包含"鞋"字吗？', answer: '虽然能够提供清晰性，但不是必须的。像"足底圣殿"或"步履风尚"这样的创意名称同样有效且更容易记忆。' },
      { question: '时尚名称对鞋店有多重要？', answer: '对于时尚前沿的鞋店非常重要，但对舒适或特殊鞋履不太关键。将企业名称的气质与您的目标客户和产品重点相匹配。' },
      { question: '哪些词汇适合鞋业企业名称？', answer: '像"足底""步履""漫步""脚""舒适""风尚"和"鞋带"这样的词汇效果很好。运动店可受益于像"节奏""跑步"和"冲刺"这样的活力词汇。' },
      { question: '我的鞋业名称应该反映我的专业方向吗？', answer: '如果您专门从事运动鞋、高跟鞋或舒适鞋，在企业名称中暗示您的专业方向可以帮助吸引合适的客户。"运动鞋殿堂"清晰传达了您的专业。' },
      { question: '我如何使我的鞋业企业名称令人难忘？', answer: '使用头韵（足底店）、词汇游戏（脚注）或创意复合词（步阶石）。保持简洁、易于发音且富有动感或风尚气息。' },
      { question: '我可以在鞋业企业名称中使用双关语吗？', answer: '鞋履双关语可以趣味生动且令人难忘。像"脚趣"或"这样漫步"这样的名称增加个性，但要确保保持专业吸引力。' },
      { question: '我应该在命名时考虑目标人群吗？', answer: '绝对应该。儿童鞋店可能使用顽皮的名称，而奢华精品需要精致名称。将您的企业名称与您的客户相匹配。' },
      { question: '我如何检查我的鞋业企业名称是否可用？', answer: '搜索同名现有企业，检查域名可用性，验证社交媒体账户，并进行商标搜索。' },
      { question: '鞋业企业命名有哪些常见错误？', answer: '避免与主要鞋履品牌过于相似的名称、拼写困难的词汇或限制您产品范围的名称（例如"仅限高跟鞋"如果您计划扩展）。' },
    ],
    howToChoose: {
      intro: '为您的鞋业企业选择完美的名称对于创建吸引寻求品质鞋履的客户的品牌至关重要。您的企业名称将出现在招牌、购物袋和营销材料上——它需要传达风尚和品质。',
      steps: [
        { title: '确定您的鞋履专业方向', description: '确定您的专业：运动、时尚、舒适、儿童或奢华。您的企业名称应该暗示客户将在店里找到什么。' },
        { title: '了解您的目标客户', description: '考虑您是否为时尚爱好者、运动员、父母或舒适寻求者服务。不同的客户群体对不同的命名风格做出反应。' },
        { title: '集思广益列出相关关键词', description: '列出与鞋履相关的词汇：足底、步履、漫步、舒适、风尚、脚。也考虑情感因素：自信、舒适、冒险。' },
        { title: '创建企业名称组合', description: '混合关键词和命名模式。尝试头韵（足底店）、复合词（步履风尚）或描述性名称（舒适鞋匠）。' },
        { title: '吸引力测试', description: '大声说出企业名称。它们容易发音吗？客户会记得并推荐您吗？与目标客户测试。' },
        { title: '检查可用性', description: '验证该名称未被使用，检查域名可用性，确保社交媒体账户免费，并搜索商标数据库。' },
        { title: '可视化品牌', description: '想象企业名称在招牌、购物袋和网站上。它看起来与听起来一样好吗？考虑logo和品牌潜力。' },
      ],
    },
    businessNameIdeas: [
      { name: '足底圣殿', description: '表示鞋履爱好者的专属地点。' },
      { name: '足履堡垒', description: '暗示坚固可靠的鞋履。' },
      { name: '工匠小屋', description: '表示充满工匠品质鞋履的地方。' },
      { name: '步履盛宴', description: '暗示每一步都有令人兴奋的选择。' },
      { name: '鞋带酒廊', description: '表示放松的鞋带鞋购物空间。' },
      { name: '步阶石', description: '暗示生活每个阶段都有可靠的鞋履。' },
      { name: '舒适小屋', description: '表示专注于舒适、温暖鞋履。' },
      { name: '步履风尚', description: '暗示时尚的漫步风格鞋履。' },
      { name: '漫步奇迹', description: '表示每条小路都有绝妙鞋履。' },
      { name: '节奏天堂', description: '暗示寻找完美节奏的天堂。' },
      { name: '踏面宝藏', description: '表示品质踏面的珍贵鞋履。' },
      { name: '高跟天堂', description: '暗示专门从事高跟鞋。' },
      { name: '足履喷泉', description: '表示品质鞋履选择充足。' },
      { name: '脚趾宝库', description: '暗示所有脚趾和脚的宝库。' },
      { name: '靴履盛宴', description: '表示专门从事靴履款式和多样性。' },
      { name: '运动鞋圣殿', description: '暗示运动鞋爱好者的奉献。' },
      { name: '高跟宫殿', description: '表示高跟鞋和正装鞋的皇家选择。' },
      { name: '莫卡辛山脉', description: '暗示舒适莫卡辛的广泛选择。' },
      { name: '乐福鞋泻湖', description: '表示乐福鞋爱好者的放松目的地。' },
      { name: '步履驿站', description: '暗示所有步履和行走需求的中心。' },
    ],
  },
  'skin-care': {
    slug: 'skin-care',
    name: '护肤企业名称创意生成器',
    title: '免费 AI 护肤企业名称创意生成器',
    description: '为护肤公司、美容品牌和护肤产品线生成温和、滋养的企业名称。',
    metaDescription: '用我们免费的AI生成器为您的护肤企业起个完美名字。快速、免费、富有创意！',
    inputLabel: '描述您的护肤企业...',
    inputPlaceholder: '例如：一个专注于成熟肌肤抗衰老产品的天然有机护肤品牌',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['天然温和', '科学医学', '奢华高端', '清新现代'],
        default: '天然温和',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in skin care companies, beauty brands, and skincare product lines. Your role is to generate gentle, nurturing business names that convey care and radiance.

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
      { title: '护肤品牌推出', description: '推出护肤品的企业家使用生成器寻找能够立即传达滋养照护的名称。温和、光彩的企业名称吸引寻求有效护肤解决方案的客户。' },
      { title: '天然护肤品牌塑造', description: '有机和天然护肤品牌使用生成器创建暗示纯正和植物精华的名称。合适的名称将产品定位为干净、健康的替代品。' },
      { title: '水疗护肤身份建设', description: '水疗和护理中心使用生成器寻找传达放松和转变的名称。舒缓的企业名称为恢复活力的体验设定期望。' },
    ],
    faqs: [
      { question: '什么样的护肤企业名称才是优秀的？', answer: '优秀的护肤企业名称应该温和舒缓、令人难忘且富有光彩，并反映您的护肤哲学。它应该吸引寻求健康、光彩肌肤的客户。' },
      { question: '我应该在企业名称中包含"护肤"吗？', answer: '不一定。像"光彩礁"或"光芒花园"这样的创意名称同样有效，同时提供更广泛的品牌拓展机会。' },
      { question: '天然音感对护肤有多重要？', answer: '如果定位为天然有机很重要，但科学名称对临床品牌很有效。将企业名称的感觉与您的品牌定位和目标客户相匹配。' },
      { question: '哪些词汇适合护肤企业名称？', answer: '像"光彩""光芒""纯净""柔软""温和""清新""明亮""焕新"和"绽放"这样的词汇效果很好。像"天鹅绒"和"丝绸"这样的质地词也很有吸引力。' },
      { question: '我的护肤名称应该反映我的专业方向吗？', answer: '如果您专门从事抗衰老、痘痘护理或天然成分，在企业名称中暗示您的专业方向可以帮助吸引合适的客户。"青春光彩"暗示抗衰老专业知识。' },
      { question: '我如何使我的护肤企业名称令人难忘？', answer: '使用唤起性意象（花园、绽放）、头韵（柔软皮肤）或抱负词汇（光彩、光芒）。保持简洁、易于拼写和发音。' },
      { question: '我可以为护肤使用科学听起来的名称吗？', answer: '可以，科学名称（皮肤、细胞、生物）适合临床或结果驱动的品牌。它们暗示功效和专业知识。' },
      { question: '我应该考虑基于成分的命名吗？', answer: '成分名称（植物、维生素、肽）可以有效，但可能限制未来产品拓展。如果计划多样化产品线，考虑更广泛的名称。' },
      { question: '我如何检查我的护肤企业名称是否可用？', answer: '搜索现有护肤品牌，检查域名可用性，验证社交媒体账户，并进行商标搜索。' },
      { question: '护肤企业命名有哪些常见错误？', answer: '避免与主要品牌过于相似、拼写困难、过度通用或不能唤起护肤益处的名称。' },
    ],
    howToChoose: {
      intro: '为您的护肤企业选择完美的名称对于创建吸引寻求健康、光彩肌肤的客户的品牌至关重要。您的企业名称将出现在包装、营销材料和零售架上——它需要传达您产品提供的滋养照护。',
      steps: [
        { title: '确定您的护肤哲学', description: '确定您的方法：天然、科学、奢华或结果驱动。您的企业名称应该暗示是什么让您的品牌独特。' },
        { title: '了解您的目标客户', description: '考虑您是否为年龄意识客户、天然美容寻求者或临床解决方案寻求者服务。不同的客户群体对不同的命名风格做出反应。' },
        { title: '集思广益列出相关关键词', description: '列出与护肤相关的词汇：光彩、光芒、纯净、柔软、清新、明亮、焕新。也考虑您的主要益处和成分。' },
        { title: '创建企业名称组合', description: '混合关键词和命名模式。尝试基于自然（植物幸福）、抱负性（光芒美容）或复合名称（护肤宁静）。' },
        { title: '吸引力测试', description: '大声说出企业名称。它们听起来温和且有吸引力吗？客户会将它们与健康、美丽肌肤联系起来吗？' },
        { title: '检查可用性', description: '验证该名称未被使用，检查域名可用性，确保社交媒体账户免费，并搜索商标数据库。' },
        { title: '考虑包装吸引力', description: '想象企业名称在产品标签和包装上。它看起来优雅吗？它符合您的可视品牌概念吗？' },
      ],
    },
    businessNameIdeas: [
      { name: '光彩礁', description: '表示帮助实现光彩肌肤的护肤企业。' },
      { name: '光芒花园', description: '暗示产品培养和增强自然光彩。' },
      { name: '柔软小夜曲', description: '表示温和护肤如小夜曲般舒缓。' },
      { name: '光芒奢华', description: '暗示奢华护肤获得光芒效果。' },
      { name: '纯净花瓣', description: '表示纯净、植物启发的护肤。' },
      { name: '天鹅绒远景', description: '暗示护肤创造天鹅绒般光滑肌肤。' },
      { name: '丝绸肌肤', description: '表示产品提供丝绸般光滑效果。' },
      { name: '清新融合', description: '暗示具有清新成分的创新护肤。' },
      { name: '澄清级联', description: '表示适合明亮、清爽肤质的护肤。' },
      { name: '焕新仪式', description: '暗示转变性护肤作为日常仪式。' },
      { name: '绽放美容', description: '表示帮助美容绽放的护肤。' },
      { name: '温柔触感', description: '暗示对敏感肌肤的温柔、温和照护。' },
      { name: '朝露曙光', description: '表示护肤为朝晨露水般清新的光彩。' },
      { name: '舒缓水疗', description: '暗示水疗品质舒缓护肤产品。' },
      { name: '温和光彩', description: '表示温和产品带来光彩效果。' },
      { name: '生命面纱', description: '暗示护肤保护和活化肌肤。' },
      { name: '营养巢', description: '表示营养丰富的护肤配方。' },
      { name: '宁静画布', description: '暗示护肤平静和准备肌肤。' },
      { name: '植物幸福', description: '表示植物、极乐护肤体验。' },
      { name: '护肤宁静', description: '暗示对护肤的平和、宁静方法。' },
    ],
  },
  'slime': {
    slug: 'slime',
    name: '史莱姆企业名称创意生成器',
    title: '免费 AI 史莱姆企业名称创意生成器',
    description: '为史莱姆企业、感官玩具品牌和DIY史莱姆产品生成顽皮、富有想象力的企业名称。',
    metaDescription: '用我们免费的AI生成器为您的史莱姆企业起个趣味名字。快速、免费、富有创意！',
    inputLabel: '描述您的史莱姆企业...',
    inputPlaceholder: '例如：一家彩色史莱姆店，提供闪粉、黄油和云朵史莱姆供儿童和ASMR爱好者使用',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['顽皮趣味', '感官满足', '创意多彩', '潮流现代'],
        default: '顽皮趣味',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in slime businesses, sensory toy brands, and DIY slime products. Your role is to generate playful, imaginative business names that convey fun and creativity.

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
      { title: '史莱姆产品品牌推出', description: '推出史莱姆产品线的企业家使用生成器寻找能够立即传达趣味和创意的名称。顽皮的企业名称吸引年轻客户及其父母。' },
      { title: 'DIY史莱姆套件品牌塑造', description: '套件制造商使用生成器创建暗示动手创意的名称。合适的名称将产品定位为儿童和家庭的令人兴奋的手工体验。' },
      { title: '史莱姆店身份建设', description: '在线和零售史莱姆店使用生成器寻找传达多样性和兴奋的名称。朗朗上口的企业名称在竞争激烈的史莱姆市场中建立品牌认可度。' },
    ],
    faqs: [
      { question: '什么样的史莱姆企业名称才是优秀的？', answer: '优秀的史莱姆企业名称应该顽皮富有想象力、朗朗上口且令人难忘，并反映您的史莱姆品种。它应该激发年轻客户的兴奋，同时吸引父母。' },
      { question: '我应该在企业名称中包含"史莱姆"吗？', answer: '能够提供清晰性，但不是必须的。像"粘液盛宴"或"捏捏小队"这样的创意名称同样传达产品，但更易记忆。' },
      { question: '趣味名称对史莱姆企业有多重要？', answer: '非常重要。史莱姆就是关于趣味和游玩。沉闷或公司化的企业名称无法与您年轻的目标客户建立联系。' },
      { question: '哪些词汇适合史莱姆企业名称？', answer: '像"史莱姆""粘液""渗出""捏捏""拉伸""抖动""爆裂"和"闪粉"这样的词汇效果很好。质地和感官词汇与产品体验产生共鸣。' },
      { question: '我的史莱姆名称应该反映我的专业方向吗？', answer: '如果您专门从事闪粉、黄油或ASMR史莱姆，在企业名称中暗示您的专业方向可以帮助吸引特定客户。"闪粉史莱姆"清晰传达您的专业。' },
      { question: '我如何使我的史莱姆企业名称令人难忘？', answer: '使用头韵（捏捏店）、押韵（史莱姆时刻）或趣味复合词（粘液银河）。保持顽皮且容易让孩子们记住。' },
      { question: '我可以使用愚蠢或虚构词汇吗？', answer: '绝对可以！史莱姆企业蓬勃发展于创意和趣味。听起来捏捏或粘液的虚构词汇非常有效且令人难忘。' },
      { question: '我应该在命名时考虑目标年龄组吗？', answer: '是的，针对较小儿童的名称应该更简单、更顽皮，而针对青少年ASMR史莱姆的可能使用更潮流语言。' },
      { question: '我如何检查我的史莱姆企业名称是否可用？', answer: '搜索现有史莱姆品牌，检查Etsy和社交媒体中的相似名称，验证域名可用性，并检查商标数据库。' },
      { question: '史莱姆企业命名有哪些常见错误？', answer: '避免与流行史莱姆品牌过于相似、孩子无法发音的过度复杂词汇或不能唤起趣味和游玩的名称。' },
    ],
    howToChoose: {
      intro: '为您的史莱姆企业选择完美的名称对于创建激发年轻客户和父母兴奋的品牌至关重要。您的企业名称将出现在包装、社交媒体和营销材料上——它需要传达产品的趣味和创意。',
      steps: [
        { title: '确定您的史莱姆专业', description: '确定您的重点：DIY套件、预制史莱姆、特殊质地或派对服务。您的企业名称应该暗示您独特的产品。' },
        { title: '了解您的目标客户', description: '考虑您是否为幼儿、青少年、ASMR爱好者或父母服务。不同的客户群体对不同的命名风格做出反应。' },
        { title: '集思广益列出相关关键词', description: '列出与史莱姆相关的词汇：粘液、渗出、捏捏、拉伸、闪粉、抖动。也考虑质地和感官体验。' },
        { title: '创建企业名称组合', description: '混合关键词和命名模式。尝试头韵（捏捏店）、复合词（史莱姆交响乐）或押韵（粘液小队）。' },
        { title: '趣味因素测试', description: '大声说出企业名称。它们听起来趣味和令人兴奋吗？孩子会想在那里购物吗？如果可能，与儿童测试。' },
        { title: '检查可用性', description: '验证该名称未被使用，检查域名可用性，确保社交媒体账户免费，并搜索商标数据库。' },
        { title: '考虑可视吸引力', description: '想象企业名称在包装和社交媒体上。它看起来像听起来那样趣味吗？考虑彩色、顽皮品牌潜力。' },
      ],
    },
    businessNameIdeas: [
      { name: '史莱姆圣殿', description: '表示史莱姆爱好者的专属天堂。' },
      { name: '粘液盛宴', description: '暗示丰富的粘液史莱姆产品。' },
      { name: '渗出绿洲', description: '表示渗出和史莱姆爱好者的天堂。' },
      { name: '捏捏小队', description: '暗示捏捏史莱姆粉丝社区。' },
      { name: '粘液花园', description: '表示粘液品种花园可供探索。' },
      { name: '渗出大洋', description: '暗示渗出可能的广阔海洋。' },
      { name: '史莱姆交响乐', description: '表示史莱姆选择的和谐多样性。' },
      { name: '抖动十字路口', description: '暗示抖动史莱姆产品的汇聚点。' },
      { name: '粘液银河', description: '表示粘液创意银河。' },
      { name: '史莱姆球体', description: '暗示完整的史莱姆产品世界。' },
      { name: '捏捏小夜曲', description: '表示令人满足、甜美的史莱姆体验。' },
      { name: '水洼天堂', description: '暗示史莱姆水洼爱好者的天堂。' },
      { name: '渗出果园', description: '表示多样化渗出品种的果园。' },
      { name: '果冻十字路口', description: '暗示果冻状史莱姆产品的中心。' },
      { name: '史莱姆浪潮', description: '表示令人兴奋的史莱姆产品浪潮。' },
      { name: '粘液溶洞', description: '暗示粘液宝藏的特殊洞穴。' },
      { name: '史莱姆中队', description: '表示多种史莱姆品种中队。' },
      { name: '水洼宫殿', description: '暗示史莱姆水洼的皇家收藏。' },
      { name: '抖动丛林', description: '表示抖动史莱姆冒险的丛林。' },
      { name: '粘液林地', description: '暗示粘液产品的平和林地。' },
    ],
  },
  'soap': {
    slug: 'soap',
    name: '肥皂企业名称创意生成器',
    title: '免费 AI 肥皂企业名称创意生成器',
    description: '为肥皂公司、沐浴产品品牌和手工肥皂制造商生成天然、清新的企业名称。',
    metaDescription: '用我们免费的AI生成器为您的肥皂企业起个闪闪发光的名字。快速、免费、富有创意！',
    inputLabel: '描述您的肥皂企业...',
    inputPlaceholder: '例如：一个使用有机成分和精油的手工肥皂公司',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['天然有机', '奢华高端', '清新洁净', '手工精酿'],
        default: '天然有机',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in soap companies, bath product brands, and artisan soap makers. Your role is to generate natural, refreshing business names that convey cleanliness and quality.

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
      { title: '手工肥皂品牌推出', description: '手工肥皂制造商使用生成器寻找传达工艺和品质的名称。天然听起来的企业名称吸引寻求高端沐浴产品的客户。' },
      { title: '天然肥皂公司品牌塑造', description: '有机肥皂公司使用生成器创建暗示纯正和植物成分的名称。合适的名称将产品定位为健康、生态友好的替代品。' },
      { title: '礼品肥皂企业身份建设', description: '礼品重点肥皂企业使用生成器寻找传达奢华和特殊场合的名称。独特的企业名称帮助产品在礼品市场中脱颖而出。' },
    ],
    faqs: [
      { question: '什么样的肥皂企业名称才是优秀的？', answer: '优秀的肥皂企业名称应该天然有活力、令人难忘且舒缓，并反映您肥皂的专业方向。它应该吸引寻求品质沐浴产品的客户。' },
      { question: '我应该在企业名称中包含"肥皂"吗？', answer: '不一定。像"泡泡泻湖"或"肥皂湾"这样的名称传达沐浴产品，但更富有想象力且易记忆。' },
      { question: '天然听起来的名称对肥皂有多重要？', answer: '如果针对天然有机市场非常重要，但奢华或治疗品牌可能强调不同质量。将企业名称与您的定位相匹配。' },
      { question: '哪些词汇适合肥皂企业名称？', answer: '像"泡泡""肥皂泡""纯净""洁净""清新""泡沫""肥皂泡"和"植物"这样的词汇效果很好。气味和质地词汇也产生共鸣。' },
      { question: '我的肥皂名称应该反映我的专业方向吗？', answer: '如果您专门从事芳香疗法、天然成分或奢华产品，在企业名称中暗示您的专业方向可以帮助吸引合适的客户。' },
      { question: '我如何使我的肥皂企业名称令人难忘？', answer: '使用感官意象（天鹅绒、芳香）、头韵（泡泡湾）或唤起性复合词（肥皂奢华）。保持简洁、易于拼写和发音。' },
      { question: '我可以为肥皂使用基于气味的名称吗？', answer: '可以，但要小心不要将自己限制在单一气味。像"芳香廊道"这样的名称暗示多样性，同时强调香气。' },
      { question: '我应该在命名时考虑手工工艺吸引力吗？', answer: '如果手工是您的销售重点，暗示工匠品质的名称（精酿、手工、精作）可以很有效。' },
      { question: '我如何检查我的肥皂企业名称是否可用？', answer: '搜索现有肥皂品牌，检查Etsy和手工市场，验证域名可用性，并进行商标搜索。' },
      { question: '肥皂企业命名有哪些常见错误？', answer: '避免与主要品牌过于相似、拼写困难或不能唤起洁净和天然品质的名称。' },
    ],
    howToChoose: {
      intro: '为您的肥皂企业选择完美的名称对于创建吸引寻求品质沐浴产品的客户的品牌至关重要。您的企业名称将出现在肥皂标签、包装和营销材料上——它需要传达产品的天然清新和品质。',
      steps: [
        { title: '确定您的肥皂哲学', description: '确定您的方法：天然、奢华、治疗或手工。您的企业名称应该暗示是什么让您的肥皂特别。' },
        { title: '了解您的目标客户', description: '考虑您是否为生态意识消费者、奢华寻求者或礼品购买者服务。不同的客户群体对不同的命名风格做出反应。' },
        { title: '集思广益列出相关关键词', description: '列出与肥皂相关的词汇：泡泡、肥皂泡、纯净、洁净、清新、植物、芳香。也考虑您的主要成分和益处。' },
        { title: '创建企业名称组合', description: '混合关键词和命名模式。尝试基于自然（植物幸福）、感官（天鹅绒肥皂泡）或复合名称（泡泡湾）。' },
        { title: '吸引力测试', description: '大声说出企业名称。它们听起来清新和邀请吗？客户会将它们与品质沐浴产品联系起来吗？' },
        { title: '检查可用性', description: '验证该名称未被使用，检查域名可用性，确保社交媒体账户免费，并搜索商标数据库。' },
        { title: '考虑包装吸引力', description: '想象企业名称在肥皂标签和包装上。它看起来优雅吗？它符合您的可视品牌概念吗？' },
      ],
    },
    businessNameIdeas: [
      { name: '泡泡湾', description: '表示肥皂企业具有气泡、愉快的产品。' },
      { name: '肥皂泡泻湖', description: '暗示以丰富、奢华肥皂泡著称。' },
      { name: '气味球体', description: '表示各种芳香肥皂选择的广泛范围。' },
      { name: '泡沫喷泉', description: '暗示丰富、泡沫状肥皂产品。' },
      { name: '纯净峰值', description: '表示纯净、高质量天然肥皂。' },
      { name: '洁净小湾', description: '暗示深层清洁肥皂产品。' },
      { name: '舒缓圣殿', description: '表示舒缓沐浴体验的肥皂。' },
      { name: '芳香廊道', description: '暗示各种芳香肥皂选择。' },
      { name: '天鹅绒远景', description: '表示使肌肤天鹅绒光滑的肥皂。' },
      { name: '安宁潮汐', description: '暗示宁静、平和沐浴的肥皂。' },
      { name: '柔和狂欢', description: '表示以柔软肌肤著称的肥皂。' },
      { name: '绿洲椭圆', description: '暗示清爽肥皂棒的绿洲。' },
      { name: '幸福泡泡', description: '表示令人愉快的泡泡沐浴体验。' },
      { name: '精油河口', description: '暗示精油丰富的肥皂配方。' },
      { name: '纯净天堂', description: '表示纯正、天堂般肥皂产品。' },
      { name: '清新泡沫', description: '暗示清新、泡沫状清洁产品。' },
      { name: '天然巢', description: '表示天然、养护肥皂产品。' },
      { name: '肥皂泡圣殿', description: '暗示品质肥皂泡的圣殿。' },
      { name: '植物沐浴', description: '表示植物基础沐浴产品。' },
      { name: '奢华肥皂泡', description: '暗示奢华、肥皂泡沐浴体验。' },
    ],
  },
  'sportswear': {
    slug: 'sportswear',
    name: '运动服装企业名称创意生成器',
    title: '免费 AI 运动服装企业名称创意生成器',
    description: '为运动服装公司、运动服装品牌和运动健身服装企业生成富有运动感、充满活力的企业名称。',
    metaDescription: '用AI生成的名称提升您的运动服装品牌。快速、免费，为您的运动服装企业提供创意十足的命名！',
    inputLabel: '描述您的运动服装企业...',
    inputPlaceholder: '例如：一个面向瑜伽和健身爱好者的可持续运动服装品牌',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['运动感十足', '专业性强', '现代时尚', '生活方式'],
        default: '运动感十足',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in sportswear companies, athletic apparel brands, and activewear businesses. Your role is to generate athletic, energetic business names that convey performance and quality.

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
      { title: '运动服装品牌推出', description: '创业者使用生成器寻找能传达性能和质量的名称。充满活力的名称吸引运动员和健身爱好者。' },
      { title: '健身服装公司品牌塑造', description: '健身服装品牌使用生成器创建暗示动力和成果的名称。合适的名称将其产品定位为必不可少的运动装备。' },
      { title: '运动休闲时尚身份', description: '运动休闲品牌使用生成器寻找平衡运动和时尚吸引力的名称。多功能名称吸引寻求日常运动服装的客户。' },
    ],
    faqs: [
      { question: '什么样的运动服装企业名称才算好？', answer: '好的运动服装名称应该充满运动感和活力、易于记忆和吸引人，并反映您的运动服装专业方向。它应该激励行动和性能。' },
      { question: '我应该在名称中包含"运动"或"体育"吗？', answer: '不一定。动态名称如"PowerPlay"或"VelocityVogue"传达运动精神，同时更容易记忆和品牌化。' },
      { question: '充满活力的名称对于运动服装有多重要？', answer: '非常重要。运动服装关乎动力和性能。沉闷或被动的名称不会与积极的客户产生共鸣。' },
      { question: '运动服装企业名称中哪些词汇效果较好？', answer: '如"Athletic"、"Power"、"Performance"、"Elite"、"Pro"、"Victory"和"Champion"等词效果较好。"Run"、"Train"和"Move"等运动词也很受欢迎。' },
      { question: '我的运动服装名称应该反映我的专业方向吗？', answer: '如果您专注于跑步、瑜伽或健身服装，暗示您的专业方向可以帮助吸引特定的运动员。"RunReady"清楚地传达了您的专业方向。' },
      { question: '我如何让我的运动服装企业名称容易记住？', answer: '使用运动词（Power、Drive）、复合词（AthleticArc）或成就导向的术语（Victory、Champion）。保持短而有力。' },
      { question: '我可以在运动服装名称中使用数字吗？', answer: '数字可以起作用（如"24/7 Fitness Wear"），但要谨慎使用。它们可以暗示强度，但可能会使品牌和可记忆性复杂化。' },
      { question: '我在命名时应该考虑我的目标运动吗？', answer: '应该。不同的运动有不同的氛围。跑步品牌可能使用速度词，而瑜伽品牌使用平静的术语。' },
      { question: '我如何检查我的运动服装企业名称是否可用？', answer: '搜索现有的体育品牌，检查域名可用性，验证社交媒体账号，并进行商标搜索。' },
      { question: '运动服装命名应该避免哪些错误？', answer: '避免与主要运动品牌过于相似的名称、过度激进的术语或限制您产品范围的名称。' },
    ],
    howToChoose: {
      intro: '为您的运动服装企业选择完美的名称对于创建一个激励运动员和健身爱好者的品牌至关重要。您的企业名称将出现在服装、营销材料和零售展示上，需要传达能量和性能。',
      steps: [
        { title: '确定您的运动专业方向', description: '确定您的专业：健身服装、跑步装备、瑜伽服装或运动休闲。您的名称应该暗示您的目标运动和运动员。' },
        { title: '了解您的目标运动员', description: '考虑您服务于严肃运动员、休闲健身爱好者还是时尚意识的健身爱好者。不同的观众对不同的命名风格做出反应。' },
        { title: '集思广益相关关键词', description: '列出与运动服装相关的词语：运动、力量、性能、精英、跑步、训练、胜利。同时考虑您目标运动的术语。' },
        { title: '创建名称组合', description: '混合关键词和命名模式。尝试基于行动（PowerPush）、成就导向（VictoryVogue）或复合名称（AthleticArc）。' },
        { title: '检测能量', description: '大声说出名称。它们是否能激励和鼓舞？运动员会为穿着这个品牌感到骄傲吗？' },
        { title: '检查可用性', description: '验证名称未被使用，检查域名可用性，确保社交媒体账号免费，并搜索商标数据库。' },
        { title: '考虑运动吸引力', description: '想象名称出现在运动装备和营销上。它看起来运动感足吗？它是否能激励性能？' },
      ],
    },
    businessNameIdeas: [
      { name: '速能港', description: '暗示所有运动服装必需品的避难所。' },
      { name: '力能馆', description: '暗示关注性能提升的服装。' },
      { name: '汗动舱', description: '为强烈的训练课程提供运动服装。' },
      { name: '灵动方', description: '暗示敏捷、快速运动的装备。' },
      { name: '耐力城', description: '暗示经久耐用的运动服装。' },
      { name: '动力坊', description: '暗示强大性能的运动服装。' },
      { name: '劲能屋', description: '暗示性能提升的运动服装。' },
      { name: '速度阁', description: '暗示为设定步伐的创新运动服装。' },
      { name: '韧力居', description: '暗示增强运动耐力的装备。' },
      { name: '力系湾', description: '暗示专注于力量的运动服装。' },
      { name: '体能道', description: '暗示广泛的运动服装选择。' },
      { name: '胜美坊', description: '暗示时尚的赢家运动服装。' },
      { name: '冠军湾', description: '暗示适合冠军和运动员的装备。' },
      { name: '热血区', description: '暗示充满活力和热情的运动服装。' },
      { name: '弹力屋', description: '暗示灵活、贴身的运动服装。' },
      { name: '动感模', description: '暗示为运动设计的装备。' },
      { name: '巅峰装', description: '暗示为顶尖运动员提供的运动服装。' },
      { name: '驱力坊', description: '暗示充满动力的运动装。' },
      { name: '浪能动', description: '暗示充满活力、强大的运动服装。' },
      { name: '训练族', description: '暗示以社区为中心的训练服装。' },
    ],
  },
  't-shirt': {
    slug: 't-shirt',
    name: 'T恤企业名称创意生成器',
    title: '免费 AI T恤企业名称创意生成器',
    description: '为T恤企业、定制服装品牌和按需印刷店生成创意、易记的企业名称。',
    metaDescription: '使用我们的AI工具轻松创建酷的T恤企业名称。无成本、无烦恼，只有对您的服装品牌的创意！',
    inputLabel: '描述您的T恤企业...',
    inputPlaceholder: '例如：一个以复古灵感设计和流行文化参考为特色的图案T恤品牌',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['创意艺术型', '城市潮流型', '复古怀旧型', '趣味玩乐型'],
        default: '创意艺术型',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in t-shirt businesses, custom apparel brands, and print-on-demand shops. Your role is to generate creative, memorable business names that convey style and self-expression.

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
      { title: '定制T恤企业推出', description: '印刷创业者使用生成器寻找传达创意和质量的名称。时尚的名称吸引寻求独特、个性化T恤的客户。' },
      { title: '图案T恤品牌创建', description: '图形设计师使用生成器创建暗示艺术表达的名称。合适的名称将他们的设计定位为可穿戴艺术。' },
      { title: '在线T恤店身份', description: '电商T恤卖家使用生成器寻找在竞争激烈的市场中脱颖而出的名称。易记的名称建立品牌认知度。' },
    ],
    faqs: [
      { question: '什么样的T恤企业名称才算好？', answer: '好的T恤名称应该反映您的设计风格、易于记忆、暗示高质量产品。它应该吸引寻求独特服装的客户。' },
      { question: '我应该在名称中包含"衬衫"或"T恤"吗？', answer: '不一定。创意名称如"ThreadTrend"或"InkIsland"传达服装而更多功能性和易记。' },
      { question: '创意名称对于T恤有多重要？', answer: '非常重要。T恤是关于自我表达的。无聊或通用的名称不会吸引寻求独特设计的客户。' },
      { question: 'T恤企业名称中哪些词汇效果较好？', answer: '如"Thread"、"Ink"、"Print"、"Cotton"、"Tee"、"Design"、"Graphic"和"Press"等词效果较好。"Vintage"、"Urban"和"Retro"等风格词也很受欢迎。' },
      { question: '我的T恤名称应该反映我的设计专业吗？', answer: '如果您专注于复古、图案或定制设计，暗示您的专业方向可以帮助吸引特定客户。"RetroRag"清楚地传达了您的专业方向。' },
      { question: '我如何让我的T恤企业名称容易记住？', answer: '使用创意复合词（InkIsland）、头韵（Tee Territory）或设计参考（GraphicGrove）。保持短而容易拼写。' },
      { question: '我可以在T恤企业名称中使用双关语吗？', answer: 'T恤双关语可以有效且品牌化。"Tee Time"或"Wear It Out"等名称与图案T恤的有趣性质相匹配。' },
      { question: '我在命名时应该考虑按需印刷吗？', answer: '如果POD是您的模式，专注于设计和风格而不是生产方法。客户关心最终产品，而不是生产。' },
      { question: '我如何检查我的T恤企业名称是否可用？', answer: '搜索现有服装品牌，检查市场列表，验证域名可用性，并进行商标搜索。' },
      { question: 'T恤企业命名应该避免哪些错误？', answer: '避免与主要品牌过于相似的名称、不适合标签的过长名称或限制设计范围的名称。' },
    ],
    howToChoose: {
      intro: '为您的T恤企业选择完美的名称对于创建一个吸引寻求独特、富有表达力服装的客户的品牌至关重要。您的企业名称将出现在标签、包装和营销材料上，需要传达您设计的创意和风格。',
      steps: [
        { title: '确定您的设计风格', description: '确定您的审美：图案、复古、极简或宣言。您的名称应该暗示客户会找到的风格。' },
        { title: '了解您的目标客户', description: '考虑您服务于时尚爱好者、宣言制造者还是特定社区。不同的观众对不同的命名风格做出反应。' },
        { title: '集思广益相关关键词', description: '列出与T恤相关的词语：线程、墨水、印刷、棉花、T恤、设计、图案、穿着。同时考虑您的设计美学。' },
        { title: '创建名称组合', description: '混合关键词和命名模式。尝试复合词（InkIsland）、头韵（ThreadTrend）或风格重点名称（GraphicGrove）。' },
        { title: '测试吸引力', description: '大声说出名称。它们听起来富有创意和风格吗？客户会为穿着您的品牌名称感到骄傲吗？' },
        { title: '检查可用性', description: '验证名称未被使用，检查域名可用性，确保社交媒体账号免费，并搜索商标数据库。' },
        { title: '考虑可穿戴性', description: '想象名称出现在衬衫标签和标签上。它足够短吗？它在各种字体和风格中看起来好吗？' },
      ],
    },
    businessNameIdeas: [
      { name: '棉舒湾', description: '暗示舒适棉质T恤的专业。' },
      { name: '彩印乐园', description: '暗示印刷设计的天堂。' },
      { name: '图像林', description: '暗示图案T恤选择众多。' },
      { name: '线潮馆', description: '暗示时尚、符合潮流的T恤设计。' },
      { name: '墨岛阁', description: '暗示富有创意的印刷T恤设计。' },
      { name: '衫领地', description: '暗示广阔的T恤选择。' },
      { name: '设计窝', description: '暗示T恤设计的创意窝。' },
      { name: '穿衣奇', description: '暗示奇妙、可穿戴的设计。' },
      { name: '布艺融', description: '暗示创新的织物和设计结合。' },
      { name: '衫屋社', description: '暗示休闲、平易近人的T恤店。' },
      { name: '印彩坊', description: '暗示高质量的印刷服装。' },
      { name: '线王座', description: '暗示T恤质量的皇家待遇。' },
      { name: '衫圣殿', description: '暗示为T恤爱好者的专业空间。' },
      { name: '风格缝', description: '暗示时尚、精心制作的T恤。' },
      { name: '街头服', description: '暗示城市风格的日常服装。' },
      { name: '怀旧感', description: '暗示复古、怀旧风格的T恤。' },
      { name: '空白画', description: '暗示定制、创意可能性。' },
      { name: '印刷脉', description: '暗示时尚脉动设计。' },
      { name: '衫图腾', description: '暗示标志性、有意义的T恤设计。' },
      { name: '线想法', description: '暗示经过深思熟虑的T恤设计概念。' },
    ],
  },
  'tea': {
    slug: 'tea',
    name: '茶企业名称创意生成器',
    title: '免费 AI 茶企业名称创意生成器',
    description: '为茶企、茶坊和特色茶品牌生成富有吸引力、令人向往的企业名称。',
    metaDescription: '使用我们的免费AI生成器为您的茶企打造完美名称。为您的茶业企业创建富有吸引力、令人向往的品牌名称！',
    inputLabel: '描述您的茶企...',
    inputPlaceholder: '例如：一个专业的散茶店，提供来自世界各地的有机和公平贸易混合茶',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['传统优雅型', '现代清新型', '养生草本型', '舒适温暖型'],
        default: '传统优雅型',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in tea companies, tea shops, and specialty tea brands. Your role is to generate evocative, inviting business names that convey warmth and quality.

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
      { title: '茶品牌推出', description: '茶叶创业者使用生成器寻找传达质量和传统的名称。富有吸引力的名称吸引寻求优质产品的茶爱好者。' },
      { title: '茶馆品牌塑造', description: '茶店主人使用生成器创建暗示温暖、令人向往氛围的名称。合适的名称将他们的茶馆定位为放松的目的地。' },
      { title: '特色茶企身份', description: '特色茶叶进口商使用生成器寻找传达专业和精心选择的名称。独特的名称在茶市场建立可信度。' },
    ],
    faqs: [
      { question: '什么样的茶企名称才算好？', answer: '好的茶企名称应该富有吸引力和令人向往、易于记忆和深思熟虑，并代表您的茶叶选择。它应该吸引寻求质量体验的茶爱好者。' },
      { question: '我应该在企业名称中包含"茶"吗？', answer: '这提供了清晰性，但不是必需的。"LeafLounge"或"SteepSanctum"等名称传达茶叶同时更富有吸引力和易记。' },
      { question: '平静的名称对于茶企有多重要？', answer: '对于传统茶企非常重要，虽然珍珠奶茶或现代概念可能使用更充满活力的名称。使您的名称与您的概念相匹配。' },
      { question: '茶企名称中哪些词汇效果较好？', answer: '如"Steep"、"Brew"、"Leaf"、"Blend"、"Infuse"、"Serene"、"Tranquil"和"Harmony"等词效果较好。自然和工艺词与茶文化相呼应。' },
      { question: '我的茶企名称应该反映我的专业吗？', answer: '如果您专注于草本、有机或特定产地，暗示您的专业方向可以帮助吸引特定客户。"HerbalHaven"清楚地传达了您的专业方向。' },
      { question: '我如何让我的茶企名称容易记住？', answer: '使用平静的意象（Serene、Tranquil）、工艺词（Steep、Infuse）或富有吸引力的复合词（LeafLagoon）。保持容易发音和拼写。' },
      { question: '我可以在命名中使用文化茶叶参考吗？', answer: '文化参考可以增加真实性，但确保尊重和准确的使用。"Zen Tea"或"Chai Chalet"等名称应与您的产品相符。' },
      { question: '我应该在命名中考虑品茶体验吗？', answer: '应该。茶是仪式性的。暗示体验的名称（SteepSlow、BrewMoment）对于体验重点品牌可能非常有效。' },
      { question: '我如何检查我的茶企名称是否可用？', answer: '搜索现有茶企，检查域名可用性，验证社交媒体账号，并进行商标搜索。' },
      { question: '茶企命名应该避免哪些错误？', answer: '避免与主要茶企过于相似的名称、过于复杂的词汇或容易错误发音的名称。' },
    ],
    howToChoose: {
      intro: '为您的茶企选择完美的名称对于创建一个吸引寻求质量和放松的茶爱好者的品牌至关重要。您的企业名称将出现在包装、门牌和营销材料上，需要传达您茶叶产品的温暖和质量。',
      steps: [
        { title: '确定您的茶企概念', description: '确定您的专业：传统、草本、珍珠奶茶或养生。您的名称应该暗示客户将拥有的体验。' },
        { title: '了解您的目标茶爱好者', description: '考虑您服务于传统主义者、健康寻求者还是时尚珍珠奶茶爱好者。不同的观众对不同的命名风格做出反应。' },
        { title: '集思广益相关关键词', description: '列出与茶相关的词语：冲泡、酿造、叶片、混合、宁静、平静、注入。同时考虑您的茶叶来源和风格。' },
        { title: '创建名称组合', description: '混合关键词和命名模式。尝试平静（SereneSteep）、自然基础（LeafLagoon）或复合名称（BrewBliss）。' },
        { title: '测试氛围', description: '大声说出名称。它们是否唤起温暖和放松？茶爱好者会被您的品牌吸引吗？' },
        { title: '检查可用性', description: '验证名称未被使用，检查域名可用性，确保社交媒体账号免费，并搜索商标数据库。' },
        { title: '考虑品牌氛围', description: '想象名称出现在包装和门牌上。它会创建您想要的氛围吗？它是否适合您的视觉品牌？' },
      ],
    },
    businessNameIdeas: [
      { name: '宁静茶居', description: '暗示宁静的品茶体验。' },
      { name: '静心茶韵', description: '暗示平静、祥和的茶时刻。' },
      { name: '和谐天地', description: '暗示和谐的茶混合和氛围。' },
      { name: '叶韵堂', description: '暗示带有传统遗产的质量茶叶。' },
      { name: '冲泡净地', description: '暗示品茶的一个圣所。' },
      { name: '茶韵岛', description: '暗示众多茶冲泡选择的岛屿。' },
      { name: '醇香雅境', description: '暗示幸福的茶酿造体验。' },
      { name: '花瓣香韵', description: '暗示微妙、花卉茶品种。' },
      { name: '禅意韵', description: '暗示带有禅意的茶与鲜明风味。' },
      { name: '茶香仓', description: '暗示一个装满茶混合品种的仓库。' },
      { name: '茶径', description: '暗示通过茶品种的旅程。' },
      { name: '叶子阁', description: '暗示一个放松的茶爱好者休息室。' },
      { name: '慢冲泡', description: '暗示缓慢、深思的品茶。' },
      { name: '杯湾舒', description: '暗示一个舒适的茶杯湾。' },
      { name: '茶韵廊', description: '暗示众多冲泡选择的廊。' },
      { name: '宁静品茶', description: '暗示平静、美味的茶体验。' },
      { name: '草本天堂', description: '暗示专注于草本茶品种。' },
      { name: '啜饮圣地', description: '暗示品茶的一个圣所。' },
      { name: '叶意阁', description: '暗示提升的茶叶选择。' },
      { name: '注入灵感', description: '暗示鼓舞性的茶冲泡。' },
    ],
  },
  'tech': {
    slug: 'tech',
    name: '科技企业名称创意生成器',
    title: '免费 AI 科技企业名称创意生成器',
    description: '为科技公司、软件企业和科技初创企业生成前沿、创新的企业名称。',
    metaDescription: '使用AI生成的名称创新您的科技企业。快速、免费，为您的科技创业项目量身定制！',
    inputLabel: '描述您的科技企业...',
    inputPlaceholder: '例如：一个为电子商务企业提供AI驱动分析工具的SaaS公司',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['创新现代型', '专业企业型', '初创动态型', '技术专家型'],
        default: '创新现代型',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in technology companies, software businesses, and tech startups. Your role is to generate cutting-edge, innovative business names that convey technological expertise.

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
      { title: '科技初创推出', description: '创始人使用生成器寻找传达创新和专业的名称。前沿的名称吸引寻求下一代解决方案的投资者和早期采用者。' },
      { title: '软件公司品牌塑造', description: '软件开发者使用生成器创建暗示技术卓越的名称。合适的名称将他们的产品定位为可靠、专业的解决方案。' },
      { title: 'IT咨询公司身份', description: 'IT顾问使用生成器寻找传达专业和信任的名称。专业的名称与企业客户建立可信度。' },
    ],
    faqs: [
      { question: '什么样的科技企业名称才算好？', answer: '好的科技名称应该前沿和创新、清晰和易记，并反映您的科技专业。它应该吸引寻求技术解决方案的客户。' },
      { question: '我应该在企业名称中包含"技术"吗？', answer: '不一定。"ByteBounty"或"CodeCore"等名称传达技术同时更具有独特性和易记性。' },
      { question: '现代名称对于科技公司有多重要？', answer: '非常重要。科技公司需要显得当前和创新。过时听起来的名称可能暗示过时的解决方案。' },
      { question: '科技企业名称中哪些词汇效果较好？', answer: '如"Byte"、"Code"、"Data"、"Cloud"、"Digital"、"Logic"和"Systems"等词效果较好。"Quantum"、"Next"和"Nova"等面向未来的词也很受欢迎。' },
      { question: '我的科技名称应该反映我的专业吗？', answer: '如果您专注于AI、网络安全或云服务，暗示您的专业方向可以帮助吸引相关客户。"CloudCore"清楚地传达了您的专业方向。' },
      { question: '我如何让我的科技企业名称容易记住？', answer: '使用清晰的复合词（CodeCore）、现代后缀（-ify、-io）或创新词（Labs、Works）。保持短而容易拼写。' },
      { question: '我可以为科技名称使用虚拟词汇吗？', answer: '可以，虚拟词在科技领域很常见（Spotify、Salesforce）。如果易记和易发音，它们可能非常有效。' },
      { question: '我应该高度重视域名可用性吗？', answer: '绝对应该。科技公司需要强大的在线存在。在您的命名过程早期检查.com可用性。' },
      { question: '我如何检查我的科技企业名称是否可用？', answer: '搜索现有科技公司，彻底检查域名可用性，验证社交媒体账号，并进行商标搜索。' },
      { question: '科技企业命名应该避免哪些错误？', answer: '避免与主要科技品牌过于相似的名称、过于技术性的术语（排除非技术客户）或听起来过时的名称。' },
    ],
    howToChoose: {
      intro: '为您的科技企业选择完美的名称对于创建一个吸引寻求创新解决方案的客户的品牌至关重要。您的企业名称将出现在产品、营销材料和投资者演讲上，需要传达技术专业和前瞻思维能力。',
      steps: [
        { title: '确定您的科技专业', description: '确定您的专业：软件、云计算、AI、安全或咨询。您的名称应该暗示您的技术专业。' },
        { title: '了解您的目标客户', description: '考虑您服务于企业、初创企业、开发人员还是消费者。不同的观众对不同的命名风格做出反应。' },
        { title: '集思广益相关关键词', description: '列出与科技相关的词语：Byte、Code、Data、Cloud、Digital、Logic、Systems。同时考虑您的特定科技领域。' },
        { title: '创建名称组合', description: '混合关键词和命名模式。尝试复合词（ByteBounty）、现代后缀（Techify）或创新词（QuantumLabs）。' },
        { title: '测试专业性', description: '大声说出名称。它们听起来创新和可信吗？企业客户会将他们的技术需求信任这个公司吗？' },
        { title: '检查可用性', description: '验证名称未被使用，检查域名可用性（特别是.com），确保社交媒体账号免费，并搜索商标数据库。' },
        { title: '考虑可扩展性', description: '确保名称允许扩展到新的科技领域。避免限制您特定技术的名称，因为这可能会演变。' },
      ],
    },
    businessNameIdeas: [
      { name: '创新港', description: '暗示一个新鲜技术创意的港湾。' },
      { name: '字节宝', description: '暗示数字资源和解决方案的财富。' },
      { name: '代码工坊', description: '暗示专业的编码和开发。' },
      { name: '数据窝', description: '暗示数据解决方案的专业中心。' },
      { name: '逻辑实验室', description: '暗示逻辑性、研究驱动的技术开发。' },
      { name: '量子探索', description: '暗示先进、下一代技术。' },
      { name: '网络核心', description: '暗示数字解决方案的核心专业。' },
      { name: '科技浪潮', description: '暗示乘技术进步的浪潮。' },
      { name: '像素先驱', description: '暗示数字和视觉解决方案的先驱。' },
      { name: '云端湾', description: '暗示云计算需求的安全港。' },
      { name: '神经网络', description: '暗示AI和机器学习专业。' },
      { name: '系统激流', description: '暗示强大的系统和解决方案。' },
      { name: '数字驱动', description: '暗示对数字变革的驱动方法。' },
      { name: '代码画布', description: '暗示创意、艺术的开发方法。' },
      { name: '技术之路', description: '暗示在技术中开创新道路。' },
      { name: '字节基地', description: '暗示基础数字基础设施。' },
      { name: '逻辑织机', description: '暗示编织逻辑技术解决方案。' },
      { name: '数据黎明', description: '暗示数据解决方案的新开始。' },
      { name: '网络顶峰', description: '暗示网络安全专业的顶峰。' },
      { name: '创新科技', description: '暗示以创新为中心的科技公司。' },
    ],
  },
  'travel': {
    slug: 'travel',
    name: '旅行企业名称创意生成器',
    title: '免费 AI 旅行企业名称创意生成器',
    description: '为旅行社、旅游公司和旅行服务生成冒险、鼓舞的企业名称。',
    metaDescription: '使用我们的免费AI生成器探索完美的旅行企业名称。为您的旅行创业项目创建冒险、鼓舞的品牌名称！',
    inputLabel: '描述您的旅行企业...',
    inputPlaceholder: '例如：一个专业于精心策划蜜月和浪漫度假体验的豪华旅行社',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '名称风格',
        choices: ['冒险刺激型', '豪华高端型', '放松逃离型', '文化发现型'],
        default: '冒险刺激型',
        type: 'select',
      },
      {
        name: 'variants',
        label: '生成数量',
        choices: ['5 个名称', '10 个名称', '15 个名称'],
        default: '10 个名称',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Chinese (中文). You are an expert brand naming consultant specializing in travel agencies, tour companies, and travel services. Your role is to generate adventurous, inspiring business names that convey wanderlust and expertise.

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
      { title: '旅行社推出', description: '旅游创业者使用生成器寻找激发旅行欲望的名称。冒险的名称吸引寻求难忘旅行体验的客户。' },
      { title: '旅游公司品牌塑造', description: '旅游运营商使用生成器创建暗示专业和刺激目的地的名称。合适的名称将他们的服务定位为通往冒险的大门。' },
      { title: '豪华旅行服务身份', description: '豪华旅行社使用生成器寻找传达独特性和高端体验的名称。复杂的名称吸引品味挑剔的旅行者。' },
    ],
    faqs: [
      { question: '什么样的旅行企业名称才算好？', answer: '好的旅行名称应该激发旅行欲望和冒险、易于记忆和鼓舞，并反映您的旅行专业。它应该激励客户预订他们的下一次旅行。' },
      { question: '我应该在企业名称中包含"旅行"吗？', answer: '不一定。"WanderlustWay"或"HorizonQuest"等名称传达旅行同时更富有吸引力和易记。' },
      { question: '鼓舞的名称对于旅行有多重要？', answer: '非常重要。旅行关乎梦想和体验。平凡或公司化的名称不会吸引旅行者寻求的兴奋。' },
      { question: '旅行企业名称中哪些词汇效果较好？', answer: '如"Voyage"、"Journey"、"Explore"、"Discover"、"Wander"、"Horizon"和"Compass"等词效果较好。冒险和逃离词也很受欢迎。' },
      { question: '我的旅行名称应该反映我的专业吗？', answer: '如果您专注于冒险、豪华或特定目的地，暗示您的专业方向可以帮助吸引理想客户。"AdventureArc"清楚地传达了您的专业方向。' },
      { question: '我如何让我的旅行企业名称容易记住？', answer: '使用鼓舞的意象（Horizon、Vista）、行动词（Explore、Discover）或富有吸引力的复合词（WanderlustWay）。保持容易发音和拼写。' },
      { question: '我可以在企业名称中使用目的地名称吗？', answer: '目的地名称可能有效，但可能限制感知范围。"Caribbean Escapes"限制您，而"Tropical Horizons"暗示更广泛的可能性。' },
      { question: '我应该在命名中考虑目标旅行者吗？', answer: '绝对应该。冒险旅行者对不同的名称有反应，比豪华寻求者或商务旅行者。使您的名称与您的观众相匹配。' },
      { question: '我如何检查我的旅行企业名称是否可用？', answer: '搜索现有旅行社，检查域名可用性，验证社交媒体账号，并进行商标搜索。' },
      { question: '旅行企业命名应该避免哪些错误？', answer: '避免与主要旅行品牌过于相似的名称、过于通用的术语或限制地理范围的名称。' },
    ],
    howToChoose: {
      intro: '为您的旅行企业选择完美的名称对于创建一个激发旅行欲望并吸引冒险寻求者的品牌至关重要。您的企业名称将出现在营销材料、预订确认和推荐对话上，需要传达您旅行服务的兴奋和专业。',
      steps: [
        { title: '确定您的旅行专业', description: '确定您的专业：冒险、豪华、公司或特定目的地。您的名称应该暗示您创建的体验类型。' },
        { title: '了解您的目标旅行者', description: '考虑您服务于冒险寻求者、豪华旅行者、家庭还是企业。不同的观众对不同的命名风格做出反应。' },
        { title: '集思广益相关关键词', description: '列出与旅行相关的词语：航程、旅程、探索、发现、漫游、地平线、指南针。同时考虑情感：自由、冒险、逃离。' },
        { title: '创建名称组合', description: '混合关键词和命名模式。尝试鼓舞的（WanderlustWay）、发现基础的（ExploreEdge）或复合名称（JourneyJoy）。' },
        { title: '测试灵感', description: '大声说出名称。它们是否激发旅行欲望？旅行者会为与您的公司预订感到兴奋吗？' },
        { title: '检查可用性', description: '验证名称未被使用，检查域名可用性，确保社交媒体账号免费，并搜索商标数据库。' },
        { title: '考虑全球吸引力', description: '确保名称跨文化和语言有效。避免可能在您服务的目的地中有负面含义的词汇。' },
      ],
    },
    businessNameIdeas: [
      { name: '漫游心路', description: '暗示那些有旅行欲望的人的途径。' },
      { name: '环球驿站', description: '暗示广泛旅行者的社区。' },
      { name: '奇遇绿洲', description: '暗示计划史诗般的旅行奇遇。' },
      { name: '航程视野', description: '暗示旅行航程的美丽景色。' },
      { name: '探索伊甸', description: '暗示发现天堂目的地。' },
      { name: '旅程欢乐', description: '暗示充满欢乐的难忘旅行体验。' },
      { name: '地平线港', description: '暗示通往新地平线的安全港。' },
      { name: '冒险弧', description: '暗示一系列冒险旅行体验。' },
      { name: '指南针湾', description: '暗示通往目的地的导航指南。' },
      { name: '护照峰', description: '暗示全球范围的顶级旅行体验。' },
      { name: '远足小径', description: '暗示冒险的跋山涉水旅程。' },
      { name: '漫游世界', description: '暗示众多漫游可能性的领域。' },
      { name: '命运漂流', description: '暗示向梦想目的地漂流。' },
      { name: '漫游翅膀', description: '暗示旅行中的自由和飞翔。' },
      { name: '航者金库', description: '暗示旅行选择的宝藏库。' },
      { name: '旅者套房', description: '暗示为旅者的服务套房。' },
      { name: '探索地盘', description: '暗示旅行探索的总部。' },
      { name: '路径先驱', description: '暗示开创新旅行途径。' },
      { name: '逃脱边缘', description: '暗示地图边缘的逃脱体验。' },
      { name: '发现窝', description: '暗示计划发现的窝。' },
    ],
  },
};

// Export function for getting all Chinese generators
export function getAllBusinessNameGeneratorsZh(): BusinessNameGeneratorConfig[] {
  return Object.values(businessNameGeneratorsZh);
}

// Export function for getting a specific Chinese generator by slug
export function getBusinessNameGeneratorZh(slug: string): BusinessNameGeneratorConfig | undefined {
  return businessNameGeneratorsZh[slug];
}

// Export function for getting Chinese generator slugs
export function getBusinessNameGeneratorSlugsZh(): string[] {
  return Object.keys(businessNameGeneratorsZh);
}
