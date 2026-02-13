import { SeoToolConfig } from '../seo-tools-config.types';

export const seoToolsTr: Record<string, SeoToolConfig> = {
  'keyword-generator-tool': {
    slug: 'keyword-generator-tool',
    name: 'Anahtar Kelime Oluşturucu',
    title: 'Ucretsiz Anahtar Kelime Oluşturucu',
    description: 'SEO ve içerik pazarlama kampanyalarınız için binlerce anahtar kelime fikri bulun. Arama hacmi, anahtar kelime zorluğu ve TBM verileri edinin.',
    metaDescription: 'Herhangi bir tohum terimden anahtar kelime fikirleri oluşturun. 15\'ten fazla ülke için arama hacmi, zorluk ve TBM verilerini görün — ücretsiz, kayıt gerektirmez.',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Bir tohum anahtar kelime girin',
    inputPlaceholder: 'ör. e-posta pazarlama',
    buttonText: 'Anahtar Kelimeleri Bul',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'keyword-generator',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Ülke',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Amerika Birleşik Devletleri' },
          { value: '2826', label: 'Birleşik Krallık' },
          { value: '2276', label: 'Almanya' },
          { value: '2250', label: 'Fransa' },
          { value: '2724', label: 'İspanya' },
          { value: '2380', label: 'İtalya' },
          { value: '2076', label: 'Brezilya' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Avustralya' },
          { value: '2356', label: 'Hindistan' },
          { value: '2392', label: 'Japonya' },
          { value: '2528', label: 'Hollanda' },
          { value: '2792', label: 'Türkiye' },
          { value: '2410', label: 'Güney Kore' },
          { value: '2484', label: 'Meksika' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Anahtar Kelime', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Hacim', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'TBM', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Rekabet', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Her pazarda anahtar kelime fırsatlarını keşfedin',
        description: 'İngiltere pazarına genişliyor, Brezilya\'daki alıcıları hedefliyor veya Japonya\'da yerel bir kampanya yürütüyor olun — bu araç tek bir girişten 15\'ten fazla ülkedeki anahtar kelime talebini araştırmanızı sağlar. "E-posta pazarlama" gibi bir tohum anahtar kelime girin, açılır menüden hedef ülkenizi seçin ve gerçek kullanıcıların Google\'a yazdığı terimleri anında keşfedin. Bu özellikle birden fazla bölgede içerik dağıtımı planlayan uluslararası SEO ekipleri veya yeni bir pazara girmeden önce ürün talebini doğrulamak isteyen e-ticaret markaları için faydalıdır.',
        image: '/Keyword Generator/ideate keywords from a seed keyword in any location.png',
      },
      {
        title: 'Bir konunun arama ortamına kuşbakışı bir genel bakış elde edin',
        description: 'Bir içerik kümesine kaynak ayırmadan önce, konunun yeterli arama talebine sahip olup olmadığını ve rekabetin yönetilebilir düzeyde olup olmadığını bilmeniz gerekir. Tohum anahtar kelimenizi girdikten sonra araç, Toplam Anahtar Kelime (ör. 50 sonuç), bu anahtar kelimelerdeki Ortalama Hacim ve Ortalama Zorluk gibi bilgileri içeren bir özet panosu sunar. Bu anlık görüntü, içerik stratejistlerinin ve SEO yöneticilerinin bir konunun takip etmeye değer olup olmadığını veya daha uygun bir anahtar kelime alanına geçip geçmemeleri gerektiğini hızlıca değerlendirmelerini sağlar.',
        image: '/Keyword Generator/See a comprehensive overview of your see keyword from search volume to difficulty to cpc.png',
      },
      {
        title: 'İçerik önceliklendirmesi için anahtar kelime düzeyinde rekabeti değerlendirin',
        description: 'Sonuç tablosu, her anahtar kelimeyi aylık arama Hacmi, Anahtar Kelime Zorluk (KD) puanı, Tıklama Başına Maliyet (TBM) ve Rekabet endeksi ile birlikte gösterir. Bu çoklu metrik görünümü, en uygun noktayı bulmanızı sağlar: yüksek hacimli, düşük zorluklu ve anlamlı ticari niyete sahip anahtar kelimeler. PPC yöneticileri reklam harcamalarını tahmin etmek için TBM sütununu kullanabilirken, SEO uzmanları hangi anahtar kelimelerin uzun biçimli içerikle hedeflenmesi gerektiğine ve hangilerinin önce geri bağlantı stratejisine ihtiyaç duyduğuna karar vermek için KD puanını kullanabilir.',
        image: '/Keyword Generator/See any keywords competitive landscape from kyword difficulty to cpc.png',
      },
      {
        title: 'Konu otoritesi oluşturmak için anlamsal olarak ilişkili anahtar kelimeleri keşfedin',
        description: 'Google\'ın sıralama algoritması, bir konuyu kapsamlı şekilde ele alan sayfaları ödüllendirir. Bu görünüm, ilgili arama hacimleriyle birlikte anlamsal olarak ilişkili anahtar kelimelerin temiz bir listesini gösterir. Başlıklarınızda, gövde metninizde ve SSS bölümlerinizde yer alması gereken ikincil ve LSI (Gizli Anlamsal İndeksleme) anahtar kelimeleri belirlemek için bunu kullanın. Bu ilgili terimleri içeriğinize doğal olarak yerleştirerek arama motorlarına konu derinliği sinyali verirsiniz — bu, bilgilendirici sorgular için en güçlü sayfa içi sıralama faktörlerinden biridir.',
        image: '/Keyword Generator/see other semantically relevant keywords (secondary keyword) and their volume close to your main keyword.png',
      },
    ],
    faqs: [
      {
        question: 'Anahtar kelime oluşturucu nedir ve nasıl çalışır?',
        answer: 'Anahtar kelime oluşturucu, bir tohum anahtar kelime — sıralama yapmak istediğiniz geniş bir konu veya ifade — alarak gerçek kullanıcıların arama motorlarına yazdığı ilgili arama sorgularının bir listesini döndüren bir araştırma aracıdır. Analyze AI\'ın anahtar kelime oluşturucusu, bir arama terimleri veritabanını sorgulayarak çalışır, arama başına 50\'ye kadar anahtar kelime fikri sunar ve her anahtar kelimenin aylık arama hacmini, anahtar kelime zorluk puanını, tıklama başına maliyetini ve rekabet düzeyini gösterir. İşlem saniyeler sürer ve hesap veya giriş gerektirmez.',
      },
      {
        question: 'Bu araçta anahtar kelime zorluğu (KD) nasıl hesaplanır?',
        answer: 'Anahtar kelime zorluğu, belirli bir terim için ilk 10 organik sonuçta sıralama yapmanın ne kadar zor olacağını tahmin eden 0 ile 100 arasında bir puandır. Puan, şu anda Google\'ın ilk sayfasında sıralanan sayfaların geri bağlantı gücünü ve alan adı otoritesini dikkate alır. 0-10 arası KD kolay kabul edilir (yeni siteler rekabet edebilir), 11-30 arası orta düzeydir (sağlam içerik ve bazı geri bağlantılar gerektirir), 31-60 arası zordur (güçlü otorite ve bağlantı oluşturma gerektirir) ve 61-100 arası çok zordur (Wikipedia, Amazon veya büyük yayıncılar gibi yüksek otoriteli siteler tarafından domine edilir).',
      },
      {
        question: 'Arama hacmi ile anahtar kelime zorluğu arasındaki fark nedir?',
        answer: 'Arama hacmi, bir terim için aylık kaç kişinin arama yaptığını gösterir — talebi ölçer. Anahtar kelime zorluğu, o terim için arama sonuçlarının ne kadar rekabetçi olduğunu gösterir — arz tarafındaki sürtünmeyi ölçer. Aylık 10.000 aramaya sahip ancak KD değeri 85 olan bir anahtar kelime, 500 aramaya sahip ancak KD değeri 8 olan bir anahtar kelimeden daha az değerli olabilir, çünkü ikincisi için gerçekçi bir şekilde sıralama yapabilirsiniz. En iyi anahtar kelime stratejisi, her iki metriği de dengeleyerek yeterli talep ve ulaşılabilir rekabet düzeyine sahip terimleri bulur.',
      },
      {
        question: 'Sadece SEO yapıyorsam ücretsiz bir anahtar kelime aracından TBM verilerini nasıl kullanabilirim?',
        answer: 'TBM (Tıklama Başına Maliyet), reklamverenlerin Google Ads\'te o anahtar kelime için tek bir tıklamaya ne kadar ödemeye hazır olduğunu yansıtır. Ücretli kampanyalar yürütmeseniz bile, TBM ticari niyet için güçlü bir göstergedir. Yüksek TBM\'ye sahip anahtar kelimeler (ör. 15$+), işletmelerin bu aramaları değerli bulduğunu gösterir — yani satın alma kararına daha yakındırlar. Yüksek TBM\'li anahtar kelimeleri SEO içeriğiyle hedeflemek, daha yüksek oranlarda dönüşüm yapan trafik sağlayabilir ve TBM\'yi organik anahtar kelime araştırmasında en az kullanılan metriklerden biri yapar.',
      },
      {
        question: 'Arama başına kaç anahtar kelime oluşturabilirim?',
        answer: 'Her arama, girdiğiniz tohum terimden 50\'ye kadar anahtar kelime fikri döndürür. Daha fazla fikir üretmek için tohum anahtar kelimenizin varyasyonlarını deneyin, uzun kuyruklu değiştiriciler kullanın (ör. "e-posta pazarlama" yerine "startuplar için e-posta pazarlama") veya farklı ülkelerde arama yapın. Güçlü kullanıcılar genellikle 10-20 tohum anahtar kelime araması yapar ve sonuçları bir ana anahtar kelime listesinde derler, ardından bu liste tekilleştirilebilir ve hacim ile zorluğa göre önceliklendirilebilir.',
      },
      {
        question: 'Bu aracı yerel SEO anahtar kelime araştırması için kullanabilir miyim?',
        answer: 'Evet. Ülke seçici, Amerika Birleşik Devletleri, Birleşik Krallık, Almanya, Fransa, İspanya, İtalya, Brezilya, Kanada, Avustralya, Hindistan ve Japonya dahil 15\'ten fazla ülkeyi destekler. Ülkeyi değiştirerek o pazar için yerelleştirilmiş arama hacmi verilerini görebilirsiniz. Bu özellikle yerel işletmeler, bölgesel e-ticaret mağazaları ve çoklu konum SEO kampanyalarını yöneten ajanslar için değerlidir.',
      },
      {
        question: 'Anlamsal olarak ilişkili anahtar kelimeler nedir ve SEO için neden önemlidir?',
        answer: 'Anlamsal olarak ilişkili anahtar kelimeler, tam olarak aynı kelimeleri içermeseler bile ana anahtar kelimenizle kavramsal olarak bağlantılı terimlerdir. Örneğin, "e-posta pazarlama" tohum anahtar kelimesi için anlamsal olarak ilişkili terimler "bülten otomasyonu", "damlama kampanyaları" ve "abone etkileşimi" olabilir. Google, terimler arasındaki tematik ilişkileri anlamak için Doğal Dil İşleme (NLP) kullanır. Anlamsal olarak ilişkili anahtar kelimeleri doğal olarak içeren sayfalar, kapsamlı konu ele alışını işaret ettikleri için daha yüksek sıralama yapma eğilimindedir.',
      },
      {
        question: 'Bu araçla düşük rekabetli anahtar kelimeleri nasıl bulurum?',
        answer: 'Sonuç tablosunu KD (Anahtar Kelime Zorluğu) sütununa göre artan sırada sıralayın. KD değeri 0 ile 15 arasında, aylık arama hacmi 100\'ün üzerinde ve Rekabet puanı 30\'un altında olan anahtar kelimeleri arayın. Bunlar sizin "kolay kazanımlarınızdır" — orijinal ve derinlemesine içerikle iyi optimize edilmiş bir sayfanın, yoğun geri bağlantı yatırımı olmadan sıralama yapabileceği terimlerdir. Uzun kuyruklu anahtar kelimeler (3-5 kelime) genellikle daha düşük rekabete sahiptir çünkü büyük rakiplerin sıklıkla gözden kaçırdığı daha dar arama niyetlerini hedeflerler.',
      },
      {
        question: 'Rekabet puanı sütunu nedir ve anahtar kelime zorluğundan nasıl farklıdır?',
        answer: 'Rekabet puanı, ücretli aramada (Google Ads) bir anahtar kelime için teklif veren reklamveren sayısını ölçer. 100 puanı, neredeyse her reklam alanının dolu olduğu anlamına gelir — yoğun reklamveren rekabeti. Anahtar Kelime Zorluğu ise üst sıralardaki sayfaların geri bağlantı profillerine dayalı olarak organik sıralama rekabetini ölçer. Bir anahtar kelime yüksek ücretli rekabete ancak düşük organik zorluğa sahip olabilir (veya tam tersi). Akıllı pazarlamacılar her iki metriği çapraz referans yapar: düşük organik zorlukla birlikte yüksek ücretli rekabet, reklamlar için ödeme yapmak yerine SEO ile kazanabileceğiniz karlı bir anahtar kelimeye işaret eder.',
      },
      {
        question: 'Anahtar kelime sonuçlarını dışa aktarabilir miyim?',
        answer: 'Evet. Araç, sonuç tablosunun üst kısmında bir "CSV Dışa Aktar" düğmesi içerir. Bu, hacim, KD, TBM ve rekabet verileri dahil tam anahtar kelime listesini bir elektronik tabloya indirmenize olanak tanır. Buradan birden fazla aramadan gelen sonuçları birleştirebilir, özel filtreler uygulayabilir, içerik takvimleri oluşturabilir veya verileri yazarlar ve SEO ekip üyeleriyle paylaşabilirsiniz.',
      },
      {
        question: 'Anahtar kelime verileri ne sıklıkla güncellenir?',
        answer: 'Anahtar kelime veritabanı, doğruluk ve güncelliği sağlamak için düzenli olarak yenilenir. Arama hacmi rakamları, kısa vadeli ani artışları ve mevsimsel dalgalanmaları yumuşatan hareketli aylık ortalamalara dayanmaktadır. Trend olan konular veya hızla gelişen sektörler için, ortalama aylık hacimlerde henüz yansıtılmamış olabilecek gerçek zamanlı ivmeyi yakalamak amacıyla anahtar kelime aracı verilerini Google Trends ile çapraz referans yapmak iyi bir uygulamadır.',
      },
      {
        question: 'Bu anahtar kelime oluşturucuyu daha büyük bir SEO iş akışının parçası olarak nasıl kullanmalıyım?',
        answer: 'Anahtar kelime oluşturucu genellikle beş aşamalı bir SEO içerik iş akışının ilk adımıdır: (1) Keşif — bu aracı kullanarak tohum terimlerden anahtar kelime fikirleri üretin, (2) Değerlendirme — uygun hedefleri bulmak için KD ve hacme göre filtreleyin, (3) Kümeleme — anlamsal olarak ilişkili anahtar kelimeleri konu kümelerine gruplayın, (4) İçerik Oluşturma — birincil anahtar kelimeleri hedefleyen ve ikincil terimleri doğal olarak içeren sayfalar yazın, (5) Takip — sayfalarınızın zaman içindeki performansını izlemek için bir sıralama denetleyicisi kullanın.',
      },
    ],
  },

  'keyword-difficulty-checker': {
    slug: 'keyword-difficulty-checker',
    name: 'Anahtar Kelime Zorluk Denetleyicisi',
    title: 'Ucretsiz Anahtar Kelime Zorluk Denetleyicisi',
    description: 'Herhangi bir anahtar kelime için sıralama yapmanın ne kadar zor olduğunu kontrol edin. Arama hacmi ve rekabet verileriyle birlikte 0-100 arası bir zorluk puanı alın.',
    metaDescription: 'Herhangi bir anahtar kelimenin sıralama zorluğunu ücretsiz kontrol edin. Gerçekten sıralama yapabileceğiniz anahtar kelimeleri önceliklendirmek için KD puanı, arama hacmi ve TBM verilerini görün.',
    iconName: 'BarChart3',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Bir anahtar kelime girin',
    inputPlaceholder: 'ör. en iyi proje yönetim yazılımı',
    buttonText: 'Zorluğu Kontrol Et',
    resultType: 'keyword-difficulty',
    metricsToShow: ['keyword_difficulty', 'search_volume', 'cpc'],
    apiEndpoint: 'keyword-difficulty',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: 'Ülke',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Amerika Birleşik Devletleri' },
          { value: '2826', label: 'Birleşik Krallık' },
          { value: '2276', label: 'Almanya' },
          { value: '2250', label: 'Fransa' },
          { value: '2724', label: 'İspanya' },
          { value: '2380', label: 'İtalya' },
          { value: '2076', label: 'Brezilya' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Avustralya' },
          { value: '2356', label: 'Hindistan' },
          { value: '2392', label: 'Japonya' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Anahtar Kelime', sortable: true, type: 'text' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'search_volume', label: 'Hacim', sortable: true, type: 'number' },
      { key: 'cpc', label: 'TBM', sortable: true, type: 'currency' },
    ],
    useCases: [
      {
        title: 'Bir anahtar kelimenin hedeflemeye değer olup olmadığını hızlıca değerlendirin',
        description: 'Tek bir kelime içerik yazmadan önce, hedef anahtar kelimeniz için gerçekçi bir şekilde sıralama yapıp yapamayacağınızı bilmeniz gerekir. Herhangi bir anahtar kelime girin, açılır menüden 10\'dan fazla ülke arasından seçim yapın ve anında bir zorluk değerlendirmesi alın. Bu, ciddi her içerik stratejisindeki ilk filtredir — sizi, ilk 10 sonucun ulaşamayacağınız alan adı otoritelerine sahip siteler tarafından domine edildiği anahtar kelimelere haftalarca emek harcamaktan korur. Müşteri anahtar kelime taleplerini incelemek, blog konu fikirlerini doğrulamak veya beyin fırtınası oturumlarından gelen terimleri ön elemeden geçirmek için kullanın.',
        image: '/keyword difficulty checker/Check the difficulty of any keyword.png',
      },
      {
        title: 'Herhangi bir anahtar kelimenin 360 derece rekabet görüntüsünü elde edin',
        description: 'Sonuç panosu üç kritik metriği yan yana gösterir: Anahtar Kelime Zorluğu (ör. 58 "Zor"), Arama Hacmi (ör. 1.900/ay) ve TBM (ör. 32,40 $). Bu üçlü metrik görünümü, tek bakışta tam resmi sunar. Yüksek KD\'ye sahip ancak aynı zamanda yüksek TBM\'ye sahip bir anahtar kelime, ticari niyet çabayı haklı kıldığı için uzun vadeli otorite oluşturma stratejisiyle takip etmeye değer olabilir. Tersine, düşük KD\'li ve sıfır TBM\'li bir anahtar kelime trafik sağlayabilir ancak gelir getirmeyebilir. Veriye dayalı editoryal kararlar almak için bu panoyu kullanın.',
        image: '/keyword difficulty checker/see the keywords 360 competitiveness with cpc.png',
      },
      {
        title: 'Zorluk puanının gerçekte ne anlama geldiğini anlayın',
        description: 'KD göstergesi, sıralama zorluğunun görsel ve sezgisel bir temsilini sunar. Puan, renk kodlu ciddiyetle 0\'dan 100\'e kadar gider: yeşil (Kolay, 0-20), sarı (Orta, 21-40), turuncu (Zor, 41-60) ve kırmızı (Çok Zor, 61-100). Bu görselleştirme, anahtar kelime araştırmasını günlük SEO çalışmayan ve "bunun için sıralama yapabilir miyiz?" sorusuna hızlı, görsel bir cevap ihtiyacı duyan paydaşlara veya müşterilere sunarken özellikle faydalıdır.',
        image: '/keyword difficulty checker/see the keywords actual difficulty.png',
      },
      {
        title: 'İçeriğe yatırım yapmadan önce arama talebini doğrulayın',
        description: 'Arama hacmi, tüm anahtar kelime hedefleme kararlarının temelidir. Bu kart, aylık arama hacmi metriğini izole ederek, içerik oluşturmayı haklı kılmak için yeterli sayıda insanın bu terimi aktif olarak arayıp aramadığını doğrulamanızı sağlar. SEO\'da yaygın bir hata, sırf ilgili göründükleri için sıfır veya ihmal edilebilir hacme sahip anahtar kelimeleri hedeflemektir. Bu hızlı kontrol bunu önler — ve KD puanıyla birleştirildiğinde, fırsatın hem gerçek hem de ulaşılabilir olup olmadığını söyler.',
        image: '/keyword difficulty checker/see the keywords actual search volume.png',
      },
    ],
    faqs: [
      {
        question: 'Anahtar kelime zorluğu nedir ve içerik oluşturmadan önce neden kontrol etmeliyim?',
        answer: 'Anahtar kelime zorluğu (KD), belirli bir anahtar kelime için organik arama sonuçlarının ilk 10\'unda sıralama yapmanın ne kadar zor olacağını tahmin eden bir metriktir. Genellikle 0-100 ölçeğinde puanlanır. İçerik oluşturmadan önce KD\'yi kontrol etmek çok önemlidir çünkü sıralama şansı neredeyse sıfır olan sayfalara zaman ve para yatırmanızı önler. Bir anahtar kelimenin ilk 10 sonucu Forbes, HubSpot ve Wikipedia gibi sitelerden gelen — her biri yüzlerce yönlendiren alan adına sahip — sayfalardan oluşuyorsa, yeni veya orta otorite seviyesindeki bir site ciddi bir bağlantı kurma yatırımı olmadan rekabet etmekte zorlanacaktır.',
      },
      {
        question: 'Anahtar kelime zorluğu ile anahtar kelime rekabeti arasındaki fark nedir?',
        answer: 'Anahtar kelime zorluğu, organik arama rekabetçiliğini ölçer — Google\'ın ücretsiz sonuçlarında sıralama yapmanın ne kadar zor olduğunu. Şu anda ilk 10\'da bulunan sayfaların geri bağlantı gücüne dayanarak hesaplanır. Anahtar kelime rekabeti (bazen rekabet yoğunluğu olarak da adlandırılır), ücretli arama rekabetçiliğini ölçer — o anahtar kelime için Google Ads\'te kaç reklamverenin teklif verdiğini. Bir anahtar kelime organik olarak sıralama yapması kolay (düşük KD) ama yoğun ücretli rekabete (yüksek rekabet puanı) sahip olabilir veya tam tersi de geçerli olabilir.',
      },
      {
        question: 'Yeni bir web sitesi olarak hangi KD puanını hedeflemeliyim?',
        answer: 'Yeni web siteleri (1 yaşından küçük, 50\'den az yönlendiren alan adına sahip), KD değeri 0-15 olan anahtar kelimeleri hedeflemelidir. Bunlar genellikle büyük sitelerin özellikle optimize etmediği 3-5 kelimelik uzun kuyruklu sorgulardır. Alan adı otoriteniz tutarlı içerik oluşturma ve bağlantı kurma yoluyla büyüdükçe, kademeli olarak KD puanları 15-30, ardından 30-50 olan anahtar kelimeleri hedefleyebilirsiniz. İçerik kalitesinden bağımsız olarak, önemli bir alan adı otoritesi olmadan KD 50\'nin üzerindeki anahtar kelimeler için sıralama yapmaya çalışmak neredeyse her zaman başarısızlıkla sonuçlanır.',
      },
      {
        question: 'Bir sayfa geri bağlantısız yüksek zorluklu bir anahtar kelime için sıralama yapabilir mi?',
        answer: 'Bu son derece nadirdir. Anahtar kelime zorluğu büyük ölçüde ilk sıralardaki sayfalara yönelen geri bağlantıların sayısı ve kalitesi tarafından belirlenir. Ancak istisnai durumlar vardır: içeriğiniz mevcut sonuçlardan önemli ölçüde daha iyi bilgi kazanımı sağlıyorsa (ör. özgün araştırma, benzersiz veriler veya yeni bir format) ve alan adınız orta düzey otoriteye sahipse, Google sayfanızı daha yüksek pozisyonlarda test edebilir. Bununla birlikte, KD puanı 40\'ın üzerindeki anahtar kelimeler için geri bağlantılar, sürdürülebilir sıralamalar elde etmek açısından neredeyse her zaman bir ön koşuldur.',
      },
      {
        question: 'Aynı anahtar kelime farklı araçlarda neden farklı zorluk puanlarına sahip?',
        answer: 'Her SEO aracı, anahtar kelime zorluğunu kendi tescilli algoritması, tarama endeksi ve ağırlıklandırma metodolojisiyle hesaplar. Ahrefs ilk 10 sonuca giden yönlendiren alan adlarını vurgular, Moz kendi Sayfa Otoritesi ve Alan Adı Otoritesi metriklerini kullanır, SEMrush ise ek SERP özelliklerini ve içerik sinyallerini dahil eder. Bu yüzden bir anahtar kelime bir araçta KD 45 gösterirken diğerinde KD 62 gösterebilir. Mutlak sayılar, göreceli sıralamadan daha az önemlidir — zorluk karşılaştırmalarınızın tutarlı olması için her zaman aynı aracı kullanın.',
      },
      {
        question: 'TBM, anahtar kelime zorluğunu değerlendirmede nasıl bir rol oynar?',
        answer: 'TBM (Tıklama Başına Maliyet) organik sıralama zorluğunu doğrudan etkilemez, ancak kritik bağlam sağlar. KD 55 ve TBM 0,50 $ olan bir anahtar kelime, sıralamanın zor olduğunu ancak ticari getirinin düşük olduğunu gösterir. KD 55 ve TBM 32,40 $ olan bir anahtar kelime farklı bir hikaye anlatır: bu trafik işletmeler için son derece değerlidir, yani bunun için organik sıralama yapmak önemli miktarda reklam harcamasının yerini alabilir. İki anahtar kelime benzer KD puanlarına sahipse, daha yüksek TBM\'ye sahip olanı önceliklendirin — bu, daha güçlü alıcı niyeti ve yatırım getirisi potansiyeline işaret eder.',
      },
      {
        question: 'Belirli bir ülke için anahtar kelime zorluğunu nasıl kontrol ederim?',
        answer: 'Hedef pazarınızı seçmek için aracın giriş formundaki Ülke açılır menüsünü kullanın. Anahtar kelime zorluğu ülkeler arasında önemli ölçüde değişebilir çünkü rekabet ortamı farklılık gösterir. Amerika Birleşik Devletleri\'nde KD 60 olan bir anahtar kelime, Brezilya\'da KD 25 veya Almanya\'da KD 40 olabilir, çünkü bu pazarlarda daha az yüksek otorite sitesi rekabet etmektedir. ABD verilerine varsayılan olarak güvenmek yerine, her zaman hedef kitlenizin bulunduğu ülke için zorluğu kontrol edin.',
      },
      {
        question: 'Anahtar kelime zorluğu ile arama hacmi arasındaki ilişki nedir?',
        answer: 'Genel olarak, daha yüksek hacimli anahtar kelimeler daha yüksek zorluğa sahip olma eğilimindedir çünkü daha fazla web sitesi popüler arama terimleri için rekabet eder. Ancak bu her zaman böyle değildir. Bazı yüksek hacimli anahtar kelimeler şaşırtıcı derecede düşük zorluğa sahiptir (bunlar altın madeni fırsatlarıdır) ve bazı düşük hacimli anahtar kelimeler yüksek zorluğa sahiptir çünkü niş, otoriter uzmanlar tarafından domine edilmektedir. İdeal anahtar kelime hedefi, arama hacmi minimum eşiğinizin üzerinde olan ve KD puanı alan adınızın rekabet aralığında olan anahtar kelimedir.',
      },
      {
        question: 'Tüm yüksek zorluklu anahtar kelimelerden kaçınmalı mıyım?',
        answer: 'Hayır. Yüksek zorluklu anahtar kelimeler uzun vadeli içerik stratejinizin parçası olmalıdır — bunlar hedeflediğiniz idealleri temsil eder. Yaklaşım, önce aynı kümedeki daha kolay anahtar kelimeler için sıralama yaparak konu otoritesi oluşturmak, ardından zamanla daha zor terimler için rekabet etmek üzere iç bağlantılama ve birikmiş otoriteyi kullanmaktır. Bu daha kolay sayfalar sıralama yaptığında, alan adınızın konu otoritesini güçlendirir ve rekabetçi ana terimde şansınızı artırır.',
      },
      {
        question: 'Anahtar kelime zorluğunu ne sıklıkla yeniden kontrol etmeliyim?',
        answer: 'Temel hedef anahtar kelimeleriniz için anahtar kelime zorluğunu üç ayda bir yeniden kontrol edin. Rekabet ortamı yeni içerik yayınlandıkça, geri bağlantılar oluşturuldukça ve algoritma güncellemeleri dağıtıldıkça değişir. Altı ay önce KD 45 olan bir anahtar kelime, daha önce üst sıralarda yer alan bir sayfa geri bağlantı kaybetmişse veya dizinden çıkarılmışsa artık KD 35 olabilir. KD\'yi zaman içinde izlemek ayrıca kendi SEO çalışmalarınızın rekabet farkını kapatıp kapatmadığını takip etmenize de yardımcı olur.',
      },
      {
        question: 'KD renk kodlaması (yeşil, sarı, turuncu, kırmızı) ne anlama gelir?',
        answer: 'Renk kodlu gösterge, zorluk aralıklarını eşler: Yeşil (0-20), anahtar kelimenin sıralama yapması nispeten kolay olduğunu ve yeni veya düşük otorite siteler için uygun olduğunu gösterir. Sarı (21-40), orta düzey rekabet anlamına gelir — iyi içerik ve birkaç geri bağlantıya ihtiyacınız olacaktır. Turuncu (41-60), zorlu rekabeti gösterir — güçlü içerik, teknik SEO ve aktif bir bağlantı kurma stratejisi gerekir. Kırmızı (61-100), çok zorlu rekabeti işaret eder — genellikle yalnızca kapsamlı geri bağlantı profillerine sahip yüksek otoriteli alan adları bu pozisyonları elinde tutar.',
      },
      {
        question: 'Birden fazla anahtar kelimenin zorluğunu aynı anda kontrol edebilir miyim?',
        answer: 'Ücretsiz araç, hızlı kontroller ve bireysel anahtar kelime fikirlerini doğrulamak için ideal olan aynı anda bir anahtar kelimeyi kontrol eder. Toplu anahtar kelime zorluk analizi — düzinelerce veya yüzlerce anahtar kelimeyi aynı anda kontrol etmek — için genellikle Anahtar Kelime Oluşturucu aracından anahtar kelimeleri dışa aktarır ve bunları bir elektronik tabloda analiz edersiniz, ya da Anahtar Kelime Oluşturucu sonuç tablosunda zaten görünen KD sütununu kullanırsınız.',
      },
    ],
  },

  'website-authority-checker': {
    slug: 'website-authority-checker',
    name: 'Web Sitesi Otorite Denetleyicisi',
    title: 'Ucretsiz Web Sitesi Otorite Denetleyicisi',
    description: 'Herhangi bir web sitesinin organik arama otoritesini ücretsiz kontrol edin. Tahmini organik trafik, sıralanan anahtar kelimeler, ilk 10 pozisyonlar ve anahtar kelime sıralama dağılımını görün.',
    metaDescription: 'Herhangi bir web sitesinin otorite puanını ücretsiz kontrol edin. Alan adı gücünü, organik trafiği, sıralanan anahtar kelimeleri ve SERP pozisyon dağılımını anında görün.',
    iconName: 'Globe',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Bir alan adı girin',
    inputPlaceholder: 'ör. example.com',
    buttonText: 'Otoriteyi Kontrol Et',
    resultType: 'domain-authority',
    metricsToShow: ['domain_score', 'organic_traffic', 'ranked_keywords', 'top_10'],
    apiEndpoint: 'website-authority',
    freeResultLimit: 1,
    options: [],
    tableColumns: [
      { key: 'position', label: 'Pozisyon Aralığı', sortable: false, type: 'text' },
      { key: 'keywords', label: 'Anahtar Kelimeler', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Herhangi bir web sitesinin alan adı otoritesini saniyeler içinde kontrol edin',
        description: 'Her bağlantı oluşturma kararı, rakip analizi ve ortaklık değerlendirmesi tek bir soruyla başlar: bu alan adı ne kadar otoriter? Herhangi bir alan adını denetleyiciye girin, "Otoriteyi Kontrol Et"e tıklayın ve anında bir değerlendirme alın. İster bir konuk yazı fırsatını inceliyor, ister bir geri bağlantı adayını değerlendiriyor, ister alan adınızı rakiplerle kıyaslıyor olun — bu, bir web sitesinin genel gücünü ölçmenin en hızlı yoludur.',
        image: '/Website authority checker/Check the autority of any website.png',
      },
      {
        title: 'Tüm anahtar kelimeler genelinde SERP pozisyon dağılımını anlayın',
        description: 'Bu döküm, bir sitenin her SERP pozisyon aralığında kaç anahtar kelime için sıralama yaptığını gösterir: #1, #2-3, #4-10, #11-20 ve devamı. Bu dağılım, tek bir otorite sayısından daha derin bir hikaye anlatır. Bu bilgiyi kendi sitenizin büyüme yörüngesini değerlendirmek ve sıralamalarını gerçekçi bir şekilde zorlayabileceğiniz rakipleri belirlemek için kullanın.',
        image: '/Website authority checker/See any websites keywords ranking.png',
      },
      {
        title: 'Bir alan adının trafik ve sıralama ölçeğini değerlendirin',
        description: 'Metrik panosu Organik Trafik, toplam Sıralanan Anahtar Kelimeler ve 1-10 Pozisyonlarındaki Anahtar Kelimeleri gösterir. Bu sayılar, otorite puanını performans verileriyle bağlamsallaştırır. Bu çoklu metrik görünümü, tek metrikli karar vermeyi önler ve tam rekabet resmini sunar.',
        image: '/Website authority checker/See other details as traffick rankings positions.png',
      },
      {
        title: 'Ciddiyet derecelendirmesiyle gerçek otorite puanını görün',
        description: 'Alan Adı Puanı göstergesi, renk kodlu ciddiyet ve bir etiketle (ör. hubspot.com için "99 — Çok Güçlü") 0-100 arası bir derecelendirme gösterir. Görsel gösterge, otorite puanlarını anında yorumlanabilir kılar. Gerçekçi beklentiler belirlemek için bunu kullanın. Bu görselleştirme aynı zamanda müşteri raporlaması ve paydaş sunumları için de idealdir.',
        image: '/Website authority checker/See the actual authority score of your website. Score out of 100.png',
      },
    ],
    faqs: [
      {
        question: 'Web sitesi otoritesi nedir ve nasıl ölçülür?',
        answer: 'Web sitesi otoritesi (alan adı otoritesi veya alan adı gücü olarak da adlandırılır), bir alan adının genel sıralama gücünü, kendisine yönelen geri bağlantıların miktarı ve kalitesine dayanarak tahmin eden bir SEO metriğidir. Logaritmik bir ölçekte 0-100 arasında ölçülür; bu da yukarı çıktıkça puanınızı artırmanın katlanarak zorlaştığı anlamına gelir. 30 puanına temel bağlantı kurma çalışmalarıyla ulaşmak nispeten kolaydır, ancak 70\'den 80\'e çıkmak, 20\'den 30\'a çıkmaktan çok daha fazla yüksek kaliteli geri bağlantı gerektirir.',
      },
      {
        question: 'İyi bir web sitesi otorite puanı nedir?',
        answer: 'Otorite, rekabet ortamınıza göre görecelidir. 40 Alan Adı Puanı, rakiplerin ortalamasının 25 olduğu niş bir sektörde mükemmel olabilirken, rakiplerin ortalamasının 70 olduğu bir alanda zayıf kalır. Genel kıyaslama olarak: 0-20 yeni veya gelişmemiş, 21-40 gelişmekte (küçük ve orta ölçekli işletmelere özgü), 41-60 yerleşik (çoğu nişte rekabetçi), 61-80 güçlü (yüksek değerli anahtar kelimeler için rekabetçi) ve 81-100 elittir (büyük markalar, haber yayınları ve yüksek otoriteli platformlar).',
      },
      {
        question: 'Web sitesi otoritesi bir Google sıralama faktörü müdür?',
        answer: 'Google, "alan adı otoritesinin" algoritmasında doğrudan bir sıralama faktörü olmadığını kamuoyu önünde açıklamıştır. Ancak araştırmalar, alan adı otoritesi ile anahtar kelime sıralamaları arasında tutarlı bir güçlü korelasyon olduğunu göstermektedir. Pratik çıkarım şudur: Google üçüncü taraf otorite puanlarını doğrudan kullanmasa da, altta yatan sinyaller (geri bağlantı kalitesi, yönlendiren alan adı sayısı, bağlantı çeşitliliği) temel sıralama faktörleridir. Otorite puanları, bu sinyaller için mevcut en iyi göstergedir.',
      },
      {
        question: 'Alan Adı Puanı, Moz\'un Alan Adı Otoritesinden (DA) nasıl farklıdır?',
        answer: 'Her iki metrik de 0-100 ölçeğinde alan adı gücünü ölçmeyi amaçlar, ancak farklı hesaplama metodolojileri ve veri kaynakları kullanır. Moz\'un DA\'sı kendi bağlantı dizinine dayanır ve sıralama yeteneğini tahmin etmek için bir makine öğrenimi modeli kullanır. Diğer Alan Adı Puanı metrikleri kendi tarama dizinlerini ve hesaplama formüllerini kullanır. Puanlar birbirinin yerine kullanılamaz — bir site Moz\'da DA 45 ve başka bir araçta Alan Adı Puanı 52 alabilir. Önemli olan tutarlılıktır: tüm karşılaştırmalar için aynı aracı kullanın.',
      },
      {
        question: 'Web sitemin otorite puanını nasıl iyileştirebilirim?',
        answer: 'Alan adı otoritesini artırmanın tek güvenilir yolu, daha fazla benzersiz yönlendiren alan adından — özellikle kendileri de otoriter olan alan adlarından — geri bağlantı elde etmektir. Etkili stratejiler arasında şunlar yer alır: bağlantı almaya değer içerik oluşturma (özgün araştırmalar, kapsamlı rehberler, ücretsiz araçlar), sektörel yayınlarda misafir yazarlık, dijital PR ve medya erişimi, kırık bağlantı oluşturma, kaynak sayfası bağlantı kurma ve sektör profesyonelleriyle ilişkiler geliştirme.',
      },
      {
        question: 'Organik Trafik ve Sıralanan Anahtar Kelimeler metrikleri otorite hakkında bana ne söyler?',
        answer: 'Bu metrikler, otorite puanını performans verileriyle bağlamsallaştırır. Düşük organik trafikle birlikte yüksek otorite puanı, alan adının güçlü bir geri bağlantı profiline sahip olduğunu ancak zayıf içerik veya kötü anahtar kelime hedeflemesine sahip olduğunu gösterir. Orta düzey otoriteyle birlikte yüksek trafik, güçlü içeriğin bağlantı profilinin ötesinde performans gösterdiğine işaret eder. 1-10 Pozisyonlarındaki Anahtar Kelimeler metriği, bir alan adının gerçekte kaç anahtar kelimede ilk sayfada hakim olduğunu ortaya koyar — bu, rekabetçi otoritenin eylem halindeki en kesin ölçüsüdür.',
      },
      {
        question: 'Pozisyon dağılım tablosu nedir ve nasıl okunur?',
        answer: 'Pozisyon dağılım tablosu, bir alan adının farklı SERP pozisyonlarında kaç anahtar kelime için sıralama yaptığını döker: #1, #2-3, #4-10, #11-20, #21-30 ve devamı. Sağlıklı ve büyüyen bir web sitesi piramit şekli gösterir — #1 pozisyonunda daha az anahtar kelime, #2-10\'da daha fazla ve alt pozisyonlarda giderek artan sayıda. Anahtar kelimelerin çoğu #41-100 pozisyonlarında kümeleniyorsa, sitenin görünürlüğü var ancak ilk sayfaya çıkmak için gerekli otorite veya içerik kalitesinden yoksundur.',
      },
      {
        question: 'Web sitesi otoritesini geri bağlantı adaylarını değerlendirmek için kullanabilir miyim?',
        answer: 'Evet — bu en yaygın kullanım senaryolarından biridir. Geri bağlantı oluştururken, maksimum bağlantı değeri aktarımı için Alan Adı Puanı 30\'un üzerinde ve ideal olarak 50\'nin üzerinde olan sitelere öncelik verin. Ancak tek başına otorite puanı yeterli değildir. Ayrıca sitenin kaliteli içerik yayınlayıp yayınlamadığını, nişinizle ilgili tematik uyuma sahip olup olmadığını, gerçek organik trafik alıp almadığını ve doğal bir giden bağlantı profiline sahip olup olmadığını da kontrol edin.',
      },
      {
        question: 'Bazı web sitelerinin yüksek otoritesi olmasına rağmen neden düşük trafiği var?',
        answer: 'Bu birçok nedenden dolayı olur: site yıllar boyunca geri bağlantı biriktirmiş ancak arama anahtar kelimelerini hedefleyen aktif içerik oluşturmuyor, sitenin içeriği güncelliğini yitirmiş ve artık mevcut arama niyetiyle örtüşmüyor, site güçlü geri bağlantılara rağmen diğer kalite sorunları nedeniyle Google tarafından cezalandırılmış veya düşük hacimli bir niş alanda faaliyet gösteriyor ve ilk sayfa sıralamaları bile yoğun trafik üretmiyor.',
      },
      {
        question: 'Web sitesi otoritesi ne sıklıkla değişir?',
        answer: 'Otorite puanları, temel geri bağlantı verileri yeniden taranıp güncellendiğinde dalgalanır. Yeni geri bağlantılar puanınızı artırır; kaybedilen geri bağlantılar düşürür. Büyük değişikliklerin otorite metriklerine yansıması normalde 4-8 hafta sürer. Aktif olarak bağlantı kuran siteler için ayda 1-3 puanlık kademeli artışlar tipiktir. Ani düşüşler, önemli geri bağlantıların kaybını veya puanlama aracı tarafından yapılan bir yeniden hesaplamayı gösterebilir.',
      },
      {
        question: 'Web sitesi otoritesi ile bağlantı değeri arasındaki ilişki nedir?',
        answer: 'Web sitesi otoritesi esasen birikmiş bağlantı değerinin bir özetidir. Harici bir siteden gelen her geri bağlantı, alan adınıza bir miktar bağlantı değeri aktarır ve toplam birikmiş değer otorite puanınıza yansır. Daha yüksek otoriteye sahip yönlendiren alan adları daha fazla bağlantı değeri aktarır. Yüksek otoriteli alan adlarındaki sayfalar, alan adı düzeyindeki değeri miras alarak sıralamalarda bir avantaj elde eder.',
      },
      {
        question: 'Otorite puanımı artırmaya mı yoksa organik trafiğime mi odaklanmalıyım?',
        answer: 'Organik trafiğe odaklanın — otorite bu amaca ulaşmak için bir araçtır, başlı başına bir hedef değildir. En etkili strateji, eş zamanlı olarak bağlantı oluşturmak (otoriteyi artırmak) ve anahtar kelime hedefli içerik oluşturmaktır (trafiği yakalamak). Hedeflenmiş içerik olmadan yüksek otorite puanı trafik üretmez. Otorite olmadan harika içerik, rekabetçi anahtar kelimelerde sıralama yapmakta zorlanır. İkisi sinerjik olarak birlikte çalışır.',
      },
    ],
  },

  'serp-checker': {
    slug: 'serp-checker',
    name: 'SERP Denetleyicisi',
    title: 'Ucretsiz SERP Denetleyicisi',
    description: 'Herhangi bir anahtar kelime için Google arama sonuçlarını kontrol edin. İlk 10 organik pozisyonda kimin sıralandığını başlıklar, URL\'ler ve alan adlarıyla görün.',
    metaDescription: 'Herhangi bir ülkede herhangi bir anahtar kelime için Google\'ın en üst sonuçlarını analiz edin. SEO stratejinizi planlamak için sıralamaları, alan adlarını, URL\'leri ve toplam sonuçları görün.',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'keyword',
    inputLabel: 'Bir anahtar kelime girin',
    inputPlaceholder: 'ör. en iyi proje yönetim araçları',
    buttonText: 'SERP\'i Kontrol Et',
    resultType: 'serp-results',
    metricsToShow: ['total_results', 'organic_results'],
    apiEndpoint: 'serp-checker',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: 'Ülke',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Amerika Birleşik Devletleri' },
          { value: '2826', label: 'Birleşik Krallık' },
          { value: '2276', label: 'Almanya' },
          { value: '2250', label: 'Fransa' },
          { value: '2724', label: 'İspanya' },
          { value: '2380', label: 'İtalya' },
          { value: '2076', label: 'Brezilya' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Avustralya' },
          { value: '2356', label: 'Hindistan' },
          { value: '2392', label: 'Japonya' },
          { value: '2528', label: 'Hollanda' },
          { value: '2792', label: 'Türkiye' },
          { value: '2410', label: 'Güney Kore' },
          { value: '2484', label: 'Meksika' },
        ],
      },
    ],
    tableColumns: [
      { key: 'position', label: '#', sortable: true, type: 'number' },
      { key: 'title', label: 'Başlık', sortable: false, type: 'text' },
      { key: 'domain', label: 'Alan Adı', sortable: true, type: 'text' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: 'Herhangi bir ülkede herhangi bir anahtar kelime için Google SERP\'ini kontrol edin',
        description: 'Şu anda neyin sıralandığını anlamak, her SEO kampanyasının temelidir. Bir anahtar kelime girin, 15\'ten fazla seçenek arasından hedef ülkenizi seçin ve mevcut SERP manzarasını anında görün. Bu, rakiplerinizin kim olduğunu, hangi içerik formatlarının baskın olduğunu ve alanın ne kadar kalabalık olduğunu gösterir. Uluslararası SEO uzmanları, pazarlar arasındaki SERP yapılarını karşılaştırmak için ülke seçicisini kullanır.',
        image: '/SERP Checker/Check the SERP for any keyword for any given country.png',
      },
      {
        title: 'Sıralanan içerik türlerini ve alan adlarını analiz edin',
        description: 'SERP sonuç görüntüsü, Toplam Sonuçlar, Organik Sonuç sayısı ve gerçekte sıralanan sayfaları başlıkları, URL\'leri ve açıklamalarıyla birlikte gösterir. Bu, içerik formatı kalıplarını analiz etmenizi sağlar: En üst sonuçlar blog yazıları mı, ürün sayfaları mı, karşılaştırma makaleleri mi yoksa araçlar mı? Bu istihbarat, Google\'ın bu sorgu için hangi içerik formatını ödüllendirdiğini tam olarak söyler.',
        image: '/SERP Checker/Find the different types of content that rank on the SERP.png',
      },
      {
        title: 'Bir anahtar kelimeyi hedeflemeden önce SERP rekabetçiliğini değerlendirin',
        description: 'Bir anahtar kelimeye kaynak ayırmadan önce, kiminle rekabet edeceğinizi görmek için SERP Denetleyicisinden geçirin. SERP, büyük otoriteye sahip siteler (Amazon, Wikipedia, devlet siteleri) tarafından domine ediliyorsa, o anahtar kelime farklı bir yaklaşım gerektirebilir. SERP daha küçük veya daha yeni siteler içeriyorsa, sıralama için gerçekçi bir yol vardır.',
        image: '/SERP Checker/See how competitive any keyword is on the SERP.png',
      },
      {
        title: 'Hedef anahtar kelimeler için markanızın pozisyonunu takip edin',
        description: 'Ayrıntılı sonuç tablosu, her sıralama pozisyonu için başlık, alan adı ve tam URL gösterir. Sitenizin (veya rakibinizin) sonuçlarda görünüp görünmediğini bulmak için kaydırın. Sıralama takip verilerini doğrulamak, müşteri toplantılarından önce kritik anahtar kelimeleri kontrol etmek veya yeni yayınlanan bir sayfanın SERP\'e girip girmediğini doğrulamak için bunu kullanın.',
        image: '/SERP Checker/See your brands ranking for any keyword on the SERP.png',
      },
    ],
    faqs: [
      {
        question: 'SERP Denetleyicisi nedir ve neden ihtiyacım var?',
        answer: 'SERP (Arama Motoru Sonuç Sayfası) Denetleyicisi, kendi tarayıcınızın kişiselleştirme önyargıları olmadan herhangi bir ülkede herhangi bir anahtar kelime için gerçek Google arama sonuçlarını gösterir. Google\'da kendiniz arama yaptığınızda, sonuçlarınız arama geçmişiniz, konumunuz, cihazınız ve oturum açmış Google hesabınız tarafından etkilenir. SERP Denetleyicisi, sıralamaların tarafsız ve önyargısız bir görünümünü sağlar — ilk kez arama yapan bir kullanıcının göreceği aynı sonuçlar.',
      },
      {
        question: 'SERP Denetleyicisi konuma dayalı sonuçları nasıl ele alır?',
        answer: 'Araç, seçilen ülkenin Google dizininden aramaları simüle etmek için ülke seçicisini kullanır (örneğin, ABD için google.com, İngiltere için google.co.uk, Almanya için google.de). SERP yapısı ülkeler arasında önemli ölçüde farklılık gösterebilir — farklı alan adları sıralanır, farklı içerik formatları görünür ve hatta SERP özelliklerinin sayısı bile değişebilir. Her zaman hedef ülkeniz için SERP\'i kontrol edin, yalnızca ABD varsayılanını değil.',
      },
      {
        question: '"Toplam Sonuçlar" ve "Organik Sonuçlar" ne anlama gelir?',
        answer: '"Toplam Sonuçlar", Google\'ın eşleşen sayfalar için bildirdiği sayıdır. Bu, konu genişliğinin kaba bir göstergesidir ancak rekabet analizi için güvenilir değildir. "Organik Sonuçlar", birinci sayfada kaç geleneksel mavi bağlantı sonucunun göründüğünü sayar. Bir SERP olağan 10 yerine yalnızca 8 organik sonuç gösteriyorsa, kalan alan öne çıkan snippet\'ler, haritalar, videolar veya "İnsanlar şunu da soruyor" kutuları gibi SERP özellikleri tarafından işgal edilmiştir.',
      },
      {
        question: 'İçerik formatını belirlemek için SERP verilerini nasıl kullanabilirim?',
        answer: 'İlk 10 sonucu analiz edin ve kategorize edin: Nasıl yapılır rehberleri mi, liste makaleleri mi, araç sayfaları mı, karşılaştırma makaleleri mi, ürün sayfaları mı yoksa video sonuçları mı? 10 sonuçtan 7\'si liste makalesi ise, Google bu anahtar kelime için arayanların liste formatında içerik istediğini belirlemiştir. Farklı bir format oluşturmak büyük olasılıkla düşük performans gösterecektir. Baskın formatı takip edin, ardından derinlik, güncellik, benzersiz veriler veya daha iyi kullanıcı deneyimi ile farklılaşın.',
      },
      {
        question: 'SERP\'ler masaüstü ve mobil arasında neden farklılık gösterir?',
        answer: 'Google, masaüstü ve mobil arama için ayrı sıralama algoritmaları sürdürür. Mobil SERP\'ler mobil uyumlu sayfaları önceliklendirir, sayfa hızı metriklerini daha ağırlıklı değerlendirir ve farklı SERP özellikleri gösterir. Masaüstünde 3. sırada olan bir sayfa, kötü mobil deneyime sahipse mobilde 7. sıraya düşebilir. Kitleniz cihazlara dağılmışsa her zaman her iki versiyonu da kontrol edin ve Google mobil öncelikli dizinlemeyi kullandığı için mobil optimizasyonu önceliklendirin.',
      },
      {
        question: 'SERP özellikleri nedir ve tıklama oranımı nasıl etkiler?',
        answer: 'SERP özellikleri, Öne Çıkan Snippet\'ler, "İnsanlar şunu da soruyor" kutuları, video karuselleri, resim paketleri, Bilgi Panelleri, yerel harita paketleri ve alışveriş sonuçları dahil geleneksel olmayan sonuçlardır. Görünen her özellik, organik sonuçlara yapılan tıklamaları azaltır — bu "SERP özelliği kanibalizasyonu" olarak adlandırılan bir olgudur. Bir SERP özelliklerle doluysa, 1. sıradaki organik sıralama bile beklenenden daha az tıklama alabilir.',
      },
      {
        question: 'Belirli bir anahtar kelime için Google SERP\'leri ne sıklıkla değişir?',
        answer: 'SERP dalgalanması anahtar kelime türüne göre değişir. Her zaman geçerli bilgilendirici anahtar kelimeler, aylarca çok az değişen istikrarlı SERP\'lere sahip olabilir. Haberle ilgili ve trend olan anahtar kelimeler saatler içinde tam bir SERP değişimi yaşayabilir. Ticari ve rekabetçi anahtar kelimeler, sayfalar geri bağlantı kazanıp kaybettikçe ve algoritma güncellemeleri yayınlandıkça genellikle kademeli değişimler gösterir. Temel anahtar kelimeleriniz için SERP\'leri aylık kontrol etmek yeni rakipleri fark etmeye yardımcı olur.',
      },
      {
        question: 'SERP verilerini rekabetçi boşluk analizleri için kullanabilir miyim?',
        answer: 'Kesinlikle. Aynı anahtar kelimeyi birden fazla SERP kontrolünde arayın ve hangi alan adlarının sürekli olarak ilk 10\'da göründüğünü not edin. Hedef anahtar kelimelerinizin birçoğunda sıralanan alan adları, başlıca SEO rakiplerinizdir (bunlar iş rakiplerinizden farklı olabilir). Bu sıralanan sayfaların ortak noktalarını analiz edin — içerik uzunluğu, yapısı, geri bağlantı sayısı, içerik güncelliği — ve içeriğinizin üstün olabileceği boşlukları belirleyin.',
      },
      {
        question: 'Sayfam SERP\'te görünüyor ancak düşük bir pozisyonda olması ne anlama gelir?',
        answer: 'Sayfanız 11-30 pozisyonlarında (Google\'ın 2.-3. sayfası) görünüyorsa, bu Google\'ın içeriğinizi ilgili olarak tanıdığı ancak henüz birinci sayfa için yeterince otoriter veya kapsamlı görmediği anlamına gelir. Bu aslında olumlu bir sinyaldir — "vuruş mesafesi" bölgesindesiniz. Sizi birinci sayfaya taşıyabilecek iyileştirmeler arasında daha kapsamlı içerik eklemek, 3-5 kaliteli geri bağlantı oluşturmak, sayfa hızını artırmak ve destekleyici dahili bağlantılar eklemek yer alır.',
      },
      {
        question: 'SERP Denetleyicisini Öne Çıkan Snippet fırsatlarını bulmak için nasıl kullanırım?',
        answer: 'Hedef anahtar kelimeleriniz için SERP\'leri kontrol edin ve zaten Öne Çıkan Snippet görünen sorguları arayın. Ardından snippet içeriğinin iyileştirilip iyileştirilemeyeceğini inceleyin. Zaten 1-10 pozisyonlarında sıralandığınız anahtar kelimeleri hedefleyin, çünkü Google Öne Çıkan Snippet\'leri esas olarak birinci sayfada zaten bulunan sayfalardan çeker. Snippet çıkarımı için özel olarak biçimlendirilmiş daha kapsamlı yanıtlar oluşturun — net başlıklar, numaralı listeler, tablolar veya özlü paragraf yanıtları kullanarak.',
      },
      {
        question: 'URL yapısı SERP performansında nasıl bir rol oynar?',
        answer: 'SERP Denetleyicisi, her sıralama sonucu için tam URL\'leri gösterir ve bu da URL yapısı kalıplarını ortaya çıkarır. Hedef anahtar kelimeyi içeren temiz, açıklayıcı URL\'ler, üst pozisyonlarda daha sık görünme eğilimindedir. Uzun, parametre yoğun URL\'ler veya rastgele karakter dizileri içerenler daha düşük performans gösterir. Üst sıradaki sayfaların URL kalıplarını analiz edin — tüm üst sonuçlar kısa, anahtar kelime açısından zengin slug\'lar kullanıyorsa, bu kalıbı takip etmeniz gerektiğinin bir sinyalidir.',
      },
      {
        question: 'SERP Denetleyicisi verileri PPC kampanyalarına yardımcı olabilir mi?',
        answer: 'Evet. SERP verileri, ücretli arama stratejisini bilgilendiren organik rekabet manzarasını ortaya koyar: organik sonuçlar devasa rakipler tarafından domine ediliyorsa, PPC görünürlük için daha hızlı bir yol olabilir. Organik sonuçlardaki içerik formatları kullanıcı niyetini gösterir — daha yüksek Kalite Puanları için reklam açılış sayfanızı bu niyetle eşleştirin. SERP\'te az sayıda reklam görünüyorsa, düşük ücretli rekabet ve potansiyel olarak uygun TBM\'ler vardır.',
      },
    ],
  },

  'keyword-rank-checker': {
    slug: 'keyword-rank-checker',
    name: 'Anahtar Kelime Sıralama Denetleyicisi',
    title: 'Ucretsiz Anahtar Kelime Sıralama Denetleyicisi',
    description: 'Herhangi bir web sitesinin Google\'da hangi anahtar kelimeler için sıralandığını kontrol edin. Her anahtar kelime için sıralama pozisyonlarını, arama hacimlerini ve tahmini trafiği görün.',
    metaDescription: 'Web sitenizin anahtar kelime sıralamalarını herhangi bir ülkede ücretsiz kontrol edin. Tüm sayfalarınızdaki pozisyonları, trafiği, TBM\'yi ve içerik performansını görün.',
    iconName: 'BarChart3',
    category: 'serp-ranking',
    inputType: 'keyword-url',
    inputLabel: 'Bir alan adı girin',
    inputPlaceholder: 'ör. example.com',
    secondaryInputLabel: 'Anahtar kelimeye göre filtrele (isteğe bağlı)',
    secondaryInputPlaceholder: 'ör. pazarlama',
    buttonText: 'Sıralamaları Kontrol Et',
    resultType: 'rank-position',
    metricsToShow: ['total_keywords', 'top_3', 'top_10', 'top_50'],
    apiEndpoint: 'keyword-rank-checker',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Ülke',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Amerika Birleşik Devletleri' },
          { value: '2826', label: 'Birleşik Krallık' },
          { value: '2276', label: 'Almanya' },
          { value: '2250', label: 'Fransa' },
          { value: '2724', label: 'İspanya' },
          { value: '2380', label: 'İtalya' },
          { value: '2076', label: 'Brezilya' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Avustralya' },
          { value: '2356', label: 'Hindistan' },
          { value: '2392', label: 'Japonya' },
          { value: '2528', label: 'Hollanda' },
          { value: '2792', label: 'Türkiye' },
          { value: '2410', label: 'Güney Kore' },
          { value: '2484', label: 'Meksika' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Anahtar Kelime', sortable: true, type: 'text' },
      { key: 'position', label: 'Pozisyon', sortable: true, type: 'number' },
      { key: 'search_volume', label: 'Hacim', sortable: true, type: 'number' },
      { key: 'cpc', label: 'TBM', sortable: true, type: 'currency' },
      { key: 'traffic', label: 'Trafik', sortable: true, type: 'number' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: 'Web sitenizin herhangi bir ülke SERP\'indeki sıralamalarını kontrol edin',
        description: 'Nerede sıralandığınızı bilmek SEO\'nun puan tablosudur. Alan adınızı girin, isteğe bağlı olarak belirli bir anahtar kelimeye göre filtreleyin, ülkenizi seçin ve sayfanızın Google sonuçlarında tam olarak nerede göründüğünü görün. Anahtar kelime filtresi özellikle güçlüdür — yüzlerce sıralama arasında elemek yerine belirli bir hedef terimi anında kontrol edebilirsiniz. Uluslararası markalar ve çok pazarlı ajanslar, faaliyet gösterdikleri her pazar için sıralamaları ayrı ayrı takip etmek amacıyla ülke seçicisini kullanır.',
        image: '/Rank checker/Check the rank of your website on any countrys SERP.png',
      },
      {
        title: 'Ülkeler genelinde rakip sıralamalarını araştırın',
        description: 'Herhangi bir rakibin alan adını girin ve 15\'ten fazla ülke arasından seçim yaparak tam sıralama profillerini görün. Bu, hangi anahtar kelimeleri kazandıklarını, hangi pazarlara öncelik verdiklerini ve SEO stratejilerinin en güçlü olduğu yerleri ortaya çıkarır. Ajanslar bunu rekabet analizlerinde ve yeni müşteri oryantasyonunda rekabet ortamını haritalamak için kullanır.',
        image: '/Rank checker/Check how your competitors rank on Google.png',
      },
      {
        title: 'Anahtar kelime düzeyinde içerik performansını analiz edin',
        description: 'Sonuç tablosu, her sıralanan anahtar kelimeyi pozisyonu, arama hacmi, TBM\'si, tahmini trafiği ve sıralanan belirli URL ile birlikte gösterir. Bu sayfa düzeyindeki görünüm, en iyi performans gösteren içeriğinizi ve düşük performans gösterenleri belirlemenizi sağlar.',
        image: '/Rank checker/See your websites content performance.png',
      },
      {
        title: 'Sitenizin genel sıralama rekabetçiliğini anlayın',
        description: 'Özet panosu Toplam Anahtar Kelimeler, İlk 3, İlk 10 ve İlk 50\'yi döker. Bu dağılım, sitenizin nerede durduğunu anında gösterir. SEO stratejinizin anahtar kelimeleri SERP pozisyonlarında yukarı taşıyıp taşımadığını ölçmek için bu sayıları aylık olarak takip edin.',
        image: '/Rank checker/Understand your sites ranking and competitivement across keywords.png',
      },
    ],
    faqs: [
      {
        question: 'Anahtar kelime sıralama denetleyicisi nedir ve SERP denetleyicisinden farkı nedir?',
        answer: 'Anahtar kelime sıralama denetleyicisi, SİZİN belirli web sitenizin (veya herhangi bir alan adının) anahtar kelimeler için nerede sıralandığını söyler. Bir alan adı girersiniz ve araç, o site için anahtar kelimeleri ve pozisyonları döndürür. SERP denetleyicisi ise belirli bir anahtar kelime için sıralanan TÜM web sitelerini gösterir. Şöyle düşünün: sıralama denetleyicisi "sitem hangi anahtar kelimeler için sıralanıyor?" sorusunu yanıtlarken, SERP denetleyicisi "bu anahtar kelime için kim sıralanıyor?" sorusunu yanıtlar. Her iki araç da vazgeçilmezdir.',
      },
      {
        question: 'Anahtar kelime sıralama denetleyicisi sonuçları ne kadar doğrudur?',
        answer: 'Sıralama denetleyicisi sonuçları, seçilen ülke ve standart (kişiselleştirilmemiş) arama ayarlarına dayalı olarak sorgu anındaki Google organik sıralamalarını yansıtır. Sonuçlar, doğrudan Google\'da arama yaptığınızda gördüklerinizden biraz farklı olabilir çünkü tarayıcınız arama geçmişinize, konumunuza ve oturum açmış hesabınıza göre sonuçları kişiselleştirir. Sıralamaları takip ederken manuel Google aramaları yerine her zaman bir sıralama denetleyicisi aracı kullanın.',
      },
      {
        question: '"İlk 3", "İlk 10" ve "İlk 50" dağılımı ne anlama gelir?',
        answer: '"İlk 3" anahtar kelimeleriniz en güçlü pozisyonlarınızdır (1-3. pozisyonlar, bir sorgu için tüm organik tıklamaların yaklaşık %60\'ını yakalar). "İlk 10" Google\'ın birinci sayfası anlamına gelir ve neredeyse tüm organik trafik buradan akar. "İlk 50" görünür anahtar kelime evreninizi temsil eden 1-5. sayfaları kapsar. İlk 50\'nin dışında kalan anahtar kelimeler nadiren ölçülebilir trafik sağlar.',
      },
      {
        question: 'Anahtar kelimeleri Google\'ın 2. sayfasından 1. sayfasına nasıl taşırım?',
        answer: '11-20 pozisyonlarında sıralanan anahtar kelimeler en yüksek öncelikli optimizasyon hedeflerinizdir. Taktikler şunları içerir: arama niyetiyle daha iyi eşleşmesi için içeriği güncelleme ve genişletme, ilgili sayfaya 3-5 kaliteli geri bağlantı oluşturma, daha yüksek tıklama oranı için sayfanın başlık etiketi ve meta açıklamasını iyileştirme, en yüksek otoriteye sahip sayfalarınızdan iç bağlantılar ekleme, sayfa hızını ve Core Web Vitals\'ı iyileştirme ve yapılandırılmış veri işaretlemesi ekleme.',
      },
      {
        question: 'Anahtar kelime sıralamalarımı ne sıklıkla kontrol etmeliyim?',
        answer: 'Temel hedef anahtar kelimelerinizi (işletmeniz için en önemli 10-20 anahtar kelime) haftalık kontrol edin. Daha geniş anahtar kelime portföyünüzü aylık kontrol edin. Günlük kontrollerden kaçının — sıralamalar, Google\'ın algoritma ayarlamaları, testleri ve dizin yenilemeleri nedeniyle herhangi bir günde doğal olarak 1-3 pozisyon dalgalanır.',
      },
      {
        question: 'Sıralamalarım ülkeler arasında neden farklılık gösteriyor?',
        answer: 'Google, her ülke için ayrı arama dizinleri ve sıralama algoritmaları sürdürür. Ülkeye özel sıralamaları etkileyen faktörler arasında içerik dili ve yerelleştirme, sunucu konumu ve CDN varlığı, ülkeye özel geri bağlantılar, yerel işletme sinyalleri, hreflang etiketi uygulaması ve ülkeye özel arama davranışı ile rekabet yer alır.',
      },
      {
        question: 'Trafik sütunu ne tahmin ediyor ve ne kadar güvenilir?',
        answer: 'Trafik sütunu, sıralama pozisyonu ve anahtar kelimenin arama hacmine dayalı olarak bir anahtar kelimenin URL\'nize gönderdiği aylık organik ziyaretleri tahmin eder. Tıklama oranı modelleri kullanır — 1. pozisyon tıklamaların yaklaşık %27-31\'ini, 2. pozisyon %15-17\'sini, 3. pozisyon %10-12\'sini alır ve bu şekilde devam eder. Bunlar kesin sayılar değil tahmini değerlerdir, ancak yönsel olarak doğrudur.',
      },
      {
        question: 'İçerik optimizasyon fırsatlarını belirlemek için sıralama verilerini nasıl kullanırım?',
        answer: 'Yüksek hacimli anahtar kelimeler için 4-15 pozisyonlarında sıralanan sayfaları arayın — bunlar en yüksek yatırım getirisi sağlayan optimizasyon hedeflerinizdir. Ardından neden daha üst sıralarda olmadıklarını analiz edin: İçerik rakiplerden daha mı az kapsamlı? Sayfanın daha az geri bağlantısı mı var? Başlık etiketi daha mı az çekici? Sayfanızı her anahtar kelime için mevcut ilk 3 sonuçla karşılaştırın.',
      },
      {
        question: 'Sıralama denetleyicisindeki TBM verileri sıralamalarım hakkında bana ne söyler?',
        answer: 'TBM, sıralandığınız her anahtar kelimenin ticari değerini ortaya koyar. 25$ TBM\'ye sahip bir anahtar kelime için 3. sıradaysanız, bu pozisyon önemli reklam harcamalarından tasarruf sağlar — Google Ads üzerinden her biri 25$\'a mal olacak bu tıklamaları ücretsiz alıyorsunuz. Her sıralamanın "trafik değerini" hesaplamak için tahmini trafiği TBM ile çarpın.',
      },
      {
        question: 'Sıralama sonuçlarını belirli anahtar kelimelere göre filtreleyebilir miyim?',
        answer: 'Evet. İsteğe bağlı "Anahtar kelimeye göre filtrele" alanı, sonuçları daraltmak için belirli bir anahtar kelime veya ifade girmenize olanak tanır. Bu, tüm anahtar kelimeleri bir arada görmek yerine belirli bir konu kümesi için sıralamalarınızı kontrol etmek istediğinizde kullanışlıdır. Bu filtreleme özelliği, aracı yüzlerce hatta binlerce anahtar kelimede sıralanan siteler için bile pratik hale getirir.',
      },
      {
        question: 'Zaman içinde sıralama iyileşmelerini nasıl takip ederim?',
        answer: 'Her kontrol yaptığınızda sıralama verilerinizi CSV olarak dışa aktarın ve aydan aya pozisyon değişikliklerini karşılaştırın. İlk 20 anahtar kelimenizi, her aydaki pozisyonlarını ve değişim yönünü takip eden basit bir elektronik tablo oluşturun. 3-6 ay boyunca net bir eğilim görmelisiniz: anahtar kelimelerin kademeli olarak 1-10 pozisyonlarına doğru ilerlemesi, çalışan bir SEO stratejisine işaret eder.',
      },
      {
        question: 'Sıralama denetleyicisinin URL sütunu ile SERP denetleyicisi arasındaki fark nedir?',
        answer: 'Sıralama denetleyicisinin URL sütunu, SİZİN alan adınızda her anahtar kelime için hangi belirli sayfanın sıralandığını gösterir. Bu, dahili SEO yönetimi için güçlüdür: doğru sayfanın sıralanıp sıralanmadığını görebilir, anahtar kelime kanibalizasyonunu (sayfalarınızdan ikisinin aynı anahtar kelime için rekabet etmesi) tespit edebilir ve beklenmedik terimler için sıralanan sayfaları keşfedebilirsiniz. SERP denetleyicisi ise bir anahtar kelime için sıralanan tüm alan adlarını gösterir.',
      },
    ],
  },

  'youtube-keyword-tool': {
    slug: 'youtube-keyword-tool',
    name: 'YouTube Anahtar Kelime Aracı',
    title: 'Ucretsiz YouTube Anahtar Kelime Aracı',
    description: 'YouTube videolarınız için en iyi anahtar kelimeleri bulun. Video başlıklarınızı, açıklamalarınızı ve etiketlerinizi optimize etmek için arama hacmi, zorluk ve TBM verileri alın.',
    metaDescription: 'Herhangi bir niş için YouTube anahtar kelime fikirleri bulun. Keşfedilen ve sıralanan video içerikleri planlamak için arama hacmi, zorluk ve TBM\'yi görün.',
    iconName: 'Youtube',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'YouTube için bir anahtar kelime girin',
    inputPlaceholder: 'ör. video düzenleme nasıl yapılır',
    buttonText: 'Anahtar Kelimeleri Bul',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'youtube-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Ülke',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Amerika Birleşik Devletleri' },
          { value: '2826', label: 'Birleşik Krallık' },
          { value: '2276', label: 'Almanya' },
          { value: '2250', label: 'Fransa' },
          { value: '2724', label: 'İspanya' },
          { value: '2380', label: 'İtalya' },
          { value: '2076', label: 'Brezilya' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Avustralya' },
          { value: '2356', label: 'Hindistan' },
          { value: '2392', label: 'Japonya' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Anahtar Kelime', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Hacim', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'TBM', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Rekabet', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'İnsanların gerçekten aradığı video konularını araştırın',
        description: 'YouTube, dünyanın en büyük ikinci arama motorudur ve çoğu içerik oluşturucu, kimsenin aramadığı videoları yaptığı için başarısız olur. "Video nasıl düzenlenir" gibi bir anahtar kelime girin, hedef ülkenizi seçin ve YouTube kullanıcılarının arama çubuğuna ne yazdığını anında görün. Bu, tahminlerin yerini verilerle değiştirir — bir video konusunun iyi performans göstermesini ummak yerine, gerçek talebin var olduğunu önceden bilirsiniz. İçerik oluşturucular, video pazarlamacılar ve YouTube kanal yöneticileri bu aracı her editoryal takvimin başlangıç noktası olarak kullanır.',
        image: '/Youtube keyword tool/Research and plan your youtube content better.png',
      },
      {
        title: 'YouTube anahtar kelimelerinin rekabet ortamını değerlendirin',
        description: 'Sonuç tablosu, her anahtar kelimeyi YouTube\'a özel Hacmi, Anahtar Kelime Zorluğu (KD), TBM ve Rekabet puanıyla birlikte gösterir. Bu, kanal büyüklüğünüz için hangi video konularının erişilebilir olduğunu belirlemenizi sağlar. 1.000\'den az abonesi olan küçük bir kanal, KD\'si 20\'nin altındaki anahtar kelimeleri hedeflemelidir; köklü kanallar ise daha yüksek zorluklu terimler için rekabet edebilir. TBM sütunu ayrıca hangi anahtar kelimelerin reklamveren harcamasını çektiğini ortaya koyar — bu, para kazanma stratejiniz YouTube reklam gelirine bağlıysa özellikle faydalıdır, çünkü daha yüksek TBM\'li anahtar kelimeler genellikle daha iyi RPM\'ler üretir.',
        image: '/Youtube keyword tool/See how competitive your youtube content ideas are.png',
      },
      {
        title: 'Bir içerik serisine bağlanmadan önce genel konu uygulanabilirliğini ölçün',
        description: 'Özet panosu, tohum teriminiz etrafındaki anahtar kelime kümesi için Toplam Anahtar Kelimeler (50), Ortalama Hacim ve Ortalama Zorluğu gösterir. Bu, bir konunun bir video serisini sürdürecek kadar derinliğe ve talebe sahip olup olmadığını söyler. Ortalama hacim güçlü ve ortalama zorluk yönetilebilir düzeydeyse, konu etrafında çok videolu bir içerik serisi planlamak için yeşil ışığınız var demektir. Rakamlar zayıfsa, üretim zamanı yatırmadan önce yön değiştirin. Video üretimi pahalıdır — bu 10 saniyelik kontrol, saatlerce boşa harcanan çabadan tasarruf sağlayabilir.',
        image: '/Youtube keyword tool/See the search volume of your content ideas on youtube.png',
      },
      {
        title: 'Video başlıkları, etiketler ve açıklamalara anlamsal alaka oluşturun',
        description: 'YouTube\'un algoritması, tıpkı Google\'ınki gibi, tematik derinlik gösteren içerikleri ödüllendirir. Bu görünüm, video başlığınıza, açıklamanıza, etiketlerinize ve hatta sözlü diyalogunuza (YouTube sesi yazıya döker ve dizinler) dahil edilmesi gereken ilgili anahtar kelimeleri ve arama hacimlerini gösterir. Örneğin, ana anahtar kelimeniz "video nasıl düzenlenir" ise, "video klip yapıcı", "ters video düzenleme yazılımı" ve "youtube video en boy oranı" gibi ilgili terimler meta verilerinizde doğal olarak görünmelidir. Bu anlamsal optimizasyon, ilgili aramalardaki keşfedilebilirliği dramatik şekilde artırır.',
        image: '/Youtube keyword tool/Use related keywords to make your youtube video semantically relevant.png',
      },
    ],
    faqs: [
      {
        question: 'Normal bir anahtar kelime aracı yerine neden YouTube\'a özel bir anahtar kelime aracına ihtiyacım var?',
        answer: 'YouTube ve Google, farklı algoritmalara, kullanıcı davranışlarına ve arama kalıplarına sahip ayrı arama motorlarıdır. Google\'da 10.000 arama alan bir anahtar kelime, YouTube\'da yalnızca 200 arama alabilir ve tersi de geçerlidir. YouTube anahtar kelime araçları, verileri özellikle YouTube\'un arama ekosisteminden çeker ve videolarınızın gerçekte sıralanması gereken platform için doğru hacim tahminleri sunar. YouTube optimizasyonu için Google anahtar kelime verilerini kullanmak, okyanusta yol almak için karayolu haritası kullanmak gibidir — zemin temelden farklıdır.',
      },
      {
        question: 'YouTube anahtar kelime zorluğu Google anahtar kelime zorluğundan nasıl farklıdır?',
        answer: 'YouTube KD, web sayfaları arasındaki değil, videolar arasındaki rekabeti ölçer. YouTube sıralamasını etkileyen faktörler arasında izlenme süresi, küçük resim tıklama oranı, etkileşim (beğeniler, yorumlar, paylaşımlar), kanal otoritesi ve video meta veri optimizasyonu yer alır. Google için geri bağlantılar daha önemliyken, YouTube için izlenme süresi ve etkileşim daha önemlidir. YouTube\'da KD\'si 20 olan bir anahtar kelime, kanalınız nispeten yeni olsa bile iyi üretilmiş ve iyi optimize edilmiş bir videoyla rekabet edebileceğiniz anlamına gelir.',
      },
      {
        question: 'Yeni bir kanal için düşük rekabetli YouTube anahtar kelimelerini nasıl bulurum?',
        answer: 'KD değeri 0 ile 15 arasında ve arama hacmi 50\'nin üzerinde olan anahtar kelimelere göre sonuçları filtreleyin. Belirli soruları veya eğitimleri ele alan uzun kuyruklu sorgulara (3-6 kelime) odaklanın; örneğin "video düzenleme" yerine "iPhone\'da YouTube videosu nasıl düzenlenir" gibi. Yeni kanallar ayrıca "soru" anahtar kelimelerini (nasıl, ne, neden, yapılabilir mi ile başlayan) aramalıdır çünkü bunlar genellikle daha düşük rekabete ve daha yüksek etkileşime sahiptir, çünkü izleyiciler cevaba gerçekten ihtiyaç duyduklarında daha uzun süre izlerler.',
      },
      {
        question: 'YouTube anahtar kelimeleri için TBM ne anlama gelir?',
        answer: 'TBM, reklamverenlerin o anahtar kelimeye karşı gösterilen reklamlar için tıklama başına ne kadar ödediğini temsil eder. YouTube içerik oluşturucuları için daha yüksek TBM\'li anahtar kelimeler, bin görüntüleme başına daha yüksek reklam geliri (RPM) anlamına gelir. YouTube İş Ortağı Programı aracılığıyla para kazanıyorsanız, TBM\'si 3-5$\'ın üzerindeki anahtar kelimeleri hedeflemek, reklamverenlerin kitleniz için daha fazla ödemeye istekli olduğu anlamına gelir ve bu da kazançlarınızı doğrudan artırır. Bu, TBM\'lerin 20$\'ı aşabildiği finans, yazılım, sigorta ve B2B nişlerindeki kanallar için özellikle geçerlidir.',
      },
      {
        question: 'YouTube anahtar kelimelerini video meta verilerimi optimize etmek için nasıl kullanırım?',
        answer: 'Birincil anahtar kelimenizi video başlığına (tercihen başlangıca yakın), açıklamanın ilk cümlesine ve ilk etiket olarak yerleştirin. İlgili anahtar kelimeler listesindeki ikincil anahtar kelimeleri ek etiketler olarak, açıklama gövdesinde ve zaman damgaları kullanıyorsanız bölüm başlıkları olarak kullanın. YouTube ayrıca sesinizi yazıya döker ve sıralama için kullanır, bu yüzden birincil anahtar kelimenizi videonun ilk 30 saniyesinde söyleyin. Bu çok dokunuşlu anahtar kelime yerleşimi, YouTube\'a videonuzun tam olarak ne hakkında olduğunu bildirir.',
      },
      {
        question: 'Bu araç trend olan YouTube konularını bulmama yardımcı olabilir mi?',
        answer: 'Araç, viral patlamalar yerine sürdürülebilir ilgiyi yansıtan ortalama aylık arama hacimlerini gösterir. Trend olan konular için bu aracı YouTube Trending, Google Trends (YouTube Araması olarak filtrelenmiş) ve sosyal dinleme araçlarıyla birleştirin. En iyi strateji, trend farkındalığını anahtar kelime verileriyle birleştirir: trend olan bir konu fark ettiğinizde, arama talebinin de olup olmadığını görmek için YouTube anahtar kelime aracında kontrol edin. Hem trend ivmesi hem de arama hacmine sahip konular, en yüksek fırsat hedefleridir.',
      },
      {
        question: 'YouTube anahtar kelimeleri için iyi bir arama hacmi eşiği nedir?',
        answer: 'Nişinize bağlıdır. Oyun, yemek veya fitness gibi geniş nişlerde aylık 500\'den fazla YouTube araması olan anahtar kelimeleri hedefleyin. B2B SaaS, veri bilimi veya niş hobiler gibi özelleşmiş nişlerde 50-200 aramalı anahtar kelimeler bile anlamlı trafik sağlayabilir çünkü kitle daha hedefli ve değerlidir. Anahtar metrik sadece hacim değil, aynı zamanda rekabettir — KD\'si 5 olan 100 hacimli bir anahtar kelime, özellikle büyüyen kanallar için KD\'si 70 olan 5.000 hacimli bir anahtar kelimeden genellikle daha değerlidir.',
      },
      {
        question: 'Anahtar kelime verileriyle bir YouTube içerik serisini nasıl planlarım?',
        answer: 'Geniş bir konu anahtar kelimesi girerek başlayın ve tüm 50 sonucu inceleyin. İlgili anahtar kelimeleri kümeler halinde gruplayın (ör. başlangıç eğitimleri, ileri düzey teknikler, araç incelemeleri, karşılaştırmalar). Her küme bir oynatma listesi olur ve kümedeki her anahtar kelime ayrı bir video olur. Bu "merkez ve bağlantı" yaklaşımı, Google\'ın tematik otoriteyi nasıl ödüllendirdiğini yansıtır — YouTube da benzer şekilde, birbirine bağlı oynatma listeleri ve ilgili konularda tutarlı yayınlama yoluyla bir konuda derin uzmanlık gösteren kanalları destekler.',
      },
      {
        question: 'YouTube ve Google\'da aynı anahtar kelimeleri aynı anda hedeflemeli miyim?',
        answer: 'Evet — buna Video SEO çifte kazanım stratejisi denir. Artık birçok Google SERP\'i bir video karuseli içerir ve YouTube videoları bu karusellerde sıkça görünür. Aynı anahtar kelimeyi her iki platformda hedefleyerek, hem Google\'ın video karuselinden HEM DE YouTube\'un yerel aramasından trafik yakalayabilirsiniz. Google\'ın zaten video sonuçları gösterdiği anahtar kelimelere öncelik verin. Eğitim, nasıl yapılır ve inceleme sorguları, video karusellerini tetikleme olasılığı en yüksek olanlardır.',
      },
      {
        question: 'YouTube anahtar kelimeleri için Rekabet puanı nasıl çalışır?',
        answer: 'Rekabet puanı (0-100), YouTube reklam yerleşimleri için o anahtar kelimeye kaç reklamverenin teklif verdiğini yansıtır. 100 puanı maksimum reklamveren rekabeti anlamına gelir; 0 ise hiçbir reklamverenin onu hedeflemediği anlamına gelir. Bu öncelikle organik sıralamadan ziyade reklam gelirini etkilese de, yüksek bir rekabet puanı kitlenize yönelik ticari ilgiyi gösterir. İçerik oluşturucular, yüksek rekabetli nişlerdeki markalara sponsorluk anlaşmaları için yaklaşarak bundan yararlanabilir, çünkü bu markalar zaten reklamlar aracılığıyla o kitleye ulaşmak için para harcamaktadır.',
      },
      {
        question: 'Tek bir YouTube videosunda kaç anahtar kelime kullanmalıyım?',
        answer: 'Video başına bir birincil anahtar kelime ve 5-10 ikincil anahtar kelimeye odaklanın. Birincil anahtar kelimeniz başlığı ve ana konuyu yönlendirir. İkincil anahtar kelimeler açıklamada, etiketlerde ve bölüm başlıklarında görünür. Anahtar kelime doldurmak hem izleyici deneyimini hem de doğal olmayan tekrarı algılayan YouTube algoritmasını olumsuz etkiler. Bu araçtan aldığınız ilgili anahtar kelimeler listesi, anlamsal olarak bağlantılı mükemmel ikincil terim setini sunar ve meta verilerinizin keşfedilebilirliği en üst düzeye çıkarırken doğal okunmasını sağlar.',
      },
      {
        question: 'Bu aracı YouTube Shorts anahtar kelime araştırması için kullanabilir miyim?',
        answer: 'Evet. YouTube Shorts, YouTube aramasında, Shorts akışında ve giderek artan şekilde Google aramasında görünür. Aynı anahtar kelime verileri geçerlidir — bir terim YouTube\'da yüksek arama hacmine sahipse, o terimi hedefleyen bir Short oluşturmak ek görünürlük yakalayabilir. Shorts, "nasıl [hızlı görev]" veya "[ürün] incelemesi 60 saniyede" gibi yüksek hacimli, düşük derinlikli sorgular için özellikle iyi çalışır. Bu hızlı tüketimli konuları bulmak için anahtar kelime aracını kullanın, ardından hızlı kazanımlar için Shorts oluşturun ve daha derin, yüksek zorluklu anahtar kelimeler için uzun biçimli videoları saklayın.',
      },
    ],
  },

  'amazon-keyword-tool': {
    slug: 'amazon-keyword-tool',
    name: 'Amazon Anahtar Kelime Aracı',
    title: 'Ucretsiz Amazon Anahtar Kelime Aracı',
    description: 'Amazon ürün listeleri için anahtar kelimeleri araştırın. Ürün başlıklarınızı ve açıklamalarınızı optimize etmek için zorluk ve TBM verileriyle birlikte yüksek hacimli terimleri bulun.',
    metaDescription: 'Amazon ürün anahtar kelimelerini ücretsiz araştırın. Liste optimizasyonu ve yüksek talep gören ürün nişlerini keşfetmek için arama hacmi, zorluk ve TBM\'yi görün.',
    iconName: 'ShoppingBag',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Bir ürün anahtar kelimesi girin',
    inputPlaceholder: 'ör. kablosuz kulaklık',
    buttonText: 'Anahtar Kelimeleri Bul',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'amazon-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Ülke',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Amerika Birleşik Devletleri' },
          { value: '2826', label: 'Birleşik Krallık' },
          { value: '2276', label: 'Almanya' },
          { value: '2250', label: 'Fransa' },
          { value: '2724', label: 'İspanya' },
          { value: '2380', label: 'İtalya' },
          { value: '2076', label: 'Brezilya' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Avustralya' },
          { value: '2356', label: 'Hindistan' },
          { value: '2392', label: 'Japonya' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Anahtar Kelime', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Hacim', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'TBM', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Rekabet', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Stok yatırımı yapmadan önce ürün fikirlerini doğrulayın',
        description: 'Amazon\'da anahtar kelime araştırması yapmadan ürün çıkarmak, yaya trafiği olmayan bir sokakta mağaza açmak gibidir. "Kablosuz kulaklık" gibi bir ürün anahtar kelimesi girin, ülkenizi seçin ve o kategorideki ürünleri kaç kişinin aradığını anında görün. Ülke açılır menüsü, 10\'dan fazla pazarda talebi karşılaştırmanıza olanak tanır — böylece envanter satın alımlarına, üretim süreçlerine veya FBA gönderimlerine yatırım yapmadan önce ürününüzün ABD, Birleşik Krallık, Almanya veya diğer Amazon pazarlarında arama talebi olup olmadığını doğrulayabilirsiniz.',
        image: '/Amazon keyword tool/Check how viable your ideas are on amazon.png',
      },
      {
        title: 'Ürün anahtar kelimeleri genelinde rekabet yoğunluğunu analiz edin',
        description: 'Sonuç tablosu, her ürün anahtar kelimesini Hacim, KD, TBM ve Rekabet puanıyla birlikte gösterir. En popüler anahtar kelimeler 450.000 hacim ve 100 rekabet puanı gösterebilir — bu, son derece doymuş bir pazar anlamına gelir. Ancak daha derine indikçe, yeni satıcıların rekabet edebileceği daha az rekabetçi alt nişler ortaya çıkar. Bu tablo, yönetilebilir rekabete sahip ürün nişlerini belirleyen Amazon FBA satıcıları ve özel marka markaları için vazgeçilmezdir.',
        image: '/Amazon keyword tool/See how competitive a business idea is on Amazon.png',
      },
      {
        title: 'Ürün kategorisi talebini bir bakışta ölçün',
        description: 'Özet panosu, ürün kategoriniz için Toplam Anahtar Kelimeler (50), Ortalama Hacim ve Ortalama Zorluğu gösterir. Amazon satıcıları bu anlık görüntüyü kategori büyüklüklerini karşılaştırmak için kullanır — bir pazara mı yoksa diğerine mi gireceğinize karar veriyorsanız, bu pano size saniyeler içinde talep karşılaştırmasını verir. Ortalama zorluk ayrıca birçok uzun kuyruklu ürün anahtar kelimesinin hâlâ erişilebilir olup olmadığını gösterir.',
        image: '/Amazon keyword tool/See how popular and how many people search for a given idea on amazon.png',
      },
      {
        title: 'Arka plan anahtar kelimeleri ve uzun kuyruklu ürün terimlerini keşfedin',
        description: 'Amazon\'un A10 algoritması, ürünleri kısmen başlıklardaki, madde işaretlerindeki, açıklamalardaki ve arka plan arama terimlerindeki anahtar kelime alaka düzeyine göre sıralar. Bu görünüm, ilgili ürün anahtar kelimelerinin tam listesini ve hacimlerini — ana terimlerden uzun kuyruklu varyasyonlara kadar — gösterir. Bu uzun kuyruklu varyasyonlar, listenizin en geniş alıcı sorgu yelpazesinde görünürlüğünü en üst düzeye çıkarmak için ürün listenizin arka plan arama terimleri alanına, madde işaretlerine ve A+ içeriğine yerleştirilmelidir.',
        image: '/Amazon keyword tool/See other sematically relevant content ideas for your main ideas on amazon.png',
      },
    ],
    faqs: [
      {
        question: 'Amazon anahtar kelimeleri Google anahtar kelimelerinden neden farklıdır?',
        answer: 'Amazon ve Google temelde farklı kullanıcı niyetlerine hizmet eder. Google arayanları araştırma yapıyor, karşılaştırıyor veya sadece göz gezdiriyor olabilir. Amazon arayanları neredeyse her zaman satın alma modundadır — satın alma niyetleri vardır. Bu, Amazon anahtar kelimelerinin ürün odaklı olduğu anlamına gelir (marka adları, ürün spesifikasyonları, kullanım alanları) — Google anahtar kelimeleri ise bilgilendirici, navigasyonel ve işlemsel niyetleri kapsar.',
      },
      {
        question: 'Amazon ürün listeleri için anahtar kelime zorluğu nasıl çalışır?',
        answer: 'Amazon anahtar kelime zorluğu, ürün listenizi o arama terimi için Amazon\'un ilk sayfasında sıralamak için ne kadar rekabetçi olduğunu tahmin eder. Faktörler arasında anahtar kelimeyi hedefleyen yerleşik satıcı sayısı, yorum sayıları, satış hızı, liste optimizasyon kalitesi ve reklam harcamaları yer alır. 0-10 arası KD, iyi optimizasyonla yeni bir listenin hızla birinci sayfada görünebileceği anlamına gelir. 40\'ın üzerinde bir KD, genellikle rekabetçi fiyatlandırma, PPC kampanyaları, güçlü yorumlar ve yüksek düzeyde optimize edilmiş listeler gerektirir.',
      },
      {
        question: 'Amazon ürün anahtar kelimesi için iyi bir arama hacmi nedir?',
        answer: 'Özel marka satıcıları için, yeterli talebi sağlamak amacıyla birincil anahtar kelimeler en az 1.000 aylık aramayı hedeflemelidir. Yüksek hacimli ana terimler (100.000+) son derece rekabetçidir ve genellikle büyük markalar tarafından domine edilir. Orta kuyruklu anahtar kelimeler (1.000-10.000) genellikle talep ve ulaşılabilirlik arasında en iyi dengeyi sunar. Uzun kuyruklu anahtar kelimeler (1.000\'in altında) arka plan arama terimleri olarak ve belirli alıcı niyetinin daha yüksek dönüşüm oranlarına yol açtığı PPC kampanyalarında iyi çalışır.',
      },
      {
        question: 'Amazon anahtar kelime verilerini ürün listemi optimize etmek için nasıl kullanmalıyım?',
        answer: 'Amazon\'un anahtar kelime yerleşim hiyerarşisini takip edin: (1) Birincil anahtar kelimenizi ürün başlığına koyun, (2) En önemli 5 ikincil anahtar kelimenizi madde işaretlerine yerleştirin, (3) Kalan anahtar kelimeleri ürün açıklaması ve A+ İçerikte kullanın, (4) Geriye kalan tüm ilgili terimleri arka plan arama terimlerine yükleyin (250 bayta kadar). Anahtar kelimeleri bu alanlar arasında asla tekrarlamayın — Amazon\'un algoritması her anahtar kelimeyi kaç kez göründüğünden bağımsız olarak yalnızca bir kez sayar.',
      },
      {
        question: 'Bu aracı Amazon PPC kampanya araştırması için kullanabilir miyim?',
        answer: 'Kesinlikle. TBM sütunu, reklamverenlerin her anahtar kelime için Sponsorlu Ürün Reklamlarında tıklama başına ne kadar ödediğini gösterir. Bu verileri reklam bütçenizi tahmin etmek, organik sıralamanın önemli reklam harcamalarından tasarruf sağlayacağı anahtar kelimeleri belirlemek ve kârlı PPC kampanyaları yürütebileceğiniz düşük TBM\'li anahtar kelimeleri keşfetmek için kullanın.',
      },
      {
        question: 'Bu araçla kârlı ürün nişlerini nasıl bulurum?',
        answer: 'Ortalama arama hacminin 5.000\'in üzerinde ancak ortalama KD\'nin 20\'nin altında olduğu anahtar kelime kümelerini arayın. Ardından TBM\'yi kontrol edin — daha yüksek TBM, bu nişteki satıcıların reklam yapabilecek kadar kârlı olduğunu gösterir. İdeal niş, yüksek arama talebi, düşük rekabet, sağlıklı marjlar ve birinci sayfada 500\'den az yoruma sahip ürünler içerir (bu, yeni girişimciler için pazar erişilebilirliğini gösterir).',
      },
      {
        question: 'Amazon anahtar kelimeleri için Rekabet puanı ile KD arasındaki fark nedir?',
        answer: 'Rekabet puanı ücretli reklam yoğunluğunu yansıtır — o anahtar kelimede kaç satıcının Sponsorlu Ürün Reklamı yayınladığını gösterir. KD, organik sıralama zorluğunu yansıtır — reklamlar olmadan birinci sayfada görünmenin ne kadar zor olduğunu gösterir. Düşük organik KD\'ye sahip ancak yüksek ücretli rekabete sahip bir anahtar kelimeniz olabilir — bu, organik olarak sıralanmanın kolay ancak reklam görünürlüğü elde etmenin zor olduğu anlamına gelir.',
      },
      {
        question: 'Amazon anahtar kelimelerini lansman öncesi ürün araştırması için nasıl kullanırım?',
        answer: 'Bu aracı lansman öncesi doğrulama için kullanın: (1) Geniş ürün kategorisi anahtar kelimelerini girin, (2) Talebi doğrulamak için ilgili anahtar kelimelerin hacmini inceleyin, (3) Rekabetçi fizibiliteyi değerlendirmek için KD\'yi kontrol edin, (4) Uzun kuyruklu anahtar kelimelerin genişliğine bakın — çok sayıda uzun kuyruklu varyasyona sahip bir niş, farklılaştırılmış ürünler için alan sunar, (5) Kârlılığı tahmin etmek için tedarikçi maliyetlerinizle çapraz referans yapın.',
      },
      {
        question: 'Amazon listemde marka ismi anahtar kelimelerini hedeflemeli miyim?',
        answer: 'Rakip marka isimlerini ürün başlığınıza veya madde işaretlerinize asla eklemeyin — Amazon\'un Kullanım Koşulları bunu yasaklar ve liste bastırılmasına yol açabilir. Ancak markayla ilgili anahtar kelimeler araç sonuçlarında doğal olarak görünür ve rekabet ortamını anlamak için faydalıdır. Stratejiniz, jenerik eşdeğerleri hedeflemek ve fiyat, özellikler ve yorumlar üzerinden rekabet etmek olmalıdır.',
      },
      {
        question: 'Bu aracı Amerika Birleşik Devletleri dışındaki Amazon pazarları için kullanabilir miyim?',
        answer: 'Evet. Ülke seçici ABD, Birleşik Krallık, Almanya, Fransa, İspanya, İtalya, Brezilya, Kanada, Avustralya, Hindistan ve Japonya dahil büyük Amazon pazarlarını destekler. Her pazarın farklı anahtar kelime hacimleri, rekabet seviyeleri ve alıcı davranışları vardır. ABD pazarında aşırı doymuş bir ürün, Almanya veya Japonya\'da yetersiz hizmet alan bir alan olabilir.',
      },
      {
        question: 'Amazon arka plan arama terimlerime kaç anahtar kelime eklemeliyim?',
        answer: 'Amazon, arka plan arama terimlerinde en fazla 250 bayta izin verir (İngilizce için yaklaşık 250 karakter). Bu alanı başlığınıza, madde işaretlerinize veya açıklamanıza doğal olarak sığmayan anahtar kelimeler için kullanın. Benzersiz anahtar kelimeleri önceliklendirin — görünür listenizde zaten bulunan terimleri tekrarlamayın. Terimleri ayırmak için boşluk kullanın (virgül veya noktalı virgül değil — Amazon bunları boşa harcanan baytlar olarak değerlendirir).',
      },
      {
        question: 'Amazon A10 algoritması ürün listelerini sıralamak için anahtar kelimeleri nasıl kullanır?',
        answer: 'Amazon\'un A10 algoritması, anahtar kelime alaka düzeyini satış hızı, dönüşüm oranı, tıklama oranı, satıcı otoritesi ve organik satışlar gibi birçok sıralama faktöründen biri olarak değerlendirir. Anahtar kelimeyi başlıkta içeren listeler, bunu yalnızca arka plan terimlerinde içerenlerden daha yüksek sıralanır. Eşleşmenin ötesinde, algoritma daha sonra performans metriklerine göre sıralama yapar — bu, anahtar kelime optimizasyonunun sizi dizine aldırdığı, ancak dönüşüm oranı ve satışların konumunuzu belirlediği anlamına gelir.',
      },
    ],
  },

  'bing-keyword-tool': {
    slug: 'bing-keyword-tool',
    name: 'Bing Anahtar Kelime Aracı',
    title: 'Ucretsiz Bing Anahtar Kelime Aracı',
    description: 'Bing arama motoru için anahtar kelimeleri araştırın. İçeriklerinizi Microsoft\'un arama motoru için optimize etmek amacıyla Bing\'e özel arama hacmi, TBM ve rekabet verileri alın.',
    metaDescription: 'Bing anahtar kelime fikirlerini ücretsiz bulun. Bing\'in yüksek dönüşümlü, düşük rekabetli SERP\'inden yararlanmak için arama hacmi, TBM ve rekabet verilerini görün.',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Bir anahtar kelime girin',
    inputPlaceholder: 'ör. proje yönetim yazılımı',
    buttonText: 'Anahtar Kelimeleri Bul',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume'],
    apiEndpoint: 'bing-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Ülke',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Amerika Birleşik Devletleri' },
          { value: '2826', label: 'Birleşik Krallık' },
          { value: '2276', label: 'Almanya' },
          { value: '2250', label: 'Fransa' },
          { value: '2724', label: 'İspanya' },
          { value: '2380', label: 'İtalya' },
          { value: '2076', label: 'Brezilya' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Avustralya' },
          { value: '2356', label: 'Hindistan' },
          { value: '2392', label: 'Japonya' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Anahtar Kelime', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Hacim', sortable: true, type: 'number' },
      { key: 'cpc', label: 'TBM', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Rekabet', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Bing arama ekosistemi için özel olarak anahtar kelimeleri araştırın',
        description: 'Bing, Microsoft Edge (her Windows PC\'deki varsayılan tarayıcı), Cortana, Yahoo Search ve DuckDuckGo\'nun organik sonuçları için aramayı yürütür. Bu, masaüstü arama trafiğinin yaklaşık %10–15\'idir — çoğu SEO uzmanının tamamen göz ardı ettiği bir segment. Herhangi bir anahtar kelime girin, hedef ülkenizi seçin ve Bing\'e özel arama verileri alın. Bu özellikle B2B pazarlamacılar ve daha yaşlı demografik kitleleri hedefleyen markalar için değerlidir, çünkü Bing kullanıcıları masaüstüne daha yatkın, daha yüksek gelirli ve Microsoft ürünlerinin varsayılan olduğu kurumsal ortamlarda olma eğilimindedir.',
        image: '/Bing keyword tool/Search any keyword on any region on Bing.png',
      },
      {
        title: 'Bing\'in benzersiz hacim ve anahtar kelime yoğunluğunu değerlendirin',
        description: 'Özet panosu, toplam anahtar kelime fikirlerini ve Bing\'deki ortalama hacimlerini gösterir. 1.000\'den fazla ilgili terim üreten bir tohum anahtar kelime, Bing\'in platformunda derin ve anlamsal olarak zengin bir konu kümesinin mevcut olduğu anlamına gelir. Bu yoğunluk metriği, nişiniz için Bing optimizasyonunun çabaya değip değmeyeceğine karar vermenize yardımcı olur. B2B yazılım anahtar kelimeleri, kurumsal araç sorguları ve profesyonel hizmetler için Bing, genellikle daha yüksek niyetli ve dönüştürme maliyeti daha düşük olan şaşırtıcı bir arama hacmi sunar.',
        image: '/Bing keyword tool/See a keywords volume and semantic density on Bing.png',
      },
      {
        title: 'Bing\'de organik ve ücretli rekabetçiliği karşılaştırın',
        description: 'Sonuç tablosu, her anahtar kelime için Bing\'e özel Hacim, TBM ve Rekabeti gösterir. Bing Ads (Microsoft Advertising), Google Ads\'e göre genellikle daha düşük TBM\'lere sahiptir — aynı anahtar kelimeler için çoğunlukla %30–50 daha ucuzdur. Bu tablo, PPC yöneticilerinin Bing\'in Google\'a kıyasla daha iyi edinim maliyeti sunduğu anahtar kelimeleri belirlemesine olanak tanır. Ayrıca SEO uzmanlarının Bing\'de hangi anahtar kelimelerin daha az organik rekabetle karşılaştığını görmesini sağlar.',
        image: '/Bing keyword tool/Find how competitives organic and paid keywords are in bing.png',
      },
      {
        title: 'Bing\'e özgü anahtar kelime kümeleri ve içerik fırsatlarını keşfedin',
        description: 'Bu görünüm, Bing\'deki arama hacimleriyle birlikte anahtar kelime varyasyonlarının tam listesini gösterir. Bing\'in kullanıcı tabanı Google\'ınkinden farklı demografik özelliklere ve davranışlara sahip olduğundan, anahtar kelime manzarası önemli ölçüde farklılık gösterebilir. Kurumsal yazılım, Microsoft entegrasyonları, profesyonel araçlar ve belirli yaş demografisine yönelik ürünlerle ilgili terimler, Bing\'de genellikle orantısız şekilde iyi performans gösterir. Rakiplerinizin yalnızca Google için optimizasyon yaparak kaçırdığı içerik fırsatlarını belirlemek için bu listeyi kullanın.',
        image: '/Bing keyword tool/Check other clusters around your main keyword in bing.png',
      },
    ],
    faqs: [
      {
        question: 'Google aramaya hakimken neden Bing anahtar kelimeleriyle ilgilenmeliyim?',
        answer: 'Bing, küresel olarak masaüstü arama trafiğinin yaklaşık %10–15\'ini yakalar; bu da ayda yüz milyonlarca aramaya karşılık gelir. Daha da önemlisi, Bing\'in kitlesi daha yüksek gelirli, daha yaşlı ve daha kurumsal odaklı olma eğilimindedir — genellikle daha yüksek oranlarda dönüşüm yapan demografik gruplar. Daha az SEO uzmanı özellikle Bing için optimizasyon yaptığından, rekabet ortamı önemli ölçüde daha az yoğundur.',
      },
      {
        question: 'Bing\'in arama algoritması Google\'ınkinden nasıl farklıdır?',
        answer: 'Bing\'in sıralama algoritması Google ile benzerlikler taşır ancak dikkat çekici farklılıkları vardır. Bing, başlıklarda ve meta açıklamalarda tam eşleşme anahtar kelimelere daha fazla ağırlık verir, Facebook ve LinkedIn gibi platformlardan gelen sosyal sinyalleri değerlendirir, daha eski ve köklü alan adlarına hafif bir tercih verir ve multimedya içeriğini SERP\'lerinde daha belirgin bir şekilde ele alır. Bing ayrıca sıralama faktörleri konusunda daha şeffaf olma eğilimindedir.',
      },
      {
        question: 'Hangi sektörler Bing anahtar kelime optimizasyonundan en çok faydalanır?',
        answer: 'Bing\'den orantısız olarak faydalanan sektörler arasında B2B yazılım ve SaaS (Microsoft varsayılan tarayıcılarındaki kurumsal kullanıcılar), finansal hizmetler (daha yüksek gelirli demografik gruplar), sağlık hizmetleri (daha yaşlı demografik gruplar), gayrimenkul (masaüstü ağırlıklı araştırma davranışı), eğitim ve profesyonel hizmetler yer alır. Hedef müşterinin varsayılan tarayıcı olarak Edge ile bir Windows iş bilgisayarı kullanma ihtimalinin yüksek olduğu her sektör, Bing optimizasyonunu değerlendirmelidir.',
      },
      {
        question: 'Bing Ads aynı anahtar kelimeler için Google Ads\'ten daha mı ucuzdur?',
        answer: 'Evet, çoğu durumda. Bing Ads (Microsoft Advertising) TBM\'leri, eşdeğer anahtar kelimeler için genellikle Google Ads\'e göre %30–50 daha düşüktür, çünkü platformda daha az reklamveren rekabeti vardır. Bu araçtaki TBM verileri Bing\'e özel fiyatlandırmayı yansıtır ve potansiyel tasarrufları hesaplamanıza olanak tanır. Birçok reklamveren Google Ads kampanyalarını Bing Ads\'e aktarır ve önemli ölçüde daha düşük edinim maliyeti elde eder.',
      },
      {
        question: 'Bing için kaç anahtar kelime fikri oluşturabilirim?',
        answer: 'Araç, Bing\'de tek bir tohum anahtar kelimeden 1.000\'den fazla anahtar kelime fikri döndürebilir. Bu, birçok Bing\'e özel araştırma aracının sunduğundan çok daha fazladır. Anahtar kelime fikri hacmi, konunun Bing\'in platformundaki anlamsal derinliğini gösterir.',
      },
      {
        question: 'Bing\'in kendi anahtar kelime zorluk metriği var mıdır?',
        answer: 'Bu araç, Google\'ın zorluk metriklerinden ayrı olarak Bing\'in organik sonuçlarının rekabet ortamına dayalı bir KD puanı sağlar. Daha az web sitesi aktif olarak Bing için optimizasyon yaptığından, aynı anahtar kelimelerin Bing\'de Google\'a kıyasla sıralanmasının önemli ölçüde daha kolay olduğunu sıklıkla göreceksiniz. Bu bir arbitraj fırsatı yaratır.',
      },
      {
        question: 'Bing arama niyetini Google\'dan farklı nasıl ele alır?',
        answer: 'Bing\'in arama sonuçları, giderek daha fazla anlamsal yorumlama yapan Google\'a kıyasla doğrudan yanıtları ve tam eşleşme içeriği daha fazla tercih eder. Bu, Bing\'de başlık etiketinizde, H1\'inizde ve URL yolunuzda tam anahtar kelime ifadesinin sıralamalar üzerinde daha güçlü bir etkiye sahip olduğu anlamına gelir. Bing ayrıca arama sonuçlarında daha fazla görsel içerik gösterir ve yerel aramaya farklı bir yaklaşım sergiler.',
      },
      {
        question: 'Bing anahtar kelime verilerini Google SEO stratejimi bilgilendirmek için kullanabilir miyim?',
        answer: 'Evet — Bing anahtar kelime verileri, daha yüksek rekabet nedeniyle Google\'da daha az görünür olan değerli arama trendlerini ve kullanıcı davranışlarını ortaya çıkarabilir. Bing\'in anahtar kelime önerileri bazen Google\'ın anahtar kelime araçlarında görünmeyen uzun kuyruklu varyasyonları ve soru formatlarını ortaya çıkarır. Bu terimler genellikle Google\'ın SERP\'lerinde de yeterince hizmet verilmeyen gerçek kullanıcı ihtiyaçlarını temsil eder.',
      },
      {
        question: 'Bing anahtar kelimeleri için Rekabet puanı nedir?',
        answer: 'Rekabet puanı (0–100), Microsoft Advertising\'de (Bing Ads) o anahtar kelimeye kaç reklamverenin teklif verdiğini yansıtır. 0 puanı hiçbir reklamverenin hedeflemediği anlamına gelir; 100 ise yoğun reklamveren rekabetini ifade eder. Bu metrik organik rekabetten farklıdır ve öncelikle PPC kampanyaları için önemlidir. Ancak Bing\'de yüksek ücretli rekabet aynı zamanda ticari değer sinyali de verir.',
      },
      {
        question: 'İçeriği özellikle Bing\'in arama algoritması için nasıl optimize ederim?',
        answer: 'Temel Bing optimizasyon taktikleri şunları içerir: başlık etiketinde ve H1\'de tam eşleşme anahtar kelimeleri kullanın, açık ve anahtar kelime açısından zengin meta açıklamalar yazın, sitenizin Bing Webmaster Tools\'da doğrulanmış olduğundan emin olun, LinkedIn ve Facebook paylaşımları aracılığıyla sosyal sinyaller oluşturun, özellikle Bing\'e bir XML site haritası gönderin, alt metinli multimedya içeriği kullanın ve hızlı yükleme süreleri sağlayın — Bing, yavaş siteleri Google\'a göre daha agresif bir şekilde cezalandırır.',
      },
      {
        question: 'Trafiğimin yüzde kaçı Bing\'den gelebilir?',
        answer: 'Çoğu web sitesi için Bing, toplam organik trafiğin %5–15\'ini sağlar, ancak bu sektöre ve hedef kitleye göre büyük farklılıklar gösterir. B2B ve kurumsal odaklı siteler genellikle trafiklerinin %15–25\'inin Bing\'den geldiğini görürken, daha genç demografik kitleleri hedefleyen tüketiciye yönelik siteler %5\'in altında kalabilir. Mevcut dağılımınızı görmek için analitiklerinizde Bing/organik kaynağını kontrol edin.',
      },
      {
        question: 'Bing anahtar kelime araştırması Yahoo ve DuckDuckGo\'yu da kapsar mı?',
        answer: 'Kısmen evet. Bing\'in organik arama dizini Yahoo Search sonuçlarını yürütür ve DuckDuckGo\'nun organik sonuçlarını önemli ölçüde etkiler. Bu, Bing anahtar kelimeleri için optimizasyon yapmanın aynı anda üç arama motorunda görünürlük kazanmanızı sağladığı anlamına gelir.',
      },
    ],
  },

  'website-traffic-checker': {
    slug: 'website-traffic-checker',
    name: 'Web Sitesi Trafik Denetleyicisi',
    title: 'Ucretsiz Web Sitesi Trafik Denetleyicisi',
    description: 'Herhangi bir web sitesinin tahmini organik ve ücretli trafiğini kontrol edin. Toplam anahtar kelimeler, trafik değeri ve sıralama hareket verilerini görün.',
    metaDescription: 'Herhangi bir web sitesinin organik ve ücretli trafiğini ücretsiz kontrol edin. Rakipleri kıyaslamak için anahtar kelime sıralamalarını, trafik değerini ve sıralama trendlerini görün.',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'url',
    inputLabel: 'Bir alan adı girin',
    inputPlaceholder: 'ör. example.com',
    buttonText: 'Trafiği Kontrol Et',
    options: [],
    resultType: 'traffic-overview',
    metricsToShow: ['organic_traffic', 'paid_traffic', 'total_keywords', 'traffic_value'],
    tableColumns: [
      { key: 'metric', label: 'Metrik', sortable: false, type: 'text' },
      { key: 'value', label: 'Değer', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'website-traffic-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Herhangi bir web sitesinin arama trafiğini anında tahmin edin',
        description: 'Bir pazara girmeden önce, rakiplerinizin ne kadar arama trafiği yakaladığını bilmeniz gerekir. Herhangi bir alan adını Trafik Denetleyicisine girin ve organik ve ücretli arama performanslarının anında bir tahminini alın. İster bir rakibi değerlendiriyor, ister potansiyel bir satın almayı araştırıyor, ister bir reklam ortağını inceliyor veya bir müşterinin mevcut performansını analiz ediyor olun — bu araç, daha önce pahalı kurumsal abonelikler gerektiren trafik istihbaratını sağlar. "Bu site gerçekte ne kadar arama trafiği alıyor?" sorusunu yanıtlamanın en hızlı yoludur.',
        image: '/website traffic checker/check any websites traffic.png',
      },
      {
        title: 'Toplam anahtar kelime sıralamalarını ve parasal trafik değerini görün',
        description: 'Pano, Toplam Anahtar Kelimeler (ör. 47.854) ve Trafik Değeri (ör. 223.458 $) gösterir. Toplam Anahtar Kelimeler, bir web sitesinin arama görünürlüğünün genişliğini — kaç farklı arama teriminin ziyaretçi getirdiğini — gösterir. Trafik Değeri, bu organik trafiğin Google Ads üzerinden satın alınsa ne kadara mal olacağını tahmin eder. 223.458 $\'lık bir trafik değeri, o web sitesinin organik sıralamalarının aylık yaklaşık çeyrek milyon dolarlık eşdeğer reklam harcamasından tasarruf sağladığı anlamına gelir. Bu metrik, yöneticilere, müşterilere ve paydaşlara SEO yatırım getirisini göstermenin en ikna edici yollarından biridir.',
        image: '/website traffic checker/see how many keywords any site ranks for and traffic of any website traffic.png',
      },
      {
        title: 'Anahtar kelime hareket trendlerini takip edin: Yükselen, Düşen, Yeni, Kaybedilen',
        description: 'Sıralama trendleri tablosu, İlk 3\'teki Anahtar Kelimeler, İlk 10\'daki Anahtar Kelimeler, Yeni Anahtar Kelimeler, İyileşen Sıralamalar, Kötüleşen Sıralamalar ve Kaybedilen Sıralamaları döker. Bu, SEO performansının nabzıdır. "İyileşen" "Kötüleşen"i aşıyorsa, web sitesinin SEO\'su çalışıyordur. "Kaybedilen" yüksekse, bir şeyler yanlış gitmiştir — muhtemelen bir algoritma güncellemesi, içerik eskimesi veya rakipler onları geçmiştir. Ajanslar, aylık raporlarda müşterilere SEO yatırımlarının ilerleme ivmesi oluşturup oluşturmadığını göstermek için bu verileri sunar.',
        image: '/website traffic checker/see keywords in tops declining and improved keywords.png',
      },
      {
        title: 'Organik ve ücretli trafik stratejisini karşılaştırın',
        description: 'Bölünmüş görünüm, Organik Trafik ve Ücretli Trafiği yan yana gösterir. Bu, bir web sitesinin arama stratejisini bir bakışta ortaya koyar. Yüksek organik trafiğe ve sıfır ücretli trafiğe sahip bir web sitesi, SEO\'ya yoğun yatırım yapmıştır. Dengeli organik ve ücretli trafiğe sahip bir web sitesi çeşitlenmiştir. Tamamen ücretli trafiğe dayanan bir web sitesi, bütçe kesintilerine karşı savunmasızdır. Kendi stratejinizi kıyaslamak ve rekabet avantajlarını belirlemek için bunu kullanın.',
        image: '/website traffic checker/see organic and paid traffic.png',
      },
    ],
    faqs: [
      {
        question: 'Web sitesi trafik denetleyicisi analitiklere erişim olmadan trafiği nasıl tahmin eder?',
        answer: 'Trafik denetleyicileri, anahtar kelime sıralama verileri ve tıklama oranı modellerinin bir kombinasyonunu kullanarak organik trafiği tahmin eder. Araç, bir web sitesinin hangi anahtar kelimeler için sıralandığını, sıralama pozisyonlarını ve bu anahtar kelimelerin aylık arama hacimlerini belirler. Ardından, her anahtar kelimeden gelen tahmini aylık ziyaretleri hesaplamak için pozisyona dayalı tıklama oranı tahminleri uygular (ör. #1 tıklamaların ~%28\'ini alır, #2 ~%15\'ini alır). Tüm anahtar kelime düzeyindeki trafik tahminlerinin toplamı, toplam trafik tahminini oluşturur.',
      },
      {
        question: 'Trafik değeri nedir ve nasıl hesaplanır?',
        answer: 'Trafik değeri, bir web sitesinin organik trafiğini Google Ads üzerinden çoğaltmanın tahmini aylık maliyetini temsil eder. Her anahtar kelimenin tahmini organik trafiği TBM\'si (Tıklama Başına Maliyet) ile çarpılarak ve ardından tüm anahtar kelimeler üzerinden toplanarak hesaplanır. Örneğin, bir web sitesi 5 $ TBM\'si olan bir anahtar kelimeden 1.000 organik ziyaret alıyorsa, o anahtar kelime trafik değerine 5.000 $ katkıda bulunur. Bu, SEO yatırımının parasal değerini güçlü bir şekilde ortaya koyar.',
      },
      {
        question: 'Organik trafik ile ücretli trafik arasındaki fark nedir?',
        answer: 'Organik trafik, ücretsiz arama motoru sonuçlarından gelir — kullanıcılar, sonucunuz alaka düzeyi ve otoriteye dayalı olarak Google\'da doğal şekilde göründüğü için tıklar. Ücretli trafik, arama motoru reklamcılığından (Google Ads) gelir — sponsorlu listelemenize yapılan her tıklama için ödeme yaparsınız. Organik trafik, tıklama başına ödeme yapmadığınız anlamında "ücretsiz"dir, ancak içerik oluşturma ve SEO yatırımı gerektirir. Ücretli trafik anında görünürlük sağlar ancak reklam bütçenizi duraklattığınız anda durur.',
      },
      {
        question: '"Yeni Anahtar Kelimeler", "İyileşen", "Kötüleşen" ve "Kaybedilen" metrikleri ne anlama gelir?',
        answer: '"Yeni Anahtar Kelimeler", web sitesinin en son dönemde sıralanmaya başladığı arama terimleridir — yeni içeriğin dizine alındığını veya mevcut içeriğin görünürlük kazandığını gösterir. "İyileşen Sıralamalar", web sitesinin pozisyonunun yukarı çıktığı (#1\'e yaklaştığı) anahtar kelimelerdir. "Kötüleşen Sıralamalar", pozisyonun düştüğü anahtar kelimelerdir. "Kaybedilen Sıralamalar", web sitesinin daha önce sıralandığı ancak artık ilk 100\'de görünmediği anahtar kelimelerdir. Sağlıklı bir web sitesi genellikle Yeni + İyileşen\'in Kötüleşen + Kaybedilen\'i önemli ölçüde aştığını gösterir.',
      },
      {
        question: 'Küçük ve büyük web siteleri için web sitesi trafik tahminleri ne kadar doğrudur?',
        answer: 'Trafik tahminleri, binlerce sıralaması olan daha büyük web siteleri için genel olarak daha doğrudur, çünkü istatistiksel model birçok anahtar kelime üzerinden ortalama alır. 100\'den az anahtar kelime için sıralanan küçük web siteleri için tahminlerin hata payı daha geniş olabilir, çünkü tek bir anahtar kelimenin fazla veya eksik tahmini toplam üzerinde daha büyük bir etki yaratır. Rekabet kıyaslaması için göreceli karşılaştırma (web siteniz ile rakipler) mutlak sayılardan daha güvenilirdir.',
      },
      {
        question: 'Daha düşük otoriteye sahip bir rakip neden web sitemden daha fazla trafiğe sahip?',
        answer: 'Otorite ve trafik ilişkili ancak özdeş değildir. Bir rakip, daha düşük otoriteyle trafikte sizi geçebilir eğer: (1) Daha yüksek hacimli anahtar kelimeleri hedefleyen daha iyi bir içerik stratejisi varsa, (2) Daha sık ve tutarlı şekilde içerik üretiyorsa, (3) Sıralanmak için daha az otorite gerektiren uzun kuyruklu anahtar kelimeleri hedefliyorsa, (4) Üstün sayfa içi optimizasyon ve teknik SEO\'ya sahipse veya (5) Genel alan adı metrikleri düşük olmasına rağmen belirli bir niş\'te konu otoritesinden yararlanıyorsa.',
      },
      {
        question: 'Trafik denetleyicisi verilerini rekabet analizleri için nasıl kullanabilirim?',
        answer: 'İlk 5 rakibiniz için Trafik Denetleyicisini çalıştırın ve karşılaştırın: toplam organik trafik, toplam anahtar kelimeler, trafik değeri, organik ve ücretli dağılım ve anahtar kelime hareket trendleri. Bu, kimin en hızlı büyüdüğünü, kimin ücretli reklamlara bağımlı olduğunu, kimin en geniş anahtar kelime kapsamına sahip olduğunu ve her rakibin en fazla değeri nerede ürettiğini ortaya koyar. Ardından belirli anahtar kelimelere derinlemesine bakın — rakipler hangi anahtar kelimelerde sıralanıyor da siz sıralanmıyorsunuz? Bunlar sizin içerik boşluğu fırsatlarınızdır.',
      },
      {
        question: 'Bir web sitesinin yüksek trafik değerine sahip olması ancak orta düzey trafik hacmine sahip olması ne anlama gelir?',
        answer: 'Bu, arama hacimleri orta düzeyde olsa bile web sitesinin yüksek TBM\'lere sahip ticari açıdan değerli anahtar kelimeler için sıralandığı anlamına gelir. Ortalama 20 $ TBM\'li anahtar kelimelerden aylık 10.000 ziyaret alan bir web sitesinin trafik değeri 200.000 $\'dır — ortalama 0,50 $ TBM\'li anahtar kelimelerden 100.000 ziyaret alan bir web sitesinden (50.000 $ trafik değeri) daha fazladır. Trafik hacmine göre yüksek trafik değeri, web sitesinin gelir getiren, dönüşüm hunisinin alt kısmındaki yüksek niyetli anahtar kelimeleri hedeflediğini gösterir.',
      },
      {
        question: 'Trafik trendlerini zaman içinde nasıl takip ederim?',
        answer: 'Trafik verilerini aylık olarak dışa aktarın ve geçmişe dönük bir pano oluşturun. Toplam organik trafik, toplam anahtar kelimeler, ilk 3\'teki anahtar kelimeler, ilk 10\'daki anahtar kelimeler ve trafik değerini 6-12 aylık dönemler boyunca takip edin. Büyüme veya düşüşü görselleştirmek için bunları trend çizgileri olarak çizin. Takip edilecek en anlamlı metrik "İlk 10\'daki Anahtar Kelimeler"dir çünkü doğrudan trafikle ilişkilidir — birinci sayfada ne kadar çok anahtar kelimeniz varsa, o kadar fazla trafik alırsınız.',
      },
      {
        question: 'Bu aracı bir web sitesinin gelirini tahmin etmek için kullanabilir miyim?',
        answer: 'Trafik denetleyicisi verileri tek başına geliri ortaya koymasa da kaba tahminler oluşturabilirsiniz. Reklam destekli web siteleri için tahmini trafiği tipik RPM\'lerle (niş\'e bağlı olarak 1.000 sayfa görüntüleme başına 5-30 $) çarpın. E-ticaret web siteleri için sektör ortalama dönüşüm oranlarını (%1-3) ve ortalama sipariş değerlerini uygulayın. SaaS web siteleri için tipik dönüşüm oranlarını (ücretsiz denemeye %2-5) ve bilinen fiyatlandırmayı kullanarak trafikten potansiyel müşteri sayısını tahmin edin.',
      },
      {
        question: 'Bir web sitesi neden sıfır ücretli trafik gösteriyor?',
        answer: 'Sıfır ücretli trafik, web sitesinin şu anda aracın veri kaynaklarının tespit edebildiği Google Ads kampanyaları yürütmediği anlamına gelir. Bu, web sitesinin tamamen organik SEO\'ya dayandığı (içerik odaklı işletmeler için yaygın bir strateji), Google Arama yerine diğer platformlarda (Facebook, LinkedIn, görüntülü reklam ağları) reklam yayınladığı veya yakın zamanda kampanyaları duraklatmış olduğu anlamına gelebilir. Sıfır ücretli trafik doğası gereği iyi veya kötü değildir — yalnızca web sitesinin arama görünürlüğü stratejisinin tamamen organik olduğunu gösterir.',
      },
      {
        question: 'Trafik denetleyicisi alt alan adlarını ve alt klasörleri nasıl ele alır?',
        answer: 'Araç, girilen alan adının tamamı için trafiği kontrol eder. Bir web sitesi alt alan adları kullanıyorsa (blog.example.com, shop.example.com), bunlar genellikle kök alan adının genel trafik tahminine dahildir. Alt klasörler (example.com/blog/, example.com/shop/) aynı alan adının parçası oldukları için her zaman dahildir. Belirli bir alt alan adı veya URL yolu için trafik tahminlerine ihtiyacınız varsa, bazı araçlar trafiği sayfa veya bölüm bazında ayrıntılı gösteren URL düzeyinde analiz sunar.',
      },
    ],
  },

  'broken-link-checker': {
    slug: 'broken-link-checker',
    name: 'Kırık Bağlantı Denetleyicisi',
    title: 'Ucretsiz Kırık Bağlantı ve Sayfa Sağlığı Denetleyicisi',
    description: 'Herhangi bir web sayfasını kırık bağlantılar, SEO sorunları ve sayfa sağlığı problemleri açısından kontrol edin. Uygulanabilir önerilerle ayrıntılı bir denetim alın.',
    metaDescription: 'Herhangi bir web sayfasını kırık bağlantılar ve SEO sorunları açısından ücretsiz kontrol edin. Sayfa sağlık puanları, iç/dış bağlantı sayıları ve düzeltme önerileri alın.',
    iconName: 'Link2',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Bir URL girin',
    inputPlaceholder: 'ör. https://example.com',
    buttonText: 'Sayfayı Kontrol Et',
    options: [],
    resultType: 'broken-links',
    metricsToShow: ['page_score', 'issues_found', 'internal_links', 'external_links'],
    tableColumns: [
      { key: 'issue', label: 'Sorun', sortable: false, type: 'text' },
      { key: 'severity', label: 'Ciddiyet', sortable: true, type: 'badge' },
      { key: 'description', label: 'Açıklama', sortable: false, type: 'text' },
    ],
    apiEndpoint: 'broken-link-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Herhangi bir sayfayı kırık bağlantılar ve teknik SEO sağlığı açısından kontrol edin',
        description: 'Kırık bağlantılar sessizce kullanıcı deneyimini ve SEO performansını yok eder. Herhangi bir URL\'yi denetleyiciye girin, "Sayfayı Kontrol Et"e tıklayın ve o sayfanın bağlantı sağlığı ve teknik SEO durumunun anında bir denetimini alın. Bu, bağlantı bağlantı elle kontrolünü, 404 hatalarını, yönlendirme zincirlerini ve ölü çıkış bağlantılarını tespit eden otomatik bir taramayla değiştirir. Web sitesi sahipleri, SEO uzmanları ve web yöneticileri bunu yeni sayfaları yayınlamadan önce, site taşımalarından sonra ve düzenli aylık sağlık kontrollerinin bir parçası olarak kullanır.',
        image: '/Broken link checker/check your website broken links and technical seo health.png',
      },
      {
        title: 'Teknik SEO puanınızı ve kritik sorunlarınızı izleyin',
        description: 'Kırık bağlantıların ötesinde, araç bir Sayfa Puanı (0-100) ve bulunan toplam sorun sayısını sunar. 0 sorunla 100 Sayfa Puanı, sayfanın teknik olarak sağlıklı olduğu anlamına gelir. 80\'in altındaki her şey dikkat gerektiren sorunları işaret eder. Bu puanlama sistemi, web sitenizin her sayfası için hızlı bir geçti/kaldı metriği sağlar.',
        image: '/Broken link checker/See your websites technical seo score + number of critical seo issues.png',
      },
      {
        title: 'İç ve dış bağlantı dağılımını analiz edin',
        description: 'Araç, İç Bağlantıları (aynı alan adındaki diğer sayfalara olan bağlantılar) ve Dış Bağlantıları (diğer web sitelerine olan bağlantılar) sayar ve kategorize eder. Bu veriler iki nedenden dolayı kritiktir: (1) İç bağlantı dağılımı, arama motorlarının web sitenizi taramasını ve dizine almasını etkiler ve (2) dış bağlantıların kalitesi sayfanızın güvenilirliğini etkiler.',
        image: '/Broken link checker/See internal links from a page external links.png',
      },
      {
        title: 'Belirli teknik sorunları belirleyin ve önceliklendirin',
        description: 'Sorunlar tablosu, bulunan her sorunu, ciddiyet derecesini (Bilgi, Uyarı, Kritik) ve açıklamasını listeler. "Render-engelleyici kaynaklar" ve "Düşük içerik oranı" gibi sorunlar, Google\'ın sıralama faktörleri olarak kullandığı Core Web Vitals\'ı ve içerik kalitesi sinyallerini doğrudan etkiler. Her sorun, uygulanabilir bağlamla birlikte gelir — tam olarak neyin yanlış olduğunu bilirsiniz ve ciddiyet derecesine göre öncelik belirleyebilirsiniz.',
        image: '/Broken link checker/see details about techincal issues from your page.png',
      },
    ],
    faqs: [
      {
        question: 'Kırık bağlantı nedir ve SEO\'yu nasıl etkiler?',
        answer: 'Kırık bağlantı (ölü bağlantı veya 404 hatası olarak da bilinir), artık var olmayan veya hata döndüren bir sayfaya işaret eden bir bağlantıdır. Kırık bağlantılar SEO\'yu üç şekilde etkiler: (1) Tarama bütçesini boşa harcar — arama motoru botları yararlı sayfaları dizine eklemek yerine çıkmaz sokaklarda zaman harcar, (2) Bağlantı değeri akışını keser — harici siteler 404 döndüren bir sayfanıza bağlantı veriyorsa, bu geri bağlantıların sıralama değerini kaybedersiniz ve (3) Kullanıcı deneyimine zarar verir — kırık bağlantılarla karşılaşan ziyaretçiler sitenize olan güvenlerini kaybeder ve hemen çıkma oranını artırır.',
      },
      {
        question: 'Sayfa Puanı nedir ve nasıl hesaplanır?',
        answer: 'Sayfa Puanı, bir web sayfasının genel teknik sağlığını değerlendiren 0-100 arası bir metriktir. Kırık bağlantıları (iç ve dış), sayfa yükleme performansını, meta etiket tamlığını, içerik-HTML oranını, render-engelleyici kaynakları, mobil uyumluluk göstergelerini ve diğer teknik SEO sinyallerini dikkate alır. 90-100 arası bir puan mükemmel sağlığı gösterir, 70-89 iyi ama iyileştirme alanı var demektir, 50-69 dikkat gerektirir ve 50\'nin altı arama performansını muhtemelen olumsuz etkileyen ciddi teknik sorunlara işaret eder.',
      },
      {
        question: 'SEO\'da iç bağlantılar ile dış bağlantılar arasındaki fark nedir?',
        answer: 'İç bağlantılar, aynı alan adı içindeki sayfaları birbirine bağlar (ör. ana sayfanızdan blogunuza bağlantı vermek). Arama motorlarının içeriğinizi keşfetmesine ve taramasına yardımcı olur, bağlantı değerini (sıralama gücünü) siteniz genelinde dağıtır ve içerik hiyerarşileri oluşturur. Dış bağlantılar (giden bağlantılar olarak da bilinir) web sitenizden diğer alan adlarına yönlendirir. Otoriter kaynaklara bağlantı verdiklerinde arama motorlarına içerik kalitesi ve tematik alaka düzeyi sinyali verir. Her iki bağlantı türü de SEO için gereklidir — sağlıklı bir sayfa genellikle güçlü bir iç bağlantı yapısına ve güvenilir kaynaklara birkaç ilgili dış bağlantıya sahiptir.',
      },
      {
        question: 'Web sitemi ne sıklıkla kırık bağlantılar açısından kontrol etmeliyim?',
        answer: 'En önemli sayfalarınızı (ana sayfa, en çok ziyaret edilen açılış sayfaları, en yüksek trafikli blog yazıları) aylık kontrol edin. Üç ayda bir tam site genelinde kırık bağlantı denetimi yapın. Ayrıca site taşımalarından, CMS güncellemelerinden, URL yapısı değişikliklerinden veya içerik silme işlemlerinden sonra her zaman kontrol edin — bunlar kırık bağlantı oluşturan en yaygın olaylardır. Binlerce sayfası olan büyük siteler için, yeni kırık bağlantıları birikmeden önce yakalamak amacıyla haftalık otomatik taramalar planlamayı düşünün.',
      },
      {
        question: 'Render-engelleyici kaynaklar nedir ve neden önemlidir?',
        answer: 'Render-engelleyici kaynaklar, tarayıcının sayfayı tamamen yüklenene kadar görüntülemesini engelleyen CSS stil sayfaları ve JavaScript dosyalarıdır. Kullanıcının gerçek içeriği gördüğü an olan ilk anlamlı boyama süresini yavaşlatırlar. Bu, Google\'ın sıralama faktörleri olarak kullandığı Largest Contentful Paint (LCP) ve First Contentful Paint (FCP) gibi Core Web Vitals metriklerini doğrudan etkiler. Çözümler arasında kritik olmayan JavaScript\'i erteleme, kritik CSS\'i satır içi yapma ve gerekli olmayan betikler için asenkron yükleme kullanma yer alır.',
      },
      {
        question: 'Sorun raporundaki "Düşük içerik oranı" ne anlama gelir?',
        answer: 'Düşük içerik oranı (düşük metin-HTML oranı olarak da bilinir), sayfanın HTML koduna oranla çok az okunabilir metin içeriğine sahip olduğu anlamına gelir. Arama motorları bunu kullanıcılara sınırlı değer sunan ince içerikli bir sayfa olarak yorumlayabilir. Tipik sağlıklı oran %25\'in üzerinde metin-HTML\'dir. JavaScript çerçeveleri ağırlıklı sayfalar, büyük navigasyon menüleri veya aşırı reklamlar bu sorunu tetikleyebilir. Çözüm, her sayfanın kullanıcının arama amacını karşılayan önemli, benzersiz ve bilgilendirici metin içeriğine sahip olmasını sağlamaktır.',
      },
      {
        question: 'Web sitemdeki kırık bağlantılar, kendileri kırık bağlantı içermeyen sayfaları etkileyebilir mi?',
        answer: 'Evet, tarama bütçesi israfı adı verilen bir kavramla. Arama motorları her web sitesine sınırlı bir tarama bütçesi atar — her ziyarette tarayacakları sayfa sayısı. Botlar kırık bağlantılarla karşılaştığında, onları çıkmaz sokaklara kadar takip eder ve iyi sayfalarınızı dizine eklemek için harcanabilecek tarama bütçesini kullanırlar. Büyük sitelerde (10.000+ sayfa), aşırı kırık bağlantılar önemli yeni içeriğin daha yavaş keşfedilmesine ve dizine eklenmesine neden olabilir, bu da tamamen sağlıklı sayfaların sıralamasına dolaylı olarak zarar verir.',
      },
      {
        question: 'Önce iç mi yoksa dış kırık bağlantıları mı düzeltmeliyim?',
        answer: 'Önce iç kırık bağlantıları düzeltin. İç kırık bağlantılar, web sitenizin taranabilirliğini, navigasyonunu ve iç bağlantı değeri dağılımını doğrudan etkiler — bunların tamamı sizin kontrolünüzdedir. Dış kırık bağlantılar (sayfanızdan çevrimdışı olan diğer sitelere verilen bağlantılar) da önemlidir, ancak etkileri daha az şiddetlidir. Dış kırık bağlantılar için bağlantıyı kaldırabilir, güncellenmiş bir kaynağa bağlantıyla değiştirebilir veya içeriğin arşivlenmiş sürümlerini bulmak için Wayback Machine\'i kullanabilirsiniz.',
      },
      {
        question: 'Bağlantı değeri nedir ve kırık bağlantılar onu nasıl etkiler?',
        answer: 'Bağlantı değeri (eskiden "link juice" olarak adlandırılırdı), bağlantılar aracılığıyla bir sayfadan diğerine aktarılan sıralama değeridir. Otoriter bir site sayfanıza bağlantı verdiğinde, sayfanızın daha iyi sıralanmasına yardımcı olan bağlantı değeri aktarır. Bu bağlantı, sitenizde 404 hatası döndüren bir sayfaya işaret ediyorsa, bağlantı değeri boşa harcanır — bir çıkmaz sokağa akar. Kırık gelen bağlantıları bulup ilgili aktif sayfalara 301 yönlendirmeleri kurarak, bu kaybedilen bağlantı değerini geri kazanabilir ve sıralamalarınızı iyileştirebilirsiniz.',
      },
      {
        question: 'Kırık bağlantı verilerini bağlantı oluşturma için nasıl kullanırım?',
        answer: 'Kırık Bağlantı Oluşturma, kanıtlanmış bir bağlantı edinme stratejisidir. Bir kırık bağlantı denetleyicisi kullanarak rakip veya sektör sitelerindeki kırık sayfaları bulun. Ardından kendi web sitenizde ölü sayfayla aynı konuyu kapsayan içerik oluşturun. Son olarak, kırık sayfaya bağlantı veren web sitelerine ulaşın ve ölü bağlantıyı sizin aktif, ilgili içeriğinize bir bağlantıyla değiştirmelerini önerin. Bu strateji işe yarar çünkü web yöneticilerinin gerçek bir sorununu çözerken aynı zamanda bir geri bağlantı kazanırsınız.',
      },
      {
        question: 'Hangi HTTP durum kodları kırık bağlantıları gösterir?',
        answer: 'En yaygın kırık bağlantı durum kodları şunlardır: 404 (Bulunamadı — sayfa mevcut değil), 410 (Kaldırıldı — sayfa kasıtlı olarak kaldırılmış), 500 (Dahili Sunucu Hatası — sunucu başarısız oldu), 502 (Kötü Ağ Geçidi) ve 503 (Hizmet Kullanılamıyor). Ayrıca, 301 (Kalıcı Yönlendirme) ve 302 (Geçici Yönlendirme) başlı başına "kırık" değildir, ancak yönlendirme zincirleri (ard arda birden fazla yönlendirme) bağlantı değerini boşa harcar ve sayfa yükleme sürelerini yavaşlatır. Bu araç tüm bu durum kodlarını tespit eder ve ciddiyet derecesine göre kategorize eder.',
      },
      {
        question: 'Kırık bağlantılar Google\'ın sayfalarımı dizinden çıkarmasına neden olabilir mi?',
        answer: 'Birkaç kırık bağlantı dizinden çıkarmaya neden olmaz. Ancak web sitenizin URL\'lerinin önemli bir yüzdesi 404 hatası döndürürse veya navigasyonunuzdan bağlantı verilen kritik sayfalar sürekli başarısız olursa, Google alan adınız için tarama hızını düşürebilir ve sitenizi bakımsız olarak işaretleyebilir. Kırık bağlantıların yetim sayfalar (kendilerine işaret eden geçerli bağlantısı olmayan sayfalar) oluşturduğu aşırı durumlarda, bu belirli sayfalar dizinden çıkarılabilir. Düzenli kırık bağlantı denetimi bu bozulmayı önler.',
      },
    ],
  },

  'ai-visibility-checker': {
    slug: 'ai-visibility-checker',
    name: 'Yapay Zeka Görünürlük Denetleyicisi',
    title: 'Ucretsiz Yapay Zeka Görünürlük Denetleyicisi',
    description: 'Google Yapay Zeka Genel Bakışlarının web sitenizi nasıl etkilediğini görün. Anahtar kelimelerinizin yüzde kaçının Yapay Zeka Genel Bakışları tetiklediğini, ne kadar trafiğin risk altında olduğunu öğrenin ve bir Yapay Zeka Görünürlük Puanı alın.',
    metaDescription: 'Google Yapay Zeka Genel Bakışlarının web sitenizi nasıl etkilediğini ücretsiz kontrol edin. Yapay Zeka Genel Bakışı maruz kalma oranınızı, etkilenen anahtar kelimeleri, risk altındaki trafiği ve Yapay Zeka Görünürlük Puanınızı görün.',
    iconName: 'Sparkles',
    category: 'other',
    inputType: 'url',
    inputLabel: 'Bir alan adı girin',
    inputPlaceholder: 'ör. example.com',
    buttonText: 'Yapay Zeka Görünürlüğünü Kontrol Et',
    options: [],
    resultType: 'ai-visibility',
    metricsToShow: ['ai_exposure', 'ai_keywords', 'traffic_at_risk'],
    tableColumns: [
      { key: 'metric', label: 'Metrik', sortable: false, type: 'text' },
      { key: 'value', label: 'Değer', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'ai-visibility-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Herhangi bir web sitesinin yapay zeka destekli aramadaki görünürlüğünü kontrol edin',
        description: 'Yapay Zeka Genel Bakışları, ChatGPT, Perplexity ve Gemini, kullanıcıların bilgi bulma şeklini temelden değiştiriyor — ve çoğu web sitesinin bu yeni ortamda nasıl performans gösterdiğine dair hiçbir fikri yok. Herhangi bir alan adı girin, "Yapay Zeka Görünürlüğünü Kontrol Et"e tıklayın ve web sitesinin yapay zeka arama sonuçlarında nasıl göründüğüne dair kapsamlı bir denetim alın. Bu, geleneksel SEO\'nun yanında yükselen disiplin olan Yapay Zeka Motor Optimizasyonu\'nun (AEO) ilk adımıdır.',
        image: '/ai visibility checker/check any websites visibility in llms.png',
      },
      {
        title: 'Yapay Zeka Genel Bakışı anahtar kelime dağılımını ve konumlandırmayı analiz edin',
        description: 'Ayrıntılı metrikler Toplam Sıralanan Anahtar Kelimeler, Yapay Zeka Genel Bakışlarına Sahip Anahtar Kelimeler, Yapay Zeka Genel Bakışı Maruz Kalma Oranı, Pozisyona Göre Anahtar Kelime Dağılımı (#1 YZ Anahtar Kelimeler, #2-3, #4-10), YZ Anahtar Kelimelerinden Organik Trafik ve Toplam Organik Trafiği gösterir. Bu ayrıntılı döküm, anahtar kelime portföyünüzün ne kadarının Google\'ın Yapay Zeka Genel Bakışlarından etkilendiğini tam olarak gösterir.',
        image: '/ai visibility checker/see keyword distribution for ai overview.png',
      },
      {
        title: 'Yapay Zeka Genel Bakışları tarafından ne kadar trafiğin risk altında olduğunu ölçün',
        description: 'Çift metrik ekranı, Yapay Zeka Genel Bakışlarına Sahip Anahtar Kelimeler ve Risk Altındaki Trafik gösterir. "Risk Altındaki Trafik", Yapay Zeka Genel Bakışlarının daha önce geleneksel organik sonuçlara giden tıklamaları absorbe etmesiyle azalabilecek organik trafiği tahmin eder. Bu, yapay zeka aramasının işletmeniz üzerindeki etkisini anlamak için en önemli metriktir.',
        image: '/ai visibility checker/see number of keywords in ai overview and which percentage of your traffic is at risk with google ai overviews.png',
      },
      {
        title: 'Alan adı gücünü Yapay Zeka Genel Bakışı maruz kalmasına karşı kıyaslayın',
        description: 'Pano, Alan Adı Puanınızı (ör. 97 "Çok Güçlü") Yapay Zeka Genel Bakışı maruz kalma yüzdenizle birleştirir. Bu kombinasyon kritiktir: güçlü bir alan adı sizi Yapay Zeka Genel Bakışlarından korumaz. En otoriter web siteleri bile yapay zeka tarafından oluşturulan yanıtlardan kaynaklanan büyük tıklama oranı erozyonuna maruz kalmaktadır. Alan Adı Puanı geleneksel SEO gücünüzü gösterirken, maruz kalma metriği bu gücün ne kadarının yapay zeka tarafından tehdit edildiğini gösterir.',
        image: '/ai visibility checker/see your domain score in ai overview and exposure level to ai overview.png',
      },
    ],
    faqs: [
      {
        question: 'Yapay zeka görünürlüğü nedir ve 2025-2026\'da SEO için neden önemlidir?',
        answer: 'Yapay zeka görünürlüğü, web sitenizin, markanızın veya içeriğinizin yapay zeka destekli arama deneyimlerinde — Google Yapay Zeka Genel Bakışları, ChatGPT yanıtları, Perplexity cevapları, Gemini sonuçları ve Microsoft Copilot dahil — ne kadar belirgin şekilde göründüğünü ifade eder. Önemlidir çünkü bu yapay zeka sistemleri arama davranışını temelden değiştirmektedir. Google Yapay Zeka Genel Bakışları artık bilgilendirici sorguların %70\'inden fazlasında görünmekte ve genellikle kullanıcının sorusunu herhangi bir web sitesine tıklama gerektirmeden doğrudan yanıtlamaktadır. Bu, geleneksel SEO sıralamalarının tek başına artık trafiği garanti etmediği anlamına gelir.',
      },
      {
        question: 'Google Yapay Zeka Genel Bakışları nedir ve organik trafiği nasıl etkiler?',
        answer: 'Google Yapay Zeka Genel Bakışları (eski adıyla SGE — Search Generative Experience), birçok sorgu için Google arama sonuçlarının üstünde görünen yapay zeka tarafından oluşturulan yanıt özetleridir. Birden fazla kaynaktan bilgi sentezleyerek doğrudan bir yanıt sunarlar ve kullanıcıların bireysel web sitelerine tıklama ihtiyacını azaltırlar. Araştırmalar, Yapay Zeka Genel Bakışlarının sorgu türüne bağlı olarak organik sonuçlara tıklama oranlarını %18-64 oranında azaltabildiğini göstermektedir. Bilgilendirici sorgular en çok etkilenirken, navigasyonel ve işlemsel sorgular daha az etkilenmektedir.',
      },
      {
        question: '"Risk Altındaki Trafik" ne anlama gelir ve nasıl hesaplanır?',
        answer: '"Risk Altındaki Trafik", Yapay Zeka Genel Bakışlarının tıklamaları absorbe etmesiyle azalabilecek organik trafiği tahmin eder. (a) Web sitenizin şu anda sıralandığı ve trafik aldığı ve (b) Google\'ın o sorgu için bir Yapay Zeka Genel Bakışı gösterdiği tüm anahtar kelimelerin belirlenmesiyle hesaplanır. Bu anahtar kelimelerden gelen trafik risk altındaki hacmi temsil eder, çünkü Yapay Zeka Genel Bakışları daha önce sayfalarınıza ziyaretçi gönderen tıklama oranlarını azaltabilir.',
      },
      {
        question: 'Yapay Zeka Genel Bakışı maruz kalması nedir ve yüksek bir yüzde ne anlama gelir?',
        answer: 'Yapay Zeka Genel Bakışı maruz kalması, sıralanan anahtar kelimelerinizin Google Yapay Zeka Genel Bakışlarını tetikleyen yüzdesidir. %76,8\'lik bir maruz kalma, sıralanan anahtar kelimelerinizin dörtte üçünden fazlası için Google\'ın organik sonuçların üzerinde yapay zeka tarafından oluşturulan bir yanıt gösterdiği anlamına gelir.',
      },
      {
        question: 'Yapay zeka görünürlüğü geleneksel SEO görünürlüğünden nasıl farklıdır?',
        answer: 'Geleneksel SEO görünürlüğü, standart organik arama sonuçlarındaki (mavi bağlantılar) varlığınızı ölçer. Yapay zeka görünürlüğü, yapay zeka tarafından oluşturulan yanıtlardaki varlığınızı ölçer. İkisi birbirinden ayrılabilir: organik olarak 1. sırada olan bir web sitesi aynı anahtar kelime için Yapay Zeka Genel Bakışında alıntılanmayabilir veya 5. sıradaki bir site yapay zeka yanıtı için birincil alıntı kaynağı olabilir. Yapay zeka görünürlüğü farklı faktörlere bağlıdır — içerik kapsamlılığı, yapılandırılmış veriler, varlık tanıma, olgusal doğruluk ve yapay zeka sistemlerinin bilgilerinizi ne kadar kolay çıkarıp alıntılayabildiği.',
      },
      {
        question: 'Yapay Zeka Motor Optimizasyonu (AEO) nedir ve nasıl başlarım?',
        answer: 'AEO, içeriğinizi yapay zeka tarafından oluşturulan arama yanıtlarında referans gösterilmesi, alıntılanması ve öne çıkarılması için optimize etme uygulamasıdır. Temel stratejiler şunlardır: net ve öz yanıtlar sunma, yapılandırılmış veri ve şema işaretlemesi kullanma, tematik otorite oluşturma, orijinal veriler dahil etme ve yüksek E-E-A-T sinyallerini sürdürme.',
      },
      {
        question: 'Alan adı gücü Yapay Zeka Genel Bakışı alıntılanmasını nasıl etkiler?',
        answer: 'Google\'ın Yapay Zeka Genel Bakışları dahil yapay zeka sistemleri, otoriter, tanınmış kaynakları daha sık alıntılama eğilimindedir. Daha yüksek Alan Adı Puanları, yapay zeka yanıtlarında daha yüksek alıntılanma oranlarıyla ilişkilidir. Ancak yalnızca alan adı gücü yeterli değildir — yapay zeka ayrıca içerik özgüllüğünü, olgusal doğruluğu, güncelliği ve içeriğin belirli sorguyu ne kadar iyi yanıtladığını da değerlendirir. Belirli bir konuda derin uzmanlığa sahip niş bir site, içeriği daha ilgili ve kapsamlıysa yüksek otoriteli genel bir sitenin önünde alıntılanabilir.',
      },
      {
        question: 'Hangi içerik türleri Yapay Zeka Genel Bakışı trafik kaybına en çok açıktır?',
        answer: 'Basit olgusal soruları yanıtlayan bilgilendirici içerik en savunmasızdır — tanımlar, hızlı nasıl yapılır yanıtları, istatistikler, karşılaştırmalar ve "nedir" sorguları. Daha dayanıklı içerik türleri arasında derinlemesine analizler, etkileşimli araçlar, orijinal araştırmalar ve kişisel deneyime dayalı ürün karşılaştırmaları yer alır.',
      },
      {
        question: 'Hangi yapay zeka platformlarının içeriğimi alıntıladığını görebilir miyim?',
        answer: 'Bu araç özellikle Google\'daki Yapay Zeka Genel Bakışı maruz kalmasını ölçer. Daha geniş yapay zeka platformu izlemesi (ChatGPT, Perplexity, Gemini, Copilot) için özel marka izleme araçları, markanızın ve içeriğinizin yapay zeka platformlarında nerede ve nasıl göründüğünü takip eder. Bu aracın metrikleri — özellikle anahtar kelime düzeyindeki Yapay Zeka Genel Bakışı verileri — size Google\'a özgü resmi verir ki bu, Google hala arama trafiğine hakim olduğu için en yüksek etkiye sahip kanaldır.',
      },
      {
        question: 'Yapay Zeka Genel Bakışı maruz kalmam %50\'nin üzerindeyse ne yapmalıyım?',
        answer: 'Yüksek maruz kalma çok aşamalı bir yanıt gerektirir: (1) Hangi belirli anahtar kelimelerin Yapay Zeka Genel Bakışlarını tetiklediğini denetleyin, (2) En yüksek trafik alan sayfalarınızı yapay zeka alıntılanması için optimize edin, (3) Trafik kaynaklarını çeşitlendirin, (4) Yapay Zeka Genel Bakışlarının çoğaltamayacağı içerik formatları oluşturun ve (5) Aylık izleyin.',
      },
      {
        question: 'Yapay zeka görünürlüğü bağlamındaki Alan Adı Puanı geleneksel otoriteyle nasıl ilişkilidir?',
        answer: 'Yapay Zeka Genel Bakışı verilerinin yanındaki Alan Adı Puanı, geri bağlantı profili gücüne dayalı aynı otorite metriğidir. Yapay zeka görünürlüğü bağlamında kritik bir perspektif sunar: güçlü bir Alan Adı Puanı, geleneksel SEO temelinizin sağlam olduğu anlamına gelir, ancak yapay zeka maruz kalma yüzdesi bu temelin ne kadarının bozulduğunu gösterir.',
      },
      {
        question: 'Yapay zeka görünürlüğü B2B ve kurumsal web siteleri için geçerli midir?',
        answer: 'Kesinlikle. B2B alıcıları, tedarikçi araştırması, teknoloji değerlendirmesi ve satın alma karar desteği için giderek artan şekilde yapay zeka araçlarını kullanmaktadır. Google Yapay Zeka Genel Bakışları, "küçük işletmeler için en iyi CRM" veya "SSO nasıl uygulanır" gibi B2B bilgilendirici sorguları için özellikle yaygındır. Yapay Zeka Genel Bakışlarında alıntı olarak görünen kurumsal markalar önemli güvenilirlik kazanır — bir yapay zeka sistemi tarafından adlandırılmak bir onay olarak algılanır. Tersine, yapay zeka yanıtlarında yer almayan B2B markaları, yeni nesil karar vericiler için görünmez kalma riskiyle karşı karşıyadır.',
      },
    ],
  },
};

export function getSeoToolBySlugTr(slug: string): SeoToolConfig | undefined {
  return seoToolsTr[slug];
}

export function getAllSeoToolsTr(): SeoToolConfig[] {
  return Object.values(seoToolsTr);
}

export function getAllSeoToolSlugsTr(): string[] {
  return Object.keys(seoToolsTr);
}
