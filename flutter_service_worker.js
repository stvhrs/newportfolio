'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "06978eae3ec7986f9d24fcfd992cfc7f",
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
".git/index": "4142a02b1325ef976714fb6f42d7a35e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4661adb129ee80f9c7f7acd06713e6c8",
".git/logs/refs/heads/main": "67cb90091d6a640ea80af7225bbaa6ac",
".git/logs/refs/remotes/origin/main": "c370496bbf1187e978eb54b48feee4c2",
".git/objects/02/baeaaf8e7718bd3a0d3b8d47491d2b361f52ed": "c6ac938defe8a66f96a43e3a06b9e64e",
".git/objects/04/9d59ca0f0214c7328514332b58c3dc2060413d": "7392c99f05038e6e7b2fc0ac7b523e2b",
".git/objects/05/0322695608daf6ac12f97ed57f1cd8fbd22406": "e44ff4e22a97dc7dc9a69a1d4e895dc2",
".git/objects/08/93d212c42d726cb00cdf27536223f82e6f45f5": "79f860ce69a938f569beb21281d27b97",
".git/objects/09/a42539a0d1f1795d9de9cd05254393d6a0da8a": "c7feaf0dd5d879bac33972da17ed17e7",
".git/objects/10/07640f6f03160f14e8549e42ef31f71b9ed611": "a2991aea6ff7ca19eda72f7859da6e6b",
".git/objects/10/a3fde2e8712a9666e3b2a615166fe52015d0e4": "454954492de98982f559b0ec94b32172",
".git/objects/11/b8036aebc21496ada9939aeeafdba08552003a": "3745cb1cb3183a5eafa1f40b4acb74c4",
".git/objects/11/f40d4c630bf4b74370b2282e24b615c8ff177b": "12575c8949f7216605d118a3752a9ba7",
".git/objects/19/4d4495b004664ba215ee96ebe3cbaf720bc090": "416c8e0861569d19e967147944a6b7fb",
".git/objects/23/9aa6a71fa45fd669f35021035f2b6b7437f2e7": "6ca5ade55d16376759d76d1ca1b6c903",
".git/objects/24/64d13ece76dec672d2c765da862b0da520b7a9": "28ce7e6887e541d5700b248955a73bd0",
".git/objects/28/7957f0ffdb93019530569fe7ab964a1edc9875": "564daf4d6b69796b8fa463b693402eba",
".git/objects/29/828c4c939b9645b2b8d27183644ebf14e88136": "2c65882cf21480088958bd14604e91b5",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/7a584b43410902f3c9b9ba19bfd4f048729d1c": "64617576686bfa9ab6f2b8f4ed0da98d",
".git/objects/2c/97691cdbbda835158414d91818aa4feb94f2f3": "23847184fd79917ae478b2476771e379",
".git/objects/2c/d3606ae10f970907c6836bc3f9d8e68bd45862": "18e47ac0a707a8557434ddea821a1d43",
".git/objects/2d/d92456acc5cba057986686e83a4587b839a09a": "4af0dce072b78e6cbd08145fb3b1a1da",
".git/objects/32/664692eb90762e1deccfd5dda74b4fc87c0164": "69d5c2241af1ab2f6db9a5b6e3b2c814",
".git/objects/34/d405da11a6d789b7acfe8a20ec82151ddf771d": "d304f1c52772df618cccf3009a97f76a",
".git/objects/39/aa377013beb349a20d36e3156b61e6e08a7837": "9a320a429e0c2ade81b49f29b5a40432",
".git/objects/3d/0dcdfb1ba8fbf7f8b19c170e7e32d235479462": "11f2caa6245fa51c9cada709d2c38178",
".git/objects/3e/c2a366dec84581c1ed993ee38c262630949541": "94ef7755e8c8d02394dcd66059179307",
".git/objects/41/abeef385d0a5a54719109a0ae1f653032b5c2a": "2bc5f1a34c292e6d98839d4ed920b32a",
".git/objects/47/95cbf07878524f6939820177793868aa41a51f": "d92df967c900b9d60ec0b86aa7a955fc",
".git/objects/4b/1043c6d20f277cad12fa1753bbf230b3b0a8d9": "b56877f682c883a433c69acddc248ae8",
".git/objects/4c/3e21e4977da0b3c9e8470017f5863a7adda2ff": "0a72e364779ec51280c4194ed099795b",
".git/objects/4e/df3d117af825edc8154ee9853481cd851a2b71": "1d790f2292bba6fba83ed02bc956c876",
".git/objects/4f/d28dbee4659502d7be85e196fd370229733f0a": "c23d3a58696f6bc1a078bc3e59a0c8a6",
".git/objects/50/34529ba306985bc1051d31802d73341d861579": "71645d235d16cf9bab73004b054a8e72",
".git/objects/51/983edf400f9d3b4c72e980d1ed62eb36902bb2": "d43de77a44148c1074a475228b15f542",
".git/objects/52/462935d820e6435572d1c4478eccbe52191d25": "9c475a72a9e5e4283ed3f54ce5380060",
".git/objects/52/e57ba5053389d5a4355fe9df47eabddd34d6ec": "c9968587b66f6eabbe051060cba2c39d",
".git/objects/54/fa50ee91db5953169c08ec79f4d98b477c1e80": "42c64c80e9fa7033f462832e8042617a",
".git/objects/57/a8db201eb62f7931c85cc1fd1bb5d68f8f14b5": "2bec2d0b335ceed1cb3671312022bd22",
".git/objects/59/5a1959f02c215efa33b2243b6c1f119d894f23": "d4385faba7a6577a1dfe3a3210ef4c86",
".git/objects/5e/ba35632159a5ec71de4209784afe66efa44abf": "4de5750cd6954008ba9b4896d896e440",
".git/objects/5f/31d41a68f6a02c9ffd324af1007aee9b028458": "f5337f19fa067eed6600e7de1ee1c8ca",
".git/objects/60/7252a1ad40e05583ef30ded87e18163aa7d74b": "5194eb8f40cac0a5ec0c75274f1d6cd9",
".git/objects/6b/e66cd82e4e027121166cb7cc08630eaf68d46d": "d6e878c6f2809fb2bc5a6ff02382b30e",
".git/objects/70/6a69c76a84a6fe181164b39ab3b7569c699703": "6bdf701db8beb2ce5daac60164fb7205",
".git/objects/73/37e904589cc57d7ab14be0d3ba542d3c5b7ac8": "c01cc5be1539ea48170745182b5ab01d",
".git/objects/76/86194f53eca2c61eb84f085a9c7d7705cb1431": "874cb3f8a3eb1df89268799185243373",
".git/objects/76/ed61c5a7d92db882208a78c42157f9b3d3c5ca": "57c024b1ab2d6cbe4ff35f2e91cbce93",
".git/objects/77/26a300aa5c5d94d37622dd375ab1cfb515a381": "5189dde2b721b4d05451e025009a2c7d",
".git/objects/77/4e24bef87690cafefe320c23499160b04c398a": "0236b32ecee8e8bf616ad04f66a2fe11",
".git/objects/79/2fe1b396d23505b22b6a948cb63bc1f4ee37e0": "29eb24c8c9f4a0a7ea647d0df077f8f7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/10a94b068e61f3110a1443919aa78934a1fa88": "04969b7cc9131b6dd1c084c4ed8e0712",
".git/objects/7d/aefc1d1f1a24eaa84b4dc8401070193c2b83b7": "fc1ea0b2e41f4b6910939922303e868d",
".git/objects/7d/cc512a131aeb04dcd9c1e10c1a70ad9c58b51e": "20cf49316a644231c2a0b48888f9b3ec",
".git/objects/80/663f60b8358928903b8b33d0707428407faa87": "c63f8f4718413f67ad44ed65aa5aadec",
".git/objects/83/2d2084f6de0f7d072310c927bc12e4bb56a640": "e581cc8f578e74549ea25657c8297454",
".git/objects/86/9a60f04eb7ed84f7fd12ae3f557920c72f19a0": "206ab2c28d791e1e5eed23659b518f16",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/7d60ace509f57b1abd22058963569261f41e7a": "b7fcfbe5a70e98715b659bfc35994f26",
".git/objects/8d/d0eee2368091959ddd13d0394ff0b0987e1866": "b035e9c7fd4913f894ff194379df6f79",
".git/objects/94/fd3da5c89acb0160b67339b11edabfb5e67701": "35f11895fdecdee4ee9903dbab00085b",
".git/objects/95/592daa638b2436ce09bf47e8586d32796ccc19": "65f926bb24a4b3ae0f8246078bda672d",
".git/objects/96/a99da4c0bfdfd2fab2f33c842f389ecda77c7d": "623fe8319396994ec4937a321308abbd",
".git/objects/9b/0c66e2123518f23d70ef480f5a2e3144a4f882": "f6d5a73d604841921c7c59875871428a",
".git/objects/9b/4dfb27b257f34f83e98c38f096ec89f86a7861": "578f3140ac5a78ccbd1469dad344ec07",
".git/objects/9c/93329f6973705581b8f4bd2884bbe74fd76e7d": "2c08c4ccd81a976b155cfd8ff7c4a0f0",
".git/objects/9d/55396de284a62fb50a4523455874a7a6b9e1d3": "82a7a754827fbe14a9370cf39869f60a",
".git/objects/a0/d02ef78b82feb04ab3c03fc15edd64691b47cd": "8e144fe04ea04e47c3e57837848e4109",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/eb817618f495801d884193969aa61ddd2c1752": "a1cec196be24c85834e35a42c9e0afd1",
".git/objects/a6/c6cf32f97e1ab79404171fdd6ecf2371be5725": "6c952d75bc7b22e41c78a3ba1c6cec42",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/94d234b8a9416f56effa72e68c578882d4f653": "7196f50417b3c62cd3359eb431c02153",
".git/objects/b4/d5c2174662883e6233e160f96a9b0ace395968": "c6e5096560f27c272bf32a6de9bbac6f",
".git/objects/b4/f8d12b9b1042a3bee8a03525a30f8fca8a1009": "0144ade20af661f5681fa79d8b0c5d85",
".git/objects/b5/2d64b6581358169bc43a5a208a77b55f520ef9": "bbe27d9fa26a419bafd64d851af60e1e",
".git/objects/b6/065893be65520bfd77a24b5317f5a8317b9f30": "5d243e4d564832e4e056d81ed26aec55",
".git/objects/b6/15dd253313096aa13ef7b076a2e5dad92b62e0": "847d6771873764abebf3c9729ffa0acd",
".git/objects/b6/710b96f498a7f03e65d93e1594a9937f4fd786": "f6f3e1f0533a9e3eefddb5abe71c5860",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/e484ae423569aeee877c0eecb1eec3bf809840": "a9977c70816d64a3606f26d37ceb213c",
".git/objects/bf/4cafbb3f23bc8b189c02c4ee6a2d20be9cd051": "e630d3051dd14e173792335618ffc550",
".git/objects/bf/b5c33fd3723afdf5c994cb8955caec5e906a10": "6c238a2b80909f3df4634703dbee2d47",
".git/objects/c1/90d088915f576c2853777611eefd36d9546762": "de8edf2acd20b3056a7ef1f7bf6cffb1",
".git/objects/c6/67da0016c18d1e9e7a134d6b7c2b54583d41b4": "174fa7410c4ef01ed0e4275c7b540570",
".git/objects/c8/c4a8dcecd7f6ab5c2ae54c6f71440b68f3dde7": "9db4d39a8f0bed211a44da00abcdb916",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/e04c4ca3bf1f6f873c996c503edbbcddc89665": "06e3f00ecb6aa20967cab2384dcb02da",
".git/objects/d8/931f1f39d495cb9837f657128ff6378716b211": "aad1f4698183fbfc4f3f70a02b9ccf19",
".git/objects/dc/d89d97dcbe98f84dfadb09ddd3dceb9572cc1c": "5be7806b8a5c08841ee704482c79f573",
".git/objects/de/287930bd41c07a16576b7846bb3962358e3426": "63894a605d5495caa3ab2946a154e037",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/6df1b05c3c6320a290b2a7434f9db9463f1cea": "4cf74b7a5283fa18f2eae7421526ac85",
".git/objects/e0/93270a74ec01cbd28c9e2067dfae73c9873aa2": "025da65d89d7e199aabde1ef51455898",
".git/objects/e1/a19fcc378a2b3ec69b4e7da63e56df4af130d9": "f87d30c4a2cf93045d285ab0e8165408",
".git/objects/e1/f070f824cc59e7b01086c3b3b7c5d6db28483a": "72b2b447ea408c9e9adf0cf865eccb4a",
".git/objects/e3/3852c3f482307af8ed33cb39bde91a1b2e7742": "7646de0373cddee0f7a1d02371fce608",
".git/objects/e5/933d3752b40bfd1dc8c03b7db0e571c1522f33": "b649e3bfc87d1c27f1f140e53f1b9fea",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/f4a042d3120fbba52444a4a815fce156fe3062": "ac30ba15a386434eeb9cacc1e6eb68c3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/fae85dec6c8ead69cefd839a5feececb96a874": "96139f6b2e40772b0310d07920f92033",
".git/objects/ee/b99712ea413be63149ae3b553c7f8547dce71e": "a98aecf37f98e6f2db0e299b387f7d74",
".git/objects/ef/e3b6df93ab2435b6f0bd0a1c7b17fd9a3bda49": "90a158499610ae517c97071fe7c6883c",
".git/objects/f0/edc5d1799975527f1191b0352db519849fcaa9": "3674f479fcf0c3e83e0f0a77e6d42ebd",
".git/objects/f1/65b09a121045dfd0be2b6c25d454ad90d630e6": "115b791ba81191841e21207b0d32b542",
".git/objects/f4/215a5c821e5d7ac0564d4bd91b7466ebf488dc": "56ed9dd7cc884f132495c74718c34a6e",
".git/objects/f5/6525b057a6dd302c78fd94f6c665b20aa9bc89": "280ef05b14f84cda839784a01e9cfeaf",
".git/objects/f7/c463fc898abe9d240eee3f8c40c10e0ac0fa44": "9898d7d496a71216bd3d12d348e4931a",
".git/objects/f7/d3f5e94608b0bedfee4f984571811ecae2811e": "b5ebe1741114f4ce1cd883c5b33185bc",
".git/objects/ff/44ac9d3a65f3c1e9b63e14ffb2f2a437024698": "09cd39bfcd532aeecf329bfa08668ff0",
".git/refs/heads/main": "fe64233525d74d82e9ce1a2646947ff9",
".git/refs/remotes/origin/main": "fe64233525d74d82e9ce1a2646947ff9",
"assets/AssetManifest.json": "8a0d69528d6b6c70e0ed9e4598d9b730",
"assets/assets/fonts/JosefinSans/JosefinSans-Bold.ttf": "75d240293f611020f2885e035a705f4e",
"assets/assets/fonts/JosefinSans/JosefinSans-SemiBold.ttf": "f5c12a8ff92995d15bc240053d60db48",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf": "9ace3da396795504e076197f08434e8c",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf": "9589c3d42504fe59926fb74b90b74061",
"assets/assets/fonts/VictorMono/VictorMono-Bold.ttf": "cbe39229787a3b35ea4cf1c3eeecab0c",
"assets/assets/fonts/VictorMono/VictorMono-Medium.ttf": "2fa2a363301ec3cc4391a8f3cf3717db",
"assets/assets/fonts/VictorMono/VictorMono-SemiBold.ttf": "3c8a261e0f442f079a76396f1e8323af",
"assets/assets/icons/arrow_back.svg": "e20656fa2ea7dad03541e0930038cb2b",
"assets/assets/icons/arrow_forward.svg": "f26ed0afd9b527de339374a08eabbb7a",
"assets/assets/icons/skills/after_effects.svg": "3ae6cbbe8b480277b6bfcd6292c912c2",
"assets/assets/icons/skills/dart.svg": "8f64a2a5bea0d66e3f255c21c31a7ab7",
"assets/assets/icons/skills/figma.svg": "58451394f4cc9312e7f87aff69d31e29",
"assets/assets/icons/skills/firebase.svg": "19a627680dc48eed9b179d80dc929c7c",
"assets/assets/icons/skills/flutter.svg": "4e6787e773740a773b54680ac14bfdc1",
"assets/assets/icons/social/discord.svg": "c49b1d7467f27f2a7fd74ed41eb5c8d3",
"assets/assets/icons/social/github.svg": "7f6975740836128a24ce65f7cf874f8f",
"assets/assets/icons/social/linkedin.svg": "4893c24143dc2cac8d6fa41566e884d0",
"assets/assets/images/curvy_ui.png": "9097bab3d06ca00df5fa4939ea84f404",
"assets/assets/images/flylady.png": "eb9c96ba7fda32bb5e3278d4c5f8e92b",
"assets/assets/images/konnect.png": "370d9088fe4994ae36d06597fa987ca7",
"assets/assets/images/my_notes.png": "d9258d95a2bead7fd2f0f7dd2bbccfff",
"assets/assets/images/my_photo.png": "75391d496c9b8683c44d99787867db3e",
"assets/assets/images/procom.png": "b5e6509a75fe550541706bbe38c4f07b",
"assets/assets/images/sacred_groves.png": "9e1728a6330076d5d4a3a56ca9371fd4",
"assets/assets/images/shopify.png": "64d7ec3bbb522d5f9c0dea320ab8b35c",
"assets/assets/images/smart_file_manager.png": "57cc51c2cab685e14784d7f38df64167",
"assets/assets/images/traveller.png": "a688f45f944e7cff4baac5d6ed07ba04",
"assets/assets/images/two_step.png": "7c14f098d94463099557a2904f2fb60e",
"assets/assets/logo/app_logo.png": "081b8e4ae78e0eb57443cf4c4282031f",
"assets/assets/logo/app_logo.svg": "69af50b04f301b9ebb759d2632a4a39c",
"assets/assets/logo/loading_animation_long.gif": "5560a720a7b78f19fb84c20531a65f84",
"assets/assets/logo/logo.png": "c68c880e01a21b35769d4f36fdddfc94",
"assets/assets/logo/reverse_loading.gif": "ec945cb2c18eb7a9fecebf653b1c5221",
"assets/FontManifest.json": "a15939f8542049a1db1c0822c06dc201",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c2395c48e655ca2abe3aaa27d50377ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "8d40d8a1f7be16961013a141d12b0506",
"canvaskit/canvaskit.js": "9d49083c3442cfc15366562eb578b5f3",
"canvaskit/canvaskit.wasm": "e58017ff67dd1419dbd7b720458fb1af",
"canvaskit/profiling/canvaskit.js": "dfb57a8542220c772374503baaf2632c",
"canvaskit/profiling/canvaskit.wasm": "2c16ab2af3d4fbad52da379264e260e8",
"favicon.png": "2e2107ac1c396e259c27a71a8ba7becb",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7799ea77fb809d80cb2c8aebbc9fedd5",
"/": "7799ea77fb809d80cb2c8aebbc9fedd5",
"main.dart.js": "9573d81c28b5b403bf89361d16cb93ea",
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
