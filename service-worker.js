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

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/06/05/javaSE/JDK/00/index.html","28314fbfffcdf4334439ab13232f1eab"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/01/index.html","6a9862d1a757196383f32e316d543336"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/02/index.html","5afe1b38bcadce44e569ad640932e129"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/03/index.html","e35699cc8c543b2fcb104eba66cc90d7"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/04/index.html","f260f1672b3835d43a9e777470a890c1"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/05/index.html","986821b3242f79b306a069d05d36b635"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/06/index.html","7770a9a6db9e4b4960cf8ba9bdb2d80b"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/OOP/07/index.html","340a445085205c45ddb4aadd4774e07d"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/08/index.html","4ea854123d52cadef9fa3b6ea7871dcb"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/09/index.html","dc1cc490adb3318c93f5a6c9493a86e6"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/10/index.html","e68e75048645618b89c696635a0cf08c"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/11/index.html","c7376e5a3ac160a2a7652c22a26330eb"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/12/index.html","1d0b67dfc67b4d457825e698a0a09aae"],["D:/hexo/ButterflyBlog/public/2018/06/10/javaSE/Thread/13/index.html","4a5d20dbe06bbeeb99d2bc675bd9def5"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/String/15/index.html","830a476aafc340e349f8902405286909"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/Thread/14/index.html","fb0a3403575089fd9305e1da7fdfa739"],["D:/hexo/ButterflyBlog/public/2018/06/12/javaSE/String/16/index.html","1f1d818b5d951b91b777b5643dc5cf8b"],["D:/hexo/ButterflyBlog/public/2018/06/14/javaSE/Collection/21/index.html","7083972eab928f40bde7cd14b6ca825a"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/17/index.html","e938675728d9ca6fd14d12c0747d5f5d"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/18/index.html","edc7518422b73ab40b69f0455548462c"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/20/index.html","e09e4438422fb63881a0c0021e52ee51"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/22/index.html","d7d4b14cb3877c55871e3a9e8b41e2ce"],["D:/hexo/ButterflyBlog/public/2018/06/18/javaSE/Collection/19/index.html","bcc6e5f1acdcaf25b9576bb2cca511dd"],["D:/hexo/ButterflyBlog/public/2018/06/19/javaSE/IO/24/index.html","8d0d2be99a2012ed3d0d89b0ac781543"],["D:/hexo/ButterflyBlog/public/2018/06/20/javaSE/IO/23/index.html","fb6381cb6a3ed4c17ae0766366787e1f"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/29/index.html","69da4f61811610c8bccd8fb192d2ea4a"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/30/index.html","6d379a65e4841de4a8383f8edde78975"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/31/index.html","6cd80ea5cecec702a7bd5569d984699d"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/32/index.html","99c10c8d6b6d367005fb6092aae0ba1a"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/GUI/27/index.html","dc50a2e49cb704be478e9fb8216649ed"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/Socket/28/index.html","790bf53a6c2614c1502e38ee3eaddb03"],["D:/hexo/ButterflyBlog/public/2018/09/14/SimpleApp/幂等性/33/index.html","e0151ffb7fe882cd4d0aa239f77802be"],["D:/hexo/ButterflyBlog/public/2018/09/15/SimpleApp/三层架构+MVC/34/index.html","f0c303b4dd8f34264262b24b8e04052a"],["D:/hexo/ButterflyBlog/public/2018/09/17/SimpleApp/Apache HttpClient/35/index.html","9b38df5804b9f7524472f783a6091147"],["D:/hexo/ButterflyBlog/public/2018/09/18/SimpleApp/IDEA插件/36/index.html","f7a41bbc3bf9860e6367ac51ea511a53"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Intellij  IDEA/36/index.html","341d7402913bbc16ac30c1e81bbaee20"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Jackson/37/index.html","6d5e3c51c545610e517cd8da925fb417"],["D:/hexo/ButterflyBlog/public/2018/09/20/SimpleApp/Java工具类/38/index.html","90a16c012ac767adb91f07612507f5b3"],["D:/hexo/ButterflyBlog/public/2018/09/21/SimpleApp/Java工具类/39/index.html","4ec17795c65c22e673ad45d982df0124"],["D:/hexo/ButterflyBlog/public/2018/09/22/SimpleApp/Java工具类/40/index.html","747cfa2788b3d51a2ee3a563732f03f0"],["D:/hexo/ButterflyBlog/public/2018/09/23/SimpleApp/JavaScript插件/41/index.html","9f5fa8b679c42e62e88b5c3e2659ea2a"],["D:/hexo/ButterflyBlog/public/2018/09/24/SimpleApp/JavaScript插件/42/index.html","b25ade362a5625de4f7f2ec7f04f726b"],["D:/hexo/ButterflyBlog/public/2018/09/25/SimpleApp/JavaScript插件/43/index.html","9d72a929f8841c86a37a6e26f6b24a1c"],["D:/hexo/ButterflyBlog/public/2018/09/26/SimpleApp/JavaScript插件/44/index.html","faf2118cfbac55ef8f4e0d78b25bcdf6"],["D:/hexo/ButterflyBlog/public/2018/09/27/SimpleApp/JavaScript插件/45/index.html","2b0df2934e3581f60b1a0b549d9be030"],["D:/hexo/ButterflyBlog/public/2018/09/28/SimpleApp/JavaScript插件/46/index.html","6eaf2a736793eb5e838dfc80d228bdef"],["D:/hexo/ButterflyBlog/public/2018/09/29/SimpleApp/JUnit/47/index.html","4ee625e40816be06dd4494758040570e"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/48/index.html","abb0f351162c9170261c9c101f7eac45"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/49/index.html","5208a063e9ce59b9049c7b29813615c4"],["D:/hexo/ButterflyBlog/public/2018/10/01/SimpleApp/Log4j/50/index.html","750d1dda0b6b5b1a150e25804e164599"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/51/index.html","b5a3092da7df588ae7825ad0e78421ad"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/52/index.html","f9d76f2c325502106d9f444c34d4b17a"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Maven/53/index.html","1ed1add004e48432c3da6bd569d5e2f4"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/54/index.html","6ec8088823b2db9826677e329799d5c4"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/55/index.html","65c3a41a121428c64bbfeb8c81a64284"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/56/index.html","78e45b54e9c7ff2db6155a1e402e4e89"],["D:/hexo/ButterflyBlog/public/2018/10/05/SimpleApp/Maven/57/index.html","c529cc526db72fffb60598332621280a"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/58/index.html","c0b2f02a409ced4308195bb2c7b07879"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/59/index.html","518a4ae236ae952c2d32d2b885d95f9b"],["D:/hexo/ButterflyBlog/public/2018/10/07/SimpleApp/Maven/60/index.html","f92608542465b69a6c10b86bd1ab8709"],["D:/hexo/ButterflyBlog/public/2018/10/08/SimpleApp/Maven/61/index.html","3de499aafc025c73ce431f03af8f0bbb"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/63/index.html","faf6d7c220f7f8f4d42657ad22294b6e"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/64/index.html","204cfa580c004c842735867af71b5485"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/62/index.html","9f565ca13728dcb7d403f1ff9903d29d"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/65/index.html","9db28b1f1c85aeac130efcfac136b787"],["D:/hexo/ButterflyBlog/public/2018/10/12/SimpleApp/Mybatis/66/index.html","5f01780fc5b0cffb8964f3ad0151299b"],["D:/hexo/ButterflyBlog/public/2018/10/14/SimpleApp/Mybatis/68/index.html","8fd0c076c3568f2d3400f2e5e39583fd"],["D:/hexo/ButterflyBlog/public/2018/10/15/SimpleApp/Mybatis/67/index.html","0d9022907fb28365eb4033ae2ab696da"],["D:/hexo/ButterflyBlog/public/2018/10/16/SimpleApp/Mybatis/69/index.html","050ae4aa9e10bf2fb7ccc5b0c6f78fd3"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/70/index.html","0c84e5e431eaf0615096a423f2909dd5"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/71/index.html","e84e41ae2101db5eae0a2c8514d95ac4"],["D:/hexo/ButterflyBlog/public/2018/10/19/SimpleApp/RESTful/72/index.html","d7be7849040cf264976fd9476512780f"],["D:/hexo/ButterflyBlog/public/2018/10/20/SimpleApp/Spring/73/index.html","4cf9cd72eca328bdb4ed18f6503ce8e9"],["D:/hexo/ButterflyBlog/public/2018/10/21/SimpleApp/Spring/74/index.html","822d2de4a32890ed7e208c5b211d7a25"],["D:/hexo/ButterflyBlog/public/2018/10/22/SimpleApp/Spring MVC/82/index.html","83e4ca33844474c2f421a4e6df3a5749"],["D:/hexo/ButterflyBlog/public/2018/10/23/SimpleApp/Spring MVC/75/index.html","b9866acc53eaf46502f7aea7ea94f39f"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/76/index.html","38b529a1ee660927a7479e86f06581af"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/77/index.html","abf62da0e20145fdb77b63ec685bc410"],["D:/hexo/ButterflyBlog/public/2018/10/26/SimpleApp/Spring MVC/78/index.html","d1b6ea34bc0dc8a09512e87e2a93dc23"],["D:/hexo/ButterflyBlog/public/2018/10/27/SimpleApp/Spring MVC/79/index.html","b087d4b3b68ab7604d61b85a866619ef"],["D:/hexo/ButterflyBlog/public/2018/10/28/SimpleApp/Spring MVC/80/index.html","1c6301fc9180ca67ee3ffde38e24de1f"],["D:/hexo/ButterflyBlog/public/2018/10/29/SimpleApp/Spring MVC/81/index.html","c80f49b2f6ef34c2a930416a57777b48"],["D:/hexo/ButterflyBlog/public/2018/11/01/SimpleApp/Spring MVC/83/index.html","6ed8a1679776219cad7102fe2d157199"],["D:/hexo/ButterflyBlog/public/2018/11/02/SimpleApp/Spring Web/84/index.html","f50b8c0c5f4916d81ff41e7013321175"],["D:/hexo/ButterflyBlog/public/2018/11/03/SimpleApp/Spring Web/85/index.html","90b6aa0c39b6c921d62196c19b886abf"],["D:/hexo/ButterflyBlog/public/2018/11/05/SimpleApp/Spring Web/86/index.html","9ba1f16c0c7b29a43d50a7121994a155"],["D:/hexo/ButterflyBlog/public/2018/11/06/SimpleApp/Spring Web/87/index.html","3454aafb36deda459dd42432ed2ee2e3"],["D:/hexo/ButterflyBlog/public/2018/11/07/SimpleApp/Spring Web/88/index.html","cd79e9bb448dcc5f5af556e7cc222f8f"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/89/index.html","53219b9cd7e055ba71e2cbfccc947e63"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/90/index.html","d9fa724497a3e32fafc647190090b49b"],["D:/hexo/ButterflyBlog/public/2018/11/09/SimpleApp/Spring的事务管理/91/index.html","4fd587cc604cb93f78e6dbf885820b8f"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","1b702bde0008b4f54bb376a3159a18b9"],["D:/hexo/ButterflyBlog/public/404.html","04d34a4f4abc1de7e509954cbd591ea5"],["D:/hexo/ButterflyBlog/public/about/index.html","4f6f904c49919a269c80539e6e504056"],["D:/hexo/ButterflyBlog/public/archives/2018/06/index.html","65053b98d1966474672800cd47c2d5df"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/2/index.html","fc30bbdcc74c8d7ffcbaf23f0156b981"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/3/index.html","f6784b94c7fe2dc2aedb998e5d0e68b8"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/4/index.html","9aa7b90b89e6a65d5312bcd0a0a8a5f8"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/5/index.html","20ea5b2629104be023cce9662e67b687"],["D:/hexo/ButterflyBlog/public/archives/2018/09/index.html","00645dc188cd189545bd5beb7d11fb19"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/2/index.html","da89c6c8828970beee526440315c8976"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/3/index.html","6550afbfa153be6a5f2ea85519a31d25"],["D:/hexo/ButterflyBlog/public/archives/2018/10/index.html","fce8d25b37edb33da79ca08452246a3d"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/2/index.html","1d0d5d3ff119e2828d61d46935a086d3"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/3/index.html","f67096212df391fc1d928ed2b3f93867"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/4/index.html","a58933d915971a54e78c3c7ac6b656fb"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/5/index.html","43edaf70922fbbe6a0c004feebb875e3"],["D:/hexo/ButterflyBlog/public/archives/2018/11/index.html","6f2f336b2fbc84941fab1402cb7a1a38"],["D:/hexo/ButterflyBlog/public/archives/2018/11/page/2/index.html","0661ea9f2599d8daf58d70595bd95c30"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","80a0f1abe73d6da78464b7347f0f9242"],["D:/hexo/ButterflyBlog/public/archives/2018/page/10/index.html","4997833aabc5f294886743f2aa192104"],["D:/hexo/ButterflyBlog/public/archives/2018/page/11/index.html","1c2c8a7142319c3bbb33a6426ee6add7"],["D:/hexo/ButterflyBlog/public/archives/2018/page/12/index.html","9eb02ff33329128dce166b3d02cae46e"],["D:/hexo/ButterflyBlog/public/archives/2018/page/13/index.html","113ff90f5d5d6f36018ee190deefef51"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","c6798e4456b5182adac28866b092d0bf"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","715d291a82566356b5c033b1765c339c"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","0dea9da033c71b1a079d4346670dadd3"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","7f8b012a26f3929e3dee47c4ff220be8"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","338259660442c02328b981aaadc1fe40"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","14894987790f7b39b57c8248a64f7f63"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","dbab853d06cfcc09c9b5ae2d9fd3a8d7"],["D:/hexo/ButterflyBlog/public/archives/2018/page/9/index.html","a23ce58b0ad528874a87ac1fe32e1ae9"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","3b932642e33ce80a56700a057c697312"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","edeb1b41a5ade1ffb262e852ba04f5e8"],["D:/hexo/ButterflyBlog/public/archives/index.html","03a1b7c217510f6f28baab6f0ab387ad"],["D:/hexo/ButterflyBlog/public/archives/page/10/index.html","fd6705942a51c27084c47497f2680bac"],["D:/hexo/ButterflyBlog/public/archives/page/11/index.html","80672cfcaa8db4ae93a7f0c6bd8cd23e"],["D:/hexo/ButterflyBlog/public/archives/page/12/index.html","27ce3c019c5efbb978dcc3cc0ca0cb86"],["D:/hexo/ButterflyBlog/public/archives/page/13/index.html","7c6d6cc5f4ee276821a91e5a4363a2ce"],["D:/hexo/ButterflyBlog/public/archives/page/14/index.html","776e528e1b194a6c224b0f9e6ef8134c"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","321305991d55c797ee435ce80327b152"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","e4a34fd57a8f22414aad1739ff5113bb"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","a22ca7e4be49d2dc324fea6961dbde66"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","cc4fefb35746293d2ab1e874172dcd63"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","fa33dd807fa8fc094c622df5b8a509f0"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","b802d7ef1b6bce985469c947fac5f83b"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","a9331eaf795e380486fb9df50e40515e"],["D:/hexo/ButterflyBlog/public/archives/page/9/index.html","e62e9a195029534d4c30bd63b72a7dc3"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","07f02323ad295d48d50fa2a487055f5b"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","775152099c25e18d3ce20a60f28152b1"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","f329f03aa15cc301af398d02b520ba2f"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","6a0cdaccd547c9f6d1db2fbfa9e61a24"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/4/index.html","a9c9ecfd16f45155c619e001c72a0645"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/index.html","944400843322ba8777957e201befe43e"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/2/index.html","2c0fd24a5396bc00a152e9abf5bd9fe9"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/3/index.html","bb47788fead46b00d8e6a8e9524131bd"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/4/index.html","b45487b34eb4d967a197049c8c6693f5"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/5/index.html","982fcb36b0de768419d9b3df519817d8"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/6/index.html","e5de4b3850d89a4ab01f647a45d4c2fa"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/7/index.html","8af2692366ed4ce9fe4637707abdd86d"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/8/index.html","695caa0b1897aba35e46fbf0e3c75a50"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/9/index.html","9d689c91f9e2678af62fda2b6fe46ceb"],["D:/hexo/ButterflyBlog/public/categories/index.html","fc83f1a2182c094280b3478587c2f338"],["D:/hexo/ButterflyBlog/public/css/index.css","50f2f84525817750a73514f77b0c55af"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/gallery/index.html","ac4a61f0133d565acd9c429170e2b4cd"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","536ea20435c772d9f657fbd373485506"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/movies/index.html","3d5157bf219d6759db23e11fc35999f4"],["D:/hexo/ButterflyBlog/public/music/index.html","0f6b415da62a36ab3d71787dcd7c86a4"],["D:/hexo/ButterflyBlog/public/page/10/index.html","1cdbc8c22acbc1e726ce8cf8b9454673"],["D:/hexo/ButterflyBlog/public/page/11/index.html","770e8114e77bd083001d5eee44222462"],["D:/hexo/ButterflyBlog/public/page/12/index.html","12c7a4ac545dffce0e962bd45d60c6b0"],["D:/hexo/ButterflyBlog/public/page/13/index.html","9bdebf1f87fb9a194925c13ce1283dd9"],["D:/hexo/ButterflyBlog/public/page/14/index.html","82e2a3054ef4d0d36053acf2cef35deb"],["D:/hexo/ButterflyBlog/public/page/2/index.html","3c9cba308854e3b7c0abfa334a048aae"],["D:/hexo/ButterflyBlog/public/page/3/index.html","5729fe01142b9a4720d21529ea7212ea"],["D:/hexo/ButterflyBlog/public/page/4/index.html","d6f6a08529a7a00dac78b51ac890e8bc"],["D:/hexo/ButterflyBlog/public/page/5/index.html","94caa51eba66a1df9fbd2116b93ec489"],["D:/hexo/ButterflyBlog/public/page/6/index.html","0fb8261053b20bef1ed9020574ebe4b0"],["D:/hexo/ButterflyBlog/public/page/7/index.html","32ac4074cbad6f794163245feb5188c9"],["D:/hexo/ButterflyBlog/public/page/8/index.html","4b45f7c52d95b5b760a1cb06de582c3a"],["D:/hexo/ButterflyBlog/public/page/9/index.html","4315f0e9c9c178f605f453cc50917e92"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","e14287cbe0963b5d5f58997aca15a585"],["D:/hexo/ButterflyBlog/public/tags/Annontation/index.html","b5755bbf84acd7bb8739aef22ae3dbf1"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","605616651d3d172a55bb043fc687b79e"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","3219ed9f76e122e7dcd33ab66ce7a4dd"],["D:/hexo/ButterflyBlog/public/tags/Druid/page/2/index.html","dbf7dc18121bbdba67e31149bf689b17"],["D:/hexo/ButterflyBlog/public/tags/File/index.html","761aa311d7fb36842705772df21ceeb3"],["D:/hexo/ButterflyBlog/public/tags/GUI/index.html","c4d35e9ab8ec1f89633137a4e0b4811f"],["D:/hexo/ButterflyBlog/public/tags/Http/index.html","ef91f252782f3d661c9870116fdc5ca5"],["D:/hexo/ButterflyBlog/public/tags/IDEA/index.html","d122fccf87001b41e644d0096431ac37"],["D:/hexo/ButterflyBlog/public/tags/IDEA插件/index.html","7bddfc7e2fa9545c11ca1738a0289457"],["D:/hexo/ButterflyBlog/public/tags/IO/index.html","490dbf91381e6b84cdef43131e980a8f"],["D:/hexo/ButterflyBlog/public/tags/JDK/index.html","3fd20fb7678870113dfae7edbaad63d8"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","04d95eaf374373f46ca77860e3c63448"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","42ebb9038ebb66053796047989f13ca5"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","47fc0eb6726791a655e0c073fe969b1c"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","6a43b75011df74ee0ea0f2d8d4a0862d"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","c61fd837f06eed20e7e8ccbb2cd82f4a"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","573c1296f877782a064e0d01ce59fc6a"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","9542208acfaf8698e69459d433d01352"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/4/index.html","93693b638d5fe9b4e7ba1b13e684a502"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","3613fcb7a08838dd6c4a028af1a2fb7f"],["D:/hexo/ButterflyBlog/public/tags/Jsp/index.html","bd63d7bf1ddb104a131813d720813fd3"],["D:/hexo/ButterflyBlog/public/tags/Linux/index.html","fc1d3146791518fb76b9537bbc10fdbc"],["D:/hexo/ButterflyBlog/public/tags/List/index.html","ab12e23a523a0b02084d4061ea38e21f"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","97f7b13d14380d9df2b5155d50b63d7a"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","2a24e412be0dbeb6b8f4275153975829"],["D:/hexo/ButterflyBlog/public/tags/MVC/page/2/index.html","f4379bd5c7d2ac739a3f1c4a56d2ff34"],["D:/hexo/ButterflyBlog/public/tags/Map/index.html","2e1dcc763759bc036e801e1d84cbd0e6"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","5fa26c7c910ccb1561717a52423dfad4"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","0275b4a0e03d153925468998a89460b3"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/3/index.html","b14c8fb24bcd09d977832b4e4ef74d79"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/4/index.html","7fb102f08e94347f3d977cbdc5757491"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/5/index.html","e9a34b2fe3904071d34caa38b0b89702"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/6/index.html","3b00ad468db750e89bb8c0b33f8cc234"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","3a2255c53a1c3d47aa53ffdcb867bce7"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/page/2/index.html","2a4881005ecb618ab166d6a40b8e541f"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","5b790dbee0048642b2a0697be5598359"],["D:/hexo/ButterflyBlog/public/tags/SQL/index.html","fb7e2d865e22667058b42e4e27b12651"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","29efa0b79d3724883894f0d0530327bb"],["D:/hexo/ButterflyBlog/public/tags/Set/index.html","18f75a00a9026a0133fb3d5d53253219"],["D:/hexo/ButterflyBlog/public/tags/Socket/index.html","8e9c27df9ef98aa5d5535998855608f9"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","5927ed315106850a17541ab0ae472a21"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","b6fd1ee9d6218d9d99b6e4e85b1a5a46"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/3/index.html","e5298b45f062b96fe2f759f6d82f8476"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/4/index.html","397fbf0949558b7f6454e7acaabab2ea"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","67423ff99aa1eaa8f5752531ebd2b828"],["D:/hexo/ButterflyBlog/public/tags/SpringWeb/index.html","6af60215b58813da4cd0fbebbf906528"],["D:/hexo/ButterflyBlog/public/tags/Springtx/index.html","71ddc4ea92bd8b5d32811049130d3445"],["D:/hexo/ButterflyBlog/public/tags/index.html","c839e4a6126738724f8a53ae4d425ea2"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","2178c9db185c133f23c108f6aede8969"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","7d4ce1e657b16652e8186749d00e716f"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","64edfedb660603bf4aa42f0738f3b5c8"],["D:/hexo/ButterflyBlog/public/tags/数组/index.html","3814d6f3f8239c2748348541f1418338"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","b665d2ef83527ea14b36b38348d77fa1"],["D:/hexo/ButterflyBlog/public/tags/架构/page/2/index.html","c2ef74231f3564fffa4d43113d200d86"],["D:/hexo/ButterflyBlog/public/tags/架构/page/3/index.html","a7cf95dea60eb9f9e24f42b0aa180b7f"],["D:/hexo/ButterflyBlog/public/tags/架构/page/4/index.html","5de05de789df41598f17270f6d7c28ac"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","36cd0f7ebf8f49704d46869c27e311ae"]];
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







