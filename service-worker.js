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

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/06/05/javaSE/JDK/00/index.html","28314fbfffcdf4334439ab13232f1eab"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/01/index.html","6a9862d1a757196383f32e316d543336"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/02/index.html","5afe1b38bcadce44e569ad640932e129"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/03/index.html","e35699cc8c543b2fcb104eba66cc90d7"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/04/index.html","f260f1672b3835d43a9e777470a890c1"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/05/index.html","986821b3242f79b306a069d05d36b635"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/06/index.html","7770a9a6db9e4b4960cf8ba9bdb2d80b"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/OOP/07/index.html","340a445085205c45ddb4aadd4774e07d"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/08/index.html","4ea854123d52cadef9fa3b6ea7871dcb"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/09/index.html","dc1cc490adb3318c93f5a6c9493a86e6"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/10/index.html","e68e75048645618b89c696635a0cf08c"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/11/index.html","c7376e5a3ac160a2a7652c22a26330eb"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/12/index.html","1d0b67dfc67b4d457825e698a0a09aae"],["D:/hexo/ButterflyBlog/public/2018/06/10/javaSE/Thread/13/index.html","4a5d20dbe06bbeeb99d2bc675bd9def5"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/String/15/index.html","830a476aafc340e349f8902405286909"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/Thread/14/index.html","fb0a3403575089fd9305e1da7fdfa739"],["D:/hexo/ButterflyBlog/public/2018/06/12/javaSE/String/16/index.html","1f1d818b5d951b91b777b5643dc5cf8b"],["D:/hexo/ButterflyBlog/public/2018/06/14/javaSE/Collection/21/index.html","7083972eab928f40bde7cd14b6ca825a"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/17/index.html","e938675728d9ca6fd14d12c0747d5f5d"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/18/index.html","edc7518422b73ab40b69f0455548462c"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/20/index.html","e09e4438422fb63881a0c0021e52ee51"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/22/index.html","d7d4b14cb3877c55871e3a9e8b41e2ce"],["D:/hexo/ButterflyBlog/public/2018/06/18/javaSE/Collection/19/index.html","bcc6e5f1acdcaf25b9576bb2cca511dd"],["D:/hexo/ButterflyBlog/public/2018/06/19/javaSE/IO/24/index.html","8d0d2be99a2012ed3d0d89b0ac781543"],["D:/hexo/ButterflyBlog/public/2018/06/20/javaSE/IO/23/index.html","fb6381cb6a3ed4c17ae0766366787e1f"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/29/index.html","69da4f61811610c8bccd8fb192d2ea4a"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/30/index.html","6d379a65e4841de4a8383f8edde78975"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/31/index.html","6cd80ea5cecec702a7bd5569d984699d"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/32/index.html","99c10c8d6b6d367005fb6092aae0ba1a"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/GUI/27/index.html","dc50a2e49cb704be478e9fb8216649ed"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/Socket/28/index.html","790bf53a6c2614c1502e38ee3eaddb03"],["D:/hexo/ButterflyBlog/public/2018/09/14/SimpleApp/幂等性/33/index.html","e0151ffb7fe882cd4d0aa239f77802be"],["D:/hexo/ButterflyBlog/public/2018/09/15/SimpleApp/三层架构+MVC/34/index.html","f0c303b4dd8f34264262b24b8e04052a"],["D:/hexo/ButterflyBlog/public/2018/09/17/SimpleApp/Apache HttpClient/35/index.html","9b38df5804b9f7524472f783a6091147"],["D:/hexo/ButterflyBlog/public/2018/09/18/SimpleApp/IDEA插件/36/index.html","f7a41bbc3bf9860e6367ac51ea511a53"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Intellij  IDEA/36/index.html","341d7402913bbc16ac30c1e81bbaee20"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Jackson/37/index.html","6d5e3c51c545610e517cd8da925fb417"],["D:/hexo/ButterflyBlog/public/2018/09/20/SimpleApp/Java工具类/38/index.html","90a16c012ac767adb91f07612507f5b3"],["D:/hexo/ButterflyBlog/public/2018/09/21/SimpleApp/Java工具类/39/index.html","4ec17795c65c22e673ad45d982df0124"],["D:/hexo/ButterflyBlog/public/2018/09/22/SimpleApp/Java工具类/40/index.html","747cfa2788b3d51a2ee3a563732f03f0"],["D:/hexo/ButterflyBlog/public/2018/09/23/SimpleApp/JavaScript插件/41/index.html","9f5fa8b679c42e62e88b5c3e2659ea2a"],["D:/hexo/ButterflyBlog/public/2018/09/24/SimpleApp/JavaScript插件/42/index.html","b25ade362a5625de4f7f2ec7f04f726b"],["D:/hexo/ButterflyBlog/public/2018/09/25/SimpleApp/JavaScript插件/43/index.html","9d72a929f8841c86a37a6e26f6b24a1c"],["D:/hexo/ButterflyBlog/public/2018/09/26/SimpleApp/JavaScript插件/44/index.html","faf2118cfbac55ef8f4e0d78b25bcdf6"],["D:/hexo/ButterflyBlog/public/2018/09/27/SimpleApp/JavaScript插件/45/index.html","2b0df2934e3581f60b1a0b549d9be030"],["D:/hexo/ButterflyBlog/public/2018/09/28/SimpleApp/JavaScript插件/46/index.html","6eaf2a736793eb5e838dfc80d228bdef"],["D:/hexo/ButterflyBlog/public/2018/09/29/SimpleApp/JUnit/47/index.html","4ee625e40816be06dd4494758040570e"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/48/index.html","abb0f351162c9170261c9c101f7eac45"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/49/index.html","5208a063e9ce59b9049c7b29813615c4"],["D:/hexo/ButterflyBlog/public/2018/10/01/SimpleApp/Log4j/50/index.html","750d1dda0b6b5b1a150e25804e164599"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/51/index.html","b5a3092da7df588ae7825ad0e78421ad"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/52/index.html","f9d76f2c325502106d9f444c34d4b17a"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Maven/53/index.html","1ed1add004e48432c3da6bd569d5e2f4"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/54/index.html","6ec8088823b2db9826677e329799d5c4"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/55/index.html","65c3a41a121428c64bbfeb8c81a64284"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/56/index.html","78e45b54e9c7ff2db6155a1e402e4e89"],["D:/hexo/ButterflyBlog/public/2018/10/05/SimpleApp/Maven/57/index.html","c529cc526db72fffb60598332621280a"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/58/index.html","c0b2f02a409ced4308195bb2c7b07879"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/59/index.html","518a4ae236ae952c2d32d2b885d95f9b"],["D:/hexo/ButterflyBlog/public/2018/10/07/SimpleApp/Maven/60/index.html","f92608542465b69a6c10b86bd1ab8709"],["D:/hexo/ButterflyBlog/public/2018/10/08/SimpleApp/Maven/61/index.html","3de499aafc025c73ce431f03af8f0bbb"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/63/index.html","faf6d7c220f7f8f4d42657ad22294b6e"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/64/index.html","204cfa580c004c842735867af71b5485"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/62/index.html","9f565ca13728dcb7d403f1ff9903d29d"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/65/index.html","9db28b1f1c85aeac130efcfac136b787"],["D:/hexo/ButterflyBlog/public/2018/10/12/SimpleApp/Mybatis/66/index.html","5f01780fc5b0cffb8964f3ad0151299b"],["D:/hexo/ButterflyBlog/public/2018/10/14/SimpleApp/Mybatis/68/index.html","8fd0c076c3568f2d3400f2e5e39583fd"],["D:/hexo/ButterflyBlog/public/2018/10/15/SimpleApp/Mybatis/67/index.html","0d9022907fb28365eb4033ae2ab696da"],["D:/hexo/ButterflyBlog/public/2018/10/16/SimpleApp/Mybatis/69/index.html","050ae4aa9e10bf2fb7ccc5b0c6f78fd3"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/70/index.html","0c84e5e431eaf0615096a423f2909dd5"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/71/index.html","e84e41ae2101db5eae0a2c8514d95ac4"],["D:/hexo/ButterflyBlog/public/2018/10/19/SimpleApp/RESTful/72/index.html","d7be7849040cf264976fd9476512780f"],["D:/hexo/ButterflyBlog/public/2018/10/20/SimpleApp/Spring/73/index.html","4cf9cd72eca328bdb4ed18f6503ce8e9"],["D:/hexo/ButterflyBlog/public/2018/10/21/SimpleApp/Spring/74/index.html","822d2de4a32890ed7e208c5b211d7a25"],["D:/hexo/ButterflyBlog/public/2018/10/22/SimpleApp/Spring MVC/82/index.html","83e4ca33844474c2f421a4e6df3a5749"],["D:/hexo/ButterflyBlog/public/2018/10/23/SimpleApp/Spring MVC/75/index.html","b9866acc53eaf46502f7aea7ea94f39f"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/76/index.html","38b529a1ee660927a7479e86f06581af"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/77/index.html","abf62da0e20145fdb77b63ec685bc410"],["D:/hexo/ButterflyBlog/public/2018/10/26/SimpleApp/Spring MVC/78/index.html","d1b6ea34bc0dc8a09512e87e2a93dc23"],["D:/hexo/ButterflyBlog/public/2018/10/27/SimpleApp/Spring MVC/79/index.html","b087d4b3b68ab7604d61b85a866619ef"],["D:/hexo/ButterflyBlog/public/2018/10/28/SimpleApp/Spring MVC/80/index.html","1c6301fc9180ca67ee3ffde38e24de1f"],["D:/hexo/ButterflyBlog/public/2018/10/29/SimpleApp/Spring MVC/81/index.html","c80f49b2f6ef34c2a930416a57777b48"],["D:/hexo/ButterflyBlog/public/2018/11/01/SimpleApp/Spring MVC/83/index.html","6ed8a1679776219cad7102fe2d157199"],["D:/hexo/ButterflyBlog/public/2018/11/02/SimpleApp/Spring Web/84/index.html","f50b8c0c5f4916d81ff41e7013321175"],["D:/hexo/ButterflyBlog/public/2018/11/03/SimpleApp/Spring Web/85/index.html","90b6aa0c39b6c921d62196c19b886abf"],["D:/hexo/ButterflyBlog/public/2018/11/05/SimpleApp/Spring Web/86/index.html","9ba1f16c0c7b29a43d50a7121994a155"],["D:/hexo/ButterflyBlog/public/2018/11/06/SimpleApp/Spring Web/87/index.html","3454aafb36deda459dd42432ed2ee2e3"],["D:/hexo/ButterflyBlog/public/2018/11/07/SimpleApp/Spring Web/88/index.html","cd79e9bb448dcc5f5af556e7cc222f8f"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/89/index.html","53219b9cd7e055ba71e2cbfccc947e63"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/90/index.html","d9fa724497a3e32fafc647190090b49b"],["D:/hexo/ButterflyBlog/public/2018/11/09/SimpleApp/Spring的事务管理/91/index.html","4fd587cc604cb93f78e6dbf885820b8f"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","1b702bde0008b4f54bb376a3159a18b9"],["D:/hexo/ButterflyBlog/public/404.html","6cfbc6403e03b14c35311483ce496a10"],["D:/hexo/ButterflyBlog/public/about/index.html","8a75d39f18502d3d2f9a02bf018d6385"],["D:/hexo/ButterflyBlog/public/archives/2018/06/index.html","c0bce95fe5ae19d7d4fb6f2eb2b46bf3"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/2/index.html","534f94a49706130dd97126ce93c60e33"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/3/index.html","f2c7b864add199fc40c4a225abb2c171"],["D:/hexo/ButterflyBlog/public/archives/2018/09/index.html","d28412e70701d0907a85a44aa6dece0b"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/2/index.html","09dd2770ff3b844c320a26c62665a8fb"],["D:/hexo/ButterflyBlog/public/archives/2018/10/index.html","9babace66a946e9bab266bfad6dc530a"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/2/index.html","d5e062a3722782498a2b6e2b406bdf5b"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/3/index.html","304f2d4a213bd41473469a6b1169f004"],["D:/hexo/ButterflyBlog/public/archives/2018/11/index.html","5cf491f4dd336fd7f974680f50149db8"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","a4d970581b8aded219906d947ab04517"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","ae7ac49f9d3be7c76f6b591169c12873"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","255e7178387f01e314926438e4887168"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","73070bed4295405151e2a396b0529959"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","a7a3b293d243cb05297be544118d6614"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","405a57faf70107483d789ed09feb6991"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","efda4d164fd05450d79ac41d82036d4c"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","9db5d4a52858293a7f53f578406c2f70"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","4e5ea35339c633c96433106bbd7ba6dc"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","80d8f19dd66ec8f027d2696dd36e6a98"],["D:/hexo/ButterflyBlog/public/archives/index.html","47142e3480a3ea307b24a75930d08c63"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","7dcd2c117d968e8bb3de263a59ad7d1b"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","f259f5c6f66b500e9861b6e7dc57ef9a"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","82a87bb8642072b72dd293b39f63be96"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","a1eac7ad97ac2d9db21b2e5aa66761c5"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","c86b3f4750a2ac762e4907731363a771"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","0c5488f26d6991c4fa0471189fc925a2"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","663f514d1d58aa1bfa4f8b882dc0b44f"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","4f43d5bbbd6bc05b875bebbc6c87e7be"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","bcaa98c8a2c4be3f9e5e66b2b6345097"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","bbec2b22c6648fd88c833cbdaf8514b2"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","f067e1df7a9d74da9057202fee56d51c"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/index.html","67888d0aa59d556a356482b7382cc007"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/2/index.html","307f33922b5e8502a6b7cac8db18284f"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/3/index.html","56bf3b60d883c9d48c65e8f6afdc27e7"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/4/index.html","374cafed81e2535e221e130da7aefaad"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/5/index.html","e83ea4104b1c2601ede1313a4e8199d7"],["D:/hexo/ButterflyBlog/public/categories/index.html","b531024b9929bd27949f4ad1d8b75cb6"],["D:/hexo/ButterflyBlog/public/css/index.css","50f2f84525817750a73514f77b0c55af"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/gallery/index.html","6f66752f2ce9f9a30bd46b3033b3d8aa"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","83cdad4b67b9132acf5701c3f910457f"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/movies/index.html","1fd94d9d80c682fe63dd186f5e24bd6d"],["D:/hexo/ButterflyBlog/public/music/index.html","a46976832e2a8f1aef5e28a9779ebe7c"],["D:/hexo/ButterflyBlog/public/page/2/index.html","aa79f1f545aef97dcd5a94cfc8b43fa4"],["D:/hexo/ButterflyBlog/public/page/3/index.html","d6f5bd3aa29367beb12706373f93c3a8"],["D:/hexo/ButterflyBlog/public/page/4/index.html","11921b3fbcf98ba91d473ed4321f7034"],["D:/hexo/ButterflyBlog/public/page/5/index.html","b1f804a131aefee3f2155ada62baff83"],["D:/hexo/ButterflyBlog/public/page/6/index.html","3d9812b62cdce7e9c2fd32ccf92b3c44"],["D:/hexo/ButterflyBlog/public/page/7/index.html","b03af686fe0169bbb64b618ced9ec6e0"],["D:/hexo/ButterflyBlog/public/page/8/index.html","50279e1fd7d7a4854d90a1851085a75c"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","5a3b2734bbe68fac01508397670ff432"],["D:/hexo/ButterflyBlog/public/tags/Annontation/index.html","ebcabb115849d6f60f2ff9f2e8704367"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","75056216dbeac3f645d9b7b53cb2ed6b"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","39db4f219ce12c9d233530c4f2ba4647"],["D:/hexo/ButterflyBlog/public/tags/File/index.html","b5c49ddfd9b0fd9f5191c0ed4fca473b"],["D:/hexo/ButterflyBlog/public/tags/GUI/index.html","b166fb969d46e0c5133137240d250684"],["D:/hexo/ButterflyBlog/public/tags/Http/index.html","6f7a0a3138bc637716c610ef8655c811"],["D:/hexo/ButterflyBlog/public/tags/IDEA/index.html","8e2f6d1727eac780c20974f43275e3c8"],["D:/hexo/ButterflyBlog/public/tags/IDEA插件/index.html","c4b3303e549b7271e1053b6323ada33d"],["D:/hexo/ButterflyBlog/public/tags/IO/index.html","dd990151671b0fb2878b554191412ddd"],["D:/hexo/ButterflyBlog/public/tags/JDK/index.html","1e6c4cc44657af2a12dbd43905b86014"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","84acd1fc7c75f0e45d47835de066f10d"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","7fe2ec14fd7260355f0d8d6d9c365c1d"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","20a0786400814e3757db0533c4d9a94c"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","61222260e5cf48d012cc3f5422700720"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","520f6517939d3c98b2c50e7a02b5ce49"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","2ade67ddee9745c8741ed6f179b6f78b"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","69c5ddbfb335a3348a97ec00c2629240"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","d7e49a4fa52b04dd2f69a1faf84f989f"],["D:/hexo/ButterflyBlog/public/tags/Jsp/index.html","d04caaab9026cf518b720461c0eec4be"],["D:/hexo/ButterflyBlog/public/tags/Linux/index.html","76e7851d2e9f3b89316f8d54b744bc07"],["D:/hexo/ButterflyBlog/public/tags/List/index.html","22645b63f921783f94ab6539100191eb"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","142962b3e1aac84c0df5f70eba13557e"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","8d78a09636650c17d2d659252baca773"],["D:/hexo/ButterflyBlog/public/tags/Map/index.html","91dd7b39d7bc070caedea4cc537daff8"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","a3b4c934768a847d4e4804bfffe77f76"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","e1602a0195ef4b8de00341cc0c39dc9a"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/3/index.html","af600f23ab2de86baf5f134a4858df17"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/4/index.html","01620129eca1e325bfceb29ab13c6827"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","fa01fce681085ff6feb90d932fd151ff"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","2403bd8bedf69b776722b1642275fc58"],["D:/hexo/ButterflyBlog/public/tags/SQL/index.html","005e9f3b3bda70a108f153b152ff8ed1"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","0cb7cc1a56fe3823f42cdd5cc11473d3"],["D:/hexo/ButterflyBlog/public/tags/Set/index.html","a70c1f3817df569188e03e020a1c9385"],["D:/hexo/ButterflyBlog/public/tags/Socket/index.html","8ce44ed396d727bb01260df6a3382878"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","5f8bd16dfc4be0032fbd00c5fc2dc677"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","d2cf2290e2b1171bd9a2513315237b1d"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","982f1c3bab5ae4e5a5065e62bf65d3e4"],["D:/hexo/ButterflyBlog/public/tags/SpringWeb/index.html","b61f931d75380c44ab6d0ba31a513114"],["D:/hexo/ButterflyBlog/public/tags/Springtx/index.html","c9eacd5744791a85dc642ddd695da26b"],["D:/hexo/ButterflyBlog/public/tags/index.html","7e6af7dfd7a23cc82dbfc459847530ef"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","6374aad01907da7a7782b8a9637a1a2e"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","19b0dfb4a211c93edfe9c6d111acbcfd"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","0da72ee8514776b48bd1132818a1e84a"],["D:/hexo/ButterflyBlog/public/tags/数组/index.html","dd7d669be90dad55d8b6c2fe052c95e3"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","2ba373475a8715e3b90cd65d8e5b86b7"],["D:/hexo/ButterflyBlog/public/tags/架构/page/2/index.html","c3fcd9273c6b1c2335131bb8a91ac4cf"],["D:/hexo/ButterflyBlog/public/tags/架构/page/3/index.html","3cd2be0aaf4f450304a9dc9a3d088d6b"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","b3686d20aa8de14f5ca95e6afa68b137"]];
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







