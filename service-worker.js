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

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/06/05/javaSE/JDK/00/index.html","fa79904ffa8aa10670fe767720f316c7"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/01/index.html","3751733388bd957019fa1d3e4eac0628"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/02/index.html","2a896c94a2c3310affa51720992ff992"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/03/index.html","f7f5294195d6e6ba3a862ad7fcff17db"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/04/index.html","0660f5c941e82a08d40def49ef3e7428"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/05/index.html","0ced46ea4f080f79302c2b47b9da36d0"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/06/index.html","467e62c3540dc10ed35a25e4bbb9c84c"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/OOP/07/index.html","08c3577e0e72633f2e73916c4872d832"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/08/index.html","87926b7c97543f259b7e99b3c95c6b74"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/09/index.html","b1a8d7dcd44f003e91a8e86aa5ac2b3a"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/10/index.html","2c663b9d2d44ffc38a51ebde7570698f"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/11/index.html","aea517cda6a73e954d33902422af8666"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/12/index.html","3152e1e10533e6e558535db6b9f1ca59"],["D:/hexo/ButterflyBlog/public/2018/06/10/javaSE/Thread/13/index.html","814bfeb34bc18ca91c44b590a78f972a"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/String/15/index.html","4123bdeaf8643c602170fca90b3a56f9"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/Thread/14/index.html","b3bca534b136cb1970ba835cb8d3d358"],["D:/hexo/ButterflyBlog/public/2018/06/12/javaSE/String/16/index.html","ff214e9b101685299e43855d82c0026a"],["D:/hexo/ButterflyBlog/public/2018/06/14/javaSE/Collection/21/index.html","ce30f1a1133a9685a09abc1ade9fcf30"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/17/index.html","7bea575d2cad29a00f53e5c0c280c390"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/18/index.html","190ac4a5222436005da230dfc86cc291"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/20/index.html","891efed0d2e7b178d46b3290d6c04fdf"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/22/index.html","0415ee1dc7f0282786286627dee7b15c"],["D:/hexo/ButterflyBlog/public/2018/06/18/javaSE/Collection/19/index.html","6a8da72fb99d06f1ac43d6991734397e"],["D:/hexo/ButterflyBlog/public/2018/06/19/javaSE/IO/24/index.html","b17181a4c0ad569cb97cca12fb860bb5"],["D:/hexo/ButterflyBlog/public/2018/06/20/javaSE/IO/23/index.html","ea2d23525bc7aa2136f311f84a968c67"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/29/index.html","53329036725b909a04c72ada5d0f192a"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/30/index.html","81544343954a8a7638c5c5b518ab3875"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/31/index.html","beceb646d75e08f0cb711354c6eb3106"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/32/index.html","30e1020cbc1ec80b2ad8cbf3f906a4db"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/GUI/27/index.html","2012091997f8ae323c5905c6ee3618af"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/Socket/28/index.html","1a3d51c3565de26741220ee28a8b3080"],["D:/hexo/ButterflyBlog/public/2018/09/14/SimpleApp/幂等性/33/index.html","8eee58ddeafdf65528fd06b89b6c3da0"],["D:/hexo/ButterflyBlog/public/2018/09/15/SimpleApp/三层架构+MVC/34/index.html","52cf40491d72e78d2df5022fb7ad3fa8"],["D:/hexo/ButterflyBlog/public/2018/09/17/SimpleApp/Apache HttpClient/35/index.html","c49c860b8fe1b396ad923cd8c2280c14"],["D:/hexo/ButterflyBlog/public/2018/09/18/SimpleApp/IDEA插件/36/index.html","23fcf069a73e00f7f2f0303856dcf924"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Intellij  IDEA/36/index.html","3a3e2a6c383ef322adbea72151a60398"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Jackson/37/index.html","4ae490700e79974ae6fd6b1e444b43da"],["D:/hexo/ButterflyBlog/public/2018/09/20/SimpleApp/Java工具类/38/index.html","841c7435e68997bf8022ddf6de31dac2"],["D:/hexo/ButterflyBlog/public/2018/09/21/SimpleApp/Java工具类/39/index.html","574a70c2e8fce03cf32258445482820f"],["D:/hexo/ButterflyBlog/public/2018/09/22/SimpleApp/Java工具类/40/index.html","da662cb29d1f08b7e5cc38110209c31f"],["D:/hexo/ButterflyBlog/public/2018/09/23/SimpleApp/JavaScript插件/41/index.html","f2d7507e8e9b9a71e99f4be71d62bebb"],["D:/hexo/ButterflyBlog/public/2018/09/24/SimpleApp/JavaScript插件/42/index.html","a9dba3e9eebfde6fc6b3cb83dbc1c84a"],["D:/hexo/ButterflyBlog/public/2018/09/25/SimpleApp/JavaScript插件/43/index.html","d47df30e4bf93c75962cebca3d0466ec"],["D:/hexo/ButterflyBlog/public/2018/09/26/SimpleApp/JavaScript插件/44/index.html","c4a19b77cbbf094528ae80bfda907eb3"],["D:/hexo/ButterflyBlog/public/2018/09/27/SimpleApp/JavaScript插件/45/index.html","7ccc9f444ed83dcd91e89a74c9923b51"],["D:/hexo/ButterflyBlog/public/2018/09/28/SimpleApp/JavaScript插件/46/index.html","47c903bcaa0e74f1397df4d823037a1f"],["D:/hexo/ButterflyBlog/public/2018/09/29/SimpleApp/JUnit/47/index.html","8ec5eafd930adecde0f4ae75ed21dc95"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/48/index.html","ba0cfcbe3053382fd046e66c64bc9179"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/49/index.html","0665512376759cf383331e6cd0ff7684"],["D:/hexo/ButterflyBlog/public/2018/10/01/SimpleApp/Log4j/50/index.html","9e9107f7d4f170b250bc1cd35a36f86e"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/51/index.html","a48bf597d26d0b449a072d6f06712316"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/52/index.html","68f78be8e506295a9b27cd5adc6231ee"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Maven/53/index.html","ae0c494c40c9ed67fb3829255314b7db"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/54/index.html","a68d5caeb550abe882fc335bb2306cc7"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/55/index.html","76ee9c4ef3dd26e9ee53e15cc1087081"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/56/index.html","464c492d994652face7995657c7350da"],["D:/hexo/ButterflyBlog/public/2018/10/05/SimpleApp/Maven/57/index.html","8d8fd15b9d0a5381ef248fdb605baf18"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/58/index.html","25fa05232990b53f0984629ae385c242"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/59/index.html","8dd4d3e6da338c57afd483e2404a0a49"],["D:/hexo/ButterflyBlog/public/2018/10/07/SimpleApp/Maven/60/index.html","ca359aa96ff0cc9cb808217489f95bf7"],["D:/hexo/ButterflyBlog/public/2018/10/08/SimpleApp/Maven/61/index.html","15aab909c4d56f5c21fc510c4bad53a7"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/63/index.html","de116a4e0a87a3fee744f3c3a8b08ff7"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/64/index.html","76fa76659dc898614ba82d59d40dbc53"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/62/index.html","bb05245cd4a9ff38ca2e40255bfd1371"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/65/index.html","3b61500f4c14802d464292bf93239ae1"],["D:/hexo/ButterflyBlog/public/2018/10/12/SimpleApp/Mybatis/66/index.html","7da5798a6061d0b3f1e8079494a86fa3"],["D:/hexo/ButterflyBlog/public/2018/10/14/SimpleApp/Mybatis/68/index.html","cf9c4f5b9a11974907cc357307bfb72b"],["D:/hexo/ButterflyBlog/public/2018/10/15/SimpleApp/Mybatis/67/index.html","41b528453915f25d1af1b15880f35739"],["D:/hexo/ButterflyBlog/public/2018/10/16/SimpleApp/Mybatis/69/index.html","6af033e6d006349f9a35c315a3a9ca57"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/70/index.html","d1f14919b4ac8ac85b8768eee3af701c"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/71/index.html","ef9e96275ece5586a3fb0d6552652d28"],["D:/hexo/ButterflyBlog/public/2018/10/19/SimpleApp/RESTful/72/index.html","75534bd8359ecb04a1629877c115a3d4"],["D:/hexo/ButterflyBlog/public/2018/10/20/SimpleApp/Spring/73/index.html","865480091b29381183e84a1a72028fd0"],["D:/hexo/ButterflyBlog/public/2018/10/21/SimpleApp/Spring/74/index.html","677020618029ac8bfde6db6dcaebbd9c"],["D:/hexo/ButterflyBlog/public/2018/10/22/SimpleApp/Spring MVC/82/index.html","ab60d3bb36fff7127c5e7dc6bc0396ed"],["D:/hexo/ButterflyBlog/public/2018/10/23/SimpleApp/Spring MVC/75/index.html","a7768b0ecccdf5b486473b475a1ca59a"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/76/index.html","6ea195bb9160c0c3ecafa0273678bd92"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/77/index.html","b2bf5b48570c6a77aca39cec06b6d008"],["D:/hexo/ButterflyBlog/public/2018/10/26/SimpleApp/Spring MVC/78/index.html","86a0702df9333377d011b14bf79dd379"],["D:/hexo/ButterflyBlog/public/2018/10/27/SimpleApp/Spring MVC/79/index.html","5eac2dfa6a6e4860bdf9cd851dd9e7ab"],["D:/hexo/ButterflyBlog/public/2018/10/28/SimpleApp/Spring MVC/80/index.html","836bc30d8d80c2d7f9605066dbacb084"],["D:/hexo/ButterflyBlog/public/2018/10/29/SimpleApp/Spring MVC/81/index.html","a6c97beb280e5555a9913e7ef1450df0"],["D:/hexo/ButterflyBlog/public/2018/11/01/SimpleApp/Spring MVC/83/index.html","8fdb16be2585855a57c45bcd8db8dc17"],["D:/hexo/ButterflyBlog/public/2018/11/02/SimpleApp/Spring Web/84/index.html","799fe76fefef9f534a1d0680adcf8aed"],["D:/hexo/ButterflyBlog/public/2018/11/03/SimpleApp/Spring Web/85/index.html","ba85de1feec03a7fe17994c663c8ae1c"],["D:/hexo/ButterflyBlog/public/2018/11/05/SimpleApp/Spring Web/86/index.html","7af12211139d57815ad00fd1e9a88983"],["D:/hexo/ButterflyBlog/public/2018/11/06/SimpleApp/Spring Web/87/index.html","21d71d629d51d0699a06533869a91bbb"],["D:/hexo/ButterflyBlog/public/2018/11/07/SimpleApp/Spring Web/88/index.html","fb3977ef6ff042c298ff71d857323b89"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/89/index.html","87283cd9649deb362a5f83e0b91b37c1"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/90/index.html","b6d8ec74d1924511b48e08e8ba565a72"],["D:/hexo/ButterflyBlog/public/2018/11/09/SimpleApp/Spring的事务管理/91/index.html","bc37a139014653028e1038ba5e810bf4"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","c2ea070f92d2636ccc1c2db3b46e2836"],["D:/hexo/ButterflyBlog/public/404.html","227159ad298e03378a1e66a156746639"],["D:/hexo/ButterflyBlog/public/README.html","5736d32f95a325f11f62cc53e1110890"],["D:/hexo/ButterflyBlog/public/about/index.html","e86d680a5328f2664a1dc19e63e19aff"],["D:/hexo/ButterflyBlog/public/archives/2018/06/index.html","93adb73e1a2ccd8981c3b4dda9ebba4f"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/2/index.html","788e2392811e9f6e3c0088d8390dfc3b"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/3/index.html","692dff0c2affbc1ba18bcf3ca8c3ed58"],["D:/hexo/ButterflyBlog/public/archives/2018/09/index.html","0de4c1151fdce0904241aaa5539b3dd5"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/2/index.html","580dd90eb794286ba743082fac9b46b4"],["D:/hexo/ButterflyBlog/public/archives/2018/10/index.html","a4811158c50e7052d662171f214f6d58"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/2/index.html","61e4f5798db52af4ca2221ee8787d7bb"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/3/index.html","5c07a288084970fabb25d88de6f67af9"],["D:/hexo/ButterflyBlog/public/archives/2018/11/index.html","76c809dbafc528ee25f2ce3310fe660a"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","a5bafa4595e170c8ada6127d6b320f41"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","a8cd274b4fce0529c126d44ad43e5998"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","5c6b40c0b0c257246586dcb7260ea440"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","1430c8d6aeea61b3387c00910abe9824"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","26c7b601a81cfb71fedc46fde1f839a1"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","ed7d07ebf37c6bf4496011a96205bc20"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","2bf5dab730a64e2cc96517923d63b783"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","82328019c384d0ee7c174bc3641d03c5"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","13df011f1d671626533ec95eea2c5eeb"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","c1dee8468c1804f903502e489ce48dba"],["D:/hexo/ButterflyBlog/public/archives/index.html","79aa856cfe0bc56ccb4857872bba67b4"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","f06c84cbad3e779d58ef286783637777"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","c2530de4cd0b4d37b293e91e54bc5ce1"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","50274156d0d1c698ced3c648f8762460"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","db7abb74dcfeae9861d957882ead8f63"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","7d72938425b32bc8db8c45b5674af35c"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","5f3a31eb8db7dbd3465c89c6c51803df"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","88dc6549efca066fa96a93bee0b325b4"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","a09349e631225230d54649c8190afe7a"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","10d2010fdd2d977d243ad2a4d47dc747"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","429262a1700651775c2d7b66e2aaa325"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","665b0b0793f3ac552e07b2fc2a16a416"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/index.html","97a7b979e11bdc16f419787a75a25da1"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/2/index.html","8e2c59b2d15066066e099419cbfd733a"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/3/index.html","1c3577b1be2fad45cf355d069375d9cc"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/4/index.html","8fd49bd7774e59e55eb4b8c87d734ed2"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/5/index.html","64f6da9d6518e1b298bb8b753b2593d6"],["D:/hexo/ButterflyBlog/public/categories/index.html","9683b99fafe4c1c04eeddb510f00e982"],["D:/hexo/ButterflyBlog/public/css/index.css","50f2f84525817750a73514f77b0c55af"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","588d7c56aeef6212d4791d29964b2c0d"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/list/index.html","a87c828c8d7419b9bbc30e02269a8cf7"],["D:/hexo/ButterflyBlog/public/page/2/index.html","c68a41f5905592e87fd8f8c938999fae"],["D:/hexo/ButterflyBlog/public/page/3/index.html","9fc57d6ba7d0e452c64b4d6fc6e13c0a"],["D:/hexo/ButterflyBlog/public/page/4/index.html","9433c3fe4afccb3a4c669f097e37959c"],["D:/hexo/ButterflyBlog/public/page/5/index.html","a39ea1769a1c357c5fac582634918449"],["D:/hexo/ButterflyBlog/public/page/6/index.html","b1470921696e61e7d8802d2291ed4d02"],["D:/hexo/ButterflyBlog/public/page/7/index.html","60e6cc12ee3cbebea6d46cd1d194751e"],["D:/hexo/ButterflyBlog/public/page/8/index.html","3a478f0b08b79ae634189a1513208598"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","3a72f4c450e0a7bd75745acb4f34134d"],["D:/hexo/ButterflyBlog/public/tags/Annontation/index.html","04f5c6883e1281456048ef03a22eaf24"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","00478b20b942836ad3dfa9f023ca6d9f"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","061c6c189c1b52a09b204e439d7b56fd"],["D:/hexo/ButterflyBlog/public/tags/File/index.html","6769852ea5a499cc28b9d60d75f3ba94"],["D:/hexo/ButterflyBlog/public/tags/GUI/index.html","eb077ed3006b14a0b621caf7deb2437e"],["D:/hexo/ButterflyBlog/public/tags/Http/index.html","bd4d403c006c4bb32e7481d98f7741ba"],["D:/hexo/ButterflyBlog/public/tags/IDEA/index.html","f5b08d7ae5c589834845fdc9ea4f590c"],["D:/hexo/ButterflyBlog/public/tags/IDEA插件/index.html","25ea783416e99b20e8c32411a3b3272f"],["D:/hexo/ButterflyBlog/public/tags/IO/index.html","f06dfe2cabb7fa0cb7d7b6c24e0ea56e"],["D:/hexo/ButterflyBlog/public/tags/JDK/index.html","6925049ff9daddf48fb2aea93c924566"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","39aa2c3e1d5022bd5dc31473f6d7e61d"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","6836f6ac5fcd747882934d1a688ac9ee"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","17305b8e9dee8388ccd0b55ab2181e12"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","0233dc9d823fb8c889a1cc994b398468"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","7809a4c336c7540ee847e4a399f0e2ed"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","3c33221fe0a520a678f015b1ce6202ae"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","aaed361682abff204c92778eabc61f74"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","c4d2a82d45377291da802a5a3d819366"],["D:/hexo/ButterflyBlog/public/tags/Jsp/index.html","ef460a3cb6b0098a2420cc9d4678bdaa"],["D:/hexo/ButterflyBlog/public/tags/Linux/index.html","d3c4a25e5549b2fd074f6f34d0350d62"],["D:/hexo/ButterflyBlog/public/tags/List/index.html","6eddd1c365e8d2c64ba37d95ff8c7234"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","31ffddd1848a59995181f9e5fb487473"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","cf1aaad71a14d105e095a2575b616814"],["D:/hexo/ButterflyBlog/public/tags/Map/index.html","5632afc956cde713733bfb198a0654e5"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","4c1f1003e35c88a1010f4f731d3ed3f3"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","a49ba856ef03ec563f7c47e73a4059ce"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/3/index.html","4e72500f3e939a5405ff9f864b1294a5"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/4/index.html","cee66daf97e5f1f31bc5b5dc23725157"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","493d5f14eecc0097cf82f3a2fcd363be"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","5d7059c4239862d4e68cd7d6c09779c2"],["D:/hexo/ButterflyBlog/public/tags/SQL/index.html","d441b6249e9c181f30044f9d42989440"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","5f125599456006555b30a9feb0459392"],["D:/hexo/ButterflyBlog/public/tags/Set/index.html","bbfacf5b14ef10132321838e6990ab0a"],["D:/hexo/ButterflyBlog/public/tags/Socket/index.html","47cc26eb9279bcaa3cd8f5a66502fcbb"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","e40fed3291f8ad573539d18b85a88167"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","0e40ce36359b7a349ad095588c2fa21f"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","91820253da6852edaf31a40752fac228"],["D:/hexo/ButterflyBlog/public/tags/SpringWeb/index.html","c7170ca0c1259a7381ea53edafdeb9f6"],["D:/hexo/ButterflyBlog/public/tags/Springtx/index.html","e021e3f4913205d8f9365abf59473ae2"],["D:/hexo/ButterflyBlog/public/tags/index.html","98e970e1bf221f81b57195d8beacc2d9"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","93601ae4789919bbb3606ceb830252f1"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","f858689153bbbdbc37c793970dff86b3"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","6892ea24d222589ca05ef77a344dc1a8"],["D:/hexo/ButterflyBlog/public/tags/数组/index.html","a099e728f9656df9bca165b2932db6c0"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","25797ea5eda6d85d150d41cc6179daea"],["D:/hexo/ButterflyBlog/public/tags/架构/page/2/index.html","acef6d2c771bf291fccc404da88c67c0"],["D:/hexo/ButterflyBlog/public/tags/架构/page/3/index.html","16d707b81c73775b3552b6ad9e989385"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","daa30cff255ba2e71219b0f609b7ef6d"]];
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







