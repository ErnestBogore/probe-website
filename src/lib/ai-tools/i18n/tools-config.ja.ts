// Japanese (ja) Tool Configurations
// Auto-generated translations from English source

import { ToolConfig } from '../tools-config';

// Helper functions
export function getToolBySlugJa(slug: string): ToolConfig | undefined {
  return toolsJa[slug];
}

export function getAllToolsJa(): ToolConfig[] {
  return Object.values(toolsJa);
}

// Japanese uses English slugs, so no mapping needed - just return the slug as-is
export function getEnglishSlugJa(japaneseSlug: string): string {
  return japaneseSlug;
}

export const toolsJa: Record<string, ToolConfig> = {

  // ==================== BATCH 1: Tools 1-10 ====================

  'paragraph-generator': {
    slug: 'paragraph-generator',
    name: '段落ジェネレーター',
    title: '無料AI段落ジェネレーター',
    description: '数秒で構造化された段落を生成します。ブログ記事、エッセイ、メールなどに最適。登録不要。',
    metaDescription: '無料のAI段落ジェネレーターで数秒で構造化された段落を生成。ブログ記事、エッセイ、メールなどに最適。登録不要。',
    inputLabel: '書きたいトピック...',
    inputPlaceholder: '例：ブロッコリーを食べることが重要な理由',
    buttonText: '段落を生成',
    maxLength: 2048,
    options: [
      { name: 'format', label: 'フォーマット', choices: ['段落', '箇条書き'], default: '段落', type: 'radio' },
      { name: 'length', label: '長さ', choices: ['1段落', '2段落', '3段落'], default: '1段落', type: 'select' },
      { name: 'tone', label: 'トーン', choices: ['フォーマル', 'カジュアル', 'プロフェッショナル', 'フレンドリー'], default: 'フォーマル', type: 'select' },
      { name: 'variants', label: '生成数', choices: ['1バリエーション', '3バリエーション', '5バリエーション'], default: '1バリエーション', type: 'select' },
    ],
    systemPrompt: `You are an expert content writer who creates compelling, well-structured paragraphs. Generate paragraphs that are clear, engaging, and purposeful—never generic filler.
## CORE RULES
- Every paragraph must have a clear point (topic sentence + support + implication)
- Write in active voice unless passive is strategically necessary
- Vary sentence length for rhythm (mix short punchy sentences with longer explanatory ones)
- Avoid clichés, vague modifiers, and filler phrases
- Each paragraph should be 4-6 sentences unless otherwise specified
- Avoid fancy words like "crucial", "essential", "comprehensive", "robust", "leverage", "utilize", "facilitate"
## OUTPUT FORMAT
- Write {{length}} in {{format}} format
- Use a {{tone}} tone
- Generate {{variants}}
If generating multiple variants, separate each with a blank line and label them (Variant 1:, Variant 2:, etc.)
Output only the content. No preamble, no explanation.

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'コンテンツマーケティングとブログ', description: 'ライターやマーケターは段落ジェネレーターを使用してライターズブロックを克服し、素早く下書きを作成できます。ブログ投稿、ランディングページのコピー、ニュースレターコンテンツを作成する際、ツールはトピックやプロンプトに基づいて一貫した段落を生成し、白紙から始めるのではなく編集・改良するための確かな基盤を提供します。' },
      { title: '学術・ビジネスライティング', description: 'エッセイに取り組む学生、論文を執筆する研究者、レポートを準備するビジネスパーソンは、段落ジェネレーターを活用して複雑なアイデアを明確に表現できます。重要なポイントや論点を入力すると、論理的に議論を展開する構造化された段落が得られ、長いライティングプロジェクトでも勢いを維持できます。' },
      { title: '日常のコミュニケーション', description: '思慮深いメールの作成から自己PRや志望動機書の執筆まで、段落ジェネレーターは書面で明確にコミュニケーションする必要がある人を支援します。日本語が母語でない人や、構成に時間をかけずにアイデアをより雄弁に表現したい人に特に便利です。' },
    ],
    faqs: [
      { question: '段落ジェネレーターとは何ですか？', answer: '段落ジェネレーターは、提供するトピック、プロンプト、または指示に基づいて、一貫性のある文脈に関連した段落を作成するAI駆動のツールです。自然言語処理を使用して入力を理解し、人間らしいテキストを生成します。' },
      { question: 'この段落ジェネレーターは無料ですか？', answer: 'はい、当社の段落ジェネレーターは隠れたコストなく完全に無料です。アカウントを作成したり、支払い情報を提供したりすることなく段落を生成できます。' },
      { question: 'AI段落ジェネレーターはどのように機能しますか？', answer: 'このツールは多様なテキストデータで訓練された大規模言語モデルを使用しています。トピックやプロンプトを入力すると、AIがコンテキストを分析し、自然な言語パターン、正しい文法、論理的な構造に従った段落を生成します。' },
      { question: '生成された段落を商用目的で使用できますか？', answer: 'はい、生成した段落はブログ投稿、マーケティング資料、製品説明など、商用コンテンツを含むお好きな用途にお使いいただけます。' },
      { question: 'ツールが生成する段落はどのくらいの長さですか？', answer: '生成される段落は通常3〜6文ですが、プロンプトの複雑さによって異なります。指示で好みを指定することで、より長いまたは短い出力をリクエストできます。' },
      { question: '生成されたコンテンツはユニークですか？', answer: 'AIは特定のプロンプトに基づいて毎回オリジナルのコンテンツを作成します。ただし、公開前に独自の声を加え、正確性を確認するために出力を確認・編集することをお勧めします。' },
      { question: 'どのようなトピックで段落を生成できますか？', answer: '段落ジェネレーターはビジネス、テクノロジー、健康、教育、ライフスタイルなど、事実上あらゆるトピックでコンテンツを作成できます。明確で具体的なプロンプトを提供すると出力の品質が向上します。' },
      { question: '一度に複数の段落を生成できますか？', answer: 'ツールを複数回実行して異なる段落を生成するか、関連するサブトピックで複数の段落が必要であることをプロンプトで指定できます。' },
      { question: '生成されたコンテンツはSEOに適していますか？', answer: 'ツールはSEOに効果的な自然で読みやすいコンテンツを生成します。最良の結果を得るには、プロンプトにターゲットキーワードを含めると、AIがそれらを段落に自然に組み込みます。' },
      { question: '生成後に段落を編集する必要がありますか？', answer: 'AIは質の高い下書きを作成しますが、正確性を確保し、個人的な洞察を追加し、特定の読者に合わせてトーンを調整するために出力を確認・編集することをお勧めします。' },
    ],
  },

  'paragraph-rewriter': {
    slug: 'paragraph-rewriter',
    name: '段落リライター',
    title: '無料AI段落書き換えツール',
    description: '元の意味を保ちながら、段落を書き換えて明確さを向上させたり、トーンを変更したり、ユニークなバリエーションを作成します。',
    metaDescription: '無料のAIツールで段落を書き換え。元の意味を保ちながら、明確さを向上させたり、トーンを変更したり、ユニークなバリエーションを作成します。',
    inputLabel: '書き換えるテキスト...',
    inputPlaceholder: 'ここに書き換えたい段落を貼り付けてください',
    buttonText: '段落を書き換え',
    maxLength: 2048,
    options: [
      { name: 'format', label: 'フォーマット', choices: ['段落', '箇条書き'], default: '段落', type: 'radio' },
      { name: 'length', label: '長さ', choices: ['1段落', '2段落', '3段落'], default: '1段落', type: 'select' },
      { name: 'tone', label: 'トーン', choices: ['フォーマル', 'カジュアル', 'プロフェッショナル', 'フレンドリー'], default: 'フォーマル', type: 'select' },
      { name: 'variants', label: '生成数', choices: ['1バリエーション', '3バリエーション', '5バリエーション'], default: '1バリエーション', type: 'select' },
    ],
    systemPrompt: `You are an expert editor who rewrites paragraphs to improve clarity, impact, and readability while preserving the original meaning.
## CORE RULES
- Preserve the original meaning and key information
- Improve sentence structure, flow, and word choice
- Remove redundancy and filler without reducing depth
- Maintain or enhance the original tone unless instructed otherwise
- Never add information that wasn't in the original
## OUTPUT FORMAT
- Output {{length}} in {{format}} format
- Use a {{tone}} tone
- Generate {{variants}}
If generating multiple variants, separate each with a blank line and label them (Variant 1:, Variant 2:, etc.)
Output only the rewritten content. No preamble, no explanation.

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'コンテンツの明確さと読みやすさの向上', description: 'ライターや編集者は段落リライターを使用して、密度の高い文章や不自然な表現を明確で流れるような文章に変換します。急いで下書きしたものや、磨きをかける必要があるコンテンツを受け取った場合、ツールは文構造を再構成し、語彙を改善しながら元のメッセージを維持します。' },
      { title: 'ユニークなコンテンツバリエーションの作成', description: '複数のプラットフォームを管理したり、A/Bテストを実行したりするコンテンツマーケターは、同じ中心メッセージの異なるバージョンを生成できます。リライターはソーシャルメディア投稿、メールキャンペーン、広告コピー向けに新鮮なバリエーションを生成し、チャネル間での重複を避けながらメッセージを維持するのに役立ちます。' },
      { title: '盗作防止と既存コンテンツの更新', description: '学生、研究者、コンテンツクリエイターは段落リライターを使用して、ソースからの情報を自分の言葉で表現したり、古いコンテンツを更新したりできます。ツールは意味と事実を保持しながら、オリジナルの作品を作成するのに十分な程度にテキストを言い換えるのに役立ちます。' },
    ],
    faqs: [
      { question: '段落リライターは何をしますか？', answer: '段落リライターは既存のテキストを取り、中心的な意味を維持しながら異なる単語、文構造、表現を使用して言い換えます。明確さの向上、繰り返しの回避、コンテンツのユニークなバージョンの作成に役立ちます。' },
      { question: '段落リライターは無料ですか？', answer: 'はい、このツールは完全に無料です。サブスクリプション、隠れたコスト、支払いを必要とする使用制限はありません。' },
      { question: '書き換えと言い換えの違いは何ですか？', answer: 'どちらもテキストを異なる方法で言い換えることを含みますが、書き換えは通常、構造、トーン、スタイルのより実質的な変更を意味します。言い換えは同じアイデアを異なる言葉で表現することに焦点を当て、書き換えは読みやすさの向上、トーンの調整、情報の再編成も行うことがあります。' },
      { question: '書き換えられた段落は元と同じ意味を持ちますか？', answer: 'AIは表現を変えながら元の意味を保持するように設計されています。ただし、特に技術的またはニュアンスのあるコンテンツについては、書き換えられたバージョンが意図したメッセージを正確に捉えていることを確認するために常に出力を確認してください。' },
      { question: '書き換えられた段落のトーンを選択できますか？', answer: 'はい、指示で希望のトーンを指定できます—テキストをよりフォーマルに、カジュアルに、説得力のあるものに、またはシンプルにしたい場合など。AIはそれに応じて出力を調整します。' },
      { question: '書き換えられたコンテンツは盗作フリーですか？', answer: 'ツールは新しい表現と構造を生成し、元のものとは異なるテキストを作成します。ただし、使用ケースによっては、他人のコンテンツを書き換える場合、適切な帰属がまだ必要な場合があります。' },
      { question: '元のテキストのどのくらいが変更されますか？', answer: '変更の程度は指示と元のテキストの複雑さによって異なります。AIは通常、語彙の選択、文構造、流れを変更しながら、中心的なメッセージが認識可能であることを確保します。' },
      { question: '日本語以外の言語でコンテンツを書き換えられますか？', answer: 'ツールは日本語テキストに最適化されています。他の言語でも機能する場合がありますが、日本語の段落を書き換える場合に結果が最も信頼できます。' },
      { question: '一度に書き換えられる最大の長さは？', answer: 'ツールは標準的な段落（約100〜300語）で最も効果的に機能します。より長いコンテンツの場合、最適な結果を得るために一度に1段落ずつ書き換えることをお勧めします。' },
      { question: '書き換えられた段落を使用する前に編集すべきですか？', answer: 'はい、AI生成コンテンツはすべて確認することをお勧めします。書き換えられたバージョンが意図した意味を正確に反映し、ブランドの声に合い、コンテキストで自然に読めることを確認してください。' },
    ],
  },

  'paraphrasing-tool': {
    slug: 'paraphrasing-tool',
    name: 'パラフレーズツール',
    title: '無料AIパラフレーズツール',
    description: 'テキストを瞬時に言い換えます。元の意味を保ちながら文や段落を言い換えます。学生やライターに最適。',
    metaDescription: '無料のAIツールでテキストを瞬時に言い換え。元の意味を保ちながら文や段落を言い換えます。学生やライターに最適。',
    inputLabel: '言い換えるテキスト...',
    inputPlaceholder: 'ここに言い換えたいテキストを貼り付けてください',
    buttonText: '言い換え',
    maxLength: 2048,
    options: [
      { name: 'mode', label: 'モード', choices: ['標準', '流暢性', 'クリエイティブ', 'フォーマル', 'シンプル'], default: '標準' },
    ],
    systemPrompt: `You are an expert paraphrasing specialist who restates text in fresh language while preserving the exact meaning and intent of the original.
## CORE RULES
- The paraphrased version must mean exactly the same thing as the original
- Use substantially different vocabulary and sentence structure
- Never add, remove, or alter the factual content
- Maintain the same level of formality unless instructed otherwise
## MODE-SPECIFIC INSTRUCTIONS
### IF MODE = "Standard" - Balance between similarity and transformation
### IF MODE = "Fluency" - Focus on smooth, natural flow
### IF MODE = "Creative" - More substantial restructuring allowed
### IF MODE = "Formal" - Elevate the register and vocabulary
### IF MODE = "Simple" - Break complex ideas into simpler terms
## OUTPUT FORMAT
Mode: {{mode}}
Output only the paraphrased text. Do not include any preamble or explanation.

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '学術的誠実性と研究ライティング', description: '学生や研究者はパラフレーズツールを使用して、ソースからの情報を自分の言葉で言い換えます。これは盗作を避けるための重要なスキルです。ツールは学術論文、記事、教科書からの複雑なアイデアを、元の意味と正確性を維持しながら新しい言語で表現するのに役立ちます。' },
      { title: '複数プラットフォームでのコンテンツ再利用', description: 'デジタルマーケターやコンテンツクリエイターは、既存のコンテンツを文字通りの重複なく異なるチャネルに適応させることができます。ブログ投稿のセクションをソーシャルメディアコピーに変換したり、ウェブサイトコンテンツをメールニュースレター用に作り直したり、異なる読者セグメント向けに主要メッセージの複数のバリエーションを作成したりできます。' },
      { title: '複雑な言語の簡略化', description: '専門用語だらけのテキストや技術的なテキストをアクセスしやすい言語に翻訳する必要がある専門家はパラフレーズツールの恩恵を受けます。患者に医療情報を説明したり、クライアントに法的用語を分解したり、技術文書をユーザーフレンドリーにしたりする場合、ツールは複雑な概念を明確に言い換えるのに役立ちます。' },
    ],
    faqs: [
      { question: 'パラフレーズとは何ですか？', answer: 'パラフレーズとは、元の意味を保ちながら異なる言葉と文構造を使用してテキストを言い換えるプロセスです。理解を示し、盗作を避けるためのライティングにおける基本的なスキルです。' },
      { question: 'AIパラフレーズツールはどのように機能しますか？', answer: 'ツールは入力テキストを分析して意味を理解し、異なる語彙、文構造、言い回しパターンを使用して同じアイデアを表現する代替方法を生成します。' },
      { question: 'このパラフレーズツールは無料ですか？', answer: 'はい、ツールは完全に無料です。登録や支払いなしで好きなだけテキストを言い換えることができます。' },
      { question: '言い換えられたコンテンツはオリジナルと見なされますか？', answer: '正しく行われた場合、言い換えられたコンテンツは自分の言葉でアイデアを表現し、オリジナルと見なされます。ただし、他のソースから来た言い換えられたアイデアでも、学術・専門的なコンテキストでは適切に引用する必要があります。' },
      { question: 'どんな種類のテキストでも言い換えられますか？', answer: 'ツールは記事、エッセイ、レポート、メール、ウェブコンテンツなど、ほとんどのテキストタイプで機能します。単純なものから技術的または学術的な言語まで、様々な複雑さのレベルを効果的に処理します。' },
      { question: '言い換えられたテキストは自然に聞こえますか？', answer: 'AIは自然に聞こえるテキストを生成するように設計されています。ただし、出力があなたの声に合い、より大きな文書にスムーズに収まることを確認するために読み返すことをお勧めします。' },
      { question: '最良のパラフレーズ結果を得るにはどうすればよいですか？', answer: '明確で完全な文または段落を提供してください。断片的または不明確な入力は、精度の低い結果を生む可能性があります。出力をよりフォーマルに、よりシンプルに、または特定のスタイルにしたい場合も指定できます。' },
      { question: '他の言語でテキストを言い換えられますか？', answer: 'ツールは日本語に最適化されています。他の言語でも機能する場合がありますが、日本語テキストを言い換える場合に正確さと流暢さが最も高くなります。' },
      { question: 'パラフレーズと要約の違いは何ですか？', answer: 'パラフレーズは同様の長さと詳細を維持しながら異なる言葉でコンテンツを言い換えます。要約はテキストを主要なポイントのみを捉えた短いバージョンに凝縮します。' },
      { question: '言い換えられたコンテンツを使用する前に確認すべきですか？', answer: 'はい、AI生成コンテンツは常に確認してください。言い換えられたバージョンが元の意味を正確に反映し、意味の意図しない変更が発生していないことを確認してください。' },
    ],
  },

  'sentence-rewriter': {
    slug: 'sentence-rewriter',
    name: '文章リライター',
    title: '無料AI文章書き換えツール',
    description: '明確さ、インパクト、またはより良いトーンのために文章を書き換えます。説明付きの複数のバリエーションを取得。',
    metaDescription: '明確さ、インパクト、またはより良いトーンのために文章を書き換えます。各バリエーションの改善点の説明付き。無料、登録不要。',
    inputLabel: '書き換える文章...',
    inputPlaceholder: '例：新システムの実装は先週チームによって完了しました。',
    buttonText: '文章を書き換え',
    maxLength: 1024,
    options: [
      { name: 'goal', label: '改善目標', choices: ['明確さ', 'インパクト', '簡潔さ', 'よりフォーマル', 'よりカジュアル', 'より自信を持って'], default: '明確さ', type: 'select' },
      { name: 'variants', label: 'バリエーション数', choices: ['2バリエーション', '3バリエーション', '5バリエーション'], default: '3バリエーション', type: 'select' },
    ],
    systemPrompt: `You are an expert editor specializing in sentence-level revision to improve clarity, impact, or tone.
## CORE RULES
- Preserve the exact meaning of the original
- Make substantive improvements, not just word swaps
- Provide multiple variations with different approaches
- Explain the improvement strategy for each
- Never add information not in the original
## REWRITING APPROACHES
### IF GOAL = "Clarity" - Simplify structure, use active voice
### IF GOAL = "Impact" - Strengthen verbs, add rhythm
### IF GOAL = "Conciseness" - Cut 20-40% word count
### IF GOAL = "More formal" - Remove contractions, elevate vocabulary
### IF GOAL = "More casual" - Add contractions, simpler words
### IF GOAL = "More confident" - Remove hedging, declarative statements
## OUTPUT FORMAT
Goal: {{goal}}
Variations: {{variants}}
For each variation provide the rewritten sentence and explanation.

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'キーメッセージと見出しの洗練', description: 'マーケターやコピーライターは文章リライターを使用して、見出し、タグライン、CTA、冒頭文などの重要なフレーズを磨きます。1つの文が重要な役割を果たす場合、ツールは複数のバリエーションを生成し、最もインパクトのあるバージョンを選択できます。' },
      { title: 'メールコミュニケーションの改善', description: 'プロフェッショナルは重要なメールを送信する前に、不自然または不明確な文を書き換えることができます。より自信を持って、より外交的に、または単に明確に聞こえる必要がある場合、ツールは意図を正確に伝えるのに役立つオプションを提供します。' },
      { title: '校正と編集の支援', description: 'ライターや編集者は、文がうまくいかないことはわかっているが修正方法がわからない場合にツールを使用します。複数の代替案を生成することで、ツールは編集の行き詰まりを打破し、問題のある文に新しいアプローチを提供します。' },
    ],
    faqs: [
      { question: '文章の書き換えとパラフレーズの違いは何ですか？', answer: '文章の書き換えは、同じ意味を維持しながら1つの文の明確さ、インパクト、またはトーンを改善することに焦点を当てています。パラフレーズは重複を避けるために同じアイデアを異なる言葉で表現することに関するものです。リライターは文を単に異なるものにするだけでなく、積極的により良いものにしようとします。' },
      { question: '文章リライターは無料ですか？', answer: 'はい、登録不要で完全に無料です。好きなだけ文章を書き換えてください。' },
      { question: 'いくつのバリエーションが得られますか？', answer: 'ツールは通常3つの異なるバリエーションを提供し、それぞれ改善への異なるアプローチを持っています。これにより、特定のニーズに基づいて選択するオプションが得られます。' },
      { question: 'どのような種類の改善が欲しいか指定できますか？', answer: 'はい、「より簡潔に」「よりフォーマルに」「より自信を持って」「より明確に」などの特定の目標をリクエストできます。ツールはバリエーションを述べた目標に合わせて調整します。' },
      { question: '意味は変わりますか？', answer: 'いいえ、すべてのバリエーションは元の意味を保持します。ツールはアイデアの表現方法を変更し、どのアイデアが表現されるかは変更しません。これは書き換えプロセスの基本的なルールです。' },
      { question: '文法チェッカーがあるのになぜこれが必要ですか？', answer: '文法チェッカーは誤りを修正します。文章リライターは文法的に正しいが、より明確に、より強く、または読者により適切になり得る文を改善します。これはエラー修正ではなく品質向上に関するものです。' },
      { question: '一度に複数の文を書き換えられますか？', answer: 'ツールは最も焦点を絞った改善のために一度に1文に最適化されています。複数の文の場合は、段落リライターを使用するか、文を個別に処理してください。' },
      { question: 'ある書き換えを別のものより良くするものは何ですか？', answer: '目標によります。メールの場合、明確さと適切なトーンが最も重要です。マーケティングの場合、インパクトと記憶に残ることが重要です。ツールは各バリエーションを説明するので、特定のコンテキストに基づいて選択できます。' },
      { question: '日本語以外の文に対応できますか？', answer: 'ツールは日本語に最適化されています。他の言語での結果は異なる場合があり、同様に信頼できるものではありません。' },
      { question: '常に推奨オプションを使用すべきですか？', answer: '推奨は一般的な好みに基づいていますが、あなたはコンテキストを最もよく知っています。すべてのオプションを確認し、特定の読者、トーン、目的に合ったものを選択してください。' },
    ],
  },

  'summarizer': {
    slug: 'summarizer',
    name: '要約ツール',
    title: '無料AI要約ツール',
    description: '長い記事、文書、テキストを明確で簡潔な要約に凝縮します。数秒で要点を抽出。',
    metaDescription: '長い記事、文書、テキストを明確で簡潔な要約に凝縮。無料のAI要約ツールで数秒で要点を抽出。今すぐお試しください。',
    inputLabel: '要約するテキスト...',
    inputPlaceholder: 'ここに要約したいテキストを貼り付けてください',
    buttonText: '要約',
    maxLength: 4096,
    options: [
      { name: 'length', label: '要約の長さ', choices: ['簡潔（1〜2文）', '短い（1段落）', '詳細（2〜3段落）'], default: '短い（1段落）' },
      { name: 'format', label: 'フォーマット', choices: ['段落', '箇条書き', '要点'], default: '段落' },
    ],
    systemPrompt: `You are an expert summarizer who condenses text into clear, accurate summaries that capture the essential meaning without losing critical information.
## CORE RULES
- Capture the main point(s) and key supporting details
- Never add information not present in the original
- Never distort or misrepresent the original meaning
- Use clear, direct language
- Maintain appropriate length based on the original
## LENGTH-SPECIFIC INSTRUCTIONS
### IF LENGTH = "Brief (1-2 sentences)" - Core message only
### IF LENGTH = "Short (1 paragraph)" - Main point + 2-3 key details
### IF LENGTH = "Detailed (2-3 paragraphs)" - Comprehensive coverage
## FORMAT-SPECIFIC INSTRUCTIONS
### IF FORMAT = "Paragraph" - Flowing prose
### IF FORMAT = "Bullet points" - One bullet per key point
### IF FORMAT = "Key takeaways" - Focus on actionable insights
## OUTPUT FORMAT
- Length: {{length}}
- Format: {{format}}
Output only the summary without any preamble.

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'リサーチと情報収集', description: '大量のテキストを処理する学生、研究者、プロフェッショナルは要約ツールを使用して、記事、論文、レポートから主要な洞察を素早く抽出します。各文書を完全に読む代わりに、要約を生成してどのソースがニーズに最も関連しているかを特定できます。' },
      { title: 'コンテンツキュレーションと知識共有', description: 'チームリーダー、ニュースレターライター、コンテンツキュレーターは、業界記事、レポート、会議メモを要約して、読者と重要な情報を共有できます。ツールは長いコンテンツを、忙しい読者がすぐに吸収できる消化しやすいテイクアウェイに抽出するのに役立ちます。' },
      { title: '学習と復習の効率化', description: '試験に備える学生や文書を復習するプロフェッショナルは、長い資料の簡潔な要約を作成できます。要約ツールは教科書、講義ノート、トレーニング資料を最も重要な概念を強調する管理しやすい学習ガイドに凝縮するのに役立ちます。' },
    ],
    faqs: [
      { question: 'テキスト要約ツールとは何ですか？', answer: 'テキスト要約ツールは、長いコンテンツを最も重要な情報のみを含む短いバージョンに凝縮するAIツールです。重要なポイント、主要な議論、本質的な詳細を識別しながら、冗長または重要度の低いテキストを削除します。' },
      { question: 'AI要約ツールはどのように機能しますか？', answer: 'ツールは自然言語処理を使用してテキストを分析し、中心テーマと主要情報を識別し、元のコンテンツの本質的な意味を捉えた凝縮バージョンを生成します。' },
      { question: 'この要約ツールは無料ですか？', answer: 'はい、要約ツールは完全に無料です。登録不要で、要約できるテキストの数に制限はありません。' },
      { question: 'ツールはテキストをどのくらい短くしますか？', answer: '圧縮率は元のテキストと好みによって異なります。通常、要約は元の長さの20〜30%ですが、ニーズに応じてより短いまたはより長い要約をリクエストできます。' },
      { question: 'どのような種類のコンテンツを要約できますか？', answer: 'ツールは記事、ブログ投稿、研究論文、レポート、エッセイ、会議メモ、メール、その他のほとんどのテキストコンテンツで機能します。様々なトピックと複雑さのレベルを効果的に処理します。' },
      { question: '要約はすべての重要なポイントを捉えますか？', answer: 'AIは主要な情報を識別し優先順位付けするように訓練されています。ただし、「重要」は主観的な場合があるため、目的に最も関連する特定のポイントを捉えていることを確認するために要約を確認することをお勧めします。' },
      { question: '他の言語でコンテンツを要約できますか？', answer: 'ツールは日本語テキストに最適化されています。他の言語でのパフォーマンスは異なる場合があります。' },
      { question: '要約できるテキストの最大長は？', answer: 'ツールはほとんどの標準的な文書をうまく処理します。本全体や長いレポートなど非常に長いテキストの場合は、最良の結果を得るために章やセクションを個別に要約することをお勧めします。' },
      { question: '要約されたコンテンツは盗作フリーですか？', answer: '要約はAIを使用して生成され、凝縮された形でアイデアを表現します。ただし、出版のために他人のコンテンツを要約する場合、適切な帰属がまだ必要です。' },
      { question: '要約の長さをカスタマイズできますか？', answer: 'はい、簡潔な概要が欲しいかより詳細な要約が欲しいかを指定できます。「3文で要約して」や「詳細な要約を提供して」などの指示を含めると、AIがそれに応じて出力を調整します。' },
    ],
  },

  'outline-generator': {
    slug: 'outline-generator',
    name: 'アウトラインジェネレーター',
    title: '無料AIアウトラインジェネレーター',
    description: '数秒でブログ投稿、エッセイ、記事の整理されたアウトラインを生成します。',
    metaDescription: '数秒でブログ投稿、エッセイ、記事の整理されたアウトラインを生成。無料のAIアウトラインジェネレーターでアイデアを整理し、より速く書けます。',
    inputLabel: 'トピックまたはタイトル...',
    inputPlaceholder: '例：中小企業にとってのリモートワークのメリット',
    buttonText: 'アウトラインを生成',
    maxLength: 2048,
    options: [
      { name: 'contentType', label: 'コンテンツタイプ', choices: ['ブログ投稿', 'ハウツーガイド', 'リスティクル', 'エッセイ/オピニオン', '製品レビュー', 'リサーチ/レポート'], default: 'ブログ投稿', type: 'select' },
      { name: 'depth', label: 'アウトラインの深さ', choices: ['基本（H2のみ）', '標準（H2 + H3）', '詳細（H2 + H3 + 注記）'], default: '標準（H2 + H3）', type: 'select' },
    ],
    systemPrompt: `You are an expert content strategist who creates clear, logical outlines for written content.
## CORE RULES
- Create clear hierarchical structure (H1 → H2 → H3)
- Include 5-10 main sections depending on topic complexity
- Each section should have 2-5 subsections or bullet points
- Follow logical flow: introduction → body → conclusion
## CONTENT TYPE ADAPTATIONS
### IF TYPE = "Blog Post" - Balance depth with readability
### IF TYPE = "How-to Guide" - Use numbered steps
### IF TYPE = "Listicle" - Each list item becomes an H2
### IF TYPE = "Essay/Opinion" - Start with thesis
### IF TYPE = "Product Review" - Specs, pros/cons, verdict
### IF TYPE = "Research/Report" - Executive summary, methodology, findings
## OUTPUT FORMAT
Content Type: {{contentType}}
Outline Depth: {{depth}}
Generate a structured outline with headings and brief notes.

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'ブログ投稿と記事の計画', description: 'コンテンツクリエイターやマーケターはアウトラインジェネレーターを使用して、生のアイデアを書き始める前に整理された論理的な構造に変換します。白紙を見つめる代わりに、主要セクション、サブセクション、各パートで何をカバーすべきかのメモを含む明確なロードマップが得られ、アイデアから最初の下書きまでの時間を大幅に短縮します。' },
      { title: '学術エッセイと研究論文の整理', description: '学生や研究者はアウトラインジェネレーターを使用して複雑なトピックを構造化し、ポイント間の論理的な流れを確保し、完全な下書きにコミットする前に推論のギャップを特定できます。ツールは論点、裏付けとなる証拠、反論、結論を一貫したフレームワークに整理するのに役立ちます。' },
      { title: '長文コンテンツプロジェクトとドキュメンテーション', description: '包括的なガイド、ホワイトペーパー、技術文書に取り組むチームは、大規模プロジェクト全体での一貫性と完全性を確保するマスターアウトラインを生成できます。ツールは複雑なトピックを管理可能なセクションに分解し、執筆プロセス中に重要なことが見落とされないようにします。' },
    ],
    faqs: [
      { question: 'アウトラインジェネレーターとは何ですか？', answer: 'アウトラインジェネレーターは、トピックや生のアイデアを受け取り、見出し、小見出し、要点を含む構造化されたフレームワークに整理するAI駆動のツールです。完全なコンテンツを書くときに従える論理的な設計図を作成します。' },
      { question: 'アウトラインジェネレーターは無料ですか？', answer: 'はい、アウトラインジェネレーターは登録不要で完全に無料です。コストや使用制限なしで必要なだけアウトラインを作成できます。' },
      { question: 'どのような種類のコンテンツのアウトラインを作成できますか？', answer: 'ツールは事実上あらゆる書かれたコンテンツに対応します：ブログ投稿、記事、エッセイ、研究論文、ハウツーガイド、リスティクル、製品レビュー、レポート、ホワイトペーパーなど。コンテンツタイプを指定するだけで最も関連性の高いアウトラインが得られます。' },
      { question: '生成されるアウトラインはどの程度詳細ですか？', answer: 'アウトラインにはメインセクション（H2見出し）、サブセクション（H3見出し）、各パートで何をカバーすべきかを説明する簡単なメモが含まれます。詳細レベルは、創造性を制限することなく明確な方向性を与えるように設計されています。' },
      { question: '生成されたアウトラインをカスタマイズできますか？', answer: 'はい、生成されたアウトラインは出発点です。セクションを再編成したり、見出しを追加または削除したり、特定のニーズに合わせて構造を修正したりできます。コンテンツアーキテクチャの最初の下書きと考えてください。' },
      { question: 'アウトラインはSEOに役立ちますか？', answer: 'アウトラインは論理的な見出し階層（H1、H2、H3）やキーワードを自然に組み込む場所の提案など、SEOのベストプラクティスを念頭に置いて構築されています。よく構造化されたコンテンツは検索結果でより良いパフォーマンスを発揮する傾向があります。' },
      { question: '入力するトピックはどのくらいの長さにすべきですか？', answer: 'シンプルなトピックフレーズ（「リモートワークのメリット」）からターゲットオーディエンス、角度、カバーしたい要点を含むより詳細なブリーフまで入力できます。より多くのコンテキストは通常、よりカスタマイズされたアウトラインを生成します。' },
      { question: '異なるコンテンツの長さのアウトラインを生成できますか？', answer: 'はい、ターゲットの語数を指定すると、ツールはそれに応じてセクション数と深さを調整します。500語のブログ投稿は3,000語の包括的なガイドよりもシンプルなアウトラインになります。' },
      { question: 'アウトラインには各セクションの語数が含まれますか？', answer: 'ターゲットの長さを指定すると、ツールは各セクションの推定語数を提供し、コンテンツのバランスを取り、各トピックに適切な深さを割り当てるのに役立ちます。' },
      { question: 'チームコラボレーションにアウトラインジェネレーターを使用できますか？', answer: 'もちろんです。生成されたアウトラインはライターへの優れたブリーフとなり、執筆を開始する前に全員が構造と要点を理解することを確保します。アウトラインをコピーしてチームと簡単に共有できます。' },
    ],
  },

  'conclusion-generator': {
    slug: 'conclusion-generator',
    name: '結論ジェネレーター',
    title: '無料AI結論ジェネレーター',
    description: '明確なテイクアウェイとCTAを含む、記事、エッセイ、ブログ投稿の説得力のある結論を生成します。',
    metaDescription: '明確なテイクアウェイとCTAを含む、記事、エッセイ、ブログ投稿の説得力のある結論を生成。無料のAIツールで満足のいく締めくくりを作成。',
    inputLabel: '記事のトピックと要点...',
    inputPlaceholder: '例：トピック：瞑想のメリット。要点：ストレス軽減、集中力向上、睡眠改善',
    buttonText: '結論を生成',
    maxLength: 2048,
    options: [
      { name: 'contentType', label: 'コンテンツタイプ', choices: ['ブログ投稿', 'ハウツーガイド', 'リスティクル', 'エッセイ/オピニオン', '製品レビュー', 'リサーチ/レポート'], default: 'ブログ投稿', type: 'select' },
      { name: 'ctaType', label: 'コールトゥアクション', choices: ['ソフト（情報提供型）', 'ダイレクト（商用）', '思考を促す', 'なし'], default: 'ソフト（情報提供型）', type: 'select' },
      { name: 'tone', label: 'トーン', choices: ['プロフェッショナル', 'カジュアル', 'インスピレーショナル', 'アカデミック'], default: 'プロフェッショナル', type: 'select' },
    ],
    systemPrompt: `You are an expert content writer specializing in crafting compelling conclusions that leave readers with clear takeaways.
## CORE RULES
- Never simply repeat the introduction
- Synthesize and elevate key points, don't just list them
- Include a forward-looking element (next steps or CTA)
- Keep conclusions proportional (10-15% of total)
- End with impact—the final sentence should resonate
## CONCLUSION ARCHITECTURE
1. Transition signal (subtle, not "In conclusion")
2. Key insight synthesis
3. Supporting point summary
4. Stakes/implications
5. Call to action or next step
6. Closing line - memorable final thought
## OUTPUT FORMAT
Content Type: {{contentType}}
CTA Type: {{ctaType}}
Tone: {{tone}}
Output only the conclusion paragraph(s). No preamble.

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'ブログとコンテンツマーケティングの締めくくり', description: '記事を効果的に締めくくるのに苦労するコンテンツクリエイターは、結論ジェネレーターを使用して、要点をまとめ読者の行動を促す満足のいく締めくくりを作成します。ツールはすべての作品が尻すぼみになるのではなくインパクトを持って終わることを確保し、エンゲージメントとコンバージョン率を向上させます。' },
      { title: '学術エッセイの結論', description: 'エッセイ、研究論文、論文の章を書く学生は、導入部を単に繰り返すのではなく、議論を統合する構造化された結論を生成できます。ツールは最終段落を基本的な要約から永続的な印象を残す説得力のある締めくくりに引き上げるのに役立ちます。' },
      { title: 'ビジネス文書の最終化', description: 'レポート、提案書、プレゼンテーションを書くプロフェッショナルは、推奨事項、次のステップ、主要なテイクアウェイを明確に伝える結論を作成できます。ツールは重要な文書が明確さとステークホルダーへの実行可能な方向性を持って終わることを確保します。' },
    ],
    faqs: [
      { question: '良い結論とは何ですか？', answer: '強い結論は要点を統合し（単に繰り返すのではなく）、主要なメッセージを強化し、含意や重要性に対処し、次のステップやコールトゥアクションを明確に提供します。読者に締めくくりと動機の感覚を与える必要があります。' },
      { question: '結論ジェネレーターは無料ですか？', answer: 'はい、ツールは登録や支払いなしで完全に無料です。必要なだけ結論を生成してください。' },
      { question: 'どのような情報を提供する必要がありますか？', answer: '最低限、トピックとコンテンツでカバーした要点を提供してください。最良の結果を得るには、コンテンツタイプ（ブログ、エッセイ、レポート）、希望のトーン、含めたい特定のコールトゥアクションも指定してください。' },
      { question: '結論は私のライティングスタイルに合いますか？', answer: 'ツールは指定したトーン（プロフェッショナル、カジュアル、アカデミックなど）に適応し、コンテンツタイプの標準的な規則に従います。完璧なスタイルの一致のために、個人的な声を加えるための軽い編集をお勧めします。' },
      { question: '結論はどのくらいの長さにすべきですか？', answer: '結論は通常、コンテンツ全体の長さの10〜15%です。1,000語の記事の場合、100〜150語を期待してください。ターゲットの長さを指定すると、ツールがそれに応じて調整します。' },
      { question: '異なるコンテンツタイプの結論を生成できますか？', answer: 'はい、ツールはブログ投稿、エッセイ、ハウツーガイド、リスティクル、製品レビュー、研究レポートなどを処理します。各タイプは適切な規則と構造に従います。' },
      { question: '結論にはコールトゥアクションを含めるべきですか？', answer: 'マーケティングコンテンツの場合、はい—結論はCTAの最適な場所です。アカデミックや情報提供コンテンツの場合、「CTA」は商用アクションよりも、さらなる考察を促したり関連する読み物を提案したりすることかもしれません。' },
      { question: '導入部を繰り返す結論を避けるには？', answer: 'ツールは要点を繰り返すのではなく、統合し引き上げるように設計されています。テイクアウェイを新しい言葉でフレーミングし、導入部が述べた以上のことを超える未来志向の要素を追加します。' },
      { question: 'メールや短いコンテンツにも使えますか？', answer: 'はい、ただしツールは長文コンテンツに最適化されています。メールの場合、非常に短いターゲットの長さを指定すると、ツールは適切なCTAを含む簡潔な締めくくりを生成します。' },
      { question: '生成された結論が気に入らない場合は？', answer: '調整した入力（異なるトーン、CTA、長さ）で再生成するか、出力を独自の編集の出発点として使用できます。生成された結論は構築できる構造とアイデアを提供します。' },
    ],
  },

  'lorem-ipsum-generator': {
    slug: 'lorem-ipsum-generator',
    name: 'Lorem Ipsumジェネレーター',
    title: '無料AI Lorem Ipsumジェネレーター',
    description: 'デザイン、モックアップ、レイアウト用のプレースホルダーテキストを生成します。',
    metaDescription: 'デザイン、モックアップ、レイアウト用のLorem Ipsumプレースホルダーテキストを生成。従来のものから現代的な代替案まで選択可能。コピー＆ペースト対応。',
    inputLabel: '必要な量...',
    inputPlaceholder: '例：3段落、500語、または10文',
    buttonText: 'テキストを生成',
    maxLength: 256,
    options: [
      { name: 'type', label: 'テキストタイプ', choices: ['従来のLorem Ipsum', 'ヒップスターIpsum', 'オフィス/ビジネスIpsum', 'プレーン英語'], default: '従来のLorem Ipsum', type: 'select' },
      { name: 'amount', label: '量', choices: ['1段落', '3段落', '5段落', '500語', '1000語'], default: '3段落', type: 'select' },
      { name: 'format', label: 'フォーマット', choices: ['プレーンテキスト', 'HTMLタグ付き'], default: 'プレーンテキスト', type: 'select' },
    ],
    systemPrompt: `You are a placeholder text generator providing lorem ipsum and alternative filler text.
## CORE RULES
- Generate clean, consistent placeholder text
- Provide exact amounts as requested
- Format output cleanly for easy copy-paste
## TEXT TYPES
### IF TYPE = "Traditional Lorem Ipsum" - Start with "Lorem ipsum dolor sit amet..."
### IF TYPE = "Hipster Ipsum" - Trendy, artisanal-sounding text
### IF TYPE = "Office/Business Ipsum" - Corporate buzzword filler
### IF TYPE = "Plain English" - Simple readable sentences
## FORMAT OPTIONS
### IF FORMAT = "Plain text" - Clean text with paragraph breaks
### IF FORMAT = "With HTML tags" - Wrap paragraphs in <p> tags
## OUTPUT FORMAT
Type: {{type}}
Amount: {{amount}}
Format: {{format}}
Generate the requested placeholder text, ready to copy-paste.

IMPORTANT: Generate all output in the appropriate language/style for the selected type.`,
    useCases: [
      { title: 'ウェブとUIデザインモックアップ', description: 'デザイナーはLorem Ipsumを使用して、実際のコンテンツが書かれる前にレイアウト、ワイヤーフレーム、モックアップをリアルな見た目のテキストで埋めます。これにより、クライアントやチームが実際のテキストを読むことに気を取られることなく、コンテンツが入った状態の最終デザインがどのように見えるかを視覚化できます。' },
      { title: '開発とテスト用プレースホルダー', description: '開発者はプレースホルダーテキストを使用して、レイアウト、タイポグラフィ設定、レスポンシブデザインをテストします。Lorem ipsumは、テキストコンテナ、行の高さ、オーバーフロー動作が異なるコンテンツ長で正しく機能することを確認するのに役立ちます。' },
      { title: '印刷とグラフィックデザインレイアウト', description: 'パンフレット、雑誌、ポスター、その他の印刷物に取り組むグラフィックデザイナーは、最終コピーが届く前にクライアント承認用のレイアウトを完成させるためにlorem ipsumを使用し、デザイン作業とコンテンツ作成を並行して進めることができます。' },
    ],
    faqs: [
      { question: 'Lorem Ipsumとは何ですか？', answer: 'Lorem Ipsumは、1500年代からデザインと出版で使用されているラテン語ベースのプレースホルダーテキストです。閲覧者が読める内容に気を取られることなく、レイアウトを埋めるためのリアルな見た目のテキストを提供します。' },
      { question: 'Lorem Ipsumジェネレーターは無料ですか？', answer: 'はい、制限なく完全に無料です。必要なだけプレースホルダーテキストを生成してください。' },
      { question: 'なぜ実際のテキストではなくLorem Ipsumを使うのですか？', answer: '意味のないプレースホルダーテキストを使用することで、デザインを評価すべきときにクライアントやレビュアーがコンテンツに集中するのを防ぎます。また、最終コピーが書かれる前にデザイン作業を進めることができます。' },
      { question: 'Lorem Ipsumは実際にラテン語ですか？', answer: 'Lorem Ipsumは紀元前45年のキケロの著作に由来しますが、あまりにもシャッフルされ変更されているため、もはや正しいラテン語ではありません。意味のある翻訳はありません。' },
      { question: '従来のLorem Ipsum以外の代替案はありますか？', answer: 'はい、ツールはHipster Ipsum、Office Ipsum、Bacon Ipsum、プレーン英語プレースホルダーテキストなど、多様性やテーマ適合性のための代替案を提供しています。' },
      { question: 'テキストはどのようなフォーマットで提供されますか？', answer: 'テキストはコピー＆ペースト可能なクリーンなプレーンテキストとして提供されます。ウェブ使用のために段落タグ付きのHTML形式の出力もリクエストできます。' },
      { question: '必要なテキスト量を正確に指定できますか？', answer: 'はい、段落数、語数、文数、文字数で特定の量をリクエストできます。ツールは指定にできるだけ近い量を生成します。' },
      { question: 'Lorem IpsumはSEOに影響しますか？', answer: 'プレースホルダーテキストは公開前に必ず置き換える必要があります。公開されたLorem IpsumはSEOに悪影響を与える可能性があり、プロフェッショナルでない印象を与えます。公開前に必ず実際のコンテンツに置き換えてください。' },
      { question: 'なぜLorem Ipsumは「Lorem ipsum dolor sit amet」で始まるのですか？', answer: 'これは何世紀にもわたる伝統的な冒頭フレーズです。この言葉はキケロの「de Finibus Bonorum et Malorum」（善と悪の限界について）のシャッフルされたセクションに由来しています。' },
      { question: 'Lorem Ipsumはどんなプロジェクトにも使えますか？', answer: 'はい、Lorem Ipsumはパブリックドメインであり、著作権の制限はありません。デザイン、開発、レイアウトプロジェクトで自由に使用できます。' },
    ],
  },

  'seo-title-generator': {
    slug: 'seo-title-generator',
    name: 'SEOタイトルジェネレーター',
    title: '無料AIタイトルジェネレーター',
    description: 'クリック率を向上させるSEO最適化タイトルを作成します。あらゆるウェブページに最適なメタタイトルを生成。',
    metaDescription: 'クリック率を向上させるSEO最適化タイトルを作成。無料のAIツールで数秒であらゆるウェブページに最適なメタタイトルを生成。',
    inputLabel: 'トピックまたはページタイトル...',
    inputPlaceholder: '例：2024年初心者向けベストランニングシューズ',
    buttonText: 'タイトルを生成',
    maxLength: 2048,
    options: [
      { name: 'variants', label: '生成数', choices: ['1バリエーション', '3バリエーション', '5バリエーション'], default: '3バリエーション' },
      { name: 'tone', label: 'トーン', choices: ['プロフェッショナル', 'カジュアル', '説得力のある'], default: 'プロフェッショナル' },
    ],
    systemPrompt: `You are an expert SEO copywriter specializing in title tags that maximize click-through rates while accurately representing page content.
## CORE RULES
- Every title must be ≤60 characters (hard limit for full SERP display)
- Include the primary keyword naturally within the first 50 characters
- Write in active voice with a clear value proposition
- Never use generic filler phrases
- End with a benefit, outcome, or brand name
## OUTPUT FORMAT
- Number of variants: {{variants}}
- Tone: {{tone}}
Output each title on its own line, numbered, with character count in parentheses.

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'ウェブサイトとブログのSEO最適化', description: 'ウェブサイトオーナーとSEOスペシャリストはタイトルジェネレーターを使用して、検索結果に表示される魅力的なメタタイトルを作成します。適切に構成されたタイトルタグは、検索者にページコンテンツの明確で魅力的なプレビューを提供し、オーガニックトラフィックに直接影響するクリック率を向上させます。' },
      { title: 'コンテンツ制作のスケーリング', description: '複数のウェブサイトや大規模なコンテンツライブラリを管理するマーケティングチームやエージェンシーは、一貫した品質のタイトルタグを大規模に生成できます。何百ものページのタイトルを手動で書く時間を費やす代わりに、ツールが迅速に最適化されたタイトルを生成し、戦略と分析のためのリソースを解放します。' },
      { title: 'ECサイトの商品ページ', description: 'オンラインストアオーナーは、主要な機能とメリットを強調するユニークで説得力のあるメタタイトルを商品ページ用に作成できます。検索結果での効果的なタイトルは、購入者がクリックする前に提供内容を理解するのに役立ち、リスティングへのより質の高いトラフィックを引き付けます。' },
    ],
    faqs: [
      { question: 'SEOタイトルタグとは何ですか？', answer: 'SEOタイトルタグ（またはメタタイトル）は、検索エンジン結果でページのタイトルを指定するHTML要素です。ブラウザタブ、検索エンジン結果、ソーシャルメディアで共有されたときに表示されます。最も重要なオンページSEO要素の一つです。' },
      { question: 'SEOタイトルタグが重要な理由は？', answer: 'タイトルタグは検索エンジンの直接的なランキング要因であり、クリック率に大きく影響します。検索意図に合った魅力的なタイトルはより多くのクリックを引き付け、時間の経過とともに検索パフォーマンスを間接的に向上させる可能性があります。' },
      { question: 'タイトルタグはどのくらいの長さにすべきですか？', answer: '最適なタイトルタグは50〜60文字です。Googleは通常60文字を超えるタイトルを検索結果で切り捨てるため、ツールはこの推奨範囲内でタイトルを生成します。' },
      { question: 'このSEOタイトルジェネレーターは無料ですか？', answer: 'はい、ツールは登録不要で完全に無料です。必要なだけタイトルタグを生成できます。' },
      { question: '最良の結果を得るにはどのような情報を提供すべきですか？', answer: '最適な結果を得るには、ページの主要トピック、ターゲットキーワード、伝えたい主要なメリットや価値提案を入力してください。より多くのコンテキストを提供するほど、より関連性が高く魅力的なタイトルが生成されます。' },
      { question: 'タイトルタグにキーワードを含めるべきですか？', answer: 'はい、そうすべきです。ターゲットキーワードを含めることで、タイトルが検索クエリに一致するのに役立ちます。キーワードがメタタイトルに表示されると、Googleは検索結果でそれを太字で強調表示することが多く、リスティングがより目を引くものになります。' },
      { question: '各ページにユニークなタイトルタグが必要ですか？', answer: 'はい、各ページにはその特定のページのコンテンツを正確に反映する固有のタイトルが必要です。ページ間で重複したタイトルは検索エンジンを混乱させ、クリック率を下げる可能性があります。' },
      { question: 'ツールはどんな種類のページにもタイトルを生成できますか？', answer: 'ジェネレーターはすべてのページタイプに対応します—ブログ投稿、商品ページ、サービスページ、ランディングページなど。ページのコンテンツを説明するだけで、AIが適切なタイトルを作成します。' },
      { question: 'ウェブサイトにタイトルタグを追加するには？', answer: 'ほとんどのコンテンツ管理システム（WordPress、Shopify、Wixなど）には、ページエディタまたはYoastやRank MathなどのSEOプラグインを通じてタイトルタグ専用のフィールドがあります。生成されたタイトルをコピーして適切なフィールドに貼り付けてください。' },
      { question: '生成されたタイトルタグを編集できますか？', answer: 'もちろんです、そしてそれをお勧めします。AIは強力な初期ドラフトを生成しますが、ブランドの声や特定のメッセージに合わせてタイトルを確認・編集することで最良の結果が得られます。' },
    ],
  },

  'meta-description-generator': {
    slug: 'meta-description-generator',
    name: 'メタディスクリプションジェネレーター',
    title: '無料AIメタディスクリプションジェネレーター',
    description: 'クリック率を向上させる魅力的なメタディスクリプションを作成します。あらゆるウェブページに最適化された説明を数秒で生成。',
    metaDescription: 'クリック率を向上させる魅力的なメタディスクリプションを作成。無料のAIツールであらゆるウェブページに最適化された説明を数秒で生成。',
    inputLabel: 'トピックまたはページタイトル...',
    inputPlaceholder: '例：2024年初心者向けベストランニングシューズ',
    buttonText: 'メタディスクリプションを生成',
    maxLength: 2048,
    options: [
      { name: 'variants', label: '生成数', choices: ['1バリエーション', '3バリエーション', '5バリエーション'], default: '3バリエーション' },
      { name: 'tone', label: 'トーン', choices: ['プロフェッショナル', 'カジュアル', '説得力のある'], default: 'プロフェッショナル' },
    ],
    systemPrompt: `You are an expert SEO copywriter specializing in meta descriptions that maximize click-through rates.
## CORE RULES
- Every description must be ≤155 characters (hard limit)
- Include the primary keyword naturally within the first 100 characters
- Write in active voice with a clear value proposition
- Never use generic filler phrases like "Learn more" or "Click here"
- End with a benefit, outcome, or subtle curiosity hook
## OUTPUT FORMAT
- Number of variants: {{variants}}
- Tone: {{tone}}
Output each meta description on its own line, numbered, with character count in parentheses.

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'ウェブサイトとブログのSEO最適化', description: 'ウェブサイトオーナーとSEOスペシャリストはメタディスクリプションジェネレーターを使用して、検索結果に表示される魅力的なスニペットを作成します。適切に構成されたメタディスクリプションは、検索者にページコンテンツの明確で魅力的なプレビューを提供し、オーガニックトラフィックに直接影響するクリック率を向上させます。' },
      { title: 'コンテンツ制作のスケーリング', description: '複数のウェブサイトや大規模なコンテンツライブラリを管理するマーケティングチームやエージェンシーは、一貫した品質のメタディスクリプションを大規模に生成できます。何百ものページの説明を手動で書く時間を費やす代わりに、ツールが迅速に最適化された説明を生成し、戦略と分析のためのリソースを解放します。' },
      { title: 'ECサイトの商品ページ', description: 'オンラインストアオーナーは、主要な機能とメリットを強調するユニークで説得力のあるメタディスクリプションを商品ページ用に作成できます。検索結果での効果的な商品説明は、購入者がクリックする前に提供内容を理解するのに役立ち、リスティングへのより質の高いトラフィックを引き付けます。' },
    ],
    faqs: [
      { question: 'メタディスクリプションとは何ですか？', answer: 'メタディスクリプションは、ウェブページのコンテンツの簡単な要約を提供するHTML属性です。検索エンジン結果でページタイトルの下に表示され、ユーザーがサイトをクリックするかどうかに影響します。' },
      { question: 'メタディスクリプションはSEOにとってなぜ重要ですか？', answer: 'メタディスクリプションは直接的なランキング要因ではありませんが、クリック率に大きく影響します。検索意図に合った魅力的な説明はより多くのクリックを引き付け、時間の経過とともに検索パフォーマンスを間接的に向上させる可能性があります。' },
      { question: 'メタディスクリプションはどのくらいの長さにすべきですか？', answer: '最適なメタディスクリプションは150〜160文字です。Googleは通常160文字を超える説明を検索結果で切り捨てるため、ツールはこの推奨範囲内で説明を生成します。' },
      { question: 'このメタディスクリプションジェネレーターは無料ですか？', answer: 'はい、ツールは登録不要で完全に無料です。必要なだけメタディスクリプションを生成できます。' },
      { question: '最良の結果を得るにはどのような情報を提供すべきですか？', answer: '最適な結果を得るには、ページの主要トピック、ターゲットキーワード、伝えたい主要なメリットや価値提案を入力してください。より多くのコンテキストを提供するほど、より関連性が高く魅力的な説明が生成されます。' },
      { question: 'メタディスクリプションにキーワードを含めるべきですか？', answer: 'はい、そうすべきです。ターゲットキーワードを含めることで、説明が検索クエリに一致するのに役立ちます。キーワードがメタディスクリプションに表示されると、Googleは検索結果でそれを太字で強調表示することが多く、リスティングがより目を引くものになります。' },
      { question: '各ページにユニークなメタディスクリプションが必要ですか？', answer: 'はい、各ページにはその特定のページのコンテンツを正確に反映する固有の説明が必要です。ページ間で重複した説明は検索エンジンを混乱させ、クリック率を下げる可能性があります。' },
      { question: 'ツールはどんな種類のページにも説明を生成できますか？', answer: 'ジェネレーターはすべてのページタイプに対応します—ブログ投稿、商品ページ、サービスページ、ランディングページなど。ページのコンテンツを説明するだけで、AIが適切な説明を作成します。' },
      { question: 'ウェブサイトにメタディスクリプションを追加するには？', answer: 'ほとんどのコンテンツ管理システム（WordPress、Shopify、Wixなど）には、ページエディタまたはYoastやRank MathなどのSEOプラグインを通じてメタディスクリプション専用のフィールドがあります。生成された説明をコピーして適切なフィールドに貼り付けてください。' },
      { question: '生成されたメタディスクリプションを編集できますか？', answer: 'もちろんです、そしてそれをお勧めします。AIは強力な初期ドラフトを生成しますが、ブランドの声や特定のメッセージに合わせて説明を確認・編集することで最良の結果が得られます。' },
    ],
  },

  // ==================== BATCH 2: Tools 11-20 ====================

  'ai-content-detector': {
    slug: 'ai-content-detector',
    name: 'AIコンテンツ検出器',
    title: '無料AIコンテンツ検出ツール',
    description: 'AI生成コンテンツを即座に検出。詳細な分析で、テキストがAIらしく見える原因を学べます。',
    metaDescription: '無料ツールでAI生成コンテンツを即座に検出。詳細な分析で、テキストがAIらしく見える原因がわかります。登録不要。',
    inputLabel: '分析するテキスト...',
    inputPlaceholder: 'AI生成かどうか確認したいテキストを貼り付けてください...',
    buttonText: 'テキストを分析',
    maxLength: 4096,
    options: [
      { name: 'analysisDepth', label: '分析の深さ', choices: ['クイックスキャン', '標準分析', '詳細分析'], default: '標準分析', type: 'select' },
    ],
    systemPrompt: `You are an expert AI content analyst specializing in detecting whether text was written by a human or generated by AI.
## CORE RULES
- Provide a percentage score indicating likelihood of AI generation
- Analyze AI multiple dimensions of the text
- Explain reasoning with specific examples
- Acknowledge uncertainty when indicators are mixed
- Never claim 100% certainty
## DETECTION FRAMEWORK
### AI Indicators:
- Overly consistent paragraph/sentence lengths
- Overuse of: "delve," "crucial," "comprehensive," "leverage," "robust"
- Hedging: "it's important to note," "it's worth mentioning"
- Formulaic transitions: "Furthermore," "Moreover," "Additionally"
- Lack of personal voice, humor, or specific anecdotes
- Perfect grammar throughout
### Human Indicators:
- Unique voice and personality
- Specific anecdotes or experiences
- Natural variation in structure
- Occasional minor errors
- Cultural references, humor
## ANALYSIS DEPTH
### IF DEPTH = "Quick scan" - Score + top 3 indicators
### IF DEPTH = "Standard analysis" - Score + category breakdown + examples
### IF DEPTH = "Detailed breakdown" - Comprehensive scoring + sentence-level flagging
## OUTPUT FORMAT
Analysis Depth: {{analysisDepth}}
Provide: AI Probability Score, Confidence Level, Analysis breakdown, Specific indicators found, Recommendations.

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '学術的誠実性の検証', description: '教育者と学生はAIコンテンツ検出器を使用して、書かれた作品のオリジナリティを検証します。教師は提出されたエッセイや課題にAI生成の兆候がないかチェックでき、学生は提出前に自分の文章が意図せずAIパターンを反映していないか確認できます。' },
      { title: '出版社のコンテンツ品質保証', description: '編集チーム、ブログ管理者、コンテンツエージェンシーは検出器を使用して提出物をスクリーニングし、公開コンテンツが本物の人間らしい声を維持していることを確認します。これはフリーランサーと協力したり、品質基準を維持しながらコンテンツ制作を拡大する場合に特に価値があります。' },
      { title: 'SEOとコンテンツマーケティングのコンプライアンス', description: 'AI生成コンテンツに対する検索エンジンのペナルティを懸念するマーケティングチームは、公開前に記事をスキャンできます。ツールは問題のあるパターンを特定し、コンテンツをより本物の人間らしくするための具体的な推奨事項を提供し、サイトの検索ランキングを保護します。' },
    ],
    faqs: [
      { question: 'AIコンテンツ検出器はどのように機能しますか？', answer: '検出器は文の構造、語彙パターン、文体マーカー、コンテンツ特性など、テキストの複数の次元を分析します。これらをAI生成と人間が書いたコンテンツの既知のパターンと比較して、確率スコアを計算します。' },
      { question: 'AIコンテンツ検出器は無料ですか？', answer: 'はい、ツールは完全に無料で使用できます。アカウントを作成したり料金を支払ったりすることなく、必要なだけテキストをチェックできます。' },
      { question: 'AIコンテンツ検出はどのくらい正確ですか？', answer: 'どのAI検出器も100%正確ではありません。当ツールは信頼度レベル付きの確率スコアを提供します。検出は長いテキスト（300語以上）と編集されていないAI出力で最も信頼性があります。大幅に編集されたAIコンテンツや自然に形式的な人間の文章は精度に影響を与える可能性があります。' },
      { question: '検出器はどのAIツールがコンテンツを書いたか識別できますか？', answer: '検出器はコンテンツがAI生成されたように見えるかどうかを識別しますが、どの特定のツール（ChatGPT、Claudeなど）が作成したかを確実に判断することはできません。異なるAIモデルは多くの類似したパターンを共有しています。' },
      { question: '何パーセントのスコアでコンテンツがAI生成と見なされますか？', answer: '一般的に、70%以上のスコアは強いAI指標を示唆し、40-70%は混合したシグナルを示し、40%未満は人間が書いた可能性が高いことを示唆します。ただし、これらはガイドラインであり、文脈が重要で、決定的なしきい値はありません。' },
      { question: 'AIコンテンツは検出を回避するために編集できますか？', answer: 'はい、人間によって大幅に編集されたAIコンテンツは、AI指標が減少することがよくあります。検出器は生の、または軽く編集されたAI出力で最も効果的です。' },
      { question: '学術的またはテクニカルな文章は誤検知を引き起こしますか？', answer: '形式的な文体は、一貫した構造や形式的な語彙などの特徴を共有するため、AI指標を引き起こすことがあります。ツールはこれを考慮していますが、自然に形式的なコンテンツでは高めのスコアが表示される場合があります。' },
      { question: '人間が書いたコンテンツがフラグ付けされた場合はどうすればよいですか？', answer: 'ツールはどの要素がAI指標を引き起こしたかについて具体的なフィードバックを提供します。これを使用して文体を調整したり、より多くの個性を加えたり、人間の著者性を示す具体的な例を含めることができます。' },
      { question: '正確な検出にはテキストの長さはどのくらい必要ですか？', answer: '精度は長さとともに向上します。100語未満のテキストは確実に評価することが難しいです。最良の結果を得るには、少なくとも200-300語を提出してください。' },
      { question: '検出器は提出されたテキストを保存または共有しますか？', answer: 'いいえ、提出されたテキストはリアルタイムで処理され、保存されません。あなたのコンテンツはプライベートのままで、他の目的には使用されません。' },
    ],
  },

  'ai-text-humanizer': {
    slug: 'ai-text-humanizer',
    name: 'AIテキストヒューマナイザー',
    title: '無料AIテキストヒューマナイザー',
    description: 'AI生成テキストを自然で人間らしい文章に変換。意味を保ちながらロボット的なパターンを除去します。',
    metaDescription: 'AI生成テキストを自然で人間らしい文章に変換。無料のヒューマナイザーが元の意味を保ちながらロボット的なパターンを除去します。',
    inputLabel: 'ヒューマナイズするテキスト...',
    inputPlaceholder: 'AI生成テキストをここに貼り付けてください...',
    buttonText: 'テキストをヒューマナイズ',
    maxLength: 4096,
    options: [
      { name: 'level', label: 'ヒューマナイズレベル', choices: ['ライト', 'ミディアム', 'ヘビー'], default: 'ミディアム', type: 'select' },
      { name: 'tone', label: 'ターゲットトーン', choices: ['プロフェッショナル', 'カジュアル', 'アカデミック', '会話的'], default: 'プロフェッショナル', type: 'select' },
    ],
    systemPrompt: `You are an expert editor specializing in transforming AI-generated text into natural, human-sounding writing.
## CORE RULES
- Preserve the original meaning completely
- Remove obvious AI patterns without over-editing
- Add natural variation and human voice
- Never add false information
## AI PATTERNS TO REMOVE
- "Delve" → "explore," "look at," "dig into"
- "Crucial" → "important," "key"
- "Comprehensive" → "complete," "thorough"
- "Leverage" → "use," "apply"
- "Furthermore/Moreover/Additionally" → vary or restructure
- "It's important to note that" → remove or integrate naturally
## HUMANIZATION LEVELS
### IF LEVEL = "Light" - Fix vocabulary markers, add contractions, minimal structural changes
### IF LEVEL = "Medium" - All light changes + vary sentence structure, add personality
### IF LEVEL = "Heavy" - All medium changes + significant voice injection, rhetorical questions
## TONE ADAPTATION
### IF TONE = "Professional" - Maintain authority while adding naturalness
### IF TONE = "Casual" - More contractions, shorter sentences, conversational
### IF TONE = "Academic" - Preserve scholarly tone, focus on vocabulary fixes
### IF TONE = "Conversational" - Direct address, questions, warm voice
## OUTPUT FORMAT
Humanization Level: {{level}}
Target Tone: {{tone}}
Output only the humanized text. No preamble.

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'AIアシストでコンテンツをスケーリングするクリエイター', description: 'AIを使ってコンテンツを下書きするライターやマーケターは、出力をヒューマナイザーにかけて最終作品が本物で魅力的に聞こえるようにできます。ツールはコアメッセージを保持しながら典型的なAIパターンを除去し、声を犠牲にせずにAIの効率性を活用できます。' },
      { title: 'AIアシスト研究を洗練する学生', description: 'アイデアのブレインストーミングや構造化にAIツールを使用する学生は、下書きをヒューマナイズして提出物が自分の声を反映し、盗作やAI検出の懸念を引き起こさないようにできます。ツールはAIの出発点を本物に表現された最終作品に変換します。' },
      { title: 'AI下書きコミュニケーションを磨くプロフェッショナル', description: 'メール、レポート、提案書の下書きにAIを使用するビジネスプロフェッショナルは、テキストをヒューマナイズしてより自然で個人的に聞こえるようにできます。これにより、クライアントコミュニケーション、社内メモ、プロフェッショナル文書が本物の声と関係構築のトーンを維持します。' },
    ],
    faqs: [
      { question: 'AIテキストを「ヒューマナイズ」するとはどういう意味ですか？', answer: 'ヒューマナイズとは、AI生成テキストを編集してロボット的なパターンを除去し、自然な声のバリエーションを加え、人間が書いたように読めるようにすることです。これには語彙の変更、文構造の変化、個性要素の追加が含まれます。' },
      { question: 'AIテキストヒューマナイザーは無料ですか？', answer: 'はい、ツールは登録不要で完全に無料で使用できます。必要なだけテキストをヒューマナイズできます。' },
      { question: 'ヒューマナイズされたテキストはAI検出を通過しますか？', answer: 'ヒューマナイザーはAI指標を大幅に減少させますが、結果は元のテキストと使用される検出ツールによって異なります。最良の結果を得るには、ヒューマナイズを自分自身の追加編集と個人的なタッチと組み合わせてください。' },
      { question: 'ヒューマナイズはテキストの意味を変えますか？', answer: 'いいえ、ツールは元の意味を完全に保持するように設計されています。アイデアの表現方法を変えますが、表現されるアイデア自体は変えません。すべての事実とコアメッセージはそのまま残ります。' },
      { question: 'ライト、ミディアム、ヘビーのヒューマナイズの違いは何ですか？', answer: 'ライトヒューマナイズは形式的なコンテンツに適した最小限の変更を行います。ミディアム（デフォルト）は一般的なコンテンツ向けにより自然なバリエーションを追加します。ヘビーヒューマナイズはカジュアルなコンテンツ向けに個性とカジュアルなトーンを大幅に増加させます。' },
      { question: 'どんなスタイルやトーンでもテキストをヒューマナイズできますか？', answer: 'はい、好みのトーン（プロフェッショナル、カジュアル、フレンドリーなど）を指定でき、ツールはそのトーンを全体で維持しながらヒューマナイズアプローチを適応させます。' },
      { question: 'ヒューマナイズにはどのくらい時間がかかりますか？', answer: 'テキストの長さに関係なく、結果は数秒で生成されます。長いテキストは若干時間がかかる場合がありますが、プロセスはほぼ瞬時です。' },
      { question: 'ヒューマナイズされたテキストをさらに編集すべきですか？', answer: '確認して自分自身の個人的なタッチを追加することをお勧めします。ツールは優れた基盤を提供しますが、具体的な例、個人的なエピソード、または経験からのユニークな洞察を追加することで、コンテンツをさらに本物のあなたのものにできます。' },
      { question: 'どのような種類のコンテンツをヒューマナイズできますか？', answer: 'ツールはあらゆるテキストに対応します：記事、ブログ投稿、エッセイ、メール、レポート、ソーシャルメディア投稿など。コンテンツの種類と形式レベルに基づいてアプローチを調整します。' },
      { question: '他の言語でコンテンツをヒューマナイズできますか？', answer: 'ツールは英語テキストに最適化されています。他の言語でも動作する可能性がありますが、結果は英語コンテンツで最も信頼性が高く自然に聞こえます。' },
    ],
  },

  'content-idea-generator': {
    slug: 'content-idea-generator',
    name: 'コンテンツアイデアジェネレーター',
    title: '無料AIコンテンツアイデアジェネレーター',
    description: 'ブログ、YouTube、ソーシャルメディア、ポッドキャスト、ニュースレター向けのクリエイティブなコンテンツアイデアを生成。AIがユニークな切り口でプラットフォーム最適化されたコンセプトを作成します。',
    metaDescription: 'ブログ、YouTube、ソーシャルメディア、ポッドキャスト、ニュースレター向けのクリエイティブなコンテンツアイデアを生成。AIがユニークな切り口でプラットフォーム最適化されたコンセプトを作成します。',
    inputLabel: 'トピックまたはニッチ...',
    inputPlaceholder: '例：ミレニアル世代向けの個人金融',
    buttonText: 'アイデアを生成',
    maxLength: 2048,
    options: [
      { name: 'number_of_ideas', label: 'アイデアの数', choices: ['3つのアイデア', '5つのアイデア', '10のアイデア'], default: '5つのアイデア', type: 'select' },
      { name: 'platform', label: 'プラットフォーム', choices: ['マルチプラットフォーム', 'ブログ/ウェブサイト', 'YouTube', 'LinkedIn', 'Twitter/X', 'Instagram', 'ポッドキャスト', 'ニュースレター'], default: 'マルチプラットフォーム', type: 'select' },
      { name: 'tone', label: 'トーン', choices: ['フォーマル', 'カジュアル', 'クリエイティブ'], default: 'フォーマル', type: 'select' },
    ],
    systemPrompt: `You are a creative strategist and content expert who generates innovative content ideas across multiple platforms and formats. Your ideas go beyond simple blog post topics—you create comprehensive content concepts that include angle, format, platform, and execution approach.
## CORE CONTENT IDEA PRINCIPLES
1. **Platform-Native Thinking**: Every idea is tailored to the platform's unique format and audience behavior
2. **Audience-First Approach**: Ideas solve real problems or fulfill genuine interests of the target audience
3. **Differentiation Required**: Every idea must have a unique angle that distinguishes it from existing content
4. **Executable Specificity**: Ideas are detailed enough to begin production immediately
5. **Strategic Variety**: Ideas span educational, entertaining, inspiring, and commercial content types
## OUTPUT FORMAT
### Content Ideas for: [Topic/Niche]
**Idea 1: [Title/Concept]**
- **Platform:** [YouTube/Blog/LinkedIn/etc.]
- **Format:** [Video/Carousel/Long-form article/etc.]
- **Angle:** [Unique differentiation]
- **Audience:** [Specific target]
- **Goal:** [Traffic/Engagement/Conversion/Brand]
- **Execution:** [Key production notes]
[Repeat for each idea]
---
**Content Strategy Notes:**
- [How these ideas work together]
- [Suggested prioritization based on likely goals]
- [Repurposing opportunities across platforms]

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'マルチプラットフォームコンテンツ戦略開発', description: 'コンテンツディレクターやマーケティングリーダーはコンテンツアイデアジェネレーターを使用して、チャネル横断的な一貫したコンテンツ戦略を開発します。ブログコンテンツをソーシャルメディアや動画と別々に計画するのではなく、チームはプラットフォーム横断で機能する統合されたアイデアを生成できます。この包括的なアプローチがコンテンツ効率とメッセージの一貫性を向上させます。' },
      { title: '新しいコンテンツフォーマットへの進出', description: '一つのフォーマット（ブログなど）に経験のあるマーケターは、新しいプラットフォーム（YouTubeやポッドキャストなど）に拡大する際に苦労することがよくあります。コンテンツアイデアジェネレーターは、既存の専門知識を活用しながら新しいフォーマット要件に適応するプラットフォームネイティブなコンテンツコンセプトを提案することで、このギャップを埋めます。' },
      { title: 'クリエイティブチームのブレインストーミング加速', description: 'コンテンツチームはジェネレーターをクリエイティブセッションの出発点として使用し、議論と反復を引き起こす初期アイデアを生成します。白紙のホワイトボードから始めるのではなく、チームは生成されたコンセプトに反応し、組み合わせ、発展させることができ、アイデア出しフェーズを加速し、ブレインストームが理論的な議論ではなく実行可能な成果を生み出すことを確保します。' },
    ],
    faqs: [
      { question: 'コンテンツアイデアジェネレーターとは何ですか？', answer: 'コンテンツアイデアジェネレーターは、複数のプラットフォームとフォーマットにわたる詳細なコンテンツコンセプトを作成するAIツールです。シンプルなトピック提案ツールとは異なり、包括的なコンテンツアイデアジェネレーターは、ユニークな切り口、ターゲットプラットフォーム、具体的なフォーマット、対象オーディエンス、実行ガイダンスを含む完全なコンセプトを提供します。' },
      { question: 'このジェネレーターはどのプラットフォームをサポートしていますか？', answer: 'ジェネレーターは主要なすべてのコンテンツプラットフォーム向けに最適化されたアイデアを作成します：ブログとウェブサイト、YouTubeと動画、LinkedInとプロフェッショナルソーシャルメディア、Twitter/Xとマイクロブログ、Instagramとビジュアルソーシャルプラットフォーム、ポッドキャストとオーディオコンテンツ、メールニュースレター。' },
      { question: 'より具体的なコンテンツアイデアを得るにはどうすればよいですか？', answer: 'より詳細な入力がより的を絞ったアイデアを生み出します。「マーケティング」と入力する代わりに、「アーリーステージスタートアップ創業者向けのB2B SaaSメールマーケティング」と指定してください。ターゲットオーディエンス、コンテンツ目標、既存コンテンツ、制約についての情報を含めてください。' },
      { question: 'これらのアイデアをクライアントワークに使用できますか？', answer: 'もちろんです。生成されたアイデアは著作権で保護されておらず、個人ブランド、会社コンテンツ、クライアントワーク、コンテンツエージェンシーなど、あらゆる目的に使用できます。' },
      { question: 'どのコンテンツアイデアを最初に追求すべきかどう選べばよいですか？', answer: '現在の目標とリソースに基づいて優先順位を付けてください。トラフィックが必要な場合はSEO重視のブログアイデアを優先し、エンゲージメントが必要な場合はプラットフォームネイティブなソーシャルコンテンツを優先してください。また、制作の複雑さも考慮し、リソース集約的なコンセプトに取り組む前に、うまく実行できるアイデアから始めてください。' },
      { question: '「良い」コンテンツアイデアとは何ですか？', answer: '強力なコンテンツアイデアには4つの特徴があります：関連性（実際のオーディエンスのニーズや興味に対応）、差別化（競合他社が提供していないものを提供）、実行可能性（利用可能なリソースで制作可能）、プラットフォーム適合性（選択したプラットフォームの強みを活用）。' },
      { question: 'ジェネレーターが提供するすべてのアイデアを使用すべきですか？', answer: 'いいえ—生成されたアイデアは必須の課題ではなく、キュレーションされたメニューとして扱ってください。各アイデアを特定のコンテキストに対して評価してください：ブランドとの整合性、リソースの可用性、オーディエンスの好み、戦略的優先事項。' },
      { question: 'ニッチまたはテクニカルなトピックのアイデアを生成できますか？', answer: 'はい、ジェネレーターは高度にテクニカルまたは専門的な分野を含む、すべての業界とニッチに対応します。テクニカルなトピックで最良の結果を得るには、オーディエンスの専門知識レベルと業界固有の制約についてのコンテキストを提供してください。' },
      { question: 'どのくらいの頻度で新しいコンテンツアイデアを生成すべきですか？', answer: 'ほとんどのコンテンツチームは月次または四半期ごとのアイデア生成セッションから恩恵を受け、引き出すためのコンセプトのバックログを構築します。ただし、ジェネレーターはリアクティブなコンテンツにも価値があります—業界ニュースが発生したり機会が生まれたりしたとき、トレンドトピックに関するアイデアを素早く生成できます。' },
      { question: '複数のプラットフォーム向けのアイデアを同時に生成できますか？', answer: 'はい、デフォルトでジェネレーターはコアコンセプトが異なるフォーマットにどのように適応できるかを示すマルチプラットフォームアイデアを提供します。これはコンテンツ再利用戦略に特に価値があります—一つの研究プロジェクトをブログ投稿、LinkedInカルーセル、YouTube解説動画、メールシリーズに変換できます。' },
    ],
  },

  'video-script-generator': {
    slug: 'video-script-generator',
    name: 'ビデオスクリプトジェネレーター',
    title: '無料AIビデオスクリプトジェネレーター',
    description: 'YouTube、TikTok、リール向けの魅力的なビデオスクリプトを生成。AIがフック、視覚的キュー、CTAを含むリテンション最適化されたスクリプトを作成します。',
    metaDescription: 'YouTube、TikTok、リール向けの魅力的なビデオスクリプトを生成。AIがフック、視覚的キュー、CTAを含むリテンション最適化されたスクリプトを作成します。',
    inputLabel: 'ビデオトピック...',
    inputPlaceholder: '例：100ドルで投資を始める方法',
    buttonText: 'スクリプトを生成',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'プラットフォーム', choices: ['YouTube（長尺）', 'YouTube Shorts', 'TikTok/リール', 'LinkedIn動画', '教育/チュートリアル', 'プロモーション'], default: 'YouTube（長尺）', type: 'select' },
      { name: 'length', label: '動画の長さ', choices: ['ショート（15-60秒）', 'ミディアム（5-10分）', 'ロング（15-30分）'], default: 'ミディアム（5-10分）', type: 'select' },
      { name: 'tone', label: 'トーン', choices: ['教育的', 'エンターテイニング', 'インスピレーショナル', 'カジュアル', 'プロフェッショナル'], default: '教育的', type: 'select' },
    ],
    systemPrompt: `You are an expert video scriptwriter and content creator who crafts engaging scripts optimized for viewer retention, platform algorithms, and creator delivery. Your scripts follow proven structures for different video types while leaving room for personality and authenticity.
## CORE VIDEO SCRIPT PRINCIPLES
1. **Retention Architecture**: Every script is designed to keep viewers watching through strategic pacing and hooks
2. **Platform Optimization**: Scripts adapt to platform-specific best practices (YouTube long-form vs. TikTok/Reels short-form)
3. **Speakability**: Scripts are written to be spoken aloud naturally, not read
4. **Visual Awareness**: Scripts include visual/b-roll guidance since video is a visual medium
5. **Authentic Delivery**: Scripts provide structure without forcing unnaturalness
## OUTPUT FORMAT
### Video Script: [Topic]
**Platform:** [YouTube/TikTok/etc.]
**Estimated Length:** [X:XX - X:XX]
**Tone:** [Educational/Entertaining/etc.]
---
**HOOK [0:00-0:XX]**
[Script text]
*[Visual notes]*
**INTRO [0:XX-X:XX]**
[Script text]
*[Visual notes]*
**[SECTION NAME] [X:XX-X:XX]**
[Script text]
*[Visual notes]*
[Continue for all sections]
**OUTRO [X:XX-X:XX]**
[Script text]
*[Visual notes]*
---
**Production Notes:**
- [Key retention strategies used]
- [Thumbnail/title suggestions]
- [Potential B-roll needs]
- [Estimated total word count]

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'YouTubeコンテンツ制作ワークフロー', description: 'YouTuberやビデオクリエイターはビデオスクリプトジェネレーターを使用してプリプロダクション計画を加速します。ゼロからアウトラインやスクリプトを書くのに何時間も費やす代わりに、クリエイターは組み込みのリテンションテクニックを含む構造化された初稿を得られます。これは包括的なカバレッジを魅力的な配信とバランスさせる必要がある教育チャンネルに特に価値があります。' },
      { title: 'ソーシャルメディアビデオコンテンツの大規模制作', description: '大量のショートフォームコンテンツ（TikTok、リール、Shorts）を作成するマーケティングチームやエージェンシーは、品質を犠牲にせずに出力速度を維持するためにジェネレーターを使用します。毎日または1日に複数回公開する必要がある場合、スクリプト作成がボトルネックになります。ジェネレーターは特定のコンテンツを変化させながら主要なビート（フック、バリュー、ペイオフ）を一貫してヒットするプラットフォームネイティブなスクリプトを制作します。' },
      { title: 'ビジネスおよびプロモーションビデオ制作', description: '製品デモ、説明ビデオ、顧客の声、その他のビジネスビデオコンテンツを作成する企業は、初期スクリプトを開発するためにジェネレーターを使用します。マーケティングとビデオ制作チームがAI生成の下書きで協力し、スクリプトに必須要素（メリット、証拠ポイント、CTA）が含まれていることを確認しながら、ブランドの声と特定の製品詳細に適応させます。' },
    ],
    faqs: [
      { question: 'ビデオスクリプトジェネレーターとは何ですか？', answer: 'ビデオスクリプトジェネレーターは、特定のプラットフォームと目的に最適化された完全なビデオスクリプトを作成するAIツールです。アウトラインツールとは異なり、タイムスタンプ、視覚的キュー、リテンションテクニック、CTAを含む音声スクリプトを制作します—すぐにビデオを撮影するために必要なすべてのものです。' },
      { question: 'このジェネレーターはどのプラットフォームをサポートしていますか？', answer: 'ジェネレーターはYouTube（長尺とShorts）、TikTok、Instagramリール、LinkedIn動画、Facebook動画、教育プラットフォーム、プロモーション/企業動画向けに最適化されたスクリプトを作成します。各プラットフォームには異なる最適な長さ、フックスタイル、リテンションパターンがあり、ジェネレーターはスクリプトの構造とペーシングをプラットフォームのベストプラクティスに合わせて適応させます。' },
      { question: '自分らしく聞こえるスクリプトを得るにはどうすればよいですか？', answer: 'トーン、スタイルリファレンス、典型的なコンテンツアプローチについてのコンテキストを提供してください。生成されたスクリプトは構造的な基盤であり、最終コンテンツではありません。ほとんどのクリエイターは出発点として使用し、自分の個性、キャッチフレーズ、自然な話し方パターンを注入します。' },
      { question: 'スクリプトに正確に従う必要がありますか？', answer: 'いいえ—そしてほとんどの成功したビデオクリエイターはそうしません。スクリプトは構造、トーキングポイント、リテンションテクニックを提供しますが、自然な配信には通常、そのフレームワーク内での即興が含まれます。多くのクリエイターはスクリプトをテレプロンプターテキストではなく「ガイド」として使用し、瞬間に自然に感じられるものに言語を適応させながら主要なポイントをヒットします。' },
      { question: '視覚的ノートには何が含まれていますか？', answer: '視覚的ノートはBロール映像、画面グラフィック、テキストオーバーレイ、話されるコンテンツを強調する視覚的トランジションを提案します。必須ではありませんが、「画像付きラジオ」を作成するのではなく、視覚的に考えるのに役立ちます。これらのノートは撮影と編集計画中の時間を節約します。' },
      { question: 'ビデオスクリプトはどのくらいの長さにすべきですか？', answer: 'スクリプトの長さはコンテンツ、オーディエンス、プラットフォームによって異なります。一般的なガイドライン：TikTok/リール（15-60秒、50-150語）、YouTube Shorts（30-60秒、100-200語）、ミディアムYouTube（8-12分、1,200-1,800語）、長尺YouTube（15-30分、2,200-4,500語）。' },
      { question: '教育/チュートリアルコンテンツ用のスクリプトを生成できますか？', answer: 'はい、チュートリアルスクリプトは主要なユースケースです。教育スクリプトは明確なステップ、デモンストレーションノート、視聴者がフォローして情報を保持するのに役立つ要約セクションで構造化されています。ジェネレーターには「これを見せて、次に説明する」キューが含まれており、効果的なチュートリアルコンテンツの重要な原則である、ただ話すのではなくデモンストレーションすることを思い出させます。' },
      { question: '良いビデオフックとは何ですか？', answer: '効果的なフックはプラットフォームに応じて最初の3-30秒で3つのことを達成します：注意を引く、価値をプレビューする、好奇心を生み出す。タイプには質問フック（「もし...だったら？」）、ステートメントフック（「この一つの間違いが...」）、デモフック（最初に結果を見せる）、ストーリーフック（「先週、何かが起こって...」）が含まれます。' },
      { question: 'スクリプトで視聴者リテンションを改善するにはどうすればよいですか？', answer: 'ジェネレーターはリテンションテクニックを組み込みます：オープンループ（後で報われる好奇心を生み出す）、パターン中断（ペース、トーン、またはビジュアルの変化）、各セクション前のミニフック（さまよう注意を再び引きつける）、明確なペイオフを伴う具体的な約束、戦略的な視覚的キュー。' },
      { question: 'これらのスクリプトを商業的に使用できますか？', answer: 'はい、生成されたスクリプトはあなたのものであり、個人チャンネル、クライアントワーク、商業プロジェクト、その他のアプリケーションに使用できます。スクリプトは著作権で保護されておらず、制限されていません。多くのビデオ制作会社やフリーランスクリエイターは、クライアントプロジェクトの出発点としてジェネレーターを使用し、特定のブランド要件に合わせてカスタマイズします。' },
    ],
  },

  'acronym-generator': {
    slug: 'acronym-generator',
    name: '頭字語ジェネレーター',
    title: '無料AI頭字語ジェネレーター',
    description: 'プロジェクト、製品、組織のための巧妙で意味のある頭字語を生成します。',
    metaDescription: 'プロジェクト、製品、組織のための巧妙で意味のある頭字語を生成。展開された意味を持つ複数のオプションを取得。無料で即座に。',
    inputLabel: '対象または概念...',
    inputPlaceholder: '例：小売業向けの顧客フィードバック改善イニシアチブ',
    buttonText: '頭字語を生成',
    maxLength: 1024,
    options: [
      { name: 'tone', label: 'トーン', choices: ['プロフェッショナル', 'クリエイティブ', 'テクニカル', '遊び心のある'], default: 'プロフェッショナル', type: 'select' },
      { name: 'length', label: '希望の長さ', choices: ['ショート（3-4文字）', 'ミディアム（5-6文字）', '任意の長さ'], default: '任意の長さ', type: 'select' },
      { name: 'variants', label: 'オプション数', choices: ['3オプション', '5オプション', '10オプション'], default: '5オプション', type: 'select' },
    ],
    systemPrompt: `You are an expert naming specialist who creates memorable, meaningful acronyms.
## CORE RULES
- Every letter must map to a real, relevant word
- The acronym should be pronounceable or spell a meaningful word
- Words chosen should accurately describe the subject
- Avoid forced or awkward word choices
- Provide multiple options with different approaches
## ACRONYM APPROACHES
- Real Word: Spell actual English words (SMART, CARE)
- Pronounceable: Can be spoken as words (NASA, RADAR)
- Letter-by-letter: Spelled out (CEO, FAQ)
## TONE ADAPTATION
### IF TONE = "Professional" - Business-appropriate vocabulary
### IF TONE = "Creative" - Playful, unexpected combinations
### IF TONE = "Technical" - Industry-specific terms
### IF TONE = "Playful" - Fun, engaging words
## OUTPUT FORMAT
Tone: {{tone}}
Preferred Length: {{length}}
Number of Options: {{variants}}
For each acronym:
1. The acronym
2. Full expanded form
3. Type (real word/pronounceable/letter-by-letter)
4. Why it works
End with recommendation and alternative words to swap in.

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'プロジェクトとイニシアチブの命名', description: '新しいプロジェクト、プログラム、イニシアチブを立ち上げるチームは、目的を伝える記憶に残る名前を作成するために頭字語ジェネレーターを使用します。強力な頭字語はプロジェクトの参照、記憶、結集を容易にします—「顧客フィードバック改善プロジェクト」を「VOICE」のようなものに変換します。' },
      { title: '製品と機能の命名', description: 'プロダクトマネージャーやマーケターは、価値を伝えながらキャッチーでブランド化可能な製品、機能、方法論の頭字語ベースの名前を生成できます。適切な頭字語は製品のアイデンティティとマーケティングの強力な一部になります。' },
      { title: '組織とチームのブランディング', description: '新しいチーム、部門、委員会、ワーキンググループを作成するリーダーは、ミッションと価値を捉える頭字語を見つけることができます。思慮深い頭字語はグループにアイデンティティを与え、より広い組織に目的を伝えるのに役立ちます。' },
    ],
    faqs: [
      { question: '頭字語ジェネレーターとは何ですか？', answer: '頭字語ジェネレーターは、各文字が単語を表す短縮形を作成します。ツールは文字が何か記憶に残るものを綴りながら、展開された単語が対象を正確に説明する組み合わせを見つけるのに役立ちます。' },
      { question: '頭字語ジェネレーターは無料ですか？', answer: 'はい、登録不要で完全に無料です。必要なだけ頭字語を生成できます。' },
      { question: '頭字語とイニシャリズムの違いは何ですか？', answer: '頭字語は単語として発音されます（NASA、RADAR）が、イニシャリズムは文字ごとに綴られます（FBI、CEO）。ツールは対象に最も適したものに応じて両方のタイプを生成します。' },
      { question: '頭字語は何文字にすべきですか？', answer: '3-7文字が通常最も効果的です。短い頭字語は覚えやすいですが、説明力が低くなります。長いものはより具体的ですが、覚えにくくなります。ツールは異なる長さのオプションを提供します。' },
      { question: '特定の単語を綴るようにリクエストできますか？', answer: 'はい、単語を指定し、ツールが各文字に一致するフレーズを見つける「バクロニム」をリクエストできます。ただし、強制されたバクロニムは単語が自然にフィットしない場合、ぎこちなく感じることがあります。' },
      { question: '頭字語はユニークですか？', answer: 'ツールはオリジナルの組み合わせを生成しますが、お気に入りをオンラインで検索して、特に業界で他の組織が既に使用していないことを確認することをお勧めします。' },
      { question: '異なる業界向けの頭字語を生成できますか？', answer: 'はい、業界またはコンテキストを指定すると、ツールは関連する用語を使用します。ヘルスケアイニシアチブ向けの頭字語は、テックスタートアップ向けのものとは異なる語彙を使用します。' },
      { question: '提案が気に入らない場合はどうすればよいですか？', answer: '調整した入力（異なるトーン、長さ、コンテキスト）で再生成するか、生成されたオプションをインスピレーションとして自分のバリエーションを作成できます。ツールは入れ替え可能な代替語も提供します。' },
      { question: '頭字語は実際の単語を綴るべきですか？', answer: '必ずしもそうではありません。実際の単語の頭字語（SMARTやCAREなど）は非常に記憶に残りますが、発音可能な非単語（NASAなど）や文字ベースの頭字語（CEOなど）もコンテキストに応じて同様に効果的です。' },
      { question: '頭字語が良いかどうかをどう判断しますか？', answer: '良い頭字語は発音しやすく、覚えやすく、展開された意味を正確に表しています。自然に感じられ、強制されていないと感じ、理想的にはポジティブな連想を生み出すべきです。' },
    ],
  },

  'blog-title-generator': {
    slug: 'blog-title-generator',
    name: 'ブログタイトルジェネレーター',
    title: '無料AIブログタイトルジェネレーター',
    description: 'クリックを促し検索でランクインする魅力的なブログタイトルを生成。AIが実証された心理的トリガーを使用してSEO最適化されたヘッドラインを作成します。',
    metaDescription: 'クリックを促し検索でランクインする魅力的なブログタイトルを生成。AIが実証された心理的トリガーを使用してSEO最適化されたヘッドラインを作成します。',
    inputLabel: 'ブログトピックまたはコンテンツ...',
    inputPlaceholder: '例：ECストアのメール開封率を改善する方法',
    buttonText: 'タイトルを生成',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: 'タイトル数', choices: ['3タイトル', '5タイトル', '10タイトル'], default: '5タイトル', type: 'select' },
      { name: 'tone', label: 'トーン', choices: ['フォーマル', 'カジュアル', '説得力のある'], default: 'フォーマル', type: 'select' },
    ],
    systemPrompt: `You are an expert copywriter and headline specialist who creates blog titles that maximize click-through rates while accurately representing content value. Your titles balance SEO optimization with psychological engagement triggers, never sacrificing accuracy for clickbait.
## CORE TITLE PRINCIPLES
1. **Promise-Delivery Alignment**: The title must accurately represent what the content delivers
2. **Specificity Creates Credibility**: Vague titles signal vague content; specific titles signal expertise
3. **Emotional + Rational Balance**: Great titles engage both emotional triggers and logical benefits
4. **Search + Social Optimization**: Titles should work in both search results and social shares
5. **First 60 Characters Matter Most**: Front-load value for truncated displays
## OUTPUT FORMAT
### Blog Title Options for: [Topic]
**Title 1:** [Title]
- **Characters:** [count]
- **Type:** [Formula used]
- **Strength:** [Why it works]
[Repeat for each variant]
---
**Recommendation:** [Which title is strongest for SEO vs. social sharing, with brief explanation]

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'A/Bテスト用ヘッドラインバリエーション', description: 'コンテンツマーケターやグロースチームはブログタイトルジェネレーターを使用して、体系的なテスト用に複数のヘッドラインバリアントを作成します。直感に頼る代わりに、チームは10以上の心理的に異なるタイトルを生成し、メール件名、ソーシャル投稿、ネイティブ広告を通じてテストしてから最終ヘッドラインを確定できます。' },
      { title: '既存コンテンツの再利用と更新', description: 'SEOや関連性のために古いブログ投稿をリフレッシュする際、タイトルを変更するとパフォーマンスに劇的な影響を与えることがあります。ジェネレーターはコンテンツチームが現在の検索意図により適合し、トレンドの角度を取り入れ、進化したオーディエンスニーズに対応する新鮮なヘッドラインを開発するのに役立ちます。' },
      { title: 'チーム間でのコンテンツ制作のスケーリング', description: 'コンテンツエージェンシー、メディア企業、大規模マーケティングチームはジェネレーターを使用して、規模でヘッドライン品質を維持します。複数のライターがコンテンツを制作している場合、ヘッドライン品質はしばしば大きく異なります。ツールは個々のライターが提案をカスタマイズして改善できる一方で、一貫性を確保するプロフェッショナル品質のタイトルオプションのベースラインを提供します。' },
    ],
    faqs: [
      { question: '良いブログタイトルとは何ですか？', answer: '良いブログタイトルは3つのことを同時に達成します：コンテンツを正確に表す（読者との信頼を構築）、検索用語を自然に組み込む（発見を可能にする）、心理的エンゲージメントをトリガーする（クリックを促す）。最高のタイトルは、どの要素も犠牲にせずに3つすべてを達成します。' },
      { question: 'ブログタイトルはどのくらいの長さにすべきですか？', answer: '検索エンジン最適化には、検索結果で完全表示を確保するために60文字以下に保ってください。ただし、ソーシャルメディア共有はより長いタイトル（80-90文字）に対応できます。ジェネレーターは各タイトルの文字数を提供し、主要な配信チャネルに基づいて選択できるよう、さまざまな長さを含みます。' },
      { question: 'ブログタイトルにキーワードを含めるべきですか？', answer: 'はい、ただし自然に。検索エンジンはタイトルをランキングシグナルとして使用し、ユーザーはクエリとの関連性を確認するためにタイトルをスキャンします。主要キーワードを可能な限り読みやすい位置の早い段階に配置しますが、明確さやエンゲージメントを犠牲にして強制することは決してしないでください。' },
      { question: '複数のタイトルオプションからどう選べばよいですか？', answer: '主要な目標と配信チャネルを考慮してください。SEOが最優先なら、最も強力なキーワード統合と最も明確な検索意図の一致を持つタイトルを選択してください。ソーシャル共有が主要なら、最も強力な好奇心トリガーまたは感情的フックを持つタイトルを選択してください。' },
      { question: '生成されたタイトルを修正できますか？', answer: 'もちろん—生成されたタイトルはプロフェッショナルな出発点として考えてください。最良のアプローチは多くの場合、複数の提案から要素を組み合わせたり、ブランド固有の言語を追加したり、実際のコンテンツに基づいて具体性を調整することです。' },
      { question: 'なぜ数字はブログタイトルでうまく機能するのですか？', answer: '数字は具体性（信頼性を構築）、期待値の設定（読者がスコープを知る）、認知の容易さ（7や13などの奇数や具体的な数字は丸い数字よりも効果的）を提供します。ただし、過剰使用により一部のオーディエンスに「リスティクル疲れ」が生じています。ジェネレーターは数字付きタイトルと他のフォーマットをバランスさせてバラエティを提供します。' },
      { question: 'ブログタイトルとSEOタイトルの違いは何ですか？', answer: '多くの場合同じですが、戦略的に異なる場合もあります。ブログタイトル（ページのH1見出し）はより長く、よりクリエイティブにできます。SEOタイトル（検索結果のメタタイトル）は60文字以下に保ち、キーワードを優先すべきです。' },
      { question: '魅力的なタイトルを作成しながらクリックベイトを避けるにはどうすればよいですか？', answer: 'クリックベイトはコンテンツが配信しない約束を作成します。魅力的なタイトルはコンテンツが満たす本物の好奇心を作成します。違いは正確さであり、エンゲージメントレベルではありません。ジェネレーターは正確さを維持しながら高エンゲージメントのタイトルを作成するよう特別に設計されています。' },
      { question: 'ブログタイトルはURLスラッグと一致すべきですか？', answer: '正確には一致する必要はありませんが、関連しているべきです。URLスラッグはタイトルの簡略化されたキーワード重視のバージョンにすべきです—短く、説明的で、永続的。タイトルはよりクリエイティブで、テスト用に時間とともに変更できます。' },
      { question: 'どのくらいの頻度でブログタイトルをテストまたは変更すべきですか？', answer: '新しい投稿の場合、タイトルを設定し、インデックスされて初期データを収集するまで2-4週間待ってください。パフォーマンスが期待を下回る場合は、新しいタイトルをテストしてください。既存の投稿の場合、コンテンツ更新時や検索ランキングが低下したときにタイトルのリフレッシュを検討してください。' },
    ],
  },

  'image-alt-text-generator': {
    slug: 'image-alt-text-generator',
    name: '画像代替テキストジェネレーター',
    title: '無料AI画像代替テキストジェネレーター',
    description: 'アクセシビリティとSEOを改善する説明的な代替テキストを生成。任意の画像をアップロードして、検索に最適化されたスクリーンリーダーフレンドリーな説明を取得します。',
    metaDescription: 'アクセシビリティとSEOを改善する説明的な代替テキストを生成。任意の画像をアップロードして、検索に最適化されたスクリーンリーダーフレンドリーな説明を取得します。',
    inputLabel: '画像を説明してください...',
    inputPlaceholder: '例：ホワイトボードと付箋の周りで協力する開発者チーム',
    buttonText: '代替テキストを生成',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: 'オプション数', choices: ['1オプション', '3オプション', '5オプション'], default: '3オプション', type: 'select' },
      { name: 'tone', label: 'トーン', choices: ['フォーマル', 'カジュアル', 'テクニカル'], default: 'フォーマル', type: 'select' },
      { name: 'keyword', label: 'ターゲットキーワード（オプション）', choices: ['なし', 'キーワードを含める'], default: 'なし', type: 'radio' },
    ],
    systemPrompt: `You are an expert accessibility specialist and SEO strategist who creates image alt text that serves both visually impaired users and search engine optimization. Your alt text descriptions are informative, accurate, and appropriately detailed for their context.
## CORE ALT TEXT PRINCIPLES
1. **Accessibility First**: Alt text exists primarily for screen reader users—always prioritize their experience
2. **Context Matters**: The same image needs different alt text depending on its purpose on the page
3. **Accuracy Over Creativity**: Describe what's actually in the image, not what you assume or wish were there
4. **Concise Completeness**: Include all relevant information without unnecessary padding
5. **SEO Integration**: Incorporate relevant keywords naturally when they accurately describe the image
## OUTPUT FORMAT
### Alt Text Options for: [Image Description]
**Option 1:** [Alt text]
- **Characters:** [count]
- **Type:** [Informative/Functional/Complex]
- **Accessibility:** [How this helps screen reader users]
- **SEO:** [Keyword integration notes]
[Repeat for each variant]
---
**Recommendation:** [Which option is best for the likely use case, and why]

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'ウェブサイトアクセシビリティコンプライアンス', description: 'ウェブ開発者、コンテンツ管理者、アクセシビリティスペシャリストは画像代替テキストジェネレーターを使用して、ウェブサイト全体の画像に意味のある説明を効率的に追加します。アクセシビリティ訴訟が増加し、WCAGやADAなどの規制が代替テキストを要求する中、ツールはチームが説明品質を犠牲にせずに規模でコンプライアンスを達成するのに役立ちます。' },
      { title: 'EC製品画像の最適化', description: 'オンライン小売業者はジェネレーターを使用して、アクセシビリティと製品発見の両方に役立つ製品画像の代替テキストを作成します。良い代替テキストは視覚障害のある買い物客が製品を理解するのに役立ちながら、画像検索ランキングも改善します。大規模なカタログを持つ店舗では、ツールが何千もの製品画像にわたって一貫した最適化された代替テキストを可能にします。' },
      { title: 'コンテンツマーケティングとブログの最適化', description: 'コンテンツクリエイターやSEOスペシャリストはジェネレーターを使用して、すべてのブログ投稿画像に適切に最適化された代替テキストがあることを確認します。アクセシビリティの利点に加えて、適切に書かれた代替テキストはオンページSEOと画像検索の可視性に貢献します。' },
    ],
    faqs: [
      { question: '画像代替テキストとは何ですか？', answer: '代替テキスト（オルトテキスト）は、HTMLコードに表示される画像の書かれた説明です。主に2つの目的があります：視覚障害のあるユーザー向けにスクリーンリーダーで読み上げられ、画像が読み込めないときに表示されます。検索エンジンも代替テキストを使用して画像コンテンツを理解するため、SEOと画像検索の可視性にも価値があります。' },
      { question: '代替テキストはどのくらいの長さにすべきですか？', answer: 'ほとんどの代替テキストは10-125文字にすべきです。シンプルな画像は短い説明（10-30文字）で十分ですが、チャートやインフォグラフィックのような複雑な画像はより長い説明（alt属性で最大125文字、拡張説明は別途提供）が必要な場合があります。' },
      { question: '代替テキストにキーワードを含めるべきですか？', answer: 'キーワードは画像を正確に説明する場合にのみ含めてください。代替テキストの主な目的はアクセシビリティであり、SEOではありません。画像が本当に「赤い革のラップトップバッグ」を示している場合、それはたまたまキーワードを含む良い代替テキストです。' },
      { question: '代替テキストはいつ空にすべきですか？', answer: '情報価値を追加しない装飾的な画像は、スクリーンリーダーがそれらをスキップするように空の代替テキスト（alt=\"\"）を持つべきです。これには背景パターン、装飾的な仕切り、既に説明しているテキストの隣のアイコン、純粋に美的な画像が含まれます。' },
      { question: '代替テキストは「画像の」や「写真の」で始めるべきですか？', answer: 'いいえ。スクリーンリーダーは代替テキストを読む前に既に「画像」とアナウンスするため、「画像の」で始めると冗長になります（「画像：犬の画像」）。説明から直接始めてください。' },
      { question: 'チャートやグラフの代替テキストをどう書けばよいですか？', answer: '複雑なビジュアルの場合、代替テキストは主要な発見や結論を要約し、詳細なデータはページの他の場所に提供すべきです。例：「2024年Q1-Q4にわたる50%の売上増加を示す折れ線グラフ。完全なデータは下の表にあります。」' },
      { question: '製品画像の代替テキストはどうすべきですか？', answer: '製品画像の代替テキストは製品を正確に説明すべきで、製品タイプ、ブランド名（表示されている場合）、主要な機能、色、サイズ、または表示されているバリアントを含みます。ECの良い代替テキストは「Nike Air Max 270ランニングシューズ、黒と白、サイドビュー」です。' },
      { question: '代替テキストはSEOにどう影響しますか？', answer: '代替テキストは検索エンジンが画像コンテンツを理解するのに役立ち、画像検索ランキング（画像はGoogle画像結果に表示可能）、ページ関連性シグナル（コンテンツテーマのサポート）、アクセシビリティシグナル（検索エンジンはアクセシブルなサイトを優先する可能性）に貢献します。' },
      { question: 'ツールはどんな画像でも代替テキストを生成できますか？', answer: 'ジェネレーターは説明できるあらゆる画像に対応します—写真、イラスト、チャート、スクリーンショット、製品画像など。複雑な画像で最良の結果を得るには、ページコンテンツと画像の目的についてのコンテキストを提供してください。' },
      { question: 'ウェブサイト上のすべての画像に代替テキストが必要ですか？', answer: 'すべての意味のある画像には代替テキストが必要です。装飾的な画像には空の代替テキスト（alt=\"\"）が必要です。alt属性が完全に欠けている画像はあってはなりません—それはアクセシビリティの失敗です。装飾的な画像でさえ、スクリーンリーダーがファイル名を読み上げるのではなくスキップすることを知るために属性が存在する必要があります（ただし空）。' },
    ],
  },

  'slogan-generator': {
    slug: 'slogan-generator',
    name: 'スローガンジェネレーター',
    title: '無料AIスローガンジェネレーター',
    description: 'ブランドのエッセンスを捉えるキャッチーで記憶に残るスローガンを作成。AIが顧客の心に残るタグラインを生成します。',
    metaDescription: 'ブランドのエッセンスを捉えるキャッチーで記憶に残るスローガンを作成。AIが顧客の心に残るタグラインを生成します。',
    inputLabel: 'ブランドまたは製品を説明してください...',
    inputPlaceholder: '例：サステナビリティとコミュニティに焦点を当てたコーヒーショップ',
    buttonText: 'スローガンを生成',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: 'スローガン数', choices: ['3スローガン', '5スローガン', '10スローガン'], default: '5スローガン', type: 'select' },
      { name: 'tone', label: 'スローガンのトーン', choices: ['フォーマル/プロフェッショナル', 'カジュアル/フレンドリー', '大胆/破壊的', 'プレミアム/ラグジュアリー'], default: 'フォーマル/プロフェッショナル', type: 'select' },
      { name: 'explain_meaning', label: '意味を説明', choices: ['はい', 'いいえ'], default: 'はい', type: 'radio' },
    ],
    systemPrompt: `You are an expert advertising copywriter and brand strategist who creates memorable slogans and taglines that capture brand essence, drive recall, and inspire action. Your slogans are not generic phrases—they are strategic verbal assets that differentiate brands and resonate with target audiences.
## CORE SLOGAN PRINCIPLES
1. **Memorability**: Slogans must stick in people's minds after minimal exposure
2. **Brand Essence**: Each slogan must capture what makes this brand unique
3. **Emotional Resonance**: Great slogans trigger feelings, not just understanding
4. **Actionability**: The best slogans inspire behavior or belief
5. **Timelessness**: Slogans should remain relevant across years, not months
## OUTPUT FORMAT
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}
For each slogan:
1. The slogan
2. Type: Slogan category/technique
3. Rationale: Why this works for this brand
4. Application: Where/how it would be used
5. Strength: What makes it memorable or effective

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'ブランドローンチとポジショニングキャンペーン', description: '新しいブランドを立ち上げるマーケティングチームはスローガンジェネレーターを使用して、初日からポジショニングを確立するタグラインを開発します。強力なスローガンはローンチキャンペーン全体のアンカーとなり、すべてのクリエイティブ実行が上昇する中心的なメッセージを提供します。' },
      { title: 'キャンペーンとプロモーション開発', description: '特定のキャンペーンを作成する広告主はジェネレーターを使用して、メインブランドスローガンを補完する（ただし異なる）キャンペーン固有のタグラインを開発します。製品発売、季節のプロモーション、コーズマーケティングイニシアチブには、それぞれ独自の記憶に残るフレーズが必要なことがよくあります。' },
      { title: 'リブランディングとブランドリフレッシュイニシアチブ', description: 'リブランディングを行う企業は、ブランド遺産を尊重しながら変化を示す新しいスローガンを必要とすることがよくあります。完全なピボットであれ微妙な進化であれ、適切な新しいタグラインは市場へのリポジショニングを伝えることができます。' },
    ],
    faqs: [
      { question: '良いスローガンとは何ですか？', answer: '素晴らしいスローガンは記憶に残り（最小限の露出で記憶に残る）、独特で（明確にこのブランドに属する）、意味があり（何か重要なことを伝える）、時代を超えて（何年も関連性を保つ）います。通常、リズム、頭韻、言葉遊びなどの言語的デバイスを使用します。' },
      { question: 'スローガンはどのくらいの長さにすべきですか？', answer: '短いほどほぼ常に良いです—2-6語を目指してください。最も記憶に残るスローガンは簡潔です：「Just Do It」（3語）、「Think Different」（2語）、「Got Milk?」（2語）。' },
      { question: 'スローガンは何をしているかを説明すべきですか？', answer: '必ずしもそうではありません。一部の効果的なスローガンは純粋に感情的（「Open Happiness」）で、他はメリットを述べます（「Save money. Live better.」）。ブランドの認知度を考慮してください—新しいブランドはより説明的なスローガンから恩恵を受ける可能性があり、確立されたブランドはより抽象的になれます。' },
      { question: 'スローガンとタグラインの違いは何ですか？', answer: '用語はしばしば同義語として使用されます。一部は区別します：スローガン=一時的、キャンペーン固有；タグライン=永続的、ブランドレベル。実際には、両方ともブランドのエッセンスを捉える短い記憶に残るフレーズを指します。' },
      { question: 'スローガンが既に使用されているかどうかをどう確認しますか？', answer: '正確なフレーズを引用符で検索し、商標データベース（米国のUSPTO）を確認し、広告アーカイブを検索してください。一部のスローガンは商標登録されており、他は一般的に使用されていますが保護されていません。' },
      { question: 'スローガンにブランド名を含めるべきですか？', answer: 'ブランド名を含めると帰属性が増しますが、記憶性と柔軟性が低下することがよくあります。一部の象徴的なスローガンは名前を含みます（「Maybe she\'s born with it. Maybe it\'s Maybelline」）が、ほとんどは含みません。' },
      { question: '発売前にスローガンをどうテストしますか？', answer: '次を通じてテスト：（1）リコールテスト—消費者に見せて、待って、何を覚えているか尋ねる、（2）帰属テスト—ブランドと一致させられるか？（3）感情的反応テスト—何を感じるか？（4）オプション間の好みテスト、（5）競合コンテキストテスト—競合他社のメッセージと並べてどう機能するか？' },
      { question: 'どのくらいの頻度でスローガンを変更すべきですか？', answer: '強力なスローガンは何十年も続きます—「Just Do It」は1988年以来Nikeのものです。頻繁に変更するとスローガンがエクイティを構築できなくなります。変更するのは：スローガンがブランドを反映しなくなった、市場ポジショニングが大幅に変わった、またはスローガンが古くなったり問題になったりした場合です。' },
      { question: '異なる製品やキャンペーン向けに異なるスローガンを持てますか？', answer: 'はい—多くのブランドはマスタースローガン（ブランドレベル）とサブスローガン（製品またはキャンペーンレベル）を持っています。マスタースローガンは全体的なブランドエッセンスを捉え、サブスローガンは特定の提供物やイニシアチブに対応します。矛盾ではなく補完し合うようにしてください。' },
      { question: 'スローガンが国際的に機能する必要がある場合はどうすればよいですか？', answer: '意味、ニュアンス、文化的適切性について翻訳をテストしてください。一部のスローガンはうまく翻訳されますが、他はそうではありません。翻訳/適応するか、オリジナルを維持するかを検討してください。英語のスローガンは、プレミアムなポジショニングや翻訳で意味が失われる場合に、グローバルに維持されることがよくあります。' },
    ],
  },

  'product-description-generator': {
    slug: 'product-description-generator',
    name: '製品説明ジェネレーター',
    title: '無料AI製品説明ジェネレーター',
    description: '売れる魅力的な製品説明を生成。AIがEC、マーケットプレイス、カタログ向けのメリット重視のコピーを作成します。',
    metaDescription: '売れる魅力的な製品説明を生成。AIがEC、マーケットプレイス、カタログ向けのメリット重視のコピーを作成します。',
    inputLabel: '製品を説明してください...',
    inputPlaceholder: '例：30時間のバッテリー寿命を持つワイヤレスノイズキャンセリングヘッドホン',
    buttonText: '説明を生成',
    maxLength: 2048,
    options: [
      { name: 'length', label: '説明の長さ', choices: ['簡潔（50-75語）', '標準（100-150語）', '詳細（200-300語）'], default: '標準（100-150語）', type: 'select' },
      { name: 'tone', label: '文章のトーン', choices: ['ラグジュアリー/プレミアム', 'テック/エレクトロニクス', 'ファッション/アパレル', 'ホーム/ライフスタイル', 'ヘルス/ビューティー'], default: 'テック/エレクトロニクス', type: 'select' },
    ],
    systemPrompt: `You are an expert e-commerce copywriter and conversion specialist who creates product descriptions that inform, persuade, and sell. Your descriptions balance SEO optimization with compelling storytelling, transforming product features into customer benefits that drive purchase decisions.
## CORE PRODUCT DESCRIPTION PRINCIPLES
1. **Benefit-Led Writing**: Lead with what customers gain, not just what the product has
2. **Sensory and Emotional Language**: Help customers imagine owning and using the product
3. **Scannable Structure**: Format for how people actually read online (scanning, not linear)
4. **SEO Integration**: Include relevant keywords naturally without sacrificing readability
5. **Objection Handling**: Anticipate and address purchase hesitations
## OUTPUT FORMAT
Length: {{length}}
Tone: {{tone}}
For Each Description, Provide:
1. **Description**: Complete product description
2. **Word Count**: Total words
3. **Structure**: Hook/Body/Close breakdown
4. **SEO Notes**: Keywords included naturally
5. **Tone Match**: How it fits the requested tone

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'ECストアの製品ページ', description: 'オンライン小売業者は製品説明ジェネレーターを使用して、カタログ全体の製品ページ向けに魅力的なコピーを作成します。何千ものSKUがある可能性がある中、ユニークで説得力のある説明を手動で書くのは不可能です。ツールはキーワード統合を通じてSEOを改善し、説得力のある言語でコンバージョンを促進するメリット重視の説明を生成します。' },
      { title: 'マーケットプレイスリスティングの最適化', description: 'Amazon、eBay、Etsy、その他のマーケットプレイスの販売者は、競争環境で際立つリスティングを作成するためにジェネレーターを使用します。マーケットプレイスの成功はコピーの品質に依存することが多く、リスティングは何十もの類似製品と直接競合します。ツールはマーケットプレイスのスキャンパターンに最適化された説明を生成し、可視性とクリック率を向上させるメリットステートメントとキーワードを組み込みます。' },
      { title: '製品カタログと在庫拡大', description: '新製品を追加したり新しいカテゴリに拡大する企業は、規模で説明を迅速に開発するためにジェネレーターを使用します。50または500の新製品を発売する場合、説明の作成がボトルネックになります。ツールは異なる製品カテゴリに合わせてトーンと強調を適応させながら、大規模バッチ全体で品質と一貫性を維持します。' },
    ],
    faqs: [
      { question: '効果的な製品説明とは何ですか？', answer: '効果的な製品説明は機能をメリットに変換し（顧客が得るもの）、感覚的な言語を使用し（製品を使用することを想像させる）、スキャン可能で（人々が実際にオンラインで読む方法に対応）、関連キーワードを含み（SEO用）、異論に対応します（質問される前に質問に答える）。' },
      { question: '製品説明はどのくらいの長さにすべきですか？', answer: '製品とプラットフォームによります。即決製品（低価格、シンプルな機能）は50-75語で効果的です。ほとんどの製品は100-150語で効果的—メリットコミュニケーションとSEOに十分で、圧倒しません。高検討アイテム（高価、テクニカル、複雑）は完全な説明に200-300語必要な場合があります。' },
      { question: '機能とメリットのどちらに焦点を当てるべきですか？', answer: '常にメリットで導きますが、機能をサポートとして含めてください。機能は製品が持っているものであり、メリットは顧客が得るものです。「5000mAhバッテリー」は機能です。「充電なしで丸2日間使用可能」がメリットです。' },
      { question: 'ロボット的に聞こえずにSEO向けに書くにはどうすればよいですか？', answer: '関連キーワードを自然な位置に含めてください—製品タイトル、冒頭の文、見出し、本文コピー内に自然に。まず人間向けに書き、次にキーワードが有機的に表示されていることを確認してください。読みやすさを犠牲にしてキーワードを詰め込むことは決してしないでください。' },
      { question: '競合他社と似た製品をどう扱いますか？', answer: '差別化に焦点を当てる：ユニークな機能、ブランドストーリー、品質指標、保証/サポート、または使用事例のポジショニング。製品が本当に似ている場合は、声と顧客体験の強調で差別化してください。' },
      { question: '箇条書きと段落のどちらを使うべきですか？', answer: '両方—戦略的に。オープニングフックとクロージングはナラティブフローのために段落として効果的です。機能/メリットリストはスキャン性のために箇条書きとして効果的です。長い機能の段落は、人々が線形に読むのではなくスキャンするため、オンラインではパフォーマンスが悪いです。' },
      { question: '使用したことのない製品の説明をどう書きますか？', answer: '次に焦点を当てる：メーカー仕様、文書化された機能、カテゴリ知識、類似製品の顧客レビュー、競合他社の説明（インスピレーション用であり、コピーではなく）。個人的な経験がない場合は、主観的な主張ではなく仕様と文書化されたメリットに頼ってください。' },
      { question: 'テクニカル製品には何を含めるべきですか？', answer: '含める：アクセシブルな言語での仕様、互換性情報、使用事例シナリオ、セットアップ/インストールの容易さ、サポートの可用性、以前のバージョンまたはカテゴリ標準との比較。技術的正確さとアクセシビリティのバランスを取る—技術的なバイヤーは仕様を望み、それほど技術的でないバイヤーは自分の状況で機能することを知りたいです。' },
      { question: '既知の制限がある製品をどう扱いますか？', answer: '正直だが戦略的に。コンテキスト内で制限を認める（「コンパクトなデザインは旅行に最適ですが、フルサイズモデルより容量が少ないです」）。制限をポジショニングに変える（「ミニマリストな処方は不要な添加物をスキップします」）。重要な制限を隠さないでください—顧客の失望は返品やネガティブレビューにつながり、初期販売の減少よりも悪いです。' },
      { question: '複数のプラットフォームで同じ説明を使用できますか？', answer: '使用できますが、最適化により結果が向上することがよくあります。Amazonはキーワードリッチなコピーを優先し、Etsuは個性とストーリーを重視し、自社サイトでは完全なブランド表現が可能です。コアメッセージングは一貫させながら、プラットフォームごとにフォーマット、長さ、強調を適応させてください。' },
    ],
  },

  'landing-page-generator': {
    slug: 'landing-page-generator',
    name: 'ランディングページジェネレーター',
    title: '無料AIランディングページジェネレーター',
    description: 'コンバージョンする完全なランディングページコピーを生成。AIがヘッドライン、機能、テスティモニアル、FAQ、CTAをあなたのオファー用に作成します。',
    metaDescription: 'コンバージョンする完全なランディングページコピーを生成。AIがヘッドライン、機能、テスティモニアル、FAQ、CTAをあなたのオファー用に作成します。',
    inputLabel: '製品/サービスとオファーを説明してください...',
    inputPlaceholder: '例：14日間無料トライアル付きのリモートチーム向けプロジェクト管理ツール',
    buttonText: 'ランディングページを生成',
    maxLength: 2048,
    options: [
      { name: 'goal', label: '主要目標', choices: ['リード獲得', '販売/購入', '無料トライアル登録', 'デモリクエスト'], default: 'リード獲得', type: 'select' },
      { name: 'tone', label: 'ページのトーン', choices: ['B2B/プロフェッショナル', 'B2C/コンシューマー', 'スタートアップ/モダン', 'プレミアム/ラグジュアリー'], default: 'B2B/プロフェッショナル', type: 'select' },
    ],
    systemPrompt: `You are an expert conversion copywriter and landing page strategist who creates complete landing page content that converts visitors into leads or customers. Your pages follow proven conversion frameworks while adapting to specific offers, audiences, and goals.
## CORE LANDING PAGE PRINCIPLES
1. **Single Focus**: One page, one offer, one action
2. **Clear Value Proposition**: Visitors understand the benefit within seconds
3. **Progressive Persuasion**: Structure that builds toward conversion
4. **Objection Handling**: Address concerns before they become barriers
5. **Trust Building**: Provide evidence and credibility throughout
## OUTPUT SECTIONS
### Generate These Sections:
1. **Hero Section**: Headline, subheadline, CTA
2. **Problem Statement**: Pain articulation
3. **Solution Overview**: Offer introduction
4. **Features Section**: 4-6 feature/benefit pairs
5. **Social Proof**: Testimonial placeholders with structure
6. **FAQ**: 4-6 questions addressing objections
7. **Final CTA**: Closing persuasion and action
Primary Goal: {{goal}}
Tone: {{tone}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '製品とサービスのローンチキャンペーン', description: '新製品やサービスをローンチするマーケターはランディングページジェネレーターを使用して、コンバージョン重視のページを迅速に作成します。よく構造化されたランディングページは成功するローンチと失敗するローンチの違いを意味することがあります。ツールはヘッドラインから機能、CTAまで完全なページコンテンツを生成し、実証されたコンバージョンフレームワークに従い、通常は高価なコピーライター費用を必要とするプロフェッショナルな出発点を提供します。' },
      { title: 'リード獲得キャンペーン開発', description: 'リード獲得キャンペーンを実行するマーケティングチームはジェネレーターを使用して、特定のオファー（eブック、ウェビナー、無料トライアル、コンサルテーション）向けの専用ページを作成します。各オファーには独自の焦点を絞ったランディングページが必要です；ホームページではこの仕事はできません。ツールは各キャンペーン向けにターゲットを絞ったコピーを生成し、特定のオファーとオーディエンスに合わせてカスタマイズしながら一貫性を維持します。' },
      { title: 'A/Bテストとコンバージョン最適化', description: 'コンバージョン率オプティマイザーはジェネレーターを使用して、ランディングページのテストバリエーションを作成します。ヘッドライン、バリュープロポジション、ページ構造をテストする際、品質の高い代替案を持つことが不可欠です。ツールは完全な代替バージョンを生成し、コンバージョン率とキャンペーンROIに大きな影響を与える可能性のある意味のあるテストを可能にします。' },
    ],
    faqs: [
      { question: 'ランディングページジェネレーターとは何ですか？', answer: 'ランディングページジェネレーターは、訪問者をリードや顧客に変換するように設計された専用コンバージョンページの完全なコピーを作成します。これには：ヒーローヘッドラインとサブヘッドライン、問題とソリューションセクション、機能/メリットの説明、テスティモニアル構造、FAQセクション、CTAが含まれます。言葉を制作し、デザインを追加して公開します。' },
      { question: 'ランディングページにはどのセクションを含めるべきですか？', answer: '効果的なランディングページは通常次を含みます：ヒーローセクション（ヘッドライン、サブヘッドライン、主要CTA）、問題セクション（痛みを明確化）、ソリューションセクション（オファーを紹介）、機能/メリット（得られるもの）、ソーシャルプルーフ（テスティモニアル、ロゴ、数字）、FAQ（異論に対処）、最終CTA（コンバージョンを締めくくる）。' },
      { question: 'ランディングページはどのくらいの長さにすべきですか？', answer: '長さをオファーの複雑さとオーディエンスの認知度に合わせてください。認知度の高いオーディエンス向けの低リスクオファー（ニュースレター登録、無料ダウンロード）は短いページで効果的です。認知度の低いオーディエンス向けの高リスクオファー（高価な購入、重大なコミットメント）は信頼を構築し異論に対処するためにより長いページが必要です。' },
      { question: '良いランディングページヘッドラインとは何ですか？', answer: '素晴らしいヘッドラインは主要なメリットを明確かつ迅速に伝えます。数秒で「私にとって何があるか？」に答えます。含める：望ましい結果、誰のためか、理想的にはオファーの差別化ポイント。避ける：意味を曖昧にする巧妙な言葉遊び、会社重視のメッセージ、具体性のない曖昧な主張。' },
      { question: '効果的なCTAをどう書きますか？', answer: '効果的なCTAは次に何が起こるかについて具体的で、メリット重視（何をするかではなく何を得るか）で、アクション指向（強い動詞）です。「無料ガイドを入手」は「送信」より優れています。「無料トライアルを開始」は「サインアップ」より優れています。' },
      { question: 'いくつのテスティモニアルが必要ですか？', answer: '量より質—3-5の強力で具体的なテスティモニアルが何十もの一般的なものより優れています。効果的なテスティモニアルには：達成された具体的な結果、リアルに感じられる十分な詳細、関連する資格（ターゲットオーディエンスと類似）、理想的には写真や会社ロゴが含まれます。' },
      { question: 'ランディングページに価格を含めるべきですか？', answer: '目標によります。直接販売の場合ははい—価格を隠すと訪問者をフラストレートさせ、資格のないリードを引き付けます。リード獲得の場合、目標が会話であれば価格は不要または逆効果かもしれません。高額B2Bオファーの場合、価格はしばしばセールス会話で発生します。' },
      { question: 'ランディングページで異論にどう対処しますか？', answer: 'FAQセクションを使用して、質問として枠組まれた一般的な異論に対処します。例：「私に効果がなかったらどうなりますか？」（保証を含める）、「私の情報は安全ですか？」（セキュリティ詳細を含める）、「結果が出るまでどのくらいかかりますか？」（期待を設定）。' },
      { question: 'ランディングページとホームページの違いは何ですか？', answer: 'ホームページは複数のオーディエンスと目標に対応し、ランディングページは一つのオファーと一つのアクションに焦点を当てます。ホームページにはナビゲーションと複数のパスウェイがあり、ランディングページは気を散らすものを最小限にします。ランディングページは通常、特定のキャンペーンとトラフィックソース用に作成されます。' },
      { question: 'ランディングページコピーをどうテストしますか？', answer: '要素を体系的にA/Bテストする：まずヘッドライン（最も影響が大きい）、次にCTA、次にページ構造。マイナーな単語の変更ではなく、意味のある違いをテストしてください。統計的に有意になるまでテストを実行します。最大の潜在的改善から始める—新しいヘッドラインはボタンの色の変更よりもコンバージョン率を動かす可能性があります。' },
    ],
  },

  // ==================== BATCH 3: Tools 21-30 ====================

  'google-ads-copy-generator': {
    slug: 'google-ads-copy-generator',
    name: 'Google広告コピージェネレーター',
    title: '無料AIGoogle広告コピージェネレーター',
    description: 'クリックとコンバージョンを促進する高コンバージョンGoogle広告コピーを生成。AIがパフォーマンスに最適化されたヘッドラインと説明文を作成します。',
    metaDescription: 'クリックとコンバージョンを促進する高コンバージョンGoogle広告コピーを生成。AIがパフォーマンスに最適化されたヘッドラインと説明文を作成します。',
    inputLabel: '製品/サービスとオファーを説明してください...',
    inputPlaceholder: '例：中小企業向けオンライン会計ソフトウェア、30日間無料トライアル',
    buttonText: '広告コピーを生成',
    maxLength: 2048,
    options: [
      { name: 'tone', label: '広告のトーン', choices: ['フォーマル/B2B', 'カジュアル/B2C', '緊急/プロモーション'], default: 'フォーマル/B2B', type: 'select' },
      { name: 'keywords', label: 'キーワードを含める', choices: ['はい', 'いいえ'], default: 'はい', type: 'radio' },
    ],
    systemPrompt: `You are an expert PPC copywriter and Google Ads specialist who creates high-converting ad copy that maximizes click-through rates and quality scores while maintaining message-to-landing-page relevance.
## CORE GOOGLE ADS PRINCIPLES
1. **Character Limit Mastery**: Every character must earn its place within strict limits
2. **Keyword Relevance**: Ad copy must align with search intent and keywords
3. **Benefit-Driven Messaging**: Focus on what users gain, not just features
4. **Clear Call-to-Action**: Every ad needs a compelling reason to click
5. **Landing Page Alignment**: Ads must accurately represent the destination
## GOOGLE ADS FORMAT SPECIFICATIONS
### Responsive Search Ads (RSA)
- **Headlines**: Up to 15 headlines, 30 characters each
- **Descriptions**: Up to 4 descriptions, 90 characters each
Tone: {{tone}}
Include Keywords: {{keywords}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'PPCキャンペーンのローンチとスケーリング', description: 'デジタルマーケターやPPCスペシャリストは、新しいキャンペーンをローンチしたり既存のものをスケールする際にGoogle広告コピージェネレーターを使用します。レスポンシブ検索広告には複数のヘッドラインと説明文のバリエーションが必要で、手動で品質の高い多様なコピーを作成するのは時間がかかります。ツールはGoogleのアルゴリズムが最適化できるオプションを提供する、多様でポリシー準拠のバリエーションを生成します。' },
      { title: 'A/Bテストと広告最適化', description: '広告パフォーマンスを継続的にテストする広告主は、テスト用の新鮮なバリエーションを作成するためにジェネレーターを使用します。現在の広告がプラトーに達したとき、新しいコピーがパフォーマンスを回復させることがよくあります。ツールはランダムな単語の変更ではなく意味のあるテストのための体系的なバラエティを提供する複数の角度のヘッドラインと説明文を生成します。' },
      { title: 'エージェンシーとチームのワークフロー効率化', description: '複数のクライアントアカウントを管理する広告代理店は、キャンペーン全体のコピー開発を加速するためにジェネレーターを使用します。何十、何百もの広告グループを管理する際、それぞれにユニークで調整されたコピーを書くことがボトルネックになります。ツールはコピーライターが洗練できる初稿を制作し、キャンペーンコンセプトからローンチまでの時間を劇的に短縮します。' },
    ],
    faqs: [
      { question: '効果的なGoogle広告コピーとは何ですか？', answer: '効果的なGoogle広告コピーは3つのことを達成します：関連性（検索意図とキーワードに一致）、価値コミュニケーション（ユーザーが得るものを明確に述べる）、アクションインスピレーション（クリックを促す）。最良の広告はユーザーが検索しているものへの自然な回答のように感じられ、クリックが強制されるのではなく明らかに感じられます。' },
      { question: 'Google広告の文字数制限は何ですか？', answer: 'レスポンシブ検索広告では：ヘッドラインは各30文字まで（最大15個）、説明文は各90文字まで（最大4個）。Googleはこれらを動的に組み合わせるため、各要素は独立して、また組み合わせでも機能する必要があります。ジェネレーターはコンプライアンスを確保するために各要素の文字数を提供します。' },
      { question: 'いくつのヘッドラインバリエーションを提供すべきですか？', answer: '最良の結果を得るには少なくとも10-15の多様なヘッドラインを提供してください。Googleの機械学習は組み合わせをテストしてトップパフォーマーを見つけるため、より多くの品質オプションがアルゴリズムにより多くの作業材料を与えます。ただし、品質は量よりも重要です。' },
      { question: '広告コピーにキーワードを含めるべきですか？', answer: 'はい、ただし自然に。検索クエリに一致するとヘッドラインのキーワードが太字になることが多く、関連性シグナルが増加します。少なくとも2-3のヘッドラインと1-2の説明文に主要キーワードを含めてください。' },
      { question: 'どの組み合わせでも機能するヘッドラインをどう書きますか？', answer: '完全な思考であり、意味のために他のヘッドラインに依存しないヘッドラインを書いてください。互いに矛盾したり、一部のランディングページのみが果たす約束をするヘッドラインを避けてください。' },
      { question: '広告説明文には何を含めるべきですか？', answer: '説明文はヘッドラインを裏付ける詳細で拡張すべきです：具体的なメリット、機能、オファー、信頼性要素、CTA。二次的なキーワードを自然に含めてください。明確なCTAで終わってください。' },
      { question: '人々がGoogle広告をクリックする理由は何ですか？', answer: 'ユーザーは広告が検索意図に明確に答え、具体的な価値を約束し、信頼できると感じるときにクリックします。具体性がクリックを増やします：「今日20%オフ」は「お得なセール」より優れています。' },
      { question: 'Google広告ポリシー違反を避けるにはどうすればよいですか？', answer: '避けるべき：過度な大文字（全部大文字禁止）、過度な句読点（!!!禁止）、誤解を招く主張、禁止コンテンツ、商標問題。ジェネレーターはポリシー準拠のコピーを制作するように設計されていますが、ブランド固有の制限については常に確認してください。' },
      { question: '広告をランディングページに一致させるにはどうすればよいですか？', answer: '広告の約束はユーザーがランディングページで見つけるものと一致する必要があります—これはコンバージョン率と品質スコアの両方に影響します。広告が「50%オフ」と言っている場合、ランディングページは50%オフを目立つように表示すべきです。' },
      { question: 'どのくらいの頻度でGoogle広告コピーをリフレッシュすべきですか？', answer: 'パフォーマンスが低下したとき（CTRの低下、コンバージョン率の低下）、新しい角度をテストするとき、またはオファー/メッセージングが変更されたときにリフレッシュしてください。固定のタイムラインはありません—一部の広告は何年もパフォーマンスを発揮し、他はすぐに疲弊します。' },
    ],
  },

  'hook-generator': {
    slug: 'hook-generator',
    name: 'フックジェネレーター',
    title: '無料AIフックジェネレーター',
    description: 'コンテンツ用の注目を集めるフックを即座に作成。AIが読者を捕らえエンゲージメントを高める魅力的なオープニングラインを生成します。',
    metaDescription: 'コンテンツ用の注目を集めるフックを即座に作成。AIが読者を捕らえエンゲージメントを高める魅力的なオープニングラインを生成します。',
    inputLabel: 'コンテンツトピックを説明してください...',
    inputPlaceholder: '例：リモートワーカー向けの生産性のヒントに関するブログ投稿',
    buttonText: 'フックを生成',
    maxLength: 2048,
    options: [
      { name: 'tone', label: 'フックのトーン', choices: ['フォーマル', '会話的', '大胆/エッジー', 'インスピレーショナル', '分析的'], default: '会話的', type: 'select' },
      { name: 'hook_type', label: 'フックの種類', choices: ['ミックス（すべてのタイプ）', '質問', '統計/事実', 'ストーリー/エピソード', '逆張り', '約束/メリット', '好奇心ギャップ'], default: 'ミックス（すべてのタイプ）', type: 'select' },
    ],
    systemPrompt: `You are an expert content strategist and copywriter specializing in creating attention-grabbing hooks that immediately capture reader interest. Your role is to generate compelling opening statements that make audiences want to continue reading, watching, or listening.
## HOOK TYPES TO GENERATE
### 1. Question Hook - Provocative questions that challenge assumptions
### 2. Statistic/Fact Hook - Surprising data points that shock or intrigue
### 3. Story/Anecdote Hook - Brief narrative openings that humanize content
### 4. Contrarian/Bold Statement Hook - Statements that challenge conventional wisdom
### 5. Promise/Benefit Hook - Clear value propositions upfront
### 6. Curiosity Gap Hook - Incomplete information that demands resolution
### 7. Empathy/Pain Point Hook - Acknowledges reader struggles immediately
Tone: {{tone}}
Hook Type: {{hook_type}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '魅力的なイントロダクションの執筆', description: 'ライター、ジャーナリスト、コンテンツクリエイターはフックジェネレーターを使用して、記事、ブログ投稿、その他の文章コンテンツ用の魅力的なオープニングラインを作成します。トピックや主要なアイデアを入力することで、ツールは読者の興味を即座に捕らえ、読み続けるよう促す魅力的なフックを生成します。' },
      { title: 'マーケティングと広告コピー', description: '企業やマーケターはフックジェネレーターを活用して、マーケティングキャンペーン、広告、プロモーションコンテンツ用の説得力のあるオープニングラインを作成します。製品詳細、ターゲットオーディエンス情報、マーケティングメッセージを入力することで、ツールは潜在顧客を効果的に引きつけアクションを促す注目を集めるフックを生成します。' },
      { title: 'スピーチとプレゼンテーション', description: 'パブリックスピーカー、プレゼンター、教育者はスピーチやプレゼンテーションを準備する際にフックジェネレーターから恩恵を受けます。トピックや主要なアイデアを入力することで、ツールは最初の瞬間からオーディエンスを引きつける注目を集めるオープニングステートメントを生成します。' },
    ],
    faqs: [
      { question: '文章におけるフックとは何ですか？', answer: 'フックは読者の注意を即座に捕らえるように設計されたオープニングステートメントです。効果的なフックは好奇心を生み出し、大胆な声明を行い、挑発的な質問をし、または読み続け、見続け、聞き続けるよう促す驚くべき情報を提示します。' },
      { question: 'このツールはどのような種類のフックを生成できますか？', answer: 'ツールは質問フック、統計/事実フック、ストーリー/エピソードフック、逆張りステートメントフック、約束/メリットフック、好奇心ギャップフック、共感/ペインポイントフックなど、さまざまなフックタイプを生成します。各タイプは異なる目的とオーディエンスに役立ちます。' },
      { question: 'より良いフック提案を得るにはどうすればよいですか？', answer: 'トピック、ターゲットオーディエンス、コンテンツの目的について具体的なコンテキストを提供してください。「マーケティングのヒント」ではなく、「ミレニアル世代をターゲットにしたECビジネス向けのメールマーケティング戦略」のように試してください。より多くのコンテキストがより関連性が高くインパクトのあるフックを生成するのに役立ちます。' },
      { question: 'これらのフックを動画コンテンツに使用できますか？', answer: 'もちろんです。フックはビデオスクリプト、YouTubeイントロ、TikTokオープニング、および注意を素早く捕らえる必要があるあらゆる動画コンテンツに不可欠です。同じ原則が適用されます—話し言葉の配信に合わせて言語を適応させてください。' },
      { question: 'フックはどのくらいの長さにすべきですか？', answer: 'ほとんどの効果的なフックは1〜3文です。興味を引くのに十分な長さでありながら、インパクトを維持するのに十分な短さである必要があります。ソーシャルメディアや動画の場合、より短いフック（15語未満）がより効果的なことがよくあります。' },
      { question: 'フックとクリックベイトの違いは何ですか？', answer: '良いフックは本物の好奇心を生み出し、その約束を果たしますが、クリックベイトは感情を操作し、しばしば失望させます。効果的なフックはコンテンツが果たす適切な期待を設定し、信頼を侵食するのではなく構築します。' },
      { question: 'フックはブランドの声に一致すべきですか？', answer: 'はい。フックは全体的なブランドトーンとオーディエンスの期待に合わせるべきです。フォーマルなビジネスオーディエンスはカジュアルなライフスタイルブログオーディエンスとは異なる言語を期待します。トーン設定を使用してブランドに一致させてください。' },
      { question: '異なるプラットフォームで同じフックを使用できますか？', answer: '異なるプラットフォームに合わせてフックを適応させる必要があるかもしれません。長尺ブログ投稿に効果的なフックは、ソーシャルメディア用にはより短くパンチの効いたものにする必要があるかもしれません。プラットフォーム固有の慣習とオーディエンスの期待を考慮してください。' },
      { question: 'どのフックが最も効果的かどうテストしますか？', answer: 'A/Bテストが最も信頼できる方法です。メール件名、ソーシャル投稿、または広告コピーで異なるフックを使用し、開封率、クリック率、エンゲージメント指標を追跡してトップパフォーマーを特定します。' },
      { question: 'フックの後には何が来るべきですか？', answer: 'フックはメインコンテンツにスムーズに移行すべきです。作成した好奇心を満たすコンテキスト、サポート情報を提供する、またはフックが行った約束を果たし始めるコンテンツで続けてください。' },
    ],
  },

  'resignation-letter-generator': {
    slug: 'resignation-letter-generator',
    name: '退職届ジェネレーター',
    title: '無料AI退職届ジェネレーター',
    description: '数分でプロフェッショナルな退職届を作成。AIが関係を維持し評判を保護する洗練された適切な手紙を作成します。',
    metaDescription: '数分でプロフェッショナルな退職届を作成。AIが関係を維持し評判を保護する洗練された適切な手紙を作成します。',
    inputLabel: '状況を説明してください...',
    inputPlaceholder: '例：テック企業のマーケティングマネージャー、新しい機会のために退職、3年間勤務',
    buttonText: '手紙を生成',
    maxLength: 2048,
    options: [
      { name: 'tone', label: '手紙のトーン', choices: ['フォーマル', '温かい/個人的', '簡潔/最小限'], default: 'フォーマル', type: 'select' },
      { name: 'notice_period', label: '通知期間', choices: ['2週間', '1ヶ月', '即時', 'カスタム'], default: '2週間', type: 'select' },
    ],
    systemPrompt: `You are an expert in professional communication who helps people write effective, professional resignation letters that maintain positive relationships while clearly communicating their departure.
## CORE RESIGNATION LETTER PRINCIPLES
1. **Professional Courtesy**: Maintain respectful tone regardless of circumstances
2. **Clear Communication**: State intention and last day unambiguously
3. **Relationship Preservation**: Protect future references and professional network
4. **Appropriate Gratitude**: Thank without excessive flattery
5. **Transition Support**: Offer help with handover where appropriate
Tone: {{tone}}
Notice Period: {{notice_period}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '標準的な退職準備', description: '仕事を辞める従業員は退職届ジェネレーターを使用して、プロフェッショナルな退職コミュニケーションを作成します。良好な条件で退職する場合でも、多くの人が適切な言葉やトーンを見つけるのに苦労します。ツールは参照やプロフェッショナルな評判にとって重要なポジティブな関係を維持しながら、意図を明確に述べる適切にフォーマルな手紙を生成します。' },
      { title: '困難な退職のナビゲーション', description: '困難な職場状況から退職する従業員は、感情が高ぶっているときにプロフェッショナリズムを維持するためにジェネレーターを使用します。貧弱なマネジメント、有害な文化、または不公平な扱いのために退職する場合、中立的な退職届を書くのは難しいです。ツールは参照や法的状況で逆効果になる可能性のある言語を避けながら、退職をプロフェッショナルに文書化する適切な手紙を作成するのに役立ちます。' },
      { title: 'キャリア転換の文書化', description: '重要なキャリア移行を行うプロフェッショナルは、退職が適切に処理されることを確保するためにジェネレーターを使用します。競合他社への移動、業界の変更、または起業のための退職時、退職届は永続的な記録の一部になります。ツールは将来のプロフェッショナルな利益を保護しながら、状況に適切な手紙を生成します。' },
    ],
    faqs: [
      { question: '退職届には何を含めるべきですか？', answer: '必須要素：明確な退職の意思表示、役職/タイトル、最終勤務日（通常2週間後）。推奨要素：簡潔な感謝の言葉、引き継ぎ支援の申し出、プロフェッショナルな結び。オプション：退職理由（含める場合はポジティブに）、具体的な感謝のポイント。決して含めないもの：不満、批判、新しい機会についての過度な詳細、感情的なコンテンツ。' },
      { question: 'どのくらいの通知期間を与えるべきですか？', answer: 'ほとんどの米国産業では標準は2週間です。雇用契約を確認してください—一部の役職ではより長い通知が必要です（幹部、専門職）。一部の業界では異なる慣行があります。疑わしい場合は、契約で別途指定されていない限り、少なくとも2週間与えてください。' },
      { question: '退職理由を説明すべきですか？', answer: '説明する義務はありません。理由を含める場合は、ポジティブで簡潔に保つ：「新しい機会を追求」、「家族の理由で転居」、「学校に戻る」。たとえ本当であっても、ネガティブな理由は決して含めないでください—この手紙は永続的な文書になります。' },
      { question: 'メールで退職できますか、フォーマルな手紙が必要ですか？', answer: '会社のプロトコルを確認してください。多くの現代の職場ではメールでの退職を受け入れていますが、伝統的な業界ではフォーマルな手紙が標準です。疑わしい場合は、フォーマルな手紙を準備しますが、職場が使用する方法で提出してください。' },
      { question: '不満がある場合にプロフェッショナルに退職するにはどうすればよいですか？', answer: '感情に関係なくプロフェッショナリズムを維持してください。退職届は参照に影響を与える可能性のある永続的な文書です。手紙は中立的またはポジティブに保つ—後ろを振り返るのではなく、前を向くことに焦点を当ててください。不満がある場合は、退職届ではなく適切なHRチャネルを通じて別途対処してください。' },
      { question: '引き継ぎを手伝うことを申し出るべきですか？', answer: '一般的にはい—引き継ぎサポートを申し出ることは良好な関係を維持するプロフェッショナルな礼儀です。標準的な申し出：「スムーズな引き継ぎを確保し、後任者のトレーニングを喜んでお手伝いします。」申し出たことは必ず実行してください。' },
      { question: 'マネージャーとの関係が難しい場合はどうすればよいですか？', answer: '個人的な力学に関係なく、プロフェッショナルに手紙を宛ててください。より適切であればHRまたは上位のマネージャーに宛てることができますが、手紙を使って不満を伝えないでください。手紙は事実に基づいてプロフェッショナルに保ってください。' },
      { question: '新しい雇用主について言及すべきですか？', answer: '一般的にはいいえ。退職届にはどこに行くかを含める必要はありません。直接聞かれた場合、快適であれば共有できますが、義務はありません。新しい雇用主への言及を避けることで、プロフェッショナルな退職に焦点を当て、競合他社に移動する場合の潜在的な問題を防ぎます。' },
      { question: 'トーンはどのくらいフォーマルにすべきですか？', answer: '職場文化に合わせながら、プロフェッショナル寄りにしてください。伝統的な企業環境ではフォーマルな手紙が適切です。スタートアップやカジュアルな職場ではより温かく個人的なトーンが受け入れられるかもしれません。疑わしい場合は、よりフォーマルに—プロフェッショナルすぎて困った人はいません。' },
      { question: '退職届を提出した後は何が起こりますか？', answer: '予想されること：マネージャーまたはHRからの確認、引き継ぎタイムラインについての議論、可能な退職面接のスケジューリング、最終給与と福利厚生の手配。さまざまな反応に備えてください—一部のマネージャーは退職を個人的に受け取ります。反応に関係なくプロフェッショナルでいてください。' },
    ],
  },

  'social-media-bio-generator': {
    slug: 'social-media-bio-generator',
    name: 'ソーシャルメディアバイオジェネレーター',
    title: '無料AIソーシャルメディアバイオジェネレーター',
    description: 'ソーシャルメディアプロフィール用の完璧なバイオを即座に生成。AIがパーソナルブランドを捉えフォロワーを引きつける魅力的でプロフェッショナルなバイオを作成します。',
    metaDescription: 'ソーシャルメディアプロフィール用の完璧なバイオを即座に生成。AIがパーソナルブランドを捉えフォロワーを引きつける魅力的でプロフェッショナルなバイオを作成します。',
    inputLabel: '自分自身またはブランドを説明してください...',
    inputPlaceholder: '例：中小企業のオンライン成長を支援するデジタルマーケティングコンサルタント、NYC在住',
    buttonText: 'バイオを生成',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'プラットフォーム', choices: ['Instagram', 'Twitter/X', 'LinkedIn', 'TikTok', '汎用（全プラットフォーム）'], default: '汎用（全プラットフォーム）', type: 'select' },
      { name: 'tone', label: 'バイオのトーン', choices: ['プロフェッショナル', 'フレンドリー', '大胆', 'ウィットに富んだ', 'ミニマル'], default: 'プロフェッショナル', type: 'select' },
    ],
    systemPrompt: `You are an expert social media strategist and personal branding consultant specializing in crafting compelling bios that make strong first impressions.
## BIO ELEMENTS TO INCLUDE
1. **Identity Statement**: Who you are or what you do
2. **Value Proposition**: What you offer or contribute
3. **Credibility Markers**: Achievements, credentials, social proof
4. **Personality Touches**: Emojis, humor, unique phrases
5. **Call-to-Action**: What you want visitors to do next
Platform: {{platform}}
Tone: {{tone}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'パーソナルブランディング', description: '強力なパーソナルブランドを構築しようとする個人は、バイオジェネレーターを使用して、アイデンティティ、専門知識、ユニークな資質を効果的に表現する魅力的なプロフィール説明を作成できます。自分自身、興味、実績に関する関連情報を入力することで、ツールは強い第一印象を与え、適切なフォロワーを引きつけるよく作成されたバイオを生成します。' },
      { title: 'インフルエンサーマーケティング', description: 'インフルエンサーやコンテンツクリエイターはバイオジェネレーターを活用して、ニッチな専門知識を強調し、潜在的なブランドコラボレーションを引きつける魅力的なバイオを作成します。コンテンツフォーカス、主要な実績、オーディエンス人口統計を入力することで、ツールは信頼性を確立し、パートナーシップを求めるブランドにアピールするプロフェッショナルなバイオを生成します。' },
      { title: 'ビジネスプロモーション', description: '中小企業、スタートアップ、起業家はバイオジェネレーターを使用して、バリュープロポジションを効果的に伝える簡潔でインパクトのあるバイオを作成します。ビジネス情報、ユニークセリングポイント、連絡先詳細を入力することで、ツールはオンラインプレゼンスを確立し、潜在顧客やクライアントを引きつけるプロフェッショナルなバイオを生成します。' },
    ],
    faqs: [
      { question: 'ソーシャルメディアバイオには何を含めるべきですか？', answer: '強力なバイオには通常含まれます：あなたが誰であるか何をしているか、バリュープロポジションまたは専門知識、実績や資格などの信頼性マーカー、個性のタッチ、そしてCTA。具体的なミックスはプラットフォームと目標によります。' },
      { question: 'バイオはどのくらいの長さにすべきですか？', answer: '長さはプラットフォームによります。Instagramは150文字、Twitterは160文字、LinkedInヘッダーは220文字を許可します。利用可能なスペースを埋めることよりも、すべての言葉を数えることに焦点を当ててください。簡潔なバイオはしばしばよりインパクトがあります。' },
      { question: 'バイオに絵文字を使用すべきですか？', answer: '絵文字は特にInstagramやTikTokで読みやすさを向上させる個性と視覚的なブレークを追加できます。戦略的に使用し、ブランドに合っていることを確認してください。プロフェッショナルなLinkedInバイオでは通常、絵文字は少ないか使用しません。' },
      { question: 'どのくらいの頻度でバイオを更新すべきですか？', answer: '役割、フォーカス、または実績が大きく変わったときにバイオを更新してください。多くのプロフェッショナルは四半期ごとに更新します。また、ニッチに関連するプロモーション、ローンチ、またはトレンドトピックのための季節的な更新も検討してください。' },
      { question: 'バイオはすべてのプラットフォームで同じにすべきですか？', answer: 'コアメッセージは一貫性を保つことができますが、各プラットフォームに合わせてフォーマットとトーンを適応させてください。LinkedInバイオはTikTokバイオよりもプロフェッショナルである必要があります。プラットフォーム文化に合わせて文字の長さと絵文字の使用を調整してください。' },
      { question: 'バイオを目立たせるにはどうすればよいですか？', answer: 'ユニークな差別化要因でリードし、一般的な主張ではなく具体的な実績を使用し、言葉選びやユーモアを通じて個性を注入し、バリュープロポジションをすぐに明確にしてください。クリシェと使い古されたフレーズを避けてください。' },
      { question: 'バイオにキーワードを含めるべきですか？', answer: 'はい、人々があなたを見つけるのに役立つ関連キーワードを含めてください。ターゲットオーディエンスが検索する用語を使用しますが、自然に書いてください—キーワードをただリストしないでください。戦略的なキーワード使用は発見可能性を向上させます。' },
      { question: 'バイオにハッシュタグを使用できますか？', answer: 'バイオのハッシュタグはコンテンツを分類し、一部のプラットフォームで発見可能性を向上させることができます。最大1-3の関連ハッシュタグを使用してください。LinkedInよりもInstagramとTwitterでより効果的です。' },
      { question: 'ビジネスアカウントと個人アカウントのバイオをどう書き分けますか？', answer: 'ビジネスバイオは提供される価値、製品/サービス、信頼性に焦点を当てるべきです。個人バイオはより多くの個性、興味、個人的な実績を含めることができます。ビジネスバイオにはしばしば連絡先情報やCTAが含まれます。' },
      { question: 'バイオで避けるべき間違いは何ですか？', answer: '避けるべき：曖昧すぎるまたは一般的、「グル」や「忍者」などの使い古されたフレーズの使用、バイオが長すぎるまたは密度が高すぎる、CTAを含めるのを忘れる、オーディエンスが理解しない専門用語の使用。' },
    ],
  },

  'instagram-bio-generator': {
    slug: 'instagram-bio-generator',
    name: 'Instagramバイオジェネレーター',
    title: '無料AIInstagramバイオジェネレーター',
    description: '完璧なInstagramバイオを数秒で作成。AIがフォロワーを引きつけパーソナルブランドをショーケースする魅力的で個性あふれるバイオを生成します。',
    metaDescription: '完璧なInstagramバイオを数秒で作成。AIがフォロワーを引きつけパーソナルブランドをショーケースする魅力的で個性あふれるバイオを生成します。',
    inputLabel: '自分自身またはブランドを説明してください...',
    inputPlaceholder: '例：忙しいプロフェッショナルのフィットネスを支援するフィットネスコーチ、LA在住',
    buttonText: 'バイオを生成',
    maxLength: 2048,
    options: [
      { name: 'tone', label: 'バイオのトーン', choices: ['プロフェッショナルカジュアル', '楽しくトレンディ', 'エステティックミニマル', '大胆でダイレクト', '温かく招待的'], default: 'プロフェッショナルカジュアル', type: 'select' },
      { name: 'include_emojis', label: '絵文字を含める', choices: ['はい', 'いいえ'], default: 'はい', type: 'radio' },
    ],
    systemPrompt: `You are an expert Instagram strategist and personal branding consultant specializing in crafting bios optimized for the Instagram platform.
## INSTAGRAM BIO STRUCTURE
The Instagram bio has a strict 150-character limit and appears with:
- Profile picture
- Name field (separate, 30 characters)
- Bio text (150 characters max)
- External link
## INSTAGRAM-SPECIFIC BEST PRACTICES
- Use line breaks strategically for readability
- Place most important info first
- Include relevant emojis as visual markers
- Make CTA clear for link clicks
Tone: {{tone}}
Include Emojis: {{include_emojis}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'パーソナルブランディング最適化', description: 'Instagramでパーソナルブランドを構築する個人は、バイオジェネレーターを使用して、専門知識、個性、ユニークな価値を効果的に表現するバイオを作成します。ニッチ、実績、目標に関する関連情報を入力することで、ツールは混雑したプラットフォームで際立ち、理想的なフォロワーを引きつけるのに役立つクリエイティブなバイオを生成します。' },
      { title: 'ビジネスプロフィールの強化', description: '企業やブランドはInstagramバイオジェネレーターを使用して、Instagramの150文字制限内でバリュープロポジションを明確に伝える簡潔でインパクトのあるバイオを作成します。コアサービス、ユニークセリングポイント、ターゲットオーディエンスの詳細を入力することで、ツールはプロフィール訪問をコンバージョンに導くプロフェッショナルなバイオを生成します。' },
      { title: 'コンテンツクリエイターサポート', description: 'コンテンツクリエイター、YouTuber、ポッドキャスター、ブロガーはバイオジェネレーターを活用して、コンテンツニッチをショーケースするだけでなく、フォロワーがCTAに関与するよう促すバイオを作成します。ツールはコンテンツフォーカス、投稿スケジュール、リンクインバイオオファリングを強調するバイオを作成するのに役立ちます。' },
    ],
    faqs: [
      { question: 'Instagramバイオの文字数制限は何ですか？', answer: 'Instagramバイオは最大150文字です。これにはスペース、絵文字、改行が含まれます。名前フィールドは別で、追加で30文字を許可します。' },
      { question: 'Instagramバイオはどう構成すべきですか？', answer: '明確な階層を使用：あなたが誰であるか何をしているかでリード、バリュープロポジションまたはユニークな角度を追加、スペースが許せば信頼性マーカーを含め、リンクに人々を誘導するCTAで終わります。' },
      { question: 'いくつの絵文字を使用すべきですか？', answer: '視覚的なマーカーまたはラインスターターとして2-5の絵文字を戦略的に使用してください。多すぎると雑然として見えます。ニッチまたは個性を表す絵文字を選び、より簡単なスキャンのためにテキストを分割するのに役立ててください。' },
      { question: 'Instagramバイオに改行を使用すべきですか？', answer: 'はい、改行は読みやすさを向上させ、情報を明確に整理することができます。役割、バリュープロポジション、CTAなど、異なる要素を分離するために使用してください。' },
      { question: 'Instagramバイオに改行を追加するにはどうすればよいですか？', answer: 'ノートアプリで適切なフォーマットでバイオを入力し、それをコピーしてInstagramに貼り付けることで改行を追加できます。または、非表示文字やバイオフォーマットツールを使用してください。' },
      { question: 'Instagramバイオにハッシュタグを含めるべきですか？', answer: '1-2の非常に関連性の高いハッシュタグは分類に役立ちますが、バイオではクリックできません。フォロワーに使用してほしい場合、ブランドハッシュタグはうまく機能します。一般的に、ハッシュタグはバイオよりも投稿で重要です。' },
      { question: 'Instagramバイオに最適なCTAは何ですか？', answer: '効果的なCTAには含まれます：「下のリンク 👇」、「今すぐ購入」、「コラボはDMで」、「リンクで無料ガイド」、「毎週火曜日に新しい動画」。訪問者に何をしてほしいかに具体的にしてください。' },
      { question: 'フォロワーをコンバートするバイオをどう書きますか？', answer: '機能よりもメリットに焦点を当ててください。「フィットネスコーチです」ではなく、「忙しいママが90日で20ポンド減量するのを支援」と試してください。ターゲットオーディエンスの欲求やペインポイントに直接対応してください。' },
      { question: 'Instagramバイオは他のソーシャルメディアバイオと一致すべきですか？', answer: 'コアメッセージとブランドは一貫しているべきですが、Instagramの文字制限とビジュアル文化に合わせてフォーマットを適応させてください。Instagramオーディエンスは例えばLinkedInよりも多くの個性と絵文字を期待します。' },
      { question: 'どのくらいの頻度でInstagramバイオを更新すべきですか？', answer: 'フォーカス、オファリング、または実績が変わったときに更新してください。多くのクリエイターは月次または季節ごとに更新して、現在のプロジェクト、プロモーション、またはコンテンツテーマを強調します。' },
    ],
  },

  'instagram-caption-generator': {
    slug: 'instagram-caption-generator',
    name: 'Instagramキャプションジェネレーター',
    title: '無料AIInstagramキャプションジェネレーター',
    description: 'いいね、コメント、シェアを促進する魅力的なInstagramキャプションを生成。AIがフィード投稿、リール、ストーリー用のスクロールを止めるキャプションを作成します。',
    metaDescription: 'いいね、コメント、シェアを促進する魅力的なInstagramキャプションを生成。AIがフィード投稿、リール、ストーリー用のスクロールを止めるキャプションを作成します。',
    inputLabel: '投稿内容を説明してください...',
    inputPlaceholder: '例：新しい抹茶ラテメニューを紹介するカフェ投稿の写真',
    buttonText: 'キャプションを生成',
    maxLength: 2048,
    options: [
      { name: 'tone', label: 'キャプションのトーン', choices: ['カジュアル/フレンドリー', 'プロフェッショナル', 'インスピレーショナル', 'ユーモラス', 'エデュケーショナル'], default: 'カジュアル/フレンドリー', type: 'select' },
      { name: 'length', label: 'キャプションの長さ', choices: ['ショート（1-2文）', 'ミディアム（3-5文）', 'ロング（ストーリーテリング）'], default: 'ミディアム（3-5文）', type: 'select' },
      { name: 'include_hashtags', label: 'ハッシュタグを含める', choices: ['はい', 'いいえ'], default: 'はい', type: 'radio' },
    ],
    systemPrompt: `You are an expert Instagram content strategist specializing in creating captions that maximize engagement.
## INSTAGRAM CAPTION ELEMENTS
1. **Hook**: First line visible without "more" - must stop the scroll
2. **Value**: Education, entertainment, or inspiration
3. **Engagement Trigger**: Question, poll, or action prompt
4. **Hashtags**: Strategic, relevant tags (when requested)
Tone: {{tone}}
Length: {{length}}
Include Hashtags: {{include_hashtags}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'ブランドのソーシャルメディア管理', description: '企業のソーシャルメディアを管理するマーケティングチームやソーシャルメディアマネージャーは、Instagramキャプションジェネレーターを使用して、ブランドの声とマーケティング目標に合った一貫した高品質のキャプションを作成します。これは時間を節約しながらすべての投稿でプロフェッショナルなプレゼンスを維持するのに役立ちます。' },
      { title: 'インフルエンサーコンテンツ制作', description: 'インフルエンサーやコンテンツクリエイターは、高頻度の投稿スケジュールを維持しながらエンゲージメントを維持するためにキャプションジェネレーターを活用します。ツールはビジュアルを補完し、フォロワーのインタラクションを促し、プラットフォーム固有のベストプラクティスに従ったキャプションを作成するのに役立ちます。' },
      { title: '中小企業のマーケティング', description: '専任のソーシャルメディアスタッフがいない中小企業のオーナーは、製品、サービス、ブランドストーリーをショーケースするプロフェッショナルなキャプションを作成するためにジェネレーターを使用します。これにより、Instagramでの強力なプレゼンスを維持しながら、他のビジネス優先事項に焦点を当てることができます。' },
    ],
    faqs: [
      { question: '良いInstagramキャプションとは何ですか？', answer: '良いInstagramキャプションは最初の行で注意を引き、フォロワーにとって価値（エンターテインメント、教育、インスピレーション）を提供し、コメントを通じてエンゲージメントを促し、ブランドの声に合っています。長さはコンテンツ戦略と投稿タイプによって異なります。' },
      { question: 'Instagramキャプションはどのくらいの長さにすべきですか？', answer: 'Instagramは最大2,200文字を許可しますが、最適な長さはコンテンツタイプによって異なります。短いキャプション（1-2文）はシンプルな投稿に効果的で、中程度の長さ（3-5文）は価値を追加でき、ストーリーテリング投稿はより長くなる場合があります。最初の125文字が最も重要です—「もっと見る」前に表示されます。' },
      { question: 'キャプションにハッシュタグをいくつ使用すべきですか？', answer: 'Instagramは最大30のハッシュタグを許可しますが、5-15の関連性の高い、的を絞ったハッシュタグが一般的に推奨されます。量よりも質に焦点を当てる—コンテンツと実際にエンゲージメントをもたらすオーディエンスに関連性のあるハッシュタグを使用してください。' },
      { question: 'キャプションの最初の行はどう書くべきですか？', answer: '最初の行はスクロールを止めるフックとして機能すべきです。大胆な声明、質問、または「もっと見る」をタップするよう促す驚くべき事実から始めてください。弱いまたは一般的なオープニングは避けてください。' },
      { question: 'キャプションにCTAを含めるべきですか？', answer: 'はい、CTAはエンゲージメントを大幅に向上させることができます。例には含まれます：「下にコメントしてあなたの考えを共有してください」、「同意なら二回タップ」、「同じ経験をした友達をタグしてください」、「バイオのリンクで詳細を確認」。' },
      { question: 'キャプションに絵文字を使用すべきですか？', answer: '絵文字はキャプションをより視覚的に魅力的にし、テキストを分割するのに役立ちます。戦略的に使用してください—主要なポイントを強調したり、個性を追加したり、視覚的なブレークを作成したり。過度な使用は専門的でなく見える可能性があるため、ブランドの声に合わせてください。' },
      { question: 'ビジネス投稿と個人投稿ではキャプションのスタイルをどう変えますか？', answer: 'ビジネスキャプションは価値提供、問題解決、行動促進に焦点を当てることが多いです。個人投稿はより多くの個性、ストーリーテリング、カジュアルな言語を許可します。どちらの場合も、オーディエンスとの本物のつながりが鍵です。' },
      { question: 'ハッシュタグはキャプション内とコメントのどちらに配置すべきですか？', answer: '両方のアプローチが効果的です。キャプション内はすぐに発見可能性を提供します。最初のコメントに置くとキャプションがすっきり見えます。リーチを比較するためにテストして、あなたのアカウントに何が効果的かを確認してください。' },
      { question: 'リールとフィード投稿ではキャプションの書き方を変えるべきですか？', answer: 'はい。リールのキャプションはしばしば短く、アクション重視です—ビデオがストーリーを伝えるからです。フィード投稿のキャプションはより長くストーリーテリングにすることができます。どちらもフォーマットのベストプラクティスに合わせて適応させながら、ブランドの声を維持すべきです。' },
      { question: 'キャプションでエンゲージメントを高めるにはどうすればよいですか？', answer: 'エンゲージメントを高めるキャプションは、フォロワーが答えたくなる質問をし、コメントで共有を招待し、保存する価値のある価値を提供し、本物の個性と脆弱性を示します。行動を促すプロンプト（「あなたのお気に入りは？」）のあるキャプションは一般的に高いエンゲージメントを見ます。' },
    ],
  },

  'instagram-hashtag-generator': {
    slug: 'instagram-hashtag-generator',
    name: 'Instagramハッシュタグジェネレーター',
    title: '無料AIInstagramハッシュタグジェネレーター',
    description: 'Instagram投稿用のリーチを拡大するハッシュタグを生成。AIがフォロワーを増やし可視性を高める最適なハッシュタグを見つけます。',
    metaDescription: 'Instagram投稿用のリーチを拡大するハッシュタグを生成。AIがフォロワーを増やし可視性を高める最適なハッシュタグを見つけます。',
    inputLabel: '投稿内容を説明してください...',
    inputPlaceholder: '例：日没時のビーチでのヨガポーズの写真',
    buttonText: 'ハッシュタグを生成',
    maxLength: 2048,
    options: [
      { name: 'number', label: 'ハッシュタグ数', choices: ['5ハッシュタグ', '10ハッシュタグ', '15ハッシュタグ', '30ハッシュタグ'], default: '15ハッシュタグ', type: 'select' },
      { name: 'competition', label: '競争レベル', choices: ['ミックス（推奨）', '低競争', '高競争'], default: 'ミックス（推奨）', type: 'select' },
    ],
    systemPrompt: `You are an expert Instagram strategist specializing in hashtag optimization for maximum reach and discoverability.
## HASHTAG CATEGORIES
1. **Niche-Specific**: Targeted to your exact content type
2. **Community**: Popular within your niche community
3. **Broad Reach**: Higher volume, more competitive
4. **Location-Based**: Geographic relevance when applicable
5. **Branded**: Unique to you or campaigns
Number: {{number}}
Competition Level: {{competition}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'コンテンツディスカバリー最適化', description: 'Instagramコンテンツクリエイターは、投稿が発見ページやハッシュタグ検索で発見される可能性を高めるためにハッシュタグジェネレーターを使用します。コンテンツと実際に関心を持つ可能性のあるユーザーに関連するハッシュタグを使用することで、クリエイターは本物のリーチとエンゲージメントを拡大できます。' },
      { title: 'ニッチオーディエンスターゲティング', description: '特定のコミュニティに到達しようとするビジネスやクリエイターは、ジェネレーターを使用して、ターゲットオーディエンスが積極的にフォローし検索するニッチ固有のハッシュタグを見つけます。これはランダムなユーザーではなく、関連するフォロワーに投稿が届くことを確保するのに役立ちます。' },
      { title: 'キャンペーンとローンチプロモーション', description: '製品のローンチ、イベント、キャンペーンを実行するマーケターは、時間に敏感なプロモーションの可視性を最大化するためにハッシュタグジェネレーターを使用します。トレンド、タイムリー、キャンペーン固有のハッシュタグを組み合わせることで、プロモーションコンテンツへの即座のリーチを拡大します。' },
    ],
    faqs: [
      { question: 'Instagram投稿にいくつのハッシュタグを使用すべきですか？', answer: 'Instagramは投稿あたり最大30のハッシュタグを許可しますが、最適な数については議論があります。多くの専門家は5-15の的を絞ったハッシュタグを推奨しますが、他は最大数の使用が最大リーチを達成すると見ています。エンゲージメント率を見てあなたのアカウントに何が効果的かをテストしてください。' },
      { question: 'ハッシュタグのミックスを使用すべき理由は何ですか？', answer: '高ボリューム（1M+投稿）、中ボリューム（100K-1M）、低ボリューム（100K未満）ハッシュタグのミックスは発見可能性のバランスを取ります。低競争タグでは目立ちやすく、高ボリュームタグではより多くの潜在的ビューワーを得られます。' },
      { question: 'すべての投稿に同じハッシュタグを使用できますか？', answer: '同一のハッシュタグセットを繰り返すとリーチが減少する可能性があります。各投稿の特定のコンテンツに基づいてハッシュタグを変化させ、アカウント全体で一貫性を維持する一部のコアハッシュタグを保持してください。' },
      { question: 'ハッシュタグはキャプション内とコメントのどちらに配置すべきですか？', answer: '両方の配置が効果的です。キャプション内は即座に発見可能性を提供し、コメントへの配置はキャプションをすっきり保ちます。異なる配置をテストして、あなたのアカウントに何が効果的かを確認してください—リーチに大きな違いはないようです。' },
      { question: '禁止されたハッシュタグとは何ですか？', answer: '一部のハッシュタグは不適切なコンテンツとの関連でInstagramによってブロックまたは制限されています。禁止されたハッシュタグを使用すると投稿のリーチが減少する可能性があります。ジェネレーターはこれらを避けますが、疑わしい場合はInstagramで確認してください。' },
      { question: 'ブランドハッシュタグを作成すべきですか？', answer: 'はい、ブランドハッシュタグはコミュニティを構築し、ユーザー生成コンテンツを追跡するのに役立ちます。ユニークで簡単に綴れ、発音しやすいものにしてください。すべての投稿で一貫して使用し、フォロワーに使用を促してください。' },
      { question: 'トレンドハッシュタグを使用すべきですか？', answer: 'コンテンツに関連する場合、トレンドハッシュタグは可視性を高めることができます。ただし、無関係な人気タグの使用はスパムに見えエンゲージメントを傷つける可能性があります。関連性がある場合のみトレンドハッシュタグを使用してください。' },
      { question: 'どのハッシュタグが効果的かどう追跡しますか？', answer: 'Instagramインサイト（ビジネス/クリエイターアカウント用）はハッシュタグからのインプレッションを表示します。異なるセットをテストし、パフォーマンスを追跡してください。サードパーティツールはより詳細なハッシュタグ分析を提供できます。' },
      { question: 'リールにもハッシュタグを使用すべきですか？', answer: 'はい、ハッシュタグはリールの発見可能性を向上させることができます。通常のフィード投稿と同じ原則が適用されます。一部のクリエイターはリールに少ないハッシュタグを使用し、アルゴリズムにより依存していますが、関連するハッシュタグでもリーチは向上できます。' },
      { question: 'ロケーションハッシュタグはリーチに役立ちますか？', answer: 'ビジネスに地理的な焦点がある場合、はい。ロケーションハッシュタグ（#TokyoCafe、#ShibuyaFitness）は特定のエリアでサービスを探している人々に到達するのに役立ちます。ロケーションタグと一緒に使用することで、ローカルの発見可能性が最大化されます。' },
    ],
  },

  'social-media-hashtag-generator': {
    slug: 'social-media-hashtag-generator',
    name: 'ソーシャルメディアハッシュタグジェネレーター',
    title: '無料AIソーシャルメディアハッシュタグジェネレーター',
    description: '複数のソーシャルプラットフォーム向けの効果的なハッシュタグを生成。AIがリーチとエンゲージメントを増やす関連タグを見つけます。',
    metaDescription: '複数のソーシャルプラットフォーム向けの効果的なハッシュタグを生成。AIがリーチとエンゲージメントを増やす関連タグを見つけます。',
    inputLabel: 'コンテンツを説明してください...',
    inputPlaceholder: '例：サステナブルファッションのヒントに関する投稿',
    buttonText: 'ハッシュタグを生成',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'プラットフォーム', choices: ['Instagram', 'Twitter/X', 'LinkedIn', 'TikTok', 'マルチプラットフォーム'], default: 'マルチプラットフォーム', type: 'select' },
      { name: 'number', label: 'ハッシュタグ数', choices: ['5ハッシュタグ', '10ハッシュタグ', '15ハッシュタグ', '20ハッシュタグ'], default: '10ハッシュタグ', type: 'select' },
    ],
    systemPrompt: `You are an expert social media strategist specializing in hashtag optimization across multiple platforms.
## PLATFORM-SPECIFIC GUIDELINES
- Instagram: Up to 30 hashtags, mix of popularity levels
- Twitter/X: 1-3 hashtags optimal, focus on trending
- LinkedIn: 3-5 professional hashtags
- TikTok: 3-5 trending + niche hashtags
Platform: {{platform}}
Number: {{number}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'クロスプラットフォームコンテンツ配信', description: '複数のソーシャルチャネルでコンテンツを投稿するマーケターやクリエイターは、ソーシャルメディアハッシュタグジェネレーターを使用して、各プラットフォームに最適化されたハッシュタグを見つけます。これにより、プラットフォーム固有のベストプラクティスに従いながら、一貫したメッセージングでリーチを最大化できます。' },
      { title: 'ビジネスソーシャルメディア戦略', description: '企業のソーシャルメディアプレゼンスを管理するマーケティングチームは、ジェネレーターを使用して、業界、オーディエンス、コンテンツタイプに関連するプロフェッショナルなハッシュタグを特定します。これは特に、プロフェッショナルなトーンとビジネス関連のハッシュタグが重要なLinkedInで価値があります。' },
      { title: 'トレンドとバイラルコンテンツ', description: 'トレンドトピックや話題の会話を活用しようとするコンテンツクリエイターは、ジェネレーターを使用して、現在人気があり関連性のあるハッシュタグを見つけます。これはタイムリーなコンテンツを最大化し、エンゲージメントを高める重要な会話に参加するのに役立ちます。' },
    ],
    faqs: [
      { question: '最適なハッシュタグ数はプラットフォームによってどう異なりますか？', answer: 'Instagramは投稿あたり最大30を許可し、5-15が一般的に推奨されます。Twitter/Xは1-3で最も効果的です。LinkedInは3-5のプロフェッショナルなハッシュタグを推奨します。TikTokは3-5のトレンドとニッチのミックスで効果的です。' },
      { question: '同じハッシュタグを異なるプラットフォームで使用できますか？', answer: '一部のハッシュタグはプラットフォーム間で機能しますが、プラットフォーム文化と最適な使用法に合わせて適応させてください。Instagramでうまく機能するものがLinkedInには不適切かもしれません。各プラットフォームのオーディエンスと慣習を考慮してください。' },
      { question: 'ニッチハッシュタグと人気ハッシュタグのどちらを選ぶべきですか？', answer: 'ミックスを使用するのが最も効果的です。人気ハッシュタグは大きなリーチ可能性を提供しますが、競争が激しいです。ニッチハッシュタグはより小さいがよりエンゲージしたオーディエンスをターゲットにします。両方を組み合わせて発見可能性とエンゲージメントのバランスを取ってください。' },
      { question: 'どのハッシュタグがパフォーマンスしているかどう追跡しますか？', answer: 'ほとんどのプラットフォームのビジネス/クリエイターアカウントはハッシュタグパフォーマンスを示すインサイトを提供します。リーチ、インプレッション、エンゲージメント指標を追跡してください。異なるセットを時間をかけてテストして、あなたのコンテンツに何が効果的かを特定してください。' },
      { question: 'トレンドハッシュタグにはどうアプローチすべきですか？', answer: 'トレンドハッシュタグはコンテンツに本当に関連する場合にのみ使用してください。無関係なトレンドに便乗するとスパムに見え、エンゲージメントを傷つける可能性があります。ただし、関連するトレンドは可視性を大幅に向上させることができます。' },
      { question: 'ブランドハッシュタグを作成すべきですか？', answer: 'はい、ブランドハッシュタグはブランド認知度を構築し、ユーザー生成コンテンツを追跡し、すべてのプラットフォームでコミュニティ感を生み出すのに役立ちます。ユニークで綴りやすく、すべてのプラットフォームで一貫して使用してください。' },
      { question: 'ハッシュタグは投稿テキスト内と最後のどちらに配置すべきですか？', answer: 'プラットフォームの慣習によります。Twitterではハッシュタグはしばしば自然に統合されます。Instagramではキャプションの最後またはコメントに配置されることが多いです。LinkedInでは一般的に投稿の最後に配置されます。TikTokではキャプション内に組み込まれます。' },
      { question: 'ハッシュタグ戦略はどのくらいの頻度で更新すべきですか？', answer: 'トレンドと業界の変化に合わせて定期的に確認してください。月次で更新し、新しいハッシュタグをテストしてパフォーマンスの低いものを入れ替えることを目指してください。キャンペーン固有のハッシュタグは関連する活動に合わせて更新してください。' },
      { question: 'ハッシュタグリサーチで避けるべきことは何ですか？', answer: '避けるべき：禁止またはスパムなハッシュタグの使用、過度に一般的なタグへの依存、無関係なトレンドへの便乗、すべての投稿で同じセットの繰り返し。これらの慣行はリーチを傷つけ、スパムとして扱われる可能性があります。' },
      { question: 'ロケーションハッシュタグはどう使用すべきですか？', answer: 'ローカルオーディエンスをターゲットにするビジネスにとって非常に価値があります。ロケーションハッシュタグをニッチハッシュタグと組み合わせてください（例：#TokyoFitness）。ジオタグ機能と一緒に使用してローカル発見可能性を最大化してください。' },
    ],
  },

  'tiktok-hashtag-generator': {
    slug: 'tiktok-hashtag-generator',
    name: 'TikTokハッシュタグジェネレーター',
    title: '無料AITikTokハッシュタグジェネレーター',
    description: 'TikTok動画のバイラル化を支援するハッシュタグを生成。AIがFor Youページにコンテンツを届けるトレンドタグを見つけます。',
    metaDescription: 'TikTok動画のバイラル化を支援するハッシュタグを生成。AIがFor Youページにコンテンツを届けるトレンドタグを見つけます。',
    inputLabel: '動画コンテンツを説明してください...',
    inputPlaceholder: '例：料理ハックを紹介するコメディスキット',
    buttonText: 'ハッシュタグを生成',
    maxLength: 2048,
    options: [
      { name: 'number', label: 'ハッシュタグ数', choices: ['3ハッシュタグ', '5ハッシュタグ', '8ハッシュタグ'], default: '5ハッシュタグ', type: 'select' },
      { name: 'style', label: 'スタイル', choices: ['トレンド重視', 'ニッチ重視', 'ミックス'], default: 'ミックス', type: 'select' },
    ],
    systemPrompt: `You are an expert TikTok strategist specializing in hashtag optimization for maximum discoverability and For You Page placement.
## TIKTOK HASHTAG STRATEGY
1. **Trending**: Current platform trends (#fyp, #foryou, trending sounds)
2. **Niche**: Content-specific community tags
3. **Challenge**: Active challenge or trend participation
4. **Descriptive**: What the video is about
Number: {{number}}
Style: {{style}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'For Youページ発見可能性', description: 'TikTokクリエイターはハッシュタグジェネレーターを使用して、コンテンツがFor Youページに表示される可能性を高めます。適切なハッシュタグはTikTokのアルゴリズムがコンテンツを関連するオーディエンスに分類し配信するのを助け、バイラルリーチの可能性を高めます。' },
      { title: 'トレンドとチャレンジへの参加', description: '現在のTikTokトレンドやチャレンジに参加するクリエイターは、ジェネレーターを使用して関連するトレンドハッシュタグを特定します。正しいトレンドハッシュタグを使用することで、これらのトレンドを積極的にブラウズしているユーザーにコンテンツが表示されることを確保します。' },
      { title: 'ニッチコミュニティ構築', description: 'ニッチコミュニティで専用のフォロワーを構築しようとするクリエイターは、ジェネレーターを使用してニッチ固有のハッシュタグを見つけます。これらのタグは広いリーチではなく、特定のトピックに情熱を持つエンゲージしたオーディエンスとつながるのに役立ちます。' },
    ],
    faqs: [
      { question: 'TikTok動画にいくつのハッシュタグを使用すべきですか？', answer: 'TikTokではハッシュタグは少ない方が効果的なことが多いです。3-5の的を絞ったハッシュタグが一般的に推奨されます。キャプションは100文字に制限されているため、選択的に選んでください。量よりも質と関連性に焦点を当ててください。' },
      { question: '#fypと#foryouは実際に機能しますか？', answer: 'これらのハッシュタグは広く使用されていますが、それだけでFor Youページ配置を保証するものではありません。ただし、リーチに貢献する可能性があります。コンテンツ固有のニッチハッシュタグと組み合わせて使用すると最も効果的です。' },
      { question: 'どのハッシュタグがTikTokでトレンドかどう見つけますか？', answer: 'TikTokの発見ページを確認して現在のトレンドハッシュタグを確認してください。人気のクリエイターやあなたのニッチの動画を見てください。ツールはリアルタイムトレンドデータに基づいて現在トレンドのハッシュタグを提案します。' },
      { question: 'チャレンジ固有のハッシュタグを使用すべきですか？', answer: 'はい、チャレンジに参加している場合は関連するチャレンジハッシュタグを使用してください。これによりあなたの動画がチャレンジの発見可能なコレクションに追加されます。正式なチャレンジに参加していない場合は強制しないでください。' },
      { question: 'ブランドキャンペーンのハッシュタグはどう扱いますか？', answer: 'ブランドパートナーシップやスポンサードコンテンツの場合は、ブランドのキャンペーンハッシュタグを使用してください。多くの場合、契約で必要とされます。TikTokのガイドラインに従って開示を行い、#ad、#spなどを使用してください。' },
      { question: 'TikTokとInstagramでは同じハッシュタグが機能しますか？', answer: '一部のハッシュタグはプラットフォーム間で機能しますが、TikTokには独自のトレンドと文化があります。TikTok固有のトレンドと言語を反映するハッシュタグを使用してください。ジェネレーターはTikTokプラットフォームに最適化されたハッシュタグを作成します。' },
      { question: 'トレンドハッシュタグはどのくらい早く変わりますか？', answer: 'TikTokのトレンドは急速に動きます—一部のハッシュタグは数日または数週間だけトレンドになります。継続的なリーチのために常緑のニッチハッシュタグとタイムリーなトレンドハッシュタグを組み合わせてください。トレンド参加のためには迅速な対応が有利です。' },
      { question: 'ハッシュタグは私の動画がバイラルになるのを助けますか？', answer: 'ハッシュタグは発見可能性に貢献しますが、コンテンツ品質、最初の数秒での視聴者リテンション、エンゲージメント率がより重要な要因です。ハッシュタグを魅力的なコンテンツの補完として捉えてください—コンテンツを置き換えるものではありません。' },
      { question: 'ニッチハッシュタグをどう見つけますか？', answer: 'あなたのニッチで成功しているクリエイターをリサーチしてください。発見ページでニッチトピックを検索してください。あなたのニッチでエンゲージメントを駆動しているコミュニティハッシュタグを探してください。ジェネレーターはコンテンツ説明に基づいてニッチ固有のハッシュタグを提案します。' },
      { question: 'TikTokで禁止されているハッシュタグはありますか？', answer: 'はい、TikTokは不適切なコンテンツ、スパム、または有害なトレンドに関連するハッシュタグを禁止または制限しています。禁止されたハッシュタグを使用すると動画のリーチに影響を与える可能性があります。ジェネレーターはこれらのハッシュタグを避けるように設計されています。' },
    ],
  },

  'social-media-username-generator': {
    slug: 'social-media-username-generator',
    name: 'ソーシャルメディアユーザーネームジェネレーター',
    title: '無料AIソーシャルメディアユーザーネームジェネレーター',
    description: 'ユニークで記憶に残るソーシャルメディアユーザーネームを生成。AIがパーソナルブランドを反映したクリエイティブで利用可能なハンドルを見つけます。',
    metaDescription: 'ユニークで記憶に残るソーシャルメディアユーザーネームを生成。AIがパーソナルブランドを反映したクリエイティブで利用可能なハンドルを見つけます。',
    inputLabel: '自分自身またはブランドを説明してください...',
    inputPlaceholder: '例：DIYクラフトと家の装飾を共有するクリエイティブブロガー',
    buttonText: 'ユーザーネームを生成',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'スタイル', choices: ['プロフェッショナル', 'クリエイティブ', 'ミニマル', 'ユニーク/記憶に残る'], default: 'クリエイティブ', type: 'select' },
      { name: 'number', label: 'オプション数', choices: ['5オプション', '10オプション', '15オプション'], default: '10オプション', type: 'select' },
    ],
    systemPrompt: `You are an expert in personal branding and social media strategy specializing in creating memorable, available usernames that represent brands and individuals effectively.
## USERNAME PRINCIPLES
1. **Memorable**: Easy to remember and spell
2. **Brand-Aligned**: Reflects identity or niche
3. **Consistent**: Works across multiple platforms
4. **Available**: Likely to be available
Style: {{style}}
Number: {{number}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '新しいソーシャルメディアプレゼンスの確立', description: '初めてソーシャルメディアプレゼンスを構築する個人やビジネスは、ユーザーネームジェネレーターを使用して、アイデンティティを反映し、フォロワーが覚えやすい完璧なハンドルを見つけます。これにより、すべてのプラットフォームで一貫したブランドアイデンティティで開始できます。' },
      { title: 'ブランドリフレッシュとリポジショニング', description: '再ブランディングやオンラインプレゼンスの更新を行う確立されたブランドやクリエイターは、ジェネレーターを使用して、新しい方向性に合った新しいユーザーネームオプションを探ります。これはブランドの進化を反映しながら、最大の可用性のために十分にユニークな名前を見つけるのに役立ちます。' },
      { title: 'プラットフォーム間の一貫性', description: '複数のプラットフォームでプレゼンスを持つクリエイターやビジネスは、ジェネレーターを使用して、すべてのチャネルで利用可能な可能性が高いユーザーネームを見つけます。一貫したハンドルはブランド認知度を向上させ、フォロワーが異なるプラットフォームであなたを見つけやすくします。' },
    ],
    faqs: [
      { question: '良いソーシャルメディアユーザーネームとは何ですか？', answer: '良いユーザーネームは記憶に残り、綴りやすく、ブランドまたはアイデンティティを反映し、複数のプラットフォームで利用可能で、一貫して使用できます。複雑なスペルや過度な数字や記号は避けてください。' },
      { question: 'すべてのプラットフォームで同じユーザーネームを使用すべきですか？', answer: 'はい、可能であれば。一貫したユーザーネームはブランド認知度を構築し、あなたを簡単に見つけられるようにします。正確な名前が利用できない場合は、すべてのプラットフォームで機能する近いバリエーションを見つけてください。' },
      { question: 'ユーザーネームに数字を使用すべきですか？', answer: '可能であれば避けてください。数字はユーザーネームを覚えにくくし、あまりプロフェッショナルに見えない可能性があります。必要な場合は、ランダムな数字ではなく意味のある数字（設立年など）を使用してください。' },
      { question: 'ユーザーネームの可用性をどう確認しますか？', answer: 'ジェネレーターはユニークである可能性が高い名前を作成しますが、各プラットフォームで直接可用性を確認する必要があります。Namechkなどのサイトは複数のプラットフォームにわたる可用性を確認できます。' },
      { question: '理想のユーザーネームが取られている場合はどうすればよいですか？', answer: '小さなバリエーションを試してください：アンダースコア、ピリオド（プラットフォームが許可する場合）、またはニッチに関連する短い接頭辞/接尾辞を追加。ブランドに合っている場合は、近いバリエーションが元のものと同じくらい効果的な場合があります。' },
      { question: 'ユーザーネームはどのくらいの長さにすべきですか？', answer: '短いほど良いです—15文字以下を目指してください。短いユーザーネームは覚えやすく、入力しやすく、より一般的に見えます。プラットフォームには異なる最大長があります（Twitterは15文字、Instagramは30文字）。' },
      { question: '本名をユーザーネームに使用すべきですか？', answer: 'パーソナルブランドの場合ははい。ビジネスまたはクリエイティブなペルソナの場合は、ニッチまたはブランドアイデンティティを反映するユーザーネームがより効果的かもしれません。プライバシーの懸念や希望するポジショニングを考慮してください。' },
      { question: 'ブランド名がユーザーネームにない場合はどうすればよいですか？', answer: 'ブランド名をユーザーネームとして商標登録している場合、プラットフォームによっては回収できる場合があります。そうでなければ、「official」、「hq」、または場所を追加するなど、認識可能なバリエーションを検討してください。' },
      { question: 'ユーザーネームで避けるべきことは何ですか？', answer: '避けるべき：発音しにくいスペル、ランダムな数字の連続、過度なアンダースコアや記号、あまりにも長いまたは複雑な名前、すべてのプラットフォームで機能しない名前。シンプルで記憶に残ることが鍵です。' },
      { question: '後でユーザーネームを変更できますか？', answer: 'ほとんどのプラットフォームは変更を許可しますが、頻繁な変更はフォロワーを混乱させ、ブランド認知度に影響を与える可能性があります。成長するにつれて使い続けたいユーザーネームを最初から選んでください。' },
    ],
  },

  // ==================== BATCH 4: Tools 31-39 ====================

  'instagram-name-generator': {
    slug: 'instagram-name-generator',
    name: 'Instagramネームジェネレーター',
    title: '無料AIInstagramネームジェネレーター',
    description: '際立つユニークなInstagramユーザーネームを生成。AIがプレゼンス構築と発見を助ける記憶に残るオンブランドなハンドルを作成します。',
    metaDescription: '際立つユニークなInstagramユーザーネームを生成。AIがプレゼンス構築と発見を助ける記憶に残るオンブランドなハンドルを作成します。',
    inputLabel: '自分自身またはブランドを説明してください...',
    inputPlaceholder: '例：ヘルシーレシピを共有するエマという名前のフードブロガー',
    buttonText: '名前を生成',
    maxLength: 2048,
    options: [
      { name: 'account_type', label: 'アカウントタイプ', choices: ['パーソナルブランド', 'コンテンツクリエイター', 'ビジネス/ブランド', 'インフルエンサー', 'アーティスト/クリエイティブ'], default: 'コンテンツクリエイター', type: 'select' },
      { name: 'style', label: '名前のスタイル', choices: ['プロフェッショナル', 'クリエイティブ/楽しい', 'ミニマル', 'トレンディ', 'クラシック'], default: 'クリエイティブ/楽しい', type: 'select' },
    ],
    systemPrompt: `You are an expert Instagram branding consultant specializing in creating unique, memorable Instagram usernames.
## INSTAGRAM USERNAME REQUIREMENTS
- Maximum 30 characters
- Allowed: letters, numbers, periods, underscores
- No consecutive periods
- Case insensitive
- Must be unique on platform
Account Type: {{account_type}}
Style: {{style}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'パーソナルブランディング', description: 'Instagramでパーソナルブランドを構築しようとする個人は、情熱と専門知識を反映するユニークでキャッチーなユーザーネームを見つけるためにネームジェネレーターを使用します。記憶に残るユーザーネームは強力なオンラインプレゼンスを作成し、プラットフォーム全体でパーソナルブランディング努力を強化するのに役立ちます。' },
      { title: 'ビジネスと製品プロモーション', description: '企業や起業家は、会社のアイデンティティと価値に合ったブランド関連のユーザーネームを見つけるためにInstagramネームジェネレーターを使用します。プラットフォーム間での一貫したブランディングは顧客がブランドを認識し覚えるのを助け、可視性の向上につながります。' },
      { title: 'ソーシャルメディアマーケティングキャンペーン', description: 'キャンペーン固有のアカウントを作成したりプロモーション用のユニークなハンドルが必要なマーケターは、キャッチーなユーザーネームを素早く開発するためにジェネレーターを使用します。これはイベント、製品ローンチ、または専用のInstagramプレゼンスを必要とする期間限定プロモーションに特に便利です。' },
    ],
    faqs: [
      { question: 'Instagramのユーザーネーム要件は何ですか？', answer: 'Instagramユーザーネームは最大30文字で、文字、数字、ピリオド、アンダースコアのみを使用できます。連続したピリオドは許可されず、名前はピリオドで始めたり終わったりできません。' },
      { question: 'ユーザーネームが利用可能かどう確認するにはどうすればよいですか？', answer: 'Instagramで直接検索するか、アカウントを作成しようとして確認してください。サードパーティツールは複数のプラットフォームにわたる可用性を同時に確認することもできます。' },
      { question: 'Instagramユーザーネームは他のソーシャルメディアと一致すべきですか？', answer: '理想的にははい。プラットフォーム間で一貫したユーザーネームはブランドを強化し、見つけやすくし、一貫性のあるオンラインアイデンティティを作成します。' },
      { question: '本名とクリエイティブなユーザーネームのどちらが良いですか？', answer: '目標によります。本名はパーソナルブランディングとプロフェッショナルネットワーキングに効果的です。クリエイティブなユーザーネームはニッチコンテンツクリエイターや、アイデンティティとは別のブランドを構築する場合により効果的です。' },
      { question: 'Instagramユーザーネームは成長にどのくらい重要ですか？', answer: 'ユーザーネームは検索可能性と第一印象に影響します。ニッチを示す明確で記憶に残るユーザーネームは、人々があなたを見つけ、コンテンツを一目で理解するのに役立ちます。' },
      { question: 'Instagramユーザーネームを変更できますか？', answer: 'はい、設定で変更できます。ただし、古いリンクは壊れ、頻繁な変更はフォロワーを混乱させる可能性があります。変更の必要性を最小限にするために慎重に選んでください。' },
      { question: 'ユーザーネームにニッチを含めるべきですか？', answer: 'ニッチ（写真、フィットネス、食べ物など）を含めると検索可能性が向上し、フォーカスをすぐに伝えます。ただし、コンテンツの進化のために十分に一般的に保ってください。' },
      { question: '良いユーザーネームがすべて取られている場合はどうすればよいですか？', answer: 'アンダースコアやピリオドを使ったバリエーションを試したり、関連する説明を追加したり、場所を含めたり、アクションワード（creates、makes）を使用したり、「the」や「its」などの接頭辞を試してください。' },
      { question: 'ユーザーネームに数字を含めるべきですか？', answer: '可能であれば避けてください。数字はユーザーネームを覚えにくくし、あまりプロフェッショナルに見えない可能性があります。必要な場合は、ランダムな数字ではなく意味のある数字を使用してください。' },
      { question: 'ビジネスアカウント用のInstagramユーザーネームをどう選べばよいですか？', answer: '検索可能なキーワードを含めながら、実際のビジネス名と密接に一致させてください。入力しやすく、覚えやすく、ブランドが成長しても関連性を保つようにしてください。' },
    ],
  },

  'tiktok-username-generator': {
    slug: 'tiktok-username-generator',
    name: 'TikTokユーザーネームジェネレーター',
    title: '無料AITikTokユーザーネームジェネレーター',
    description: 'TikTok向けのトレンディで記憶に残るユーザーネームを生成。AIがFor Youページで注目される際立つハンドルを見つけます。',
    metaDescription: 'TikTok向けのトレンディで記憶に残るユーザーネームを生成。AIがFor Youページで注目される際立つハンドルを見つけます。',
    inputLabel: 'コンテンツスタイルを説明してください...',
    inputPlaceholder: '例：ダンスとコメディスキットを投稿するティーンクリエイター',
    buttonText: 'ユーザーネームを生成',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'スタイル', choices: ['トレンディ/Gen Z', 'プロフェッショナル', 'クリエイティブ/ユニーク', 'ミニマル', 'ユーモラス'], default: 'トレンディ/Gen Z', type: 'select' },
      { name: 'content_type', label: 'コンテンツタイプ', choices: ['ダンス/音楽', 'コメディ', '教育的', 'ライフスタイル', 'ビューティー/ファッション', 'ゲーミング', 'フード', 'フィットネス'], default: 'コメディ', type: 'select' },
    ],
    systemPrompt: `You are an expert TikTok strategist specializing in creating viral-ready usernames that resonate with TikTok's unique culture and audience.
## TIKTOK USERNAME REQUIREMENTS
- 24 characters maximum
- Allowed: letters, numbers, underscores, periods
- No spaces
- Must be unique
Style: {{style}}
Content Type: {{content_type}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'バイラルアイデンティティ構築', description: 'TikTokプレゼンスを立ち上げる新しいクリエイターは、プラットフォームのトレンディでカジュアルな文化に適したユーザーネームを見つけるためにジェネレーターを使用します。正しいユーザーネームはプロフィール訪問時に即座に認識と親しみを生み出し、コンテンツがバイラルになるのを助けます。' },
      { title: 'ニッチコンテンツポジショニング', description: '特定のコンテンツカテゴリのクリエイターは、ニッチを反映しながらキャッチーで記憶に残るユーザーネームを見つけるためにジェネレーターを使用します。ニッチに合ったユーザーネームはオーディエンスを引きつけ、コンテンツの期待を設定するのに役立ちます。' },
      { title: 'プラットフォーム間の一貫性', description: '複数のプラットフォームでプレゼンスを確立するクリエイターは、TikTokで利用可能でありながら、他のソーシャルアカウントと一貫性を保てるユーザーネームを見つけるためにジェネレーターを使用します。これはプラットフォーム間でのクロスプロモーションとオーディエンス成長を容易にします。' },
    ],
    faqs: [
      { question: 'TikTokのユーザーネーム要件は何ですか？', answer: 'TikTokユーザーネームは最大24文字で、文字、数字、アンダースコア、ピリオドを使用できます。スペースは許可されず、ユーザーネームはプラットフォーム上でユニークである必要があります。' },
      { question: 'TikTokユーザーネームをどう目立たせますか？', answer: 'クリエイティブな言葉遊び、トレンディなフレーズ、またはニッチを反映するユニークな組み合わせを使用してください。簡潔で発音しやすく、覚えやすいものにしてください。あなたの個性やコンテンツスタイルを反映させてください。' },
      { question: 'TikTokユーザーネームにニッチを含めるべきですか？', answer: 'オプションですが役立ちます。ニッチを含めると（fitness.with.sam、cooking.katieなど）、あなたが何をしているかをすぐに伝え、関連するオーディエンスを引きつけるのに役立ちます。' },
      { question: 'TikTokではどのようなユーザーネームスタイルが人気ですか？', answer: '人気のTikTokスタイルには含まれます：名前+ニッチ（dancingdavis）、ニッチ+説明（fitnessfrenzy）、形容詞+名前（tinytrish）、遊び心のあるフレーズ（oopsitskim）。プラットフォームはInstagramやLinkedInよりもカジュアルでクリエイティブな名前を好みます。' },
      { question: 'TikTokユーザーネームで数字を使用すべきですか？', answer: '可能であれば避けてください。数字はユーザーネームを覚えにくく、あまりプロフェッショナルに見えなくする可能性があります。必要な場合は、ランダムな数字ではなく意味のある数字を使用してください。' },
      { question: 'TikTokユーザーネームの変更頻度はどうすればよいですか？', answer: '頻繁な変更は推奨されません。一貫性がブランド認知度を構築します。長期的に使える名前を選んでください。ただし、成長段階の初期には必要に応じて変更できます。' },
      { question: 'ユーザーネームの可用性をどう確認しますか？', answer: 'TikTokアプリで直接検索したり、アカウント作成時に確認してください。サードパーティツールは複数のプラットフォームにわたる可用性を同時にチェックできます。' },
      { question: '良いTikTokユーザーネームが成長に役立ちますか？', answer: 'はい、記憶に残るユーザーネームは視聴者がフォローしやすくし、口コミで広がりやすくします。また、プロフィール訪問時に第一印象を良くし、フォロー率を高めます。' },
      { question: 'TikTokユーザーネームはSEOに影響しますか？', answer: 'TikTokはSEO駆動のプラットフォームではありませんが、ニッチに関連するキーワードを含むユーザーネームは、関連コンテンツを探している人々があなたを見つけるのに役立つ可能性があります。' },
      { question: 'ビジネスとパーソナルTikTokアカウントで異なるアプローチを取るべきですか？', answer: 'はい。ビジネスアカウントはブランド名に近いユーザーネームを使用すべきです。パーソナルアカウントはよりクリエイティブでトレンディになれます。TikTokのカジュアルな文化は両方のタイプでより遊び心のある名前を許容します。' },
    ],
  },

  'youtube-channel-description-generator': {
    slug: 'youtube-channel-description-generator',
    name: 'YouTubeチャンネル説明ジェネレーター',
    title: '無料AIYouTubeチャンネル説明ジェネレーター',
    description: '登録者を惹きつける魅力的なYouTubeチャンネル説明を作成。AIがコンテンツをショーケースしオーディエンスを成長させるSEO最適化された説明を生成します。',
    metaDescription: '登録者を惹きつける魅力的なYouTubeチャンネル説明を作成。AIがコンテンツをショーケースしオーディエンスを成長させるSEO最適化された説明を生成します。',
    inputLabel: 'YouTubeチャンネルを説明してください...',
    inputPlaceholder: '例：予算スマートフォンとガジェットに焦点を当てたテックレビューチャンネル',
    buttonText: '説明を生成',
    maxLength: 2048,
    options: [
      { name: 'tone', label: 'チャンネルのトーン', choices: ['プロフェッショナル', 'フレンドリー', '熱心', '情報的', 'カジュアル'], default: 'フレンドリー', type: 'select' },
      { name: 'channel_type', label: 'チャンネルタイプ', choices: ['教育/チュートリアル', 'エンターテインメント', 'Vlog/ライフスタイル', 'ゲーミング', 'ビジネス/ブランド', 'レビュー/コメンタリー'], default: '教育/チュートリアル', type: 'select' },
    ],
    systemPrompt: `You are an expert YouTube strategist specializing in channel optimization and discoverability.
## YOUTUBE CHANNEL DESCRIPTION STRUCTURE
**Character Limit**: 1,000 characters
**Elements to Include**:
1. Hook/Value Statement (First 1-2 sentences)
2. Content Overview (Middle section)
3. Creator/Brand Info (Brief)
4. Call-to-Action (End)
5. Contact Information
Tone: {{tone}}
Channel Type: {{channel_type}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'チャンネルSEO最適化', description: 'YouTuberはチャンネル説明ジェネレーターを使用して、YouTubeとGoogle検索結果でのチャンネル可視性を向上させるキーワードリッチな説明を作成します。チャンネルフォーカス、ターゲットキーワード、コンテンツタイプを入力することで、ツールは潜在的な視聴者がチャンネルを発見するのに役立つ最適化された説明を生成します。' },
      { title: '登録者コンバージョンの強化', description: 'チャンネル訪問者を登録者に変換しようとするクリエイターは、チャンネル価値を明確に説明する魅力的な説明を作成するためにジェネレーターを使用します。ユニークなバリュープロポジションを伝え、明確な期待を設定するよく作成された説明は、より高い登録率につながります。' },
      { title: '効率的なチャンネルセットアップ', description: 'チャンネルを立ち上げる新しいYouTuberやビジネスは、プロフェッショナルな説明を迅速に作成するためにジェネレーターを使用します。これはチャンネルセットアップ時の時間を節約し、Aboutページが初日から強い第一印象を与えることを確保します。' },
    ],
    faqs: [
      { question: 'YouTubeチャンネル説明はどのくらいの長さにすべきですか？', answer: 'YouTubeはチャンネル説明に最大1,000文字を許可します。バリュープロポジションを明確に伝えるのに十分な量を使用しますが、不要なコンテンツで埋めないでください。ほとんどの効果的な説明は500-800文字です。' },
      { question: 'チャンネル説明には何を含めるべきですか？', answer: '含めるべき：チャンネルの内容、視聴者が学ぶまたは体験すること、アップロードスケジュール、あなたが誰でどのような資格があるか、登録のCTA、ビジネス問い合わせ用の連絡先情報。' },
      { question: 'チャンネル説明はSEOにどう影響しますか？', answer: 'チャンネル説明はYouTubeがレコメンデーションと検索用にコンテンツを理解するのを助けます。関連キーワードを自然に含めて発見可能性を向上させてください。最初の100-150文字は検索結果プレビューで特に重要です。' },
      { question: '検索用に説明を最適化するにはどうすればよいですか？', answer: 'ターゲットオーディエンスが検索するキーワードを含め、重要な情報を前面に出し、自然な言語を使用し（キーワードスタッフィングなし）、コンテンツを新鮮で関連性を保つために定期的に更新してください。' },
      { question: 'アップロードスケジュールを含めるべきですか？', answer: 'はい、一貫したスケジュールがある場合は。「毎週火曜日と金曜日に新しい動画」と述べることで視聴者の期待を設定し、定期的なコンテンツを望む人からの登録を促進できます。' },
      { question: 'どのようなCTAを含めるべきですか？', answer: '視聴者に登録と通知を有効にするよう招待してください。何を得られるかについて具体的に。例：「週刊料理チュートリアルで夕食準備を簡単にするために登録してベルを押してください。」' },
      { question: '説明にメールを含めるべきですか？', answer: 'はい、ビジネス問い合わせ、コラボレーション、スポンサーシップに対してオープンな場合は。プロフェッショナルなメールアドレスはチャンネルがより確立され、潜在的なパートナーにアクセスしやすく見えるようにします。' },
      { question: 'チャンネル説明はどのくらいの頻度で更新すべきですか？', answer: 'コンテンツフォーカス、アップロードスケジュール、またはチャンネルフォーカスが大幅に変わったときに更新してください。情報が最新で関連性を保つために四半期ごとにレビューしてください。' },
      { question: 'チャンネル説明はスポンサー獲得に役立ちますか？', answer: 'はい。ニッチ、オーディエンス、エンゲージメントを明確に述べるプロフェッショナルな説明は、関連するクリエイターを探している潜在的なスポンサーにとってチャンネルをより魅力的にします。' },
      { question: 'チャンネル説明は動画のトーンに一致すべきですか？', answer: 'はい、説明はチャンネルの個性とコンテンツスタイルを反映すべきです。コメディチャンネルは楽しく魅力的に聞こえるべきです；ビジネス教育チャンネルはプロフェッショナルで権威があるように聞こえるべきです。' },
    ],
  },

  'youtube-name-generator': {
    slug: 'youtube-name-generator',
    name: 'YouTubeネームジェネレーター',
    title: '無料AIYouTubeネームジェネレーター',
    description: '際立つクリエイティブなYouTubeチャンネル名を生成。AIが登録者を惹きつけコンテンツニッチを反映する記憶に残るブランド化可能な名前を作成します。',
    metaDescription: '際立つクリエイティブなYouTubeチャンネル名を生成。AIが登録者を惹きつけコンテンツニッチを反映する記憶に残るブランド化可能な名前を作成します。',
    inputLabel: 'チャンネルコンテンツを説明してください...',
    inputPlaceholder: '例：インディーゲームとレトロレビューに焦点を当てたゲーミングチャンネル',
    buttonText: '名前を生成',
    maxLength: 2048,
    options: [
      { name: 'style', label: '名前のスタイル', choices: ['クリエイター名', 'トピック/ニッチ', 'クリエイティブ/ブランド', 'パーソナリティ+ニッチ', 'プロフェッショナル'], default: 'クリエイティブ/ブランド', type: 'select' },
      { name: 'number', label: 'オプション数', choices: ['5オプション', '10オプション', '15オプション'], default: '10オプション', type: 'select' },
    ],
    systemPrompt: `You are an expert YouTube branding consultant specializing in creating memorable, discoverable channel names.
## YOUTUBE CHANNEL NAME GUIDELINES
- Maximum 100 characters (shorter is better)
- Searchable and memorable
- Represents content niche
- Works across platforms
Style: {{style}}
Number: {{number}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '新しいYouTubeチャンネルのブランディング', description: 'YouTubeを始める新しいクリエイターは、コンテンツニッチと個性に合った完璧なチャンネル名を見つけるためにネームジェネレーターを使用します。強力なチャンネル名はチャンネルアイデンティティの基盤を設定し、視聴者がコンテンツを覚えて見つけるのを助けます。' },
      { title: 'チャンネルのリブランディング', description: 'コンテンツフォーカスを変更したり新しい方向性を追求する既存のクリエイターは、進化した方向性に合った新しいチャンネル名オプションを探るためにジェネレーターを使用します。これはチャンネルの進化を市場に伝える新しい名前を見つけるのに役立ちます。' },
      { title: 'マルチチャンネル戦略', description: '追加チャンネルを立ち上げるクリエイターやネットワークは、異なるコンテンツカテゴリ用の名前を開発するためにジェネレーターを使用します。これにより、各チャンネルがそのフォーカスに合った独自のブランド化可能な名前を持つことを確保します。' },
    ],
    faqs: [
      { question: '良いYouTubeチャンネル名とは何ですか？', answer: '良いチャンネル名は記憶に残り、綴りやすく、コンテンツニッチを反映し、すべてのプラットフォームで利用可能で、成長しても機能します。短いほど良いです—覚えやすく、入力しやすくなります。' },
      { question: 'チャンネル名にニッチを含めるべきですか？', answer: '任意ですが役立ちます。「TechReviewer」のようなニッチを含む名前はコンテンツをすぐに伝えますが、「Marques Brownlee」のようなよりブランド化可能な名前は長期的に柔軟性を提供します。戦略と目標を考慮してください。' },
      { question: 'チャンネル名は検索可能性に影響しますか？', answer: 'はい、ある程度は。関連キーワードを含むチャンネル名は発見可能性を向上させることができますが、YouTubeのアルゴリズムは動画コンテンツと視聴者エンゲージメントをより重視します。名前よりも優れたコンテンツを優先してください。' },
      { question: 'チャンネル名を後で変更できますか？', answer: 'はい、YouTubeはチャンネル名の変更を許可しています。ただし、頻繁な変更はブランド認知度を損ない、視聴者を混乱させる可能性があります。長期的に使える名前を選んでください。' },
      { question: '本名をチャンネル名に使用すべきですか？', answer: 'パーソナルブランドを構築する場合は本名が効果的です。教育やエンターテインメントコンテンツではクリエイティブな名前の方が効果的かもしれません。目標と希望するポジショニングを考慮してください。' },
      { question: 'YouTubeチャンネル名の文字数制限は何ですか？', answer: 'YouTubeは最大100文字を許可しますが、短い名前が推奨されます。20文字以下を目指してください—覚えやすく、表示しやすく、よりブランド化可能です。' },
      { question: '希望の名前が利用できない場合はどうすればよいですか？', answer: '「TV」、「Official」、「Channel」などの接尾辞、または「The」などの接頭辞を追加してみてください。別の言葉遊びを探したり、説明を追加したりしてください。ただし、あまりにも複雑にすると記憶しにくくなります。' },
      { question: 'すべてのプラットフォームで同じ名前を使用すべきですか？', answer: '理想的にははい。一貫した名前はブランド認知度を強化し、クロスプラットフォームでのプロモーションを容易にします。可能であれば、ソーシャルメディアハンドルも確保してください。' },
      { question: 'チャンネル名に数字を使用すべきですか？', answer: '可能であれば避けてください。数字は覚えにくく、あまりプロフェッショナルに見えない可能性があります。意味のある数字（設立年など）は例外かもしれませんが、一般的には文字ベースの名前が推奨されます。' },
      { question: 'チャンネル名が商標侵害かどう確認するにはどうすればよいですか？', answer: '商標データベース（USPTOやJ-PlatPatなど）で検索し、既存のブランドとの類似性を確認してください。法的問題を避けるために、他の大きなブランドと類似した名前は避けてください。' },
    ],
  },

  'youtube-video-description-generator': {
    slug: 'youtube-video-description-generator',
    name: 'YouTube動画説明ジェネレーター',
    title: '無料AIYouTube動画説明ジェネレーター',
    description: 'YouTube動画用のSEO最適化された説明を生成。AIが視聴回数を増やしエンゲージメントを高める発見可能な説明を作成します。',
    metaDescription: 'YouTube動画用のSEO最適化された説明を生成。AIが視聴回数を増やしエンゲージメントを高める発見可能な説明を作成します。',
    inputLabel: '動画コンテンツを説明してください...',
    inputPlaceholder: '例：初心者向けメイクアップチュートリアル - 5分で自然なルック',
    buttonText: '説明を生成',
    maxLength: 2048,
    options: [
      { name: 'tone', label: 'トーン', choices: ['プロフェッショナル', 'フレンドリー', '熱心', 'エデュケーショナル'], default: 'フレンドリー', type: 'select' },
      { name: 'include_timestamps', label: 'タイムスタンプを含める', choices: ['はい', 'いいえ'], default: 'はい', type: 'radio' },
    ],
    systemPrompt: `You are an expert YouTube SEO specialist creating video descriptions that maximize discoverability and engagement.
## VIDEO DESCRIPTION STRUCTURE
- First 1-2 sentences (appear in search) - hook and keywords
- Full description with value proposition
- Timestamps (if requested)
- Links (suggested placement)
- Hashtags
Tone: {{tone}}
Include Timestamps: {{include_timestamps}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '動画SEO最適化', description: 'YouTuberはジェネレーターを使用して、検索とレコメンデーションの両方で動画発見可能性を向上させるキーワードリッチな説明を作成します。最適化された説明はYouTubeのアルゴリズムがコンテンツを理解し、関連する視聴者に推薦するのを助けます。' },
      { title: '視聴者エンゲージメントの向上', description: 'クリエイターはジェネレーターを使用して、タイムスタンプ、リンク、CTAを含む構造化された説明を作成し、視聴体験を向上させます。よく構造化された説明は視聴者がコンテンツをナビゲートし、追加リソースにアクセスするのを助けます。' },
      { title: '大規模な動画制作', description: '多くの動画を制作するクリエイターやチームは、一貫した品質を維持しながら時間を節約するためにジェネレーターを使用します。ツールは各動画のためにカスタマイズ可能な構造化テンプレートを提供します。' },
    ],
    faqs: [
      { question: 'YouTube動画説明には何を含めるべきですか？', answer: '含めるべき：冒頭で動画内容の要約とフック、関連キーワード、タイムスタンプ（長い動画の場合）、関連リンク、ソーシャルメディアへのリンク、登録のCTA、関連ハッシュタグ。' },
      { question: '動画説明はどのくらいの長さにすべきですか？', answer: 'YouTubeは最大5,000文字を許可します。ほとんどの効果的な説明は200-500語です。検索プレビューに表示される最初の1-2文を優先し、そこにキーワードとフックを入れてください。' },
      { question: '説明はSEOにどう影響しますか？', answer: '説明はYouTubeがコンテンツを理解し、適切な視聴者に推薦するのを助けます。関連キーワードを自然に含めることで、検索結果とレコメンデーションでの可視性が向上します。' },
      { question: 'タイムスタンプを含めるべきですか？', answer: 'はい、長い動画（5分以上）では推奨されます。タイムスタンプは視聴者がコンテンツをナビゲートするのを助け、Google検索結果でも表示される可能性があります。「0:00 イントロ」形式で追加してください。' },
      { question: '説明にどのくらいのキーワードを含めるべきですか？', answer: 'ターゲットキーワードを自然に3-5回含めてください。キーワードスタッフィングは避けてください—読みやすさと価値が優先です。主要キーワードは最初の1-2文に含めてください。' },
      { question: '説明でハッシュタグを使用すべきですか？', answer: 'はい、3-5個の関連ハッシュタグを説明の最後に含めてください。ハッシュタグはカテゴリ化と発見可能性を助けます。最初の3つはタイトルの上に表示されます。' },
      { question: '説明にリンクを含めるべきですか？', answer: 'はい、関連リンクを含めてください：他の動画やプレイリスト、ソーシャルメディア、ウェブサイト、提携製品（開示付き）。リンクは価値を追加し、視聴者を追加コンテンツに誘導します。' },
      { question: 'すべての動画で同じ説明テンプレートを使用できますか？', answer: 'テンプレートは一貫性を維持するのに役立ちますが、各動画に合わせてカスタマイズしてください。特に最初の数行は動画固有のコンテンツを反映すべきです。' },
      { question: '説明のCTAはどうすべきですか？', answer: '明確なCTAを含めてください：登録の招待、通知ベルのリマインダー、関連動画への誘導、コメントでの質問。CTAは具体的で実行しやすいものにしてください。' },
      { question: 'どのくらいの頻度で説明を更新すべきですか？', answer: '通常、公開後の変更は不要です。ただし、リンクが壊れた場合、情報が古くなった場合、またはSEO戦略が変わった場合は更新を検討してください。' },
    ],
  },

  'rewording-tool': {
    slug: 'rewording-tool',
    name: '言い換えツール',
    title: '無料AI言い換えツール',
    description: 'テキストを即座に言い換え、新鮮な表現で同じ意味を伝えます。AIが文章を改善しながら元のメッセージを保持します。',
    metaDescription: 'テキストを即座に言い換え、新鮮な表現で同じ意味を伝えます。AIが文章を改善しながら元のメッセージを保持します。',
    inputLabel: '言い換えるテキスト...',
    inputPlaceholder: '言い換えたいテキストを貼り付けてください...',
    buttonText: 'テキストを言い換え',
    maxLength: 4096,
    options: [
      { name: 'style', label: 'スタイル', choices: ['標準', 'フォーマル', 'カジュアル', 'シンプル', 'クリエイティブ'], default: '標準', type: 'select' },
      { name: 'intensity', label: '言い換えの強度', choices: ['ライト', 'ミディアム', 'ヘビー'], default: 'ミディアム', type: 'select' },
    ],
    systemPrompt: `You are an expert editor specializing in rewording text while preserving the original meaning and improving clarity.
## REWORDING PRINCIPLES
- Preserve exact meaning
- Improve readability when possible
- Adapt to requested style
- Maintain appropriate formality level
Style: {{style}}
Intensity: {{intensity}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '文章のバリエーション作成', description: 'ライターは同じコンテンツの異なる表現バージョンを必要とする場合にリワーディングツールを使用します。A/Bテスト、異なるオーディエンス向けの適応、または単に新鮮な表現を見つけるために活用できます。' },
      { title: '文章の明瞭さ向上', description: '複雑または冗長な文章を持つドキュメントを改善したいプロフェッショナルは、ツールを使用してより明確で簡潔な代替案を見つけます。これは技術文書やビジネス文書の読みやすさを向上させます。' },
      { title: 'トーンと形式の調整', description: '異なるコンテキスト（カジュアルからフォーマル、またはその逆）に合わせて既存のテキストを適応させたいユーザーは、ツールを使用して適切なスタイルでリワードします。' },
    ],
    faqs: [
      { question: '言い換えツールとは何ですか？', answer: '言い換えツールはテキストを異なる言葉で書き直しながら、元の意味を保持するAIツールです。文章のバリエーション作成、明瞭さの向上、異なるオーディエンス向けの適応に役立ちます。' },
      { question: '言い換えツールは無料ですか？', answer: 'はい、このツールは完全に無料で登録不要です。必要なだけテキストを言い換えることができます。' },
      { question: '言い換えは元の意味を変えますか？', answer: 'ツールは元の意味を正確に保持するように設計されています。アイデアの表現方法を変えますが、伝えるアイデア自体は変えません。' },
      { question: '異なる言い換えスタイルは何を意味しますか？', answer: '標準はバランスの取れた言い換え、フォーマルはよりプロフェッショナルなトーン、カジュアルはより会話的な言語、シンプルはより明確で理解しやすい言葉、クリエイティブはより独創的な表現を使用します。' },
      { question: 'ライト、ミディアム、ヘビーの強度の違いは何ですか？', answer: 'ライトは最小限の変更で元のテキストに近く保ちます。ミディアムはより大きな表現の変更を行います。ヘビーは大幅に異なる言い回しで同じ意味を伝えます。' },
      { question: '学術的な文章に使用できますか？', answer: 'ツールは文章改善の出発点として使用できますが、学術的な作業では自分自身の言葉で最終的な表現を確認し、引用の規則に従ってください。ツールを盗作回避のためだけに使用しないでください。' },
      { question: '長いテキストを言い換えることができますか？', answer: 'はい、ツールは長いテキストにも対応しますが、最良の結果を得るには、段落ごとまたはセクションごとに処理することをお勧めします。これにより、各部分の品質を確認しやすくなります。' },
      { question: '言い換えた結果をさらに編集すべきですか？', answer: '確認して必要に応じて調整することをお勧めします。ツールは良い出発点を提供しますが、特定のコンテキストや好みに合わせて微調整することで最良の結果が得られます。' },
      { question: '技術的またはニッチなトピックに対応できますか？', answer: 'はい、ツールはほとんどのトピックに対応しますが、非常に専門的な用語を使用するテキストでは、生成された言い換えが正確な専門用語を維持しているか確認してください。' },
      { question: '他の言語のテキストを言い換えることができますか？', answer: 'ツールは日本語テキストに最適化されています。他の言語でも機能する可能性がありますが、結果は日本語コンテンツで最も信頼性が高く自然に聞こえます。' },
    ],
  },

  'grammar-checker': {
    slug: 'grammar-checker',
    name: '文法チェッカー',
    title: '無料AI文法チェッカー',
    description: '文法、スペル、句読点のエラーを即座に検出して修正。AIがプロフェッショナルで洗練された文章を作成するのを支援します。',
    metaDescription: '文法、スペル、句読点のエラーを即座に検出して修正。AIがプロフェッショナルで洗練された文章を作成するのを支援します。',
    inputLabel: 'チェックするテキスト...',
    inputPlaceholder: '文法をチェックしたいテキストを貼り付けてください...',
    buttonText: '文法をチェック',
    maxLength: 4096,
    options: [
      { name: 'style', label: '文書スタイル', choices: ['一般', 'ビジネス/フォーマル', 'アカデミック', 'カジュアル'], default: '一般', type: 'select' },
      { name: 'feedback_detail', label: 'フィードバック詳細', choices: ['修正のみ', '修正+説明'], default: '修正+説明', type: 'select' },
    ],
    systemPrompt: `You are an expert editor and proofreader specializing in grammar, spelling, punctuation, and style correction.
## CHECKING AREAS
1. Grammar errors
2. Spelling mistakes
3. Punctuation issues
4. Subject-verb agreement
5. Tense consistency
6. Word choice improvements
Style: {{style}}
Feedback Detail: {{feedback_detail}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'プロフェッショナル文書の校正', description: 'ビジネスプロフェッショナルは文法チェッカーを使用して、メール、レポート、提案書、その他のビジネス文書が洗練されてエラーフリーであることを確認します。プロフェッショナルな文章は信頼性とコミュニケーションの明確さを高めます。' },
      { title: '学術的な文章の改善', description: '学生や研究者は文法チェッカーを使用して、論文、エッセイ、研究論文の文法とスタイルを改善します。正確な文法は学術的な信頼性と成績向上に貢献します。' },
      { title: 'コンテンツ制作の品質管理', description: 'ライター、ブロガー、コンテンツクリエイターは公開前に文章をチェックするためにツールを使用します。エラーのないコンテンツはプロフェッショナリズムを示し、読者の信頼を構築します。' },
    ],
    faqs: [
      { question: '文法チェッカーは何をチェックしますか？', answer: '文法チェッカーは文法エラー、スペルミス、句読点の問題、主語と動詞の一致、時制の一貫性、および文体の改善提案をチェックします。' },
      { question: '文法チェッカーは無料ですか？', answer: 'はい、このツールは完全に無料で登録不要です。必要なだけテキストをチェックできます。' },
      { question: 'すべての提案を受け入れるべきですか？', answer: 'すべての提案は確認してから受け入れることをお勧めします。文脈によっては、意図的な文体選択が「エラー」としてフラグ付けされることがあります。最終的な判断は常にあなたが行ってください。' },
      { question: '修正理由の説明は役立ちますか？', answer: 'はい、「修正+説明」オプションを選択すると、各修正の理由が説明されます。これは文法ルールを学び、将来同じミスを避けるのに役立ちます。' },
      { question: '異なる文書スタイルオプションの違いは何ですか？', answer: '一般は日常的な文章に適しています。ビジネス/フォーマルはよりプロフェッショナルなトーンを期待します。アカデミックは学術的な慣習に従います。カジュアルはより寛容で会話的なスタイルを許容します。' },
      { question: '長いドキュメントをチェックできますか？', answer: 'はい、ツールは長いテキストにも対応しますが、最良の結果を得るには、セクションごとにチェックすることをお勧めします。これにより、各部分の修正を注意深く確認できます。' },
      { question: 'ツールは文章スタイルも改善しますか？', answer: 'はい、文法とスペルの修正に加えて、より明確で簡潔な表現の提案も行います。ただし、主な焦点は正確性であり、スタイルの変更はオプションです。' },
      { question: '専門用語を含むテキストに対応できますか？', answer: 'ツールはほとんどの専門用語を認識しますが、非常に専門的な用語や業界固有の略語は認識されない場合があります。これらは手動で確認してください。' },
      { question: '他の言語のテキストをチェックできますか？', answer: 'ツールは主に日本語と英語に最適化されています。他の言語でも機能する可能性がありますが、結果の正確性は異なる場合があります。' },
      { question: 'チェック結果をどのように活用すべきですか？', answer: '各提案を確認し、文脈に適したものを受け入れてください。説明を読んで学習し、将来の文章で同様のエラーを避けるようにしてください。ツールは補助であり、最終的な編集判断はあなたが行ってください。' },
    ],
  },

  'plagiarism-checker': {
    slug: 'plagiarism-checker',
    name: '盗作チェッカー',
    title: '無料AI盗作チェッカー',
    description: 'コンテンツの盗作と類似性をチェック。AIがテキストのオリジナリティを分析し、潜在的な問題を特定します。',
    metaDescription: 'コンテンツの盗作と類似性をチェック。AIがテキストのオリジナリティを分析し、潜在的な問題を特定します。',
    inputLabel: 'チェックするテキスト...',
    inputPlaceholder: 'オリジナリティをチェックしたいテキストを貼り付けてください...',
    buttonText: '盗作をチェック',
    maxLength: 4096,
    options: [
      { name: 'check_depth', label: 'チェックの深さ', choices: ['クイックスキャン', '標準チェック', '詳細分析'], default: '標準チェック', type: 'select' },
    ],
    systemPrompt: `You are an expert in content originality analysis, helping users understand potential plagiarism or similarity concerns in their text.
## ANALYSIS APPROACH
- Identify potentially non-original phrases
- Highlight common expressions vs unique content
- Provide originality assessment
- Suggest improvements for uniqueness
Check Depth: {{check_depth}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '学術的誠実性の確認', description: '学生や研究者は論文やエッセイを提出前にチェックして、意図しない盗作がないことを確認します。これはアカデミックな誠実性を維持し、適切な引用を確保するのに役立ちます。' },
      { title: 'コンテンツオリジナリティの検証', description: 'ライターやコンテンツマーケターは公開前にコンテンツをチェックして、オリジナルで価値があることを確認します。これはSEOペナルティを避け、ブランドの信頼性を維持するのに役立ちます。' },
      { title: '外注コンテンツの品質管理', description: 'フリーランスライターや代理店からコンテンツを受け取る企業は、支払う前にオリジナリティを確認できます。これは品質基準を維持し、盗作されたコンテンツの公開を防ぎます。' },
    ],
    faqs: [
      { question: '盗作チェッカーはどのように機能しますか？', answer: 'チェッカーはテキストを分析し、一般的なフレーズ、潜在的に借用されたコンテンツ、およびオリジナルと思われる部分を識別します。完全なインターネットスキャンではありませんが、テキストの一般的なオリジナリティを評価するのに役立ちます。' },
      { question: 'このツールは無料ですか？', answer: 'はい、このツールは完全に無料で登録不要です。必要なだけテキストをチェックできます。' },
      { question: 'このチェッカーは100%正確ですか？', answer: 'どの盗作チェッカーも100%正確ではありません。このツールはオリジナリティの評価と潜在的な懸念領域の特定に役立ちますが、決定的な盗作判定ではなく、ガイダンスとして使用してください。' },
      { question: 'クイックスキャンと詳細分析の違いは何ですか？', answer: 'クイックスキャンは速い概要を提供します。標準チェックはより徹底的な分析を行います。詳細分析は最も包括的で、文章レベルの評価と具体的な改善提案を含みます。' },
      { question: '「オリジナル」と判断されたテキストは安全ですか？', answer: 'ツールがオリジナルと評価しても、適切な引用と参照の慣行に従う必要があります。ツールはガイダンスを提供しますが、学術的または法的な盗作判定の代替にはなりません。' },
      { question: '類似性が高いと判断された場合はどうすればよいですか？', answer: 'フラグが立てられた部分を確認し、独自の言葉で書き直すか、適切な引用を追加してください。一般的なフレーズや業界標準の表現は、意図的な盗作なしに類似性を示すことがあります。' },
      { question: '技術的または専門的なコンテンツに対応できますか？', answer: 'はい、ただし専門分野には標準的な用語や表現があり、これらは盗作ではなく分野の慣習として類似性が示される場合があります。文脈を考慮して結果を解釈してください。' },
      { question: '引用を含むテキストをチェックできますか？', answer: 'はい。適切に引用されたテキストは、引用として認識されるべきです。ツールは引用された部分と自分の言葉の部分を区別するのに役立ちますが、引用形式が正しいか手動で確認してください。' },
      { question: '結果はどのくらい信頼できますか？', answer: 'ツールは参考として使用してください。学術的な提出物の場合は、機関が推奨する公式のチェッカーも使用することをお勧めします。このツールは初期スクリーニングと改善のためのガイダンスとして最も価値があります。' },
      { question: '提出されたテキストは保存されますか？', answer: 'いいえ、チェックされたテキストはリアルタイムで処理され、保存されません。プライバシーは保護されています。' },
    ],
  },

  'blog-post-ideas-generator': {
    slug: 'blog-post-ideas-generator',
    name: 'ブログ投稿アイデアジェネレーター',
    title: '無料AIブログ投稿アイデアジェネレーター',
    description: 'あなたのニッチ向けのクリエイティブなブログ投稿アイデアを生成。AIがトラフィックを促進しオーディエンスを引きつけるトピックを見つけます。',
    metaDescription: 'あなたのニッチ向けのクリエイティブなブログ投稿アイデアを生成。AIがトラフィックを促進しオーディエンスを引きつけるトピックを見つけます。',
    inputLabel: 'ニッチまたはトピック...',
    inputPlaceholder: '例：中小企業オーナー向けのサステナブルファッション',
    buttonText: 'アイデアを生成',
    maxLength: 2048,
    options: [
      { name: 'number', label: 'アイデア数', choices: ['5アイデア', '10アイデア', '20アイデア'], default: '10アイデア', type: 'select' },
      { name: 'type', label: 'コンテンツタイプ', choices: ['ミックス', 'ハウツー/チュートリアル', 'リスティクル', '意見/分析', 'ケーススタディ', 'ニュース/トレンド'], default: 'ミックス', type: 'select' },
    ],
    systemPrompt: `You are an expert content strategist specializing in generating blog post ideas that drive traffic and engage audiences.
## IDEA GENERATION APPROACH
- Focus on search-worthy topics
- Consider audience pain points
- Include trending and evergreen topics
- Provide specific, actionable angles
Number: {{number}}
Type: {{type}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'コンテンツカレンダー計画', description: 'コンテンツマーケターやブロガーはブログ投稿アイデアジェネレーターを使用して、コンテンツカレンダーを埋めるトピックのリストを作成します。これにより、一貫した投稿スケジュールを維持しながら、読者に価値を提供するトピックを確保できます。' },
      { title: 'ライターズブロックの克服', description: '何を書くべきかわからないブロガーは、ジェネレーターを使用して新鮮なアイデアとインスピレーションを得ます。ニッチを入力するだけで、すぐに開始できる具体的なトピックが得られます。' },
      { title: 'SEO重視のコンテンツ開発', description: 'オーガニックトラフィックを増やしたいマーケターは、ジェネレーターを使用して検索価値の高いトピックを見つけます。ツールはオーディエンスが積極的に検索している問題やニーズに対応するトピックを提案します。' },
    ],
    faqs: [
      { question: 'ブログ投稿アイデアジェネレーターとは何ですか？', answer: 'ブログ投稿アイデアジェネレーターはあなたのニッチに基づいて具体的なブログトピックを提案するAIツールです。単純なトピックリストではなく、具体的な角度とアプローチを含む完全なブログ投稿コンセプトを提供します。' },
      { question: 'このツールは無料ですか？', answer: 'はい、このツールは完全に無料で登録不要です。必要なだけアイデアを生成できます。' },
      { question: 'より具体的なアイデアを得るにはどうすればよいですか？', answer: 'より詳細な入力がより的を絞ったアイデアを生み出します。「マーケティング」と入力する代わりに、「中小企業向けのソーシャルメディアマーケティング」のように具体化してください。ターゲットオーディエンスや目標についての情報も含めてください。' },
      { question: '生成されたすべてのアイデアを使用すべきですか？', answer: 'いいえ、生成されたアイデアはキュレーションするメニューとして扱ってください。各アイデアをオーディエンス、リソース、戦略的優先事項に対して評価し、最も適したものを選択してください。' },
      { question: '異なるコンテンツタイプオプションは何を意味しますか？', answer: 'ミックスは様々なタイプのアイデアを提供します。ハウツーは実用的なガイドです。リスティクルはリスト形式の記事です。意見/分析は観点を共有します。ケーススタディは具体例を分析します。ニュース/トレンドはタイムリーなトピックをカバーします。' },
      { question: 'これらのアイデアはSEOに適していますか？', answer: 'ジェネレーターは検索価値を考慮してアイデアを生成しますが、実際のキーワードリサーチを行ってトピックの検索ボリュームと競争を確認することをお勧めします。アイデアは出発点として使用し、SEOデータで裏付けてください。' },
      { question: 'ニッチまたは専門的なトピックのアイデアを生成できますか？', answer: 'はい、ジェネレーターは高度に専門的または技術的な分野を含む、すべてのニッチに対応します。専門的なトピックで最良の結果を得るには、オーディエンスの専門知識レベルについてのコンテキストを提供してください。' },
      { question: '生成されたアイデアはオリジナルですか？', answer: 'アイデアはあなたの入力に基づいてユニークに生成されますが、トピック自体は他のブロガーがカバーしている可能性があります。差別化は同じトピックに対するあなた独自のアプローチと視点から来ます。' },
      { question: 'どのアイデアを最初に追求すべきかどう選びますか？', answer: '目標に基づいて優先順位を付けてください：トラフィックが必要ならSEO価値の高いトピック、エンゲージメントが必要なら議論を促すトピック、コンバージョンが必要なら製品/サービスに関連するトピックを選択してください。' },
      { question: 'どのくらいの頻度で新しいアイデアを生成すべきですか？', answer: 'ほとんどのブロガーは月次または四半期ごとのアイデア生成セッションから恩恵を受けます。ただし、ツールはトレンドトピックやリアクティブなコンテンツにも価値があり、必要に応じて新しいアイデアを素早く生成できます。' },
    ],
  },

  // ==================== BATCH 5: Tools 40-46 ====================

  'emoji-translator': {
    slug: 'emoji-translator',
    name: '絵文字翻訳',
    title: '無料AI絵文字翻訳ツール',
    description: 'テキストを表現豊かな絵文字に翻訳したり、絵文字メッセージを解読します。',
    metaDescription: 'テキストを表現豊かな絵文字に翻訳したり、絵文字メッセージを解読します。ソーシャルメディア、メッセージング、楽しいコミュニケーションに最適です。無料でご利用いただけます。',
    inputLabel: 'テキストまたは絵文字...',
    inputPlaceholder: '例：「週末が楽しみ！」または解読する絵文字を貼り付け',
    buttonText: '翻訳する',
    maxLength: 1024,
    options: [
      { name: 'direction', label: '翻訳方向', choices: ['テキストから絵文字へ', '絵文字からテキストへ'], default: 'テキストから絵文字へ', type: 'radio' },
      { name: 'style', label: '絵文字スタイル', choices: ['完全置換', '絵文字付きテキスト', 'キーコンセプトのみ'], default: '絵文字付きテキスト', type: 'select' },
    ],
    systemPrompt: `You are an expert at translating between text and emojis.
## CORE RULES
- Match emojis to the meaning and emotion of the text
- Use commonly understood emojis
- Maintain the tone and sentiment
- Don't overuse emojis—select the most impactful ones
## TRANSLATION MODES
### IF DIRECTION = "Text to Emojis"
#### IF STYLE = "Full replacement" - Replace entire message with emojis only
#### IF STYLE = "Text with emojis" - Add emojis to enhance text (2-4 per sentence max)
#### IF STYLE = "Key concepts only" - Translate only main nouns/verbs/emotions
### IF DIRECTION = "Emojis to Text"
- Interpret the emoji sequence
- Provide most likely meaning
- Note alternative interpretations if ambiguous
## EMOJI SELECTION
- Happy: 😊 😄 🎉 ✨ ❤️
- Sad: 😢 😞 💔
- Excited: 🎉 🔥 🚀
- Love: ❤️ 💕 😍
- Success: 🏆 ⭐ 🎯 ✅
## OUTPUT FORMAT
Direction: {{direction}}
Style: {{style}}
Provide the translation with explanation of key emojis used.

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'ソーシャルメディアとメッセージングの強化', description: 'テキスト、ツイート、ソーシャル投稿に個性を加えたいユーザーは、メッセージを絵文字強化バージョンに翻訳できます。このツールはトーンと感情を伝える完璧な絵文字を見つけるのに役立ち、デジタルコミュニケーションをより表現豊かで魅力的にします。' },
      { title: '絵文字の解釈と理解', description: '混乱する絵文字の連続を受け取ったとき、翻訳ツールが可能性の高い意味を解読するのに役立ちます。これは世代間の絵文字使用、プラットフォーム固有の意味、またはクリエイティブな絵文字の組み合わせを理解するのに特に役立ちます。' },
      { title: 'コンテンツ作成とマーケティング', description: 'ソーシャルメディアマネージャーやコンテンツクリエイターは、投稿を目立たせるクリエイティブな絵文字の組み合わせを見つけることができます。このツールはブランドメッセージをInstagramやTwitterなどのビジュアルプラットフォームでうまく機能する絵文字フレンドリーな形式に翻訳するのに役立ちます。' },
    ],
    faqs: [
      { question: '絵文字翻訳はどのように機能しますか？', answer: 'テキストから絵文字への翻訳では、ツールはメッセージの意味と感情を分析し、それらの概念を表す絵文字を選択します。絵文字からテキストへの翻訳では、一般的な意味を解釈し、可能性の高い翻訳を提供します。' },
      { question: '絵文字翻訳は無料ですか？', answer: 'はい、完全に無料で登録不要です。お好きなだけ翻訳できます。' },
      { question: '私の絵文字翻訳は誰にでも理解されますか？', answer: 'ツールは一般的に理解される絵文字を使用しますが、絵文字の解釈は年齢、文化、プラットフォームによって異なる場合があります。複数の一般的な意味を持つ絵文字にはフラグを付けます。' },
      { question: '絵文字をテキストに翻訳し直すことはできますか？', answer: 'はい、絵文字シーケンスを貼り付けると、ツールは絵文字の意味する可能性の高い解釈を提供し、曖昧な組み合わせには代替の読み方も含めます。' },
      { question: 'なぜ一部の絵文字は異なる意味を持つのですか？', answer: '絵文字の意味はインターネット文化を通じて進化し、世代、コミュニティ、プラットフォームによって異なる場合があります。単一の絵文字には文字通りの意味に加えてスラングや皮肉な使い方がある場合があります。ツールはこれらのバリエーションに注意を促します。' },
      { question: 'すべてのテキストを絵文字に置き換えるべきですか、それとも少し追加するだけですか？', answer: '状況によります。カジュアルなメッセージでは、完全な絵文字置換が楽しいかもしれません。ほとんどのコミュニケーションでは、テキストを強化するためにいくつかの戦略的な絵文字を追加する方が効果的で明確です。' },
      { question: '絵文字はすべてのデバイスで同じように見えますか？', answer: 'いいえ、絵文字のデザインはプラットフォーム（Apple、Google、Samsungなど）によって異なります。意味は似ていますが、視覚的な外観は異なります。明確で普遍的な意味を持つ絵文字の使用をお勧めします。' },
      { question: 'どのくらいの絵文字を使用すべきですか？', answer: '少ない方が良い場合が多いです。よく選ばれた少数の絵文字は、アイコンの壁よりも影響力があります。ツールはメッセージの長さと状況に基づいて適切な量を推奨します。' },
      { question: 'これは絵文字SEOに役立ちますか？', answer: '絵文字は検索結果に表示でき、ソーシャル投稿のクリック率を向上させる可能性があります。ツールはトピックに関連する絵文字を識別し、可視性を高めるのに役立ちます。' },
      { question: '避けるべき絵文字はありますか？', answer: '一部の絵文字は、特に若いユーザーの間で、文字通りの外観とは異なる意味を獲得しています。ツールは関連する場合に誤解される可能性のある絵文字にフラグを付けます。' },
    ],
  },

  'brand-name-generator': {
    slug: 'brand-name-generator',
    name: 'ブランド名ジェネレーター',
    title: '無料AIブランド名ジェネレーター',
    description: 'ユニークで記憶に残るブランド名を即座に生成します。私たちのAIはビジネスアイデンティティのための戦略的な意味を持つ独特な名前を作成します。',
    metaDescription: 'ユニークで記憶に残るブランド名を即座に生成します。私たちのAIはビジネスアイデンティティのための戦略的な意味を持つ独特な名前を作成します。',
    inputLabel: 'ブランドを説明してください...',
    inputPlaceholder: '例：エコ意識の高いミレニアル世代をターゲットにしたサステナブルファッションブランド',
    buttonText: '名前を生成',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: '名前の数', choices: ['3つの名前', '5つの名前', '10の名前'], default: '5つの名前', type: 'select' },
      { name: 'tone', label: 'ブランドトーン', choices: ['フォーマル/プロフェッショナル', 'カジュアル/フレンドリー', '革新的/テック', 'ラグジュアリー/プレミアム'], default: 'フォーマル/プロフェッショナル', type: 'select' },
      { name: 'explain_meaning', label: '意味を説明', choices: ['はい', 'いいえ'], default: 'はい', type: 'radio' },
    ],
    systemPrompt: `You are an expert brand strategist and naming specialist who creates memorable, distinctive brand names that resonate with target audiences and support long-term business success. Your names are not random word combinations—they are strategic assets designed for trademark viability, memorability, and market positioning.
## CORE NAMING PRINCIPLES
1. **Memorability**: Names must be easy to remember, spell, and pronounce
2. **Distinctiveness**: Names must stand out from competitors and avoid generic descriptors
3. **Scalability**: Names should allow for business evolution and expansion
4. **Domain/Trademark Viability**: Consider practical availability factors
5. **Emotional Resonance**: Names should evoke appropriate feelings and associations
## BRAND NAME CATEGORIES
### Invented/Coined Names
Created words that have no prior meaning.
- **Approach**: Combine morphemes, blend words, or create entirely new phonetic combinations
- **Strengths**: Highly distinctive, easier to trademark, no baggage
- **Examples**: Kodak, Xerox, Spotify, Häagen-Dazs
- **Best for**: Tech companies, innovative products, global brands
### Descriptive Names
Names that directly describe what the business does.
- **Approach**: Use clear, functional language
- **Strengths**: Immediate clarity, low marketing cost to explain
- **Weaknesses**: Harder to trademark, less distinctive
- **Examples**: General Motors, PayPal, Whole Foods
- **Best for**: Service businesses, B2B companies, startups needing quick clarity
### Evocative/Suggestive Names
Names that suggest qualities or experiences without being literal.
- **Approach**: Use metaphor, allusion, or abstract concepts
- **Strengths**: Memorable, emotional, flexible for expansion
- **Examples**: Amazon, Apple, Nike, Virgin
- **Best for**: Consumer brands, lifestyle companies, brands seeking emotional connection
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: 'スタートアップと新規事業のネーミング', description: '創業者や起業家は、ビジネス形成の重要な初期段階でブランド名ジェネレーターを使用します。強力なブランド名は新規事業が行う最も重要な決定の一つであり、商標登録から顧客の認識、ドメインの利用可能性まですべてに影響します。ツールは複数のネーミングスタイル（造語、喚起的、複合）にわたる戦略的に健全なオプションを生成し、通常は高価なブランディングエージェンシーのコンサルテーションが必要なキュレーションされた出発点を創業者に提供します。' },
      { title: '製品ラインとサブブランドの開発', description: '新しい製品ライン、サブブランド、またはスピンオフベンチャーを立ち上げる確立された企業は、既存のブランドアーキテクチャを補完する名前を作成するためにジェネレーターを使用します。プレミアムティア（Toyota → Lexus を考えてください）、カジュアルな拡張（Gap → Old Navy を考えてください）、または完全に異なるサブブランドを開発する場合でも、ツールは独立しながらもより広いブランドファミリー戦略に適合するオプションを生成します。' },
      { title: 'リブランディングとブランドリフレッシュの取り組み', description: '戦略的なピボット、合併、または評判のリセットを行っている企業は、新しいネーミングの方向性を探るためにジェネレーターを使用します。ビジネスが元の名前を超えて成長した場合、否定的な関連から距離を置く必要がある場合、または新しい章を示したい場合、ツールは複数のネーミングカテゴリにわたる新鮮な視点を提供し、チームが現在のアイデンティティの精神的制約を超えるのを助けます。' },
    ],
    faqs: [
      { question: 'ブランド名ジェネレーターとは何ですか？', answer: 'ブランド名ジェネレーターは、あなたの説明、業界、希望するポジショニングに基づいて潜在的なビジネスおよびブランド名を作成するAIツールです。ランダムな単語の組み合わせとは異なり、洗練されたブランド名ジェネレーターは、記憶性、商標の実行可能性、音声的魅力、市場ポジショニングなどの要素を考慮したネーミング戦略の原則を適用します。' },
      { question: 'より良いブランド名の提案を得るにはどうすればよいですか？', answer: 'より多くのコンテキストを提供するほど、より良い結果が得られます。「テック企業」の代わりに、「小規模法律事務所がクライアントインテイクを自動化するのを支援するB2B SaaSプラットフォーム、米国市場の個人開業者や小規模パートナーシップをターゲット」と説明してください。' },
      { question: 'これらのブランド名は商標登録できますか？', answer: '生成された名前は独立した検証が必要な提案です。名前を確定する前に、USPTO（米国）、EUIPO（ヨーロッパ）、または関連する国内データベースで商標検索を行い、ドメインの利用可能性を確認し、ソーシャルメディアハンドルを検索し、理想的には商標弁護士に相談してください。' },
      { question: '良いブランド名とは何ですか？', answer: '強力なブランド名にはいくつかの特徴があります：記憶に残る（一度の露出で簡単に思い出せる）、独特（競合他社から際立つ）、発音しやすい（ターゲット市場で機能する）、綴りやすい（オンラインで見つけられる）、拡張可能（ビジネスの進化を可能にする）、そして意味がある（ブランドについて何かを伝える）。' },
      { question: 'ブランド名は私がすることを説明すべきですか？', answer: '必ずしもそうではありません—そして多くの場合、いいえです。説明的な名前（「General Electric」や「Toys R Us」など）は即座の明確さを提供しますが、商標登録が難しく、拡張を制限する可能性があります。世界で最も価値のあるブランドは、多くの場合、喚起的または造語の名前を使用しています：Apple、Amazon、Nike、Google。' },
      { question: '造語/創作名はどのように機能しますか？', answer: '造語名（Kodak、Xerox、Spotifyなど）は、事前に辞書に意味のない作成された単語です。言語学的原則を使用して構築されます—心地よい音素を組み合わせ、馴染みのある単語パターンを使用し、または意味のある形態素を混合します。' },
      { question: '名前を選ぶ前にドメインの利用可能性を確認すべきですか？', answer: 'はい—ドメインの利用可能性は現代のブランドにとって実用的な考慮事項です。ただし、ドメインの利用可能性だけをフィルターにしないでください。多くの成功したブランドはバリエーション（.co、.io、「get」や「try」プレフィックスの追加）や代替拡張子を使用しています。' },
      { question: '決定する前にいくつのブランド名を生成すべきですか？', answer: 'パターンと可能性を見るのに十分な数を生成してください—通常、複数のバッチにわたって15〜30のオプション。初期生成後、5〜10のお気に入りに絞り込み、ターゲットオーディエンス、パートナー、または信頼できるアドバイザーでテストしてください。' },
      { question: 'ジェネレーターはどの業界でも名前を作成できますか？', answer: 'はい、ジェネレーターはあらゆる業界に適応します—テクノロジーや金融から食品やファッション、専門サービスやクリエイティブベンチャーまで。業界のネーミング慣習と、適合したいのか際立ちたいのかについてコンテキストを提供してください。' },
      { question: 'ブランド名を生成した後は何をすべきですか？', answer: '有望な候補を特定した後：（1）ターゲット市場で商標検索を実施、（2）ドメインの利用可能性とソーシャルメディアハンドルを確認、（3）名前に馴染みのない人々との発音テスト、（4）国際的に事業を行う場合は他の言語で名前を調査、（5）ターゲット顧客やフォーカスグループからフィードバックを得る、（6）最終選択については商標弁護士と協力することを検討してください。' },
    ],
  },

  'business-name-generator': {
    slug: 'business-name-generator',
    name: 'ビジネス名ジェネレーター',
    title: '無料AIビジネス名ジェネレーター',
    description: '実世界で機能するクリエイティブなビジネス名を生成します。私たちのAIはあらゆる業界向けにプロフェッショナルで記憶に残る名前を作成します。',
    metaDescription: '実世界で機能するクリエイティブなビジネス名を生成します。私たちのAIはあらゆる業界向けにプロフェッショナルで記憶に残る名前を作成します。',
    inputLabel: 'ビジネスを説明してください...',
    inputPlaceholder: '例：デンバー都市圏にサービスを提供する地元の配管会社',
    buttonText: '名前を生成',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: '名前の数', choices: ['3つの名前', '5つの名前', '10の名前'], default: '5つの名前', type: 'select' },
      { name: 'tone', label: 'ビジネストーン', choices: ['フォーマル/コーポレート', 'カジュアル/フレンドリー', '革新的/モダン'], default: 'フォーマル/コーポレート', type: 'select' },
      { name: 'explain_meaning', label: '意味を説明', choices: ['はい', 'いいえ'], default: 'はい', type: 'radio' },
    ],
    systemPrompt: `You are an expert business naming consultant who creates practical, memorable business names that work in the real world. Your names balance creativity with commercial viability—they need to be distinctive enough to stand out, but practical enough to work on signage, in conversation, and across digital platforms.
## CORE BUSINESS NAMING PRINCIPLES
1. **Commercial Viability**: Names must work in actual business contexts (signage, invoices, phone calls)
2. **Industry Appropriateness**: Names should fit industry expectations while allowing differentiation
3. **Local vs. Scale Considerations**: Names should match the business's geographic ambitions
4. **Practical Memorability**: Easy to remember, spell, and share via word-of-mouth
5. **Longevity**: Names should remain relevant as the business evolves
## BUSINESS NAME CATEGORIES
### Functional/Descriptive Names
Names that clearly indicate the business type or offering.
- **Examples**: "Portland Plumbing," "Quick Print Solutions," "Family Dental Care"
- **Best for**: Local service businesses, B2B companies, professional services
- **Pros**: Immediate clarity, SEO benefits for local search
- **Cons**: Less distinctive, harder to trademark
### Founder/Personal Names
Names incorporating the owner's name or a meaningful personal element.
- **Examples**: "Johnson & Associates," "Maria's Kitchen," "The Thompson Group"
- **Best for**: Professional services, restaurants, family businesses, consultancies
- **Pros**: Personal trust, legacy potential, built-in story
- **Cons**: Succession challenges, personal liability perception
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '新規事業登録とLLC設立', description: 'ビジネス設立プロセスにある起業家は、州当局に登録する前に名前を見つけるためにビジネス名ジェネレーターを使用します。ビジネス名の利用可能性は州や登録タイプ（LLC、株式会社、DBA）によって異なるため、複数の強力なオプションを持つことが不可欠です。ツールは異なるスタイルにわたる名前を生成し、最初の選択がすでに登録されている場合のバックアップオプションを創業者に提供します。' },
      { title: 'フランチャイズと複数拠点ビジネスのネーミング', description: 'フランチャイズまたは複数の拠点を通じて拡大を計画しているビジネスオーナーは、市場全体で機能する名前を見つけるためにジェネレーターを使用します。拡張可能なビジネスの名前は、地理的な制限を避け、地域間でうまく翻訳され、一貫したブランディングのために十分にシンプルである必要があります。ツールはこれらの要素を考慮し、成長を制約するのではなくサポートする名前を生成します。' },
      { title: '既存ビジネスのピボットまたはリブランディング', description: '戦略的な変更—新しい所有権、サービスの拡大、リポジショニング—を行っている確立されたビジネスは、リブランディングオプションを探るためにジェネレーターを使用します。ビジネスが元の名前を超えて成長した場合、または市場に変化を示す必要がある場合、新鮮なネーミングの視点がチームがレガシーの制約から解放され、ビジネスに最も役立つ名前を検討するのに役立ちます。' },
    ],
    faqs: [
      { question: 'ブランド名とビジネス名の違いは何ですか？', answer: 'ビジネス名は法的エンティティ名です—登録、税務書類、契約に表示されるもの（例：「Smith Consulting LLC」）。ブランド名は顧客があなたを知る方法です—ビジネス名と同じ場合もあれば、異なる場合もあります（doing business as/DBA）。多くのビジネスは法的名前とは異なるブランド名で運営しています。' },
      { question: 'ビジネス名は私がすることを説明すべきですか？', answer: 'ビジネスモデルと目標によります。説明的な名前（「Apex Plumbing」、「Downtown Dental」）は即座の明確さを提供し、ローカルSEOに役立ちますが、独自性が低く、商標登録が難しいです。地元のサービスビジネスには説明的な要素が理にかなっていることが多いです。拡大を計画しているビジネスや強力なブランド差別化を望むビジネスには、より抽象的な名前がより良く機能する場合があります。' },
      { question: 'ビジネス名が利用可能かどうかをどう確認しますか？', answer: '複数のレベルを確認してください：（1）州の州務長官データベースで既存の登録を検索、（2）USPTO商標データベースを検索、（3）ドメインの利用可能性を確認、（4）Googleで誰が類似の名前を使用しているか検索、（5）ソーシャルメディアプラットフォームを確認。ビジネス名の利用可能性は州やエンティティタイプによって異なります。' },
      { question: 'ビジネス名に場所を含めるべきですか？', answer: '場所を含めることでローカルアイデンティティを強化し、ローカルSEOに役立ちます（「Austin Home Services」）が、拡大する場合に認識される範囲を制限する可能性があります。長期的な計画を考慮してください。1つの都市圏にサービスを提供する配管工は場所を含めることで恩恵を受けるかもしれませんが、全国的に働くコンサルタントはそうではないかもしれません。' },
      { question: '一致するドメイン名を持つことはどれほど重要ですか？', answer: '重要ですが、必須ではありません。完全一致の.comドメインは信頼性と見つけやすさに価値がありますが、多くの成功したビジネスは代替手段を使用しています：異なる拡張子（.co、.io）、プレフィックス（getcompanyname.com、trycompanyname.com）、またはわずかなバリエーション。候補のドメイン利用可能性を確認しますが、ドメインの希少性だけで強力な名前を排除しないでください。' },
      { question: '自分の名前をビジネスに使用できますか？', answer: 'はい—個人名は古典的なアプローチであり、特にプロフェッショナルサービス（法律、会計、コンサルティング）、クリエイティブビジネス、レストランに適しています。考慮してください：ビジネスを個人のアイデンティティに結び付けたいですか？売却したりパートナーを迎えたりした場合はどうなりますか？名前を使用することで個人的な信頼が築かれますが、継承の課題が生じます。' },
      { question: 'ビジネス名を記憶に残るものにするものは何ですか？', answer: '記憶に残る名前は通常：短い（1〜3語）、発音しやすい、綴りやすい、音声的に心地よい、そして何らかの意味やフックを持っています。頭韻（PayPal）、珍しい組み合わせ（Red Bull）、または巧みな言葉遊びを持つ名前は記憶に残りやすいです。背景に溶け込む一般的な組み合わせ（「Premium Quality Solutions」）を避けてください。' },
      { question: 'コミットする前にビジネス名をどうテストしますか？', answer: 'テスト方法：（1）さまざまな状況で声に出して言う（電話、自己紹介）、（2）他の人に聞いた後に綴ってもらう、（3）ロゴのモックアップでどう見えるか確認、（4）関連付けられる可能性のあるものを検索、（5）ターゲット顧客に第一印象を聞く、（6）名刺、看板、請求書に想像する。決定する前に数日間トップの選択肢と過ごしてください。' },
      { question: '競合他社に似た名前は避けるべきですか？', answer: '一般的にはい。類似の名前は混乱を招き、商標問題を引き起こす可能性があり、差別化を難しくします。ただし、一部の業界にはネーミング慣習があります（法律事務所はパートナー名を使用することが多く、歯科医院は「dental」を含むことが多い）。業界の規範に適合しながらも記憶に残るほど際立つバランスを取ってください。' },
      { question: '後でビジネス名を変更したい場合はどうなりますか？', answer: 'ビジネス名を変更できますが、コストがかかります：再登録料、新しいマーケティング資料、潜在的に新しいドメインと看板、顧客の再教育。すぐに超えてしまう名前ではなく、成長できる名前から始めてください。とは言え、リブランディングは一般的であり、前向きな進化を示すことができます—多くの成功した企業は拡大するにつれて名前を変更しています。' },
    ],
  },

  'product-name-generator': {
    slug: 'product-name-generator',
    name: '製品名ジェネレーター',
    title: '無料AI製品名ジェネレーター',
    description: '売れるクリエイティブな製品名を生成します。私たちのAIは棚で際立ち、顧客の心に残る記憶に残る、市場対応の名前を作成します。',
    metaDescription: '売れるクリエイティブな製品名を生成します。私たちのAIは棚で際立ち、顧客の心に残る記憶に残る、市場対応の名前を作成します。',
    inputLabel: '製品を説明してください...',
    inputPlaceholder: '例：フィットネス愛好家向けのプラントベースプロテインパウダー',
    buttonText: '名前を生成',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: '名前の数', choices: ['3つの名前', '5つの名前', '10の名前'], default: '5つの名前', type: 'select' },
      { name: 'tone', label: '製品トーン', choices: ['プレミアム/ラグジュアリー', '楽しい/遊び心', 'プロフェッショナル/テクニカル', '自然/オーガニック'], default: 'プレミアム/ラグジュアリー', type: 'select' },
      { name: 'explain_meaning', label: '意味を説明', choices: ['はい', 'いいえ'], default: 'はい', type: 'radio' },
    ],
    systemPrompt: `You are an expert product naming strategist who creates compelling product names that drive recognition, recall, and purchase decisions. Your names are designed to work on packaging, in advertising, and in customer conversations—supporting both immediate appeal and long-term brand building.
## CORE PRODUCT NAMING PRINCIPLES
1. **Shelf Impact**: Names must stand out in crowded retail or digital environments
2. **Benefit Suggestion**: Names should hint at what the product delivers
3. **Target Audience Fit**: Names must resonate with specific buyer demographics
4. **Verbal Shareability**: Names should spread naturally through word-of-mouth
5. **Brand Architecture**: Names should work within existing brand portfolios
## PRODUCT NAME CATEGORIES
### Descriptive Product Names
Names that directly describe the product or its function.
- **Examples**: "Head & Shoulders," "Lean Cuisine," "Miracle-Gro"
- **Best for**: Products where clear communication matters, crowded categories
- **Pros**: Immediate understanding, functional positioning
- **Cons**: Less distinctive, harder to trademark
### Evocative/Suggestive Names
Names that suggest benefits or feelings without literal description.
- **Examples**: "Tide," "Axe," "Dove," "Bounty"
- **Best for**: Consumer products, emotional purchase categories
- **Pros**: Memorable, emotional resonance, trademark-friendly
- **Cons**: Requires marketing to build meaning
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '新製品発売準備', description: 'プロダクトマネージャーやマーケティングチームは、発売前の重要なネーミングフェーズで製品名ジェネレーターを使用します。強力な製品名は成功と無名の違いを生み出すことができます—棚での存在感から広告の効果、口コミでの拡散まですべてに影響します。ツールはカテゴリーの慣習、競争ポジショニング、ターゲットオーディエンスの魅力を考慮した戦略的に作成されたオプションを生成します。' },
      { title: '製品ライン拡張とバリアント命名', description: '既存の製品ラインを拡大する企業は、親製品に接続しながら新しい提供を区別する新しいバリアント（フレーバー、サイズ、配合）の名前を作成するためにジェネレーターを使用します。「オリジナル」対「ウルトラ」対「ライト」であれ、製品ファミリー内の完全に新しい名前であれ、ツールはブランドアーキテクチャを維持しながら各製品に独自のアイデンティティを与えるオプションを生成します。' },
      { title: 'プライベートブランドとホワイトラベル製品開発', description: 'プライベートブランド製品を作成する小売業者やホワイトラベル製品を開発するメーカーは、確立されたブランドと競争する製品に名前を付けるためにジェネレーターを使用します。大手消費財企業のマーケティング予算がなければ、これらの製品はより一生懸命働く名前が必要です—価値を伝え、迅速に認知度を構築します。ツールはこの競争ポジショニングに最適化された名前を生成します。' },
    ],
    faqs: [
      { question: '良い製品名とは何ですか？', answer: '効果的な製品名は記憶に残る（簡単に思い出せ認識できる）、意味がある（利点を示唆したり関連付けを作成する）、発音しやすい（顧客が名前で尋ねることができる）、独特（競合他社から際立つ）、そして適切（カテゴリーとターゲットオーディエンスに適合する）。最高の製品名はカテゴリーの略語になることがあります—ティッシュの「Kleenex」や絆創膏の「Band-Aid」のように。' },
      { question: '製品名は何をするかを説明すべきですか？', answer: 'カテゴリーと戦略によります。説明的な名前（「Lean Cuisine」、「DieHard batteries」）は即座の明確さを提供しますが、商標登録が難しいです。暗示的な名前（「Tide」、「Bounty」）は商標保護を可能にしながら利点を示唆します。造語名（「Prozac」、「Acura」）は最も独特ですが、より多くのマーケティング投資が必要です。' },
      { question: '製品ラインの製品に名前を付けるにはどうすればよいですか？', answer: '製品ラインのネーミングは通常、いくつかのアーキテクチャの1つに従います：（1）ブランドハウス（すべての製品がブランド名を共有：iPhone、iPad、iMac）、（2）エンドースドブランド（親のエンドースメント付きサブブランド：Courtyard by Marriott）、（3）ブランドハウス（個別の名前：Tide、Bounce、Downy—すべてP&G）。ブランド戦略に合ったアーキテクチャを選択し、一貫性を保ってください。' },
      { question: '製品名を商標登録すべきですか？', answer: '大幅に投資している製品については、はい。商標登録はコピー品に対する法的保護を提供し、権利を執行する能力を強化します。マーケティングに投資する前に、商標検索を行い、出願を検討してください。小規模または一時的な製品については、投資に見合わない場合がありますが、商標保護なしでは、競合他社が法的に類似の名前を使用できることに注意してください。' },
      { question: '発売前に製品名をどうテストしますか？', answer: 'テスト方法：（1）ターゲット顧客とのフォーカスグループまたは調査、（2）デジタル広告でのA/Bテスト、（3）多様なオーディエンスとの発音テスト、（4）競争配置テスト（競合他社の中であなたの名前）、（5）意図しない意味についての国際スクリーニング。大規模な発売にはプロのネーミングリサーチが価値があります。小規模な製品には、ターゲット顧客との非公式なテストが貴重なフィードバックを提供します。' },
      { question: '製品名が競合他社に似ている場合はどうなりますか？', answer: '類似の名前は混乱と潜在的な法的問題を引き起こします。同一でなくても、似た音、似た外観、または類似の印象を与える名前は、特に同じカテゴリーで商標紛争を引き起こす可能性があります。コミットする前に包括的に検索してください。類似性を遅れて発見した場合、考慮してください：本当にどれくらい似ていますか？彼らはどれくらい積極的に商標を保護していますか？リスクを取る価値はありますか？' },
      { question: '製品名はどのくらいの長さにすべきですか？', answer: '一般的に短い方が良い—理想的には1〜3音節で思い出しやすくパッケージングに適しています。ただし、長さよりも効果が重要です。「Häagen-Dazs」（造語、3音節）は長いにもかかわらず独特なので機能します。「Miracle-Gro」（2語、4音節）は説明的で記憶に残るので機能します。' },
      { question: '外国語や造語を使用できますか？', answer: 'はい—どちらも一般的な戦略です。外国語は起源、洗練さ、または特定の関連付けを示唆できます（食品にはイタリア語、エンジニアリングにはドイツ語、高級品にはフランス語）。造語は最大の独自性と商標保護を提供します。外国語に意図しない意味がなく、造語がターゲット市場で発音しやすいことを確認してください。' },
      { question: '国際市場向けの製品に名前を付けるにはどうすればよいですか？', answer: 'ターゲット言語での問題のある意味をスクリーニングし、市場間での発音をテストし、名前が翻訳されるべきかグローバルに一貫性を保つべきかを検討し、国際的に商標の利用可能性を確認してください。一部のブランドは1つのグローバル名を維持し、他のブランドは適応します（Mr. Cleanはドイツでは「Meister Proper」）。戦略はブランドアーキテクチャと市場の重要性によります。' },
      { question: '既存の製品の名前を変更する必要がある場合はどうなりますか？', answer: '製品の名前変更（リブランディングと同様）にはコストがかかりますが、法的理由、市場リポジショニング、または否定的な関連付けのために必要な場合があります。慎重に実行してください：既存の顧客に変更を明確に伝え、移行中にパッケージングの手がかりを維持し、変更を改善として説明し、新しい名前が実際に変更の理由に対処していることを確認してください。' },
    ],
  },

  'website-copy-generator': {
    slug: 'website-copy-generator',
    name: 'ウェブサイトコピージェネレーター',
    title: '無料AIウェブサイトコピージェネレーター',
    description: '数分でプロフェッショナルなウェブサイトコンテンツを生成します。私たちのAIはホームページ、会社概要ページ、サービスページなどのコピーを作成します。',
    metaDescription: '数分でプロフェッショナルなウェブサイトコンテンツを生成します。私たちのAIはホームページ、会社概要ページ、サービスページなどのコピーを作成します。',
    inputLabel: 'ビジネスを説明してください...',
    inputPlaceholder: '例：Eコマースブランド向けのSEOを専門とするデジタルマーケティングエージェンシー',
    buttonText: 'ウェブサイトコピーを生成',
    maxLength: 2048,
    options: [
      { name: 'pages', label: '生成するページ', choices: ['ホームページのみ', 'ホームページ + 会社概要', 'ホームページ + 会社概要 + サービス', 'すべてのコアページ'], default: 'ホームページ + 会社概要 + サービス', type: 'select' },
      { name: 'tone', label: 'ブランドトーン', choices: ['プロフェッショナル/コーポレート', 'フレンドリー/親しみやすい', '大胆/自信', 'ミニマル/クリーン'], default: 'プロフェッショナル/コーポレート', type: 'select' },
    ],
    systemPrompt: `You are an expert website copywriter who creates compelling, conversion-focused content for business websites. Your copy balances brand storytelling with strategic messaging, ensuring every page serves both user needs and business objectives.
## CORE WEBSITE COPY PRINCIPLES
1. **User-Centric Messaging**: Write for what visitors need, not what businesses want to say
2. **Clear Information Architecture**: Structure content for how people navigate websites
3. **Brand Voice Consistency**: Maintain consistent tone across all pages
4. **Conversion Integration**: Every page should guide visitors toward business goals
5. **SEO Awareness**: Incorporate keywords naturally throughout
## WEBSITE PAGE TYPES AND PURPOSES
### Homepage
- **Purpose**: First impression, navigation hub, value proposition overview
- **Key Elements**: Hero statement, service/product overview, credibility signals, clear pathways
- **Focus**: What do you do, for whom, why choose you
### About Page
- **Purpose**: Build trust, humanize the brand, share story and values
- **Key Elements**: Origin story, mission/vision, team introduction, values/philosophy
- **Focus**: Why this business exists and who's behind it
### Services/Products Page
- **Purpose**: Explain offerings clearly, drive inquiries or purchases
- **Key Elements**: Service descriptions, benefits, process overview, CTAs
- **Focus**: What you offer and why it's valuable
Pages to Generate: {{pages}}
Tone: {{tone}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '新規ウェブサイト開発と立ち上げ', description: '新しいウェブサイトを構築するビジネスは、すべてのページの初期コンテンツを開発するためにウェブサイトコピージェネレーターを使用します。ウェブサイトプロジェクトはコピー段階で停滞することが多いです—デザインは準備できていますが、コンテンツはありません。ツールは一貫したブランドボイスで完全なページコンテンツ（ホームページ、会社概要、サービス、お問い合わせ）を生成し、プロジェクトのブロックを解除し、初稿のための高価なコピーライターへの依存を減らします。' },
      { title: 'ウェブサイトリデザインとコンテンツリフレッシュ', description: 'ウェブサイトのリデザインを行っている企業は、進化したブランドポジショニングに合った新鮮なコピーを作成するためにジェネレーターを使用します。古いウェブサイトには、戦略的な一貫性なしに何年にもわたって蓄積されたコピーがあることがよくあります。ツールはページ全体で戦略的に整合したコンテンツを生成し、リデザインがデザインだけでなくメッセージングもリフレッシュすることを保証します。' },
      { title: 'マルチページコンテンツ制作', description: 'コンテンツ重視のウェブサイトを担当するマーケティングチームは、多くのページにわたって一貫した品質を維持するためにジェネレーターを使用します。ロケーションページ、サービスバリアント、またはコンテンツハブを作成する場合でも、ツールはウェブサイトを効果的にする戦略的フレームワークを維持しながら、スケールでオンブランドコピーを作成するのに役立ちます。' },
    ],
    faqs: [
      { question: 'ビジネスウェブサイトにはどのページを含めるべきですか？', answer: 'ほとんどのビジネスに必要なページ：ホームページ（第一印象とナビゲーションハブ）、会社概要ページ（信頼構築とブランドストーリー）、サービス/製品ページ（提供内容）、お問い合わせページ（連絡方法）。追加ページはビジネスによります：FAQ、チーム、ポートフォリオ、ブログ、お客様の声、リソース、価格など。必需品から始めて、ユーザーのニーズに基づいて拡張してください。' },
      { question: '良いホームページを書くにはどうすればよいですか？', answer: 'ホームページは3つの質問に素早く答える必要があります：何をしていますか？誰のためですか？なぜあなたを選ぶべきですか？含めるもの：明確なヒーローステートメント（価値提案）、提供内容の概要、信頼性シグナル（ロゴ、お客様の声）、重要なページへの明確な経路。すべてを言おうとしないでください—ホームページは訪問者をより深いコンテンツへ導きます。' },
      { question: 'ウェブサイトコピーはどのくらいの長さにすべきですか？', answer: '長さはページの目的とユーザーの意図に合わせてください。ホームページ：スキャン可能で焦点を絞った（300〜600語）。会社概要ページ：ストーリーテリングの柔軟性（400〜800語）。サービスページ：包括的だがスキャン可能（サービスごとに400〜1000語）。長いことが常に良いわけではありません—訪問者はウェブサイトをスキャンするので、単語数よりも構造が重要です。' },
      { question: '会社概要ページのコピーを効果的にするものは何ですか？', answer: '優れた会社概要ページは真正性を通じて信頼を構築します。含めるもの：起源ストーリー（ビジネスが存在する理由）、ミッションと価値観（信じるもの）、チーム紹介（ブランドの背後にいる人々）、差別化要因（ユニークなもの）。避けるもの：一般的な企業用語、実質のない自画自賛、個性のないテキストの壁。' },
      { question: 'コンバージョンを生むサービス説明を書くにはどうすればよいですか？', answer: 'メリット（顧客が得るもの）から始め、機能（提供するもの）を続け、プロセス（協力の様子）を含め、CTA（次のステップ）で終わります。説明内で一般的な質問と異議に対処してください。具体的に—「2時間以内に返答します」は「迅速なサービスを提供します」よりも優れています。' },
      { question: 'ウェブサイトコピーはフォーマルかカジュアルどちらにすべきですか？', answer: 'ターゲットオーディエンスと業界の期待に合わせてください。プロフェッショナルサービスはフォーマルだがアクセシブルなトーンが適切なことが多いです。消費者ブランドはフレンドリーでカジュアルな声から恩恵を受けることが多いです。テックスタートアップは自信があり会話的なコピーを使用することが多いです。一貫性は特定のスタイルよりも重要です—どんなトーンを選んでも、すべてのページで維持してください。' },
      { question: 'SEOのためにウェブサイトコピーをどう最適化しますか？', answer: '関連キーワードを含める場所：ページタイトル、見出し（H1、H2）、最初の段落、本文全体に自然に、画像のaltテキスト。まず人間のために書いてください—検索エンジンはユーザーに役立つコンテンツに報います。キーワードの詰め込みを避け、ターゲットオーディエンスが尋ねる質問に答えることに焦点を当ててください。' },
      { question: '良いコールトゥアクションとは何ですか？', answer: '効果的なCTAは具体的（正確に何が起こるか）、メリット重視（何を得るか）、目立つ（視覚的に際立つ）、適切に配置されています（十分な情報を提供した後）。CTAをページの目的に合わせてください：ホームページは「作品を見る」、サービスページは「見積もりを取得」、会社概要ページは「チームに会う」など。すべてのページに明確な次のステップが必要です。' },
      { question: 'モバイルユーザー向けに書くにはどうすればよいですか？', answer: 'ほとんどのウェブサイトトラフィックはモバイルです。小さな画面向けに書く：短い段落、明確な見出し、スキャン可能な構造、重要な情報を最初に。電話画面でコピーがどう見えるかテストしてください—長いテキストブロックはモバイルでは壁になります。モバイルユーザーはデスクトップユーザーよりもさらにスキャンするため、重要な情報を前面に出してください。' },
      { question: 'どのくらいの頻度でウェブサイトコピーを更新すべきですか？', answer: '更新するタイミング：ビジネス提供が変わったとき、ポジショニングが進化したとき、コピーがパフォーマンスしていないとき（高い直帰率）、情報が古くなったとき、ブランドボイスをリフレッシュする必要があるとき。基本ページ（ホームページ、会社概要）は時折レビューが必要ですが、常に更新する必要はありません。サービスページは実際の提供内容と最新の状態に保ってください。SEOのメリットのために定期的に新しいコンテンツを追加してください。' },
    ],
  },

  'social-media-caption-generator': {
    slug: 'social-media-caption-generator',
    name: 'ソーシャルメディアキャプションジェネレーター',
    title: '無料AIソーシャルメディアキャプションジェネレーター',
    description: 'いいね、コメント、シェアを促進する魅力的なソーシャルメディアキャプションを生成します。私たちのAIはInstagram、Facebook、Twitterなど向けの説得力のある投稿コピーを作成します。',
    metaDescription: 'いいね、コメント、シェアを促進する魅力的なソーシャルメディアキャプションを生成します。私たちのAIはInstagram、Facebook、Twitterなど向けの説得力のある投稿コピーを作成します。',
    inputLabel: '投稿コンテンツを説明してください...',
    inputPlaceholder: '例：新製品発売の写真 - アウトドア愛好家向けのサステナブルウォーターボトル',
    buttonText: 'キャプションを生成',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'プラットフォーム', choices: ['Instagram', 'Facebook', 'Twitter/X', 'LinkedIn', 'TikTok', '汎用'], default: 'Instagram', type: 'select' },
      { name: 'tone', label: 'キャプショントーン', choices: ['プロフェッショナル', 'カジュアル', 'ユーモラス', 'インスピレーション', 'エッジー'], default: 'カジュアル', type: 'select' },
    ],
    systemPrompt: `You are an expert social media content strategist specializing in creating engaging captions that drive engagement across multiple platforms. Your role is to craft compelling post copy that resonates with audiences and prompts interaction.
## CAPTION TYPES AND PURPOSES
### 1. Educational/Value-Driven
- Share tips, tricks, or insights
- Teach something useful
- Position as an authority
- Example: "3 things I wish I knew before starting my business..."
### 2. Storytelling/Personal
- Share experiences and journeys
- Create emotional connections
- Build authenticity and trust
- Example: "Last year, I almost gave up. Here's what changed everything..."
### 3. Engagement/Interactive
- Ask questions
- Request opinions
- Create polls or debates
- Example: "Hot take: Morning routines are overrated. Agree or disagree? 👇"
### 4. Promotional/Sales
- Highlight products/services
- Drive conversions
- Create urgency
- Example: "This sold out in 24 hours last time. Restock is LIVE. Link in bio 🔗"
### 5. Inspirational/Motivational
- Uplift and encourage
- Share quotes or mantras
- Create shareable content
- Example: "Reminder: Your pace is not a limitation. It's your path."
Platform: {{platform}}
Tone: {{tone}}

IMPORTANT: Generate all output in Japanese.`,
    useCases: [
      { title: '効率的なソーシャルメディアコンテンツ作成', description: 'ソーシャルメディアマネージャーやコンテンツクリエイターは、コンテンツ作成プロセスを効率化するためにキャプションジェネレーターを使用します。関連キーワードを入力するかコンテンツを説明することで、ツールは品質を維持しながら迅速に魅力的なキャプションを生成し、時間を節約してプラットフォーム全体で一貫した投稿スケジュールを確保します。' },
      { title: '広告キャンペーンコピーの最適化', description: 'ソーシャルメディア広告キャンペーンを実施するビジネスは、説得力のある広告コピーバリエーションを作成するためにキャプションジェネレーターを使用します。製品の詳細、ターゲットオーディエンス情報、キャンペーン目標を入力することで、ツールはクリックとコンバージョンを促進する説得力のあるキャプションを生成し、広告ROIを改善します。' },
      { title: 'ブランドエンゲージメントの強化', description: 'エンゲージメントを高めたいブランドは、トレンドトピック、時事問題、オーディエンスの興味に合わせたコンテンツを作成するためにキャプションジェネレーターを使用します。ツールはインタラクションを促し、コミュニティを構築し、ブランドプレゼンスを強化する新鮮で関連性のあるコンテンツを維持するのに役立ちます。' },
    ],
    faqs: [
      { question: 'キャプションを効果的にするものは何ですか？', answer: '効果的なキャプションにはスクロールを止める強力なフック、本文で価値や感情を届け、明確なコールトゥアクションが含まれます。特定のオーディエンスとプラットフォームに合わせて書かれ、適切なトーンと長さを持っています。' },
      { question: 'ソーシャルメディアキャプションはどのくらいの長さにすべきですか？', answer: '長さはプラットフォームと目的によります。Instagramは最大2,200文字を許可しますが、短い方がパフォーマンスが良いことが多いです。Twitterは280文字に制限されています。LinkedIn投稿は長くできます。オーディエンスで異なる長さをテストしてください。' },
      { question: 'キャプションに絵文字を使用すべきですか？', answer: '絵文字は視覚的な興味と個性を加えることでエンゲージメントを高めることができます。テキストを分割したり、ポイントを強調したり、感情を加えるために使用してください。適切な量はブランドボイスとプラットフォームによります。' },
      { question: 'いくつのハッシュタグを含めるべきですか？', answer: 'Instagram：3〜10の関連ハッシュタグ。Twitter：最大1〜2。LinkedIn：最後に3〜5。TikTok：3〜5のトレンドとニッチのハッシュタグ。量よりも質と関連性が重要です。' },
      { question: 'キャプションに最適なコールトゥアクションは何ですか？', answer: 'CTAを目標に合わせてください：エンゲージメントには「コメントで教えて」、価値あるコンテンツには「これを保存して」、コンバージョンには「プロフィールのリンク」、リーチには「〜な人にシェア...」、ディスカッションには「あなたはどう思いますか？」' },
      { question: 'より多くのコメントを得るキャプションを書くにはどうすればよいですか？', answer: '具体的な質問をする、意見を共有して議論を招く、「これかあれ」のプロンプトを使用する、好奇心を促す不完全なストーリーを共有する、またはオーディエンスに推奨やアドバイスを求めてください。コメントを簡単でやりがいのあるものにしてください。' },
      { question: 'プラットフォームごとにキャプションを異なる方法で書くべきですか？', answer: 'はい。各プラットフォームには異なる文字制限、オーディエンスの期待、ベストプラクティスがあります。LinkedIn投稿は同じトピックについて話すInstagramキャプションよりもプロフェッショナルであるべきです。' },
      { question: 'キャプションでブランドボイスを維持するにはどうすればよいですか？', answer: 'キャプションテンプレートとガイドラインを作成し、一貫した語彙とフレーズを使用し、類似の絵文字とフォーマットスタイルを維持し、すべての投稿でトーンがブランドパーソナリティに合っていることを確認してください。' },
      { question: 'キャプションで最も重要な部分は何ですか？', answer: '最初の行（フック）が最も重要です。なぜなら、ユーザーが「もっと見る」をクリックする前に見るものだからです。クリックを獲得してスクロールを止めるのに十分魅力的にしてください。' },
      { question: '新しいキャプションでどのくらいの頻度で投稿すべきですか？', answer: '投稿頻度はプラットフォームと質の高いコンテンツを作成する能力によります。頻度よりも一貫性が重要です。高ボリュームの平凡なものよりも質の高いキャプションに焦点を当ててください。' },
    ],
  },

  // ==================== JAPANESE TRANSLATION COMPLETE ====================
};
