import { SeoToolConfig } from '../seo-tools-config.types';

export const seoToolsZh: Record<string, SeoToolConfig> = {
  'keyword-generator-tool': {
    slug: 'keyword-generator-tool',
    name: '关键词生成器',
    title: '免费关键词生成器',
    description: '为您的SEO和内容营销活动发现数千个关键词创意。获取搜索量、关键词难度和CPC数据。',
    metaDescription: '从任意种子词生成关键词创意。查看15个以上国家的搜索量、难度和CPC数据——完全免费，无需注册。',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: '输入种子关键词',
    inputPlaceholder: '例如：邮件营销',
    buttonText: '查找关键词',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'keyword-generator',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: '国家',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: '美国' },
          { value: '2826', label: '英国' },
          { value: '2276', label: '德国' },
          { value: '2250', label: '法国' },
          { value: '2724', label: '西班牙' },
          { value: '2380', label: '意大利' },
          { value: '2076', label: '巴西' },
          { value: '2124', label: '加拿大' },
          { value: '2036', label: '澳大利亚' },
          { value: '2356', label: '印度' },
          { value: '2392', label: '日本' },
          { value: '2528', label: '荷兰' },
          { value: '2792', label: '土耳其' },
          { value: '2410', label: '韩国' },
          { value: '2484', label: '墨西哥' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: '关键词', sortable: true, type: 'text' },
      { key: 'search_volume', label: '搜索量', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: '竞争度', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: '发掘任意市场的关键词机会',
        description: '无论您是在拓展英国市场、瞄准巴西的购物者，还是在日本开展本地推广活动，该工具都能让您通过一次输入便可研究15个以上国家的关键词需求。输入一个种子关键词（如"邮件营销"），从下拉菜单中选择目标国家，即可立即发现真实用户在Google中输入的搜索词。这对于规划多区域内容发布的国际SEO团队，以及在进入新市场前验证产品需求的电商品牌尤其有用。',
        image: '/Keyword Generator/ideate keywords from a seed keyword in any location.png',
      },
      {
        title: '全面了解主题的搜索格局',
        description: '在将资源投入到内容集群之前，您需要了解该主题是否有足够的搜索需求以及竞争是否可控。输入种子关键词后，该工具会返回一个总览仪表板，显示关键词总数（例如50个结果）、这些关键词的平均搜索量以及平均难度。这一概览让内容策略师和SEO经理能够快速判断某个主题是否值得投入，还是应该转向竞争更小的关键词领域。',
        image: '/Keyword Generator/See a comprehensive overview of your see keyword from search volume to difficulty to cpc.png',
      },
      {
        title: '评估关键词级别的竞争力以优先排序内容',
        description: '结果表展示了每个关键词及其月搜索量、关键词难度评分（KD）、每次点击成本（CPC）和竞争指数。这种多维度指标视图让您可以找到最佳结合点：高搜索量、低难度且具有显著商业意图的关键词。PPC经理可以利用CPC列来估算广告支出，而SEO从业者则可以利用KD评分来决定哪些关键词适合通过长篇内容攻克，哪些需要优先建立外链策略。',
        image: '/Keyword Generator/See any keywords competitive landscape from kyword difficulty to cpc.png',
      },
      {
        title: '挖掘语义相关关键词以建立主题权威',
        description: 'Google的排名算法会奖励全面覆盖某一主题的页面。此视图显示了一组语义相关关键词及其各自的搜索量。利用这些数据来识别应该出现在标题、正文和FAQ部分的次要关键词和LSI（潜在语义索引）关键词。通过将这些相关词汇自然地融入您的内容中，向搜索引擎传递主题深度的信号——这是信息类查询中最强大的页面排名因素之一。',
        image: '/Keyword Generator/see other semantically relevant keywords (secondary keyword) and their volume close to your main keyword.png',
      },
    ],
    faqs: [
      {
        question: '什么是关键词生成器？它是如何工作的？',
        answer: '关键词生成器是一种研究工具，它接收一个种子关键词——您想要排名的宽泛主题或短语——并返回真实用户在搜索引擎中输入的相关搜索查询列表。Analyze AI的关键词生成器通过查询搜索词数据库运作，每次搜索最多返回50个关键词创意，并显示每个关键词的月搜索量、关键词难度评分、每次点击成本和竞争水平。整个过程仅需几秒钟，无需账户或登录。',
      },
      {
        question: '该工具中的关键词难度（KD）是如何计算的？',
        answer: '关键词难度是一个0到100的评分，用于估算在给定词的自然搜索前10名中获得排名的难度。该评分考虑了当前在Google第一页排名的页面的外链强度和域名权威。KD为0-10被认为是容易的（新网站可以竞争），11-30是中等的（需要扎实的内容和一些外链），31-60是困难的（需要强大的权威和链接建设），61-100是非常困难的（由维基百科、亚马逊或大型出版商等高权威网站主导）。',
      },
      {
        question: '搜索量和关键词难度有什么区别？',
        answer: '搜索量表示每月有多少人搜索某个词——它衡量的是需求。关键词难度表示该词的搜索结果竞争有多激烈——它衡量的是供给侧阻力。一个月搜索量为10,000但KD为85的关键词，其价值可能不如一个搜索量500但KD为8的关键词，因为后者您可以实际获得排名。最佳的关键词策略是平衡这两个指标，找到需求充足且竞争可行的词语。',
      },
      {
        question: '如果我只做SEO，如何利用免费关键词工具中的CPC数据？',
        answer: 'CPC（每次点击成本）反映的是广告主愿意为在Google Ads中点击该关键词支付的费用。即使您不投放付费广告，CPC也是衡量商业意图的强力指标。CPC较高的关键词（例如15美元以上）表明企业认为这些搜索者具有高价值——意味着他们更接近购买决策。通过SEO内容定位高CPC关键词可以带来转化率更高的流量，这使得CPC成为自然关键词研究中最被低估的指标之一。',
      },
      {
        question: '每次搜索可以生成多少个关键词？',
        answer: '每次搜索最多可从输入的种子词返回50个关键词创意。要生成更多创意，可以尝试种子关键词的变体、使用长尾修饰语（例如用"初创企业邮件营销"代替"邮件营销"），或在不同国家进行搜索。资深用户通常会进行10-20次种子关键词搜索，并将结果汇总成一个主关键词列表，然后进行去重并按搜索量和难度排列优先级。',
      },
      {
        question: '我可以使用这个工具进行本地SEO关键词研究吗？',
        answer: '可以。国家选择器支持15个以上的国家，包括美国、英国、德国、法国、西班牙、意大利、巴西、加拿大、澳大利亚、印度和日本。通过切换国家，您可以查看该市场的本地化搜索量数据。这对于本地企业、区域电商店铺以及管理多地点SEO活动的代理机构特别有价值。',
      },
      {
        question: '什么是语义相关关键词？它们为什么对SEO很重要？',
        answer: '语义相关关键词是与您的主关键词在概念上相关的词语，即使它们不包含完全相同的词汇。例如，对于种子关键词"邮件营销"，语义相关词可能包括"邮件自动化"、"滴灌式营销活动"和"订阅者互动"。Google使用自然语言处理（NLP）来理解词语之间的主题关系。自然地包含语义相关关键词的页面往往排名更高，因为它们传递了全面主题覆盖的信号。',
      },
      {
        question: '如何使用该工具找到低竞争关键词？',
        answer: '按KD（关键词难度）列升序排列结果表。寻找KD在0到15之间、月搜索量超过100且竞争分数低于30的关键词。这些就是您的"低垂果实"——在这些词上，一个经过良好优化、具有原创深度内容的页面无需大量外链投入即可获得排名。长尾关键词（3-5个词）通常竞争更低，因为它们针对的搜索意图更窄，大型竞争对手往往会忽略这些关键词。',
      },
      {
        question: '竞争分数列是什么？它与关键词难度有什么区别？',
        answer: '竞争分数衡量的是在付费搜索（Google Ads）中有多少广告主在竞价该关键词。100分意味着几乎所有广告位都已被填满——广告主之间的竞争非常激烈。而关键词难度则基于排名靠前页面的外链配置来衡量自然排名的竞争程度。一个关键词可能有很高的付费竞争但自然搜索难度很低（反之亦然）。聪明的营销人员会交叉参考这两个指标：付费竞争高但自然搜索难度低，意味着这是一个有利可图的关键词，您可以通过SEO获取而无需花钱投放广告。',
      },
      {
        question: '可以导出关键词结果吗？',
        answer: '可以。该工具在结果表顶部提供了"导出CSV"按钮。您可以将完整的关键词列表——包括搜索量、KD、CPC和竞争数据——下载为电子表格。之后，您可以合并多次搜索的结果、应用自定义筛选、创建内容日历，或与撰稿人和SEO团队成员共享数据。',
      },
      {
        question: '关键词数据多久更新一次？',
        answer: '关键词数据库会定期刷新以确保准确性和相关性。搜索量数据基于滚动月均值，这会平滑短期峰值和季节性波动。对于热门话题或快速发展的行业，建议将关键词工具数据与Google Trends进行交叉参考，以捕捉可能尚未反映在平均月搜索量中的实时趋势。',
      },
      {
        question: '如何将此关键词生成器作为更大SEO工作流程的一部分使用？',
        answer: '关键词生成器通常是五阶段SEO内容工作流程的第一步：（1）发现——使用此工具从种子词生成关键词创意，（2）筛选——按KD和搜索量过滤以找到可行的目标，（3）聚类——将语义相关的关键词归入主题集群，（4）内容创作——撰写以主要关键词为目标并自然融入次要关键词的页面，（5）跟踪——使用排名检查器随时间监控页面的表现。',
      },
    ],
  },

  'keyword-difficulty-checker': {
    slug: 'keyword-difficulty-checker',
    name: '关键词难度检查器',
    title: '免费关键词难度检查器',
    description: '查看任意关键词的排名难度。获取0-100的难度评分以及搜索量和竞争数据。',
    metaDescription: '免费检查任意关键词的排名难度。查看KD评分、搜索量和CPC，优先选择您真正能排名的关键词。',
    iconName: 'BarChart3',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: '输入关键词',
    inputPlaceholder: '例如：最佳项目管理软件',
    buttonText: '检查难度',
    resultType: 'keyword-difficulty',
    metricsToShow: ['keyword_difficulty', 'search_volume', 'cpc'],
    apiEndpoint: 'keyword-difficulty',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: '国家',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: '美国' },
          { value: '2826', label: '英国' },
          { value: '2276', label: '德国' },
          { value: '2250', label: '法国' },
          { value: '2724', label: '西班牙' },
          { value: '2380', label: '意大利' },
          { value: '2076', label: '巴西' },
          { value: '2124', label: '加拿大' },
          { value: '2036', label: '澳大利亚' },
          { value: '2356', label: '印度' },
          { value: '2392', label: '日本' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: '关键词', sortable: true, type: 'text' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'search_volume', label: '搜索量', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
    ],
    useCases: [
      {
        title: '快速评估某个关键词是否值得去做',
        description: '在撰写任何内容之前，您需要知道自己是否能实际为目标关键词获得排名。输入任意关键词，从下拉菜单中选择10多个国家之一，即可获得即时的难度评估。这是任何严肃内容策略的第一道过滤器——它可以防止您在那些前10名结果被您无法匹敌的高域名权威网站主导的关键词上浪费数周的努力。用它来审核客户的关键词需求、验证博客主题创意，或预筛头脑风暴会议中产生的词语。',
        image: '/keyword difficulty checker/Check the difficulty of any keyword.png',
      },
      {
        title: '获取任意关键词的360度竞争概览',
        description: '结果仪表板并排显示三个关键指标：关键词难度（例如58"困难"）、搜索量（例如1,900/月）和CPC（例如32.40美元）。这种三合一指标视图让您一目了然地掌握全局。一个KD高但CPC也高的关键词可能仍值得通过长期权威建设策略来追求，因为商业意图证明了努力的合理性。相反，一个KD低但CPC为零的关键词可能会带来流量但不会产生收入。利用此仪表板做出数据驱动的内容决策。',
        image: '/keyword difficulty checker/see the keywords 360 competitiveness with cpc.png',
      },
      {
        title: '理解难度评分的实际含义',
        description: 'KD仪表盘提供了排名难度的可视化、直观表示。评分从0到100，配有颜色编码的严重程度：绿色（容易，0-20）、黄色（中等，21-40）、橙色（困难，41-60）和红色（非常困难，61-100）。当向不从事日常SEO工作的利益相关者或客户展示关键词研究时，这种可视化特别有用——他们需要对"我们能否为此排名？"这个问题获得快速、直观的答案。',
        image: '/keyword difficulty checker/see the keywords actual difficulty.png',
      },
      {
        title: '在投入内容制作前验证搜索需求',
        description: '搜索量是所有关键词定位决策的基础。此卡片单独展示月搜索量指标，让您确认是否有足够多的人在积极搜索该词以证明内容创建的合理性。SEO中的一个常见错误是仅仅因为关键词看起来相关就去定位零或可忽略搜索量的关键词。这一快速检查可以防止这种情况——结合KD评分，它会告诉您这个机会是否既真实又可实现。',
        image: '/keyword difficulty checker/see the keywords actual search volume.png',
      },
    ],
    faqs: [
      {
        question: '什么是关键词难度？为什么在创建内容前应该检查它？',
        answer: '关键词难度（KD）是一个指标，用于估算在特定关键词的自然搜索前10名中获得排名的难度。通常以0-100分来评分。在创建内容前检查KD至关重要，因为它可以防止您在几乎没有机会获得排名的页面上投入时间和金钱。如果某个关键词的前10名搜索结果全部来自Forbes、HubSpot和Wikipedia等网站——每个页面都有数百个引用域名——那么一个新建或中等权威的网站在没有大量链接建设投入的情况下将很难与之竞争。',
      },
      {
        question: '关键词难度和关键词竞争有什么区别？',
        answer: '关键词难度衡量的是自然搜索的竞争性——在Google的免费搜索结果中获得排名有多难。它基于当前前10名页面的外链强度来计算。关键词竞争（有时也称为竞争密度）衡量的是付费搜索的竞争性——有多少广告主在Google Ads中竞标该关键词。一个关键词可能在自然搜索中很容易获得排名（低KD），但在付费竞争中非常激烈（高竞争分数），反之亦然。',
      },
      {
        question: '作为新网站，我应该瞄准什么KD分数？',
        answer: '新网站（运营不到1年，引用域名少于50个）应瞄准KD为0-15的关键词。这些通常是3-5个词的长尾查询，大型网站并未专门为其优化。随着您的域名权威通过持续的内容创作和链接建设不断增长，可以逐步瞄准KD为15-30、再到30-50的关键词。在没有足够域名权威的情况下试图为KD超过50的关键词获得排名，几乎总是会失败的，无论内容质量多高。',
      },
      {
        question: '一个页面能否在没有外链的情况下为高难度关键词获得排名？',
        answer: '这种情况极为罕见。关键词难度很大程度上取决于指向排名靠前页面的外链数量和质量。不过也有少数例外情况：如果您的内容比现有结果提供了明显更好的信息增益（例如原创研究、独特数据或新颖的内容格式），并且您的域名具有中等权威，Google可能会将您的页面放到更高位置进行测试。但是，对于KD分数超过40的关键词，外链几乎总是维持长期排名的前提条件。',
      },
      {
        question: '为什么同一个关键词在不同工具上有不同的难度评分？',
        answer: '每个SEO工具使用其自有的专有算法、抓取索引和权重方法来计算关键词难度。Ahrefs侧重于前10名结果的引用域名数量，Moz使用自己的Page Authority和Domain Authority指标，而SEMrush则纳入了额外的SERP特征和内容信号。这就是为什么同一个关键词在一个工具上可能显示KD 45，而在另一个工具上显示KD 62。绝对数值不如相对排名重要——始终使用同一个工具，这样您的难度比较才具有可比性。',
      },
      {
        question: 'CPC在评估关键词难度中扮演什么角色？',
        answer: 'CPC（每次点击成本）不直接影响自然排名难度，但提供了关键的背景信息。一个KD为55且CPC为0.50美元的关键词表明虽然排名困难，但商业回报较低。而一个KD为55且CPC为32.40美元的关键词则说明了完全不同的情况：这些流量对企业来说极具价值，这意味着为其获得自然排名可以替代大量的广告支出。当两个关键词的KD分数相似时，优先选择CPC更高的那个——它意味着更强的买家意图和投资回报潜力。',
      },
      {
        question: '如何检查特定国家的关键词难度？',
        answer: '使用工具输入表单上的国家下拉菜单来选择您的目标市场。关键词难度在不同国家之间可能有很大差异，因为竞争格局各不相同。一个在美国KD为60的关键词，在巴西可能只有KD 25，在德国可能是KD 40，仅仅因为在这些市场中竞争的高权威网站较少。请始终检查您的受众所在具体国家的难度数据，而不是默认使用美国数据。',
      },
      {
        question: '关键词难度和搜索量之间是什么关系？',
        answer: '通常，搜索量越高的关键词难度也越高，因为更多网站在竞争热门搜索词。然而，情况并非总是如此。一些高搜索量的关键词难度出人意料地低（这些是黄金机会），而一些低搜索量的关键词难度却很高，因为该利基市场被权威专业网站所主导。理想的关键词目标是搜索量超过您的最低阈值，同时KD分数在您域名的竞争范围之内。',
      },
      {
        question: '我应该避开所有高难度关键词吗？',
        answer: '不应该。高难度关键词应该是您长期内容策略的一部分——它们代表着您的理想目标。正确的方法是先通过在同一主题集群中为较简单的关键词获得排名来建立主题权威，然后利用内部链接和积累的权威来逐步竞争更难的词语。一旦那些较容易的页面获得排名，它们就会增强您域名的主题权威性，提高您在竞争激烈的核心关键词上获得排名的机会。',
      },
      {
        question: '应该多久重新检查一次关键词难度？',
        answer: '每季度重新检查一次核心目标关键词的难度。竞争格局会随着新内容的发布、外链的建设和算法更新的推出而变化。一个六个月前KD为45的关键词，如果之前排名靠前的页面失去了外链或被取消索引，现在可能已经降到KD 35。长期监测KD的变化还能帮助您追踪自己的SEO工作是否正在缩小竞争差距。',
      },
      {
        question: 'KD颜色编码（绿色、黄色、橙色、红色）代表什么含义？',
        answer: '颜色编码的仪表盘对应难度范围：绿色（0-20）表示该关键词相对容易获得排名，适合新建或低权威的网站。黄色（21-40）表示中等竞争——您需要优质的内容和一些外链。橙色（41-60）表示高竞争——需要强大的内容、技术SEO和积极的链接建设策略。红色（61-100）表示非常激烈的竞争——通常只有具备丰富外链资源的高权威域名才能占据这些位置。',
      },
      {
        question: '可以一次检查多个关键词的难度吗？',
        answer: '免费工具每次检查一个关键词，非常适合快速抽检和验证单个关键词创意。对于批量关键词难度分析——同时检查数十或数百个关键词——您通常可以从关键词生成器工具导出关键词并在电子表格中进行分析，或者直接使用关键词生成器结果表中已经显示的KD列。',
      },
    ],
  },

  'website-authority-checker': {
    slug: 'website-authority-checker',
    name: '网站权威检查器',
    title: '免费网站权威检查器',
    description: '免费检查任意网站的自然搜索权威。查看预估自然流量、已排名关键词、前10名位置和关键词排名分布。',
    metaDescription: '免费检查任意网站的权威评分。即时查看域名强度、自然流量、已排名关键词和SERP位置分布。',
    iconName: 'Globe',
    category: 'link-building',
    inputType: 'url',
    inputLabel: '输入域名',
    inputPlaceholder: '例如：example.com',
    buttonText: '检查权威',
    resultType: 'domain-authority',
    metricsToShow: ['domain_score', 'organic_traffic', 'ranked_keywords', 'top_10'],
    apiEndpoint: 'website-authority',
    freeResultLimit: 1,
    options: [],
    tableColumns: [
      { key: 'position', label: '排名范围', sortable: false, type: 'text' },
      { key: 'keywords', label: '关键词', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: '几秒钟内检查任意网站的域名权威',
        description: '每一个外链建设决策、竞争分析和合作伙伴评估都从一个问题开始：这个域名有多权威？输入任意域名到检查器中，点击"检查权威"，即可获得即时评估。无论您是在审查客座投稿机会、评估外链前景，还是将您的域名与竞争对手进行基准比较，这都是衡量网站整体实力的最快方法。',
        image: '/Website authority checker/Check the autority of any website.png',
      },
      {
        title: '了解所有关键词的SERP位置分布',
        description: '此分析展示了一个网站在每个SERP排名范围内排名了多少关键词：第1名、第2-3名、第4-10名、第11-20名等。这种分布讲述的故事比单一的权威数字更加深入。使用它来评估您自己网站的增长轨迹，并识别您可以实际挑战其排名的竞争对手。',
        image: '/Website authority checker/See any websites keywords ranking.png',
      },
      {
        title: '评估域名的流量和排名规模',
        description: '指标仪表板显示自然流量、已排名关键词总数和排名1-10的关键词。这些数字用性能数据为权威评分提供了背景。这种多指标视图可以防止基于单一指标的决策，为您提供完整的竞争全貌。',
        image: '/Website authority checker/See other details as traffick, rankings, positions.png',
      },
      {
        title: '查看带有严重程度分级的实际权威评分',
        description: '域名评分仪表盘显示0-100的评级，配有颜色编码的严重程度和标签（例如，hubspot.com的"99——非常强"）。可视化仪表盘使权威评分立即可以理解。利用它来设定合理预期。这种可视化也非常适合客户报告和利益相关者演示。',
        image: '/Website authority checker/See the actual authority score of your website. Score out of 100.png',
      },
    ],
    faqs: [
      {
        question: '什么是网站权威？它是如何衡量的？',
        answer: '网站权威（也称为域名权威或域名强度）是一个SEO指标，根据指向域名的外链数量和质量来估算其整体排名能力。它在0-100的对数尺度上衡量，这意味着分数越高，提升难度呈指数级增长。30分通过基础的链接建设相对容易达到，而从70提升到80所需的高质量外链远远超过从20提升到30所需的数量。',
      },
      {
        question: '什么样的网站权威评分算是好的？',
        answer: '权威是相对于您的竞争格局而言的。在竞争对手平均分为25的利基行业中，域名评分40可能已经很优秀；但在竞争对手平均分为70的领域，这个分数就显得较弱了。作为一般参考标准：0-20是新建或发展不足的，21-40是发展中的（典型的中小型企业），41-60是已建立的（在大多数利基市场具有竞争力），61-80是强大的（在高价值关键词上具有竞争力），81-100是顶级的（大型品牌、新闻媒体和高权威平台）。',
      },
      {
        question: '网站权威是Google的排名因素吗？',
        answer: 'Google已公开声明"域名权威"不是其算法中的直接排名因素。然而，研究始终显示域名权威与关键词排名之间存在强相关性。实际的要点是，即使Google不直接使用第三方权威评分，其背后的底层信号（外链质量、引用域名数量、链接多样性）都是根本性的排名因素。权威评分是衡量这些信号的最佳代理指标。',
      },
      {
        question: '域名评分与Moz的域名权威（DA）有何不同？',
        answer: '这两个指标都旨在以0-100的尺度衡量域名强度，但它们使用不同的计算方法和数据源。Moz的DA基于其自有的链接索引，使用机器学习模型来预测排名能力。其他域名评分指标使用各自的爬取索引和计算公式。这些分数不可互换——一个网站可能在Moz上是DA 45，而在另一个工具上是域名评分52。关键在于一致性：在所有比较中使用同一个工具。',
      },
      {
        question: '如何提升我网站的权威评分？',
        answer: '提升域名权威的唯一可靠方法是从更多独特的引用域名获取外链——特别是那些自身具有高权威的域名。有效的策略包括：创建容易获得链接的内容（原创研究、全面的指南、免费工具）、在行业媒体上进行客座发文、数字PR和媒体推广、失效链接建设、资源页面链接建设，以及与行业同行建立关系。',
      },
      {
        question: '自然流量和已排名关键词指标能告诉我什么关于权威的信息？',
        answer: '这些指标用性能数据为权威评分提供了背景。高权威评分伴随低自然流量，表明该域名拥有强大的外链配置但内容薄弱或关键词定位不佳。而中等权威伴随高流量则表明该网站拥有超越其链接实力的优质内容。排名1-10位的关键词数量揭示了一个域名在首页实际主导了多少关键词——这是衡量竞争权威实际效果的终极指标。',
      },
      {
        question: '什么是排名位置分布表？如何阅读它？',
        answer: '排名位置分布表分解了一个域名在不同SERP位置范围内排名了多少关键词：第1名、第2-3名、第4-10名、第11-20名、第21-30名等。一个健康、增长中的网站呈现金字塔形分布——第1名的关键词最少，第2-10名的较多，更低位置的逐渐增多。如果大部分关键词集中在第41-100名，说明该网站有一定的可见度，但尚缺乏进入首页所需的权威或内容质量。',
      },
      {
        question: '可以使用网站权威来评估外链前景吗？',
        answer: '可以——这是最常见的使用场景之一。在建设外链时，优先选择域名评分在30以上、理想情况下在50以上的网站，以获得最大的链接权重传递。但仅凭权威评分是不够的。还需要检查该网站是否发布高质量内容、是否与您的利基市场在主题上具有相关性、是否获得了真实的自然流量，以及是否拥有自然的出站链接配置。',
      },
      {
        question: '为什么有些网站权威高但流量低？',
        answer: '这种情况有几个原因：网站多年来积累了外链但并未积极创建针对搜索关键词的内容；网站内容已过时，不再符合当前的搜索意图；网站虽然拥有强大的外链，但因其他质量问题被Google处罚；或者网站处于低搜索量的利基市场，即使获得首页排名也无法产生大量流量。',
      },
      {
        question: '网站权威多久变化一次？',
        answer: '权威评分会随着底层外链数据的重新抓取和更新而波动。新的外链会增加您的分数；失去的外链会降低分数。重大变化通常需要4-8周才能反映在权威指标中。对于积极建设链接的网站，每月1-3分的渐进提升是常见的。突然下降可能表明重要外链的丢失或评分工具的重新计算。',
      },
      {
        question: '网站权威和链接权重之间是什么关系？',
        answer: '网站权威本质上是积累的链接权重的汇总。每个来自外部网站的外链都会向您的域名传递一些链接权重，而总积累的权重体现在您的权威评分中。权威越高的引用域名传递的链接权重越多。高权威域名上的页面会继承域名级别的权重，使其在排名中拥有先发优势。',
      },
      {
        question: '我应该专注于提升权威评分还是自然流量？',
        answer: '专注于自然流量——权威是达到目的的手段，而非目的本身。最有效的策略是同时建设链接（提升权威）和创建关键词定向的内容（获取流量）。没有针对性内容的高权威评分不会产生流量。没有权威支撑的优质内容在竞争激烈的关键词上难以获得排名。两者协同作用，相辅相成。',
      },
    ],
  },

  'serp-checker': {
    slug: 'serp-checker',
    name: 'SERP检查器',
    title: '免费SERP检查器',
    description: '查看任意关键词的Google搜索结果。查看谁在自然搜索前10名中排名，包括标题、URL和域名。',
    metaDescription: '分析任意国家任意关键词的Google排名靠前的结果。查看排名、域名、URL和总结果数，制定您的SEO策略。',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'keyword',
    inputLabel: '输入关键词',
    inputPlaceholder: '例如：最佳项目管理工具',
    buttonText: '检查SERP',
    resultType: 'serp-results',
    metricsToShow: ['total_results', 'organic_results'],
    apiEndpoint: 'serp-checker',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: '国家',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: '美国' },
          { value: '2826', label: '英国' },
          { value: '2276', label: '德国' },
          { value: '2250', label: '法国' },
          { value: '2724', label: '西班牙' },
          { value: '2380', label: '意大利' },
          { value: '2076', label: '巴西' },
          { value: '2124', label: '加拿大' },
          { value: '2036', label: '澳大利亚' },
          { value: '2356', label: '印度' },
          { value: '2392', label: '日本' },
          { value: '2528', label: '荷兰' },
          { value: '2792', label: '土耳其' },
          { value: '2410', label: '韩国' },
          { value: '2484', label: '墨西哥' },
        ],
      },
    ],
    tableColumns: [
      { key: 'position', label: '#', sortable: true, type: 'number' },
      { key: 'title', label: '标题', sortable: false, type: 'text' },
      { key: 'domain', label: '域名', sortable: true, type: 'text' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: '查看任意国家任意关键词的Google SERP',
        description: '了解当前的排名情况是任何SEO活动的基础。输入关键词，从15个以上的选项中选择目标国家，即可立即查看当前的SERP格局。这会告诉您竞争对手是谁、哪些内容格式占主导地位以及该领域的拥挤程度。国际SEO人员利用国家选择器来比较不同市场的SERP构成。',
        image: '/SERP Checker/Check the SERP for any keyword for any given country.png',
      },
      {
        title: '分析排名的内容类型和域名',
        description: 'SERP结果展示了总结果数、自然搜索结果数量以及实际排名的页面及其标题、URL和描述。这让您可以分析内容格式模式：排名靠前的结果是博客文章、产品页面、对比文章还是工具？这些信息精确地告诉您Google对该查询奖励什么样的内容格式。',
        image: '/SERP Checker/Find the different types of content that rank on the SERP.png',
      },
      {
        title: '在定位关键词前评估SERP竞争程度',
        description: '在将资源投入到某个关键词之前，先通过SERP检查器查看您将与谁竞争。如果SERP由拥有强大权威的网站（亚马逊、维基百科、政府网站）主导，该关键词可能需要不同的策略。如果SERP中包含较小或较新的网站，则存在实际可行的排名路径。',
        image: '/SERP Checker/See how competitive any keyword is on the SERP.png',
      },
      {
        title: '追踪您的品牌在目标关键词上的排名位置',
        description: '详细结果表显示每个排名位置的标题、域名和完整URL。滚动查看您的网站（或竞争对手的网站）是否出现在结果中。利用这一功能来验证排名追踪数据、在客户会议前抽查关键词，或确认新发布的页面已进入SERP。',
        image: '/SERP Checker/See your brands ranking for any keyword on the SERP.png',
      },
    ],
    faqs: [
      {
        question: '什么是SERP检查器？为什么我需要一个？',
        answer: 'SERP（搜索引擎结果页）检查器可以向您展示任意国家任意关键词的实际Google搜索结果，而不受您自己浏览器个性化偏差的影响。当您自己在Google上搜索时，搜索结果会受到您的搜索历史、位置、设备和已登录的Google账户的影响。SERP检查器提供中立、无偏见的排名视图——与首次搜索者看到的结果相同。',
      },
      {
        question: 'SERP检查器如何处理基于位置的结果？',
        answer: '该工具使用国家选择器来模拟从所选国家的Google索引进行搜索（例如，美国使用google.com，英国使用google.co.uk，德国使用google.de）。SERP的构成在不同国家之间可能有很大差异——不同的域名排名、不同的内容格式出现，甚至SERP功能的数量也会改变。请始终检查目标国家的SERP，而不仅仅是美国默认设置。',
      },
      {
        question: '"总结果数"和"自然搜索结果数"是什么意思？',
        answer: '"总结果数"是Google报告的匹配页面数量。这是一个反映主题广度的粗略指标，但不适合用于竞争分析。"自然搜索结果数"计算的是第一页出现了多少传统蓝色链接结果。如果SERP只显示8个自然结果而不是通常的10个，剩余空间被精选摘要、地图、视频或"大家还在搜"等SERP功能占据。',
      },
      {
        question: '如何利用SERP数据确定内容格式？',
        answer: '分析前10名结果并对其进行分类：是操作指南、列表文章、工具页面、对比文章、产品页面还是视频结果？如果10个结果中有7个是列表文章，Google已确定搜索者希望看到该关键词的列表格式内容。创建不同的格式很可能表现不佳。请匹配主流格式，然后通过深度、时效性、独特数据或更好的用户体验来实现差异化。',
      },
      {
        question: '为什么桌面端和移动端的SERP不同？',
        answer: 'Google为桌面搜索和移动搜索维护着不同的排名算法。移动端SERP优先考虑移动友好的页面，对页面速度指标赋予更高权重，并显示不同的SERP功能。一个在桌面端排名第3的页面，如果移动端体验较差，在移动端可能会降到第7位。如果您的受众分布在不同设备上，请始终检查两个版本，并优先进行移动端优化，因为Google使用的是移动优先索引。',
      },
      {
        question: '什么是SERP功能？它们如何影响我的点击率？',
        answer: 'SERP功能是非传统结果，包括精选摘要、"相关搜索"框、视频轮播、图片包、知识面板、本地地图包和购物结果。每出现一个功能都会减少对自然搜索结果的点击——这种现象被称为"SERP功能蚕食"。如果SERP充满了各种功能，即使自然搜索排名第1，获得的点击量也可能低于预期。',
      },
      {
        question: 'Google的SERP对于特定关键词多久变化一次？',
        answer: 'SERP的波动程度因关键词类型而异。常青型信息类关键词可能具有稳定的SERP，数月内几乎没有变化。新闻相关和热门关键词可能在数小时内经历完全的SERP更替。商业性和竞争性强的关键词通常会随着页面获得或失去外链以及算法更新的推出而逐渐变化。每月检查核心关键词的SERP有助于发现新的竞争对手。',
      },
      {
        question: '可以使用SERP数据进行竞争差距分析吗？',
        answer: '当然可以。在多次SERP检查中搜索相同的关键词，记录哪些域名始终出现在前10名中。在许多目标关键词中排名的域名就是您的主要SEO竞争对手（可能与您的业务竞争对手不同）。分析这些排名页面的共同点——内容长度、结构、外链数量、内容时效性——并找出您的内容可以超越它们的差距所在。',
      },
      {
        question: '如果我的网站出现在SERP中但排名较低，这意味着什么？',
        answer: '如果您的页面出现在第11-30位（Google的第2-3页），这意味着Google已认识到您的内容具有相关性，但尚未将其视为足够权威或全面以进入第一页。这实际上是一个积极的信号——您处于"射程范围"内。可以将您推到第一页的改进措施包括：添加更全面的内容、构建3-5个高质量外链、提高页面速度以及添加支持性内部链接。',
      },
      {
        question: '如何使用SERP检查器找到精选摘要机会？',
        answer: '检查目标关键词的SERP，寻找已出现精选摘要的查询。然后检查现有摘要的内容是否可以改进。瞄准您已排名在1-10位的关键词，因为Google主要从已在第一页的页面中提取精选摘要。使用清晰的标题、编号列表、表格或简洁的段落回答，创建专门针对摘要提取格式的更全面的答案。',
      },
      {
        question: 'URL结构在SERP表现中扮演什么角色？',
        answer: 'SERP检查器显示每个排名结果的完整URL，从而揭示URL结构模式。包含目标关键词的简洁、描述性URL往往更频繁地出现在排名靠前的位置。而长且参数繁多的URL或包含随机字符串的URL表现往往较差。分析排名靠前页面的URL模式——如果所有排名靠前的结果都使用简短、包含关键词的路径，这就是一个应该匹配此模式的信号。',
      },
      {
        question: 'SERP检查器数据能帮助PPC广告活动吗？',
        answer: '可以。SERP数据揭示了自然搜索的竞争格局，这为付费搜索策略提供了参考。如果自然搜索结果被大型竞争对手主导，PPC可能是获得曝光度的更快途径。自然搜索结果中的内容格式暗示了用户意图——将广告着陆页与此意图匹配可以提高质量得分。如果SERP中出现的广告很少，说明付费竞争较低，CPC可能较为便宜。',
      },
    ],
  },

  'keyword-rank-checker': {
    slug: 'keyword-rank-checker',
    name: '关键词排名检查器',
    title: '免费关键词排名检查器',
    description: '查看任意网站在Google中排名的关键词。查看排名位置、搜索量和每个关键词的预估流量。',
    metaDescription: '免费检查您的网站在任意国家的关键词排名。查看位置、流量、CPC和所有页面的内容表现。',
    iconName: 'BarChart3',
    category: 'serp-ranking',
    inputType: 'keyword-url',
    inputLabel: '输入域名',
    inputPlaceholder: '例如：example.com',
    secondaryInputLabel: '按关键词筛选（可选）',
    secondaryInputPlaceholder: '例如：营销',
    buttonText: '检查排名',
    resultType: 'rank-position',
    metricsToShow: ['total_keywords', 'top_3', 'top_10', 'top_50'],
    apiEndpoint: 'keyword-rank-checker',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: '国家',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: '美国' },
          { value: '2826', label: '英国' },
          { value: '2276', label: '德国' },
          { value: '2250', label: '法国' },
          { value: '2724', label: '西班牙' },
          { value: '2380', label: '意大利' },
          { value: '2076', label: '巴西' },
          { value: '2124', label: '加拿大' },
          { value: '2036', label: '澳大利亚' },
          { value: '2356', label: '印度' },
          { value: '2392', label: '日本' },
          { value: '2528', label: '荷兰' },
          { value: '2792', label: '土耳其' },
          { value: '2410', label: '韩国' },
          { value: '2484', label: '墨西哥' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: '关键词', sortable: true, type: 'text' },
      { key: 'position', label: '排名', sortable: true, type: 'number' },
      { key: 'search_volume', label: '搜索量', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'traffic', label: '流量', sortable: true, type: 'number' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: '检查您的网站在任意国家SERP上的排名',
        description: '了解您的排名位置是SEO的记分板。输入您的域名，可选择按特定关键词筛选，选择国家，然后准确查看您的网站在Google结果中的排名位置。关键词筛选功能特别强大——无需在数百个排名中筛选，您可以立即查看特定目标词。国际品牌和多市场代理机构使用国家选择器分别追踪每个运营市场的排名。',
        image: '/Rank checker/Check the rank of your website on any countrys SERP.png',
      },
      {
        title: '跨国分析竞争对手的排名',
        description: '输入任意竞争对手的域名，从15个以上的国家中选择，即可查看其完整的排名概况。这揭示了他们赢得了哪些关键词、优先考虑哪些市场以及他们的SEO策略在哪里最强。代理机构在竞争分析和新客户入门时使用此功能来绘制竞争格局。',
        image: '/Rank checker/Check how your competitors rank on Google.png',
      },
      {
        title: '分析关键词级别的内容表现',
        description: '结果表显示每个排名关键词及其排名位置、搜索量、CPC、预估流量和排名的具体URL。这种页面级别的视图让您可以识别表现最佳的内容和表现不佳的内容。',
        image: '/Rank checker/See your websites content performance.png',
      },
      {
        title: '了解您网站的整体排名竞争力',
        description: '总结仪表板分解了关键词总数、前3名、前10名和前50名。这种分布立即告诉您网站的位置。每月追踪这些数据，衡量您的SEO策略是否正在将关键词通过SERP位置向上推移。',
        image: '/Rank checker/Understand your sites ranking and competitivement across keywords.png',
      },
    ],
    faqs: [
      {
        question: '什么是关键词排名检查器？它和SERP检查器有什么区别？',
        answer: '关键词排名检查器告诉您，您的特定网站（或任何域名）在哪些关键词上有排名。您输入一个域名，它会返回该网站的关键词和排名位置。SERP检查器则显示所有在某个特定关键词上排名的网站。可以这样理解：排名检查器回答的是"我的网站排名了哪些关键词？"，而SERP检查器回答的是"谁在这个关键词上排名？"。这两种工具都是必不可少的。',
      },
      {
        question: '关键词排名检查器的结果准确吗？',
        answer: '排名检查器的结果反映的是查询时基于所选国家和标准（非个性化）搜索设置的Google自然排名。结果可能与您直接在Google上搜索看到的略有不同，因为您的浏览器会根据您的搜索历史、位置和登录账户来个性化结果。追踪排名时，请始终使用排名检查工具而非手动Google搜索。',
      },
      {
        question: '"前3名"、"前10名"和"前50名"分别代表什么？',
        answer: '"前3名"关键词是您最强的位置（第1至3位大约获得某个查询所有自然点击的60%）。"前10名"意味着Google第一页，几乎所有自然流量都集中在这里。"前50名"覆盖第1至5页，代表您可见的关键词范围。排名在前50名之外的关键词很少能带来可衡量的流量。',
      },
      {
        question: '如何将关键词从Google第2页推进到第1页？',
        answer: '排名在11至20位的关键词是您最优先的优化目标。策略包括：更新和扩展内容以更好地匹配搜索意图、为特定页面建设3至5个高质量外链、改善标题标签和元描述以提高点击率、从您权重最高的页面添加内部链接、提升页面速度和Core Web Vitals指标，以及添加结构化数据标记。',
      },
      {
        question: '应该多久检查一次关键词排名？',
        answer: '每周检查您的核心目标关键词（对您业务最重要的10至20个关键词）。每月检查更广泛的关键词组合。避免每天检查——由于Google的算法调整、测试和索引刷新，排名每天会自然波动1至3个位置。',
      },
      {
        question: '为什么我的排名在不同国家之间存在差异？',
        answer: 'Google为每个国家维护着独立的搜索索引和排名算法。影响特定国家排名的因素包括内容语言和本地化、服务器位置和CDN部署、特定国家的外链、本地商业信号、hreflang标签实现，以及特定国家的搜索行为和竞争环境。',
      },
      {
        question: '流量列估算的是什么？它有多可靠？',
        answer: '流量列根据关键词的排名位置和搜索量估算该关键词每月发送到您URL的自然访问量。它使用点击率模型——第1位获得约27-31%的点击，第2位获得15-17%，第3位获得10-12%，依此类推。这些是估算值而非精确数字，但在方向上是准确的。',
      },
      {
        question: '如何利用排名数据识别内容优化机会？',
        answer: '寻找在高搜索量关键词上排名4至15位的页面——这些是您投资回报率最高的优化目标。然后分析它们为什么没有排名更高：内容是否不如竞争对手全面？页面是否外链更少？标题标签是否不够吸引人？将您的页面与每个关键词当前的前3名结果进行比较。',
      },
      {
        question: '排名检查器中的CPC数据告诉我什么关于我的排名？',
        answer: 'CPC揭示了您排名的每个关键词的商业价值。如果您在CPC为25美元的关键词上排名第3，该位置为您节省了大量广告支出——您免费获得的这些点击，通过Google Ads每次需要花费25美元。将预估流量乘以CPC可计算出每个排名的"流量价值"。',
      },
      {
        question: '可以按特定关键词筛选排名结果吗？',
        answer: '可以。可选的"按关键词筛选"字段允许您输入特定的关键词或短语来缩小结果范围。当您想检查某个特定主题集群的排名而非一次查看所有关键词时，这个功能非常有用。即使网站排名了数百甚至数千个关键词，此筛选功能也使工具非常实用。',
      },
      {
        question: '如何追踪排名随时间的改善？',
        answer: '每次检查时将排名数据导出为CSV，逐月比较位置变化。创建一个简单的电子表格，追踪您的前20个关键词、每月的排名位置以及变化方向。经过3至6个月，您应该能看到清晰的趋势：关键词逐渐向第1至10位移动，表明您的SEO策略正在发挥作用。',
      },
      {
        question: '排名检查器的URL列与SERP检查器有什么区别？',
        answer: '排名检查器的URL列显示的是您的域名上哪个具体页面在某个关键词上排名。这对内部SEO管理非常有价值：您可以查看是否是正确的页面在排名、识别关键词蚕食（您的两个页面竞争同一个关键词）以及发现在意想不到的搜索词上排名的页面。SERP检查器则显示所有在某个关键词上排名的域名。',
      },
    ],
  },

  'youtube-keyword-tool': {
    slug: 'youtube-keyword-tool',
    name: 'YouTube关键词工具',
    title: '免费YouTube关键词工具',
    description: '为您的YouTube视频找到最佳关键词。获取搜索量、难度和CPC数据，优化您的视频标题、描述和标签。',
    metaDescription: '发现任意领域的YouTube关键词创意。查看搜索量、难度和CPC，规划能被发现和获得排名的视频内容。',
    iconName: 'Youtube',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: '输入YouTube关键词',
    inputPlaceholder: '例如：如何编辑视频',
    buttonText: '查找关键词',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'youtube-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: '国家',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: '美国' },
          { value: '2826', label: '英国' },
          { value: '2276', label: '德国' },
          { value: '2250', label: '法国' },
          { value: '2724', label: '西班牙' },
          { value: '2380', label: '意大利' },
          { value: '2076', label: '巴西' },
          { value: '2124', label: '加拿大' },
          { value: '2036', label: '澳大利亚' },
          { value: '2356', label: '印度' },
          { value: '2392', label: '日本' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: '关键词', sortable: true, type: 'text' },
      { key: 'search_volume', label: '搜索量', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: '竞争度', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: '研究人们实际搜索的视频主题',
        description: 'YouTube是世界上第二大搜索引擎，大多数创作者失败是因为他们制作了没有人搜索的视频。输入类似"如何编辑视频"的关键词，选择目标国家，立即查看YouTube用户在搜索栏中实际输入的内容。这用数据替代了猜测——不再寄希望于某个视频主题能有好的表现，而是提前知道真实需求的存在。内容创作者、视频营销人员和YouTube频道管理者都将此工具作为每个内容日历的起点。',
        image: '/Youtube keyword tool/Research and plan your youtube content better.png',
      },
      {
        title: '评估YouTube关键词的竞争格局',
        description: '结果表显示了每个关键词及其YouTube特定的搜索量、关键词难度（KD）、CPC和竞争度分数。这让您可以识别对于您的频道规模而言哪些视频主题是可以实现的。订阅者不足1,000的小型频道应瞄准KD低于20的关键词，而成熟频道可以竞争更高难度的关键词。CPC列还揭示了哪些关键词吸引了广告商的支出——如果您的变现策略依赖于YouTube广告收入，这特别有用，因为CPC较高的关键词通常能产生更好的RPM。',
        image: '/Youtube keyword tool/See how competitive your youtube content ideas are.png',
      },
      {
        title: '在投入内容系列前衡量主题的整体可行性',
        description: '总结仪表板显示围绕您种子关键词的关键词集群的总关键词数（50个）、平均搜索量和平均难度。这告诉您某个主题是否有足够的深度和需求来支撑一个视频系列。如果平均搜索量高且平均难度可控，您就有了规划该主题多视频内容系列的绿灯。如果数据表现不佳，在投入制作时间之前及时转向。视频制作成本很高——这个10秒的检查可以为您节省数小时的无效劳动。',
        image: '/Youtube keyword tool/See the search volume of your content ideas on youtube.png',
      },
      {
        title: '在视频标题、标签和描述中建立语义相关性',
        description: 'YouTube的算法与Google类似，会奖励展现主题深度的内容。此视图显示了相关关键词及其搜索量，这些应该被自然地融入您的视频标题、描述、标签甚至口头表达中（YouTube会转录并索引音频）。例如，如果您的主关键词是"如何编辑视频"，那么"视频剪辑制作器"、"倒放视频编辑软件"、"YouTube视频宽高比"等相关词应自然出现在您的元数据中。这种语义优化能显著提高在相关搜索中的可发现性。',
        image: '/Youtube keyword tool/Use related keywords to make your youtube video semantically relevant.png',
      },
    ],
    faqs: [
      {
        question: '为什么我需要YouTube专用的关键词工具而不是普通的关键词工具？',
        answer: 'YouTube和Google是拥有不同算法、用户行为和搜索模式的独立搜索引擎。一个在Google上有10,000次搜索的关键词，在YouTube上可能只有200次，反之亦然。YouTube关键词工具直接从YouTube的搜索生态系统中提取数据，为您的视频实际需要排名的平台提供准确的搜索量估算。用Google关键词数据来做YouTube优化，就像用公路地图来航海一样——地形完全不同。',
      },
      {
        question: 'YouTube关键词难度与Google关键词难度有何不同？',
        answer: 'YouTube KD衡量的是视频之间的竞争，而非网页。影响YouTube排名的因素包括观看时长、缩略图点击率、互动（点赞、评论、分享）、频道权威以及视频元数据优化。虽然外链对Google更重要，但观看时长和互动对YouTube更重要。YouTube上KD为20的关键词意味着，即使您的频道相对较新，通过制作精良且优化得当的视频也能参与竞争。',
      },
      {
        question: '如何为新频道找到低竞争的YouTube关键词？',
        answer: '筛选KD在0到15之间且搜索量超过50的关键词。聚焦于针对特定问题或教程的长尾查询（3-6个词），例如"如何在iPhone上编辑YouTube视频"，而非宽泛的"视频编辑"。新频道还应寻找以"如何"、"什么"、"为什么"、"能否"开头的"提问型"关键词，因为这类关键词通常竞争较低且互动率较高——当观众真正需要答案时，他们会观看更长时间。',
      },
      {
        question: 'CPC对YouTube关键词意味着什么？',
        answer: 'CPC代表广告主为该关键词展示的广告每次点击所支付的费用。对于YouTube创作者来说，CPC较高的关键词意味着每千次观看的广告收入（RPM）更高。如果您通过YouTube合作伙伴计划变现，瞄准CPC在3-5美元以上的关键词意味着广告主愿意为触达您的受众支付更多费用，这直接提升您的收益。这对于金融、软件、保险和B2B领域的频道尤为重要，这些领域的CPC可超过20美元。',
      },
      {
        question: '如何使用YouTube关键词优化视频元数据？',
        answer: '将主要关键词放在视频标题中（最好靠近开头）、描述的第一句话中和第一个标签中。将相关关键词列表中的次要关键词用作附加标签、描述正文以及时间戳章节标题（如果使用时间戳的话）。YouTube还会转录您的音频并用于排名，因此请在视频的前30秒内口头提及您的主要关键词。这种多触点关键词布局能向YouTube准确传达您的视频主题信号。',
      },
      {
        question: '这个工具能帮我找到YouTube上的热门话题吗？',
        answer: '该工具显示的是平均月搜索量，反映的是持续性兴趣而非病毒式爆发。对于热门话题，建议将此工具与YouTube热门视频、Google Trends（筛选为YouTube搜索）以及社交监听工具结合使用。最佳策略是将趋势感知与关键词数据相结合：当您发现一个热门话题时，在YouTube关键词工具中检查它是否也有搜索需求。同时具备趋势势头和搜索量的话题是最高价值的目标。',
      },
      {
        question: 'YouTube关键词的搜索量达到多少才算好？',
        answer: '这取决于您的领域。在游戏、烹饪或健身等大众领域，瞄准YouTube月搜索量500次以上的关键词。在B2B SaaS、数据科学或小众爱好等专业领域，50-200次搜索的关键词也可以带来有意义的流量，因为受众更精准、价值更高。关键指标不仅仅是搜索量，还要考虑竞争度——KD为5、搜索量100的关键词往往比KD为70、搜索量5,000的关键词更有价值，尤其对于成长中的频道而言。',
      },
      {
        question: '如何利用关键词数据规划YouTube内容系列？',
        answer: '从输入一个宽泛的主题关键词开始，查看所有50个结果。将相关关键词分组成集群（例如：初学者教程、进阶技巧、工具评测、对比分析）。每个集群成为一个播放列表，集群中的每个关键词成为一个独立视频。这种"中心辐射"方法反映了Google奖励主题权威的方式——YouTube同样会提升那些通过相互关联的播放列表和持续发布相关主题内容来展示深度专业知识的频道。',
      },
      {
        question: '我应该同时在YouTube和Google上定位相同的关键词吗？',
        answer: '应该——这被称为视频SEO双重曝光策略。现在许多Google搜索结果页面都包含视频轮播，YouTube视频经常出现在这些轮播中。通过在两个平台上定位相同的关键词，您可以同时从Google的视频轮播和YouTube的原生搜索中获取流量。优先选择Google已经显示视频结果的关键词。教程类、操作指南类和评测类查询最容易触发视频轮播。',
      },
      {
        question: 'YouTube关键词的竞争度分数是如何运作的？',
        answer: '竞争度分数（0-100）反映有多少广告主在竞标该关键词的YouTube广告位。100分表示广告主竞争最激烈；0分表示没有广告主在定位该关键词。虽然这主要影响广告收入而非自然排名，但高竞争度分数表明广告商对您的受众有商业兴趣。创作者可以利用这一点，向高竞争度领域的品牌提出赞助合作提案，因为这些品牌已经在通过广告投放来触达这些受众。',
      },
      {
        question: '一个YouTube视频应该使用多少个关键词？',
        answer: '每个视频聚焦一个主要关键词和5-10个次要关键词。主要关键词决定标题和主要主题。次要关键词出现在描述、标签和章节标题中。过度堆砌关键词会同时损害观众体验和YouTube算法的评分——算法会检测到不自然的重复。此工具的相关关键词列表为您提供了一组完美的语义关联次要关键词，确保元数据既自然流畅又能最大化可发现性。',
      },
      {
        question: '可以使用这个工具进行YouTube Shorts关键词研究吗？',
        answer: '可以。YouTube Shorts出现在YouTube搜索、Shorts信息流中，并越来越多地出现在Google搜索中。同样的关键词数据适用——如果某个关键词在YouTube上有高搜索量，制作针对该关键词的Shorts可以获得额外曝光。Shorts特别适合高搜索量、浅深度的查询，例如"如何[快速操作]"或"[产品]60秒评测"。使用关键词工具找到这些简短主题，用Shorts获取快速成果，同时将长视频留给更深入、更高难度的关键词。',
      },
    ],
  },

  'amazon-keyword-tool': {
    slug: 'amazon-keyword-tool',
    name: '亚马逊关键词工具',
    title: '免费亚马逊关键词工具',
    description: '研究亚马逊产品列表的关键词。查找高搜索量的词汇及其难度和CPC数据，优化您的产品标题和描述。',
    metaDescription: '免费研究亚马逊产品关键词。查看搜索量、难度和CPC，优化产品列表并发现高需求产品利基。',
    iconName: 'ShoppingBag',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: '输入产品关键词',
    inputPlaceholder: '例如：无线耳机',
    buttonText: '查找关键词',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'amazon-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: '国家',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: '美国' },
          { value: '2826', label: '英国' },
          { value: '2276', label: '德国' },
          { value: '2250', label: '法国' },
          { value: '2724', label: '西班牙' },
          { value: '2380', label: '意大利' },
          { value: '2076', label: '巴西' },
          { value: '2124', label: '加拿大' },
          { value: '2036', label: '澳大利亚' },
          { value: '2356', label: '印度' },
          { value: '2392', label: '日本' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: '关键词', sortable: true, type: 'text' },
      { key: 'search_volume', label: '搜索量', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: '竞争度', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: '在投入库存前验证产品创意',
        description: '在没有关键词研究的情况下在亚马逊上推出产品，就像在没有人流量的街道上开店一样。输入"无线耳机"等产品关键词，选择您的国家，立即查看有多少人在搜索该类别的产品。国家下拉菜单让您可以比较10多个市场的需求——这样您可以在投入库存采购、生产订单或FBA发货之前，验证您的产品在美国、英国、德国或其他亚马逊市场是否有搜索需求。',
        image: '/Amazon keyword tool/Check how viable your ideas are on amazon.png',
      },
      {
        title: '分析产品关键词的竞争密度',
        description: '结果表显示了每个产品关键词及其搜索量、KD、CPC和竞争度分数。顶部关键词可能显示450,000的搜索量和100的竞争度分数——这意味着这是一个极度饱和的市场。但深入挖掘会发现竞争较少的子细分市场，新卖家可以在其中竞争。此表对于识别具有可控竞争水平的产品利基的亚马逊FBA卖家和自有品牌至关重要。',
        image: '/Amazon keyword tool/See how competitive a business idea is on Amazon.png',
      },
      {
        title: '一目了然地量化产品类目需求',
        description: '总结仪表板显示产品类目的关键词总数（50个）、平均搜索量和平均难度。亚马逊卖家利用此概览来比较不同类目的规模——如果您正在决定进入哪个市场，此仪表板能在几秒钟内为您提供需求对比。平均难度还能告诉您是否还有很多可触达的长尾产品关键词。',
        image: '/Amazon keyword tool/See how popular and how many people search for a given idea on amazon.png',
      },
      {
        title: '发掘后端关键词和长尾产品词',
        description: '亚马逊的A10算法部分基于标题、要点、描述和后端搜索词中的关键词相关性来排名产品。此视图显示了从头部关键词到长尾变体的完整相关产品关键词及其搜索量列表。这些长尾变体应放置在产品列表的后端搜索词字段、要点和A+内容中，以最大限度地提高您的列表在最广泛的购物者搜索查询中的可见度。',
        image: '/Amazon keyword tool/See other sematically relevant content ideas for your main ideas on amazon.png',
      },
    ],
    faqs: [
      {
        question: '为什么亚马逊关键词与Google关键词不同？',
        answer: '亚马逊和Google服务的用户意图根本不同。Google搜索者可能在研究、比较或只是浏览。亚马逊搜索者几乎总是处于购买模式——他们有购买意图。这意味着亚马逊关键词以产品为中心（品牌名称、产品规格、使用场景），而Google关键词涵盖信息性、导航性和交易性意图。',
      },
      {
        question: '亚马逊产品列表的关键词难度如何运作？',
        answer: '亚马逊关键词难度估算的是将您的产品列表排到亚马逊第一页的竞争程度。影响因素包括定位该关键词的现有卖家数量、他们的评论数量、销售速度、列表优化质量和广告支出。KD为0-10意味着新列表通过良好的优化可以很快出现在第一页。KD超过40通常需要有竞争力的定价、PPC广告活动、大量好评和高度优化的列表。',
      },
      {
        question: '亚马逊产品关键词多少搜索量算好？',
        answer: '对于自有品牌卖家，主要关键词应瞄准至少1,000次月搜索以确保足够的需求。高搜索量头部关键词（100,000+）竞争极其激烈，通常被大品牌主导。中尾关键词（1,000-10,000）通常在需求和可行性之间提供最佳平衡。长尾关键词（1,000以下）非常适合后端搜索词和PPC广告活动，因为特定的购买意图会带来更高的转化率。',
      },
      {
        question: '如何使用亚马逊关键词数据优化产品列表？',
        answer: '遵循亚马逊的关键词放置层级：(1) 将主要关键词放在产品标题中，(2) 将前5个次要关键词放在要点中，(3) 将其余关键词用于产品描述和A+内容，(4) 将所有剩余相关词汇放入后端搜索词（最多250字节）。切勿在这些字段之间重复关键词——亚马逊的算法无论关键词出现多少次都只计算一次。',
      },
      {
        question: '可以使用这个工具研究亚马逊PPC广告活动吗？',
        answer: '当然可以。CPC列显示了广告主为每个关键词的赞助商品广告点击支付的费用。利用此数据来估算您的广告预算，识别通过自然排名可以节省大量广告支出的关键词，并发现可以运行盈利PPC广告活动的低CPC关键词。',
      },
      {
        question: '如何使用这个工具找到有利可图的产品利基？',
        answer: '寻找平均搜索量超过5,000但平均KD低于20的关键词集群。然后查看CPC——更高的CPC表示该利基的卖家有足够的盈利能力来承担广告费用。理想的利基具有高搜索需求、低竞争、健康的利润率，以及第一页产品的评论数少于500条（表明新进入者具有市场可及性）。',
      },
      {
        question: '亚马逊关键词的竞争度分数和KD有什么区别？',
        answer: '竞争度分数反映的是付费广告密度——有多少卖家在该关键词上投放赞助商品广告。KD反映的是自然排名难度——在没有广告的情况下出现在第一页有多困难。一个关键词可能自然KD很低但付费竞争很高，这意味着自然排名容易但获得广告可见度很难。',
      },
      {
        question: '如何在产品上市前使用亚马逊关键词进行产品研究？',
        answer: '使用此工具进行上市前验证：(1) 输入宽泛的产品类目关键词，(2) 查看相关关键词的搜索量以确认需求，(3) 检查KD以评估竞争可行性，(4) 分析长尾关键词的广度——拥有大量长尾变体的利基意味着有差异化产品的空间，(5) 与供应商成本交叉参照以估算盈利能力。',
      },
      {
        question: '我应该在亚马逊列表中定位品牌名关键词吗？',
        answer: '切勿在产品标题或要点中包含竞争对手的品牌名称——亚马逊的使用条款禁止这样做，可能导致列表被抑制。但是，品牌相关关键词会自然出现在工具结果中，对于了解竞争格局很有用。您的策略应该是定位通用等效关键词，并在价格、功能和评论上进行竞争。',
      },
      {
        question: '可以将这个工具用于美国以外的亚马逊市场吗？',
        answer: '可以。国家选择器支持主要的亚马逊市场，包括美国、英国、德国、法国、西班牙、意大利、巴西、加拿大、澳大利亚、印度和日本。每个市场都有不同的关键词搜索量、竞争水平和买家行为。在美国市场过度饱和的产品在德国或日本可能供不应求。',
      },
      {
        question: '亚马逊后端搜索词应该包含多少个关键词？',
        answer: '亚马逊允许最多250字节的后端搜索词（英文大约250个字符）。将此空间用于那些不自然适合放在标题、要点或描述中的关键词。优先使用独特的关键词——不要重复已经在可见列表中出现的词汇。使用空格分隔词汇（不要用逗号或分号——亚马逊将这些视为浪费的字节）。',
      },
      {
        question: '亚马逊A10算法如何使用关键词来排列产品列表？',
        answer: '亚马逊的A10算法将关键词相关性作为多个排名因素之一，与销售速度、转化率、点击率、卖家权威性和自然销售额一起考量。标题中包含关键词的列表比仅在后端搜索词中包含关键词的列表排名更高。在匹配之外，算法会根据性能指标进行排名——这意味着关键词优化帮助您获得索引，但转化率和销售额决定了您的最终排名位置。',
      },
    ],
  },

  'bing-keyword-tool': {
    slug: 'bing-keyword-tool',
    name: '必应关键词工具',
    title: '免费必应关键词工具',
    description: '研究必应搜索引擎的关键词。获取必应专属的搜索量、CPC和竞争数据，为微软搜索引擎优化您的内容。',
    metaDescription: '免费发现必应关键词创意。查看搜索量、CPC和竞争数据，利用必应高转化、低竞争的SERP。',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: '输入关键词',
    inputPlaceholder: '例如：项目管理软件',
    buttonText: '查找关键词',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume'],
    apiEndpoint: 'bing-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: '国家',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: '美国' },
          { value: '2826', label: '英国' },
          { value: '2276', label: '德国' },
          { value: '2250', label: '法国' },
          { value: '2724', label: '西班牙' },
          { value: '2380', label: '意大利' },
          { value: '2076', label: '巴西' },
          { value: '2124', label: '加拿大' },
          { value: '2036', label: '澳大利亚' },
          { value: '2356', label: '印度' },
          { value: '2392', label: '日本' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: '关键词', sortable: true, type: 'text' },
      { key: 'search_volume', label: '搜索量', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: '竞争度', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: '专门针对必应搜索生态系统研究关键词',
        description: '必应为Microsoft Edge（每台Windows PC的默认浏览器）、Cortana、雅虎搜索和DuckDuckGo的自然搜索结果提供搜索服务。这大约占桌面搜索流量的10-15%——一个大多数SEO从业者完全忽视的细分市场。输入任意关键词，选择目标国家，即可获取必应专属的搜索数据。这对B2B营销人员和针对较年长用户群体的品牌尤为有价值，因为必应用户倾向于使用桌面设备、收入较高，并且处于Microsoft产品为默认配置的企业环境中。',
        image: '/Bing keyword tool/Search any keyword on any region on Bing.png',
      },
      {
        title: '评估必应独特的搜索量和关键词密度',
        description: '总结仪表板显示了必应上关键词创意的总数及其平均搜索量。一个种子关键词如果生成了超过1,000个相关词，意味着必应平台上存在一个深层且语义丰富的主题集群。这个密度指标可以帮助您判断在您的利基市场中是否值得投入必应优化。对于B2B软件关键词、企业工具查询和专业服务，必应往往能提供数量可观的高意图搜索者，且转化成本更低。',
        image: '/Bing keyword tool/See a keywords volume and semantic density on Bing.png',
      },
      {
        title: '比较必应上的自然和付费竞争力',
        description: '结果表专门显示了必应上每个关键词的搜索量、CPC和竞争度。必应广告（Microsoft Advertising）的CPC通常比Google Ads低30-50%——对于相同的关键词往往便宜得多。这个表格让PPC经理能够识别出必应提供比Google更低获客成本的关键词。它也让SEO专业人员能够看到哪些关键词在必应上面临更少的自然竞争。',
        image: '/Bing keyword tool/Find how competitives organic and paid keywords are in bing.png',
      },
      {
        title: '发掘必应独有的关键词集群和内容机会',
        description: '此视图显示了完整的关键词变体列表及其在必应上的搜索量。由于必应的用户群体与Google拥有不同的人口特征和行为模式，关键词格局可能存在显著差异。与企业软件、Microsoft集成、专业工具以及特定年龄段产品相关的词汇在必应上的表现往往不成比例地出色。利用此列表发现竞争对手因仅针对Google优化而错失的内容机会。',
        image: '/Bing keyword tool/Check other clusters around your main keyword in bing.png',
      },
    ],
    faqs: [
      {
        question: '当Google主导搜索市场时，为什么我应该关心必应关键词？',
        answer: '必应在全球范围内约占桌面搜索流量的10-15%，这相当于每月数亿次搜索。更重要的是，必应的用户群体倾向于更高收入、年龄较大和面向企业——这些人口特征通常表现出更高的转化率。由于专门针对必应优化的SEO从业者较少，竞争环境明显不那么激烈。',
      },
      {
        question: '必应的搜索算法与Google有何不同？',
        answer: '必应的排名算法与Google有相似之处，但也存在显著差异。必应更注重标题和元描述中的精确匹配关键词，重视来自Facebook和LinkedIn等平台的社交信号，对较老且成熟的域名给予一定偏好，并在搜索结果中更突出地展示多媒体内容。必应在其排名因素方面也往往更加透明。',
      },
      {
        question: '哪些行业从必应关键词优化中受益最多？',
        answer: '从必应中获益尤为显著的行业包括：B2B软件和SaaS（使用Microsoft默认浏览器的企业用户）、金融服务（高收入人群）、医疗保健（年龄较大的人群）、房地产（以桌面端为主的研究行为）、教育和专业服务。任何目标客户可能使用以Edge为默认浏览器的Windows办公电脑的行业，都应该考虑必应优化。',
      },
      {
        question: '对于相同的关键词，必应广告比Google广告便宜吗？',
        answer: '是的，大多数情况下如此。必应广告（Microsoft Advertising）的CPC对于同等关键词通常比Google Ads低30-50%，这是因为平台上的广告主竞争较少。本工具中的CPC数据反映的是必应专属定价，让您可以计算潜在的成本节省。许多广告主将Google Ads广告活动导入必应广告后，实现了显著更低的获客成本。',
      },
      {
        question: '可以为必应生成多少关键词创意？',
        answer: '该工具可以从单个种子关键词在必应上返回超过1,000个关键词创意。这远超许多必应专用研究工具所能提供的数量。关键词创意的数量反映了该主题在必应平台上的语义深度。',
      },
      {
        question: '必应有自己的关键词难度指标吗？',
        answer: '该工具基于必应自然搜索结果的竞争格局提供KD评分，这与Google的难度指标是分开的。由于主动针对必应优化的网站较少，您通常会发现同样的关键词在必应上的排名竞争比Google要容易得多。这创造了一个套利机会。',
      },
      {
        question: '必应处理搜索意图的方式与Google有何不同？',
        answer: '必应的搜索结果倾向于偏好直接回答和精确匹配内容，而Google则越来越多地解读语义含义。这意味着在必应上，在标题标签、H1和URL slug中包含精确的关键词短语会对排名产生更强的影响。必应在搜索结果中还会展示更多的视觉内容，并且在本地搜索方面采用不同的方法。',
      },
      {
        question: '可以用必应关键词数据指导我的Google SEO策略吗？',
        answer: '可以——必应关键词数据能揭示由于Google上竞争更激烈而不太明显的有价值搜索趋势和用户行为。必应的关键词建议有时会浮现出Google关键词工具中不会出现的长尾变体和问题格式。这些词汇往往代表着在Google的SERP中同样未被充分满足的真实用户需求。',
      },
      {
        question: '必应关键词的竞争度分数是什么？',
        answer: '竞争度分数（0-100）反映有多少广告主在Microsoft Advertising（必应广告）中竞标该关键词。分数为0意味着没有广告主在定位该关键词；100意味着广告主竞争非常激烈。这个指标与自然竞争不同，主要与PPC广告活动相关。然而，必应上较高的付费竞争也表明该关键词具有商业价值。',
      },
      {
        question: '如何专门针对必应的搜索算法优化内容？',
        answer: '关键的必应优化策略包括：在标题标签和H1中使用精确匹配关键词，撰写清晰且富含关键词的元描述，在必应网站管理员工具中验证您的网站，通过LinkedIn和Facebook分享建立社交信号，专门向必应提交XML站点地图，使用带有alt文本的多媒体内容，并确保快速的加载速度——必应对慢速网站的惩罚比Google更为严厉。',
      },
      {
        question: '我的流量中有多少百分比可能来自必应？',
        answer: '对于大多数网站来说，必应贡献总自然流量的5-15%，但这因行业和受众而异。B2B和面向企业的网站通常会看到15-25%的流量来自必应，而面向年轻人群的消费类网站可能低于5%。查看您的分析工具中的Bing/organic来源，了解您当前的流量比例。',
      },
      {
        question: '必应关键词研究也覆盖雅虎和DuckDuckGo吗？',
        answer: '部分覆盖。必应的自然搜索索引为雅虎搜索结果提供动力，并显著影响DuckDuckGo的自然搜索结果。这意味着针对必应关键词进行优化可以有效地让您同时在三个搜索引擎上获得可见性。',
      },
    ],
  },

  'website-traffic-checker': {
    slug: 'website-traffic-checker',
    name: '网站流量检查器',
    title: '免费网站流量检查器',
    description: '检查任意网站的预估自然和付费流量。查看关键词总数、流量价值和排名变动数据。',
    metaDescription: '免费检查任意网站的自然和付费流量。查看关键词排名、流量价值和排名趋势，对标竞争对手。',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'url',
    inputLabel: '输入域名',
    inputPlaceholder: '例如：example.com',
    buttonText: '检查流量',
    options: [],
    resultType: 'traffic-overview',
    metricsToShow: ['organic_traffic', 'paid_traffic', 'total_keywords', 'traffic_value'],
    tableColumns: [
      { key: 'metric', label: '指标', sortable: false, type: 'text' },
      { key: 'value', label: '数值', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'website-traffic-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: '即时估算任意网站的搜索流量',
        description: '在进入任何市场之前，您需要了解竞争对手获取了多少搜索流量。在流量检查器中输入任意域名，即可获得其自然和付费搜索表现的即时估算。无论您是在评估竞争对手、研究潜在收购目标、审核广告合作伙伴，还是分析客户的当前表现，该工具提供的流量情报过去需要昂贵的企业级订阅。这是回答"这个网站实际获得了多少搜索流量？"这一问题的最快方式。',
        image: '/website traffic checker/check any websites traffic.png',
      },
      {
        title: '查看关键词排名总数和流量货币价值',
        description: '仪表板显示关键词总数（例如47,854）和流量价值（例如223,458美元）。关键词总数表示网站搜索可见度的广度——有多少不同的搜索词带来了访问者。流量价值估算的是通过Google Ads购买这些自然流量需要花费多少。223,458美元的流量价值意味着该网站的自然排名每月节省了近25万美元的等价广告支出。这是向高管、客户和利益相关者展示SEO投资回报率的最有力指标之一。',
        image: '/website traffic checker/see how many keywords any site ranks for and traffic of any website traffic.png',
      },
      {
        title: '追踪关键词变动趋势：上升、下降、新增、丢失',
        description: '排名趋势表分解了前3名关键词、前10名关键词、新增关键词、排名提升的关键词、排名下降的关键词和丢失的关键词。这是SEO表现的脉搏。如果"提升"超过"下降"，网站的SEO是有效的。如果"丢失"很高，说明出了问题——可能是算法更新、内容衰退或竞争对手超越。代理机构在月度报告中展示这些数据，向客户证明他们的SEO投资是否在产生前进动力。',
        image: '/website traffic checker/see keywords in tops, declining and improved keywords.png',
      },
      {
        title: '对比自然流量与付费流量策略',
        description: '分屏视图并排显示自然流量和付费流量。这一目了然地揭示了网站的搜索策略。自然流量高而付费流量为零的网站在SEO上投入了大量资源。自然和付费流量均衡的网站采取了多元化策略。完全依赖付费流量的网站容易受到预算削减的影响。利用此功能对标您自己的策略并识别竞争优势。',
        image: '/website traffic checker/see organic and paid traffic.png',
      },
    ],
    faqs: [
      {
        question: '网站流量检查器如何在没有访问分析数据的情况下估算流量？',
        answer: '流量检查器使用关键词排名数据和点击率模型的组合来估算自然流量。该工具识别网站排名的关键词、其排名位置和这些关键词的月搜索量，然后应用基于位置的点击率估算（例如，第1名获得约28%的点击，第2名获得约15%）来计算每个关键词的预估月访问量。所有关键词级别的流量估算值之和即为总流量估算值。',
      },
      {
        question: '什么是流量价值？它是如何计算的？',
        answer: '流量价值代表通过Google Ads复制网站自然流量的预估月成本。它通过将每个关键词的预估自然流量乘以其CPC（每次点击成本），然后对所有关键词求和来计算。例如，如果一个网站从CPC为$5的关键词获得1,000次自然访问，则该关键词为流量价值贡献$5,000。这有力地展示了SEO投资的货币价值。',
      },
      {
        question: '自然流量和付费流量有什么区别？',
        answer: '自然流量来自免费的搜索引擎结果——用户点击的是基于相关性和权威性自然出现在Google中的列表。付费流量来自搜索广告（Google Ads）——您为赞助列表的每次点击付费。自然流量是"免费"的，因为您不按点击付费，但需要在内容创建和SEO上进行投资。付费流量提供即时可见性，但一旦暂停广告预算，流量就会立即停止。',
      },
      {
        question: '"新增关键词"、"排名提升"、"排名下降"和"丢失"指标是什么意思？',
        answer: '"新增关键词"是网站在最近一段时间内开始排名的搜索词，表明新内容正在被索引或现有内容正在获得可见性。"排名提升"是网站排名位置上升（更接近第1名）的关键词。"排名下降"是排名位置下降的关键词。"丢失"是网站之前有排名但不再出现在前100名的关键词。健康的网站通常表现为新增+提升显著超过下降+丢失。',
      },
      {
        question: '网站流量估算对小网站和大网站的准确度如何？',
        answer: '流量估算对拥有数千个排名的大型网站通常更准确，因为统计模型在多个关键词上取平均值。对于排名关键词少于100个的小型网站，由于单个关键词的过高或过低估算对总体影响更大，估算可能有更大的误差范围。在竞争基准分析中，相对比较（您的网站 vs. 竞争对手）比绝对数值更可靠。',
      },
      {
        question: '为什么权威度更低的竞争对手却比我的网站流量更高？',
        answer: '权威和流量是相关的但并非等同。竞争对手可以在权威更低的情况下超越您的流量，如果他们：(1) 拥有更好的内容策略，定位更高搜索量的关键词；(2) 更频繁、更持续地生产内容；(3) 定位不需要高权威即可排名的长尾关键词；(4) 具有卓越的页面优化和技术SEO；(5) 尽管整体域名指标较低，但在特定利基领域受益于主题权威。',
      },
      {
        question: '如何使用流量检查数据进行竞争分析？',
        answer: '对您的前5个竞争对手运行流量检查器，比较：自然流量总量、关键词总数、流量价值、自然与付费的比例以及关键词变动趋势。这将揭示谁增长最快、谁依赖付费广告、谁拥有最大的关键词覆盖面，以及每个竞争对手在哪里创造最大价值。然后深入研究具体关键词——竞争对手排名而您没有排名的关键词有哪些？这些就是您的内容差距机会。',
      },
      {
        question: '如果一个网站流量价值高但流量适中，这意味着什么？',
        answer: '这意味着该网站排名的是CPC较高的商业价值关键词，即使搜索量适中。例如，一个从平均CPC $20的关键词获得月10,000次访问的网站，其流量价值为$200,000——高于一个从平均CPC $0.50的关键词获得100,000次访问的网站（流量价值$50,000）。高流量价值相对于流量来说，表明网站瞄准的是能产生收入的漏斗底部高意图关键词。',
      },
      {
        question: '如何追踪流量随时间的趋势？',
        answer: '每月导出流量数据并建立历史仪表板。追踪自然流量总量、关键词总数、前3名关键词数、前10名关键词数和流量价值在6-12个月期间的变化。将这些绘制为趋势线以可视化增长或下降。最有意义的趋势指标是"前10名关键词数"，因为它与流量直接相关——在第一页的关键词越多，获得的流量就越多。',
      },
      {
        question: '可以使用这个工具估算网站的收入吗？',
        answer: '虽然流量检查数据本身不能揭示收入，但您可以创建粗略估算。对于广告支持的网站，将预估流量乘以典型的RPM（根据利基不同，每1,000次页面浏览$5-$30）。对于电商网站，应用行业平均转化率（1-3%）和平均订单价值。对于SaaS网站，使用典型转化率（2-5%转化为免费试用）和已知定价从流量中估算潜在客户。',
      },
      {
        question: '为什么一个网站显示零付费流量？',
        answer: '零付费流量意味着该网站目前没有运行工具数据源能检测到的Google Ads广告活动。这可能意味着网站完全依赖自然SEO（内容驱动型业务的常见策略），在Google搜索之外的其他平台（Facebook、LinkedIn、展示广告网络）投放广告，或最近暂停了广告活动。零付费流量本身无所谓好坏——它只是表明该网站的搜索可见性策略完全基于自然搜索。',
      },
      {
        question: '流量检查器如何处理子域名和子目录？',
        answer: '该工具检查您输入的整个域名的流量。如果网站使用子域名（blog.example.com、shop.example.com），这些通常包含在根域名的总流量估算中。子目录（example.com/blog/、example.com/shop/）始终被包含在内，因为它们属于同一域名。如果您需要特定子域名或URL路径的流量估算，一些工具提供URL级别的分析，可以按页面或版块分解流量。',
      },
    ],
  },

  'broken-link-checker': {
    slug: 'broken-link-checker',
    name: '死链检查器',
    title: '免费死链与页面健康检查器',
    description: '检查任意网页的死链、SEO问题和页面健康问题。获取带有可操作建议的详细审计报告。',
    metaDescription: '免费检查任意网页的死链和SEO问题。获取页面健康评分、内部/外部链接数量和修复建议。',
    iconName: 'Link2',
    category: 'link-building',
    inputType: 'url',
    inputLabel: '输入URL',
    inputPlaceholder: '例如：https://example.com',
    buttonText: '检查页面',
    options: [],
    resultType: 'broken-links',
    metricsToShow: ['page_score', 'issues_found', 'internal_links', 'external_links'],
    tableColumns: [
      { key: 'issue', label: '问题', sortable: false, type: 'text' },
      { key: 'severity', label: '严重程度', sortable: true, type: 'badge' },
      { key: 'description', label: '描述', sortable: false, type: 'text' },
    ],
    apiEndpoint: 'broken-link-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: '审计任意页面的死链和技术SEO健康',
        description: '死链会悄无声息地破坏用户体验和SEO表现。在检查器中输入任意URL，点击"检查页面"，即可获得该页面链接健康和技术SEO状态的即时审计。这用自动化扫描替代了逐链接手动检查，能够捕获404错误、重定向链和失效的出站链接。网站所有者、SEO专业人员和网站管理员在发布新页面前、站点迁移后以及作为每月常规健康检查的一部分使用此功能。',
        image: '/Broken link checker/check your website broken links and technical seo health.png',
      },
      {
        title: '监控您的技术SEO评分和关键问题',
        description: '除了死链之外，该工具还返回页面评分（0-100）和发现的问题总数。页面评分为100且问题为0表示页面技术健康。任何低于80的分数都表明存在需要关注的问题。此评分系统为您网站上的每个页面提供了快速的通过/未通过指标。',
        image: '/Broken link checker/See your websites technical seo score + number of critical seo issues.png',
      },
      {
        title: '分析内部和外部链接分布',
        description: '该工具计数并分类内部链接（指向同一域名其他页面的链接）和外部链接（指向其他网站的链接）。这些数据至关重要，原因有二：(1) 内部链接分布影响搜索引擎如何抓取和索引您的网站，(2) 外部链接质量影响您页面的可信度。',
        image: '/Broken link checker/See internal links from a page, external links.png',
      },
      {
        title: '识别和优先处理特定技术问题',
        description: '问题表列出了每个发现的问题、其严重程度（信息、警告、严重）和描述。"渲染阻塞资源"和"低内容比率"等问题直接影响Core Web Vitals和内容质量信号。每个问题都带有可操作的上下文——您确切地知道问题所在，并可以根据严重程度进行优先排序。',
        image: '/Broken link checker/see details about techincal issues from your page.png',
      },
    ],
    faqs: [
      {
        question: '什么是死链？它如何影响SEO？',
        answer: '死链（也称为无效链接或404错误）是指向不再存在或返回错误的页面的超链接。死链从三个方面影响SEO：(1) 浪费抓取预算——搜索引擎机器人将时间花在死胡同上，而不是索引有用的页面，(2) 中断链接权重的传递——如果外部网站链接到您网站上返回404的页面，您将失去这些反向链接的排名价值，(3) 损害用户体验——遇到死链的访问者会对您的网站失去信任，导致跳出率上升。',
      },
      {
        question: '什么是页面评分？它是如何计算的？',
        answer: '页面评分是一个0-100的指标，评估网页的整体技术健康状况。它考虑死链（内部和外部）、页面加载性能、meta标签完整性、内容与HTML比率、渲染阻塞资源、移动友好性指标及其他技术SEO信号。90-100分表示优秀的健康状况，70-89分表示良好但有改进空间，50-69分需要关注，低于50分则表明存在可能严重影响搜索表现的技术问题。',
      },
      {
        question: 'SEO中内部链接和外部链接有什么区别？',
        answer: '内部链接连接同一域名内的页面（例如，您的首页链接到博客）。它们帮助搜索引擎发现和抓取您的内容、在整个网站分发链接权重（排名能力）并建立内容层级。外部链接（也称为出站链接）从您的网站指向其他域名。当链接到权威来源时，它们向搜索引擎传递内容质量和主题相关性的信号。两种类型的链接对SEO都至关重要——健康的页面通常拥有强大的内部链接结构和几个指向可信来源的相关外部链接。',
      },
      {
        question: '应该多久检查一次网站的死链？',
        answer: '每月检查最重要的页面（首页、顶级着陆页、流量最高的博客文章）。每季度进行一次全站死链审计。此外，在站点迁移、CMS更新、URL结构变更或内容删除后务必进行检查——这些是产生死链最常见的事件。对于拥有数千页面的大型网站，建议安排每周自动爬取，以便在新死链累积之前及时发现。',
      },
      {
        question: '什么是渲染阻塞资源？为什么它们重要？',
        answer: '渲染阻塞资源是阻止浏览器在完全加载之前显示页面的CSS样式表和JavaScript文件。它们会延迟用户看到实际内容的时刻——即首次有意义的绘制。这直接影响Google作为排名因素的Core Web Vitals指标，如最大内容绘制（LCP）和首次内容绘制（FCP）。修复方法包括延迟加载非关键JavaScript、内联关键CSS以及对非必要脚本使用异步加载。',
      },
      {
        question: '问题报告中的"低内容比率"是什么意思？',
        answer: '低内容比率（也称为低文本与HTML比率）意味着页面相对于其HTML代码而言，可读文本内容很少。搜索引擎可能将其视为对用户价值有限的单薄内容页面。典型的健康比率为文本对HTML超过25%。大量使用JavaScript框架的页面、大型导航菜单或过多广告都可能触发此问题。修复方法是确保每个页面都有实质性的、独特的、信息丰富的文本内容，以满足用户的搜索意图。',
      },
      {
        question: '我网站上的死链会影响本身没有死链的页面吗？',
        answer: '会的，通过一个叫做抓取预算浪费的概念。搜索引擎为每个网站分配有限的抓取预算（每次访问抓取的页面数量）。当爬虫遇到死链时，它们会在死胡同上消耗本可用于索引正常页面的抓取预算。在大型网站（10,000+页面）上，过多的死链可能导致重要的新内容被更慢地发现和索引，从而间接损害完全健康页面的排名。',
      },
      {
        question: '应该先修复内部死链还是外部死链？',
        answer: '先修复内部死链。内部死链直接影响您网站的可抓取性、用户导航和内部链接权重分配——这些都是您完全可以控制的。外部死链（您页面上指向已下线的其他网站的链接）也很重要，但其影响较小。对于外部死链，可以删除该链接、替换为指向更新来源的链接，或使用Wayback Machine查找内容的存档版本。',
      },
      {
        question: '什么是链接权重？死链如何影响它？',
        answer: '链接权重（以前称为"链接汁液"）是通过超链接从一个页面传递到另一个页面的排名价值。当权威网站链接到您的页面时，会传递有助于提升您页面排名的链接权重。如果该链接指向您网站上返回404错误的页面，链接权重就被浪费了——流入了死胡同。通过找到失效的入站链接并设置指向相关有效页面的301重定向，您可以回收这些丢失的链接权重并改善排名。',
      },
      {
        question: '如何利用死链数据进行外链建设？',
        answer: '死链建设是一种经过验证的链接获取策略。首先，使用死链检查器在竞争对手或行业网站上找到失效页面。然后，在您自己的网站上创建覆盖相同主题的内容。最后，联系那些链接到失效页面的网站，建议他们将死链替换为指向您的有效且相关内容的链接。这一策略之所以有效，是因为您在获得反向链接的同时帮助网站管理员解决了实际问题。',
      },
      {
        question: '哪些HTTP状态码表示死链？',
        answer: '最常见的死链状态码是：404（未找到——页面不存在）、410（已删除——页面被有意移除）、500（内部服务器错误——服务器故障）、502（网关错误）和503（服务不可用）。此外，301（永久重定向）和302（临时重定向）本身不算"死链"，但重定向链（多次连续重定向）会浪费链接权重并减慢页面加载速度。本工具会检测所有这些状态码并按严重程度进行分类。',
      },
      {
        question: '死链会导致Google取消索引我的页面吗？',
        answer: '少量死链不会导致取消索引。但是，如果您网站的URL中有很大比例返回404错误，或者从导航链接的关键页面持续失效，Google可能会降低您域名的抓取速率并将您的网站标记为维护不善。在死链导致孤立页面（没有任何有效链接指向的页面）的极端情况下，这些特定页面可能会从索引中删除。定期的死链审计可以防止这种衰退。',
      },
    ],
  },

  'ai-visibility-checker': {
    slug: 'ai-visibility-checker',
    name: 'AI可见性检查器',
    title: '免费AI可见性检查器',
    description: '了解Google AI概述如何影响您的网站。查看触发AI概述的关键词百分比、多少流量面临风险，并获取AI可见性评分。',
    metaDescription: '免费检查Google AI概述对您网站的影响。查看AI概述曝光率、受影响的关键词、面临风险的流量和AI可见性评分。',
    iconName: 'Sparkles',
    category: 'other',
    inputType: 'url',
    inputLabel: '输入域名',
    inputPlaceholder: '例如：example.com',
    buttonText: '检查AI可见性',
    options: [],
    resultType: 'ai-visibility',
    metricsToShow: ['ai_exposure', 'ai_keywords', 'traffic_at_risk'],
    tableColumns: [
      { key: 'metric', label: '指标', sortable: false, type: 'text' },
      { key: 'value', label: '数值', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'ai-visibility-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: '检查任意网站在AI驱动搜索中的可见性',
        description: 'AI概述、ChatGPT、Perplexity和Gemini正在从根本上改变用户查找信息的方式——而大多数网站完全不知道自己在这一新格局中的表现。输入任意域名，点击"检查AI可见性"，即可获得该网站在AI搜索结果中表现的全面审计。这是AI引擎优化（AEO）的第一步，AEO是与传统SEO并行的新兴学科。',
        image: '/ai visibility checker/check any websites visibility in llms.png',
      },
      {
        title: '分析AI概述的关键词分布和定位',
        description: '详细指标显示已排名关键词总数、带有AI概述的关键词、AI概述曝光率、按位置划分的关键词分布（第1名AI关键词、第2-3名、第4-10名）、来自AI关键词的自然流量和自然流量总量。这种详细的分解精确显示了您的关键词组合中有多少受到Google AI概述的影响。',
        image: '/ai visibility checker/see keyword distribution for ai overview.png',
      },
      {
        title: '量化AI概述带来的流量风险',
        description: '双指标展示了带有AI概述的关键词和面临风险的流量。"面临风险的流量"估算的是随着AI概述吸收原本流向传统自然结果的点击，可能减少的自然流量。这是理解AI搜索对您业务影响的最重要指标。',
        image: '/ai visibility checker/see number of keywords in ai overview and which percentage of your traffic is at risk with google ai overviews.png',
      },
      {
        title: '将域名强度与AI概述曝光进行基准比较',
        description: '仪表板将您的域名评分（例如97"非常强"）与AI概述曝光百分比结合显示。这种组合至关重要：强大的域名并不能保护您免受AI概述的影响。即使是权威最高的网站也面临AI生成答案带来的大规模点击率侵蚀。域名评分显示的是您的传统SEO实力，而曝光指标显示的是有多少实力受到AI的威胁。',
        image: '/ai visibility checker/see your domain score in ai overview and exposure level to ai overview.png',
      },
    ],
    faqs: [
      {
        question: '什么是AI可见性？为什么它对2025-2026年的SEO很重要？',
        answer: 'AI可见性是指您的网站、品牌或内容在AI驱动的搜索体验中的显著程度——包括Google AI概述、ChatGPT回答、Perplexity答案、Gemini结果和Microsoft Copilot。这很重要，因为这些AI系统正在从根本上改变搜索行为。Google AI概述现在出现在超过70%的信息类查询中，通常无需用户点击任何网站即可直接回答问题。这意味着仅靠传统SEO排名已不能保证获得流量。',
      },
      {
        question: '什么是Google AI概述？它们如何影响自然流量？',
        answer: 'Google AI概述（前称SGE——Search Generative Experience）是AI生成的答案摘要，出现在Google搜索结果顶部的许多查询中。它们从多个来源综合信息并提供直接答案，减少了用户点击单个网站的需求。研究表明，AI概述可以将自然结果的点击率降低18-64%，具体取决于查询类型。信息类查询受影响最大，而导航类和交易类查询受影响较小。',
      },
      {
        question: '"面临风险的流量"是什么意思？如何计算？',
        answer: '"面临风险的流量"估算的是随着AI概述吸收点击可能减少的自然流量。它通过识别以下所有关键词来计算：(a) 您的网站当前有排名并获得流量，且 (b) Google为该查询显示AI概述。这些关键词的流量构成面临风险的数量，因为AI概述可能会降低此前将访客引导至您页面的点击率。',
      },
      {
        question: '什么是AI概述曝光？高百分比意味着什么？',
        answer: 'AI概述曝光是触发Google AI概述的已排名关键词的百分比。76.8%的曝光意味着您排名的超过四分之三的关键词，Google都在自然结果上方显示AI生成的答案。高曝光百分比意味着流量流失的重大风险，但同时也是重大机会——如果您能优化内容使其在AI概述中被引用为来源，实际上可以提升可见性。',
      },
      {
        question: 'AI可见性与传统SEO可见性有何不同？',
        answer: '传统SEO可见性衡量的是您在标准自然搜索结果（蓝色链接）中的存在感。AI可见性衡量的是您在AI生成答案中的存在感。两者可能出现偏差：一个自然搜索排名第1的网站可能不会在同一关键词的AI概述中被引用，而排名第5的网站可能成为AI答案的主要引用来源。AI可见性取决于不同的因素——内容全面性、结构化数据、实体识别、事实准确性，以及AI系统能否轻松提取和引用您的信息。',
      },
      {
        question: '什么是AI引擎优化（AEO）？如何开始？',
        answer: 'AEO是优化您的内容以在AI生成的搜索答案中被引用、提及和展示的实践。关键AEO策略包括：(1) 提供AI可以提取的清晰、简洁、基于事实的答案，(2) 使用结构化数据和Schema标记帮助AI理解您的内容，(3) 通过全面的内容集群建立主题权威，(4) 包含AI系统会引用为来源的原始数据、统计和研究，(5) 保持高E-E-A-T（经验、专业知识、权威性、可信度）信号。',
      },
      {
        question: '域名强度如何影响AI概述的引用？',
        answer: 'AI系统（包括Google的AI概述）倾向于更频繁地引用权威的、知名的来源。较高的域名评分与AI答案中较高的引用率相关。然而，域名强度本身是不够的——AI还会评估内容的具体性、事实准确性、时效性，以及内容对特定查询的回答程度。在特定主题上拥有深厚专业知识的细分网站，如果其内容更具相关性和全面性，可能会比高权威的综合性网站获得更多引用。',
      },
      {
        question: '哪些类型的内容最容易受到AI概述流量损失的影响？',
        answer: '回答简单事实性问题的信息类内容最为脆弱——定义、快速操作指南、统计数据、比较和"什么是"类查询。这些恰恰是AI概述能够无需点击即可提供完整答案的查询类型。更具韧性的内容类型包括：深度分析与观点、互动工具和计算器、原创研究与专有数据、基于个人体验的产品比较，以及需要视觉元素的内容。',
      },
      {
        question: '我能看到哪些AI平台引用了我的内容吗？',
        answer: '该工具专门衡量Google上的AI概述曝光。对于更广泛的AI平台监控（ChatGPT、Perplexity、Gemini、Copilot），专门的品牌监控工具可以追踪您的品牌和内容在各AI平台上的出现位置和方式。本工具中的指标——特别是关键词级别的AI概述数据——为您提供Google特定的全景，而Google仍然主导着搜索流量，因此是影响最大的渠道。',
      },
      {
        question: '如果我的AI概述曝光超过50%，应该怎么做？',
        answer: '高曝光需要多管齐下的应对策略：(1) 审计哪些具体关键词触发了AI概述以及您的内容是否被引用为来源，(2) 优化流量最高的页面，加入AI可以引用的清晰、可提取的答案格式，(3) 多元化Google自然搜索以外的流量来源（建立邮件列表、社交媒体受众、通过品牌建设获取直接流量），(4) 创建AI概述无法复制的内容格式（互动工具、视频内容、社区论坛），(5) 由于AI概述的推出仍在持续演变，需每月进行监控。',
      },
      {
        question: 'AI可见性背景下的域名评分与传统权威有何关系？',
        answer: 'AI概述数据旁显示的域名评分是基于外链配置强度的同一权威指标。在AI可见性背景下，它提供了关键视角：强域名评分意味着您的传统SEO基础扎实，但AI曝光百分比揭示了这一基础有多少正在被颠覆。例如，域名评分90且AI曝光80%的网站拥有很高的传统权威，但面临着来自AI驱动的重大威胁。',
      },
      {
        question: 'AI可见性对B2B和企业网站有意义吗？',
        answer: '绝对有。B2B买家越来越多地使用AI工具进行供应商调研、技术评估和购买决策支持。Google AI概述在"最佳小型企业CRM"或"如何实施SSO"等B2B信息类查询中尤其普遍。出现在AI概述中作为引用来源的企业品牌会获得显著的可信度——被AI系统点名被视为一种背书。相反，在AI回答中缺席的B2B品牌面临着在新一代决策者面前变得隐形的风险。',
      },
    ],
  },
};

export function getSeoToolBySlugZh(slug: string): SeoToolConfig | undefined {
  return seoToolsZh[slug];
}

export function getAllSeoToolsZh(): SeoToolConfig[] {
  return Object.values(seoToolsZh);
}

export function getAllSeoToolSlugsZh(): string[] {
  return Object.keys(seoToolsZh);
}
