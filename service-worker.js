/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/03/01/JavaSE/JDK/00/index.html","65f323d3718dd914f713cb08ca2fad43"],["D:/hexo/ButterflyBlog/public/2018/03/02/JavaSE/JDK/01/index.html","342d44cfeaae72ea9ba8701b6ca4f502"],["D:/hexo/ButterflyBlog/public/2018/03/03/JavaSE/JDK/02/index.html","3433816993df83b4925ce02ba06c2a31"],["D:/hexo/ButterflyBlog/public/2018/03/04/JavaSE/JLF/03/index.html","ef9e472ec0af7167179f1d0c7eb01e2d"],["D:/hexo/ButterflyBlog/public/2018/03/05/JavaSE/JLF/04/index.html","02ed304db4aca45c7ebdade0c82db918"],["D:/hexo/ButterflyBlog/public/2018/03/06/JavaSE/JLF/05/index.html","ae625e3e513a7c84f08a8fe25b6cdc3e"],["D:/hexo/ButterflyBlog/public/2018/03/07/JavaSE/JLF/06/index.html","2e38ba20588838b0c402c0e9669000e0"],["D:/hexo/ButterflyBlog/public/2018/03/08/JavaSE/JLF/07/index.html","6a0e7a4c9c6592f4d1ab3ee09062adc0"],["D:/hexo/ButterflyBlog/public/2018/03/10/JavaSE/API/9/index.html","5e0543726ba355ca356c6d1438e0f711"],["D:/hexo/ButterflyBlog/public/2018/03/11/JavaSE/API/10/index.html","5cd941a34e4bb2d17a0857923bfad04a"],["D:/hexo/ButterflyBlog/public/2018/03/12/JavaSE/API/11/index.html","62e6d194c45798f25d7e20d6ac5ebfdd"],["D:/hexo/ButterflyBlog/public/2018/03/13/JavaSE/API/12/index.html","2e6f2863c935d64f8305201eaa5e364b"],["D:/hexo/ButterflyBlog/public/2018/03/14/JavaSE/API/13/index.html","36c3fb1f0fa4950d5d77df9754826c1a"],["D:/hexo/ButterflyBlog/public/2018/03/15/JavaSE/API/14/index.html","6ab74cd9203be165a6776a53c6fa78ee"],["D:/hexo/ButterflyBlog/public/2018/03/16/JavaSE/API/15/index.html","39856babc5f19c530ceb0299606e6908"],["D:/hexo/ButterflyBlog/public/2018/03/17/JavaSE/IO/16/index.html","cb911ecd4257730c796d874175370d0f"],["D:/hexo/ButterflyBlog/public/2018/03/18/JavaSE/IO/17/index.html","de032d53a41f8e6482e2b5b101ca8dcb"],["D:/hexo/ButterflyBlog/public/2018/03/19/JavaSE/IO/18/index.html","456eb71d619082d43f2b5f13ddff7eba"],["D:/hexo/ButterflyBlog/public/2018/03/20/JavaSE/Exception/19/index.html","155842a6c74a7cfbb733ae976899981f"],["D:/hexo/ButterflyBlog/public/2018/03/21/JavaSE/Exception/20/index.html","6adbbec092be0bdac4985cff059958e2"],["D:/hexo/ButterflyBlog/public/2018/03/22/JavaSE/GUI/21/index.html","26ee664f32e4a1f597cc92f17d607a85"],["D:/hexo/ButterflyBlog/public/2018/03/23/JavaSE/OOP/22/index.html","7245b829ecd9a24c6eebcc1c38c24664"],["D:/hexo/ButterflyBlog/public/2018/03/24/JavaSE/OOP/23/index.html","75b1a1f91235651cc0633ed27f9b6323"],["D:/hexo/ButterflyBlog/public/2018/03/25/JavaSE/OOP/24/index.html","d51494188e2608b83abafded7dbdd06a"],["D:/hexo/ButterflyBlog/public/2018/03/26/JavaSE/OOP/25/index.html","34fb69a3bbf3a814fcd438eb1851bb31"],["D:/hexo/ButterflyBlog/public/2018/03/27/JavaSE/OOP/26/index.html","282836d3d819e2a051605264804614b6"],["D:/hexo/ButterflyBlog/public/2018/03/28/JavaSE/Thread/27/index.html","74f19eeebed702e5108a3e5a16c04b54"],["D:/hexo/ButterflyBlog/public/2018/03/29/JavaSE/Thread/28/index.html","dfa97b37268afe94e3fd3da689c7a162"],["D:/hexo/ButterflyBlog/public/2018/03/30/JavaSE/Socket/29/index.html","70ec65183f037b2cf225daf1a5014554"],["D:/hexo/ButterflyBlog/public/2018/04/01/JavaSE/Collection/30/index.html","c3072c0609303f723a8d302f3d5a80ee"],["D:/hexo/ButterflyBlog/public/2018/04/02/JavaSE/Collection/31/index.html","8baaa5639acbcb55c2fb2f67d1f56478"],["D:/hexo/ButterflyBlog/public/2018/04/03/JavaSE/jdk1.5/32/index.html","669add5f44b1d484f965a4dff18c7c59"],["D:/hexo/ButterflyBlog/public/2018/04/04/JavaSE/Collection/33/index.html","5f91fd09d1605f7895cf4ec632215fa8"],["D:/hexo/ButterflyBlog/public/2018/04/05/JavaSE/Collection/34/index.html","26b92f0e96f96454b69f4f401794de4d"],["D:/hexo/ButterflyBlog/public/2018/04/06/JavaSE/Collection/35/index.html","81cc6141453048a827fc8515423e770d"],["D:/hexo/ButterflyBlog/public/2018/04/06/JavaSE/Collection/36/index.html","36f2fb732bfe1b546947d2ebed657678"],["D:/hexo/ButterflyBlog/public/2018/04/06/JavaSE/Collection/37/index.html","29716511fc6e8a77bc7d79f09d430da2"],["D:/hexo/ButterflyBlog/public/2018/04/07/JVM/38/index.html","608eb5aa45c5da11b1ddb9844c11dcb4"],["D:/hexo/ButterflyBlog/public/2018/04/08/JVM/39/index.html","575fd386e6fb848f3ccf671a18228453"],["D:/hexo/ButterflyBlog/public/2018/04/09/JavaSE/jdk1.5/41/index.html","64626adec35afd65441c4385c3e3e51c"],["D:/hexo/ButterflyBlog/public/2018/04/10/JavaSE/jdk1.8/40/index.html","335f9acd6e07e536ad5594805a2501f7"],["D:/hexo/ButterflyBlog/public/2018/04/11/JavaEE/41/index.html","989b3341ca27f5f26a7fad86d3c4286d"],["D:/hexo/ButterflyBlog/public/2018/04/12/JavaEE/42/index.html","d211bb0a2c139ea433cf097c939b9cd1"],["D:/hexo/ButterflyBlog/public/2018/04/13/JavaEE/43/index.html","5144ce79d65279077769b325728b789c"],["D:/hexo/ButterflyBlog/public/2018/04/14/JavaEE/44/index.html","1352a0a81bad6e46f94636f05579a4ca"],["D:/hexo/ButterflyBlog/public/2018/05/02/Git/42/index.html","d76e825de8f011354734de8cb7a7abb0"],["D:/hexo/ButterflyBlog/public/2018/05/03/Git/43/index.html","a5035b586c9023d51abdf455ac785827"],["D:/hexo/ButterflyBlog/public/2018/05/04/Git/44/index.html","f6cfc713861e288b8acbf66b815117e3"],["D:/hexo/ButterflyBlog/public/2018/09/14/SimpleApp/幂等性/33/index.html","58e3e705303303506b103dee521c6017"],["D:/hexo/ButterflyBlog/public/2018/09/15/SimpleApp/三层架构+MVC/34/index.html","428488ea12ba63416183d7aa9029f0f8"],["D:/hexo/ButterflyBlog/public/2018/09/17/SimpleApp/Apache HttpClient/35/index.html","53d6703357fc64b5f40643118264957e"],["D:/hexo/ButterflyBlog/public/2018/09/18/SimpleApp/IDEA插件/36/index.html","66578e567a8b90280501ae6cf9214a56"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Intellij  IDEA/36/index.html","3c6638812ca911f903e0e4927b87ad54"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Jackson/37/index.html","42cf745cee8d22f290adec943bdf18e5"],["D:/hexo/ButterflyBlog/public/2018/09/20/SimpleApp/Java工具类/38/index.html","fdc415541d81c1c28abd5c80a844b5e8"],["D:/hexo/ButterflyBlog/public/2018/09/21/SimpleApp/Java工具类/39/index.html","eaaca49ef09f9eeff3a8f1c23d2af71b"],["D:/hexo/ButterflyBlog/public/2018/09/22/SimpleApp/Java工具类/40/index.html","4a2484982a86b3bad62126cd60dd3830"],["D:/hexo/ButterflyBlog/public/2018/09/23/SimpleApp/JavaScript插件/41/index.html","249607121c115a6f694c72a84c69a99b"],["D:/hexo/ButterflyBlog/public/2018/09/24/SimpleApp/JavaScript插件/42/index.html","2c22782a5f090e65ac742fe9c9f678f0"],["D:/hexo/ButterflyBlog/public/2018/09/25/SimpleApp/JavaScript插件/43/index.html","72d11bbf7d66999c11e09a20fbef5d3d"],["D:/hexo/ButterflyBlog/public/2018/09/26/SimpleApp/JavaScript插件/44/index.html","a02967b1f49962762c2f32f93abb6684"],["D:/hexo/ButterflyBlog/public/2018/09/27/SimpleApp/JavaScript插件/45/index.html","2ba7a97d135103567b60ea2aaab610df"],["D:/hexo/ButterflyBlog/public/2018/09/28/SimpleApp/JavaScript插件/46/index.html","b49f60bb394d061fa9287400184f9011"],["D:/hexo/ButterflyBlog/public/2018/09/29/SimpleApp/JUnit/47/index.html","f1f8562cf80f650fad8a7a49706dfc65"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/48/index.html","9332a57dfe491f115b1e897ec755940d"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/49/index.html","7f79b1e889eb5f7004a4e1dee2af8415"],["D:/hexo/ButterflyBlog/public/2018/10/01/SimpleApp/Log4j/50/index.html","8446e1d86553c469644707e883a83a91"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/51/index.html","b3c30b62217ebf4d92f571dd5291d237"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/52/index.html","f6688d5e2fcce3e44193fa700242ccec"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Maven/53/index.html","ed1f3aa586163f7a7cc2ececf4c51095"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/54/index.html","43b066bcec2775cc18f64ddae86d4cfe"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/55/index.html","89d5ce49bedbe7b3ff4cc570f435702c"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/56/index.html","7adf9e2348fbb4aa767edce1140100e2"],["D:/hexo/ButterflyBlog/public/2018/10/05/SimpleApp/Maven/57/index.html","01342f9c4de4bb1a5e46995712e3cb63"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/58/index.html","8d6590adac0bb27fbfe712021686ace7"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/59/index.html","d9f4367e696a2fb49cb545725d5fa62a"],["D:/hexo/ButterflyBlog/public/2018/10/07/SimpleApp/Maven/60/index.html","77db6dc8abcbd8fd11d282f0187fba8c"],["D:/hexo/ButterflyBlog/public/2018/10/08/SimpleApp/Maven/61/index.html","4300567055282780362d3e7a9e86403f"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/63/index.html","1bca33a8f69fc32b4a2c6eeb051b53e7"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/64/index.html","efaabe9b537a4cfee618ca42da438cbb"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/62/index.html","049c14d588f4ccdbafa23ac75df5a581"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/65/index.html","67e7375b22fdbebd2c44710cb1fda62b"],["D:/hexo/ButterflyBlog/public/2018/10/12/SimpleApp/Mybatis/66/index.html","ab5750fd1e78087e96a05628bd971bd8"],["D:/hexo/ButterflyBlog/public/2018/10/14/SimpleApp/Mybatis/68/index.html","67d23b13ff7616d2b6a0c56f0726acb2"],["D:/hexo/ButterflyBlog/public/2018/10/15/SimpleApp/Mybatis/67/index.html","b33cb8b6480450b848e0c3dbd72e0d50"],["D:/hexo/ButterflyBlog/public/2018/10/16/SimpleApp/Mybatis/69/index.html","490529d7b52470701da176ccd996a928"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/70/index.html","52c617ee2da33ccb02327cba61ceda06"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/71/index.html","887fba7170e48240a4b8b6cf61d6a9b0"],["D:/hexo/ButterflyBlog/public/2018/10/19/SimpleApp/RESTful/72/index.html","9daa55b6d45557047ebe1e298066484f"],["D:/hexo/ButterflyBlog/public/2018/10/20/SimpleApp/Spring/73/index.html","457bb9d4641e8d35a736d24eda5b19eb"],["D:/hexo/ButterflyBlog/public/2018/10/21/SimpleApp/Spring/74/index.html","2e1e2d66aa8b4eb2bef17f9918fce0ec"],["D:/hexo/ButterflyBlog/public/2018/10/22/SimpleApp/Spring MVC/82/index.html","1a324de637091648315a1b80044b46bd"],["D:/hexo/ButterflyBlog/public/2018/10/23/SimpleApp/Spring MVC/75/index.html","ddce64f19081a03adc5c2c819da69dbf"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/76/index.html","d266819f9ec5ab095dc9ef1fb6e3b3ba"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/77/index.html","c12cb178e93f78384375498cf961f9b6"],["D:/hexo/ButterflyBlog/public/2018/10/26/SimpleApp/Spring MVC/78/index.html","031321c512902c18c78adc7ae99664d0"],["D:/hexo/ButterflyBlog/public/2018/10/27/SimpleApp/Spring MVC/79/index.html","80e366c9fb526d0e250f4ee32ebff8c9"],["D:/hexo/ButterflyBlog/public/2018/10/28/SimpleApp/Spring MVC/80/index.html","55e5b98523ea79832c7816b2fa7f1e80"],["D:/hexo/ButterflyBlog/public/2018/10/29/SimpleApp/Spring MVC/81/index.html","207f9573c2ed21ea6c50e052f34a48f1"],["D:/hexo/ButterflyBlog/public/2018/11/01/SimpleApp/Spring MVC/83/index.html","dc7fb0bfdee7af0160bd1e4e5b6a85bf"],["D:/hexo/ButterflyBlog/public/2018/11/02/SimpleApp/Spring Web/84/index.html","a6058c85c5fa87a6d4d56ee647118c34"],["D:/hexo/ButterflyBlog/public/2018/11/03/SimpleApp/Spring Web/85/index.html","2ee5742f6d7e46867ef452bb8605eef7"],["D:/hexo/ButterflyBlog/public/2018/11/05/SimpleApp/Spring Web/86/index.html","7f2922ad1537311027bdb8e7f137dfe5"],["D:/hexo/ButterflyBlog/public/2018/11/06/SimpleApp/Spring Web/87/index.html","c94cac34a9ed0803f39b7eb3b93abec9"],["D:/hexo/ButterflyBlog/public/2018/11/07/SimpleApp/Spring Web/88/index.html","0b90848bf3ddb71d011c97a9775adc2b"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/89/index.html","829b897cd17124f3548cf9dc82626960"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/90/index.html","1a5e8c0f103c9489e05ec0d16aeb608e"],["D:/hexo/ButterflyBlog/public/2018/11/09/SimpleApp/Spring的事务管理/91/index.html","1b87541c695274f486f672b8666330b9"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","bde3e2373e0f62ffc6252c8c44112d76"],["D:/hexo/ButterflyBlog/public/404.html","0012e5cc5952e0d68a945ba98aae82e9"],["D:/hexo/ButterflyBlog/public/about/index.html","2c4b8448a772708a6fc59af3b7b1f771"],["D:/hexo/ButterflyBlog/public/archives/2018/03/index.html","a7fecb9b72cca1a409224841781a8a5c"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/2/index.html","eee41a9cd3e7a48eb4cb80d68a7af192"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/3/index.html","07f45409889a83d7447f712c1c15f8ef"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/4/index.html","69117c731cf6b7622cb0512e8d766cc6"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/5/index.html","e75e1821c800b68543c3ff330b7077a6"],["D:/hexo/ButterflyBlog/public/archives/2018/04/index.html","68765c5012be5845a94b8c3f41f4053e"],["D:/hexo/ButterflyBlog/public/archives/2018/04/page/2/index.html","95715e8227b8e9d70653e01e02a95aef"],["D:/hexo/ButterflyBlog/public/archives/2018/04/page/3/index.html","5eb7c3a3ad6493f1b6eb92c6c2655806"],["D:/hexo/ButterflyBlog/public/archives/2018/05/index.html","4c7d4622c1b9cd81a1c35b7c52726af7"],["D:/hexo/ButterflyBlog/public/archives/2018/09/index.html","c8502674677db74d74cabe62e2657dd2"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/2/index.html","87b2e2bd521a62fa1526346b7c38dd84"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/3/index.html","b9492bf1f833232421cf2a4a748ba4ec"],["D:/hexo/ButterflyBlog/public/archives/2018/10/index.html","332be5b5b817299e62959602c4d51780"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/2/index.html","4e05c994fc4578c5aebe061afce4fbbd"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/3/index.html","78a6fac9494abd1edc17e0b035460299"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/4/index.html","e1e65094372606dc84f0f7dc8819a519"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/5/index.html","0f6a49652d800eaf68bded5c3c0f569d"],["D:/hexo/ButterflyBlog/public/archives/2018/11/index.html","bf363f476b30c1987c324d2e799ac27a"],["D:/hexo/ButterflyBlog/public/archives/2018/11/page/2/index.html","01e3f887f1ed3547eaccfb01a3a09395"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","fda84e4e167925bd8fe65a02beb07db7"],["D:/hexo/ButterflyBlog/public/archives/2018/page/10/index.html","7a4feb929287fd4d85af2d0166025e90"],["D:/hexo/ButterflyBlog/public/archives/2018/page/11/index.html","3ed06dbcf2e20b799eb1abac1dffc792"],["D:/hexo/ButterflyBlog/public/archives/2018/page/12/index.html","a05f737c5f859019820ec43a189914d6"],["D:/hexo/ButterflyBlog/public/archives/2018/page/13/index.html","a272182f5d9c722a312c7123f774500f"],["D:/hexo/ButterflyBlog/public/archives/2018/page/14/index.html","dd80b95d0aadb239008a4b97c5dda191"],["D:/hexo/ButterflyBlog/public/archives/2018/page/15/index.html","709a6001c825655c766e253987a47f86"],["D:/hexo/ButterflyBlog/public/archives/2018/page/16/index.html","858c7f5b9f3bf02eaa2e97b4bc35a986"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","a2c66aace04d5f3aa94e39f1dca53dd4"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","175d2f2e0eaac759bf323c473f9d3133"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","7b392f24ba0076b0a3bf964380266e88"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","edb7c873cf969623a92fb51e3b321907"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","1bea645900b94853307f880278c3ced1"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","cd32972ca2cac9c850fd31a540a7a4c7"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","4a8703f3f5002d75128bc61c1b7029b3"],["D:/hexo/ButterflyBlog/public/archives/2018/page/9/index.html","234b730cfdb3b956084305ddd1150840"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","604ec4cda33efe7caf3bdc6c247e99b5"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","21817bea8f565a139255ebd4cb21604a"],["D:/hexo/ButterflyBlog/public/archives/index.html","9e522661c914f78175fb260c61dfaeb7"],["D:/hexo/ButterflyBlog/public/archives/page/10/index.html","c5a7269083992d425a15505ff486bc3c"],["D:/hexo/ButterflyBlog/public/archives/page/11/index.html","b74b52864b0fb0f5e88f147fe6c1798e"],["D:/hexo/ButterflyBlog/public/archives/page/12/index.html","0bfb1eb9088e295d14b38485bd441615"],["D:/hexo/ButterflyBlog/public/archives/page/13/index.html","32894e663ad61edb09fb8ade14367589"],["D:/hexo/ButterflyBlog/public/archives/page/14/index.html","185acd56bd397540fb5004a178135bc8"],["D:/hexo/ButterflyBlog/public/archives/page/15/index.html","c2c1d043a1742205e266546315a13ec7"],["D:/hexo/ButterflyBlog/public/archives/page/16/index.html","8a404797e1f65191598dea65397dd3af"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","c43daefdef61f7da95146c5f94b9c22e"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","d730f800d49ee33bcaf2c5d2113478c0"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","5b19388199a07a16624af25b2c5c6a46"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","77f63a08eba651e4f4d38cca47074ad0"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","f2d6d004e50cb6c189544a48fc08dc77"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","62c18ff20ac8d5fdb5d23bb5fdacc317"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","1d0fea22493e833fa839a50d1e365463"],["D:/hexo/ButterflyBlog/public/archives/page/9/index.html","760bfe7d8bc532ccaf1d07954c32e3f5"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/Git/index.html","93d09c8b577f3128f99ba832ce2b925c"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","38f1dcf3403b14b2ad666ea5bf1bdd75"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/JVM篇/index.html","9a902ff3e4cfa3e02b86a5dcc3d39f83"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java-面向对象/index.html","3acce35385031887f895a1c1f504f095"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/GUI/index.html","4a7ab00e86f69a48aa7d9d9f46c152f9"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/JDK常用API/index.html","f8e433edf688a58196223bd561da89db"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java-异常处理/index.html","7c2b85e2d2ff83e1bbc202225bea2186"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java-流-Stream-、文件-File-和IO/index.html","3db6814e253eeb2538882975e196b3b0"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java开发环境搭建/index.html","0a7cb97357ac6e83676dc7ff23311e7b"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java语言基础/index.html","44a23b6e0b60adab3768ad5006915709"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/index.html","f1fafd27865c53c416a656b1c1bd8b4e"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/page/2/index.html","ce90be0d17258bc3cce683db1f7114cf"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/page/3/index.html","0aa061e29f1c3a9fc95fdc6d59a54e3e"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java高级篇/index.html","2291b3cb69459dc5fa07f1cd58b61e54"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java高级篇/page/2/index.html","d0c25407eab473a3b5d42f1ff6293938"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","6e9489508acb4d751fe1cfc39809ef47"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","ab25e1956a777cc539681692b2a44937"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","5f08a6fb896b8479d89dd8038ebc4a04"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/4/index.html","216a777b7de6dcd7bac445ed5f7a9fb9"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/5/index.html","1d13bc8841c201327e8a818d7fdc9535"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/6/index.html","ed62ffd1a3d12ef0e90c2a3dfd8524bc"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/index.html","8a20a4dca148c855c8763a6251eb429d"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/2/index.html","cb13090fe9a3f6dfffd4c122078eafd8"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/3/index.html","7e7b34444af2af10f441346122348c9a"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/4/index.html","b4031f831be5c87b416af7e494887447"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/5/index.html","01ff570269086eb357d7bbdc5e1cd736"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/6/index.html","42de79f7699405a9fc0f5d62b7c271a9"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/7/index.html","490c22822fa1fe0f4c7d473e467e05da"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/8/index.html","4eb2696539a8b5747867488de51c48f5"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/9/index.html","ea2c8f70775c341a191e531f39491303"],["D:/hexo/ButterflyBlog/public/categories/index.html","10cc74e5728df33cb0b897536b7355c4"],["D:/hexo/ButterflyBlog/public/css/background.css","6c1994a210210a89e045a029b8a8db69"],["D:/hexo/ButterflyBlog/public/css/index.css","015036838b971ea439334efa3a760be0"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/gallery/index.html","950d99c569b9816d96a30d64af84425c"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","510e9aae423dd4ec5f293ac222a0ad06"],["D:/hexo/ButterflyBlog/public/java/index.html","876326060ed67809126b1aee7a67aab1"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/movies/index.html","cde1cd51437c03dc0a7b0059b5778884"],["D:/hexo/ButterflyBlog/public/music/index.html","b5ef4fc91adc97d9b4b95d228570a1b9"],["D:/hexo/ButterflyBlog/public/page/10/index.html","dadcdb32f02fea0cea2d7edce1fb1da4"],["D:/hexo/ButterflyBlog/public/page/11/index.html","82033a23c4d28318cf76092847c581ec"],["D:/hexo/ButterflyBlog/public/page/12/index.html","038b2667e667700a442009cf0aac7c9e"],["D:/hexo/ButterflyBlog/public/page/13/index.html","06936ea028ff959286adb382be576cf4"],["D:/hexo/ButterflyBlog/public/page/14/index.html","d80f3223485b86b6c604d648a27220d8"],["D:/hexo/ButterflyBlog/public/page/15/index.html","70546ae3f629a621477ae2dbdfd87d66"],["D:/hexo/ButterflyBlog/public/page/16/index.html","2db7bade8eb67843434a34e33833016d"],["D:/hexo/ButterflyBlog/public/page/2/index.html","56e09bd1014115ac55cb751ef83f4f4d"],["D:/hexo/ButterflyBlog/public/page/3/index.html","7ce2226f93d3ed31798b568e7d25987f"],["D:/hexo/ButterflyBlog/public/page/4/index.html","857c6293a3c5c68008b94b1831767934"],["D:/hexo/ButterflyBlog/public/page/5/index.html","8469d54e1ac719299cf5342b6aa1108e"],["D:/hexo/ButterflyBlog/public/page/6/index.html","b1bfe08ee6e0fed29fe35033f6a30b59"],["D:/hexo/ButterflyBlog/public/page/7/index.html","7f40370020bf20c498501171f177bd6a"],["D:/hexo/ButterflyBlog/public/page/8/index.html","1caedd430d5feebb6b6ce21fd21faeee"],["D:/hexo/ButterflyBlog/public/page/9/index.html","41f905c0eadfe5b134628e407c2395a2"],["D:/hexo/ButterflyBlog/public/python/index.html","fcdd76d310a0234c3e764307824409b0"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","814276571915876ae3be8b4a033b2a9f"],["D:/hexo/ButterflyBlog/public/tags/Annontation/index.html","cee60d90e8fc242708f5c7cb64068db0"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","b50146594a379c59b40c4913ff6b6960"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","f9c2f6ad5dd14a237e27774743c7dc0e"],["D:/hexo/ButterflyBlog/public/tags/Druid/page/2/index.html","74d05f266520aad699d73ddb04bbfe85"],["D:/hexo/ButterflyBlog/public/tags/Git/index.html","b541b4f391bef9ad5cd6afa236be92a8"],["D:/hexo/ButterflyBlog/public/tags/Http/index.html","b13b44ba977b69606571a518792d415f"],["D:/hexo/ButterflyBlog/public/tags/IDEA/index.html","cfa61a30d69610bed8bde632423ef6cf"],["D:/hexo/ButterflyBlog/public/tags/IDEA插件/index.html","6710973b3dab43ccd0bc7b121f2f2e59"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","963f07ecfa73e5655afe3e4e962502c1"],["D:/hexo/ButterflyBlog/public/tags/JDK1-8新特性/index.html","9cee92f2301cd967265a0c9cc7941ab9"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","c7f1a92abc6d1f649b178b644666cea1"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","82b53b109386cee6f2b909e78d1f7fb9"],["D:/hexo/ButterflyBlog/public/tags/JVM/index.html","e0940f75d1ee588a8800405e9fb1310b"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","6e107f90aa579857ad8b560b579f2fb5"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","f4083eab44c85ee6f87a7cad4da47a27"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","a1ebef1d9694061cb0f5b3e9efa0fb59"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","b5c67b9d9925a99ffc5a9d31cb9f4370"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/4/index.html","61316bbf584b4344d61ba32ec9ddefa3"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/5/index.html","521705a4bdb4c100de3c3cd10834ff2d"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/6/index.html","b698d085ac0fbfb5c557101114727282"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","f2bb2a45b815da0e6d822dbb14e0cda6"],["D:/hexo/ButterflyBlog/public/tags/Linux/index.html","19d7cbe713c4095570ce34b80f59e7be"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","759edf85f500043945a185fc9edf7fb9"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","b7aa819320cea5a955088d9989834c8f"],["D:/hexo/ButterflyBlog/public/tags/MVC/page/2/index.html","7f0b09fe37b8a62bbbf55526bd098352"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","9b02776cf9588fb625210cb94283d322"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","70ef588b521c9b76a59aab9f13ac3e8b"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/3/index.html","e3254a31dfc11f0831ac2338f6d19992"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/4/index.html","8210d7b448fbe9ef4a411529269dc02c"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/5/index.html","d67aa5819d69fa3ea466cc6690637065"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/6/index.html","ab2ca686bc86c764d633a3b0541bfc8d"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","6773103c42fbacd9f8e612f9a37b50f4"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/page/2/index.html","073cf022ccbbb52d458ab95767f5e30a"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","11b607cd64cdc0ab759fc47902ff120b"],["D:/hexo/ButterflyBlog/public/tags/SQL/index.html","2af5f0d5684fca664a89ebcb8dda930c"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","eeb1d8a36488ad39227fb4fff2f0d9f5"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","1380c2b47b706912763076e35a0055f1"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","de6d2b55c5054bd71a299971b47d43d2"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/3/index.html","6abfcc84bc6efd80ff88efe5f4015031"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/4/index.html","79a942bfad54d1a8d7069a6028a48888"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","d04d57f504723c58cc6eb8d77d5d03be"],["D:/hexo/ButterflyBlog/public/tags/SpringWeb/index.html","99d65f9591a8c2e4b3dab069ede4ed47"],["D:/hexo/ButterflyBlog/public/tags/Springtx/index.html","c8a2bcf32ac22adcf8062dc162893675"],["D:/hexo/ButterflyBlog/public/tags/index.html","96e49ed56ac748601b00ed493de3f6e1"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","735d039b161de1930e85ac6d58ad36bb"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","388f8575f82d3b4ee12c326cab5ffe15"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","6a28005e2adc8939a370be21e2f64eba"],["D:/hexo/ButterflyBlog/public/tags/数据结构/index.html","b3d1aa90c934e771469ba51201a34df9"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","5322ee1d92e309ec7c5809369846064b"],["D:/hexo/ButterflyBlog/public/tags/架构/page/2/index.html","50a1353ba5b50528277c3178d9af5be2"],["D:/hexo/ButterflyBlog/public/tags/架构/page/3/index.html","5ea85eca7e1835c12ee94c63cede1a8b"],["D:/hexo/ButterflyBlog/public/tags/架构/page/4/index.html","8db8507a2dbda7afa4d30c414315f97f"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","a76f63b871d12991019c4af43ffa7d90"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







