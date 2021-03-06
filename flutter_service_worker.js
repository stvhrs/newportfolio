'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f4d5d0c0671be202bc241807c243e80b",
".git/config": "48ddc07663dd834e58886f3399940127",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "09fdc0f6c45c3436ce4c88b9d56488b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d7452d587ccf23c95b911a70af5b9219",
".git/logs/refs/heads/main": "2ccc9faaa671472c882fc676ff6e4f5a",
".git/logs/refs/remotes/origin/main": "65cdd12f4b8c6af798be5c7a0fec8689",
".git/objects/01/674d5d86ee05d3842145f756f177b038c0ed73": "6a389e02e4340d23dd48e513b1dcb1c2",
".git/objects/02/663c5dba806eaf8dc3415c3de4f133308cfd98": "0d1068373f7fb05410e836fc43d06bdc",
".git/objects/02/baeaaf8e7718bd3a0d3b8d47491d2b361f52ed": "c6ac938defe8a66f96a43e3a06b9e64e",
".git/objects/04/9d59ca0f0214c7328514332b58c3dc2060413d": "7392c99f05038e6e7b2fc0ac7b523e2b",
".git/objects/04/db11a02964a003c51c9f2ebf58905ecea51c13": "09dc629c832adb5a578fa2a4b386eb8e",
".git/objects/05/0322695608daf6ac12f97ed57f1cd8fbd22406": "e44ff4e22a97dc7dc9a69a1d4e895dc2",
".git/objects/06/7da9ce13aa4acc76ffa288cedb69927b92b3e9": "4638686eac7de65ea4321708ba02d805",
".git/objects/06/db6be5b7be57ef8249e071005b196dff157c08": "75401c19d96faa7093de81d233dc1445",
".git/objects/08/93d212c42d726cb00cdf27536223f82e6f45f5": "79f860ce69a938f569beb21281d27b97",
".git/objects/09/0c07943b9d37c9155097ddb6c729d029c35466": "883633d479ba19fc19dbf0abee908ade",
".git/objects/09/1e87fe3894e42cdf1f3f8c287afa4054feea3d": "b32639e4ac862574a5cf4677f5fb5930",
".git/objects/09/a42539a0d1f1795d9de9cd05254393d6a0da8a": "c7feaf0dd5d879bac33972da17ed17e7",
".git/objects/0b/92def01e2cdb37f2cdeca4ed73b4d269e424f6": "1ef56d1770b7b6c6ee2e7f3f8ae9e1eb",
".git/objects/0d/8c9d02f08877f7836831c09325784fe5e63db6": "3df3e7c715397366a83dff3c77c7ee8c",
".git/objects/10/07640f6f03160f14e8549e42ef31f71b9ed611": "a2991aea6ff7ca19eda72f7859da6e6b",
".git/objects/10/a3fde2e8712a9666e3b2a615166fe52015d0e4": "454954492de98982f559b0ec94b32172",
".git/objects/11/52958dadb265c8c7b04b6ac4a1f256bac11590": "e003c6198aee83ab1c89603bc2d50f72",
".git/objects/11/b8036aebc21496ada9939aeeafdba08552003a": "3745cb1cb3183a5eafa1f40b4acb74c4",
".git/objects/11/f40d4c630bf4b74370b2282e24b615c8ff177b": "12575c8949f7216605d118a3752a9ba7",
".git/objects/14/75ea0531ed55d817a341f99c1e29cd742b419f": "2fb48b340b1953d119c8e809962c0267",
".git/objects/16/385143528f2dd7daf80d0acb46ac6ec0345964": "b68f5f8b75723f8526dc9842e36fe2b4",
".git/objects/16/db816d95d66c3fa36d8d62b6db56c2147942a2": "12fa3ce505c779a51d80814c51756da0",
".git/objects/17/118d0cd136df1d63763c488ed36173f305a982": "788b83fbc12d40178e19665368655f7c",
".git/objects/18/072ea45b9e14370b607d71aaff34cbf68bc039": "228ed159b744496ae67fe46b8809023d",
".git/objects/19/4d4495b004664ba215ee96ebe3cbaf720bc090": "416c8e0861569d19e967147944a6b7fb",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/68662275c055087b131911b85ea2f15beee9fa": "73d3553e3a7cbcc713a73ba233f41154",
".git/objects/1d/6b75fb15444e247cd7024332cb1b8833acda60": "600125f3503348d53223e1c60785282e",
".git/objects/20/a961446452d6ce3775a75a2df73b0df749ff62": "306a3e79193e335496ac8774d019df54",
".git/objects/23/55176c9210b2eb42860b7cf776f96dbde9688f": "4ab33a40c76225f0816e5e208c702767",
".git/objects/23/9aa6a71fa45fd669f35021035f2b6b7437f2e7": "6ca5ade55d16376759d76d1ca1b6c903",
".git/objects/24/64d13ece76dec672d2c765da862b0da520b7a9": "28ce7e6887e541d5700b248955a73bd0",
".git/objects/24/b3fa33f1759a33a8f1a902dd834e6c28684286": "633a7b331c2c1441aa804e4448eb09a3",
".git/objects/25/be3e68f0c49f087113f60bfd4e3f0da14d38eb": "e50c21cfc0fc28774d722ba87e862cff",
".git/objects/27/2c629add669333983311a35f8506b8479a1934": "08e3504b67b727aecd8a4af00bdd5165",
".git/objects/27/d6fa3eb6f60487fd3f88f2c79d54ceca6e8d40": "2ee88d6832bedeec7069773ac461a939",
".git/objects/28/7957f0ffdb93019530569fe7ab964a1edc9875": "564daf4d6b69796b8fa463b693402eba",
".git/objects/29/828c4c939b9645b2b8d27183644ebf14e88136": "2c65882cf21480088958bd14604e91b5",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/554ddb6b490eb6e5097cf79da921754f6b44f5": "969607be0c431ade34b20f2d6f030c1d",
".git/objects/2b/7a584b43410902f3c9b9ba19bfd4f048729d1c": "64617576686bfa9ab6f2b8f4ed0da98d",
".git/objects/2b/d6e73b68954a1117391605dcc87cc7cc571e5e": "6351ed41e9ae31b1cd54aeb8f22d421e",
".git/objects/2c/97691cdbbda835158414d91818aa4feb94f2f3": "23847184fd79917ae478b2476771e379",
".git/objects/2c/d3606ae10f970907c6836bc3f9d8e68bd45862": "18e47ac0a707a8557434ddea821a1d43",
".git/objects/2d/d92456acc5cba057986686e83a4587b839a09a": "4af0dce072b78e6cbd08145fb3b1a1da",
".git/objects/2e/2941107b8b7d63b64d1e24cdee52086b9c2b18": "5f5ce01b807c2859227e7e17d511002a",
".git/objects/32/664692eb90762e1deccfd5dda74b4fc87c0164": "69d5c2241af1ab2f6db9a5b6e3b2c814",
".git/objects/34/3d4a2d86bd38fd1673dcca1e45b97ecbbb1409": "c093943c47116a6dc3a91ad115094a4b",
".git/objects/34/ba4503e818a16ebd91b13439faaf228b38e410": "688d1872d2684b8579643aa47d1e5554",
".git/objects/34/d405da11a6d789b7acfe8a20ec82151ddf771d": "d304f1c52772df618cccf3009a97f76a",
".git/objects/39/aa377013beb349a20d36e3156b61e6e08a7837": "9a320a429e0c2ade81b49f29b5a40432",
".git/objects/3b/f6a84b44ccd0237541b9eff2a330e8391ce3e4": "0ecb5a7f61627cb42891e351f667204a",
".git/objects/3c/2442afc1606af8f2059eb51d0fd7b492d6a923": "65441b7ffe6cb842f4b8816f34c684e0",
".git/objects/3d/0dcdfb1ba8fbf7f8b19c170e7e32d235479462": "11f2caa6245fa51c9cada709d2c38178",
".git/objects/3e/596b519bb98a1ef56411fd85fce10288fbedad": "8e9422c9e6a78226ec66066f80e2bccf",
".git/objects/3e/c2a366dec84581c1ed993ee38c262630949541": "94ef7755e8c8d02394dcd66059179307",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/abeef385d0a5a54719109a0ae1f653032b5c2a": "2bc5f1a34c292e6d98839d4ed920b32a",
".git/objects/46/d21dae62d07856f632c7e18e38019942fe7582": "052a914c14e48d41f6cc082866d4246b",
".git/objects/47/95cbf07878524f6939820177793868aa41a51f": "d92df967c900b9d60ec0b86aa7a955fc",
".git/objects/48/cd2512a64ca56d2c54e4323a69d8603636c032": "447aa49c23fdbd19dce9afa0aa62b69a",
".git/objects/49/0b16925f8a3178f0066b7f29bddf90aa928700": "5dd874d35404a37fdc684c0ea236d878",
".git/objects/4a/7be47c374e9ac2d690f867ecbe6b70cb5c893e": "4e6b08394eeb8ae879dbd5e134fe6e12",
".git/objects/4a/e8a787a1209dd5a5ea24177d6da4612cdac3fb": "66af043a9d15f64e65dc178a52e88ae4",
".git/objects/4b/1043c6d20f277cad12fa1753bbf230b3b0a8d9": "b56877f682c883a433c69acddc248ae8",
".git/objects/4b/8f00ef569edce3b37ca8c71f7898c2884fbdfe": "492c88b84535ee27c56eca2ce1705b9c",
".git/objects/4b/e438e42ba354b51d9a05554b74cd45bebf8da1": "78279ded15bbf1f87add72e008efed28",
".git/objects/4c/084c7978f77a35aeae3bf79caaac69e7c24022": "64d906bbb1b36d42729f7797e1a82f00",
".git/objects/4c/3e21e4977da0b3c9e8470017f5863a7adda2ff": "0a72e364779ec51280c4194ed099795b",
".git/objects/4e/2a090560ff42cc32fea6718420f58e8ab8445d": "5ea230cc965e812965e83c4c28a27d4c",
".git/objects/4e/df3d117af825edc8154ee9853481cd851a2b71": "1d790f2292bba6fba83ed02bc956c876",
".git/objects/4e/e290911562150832c7ea07e6ce28f12d46d711": "168f47940ff2849e64bbf033eb11305b",
".git/objects/4e/ec342fabb5644cafdbd09d4fad244e3203214e": "4015edb0a2b21ca66e798fe39aa7dd7f",
".git/objects/4f/7f61b89ada456f86bf93f3f24b4d2d29cafcbc": "27357f975762f499927c3a4fb04467a9",
".git/objects/4f/d28dbee4659502d7be85e196fd370229733f0a": "c23d3a58696f6bc1a078bc3e59a0c8a6",
".git/objects/50/34529ba306985bc1051d31802d73341d861579": "71645d235d16cf9bab73004b054a8e72",
".git/objects/51/983edf400f9d3b4c72e980d1ed62eb36902bb2": "d43de77a44148c1074a475228b15f542",
".git/objects/52/462935d820e6435572d1c4478eccbe52191d25": "9c475a72a9e5e4283ed3f54ce5380060",
".git/objects/52/e57ba5053389d5a4355fe9df47eabddd34d6ec": "c9968587b66f6eabbe051060cba2c39d",
".git/objects/53/0cc88a790bb8d86782cdff45de9bdf2897328f": "52549519439a4a5a24691495f2fabc0f",
".git/objects/54/0a75082ae4b7b1dbf910ca3e641152b8e357ec": "bc53fd87b692aa71d45dc92a52329a0a",
".git/objects/54/fa50ee91db5953169c08ec79f4d98b477c1e80": "42c64c80e9fa7033f462832e8042617a",
".git/objects/57/a8db201eb62f7931c85cc1fd1bb5d68f8f14b5": "2bec2d0b335ceed1cb3671312022bd22",
".git/objects/57/ce392fce543638e979f43420ed7d86bee1cad0": "44b818a85b49622f7da9a104c20b72c6",
".git/objects/59/27ecb01784a5fbbc23ef82e5a933d2222b89f0": "1fa31c32cb9930a10a3969bd716b62f3",
".git/objects/59/5a1959f02c215efa33b2243b6c1f119d894f23": "d4385faba7a6577a1dfe3a3210ef4c86",
".git/objects/5a/52c1cb3d48f7b6438d3ce69f24cbc1196391bf": "f8bd92268112fbf73616a741cd5fef70",
".git/objects/5c/ea3a72dfbc0fed6317ebdeeb6bc5f90675fbd5": "2916a5d66a2db9b2d4f6efd74a7be3f7",
".git/objects/5e/ba35632159a5ec71de4209784afe66efa44abf": "4de5750cd6954008ba9b4896d896e440",
".git/objects/5f/31d41a68f6a02c9ffd324af1007aee9b028458": "f5337f19fa067eed6600e7de1ee1c8ca",
".git/objects/60/7252a1ad40e05583ef30ded87e18163aa7d74b": "5194eb8f40cac0a5ec0c75274f1d6cd9",
".git/objects/60/fe91ce54bc2f52b17c634bded730ac9a6d1e16": "27f9a4c47fe08fb6ad5dc1c83cacdabf",
".git/objects/65/7cdb1fbf81abadc1e93dc49f2b3ba518a41aa8": "810abf3d8fecee1c31289352c4a1a377",
".git/objects/6b/e66cd82e4e027121166cb7cc08630eaf68d46d": "d6e878c6f2809fb2bc5a6ff02382b30e",
".git/objects/6d/61d5b9709b59861409e3a958ee5cf94ba71065": "95d271ab882176bcc22f18b078602a30",
".git/objects/70/6a69c76a84a6fe181164b39ab3b7569c699703": "6bdf701db8beb2ce5daac60164fb7205",
".git/objects/72/862fe031436d313a9b0a7b2e8aacaa906f6f33": "03a8a7e8c8c6aa374cad59cee179ef4e",
".git/objects/73/024430c1bbe6b76cb180f8264c65bc47e65255": "07c5f5053d2d08b60c647a21efe378ec",
".git/objects/73/37e904589cc57d7ab14be0d3ba542d3c5b7ac8": "c01cc5be1539ea48170745182b5ab01d",
".git/objects/74/29e4b2263dc677d88b905ab3a25d54031ab9ab": "3a3e499656b9d0a166eeb5d613204371",
".git/objects/76/86194f53eca2c61eb84f085a9c7d7705cb1431": "874cb3f8a3eb1df89268799185243373",
".git/objects/76/8787d3155a482ddca2279e91935c0a23882699": "7541a6c3c382385b3dad34aa040b2cc3",
".git/objects/76/ed61c5a7d92db882208a78c42157f9b3d3c5ca": "57c024b1ab2d6cbe4ff35f2e91cbce93",
".git/objects/77/26a300aa5c5d94d37622dd375ab1cfb515a381": "5189dde2b721b4d05451e025009a2c7d",
".git/objects/77/4e24bef87690cafefe320c23499160b04c398a": "0236b32ecee8e8bf616ad04f66a2fe11",
".git/objects/77/5bf3499f2d7e78285674208cd2a53d6f9b16ac": "176356e2ebe39bb51821c9a01b8e2c68",
".git/objects/79/2fe1b396d23505b22b6a948cb63bc1f4ee37e0": "29eb24c8c9f4a0a7ea647d0df077f8f7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/605e3a6acaa8ce01004242dad3cf778cef52cf": "9915eb1e700dd2b605ddf35cea87d96f",
".git/objects/7a/f2925d49ce0a139ddf415e54d40b2a32097b0d": "69722a67adbeaa4664ae75a929823e6c",
".git/objects/7b/031d1f04b60493d78af22cbe44034f9f7f0c29": "e7b684b04ef4e90fdba330ea69c2ca3e",
".git/objects/7b/5b2b7e1c0b50e2e2e53c1db4040adbb6764f35": "4455e9d4fe65a13ec0435c73ffc224b2",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/10a94b068e61f3110a1443919aa78934a1fa88": "04969b7cc9131b6dd1c084c4ed8e0712",
".git/objects/7d/aefc1d1f1a24eaa84b4dc8401070193c2b83b7": "fc1ea0b2e41f4b6910939922303e868d",
".git/objects/7d/cc512a131aeb04dcd9c1e10c1a70ad9c58b51e": "20cf49316a644231c2a0b48888f9b3ec",
".git/objects/80/663f60b8358928903b8b33d0707428407faa87": "c63f8f4718413f67ad44ed65aa5aadec",
".git/objects/83/1020eb5a6d814a95f149936de0c6bb6246aa07": "f68beb1e407f1bd346323fb8adb0bda7",
".git/objects/83/2d2084f6de0f7d072310c927bc12e4bb56a640": "e581cc8f578e74549ea25657c8297454",
".git/objects/84/3d54e024d205d1c0fd3a9d2ca1731b8aea4ec8": "410940248d3d27dd5916541ad773233e",
".git/objects/86/9a60f04eb7ed84f7fd12ae3f557920c72f19a0": "206ab2c28d791e1e5eed23659b518f16",
".git/objects/88/a7d5ec42c33e51502c068f0e8c1ff7c1acc335": "8301d5e5001fff588b00d8971c5be5c1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0be7baf7dd40146e78461a1fbee1c2feaf7d5a": "620d35f3468f9e911c635007d3923383",
".git/objects/8c/014faa30137800ef11ff2cbc6d8f6de5c45b37": "866c8d5a64cdae27a36e213e278bb8c5",
".git/objects/8c/c68c7389095ce77ee7613e85f4b722615f2d34": "a6a275ba36bbe42be357321b98744ffe",
".git/objects/8d/412b96fe257f7dd173b58f4abb63e437eb5d16": "d9917308e9ebe996f8520faa03f7c27a",
".git/objects/8d/7d60ace509f57b1abd22058963569261f41e7a": "b7fcfbe5a70e98715b659bfc35994f26",
".git/objects/8d/d0eee2368091959ddd13d0394ff0b0987e1866": "b035e9c7fd4913f894ff194379df6f79",
".git/objects/91/3dc79a5a9f161b981892b51fa2fb743c7a804d": "26546e67c3ee1e3ff2665c889b80a2d7",
".git/objects/91/771d757e36729c2d53443167b320f0f15871e8": "c8bbf08193f0457355f2d151b9660eb2",
".git/objects/93/846c3639faabcbc8b13354e2e512e81a4c9d8b": "0da83967aa6b9f547adeb4d7d4c2f1aa",
".git/objects/94/fd3da5c89acb0160b67339b11edabfb5e67701": "35f11895fdecdee4ee9903dbab00085b",
".git/objects/95/573954a711b4c304d33df8cf7a6ecbda13b090": "944c858853b574bca8c7a6feed583e73",
".git/objects/95/592daa638b2436ce09bf47e8586d32796ccc19": "65f926bb24a4b3ae0f8246078bda672d",
".git/objects/96/a99da4c0bfdfd2fab2f33c842f389ecda77c7d": "623fe8319396994ec4937a321308abbd",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/4f60b3e638e6c58f6e5d717985d42a72777821": "f441fa9af567a3f09696fae28a8db853",
".git/objects/99/f6eddb2f64ada8388a34523885fefce83bc47e": "416fcab5556eb1ae0467dd37a3909aed",
".git/objects/9b/0c66e2123518f23d70ef480f5a2e3144a4f882": "f6d5a73d604841921c7c59875871428a",
".git/objects/9b/4dfb27b257f34f83e98c38f096ec89f86a7861": "578f3140ac5a78ccbd1469dad344ec07",
".git/objects/9c/93329f6973705581b8f4bd2884bbe74fd76e7d": "2c08c4ccd81a976b155cfd8ff7c4a0f0",
".git/objects/9d/55396de284a62fb50a4523455874a7a6b9e1d3": "82a7a754827fbe14a9370cf39869f60a",
".git/objects/a0/d02ef78b82feb04ab3c03fc15edd64691b47cd": "8e144fe04ea04e47c3e57837848e4109",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/eb817618f495801d884193969aa61ddd2c1752": "a1cec196be24c85834e35a42c9e0afd1",
".git/objects/a2/88dfbdd2cb85e3262df9ccfbc7e201ddd1f191": "57b1ca42fed98ecaecb772525283ab2d",
".git/objects/a6/c350abd8ddbe28daa76476801f3c03646a9bc7": "fecdc152169cca3b698744f700030a77",
".git/objects/a6/c6cf32f97e1ab79404171fdd6ecf2371be5725": "6c952d75bc7b22e41c78a3ba1c6cec42",
".git/objects/a6/df03cdfe4055b786a8437ff09dc67afb2eb099": "7c8550de978a6af2c29c37f8444732de",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/4d99327eabc0f394c74fa52f331466357bd7ef": "f8842f2b957c35f36d3d553537c9534d",
".git/objects/ad/2bf4dd2fef3411e5832d90d95c24c0b0b1d276": "90c610d0a1f58086132c9bc7e4357f35",
".git/objects/ad/57b26aace1a62cf6d3b03ee14e526c1bda35bf": "29954d3d59a227df806ff25615f8e958",
".git/objects/ad/94d234b8a9416f56effa72e68c578882d4f653": "7196f50417b3c62cd3359eb431c02153",
".git/objects/b0/57552f764de588527164db489474f8cfe1db56": "a02d70c2d3502321b33020fc131aa5f9",
".git/objects/b4/d5c2174662883e6233e160f96a9b0ace395968": "c6e5096560f27c272bf32a6de9bbac6f",
".git/objects/b4/f8d12b9b1042a3bee8a03525a30f8fca8a1009": "0144ade20af661f5681fa79d8b0c5d85",
".git/objects/b5/2d64b6581358169bc43a5a208a77b55f520ef9": "bbe27d9fa26a419bafd64d851af60e1e",
".git/objects/b6/065893be65520bfd77a24b5317f5a8317b9f30": "5d243e4d564832e4e056d81ed26aec55",
".git/objects/b6/15dd253313096aa13ef7b076a2e5dad92b62e0": "847d6771873764abebf3c9729ffa0acd",
".git/objects/b6/710b96f498a7f03e65d93e1594a9937f4fd786": "f6f3e1f0533a9e3eefddb5abe71c5860",
".git/objects/b7/0325664fc12a8e37d1e1346cc4860ab95ebb64": "d3d9ff3d2e5937bbe39dbad7dcedb99a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3739238153f330abe7c07a8aec6b8873822e75": "e85761e690d5946e396bff82bcdd0942",
".git/objects/b8/7d8cd361d0dcc7feb7b1985e3c7424e85ece7e": "e6f2d224d68119d4e15656b27e2b11cf",
".git/objects/b8/be48452db15f26bfb877312157e82042dd12d1": "055d69b90779df6a9b54d5bf808659aa",
".git/objects/b8/f2db4171693198d3cce799a19737746d2bc672": "a04e6274bed908f5b3c40b21c5fdc8e7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3d427dcb2e30abc6845a861c1066edd2902829": "2cd1f707f8d1e9b799a0cf755775ce1b",
".git/objects/b9/bd0f6a10fe77de50e020346b0cb1224095df34": "13de7aba3a94687fc1d8af75fa060c37",
".git/objects/ba/c3a1f08fd97b696f842033e145f957c2425cd4": "533c1e69f65ba07b1c920801d1972339",
".git/objects/bc/1f533a4bc59dca98168f5568bf817713f07fd0": "bb8d84532775ad6c4405889892830282",
".git/objects/bd/1a5b524c449c53ab26e01334a6443b5410c165": "556264fae72c7b5bb23f049e2c34343d",
".git/objects/bd/5282e2f8466abe088fee52c3233c080a95e84a": "796280f01a3fd6c7683ac1dc2885e951",
".git/objects/bd/6b99af93f69dc533d9e6fcb1d48bb831c9a0bc": "e57da880ffa40d60b562cef73f19a140",
".git/objects/be/e484ae423569aeee877c0eecb1eec3bf809840": "a9977c70816d64a3606f26d37ceb213c",
".git/objects/bf/4cafbb3f23bc8b189c02c4ee6a2d20be9cd051": "e630d3051dd14e173792335618ffc550",
".git/objects/bf/b5c33fd3723afdf5c994cb8955caec5e906a10": "6c238a2b80909f3df4634703dbee2d47",
".git/objects/c1/7002fe814e17d618f5f1a690483ec73ed0bb7d": "8db6425e505e3e3c7361546d68fa3c33",
".git/objects/c1/90d088915f576c2853777611eefd36d9546762": "de8edf2acd20b3056a7ef1f7bf6cffb1",
".git/objects/c2/4bc96308f2b824d5ca0c485bee26f3eacc34f3": "45d48658793e735946bc2515225ccda4",
".git/objects/c3/df5d422ee934bfd7948607f7e47d44ea430a80": "986e92e0c15bfa92cceffbac008e906e",
".git/objects/c4/4b7c4702fe8b7f2312a6222534394cff54b95f": "003f7c1da5a93970b358dc389c8d7c29",
".git/objects/c6/4f7178c425f2f62701716663c3f9fc3888ea29": "ca99d0076e3c54bbc49dabf5ef0cf1a9",
".git/objects/c6/67da0016c18d1e9e7a134d6b7c2b54583d41b4": "174fa7410c4ef01ed0e4275c7b540570",
".git/objects/c8/a42be2fd9a528b958878666e59b4ccf17c38f9": "c1f4d452057a2b5d8095c9c5be2973a0",
".git/objects/c8/c4a8dcecd7f6ab5c2ae54c6f71440b68f3dde7": "9db4d39a8f0bed211a44da00abcdb916",
".git/objects/ca/16b4137b0da086a825adc3527d95aef1d9111b": "53430c4b28d63c79c47dab1704c40271",
".git/objects/cb/51858db8de828bd862c862c832885b6e559d77": "660a1af6c16d56265ad940fc5359abf4",
".git/objects/cc/4a56b944563e329a860ab8cebae6aa6a372838": "9184554199b8095feb9506f096b9f5f8",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/a7a12e6e438071c6541d62398b03ee1e610c75": "6859597253878c7f9cb237f7f80e0d9b",
".git/objects/cf/19b119df23b8a1cfcce767e3018610e7f5dc1e": "b7a35fac68dc9ced69d2fe7c7ecba207",
".git/objects/d1/b63b0a3931a0b4d10506609250762c8e876299": "4a6b3c0e1b015ba64df7ac607230e280",
".git/objects/d2/0167e28d055c3906989a67bcb8ad31fe8e39c9": "062f55391917a003df81f9a47a917734",
".git/objects/d2/8678cfed81af91c0f8b6e378b36f6e67fc168a": "a3ef6a0d82a477cc018fa3de6e8aa379",
".git/objects/d5/7de7cd89d65117220cd4e02ac2139df4da64e4": "80146fbb4eb7e29ccc5e160bcace7d70",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/e04c4ca3bf1f6f873c996c503edbbcddc89665": "06e3f00ecb6aa20967cab2384dcb02da",
".git/objects/d8/931f1f39d495cb9837f657128ff6378716b211": "aad1f4698183fbfc4f3f70a02b9ccf19",
".git/objects/d9/d92ddb45b50a034cface36687ea7f51ffb3017": "c791284d85a90761d40596bb95b310df",
".git/objects/dc/d89d97dcbe98f84dfadb09ddd3dceb9572cc1c": "5be7806b8a5c08841ee704482c79f573",
".git/objects/dd/0e85b74498a41e63594ce6f5b604d1d4bb50d8": "52d7b893a4d1cf635891cd733b6f753b",
".git/objects/de/287930bd41c07a16576b7846bb3962358e3426": "63894a605d5495caa3ab2946a154e037",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/6df1b05c3c6320a290b2a7434f9db9463f1cea": "4cf74b7a5283fa18f2eae7421526ac85",
".git/objects/e0/93270a74ec01cbd28c9e2067dfae73c9873aa2": "025da65d89d7e199aabde1ef51455898",
".git/objects/e1/559e18523bde26d2c2d23c1c3278cde7226ae5": "91ec1e6c810671d4140214f8d9f05fdb",
".git/objects/e1/a19fcc378a2b3ec69b4e7da63e56df4af130d9": "f87d30c4a2cf93045d285ab0e8165408",
".git/objects/e1/e0655b821119f2dfe3b685480872e1e8a02dcc": "0a6e6fa366dec53c45f33737e39da6f3",
".git/objects/e1/f070f824cc59e7b01086c3b3b7c5d6db28483a": "72b2b447ea408c9e9adf0cf865eccb4a",
".git/objects/e3/3852c3f482307af8ed33cb39bde91a1b2e7742": "7646de0373cddee0f7a1d02371fce608",
".git/objects/e3/4c06f3ee0d906e4f3b43d41d9ecee294f279f3": "fe5672c635be70c653719feb8cb542f8",
".git/objects/e4/01a7ed8fa56662931d152351d23f6f5af903c4": "887711c3515bc822f4ab8eece191286d",
".git/objects/e4/4a2c5f64f3972a92cdd4cf9f94cfd770195e79": "5e33306ceb561cca7d7400c0ae8bb4b6",
".git/objects/e5/3d4b5d92b7811f0d95deaf9e4456868256523e": "9f8025dea263342d231e6efa81f2c6cf",
".git/objects/e5/933d3752b40bfd1dc8c03b7db0e571c1522f33": "b649e3bfc87d1c27f1f140e53f1b9fea",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e76d4fc5a22c754a126fe787b859991da2da1c": "7057166cb3a6044575a9d03c20bc5bd3",
".git/objects/e9/f4a042d3120fbba52444a4a815fce156fe3062": "ac30ba15a386434eeb9cacc1e6eb68c3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/bcd9edc58cf350f1533f9ea4a9ed2b46c8f16e": "5f5d99bc9e7be5dcae9738f670d3b01e",
".git/objects/ec/fae85dec6c8ead69cefd839a5feececb96a874": "96139f6b2e40772b0310d07920f92033",
".git/objects/ee/9c0b01b4510443d1074fe3420b423506b052ef": "de3b3a93decc9ec3ac2bd6cccea93e56",
".git/objects/ee/b99712ea413be63149ae3b553c7f8547dce71e": "a98aecf37f98e6f2db0e299b387f7d74",
".git/objects/ef/e3b6df93ab2435b6f0bd0a1c7b17fd9a3bda49": "90a158499610ae517c97071fe7c6883c",
".git/objects/f0/edc5d1799975527f1191b0352db519849fcaa9": "3674f479fcf0c3e83e0f0a77e6d42ebd",
".git/objects/f1/65b09a121045dfd0be2b6c25d454ad90d630e6": "115b791ba81191841e21207b0d32b542",
".git/objects/f1/ae6426b40dea03ac549b8f02dd4d99d4ddefbf": "39b8fe0bd5a3aca9f2caacc9cd9b4bbd",
".git/objects/f4/215a5c821e5d7ac0564d4bd91b7466ebf488dc": "56ed9dd7cc884f132495c74718c34a6e",
".git/objects/f4/802baf0447ded5eb373a417f834b3baae2f0f3": "29dca5f39392b0c9b3b45b571eb84b3f",
".git/objects/f5/6525b057a6dd302c78fd94f6c665b20aa9bc89": "280ef05b14f84cda839784a01e9cfeaf",
".git/objects/f7/0e5e582cc26aecfc215c8c02ca3ea8652528c4": "dcca3c1785fa6471155c4c52b37ec045",
".git/objects/f7/77d8a9142272417eaf7ec9c4281b12ed53948e": "e475128e8a27eb31ab8d5df29f0518d8",
".git/objects/f7/c463fc898abe9d240eee3f8c40c10e0ac0fa44": "9898d7d496a71216bd3d12d348e4931a",
".git/objects/f7/d3f5e94608b0bedfee4f984571811ecae2811e": "b5ebe1741114f4ce1cd883c5b33185bc",
".git/objects/f8/adf4aa51b5dd1a044a29ff6053a8dc5264e9ba": "3b84a20c7245e966331db6117b4c82d2",
".git/objects/fa/3cf57c98d884843933bc99d93cacb478cebbe4": "7a332c6d278a22eba07872f97b492f60",
".git/objects/fa/a538668c645c904080edf81e0a0fe79d891953": "5c912e32b2ff0e8fe1d1a16b117c7b42",
".git/objects/fc/3f2a25131db6e5c77004716c2bcce69c1c2d70": "bc58d3f00984e760542124849580353e",
".git/objects/fd/f7604e15403ed9a566786fe1d45af2d841b0ff": "da8fe165bfdfd39fb5a4b0c74ac2f54c",
".git/objects/fe/2137a72a71a0f63bc6c7f0550247db59ee66bc": "6ef6791ca0a80a833ca6944bda458f88",
".git/objects/ff/44ac9d3a65f3c1e9b63e14ffb2f2a437024698": "09cd39bfcd532aeecf329bfa08668ff0",
".git/refs/heads/main": "38e518af9229590e9debb30b1fc317b4",
".git/refs/remotes/origin/main": "38e518af9229590e9debb30b1fc317b4",
"assets/AssetManifest.json": "eceb4efc726674c59726ba0cfaa1279b",
"assets/assets/1.jpg": "53b914df38b020915c871496fe8e72dd",
"assets/assets/2.png": "74b79b36b16b3d0f687f72576f296df0",
"assets/assets/3.png": "728e334615ea8e353dd376283f3b4adb",
"assets/assets/4.png": "326a934d20c43ff44ec8228e2bc3bda4",
"assets/assets/5.png": "415ac75a23a1dd3d5c10311f094b7794",
"assets/assets/OpenSans-Bold.ttf": "ff615c954fc5485fb3757516721b41ff",
"assets/assets/OpenSans-Light.ttf": "0652ba43f7a92220fbc18a5519fbf2c1",
"assets/assets/OpenSans-Medium.ttf": "7a56b1bba54be9caf32f096d8224a492",
"assets/FontManifest.json": "d9da6761a7b167bee5cea179a2d45b6a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "13c9904e178eec0070277cf4a7fa95cf",
"assets/shaders/ink_sparkle.frag": "8d40d8a1f7be16961013a141d12b0506",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "2e2107ac1c396e259c27a71a8ba7becb",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a7dc98d5dad62dd7a3036d56045b95a5",
"/": "a7dc98d5dad62dd7a3036d56045b95a5",
"main.dart.js": "33e35cd9818206cca354f77b577246e0",
"manifest.json": "d454795ec90f470ee481df70d1276310",
"version.json": "424e1c820abc43fa3de5db67518dd634"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
