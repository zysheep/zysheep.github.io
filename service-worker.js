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

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/06/05/javaSE/JDK/00/index.html","28314fbfffcdf4334439ab13232f1eab"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/01/index.html","6a9862d1a757196383f32e316d543336"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/02/index.html","5afe1b38bcadce44e569ad640932e129"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/03/index.html","e35699cc8c543b2fcb104eba66cc90d7"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/04/index.html","f260f1672b3835d43a9e777470a890c1"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/05/index.html","986821b3242f79b306a069d05d36b635"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/06/index.html","7770a9a6db9e4b4960cf8ba9bdb2d80b"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/OOP/07/index.html","340a445085205c45ddb4aadd4774e07d"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/08/index.html","4ea854123d52cadef9fa3b6ea7871dcb"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/09/index.html","dc1cc490adb3318c93f5a6c9493a86e6"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/10/index.html","e68e75048645618b89c696635a0cf08c"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/11/index.html","c7376e5a3ac160a2a7652c22a26330eb"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/12/index.html","1d0b67dfc67b4d457825e698a0a09aae"],["D:/hexo/ButterflyBlog/public/2018/06/10/javaSE/Thread/13/index.html","4a5d20dbe06bbeeb99d2bc675bd9def5"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/String/15/index.html","830a476aafc340e349f8902405286909"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/Thread/14/index.html","fb0a3403575089fd9305e1da7fdfa739"],["D:/hexo/ButterflyBlog/public/2018/06/12/javaSE/String/16/index.html","1f1d818b5d951b91b777b5643dc5cf8b"],["D:/hexo/ButterflyBlog/public/2018/06/14/javaSE/Collection/21/index.html","7083972eab928f40bde7cd14b6ca825a"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/17/index.html","e938675728d9ca6fd14d12c0747d5f5d"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/18/index.html","edc7518422b73ab40b69f0455548462c"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/20/index.html","e09e4438422fb63881a0c0021e52ee51"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/22/index.html","d7d4b14cb3877c55871e3a9e8b41e2ce"],["D:/hexo/ButterflyBlog/public/2018/06/18/javaSE/Collection/19/index.html","bcc6e5f1acdcaf25b9576bb2cca511dd"],["D:/hexo/ButterflyBlog/public/2018/06/19/javaSE/IO/24/index.html","8d0d2be99a2012ed3d0d89b0ac781543"],["D:/hexo/ButterflyBlog/public/2018/06/20/javaSE/IO/23/index.html","fb6381cb6a3ed4c17ae0766366787e1f"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/29/index.html","69da4f61811610c8bccd8fb192d2ea4a"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/30/index.html","6d379a65e4841de4a8383f8edde78975"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/31/index.html","6cd80ea5cecec702a7bd5569d984699d"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/32/index.html","99c10c8d6b6d367005fb6092aae0ba1a"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/GUI/27/index.html","dc50a2e49cb704be478e9fb8216649ed"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/Socket/28/index.html","790bf53a6c2614c1502e38ee3eaddb03"],["D:/hexo/ButterflyBlog/public/2018/09/14/SimpleApp/幂等性/33/index.html","e0151ffb7fe882cd4d0aa239f77802be"],["D:/hexo/ButterflyBlog/public/2018/09/15/SimpleApp/三层架构+MVC/34/index.html","f0c303b4dd8f34264262b24b8e04052a"],["D:/hexo/ButterflyBlog/public/2018/09/17/SimpleApp/Apache HttpClient/35/index.html","9b38df5804b9f7524472f783a6091147"],["D:/hexo/ButterflyBlog/public/2018/09/18/SimpleApp/IDEA插件/36/index.html","f7a41bbc3bf9860e6367ac51ea511a53"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Intellij  IDEA/36/index.html","341d7402913bbc16ac30c1e81bbaee20"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Jackson/37/index.html","6d5e3c51c545610e517cd8da925fb417"],["D:/hexo/ButterflyBlog/public/2018/09/20/SimpleApp/Java工具类/38/index.html","90a16c012ac767adb91f07612507f5b3"],["D:/hexo/ButterflyBlog/public/2018/09/21/SimpleApp/Java工具类/39/index.html","4ec17795c65c22e673ad45d982df0124"],["D:/hexo/ButterflyBlog/public/2018/09/22/SimpleApp/Java工具类/40/index.html","747cfa2788b3d51a2ee3a563732f03f0"],["D:/hexo/ButterflyBlog/public/2018/09/23/SimpleApp/JavaScript插件/41/index.html","9f5fa8b679c42e62e88b5c3e2659ea2a"],["D:/hexo/ButterflyBlog/public/2018/09/24/SimpleApp/JavaScript插件/42/index.html","b25ade362a5625de4f7f2ec7f04f726b"],["D:/hexo/ButterflyBlog/public/2018/09/25/SimpleApp/JavaScript插件/43/index.html","9d72a929f8841c86a37a6e26f6b24a1c"],["D:/hexo/ButterflyBlog/public/2018/09/26/SimpleApp/JavaScript插件/44/index.html","faf2118cfbac55ef8f4e0d78b25bcdf6"],["D:/hexo/ButterflyBlog/public/2018/09/27/SimpleApp/JavaScript插件/45/index.html","2b0df2934e3581f60b1a0b549d9be030"],["D:/hexo/ButterflyBlog/public/2018/09/28/SimpleApp/JavaScript插件/46/index.html","6eaf2a736793eb5e838dfc80d228bdef"],["D:/hexo/ButterflyBlog/public/2018/09/29/SimpleApp/JUnit/47/index.html","4ee625e40816be06dd4494758040570e"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/48/index.html","abb0f351162c9170261c9c101f7eac45"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/49/index.html","5208a063e9ce59b9049c7b29813615c4"],["D:/hexo/ButterflyBlog/public/2018/10/01/SimpleApp/Log4j/50/index.html","750d1dda0b6b5b1a150e25804e164599"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/51/index.html","b5a3092da7df588ae7825ad0e78421ad"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/52/index.html","f9d76f2c325502106d9f444c34d4b17a"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Maven/53/index.html","1ed1add004e48432c3da6bd569d5e2f4"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/54/index.html","6ec8088823b2db9826677e329799d5c4"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/55/index.html","65c3a41a121428c64bbfeb8c81a64284"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/56/index.html","78e45b54e9c7ff2db6155a1e402e4e89"],["D:/hexo/ButterflyBlog/public/2018/10/05/SimpleApp/Maven/57/index.html","c529cc526db72fffb60598332621280a"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/58/index.html","c0b2f02a409ced4308195bb2c7b07879"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/59/index.html","518a4ae236ae952c2d32d2b885d95f9b"],["D:/hexo/ButterflyBlog/public/2018/10/07/SimpleApp/Maven/60/index.html","f92608542465b69a6c10b86bd1ab8709"],["D:/hexo/ButterflyBlog/public/2018/10/08/SimpleApp/Maven/61/index.html","3de499aafc025c73ce431f03af8f0bbb"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/63/index.html","faf6d7c220f7f8f4d42657ad22294b6e"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/64/index.html","204cfa580c004c842735867af71b5485"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/62/index.html","9f565ca13728dcb7d403f1ff9903d29d"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/65/index.html","9db28b1f1c85aeac130efcfac136b787"],["D:/hexo/ButterflyBlog/public/2018/10/12/SimpleApp/Mybatis/66/index.html","5f01780fc5b0cffb8964f3ad0151299b"],["D:/hexo/ButterflyBlog/public/2018/10/14/SimpleApp/Mybatis/68/index.html","8fd0c076c3568f2d3400f2e5e39583fd"],["D:/hexo/ButterflyBlog/public/2018/10/15/SimpleApp/Mybatis/67/index.html","0d9022907fb28365eb4033ae2ab696da"],["D:/hexo/ButterflyBlog/public/2018/10/16/SimpleApp/Mybatis/69/index.html","050ae4aa9e10bf2fb7ccc5b0c6f78fd3"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/70/index.html","0c84e5e431eaf0615096a423f2909dd5"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/71/index.html","e84e41ae2101db5eae0a2c8514d95ac4"],["D:/hexo/ButterflyBlog/public/2018/10/19/SimpleApp/RESTful/72/index.html","d7be7849040cf264976fd9476512780f"],["D:/hexo/ButterflyBlog/public/2018/10/20/SimpleApp/Spring/73/index.html","4cf9cd72eca328bdb4ed18f6503ce8e9"],["D:/hexo/ButterflyBlog/public/2018/10/21/SimpleApp/Spring/74/index.html","822d2de4a32890ed7e208c5b211d7a25"],["D:/hexo/ButterflyBlog/public/2018/10/22/SimpleApp/Spring MVC/82/index.html","83e4ca33844474c2f421a4e6df3a5749"],["D:/hexo/ButterflyBlog/public/2018/10/23/SimpleApp/Spring MVC/75/index.html","b9866acc53eaf46502f7aea7ea94f39f"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/76/index.html","38b529a1ee660927a7479e86f06581af"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/77/index.html","abf62da0e20145fdb77b63ec685bc410"],["D:/hexo/ButterflyBlog/public/2018/10/26/SimpleApp/Spring MVC/78/index.html","d1b6ea34bc0dc8a09512e87e2a93dc23"],["D:/hexo/ButterflyBlog/public/2018/10/27/SimpleApp/Spring MVC/79/index.html","b087d4b3b68ab7604d61b85a866619ef"],["D:/hexo/ButterflyBlog/public/2018/10/28/SimpleApp/Spring MVC/80/index.html","1c6301fc9180ca67ee3ffde38e24de1f"],["D:/hexo/ButterflyBlog/public/2018/10/29/SimpleApp/Spring MVC/81/index.html","c80f49b2f6ef34c2a930416a57777b48"],["D:/hexo/ButterflyBlog/public/2018/11/01/SimpleApp/Spring MVC/83/index.html","6ed8a1679776219cad7102fe2d157199"],["D:/hexo/ButterflyBlog/public/2018/11/02/SimpleApp/Spring Web/84/index.html","f50b8c0c5f4916d81ff41e7013321175"],["D:/hexo/ButterflyBlog/public/2018/11/03/SimpleApp/Spring Web/85/index.html","90b6aa0c39b6c921d62196c19b886abf"],["D:/hexo/ButterflyBlog/public/2018/11/05/SimpleApp/Spring Web/86/index.html","9ba1f16c0c7b29a43d50a7121994a155"],["D:/hexo/ButterflyBlog/public/2018/11/06/SimpleApp/Spring Web/87/index.html","3454aafb36deda459dd42432ed2ee2e3"],["D:/hexo/ButterflyBlog/public/2018/11/07/SimpleApp/Spring Web/88/index.html","cd79e9bb448dcc5f5af556e7cc222f8f"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/89/index.html","53219b9cd7e055ba71e2cbfccc947e63"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/90/index.html","d9fa724497a3e32fafc647190090b49b"],["D:/hexo/ButterflyBlog/public/2018/11/09/SimpleApp/Spring的事务管理/91/index.html","4fd587cc604cb93f78e6dbf885820b8f"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","1b702bde0008b4f54bb376a3159a18b9"],["D:/hexo/ButterflyBlog/public/404.html","b6882ddf291ddebb7c8d47d5d437aaca"],["D:/hexo/ButterflyBlog/public/about/index.html","19b0ea432aedf812d9045a8259155bd4"],["D:/hexo/ButterflyBlog/public/archives/2018/06/index.html","7fedee5c03f0599793c16192b15e3b29"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/2/index.html","9c3c94e2d2f11bcb6cf5facc852b3396"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/3/index.html","5037ecf0efc4dc709b0128b05d226b27"],["D:/hexo/ButterflyBlog/public/archives/2018/09/index.html","434993af891dcd41060111dab8f8501e"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/2/index.html","d660a28d58b1318035d02be4eff67693"],["D:/hexo/ButterflyBlog/public/archives/2018/10/index.html","976bff2da6f18da886b452578bcff791"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/2/index.html","fac29d52191d2f698e98235caad6be57"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/3/index.html","9c8bde9555d11660a95cf932d7864d51"],["D:/hexo/ButterflyBlog/public/archives/2018/11/index.html","26ebb9af1eb71f4c08178cf8fa02430e"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","b9493bcc75cdc6134c58ac768671da74"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","9094a861a5d211b5892de0278b090997"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","94f30b23c446a1c8ba980356b7cac00f"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","7f9f60d1265b2ae7564021a0e65e4ccd"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","7b62da318f5cf56af7fe0f9e470cfd0e"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","1c8eb478eae15d7dd2cc314874332070"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","ad7f8edf661439f9876064b4441f8d1d"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","a609044d6bbf2a859b17ea2573a6afb3"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","b54b0afbf9e9da17adbdda696e92635d"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","00c21716d3a9aad6af340e8dc6560e9d"],["D:/hexo/ButterflyBlog/public/archives/index.html","82a286bfa3dc2874b406fe0ab523aa1f"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","3afa26945c3a0edf8e0c3edfe8e0d961"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","e5fa3ec03f37a4fbbfc90beae1b955dc"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","d6f63608995cff1865056991db82be66"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","f04a85f4a78f5df99f2daf4408077cce"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","78bc47ee3c6a131ea6cabf34f49ebb8f"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","fc5bfd699c4c3d5752029e48e4ffcea1"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","431e6c46dedc67f3f03ab9e790984e1f"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","455596a8b121895ef1572e926f86684f"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","72e2591b655b97ad62d5ccef5e46cca9"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","2ee6c31dce494da1163abce3a698ca41"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","b75cd1fc5c08e2756ae531f19bc797ed"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/index.html","bbaad923be2d0d1640bc0f78ff75475e"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/2/index.html","1f4e70cc238d6ee0a466395af835a2a4"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/3/index.html","21a09114da833014d1b1eac79cb454dc"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/4/index.html","7db0d32cecee6b70f610ffab7dad3af6"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/5/index.html","db628a1b0b9431dfa52ec64db4c5fa92"],["D:/hexo/ButterflyBlog/public/categories/index.html","440132334bacd35544724b8aa05d9729"],["D:/hexo/ButterflyBlog/public/css/index.css","50f2f84525817750a73514f77b0c55af"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","b0e65422bc3852f6cc18b61d1b35e9c7"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/music/index.html","8a2dbd2966eea3263643231d295af1d5"],["D:/hexo/ButterflyBlog/public/page/2/index.html","86873d0a7b534c78cf2677a289d7ae07"],["D:/hexo/ButterflyBlog/public/page/3/index.html","e9098860c48bbd7f659bbd895a874abf"],["D:/hexo/ButterflyBlog/public/page/4/index.html","25452904ada6a3e432b73647863e9dd6"],["D:/hexo/ButterflyBlog/public/page/5/index.html","f6fb8b4a83b8b00303711fb61e018c4e"],["D:/hexo/ButterflyBlog/public/page/6/index.html","99827a6a44c31b6e32483ce480c4e681"],["D:/hexo/ButterflyBlog/public/page/7/index.html","17fa5ee645ab7f400161a4ec1a087d95"],["D:/hexo/ButterflyBlog/public/page/8/index.html","08d2f7a909960642f8c5913cb72e66f9"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","592d9b35ef20d571fdee50a7c53e6650"],["D:/hexo/ButterflyBlog/public/tags/Annontation/index.html","34890461539a8d6b246ffd8713c81bdb"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","52212c84e8e34631f1264c13e87b1c5d"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","c1789703982971254421ba05a18e2b18"],["D:/hexo/ButterflyBlog/public/tags/File/index.html","8c9912c277b0be40269ab8b954fd08eb"],["D:/hexo/ButterflyBlog/public/tags/GUI/index.html","0ca5ab35f5c211e811f65649b47a100a"],["D:/hexo/ButterflyBlog/public/tags/Http/index.html","f720d7da05b36df607eef3435fbaa390"],["D:/hexo/ButterflyBlog/public/tags/IDEA/index.html","e9ba95859e4e984ed2ca5467d9539396"],["D:/hexo/ButterflyBlog/public/tags/IDEA插件/index.html","c989be13c80747c702ea755e9e5fd288"],["D:/hexo/ButterflyBlog/public/tags/IO/index.html","44c9e1eed8b05aca0d94fe96b2d50e22"],["D:/hexo/ButterflyBlog/public/tags/JDK/index.html","f74f0a06a5d3cdd8869b49f5706d750c"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","06ea6824ebf79b1021073e4888219027"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","c7a2ac85a38d0b876ba12d3ba1483751"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","18dba3e5891b73e3f49cfa3ca7bfed1a"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","b0babf30e3801c01733fe8f24dc80166"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","ac3b52a207c4c87a4e17b5ab3fb47796"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","4227b9bd193eacc9becc2d3f33c1c874"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","099ddd9fedeca7f0910acdcdadb1e6e4"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","299bd2f2dec79c81b8d52e80faea5d78"],["D:/hexo/ButterflyBlog/public/tags/Jsp/index.html","9c9289d409aaab27573e9adf014eaacf"],["D:/hexo/ButterflyBlog/public/tags/Linux/index.html","bb2cef4fa3013adfc862b2ee6e3cad30"],["D:/hexo/ButterflyBlog/public/tags/List/index.html","1cda091b5679ce8331eaf036dc2a224e"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","0ae98e97cc5a88dd881c70f85fab0541"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","0d59e37d668045816a3e1a7dc98a46d3"],["D:/hexo/ButterflyBlog/public/tags/Map/index.html","0f8b1260d607c83e1e7219a7eb1e4d68"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","e1be5ec67423a58923aed19112923a43"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","39bb1f763ceac8ddf3a78d02ef1424c8"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/3/index.html","e9fc2478e71a46e7f035c3904537ecc0"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/4/index.html","60ee24c3d816a3a783a762b52a41fe9d"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","2a6d29bfc95a4957fcd0d0051734149a"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","195b71d30d7336772daec835d12ed159"],["D:/hexo/ButterflyBlog/public/tags/SQL/index.html","539a46dc445fd7ecb113fbda90965a34"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","bed64a8a9b60f985aed1d451d67908aa"],["D:/hexo/ButterflyBlog/public/tags/Set/index.html","3dcd07757e2656f86b28ab673b939b4a"],["D:/hexo/ButterflyBlog/public/tags/Socket/index.html","6bded06bedb3a15d48ba49c4389c376d"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","3453baed5fa05a6353259d916f811f7b"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","b58b436262bb2438c818b3b46a2fe2cd"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","804896c87e21159bb20ab4049071d696"],["D:/hexo/ButterflyBlog/public/tags/SpringWeb/index.html","70148ea9c84ae421cd7fc5eba008bfc6"],["D:/hexo/ButterflyBlog/public/tags/Springtx/index.html","55eb6479ef7ca3e9fefdb0cfcc0324f8"],["D:/hexo/ButterflyBlog/public/tags/index.html","18f74b8f789a3d39ed44c0fca6743388"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","321e23ba1844bf486123b541dc3fd146"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","1a5ed5c551a811235afe484fd8da1d4d"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","95b614a11a3fb159d46482353ba45b64"],["D:/hexo/ButterflyBlog/public/tags/数组/index.html","3395ac3765df6dc56dd745916fcb2f7b"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","1e8e7cc8c8f32a8a3c481b14abb5f49f"],["D:/hexo/ButterflyBlog/public/tags/架构/page/2/index.html","53a408f4a84e85f2ef7429287f955d12"],["D:/hexo/ButterflyBlog/public/tags/架构/page/3/index.html","6373b1afc6ad00b303ea035fd956faed"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","935e99de9e5f2c7708a398791ef098e8"]];
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







