// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'images/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 5;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;
var bln_ProgessBar = 1;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
   "Uma Musume Pretty Derby"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）,
//   "タイトルID"（先頭から0, 0, 2...）,
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [0, "Special Week", "CV: Azumi Waki", [1], "char_index_thumb_01_off.png"],
  [0, "Silence Suzuka", "CV: Marika Kouno", [1], "char_index_thumb_02_off.png"],
  [0, "Tokai Teio", "CV: Machico", [1], "char_index_thumb_03_off.png"],
  [0, "Vodka", "CV: Ayaka Ohashi", [1], "char_index_thumb_04_off.png"],
  [0, "Air Groove", "CV: Ruriko Aoki", [1], "char_index_thumb_05_off.png"],
  [0, "El Condor Pasa", "CV: Minami Takahashi", [1], "char_index_thumb_06_off.png"],
  [0, "Oguri Cap", "CV: Tomoyo Takayanagi", [1], "char_index_thumb_07_off.png"],
  [0, "Grass Wonder", "CV: Rena Maeda", [1], "char_index_thumb_08_off.png"],
  [0, "Gold Ship", "CV: Hitomi Ueda", [1], "char_index_thumb_09_off.png"],
  [0, "Symboli Rudolf", "CV: Azusa Tadokoro", [1], "char_index_thumb_10_off.png"],
  [0, "Taiki Shuttle", "CV: Yuka Ootsubo", [1], "char_index_thumb_11_off.png"],
  [0, "Daiwa Scarlet", "CV: Chisa Kimura", [1], "char_index_thumb_12_off.png"],
  [0, "TM Opera O", "CV: Sora Tokui", [1], "char_index_thumb_13_off.png"],
  [0, "Narita Brian", "CV: Yuka Aisaka", [1], "char_index_thumb_14_off.png"],
  [0, "Hishi Amazon", "CV: Yuiko Tatsumi", [1], "char_index_thumb_15_off.png"],
  [0, "Fuji Kiseki", "CV: Eriko Matsui", [1], "char_index_thumb_16_off.png"],
  [0, "Maruzensky", "CV: Lynn", [1], "char_index_thumb_17_off.png"],
  [0, "Mejiro McQueen", "CV: Saori Oonishi", [1], "char_index_thumb_18_off.png"],
  [0, "Seiun Sky", "CV: Akari Kito", [1], "char_index_thumb_19_off.png"],
  [0, "Yukino Bijin", "CV: Nozomi Yamamoto", [1], "char_index_thumb_20_off.png"],
  [0, "Winning Ticket", "CV: Yui Watanabe", [1], "char_index_thumb_21_off.png"],
  [0, "Tamamo Cross", "CV: Naomi Oozora", [1], "char_index_thumb_22_off.png"],
  [0, "Seeking the Pearl", "CV: Ayaka Fukuhara", [1], "char_index_thumb_23_off.png"],
  [0, "Manhattan Cafe", "CV: Yui Ogura", [1], "char_index_thumb_24_off.png"],
  [0, "Tosen Jordan", "CV: Eri Suzuki", [1], "char_index_thumb_25_off.png"],
  [0, "Haru Urara", "CV: Yukina Shuto", [1], "char_index_thumb_26_off.png"],
  [0, "Kawakami Princess", "CV: Karin Takahashi", [1], "char_index_thumb_27_off.png"],
  [0, "Mejiro Ryan", "CV: Afumi Hashi", [1], "char_index_thumb_28_off.png"],
  [0, "Matikanefukukitaru", "CV: Hiyori Nitta", [1], "char_index_thumb_29_off.png"],
  [0, "Fine Motion", "CV: Chinami Hashimoto", [1], "char_index_thumb_30_off.png"],
  [0, "Smart Falcon", "CV: Hitomi Ohwada", [1], "char_index_thumb_31_off.png"],
  [0, "Narita Taishin", "CV: Keiko Watanabe", [1], "char_index_thumb_32_off.png"],
  [0, "Air Shakur", "CV: Minami Tsuda", [1], "char_index_thumb_33_off.png"],
  [0, "Gold City", "CV: Saki Kosaka", [1], "char_index_thumb_34_off.png"],
  [0, "Super Creek", "CV: Kana Yuuki", [1], "char_index_thumb_35_off.png"],
  [0, "Inari One", "CV: Haruno Inoue", [1], "char_index_thumb_36_off.png"],
  [0, "Nishino Flower", "CV: Haruna Kawai", [1], "char_index_thumb_37_off.png"],
  [0, "Biko Pegasus", "CV: Aimi Tanaka", [1], "char_index_thumb_38_off.png"],
  [0, "Hishi Akebono", "CV: Rei Matsuzaki", [1], "char_index_thumb_39_off.png"],
  [0, "Bamboo Memory", "CV: Kotomi Aihara", [1], "char_index_thumb_40_off.png"],
  [0, "Marvelous Sunday", "CV: Marie Miyake", [1], "char_index_thumb_41_off.png"],
  [0, "Mihono Bourbon", "CV: Ikumi Hasegawa", [1], "char_index_thumb_42_off.png"],
  [0, "Sweep Tosho", "CV: Shiori Sugiura", [1], "char_index_thumb_43_off.png"],
  [0, "Ines Fujin", "CV: Tomomi Mineuchi", [1], "char_index_thumb_44_off.png"],
  [0, "Biwa Hayahide", "CV: Yui Kondou", [1], "char_index_thumb_45_off.png"],
  [0, "Sakura Bakushino", "CV: Sachika Misawa", [1], "char_index_thumb_46_off.png"],
  [0, "Shinko Windy", "CV: Yuuki Takada", [1], "char_index_thumb_47_off.png"],
  [0, "Agnes Tachyon", "CV: Sumire Uesaka", [1], "char_index_thumb_48_off.png"],
  [0, "Zenno Rob Roy", "CV: Haruka Terui", [1], "char_index_thumb_49_off.png"],
  [0, "Meisho Doto", "CV: Misaka Watada", [1], "char_index_thumb_50_off.png"],
  [0, "Rice Shower", "CV: Manaka Iwami", [1], "char_index_thumb_51_off.png"],
  [0, "Admire Vega", "CV: Hitomi Sasaki", [1], "char_index_thumb_52_off.png"],
  [0, "Curren Chan", "CV: Yuu Sasahara", [1], "char_index_thumb_53_off.png"],
  [0, "Agnes Digital", "CV: Minori Suzuki", [1], "char_index_thumb_54_off.png"],
  [0, "Eishin Flash", "CV: Ayami Fujino", [1], "char_index_thumb_55_off.png"],
  [0, "Nakayama Festa", "CV: Shino Shimoji", [1], "char_index_thumb_56_off.png"],
  [0, "Mayano Top Gun", "CV: Ayaka Imamura", [1], "char_index_thumb_57_off.png"],
  [0, "Mejiro Dober", "CV: Hikari Kubota", [1], "char_index_thumb_58_off.png"],
  [0, "Nice Nature", "CV: Kaori Maeda", [1], "char_index_thumb_59_off.png"],
  [0, "King Halo", "CV: Iori Saeki", [1], "char_index_thumb_60_off.png"],

];
