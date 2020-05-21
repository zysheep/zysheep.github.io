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

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/06/05/javaSE/JDK/00/index.html","fa79904ffa8aa10670fe767720f316c7"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/01/index.html","3751733388bd957019fa1d3e4eac0628"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/02/index.html","2a896c94a2c3310affa51720992ff992"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/03/index.html","f7f5294195d6e6ba3a862ad7fcff17db"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/04/index.html","0660f5c941e82a08d40def49ef3e7428"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/05/index.html","0ced46ea4f080f79302c2b47b9da36d0"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/06/index.html","467e62c3540dc10ed35a25e4bbb9c84c"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/OOP/07/index.html","08c3577e0e72633f2e73916c4872d832"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/08/index.html","87926b7c97543f259b7e99b3c95c6b74"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/09/index.html","b1a8d7dcd44f003e91a8e86aa5ac2b3a"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/10/index.html","2c663b9d2d44ffc38a51ebde7570698f"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/11/index.html","aea517cda6a73e954d33902422af8666"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/12/index.html","3152e1e10533e6e558535db6b9f1ca59"],["D:/hexo/ButterflyBlog/public/2018/06/10/javaSE/Thread/13/index.html","814bfeb34bc18ca91c44b590a78f972a"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/String/15/index.html","4123bdeaf8643c602170fca90b3a56f9"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/Thread/14/index.html","b3bca534b136cb1970ba835cb8d3d358"],["D:/hexo/ButterflyBlog/public/2018/06/12/javaSE/String/16/index.html","ff214e9b101685299e43855d82c0026a"],["D:/hexo/ButterflyBlog/public/2018/06/14/javaSE/Collection/21/index.html","ce30f1a1133a9685a09abc1ade9fcf30"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/17/index.html","7bea575d2cad29a00f53e5c0c280c390"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/18/index.html","190ac4a5222436005da230dfc86cc291"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/20/index.html","891efed0d2e7b178d46b3290d6c04fdf"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/22/index.html","0415ee1dc7f0282786286627dee7b15c"],["D:/hexo/ButterflyBlog/public/2018/06/18/javaSE/Collection/19/index.html","6a8da72fb99d06f1ac43d6991734397e"],["D:/hexo/ButterflyBlog/public/2018/06/19/javaSE/IO/24/index.html","b17181a4c0ad569cb97cca12fb860bb5"],["D:/hexo/ButterflyBlog/public/2018/06/20/javaSE/IO/23/index.html","ea2d23525bc7aa2136f311f84a968c67"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/29/index.html","53329036725b909a04c72ada5d0f192a"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/30/index.html","81544343954a8a7638c5c5b518ab3875"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/31/index.html","beceb646d75e08f0cb711354c6eb3106"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/32/index.html","30e1020cbc1ec80b2ad8cbf3f906a4db"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/GUI/27/index.html","2012091997f8ae323c5905c6ee3618af"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/Socket/28/index.html","1a3d51c3565de26741220ee28a8b3080"],["D:/hexo/ButterflyBlog/public/2018/09/14/SimpleApp/幂等性/33/index.html","8eee58ddeafdf65528fd06b89b6c3da0"],["D:/hexo/ButterflyBlog/public/2018/09/15/SimpleApp/三层架构+MVC/34/index.html","52cf40491d72e78d2df5022fb7ad3fa8"],["D:/hexo/ButterflyBlog/public/2018/09/17/SimpleApp/Apache HttpClient/35/index.html","c49c860b8fe1b396ad923cd8c2280c14"],["D:/hexo/ButterflyBlog/public/2018/09/18/SimpleApp/IDEA插件/36/index.html","23fcf069a73e00f7f2f0303856dcf924"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Intellij  IDEA/36/index.html","3a3e2a6c383ef322adbea72151a60398"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Jackson/37/index.html","4ae490700e79974ae6fd6b1e444b43da"],["D:/hexo/ButterflyBlog/public/2018/09/20/SimpleApp/Java工具类/38/index.html","841c7435e68997bf8022ddf6de31dac2"],["D:/hexo/ButterflyBlog/public/2018/09/21/SimpleApp/Java工具类/39/index.html","574a70c2e8fce03cf32258445482820f"],["D:/hexo/ButterflyBlog/public/2018/09/22/SimpleApp/Java工具类/40/index.html","da662cb29d1f08b7e5cc38110209c31f"],["D:/hexo/ButterflyBlog/public/2018/09/23/SimpleApp/JavaScript插件/41/index.html","f2d7507e8e9b9a71e99f4be71d62bebb"],["D:/hexo/ButterflyBlog/public/2018/09/24/SimpleApp/JavaScript插件/42/index.html","a9dba3e9eebfde6fc6b3cb83dbc1c84a"],["D:/hexo/ButterflyBlog/public/2018/09/25/SimpleApp/JavaScript插件/43/index.html","d47df30e4bf93c75962cebca3d0466ec"],["D:/hexo/ButterflyBlog/public/2018/09/26/SimpleApp/JavaScript插件/44/index.html","c4a19b77cbbf094528ae80bfda907eb3"],["D:/hexo/ButterflyBlog/public/2018/09/27/SimpleApp/JavaScript插件/45/index.html","7ccc9f444ed83dcd91e89a74c9923b51"],["D:/hexo/ButterflyBlog/public/2018/09/28/SimpleApp/JavaScript插件/46/index.html","47c903bcaa0e74f1397df4d823037a1f"],["D:/hexo/ButterflyBlog/public/2018/09/29/SimpleApp/JUnit/47/index.html","8ec5eafd930adecde0f4ae75ed21dc95"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/48/index.html","ba0cfcbe3053382fd046e66c64bc9179"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/49/index.html","0665512376759cf383331e6cd0ff7684"],["D:/hexo/ButterflyBlog/public/2018/10/01/SimpleApp/Log4j/50/index.html","9e9107f7d4f170b250bc1cd35a36f86e"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/51/index.html","a48bf597d26d0b449a072d6f06712316"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/52/index.html","68f78be8e506295a9b27cd5adc6231ee"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Maven/53/index.html","ae0c494c40c9ed67fb3829255314b7db"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/54/index.html","a68d5caeb550abe882fc335bb2306cc7"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/55/index.html","76ee9c4ef3dd26e9ee53e15cc1087081"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/56/index.html","464c492d994652face7995657c7350da"],["D:/hexo/ButterflyBlog/public/2018/10/05/SimpleApp/Maven/57/index.html","8d8fd15b9d0a5381ef248fdb605baf18"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/58/index.html","25fa05232990b53f0984629ae385c242"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/59/index.html","8dd4d3e6da338c57afd483e2404a0a49"],["D:/hexo/ButterflyBlog/public/2018/10/07/SimpleApp/Maven/60/index.html","ca359aa96ff0cc9cb808217489f95bf7"],["D:/hexo/ButterflyBlog/public/2018/10/08/SimpleApp/Maven/61/index.html","15aab909c4d56f5c21fc510c4bad53a7"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/63/index.html","de116a4e0a87a3fee744f3c3a8b08ff7"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/64/index.html","76fa76659dc898614ba82d59d40dbc53"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/62/index.html","bb05245cd4a9ff38ca2e40255bfd1371"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/65/index.html","3b61500f4c14802d464292bf93239ae1"],["D:/hexo/ButterflyBlog/public/2018/10/12/SimpleApp/Mybatis/66/index.html","7da5798a6061d0b3f1e8079494a86fa3"],["D:/hexo/ButterflyBlog/public/2018/10/14/SimpleApp/Mybatis/68/index.html","cf9c4f5b9a11974907cc357307bfb72b"],["D:/hexo/ButterflyBlog/public/2018/10/15/SimpleApp/Mybatis/67/index.html","41b528453915f25d1af1b15880f35739"],["D:/hexo/ButterflyBlog/public/2018/10/16/SimpleApp/Mybatis/69/index.html","6af033e6d006349f9a35c315a3a9ca57"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/70/index.html","d1f14919b4ac8ac85b8768eee3af701c"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/71/index.html","ef9e96275ece5586a3fb0d6552652d28"],["D:/hexo/ButterflyBlog/public/2018/10/19/SimpleApp/RESTful/72/index.html","75534bd8359ecb04a1629877c115a3d4"],["D:/hexo/ButterflyBlog/public/2018/10/20/SimpleApp/Spring/73/index.html","865480091b29381183e84a1a72028fd0"],["D:/hexo/ButterflyBlog/public/2018/10/21/SimpleApp/Spring/74/index.html","677020618029ac8bfde6db6dcaebbd9c"],["D:/hexo/ButterflyBlog/public/2018/10/22/SimpleApp/Spring MVC/82/index.html","ab60d3bb36fff7127c5e7dc6bc0396ed"],["D:/hexo/ButterflyBlog/public/2018/10/23/SimpleApp/Spring MVC/75/index.html","a7768b0ecccdf5b486473b475a1ca59a"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/76/index.html","6ea195bb9160c0c3ecafa0273678bd92"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/77/index.html","b2bf5b48570c6a77aca39cec06b6d008"],["D:/hexo/ButterflyBlog/public/2018/10/26/SimpleApp/Spring MVC/78/index.html","86a0702df9333377d011b14bf79dd379"],["D:/hexo/ButterflyBlog/public/2018/10/27/SimpleApp/Spring MVC/79/index.html","5eac2dfa6a6e4860bdf9cd851dd9e7ab"],["D:/hexo/ButterflyBlog/public/2018/10/28/SimpleApp/Spring MVC/80/index.html","836bc30d8d80c2d7f9605066dbacb084"],["D:/hexo/ButterflyBlog/public/2018/10/29/SimpleApp/Spring MVC/81/index.html","a6c97beb280e5555a9913e7ef1450df0"],["D:/hexo/ButterflyBlog/public/2018/11/01/SimpleApp/Spring MVC/83/index.html","8fdb16be2585855a57c45bcd8db8dc17"],["D:/hexo/ButterflyBlog/public/2018/11/02/SimpleApp/Spring Web/84/index.html","799fe76fefef9f534a1d0680adcf8aed"],["D:/hexo/ButterflyBlog/public/2018/11/03/SimpleApp/Spring Web/85/index.html","ba85de1feec03a7fe17994c663c8ae1c"],["D:/hexo/ButterflyBlog/public/2018/11/05/SimpleApp/Spring Web/86/index.html","7af12211139d57815ad00fd1e9a88983"],["D:/hexo/ButterflyBlog/public/2018/11/06/SimpleApp/Spring Web/87/index.html","21d71d629d51d0699a06533869a91bbb"],["D:/hexo/ButterflyBlog/public/2018/11/07/SimpleApp/Spring Web/88/index.html","fb3977ef6ff042c298ff71d857323b89"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/89/index.html","87283cd9649deb362a5f83e0b91b37c1"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/90/index.html","b6d8ec74d1924511b48e08e8ba565a72"],["D:/hexo/ButterflyBlog/public/2018/11/09/SimpleApp/Spring的事务管理/91/index.html","bc37a139014653028e1038ba5e810bf4"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","c2ea070f92d2636ccc1c2db3b46e2836"],["D:/hexo/ButterflyBlog/public/404.html","4408a05a5b3b97b2bd9350060b895343"],["D:/hexo/ButterflyBlog/public/about/index.html","4851944996b23194b78dd68f0ce961ee"],["D:/hexo/ButterflyBlog/public/archives/2018/06/index.html","3d15121ef538c018d5f6fbbe09f1fe52"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/2/index.html","ea56f9f13701ffc110c5b73ba0eeac5b"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/3/index.html","d7f9d40dbfe115cd4ab5b82b1878293c"],["D:/hexo/ButterflyBlog/public/archives/2018/09/index.html","b9d4f88a38b06ca792ad020036dc9743"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/2/index.html","ab84e10792b92731466cfa16f91aa526"],["D:/hexo/ButterflyBlog/public/archives/2018/10/index.html","3e01c25d3c3608787386ad8a9e840f14"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/2/index.html","27a17ac895300a384191d88021d637df"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/3/index.html","4182c7c9c363662a692f8ea4231080f7"],["D:/hexo/ButterflyBlog/public/archives/2018/11/index.html","2265f6b827711cfacfbea52411dfa115"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","1dcc733b8bcd8555d0d5a5491f945e6f"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","aeb548442fe0b6dfd7bb515bf9116782"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","e45256e7b06a68e81f9c4bb4342d6be7"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","71cf38d56845fc86a300e8fe367241c0"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","a2a3a4d2cbfbf1d11ef11b808d162b20"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","ee092d287bc85a85fe7dc7c628d2c599"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","5918af0a1375b2bd0e7e6239da06e03c"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","448d699c1de0792c8b7e88c1adba8b99"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","6a5a615eb94d435bde09592fc81a4c32"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","ffe117eb1a335158c0d3956ff2291810"],["D:/hexo/ButterflyBlog/public/archives/index.html","522f3d1fb3f32654bbcaa537ad124862"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","716a77d377b78248b98a8bd52ed1784b"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","92b2059644b322a8495aab45ebb66ce9"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","8f36c470da8c86e3110c5877c77cb02f"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","7b4c5d0570ba9233530f3223f69acbe4"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","05554df5642f2166c68065c537a20001"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","6862901e949fda2a5ce929942400c25d"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","983f4f67d565a7d5adf5015f79059b1c"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","8a455c9e96ec792a0cfa72294a62f53d"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","a194e073d28f5830fe6f8d813323efa4"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","73cdae6bc83558e0641e617cde89250c"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","cad845f6c2e8e2122cfdb632ac88e606"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/index.html","7c9c49815205f85d20cacf7bd415bac7"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/2/index.html","a4bd0a9bd67c761f06aef3c094d968a8"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/3/index.html","6aebb5fae5fc6231f7b217642400af53"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/4/index.html","82dd0687adfbf47debf9c93de9785e45"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/5/index.html","f6f08cfac9791ffa456a7da6d598979f"],["D:/hexo/ButterflyBlog/public/categories/index.html","8adcc68538fd559104498c78c5544992"],["D:/hexo/ButterflyBlog/public/css/index.css","50f2f84525817750a73514f77b0c55af"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","360066f8b453097de05bf2c595861719"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/music/index.html","d0c083740abd392e883e00e5fc71eac8"],["D:/hexo/ButterflyBlog/public/page/2/index.html","e5becb240624ad73273251e08b67ccde"],["D:/hexo/ButterflyBlog/public/page/3/index.html","1ceb23bf2f27211cb4827aa8352d257f"],["D:/hexo/ButterflyBlog/public/page/4/index.html","8ffb25b9bdc203427647d547b44e3bff"],["D:/hexo/ButterflyBlog/public/page/5/index.html","736bd7f0c81674ab283376a700ad175f"],["D:/hexo/ButterflyBlog/public/page/6/index.html","d6c36ba25a896f220ff1751b958c0531"],["D:/hexo/ButterflyBlog/public/page/7/index.html","b042824d1e2063d68d11863d40efdf7e"],["D:/hexo/ButterflyBlog/public/page/8/index.html","ab00471c32ebc9f756cf4bf0878cea3a"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","e57e01b10aa358bb6e3540463ff93de7"],["D:/hexo/ButterflyBlog/public/tags/Annontation/index.html","68ecfb75b34db3fc72f0e99a6bb75173"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","6bad32858c0010d5c67e5731fe143cae"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","c35cc231b79950c1190f2e4ad7c400a4"],["D:/hexo/ButterflyBlog/public/tags/File/index.html","b678b93c05996d4712a4c81d832e4689"],["D:/hexo/ButterflyBlog/public/tags/GUI/index.html","043edca0d4a96bd5b24d8f7f0dbdc2c5"],["D:/hexo/ButterflyBlog/public/tags/Http/index.html","88b97beabba4e6eaf0b7e87971cd61e1"],["D:/hexo/ButterflyBlog/public/tags/IDEA/index.html","c665c8e2fa8ec2815b4fe56011827ee6"],["D:/hexo/ButterflyBlog/public/tags/IDEA插件/index.html","e774941a3e5892393e43bfa53f7a9239"],["D:/hexo/ButterflyBlog/public/tags/IO/index.html","86ad6c1227cb2cce39d3bb480a323546"],["D:/hexo/ButterflyBlog/public/tags/JDK/index.html","733898878674b021251c7aa2df2c375f"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","d308358e94c6dcec846df92d7d5144a4"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","1282a325e9ce0ba18b0c1d4fc804869f"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","3349bc1afed9ab23d48283e0e987aafc"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","15e6dd7cb387df4e1b3577cee49ab2d0"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","b4cf0daa66abdddde12b6b74bba35796"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","b0c38b93038a8161668c2862992d73e1"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","34a3e0401d09ff086668e2f876210f82"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","a074415a6eb079a92efbc46f7cd0af0d"],["D:/hexo/ButterflyBlog/public/tags/Jsp/index.html","80ae8be93c52f5a36bb20f8d191f70dc"],["D:/hexo/ButterflyBlog/public/tags/Linux/index.html","7a3f02e5397d1daf655591a1495c5045"],["D:/hexo/ButterflyBlog/public/tags/List/index.html","c3d5ff2ade13d9e0af2066f7d684e068"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","4c5fec8dab5b981b7acba562bae2dacd"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","b1a400d0f87eb31b678fdba1f05c5d98"],["D:/hexo/ButterflyBlog/public/tags/Map/index.html","57f5b7ff85e0bea759d0d256ec4c5699"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","43d76dc3bd0db3714da4a5e7cbae05ba"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","0b82e56e87b4b9128712a087dc02f883"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/3/index.html","d417bae58c4a76e7efa26b128b438c77"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/4/index.html","e691b532639471755d448155305f8ba6"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","957ed5388aad28ebd473a5961271b30e"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","2e1e87d378b624b95dcbc6ffe1b24d9f"],["D:/hexo/ButterflyBlog/public/tags/SQL/index.html","fdc291e844d45dab6a0d5b140fa66a68"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","17c6865c3a150d8ae0430ade2a593faf"],["D:/hexo/ButterflyBlog/public/tags/Set/index.html","0502945278d4056a4710bbdfc2d2993e"],["D:/hexo/ButterflyBlog/public/tags/Socket/index.html","c2ff9a5723cbe36f05358be5c79719fa"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","b66a854eb7e6ce1096d6257c3c021650"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","f4d727a3a649b4d148798ef3d30fdc19"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","80da53bd3715076665afd7448d3007e9"],["D:/hexo/ButterflyBlog/public/tags/SpringWeb/index.html","33af82bc51aa7dd2c20d9b21fc860b63"],["D:/hexo/ButterflyBlog/public/tags/Springtx/index.html","2c5d4117a046d4d26620d236611e0252"],["D:/hexo/ButterflyBlog/public/tags/index.html","518bc35415fbb85c1dbd5b0dd452165e"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","970bea9d73cc4d2b77ee2ac79c69882b"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","621f2b43f53fb271e17a07aa8cbfde41"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","c990eb1c4839690102ca38bf6cd69c61"],["D:/hexo/ButterflyBlog/public/tags/数组/index.html","699f62c780ec44bdadc972532a64b014"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","e8dda4248e1e7017e2f364834962eef6"],["D:/hexo/ButterflyBlog/public/tags/架构/page/2/index.html","acb968a5808c598db2c5d8f01c7b6dfe"],["D:/hexo/ButterflyBlog/public/tags/架构/page/3/index.html","3bd997958ae4767af73373b4dabf949a"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","3562d2b4ad93f18b5112cc79a17f72ed"]];
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







