// Turkish (tr) Tool Configurations
// Auto-generated translations from English source

import { ToolConfig } from '../tools-config';

// Helper functions
export function getToolBySlugTr(slug: string): ToolConfig | undefined {
  return toolsTr[slug];
}

export function getAllToolsTr(): ToolConfig[] {
  return Object.values(toolsTr);
}

// Turkish uses English slugs, so no mapping needed - just return the slug as-is
export function getEnglishSlugTr(turkishSlug: string): string {
  return turkishSlug;
}

export const toolsTr: Record<string, ToolConfig> = {
  // ==================== TURKISH TRANSLATION - BATCH 1 (Tools 1-10) ====================
  'paragraph-generator': {
    slug: 'paragraph-generator',
    name: 'Paragraf Oluşturucu',
    title: 'Ücretsiz AI Paragraf Oluşturucu',
    description: 'Saniyeler içinde iyi yapılandırılmış paragraflar oluşturun. Blog yazıları, makaleler, e-postalar ve daha fazlası için mükemmel. Kayıt gerektirmez.',
    metaDescription: 'Ücretsiz AI paragraf oluşturucumuzla saniyeler içinde iyi yapılandırılmış paragraflar oluşturun. Blog yazıları, makaleler, e-postalar ve daha fazlası için mükemmel. Kayıt gerektirmez.',
    inputLabel: 'Konu...',
    inputPlaceholder: 'örn. Brokoli yemenin önemi',
    buttonText: 'Paragraf Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'format',
        label: 'Format',
        choices: ['Paragraf', 'Madde işareti'],
        default: 'Paragraf',
        type: 'radio',
      },
      {
        name: 'tone',
        label: 'Ton',
        choices: ['Profesyonel', 'Resmi', 'Günlük', 'Samimi', 'Otoriter', 'Şakacı', 'Esprili'],
        default: 'Profesyonel',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content writer who creates well-structured, engaging paragraphs on any topic. Your writing is clear, informative, and tailored to the specified tone and format.
## GUIDELINES
- Create coherent, well-organized paragraphs
- Use appropriate transitions between ideas
- Match the requested tone and format
- Provide valuable, accurate information
- Keep content engaging and readable
Format: {{format}}
Tone: {{tone}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Blog yazarlığı ve içerik oluşturma', description: 'Blog yazarları ve içerik oluşturucular, içerik takvimlerini doldurmak için paragraflar hızlıca üretmek amacıyla Paragraf Oluşturucuyu kullanır. İstenilen konu ve tonu girerek araç, çeşitli platformlarda yayınlanmaya hazır tutarlı paragraflar üretir ve içerik üretim sürecini önemli ölçüde hızlandırır.' },
      { title: 'Akademik yazma desteği', description: 'Öğrenciler ve akademik yazarlar, karmaşık fikirleri açıklarken Paragraf Oluşturucudan yararlanır. Araç, iyi yapılandırılmış açıklama paragrafları oluşturmaya yardımcı olur, uygun akademik dil ve uyumlu mantıksal akış sağlayarak makalelerin ve ödevlerin daha etkili olmasına katkıda bulunur.' },
      { title: 'Profesyonel iletişim', description: 'İş profesyonelleri, profesyonel yazışmaları kolaylaştırmak için Paragraf Oluşturucuyu kullanır. Kilit noktaları veya temaları girerek araç, iş e-postaları, raporlar ve teklifler için cilalı paragraflar üretir, düşünceleri net ve profesyonelce ifade etmek için harcanan zamandan tasarruf sağlar.' },
    ],
    faqs: [
      { question: 'Paragraf oluşturucu nedir?', answer: 'Paragraf oluşturucu, verdiğiniz konuya veya anahtar kelimelere dayalı olarak yapılandırılmış, tutarlı paragraflar oluşturmak için yapay zeka kullanan bir araçtır. Profesyonel, resmi veya günlük gibi çeşitli tonlarda içerik oluşturabilir ve geleneksel paragraflar veya madde işaretli listeler olarak biçimlendirilebilir.' },
      { question: 'AI paragraf yazıcı nasıl çalışır?', answer: 'AI paragraf yazıcı, konunuzu ve tercihlerinizi (ton, format) analiz eder, ardından ilgili, iyi yapılandırılmış içerik oluşturur. Yapay zeka, cümlelerin mantıksal olarak akmasını, paragrafların düzgün geçişler içermesini ve içeriğin istediğiniz stile uymasını sağlar.' },
      { question: 'Paragraf oluşturucu ücretsiz mi?', answer: 'Evet, paragraf oluşturucumuz kayıt gerektirmeden tamamen ücretsiz kullanılabilir. Herhangi bir konuda sınırsız paragraf oluşturabilirsiniz.' },
      { question: 'Paragraf oluşturucu ne kadar metin oluşturabilir?', answer: 'Araç, iyi yapılandırılmış, odaklı içerik üretmek için optimize edilmiştir, genellikle istek başına bir ila birkaç paragraf oluşturur. Daha uzun içerikler için birden fazla istek yapabilir veya çeşitli yönleri keşfetmek için farklı konu varyasyonları kullanabilirsiniz.' },
      { question: 'Hangi tonlar mevcut?', answer: 'Mevcut tonlar şunlardır: Profesyonel (iş, resmi belgeler için), Resmi (akademik, resmi yazışmalar için), Günlük (bloglar, gayri resmi iletişim için), Samimi (kişisel içerik için), Otoriter (uzman içeriği için), Şakacı (eğlenceli içerik için) ve Esprili (komedi, hafif içerik için).' },
      { question: 'Oluşturulan paragrafları düzenleyebilir miyim?', answer: 'Kesinlikle! Oluşturulan içerik, gerektiği gibi düzenleyebileceğiniz, geliştirebileceğiniz veya genişletebileceğiniz bir başlangıç noktası olarak hizmet eder. Çoğu kullanıcı AI çıktısını bir taslak olarak kullanır ve kendi seslerini ve ek ayrıntıları eklemek için iyileştirir.' },
      { question: 'Oluşturulan içerik intihal açısından güvenli mi?', answer: 'AI, kopya yapıştır yerine orijinal içerik üretir. Ancak, yüksek riskli akademik veya profesyonel kullanım için içeriğinizi bir intihal denetleyicisi ile doğrulamanız iyi bir uygulamadır. Çoğu kullanıcı oluşturulan içeriğin benzersiz olduğunu görse de, düzenleme ve kişiselleştirme orijinalliği daha da artırır.' },
      { question: 'Paragraf ve madde işareti formatı arasındaki fark nedir?', answer: 'Paragraf formatı, geçiş cümleleriyle akan, bağlı düzyazı oluşturur ve anlatı içeriği ve resmi yazışmalar için idealdir. Madde işareti formatı, bilgileri ayrı noktalar halinde düzenleyerek taranabilirliği ve netlığı artırır ve listelere, özelliklere veya talimat adımlarına uygun hale gelir.' },
      { question: 'Paragraf oluşturucu hangi dilleri destekler?', answer: 'Araç, geçerli konuşmada yapılandırıldığı şekilde belirtilen hedef dilde içerik üretir. Sonuçlar, dilin karmaşıklığına ve yazım stillerine bağlı olarak değişebilir.' },
      { question: 'Bu paragraf oluşturucuyu ticari amaçlarla kullanabilir miyim?', answer: 'Evet, oluşturulan içerik web siteleri, pazarlama materyalleri, sosyal medya ve diğer ticari projeler dahil olmak üzere ticari amaçlarla kullanılabilir. Ancak, yayınlamadan önce içeriğin doğruluğunu gözden geçirmenizi ve markanıza özgü ayrıntılarla kişiselleştirmenizi öneririz.' },
    ],
  },
  'paragraph-rewriter': {
    slug: 'paragraph-rewriter',
    name: 'Paragraf Yeniden Yazıcı',
    title: 'Ücretsiz AI Paragraf Yeniden Yazıcı',
    description: 'Paragraflarınızı anında dönüştürün. AI paragraf yeniden yazıcımız orijinal anlamı korurken netlik, ton ve okunabilirliği geliştirir.',
    metaDescription: 'Ücretsiz AI paragraf yeniden yazıcımızla paragraflarınızı anında dönüştürün. Orijinal anlamı korurken netlik, ton ve okunabilirliği geliştirir.',
    inputLabel: 'Paragrafınız...',
    inputPlaceholder: 'Yeniden yazmak istediğiniz paragrafı girin...',
    buttonText: 'Paragrafı Yeniden Yaz',
    maxLength: 4096,
    options: [
      {
        name: 'tone',
        label: 'Ton',
        choices: ['Profesyonel', 'Günlük', 'Akademik', 'Yaratıcı', 'Kısa'],
        default: 'Profesyonel',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert editor who rewrites paragraphs to improve clarity, flow, and impact while preserving the original meaning. Adapt your rewriting style to match the requested tone.
## GUIDELINES
- Preserve the core meaning and key information
- Improve sentence structure and flow
- Enhance clarity and readability
- Match the specified tone
- Remove redundancy and wordiness
Tone: {{tone}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'İçerik geliştirme', description: 'İçerik oluşturucular, mevcut metni geliştirmek için Paragraf Yeniden Yazıcıyı kullanır. Taslak paragrafları girerek araç, daha iyi akış, netlik ve etki ile yeniden yazılmış versiyonlar üretir. Bu, yazarların içeriklerini daha profesyonel ve ilgi çekici hale getirmelerine yardımcı olur.' },
      { title: 'Ton dönüşümü', description: 'Profesyoneller, içeriği farklı bağlamlara uyarlamak için Paragraf Yeniden Yazıcıyı kullanır. Günlük yazıyı resmi iş diline veya teknik metni okuyucu dostu içeriğe dönüştürerek araç, orijinal mesajı korurken aynı içeriğin birden fazla amaç için kullanılmasına olanak tanır.' },
      { title: 'Yazma becerileri geliştirme', description: 'Öğrenciler ve gelişmekte olan yazarlar, Paragraf Yeniden Yazıcıyı bir öğrenme aracı olarak kullanır. Kendi paragraflarını göndererek ve AI\'ın onları nasıl yeniden yapılandırdığını görerek, daha iyi cümle yapısı, kelime seçimi ve yazma stilleri hakkında bilgi edinirler.' },
    ],
    faqs: [
      { question: 'Paragraf yeniden yazıcı ne yapar?', answer: 'Paragraf yeniden yazıcı, girdiğiniz metni alır ve orijinal anlamı korurken farklı kelime ve yapı kullanarak yeniden ifade eder. Netlik, akış ve okunabilirliği iyileştirir ve içeriği belirttiğiniz tona uyarlar.' },
      { question: 'Yeniden yazma orijinal anlamı değiştirir mi?', answer: 'Hayır, araç orijinal mesajınızı korumak üzere tasarlanmıştır ve bunu nasıl ifade ettiğinizi geliştirir. Temel fikirler ve bilgiler korunur, ancak siz (veya ihtiyaçlarınız) gerektiriyorsa ton ve stil değişebilir.' },
      { question: 'Hangi ton seçenekleri mevcut?', answer: 'Mevcut tonlar şunlardır: Profesyonel (iş iletişimi için), Günlük (samimi, ulaşılabilir içerik için), Akademik (bilimsel yazılar için), Yaratıcı (ilgi çekici, anlatı içeriği için) ve Kısa (kısa, öz versiyonlar için).' },
      { question: 'Bu aracı içeriği kısaltmak için kullanabilir miyim?', answer: 'Evet, özlü versiyonlar almak için "Kısa" tonunu seçin. Araç, paragrafınızı gereksiz kelimeleri ve fazlalıkları kaldırarak yoğunlaştıracak, temel bilgileri korurken bunu yapacaktır.' },
      { question: 'Paragraf yeniden yazıcı, paragraf oluşturucudan nasıl farklıdır?', answer: 'Paragraf oluşturucu bir konuya dayalı yeni içerik oluşturur. Paragraf yeniden yazıcı ise sağladığınız mevcut metni dönüştürür. İkisi birbirini tamamlar: içerik oluşturmak için birini, ardından iyileştirmek ve geliştirmek için diğerini kullanabilirsiniz.' },
      { question: 'Tek seferde ne kadar metin yeniden yazabilirim?', answer: 'Araç, tek bir paragraf veya kısa metin bölümü için optimize edilmiştir. Daha iyi sonuçlar için paragraflarınızı ayrı ayrı gönderin; bu, her biri için daha odaklı yeniden yazma sağlar.' },
      { question: 'Yeniden yazılmış içerik benzersiz olacak mı?', answer: 'Evet, yeniden yazıcı farklı kelime, yapı ve ifade kullanarak orijinal içerik üretir. Bu, aynı fikirler için yeni bir ifade oluşturduğundan benzersiz çıktılar sağlar.' },
      { question: 'Bu, dil öğrenenler için faydalı mı?', answer: 'Kesinlikle. Dil öğrenenler, cümlelerin nasıl farklı şekillerde yapılandırılabileceğini görmek, yeni kelime öğrenmek ve daha doğal ifade kalıplarını anlamak için Paragraf Yeniden Yazıcıyı kullanabilir.' },
      { question: 'Düzenleyebileceğim birden fazla versiyon alabilir miyim?', answer: 'Her istek bir yeniden yazılmış versiyon üretir. Farklı versiyonlar için isteği farklı ton ayarlarıyla yeniden gönderebilir veya aynı girdiyi çeşitli yaklaşımlar için birden fazla kez çalıştırabilirsiniz.' },
      { question: 'Yeniden yazma sırasında teknik terimler korunuyor mu?', answer: 'Evet, araç anlamı korumak için önemli teknik terimleri ve jargonu tanır ve korur. Daha açık bir ton istediğinizi belirtirseniz, teknik terimlerin açıklanması veya basitleştirilmesi de sağlanabilir.' },
    ],
  },
  'meta-description-generator': {
    slug: 'meta-description-generator',
    name: 'Meta Açıklama Oluşturucu',
    title: 'Ücretsiz AI Meta Açıklama Oluşturucu',
    description: 'Tıklamaları artıran, SEO için optimize edilmiş meta açıklamalar oluşturun. AI meta açıklama oluşturucumuz arama sonuçlarında öne çıkan ilgi çekici özetler yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla tıklamaları artıran, SEO için optimize edilmiş meta açıklamalar oluşturun. Arama sonuçlarında öne çıkan ilgi çekici özetler yaratır.',
    inputLabel: 'Sayfa içeriği veya konu...',
    inputPlaceholder: 'örn. Başlangıç seviyesinden ileri seviyeye kadar yoga eğitimleri sunan, ilk ders ücretsiz olan bir yoga stüdyosu',
    buttonText: 'Meta Açıklama Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'length',
        label: 'Uzunluk',
        choices: ['Kısa (120 karakter)', 'Standart (155 karakter)', 'Uzun (320 karakter)'],
        default: 'Standart (155 karakter)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an SEO expert who creates compelling meta descriptions that improve click-through rates from search results. Your descriptions are concise, include relevant keywords naturally, and entice users to click.
## GUIDELINES
- Stay within the specified character limit
- Include a clear value proposition
- Use action-oriented language
- Incorporate relevant keywords naturally
- Create urgency or curiosity when appropriate
Length: {{length}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Web sitesi SEO optimizasyonu', description: 'Web sitesi sahipleri ve SEO uzmanları, sitelerindeki sayfa meta açıklamalarını optimize etmek için Meta Açıklama Oluşturucuyu kullanır. İlgili sayfa içeriğini ve anahtar kelimeleri girerek araç, arama sonuçlarında tıklama oranlarını artıran ikna edici açıklamalar üretir.' },
      { title: 'İçerik pazarlama', description: 'İçerik pazarlamacıları, blog yazıları ve makaleler için meta açıklamalar oluşturmak amacıyla aracı kullanır. Bu, içeriğin arama motorlarında düzgün bir şekilde özetlenmesini, potansiyel okuyucuları çekmesini ve organik trafiği artırmasını sağlar.' },
      { title: 'E-ticaret ürün sayfaları', description: 'Çevrimiçi mağazalar, ürün sayfaları için meta açıklamalar oluşturmak amacıyla Meta Açıklama Oluşturucuyu kullanır. Araç, ürün özelliklerini ve faydalarını vurgulayan açıklamalar yaratır ve arama sonuçlarından alışveriş yapanları çeker.' },
    ],
    faqs: [
      { question: 'Meta açıklama nedir?', answer: 'Meta açıklama, arama motoru sonuç sayfalarında başlığın altında görünen, bir web sayfasını özetleyen kısa bir metin parçasıdır. Kullanıcıların bağlantıya tıklayıp tıklamamaya karar vermelerine yardımcı olur.' },
      { question: 'Meta açıklamalar SEO için neden önemlidir?', answer: 'Meta açıklamalar, arama sıralamalarını doğrudan etkilemese de tıklama oranlarını önemli ölçüde etkiler. İyi yazılmış bir açıklama, aynı konumda daha fazla ziyaretçi çekebilir, dolaylı olarak sıralamaları olumlu etkileyebilir.' },
      { question: 'Bir meta açıklama ne kadar uzun olmalıdır?', answer: 'Google genellikle 155-160 karaktere kadar gösterir, ancak bu değişebilir. Mobil arama 120 karakter civarında kesilebilir, genişletilmiş snippet\'ler ise 320 karaktere kadar görüntüleyebilir. Aracımız üç uzunluk seçeneği sunar.' },
      { question: 'Meta açıklamalara anahtar kelime eklemeli miyim?', answer: 'Evet, ilgili anahtar kelimeleri doğal bir şekilde ekleyin. Kullanıcılar aradıklarında, eşleşen terimler arama sonuçlarında kalın olarak görünür ve görünürlüğü artırır. Ancak anahtar kelime doldurma pratiği, kalite ve okunabilirliği düşürdüğü için kaçınılmalıdır.' },
      { question: 'Her sayfa için benzersiz bir meta açıklama olmalı mı?', answer: 'Evet, her sayfanın o sayfanın içeriğini doğru bir şekilde açıklayan benzersiz bir meta açıklaması olmalıdır. Yinelenen açıklamalar, arama motorlarının kafasını karıştırabilir ve potansiyel ziyaretçiler için bilgi değerini azaltabilir.' },
      { question: 'Meta açıklamaları düzenli olarak güncellemeli miyim?', answer: 'Meta açıklamaları sayfa içeriği önemli ölçüde değiştiğinde, mevsimsel teklifler veya promosyonlar için veya düşük tıklama oranlarına sahip sayfaları optimize etmeye çalışırken güncelleyin. Düzenli denetim, açıklamaların ilgili ve etkili kalmasını sağlar.' },
      { question: 'Yazmadığım içerik için meta açıklamalar oluşturabilir miyim?', answer: 'Mevcut içeriğin özetini veya ana noktalarını araca sağlayabilirsiniz. Araç, sağladığınız bilgilere dayalı olarak uygun bir meta açıklama oluşturacaktır.' },
      { question: 'Meta açıklama sağlamazsam ne olur?', answer: 'Sağlanmadığında, arama motorları genellikle sayfa içeriğinden otomatik olarak bir snippet oluşturur. Bu çıkarılmış metin, ayrılmış bir meta açıklamadan daha az ikna edici veya doğru olabilir.' },
      { question: 'Bu aracı sosyal medya açıklamaları için kullanabilir miyim?', answer: 'Bu araç meta açıklamalar için optimize edilmiş olsa da, oluşturulan içerik sosyal medya önizleme açıklamaları için uyarlanabilir. Ancak, sosyal platformların kendi karakter sınırları ve en iyi uygulamaları vardır.' },
      { question: 'Meta açıklamalarda emojiler veya özel karakterler kullanabilir miyim?', answer: 'Bazı özel karakterler ve emojiler arama sonuçlarında görünebilse de, öngörülebilir şekilde görüntülenmeyebilirler. Sıradan kullanım için düz metin en güvenilir seçenektir. Emojileri dikkatli test edin ve idareli kullanın.' },
    ],
  },
  'paraphrasing-tool': {
    slug: 'paraphrasing-tool',
    name: 'Parafraz Aracı',
    title: 'Ücretsiz AI Parafraz Aracı',
    description: 'Herhangi bir metni anında yeniden ifade edin. AI parafraz aracımız orijinal anlamı korurken cümleler ve paragraflar için alternatif ifadeler oluşturur.',
    metaDescription: 'Ücretsiz AI parafraz aracımızla herhangi bir metni anında yeniden ifade edin. Orijinal anlamı korurken cümleler ve paragraflar için alternatif ifadeler oluşturur.',
    inputLabel: 'Metin...',
    inputPlaceholder: 'Parafraz yapmak istediğiniz metni buraya yapıştırın...',
    buttonText: 'Parafraz Yap',
    maxLength: 4096,
    options: [
      {
        name: 'mode',
        label: 'Mod',
        choices: ['Standart', 'Akıcı', 'Resmi', 'Basit', 'Yaratıcı', 'Akademik', 'Kısaltılmış', 'Genişletilmiş'],
        default: 'Standart',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at paraphrasing text while maintaining the original meaning. You can adapt your paraphrasing style based on the selected mode.
## PARAPHRASING MODES
- Standard: Balanced rewording with similar complexity
- Fluent: Natural, flowing language with smooth transitions
- Formal: Professional, business-appropriate language
- Simple: Clear, easy-to-understand language
- Creative: Engaging, expressive rewording
- Academic: Scholarly tone with precise language
- Shortened: Concise version with essential information
- Expanded: Detailed version with additional context
Mode: {{mode}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Akademik yazı ve araştırma', description: 'Öğrenciler ve araştırmacılar, intihal yapmadan kaynakları yeniden ifade etmek için Parafraz Aracını kullanır. Araç, orijinal anlamı korurken farklı kelime ve cümle yapısı kullanarak fikirleri doğru bir şekilde ifade etmeye yardımcı olur.' },
      { title: 'İçerik yeniden kullanımı', description: 'İçerik pazarlamacıları, farklı kanallar için mevcut içeriği uyarlamak amacıyla aracı kullanır. Blog yazısı sosyal medya için yeniden ifade edilebilir, veya bir rapor daha günlük bir kitle için basitleştirilebilir.' },
      { title: 'Yazma becerisi geliştirme', description: 'Yazarlar ve dil öğrenenler, kelime dağarcığını genişletmek ve alternatif ifade yapılarını öğrenmek için Parafraz Aracını kullanır. Kendi metinlerinin nasıl farklı şekillerde ifade edilebileceğini görerek yazma becerilerini geliştirirler.' },
    ],
    faqs: [
      { question: 'Parafraz nedir?', answer: 'Parafraz, bir metni farklı kelimeler kullanarak yeniden ifade etme sürecidir. Orijinal anlam korunurken kelime seçimi, cümle yapısı ve ifade tarzı değiştirilir.' },
      { question: 'Parafraz ile alıntı arasındaki fark nedir?', answer: 'Alıntı, kaynak metnin tam kelimelerini tırnak içinde kullanmaktır. Parafraz ise aynı fikirleri kendi kelimelerinizle ifade etmektir. Her iki durumda da kaynak belirtilmelidir.' },
      { question: 'Hangi modlar mevcut?', answer: 'Sekiz mod mevcuttur: Standart (dengeli yeniden yazma), Akıcı (doğal akış), Resmi (profesyonel dil), Basit (anlaşılması kolay), Yaratıcı (ifade edici), Akademik (bilimsel ton), Kısaltılmış (özet) ve Genişletilmiş (ayrıntılı).' },
      { question: 'Parafraz intihal sayılır mı?', answer: 'Düzgün yapılan parafraz intihal değildir, ancak kaynağı belirtmeniz gerekir. Sadece birkaç kelimeyi değiştirmek yeterli değildir; metnin tamamen yeniden ifade edilmesi gerekir.' },
      { question: 'Bu araç teknik metinleri parafraz edebilir mi?', answer: 'Evet, araç teknik terimleri tanır ve korur. Akademik mod özellikle bilimsel ve teknik içerik için uygundur.' },
      { question: 'Parafraz yapılmış metin benzersiz olacak mı?', answer: 'Evet, araç farklı kelime ve yapılar kullanarak orijinal içerik üretir. Ancak, akademik kullanım için ek düzenleme yapmanız ve kaynağı belirtmeniz önerilir.' },
      { question: 'Birden fazla paragrafi aynı anda parafraz edebilir miyim?', answer: 'Evet, araç birden fazla paragrafı işleyebilir. Ancak daha iyi sonuçlar için uzun metinleri bölümlere ayırmanız önerilir.' },
      { question: 'Parafraz modu seçimi sonucu nasıl etkiler?', answer: 'Her mod farklı bir stil ve amaç için optimize edilmiştir. Örneğin, Basit mod karmaşık metinleri anlaşılır hale getirirken, Akademik mod bilimsel dil kullanır.' },
      { question: 'Parafraz aracı çeviri yapar mı?', answer: 'Hayır, bu bir çeviri aracı değildir. Araç, metni aynı dilde farklı kelimelerle yeniden ifade eder.' },
      { question: 'Oluşturulan parafrazı düzenlemeli miyim?', answer: 'Evet, oluşturulan içeriği gözden geçirmeniz ve gerektiğinde düzenlemeniz önerilir. AI bir başlangıç noktası sağlar, ancak son şekli sizin vermeniz en iyisidir.' },
    ],
  },
  'summarizer': {
    slug: 'summarizer',
    name: 'Özetleyici',
    title: 'Ücretsiz AI Metin Özetleyici',
    description: 'Uzun metinleri anında kısa, net özetlere dönüştürün. AI özetleyicimiz makalelerin, belgelerin ve daha fazlasının ana noktalarını yakalar.',
    metaDescription: 'Ücretsiz AI özetleyicimizle uzun metinleri anında kısa, net özetlere dönüştürün. Makalelerin, belgelerin ve daha fazlasının ana noktalarını yakalar.',
    inputLabel: 'Özetlenecek metin...',
    inputPlaceholder: 'Özetlemek istediğiniz metni buraya yapıştırın...',
    buttonText: 'Özetle',
    maxLength: 8192,
    options: [
      {
        name: 'length',
        label: 'Özet uzunluğu',
        choices: ['Kısa (1-2 cümle)', 'Orta (3-5 cümle)', 'Uzun (1-2 paragraf)'],
        default: 'Orta (3-5 cümle)',
        type: 'select',
      },
      {
        name: 'format',
        label: 'Format',
        choices: ['Paragraf', 'Madde işareti', 'Numaralı liste'],
        default: 'Paragraf',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at summarizing text while capturing the essential information and key points. Create clear, accurate summaries that maintain the original meaning.
## GUIDELINES
- Identify and include the main ideas
- Preserve crucial details and facts
- Maintain logical flow and coherence
- Use clear, concise language
- Match the requested length and format
Length: {{length}}
Format: {{format}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Araştırma ve akademik çalışma', description: 'Öğrenciler ve araştırmacılar, uzun akademik makaleleri ve araştırma belgelerini hızlıca anlamak için Özetleyiciyi kullanır. Bu, literatür taramalarını hızlandırır ve bilgi toplama sürecini verimli hale getirir.' },
      { title: 'İş belgeleri', description: 'Profesyoneller, uzun raporları, toplantı notlarını ve iş belgelerini özetlemek için aracı kullanır. Bu, karar vericilerin temel bilgilere hızlıca erişmesini sağlar.' },
      { title: 'Haber ve içerik tüketimi', description: 'Okuyucular, uzun haber makalelerinin ve blog yazılarının ana noktalarını hızlıca anlamak için Özetleyiciyi kullanır. Bu, bilgi tüketimini verimli hale getirir.' },
    ],
    faqs: [
      { question: 'Metin özetleme nedir?', answer: 'Metin özetleme, uzun bir metnin ana fikirlerini ve önemli noktalarını daha kısa bir formda sunma sürecidir. Özet, orijinal metnin özünü korurken gereksiz ayrıntıları çıkarır.' },
      { question: 'Ne kadar uzunlukta metin özetlenebilir?', answer: 'Araç, çeşitli uzunluklarda metinleri işleyebilir. Ancak en iyi sonuçlar için metinlerin mantıksal bölümlere ayrılması önerilir.' },
      { question: 'Özet formatları arasındaki fark nedir?', answer: 'Paragraf formatı akan bir anlatı sağlar. Madde işaretleri ana noktaları ayrı ayrı listeler. Numaralı liste, sıralı veya öncelikli bilgiler için uygundur.' },
      { question: 'Özetler ne kadar doğru?', answer: 'AI, ana fikirleri yakalamaya çalışır, ancak karmaşık veya nüanslı içerikler için özeti orijinal metinle karşılaştırmanız önerilir.' },
      { question: 'Teknik içerik özetlenebilir mi?', answer: 'Evet, araç teknik ve akademik içerikleri özetleyebilir. Önemli teknik terimler genellikle özette korunur.' },
      { question: 'Özetlenen metin hangi dillerde olabilir?', answer: 'Araç, giriş metninin dilini tanır ve çıktıyı yapılandırıldığı dilde üretir.' },
      { question: 'Özeti düzenleyebilir miyim?', answer: 'Evet, oluşturulan özet bir başlangıç noktasıdır. İhtiyaçlarınıza göre düzenleyebilir ve geliştirebilirsiniz.' },
      { question: 'Birden fazla belge özetlenebilir mi?', answer: 'Her seferinde bir metin özetlemeniz önerilir. Birden fazla belge için her birini ayrı ayrı özetleyebilirsiniz.' },
      { question: 'Özet uzunluğu seçimi ne anlama gelir?', answer: 'Kısa özet temel fikri bir iki cümleye sığdırır. Orta özet daha fazla ayrıntı içerir. Uzun özet kapsamlı bir genel bakış sunar.' },
      { question: 'Özetler alıntılanabilir mi?', answer: 'AI tarafından oluşturulan özetler orijinal içerik olarak kabul edilir, ancak altta yatan kaynak metnin atıflandırılması gerekebilir.' },
    ],
  },
  'blog-title-generator': {
    slug: 'blog-title-generator',
    name: 'Blog Başlığı Oluşturucu',
    title: 'Ücretsiz AI Blog Başlığı Oluşturucu',
    description: 'Okuyucuları çeken blog başlıkları oluşturun. AI blog başlığı oluşturucumuz trafik çeken dikkat çekici başlıklar yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla okuyucuları çeken blog başlıkları oluşturun. Trafik çeken dikkat çekici başlıklar yaratır.',
    inputLabel: 'Blog konusu...',
    inputPlaceholder: 'örn. Ev bitkileri için başlangıç rehberi',
    buttonText: 'Başlık Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Başlık stili',
        choices: ['Nasıl yapılır', 'Liste', 'Soru', 'Rehber', 'Karşılaştırma', 'Kişisel hikaye'],
        default: 'Nasıl yapılır',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton',
        choices: ['Profesyonel', 'Günlük', 'Heyecanlı', 'Meraklı', 'Acil'],
        default: 'Profesyonel',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at creating compelling blog titles that attract readers and drive engagement. Your titles are clear, enticing, and optimized for clicks.
## TITLE STYLES
- How-to: Instructional, solution-focused titles
- List: Numbered titles promising specific points
- Question: Curiosity-driving question titles
- Guide: Comprehensive, authoritative titles
- Comparison: Versus or comparison titles
- Personal story: Narrative, experience-based titles
Style: {{style}}
Tone: {{tone}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Blog içerik stratejisi', description: 'Blog yazarları ve içerik pazarlamacıları, içerik takvimlerini planlarken Blog Başlığı Oluşturucuyu kullanır. Potansiyel konuları girerek araç, ilham kaynağı olabilecek ve trafik çekebilecek başlık seçenekleri sunar.' },
      { title: 'SEO optimizasyonu', description: 'SEO uzmanları, arama motorlarında iyi performans gösterecek başlıklar oluşturmak için aracı kullanır. Doğru anahtar kelimeler ve ilgi çekici formülasyonlar, hem tıklama oranlarını hem de sıralamaları artırabilir.' },
      { title: 'Sosyal medya paylaşımı', description: 'Sosyal medya yöneticileri, paylaşılabilir ve dikkat çekici başlıklar oluşturmak için Blog Başlığı Oluşturucuyu kullanır. Çarpıcı başlıklar sosyal medyada daha fazla etkileşim alır.' },
    ],
    faqs: [
      { question: 'İyi bir blog başlığı nasıl olmalı?', answer: 'İyi bir blog başlığı açık, ilgi çekici, anahtar kelime içeren ve okuyucuya ne öğreneceğini veya kazanacağını söyleyen bir başlıktır. Ayrıca makul uzunlukta (60-70 karakter ideal) olmalıdır.' },
      { question: 'Hangi başlık stilleri mevcut?', answer: 'Altı stil mevcuttur: Nasıl yapılır (eğitici), Liste (numaralı), Soru (merak uyandıran), Rehber (kapsamlı), Karşılaştırma (X vs Y) ve Kişisel hikaye (deneyim paylaşımı).' },
      { question: 'Başlık uzunluğu neden önemli?', answer: 'Arama motorları genellikle 60-70 karakterden sonrasını keser. Sosyal medya paylaşımlarında da kısa başlıklar daha etkilidir. Ancak bazen daha uzun, açıklayıcı başlıklar da işe yarayabilir.' },
      { question: 'Başlıkta sayı kullanmalı mıyım?', answer: 'Numaralı başlıklar (örn. "10 İpucu...") genellikle yüksek tıklama oranları alır çünkü okuyuculara ne bekleyeceklerini net bir şekilde söyler.' },
      { question: 'Aynı konu için birden fazla başlık seçeneği alabilir miyim?', answer: 'Evet, farklı stil ve ton kombinasyonlarıyla birden fazla istek yaparak çeşitli seçenekler elde edebilirsiniz.' },
      { question: 'Başlık oluştururken SEO düşünülüyor mu?', answer: 'Evet, oluşturulan başlıklar SEO dostu olmaya çalışır, ancak spesifik anahtar kelimelerinizi eklemeniz veya ayarlamanız gerekebilir.' },
      { question: 'Oluşturulan başlıkları düzenleyebilir miyim?', answer: 'Kesinlikle! Oluşturulan başlıklar bir başlangıç noktasıdır. Markanıza ve hedef kitlenize uygun şekilde düzenleyebilirsiniz.' },
      { question: 'Hangi ton en etkili?', answer: 'Bu, hedef kitlenize ve içerik türüne bağlıdır. Profesyonel ton iş içeriği için, günlük ton lifestyle blogları için, heyecanlı ton promosyonlar için daha uygun olabilir.' },
      { question: 'Clickbait başlıklardan nasıl kaçınırım?', answer: 'Başlığınızın içeriğinizle uyumlu olduğundan emin olun. Abartılı vaatlerden kaçının ve okuyucuların gerçekten ne bulacağını yansıtan başlıklar kullanın.' },
      { question: 'Başlık testi yapmalı mıyım?', answer: 'Mümkünse evet. A/B testi, hangi başlıkların kitlenizle daha iyi rezonans kurduğunu anlamanıza yardımcı olabilir. Sosyal medya paylaşımları bunu test etmenin kolay bir yoludur.' },
    ],
  },
  'outline-generator': {
    slug: 'outline-generator',
    name: 'Taslak Oluşturucu',
    title: 'Ücretsiz AI İçerik Taslağı Oluşturucu',
    description: 'Kapsamlı içerik taslakları oluşturun. AI taslak oluşturucumuz makaleler, blog yazıları ve daha fazlası için yapılandırılmış çerçeveler oluşturur.',
    metaDescription: 'Ücretsiz AI aracımızla kapsamlı içerik taslakları oluşturun. Makaleler, blog yazıları ve daha fazlası için yapılandırılmış çerçeveler oluşturur.',
    inputLabel: 'İçerik konusu...',
    inputPlaceholder: 'örn. Yeni başlayanlar için dijital pazarlama rehberi',
    buttonText: 'Taslak Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'depth',
        label: 'Taslak derinliği',
        choices: ['Basit (ana başlıklar)', 'Orta (alt başlıklar dahil)', 'Detaylı (konuşma noktaları dahil)'],
        default: 'Orta (alt başlıklar dahil)',
        type: 'select',
      },
      {
        name: 'content_type',
        label: 'İçerik türü',
        choices: ['Blog yazısı', 'Makale', 'Rehber', 'Rapor', 'Sunum'],
        default: 'Blog yazısı',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at creating comprehensive content outlines that provide a clear structure for writing. Your outlines are logical, well-organized, and tailored to the specific content type.
## GUIDELINES
- Create a logical flow of ideas
- Include relevant subheadings and points
- Match the depth level requested
- Tailor structure to the content type
- Ensure comprehensive topic coverage
Depth: {{depth}}
Content Type: {{content_type}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Uzun form içerik yazımı', description: 'İçerik yazarları, kapsamlı makaleler ve rehberler yazmadan önce Taslak Oluşturucuyu kullanır. Yapılandırılmış bir taslak, yazma sürecini kolaylaştırır ve içeriğin eksiksiz olmasını sağlar.' },
      { title: 'Eğitim materyalleri geliştirme', description: 'Eğitimciler ve öğretim tasarımcıları, kurs müfredatları ve eğitim materyalleri için taslaklar oluşturmak amacıyla aracı kullanır. Bu, bilginin mantıksal bir sırada sunulmasını sağlar.' },
      { title: 'Sunum hazırlığı', description: 'Profesyoneller, iş sunumları ve konuşmalar için yapılandırılmış taslaklar oluşturmak amacıyla Taslak Oluşturucuyu kullanır. Bu, mesajın net ve etkili olmasını sağlar.' },
    ],
    faqs: [
      { question: 'İçerik taslağı nedir?', answer: 'İçerik taslağı, bir yazının veya sunumun yapısını gösteren hiyerarşik bir plandır. Ana başlıklar, alt başlıklar ve anahtar noktaları içerir ve içeriğin mantıksal bir şekilde organize edilmesine yardımcı olur.' },
      { question: 'Taslak derinlik seviyeleri ne anlama geliyor?', answer: 'Basit seviye sadece ana başlıkları içerir. Orta seviye alt başlıklar ekler. Detaylı seviye her bölüm için konuşma noktaları ve ek ayrıntılar sağlar.' },
      { question: 'Hangi içerik türleri için taslak oluşturulabilir?', answer: 'Blog yazıları, makaleler, kapsamlı rehberler, iş raporları ve sunumlar için taslaklar oluşturulabilir. Her tür için yapı optimize edilir.' },
      { question: 'Taslak ne kadar uzun olabilir?', answer: 'Taslak uzunluğu, konu kapsamı ve seçilen derinlik seviyesine bağlıdır. Detaylı taslaklar doğal olarak daha uzun olacaktır.' },
      { question: 'Oluşturulan taslağı düzenleyebilir miyim?', answer: 'Kesinlikle! Taslak bir başlangıç noktasıdır. Bölüm ekleyebilir, çıkarabilir veya sırasını değiştirebilirsiniz.' },
      { question: 'Taslak, içerik yazmayı nasıl hızlandırır?', answer: 'Önceden planlanmış bir yapı ile yazarlar, her bölümde ne yazacaklarını bilir ve boş sayfa sendromunu önler. Bu, yazma sürecini daha verimli hale getirir.' },
      { question: 'SEO için taslaklar optimize edilmiş mi?', answer: 'Taslaklar, SEO dostu başlık yapıları kullanmaya çalışır, ancak spesifik anahtar kelime optimizasyonu için ek düzenleme gerekebilir.' },
      { question: 'Birden fazla taslak seçeneği alabilir miyim?', answer: 'Farklı içerik türleri veya derinlik seviyeleri seçerek aynı konu için farklı taslak yapıları elde edebilirsiniz.' },
      { question: 'Taslak oluşturma için ideal konu uzunluğu nedir?', answer: 'Net ve spesifik bir konu açıklaması en iyi sonuçları verir. Çok geniş konular için daha spesifik bir odak noktası belirlemeniz önerilir.' },
      { question: 'Akademik makaleler için taslak oluşturulabilir mi?', answer: 'Evet, makale içerik türünü seçerek akademik yapıya uygun taslaklar oluşturabilirsiniz. Ancak spesifik akademik gereksinimler için ayarlama gerekebilir.' },
    ],
  },
  'ai-content-detector': {
    slug: 'ai-content-detector',
    name: 'AI İçerik Dedektörü',
    title: 'Ücretsiz AI İçerik Dedektörü',
    description: 'Metnin AI tarafından mı yoksa insan tarafından mı yazıldığını tespit edin. AI içerik dedektörümüz makine tarafından oluşturulan içeriği belirlemeye yardımcı olur.',
    metaDescription: 'Ücretsiz AI içerik dedektörümüzle metnin AI tarafından mı yoksa insan tarafından mı yazıldığını tespit edin. Makine tarafından oluşturulan içeriği belirlemeye yardımcı olur.',
    inputLabel: 'Analiz edilecek metin...',
    inputPlaceholder: 'Analiz etmek istediğiniz metni buraya yapıştırın...',
    buttonText: 'Analiz Et',
    maxLength: 8192,
    options: [
      {
        name: 'detail_level',
        label: 'Detay seviyesi',
        choices: ['Basit (sadece sonuç)', 'Detaylı (açıklama ile)'],
        default: 'Detaylı (açıklama ile)',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert at analyzing text to determine whether it was written by a human or generated by AI. Provide your assessment with confidence levels and explain the indicators you observed.
## ANALYSIS FACTORS
- Writing patterns and consistency
- Vocabulary usage and variety
- Sentence structure complexity
- Creativity and originality
- Logical flow and coherence
- Common AI patterns or phrases
Detail Level: {{detail_level}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Akademik bütünlük', description: 'Eğitimciler ve kurumlar, öğrenci ödevlerinin orijinalliğini değerlendirmek için AI İçerik Dedektörünü kullanır. Bu, akademik dürüstlüğü korumaya ve öğrencilerin kendi çalışmalarını sunmalarını sağlamaya yardımcı olur.' },
      { title: 'İçerik kalite kontrolü', description: 'Editörler ve içerik yöneticileri, gelen içeriğin insan tarafından yazılıp yazılmadığını doğrulamak için aracı kullanır. Bu, içerik kalitesi standartlarını korumaya yardımcı olur.' },
      { title: 'Yazar doğrulama', description: 'Yayıncılar ve platformlar, gönderilen içeriğin gerçek yazarlardan gelip gelmediğini kontrol etmek için AI İçerik Dedektörünü kullanır. Bu, özgünlük ve güvenilirlik sağlar.' },
    ],
    faqs: [
      { question: 'AI içerik dedektörü nasıl çalışır?', answer: 'Dedektör, yazma kalıplarını, kelime kullanımını, cümle yapısını ve AI tarafından oluşturulan içeriğe özgü işaretleri analiz eder. Bu faktörlere dayanarak bir değerlendirme sağlar.' },
      { question: 'Sonuçlar ne kadar doğru?', answer: 'AI dedektörleri mükemmel değildir. Sonuçlar bir gösterge olarak değerlendirilmelidir. İnsan tarafından düzenlenmiş AI içeriği veya AI benzeri yazan insanlar sonuçları etkileyebilir.' },
      { question: 'Hangi faktörler AI içeriğini gösterir?', answer: 'AI içeriği genellikle tutarlı ton, belirli kelime kalıpları, aşırı düzgün yapı ve bazı yaygın ifadeler içerir. Ancak bu göstergeler kesin değildir.' },
      { question: 'İnsan düzenlemesi sonuçları etkiler mi?', answer: 'Evet, AI tarafından oluşturulan ancak insan tarafından düzenlenmiş içerik, dedektörleri yanıltabilir. Kapsamlı düzenleme, AI işaretlerini azaltabilir.' },
      { question: 'Hangi dillerde çalışır?', answer: 'Araç, yapılandırıldığı dilde analiz yapar ve sonuç üretir. Farklı dillerdeki AI desenleri değişebilir.' },
      { question: 'Kısa metinler analiz edilebilir mi?', answer: 'Daha uzun metinler genellikle daha güvenilir sonuçlar verir. Kısa metinlerde yeterli desen olmayabilir.' },
      { question: 'Sonuçlar yasal kanıt olarak kullanılabilir mi?', answer: 'Hayır, AI dedektör sonuçları kesin değildir ve yasal veya disiplin kararları için tek başına yeterli kanıt olarak kullanılmamalıdır.' },
      { question: 'Farklı AI modelleri farklı tespit edilir mi?', answer: 'Evet, farklı AI modelleri farklı yazma stilleri sergiler. Bazıları diğerlerinden daha kolay tespit edilebilir.' },
      { question: 'False positive nedir?', answer: 'False positive, insan tarafından yazılan metnin AI tarafından yazılmış olarak yanlış tanımlanmasıdır. Bu, dedektörlerin bilinen bir sınırlamasıdır.' },
      { question: 'Dedektörü atlatmak mümkün mü?', answer: 'Kapsamlı düzenleme ve yeniden yazma, AI işaretlerini azaltabilir. Ancak bu, orijinal içerik oluşturmanın gerçek amacını kaybettirir.' },
    ],
  },
  'ai-text-humanizer': {
    slug: 'ai-text-humanizer',
    name: 'AI Metin İnsanlaştırıcı',
    title: 'Ücretsiz AI Metin İnsanlaştırıcı',
    description: 'AI tarafından oluşturulan metni daha doğal, insan yazısına dönüştürün. AI metin insanlaştırıcımız içeriği özgün ve gerçek hissettiren bir şekilde yeniden yazar.',
    metaDescription: 'Ücretsiz AI metin insanlaştırıcımızla AI tarafından oluşturulan metni daha doğal, insan yazısına dönüştürün. İçeriği özgün hissettiren bir şekilde yeniden yazar.',
    inputLabel: 'İnsanlaştırılacak metin...',
    inputPlaceholder: 'İnsanlaştırmak istediğiniz AI tarafından oluşturulan metni buraya yapıştırın...',
    buttonText: 'Metni İnsanlaştır',
    maxLength: 4096,
    options: [
      {
        name: 'style',
        label: 'Yazma stili',
        choices: ['Doğal', 'Günlük', 'Profesyonel', 'Akademik', 'Yaratıcı'],
        default: 'Doğal',
        type: 'select',
      },
      {
        name: 'intensity',
        label: 'İnsanlaştırma yoğunluğu',
        choices: ['Hafif', 'Orta', 'Güçlü'],
        default: 'Orta',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at transforming AI-generated text into more natural, human-like writing. Your goal is to make the content feel authentic, genuine, and written by a real person.
## HUMANIZATION TECHNIQUES
- Add natural variations in sentence structure
- Include conversational elements
- Remove overly perfect or robotic phrasing
- Add personality and voice
- Use authentic transitions and flow
Style: {{style}}
Intensity: {{intensity}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'İçerik iyileştirme', description: 'İçerik oluşturucular, AI ile oluşturulan taslakları daha doğal okuyacak şekilde geliştirmek için AI Metin İnsanlaştırıcıyı kullanır. Bu, içeriğin okuyuculara daha otantik ve ilgi çekici gelmesini sağlar.' },
      { title: 'Marka sesi tutarlılığı', description: 'Pazarlamacılar, AI içeriğini marka seslerine uyarlamak için aracı kullanır. İnsanlaştırma, içeriğin markanın kişiliğini yansıtmasını sağlar.' },
      { title: 'Akademik ve profesyonel yazım', description: 'Yazarlar, AI destekli taslakları daha özgün ve kişisel bir tonda yeniden yazmak için AI Metin İnsanlaştırıcıyı kullanır. Bu, içeriğin kendi seslerini yansıtmasını sağlar.' },
    ],
    faqs: [
      { question: 'AI metin insanlaştırma nedir?', answer: 'AI metin insanlaştırma, makine tarafından oluşturulan içeriği daha doğal, insan yazısına benzer bir şekilde yeniden yazmaktır. Amaç, robotik veya yapay hissettiren dili daha otantik hale getirmektir.' },
      { question: 'İnsanlaştırma yoğunluğu ne anlama geliyor?', answer: 'Hafif yoğunluk küçük ayarlamalar yapar. Orta yoğunluk dengeli bir dönüşüm sağlar. Güçlü yoğunluk metni kapsamlı şekilde yeniden yazar.' },
      { question: 'Orijinal anlam korunuyor mu?', answer: 'Evet, araç temel mesajı ve bilgiyi korurken ifade şeklini dönüştürür. Önemli ayrıntılar ve fikirler bozulmadan kalır.' },
      { question: 'Hangi yazma stilleri mevcut?', answer: 'Beş stil mevcuttur: Doğal (genel amaçlı), Günlük (samimi), Profesyonel (iş ortamı için), Akademik (bilimsel yazı için) ve Yaratıcı (ifade edici).' },
      { question: 'İnsanlaştırılmış metin AI dedektörlerini geçer mi?', answer: 'İnsanlaştırma AI işaretlerini azaltabilir, ancak dedektörleri atlatmayı garanti etmez. Araç, içeriği daha doğal hissettirmek için tasarlanmıştır.' },
      { question: 'Teknik içerik insanlaştırılabilir mi?', answer: 'Evet, ancak teknik doğruluğun korunduğundan emin olmak için insanlaştırılmış teknik içeriği gözden geçirmeniz önerilir.' },
      { question: 'Birden fazla paragrafi insanlaştırabilir miyim?', answer: 'Evet, araç birden fazla paragrafı işleyebilir. Daha uzun metinler için tutarlı sonuçlar elde etmek amacıyla bölümler halinde çalışmanız önerilir.' },
      { question: 'İnsanlaştırma ne kadar sürer?', answer: 'İşlem genellikle birkaç saniye içinde tamamlanır. Metin uzunluğu işlem süresini etkileyebilir.' },
      { question: 'Sonucu düzenlemeli miyim?', answer: 'Evet, sonucu gözden geçirmeniz ve ihtiyaçlarınıza göre son düzenlemeleri yapmanız önerilir. Araç bir başlangıç noktası sağlar.' },
      { question: 'Farklı dillerde çalışır mı?', answer: 'Araç, yapılandırıldığı dilde çıktı üretir. Sonuçların kalitesi dile göre değişebilir.' },
    ],
  },
  'conclusion-generator': {
    slug: 'conclusion-generator',
    name: 'Sonuç Oluşturucu',
    title: 'Ücretsiz AI Sonuç Oluşturucu',
    description: 'Yazılarınız için güçlü sonuç paragrafları oluşturun. AI sonuç oluşturucumuz içeriğinizi etkili bir şekilde tamamlayan kapanış paragrafları yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla yazılarınız için güçlü sonuç paragrafları oluşturun. İçeriğinizi etkili bir şekilde tamamlayan kapanış paragrafları yaratır.',
    inputLabel: 'Ana içerik özeti veya anahtar noktalar...',
    inputPlaceholder: 'örn. Makale uzaktan çalışmanın üretkenlik ve iş-yaşam dengesi üzerindeki faydalarını tartışıyor',
    buttonText: 'Sonuç Oluştur',
    maxLength: 4096,
    options: [
      {
        name: 'style',
        label: 'Sonuç stili',
        choices: ['Özet', 'Eylem çağrısı', 'Düşündürücü', 'Geleceğe yönelik', 'İlham verici'],
        default: 'Özet',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton',
        choices: ['Profesyonel', 'Günlük', 'Akademik', 'İkna edici'],
        default: 'Profesyonel',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at crafting powerful conclusions that effectively wrap up content and leave a lasting impression. Your conclusions provide closure while reinforcing key points.
## CONCLUSION STYLES
- Summary: Recap of main points and takeaways
- Call to Action: Encourages specific reader action
- Thought-provoking: Leaves reader with questions to ponder
- Forward-looking: Discusses future implications
- Inspirational: Ends on an uplifting, motivating note
Style: {{style}}
Tone: {{tone}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Blog ve makale yazımı', description: 'Yazarlar, içeriklerini güçlü bir şekilde bitirmek için Sonuç Oluşturucuyu kullanır. İyi bir sonuç, okuyucunun anahtar mesajları hatırlamasını ve içerikten memnun kalmasını sağlar.' },
      { title: 'Akademik makaleler', description: 'Öğrenciler ve araştırmacılar, tezlerini ve bulgularını etkili bir şekilde özetleyen sonuçlar yazmak için aracı kullanır. Bu, akademik yazıların profesyonel bir kapanışa sahip olmasını sağlar.' },
      { title: 'İş sunumları ve raporlar', description: 'Profesyoneller, sunumlar ve raporlar için etkili kapanış bölümleri oluşturmak amacıyla Sonuç Oluşturucuyu kullanır. Güçlü bir sonuç, mesajı pekiştirir ve eylem önerir.' },
    ],
    faqs: [
      { question: 'İyi bir sonuç paragrafı nasıl olmalı?', answer: 'İyi bir sonuç, ana noktaları özetler, yeni bilgi eklemeden içeriği tamamlar, okuyucuya kapanış hissi verir ve gerekiyorsa eylem çağrısı içerir.' },
      { question: 'Hangi sonuç stilleri mevcut?', answer: 'Beş stil mevcuttur: Özet (ana noktaları tekrarlar), Eylem çağrısı (okuyucuyu harekete geçirir), Düşündürücü (düşünmeye teşvik eder), Geleceğe yönelik (gelecek etkileri tartışır) ve İlham verici (motive edici).' },
      { question: 'Sonuç ne kadar uzun olmalı?', answer: 'Sonuç genellikle içeriğin %5-10\'u kadar olmalıdır. Blog yazıları için birkaç cümle, akademik makaleler için bir veya iki paragraf uygun olabilir.' },
      { question: 'Sonuçta yeni bilgi eklenmeli mi?', answer: 'Genellikle hayır. Sonuç, zaten sunulan bilgileri sentezlemeli ve pekiştirmelidir. Yeni argümanlar veya kanıtlar giriş veya gövde bölümüne ait olmalıdır.' },
      { question: 'Eylem çağrısı her sonuçta gerekli mi?', answer: 'Hayır, içerik türüne bağlıdır. Pazarlama içeriği ve blog yazıları için eylem çağrısı yararlı olabilir, ancak akademik veya bilgilendirici içerik için gerekli olmayabilir.' },
      { question: 'Oluşturulan sonucu düzenleyebilir miyim?', answer: 'Kesinlikle! Oluşturulan sonuç bir başlangıç noktasıdır. İçeriğinizin genel akışına ve sesinize uygun şekilde ayarlayabilirsiniz.' },
      { question: 'Farklı içerik türleri için sonuç nasıl değişir?', answer: 'Blog yazıları daha günlük ve eylem odaklı sonuçlar kullanabilir. Akademik makaleler daha resmi ve özet odaklı olmalıdır. İş raporları genellikle öneri ve sonraki adımlar içerir.' },
      { question: 'Sonuç oluşturmak için ne kadar bilgi gerekli?', answer: 'Ana noktaların veya içeriğin kısa bir özeti yeterlidir. Ne kadar bağlam sağlarsanız, sonuç o kadar alakalı olacaktır.' },
      { question: 'Sonuç, girişle nasıl ilişkili olmalı?', answer: 'Etkili sonuçlar genellikle girişte ortaya konan tez veya soruya geri döner, böylece içeriğin döngüsünü tamamlar.' },
      { question: 'Birden fazla sonuç seçeneği alabilir miyim?', answer: 'Farklı stil ve ton kombinasyonlarıyla birden fazla istek yaparak çeşitli sonuç seçenekleri elde edebilirsiniz.' },
    ],
  },
  // ==================== TURKISH TRANSLATION - BATCH 2 (Tools 11-20) ====================
  'grammar-checker': {
    slug: 'grammar-checker',
    name: 'Dilbilgisi Denetleyicisi',
    title: 'Ücretsiz AI Dilbilgisi Denetleyicisi',
    description: 'Yazılarınızdaki dilbilgisi hatalarını anında tespit edin ve düzeltin. AI dilbilgisi denetleyicimiz yazınızı cilalı ve profesyonel hale getirir.',
    metaDescription: 'Ücretsiz AI dilbilgisi denetleyicimizle yazılarınızdaki dilbilgisi hatalarını anında tespit edin ve düzeltin. Yazınızı cilalı ve profesyonel hale getirir.',
    inputLabel: 'Kontrol edilecek metin...',
    inputPlaceholder: 'Dilbilgisi kontrolü için metninizi buraya yapıştırın...',
    buttonText: 'Dilbilgisi Kontrol Et',
    maxLength: 4096,
    options: [
      {
        name: 'strictness',
        label: 'Denetim seviyesi',
        choices: ['Standart', 'Sıkı', 'Akademik'],
        default: 'Standart',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert grammar checker and editor. Identify and correct grammar errors, punctuation issues, and suggest improvements while maintaining the original meaning and voice.
## CHECK FOR
- Grammar errors
- Punctuation mistakes
- Spelling issues
- Subject-verb agreement
- Tense consistency
- Word choice improvements
Strictness: {{strictness}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Profesyonel yazışmalar', description: 'Profesyoneller, iş e-postaları ve belgeleri göndermeden önce hataları yakalamak için Dilbilgisi Denetleyicisini kullanır. Bu, profesyonel iletişimin cilalı ve hatasız olmasını sağlar.' },
      { title: 'Akademik yazım', description: 'Öğrenciler, ödevlerini ve makalelerini teslim etmeden önce kontrol etmek için aracı kullanır. Dilbilgisi denetimi, akademik yazımın standartlara uygun olmasını sağlar.' },
      { title: 'İçerik yayınlama', description: 'Yazarlar ve editörler, yayınlamadan önce içeriği son kez kontrol etmek için Dilbilgisi Denetleyicisini kullanır. Bu, profesyonel ve güvenilir bir görünüm sağlar.' },
    ],
    faqs: [
      { question: 'Dilbilgisi denetleyicisi ne kontrol eder?', answer: 'Araç, dilbilgisi hataları, noktalama işaretleri, yazım hataları, özne-yüklem uyumu, zaman tutarlılığı ve kelime seçimi gibi konuları kontrol eder.' },
      { question: 'Denetim seviyeleri ne anlama geliyor?', answer: 'Standart günlük yazışmalar için yeterlidir. Sıkı daha fazla ince ayar önerir. Akademik, bilimsel yazım standartlarına göre kontrol eder.' },
      { question: 'Stil önerileri de sağlıyor mu?', answer: 'Evet, dilbilgisi düzeltmelerinin yanı sıra kelime seçimi ve ifade iyileştirmeleri de önerilir.' },
      { question: 'Teknik terimleri tanıyor mu?', answer: 'Araç yaygın teknik terimleri tanır, ancak çok özel jargon bazen işaretlenebilir. Bu durumda önerileri gözden geçirin.' },
      { question: 'Tüm önerileri kabul etmeli miyim?', answer: 'Hayır, öneriler bağlamsaldır ve her zaman durumunuza uygun olmayabilir. Her öneriyi gözden geçirin ve uygun olanları kabul edin.' },
      { question: 'Farklı yazma stillerini destekliyor mu?', answer: 'Evet, resmi, günlük ve akademik yazma stilleri için farklı denetim seviyeleri mevcuttur.' },
      { question: 'Makine çevirisini düzeltebilir mi?', answer: 'Araç, çeviriden kaynaklanan dilbilgisi hatalarını tespit edebilir, ancak anlam ve bağlam sorunlarını her zaman yakalayamayabilir.' },
      { question: 'Ne kadar metin kontrol edilebilir?', answer: 'Optimal sonuçlar için paragraf veya kısa bölümler halinde kontrol etmeniz önerilir.' },
      { question: 'Noktalama kurallarını hangi standarda göre kontrol ediyor?', answer: 'Araç genel kabul görmüş noktalama kurallarını kullanır, ancak bazı durumlarda stil tercihlerine göre ayarlama gerekebilir.' },
      { question: 'Pasif cümleleri aktif cümlelere dönüştürür mü?', answer: 'Araç, uygun olduğunda aktif ses önerileri yapabilir, ancak pasif sesin uygun olduğu durumları da tanır.' },
    ],
  },
  'sentence-rewriter': {
    slug: 'sentence-rewriter',
    name: 'Cümle Yeniden Yazıcı',
    title: 'Ücretsiz AI Cümle Yeniden Yazıcı',
    description: 'Cümlelerinizi anında yeniden yazın. AI cümle yeniden yazıcımız netlik, etki ve okunabilirlik için cümleleri dönüştürür.',
    metaDescription: 'Ücretsiz AI cümle yeniden yazıcımızla cümlelerinizi anında yeniden yazın. Netlik, etki ve okunabilirlik için cümleleri dönüştürür.',
    inputLabel: 'Cümle...',
    inputPlaceholder: 'Yeniden yazmak istediğiniz cümleyi girin...',
    buttonText: 'Cümleyi Yeniden Yaz',
    maxLength: 2048,
    options: [
      {
        name: 'goal',
        label: 'Yeniden yazma hedefi',
        choices: ['Daha net', 'Daha kısa', 'Daha resmi', 'Daha günlük', 'Daha etkili'],
        default: 'Daha net',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at rewriting sentences to achieve specific goals while preserving the original meaning. Provide improved versions that meet the specified objective.
## REWRITING GOALS
- Clearer: Improve clarity and understanding
- Shorter: Make more concise
- More formal: Professional language
- More casual: Conversational tone
- More impactful: Stronger, more compelling
Goal: {{goal}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Yazı düzenleme', description: 'Yazarlar, beceriksiz veya karmaşık cümleleri iyileştirmek için Cümle Yeniden Yazıcıyı kullanır. Bu, yazının daha akıcı ve anlaşılır olmasını sağlar.' },
      { title: 'Profesyonel iletişim', description: 'Profesyoneller, günlük yazıyı daha resmi dile dönüştürmek için aracı kullanır. Bu, iş ortamında uygun iletişim sağlar.' },
      { title: 'İçerik optimizasyonu', description: 'İçerik oluşturucular, başlıkları ve önemli cümleleri daha etkili hale getirmek için Cümle Yeniden Yazıcıyı kullanır. Daha güçlü ifadeler daha fazla dikkat çeker.' },
    ],
    faqs: [
      { question: 'Cümle yeniden yazıcı ne yapar?', answer: 'Araç, bir cümleyi belirtilen hedefe göre yeniden ifade eder. Orijinal anlam korunurken netlik, ton veya etki değiştirilebilir.' },
      { question: 'Hangi yeniden yazma hedefleri mevcut?', answer: 'Beş hedef mevcuttur: Daha net (anlaşılırlığı artırır), Daha kısa (kısaltır), Daha resmi (profesyonel dil), Daha günlük (samimi ton) ve Daha etkili (daha güçlü).' },
      { question: 'Birden fazla cümle yeniden yazılabilir mi?', answer: 'Araç tek cümle için optimize edilmiştir. Birden fazla cümle için her birini ayrı ayrı işlemeniz önerilir.' },
      { question: 'Teknik cümleler yeniden yazılabilir mi?', answer: 'Evet, ancak teknik terimlerin doğru kullanımını kontrol etmeniz önerilir.' },
      { question: 'Yeniden yazma orijinal anlamı korur mu?', answer: 'Evet, araç orijinal mesajı korurken ifade şeklini değiştirir.' },
      { question: 'Birden fazla versiyon alabilir miyim?', answer: 'Aynı cümleyi farklı hedeflerle çalıştırarak çeşitli versiyonlar elde edebilirsiniz.' },
      { question: 'Sonucu düzenlemeli miyim?', answer: 'Evet, oluşturulan versiyonu gözden geçirmeniz ve ihtiyaçlarınıza göre ayarlamanız önerilir.' },
      { question: 'Uzun cümleler kısaltılabilir mi?', answer: 'Evet, "Daha kısa" hedefi uzun cümleleri daha özlü hale getirir.' },
      { question: 'Pasif cümleleri aktif yapabilir mi?', answer: 'Evet, "Daha etkili" veya "Daha net" hedefleri genellikle aktif ses kullanır.' },
      { question: 'Dilbilgisi hataları da düzeltilir mi?', answer: 'Evet, yeniden yazma süreci genellikle mevcut dilbilgisi hatalarını da düzeltir.' },
    ],
  },
  'acronym-generator': {
    slug: 'acronym-generator',
    name: 'Kısaltma Oluşturucu',
    title: 'Ücretsiz AI Kısaltma Oluşturucu',
    description: 'Herhangi bir kelime veya ifade için yaratıcı kısaltmalar oluşturun. AI kısaltma oluşturucumuz akılda kalıcı ve anlamlı kısaltmalar yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla herhangi bir kelime veya ifade için yaratıcı kısaltmalar oluşturun. Akılda kalıcı ve anlamlı kısaltmalar yaratır.',
    inputLabel: 'Kelime veya ifade...',
    inputPlaceholder: 'örn. Müşteri İlişkileri Yönetimi',
    buttonText: 'Kısaltma Oluştur',
    maxLength: 1024,
    options: [
      {
        name: 'style',
        label: 'Kısaltma stili',
        choices: ['Standart', 'Yaratıcı', 'Profesyonel', 'Eğlenceli'],
        default: 'Standart',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at creating memorable and meaningful acronyms. Generate acronyms that are easy to remember and appropriate for the specified style.
## GUIDELINES
- Create pronounceable acronyms when possible
- Ensure the acronym relates to the meaning
- Match the specified style
- Provide memorable options
Style: {{style}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Proje ve ekip isimleri', description: 'Yöneticiler, projeler ve ekipler için akılda kalıcı kısaltmalar oluşturmak amacıyla Kısaltma Oluşturucuyu kullanır. İyi bir kısaltma, projenin hatırlanmasını ve iletişimini kolaylaştırır.' },
      { title: 'Marka ve ürün isimleri', description: 'Pazarlamacılar, ürün veya hizmet adları için yaratıcı kısaltmalar bulmak amacıyla aracı kullanır. Akılda kalıcı kısaltmalar marka bilinirliğini artırır.' },
      { title: 'Eğitim ve öğretim', description: 'Eğitimciler, karmaşık kavramları öğretmek için hatırlanması kolay kısaltmalar oluşturmak amacıyla Kısaltma Oluşturucuyu kullanır.' },
    ],
    faqs: [
      { question: 'Kısaltma nedir?', answer: 'Kısaltma, bir ifadenin her kelimesinin ilk harflerinden oluşan kısaltılmış formudur. Örneğin, "NATO" North Atlantic Treaty Organization kısaltmasıdır.' },
      { question: 'Hangi kısaltma stilleri mevcut?', answer: 'Dört stil mevcuttur: Standart (geleneksel), Yaratıcı (özgün), Profesyonel (iş ortamı için) ve Eğlenceli (günlük kullanım için).' },
      { question: 'Oluşturulan kısaltmalar telif haklı mı?', answer: 'AI tarafından oluşturulan kısaltmalar orijinaldir, ancak kullanmadan önce mevcut ticari markaları kontrol etmeniz önerilir.' },
      { question: 'Birden fazla seçenek alabilir miyim?', answer: 'Evet, araç genellikle birden fazla kısaltma seçeneği sunar.' },
      { question: 'Kısaltmalar telaffuz edilebilir mi?', answer: 'Araç, mümkün olduğunda telaffuz edilebilir kısaltmalar oluşturmaya çalışır.' },
      { question: 'Uzun ifadeler için kısaltma oluşturulabilir mi?', answer: 'Evet, ancak çok uzun ifadeler için daha kısa ve pratik kısaltmalar önerilir.' },
      { question: 'Mevcut bir kısaltmanın açılımını önerebilir mi?', answer: 'Araç, mevcut kısaltmalar için yaratıcı açılımlar da önerebilir (backronym).' },
      { question: 'Kısaltmalar hangi dillerde oluşturulabilir?', answer: 'Araç, yapılandırıldığı dilde kısaltmalar oluşturur.' },
      { question: 'İş kısaltmaları için en iyi stil hangisi?', answer: 'Profesyonel stil, iş ortamı için en uygun kısaltmaları oluşturur.' },
      { question: 'Oluşturulan kısaltmayı düzenleyebilir miyim?', answer: 'Evet, oluşturulan seçenekleri ihtiyaçlarınıza göre ayarlayabilirsiniz.' },
    ],
  },
  'lorem-ipsum-generator': {
    slug: 'lorem-ipsum-generator',
    name: 'Lorem Ipsum Oluşturucu',
    title: 'Ücretsiz Lorem Ipsum Oluşturucu',
    description: 'Tasarım projeleriniz için Lorem Ipsum yer tutucu metni oluşturun. Aracımız paragraflar, cümleler veya kelimeler olarak yer tutucu metin üretir.',
    metaDescription: 'Tasarım projeleriniz için ücretsiz Lorem Ipsum yer tutucu metni oluşturun. Paragraflar, cümleler veya kelimeler olarak yer tutucu metin üretir.',
    inputLabel: 'Miktar...',
    inputPlaceholder: 'örn. 3 paragraf',
    buttonText: 'Lorem Ipsum Oluştur',
    maxLength: 256,
    options: [
      {
        name: 'unit',
        label: 'Birim',
        choices: ['Paragraf', 'Cümle', 'Kelime'],
        default: 'Paragraf',
        type: 'select',
      },
      {
        name: 'start_with_lorem',
        label: 'Lorem ile başla',
        choices: ['Evet', 'Hayır'],
        default: 'Evet',
        type: 'radio',
      },
    ],
    systemPrompt: `You are a Lorem Ipsum generator that creates placeholder text for design and layout purposes. Generate the requested amount of Lorem Ipsum text in the specified format.
## GUIDELINES
- Generate authentic Lorem Ipsum text
- Match the requested unit and quantity
- Start with "Lorem ipsum dolor sit amet" if specified
Unit: {{unit}}
Start with Lorem: {{start_with_lorem}}

IMPORTANT: Generate the Lorem Ipsum text as requested.`,
    useCases: [
      { title: 'Web tasarımı', description: 'Web tasarımcıları, web sitesi mockup\'larını ve prototiplerini doldurmak için Lorem Ipsum Oluşturucuyu kullanır. Yer tutucu metin, düzenin gerçek içerikle nasıl görüneceğini gösterir.' },
      { title: 'Grafik tasarım', description: 'Grafik tasarımcılar, broşürler, posterler ve diğer baskı materyalleri için Lorem Ipsum kullanır. Bu, tipografi ve düzen kararlarına odaklanmayı sağlar.' },
      { title: 'Sunum şablonları', description: 'Sunum tasarımcıları, slayt şablonlarını metin yer tutucularıyla doldurmak için aracı kullanır. Bu, düzenin görsel olarak değerlendirilmesini sağlar.' },
    ],
    faqs: [
      { question: 'Lorem Ipsum nedir?', answer: 'Lorem Ipsum, basım ve dizgi endüstrisinde yaygın olarak kullanılan standart yer tutucu metindir. 1500\'lerden beri kullanılmaktadır.' },
      { question: 'Neden Lorem Ipsum kullanılır?', answer: 'Gerçek içerik olmadan düzen ve tipografiyi değerlendirmek için kullanılır. İçeriğin dikkat dağıtmasını önler ve tasarıma odaklanmayı sağlar.' },
      { question: 'Hangi birimler mevcut?', answer: 'Üç birim mevcuttur: Paragraf (tam paragraflar), Cümle (bireysel cümleler) ve Kelime (kelime sayısı).' },
      { question: '"Lorem ile başla" seçeneği ne anlama geliyor?', answer: 'Bu seçenek etkinleştirildiğinde, metin geleneksel "Lorem ipsum dolor sit amet" ifadesiyle başlar.' },
      { question: 'Oluşturulan metin gerçek Latince mi?', answer: 'Lorem Ipsum, Latince gibi görünse de, gerçek Latince değildir. Bazı Latince kelimeler içerir ancak anlamsız bir metindir.' },
      { question: 'Ne kadar metin oluşturulabilir?', answer: 'İstediğiniz miktarı belirtebilirsiniz. Araç, belirtilen miktarda paragraf, cümle veya kelime üretir.' },
      { question: 'Farklı yer tutucu metin türleri var mı?', answer: 'Klasik Lorem Ipsum en yaygın olanıdır, ancak bazı araçlar farklı temalar veya dillerde yer tutucu metin de sunar.' },
      { question: 'Lorem Ipsum SEO için zararlı mı?', answer: 'Yayınlanmış sayfalarda Lorem Ipsum kullanmak SEO için zararlıdır. Sadece tasarım ve geliştirme aşamasında kullanılmalıdır.' },
      { question: 'Oluşturulan metin her zaman aynı mı?', answer: 'Klasik Lorem Ipsum standart bir metin kullanır, ancak farklı miktarlarda oluşturulabilir.' },
      { question: 'Lorem Ipsum alternatifi var mı?', answer: 'Evet, ancak Lorem Ipsum en yaygın ve tanınan yer tutucu metin standardıdır.' },
    ],
  },
  'emoji-translator': {
    slug: 'emoji-translator',
    name: 'Emoji Çevirici',
    title: 'Ücretsiz AI Emoji Çevirici',
    description: 'Metni emojilere veya emojileri metne çevirin. AI emoji çeviricimiz mesajlarınıza eğlenceli ve ifade edici bir dokunuş ekler.',
    metaDescription: 'Ücretsiz AI emoji çeviricimizle metni emojilere veya emojileri metne çevirin. Mesajlarınıza eğlenceli ve ifade edici bir dokunuş ekler.',
    inputLabel: 'Metin veya emojiler...',
    inputPlaceholder: 'Çevirmek istediğiniz metni veya emojileri girin...',
    buttonText: 'Çevir',
    maxLength: 1024,
    options: [
      {
        name: 'direction',
        label: 'Çeviri yönü',
        choices: ['Metinden emojiye', 'Emojiden metne'],
        default: 'Metinden emojiye',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert at translating between text and emojis. Convert text to expressive emoji sequences or interpret emoji messages into clear text.
## GUIDELINES
- Match the emotional tone
- Use commonly understood emojis
- Preserve the message meaning
- Be creative but clear
Direction: {{direction}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Sosyal medya içeriği', description: 'Sosyal medya yöneticileri, görselleri ve emojileri içeriklerine dahil etmek için Emoji Çeviriciyi kullanır. Emojiler, gönderilerin daha dikkat çekici ve ifade edici olmasını sağlar.' },
      { title: 'Mesajlaşma ve iletişim', description: 'Kullanıcılar, mesajlarını daha eğlenceli ve ifade edici hale getirmek için aracı kullanır. Emoji çevirisi, duygusal tonun iletilmesine yardımcı olur.' },
      { title: 'Emoji yorumlama', description: 'Emoji dizilerini anlamak isteyen kullanıcılar, bunları düz metne çevirmek için aracı kullanır. Bu, karmaşık emoji mesajlarını çözmeye yardımcı olur.' },
    ],
    faqs: [
      { question: 'Emoji çevirici ne yapar?', answer: 'Araç, düz metni ifade edici emoji dizilerine çevirir veya emoji dizilerini anlaşılır metne dönüştürür.' },
      { question: 'Hangi çeviri yönleri mevcut?', answer: 'İki yön mevcuttur: Metinden emojiye (metin → emojiler) ve Emojiden metne (emojiler → metin).' },
      { question: 'Tüm emojiler doğru yorumlanıyor mu?', answer: 'Yaygın emojiler genellikle doğru yorumlanır, ancak bazı özel veya bağlama bağlı emojiler farklı anlamlar taşıyabilir.' },
      { question: 'Oluşturulan emojiler her platformda görünür mü?', answer: 'Çoğu yaygın emoji tüm platformlarda desteklenir, ancak bazı yeni emojiler eski cihazlarda görünmeyebilir.' },
      { question: 'Uzun metinler için çalışır mı?', answer: 'Evet, ancak kısa metinler için en etkili sonuçlar elde edilir. Uzun metinler çok fazla emoji üretebilir.' },
      { question: 'Emoji anlamları evrensel mi?', answer: 'Çoğu emoji evrensel olarak anlaşılır, ancak bazıları kültürel farklılıklar gösterebilir.' },
      { question: 'Özel veya yeni emojiler destekleniyor mu?', answer: 'Araç, yaygın olarak bilinen emojileri tanır ve kullanır. Çok yeni veya özel emojiler sınırlı olabilir.' },
      { question: 'Oluşturulan emoji dizisini düzenleyebilir miyim?', answer: 'Evet, oluşturulan emojileri ihtiyaçlarınıza göre düzenleyebilir veya ekleyebilirsiniz.' },
      { question: 'İş iletişimi için uygun mu?', answer: 'Emoji kullanımı bağlama bağlıdır. Gayri resmi iş iletişiminde kullanılabilir, ancak resmi iletişimde dikkatli olunmalıdır.' },
      { question: 'Birden fazla dil destekleniyor mu?', answer: 'Araç, yapılandırıldığı dilde çalışır ve o dilin yaygın ifadelerini emojilere çevirir.' },
    ],
  },
  'plagiarism-checker': {
    slug: 'plagiarism-checker',
    name: 'İntihal Denetleyicisi',
    title: 'Ücretsiz AI İntihal Denetleyicisi',
    description: 'Yazılarınızda potansiyel intihal tespit edin. AI intihal denetleyicimiz içeriğinizin orijinalliğini değerlendirmeye yardımcı olur.',
    metaDescription: 'Ücretsiz AI intihal denetleyicimizle yazılarınızda potansiyel intihal tespit edin. İçeriğinizin orijinalliğini değerlendirmeye yardımcı olur.',
    inputLabel: 'Kontrol edilecek metin...',
    inputPlaceholder: 'İntihal kontrolü için metninizi buraya yapıştırın...',
    buttonText: 'İntihal Kontrol Et',
    maxLength: 8192,
    options: [
      {
        name: 'sensitivity',
        label: 'Hassasiyet',
        choices: ['Standart', 'Yüksek'],
        default: 'Standart',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert at analyzing text for originality and potential plagiarism indicators. Provide an assessment of the text's originality with explanations.
## ANALYSIS FACTORS
- Writing style consistency
- Unusual phrasing patterns
- Technical language usage
- Structure and organization
- Common plagiarism indicators
Sensitivity: {{sensitivity}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Akademik bütünlük', description: 'Öğrenciler, ödevlerini teslim etmeden önce orijinalliğini kontrol etmek için İntihal Denetleyicisini kullanır. Bu, istemeden yapılan intihal hatalarını önlemeye yardımcı olur.' },
      { title: 'İçerik doğrulama', description: 'Editörler ve yayıncılar, gelen içeriğin orijinal olduğunu doğrulamak için aracı kullanır. Bu, yayınlanan içeriğin kalitesini ve özgünlüğünü korur.' },
      { title: 'Yazım kalite kontrolü', description: 'Yazarlar, kendi çalışmalarının benzersiz olduğundan emin olmak için İntihal Denetleyicisini kullanır. Bu, profesyonel itibarı korumaya yardımcı olur.' },
    ],
    faqs: [
      { question: 'İntihal denetleyicisi nasıl çalışır?', answer: 'Araç, metni yazım kalıpları, tutarlılık, alışılmadık ifadeler ve diğer intihal göstergeleri açısından analiz eder. Sonuç, içeriğin orijinalliği hakkında bir değerlendirme sağlar.' },
      { question: 'Sonuçlar kesin mi?', answer: 'Hayır, sonuçlar bir değerlendirme sağlar ancak kesin kanıt değildir. Gerçek intihal tespiti için profesyonel araçlar ve insan değerlendirmesi gerekebilir.' },
      { question: 'Hassasiyet seviyeleri ne anlama geliyor?', answer: 'Standart hassasiyet genel kullanım için uygundur. Yüksek hassasiyet daha titiz bir analiz yapar ve daha fazla potansiyel sorun işaretleyebilir.' },
      { question: 'Alıntılar intihal olarak işaretlenir mi?', answer: 'Uygun şekilde atıfta bulunulan alıntılar intihal değildir. Araç, atıf yapılmadan kullanılan içeriği tanımlamaya çalışır.' },
      { question: 'Teknik içerik için çalışır mı?', answer: 'Evet, ancak teknik içerik standart ifadeler içerebilir. Bu durumda sonuçları bağlamda değerlendirin.' },
      { question: 'Kendi önceki çalışmam intihal sayılır mı?', answer: 'Evet, kendinize ait önceki yayınlanmış çalışmaları atıf yapmadan yeniden kullanmak "öz-intihal" olarak kabul edilir.' },
      { question: 'Parafraz edilmiş içerik tespit edilir mi?', answer: 'Kötü parafraz veya çok az değişiklik yapılmış içerik işaretlenebilir. İyi parafraz, orijinal kaynak belirtilerek yapılmalıdır.' },
      { question: 'Hangi dillerde çalışır?', answer: 'Araç, yapılandırıldığı dilde analiz yapar.' },
      { question: 'Oluşturulan raporlar kaydedilebilir mi?', answer: 'Sonuçları kopyalayabilir veya ekran görüntüsü alabilirsiniz, ancak doğrudan indirme özelliği sınırlı olabilir.' },
      { question: 'Profesyonel intihal araçlarından farkı nedir?', answer: 'Profesyonel araçlar genellikle geniş veritabanlarını tarar. Bu araç, metin kalıplarına dayalı bir değerlendirme sağlar.' },
    ],
  },
  'blog-post-ideas-generator': {
    slug: 'blog-post-ideas-generator',
    name: 'Blog Yazısı Fikir Oluşturucu',
    title: 'Ücretsiz AI Blog Yazısı Fikir Oluşturucu',
    description: 'Blog yazısı fikirleri ve konuları oluşturun. AI blog fikir oluşturucumuz nişiniz için ilgi çekici içerik fikirleri yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla blog yazısı fikirleri ve konuları oluşturun. Nişiniz için ilgi çekici içerik fikirleri yaratır.',
    inputLabel: 'Niş veya konu alanı...',
    inputPlaceholder: 'örn. Küçük işletmeler için dijital pazarlama',
    buttonText: 'Fikirler Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'content_type',
        label: 'İçerik türü',
        choices: ['Nasıl yapılır rehberleri', 'Liste makaleleri', 'Vaka çalışmaları', 'Karşılaştırmalar', 'Trend analizleri', 'Karışık'],
        default: 'Karışık',
        type: 'select',
      },
      {
        name: 'audience',
        label: 'Hedef kitle',
        choices: ['Yeni başlayanlar', 'Orta düzey', 'İleri düzey', 'Genel'],
        default: 'Genel',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content strategist who generates engaging blog post ideas tailored to specific niches and audiences. Your ideas are timely, relevant, and designed to attract readers.
## GUIDELINES
- Generate relevant, engaging topics
- Match the specified content type
- Tailor to the target audience
- Include attention-grabbing angles
- Consider SEO potential
Content Type: {{content_type}}
Audience: {{audience}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'İçerik planlama', description: 'Blog yazarları ve içerik pazarlamacıları, içerik takvimlerini doldurmak için Blog Yazısı Fikir Oluşturucuyu kullanır. Niş alanlarını girerek çeşitli ilgi çekici konu fikirleri alırlar.' },
      { title: 'Yaratıcı blokaj aşma', description: 'Yazarlar, ilham sıkıntısı çektiklerinde yeni bakış açıları bulmak için aracı kullanır. Oluşturulan fikirler, yaratıcı sürecin yeniden başlamasına yardımcı olur.' },
      { title: 'Rekabet analizi', description: 'Pazarlamacılar, sektörlerinde hangi konuların popüler olabileceğini keşfetmek için Blog Yazısı Fikir Oluşturucuyu kullanır. Bu, rakiplerle rekabet etmek için faydalı içerik fikirleri sağlar.' },
    ],
    faqs: [
      { question: 'Blog yazısı fikir oluşturucu ne yapar?', answer: 'Araç, belirttiğiniz niş veya konu alanına dayalı olarak potansiyel blog yazısı konuları ve fikirleri oluşturur. Bu fikirler, ilgi çekici içerik için başlangıç noktaları sağlar.' },
      { question: 'Hangi içerik türleri mevcut?', answer: 'Altı tür mevcuttur: Nasıl yapılır rehberleri, Liste makaleleri, Vaka çalışmaları, Karşılaştırmalar, Trend analizleri ve Karışık (çeşitli türler).' },
      { question: 'Hedef kitle seçimi sonuçları nasıl etkiler?', answer: 'Yeni başlayanlar için daha temel konular, ileri düzey için daha derinlemesine ve teknik konular önerilir.' },
      { question: 'Oluşturulan fikirler SEO için optimize edilmiş mi?', answer: 'Fikirler SEO potansiyeli düşünülerek oluşturulur, ancak spesifik anahtar kelime araştırması ayrıca yapılmalıdır.' },
      { question: 'Birden fazla fikir alabilir miyim?', answer: 'Evet, araç genellikle bir dizi fikir sunar. Daha fazla fikir için isteği tekrarlayabilirsiniz.' },
      { question: 'Fikirler ne kadar özgün?', answer: 'AI, benzersiz kombinasyonlar ve açılar oluşturur, ancak popüler nişlerde benzer konular yaygın olabilir.' },
      { question: 'Fikirleri doğrudan kullanabilir miyim?', answer: 'Fikirler başlangıç noktalarıdır. Bunları kendi sesinize ve markanıza uygun şekilde geliştirmeniz önerilir.' },
      { question: 'Trend konuları da içeriyor mu?', answer: 'Trend analizleri seçeneği güncel ve popüler konulara odaklanır. Ancak gerçek trendleri doğrulamak için ek araştırma yapmanız önerilir.' },
      { question: 'Spesifik bir sektör için fikirler alabilir miyim?', answer: 'Evet, niş alanınızı ne kadar spesifik tanımlarsanız, fikirler o kadar alakalı olacaktır.' },
      { question: 'Evergreen içerik fikirleri de önerilir mi?', answer: 'Evet, karışık seçeneği hem güncel hem de uzun vadeli değer taşıyan (evergreen) konu fikirleri içerir.' },
    ],
  },
  'seo-title-generator': {
    slug: 'seo-title-generator',
    name: 'SEO Başlık Oluşturucu',
    title: 'Ücretsiz AI SEO Başlık Oluşturucu',
    description: 'SEO için optimize edilmiş başlıklar oluşturun. AI SEO başlık oluşturucumuz arama motorlarında sıralanan ve okuyucuları çeken başlıklar yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla SEO için optimize edilmiş başlıklar oluşturun. Arama motorlarında sıralanan ve okuyucuları çeken başlıklar yaratır.',
    inputLabel: 'İçerik konusu veya anahtar kelime...',
    inputPlaceholder: 'örn. Evden çalışma verimliliği ipuçları',
    buttonText: 'SEO Başlığı Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Başlık stili',
        choices: ['Standart', 'Soru', 'Nasıl yapılır', 'Liste', 'Güç kelimeleri'],
        default: 'Standart',
        type: 'select',
      },
    ],
    systemPrompt: `You are an SEO expert who creates optimized titles that rank well in search engines while attracting clicks. Your titles balance keyword inclusion with compelling copy.
## GUIDELINES
- Include primary keyword naturally
- Keep under 60 characters when possible
- Create click-worthy headlines
- Match the specified style
- Balance SEO with readability
Style: {{style}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Blog ve makale SEO', description: 'İçerik yazarları, blog yazıları ve makaleleri için arama motorlarında iyi sıralanan başlıklar oluşturmak amacıyla SEO Başlık Oluşturucuyu kullanır.' },
      { title: 'Ürün sayfası optimizasyonu', description: 'E-ticaret yöneticileri, ürün sayfaları için SEO dostu başlıklar oluşturmak amacıyla aracı kullanır. Bu, ürünlerin arama sonuçlarında görünürlüğünü artırır.' },
      { title: 'Sayfa başlığı iyileştirme', description: 'Web sitesi sahipleri, mevcut sayfaların başlıklarını SEO için optimize etmek amacıyla SEO Başlık Oluşturucuyu kullanır.' },
    ],
    faqs: [
      { question: 'SEO başlığı nedir?', answer: 'SEO başlığı, hem arama motorları hem de kullanıcılar için optimize edilmiş bir sayfa veya içerik başlığıdır. İlgili anahtar kelimeleri içerir ve tıklama çekecek şekilde yazılır.' },
      { question: 'Başlık uzunluğu neden önemli?', answer: 'Google genellikle 50-60 karakterden sonrasını keser. Daha uzun başlıklar arama sonuçlarında tam görünmeyebilir.' },
      { question: 'Hangi başlık stilleri mevcut?', answer: 'Beş stil mevcuttur: Standart (geleneksel), Soru (merak uyandıran), Nasıl yapılır (eğitici), Liste (numaralı), Güç kelimeleri (ikna edici kelimelerle).' },
      { question: 'Anahtar kelimeyi nereye yerleştirmeliyim?', answer: 'İdeal olarak, birincil anahtar kelime başlığın başına veya yakınına yerleştirilmelidir.' },
      { question: 'Oluşturulan başlıkları düzenleyebilir miyim?', answer: 'Evet, başlıkları markanıza ve içeriğinize uygun şekilde düzenleyebilirsiniz.' },
      { question: 'Birden fazla başlık seçeneği alabilir miyim?', answer: 'Evet, araç genellikle birden fazla seçenek sunar. A/B testi için farklı başlıkları deneyebilirsiniz.' },
      { question: 'Güç kelimeleri nedir?', answer: 'Güç kelimeleri, duygusal tepki uyandıran ve harekete geçiren kelimelerdir (örn. "ücretsiz", "kolay", "kanıtlanmış", "kesin").' },
      { question: 'Meta başlık ve H1 başlığı aynı mı olmalı?', answer: 'Benzer olabilirler ancak aynı olmak zorunda değildir. Meta başlık arama sonuçlarında, H1 ise sayfa içinde görünür.' },
      { question: 'Clickbait başlıklardan nasıl kaçınırım?', answer: 'Başlığınızın içeriği doğru yansıttığından emin olun. Abartılı vaatlerden kaçının.' },
      { question: 'SEO başlıkları her içerik türü için aynı mı?', answer: 'Hayır, blog yazıları, ürün sayfaları ve hizmet sayfaları için farklı yaklaşımlar gerekebilir.' },
    ],
  },
  'image-alt-text-generator': {
    slug: 'image-alt-text-generator',
    name: 'Görsel Alt Metin Oluşturucu',
    title: 'Ücretsiz AI Görsel Alt Metin Oluşturucu',
    description: 'Görseller için SEO dostu alt metinler oluşturun. AI alt metin oluşturucumuz erişilebilir ve arama motoru dostu açıklamalar yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla görseller için SEO dostu alt metinler oluşturun. Erişilebilir ve arama motoru dostu açıklamalar yaratır.',
    inputLabel: 'Görsel açıklaması...',
    inputPlaceholder: 'örn. Dizüstü bilgisayarda çalışan bir kadın, ofis ortamı, sabah güneşi',
    buttonText: 'Alt Metin Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'purpose',
        label: 'Alt metin amacı',
        choices: ['Genel', 'SEO odaklı', 'Erişilebilirlik odaklı', 'E-ticaret'],
        default: 'Genel',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at creating alt text for images that balances accessibility, SEO, and descriptive accuracy. Your alt text helps both screen reader users and search engines understand image content.
## GUIDELINES
- Be descriptive yet concise
- Include relevant keywords naturally
- Describe important visual elements
- Match the specified purpose
- Avoid "image of" or "picture of"
Purpose: {{purpose}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Web sitesi erişilebilirliği', description: 'Web geliştiricileri, görme engelli kullanıcılar için görselleri açıklayan alt metinler oluşturmak amacıyla Görsel Alt Metin Oluşturucuyu kullanır. Bu, web sitelerinin erişilebilirlik standartlarına uymasını sağlar.' },
      { title: 'SEO optimizasyonu', description: 'SEO uzmanları, görsellerin arama motorlarında indekslenmesini iyileştirmek için alt metinler oluşturur. İyi alt metinler, görsel aramalarda görünürlüğü artırır.' },
      { title: 'E-ticaret ürün görselleri', description: 'Çevrimiçi mağazalar, ürün görsellerini açıklayan ve arama motorlarında bulunan alt metinler oluşturmak amacıyla aracı kullanır.' },
    ],
    faqs: [
      { question: 'Alt metin nedir?', answer: 'Alt metin (alternatif metin), görselleri açıklayan HTML özniteliğidir. Görsel yüklenemediğinde görünür ve ekran okuyucular tarafından okunur.' },
      { question: 'Alt metin neden önemlidir?', answer: 'Alt metin hem erişilebilirlik hem de SEO için önemlidir. Görme engelli kullanıcıların görselleri anlamasını sağlar ve arama motorlarının görselleri indekslemesine yardımcı olur.' },
      { question: 'Alt metin ne kadar uzun olmalı?', answer: 'İdeal olarak 125 karakter veya daha kısa olmalıdır. Çoğu ekran okuyucu bu noktada keser.' },
      { question: '"Görsel" veya "resim" kelimeleriyle başlamalı mı?', answer: 'Hayır, bu gereksizdir. Ekran okuyucular zaten bunun bir görsel olduğunu belirtir.' },
      { question: 'Hangi amaç seçenekleri mevcut?', answer: 'Dört seçenek mevcuttur: Genel (dengeli), SEO odaklı (anahtar kelime vurgulu), Erişilebilirlik odaklı (ayrıntılı açıklama), E-ticaret (ürün özellikleri).' },
      { question: 'Dekoratif görseller için alt metin gerekli mi?', answer: 'Dekoratif görseller boş alt metin (alt="") kullanabilir. Ancak anlamlı görseller açıklayıcı alt metin gerektirir.' },
      { question: 'Alt metinde anahtar kelime kullanmalı mıyım?', answer: 'Evet, doğal bir şekilde. Ancak anahtar kelime doldurmaktan kaçının çünkü bu hem kullanıcı deneyimini hem de SEO\'yu olumsuz etkiler.' },
      { question: 'Karmaşık görseller nasıl açıklanır?', answer: 'Grafikler veya infografikler için kısa bir özet alt metinde, ayrıntılar ise sayfa içeriğinde veya uzun açıklama ile sağlanabilir.' },
      { question: 'Oluşturulan alt metni düzenleyebilir miyim?', answer: 'Evet, oluşturulan metni spesifik görsel içeriğine uygun şekilde düzenleyebilirsiniz.' },
      { question: 'Alt metin tüm görseller için aynı mı olmalı?', answer: 'Hayır, her görselin benzersiz ve o görseli doğru açıklayan alt metni olmalıdır.' },
    ],
  },
  'content-idea-generator': {
    slug: 'content-idea-generator',
    name: 'İçerik Fikir Oluşturucu',
    title: 'Ücretsiz AI İçerik Fikir Oluşturucu',
    description: 'Çeşitli formatlar ve platformlar için içerik fikirleri oluşturun. AI içerik fikir oluşturucumuz blog, sosyal medya ve daha fazlası için ilgi çekici konular yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla çeşitli formatlar ve platformlar için içerik fikirleri oluşturun. Blog, sosyal medya ve daha fazlası için ilgi çekici konular yaratır.',
    inputLabel: 'Konu veya niş...',
    inputPlaceholder: 'örn. Sürdürülebilir yaşam ve çevre dostu ürünler',
    buttonText: 'Fikirler Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Platform',
        choices: ['Blog', 'Sosyal medya', 'Video', 'Podcast', 'E-posta bülteni', 'Tümü'],
        default: 'Tümü',
        type: 'select',
      },
      {
        name: 'goal',
        label: 'İçerik hedefi',
        choices: ['Eğitici', 'İlham verici', 'Eğlendirici', 'Bilgilendirici', 'İkna edici'],
        default: 'Eğitici',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content strategist who generates diverse content ideas for multiple platforms and formats. Your ideas are engaging, relevant, and aligned with specific goals.
## GUIDELINES
- Generate platform-appropriate ideas
- Match the content goal
- Include diverse content formats
- Consider audience engagement
- Provide actionable concepts
Platform: {{platform}}
Goal: {{goal}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Çok kanallı içerik stratejisi', description: 'Pazarlamacılar, farklı platformlar için uyumlu içerik fikirleri oluşturmak amacıyla İçerik Fikir Oluşturucuyu kullanır. Bu, tutarlı bir içerik stratejisi oluşturmaya yardımcı olur.' },
      { title: 'İçerik takvimi planlama', description: 'İçerik yöneticileri, aylık veya haftalık içerik takvimlerini doldurmak için çeşitli fikirler üretmek amacıyla aracı kullanır.' },
      { title: 'Yaratıcı brainstorming', description: 'Ekipler, brainstorming oturumları için başlangıç noktaları sağlamak amacıyla İçerik Fikir Oluşturucuyu kullanır. Oluşturulan fikirler tartışmaları başlatır ve yaratıcılığı tetikler.' },
    ],
    faqs: [
      { question: 'İçerik fikir oluşturucu ne yapar?', answer: 'Araç, belirttiğiniz konu veya niş için çeşitli platformlara ve hedeflere uygun içerik fikirleri oluşturur.' },
      { question: 'Hangi platformlar destekleniyor?', answer: 'Blog, sosyal medya, video, podcast, e-posta bülteni ve tüm platformları kapsayan seçenekler mevcuttur.' },
      { question: 'İçerik hedefleri ne anlama geliyor?', answer: 'Hedefler, içeriğin amacını belirler: Eğitici (öğretici), İlham verici (motive edici), Eğlendirici (eğlenceli), Bilgilendirici (haber/güncellemeler), İkna edici (satış/dönüşüm).' },
      { question: 'Fikirler ne kadar spesifik?', answer: 'Fikirler genellikle geliştirilebilecek konseptler olarak sunulur. Bunları kendi markanıza ve kitlenize uygun şekilde detaylandırabilirsiniz.' },
      { question: 'Aynı konu için farklı platform fikirleri alabilir miyim?', answer: 'Evet, "Tümü" seçeneği farklı platformlar için çeşitli fikirler sunar.' },
      { question: 'Oluşturulan fikirler trend mi?', answer: 'Fikirler genel olarak ilgi çekici konulara dayanır. Gerçek trendleri doğrulamak için ek araştırma yapmanız önerilir.' },
      { question: 'Birden fazla fikir seti alabilir miyim?', answer: 'Evet, isteği tekrarlayarak veya farklı parametrelerle yeni fikirler elde edebilirsiniz.' },
      { question: 'Fikirler SEO için optimize edilmiş mi?', answer: 'Fikirler ilgi çekici konulara odaklanır. SEO optimizasyonu için ayrıca anahtar kelime araştırması yapmanız önerilir.' },
      { question: 'Belirli bir sektör için fikirler alabilir miyim?', answer: 'Evet, konu veya niş alanını ne kadar spesifik tanımlarsanız, fikirler o kadar alakalı olacaktır.' },
      { question: 'Oluşturulan fikirleri nasıl değerlendirmeliyim?', answer: 'Fikirleri hedef kitlenizin ilgisi, kaynaklarınız ve marka uyumu açısından değerlendirin.' },
    ],
  },
  // ==================== TURKISH TRANSLATION - BATCH 3 (Tools 21-30) ====================
  'video-script-generator': {
    slug: 'video-script-generator',
    name: 'Video Senaryo Oluşturucu',
    title: 'Ücretsiz AI Video Senaryo Oluşturucu',
    description: 'YouTube, TikTok ve daha fazlası için ilgi çekici video senaryoları oluşturun. AI video senaryo oluşturucumuz izleyicileri çeken içerikler yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla YouTube, TikTok ve daha fazlası için ilgi çekici video senaryoları oluşturun. İzleyicileri çeken içerikler yaratır.',
    inputLabel: 'Video konusu...',
    inputPlaceholder: 'örn. Evde egzersiz rutini için 10 dakikalık rehber',
    buttonText: 'Senaryo Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Platform',
        choices: ['YouTube', 'TikTok', 'Instagram Reels', 'Eğitim videosu', 'Kurumsal'],
        default: 'YouTube',
        type: 'select',
      },
      {
        name: 'duration',
        label: 'Video süresi',
        choices: ['Kısa (< 1 dakika)', 'Orta (1-5 dakika)', 'Uzun (5-15 dakika)', 'Çok uzun (15+ dakika)'],
        default: 'Orta (1-5 dakika)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert video scriptwriter who creates engaging scripts for various platforms. Your scripts capture attention, maintain viewer interest, and include effective calls to action.
Platform: {{platform}}
Duration: {{duration}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'YouTube içerik üretimi', description: 'YouTuberlar, kanalları için profesyonel ve ilgi çekici video senaryoları oluşturmak amacıyla Video Senaryo Oluşturucuyu kullanır.' },
      { title: 'Sosyal medya videoları', description: 'İçerik oluşturucular, TikTok ve Instagram Reels için kısa ve etkili senaryolar yazmak amacıyla aracı kullanır.' },
      { title: 'Eğitim ve kurumsal videolar', description: 'Eğitimciler ve şirketler, eğitim materyalleri ve kurumsal videolar için yapılandırılmış senaryolar oluşturmak amacıyla aracı kullanır.' },
    ],
    faqs: [
      { question: 'Video senaryo oluşturucu ne yapar?', answer: 'Araç, belirttiğiniz konu ve platform için tam bir video senaryosu oluşturur. Giriş, ana içerik ve kapanış bölümlerini içerir.' },
      { question: 'Hangi platformlar destekleniyor?', answer: 'YouTube, TikTok, Instagram Reels, eğitim videoları ve kurumsal videolar için senaryo oluşturulabilir.' },
      { question: 'Senaryo uzunluğu nasıl belirlenir?', answer: 'Video süresi seçeneği, senaryonun uzunluğunu ve detay seviyesini etkiler. Kısa videolar için özlü, uzun videolar için ayrıntılı senaryolar oluşturulur.' },
      { question: 'Oluşturulan senaryo düzenlenebilir mi?', answer: 'Evet, senaryolar başlangıç noktalarıdır ve kendi sesinize ve stilinize göre düzenlenmelidir.' },
      { question: 'B-roll önerileri de içeriyor mu?', answer: 'Senaryo, uygun yerlerde görsel öneriler içerebilir, ancak bunlar genel yönergelerdir.' },
      { question: 'Farklı tonlarda senaryo alabilir miyim?', answer: 'Platform seçimi tonu etkiler. Kurumsal daha resmi, TikTok daha günlük bir ton kullanır.' },
      { question: 'Senaryo formatı nasıl?', answer: 'Senaryolar genellikle konuşma metni, geçişler ve görsel notlarla yapılandırılır.' },
      { question: 'CTA (eylem çağrısı) dahil mi?', answer: 'Evet, etkili senaryolar genellikle abone olma, beğenme veya yorum yapma gibi eylem çağrıları içerir.' },
      { question: 'Teknik konular için senaryo yazılabilir mi?', answer: 'Evet, ancak teknik doğruluğu kontrol etmeniz önerilir.' },
      { question: 'Birden fazla senaryo versiyonu alabilir miyim?', answer: 'Farklı platform veya süre ayarlarıyla birden fazla versiyon oluşturabilirsiniz.' },
    ],
  },
  'brand-name-generator': {
    slug: 'brand-name-generator',
    name: 'Marka İsim Oluşturucu',
    title: 'Ücretsiz AI Marka İsim Oluşturucu',
    description: 'İşletmeniz için yaratıcı ve akılda kalıcı marka isimleri oluşturun. AI marka isim oluşturucumuz benzersiz ve anlamlı isim fikirleri yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla işletmeniz için yaratıcı ve akılda kalıcı marka isimleri oluşturun. Benzersiz ve anlamlı isim fikirleri yaratır.',
    inputLabel: 'İş açıklaması...',
    inputPlaceholder: 'örn. Genç profesyonellere odaklanan organik cilt bakım ürünleri markası',
    buttonText: 'İsim Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'İsim stili',
        choices: ['Modern', 'Klasik', 'Eğlenceli', 'Profesyonel', 'Yaratıcı'],
        default: 'Modern',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand naming consultant who creates memorable, meaningful brand names. Your suggestions are unique, easy to pronounce, and appropriate for the business.
Style: {{style}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Startup isimlendirme', description: 'Girişimciler, yeni işletmeleri için akılda kalıcı ve anlamlı isimler bulmak amacıyla Marka İsim Oluşturucuyu kullanır.' },
      { title: 'Ürün lansmanı', description: 'Şirketler, yeni ürün hatları için marka isimleri oluşturmak amacıyla aracı kullanır.' },
      { title: 'Yeniden markalaşma', description: 'İşletmeler, marka yenileme sürecinde yeni isim alternatifleri keşfetmek için Marka İsim Oluşturucuyu kullanır.' },
    ],
    faqs: [
      { question: 'İyi bir marka ismi nasıl olmalı?', answer: 'İyi bir marka ismi akılda kalıcı, telaffuzu kolay, benzersiz ve işletme değerlerini yansıtan bir isim olmalıdır.' },
      { question: 'Oluşturulan isimler tescilli mi?', answer: 'Hayır, oluşturulan isimler sadece fikirlerdir. Kullanmadan önce ticari marka araştırması yapmanız gerekir.' },
      { question: 'Domain uygunluğu kontrol ediliyor mu?', answer: 'Araç domain kontrolü yapmaz. Beğendiğiniz isimlerin domain uygunluğunu ayrıca kontrol etmelisiniz.' },
      { question: 'Hangi isim stilleri mevcut?', answer: 'Modern, Klasik, Eğlenceli, Profesyonel ve Yaratıcı stilleri mevcuttur.' },
      { question: 'Birden fazla isim önerisi alabilir miyim?', answer: 'Evet, araç genellikle birden fazla isim alternatifi sunar.' },
      { question: 'Uluslararası kullanım için uygun mu?', answer: 'Oluşturulan isimlerin farklı dillerde olumsuz anlamlar taşıyıp taşımadığını kontrol etmeniz önerilir.' },
      { question: 'İsimler nasıl seçilmeli?', answer: 'Akılda kalıcılık, telaffuz kolaylığı, marka uyumu ve hedef kitle açısından değerlendirin.' },
      { question: 'Sektöre özel isimler alabilir miyim?', answer: 'Evet, iş açıklamasını ne kadar detaylı yazarsanız, isimler o kadar alakalı olacaktır.' },
      { question: 'Oluşturulan isimleri düzenleyebilir miyim?', answer: 'Evet, isimleri kombinleyebilir veya değiştirebilirsiniz.' },
      { question: 'İsim oluşturma ücretsiz mi?', answer: 'Evet, araç ücretsiz olarak kullanılabilir.' },
    ],
  },
  'business-name-generator': {
    slug: 'business-name-generator',
    name: 'İşletme İsim Oluşturucu',
    title: 'Ücretsiz AI İşletme İsim Oluşturucu',
    description: 'İşletmeniz için profesyonel ve akılda kalıcı isimler oluşturun. AI işletme isim oluşturucumuz sektörünüze uygun isim fikirleri yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla işletmeniz için profesyonel ve akılda kalıcı isimler oluşturun. Sektörünüze uygun isim fikirleri yaratır.',
    inputLabel: 'İşletme türü ve sektör...',
    inputPlaceholder: 'örn. Küçük bir kasabada butik kafe ve fırın',
    buttonText: 'İsim Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Ton',
        choices: ['Profesyonel', 'Samimi', 'Lüks', 'Eğlenceli', 'Geleneksel'],
        default: 'Profesyonel',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert business naming consultant who creates professional, memorable business names. Your suggestions are appropriate for the industry and target market.
Tone: {{tone}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Yeni işletme kurulumu', description: 'Girişimciler, yeni işletmeleri için profesyonel ve sektöre uygun isimler bulmak amacıyla İşletme İsim Oluşturucuyu kullanır.' },
      { title: 'Franchise isimlendirme', description: 'Franchise sahipleri, yerel pazarlara uygun işletme isimleri oluşturmak için aracı kullanır.' },
      { title: 'İş genişletme', description: 'Mevcut işletmeler, yeni şubeler veya bölümler için isim fikirleri bulmak amacıyla aracı kullanır.' },
    ],
    faqs: [
      { question: 'İşletme ismi ve marka ismi arasındaki fark nedir?', answer: 'İşletme ismi resmi tescil için kullanılırken, marka ismi pazarlama ve müşteri iletişiminde kullanılır. Bazı durumlarda aynı olabilirler.' },
      { question: 'Hangi ton seçenekleri mevcut?', answer: 'Profesyonel, Samimi, Lüks, Eğlenceli ve Geleneksel tonlar mevcuttur.' },
      { question: 'Oluşturulan isimler tescil edilebilir mi?', answer: 'İsimlerin tescil edilebilirliğini ilgili kurumlarda kontrol etmeniz gerekir.' },
      { question: 'Sektöre özel isimler alabilir miyim?', answer: 'Evet, işletme türü ve sektörü ne kadar detaylı açıklarsanız, isimler o kadar alakalı olur.' },
      { question: 'İsimler yerel pazara uygun mu?', answer: 'Araç genel öneriler sunar. Yerel kültür ve dil uyumunu değerlendirmeniz önerilir.' },
      { question: 'Birden fazla isim önerisi alabilir miyim?', answer: 'Evet, araç genellikle birden fazla alternatif sunar.' },
      { question: 'İsim seçerken nelere dikkat etmeliyim?', answer: 'Telaffuz kolaylığı, akılda kalıcılık, sektör uyumu, domain uygunluğu ve yasal tescil durumunu kontrol edin.' },
      { question: 'Oluşturulan isimleri kombinleyebilir miyim?', answer: 'Evet, farklı önerileri kombinleyerek kendi benzersiz isminizi oluşturabilirsiniz.' },
      { question: 'İsimler diğer ülkelerde de kullanılabilir mi?', answer: 'Uluslararası kullanım için isimlerin farklı dillerdeki anlamlarını kontrol etmeniz önerilir.' },
      { question: 'İşletme ismi değiştirilebilir mi?', answer: 'Yasal olarak değiştirilebilir, ancak marka bilinirliği açısından başlangıçta doğru seçim yapmanız önerilir.' },
    ],
  },
  'product-name-generator': {
    slug: 'product-name-generator',
    name: 'Ürün İsim Oluşturucu',
    title: 'Ücretsiz AI Ürün İsim Oluşturucu',
    description: 'Ürünleriniz için yaratıcı ve pazarlanabilir isimler oluşturun. AI ürün isim oluşturucumuz akılda kalıcı ve çekici isim fikirleri yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla ürünleriniz için yaratıcı ve pazarlanabilir isimler oluşturun. Akılda kalıcı ve çekici isim fikirleri yaratır.',
    inputLabel: 'Ürün açıklaması...',
    inputPlaceholder: 'örn. Doğal malzemelerden yapılmış anti-aging yüz serumu',
    buttonText: 'İsim Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'İsim stili',
        choices: ['Bilimsel', 'Doğal', 'Lüks', 'Eğlenceli', 'Minimalist'],
        default: 'Doğal',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert product naming specialist who creates marketable, memorable product names. Your suggestions are appealing to customers and appropriate for the product category.
Style: {{style}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Yeni ürün lansmanı', description: 'Şirketler, yeni ürünlerini pazara sürerken dikkat çekici ve akılda kalıcı isimler bulmak için Ürün İsim Oluşturucuyu kullanır.' },
      { title: 'Ürün hattı genişletme', description: 'Markalar, mevcut ürün ailesine yeni ürünler eklerken tutarlı isimlendirme için aracı kullanır.' },
      { title: 'Özel etiket ürünleri', description: 'Perakendeciler, özel markalı ürünleri için özgün isimler oluşturmak amacıyla aracı kullanır.' },
    ],
    faqs: [
      { question: 'İyi bir ürün ismi nasıl olmalı?', answer: 'İyi bir ürün ismi ürünün faydalarını çağrıştıran, telaffuzu kolay, akılda kalıcı ve hedef kitleye çekici gelen bir isim olmalıdır.' },
      { question: 'Hangi isim stilleri mevcut?', answer: 'Bilimsel, Doğal, Lüks, Eğlenceli ve Minimalist stilleri mevcuttur.' },
      { question: 'Oluşturulan isimler tescilli mi?', answer: 'Hayır, isimlerin ticari marka durumunu ayrıca kontrol etmeniz gerekir.' },
      { question: 'Sektöre özel isimler alabilir miyim?', answer: 'Evet, ürün açıklamasını ne kadar detaylı yazarsanız, isimler o kadar alakalı olur.' },
      { question: 'İsimler farklı dillerde kontrol edilmeli mi?', answer: 'Uluslararası satış planlıyorsanız, isimlerin diğer dillerde olumsuz anlamlar taşıyıp taşımadığını kontrol edin.' },
      { question: 'Birden fazla ürün için aynı anda isim alabilir miyim?', answer: 'Her ürün için ayrı istek yapmanız önerilir, böylece daha alakalı sonuçlar alırsınız.' },
      { question: 'İsimler SEO için uygun mu?', answer: 'İsimler akılda kalıcılık için tasarlanır. SEO için ürün sayfası optimizasyonu ayrıca yapılmalıdır.' },
      { question: 'Oluşturulan isimleri düzenleyebilir miyim?', answer: 'Evet, isimleri kendi markanıza uygun şekilde modifiye edebilirsiniz.' },
      { question: 'Ürün serisi için tutarlı isimlendirme nasıl yapılır?', answer: 'Aynı stil ve ton seçenekleriyle birden fazla istek yaparak tutarlı bir isimlendirme serisi oluşturabilirsiniz.' },
      { question: 'İsim oluşturma ücretsiz mi?', answer: 'Evet, araç ücretsiz olarak kullanılabilir.' },
    ],
  },
  'slogan-generator': {
    slug: 'slogan-generator',
    name: 'Slogan Oluşturucu',
    title: 'Ücretsiz AI Slogan Oluşturucu',
    description: 'Markanız için akılda kalıcı sloganlar ve tagline\'lar oluşturun. AI slogan oluşturucumuz mesajınızı güçlü bir şekilde ileten ifadeler yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla markanız için akılda kalıcı sloganlar ve tagline\'lar oluşturun. Mesajınızı güçlü bir şekilde ileten ifadeler yaratır.',
    inputLabel: 'Marka veya ürün açıklaması...',
    inputPlaceholder: 'örn. Çevre dostu temizlik ürünleri satan bir şirket',
    buttonText: 'Slogan Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Ton',
        choices: ['İlham verici', 'Eğlenceli', 'Profesyonel', 'Cesur', 'Samimi'],
        default: 'İlham verici',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert copywriter who creates memorable slogans and taglines. Your slogans are catchy, meaningful, and effectively communicate brand values.
Tone: {{tone}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Marka oluşturma', description: 'Şirketler, marka kimliğini güçlendiren akılda kalıcı sloganlar oluşturmak için Slogan Oluşturucuyu kullanır.' },
      { title: 'Pazarlama kampanyaları', description: 'Pazarlamacılar, kampanyalar için dikkat çekici tagline\'lar yaratmak amacıyla aracı kullanır.' },
      { title: 'Ürün lansmanı', description: 'Markalar, yeni ürün lansmanları için ürünün faydalarını vurgulayan sloganlar oluşturmak için aracı kullanır.' },
    ],
    faqs: [
      { question: 'Slogan ve tagline arasındaki fark nedir?', answer: 'Slogan genellikle kampanyalara özeldir ve değişebilir. Tagline ise markanın kalıcı kimliğini temsil eder ve daha uzun süre kullanılır.' },
      { question: 'İyi bir slogan nasıl olmalı?', answer: 'İyi bir slogan kısa, akılda kalıcı, marka değerlerini yansıtan ve hedef kitleyle rezonans kuran bir ifade olmalıdır.' },
      { question: 'Hangi ton seçenekleri mevcut?', answer: 'İlham verici, Eğlenceli, Profesyonel, Cesur ve Samimi tonlar mevcuttur.' },
      { question: 'Oluşturulan sloganlar telif haklı mı?', answer: 'Mevcut sloganlarla benzerlik olup olmadığını kontrol etmeniz önerilir.' },
      { question: 'Birden fazla slogan önerisi alabilir miyim?', answer: 'Evet, araç genellikle birden fazla alternatif sunar.' },
      { question: 'Sloganlar ne kadar uzun olmalı?', answer: 'Etkili sloganlar genellikle 3-8 kelime arasındadır. Kısa ve öz olmak önemlidir.' },
      { question: 'Slogan dil oyunları içerebilir mi?', answer: 'Evet, kafiye, alliterasyon veya kelime oyunları içeren sloganlar daha akılda kalıcı olabilir.' },
      { question: 'Farklı dillerde slogan alabilir miyim?', answer: 'Araç yapılandırıldığı dilde çalışır. Diğer diller için ayrı istekler yapabilirsiniz.' },
      { question: 'Oluşturulan sloganları test etmeli miyim?', answer: 'Evet, hedef kitle üzerinde test etmek hangi sloganın daha etkili olduğunu anlamanıza yardımcı olur.' },
      { question: 'Slogan oluşturma ücretsiz mi?', answer: 'Evet, araç ücretsiz olarak kullanılabilir.' },
    ],
  },
  'google-ads-copy-generator': {
    slug: 'google-ads-copy-generator',
    name: 'Google Ads Metin Oluşturucu',
    title: 'Ücretsiz AI Google Ads Metin Oluşturucu',
    description: 'Tıklama çeken Google Ads metinleri oluşturun. AI Google Ads metin oluşturucumuz dönüşüm sağlayan reklam kopyaları yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla tıklama çeken Google Ads metinleri oluşturun. Dönüşüm sağlayan reklam kopyaları yaratır.',
    inputLabel: 'Ürün, hizmet veya teklif...',
    inputPlaceholder: 'örn. Online yoga dersleri, ilk ay %50 indirimli',
    buttonText: 'Reklam Metni Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'ad_type',
        label: 'Reklam türü',
        choices: ['Arama reklamı', 'Görüntülü reklam', 'Responsive arama', 'Performans Max'],
        default: 'Arama reklamı',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Google Ads copywriter who creates high-converting ad copy. Your ads follow Google's best practices, include compelling CTAs, and maximize click-through rates.
Ad Type: {{ad_type}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'PPC kampanya yönetimi', description: 'Dijital pazarlamacılar, Google Ads kampanyaları için etkili reklam metinleri oluşturmak amacıyla aracı kullanır.' },
      { title: 'A/B testi', description: 'Reklam yöneticileri, farklı reklam varyasyonlarını test etmek için çeşitli metin alternatifleri oluşturur.' },
      { title: 'Küçük işletme reklamcılığı', description: 'Küçük işletme sahipleri, profesyonel reklam metinleri oluşturmak için aracı kullanır.' },
    ],
    faqs: [
      { question: 'Google Ads metin oluşturucu ne yapar?', answer: 'Araç, Google Ads karakter sınırlarına ve en iyi uygulamalara uygun reklam başlıkları ve açıklamaları oluşturur.' },
      { question: 'Hangi reklam türleri destekleniyor?', answer: 'Arama reklamı, Görüntülü reklam, Responsive arama ve Performans Max reklam türleri desteklenir.' },
      { question: 'Karakter sınırlarına uyuyor mu?', answer: 'Evet, araç Google Ads karakter sınırlarını dikkate alarak metin oluşturur.' },
      { question: 'Birden fazla başlık ve açıklama alabilir miyim?', answer: 'Evet, özellikle responsive reklamlar için birden fazla varyasyon önerilir.' },
      { question: 'CTA (eylem çağrısı) dahil mi?', answer: 'Evet, etkili reklamlar genellikle güçlü eylem çağrıları içerir.' },
      { question: 'Anahtar kelimeler nasıl dahil edilir?', answer: 'Ürün/hizmet açıklamasına anahtar kelimelerinizi ekleyin, araç bunları doğal şekilde entegre etmeye çalışır.' },
      { question: 'Oluşturulan metinler Google politikalarına uygun mu?', answer: 'Araç genel en iyi uygulamaları takip eder, ancak son onay için Google politikalarını kontrol edin.' },
      { question: 'Rakip analizi yapıyor mu?', answer: 'Hayır, araç sağladığınız bilgilere dayanarak metin oluşturur.' },
      { question: 'Oluşturulan metinleri düzenleyebilir miyim?', answer: 'Evet, metinleri kampanya hedeflerinize göre özelleştirebilirsiniz.' },
      { question: 'Reklam performansını garanti ediyor mu?', answer: 'Araç en iyi uygulamaları takip eder, ancak gerçek performans birçok faktöre bağlıdır.' },
    ],
  },
  'product-description-generator': {
    slug: 'product-description-generator',
    name: 'Ürün Açıklama Oluşturucu',
    title: 'Ücretsiz AI Ürün Açıklama Oluşturucu',
    description: 'Satış yapan ürün açıklamaları oluşturun. AI ürün açıklama oluşturucumuz faydaları vurgulayan ve müşterileri ikna eden metinler yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla satış yapan ürün açıklamaları oluşturun. Faydaları vurgulayan ve müşterileri ikna eden metinler yaratır.',
    inputLabel: 'Ürün bilgileri...',
    inputPlaceholder: 'örn. Kablosuz bluetooth kulaklık, 30 saat pil ömrü, aktif gürültü engelleme',
    buttonText: 'Açıklama Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Ton',
        choices: ['Profesyonel', 'Eğlenceli', 'Lüks', 'Teknik', 'Samimi'],
        default: 'Profesyonel',
        type: 'select',
      },
      {
        name: 'length',
        label: 'Uzunluk',
        choices: ['Kısa', 'Orta', 'Uzun'],
        default: 'Orta',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert e-commerce copywriter who creates compelling product descriptions that drive sales. Your descriptions highlight benefits, address pain points, and include persuasive elements.
Tone: {{tone}}
Length: {{length}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'E-ticaret siteleri', description: 'Online mağazalar, ürün sayfalarını zenginleştirmek için ikna edici ve detaylı ürün açıklamaları oluşturur.' },
      { title: 'Pazar yerleri', description: 'Satıcılar, Amazon, Trendyol gibi pazar yerlerinde ürünlerini öne çıkaran açıklamalar yazmak için aracı kullanır.' },
      { title: 'Katalog ve broşürler', description: 'Şirketler, basılı ve dijital kataloglar için profesyonel ürün açıklamaları oluşturur.' },
    ],
    faqs: [
      { question: 'İyi bir ürün açıklaması nasıl olmalı?', answer: 'İyi bir ürün açıklaması özellikleri faydalara dönüştüren, hedef kitleyle konuşan ve satın alma kararını destekleyen bir metin olmalıdır.' },
      { question: 'Hangi ton seçenekleri mevcut?', answer: 'Profesyonel, Eğlenceli, Lüks, Teknik ve Samimi tonlar mevcuttur.' },
      { question: 'SEO için optimize edilmiş mi?', answer: 'Açıklamalar doğal dil kullanır. Spesifik SEO optimizasyonu için anahtar kelimelerinizi girişe ekleyin.' },
      { question: 'Bullet point formatı kullanılıyor mu?', answer: 'Açıklamalar hem akıcı metin hem de önemli özellikleri vurgulayan yapı içerebilir.' },
      { question: 'Teknik ürünler için uygun mu?', answer: 'Evet, Teknik ton seçeneği teknik ürünler için ayrıntılı açıklamalar oluşturur.' },
      { question: 'Birden fazla ürün için açıklama alabilir miyim?', answer: 'Her ürün için ayrı istek yapmanız daha alakalı sonuçlar sağlar.' },
      { question: 'Oluşturulan açıklamayı düzenleyebilir miyim?', answer: 'Evet, açıklamaları marka sesinize ve spesifik ürün detaylarına göre ayarlayabilirsiniz.' },
      { question: 'Çeviri desteği var mı?', answer: 'Araç yapılandırıldığı dilde açıklama oluşturur.' },
      { question: 'Açıklama uzunluğu ne olmalı?', answer: 'Ürün karmaşıklığına bağlıdır. Basit ürünler için kısa, karmaşık ürünler için uzun açıklamalar tercih edilebilir.' },
      { question: 'Duygusal tetikleyiciler kullanılıyor mu?', answer: 'Evet, ikna edici metinler genellikle duygusal bağ kuran ifadeler içerir.' },
    ],
  },
  'landing-page-generator': {
    slug: 'landing-page-generator',
    name: 'Landing Page İçerik Oluşturucu',
    title: 'Ücretsiz AI Landing Page İçerik Oluşturucu',
    description: 'Dönüşüm sağlayan landing page içerikleri oluşturun. AI landing page oluşturucumuz ziyaretçileri müşteriye dönüştüren metinler yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla dönüşüm sağlayan landing page içerikleri oluşturun. Ziyaretçileri müşteriye dönüştüren metinler yaratır.',
    inputLabel: 'Ürün, hizmet veya teklif...',
    inputPlaceholder: 'örn. SaaS proje yönetimi yazılımı, 14 günlük ücretsiz deneme',
    buttonText: 'İçerik Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'goal',
        label: 'Sayfa hedefi',
        choices: ['Potansiyel müşteri toplama', 'Ürün satışı', 'Kayıt', 'Demo talep', 'İndirme'],
        default: 'Potansiyel müşteri toplama',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert conversion copywriter who creates high-converting landing page content. Your copy includes compelling headlines, benefit-focused body text, and effective CTAs.
Goal: {{goal}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Dijital pazarlama kampanyaları', description: 'Pazarlamacılar, kampanyalar için yüksek dönüşüm oranına sahip landing page içerikleri oluşturmak amacıyla aracı kullanır.' },
      { title: 'Ürün lansmanları', description: 'Şirketler, yeni ürün lansmanları için dikkat çekici landing page metinleri hazırlar.' },
      { title: 'Lead generation', description: 'İşletmeler, potansiyel müşteri toplamak için form odaklı landing page içerikleri oluşturur.' },
    ],
    faqs: [
      { question: 'Landing page içerik oluşturucu ne üretir?', answer: 'Araç, başlıklar, alt başlıklar, fayda listesi, sosyal kanıt önerileri ve eylem çağrıları içeren tam landing page metni oluşturur.' },
      { question: 'Hangi hedef seçenekleri mevcut?', answer: 'Potansiyel müşteri toplama, Ürün satışı, Kayıt, Demo talep ve İndirme hedefleri mevcuttur.' },
      { question: 'Görsel önerileri dahil mi?', answer: 'Araç metin odaklıdır, ancak görsel yerleştirme önerileri içerebilir.' },
      { question: 'A/B testi için birden fazla versiyon alabilir miyim?', answer: 'Evet, farklı hedeflerle veya aynı girişle birden fazla istek yaparak varyasyonlar oluşturabilirsiniz.' },
      { question: 'SEO için optimize edilmiş mi?', answer: 'İçerik doğal dil kullanır. SEO için anahtar kelimelerinizi girişe eklemeniz önerilir.' },
      { question: 'Mobil uyumlu mu?', answer: 'İçerik metin tabanlıdır; mobil uyumluluk tasarım aşamasında ele alınmalıdır.' },
      { question: 'Form alanları öneriliyor mu?', answer: 'Lead generation hedefinde form alanı önerileri içerebilir.' },
      { question: 'Oluşturulan içeriği düzenleyebilir miyim?', answer: 'Evet, içeriği markanıza ve spesifik teklifinize göre özelleştirmeniz önerilir.' },
      { question: 'Uzunluk ne kadar?', answer: 'İçerik, etkili bir landing page için yeterli bölümleri içerir. İhtiyaçlarınıza göre kısaltabilir veya genişletebilirsiniz.' },
      { question: 'Aciliyet öğeleri dahil mi?', answer: 'Evet, etkili landing page metinleri genellikle aciliyet ve kıtlık öğeleri içerir.' },
    ],
  },
  'website-copy-generator': {
    slug: 'website-copy-generator',
    name: 'Web Sitesi Metin Oluşturucu',
    title: 'Ücretsiz AI Web Sitesi Metin Oluşturucu',
    description: 'Web siteniz için profesyonel ve ikna edici metinler oluşturun. AI web sitesi metin oluşturucumuz ana sayfa, hakkımızda ve daha fazlası için içerik yaratır.',
    metaDescription: 'Ücretsiz AI aracımızla web siteniz için profesyonel ve ikna edici metinler oluşturun. Ana sayfa, hakkımızda ve daha fazlası için içerik yaratır.',
    inputLabel: 'İşletme ve sayfa bilgileri...',
    inputPlaceholder: 'örn. Dijital pazarlama ajansı için ana sayfa metni, küçük işletmelere hizmet veriyoruz',
    buttonText: 'Metin Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'page_type',
        label: 'Sayfa türü',
        choices: ['Ana sayfa', 'Hakkımızda', 'Hizmetler', 'İletişim', 'SSS'],
        default: 'Ana sayfa',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert website copywriter who creates professional, engaging website content. Your copy effectively communicates brand value and guides visitors toward action.
Page Type: {{page_type}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Yeni web sitesi kurulumu', description: 'İşletmeler, yeni web siteleri için profesyonel içerikler oluşturmak amacıyla Web Sitesi Metin Oluşturucuyu kullanır.' },
      { title: 'Web sitesi yenileme', description: 'Mevcut web sitelerini güncelleyen şirketler, taze ve modern içerikler için aracı kullanır.' },
      { title: 'Çok dilli web siteleri', description: 'Uluslararası işletmeler, farklı dillerde tutarlı web sitesi içerikleri oluşturmak için aracı kullanır.' },
    ],
    faqs: [
      { question: 'Web sitesi metin oluşturucu ne yapar?', answer: 'Araç, farklı web sitesi sayfaları için profesyonel ve ikna edici metinler oluşturur.' },
      { question: 'Hangi sayfa türleri destekleniyor?', answer: 'Ana sayfa, Hakkımızda, Hizmetler, İletişim ve SSS sayfaları için içerik oluşturulabilir.' },
      { question: 'SEO için optimize edilmiş mi?', answer: 'İçerik doğal ve okunabilir şekilde yazılır. Spesifik SEO için anahtar kelimelerinizi eklemeniz önerilir.' },
      { question: 'Marka tonumu yansıtır mı?', answer: 'İşletme açıklamanızda ton ve kişilik hakkında bilgi vererek daha uygun sonuçlar alabilirsiniz.' },
      { question: 'Birden fazla sayfa için içerik alabilir miyim?', answer: 'Her sayfa türü için ayrı istek yapmanız önerilir.' },
      { question: 'Oluşturulan içeriği düzenleyebilir miyim?', answer: 'Evet, içeriği markanıza ve spesifik ihtiyaçlarınıza göre özelleştirmeniz önerilir.' },
      { question: 'CTA (eylem çağrısı) dahil mi?', answer: 'Evet, etkili web sitesi metinleri genellikle stratejik eylem çağrıları içerir.' },
      { question: 'Hizmetler sayfası için detaylı içerik oluşturuluyor mu?', answer: 'Evet, hizmet açıklamaları, faydalar ve eylem çağrıları içeren kapsamlı içerik oluşturulur.' },
      { question: 'Hakkımızda sayfası için hikaye anlatımı var mı?', answer: 'Evet, Hakkımızda sayfaları genellikle şirket hikayesi, değerler ve ekip bilgisi içerir.' },
      { question: 'İçerik uzunluğu ne kadar?', answer: 'Sayfa türüne göre uygun uzunlukta içerik oluşturulur. İhtiyaçlarınıza göre düzenleyebilirsiniz.' },
    ],
  },
  'resignation-letter-generator': {
    slug: 'resignation-letter-generator',
    name: 'İstifa Mektubu Oluşturucu',
    title: 'Ücretsiz AI İstifa Mektubu Oluşturucu',
    description: 'Profesyonel istifa mektupları dakikalar içinde yazın. AI\'mız ilişkileri koruyan ve itibarınızı koruyan cilalı mektuplar oluşturur.',
    metaDescription: 'Ücretsiz AI aracımızla profesyonel istifa mektupları dakikalar içinde yazın. İlişkileri koruyan ve itibarınızı koruyan cilalı mektuplar oluşturur.',
    inputLabel: 'Durumunuzu açıklayın...',
    inputPlaceholder: 'örn. Teknoloji şirketinde 3 yıldır pazarlama müdürü olarak çalışıyorum, yeni bir fırsat için ayrılıyorum',
    buttonText: 'Mektup Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Mektup tonu',
        choices: ['Resmi', 'Samimi/Kişisel', 'Kısa/Minimal'],
        default: 'Resmi',
        type: 'select',
      },
      {
        name: 'notice_period',
        label: 'İhbar süresi',
        choices: ['İki hafta', 'Bir ay', 'Derhal', 'Özel'],
        default: 'İki hafta',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert in professional communication who helps people write effective, professional resignation letters that maintain positive relationships while clearly communicating their departure.
Tone: {{tone}}
Notice Period: {{notice_period}}

IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Standart istifa hazırlığı', description: 'Çalışanlar, yeni fırsatlar için ayrılırken profesyonel istifa mektupları hazırlamak için İstifa Mektubu Oluşturucuyu kullanır.' },
      { title: 'Zor ayrılıkları yönetme', description: 'Zorlu çalışma ortamlarından ayrılan çalışanlar, profesyonelliği koruyarak köprüleri yakmadan ayrılmak için aracı kullanır.' },
      { title: 'Kariyer geçişi dokümantasyonu', description: 'Önemli kariyer değişiklikleri yapan profesyoneller, ayrılışlarının düzgün şekilde belgelenmesi için aracı kullanır.' },
    ],
    faqs: [
      { question: 'İstifa mektubunda neler bulunmalı?', answer: 'İstifa beyanı, pozisyon/unvan, son çalışma günü, kısa şükran ifadesi, geçiş desteği teklifi ve profesyonel kapanış bulunmalıdır.' },
      { question: 'İstifa mektubu ne kadar uzun olmalı?', answer: 'Bir sayfa veya daha kısa tutun - genellikle 3-5 paragraf. Ayrıntılar sözlü görüşmede ele alınabilir.' },
      { question: 'Ayrılış nedenimi belirtmeli miyim?', answer: 'Zorunlu değildir. Belirtirseniz kısa ve olumlu tutun: "yeni fırsat", "aile nedenleri" gibi.' },
      { question: 'Ne kadar önceden haber vermeliyim?', answer: 'Standart iki haftadır, ancak iş sözleşmenizi kontrol edin. Yönetici pozisyonları daha uzun süre gerektirebilir.' },
      { question: 'Olumsuz deneyimleri belirtmeli miyim?', answer: 'Hayır, istifa mektubu profesyonel kalmalıdır. Şikayetlerinizi ayrıca İK ile paylaşabilirsiniz.' },
      { question: 'Geçiş desteği teklif etmeli miyim?', answer: 'Evet, bu profesyonel bir jesttir ve iyi ilişkileri korumaya yardımcı olur.' },
      { question: 'E-posta mı yoksa basılı mektup mu olmalı?', answer: 'Her ikisi de kabul edilebilir. Uzaktan çalışanlar için e-posta yaygındır. Önce sözlü bildirim yapmanız önerilir.' },
      { question: 'Mektubu kime hitaben yazmalıyım?', answer: 'Genellikle doğrudan amirinize hitaben yazılır. İK\'ya da bir kopya gönderilebilir.' },
      { question: 'İstifa mektubu geri alınabilir mi?', answer: 'Yasal olarak evet, ancak kabul edilip edilmeyeceği işverene bağlıdır.' },
      { question: 'Mektup ne zaman verilmeli?', answer: 'İdeal olarak, amirinizle yüz yüze görüşmenin hemen ardından yazılı olarak takip edin.' },
    ],
  },
  // ==================== TURKISH TRANSLATION - BATCH 4 (Tools 31-40) ====================
  'hook-generator': {
    slug: 'hook-generator',
    name: 'Kanca Oluşturucu',
    title: 'Ücretsiz AI Kanca Oluşturucu',
    description: 'İçeriğiniz için dikkat çekici kancalar oluşturun. AI\'mız okuyucuları yakalayan ve etkileşimi artıran ilgi çekici açılış cümleleri yaratır.',
    metaDescription: 'İçeriğiniz için dikkat çekici kancalar oluşturun. AI\'mız okuyucuları yakalayan ve etkileşimi artıran ilgi çekici açılış cümleleri yaratır.',
    inputLabel: 'İçerik konusunu açıklayın...',
    inputPlaceholder: 'örn. Uzaktan çalışanlar için verimlilik ipuçları hakkında bir blog yazısı',
    buttonText: 'Kanca Oluştur',
    maxLength: 2048,
    options: [
      { name: 'tone', label: 'Kanca tonu', choices: ['Resmi', 'Günlük', 'Cesur/Uçuk', 'İlham verici', 'Analitik'], default: 'Günlük', type: 'select' },
      { name: 'hook_type', label: 'Kanca türü', choices: ['Karışık', 'Soru', 'İstatistik', 'Hikaye', 'Zıtlık', 'Vaat', 'Merak'], default: 'Karışık', type: 'select' },
    ],
    systemPrompt: `You are an expert content strategist specializing in creating attention-grabbing hooks. Tone: {{tone}} Hook Type: {{hook_type}} IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'İlgi çekici girişler yazma', description: 'Yazarlar, makaleler ve blog yazıları için okuyucuların dikkatini hemen çeken açılış cümleleri oluşturmak için Kanca Oluşturucuyu kullanır.' },
      { title: 'Pazarlama ve reklam metni', description: 'Pazarlamacılar, kampanyalar için ikna edici açılış cümleleri oluşturmak amacıyla aracı kullanır.' },
      { title: 'Konuşmalar ve sunumlar', description: 'Konuşmacılar, izleyicileri ilk andan itibaren yakalayan açılış cümleleri oluşturmak için aracı kullanır.' },
    ],
    faqs: [
      { question: 'Kanca nedir?', answer: 'Kanca, okuyucunun dikkatini hemen yakalamak için tasarlanmış bir açılış cümlesidir.' },
      { question: 'Hangi kanca türleri mevcut?', answer: 'Soru, istatistik, hikaye, zıtlık, vaat ve merak uyandıran kanca türleri mevcuttur.' },
      { question: 'Kanca ne kadar uzun olmalı?', answer: 'Etkili kancalar genellikle 1-3 cümledir.' },
      { question: 'Video içeriği için kanca kullanabilir miyim?', answer: 'Evet, kancalar her türlü içerik için etkilidir.' },
      { question: 'Kanca ile clickbait arasındaki fark nedir?', answer: 'İyi bir kanca merak uyandırır ve vaadini yerine getirir, clickbait ise yanıltıcıdır.' },
      { question: 'Birden fazla kanca alabilir miyim?', answer: 'Evet, araç genellikle birden fazla seçenek sunar.' },
      { question: 'Kanca marka sesime uymalı mı?', answer: 'Evet, kancalar marka tonunuza uygun olmalıdır.' },
      { question: 'Aynı kancayı farklı platformlarda kullanabilir miyim?', answer: 'Platform gereksinimlerine göre uyarlamanız gerekebilir.' },
      { question: 'Hangi kancanın en iyi çalıştığını nasıl test ederim?', answer: 'A/B testi ile farklı kancaların performansını karşılaştırabilirsiniz.' },
      { question: 'Kancadan sonra ne gelmeli?', answer: 'Kanca, ana içeriğe doğal bir geçiş sağlamalıdır.' },
    ],
  },
  'social-media-bio-generator': {
    slug: 'social-media-bio-generator',
    name: 'Sosyal Medya Bio Oluşturucu',
    title: 'Ücretsiz AI Sosyal Medya Bio Oluşturucu',
    description: 'Sosyal medya profilleri için mükemmel biyografiler oluşturun. AI\'mız kişisel markanızı sergileyen ve takipçi çeken ilgi çekici biolar yaratır.',
    metaDescription: 'Sosyal medya profilleri için mükemmel biyografiler oluşturun. AI\'mız kişisel markanızı sergileyen ilgi çekici biolar yaratır.',
    inputLabel: 'Kendinizi veya markanızı tanımlayın...',
    inputPlaceholder: 'örn. New York merkezli küçük işletmelerin online büyümesine yardımcı olan dijital pazarlama danışmanı',
    buttonText: 'Bio Oluştur',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'Platform', choices: ['Instagram', 'Twitter/X', 'LinkedIn', 'TikTok', 'Genel'], default: 'Genel', type: 'select' },
      { name: 'tone', label: 'Bio tonu', choices: ['Profesyonel', 'Samimi', 'Cesur', 'Esprili', 'Minimal'], default: 'Profesyonel', type: 'select' },
    ],
    systemPrompt: `You are an expert social media strategist specializing in crafting compelling bios. Platform: {{platform}} Tone: {{tone}} IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Kişisel marka oluşturma', description: 'Bireyler, kimliklerini ve uzmanlıklarını etkili şekilde temsil eden profil açıklamaları için Bio Oluşturucuyu kullanır.' },
      { title: 'Influencer pazarlama', description: 'Influencerlar, niş uzmanlıklarını vurgulayan ve marka işbirliklerini çeken biolar oluşturur.' },
      { title: 'İşletme tanıtımı', description: 'İşletmeler, değer önerilerini etkili şekilde ileten kısa ve etkili biolar oluşturur.' },
    ],
    faqs: [
      { question: 'Sosyal medya biyosunda neler olmalı?', answer: 'Kim olduğunuz, değer öneriniz, güvenilirlik göstergeleri, kişilik dokunuşu ve eylem çağrısı.' },
      { question: 'Bio ne kadar uzun olmalı?', answer: 'Platform sınırlarına bağlıdır: Instagram 150, Twitter 160, LinkedIn 220 karakter.' },
      { question: 'Bioda emoji kullanmalı mıyım?', answer: 'Platformun kültürüne bağlıdır. Instagram ve TikTok\'ta yaygındır, LinkedIn\'de daha az.' },
      { question: 'Biomu ne sıklıkla güncellemeliyim?', answer: 'Rolünüz, odağınız veya başarılarınız değiştiğinde güncelleyin.' },
      { question: 'Tüm platformlarda aynı bio kullanmalı mıyım?', answer: 'Temel mesaj tutarlı olabilir, ancak format ve ton platforma göre uyarlanmalıdır.' },
      { question: 'Biomu nasıl öne çıkarabilirim?', answer: 'Benzersiz farklılaştırıcılarla başlayın, somut başarılar kullanın, kişilik ekleyin.' },
      { question: 'Bioda anahtar kelime kullanmalı mıyım?', answer: 'Evet, keşfedilebilirliği artırmak için ilgili anahtar kelimeler doğal şekilde dahil edilmelidir.' },
      { question: 'Bioda hashtag kullanabilir miyim?', answer: 'Bazı platformlarda 1-3 ilgili hashtag kullanılabilir.' },
      { question: 'İşletme ve kişisel bio arasındaki fark nedir?', answer: 'İşletme biosu değer ve hizmete, kişisel bio daha fazla kişiliğe odaklanır.' },
      { question: 'Bioda hangi hatalardan kaçınmalıyım?', answer: 'Çok genel olmak, klişe ifadeler kullanmak, eylem çağrısı unutmak.' },
    ],
  },
  'instagram-bio-generator': {
    slug: 'instagram-bio-generator',
    name: 'Instagram Bio Oluşturucu',
    title: 'Ücretsiz AI Instagram Bio Oluşturucu',
    description: 'Saniyeler içinde mükemmel Instagram biyografisi oluşturun. AI\'mız takipçi çeken ve kişisel markanızı sergileyen ilgi çekici biolar yaratır.',
    metaDescription: 'Saniyeler içinde mükemmel Instagram biyografisi oluşturun. AI\'mız takipçi çeken ilgi çekici biolar yaratır.',
    inputLabel: 'Kendinizi veya markanızı tanımlayın...',
    inputPlaceholder: 'örn. LA merkezli yoğun profesyonellerin formda kalmasına yardımcı olan fitness koçu',
    buttonText: 'Bio Oluştur',
    maxLength: 2048,
    options: [
      { name: 'tone', label: 'Bio tonu', choices: ['Profesyonel Günlük', 'Eğlenceli ve Trendy', 'Estetik Minimal', 'Cesur ve Doğrudan', 'Sıcak ve Davetkar'], default: 'Profesyonel Günlük', type: 'select' },
      { name: 'include_emojis', label: 'Emoji dahil et', choices: ['Evet', 'Hayır'], default: 'Evet', type: 'radio' },
    ],
    systemPrompt: `You are an expert Instagram strategist specializing in crafting bios optimized for Instagram. Tone: {{tone}} Include Emojis: {{include_emojis}} IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Kişisel marka optimizasyonu', description: 'Instagram\'da kişisel marka oluşturan bireyler, uzmanlık ve kişiliklerini etkili şekilde yansıtan biolar oluşturur.' },
      { title: 'İşletme profili geliştirme', description: 'İşletmeler, 150 karakter sınırı içinde değer önerilerini net şekilde ileten biolar oluşturur.' },
      { title: 'İçerik oluşturucu desteği', description: 'İçerik oluşturucular, niş alanlarını sergileyen ve takipçilerin eylem çağrısına katılmasını teşvik eden biolar oluşturur.' },
    ],
    faqs: [
      { question: 'Instagram bio karakter sınırı nedir?', answer: 'Instagram bioları maksimum 150 karakterdir.' },
      { question: 'Instagram biomu nasıl yapılandırmalıyım?', answer: 'Kim olduğunuz/ne yaptığınız, değer öneriniz, güvenilirlik göstergesi ve eylem çağrısı.' },
      { question: 'Kaç emoji kullanmalıyım?', answer: 'Stratejik olarak 2-5 emoji kullanın.' },
      { question: 'Bioda satır sonu kullanmalı mıyım?', answer: 'Evet, satır sonları okunabilirliği artırır.' },
      { question: 'Bioda hashtag dahil etmeli miyim?', answer: 'Markalı hashtag işe yarayabilir, ancak bioda tıklanabilir değillerdir.' },
      { question: 'Instagram bio için en iyi eylem çağrısı nedir?', answer: '"Linke tıkla", "DM at", "Takip et" gibi net direktifler.' },
      { question: 'Dönüşüm sağlayan bio nasıl yazılır?', answer: 'Özellikler yerine faydalara odaklanın ve hedef kitlenize hitap edin.' },
      { question: 'Instagram biom diğer sosyal medya biolarımla eşleşmeli mi?', answer: 'Temel mesaj tutarlı olmalı, ancak format Instagram\'a özel olmalıdır.' },
      { question: 'Instagram biomu ne sıklıkla güncellemeliyim?', answer: 'Odak, teklifler veya başarılar değiştiğinde güncelleyin.' },
      { question: 'Emoji kullanımı profesyonel mi?', answer: 'Instagram kültüründe emoji yaygın ve kabul edilebilir.' },
    ],
  },
  'social-media-caption-generator': {
    slug: 'social-media-caption-generator',
    name: 'Sosyal Medya Altyazı Oluşturucu',
    title: 'Ücretsiz AI Sosyal Medya Altyazı Oluşturucu',
    description: 'Beğeni, yorum ve paylaşım çeken ilgi çekici sosyal medya altyazıları oluşturun. AI\'mız Instagram, Facebook, Twitter ve daha fazlası için etkili gönderi metinleri yaratır.',
    metaDescription: 'Beğeni, yorum ve paylaşım çeken sosyal medya altyazıları oluşturun.',
    inputLabel: 'Gönderi içeriğinizi tanımlayın...',
    inputPlaceholder: 'örn. Yeni ürün lansmanı fotoğrafı - açık hava tutkunları için sürdürülebilir su şişeleri',
    buttonText: 'Altyazı Oluştur',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'Platform', choices: ['Instagram', 'Facebook', 'Twitter/X', 'LinkedIn', 'TikTok', 'Genel'], default: 'Instagram', type: 'select' },
      { name: 'tone', label: 'Altyazı tonu', choices: ['Profesyonel', 'Günlük', 'Esprili', 'İlham verici', 'Uçuk'], default: 'Günlük', type: 'select' },
    ],
    systemPrompt: `You are an expert social media content strategist. Platform: {{platform}} Tone: {{tone}} IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Verimli sosyal medya içerik oluşturma', description: 'Sosyal medya yöneticileri, içerik oluşturma sürecini kolaylaştırmak için Altyazı Oluşturucuyu kullanır.' },
      { title: 'Reklam kampanya metni optimizasyonu', description: 'İşletmeler, reklamlar için ikna edici metin varyasyonları oluşturur.' },
      { title: 'Marka etkileşimini artırma', description: 'Markalar, trend konulara uygun ve etkileşim teşvik eden içerikler oluşturur.' },
    ],
    faqs: [
      { question: 'Etkili altyazının özellikleri nelerdir?', answer: 'Güçlü kanca, değer veya duygu taşıyan gövde, net eylem çağrısı.' },
      { question: 'Altyazı ne kadar uzun olmalı?', answer: 'Platform ve amaca bağlıdır. Instagram 2200 karaktere kadar izin verir, Twitter 280 ile sınırlıdır.' },
      { question: 'Altyazıda emoji kullanmalı mıyım?', answer: 'Evet, emojiler görsel ilgi ve kişilik ekler.' },
      { question: 'Kaç hashtag dahil etmeliyim?', answer: 'Platform önerilerine bağlı: Instagram 5-10, Twitter 1-2, LinkedIn 3-5.' },
      { question: 'Altyazıda en iyi eylem çağrısı nedir?', answer: 'Hedefinize uygun: etkileşim için "yorum yapın", dönüşüm için "linke tıklayın".' },
      { question: 'Daha fazla yorum nasıl alırım?', answer: 'Spesifik sorular sorun, tartışma başlatın, görüş isteyin.' },
      { question: 'Her platform için farklı altyazı mı yazmalıyım?', answer: 'Evet, her platformun farklı sınırları ve beklentileri vardır.' },
      { question: 'Marka sesimi nasıl korurum?', answer: 'Tutarlı kelime dağarcığı, ton ve format kullanın.' },
      { question: 'Altyazının en önemli kısmı nedir?', answer: 'İlk satır (kanca) - kullanıcılar "daha fazla"yı tıklamadan önce bunu görür.' },
      { question: 'Ne sıklıkla yeni altyazılarla paylaşım yapmalıyım?', answer: 'Tutarlılık sıklıktan önemlidir. Kaliteli içeriğe odaklanın.' },
    ],
  },
  'instagram-caption-generator': {
    slug: 'instagram-caption-generator',
    name: 'Instagram Altyazı Oluşturucu',
    title: 'Ücretsiz AI Instagram Altyazı Oluşturucu',
    description: 'Kaydırmayı durduran Instagram altyazıları anında oluşturun. AI\'mız Reels, carousel ve feed gönderileri için beğeni, yorum ve kaydetmeleri artıran altyazılar yaratır.',
    metaDescription: 'Kaydırmayı durduran Instagram altyazıları oluşturun.',
    inputLabel: 'Gönderinizi veya görselinizi tanımlayın...',
    inputPlaceholder: 'örn. Daha iyi uyku alışkanlıkları için 5 ipucu içeren carousel gönderi',
    buttonText: 'Altyazı Oluştur',
    maxLength: 2048,
    options: [
      { name: 'content_type', label: 'İçerik türü', choices: ['Feed Gönderisi', 'Reels', 'Carousel', 'Story'], default: 'Feed Gönderisi', type: 'select' },
      { name: 'tone', label: 'Altyazı tonu', choices: ['Özgün', 'Eğlenceli', 'Profesyonel', 'Trendy', 'İlham verici'], default: 'Özgün', type: 'select' },
    ],
    systemPrompt: `You are an expert Instagram content strategist. Content Type: {{content_type}} Tone: {{tone}} IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Verimli içerik oluşturma', description: 'İçerik oluşturucular, paylaşım iş akışını kolaylaştırmak için Instagram Altyazı Oluşturucuyu kullanır.' },
      { title: 'Kitle etkileşimi ve etkileşim', description: 'Kullanıcılar, anlamlı etkileşim teşvik eden altyazılar oluşturur.' },
      { title: 'Marka tanıtımı ve hikaye anlatımı', description: 'Markalar, marka kimliğine uygun ve anahtar mesajları ileten hikayeler oluşturur.' },
    ],
    faqs: [
      { question: 'Instagram altyazısı ne kadar uzun olmalı?', answer: 'İçerik türüne bağlı. Reels genellikle kısa (150 karakter altı), eğitici carousel daha uzun olabilir.' },
      { question: 'Altyazımın ilk satırına ne koymalıyım?', answer: 'Merak uyandıran, cesur bir görüş belirten veya değer vaat eden bir kanca.' },
      { question: 'Reels vs feed gönderi altyazıları nasıl farklı yazılır?', answer: 'Reels daha kısa ve etkili, feed gönderileri daha uzun ve hikaye odaklı olabilir.' },
      { question: 'Hashtagleri altyazıya mı yorumlara mı koymalıyım?', answer: 'Her iki yaklaşım da işe yarar. Estetik tercihinize bağlı.' },
      { question: 'Gönderilerime daha fazla yorum nasıl alabilirim?', answer: 'Spesifik sorular sorun, "bu mu o mu" tartışmaları yaratın, öneriler isteyin.' },
      { question: 'Kaydetmeleri teşvik eden altyazı nasıl yazılır?', answer: 'Değerli, referans alınabilir içerik oluşturun - ipuçları, öğreticiler, kontrol listeleri.' },
      { question: 'Instagram altyazılarında emoji kullanmalı mıyım?', answer: 'Evet, Instagram\'da emojiler etkileşimi artırır.' },
      { question: 'Carousel gönderi nasıl altyazılanır?', answer: 'Kanca ile başlayın, carousel olduğunu belirtin, değeri teaser yapın, kaydetme CTA\'sı ile bitirin.' },
      { question: 'Instagram altyazıları için en iyi eylem çağrısı nedir?', answer: 'Hedefinize uygun: tıklamalar için "bio linki", değerli içerik için "bunu kaydet".' },
      { question: 'Altyazımı görselimle nasıl eşleştiririm?', answer: 'Altyazı görseli tamamlamalı, tekrarlamamalı. Görüntünün iletemediği bağlamı ekleyin.' },
    ],
  },
  'social-media-hashtag-generator': {
    slug: 'social-media-hashtag-generator',
    name: 'Sosyal Medya Hashtag Oluşturucu',
    title: 'Ücretsiz AI Sosyal Medya Hashtag Oluşturucu',
    description: 'Erişim ve etkileşiminizi artıran etkili hashtagler oluşturun. AI\'mız Instagram, TikTok, Twitter ve daha fazlası için stratejik hashtag setleri yaratır.',
    metaDescription: 'Erişim ve etkileşiminizi artıran etkili hashtagler oluşturun.',
    inputLabel: 'İçeriğinizi veya nişinizi tanımlayın...',
    inputPlaceholder: 'örn. Yoğun profesyoneller için vegan yemek hazırlama tarifleri',
    buttonText: 'Hashtag Oluştur',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'Platform', choices: ['Instagram', 'TikTok', 'Twitter/X', 'LinkedIn', 'Genel'], default: 'Instagram', type: 'select' },
      { name: 'hashtag_count', label: 'Hashtag sayısı', choices: ['5', '10', '15', '20', '30'], default: '10', type: 'select' },
    ],
    systemPrompt: `You are an expert social media strategist specializing in hashtag research. Platform: {{platform}} Hashtag Count: {{hashtag_count}} IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'İçerik pazarlama kampanyaları', description: 'Pazarlamacılar, kampanyalar için hashtag stratejisini optimize etmek amacıyla aracı kullanır.' },
      { title: 'Sosyal medya SEO geliştirme', description: 'İşletmeler, sosyal medya keşfedilebilirliğini artırmak için optimize edilmiş hashtagler oluşturur.' },
      { title: 'Influencer erişim maksimizasyonu', description: 'Influencerlar, niş içindeki trend hashtagleri keşfeder.' },
    ],
    faqs: [
      { question: 'Kaç hashtag kullanmalıyım?', answer: 'Platform önerileri: Instagram 5-10, Twitter 1-2, LinkedIn 3-5, TikTok 3-5.' },
      { question: 'Etkili hashtag nasıl olmalı?', answer: 'İçeriğinizle alakalı, hedef kitlenizin kullandığı, yönetilebilir rekabete sahip.' },
      { question: 'Popüler mü niş hashtag mi kullanmalıyım?', answer: 'Her ikisinin karışımı. Popüler geniş görünürlük, niş hedefli erişim sağlar.' },
      { question: 'Trend hashtagleri nasıl bulurum?', answer: 'Platform keşif bölümleri, sosyal medya analiz araçları, rakip gönderileri.' },
      { question: 'Hashtagler etkileşimi olumsuz etkileyebilir mi?', answer: 'Evet, çok fazla, alakasız veya yasaklı hashtagler zarar verebilir.' },
      { question: 'Her gönderide aynı hashtagleri kullanmalı mıyım?', answer: 'Hayır, aynı setleri tekrarlamak spam gibi görünebilir. Setleri döndürün.' },
      { question: 'Hashtagleri nereye yerleştirmeliyim?', answer: 'Platform tercihleri farklıdır: Instagram altyazı veya ilk yorum, Twitter metin içinde, LinkedIn sonunda.' },
      { question: 'Markalı hashtag nasıl oluşturulur?', answer: 'Benzersiz, akılda kalıcı, kullanımda olmayan bir tag oluşturun ve tutarlı şekilde tanıtın.' },
      { question: 'Gölge yasaklı hashtag nedir?', answer: 'Platformlar tarafından kısıtlanan hashtagler. Bunları kullanmak içerik görünürlüğünü sınırlayabilir.' },
      { question: 'Hashtag stratejimi ne sıklıkla güncellemeliyim?', answer: 'Aylık gözden geçirin. Trend hashtagler değişir, bazıları aşırı kullanılır, yenileri ortaya çıkar.' },
    ],
  },
  'instagram-hashtag-generator': {
    slug: 'instagram-hashtag-generator',
    name: 'Instagram Hashtag Oluşturucu',
    title: 'Ücretsiz AI Instagram Hashtag Oluşturucu',
    description: 'Erişim ve etkileşiminizi artıran mükemmel Instagram hashtagleri oluşturun. AI\'mız içerik ve nişinize özel stratejik hashtag setleri yaratır.',
    metaDescription: 'Erişim ve etkileşiminizi artıran mükemmel Instagram hashtagleri oluşturun.',
    inputLabel: 'Gönderinizi veya nişinizi tanımlayın...',
    inputPlaceholder: 'örn. Plajlar ve tapınakları içeren Bali seyahat fotoğrafçılığı',
    buttonText: 'Hashtag Oluştur',
    maxLength: 2048,
    options: [
      { name: 'hashtag_count', label: 'Hashtag sayısı', choices: ['5', '10', '15', '20', '30'], default: '10', type: 'select' },
      { name: 'content_type', label: 'İçerik türü', choices: ['Feed Gönderisi', 'Reels', 'Carousel', 'Story'], default: 'Feed Gönderisi', type: 'select' },
    ],
    systemPrompt: `You are an expert Instagram growth strategist specializing in hashtag optimization. Hashtag Count: {{hashtag_count}} Content Type: {{content_type}} IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Sosyal medya pazarlama', description: 'Pazarlamacılar, kampanyalar için hashtag stratejisini optimize etmek amacıyla aracı kullanır.' },
      { title: 'İçerik kategorileme ve organizasyon', description: 'İçerik oluşturucular, içeriklerini uygun şekilde kategorize etmek için hashtag kullanır.' },
      { title: 'Influencer işbirliği ve ortaklık', description: 'Influencerlar ve markalar, kampanyalar için özel hashtagler oluşturur.' },
    ],
    faqs: [
      { question: 'Instagram\'da kaç hashtag kullanmalıyım?', answer: 'Instagram 30\'a kadar izin verir, ancak 5-10 alakalı hashtag genellikle en iyi sonucu verir.' },
      { question: 'Hashtagleri altyazıya mı yorumlara mı koymalıyım?', answer: 'Her iki yöntem de işe yarar. Instagram algoritması ikisine de benzer davranır.' },
      { question: 'Instagram büyümesi için en iyi hashtagler hangileri?', answer: 'İçeriğinizle alakalı ve hedef kitlenizin kullandığı hashtagler.' },
      { question: 'Niş hashtagleri nasıl bulurum?', answer: 'Rakip hesapları, alanınızdaki ilgili hashtagleri ve Instagram arama önerilerini araştırın.' },
      { question: 'Gölge yasaklı hashtag nedir?', answer: 'Uygunsuz kullanım nedeniyle Instagram tarafından kısıtlanan hashtagler.' },
      { question: 'Markalı hashtag oluşturmalı mıyım?', answer: 'Evet, topluluk oluşturma ve kullanıcı tarafından oluşturulan içeriği takip etmeye yardımcı olur.' },
      { question: 'Hashtaglerimi ne sıklıkla değiştirmeliyim?', answer: 'Aynı setleri tekrarlamaktan kaçının. 5-10 farklı set oluşturun ve döndürün.' },
      { question: 'Hashtagler Reels için işe yarıyor mu?', answer: 'Evet, Reels keşfedilebilirliğine yardımcı olur.' },
      { question: 'Instagram\'da hashtagleri takip edebilir miyim?', answer: 'Evet, feed\'inizde ilgili içerik görmek için hashtagleri takip edebilirsiniz.' },
      { question: 'Hashtaglerim neden çalışmıyor?', answer: 'Alakasız, yasaklı hashtag kullanımı, aynı setleri tekrarlama veya uygun olmayan zamanlarda paylaşım nedeniyle olabilir.' },
    ],
  },
  'social-media-username-generator': {
    slug: 'social-media-username-generator',
    name: 'Sosyal Medya Kullanıcı Adı Oluşturucu',
    title: 'Ücretsiz AI Sosyal Medya Kullanıcı Adı Oluşturucu',
    description: 'Sosyal medya profilleriniz için benzersiz ve akılda kalıcı kullanıcı adları oluşturun. AI\'mız Instagram, TikTok, Twitter ve daha fazlasında çalışan kişiselleştirilmiş öneriler yaratır.',
    metaDescription: 'Sosyal medya profilleriniz için benzersiz ve akılda kalıcı kullanıcı adları oluşturun.',
    inputLabel: 'Kendinizi veya markanızı tanımlayın...',
    inputPlaceholder: 'örn. Yoga ve meditasyonda uzmanlaşmış Sarah adında fitness koçu',
    buttonText: 'Kullanıcı Adı Oluştur',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Kullanıcı adı stili', choices: ['Profesyonel', 'Yaratıcı', 'Minimal', 'Niş odaklı', 'İsim tabanlı'], default: 'Yaratıcı', type: 'select' },
      { name: 'platform', label: 'Birincil platform', choices: ['Instagram', 'TikTok', 'Twitter/X', 'YouTube', 'Çoklu platform'], default: 'Çoklu platform', type: 'select' },
    ],
    systemPrompt: `You are an expert personal branding consultant specializing in memorable usernames. Style: {{style}} Platform: {{platform}} IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Marka ve işletme hesapları', description: 'İşletmeler, platformlar arasında tutarlı ve tanınabilir kullanıcı adları oluşturur.' },
      { title: 'İçerik oluşturucular ve influencerlar', description: 'İçerik oluşturucular, niş veya markalarını yansıtan ayırt edici kullanıcı adları bulur.' },
      { title: 'Kişisel ve profesyonel marka oluşturma', description: 'Bireyler, tutarlı online kimlik için benzersiz kullanıcı adları oluşturur.' },
    ],
    faqs: [
      { question: 'İyi bir sosyal medya kullanıcı adı nasıl olmalı?', answer: 'Kısa (15 karakter altı ideal), yazması ve söylemesi kolay, akılda kalıcı, alakalı ve platformlarda kullanılabilir.' },
      { question: 'Kullanıcı adım gerçek adım mı olmalı?', answer: 'Hedeflerinize bağlıdır. Gerçek adlar kişisel marka için, yaratıcı adlar içerik odaklı hesaplar için uygun.' },
      { question: 'Kullanıcı adımı nasıl benzersiz yapabilirim?', answer: 'Alakalı tanımlayıcılar ekleyin, kelime oyunları kullanın, nişinizi veya konumunuzu dahil edin.' },
      { question: 'Tüm platformlarda aynı kullanıcı adını kullanmalı mıyım?', answer: 'İdeal olarak evet. Tutarlı kullanıcı adları sizi bulmayı ve marka tanınırlığını kolaylaştırır.' },
      { question: 'İstediğim kullanıcı adı alınmışsa ne yapmalıyım?', answer: 'Varyasyonlar deneyin: alt çizgi ekleyin, nişinizi dahil edin, ön ekler kullanın.' },
      { question: 'Kullanıcı adımda sayı kullanmalı mıyım?', answer: 'Anlamlıysa (doğum yılı, kuruluş yılı) stratejik olarak kullanın. Rastgele sayılar profesyonel görünmeyebilir.' },
      { question: 'Kullanıcı adı ne kadar uzun olmalı?', answer: 'Daha kısa genellikle daha iyidir - 15 karakter altı ideal.' },
      { question: 'Kullanıcı adımı sonra değiştirebilir miyim?', answer: 'Çoğu platform değiştirmeye izin verir, ancak mevcut takipçileri karıştırabilir ve linkler bozulabilir.' },
      { question: 'Kullanıcı adım ne yaptığımı tanımlamalı mı?', answer: 'Nişinizi dahil etmek keşfedilebilirliğe yardımcı olabilir, ancak içeriğiniz değişirse büyüyemeyebilirsiniz.' },
      { question: 'Hangi karakterleri kullanabilirim?', answer: 'Çoğu platform harfler, sayılar, alt çizgiler ve noktalar izin verir. En geniş uyumluluk için özel karakterlerden kaçının.' },
    ],
  },
  'instagram-name-generator': {
    slug: 'instagram-name-generator',
    name: 'Instagram İsim Oluşturucu',
    title: 'Ücretsiz AI Instagram İsim Oluşturucu',
    description: 'Öne çıkan benzersiz Instagram kullanıcı adları oluşturun. AI\'mız varlığınızı oluşturmanıza ve keşfedilmenize yardımcı olan akılda kalıcı, markaya uygun kullanıcı adları yaratır.',
    metaDescription: 'Öne çıkan benzersiz Instagram kullanıcı adları oluşturun.',
    inputLabel: 'Kendinizi veya markanızı tanımlayın...',
    inputPlaceholder: 'örn. Sağlıklı tarifler paylaşan Emma adında yemek blogcusu',
    buttonText: 'İsim Oluştur',
    maxLength: 2048,
    options: [
      { name: 'account_type', label: 'Hesap türü', choices: ['Kişisel Marka', 'İçerik Oluşturucu', 'İşletme', 'Influencer', 'Sanatçı'], default: 'İçerik Oluşturucu', type: 'select' },
      { name: 'style', label: 'İsim stili', choices: ['Profesyonel', 'Yaratıcı', 'Minimal', 'Trendy', 'Klasik'], default: 'Yaratıcı', type: 'select' },
    ],
    systemPrompt: `You are an expert Instagram branding consultant specializing in unique usernames. Account Type: {{account_type}} Style: {{style}} IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'Kişisel marka oluşturma', description: 'Bireyler, tutku ve uzmanlıklarını yansıtan benzersiz kullanıcı adları bulur.' },
      { title: 'İşletme ve ürün tanıtımı', description: 'İşletmeler, şirket kimliği ve değerlerine uygun marka alakalı kullanıcı adları bulur.' },
      { title: 'Sosyal medya pazarlama kampanyaları', description: 'Pazarlamacılar, kampanyalar veya promosyonlar için özel kullanıcı adları oluşturur.' },
    ],
    faqs: [
      { question: 'Instagram kullanıcı adı gereksinimleri nelerdir?', answer: '30 karaktere kadar, sadece harfler, sayılar, noktalar ve alt çizgiler. Ardışık noktalar yok, nokta ile başlayamaz veya bitemez.' },
      { question: 'Kullanıcı adının kullanılabilir olup olmadığını nasıl anlarım?', answer: 'Instagram\'da arayarak veya hesap oluşturmayı deneyerek kontrol edin.' },
      { question: 'Instagram kullanıcı adım diğer sosyal medyamla eşleşmeli mi?', answer: 'İdeal olarak evet. Tutarlı kullanıcı adları marka tanınırlığını güçlendirir.' },
      { question: 'Gerçek adımı mı yaratıcı kullanıcı adı mı kullanmalıyım?', answer: 'Hedeflerinize bağlıdır. Gerçek adlar kişisel marka, yaratıcı adlar niş içerik için uygun.' },
      { question: 'Instagram kullanıcı adım büyüme için ne kadar önemli?', answer: 'İlk izlenimleri ve aranabilirliği etkiler, ancak içerik kalitesi büyüme için daha önemlidir.' },
      { question: 'Instagram kullanıcı adımı değiştirebilir miyim?', answer: 'Evet, ayarlardan değiştirebilirsiniz. Ancak eski linkler bozulabilir ve takipçiler karışabilir.' },
      { question: 'Kullanıcı adıma nişimi dahil etmeli miyim?', answer: 'Nişinizi dahil etmek aranabilirliğe yardımcı olur ve odağınızı hemen iletir.' },
      { question: 'İstediğim kullanıcı adı alınmışsa ne yapmalıyım?', answer: 'Varyasyonlar deneyin: nişinizi ekleyin, alt çizgi veya nokta kullanın, "the" veya "its" ön eki ekleyin.' },
      { question: 'Alt çizgi mi nokta mı daha iyi?', answer: 'İkisi de işe yarar. Noktalar daha temiz görünebilir, alt çizgiler daha evrensel olarak tanınır.' },
      { question: 'Birden fazla kullanıcı adı seçeneği arasından nasıl seçmeliyim?', answer: 'Sözlü söylemesi en kolay, markanızı en iyi temsil eden ve en akılda kalıcı olanı düşünün.' },
    ],
  },
  'tiktok-hashtag-generator': {
    slug: 'tiktok-hashtag-generator',
    name: 'TikTok Hashtag Oluşturucu',
    title: 'Ücretsiz AI TikTok Hashtag Oluşturucu',
    description: 'Görünürlüğünüzü artıran trend TikTok hashtagleri oluşturun. AI\'mız videolarınızın For You sayfasına ulaşmasına yardımcı olan stratejik hashtag kombinasyonları yaratır.',
    metaDescription: 'Görünürlüğünüzü artıran trend TikTok hashtagleri oluşturun.',
    inputLabel: 'TikTok videonuzu tanımlayın...',
    inputPlaceholder: 'örn. Kıyafet değişikliği içeren trend müzik kullanan dans videosu',
    buttonText: 'Hashtag Oluştur',
    maxLength: 2048,
    options: [
      { name: 'content_type', label: 'İçerik türü', choices: ['Eğlence/Dans', 'Eğitim', 'Komedi', 'Yaşam tarzı', 'Ürün/İnceleme', 'Öğretici'], default: 'Eğlence/Dans', type: 'select' },
      { name: 'hashtag_count', label: 'Hashtag sayısı', choices: ['3', '5', '7'], default: '5', type: 'select' },
    ],
    systemPrompt: `You are an expert TikTok growth strategist specializing in hashtag optimization. Content Type: {{content_type}} Hashtag Count: {{hashtag_count}} IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      { title: 'TikTok içerik stratejisi optimizasyonu', description: 'Sosyal medya yöneticileri ve içerik oluşturucular, içerik stratejilerini optimize etmek için aracı kullanır.' },
      { title: 'Influencer pazarlama kampanyaları', description: 'Markalar ve pazarlama ajansları, sektörlerindeki popüler hashtagleri belirler.' },
      { title: 'Rakip analizi ve kıyaslama', description: 'Pazarlamacılar, rakiplerin hashtag stratejilerini analiz eder.' },
    ],
    faqs: [
      { question: 'TikTok\'ta kaç hashtag kullanmalıyım?', answer: 'TikTok video başına 3-5 alakalı hashtag önerir.' },
      { question: 'Hashtagler TikTok erişimi için gerçekten önemli mi?', answer: 'Evet, hashtagler algoritmanın içeriğinizi ilgili izleyicilere dağıtmasına yardımcı olur.' },
      { question: 'Her zaman #FYP veya #ForYou kullanmalı mıyım?', answer: 'Bir tane FYP ilgili hashtag kullanabilirsiniz, ancak sihirli değildir. İçerik kalitesi daha önemlidir.' },
      { question: 'TikTok topluluk hashtagleri nedir?', answer: '#BookTok, #FitTok, #FoodTok gibi niş toplulukları bağlayan hashtagler.' },
      { question: 'Trend TikTok hashtaglerini nasıl bulurum?', answer: 'TikTok Keşfet sayfası, nişinizdeki başarılı içerik oluşturucular ve trend sesler.' },
      { question: 'İçerikle uyuşmayan trend hashtagleri kullanmalı mıyım?', answer: 'Hayır, alakasız hashtagler performansı olumsuz etkileyebilir.' },
      { question: 'TikTok hashtagleri Instagram hashtaglerinden farklı mı çalışır?', answer: 'Evet, TikTok algoritması etkileşim sinyallerine ağırlık verir ve hashtagler ses, tamamlama oranı vb. ile birlikte çalışır.' },
      { question: 'Hashtagler viral olmama yardımcı olabilir mi?', answer: 'Hashtagler keşfedilebilirliğe yardımcı olur, ancak viral potansiyel içerik kalitesi, kanca gücü ve etkileşime daha bağlıdır.' },
      { question: 'TikTok için markalı hashtag oluşturmalı mıyım?', answer: 'Kullanıcı tarafından oluşturulan içeriği teşvik eden meydan okumalar ve kampanyalar için iyi çalışır.' },
      { question: 'TikTok hashtag trendleri ne sıklıkla değişir?', answer: 'Hızlı değişir - genellikle haftalık veya günlük. Keşfet sayfasını düzenli kontrol edin.' },
    ],
  },
  // ==================== BATCH 5: TOOLS 41-45 ====================

  'tiktok-username-generator': {
    slug: 'tiktok-username-generator',
    name: 'TikTok Kullanıcı Adı Oluşturucu',
    title: 'Ücretsiz AI TikTok Kullanıcı Adı Oluşturucu',
    description: 'Tarzınıza uygun benzersiz TikTok kullanıcı adları oluşturun. AI\'mız öne çıkmanıza ve takipçi kitlenizi büyütmenize yardımcı olacak akılda kalıcı, trend isimler oluşturur.',
    metaDescription: 'Tarzınıza uygun benzersiz TikTok kullanıcı adları oluşturun. AI\'mız öne çıkmanıza ve takipçi kitlenizi büyütmenize yardımcı olacak akılda kalıcı, trend isimler oluşturur.',
    inputLabel: 'Kendinizi veya içeriğinizi tanımlayın...',
    inputPlaceholder: 'örn. Ofis hayatı hakkında skeçler yapan komedi içerik oluşturucu',
    buttonText: 'Kullanıcı Adları Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Kullanıcı adı stili',
        choices: ['Trend/Eğlenceli', 'Profesyonel', 'Niş Odaklı', 'Kişilik Odaklı', 'İsim Tabanlı'],
        default: 'Trend/Eğlenceli',
        type: 'select',
      },
      {
        name: 'content_niche',
        label: 'İçerik nişi',
        choices: ['Eğlence/Komedi', 'Fitness/Sağlık', 'Güzellik/Moda', 'Yemek/Mutfak', 'Eğitim/İpuçları', 'Yaşam Tarzı/Vlog', 'Diğer'],
        default: 'Eğlence/Komedi',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert TikTok personal branding consultant specializing in creating memorable, discoverable usernames for the TikTok platform. Your role is to generate username ideas that resonate with TikTok's young, trend-aware audience while reflecting creator identity.
## TIKTOK USERNAME REQUIREMENTS
- Maximum 24 characters
- Allowed: letters, numbers, underscores, periods
- Must be unique on platform
- Case insensitive
- Can be changed (with limitations)
## TIKTOK USERNAME CHARACTERISTICS
**Platform Culture:**
- Casual and fun tone
- Personality-forward
- Trend-aware
- Often playful or witty
- Less corporate than LinkedIn
**Successful Patterns:**
- Short and punchy
- Easy to remember from quick videos
- Sounds good when spoken
- Works in duets and stitches
- Reflects content niche
## TIKTOK USERNAME STYLES
### 1. Name-Based
- First name + descriptor
- Name + niche
- Examples: emmacooks, mikefitness, sarahstyle
### 2. Niche-Focused
- Content description handle
- What you post about
- Examples: dailyrecipes, fittips, budgethacks
### 3. Personality-Driven
- Character or vibe focused
- Personality descriptors
- Examples: chaoticcooking, anxiouschef, lazyworkouts
### 4. Creator Brand
- Established brand names
- Business identity
- Examples: [brandname]official, [business]hq
### 5. Playful/Trendy
- Wordplay and puns
- Current slang integration
- Examples: chefmode, fitcheck, slaywithsarah
### 6. The[Niche][Person]
- Common TikTok pattern
- Examples: themealprepking, theplantgirl
Style: {{style}}
Content Niche: {{content_niche}}
IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      {
        title: 'Yeni içerik oluşturucu kimliği',
        description: 'Yeni TikTok içerik oluşturucuları platform kimliklerini oluşturmak için Kullanıcı Adı Oluşturucuyu kullanır. İçerik odağı, kişilik özellikleri ve ilgi alanlarını girerek TikTok kitlesiyle uyumlu kullanıcı adı fikirleri oluşturur.',
      },
      {
        title: 'İçerik nişi markalaması',
        description: 'Fitness, yemek, komedi veya güzellik gibi belirli nişlere odaklanan içerik oluşturucular, içerik odaklarını hemen ileten kullanıcı adları bulmak için oluşturucuyu kullanır.',
      },
      {
        title: 'Marka ve işletme TikTok lansmanı',
        description: 'TikTok varlığı başlatan işletmeler, marka ile uyumlu ancak TikTok\'un rahat, yaratıcı kültürüne uyan kullanıcı adları bulmak için oluşturucuyu kullanır.',
      },
    ],
    faqs: [
      { question: 'TikTok kullanıcı adı gereksinimleri nelerdir?', answer: 'TikTok kullanıcı adları 24 karaktere kadar olabilir, harfler, sayılar, alt çizgiler ve noktalar kullanılabilir.' },
      { question: 'TikTok kullanıcı adımı değiştirebilir miyim?', answer: 'Evet, ayarlardan değiştirebilirsiniz. Ancak tekrar değiştirmeden önce bekleme süresi olabilir.' },
      { question: 'TikTok kullanıcı adım komik mi yoksa profesyonel mi olmalı?', answer: 'İçeriğinize bağlıdır. TikTok kültürü rahat ve eğlencelidir, bu yüzden profesyonel içerik oluşturucular bile yaklaşılabilir kullanıcı adları kullanır.' },
      { question: 'TikTok kullanıcı adımı nasıl akılda kalıcı yaparım?', answer: 'Kısa, telaffuzu kolay ve içeriğinizle ilgili tutun. Aliterasyon veya zekice kelime oyunları yardımcı olur.' },
      { question: 'TikTok\'ta gerçek adımı kullanmalı mıyım?', answer: 'Gerçek adınız kişisel markalaşma için iyi çalışır. Yaratıcı isimler içerik odaklı hesaplar için daha iyi olabilir.' },
      { question: 'Tercih ettiğim kullanıcı adı alınmışsa ne yapmalıyım?', answer: 'Nişinizi ekleyin, alt çizgi kullanın veya ayırt edici bir tanımlayıcı ekleyin.' },
      { question: 'TikTok kullanıcı adım Instagram ile eşleşmeli mi?', answer: 'Platformlar arası tutarlı kullanıcı adları takipçilerin sizi her yerde bulmasına yardımcı olur.' },
      { question: 'TikTok kullanıcı adları keşfedilebilirliği etkiler mi?', answer: 'Alakalı anahtar kelimeler içeren kullanıcı adları aramada yardımcı olabilir. Ancak içerik kalitesi daha önemlidir.' },
      { question: 'Kullanıcı adım TikTok büyümesi için ne kadar önemli?', answer: 'Kullanıcı adınız ilk izlenimdir, ancak içerik kalitesi büyüme için daha önemlidir.' },
      { question: 'TikTok kullanıcı adımda sayı kullanmalı mıyım?', answer: 'Rastgele sayılardan kaçının. Anlamlı sayılar çalışabilir, ancak sadece harfli kullanıcı adları genellikle daha profesyonel görünür.' },
    ],
  },

  'youtube-channel-description-generator': {
    slug: 'youtube-channel-description-generator',
    name: 'YouTube Kanal Açıklaması Oluşturucu',
    title: 'Ücretsiz AI YouTube Kanal Açıklaması Oluşturucu',
    description: 'Abone çeken etkileyici YouTube kanal açıklaması oluşturun. AI\'mız içeriğinizi sergileyen ve kitlenizi büyüten SEO optimize edilmiş açıklamalar oluşturur.',
    metaDescription: 'Abone çeken etkileyici YouTube kanal açıklaması oluşturun. AI\'mız içeriğinizi sergileyen ve kitlenizi büyüten SEO optimize edilmiş açıklamalar oluşturur.',
    inputLabel: 'YouTube kanalınızı tanımlayın...',
    inputPlaceholder: 'örn. Bütçe akıllı telefonlar ve cihazlara odaklanan teknoloji inceleme kanalı',
    buttonText: 'Açıklama Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Kanal tonu',
        choices: ['Profesyonel', 'Samimi', 'Coşkulu', 'Bilgilendirici', 'Rahat'],
        default: 'Samimi',
        type: 'select',
      },
      {
        name: 'channel_type',
        label: 'Kanal türü',
        choices: ['Eğitici/Öğretici', 'Eğlence', 'Vlog/Yaşam Tarzı', 'Oyun', 'İş/Marka', 'İnceleme/Yorum'],
        default: 'Eğitici/Öğretici',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert YouTube strategist specializing in channel optimization and discoverability. Your role is to create compelling channel descriptions that clearly communicate channel value, improve searchability, and convert visitors into subscribers.
## YOUTUBE CHANNEL DESCRIPTION STRUCTURE
**Character Limit**: 1,000 characters
**Visible on**:
- About page (full description)
- Channel banner area (first ~200 characters)
- Search results (truncated)
## OPTIMAL DESCRIPTION ELEMENTS
### 1. Hook/Value Statement (First 1-2 sentences)
- What the channel is about
- What viewers will get
- Why they should subscribe
- Appears in search previews
### 2. Content Overview (Middle section)
- Types of videos you create
- Upload schedule if consistent
- Topics you cover
- What makes you different
### 3. Creator/Brand Info (Brief)
- Who you are
- Relevant credentials
- Why you're qualified
### 4. Call-to-Action (End)
- Subscribe invitation
- Notification reminder
- Social media links mention
### 5. Contact Information
- Business email
- Social media handles
- Website link
Tone: {{tone}}
Channel Type: {{channel_type}}
IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      {
        title: 'Kanal SEO optimizasyonu',
        description: 'YouTuberlar, YouTube ve Google arama sonuçlarında kanal görünürlüğünü artıran anahtar kelime zengin açıklamalar oluşturmak için Kanal Açıklaması Oluşturucuyu kullanır.',
      },
      {
        title: 'Abone dönüşümünü artırma',
        description: 'Kanal ziyaretçilerini abonelere dönüştürmek isteyen içerik oluşturucular, kanal değerini açıkça anlatan etkileyici açıklamalar oluşturmak için oluşturucuyu kullanır.',
      },
      {
        title: 'Verimli kanal kurulumu',
        description: 'Yeni YouTuberlar ve kanal başlatan işletmeler, hızlı bir şekilde profesyonel açıklamalar oluşturmak için oluşturucuyu kullanır.',
      },
    ],
    faqs: [
      { question: 'YouTube kanal açıklaması ne kadar uzun olmalı?', answer: 'YouTube 1.000 karaktere kadar izin verir. Etkili açıklamalar genellikle 500-800 karakter arasındadır.' },
      { question: 'Kanal açıklamamda ne olmalı?', answer: 'Kanalınızın ne hakkında olduğu, izleyicilerin ne öğreneceği, yükleme programı, kim olduğunuz ve iletişim bilgileri.' },
      { question: 'Kanal açıklaması SEO\'yu nasıl etkiler?', answer: 'Açıklamalar YouTube\'un içeriğinizi öneriler ve arama için anlamasına yardımcı olur. Alakalı anahtar kelimeler doğal olarak dahil edin.' },
      { question: 'Açıklamamı arama için nasıl optimize ederim?', answer: 'Hedef kitlenizin aradığı anahtar kelimeleri dahil edin, önemli bilgileri öne yükleyin ve düzenli güncelleyin.' },
      { question: 'Yükleme programımı dahil etmeli miyim?', answer: 'Evet, tutarlı bir programınız varsa. İzleyici beklentilerini belirler ve aboneliği teşvik edebilir.' },
      { question: 'Hangi harekete geçirici mesaj dahil etmeliyim?', answer: 'İzleyicileri abone olmaya ve bildirimleri etkinleştirmeye davet edin. Ne alacakları konusunda spesifik olun.' },
      { question: 'E-postamı açıklamaya dahil etmeli miyim?', answer: 'Evet, iş sorularına, işbirliklerine veya sponsorluklara açıksanız.' },
      { question: 'Kanal açıklamamı ne sıklıkla güncellemeliyim?', answer: 'İçerik odağınız veya yükleme programı önemli ölçüde değiştiğinde güncelleyin. Üç ayda bir gözden geçirin.' },
      { question: 'Kanal açıklamam sponsor almama yardımcı olabilir mi?', answer: 'Evet, nişinizi, kitlenizi ve etkileşiminizi açıkça belirten profesyonel bir açıklama kanalınızı sponsorlar için daha çekici kılar.' },
      { question: 'Kanal açıklamam videolarımın tonuyla eşleşmeli mi?', answer: 'Evet, açıklamanız kanalınızın kişiliğini ve içerik tarzını yansıtmalıdır.' },
    ],
  },

  'youtube-name-generator': {
    slug: 'youtube-name-generator',
    name: 'YouTube İsim Oluşturucu',
    title: 'Ücretsiz AI YouTube İsim Oluşturucu',
    description: 'Öne çıkan yaratıcı YouTube kanal isimleri oluşturun. AI\'mız abone çeken ve içerik nişinizi yansıtan akılda kalıcı, markalaşabilir isimler oluşturur.',
    metaDescription: 'Öne çıkan yaratıcı YouTube kanal isimleri oluşturun. AI\'mız abone çeken ve içerik nişinizi yansıtan akılda kalıcı, markalaşabilir isimler oluşturur.',
    inputLabel: 'Kanal içeriğinizi tanımlayın...',
    inputPlaceholder: 'örn. Indie oyunlara ve retro incelemelere odaklanan oyun kanalı',
    buttonText: 'İsimler Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'İsim stili',
        choices: ['İçerik Oluşturucu İsmi', 'Konu/Niş', 'Yaratıcı/Marka', 'Kişilik + Niş', 'Profesyonel'],
        default: 'Yaratıcı/Marka',
        type: 'select',
      },
      {
        name: 'content_type',
        label: 'İçerik türü',
        choices: ['Oyun', 'Eğitim/Öğretici', 'Eğlence', 'Vlog/Yaşam Tarzı', 'Teknoloji/İnceleme', 'Güzellik/Moda', 'Yemek/Mutfak', 'Fitness', 'İş', 'Diğer'],
        default: 'Eğlence',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert YouTube branding consultant specializing in creating memorable, searchable channel names. Your role is to generate channel name ideas that reflect content focus, are easy to remember, and help build a recognizable YouTube brand.
## YOUTUBE CHANNEL NAME CONSIDERATIONS
**Display Name vs Handle:**
- Display Name: More flexible, can include spaces, up to 100 characters
- Handle: @username format, similar to other platforms, must be unique
- Both contribute to brand identity
## EFFECTIVE CHANNEL NAME PATTERNS
### Pattern 1: Creator Name
- Full name (John Smith)
- First name only (Peter)
- Stylized name (JohnnyVids)
- Best for personal brands
### Pattern 2: Topic/Niche Name
- Describes content clearly
- Examples: TechReviews, DailyGardening, DIYProjects
- Best for topic-focused channels
### Pattern 3: Personality + Niche
- Combines who with what
- Examples: CrazyRussianHacker, AngryCop, LazyGameReviews
- Memorable and descriptive
### Pattern 4: Creative/Brand Name
- Unique coined names
- Examples: Vsauce, Veritasium, Linus Tech Tips
- Requires more branding effort
### Pattern 5: [Name] + [Media Indicator]
- Shows it's a media channel
- Examples: Philip DeFranco, CNN, Vice News
- Professional appearance
### Pattern 6: Question/Action Format
- Engaging, curiosity-driven
- Examples: How It's Made, What If
- Strong for educational content
## CHANNEL NAME QUALITIES
1. **Memorable**: Easy to recall after one exposure
2. **Speakable**: Easy to tell others ("check out [name] on YouTube")
3. **Searchable**: Contains discoverable keywords or is unique enough to find
4. **Scalable**: Allows for content evolution
5. **Brandable**: Works on merchandise, other platforms
6. **Available**: Domain and social handles available
Style: {{style}}
Content Type: {{content_type}}
IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      {
        title: 'İçerik oluşturucular ve YouTuberlar',
        description: 'Yeni YouTuberlar içerik nişlerine göre uyarlanmış benzersiz, akılda kalıcı kanal isimleri bulmak için İsim Oluşturucuyu kullanır.',
      },
      {
        title: 'Dijital pazarlama ajansları',
        description: 'YouTube kanalları başlatan müşterilerle çalışan pazarlama ajansları, hedef kitlelerle rezonans kuran isimler üzerinde beyin fırtınası yapmak için oluşturucuyu kullanır.',
      },
      {
        title: 'İşletme marka genişlemesi',
        description: 'Çevrimiçi varlıklarını YouTube\'a genişleten işletmeler, resmi kanallar için isim seçeneklerini keşfetmek üzere oluşturucuyu kullanır.',
      },
    ],
    faqs: [
      { question: 'İyi bir YouTube kanal ismi neyi içerir?', answer: 'İyi kanal isimleri akılda kalıcı, yazılması ve telaffuzu kolay, içerikle ilgili, aranabilecek kadar benzersiz ve esnek olmalıdır.' },
      { question: 'Kanal ismim içeriğimi tanımlamalı mı?', answer: 'Tanımlayıcı isimler içerik odağını hemen iletir ancak esnekliği sınırlayabilir. Yaratıcı isimler daha esnektir ancak daha fazla markalaşma çabası gerektirir.' },
      { question: 'Kanal isminin müsait olup olmadığını nasıl kontrol ederim?', answer: 'YouTube\'da tam ismi arayın, @handle müsaitliğini kontrol edin, web sitesi müsaitliği için alan adı kayıt sitelerini arayın.' },
      { question: 'YouTube kanal ismimi daha sonra değiştirebilir miyim?', answer: 'Evet, ancak isim değiştirmek mevcut aboneleri karıştırabilir ve marka tanınırlığını etkileyebilir.' },
      { question: 'Kanalım için gerçek adımı kullanmalı mıyım?', answer: 'Gerçek adınız kişisel markalar için iyi çalışır. Yaratıcı isimler eğlence odaklı içerik için daha iyi olabilir.' },
      { question: 'Kanal ismi büyüme için ne kadar önemli?', answer: 'Kanal isminiz ilk izlenimleri ve aranabilirliği etkiler, ancak içerik kalitesi büyüme için daha önemlidir.' },
      { question: 'Kanal ismim diğer sosyal medyamla eşleşmeli mi?', answer: 'Platformlar arası tutarlılık takipçilerin sizi her yerde bulmasına ve marka tanınırlığını güçlendirmesine yardımcı olur.' },
      { question: 'Tercih ettiğim kanal ismi alınmışsa ne yapmalıyım?', answer: 'Varyasyonları deneyin: nişinizi ekleyin, bir tanımlayıcı dahil edin veya benzersiz bir varyasyon oluşturun.' },
      { question: 'Kanal isimleri YouTube SEO\'yu etkiler mi?', answer: 'Alakalı anahtar kelimeler içeren kanal isimleri aramalarda yardımcı olabilir. Ancak benzersiz, markalaşabilir isimler de doğru optimizasyonla iyi sıralama alabilir.' },
      { question: 'Kanal ismime "YouTube" dahil etmeli miyim?', answer: 'Genellikle hayır. Gereksizdir, değerli karakterler kullanır ve çapraz platform markalaşması için iyi çalışmaz.' },
    ],
  },

  'youtube-video-description-generator': {
    slug: 'youtube-video-description-generator',
    name: 'YouTube Video Açıklaması Oluşturucu',
    title: 'Ücretsiz AI YouTube Video Açıklaması Oluşturucu',
    description: 'İzlenmeleri artıran SEO optimize edilmiş YouTube açıklamaları oluşturun. AI\'mız videoların daha yüksek sıralamasına yardımcı olan kancalar, zaman damgaları ve anahtar kelimelerle etkileyici açıklamalar oluşturur.',
    metaDescription: 'İzlenmeleri artıran SEO optimize edilmiş YouTube açıklamaları oluşturun. AI\'mız videoların daha yüksek sıralamasına yardımcı olan kancalar, zaman damgaları ve anahtar kelimelerle etkileyici açıklamalar oluşturur.',
    inputLabel: 'Video içeriğinizi tanımlayın...',
    inputPlaceholder: 'örn. Yeni başlayanlar için Lightroom\'da fotoğraf düzenleme eğitimi',
    buttonText: 'Açıklama Oluştur',
    maxLength: 2048,
    options: [
      {
        name: 'video_type',
        label: 'Video türü',
        choices: ['Öğretici/Eğitici', 'Eğlence/Vlog', 'İnceleme/Ürün', 'Oyun', 'Haber/Yorum', 'Müzik/Performans'],
        default: 'Öğretici/Eğitici',
        type: 'select',
      },
      {
        name: 'include_timestamps',
        label: 'Zaman damgası şablonu dahil et',
        choices: ['Evet', 'Hayır'],
        default: 'Evet',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert YouTube SEO specialist and content strategist. Your role is to create compelling, optimized video descriptions that improve search rankings, provide value to viewers, and drive engagement actions like likes, subscribes, and clicks.
## YOUTUBE VIDEO DESCRIPTION STRUCTURE
**Character Limit**: 5,000 characters
**Visible Preview**: First ~100-200 characters shown before "show more"
**SEO Impact**: Descriptions affect search rankings and suggested video appearances
## OPTIMAL DESCRIPTION ANATOMY
### 1. Above-the-Fold (First 100-200 characters)
- Hook or key value statement
- Primary keywords included
- Reason to watch
- Appears in search results
### 2. Video Summary (Next 150-300 words)
- What the video covers
- Key topics or chapters
- What viewers will learn/see
- Additional context
### 3. Timestamps (If applicable)
- Chapter markers for longer videos
- Improves viewer experience
- Can appear in search results
- Format: 0:00 Introduction
### 4. Links Section
- Mentioned resources
- Product links
- Social media profiles
- Affiliate/sponsor disclosures
### 5. About/Boilerplate
- Brief channel description
- Subscribe CTA
- Regular links
### 6. Tags/Hashtags
- 3-5 relevant hashtags
- Placed at end
- First 3 appear above title
Video Type: {{video_type}}
Include Timestamps: {{include_timestamps}}
IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      {
        title: 'SEO optimize edilmiş video açıklamaları',
        description: 'YouTuberlar, arama sıralamalarını ve görünürlüğü artıran açıklamalar oluşturmak için Video Açıklaması Oluşturucuyu kullanır.',
      },
      {
        title: 'Verimli toplu video açıklaması oluşturma',
        description: 'Birden fazla video yöneten içerik oluşturucular, açıklama oluşturmayı kolaylaştırmak için oluşturucuyu kullanır.',
      },
      {
        title: 'Artan izleyici etkileşimi',
        description: 'Etkileşim metriklerini iyileştirmek isteyen içerik oluşturucular, net harekete geçirici mesajlar ve yararlı zaman damgaları içeren açıklamalar oluşturmak için oluşturucuyu kullanır.',
      },
    ],
    faqs: [
      { question: 'YouTube video açıklaması ne kadar uzun olmalı?', answer: 'YouTube 5.000 karaktere kadar izin verir. SEO avantajları için en az 200-300 kelime hedefleyin. İlk 100-200 karakter en önemlidir.' },
      { question: 'Açıklamamın ilk satırına ne koymalıyım?', answer: 'Birincil anahtar kelimenizi ve izleyicilere videodan ne alacaklarını anlatan etkileyici bir kanca dahil edin.' },
      { question: 'Açıklamalardaki zaman damgaları nasıl çalışır?', answer: 'Zaman damgaları videonuzda tıklanabilir bölümler oluşturur. "0:00 Giriş" formatında zaman ve etiket ile biçimlendirin.' },
      { question: 'Video açıklamalarına hashtag dahil etmeli miyim?', answer: 'Evet, açıklamanızın sonunda 3-5 alakalı hashtag. İlk üç hashtag video başlığınızın üzerinde görünür.' },
      { question: 'Video açıklamaları SEO\'yu nasıl etkiler?', answer: 'Açıklamalar YouTube\'un video içeriğinizi arama ve öneriler için anlamasına yardımcı olur.' },
      { question: 'Her video aynı açıklama formatına mı sahip olmalı?', answer: 'Tutarlı bir yapıya sahip olmak iyidir, ancak ana açıklamayı her videonun spesifik içeriğine uyarlayın.' },
      { question: 'Açıklamalara hangi bağlantıları dahil etmeliyim?', answer: 'Videoda bahsedilen kaynaklar, alakalı ürün bağlantıları, sosyal medya profilleri, abone ol bağlantısı ve ilgili videolara bağlantılar.' },
      { question: 'Affiliate bağlantılarını düzgün şekilde nasıl açıklarım?', answer: 'Affiliate bağlantılarının yakınına "Yukarıdaki bazı bağlantılar affiliate bağlantılarıdır" gibi net açıklama ekleyin.' },
      { question: 'Benzer videolar için farklı açıklamalar yazmam gerekiyor mu?', answer: 'Evet, her video benzersiz bir açıklamaya sahip olmalıdır. Yinelenen açıklamalar SEO\'ya zarar verebilir.' },
      { question: 'Video açıklamalarını ne sıklıkla güncellemeliyim?', answer: 'Bağlantılar değiştiğinde, içerik güncelliğini yitirdiğinde veya yeni CTA\'lar eklemek istediğinizde güncelleyin.' },
    ],
  },

  'rewording-tool': {
    slug: 'rewording-tool',
    name: 'Yeniden İfade Aracı',
    title: 'Ücretsiz AI Yeniden İfade Aracı',
    description: 'AI aracımızla metni anında yeniden ifade edin ve yeniden yazın. Netliği artırmak, tonu değiştirmek veya benzersiz içerik oluşturmak için cümleleri ve paragrafları dönüştürün.',
    metaDescription: 'AI aracımızla metni anında yeniden ifade edin ve yeniden yazın. Netliği artırmak, tonu değiştirmek veya benzersiz içerik oluşturmak için cümleleri ve paragrafları dönüştürün.',
    inputLabel: 'Yeniden ifade edilecek metni girin...',
    inputPlaceholder: 'Yeniden ifade etmek için metninizi buraya yapıştırın...',
    buttonText: 'Metni Yeniden İfade Et',
    maxLength: 4096,
    options: [
      {
        name: 'tone',
        label: 'Hedef ton',
        choices: ['Resmi/Profesyonel', 'Rahat/Konuşma Tarzı', 'Akademik/Bilimsel', 'Yaratıcı/İlgi Çekici', 'Basitleştirilmiş/Sade'],
        default: 'Rahat/Konuşma Tarzı',
        type: 'select',
      },
      {
        name: 'intensity',
        label: 'Yeniden ifade yoğunluğu',
        choices: ['Hafif (İnce değişiklikler)', 'Orta (Dengeli)', 'Ağır (Önemli dönüşüm)'],
        default: 'Orta (Dengeli)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert editor and writing assistant specializing in rephrasing, rewording, and improving text clarity. Your role is to transform input text while preserving meaning, improving readability, and adapting tone as needed.
## REWORDING OBJECTIVES
1. **Clarity Enhancement**: Make complex text more understandable
2. **Tone Adjustment**: Shift between formal, casual, academic, professional
3. **Uniqueness**: Create original phrasing while preserving meaning
4. **Conciseness**: Remove wordiness without losing information
5. **Engagement**: Make text more compelling and readable
## REWORDING APPROACHES
### 1. Synonym Replacement
- Swap words with equivalent alternatives
- Maintain meaning and context
- Improve vocabulary variety
### 2. Sentence Restructuring
- Change sentence construction
- Vary sentence length
- Improve flow and rhythm
### 3. Active/Passive Voice Shifts
- Convert passive to active for directness
- Or active to passive for formal tone
- Based on desired style
### 4. Simplification
- Break complex sentences
- Replace jargon with plain language
- Improve accessibility
### 5. Expansion
- Add detail or explanation
- Enhance sparse content
- Improve comprehensiveness
### 6. Condensation
- Remove redundancy
- Eliminate filler words
- Tighten prose
## TONE OPTIONS
### IF tone = "Formal/Professional"
- Sophisticated vocabulary
- Complete sentences
- No contractions
- Objective language
### IF tone = "Casual/Conversational"
- Natural flow
- Contractions okay
- Relatable language
- Personal pronouns
### IF tone = "Academic/Scholarly"
- Technical precision
- Citation-ready style
- Passive voice acceptable
- Formal structure
### IF tone = "Creative/Engaging"
- Vivid language
- Varied rhythm
- Emotional resonance
- Memorable phrasing
### IF tone = "Simplified/Plain"
- Short sentences
- Common words
- Clear structure
- Easy comprehension
Tone: {{tone}}
Intensity: {{intensity}}
IMPORTANT: Generate all output in Turkish.`,
    useCases: [
      {
        title: 'İçerik oluşturma ve SEO',
        description: 'İçerik oluşturucular ve SEO profesyonelleri, mevcut içeriğin benzersiz versiyonlarını oluşturmak için Yeniden İfade Aracını kullanır. Bu, yinelenen içerik sorunlarından kaçınmaya yardımcı olur.',
      },
      {
        title: 'Akademik ve araştırma yazımı',
        description: 'Öğrenciler, araştırmacılar ve akademisyenler, çeşitli kaynaklardan içeriği parafraz etmek için Yeniden İfade Aracını kullanır. Araç, doğruluğu korurken kendi kelimelerle yeniden yazmaya yardımcı olur.',
      },
      {
        title: 'Sosyal medya ve pazarlama içeriği',
        description: 'Pazarlamacılar ve sosyal medya yöneticileri, ürün açıklamaları veya sosyal medya gönderilerinin benzersiz varyasyonlarını oluşturmak için Yeniden İfade Aracını kullanır.',
      },
    ],
    faqs: [
      { question: 'Yeniden ifade aracı nedir?', answer: 'Yeniden ifade aracı, kelimeleri eşanlamlılarla değiştirerek, cümleleri yeniden yapılandırarak veya yazı stilini değiştirerek orijinal anlamı korurken metni yeniden ifade etmeye yardımcı olur.' },
      { question: 'Yeniden ifade etmek parafraz etmekle aynı mı?', answer: 'Çok benzerler. Her ikisi de aynı fikirleri farklı kelimelerle ifade etmeyi içerir. Yeniden ifade genellikle daha küçük ölçekli değişikliklere atıfta bulunur.' },
      { question: 'Bu sadece eşanlamlı kullanmaktan nasıl farklı?', answer: 'Kaliteli yeniden ifade basit eşanlamlı değişikliğinin ötesine geçer. Cümleleri yeniden yapılandırır, gramer yapılarını değiştirir ve akışı iyileştirir.' },
      { question: 'Yeniden ifade edilmiş içeriği intihal endişesi olmadan kullanabilir miyim?', answer: 'Yeniden ifade benzersiz ifade oluşturmaya yardımcı olur, ancak kendinize ait olmayan fikirler için orijinal kaynakları yine de belirtmelisiniz.' },
      { question: 'Hangi tür metinleri yeniden ifade edebilirim?', answer: 'Makaleler, blog yazıları, denemeler, ürün açıklamaları, e-postalar, sosyal medya içeriği, akademik makaleler ve daha fazlası dahil her türlü metni yeniden ifade edebilirsiniz.' },
      { question: 'Daha iyi yeniden ifade sonuçları nasıl alırım?', answer: 'Hedefiniz hakkında net bağlam sağlayın, istenen tonu belirtin ve hafif düzenleme mi yoksa önemli dönüşüm mü istediğinizi belirtin.' },
      { question: 'Yeniden ifade metnimin anlamını değiştirir mi?', answer: 'Kaliteli yeniden ifade, ifadeyi değiştirirken temel anlamı korur. Ancak özellikle teknik içerik için her zaman gözden geçirin.' },
      { question: 'Bu araç yazmamı daha resmi veya rahat yapabilir mi?', answer: 'Evet, ton ayarı temel bir özelliktir. Rahat yazıyı iş belgeleri için profesyonel dile dönüştürebilir veya tersini yapabilirsiniz.' },
      { question: 'Bu dilbilgisi kontrolünden nasıl farklı?', answer: 'Dilbilgisi denetleyicileri mevcut metindeki hataları düzeltir. Yeniden ifade araçları fikirlerin nasıl ifade edildiğini dönüştürür.' },
      { question: 'Her zaman yeniden ifade edilmiş versiyonu kabul etmeli miyim?', answer: 'Hayır, her zaman gözden geçirin ve düzenleyin. AI yeniden ifadesi iyileştirme gerektirebilecek bir başlangıç noktasıdır.' },
    ],
  },
};
