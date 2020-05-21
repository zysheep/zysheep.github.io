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

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/06/05/javaSE/JDK/00/index.html","28314fbfffcdf4334439ab13232f1eab"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/01/index.html","6a9862d1a757196383f32e316d543336"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/02/index.html","5afe1b38bcadce44e569ad640932e129"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/03/index.html","e35699cc8c543b2fcb104eba66cc90d7"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/04/index.html","f260f1672b3835d43a9e777470a890c1"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/05/index.html","986821b3242f79b306a069d05d36b635"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/06/index.html","7770a9a6db9e4b4960cf8ba9bdb2d80b"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/OOP/07/index.html","340a445085205c45ddb4aadd4774e07d"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/08/index.html","4ea854123d52cadef9fa3b6ea7871dcb"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/09/index.html","dc1cc490adb3318c93f5a6c9493a86e6"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/10/index.html","e68e75048645618b89c696635a0cf08c"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/11/index.html","c7376e5a3ac160a2a7652c22a26330eb"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/12/index.html","1d0b67dfc67b4d457825e698a0a09aae"],["D:/hexo/ButterflyBlog/public/2018/06/10/javaSE/Thread/13/index.html","4a5d20dbe06bbeeb99d2bc675bd9def5"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/String/15/index.html","830a476aafc340e349f8902405286909"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/Thread/14/index.html","fb0a3403575089fd9305e1da7fdfa739"],["D:/hexo/ButterflyBlog/public/2018/06/12/javaSE/String/16/index.html","1f1d818b5d951b91b777b5643dc5cf8b"],["D:/hexo/ButterflyBlog/public/2018/06/14/javaSE/Collection/21/index.html","7083972eab928f40bde7cd14b6ca825a"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/17/index.html","e938675728d9ca6fd14d12c0747d5f5d"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/18/index.html","edc7518422b73ab40b69f0455548462c"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/20/index.html","e09e4438422fb63881a0c0021e52ee51"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/22/index.html","d7d4b14cb3877c55871e3a9e8b41e2ce"],["D:/hexo/ButterflyBlog/public/2018/06/18/javaSE/Collection/19/index.html","bcc6e5f1acdcaf25b9576bb2cca511dd"],["D:/hexo/ButterflyBlog/public/2018/06/19/javaSE/IO/24/index.html","8d0d2be99a2012ed3d0d89b0ac781543"],["D:/hexo/ButterflyBlog/public/2018/06/20/javaSE/IO/23/index.html","fb6381cb6a3ed4c17ae0766366787e1f"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/29/index.html","69da4f61811610c8bccd8fb192d2ea4a"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/30/index.html","6d379a65e4841de4a8383f8edde78975"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/31/index.html","6cd80ea5cecec702a7bd5569d984699d"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/32/index.html","99c10c8d6b6d367005fb6092aae0ba1a"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/GUI/27/index.html","dc50a2e49cb704be478e9fb8216649ed"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/Socket/28/index.html","790bf53a6c2614c1502e38ee3eaddb03"],["D:/hexo/ButterflyBlog/public/2018/09/14/SimpleApp/幂等性/33/index.html","e0151ffb7fe882cd4d0aa239f77802be"],["D:/hexo/ButterflyBlog/public/2018/09/15/SimpleApp/三层架构+MVC/34/index.html","f0c303b4dd8f34264262b24b8e04052a"],["D:/hexo/ButterflyBlog/public/2018/09/17/SimpleApp/Apache HttpClient/35/index.html","9b38df5804b9f7524472f783a6091147"],["D:/hexo/ButterflyBlog/public/2018/09/18/SimpleApp/IDEA插件/36/index.html","f7a41bbc3bf9860e6367ac51ea511a53"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Intellij  IDEA/36/index.html","341d7402913bbc16ac30c1e81bbaee20"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Jackson/37/index.html","6d5e3c51c545610e517cd8da925fb417"],["D:/hexo/ButterflyBlog/public/2018/09/20/SimpleApp/Java工具类/38/index.html","90a16c012ac767adb91f07612507f5b3"],["D:/hexo/ButterflyBlog/public/2018/09/21/SimpleApp/Java工具类/39/index.html","4ec17795c65c22e673ad45d982df0124"],["D:/hexo/ButterflyBlog/public/2018/09/22/SimpleApp/Java工具类/40/index.html","747cfa2788b3d51a2ee3a563732f03f0"],["D:/hexo/ButterflyBlog/public/2018/09/23/SimpleApp/JavaScript插件/41/index.html","9f5fa8b679c42e62e88b5c3e2659ea2a"],["D:/hexo/ButterflyBlog/public/2018/09/24/SimpleApp/JavaScript插件/42/index.html","b25ade362a5625de4f7f2ec7f04f726b"],["D:/hexo/ButterflyBlog/public/2018/09/25/SimpleApp/JavaScript插件/43/index.html","9d72a929f8841c86a37a6e26f6b24a1c"],["D:/hexo/ButterflyBlog/public/2018/09/26/SimpleApp/JavaScript插件/44/index.html","faf2118cfbac55ef8f4e0d78b25bcdf6"],["D:/hexo/ButterflyBlog/public/2018/09/27/SimpleApp/JavaScript插件/45/index.html","2b0df2934e3581f60b1a0b549d9be030"],["D:/hexo/ButterflyBlog/public/2018/09/28/SimpleApp/JavaScript插件/46/index.html","6eaf2a736793eb5e838dfc80d228bdef"],["D:/hexo/ButterflyBlog/public/2018/09/29/SimpleApp/JUnit/47/index.html","4ee625e40816be06dd4494758040570e"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/48/index.html","abb0f351162c9170261c9c101f7eac45"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/49/index.html","5208a063e9ce59b9049c7b29813615c4"],["D:/hexo/ButterflyBlog/public/2018/10/01/SimpleApp/Log4j/50/index.html","750d1dda0b6b5b1a150e25804e164599"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/51/index.html","b5a3092da7df588ae7825ad0e78421ad"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/52/index.html","f9d76f2c325502106d9f444c34d4b17a"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Maven/53/index.html","1ed1add004e48432c3da6bd569d5e2f4"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/54/index.html","6ec8088823b2db9826677e329799d5c4"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/55/index.html","65c3a41a121428c64bbfeb8c81a64284"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/56/index.html","78e45b54e9c7ff2db6155a1e402e4e89"],["D:/hexo/ButterflyBlog/public/2018/10/05/SimpleApp/Maven/57/index.html","c529cc526db72fffb60598332621280a"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/58/index.html","c0b2f02a409ced4308195bb2c7b07879"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/59/index.html","518a4ae236ae952c2d32d2b885d95f9b"],["D:/hexo/ButterflyBlog/public/2018/10/07/SimpleApp/Maven/60/index.html","f92608542465b69a6c10b86bd1ab8709"],["D:/hexo/ButterflyBlog/public/2018/10/08/SimpleApp/Maven/61/index.html","3de499aafc025c73ce431f03af8f0bbb"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/63/index.html","faf6d7c220f7f8f4d42657ad22294b6e"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/64/index.html","204cfa580c004c842735867af71b5485"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/62/index.html","9f565ca13728dcb7d403f1ff9903d29d"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/65/index.html","9db28b1f1c85aeac130efcfac136b787"],["D:/hexo/ButterflyBlog/public/2018/10/12/SimpleApp/Mybatis/66/index.html","5f01780fc5b0cffb8964f3ad0151299b"],["D:/hexo/ButterflyBlog/public/2018/10/14/SimpleApp/Mybatis/68/index.html","8fd0c076c3568f2d3400f2e5e39583fd"],["D:/hexo/ButterflyBlog/public/2018/10/15/SimpleApp/Mybatis/67/index.html","0d9022907fb28365eb4033ae2ab696da"],["D:/hexo/ButterflyBlog/public/2018/10/16/SimpleApp/Mybatis/69/index.html","050ae4aa9e10bf2fb7ccc5b0c6f78fd3"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/70/index.html","0c84e5e431eaf0615096a423f2909dd5"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/71/index.html","e84e41ae2101db5eae0a2c8514d95ac4"],["D:/hexo/ButterflyBlog/public/2018/10/19/SimpleApp/RESTful/72/index.html","d7be7849040cf264976fd9476512780f"],["D:/hexo/ButterflyBlog/public/2018/10/20/SimpleApp/Spring/73/index.html","4cf9cd72eca328bdb4ed18f6503ce8e9"],["D:/hexo/ButterflyBlog/public/2018/10/21/SimpleApp/Spring/74/index.html","822d2de4a32890ed7e208c5b211d7a25"],["D:/hexo/ButterflyBlog/public/2018/10/22/SimpleApp/Spring MVC/82/index.html","83e4ca33844474c2f421a4e6df3a5749"],["D:/hexo/ButterflyBlog/public/2018/10/23/SimpleApp/Spring MVC/75/index.html","b9866acc53eaf46502f7aea7ea94f39f"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/76/index.html","38b529a1ee660927a7479e86f06581af"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/77/index.html","abf62da0e20145fdb77b63ec685bc410"],["D:/hexo/ButterflyBlog/public/2018/10/26/SimpleApp/Spring MVC/78/index.html","d1b6ea34bc0dc8a09512e87e2a93dc23"],["D:/hexo/ButterflyBlog/public/2018/10/27/SimpleApp/Spring MVC/79/index.html","b087d4b3b68ab7604d61b85a866619ef"],["D:/hexo/ButterflyBlog/public/2018/10/28/SimpleApp/Spring MVC/80/index.html","1c6301fc9180ca67ee3ffde38e24de1f"],["D:/hexo/ButterflyBlog/public/2018/10/29/SimpleApp/Spring MVC/81/index.html","c80f49b2f6ef34c2a930416a57777b48"],["D:/hexo/ButterflyBlog/public/2018/11/01/SimpleApp/Spring MVC/83/index.html","6ed8a1679776219cad7102fe2d157199"],["D:/hexo/ButterflyBlog/public/2018/11/02/SimpleApp/Spring Web/84/index.html","f50b8c0c5f4916d81ff41e7013321175"],["D:/hexo/ButterflyBlog/public/2018/11/03/SimpleApp/Spring Web/85/index.html","90b6aa0c39b6c921d62196c19b886abf"],["D:/hexo/ButterflyBlog/public/2018/11/05/SimpleApp/Spring Web/86/index.html","9ba1f16c0c7b29a43d50a7121994a155"],["D:/hexo/ButterflyBlog/public/2018/11/06/SimpleApp/Spring Web/87/index.html","3454aafb36deda459dd42432ed2ee2e3"],["D:/hexo/ButterflyBlog/public/2018/11/07/SimpleApp/Spring Web/88/index.html","cd79e9bb448dcc5f5af556e7cc222f8f"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/89/index.html","53219b9cd7e055ba71e2cbfccc947e63"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/90/index.html","d9fa724497a3e32fafc647190090b49b"],["D:/hexo/ButterflyBlog/public/2018/11/09/SimpleApp/Spring的事务管理/91/index.html","4fd587cc604cb93f78e6dbf885820b8f"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","1b702bde0008b4f54bb376a3159a18b9"],["D:/hexo/ButterflyBlog/public/404.html","edbcac1bcbad7981d71edda29c9226a0"],["D:/hexo/ButterflyBlog/public/about/index.html","473cbef1c171c097ca92bc68522378bf"],["D:/hexo/ButterflyBlog/public/archives/2018/06/index.html","52ceb51904c86f2770a4acd48700cd9a"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/2/index.html","e630e8abfb6f9df451032b0e3ddb6ef8"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/3/index.html","770af0ce17cbfceed286dfe12fcc51eb"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/4/index.html","2695778d6a4cb348a9024c13a5b3b049"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/5/index.html","3cf6dfd81c9236e3c1ad101c52c90ff1"],["D:/hexo/ButterflyBlog/public/archives/2018/09/index.html","691e68c4b351fd33b65926577f4460af"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/2/index.html","a2d15465c2417054a6b956b80dfa3312"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/3/index.html","c712e98ccc50b61b29feb9ac21079a2b"],["D:/hexo/ButterflyBlog/public/archives/2018/10/index.html","a60385777ad09b29f5569451e863dfe1"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/2/index.html","aabbcc39777142e980cf90ab41b0e6bf"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/3/index.html","8852ae69d4fc35461cce7eb6b2b75864"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/4/index.html","b14f0ab988da5d0ca35642234b1392f3"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/5/index.html","12e48caa32df710cbd190747ba2d26dc"],["D:/hexo/ButterflyBlog/public/archives/2018/11/index.html","cf0da46529ac0ed323fd0f14e0f91c39"],["D:/hexo/ButterflyBlog/public/archives/2018/11/page/2/index.html","34fe6a978260783071206fb48f7936a2"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","e6b76e2767898a2ff94c4adc9f5323aa"],["D:/hexo/ButterflyBlog/public/archives/2018/page/10/index.html","0b581806398cde1d5a477b16678ffb4b"],["D:/hexo/ButterflyBlog/public/archives/2018/page/11/index.html","e3659138f8cdda82f930a7dcb30ea278"],["D:/hexo/ButterflyBlog/public/archives/2018/page/12/index.html","5ff4adfcaaddcbbe6c151a422d3996f9"],["D:/hexo/ButterflyBlog/public/archives/2018/page/13/index.html","70744f4150f9f0f689b4e8098f513179"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","59bfd7fd376abf51a450c48b88870670"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","2f034c3c9ad48a7df6b96f92209de635"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","da99b92968fb04ce460a77956d3ed69b"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","445201d4137f2571ff9221afa619abba"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","47c8f83c67ed6f4343b66fad2d29bbef"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","b0afc0323420a07decfc7cb79649ffea"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","b481e57823e38b70a38b368d6675c301"],["D:/hexo/ButterflyBlog/public/archives/2018/page/9/index.html","12c48c81dfa90ccf63636529d1775de1"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","0b29eb4e6471cd33811f576ef9f0c381"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","9ca24b5fb8a3eb4916174fabe152f9d8"],["D:/hexo/ButterflyBlog/public/archives/index.html","c17380177ea67abc3ad7d71ed1e89030"],["D:/hexo/ButterflyBlog/public/archives/page/10/index.html","ee0d7468555b0edb36d4eaf327ef75c9"],["D:/hexo/ButterflyBlog/public/archives/page/11/index.html","632fbaa192fcdd4af6252b8cd14e2f11"],["D:/hexo/ButterflyBlog/public/archives/page/12/index.html","42fd034a45d6dc93d09a94edbe320b90"],["D:/hexo/ButterflyBlog/public/archives/page/13/index.html","7e4857d5088b98dd845994973b12cabe"],["D:/hexo/ButterflyBlog/public/archives/page/14/index.html","4ff1ff4d404bede489d2dac1e9da1032"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","6f178e11e57a19e9e1bcb25510cccfa8"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","843b7c3d82e85c452ec11ffe02e086fb"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","9aea023a52b43bd27186ac71b5d60a51"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","943d1e2c01f7feaadd4aff384a6900a7"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","aae77bdfa32e6fab88ab219b5cfb5b06"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","f730fad12b9c6996e93cd140942a5403"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","bb9c361332a530dfeef0ce0f16aff5c3"],["D:/hexo/ButterflyBlog/public/archives/page/9/index.html","2df00877d71e9ad675844c88d6672ace"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","6be56c9414ffd033b91e3f106fabf1ba"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","15883b81d85e43588d5e7677161a1204"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","07dbd88fd55085cd6c50e5a6d3a3a384"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","f5a0a8b9efcd62f91aa986bf4001b030"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/4/index.html","27d3f34ee4e6d6b40517248e0cb3790f"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/index.html","8aea5c68099e3419a4212f7404b8ed37"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/2/index.html","92e9be96781140efd05ff0eaf98b2617"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/3/index.html","85c2dc53a3e31fd95ed9245c94ec1fd8"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/4/index.html","7d1ffa0477b9b0961c7e8f236d6cbb07"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/5/index.html","6bed54ed7d040a697b58078ede822055"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/6/index.html","e328e3513c9a6cc577c66fda7604861f"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/7/index.html","d9be9729193359d0d48d26e15d3d6a30"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/8/index.html","502410e36260dc36ebaf246313008b8f"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/9/index.html","06e525e919a6dd0ee2edf1b06bbcb39e"],["D:/hexo/ButterflyBlog/public/categories/index.html","f4612068002d337b1a09d7d9a4fe9169"],["D:/hexo/ButterflyBlog/public/css/index.css","50f2f84525817750a73514f77b0c55af"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/gallery/index.html","fbc841593fbc18b7e531b37e5f458229"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","024c27280ae9f683d7b9eabe72526bb5"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/movies/index.html","6726bd738c93e3781f5fa1146763cccd"],["D:/hexo/ButterflyBlog/public/music/index.html","93eeda1ba9b59abb1317fe7481cdc45f"],["D:/hexo/ButterflyBlog/public/page/10/index.html","6934544245a943aa2ddb248a7d48712c"],["D:/hexo/ButterflyBlog/public/page/11/index.html","2cfce84ef808c2a394da2043f64f6f7a"],["D:/hexo/ButterflyBlog/public/page/12/index.html","0f17c16edfa3f6373a568f78b49851c2"],["D:/hexo/ButterflyBlog/public/page/13/index.html","0ab68b776b3a17bfca7434f765c91e8a"],["D:/hexo/ButterflyBlog/public/page/14/index.html","47295ba16e75e3f9c4d79df7f262c862"],["D:/hexo/ButterflyBlog/public/page/2/index.html","97b113ceba8c77bfa83fd8442d5ae94a"],["D:/hexo/ButterflyBlog/public/page/3/index.html","126be194c7e0fe04674351ba12f919a6"],["D:/hexo/ButterflyBlog/public/page/4/index.html","6156b01ec324f1b73978696407f24860"],["D:/hexo/ButterflyBlog/public/page/5/index.html","72a94fa7d22611151cb264e0f776c5b7"],["D:/hexo/ButterflyBlog/public/page/6/index.html","543bd4252d1b1e3e6259e86e02fc7bcc"],["D:/hexo/ButterflyBlog/public/page/7/index.html","fbfb06c32cbbdadf765756803cabcf53"],["D:/hexo/ButterflyBlog/public/page/8/index.html","0208f18be060c248daaac29118d5f094"],["D:/hexo/ButterflyBlog/public/page/9/index.html","8c6848930fffce1d6292da8c41990da6"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","3079e0264c93ae884a93a76cf98894a7"],["D:/hexo/ButterflyBlog/public/tags/Annontation/index.html","6b3569b6bce136975ef2ddb806fd5363"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","579cb211db863844614953ff429d692e"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","1befb3c3c9d98dc21007306a1399d031"],["D:/hexo/ButterflyBlog/public/tags/Druid/page/2/index.html","df849f40f2d5d1fe42a84d5e8fbda01a"],["D:/hexo/ButterflyBlog/public/tags/File/index.html","2c3e4334ef9b3fc50859ac8a8717a6f5"],["D:/hexo/ButterflyBlog/public/tags/GUI/index.html","03aacb037c9fa6952f705c5cc2b356bc"],["D:/hexo/ButterflyBlog/public/tags/Http/index.html","6931bfc8e3b57bdc00c0b90b16814dbc"],["D:/hexo/ButterflyBlog/public/tags/IDEA/index.html","a3febf23ac76b43e0443c6e8b3e1ad2d"],["D:/hexo/ButterflyBlog/public/tags/IDEA插件/index.html","35328966525c170b674f834b6d9c0bd0"],["D:/hexo/ButterflyBlog/public/tags/IO/index.html","5ca4d20b4fbce15d3d47aee79faaebe8"],["D:/hexo/ButterflyBlog/public/tags/JDK/index.html","968a14f09a1e9efe25893dddde14e30c"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","8ed7ee4476c869d30906dfa4b8ba10ac"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","6f5c83be957ab3db75cd5682d6fc5797"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","a906b92810f3d1dd5e73af812d27ed47"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","d4a32d4fda228748123ff0d88b0ca117"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","27789d0a4f093e714f504288be211bdc"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","f552ca890d59837c99a6b49d221708a7"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","068373fd3bd2eabdecae361747383288"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/4/index.html","61aa9e51d7cf23dd782ebc7f394f3539"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","16cb3f6d9c0303174fb87e2f33a9091e"],["D:/hexo/ButterflyBlog/public/tags/Jsp/index.html","b16601a61033e82c533b210d133bbefe"],["D:/hexo/ButterflyBlog/public/tags/Linux/index.html","12062d58342da6403a5152140ce11982"],["D:/hexo/ButterflyBlog/public/tags/List/index.html","578ccc0b93e1d75003dae1f75a082b92"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","30a02e05ef3f68210ada8dac59a5ddb0"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","69b7693d1974dbbb4bf2e5e71d22991f"],["D:/hexo/ButterflyBlog/public/tags/MVC/page/2/index.html","35eb559eef7866c44aaefa047190dfba"],["D:/hexo/ButterflyBlog/public/tags/Map/index.html","f07f63353bf2c4f31a962e173d3290d7"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","b50918fff2448b24475b3494e6a2517d"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","ccef6efac0a1be3a99e7147b730c372a"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/3/index.html","ce7f9a9773e6ddbcaeb9f888a863ddc1"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/4/index.html","fd92b8a005a49deca5e1f3dddb16e81e"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/5/index.html","d8688eac97dd290460b2179f5cc884ff"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/6/index.html","c0a879c479c8374ab5c3ecda0d6bd904"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","59954972d083af19514981c8fccf2889"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/page/2/index.html","87f172598b15bd6e112fd57a04d4a309"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","3d1ee98c0b97114ed31c759b24355f6e"],["D:/hexo/ButterflyBlog/public/tags/SQL/index.html","cddfe20b0a63fefc8390297de909afdc"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","cee04cd2306e0ecb3c1c2f4c8a7f8b1f"],["D:/hexo/ButterflyBlog/public/tags/Set/index.html","233a91244c30d80bd27367610d786623"],["D:/hexo/ButterflyBlog/public/tags/Socket/index.html","c4c05cd4e1bf4ad73d83453c16d790e2"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","391781f90945feaa50aa899b25e4fc17"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","178ecac09d87415b81a28175b41eee2c"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/3/index.html","58040479b376b32f920ade67b597ea02"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/4/index.html","e9d8f63487c38bd0062c3afe19409667"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","20a22b7c2a327d3048a5cf16e3def443"],["D:/hexo/ButterflyBlog/public/tags/SpringWeb/index.html","cce048d2ac0976eefb7f3d0143b1fd1e"],["D:/hexo/ButterflyBlog/public/tags/Springtx/index.html","c615733106307f3e20e84be624170e35"],["D:/hexo/ButterflyBlog/public/tags/index.html","2ef72952b174b5bdddcb91daa9447032"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","c9cc3d4197ee095e138a85a6879456d1"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","6d6bbf479c67738f6f0c8b024bc49fba"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","c169709a6d647c82157dc66bd763f82d"],["D:/hexo/ButterflyBlog/public/tags/数组/index.html","e9a3f7ac4d84695967eb4632dc2f0a12"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","e84f6dc71c9887f509087e303921a213"],["D:/hexo/ButterflyBlog/public/tags/架构/page/2/index.html","b14efbeccdede2d91d017eb0dcb6379c"],["D:/hexo/ButterflyBlog/public/tags/架构/page/3/index.html","be3b54f75c4ffa3426c3ff02f55c6074"],["D:/hexo/ButterflyBlog/public/tags/架构/page/4/index.html","7d845c5396304a0ff281b9735a778e78"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","1b48390d681c2b53c0e449a1030fd4bc"]];
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







