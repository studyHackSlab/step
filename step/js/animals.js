const animals = ["アイアイ",
    "アイベックス",
    "アカカンガルー",
    "アカギツネ",
    "アカクビワラビー",
    "アカネズミ",
    "アカワラルー",
    "アザラシ",
    "アシカ",
    "アジアゾウ",
    "アズマモグラ",
    "アナウサギ",
    "アフリカ",
    "アフリカゾウ",
    "アフリカタテガミヤマアラシ",
    "アブラコウモリ",
    "アマミノクロウサギ",
    "アメリカ",
    "アメリカバイソン",
    "アメリカビーバー",
    "アメリカマナティー",
    "アメリカヤマアラシ",
    "アライグマ",
    "アリクイ",
    "アルパカ",
    "アルプスマーモット",
    "アルマジロ",
    "アンデスウサギ",
    "ヴィクーニャ",
    "イエイヌ",
    "イエコウモリ",
    "イエネコ",
    "イタチ",
    "イッカク",
    "イヌ",
    "イノシシ",
    "イボイノシシ",
    "イルカ",
    "イワシクジラ",
    "インドゾウ",
    "インパラ",
    "ウサギ",
    "ウシ",
    "ウッドチャック",
    "ウマ",
    "ウンピョウ",
    "エジプトマングース",
    "エゾリス",
    "オオアリクイ",
    "オオカミ",
    "オオカンガルー",
    "オカピ",
    "オグロヌー",
    "オグロプレーリードッグ",
    "オス",
    "オセロット",
    "オットセイ",
    "オナガザル",
    "オポッサム",
    "オマキザル",
    "オランウータン",
    "オルカ",
    "オーストラリア",
    "カツオクジラ",
    "カバ",
    "カピバラ",
    "カモノハシ",
    "カラカル",
    "カリフォルニアアシカ",
    "カワウソ",
    "カンガルー",
    "ガゼル",
    "キタオットセイ",
    "キタキツネ",
    "キタナキウサギ",
    "キタリス",
    "キツネ",
    "キツネザル",
    "キヌゲネズミ",
    "キヌザル",
    "キリン",
    "キンイロジャッカル",
    "キンシコウ",
    "クジラ",
    "クマ",
    "クマネズミ",
    "クロキツネザル",
    "クロサイ",
    "クロワラルー",
    "コイワシクジラ",
    "コウベモグラ",
    "コウモリ",
    "コククジラ",
    "コクジラ",
    "コビトカバ",
    "コビトキツネザル",
    "コビレゴンドウ",
    "コモンリスザル",
    "コヨーテ",
    "ゴマフアザラシ",
    "ゴリラ",
    "ゴンドウクジラ",
    "ゴールデンハムスター",
    "ゴールデンモンキー",
    "サイ",
    "サバンナシマウマ",
    "サル",
    "サーバル",
    "ザトウクジラ",
    "シカ",
    "シシバナザル",
    "シマウマ",
    "シマスカンク",
    "シマリス",
    "シャチ",
    "ショウジョウ",
    "シリアンハムスター",
    "シロイルカ",
    "シロクマ",
    "シロサイ",
    "シロテテナガザル",
    "シロナガスクジラ",
    "シントウトガリネズミ",
    "ジネズミ",
    "ジャイアントパンダ",
    "ジャガー",
    "ジャコウネコ",
    "ジャッカル",
    "ジャマ",
    "ジャンガリアンハムスター",
    "ジュゴン",
    "スカンク",
    "セイウチ",
    "セミクジラ",
    "ゼニガタアザラシ",
    "ゾウ",
    "タイリクオオカミ",
    "タスマニアデビル",
    "タヌキ",
    "チスイコウモリ",
    "チンチラ",
    "チンパンジー",
    "チーター",
    "ツキノワグマ",
    "ツチブタ",
    "テナガザル",
    "テングザル",
    "テンジクネズミ",
    "トガリネズミ",
    "トド",
    "トナカイ",
    "トムソンガゼル",
    "トラ",
    "ドブネズミ",
    "ナガスクジラ",
    "ナキウサギ",
    "ナマケモノ",
    "ナミチスイコウモリ",
    "ナミチンパンジー",
    "ナミハリネズミ",
    "ナンバット",
    "ニホンザル",
    "ニホンジカ",
    "ニホンノウサギ",
    "ニホンモモンガ",
    "ニホンリス",
    "ヌー",
    "ヌートリア",
    "ネコ",
    "ネズミ",
    "ネズミキツネザル",
    "ノウサギ",
    "ノヤギ",
    "ノルウェーレミング",
    "ハイイロオオカミ",
    "ハイイロカンガルー",
    "ハイエナ",
    "ハクジラ",
    "ハクビシン",
    "ハツカネズミ",
    "ハムスター",
    "ハリネズミ",
    "ハリモグラ",
    "ハンドウイルカ",
    "バイソン",
    "バク",
    "バンディクート",
    "バンドウイルカ",
    "パサン",
    "パンダ",
    "ヒガシゴリラ",
    "ヒグマ",
    "ヒツジ",
    "ヒト",
    "ヒトコブラクダ",
    "ヒナコウモリ",
    "ヒヒ",
    "ヒメキヌゲネズミ",
    "ヒョウ",
    "ビクーニャ",
    "ビスカッチャ",
    "ビスカーチャ",
    "ビッグホーン",
    "ビーバー",
    "ピグミーチンパンジー",
    "ピグミーネズミキツネザル",
    "ピグミーマーモセット",
    "ピューマ",
    "フィリピンメガネザル",
    "フェネック",
    "フェネックギツネ",
    "フクロアリクイ",
    "フクロネコ",
    "フクロネズミ",
    "フクロモグラ",
    "フサオマキザル",
    "フタコブラクダ",
    "フタユビナマケモノ",
    "ブタ",
    "ブチハイエナ",
    "プレーリードッグ",
    "ヘラコウモリ",
    "ヘラジカ",
    "ベルーガ",
    "ホッキョクグマ",
    "ホモ",
    "ホモ・サピエンス",
    "ホンドギツネ",
    "ホンドモモンガ",
    "ボノボ",
    "ボルネオオランウータン",
    "マイルカ",
    "マカク",
    "マッコウクジラ",
    "マナティー",
    "マレージャコウネコ",
    "マレーバク",
    "マングース",
    "マントヒヒ",
    "マンドリル",
    "マーモセット",
    "マーモット",
    "ミミナガバンディクート",
    "ミンククジラ",
    "ムササビ",
    "ムツオビアルマジロ",
    "ムース",
    "メガネザル",
    "メス",
    "モグラ",
    "モモンガ",
    "モルモット",
    "ヤギ",
    "ヤマアラシ",
    "ヤマネ",
    "ヤマネコ",
    "ユキウサギ",
    "ユキヒョウ",
    "ユーラシアカワウソ",
    "ヨーロッパハリネズミ",
    "ライオン",
    "ラクダ",
    "ラッコ",
    "ラバ",
    "ラマ",
    "リカオン",
    "リス",
    "リスザル",
    "リャマ",
    "レッサーパンダ",
    "レミング",
    "ロバ",
    "ローラシア",
    "ワオキツネザル",
    "ワラビー",
    "ワラルー"];

var romanMap = {
    'あ': 'a',
    'い': 'i',
    'う': 'u',
    'え': 'e',
    'お': 'o',
    'か': 'ka',
    'き': 'ki',
    'く': 'ku',
    'け': 'ke',
    'こ': 'ko',
    'さ': 'sa',
    'し': { hepburn: 'shi', kunrei: 'si' },
    'す': 'su',
    'せ': 'se',
    'そ': 'so',
    'た': 'ta',
    'ち': { hepburn: 'chi', kunrei: 'ti' },
    'つ': { hepburn: 'tsu', kunrei: 'tu' },
    'て': 'te',
    'と': 'to',
    'な': 'na',
    'に': 'ni',
    'ぬ': 'nu',
    'ね': 'ne',
    'の': 'no',
    'は': 'ha',
    'ひ': 'hi',
    'ふ': { hepburn: 'fu', kunrei: 'hu' },
    'へ': 'he',
    'ほ': 'ho',
    'ま': 'ma',
    'み': 'mi',
    'む': 'mu',
    'め': 'me',
    'も': 'mo',
    'や': 'ya',
    'ゆ': 'yu',
    'よ': 'yo',
    'ら': 'ra',
    'り': 'ri',
    'る': 'ru',
    'れ': 're',
    'ろ': 'ro',
    'わ': 'wa',
    'ゐ': 'wi',
    'ゑ': 'we',
    'を': { hepburn: 'o', kunrei: 'wo' },
    'ん': 'n',
    'が': 'ga',
    'ぎ': 'gi',
    'ぐ': 'gu',
    'げ': 'ge',
    'ご': 'go',
    'ざ': 'za',
    'じ': { hepburn: 'ji', kunrei: 'zi' },
    'ず': 'zu',
    'ぜ': 'ze',
    'ぞ': 'zo',
    'だ': 'da',
    'ぢ': { hepburn: 'ji', kunrei: 'di' },
    'づ': { hepburn: 'zu', kunrei: 'du' },
    'で': 'de',
    'ど': 'do',
    'ば': 'ba',
    'び': 'bi',
    'ぶ': 'bu',
    'べ': 'be',
    'ぼ': 'bo',
    'ぱ': 'pa',
    'ぴ': 'pi',
    'ぷ': 'pu',
    'ぺ': 'pe',
    'ぽ': 'po',
    'きゃ': 'kya',
    'きぃ': 'kyi',
    'きゅ': 'kyu',
    'きぇ': 'kye',
    'きょ': 'kyo',
    'くぁ': 'qa',
    'くぃ': 'qi',
    'くぇ': 'qe',
    'くぉ': 'qo',
    'くゃ': 'qya',
    'くゅ': 'qyu',
    'くょ': 'qyo',
    'しゃ': { hepburn: 'sha', kunrei: 'sya' },
    'しぃ': 'syi',
    'しゅ': { hepburn: 'shu', kunrei: 'syu' },
    'しぇ': 'sye',
    'しょ': { hepburn: 'sho', kunrei: 'syo' },
    'ちゃ': { hepburn: 'cha', kunrei: 'tya' },
    'ちぃ': ['tyi'],
    'ちゅ': { hepburn: 'chu', kunrei: 'tyu' },
    'ちぇ': ['tye'],
    'ちょ': { hepburn: 'cho', kunrei: 'tyo' },
    'てゃ': 'tha',
    'てぃ': 'thi',
    'てゅ': 'thu',
    'てぇ': 'the',
    'てょ': 'tho',
    'ひゃ': 'hya',
    'ひぃ': 'hyi',
    'ひゅ': 'hyu',
    'ひぇ': 'hye',
    'ひょ': 'hyo',
    'ふぁ': 'fa',
    'ふぃ': 'fi',
    'ふぇ': 'fe',
    'ふぉ': 'fo',
    'みゃ': 'mya',
    'みぃ': 'myi',
    'みゅ': 'myu',
    'みぇ': 'mye',
    'みょ': 'myo',
    'ヴぁ': 'va',
    'ヴぃ': 'vi',
    'ヴぇ': 've',
    'ヴぉ': 'vo',
    'ぎゃ': 'gya',
    'ぎぃ': 'gyi',
    'ぎゅ': 'gyu',
    'ぎぇ': 'gye',
    'ぎょ': 'gyo',
    'じゃ': { hepburn: 'ja', kunrei: 'zya' },
    'じぃ': 'zyi',
    'じゅ': { hepburn: 'ju', kunrei: 'zyu' },
    'じぇ': 'zye',
    'じょ': { hepburn: 'jo', kunrei: 'zyo' },
    'ぢゃ': { hepburn: 'dya', kunrei: 'zya' },
    'ぢぃ': 'dyi',
    'ぢゅ': { hepburn: 'dyu', kunrei: 'zya' },
    'ぢぇ': 'dye',
    'ぢょ': { hepburn: 'dyo', kunrei: 'zya' },
    'びゃ': 'bya',
    'びぃ': 'byi',
    'びゅ': 'byu',
    'びぇ': 'bye',
    'びょ': 'byo',
    'ぴゃ': 'pya',
    'ぴぃ': 'pyi',
    'ぴゅ': 'pyu',
    'ぴぇ': 'pye',
    'ぴょ': 'pyo',
    'ぁ': 'xa',
    'ぃ': 'xi',
    'ぅ': 'xu',
    'ぇ': 'xe',
    'ぉ': 'xo',
    'ゃ': 'xya',
    'ゅ': 'xyu',
    'ょ': 'xyo',
    'っ': 'xtu',
    'ヴ': 'vu',
    'ー': '-',
    '、': ', ',
    '，': ', ',
    '。': '.'
};

/**
 * 長音のラテン文字
 */
var latins = {
    hepburn: {
        'a': 257,
        'i': 299,
        'u': 363,
        'e': 275,
        'o': 333
    },
    kunrei: {
        'a': 226,
        'i': 238,
        'u': 251,
        'e': 234,
        'o': 244
    }
};