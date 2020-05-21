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

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/06/05/javaSE/JDK/00/index.html","28314fbfffcdf4334439ab13232f1eab"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/01/index.html","6a9862d1a757196383f32e316d543336"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/02/index.html","5afe1b38bcadce44e569ad640932e129"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/03/index.html","e35699cc8c543b2fcb104eba66cc90d7"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/04/index.html","f260f1672b3835d43a9e777470a890c1"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/05/index.html","986821b3242f79b306a069d05d36b635"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/06/index.html","7770a9a6db9e4b4960cf8ba9bdb2d80b"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/OOP/07/index.html","340a445085205c45ddb4aadd4774e07d"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/08/index.html","4ea854123d52cadef9fa3b6ea7871dcb"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/09/index.html","dc1cc490adb3318c93f5a6c9493a86e6"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/10/index.html","e68e75048645618b89c696635a0cf08c"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/11/index.html","c7376e5a3ac160a2a7652c22a26330eb"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/12/index.html","1d0b67dfc67b4d457825e698a0a09aae"],["D:/hexo/ButterflyBlog/public/2018/06/10/javaSE/Thread/13/index.html","4a5d20dbe06bbeeb99d2bc675bd9def5"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/String/15/index.html","830a476aafc340e349f8902405286909"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/Thread/14/index.html","fb0a3403575089fd9305e1da7fdfa739"],["D:/hexo/ButterflyBlog/public/2018/06/12/javaSE/String/16/index.html","1f1d818b5d951b91b777b5643dc5cf8b"],["D:/hexo/ButterflyBlog/public/2018/06/14/javaSE/Collection/21/index.html","7083972eab928f40bde7cd14b6ca825a"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/17/index.html","e938675728d9ca6fd14d12c0747d5f5d"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/18/index.html","edc7518422b73ab40b69f0455548462c"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/20/index.html","e09e4438422fb63881a0c0021e52ee51"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/22/index.html","d7d4b14cb3877c55871e3a9e8b41e2ce"],["D:/hexo/ButterflyBlog/public/2018/06/18/javaSE/Collection/19/index.html","bcc6e5f1acdcaf25b9576bb2cca511dd"],["D:/hexo/ButterflyBlog/public/2018/06/19/javaSE/IO/24/index.html","8d0d2be99a2012ed3d0d89b0ac781543"],["D:/hexo/ButterflyBlog/public/2018/06/20/javaSE/IO/23/index.html","fb6381cb6a3ed4c17ae0766366787e1f"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/29/index.html","69da4f61811610c8bccd8fb192d2ea4a"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/30/index.html","6d379a65e4841de4a8383f8edde78975"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/31/index.html","6cd80ea5cecec702a7bd5569d984699d"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/32/index.html","99c10c8d6b6d367005fb6092aae0ba1a"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/GUI/27/index.html","dc50a2e49cb704be478e9fb8216649ed"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/Socket/28/index.html","790bf53a6c2614c1502e38ee3eaddb03"],["D:/hexo/ButterflyBlog/public/2018/09/14/SimpleApp/幂等性/33/index.html","e0151ffb7fe882cd4d0aa239f77802be"],["D:/hexo/ButterflyBlog/public/2018/09/15/SimpleApp/三层架构+MVC/34/index.html","f0c303b4dd8f34264262b24b8e04052a"],["D:/hexo/ButterflyBlog/public/2018/09/17/SimpleApp/Apache HttpClient/35/index.html","9b38df5804b9f7524472f783a6091147"],["D:/hexo/ButterflyBlog/public/2018/09/18/SimpleApp/IDEA插件/36/index.html","f7a41bbc3bf9860e6367ac51ea511a53"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Intellij  IDEA/36/index.html","341d7402913bbc16ac30c1e81bbaee20"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Jackson/37/index.html","6d5e3c51c545610e517cd8da925fb417"],["D:/hexo/ButterflyBlog/public/2018/09/20/SimpleApp/Java工具类/38/index.html","90a16c012ac767adb91f07612507f5b3"],["D:/hexo/ButterflyBlog/public/2018/09/21/SimpleApp/Java工具类/39/index.html","4ec17795c65c22e673ad45d982df0124"],["D:/hexo/ButterflyBlog/public/2018/09/22/SimpleApp/Java工具类/40/index.html","747cfa2788b3d51a2ee3a563732f03f0"],["D:/hexo/ButterflyBlog/public/2018/09/23/SimpleApp/JavaScript插件/41/index.html","9f5fa8b679c42e62e88b5c3e2659ea2a"],["D:/hexo/ButterflyBlog/public/2018/09/24/SimpleApp/JavaScript插件/42/index.html","b25ade362a5625de4f7f2ec7f04f726b"],["D:/hexo/ButterflyBlog/public/2018/09/25/SimpleApp/JavaScript插件/43/index.html","9d72a929f8841c86a37a6e26f6b24a1c"],["D:/hexo/ButterflyBlog/public/2018/09/26/SimpleApp/JavaScript插件/44/index.html","faf2118cfbac55ef8f4e0d78b25bcdf6"],["D:/hexo/ButterflyBlog/public/2018/09/27/SimpleApp/JavaScript插件/45/index.html","2b0df2934e3581f60b1a0b549d9be030"],["D:/hexo/ButterflyBlog/public/2018/09/28/SimpleApp/JavaScript插件/46/index.html","6eaf2a736793eb5e838dfc80d228bdef"],["D:/hexo/ButterflyBlog/public/2018/09/29/SimpleApp/JUnit/47/index.html","4ee625e40816be06dd4494758040570e"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/48/index.html","abb0f351162c9170261c9c101f7eac45"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/49/index.html","5208a063e9ce59b9049c7b29813615c4"],["D:/hexo/ButterflyBlog/public/2018/10/01/SimpleApp/Log4j/50/index.html","750d1dda0b6b5b1a150e25804e164599"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/51/index.html","b5a3092da7df588ae7825ad0e78421ad"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/52/index.html","f9d76f2c325502106d9f444c34d4b17a"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Maven/53/index.html","1ed1add004e48432c3da6bd569d5e2f4"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/54/index.html","6ec8088823b2db9826677e329799d5c4"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/55/index.html","65c3a41a121428c64bbfeb8c81a64284"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/56/index.html","78e45b54e9c7ff2db6155a1e402e4e89"],["D:/hexo/ButterflyBlog/public/2018/10/05/SimpleApp/Maven/57/index.html","c529cc526db72fffb60598332621280a"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/58/index.html","c0b2f02a409ced4308195bb2c7b07879"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/59/index.html","518a4ae236ae952c2d32d2b885d95f9b"],["D:/hexo/ButterflyBlog/public/2018/10/07/SimpleApp/Maven/60/index.html","f92608542465b69a6c10b86bd1ab8709"],["D:/hexo/ButterflyBlog/public/2018/10/08/SimpleApp/Maven/61/index.html","3de499aafc025c73ce431f03af8f0bbb"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/63/index.html","faf6d7c220f7f8f4d42657ad22294b6e"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/64/index.html","204cfa580c004c842735867af71b5485"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/62/index.html","9f565ca13728dcb7d403f1ff9903d29d"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/65/index.html","9db28b1f1c85aeac130efcfac136b787"],["D:/hexo/ButterflyBlog/public/2018/10/12/SimpleApp/Mybatis/66/index.html","5f01780fc5b0cffb8964f3ad0151299b"],["D:/hexo/ButterflyBlog/public/2018/10/14/SimpleApp/Mybatis/68/index.html","8fd0c076c3568f2d3400f2e5e39583fd"],["D:/hexo/ButterflyBlog/public/2018/10/15/SimpleApp/Mybatis/67/index.html","0d9022907fb28365eb4033ae2ab696da"],["D:/hexo/ButterflyBlog/public/2018/10/16/SimpleApp/Mybatis/69/index.html","050ae4aa9e10bf2fb7ccc5b0c6f78fd3"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/70/index.html","0c84e5e431eaf0615096a423f2909dd5"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/71/index.html","e84e41ae2101db5eae0a2c8514d95ac4"],["D:/hexo/ButterflyBlog/public/2018/10/19/SimpleApp/RESTful/72/index.html","d7be7849040cf264976fd9476512780f"],["D:/hexo/ButterflyBlog/public/2018/10/20/SimpleApp/Spring/73/index.html","4cf9cd72eca328bdb4ed18f6503ce8e9"],["D:/hexo/ButterflyBlog/public/2018/10/21/SimpleApp/Spring/74/index.html","822d2de4a32890ed7e208c5b211d7a25"],["D:/hexo/ButterflyBlog/public/2018/10/22/SimpleApp/Spring MVC/82/index.html","83e4ca33844474c2f421a4e6df3a5749"],["D:/hexo/ButterflyBlog/public/2018/10/23/SimpleApp/Spring MVC/75/index.html","b9866acc53eaf46502f7aea7ea94f39f"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/76/index.html","38b529a1ee660927a7479e86f06581af"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/77/index.html","abf62da0e20145fdb77b63ec685bc410"],["D:/hexo/ButterflyBlog/public/2018/10/26/SimpleApp/Spring MVC/78/index.html","d1b6ea34bc0dc8a09512e87e2a93dc23"],["D:/hexo/ButterflyBlog/public/2018/10/27/SimpleApp/Spring MVC/79/index.html","b087d4b3b68ab7604d61b85a866619ef"],["D:/hexo/ButterflyBlog/public/2018/10/28/SimpleApp/Spring MVC/80/index.html","1c6301fc9180ca67ee3ffde38e24de1f"],["D:/hexo/ButterflyBlog/public/2018/10/29/SimpleApp/Spring MVC/81/index.html","c80f49b2f6ef34c2a930416a57777b48"],["D:/hexo/ButterflyBlog/public/2018/11/01/SimpleApp/Spring MVC/83/index.html","6ed8a1679776219cad7102fe2d157199"],["D:/hexo/ButterflyBlog/public/2018/11/02/SimpleApp/Spring Web/84/index.html","f50b8c0c5f4916d81ff41e7013321175"],["D:/hexo/ButterflyBlog/public/2018/11/03/SimpleApp/Spring Web/85/index.html","90b6aa0c39b6c921d62196c19b886abf"],["D:/hexo/ButterflyBlog/public/2018/11/05/SimpleApp/Spring Web/86/index.html","9ba1f16c0c7b29a43d50a7121994a155"],["D:/hexo/ButterflyBlog/public/2018/11/06/SimpleApp/Spring Web/87/index.html","3454aafb36deda459dd42432ed2ee2e3"],["D:/hexo/ButterflyBlog/public/2018/11/07/SimpleApp/Spring Web/88/index.html","cd79e9bb448dcc5f5af556e7cc222f8f"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/89/index.html","53219b9cd7e055ba71e2cbfccc947e63"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/90/index.html","d9fa724497a3e32fafc647190090b49b"],["D:/hexo/ButterflyBlog/public/2018/11/09/SimpleApp/Spring的事务管理/91/index.html","4fd587cc604cb93f78e6dbf885820b8f"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","1b702bde0008b4f54bb376a3159a18b9"],["D:/hexo/ButterflyBlog/public/404.html","6485bbb9c2cb76e4ef054835bff7dcbc"],["D:/hexo/ButterflyBlog/public/about/index.html","9d858e9e2f196b3592f34374c1921b5a"],["D:/hexo/ButterflyBlog/public/archives/2018/06/index.html","be97ace7b536285972d7c28324c9c235"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/2/index.html","6e7f59b36f141d31930dff207fa68e0a"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/3/index.html","ba3be65cae0c9e51e54eebd13746300a"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/4/index.html","fbbb4b43d1e3569d7f1c3618db3bd280"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/5/index.html","6a491d5f4778d4c694d59c161a930c43"],["D:/hexo/ButterflyBlog/public/archives/2018/09/index.html","b493c99bfb329317eace3771a9ff8605"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/2/index.html","e8e571e837ec59b437d0dd0630447a59"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/3/index.html","d01cec40b2c1af52b29918596f3309e9"],["D:/hexo/ButterflyBlog/public/archives/2018/10/index.html","3d33edbc93a7e525fff7c4c2a2257356"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/2/index.html","415af6664f254425da97d80f2ee2fe94"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/3/index.html","5f30791814403ef99c9c2ca0d000449a"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/4/index.html","2a08acfe453d2b34f74ec237e84e8fb2"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/5/index.html","a4feb4446e7ed109331ac18eea1aaf20"],["D:/hexo/ButterflyBlog/public/archives/2018/11/index.html","fc8bbc919670ee3d5b6467b0fb66b765"],["D:/hexo/ButterflyBlog/public/archives/2018/11/page/2/index.html","3a27a947b8d6b7c5fc1fc795f85178e6"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","1449e2714e867d3a7131d943a1a7d072"],["D:/hexo/ButterflyBlog/public/archives/2018/page/10/index.html","093992bf9be1ebc3efc3e0f689701f61"],["D:/hexo/ButterflyBlog/public/archives/2018/page/11/index.html","79fb399299d8af5cda1c46514ff5bf9d"],["D:/hexo/ButterflyBlog/public/archives/2018/page/12/index.html","a428ecaadcec2686d20e5115352cfb7d"],["D:/hexo/ButterflyBlog/public/archives/2018/page/13/index.html","daa9854c2006ede737f35f7e14e21f0d"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","6330ba3f2a0797dc4154515f03b71c93"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","2bf92a540eb10bbeab6aefa3f243a0de"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","c11ff8ef87f1a1910b94253499c202ed"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","974080b4568144e6757bdfe9bf07aaa9"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","b703eac5d940374115d13834d2738126"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","a56fb6465fb9c984991cba57d06fba13"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","f37b942879adbf4d34f9cff7d98170d8"],["D:/hexo/ButterflyBlog/public/archives/2018/page/9/index.html","f21d75346815190ce3da8f90e53c4450"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","962ae86712e8522c3da1244c215f4797"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","d151a17f1e702f66bc81676b2791ff4d"],["D:/hexo/ButterflyBlog/public/archives/index.html","597cb9bbd8e0363f51f8b7e147d626d3"],["D:/hexo/ButterflyBlog/public/archives/page/10/index.html","718f83b8ae75cfa0be520d17cc1adc77"],["D:/hexo/ButterflyBlog/public/archives/page/11/index.html","e1a5828a597845be47122f9f73fd8ada"],["D:/hexo/ButterflyBlog/public/archives/page/12/index.html","7e638dfd79c3ce428fc0ab7b8437dd92"],["D:/hexo/ButterflyBlog/public/archives/page/13/index.html","4c6e26e28b8a1fb382018e4d9c452da9"],["D:/hexo/ButterflyBlog/public/archives/page/14/index.html","3f4fcd91e248dc3034137549092bc160"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","9d9dd8040654e18b3e02ab180b440370"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","5b2d4bcdc944ad858cb9afd417e34101"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","2080750dc360830ec36f7ebd7e95aebb"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","85295f581b784dae6281dfa7d2a1341e"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","fc98172927004ddd7cfeeddfa7450561"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","34cdb10f0e9a4225f46204c58e7c7cde"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","0d3b0198a826a20e358625e72b141f55"],["D:/hexo/ButterflyBlog/public/archives/page/9/index.html","a5e9dc149d45de68c23043a6d42928d4"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","c473b5ba4312ddcaa6dff0ca3e936bb5"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","cdf74bb8b80957265a154ad3f739f69d"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","9e82d3e7f63be8d5fd83db3f2af161ad"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","f1d5ddfc7a7462a606ceb284ec37c09a"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/4/index.html","788b8efd751ff44ef855082119593d9b"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/index.html","10eeb71ad6bb21dc0d068a7438610546"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/2/index.html","5ac08f9e68ec8f4424293c60dbaa9bea"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/3/index.html","38d6b549f733ae0f1c87a0161ac9d879"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/4/index.html","8b8ee24d2b7e19a0c04b60ab2f678701"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/5/index.html","429d9560cc0ea438747e964ffaee2b4f"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/6/index.html","51a228528c2934000de1c91dc349bf45"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/7/index.html","a72c3d03f98f83c2e95da8f935258fb8"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/8/index.html","2fd20e08c45ac31ec3aa2176e486520e"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/9/index.html","722c6730910a08bbad926239dcdaa03c"],["D:/hexo/ButterflyBlog/public/categories/index.html","19e404e5299330f8f04b1634b069e892"],["D:/hexo/ButterflyBlog/public/css/index.css","50f2f84525817750a73514f77b0c55af"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/gallery/index.html","4af648e902f29a7f477799440781dac3"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","a5add76da093ad8565cdcdf266e94952"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/movies/index.html","701007c8188b031b967dc1d1c0b4286c"],["D:/hexo/ButterflyBlog/public/music/index.html","e0be2ab1f3c4d6bd606a2e86e90f521f"],["D:/hexo/ButterflyBlog/public/page/10/index.html","52000b12867be450582fe2be906ca6b4"],["D:/hexo/ButterflyBlog/public/page/11/index.html","6c2a581f91ee9243386b458d9a611f7d"],["D:/hexo/ButterflyBlog/public/page/12/index.html","108995f4f75003766c25f2139b20c00c"],["D:/hexo/ButterflyBlog/public/page/13/index.html","a36cad75413268c0fc67bd76501314a0"],["D:/hexo/ButterflyBlog/public/page/14/index.html","0e231579f74e841080b921fdf47700bf"],["D:/hexo/ButterflyBlog/public/page/2/index.html","ec445b8a628e81ba29a8cf45aae32216"],["D:/hexo/ButterflyBlog/public/page/3/index.html","044360b7dbcb6ea8bcd6144e684ed9a3"],["D:/hexo/ButterflyBlog/public/page/4/index.html","a4ceaf160a824dbdf91c3cf2b7bc9b5b"],["D:/hexo/ButterflyBlog/public/page/5/index.html","0eaaf4f3e9ab664f7c2ea0fd4b81d9f2"],["D:/hexo/ButterflyBlog/public/page/6/index.html","09a11eac08e83c221a20b30475899ea9"],["D:/hexo/ButterflyBlog/public/page/7/index.html","18c3f69bdc9f3a1bc002ee3af881f2df"],["D:/hexo/ButterflyBlog/public/page/8/index.html","d2d081cf302192ea61b42ee78111e925"],["D:/hexo/ButterflyBlog/public/page/9/index.html","ec5e91106856ca1b4e4849d4f085a53d"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","19bea40c2be39c8e7b661685b2732d24"],["D:/hexo/ButterflyBlog/public/tags/Annontation/index.html","4701ac5afaddb0200ca15987d14eb3f5"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","d9f7cda93631dba98c29fb329d7eddd5"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","a60c6f7b5ba5014cf9746032b9f8da0d"],["D:/hexo/ButterflyBlog/public/tags/Druid/page/2/index.html","626c89f12070b05e539646b8b066bb41"],["D:/hexo/ButterflyBlog/public/tags/File/index.html","71650aa7ae65ce7aaff166ca3102f0ea"],["D:/hexo/ButterflyBlog/public/tags/GUI/index.html","51d032c9fc660b6e31be11a553927377"],["D:/hexo/ButterflyBlog/public/tags/Http/index.html","ee5e10ff0919bb44ff2490473ad9909a"],["D:/hexo/ButterflyBlog/public/tags/IDEA/index.html","40c53f6009dd080b645a58733babdc8b"],["D:/hexo/ButterflyBlog/public/tags/IDEA插件/index.html","d436b2f8184b3366c39c2b925409b8d1"],["D:/hexo/ButterflyBlog/public/tags/IO/index.html","332919ed4db288a84cbcb3ebed353d03"],["D:/hexo/ButterflyBlog/public/tags/JDK/index.html","24e6d225b5127bb3426d7ef1266df0f7"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","160493a8a9d642417155f651755fb26e"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","94d432c7d72d3831bc37a1f52352c4d3"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","de37b731f236e5c7355cd1ba4014b0e4"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","32df8075fef399a826f9ad89d6976048"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","8ad6184734fd66ea5fcf27bcc9ebd5bf"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","e47d96fb7414624f9eba61678170f126"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","7c3c998257b1bcc8ea1b455e434398b0"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/4/index.html","85e412e37f5082371973227e1ce19925"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","640f1588fea9ba546acd192bbbaed041"],["D:/hexo/ButterflyBlog/public/tags/Jsp/index.html","20854574cd9b10c2c9ed717f6754077c"],["D:/hexo/ButterflyBlog/public/tags/Linux/index.html","11cd451054ae51042c3a44ba8ac1099f"],["D:/hexo/ButterflyBlog/public/tags/List/index.html","7d13d4bb8e6bf939af94033fcccaf631"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","e9c10c58bc702c527922131bfeef4b1e"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","329aa9b9b66abff21665e43fbbd43191"],["D:/hexo/ButterflyBlog/public/tags/MVC/page/2/index.html","b651e7f02b104ae2e0ca88e24845684f"],["D:/hexo/ButterflyBlog/public/tags/Map/index.html","8bff6225d9292423434469514634dc30"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","1d8786274d2d1bc75ae6516baaf1a642"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","1afc33a08ea5a21da01647fe226f1bf1"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/3/index.html","79b7eb97e874db70535db1b5d7d709a7"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/4/index.html","b3a2002ab7338c2f866b3e9747c7f56f"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/5/index.html","8864706b647c319e937630b0e29a410a"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/6/index.html","42cbc11750b99fef2f32eb8f8357e845"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","23349793eb599c093dca93c28a486534"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/page/2/index.html","ad0f1f74451a878d2b54866022d04998"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","5bbea399f12f9e2b6e165e663e521563"],["D:/hexo/ButterflyBlog/public/tags/SQL/index.html","f1f78f4208e38b6de9f0bbd9340abff2"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","039d87299b462bc77b04ba1e4066cbed"],["D:/hexo/ButterflyBlog/public/tags/Set/index.html","2cf5029853caa4251fcb1a74c440b9ac"],["D:/hexo/ButterflyBlog/public/tags/Socket/index.html","2117345e2198c77e6d04770d6054eb5d"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","fbba620878351dd8b092561e80b5a57a"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","726dbc513cb50676547e26e6d7b0f195"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/3/index.html","406592988fbc6ffa35d5b61451ba6de9"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/4/index.html","05b03c6e5d6e534b40754fdd15585608"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","57f8ff1822d0fa6932aa5eb580ff5c82"],["D:/hexo/ButterflyBlog/public/tags/SpringWeb/index.html","a41f2ece7a67a9509a3e7d50b05afeba"],["D:/hexo/ButterflyBlog/public/tags/Springtx/index.html","72ef57a96ce422ff9e8b13f0a2999905"],["D:/hexo/ButterflyBlog/public/tags/index.html","45dfad01d63abd89f774d95c766353ef"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","453d1a7f004d43516f6e9f960f2afaf2"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","162bc05139cb7f775a4f7224d628c1c3"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","50b3107b2467386360bf90708518198a"],["D:/hexo/ButterflyBlog/public/tags/数组/index.html","1141d20606c9ecf092e99ac7ca3de4af"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","c5c7549612d56d3bd5a0cf5333fe677a"],["D:/hexo/ButterflyBlog/public/tags/架构/page/2/index.html","6102f11f540fe7ebb2ef935e3e98cf4a"],["D:/hexo/ButterflyBlog/public/tags/架构/page/3/index.html","41e6c0b650fd410248278acb2818c22e"],["D:/hexo/ButterflyBlog/public/tags/架构/page/4/index.html","bead551faf3b706f5c980af5a0deae05"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","c617ab46b5d5f2c77e1e3320b41f94be"]];
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







