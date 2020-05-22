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

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/06/05/javaSE/JDK/00/index.html","598cd8f0e71d120951fce8aa87dd421f"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/01/index.html","18970e141bf52b0c223468fbe5dac725"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/02/index.html","672f84ccd29f6bb12b340e2c92f9d724"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/03/index.html","94abb85479fc2247655c48e2d62d750a"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/04/index.html","98ddf6fb37c5d4ab8a6fcf6a7fa768ea"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/05/index.html","5d4714cd2a4e508a7ad5576e607d5975"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/06/index.html","8ddfc51eb2c95b3ed2f3122eb8f898af"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/OOP/07/index.html","fa0b064b0b96e478fb69d786781f03fd"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/08/index.html","cc6d528f815f061df05f04797ab4ab47"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/09/index.html","b3fe40a4ba09cd0e0a90f628f02332b6"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/10/index.html","fe5875e5d06bc811b029f9c3ff36adb7"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/11/index.html","c4c080f70a5af661c11018dc3d8ee63c"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/12/index.html","fc7544ea65a20f746fa34caef24b00ac"],["D:/hexo/ButterflyBlog/public/2018/06/10/javaSE/Thread/13/index.html","15ee5533f17c6e96c4f083f5639f1310"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/String/15/index.html","afae4fbf247be3a1d7114192014696e3"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/Thread/14/index.html","d7d8eaabf1a13d7451a382a0f56d7a41"],["D:/hexo/ButterflyBlog/public/2018/06/12/javaSE/String/16/index.html","8ff83d77f16cc4ecbfa15155bff18ada"],["D:/hexo/ButterflyBlog/public/2018/06/14/javaSE/Collection/21/index.html","a865d3316e80e8d05b7135e225e0373e"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/17/index.html","3f0bab6d91fa6c55082d845bbaa58ad4"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/18/index.html","887f3d5a85e1235acdc6d2bcd52a517b"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/20/index.html","5cc9453b784f7d51672f78f70df806b5"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/22/index.html","81032fc189f2170a2c27ea4a53449ac4"],["D:/hexo/ButterflyBlog/public/2018/06/18/javaSE/Collection/19/index.html","b9c5270ef9fe1796245893dbae6366cd"],["D:/hexo/ButterflyBlog/public/2018/06/19/javaSE/IO/24/index.html","bb07e138dc87376b2dfb542b4b0eefe8"],["D:/hexo/ButterflyBlog/public/2018/06/20/javaSE/IO/23/index.html","5a56540a60739d2fd88553dd0bce32c4"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/29/index.html","d70fde14654512b420723e1c5bbbf67a"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/30/index.html","d4f85a53aa3e75774e0476d211ac7f2d"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/31/index.html","1b3ad99ef228af2fb4a720f6e3cb202a"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/32/index.html","7562c9bba51af87fee77ca034a66f6a2"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/GUI/27/index.html","f89e945d85a28a011edd4de65c6eeaaf"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/Socket/28/index.html","dee5e59c08942871e633c417e8c57c17"],["D:/hexo/ButterflyBlog/public/2018/09/14/SimpleApp/幂等性/33/index.html","bf501b197d741dede23bc13d7d6a7646"],["D:/hexo/ButterflyBlog/public/2018/09/15/SimpleApp/三层架构+MVC/34/index.html","49cc99b85dd20e9625e32174955a7089"],["D:/hexo/ButterflyBlog/public/2018/09/17/SimpleApp/Apache HttpClient/35/index.html","d5f7a489902904b60bcd8d07e5f56d0a"],["D:/hexo/ButterflyBlog/public/2018/09/18/SimpleApp/IDEA插件/36/index.html","7aada350281a97ec2d67bdfcae7e45f2"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Intellij  IDEA/36/index.html","32d25b1baa965b2eaa6a8dd9a94a86f1"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Jackson/37/index.html","d72c601f4f94003ea6c178338c20a3f2"],["D:/hexo/ButterflyBlog/public/2018/09/20/SimpleApp/Java工具类/38/index.html","201e49e04ad2e97f495a727dc29535c3"],["D:/hexo/ButterflyBlog/public/2018/09/21/SimpleApp/Java工具类/39/index.html","61fe9f039a1ed7f72ca2bb3ce539fee8"],["D:/hexo/ButterflyBlog/public/2018/09/22/SimpleApp/Java工具类/40/index.html","4ad4f9fd322035d9671c137b4459cc53"],["D:/hexo/ButterflyBlog/public/2018/09/23/SimpleApp/JavaScript插件/41/index.html","f7fb07aaa9aa21159e810d565c3339c1"],["D:/hexo/ButterflyBlog/public/2018/09/24/SimpleApp/JavaScript插件/42/index.html","59bdf1803691f3bf7f0985231596ec99"],["D:/hexo/ButterflyBlog/public/2018/09/25/SimpleApp/JavaScript插件/43/index.html","fbdcf578237e4ff54dca7095dd0480d6"],["D:/hexo/ButterflyBlog/public/2018/09/26/SimpleApp/JavaScript插件/44/index.html","3143d41c19bd691a3b9b8807b98ae04a"],["D:/hexo/ButterflyBlog/public/2018/09/27/SimpleApp/JavaScript插件/45/index.html","a55baffeeee2d6ed2df6dcd84024e965"],["D:/hexo/ButterflyBlog/public/2018/09/28/SimpleApp/JavaScript插件/46/index.html","858bce5644784287f1d0298bc9e1b22d"],["D:/hexo/ButterflyBlog/public/2018/09/29/SimpleApp/JUnit/47/index.html","531b6b4c921944e43419016e4fd78cac"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/48/index.html","7334c9805066e22e8137cc90281369c2"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/49/index.html","09c1d58946908ff8797fae4f628756ca"],["D:/hexo/ButterflyBlog/public/2018/10/01/SimpleApp/Log4j/50/index.html","3f05cd8b0376181078a8c93759eec2ec"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/51/index.html","5619de95581ba902489be88fa4701696"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/52/index.html","1f897340040c408ce21920304845b04d"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Maven/53/index.html","a0d08934af5ca61d05cab621909f8937"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/54/index.html","e6af29794151a5ad8aa19f5af991263e"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/55/index.html","bce0244f531faf59249465b4753a6df4"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/56/index.html","b7bea15d6ab5f0aaeec821b13e680d8d"],["D:/hexo/ButterflyBlog/public/2018/10/05/SimpleApp/Maven/57/index.html","dab05326e73622819aa94ff6d752c47a"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/58/index.html","6ecf7a8ade6e869d28f3e8599e700822"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/59/index.html","7bd917e6ad4bda789f7e423ace2a188b"],["D:/hexo/ButterflyBlog/public/2018/10/07/SimpleApp/Maven/60/index.html","b287d0153d825238aaf94a65645966db"],["D:/hexo/ButterflyBlog/public/2018/10/08/SimpleApp/Maven/61/index.html","de80aaa5988852815e23d66bbb3df266"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/63/index.html","05d71480b3f7436e475af23459f89b3a"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/64/index.html","835db90eba3c3a9140f9a8acd1251106"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/62/index.html","1b52646c6627d3e2e1d08eac42bcdc69"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/65/index.html","c05d0b2436974712bbf58f9b537fc7bf"],["D:/hexo/ButterflyBlog/public/2018/10/12/SimpleApp/Mybatis/66/index.html","742d6858ff496fd1a3f840e494a3cae4"],["D:/hexo/ButterflyBlog/public/2018/10/14/SimpleApp/Mybatis/68/index.html","c7edc137e859c5ea16616df7959448d2"],["D:/hexo/ButterflyBlog/public/2018/10/15/SimpleApp/Mybatis/67/index.html","97fc4f0b66b3a974b5e799d1a67ea869"],["D:/hexo/ButterflyBlog/public/2018/10/16/SimpleApp/Mybatis/69/index.html","5383afd2d3c55930936214d44ea8df66"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/70/index.html","01286629010bba68ffe190aff3f7ad4e"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/71/index.html","7a6b5b284afb882e9244f4e4b7c0cb55"],["D:/hexo/ButterflyBlog/public/2018/10/19/SimpleApp/RESTful/72/index.html","9b40f7fa6bfc791836c4e41adcb2d27b"],["D:/hexo/ButterflyBlog/public/2018/10/20/SimpleApp/Spring/73/index.html","7dd30977f18a38f85018405dc429ece6"],["D:/hexo/ButterflyBlog/public/2018/10/21/SimpleApp/Spring/74/index.html","7997f98b026e452e1ee14800e73ce985"],["D:/hexo/ButterflyBlog/public/2018/10/22/SimpleApp/Spring MVC/82/index.html","a6740275adc5af51b56df7a2f97ed9a3"],["D:/hexo/ButterflyBlog/public/2018/10/23/SimpleApp/Spring MVC/75/index.html","13cd2227ef0c921139e3c1b4d3069536"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/76/index.html","0ca00e1fa273c6d373ced1d6f60bc839"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/77/index.html","59d3c887cc1e2f3278e2efa9e681fe3f"],["D:/hexo/ButterflyBlog/public/2018/10/26/SimpleApp/Spring MVC/78/index.html","f00fc1a3baedc185dec6bc3c3d34f765"],["D:/hexo/ButterflyBlog/public/2018/10/27/SimpleApp/Spring MVC/79/index.html","fe2666c517086a8e95496647cd41f4c8"],["D:/hexo/ButterflyBlog/public/2018/10/28/SimpleApp/Spring MVC/80/index.html","8c8b15a899b9a192f79eb5e733afdba1"],["D:/hexo/ButterflyBlog/public/2018/10/29/SimpleApp/Spring MVC/81/index.html","0601484fa295f40f0d97903db2e696f5"],["D:/hexo/ButterflyBlog/public/2018/11/01/SimpleApp/Spring MVC/83/index.html","a4724f1d6fbcb8e7392bd91756f74176"],["D:/hexo/ButterflyBlog/public/2018/11/02/SimpleApp/Spring Web/84/index.html","7afe6eee5553b38fcff0645eecce5875"],["D:/hexo/ButterflyBlog/public/2018/11/03/SimpleApp/Spring Web/85/index.html","3573fa3f11efe5d801c9f45e9bef3f5c"],["D:/hexo/ButterflyBlog/public/2018/11/05/SimpleApp/Spring Web/86/index.html","54dc54f4f305ecb6f670ee2c79f0d58c"],["D:/hexo/ButterflyBlog/public/2018/11/06/SimpleApp/Spring Web/87/index.html","47af8505c8cdc73744e8a0ae113d0464"],["D:/hexo/ButterflyBlog/public/2018/11/07/SimpleApp/Spring Web/88/index.html","202f0adee23b27523fef2b8581a5c0df"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/89/index.html","a62edee5867a81bcced1134bdb22cbad"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/90/index.html","015a5e1e3558c5879df74eb61b81878a"],["D:/hexo/ButterflyBlog/public/2018/11/09/SimpleApp/Spring的事务管理/91/index.html","fd744687d08ea74b33269007dfe064f5"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","8a6d017eba16563bcae6167166d0b3fc"],["D:/hexo/ButterflyBlog/public/404.html","7d5cdaded29c1c9470603c11e8a17b2e"],["D:/hexo/ButterflyBlog/public/about/index.html","0c40569b8c3ea442507f22080d0521bc"],["D:/hexo/ButterflyBlog/public/archives/2018/06/index.html","d44b0a0230963d10283618bca608948d"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/2/index.html","ff5c00f84d9d97da6a08c31b99c9e8cd"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/3/index.html","198a94d86cda40ca25346dc25005c6b5"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/4/index.html","6e4999cbe63b8de469e9e332299f3b32"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/5/index.html","07ad51eb22b21e307b896e10235d999b"],["D:/hexo/ButterflyBlog/public/archives/2018/09/index.html","5778cde8717a0cb6932d97fda4c8533e"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/2/index.html","a23bed5e930b791ceba49c4402f7663a"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/3/index.html","675ed831e309cb55b51d585b2d998046"],["D:/hexo/ButterflyBlog/public/archives/2018/10/index.html","89a627bc84f617e7e933c8ee3a0142e4"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/2/index.html","659cfbbf8df702f306b5ca07a93286af"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/3/index.html","5b444ade765e44721a97c4659a51c2cc"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/4/index.html","862ee66723b3aa65df07e8541ac03281"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/5/index.html","baf8b395b92884d60b249837ddb581ed"],["D:/hexo/ButterflyBlog/public/archives/2018/11/index.html","937ceaf22a7023ad9cd8d828e473ea23"],["D:/hexo/ButterflyBlog/public/archives/2018/11/page/2/index.html","b021223da963e7aed14b90a5a70cd377"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","a9b147a8f5ea6ca7c722544bd9e2e9a5"],["D:/hexo/ButterflyBlog/public/archives/2018/page/10/index.html","0c8134516102cd6e94de6f819e94e4b7"],["D:/hexo/ButterflyBlog/public/archives/2018/page/11/index.html","b109a87dbc3b19d718fcf6ea7f5a5ab6"],["D:/hexo/ButterflyBlog/public/archives/2018/page/12/index.html","6b10ce08c42ca5925d87fd4d2b477457"],["D:/hexo/ButterflyBlog/public/archives/2018/page/13/index.html","b69ce9aae24aa30fb6172e58bafd1a85"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","5e5d5bcfa1ad2087298da20b213a0b4a"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","b757b9adc6f24a4dc9a3b0f8613c9027"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","66ced3ea7a8d59649b62f68e52152e71"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","2e67f93f7ea71aba2a7d01665e0f7b51"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","d34949cfdd02d65ac12b3dadd355643e"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","52f0e489802807ab2747ee3de23d4df3"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","56a7c545f826af9338d4dc6ea6db3e72"],["D:/hexo/ButterflyBlog/public/archives/2018/page/9/index.html","ee646623e6fb947e01347edd36893885"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","41b50c03d0de23d23c16292fb68dac3f"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","256496fccfd33dc61eb2be83dc0c2e78"],["D:/hexo/ButterflyBlog/public/archives/index.html","791e760f7bdcbeda8679714e7c1ba8d3"],["D:/hexo/ButterflyBlog/public/archives/page/10/index.html","173aacb9b89aeb4342167d61ac723e52"],["D:/hexo/ButterflyBlog/public/archives/page/11/index.html","3990c873658a2c3a045185dd35a872c4"],["D:/hexo/ButterflyBlog/public/archives/page/12/index.html","13cb5917d30f2fbc3f4fdfa0ff4e4079"],["D:/hexo/ButterflyBlog/public/archives/page/13/index.html","98febe3885d22488f955ab339ce1e016"],["D:/hexo/ButterflyBlog/public/archives/page/14/index.html","96802b7309aa54279e9a46232ca0bbcd"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","fa62f34a8b7c150385407c03c69a3bb5"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","22b5b4290df8015c7508369d8e29e931"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","f2f38e320edc753bfa7db11686578a5e"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","22a2f9932813335fcf59ad37011f4961"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","b975f7fdd8c688aa886aa5dce5325aaa"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","c0e6b8724fd07d7134a2d083db300b15"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","9d2938eb6e21b8ac4bad72a75e2cf24b"],["D:/hexo/ButterflyBlog/public/archives/page/9/index.html","da8a5682f0db100631144cc28a299d25"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","7a5edec331632dc86e827005d4faf6ec"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","b1a814fb7f77fbdfb45c0ecf2df4c027"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","b27e8e5badb6ae68319141513d8220db"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","59d017f58f4262550be0a07bd781a712"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/4/index.html","18621af7d3da84814b425fe8925caf78"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/index.html","b9ce2245b703cb8d291658ec80f5ee3e"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/2/index.html","70b014bba016819382c4e690cd251bb6"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/3/index.html","1dabb744720947d310f1e217f4a152b6"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/4/index.html","68672d7ff4b0d130ae3dc96efc66ca3e"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/5/index.html","acc56563b8a60a5f9ef53f6f4a0aefcd"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/6/index.html","7f3e2023278ebccb079b8b0909a41cc2"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/7/index.html","07dacb98d22976f7d652b6b9a1028d08"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/8/index.html","a45e9bb4c3dbb48f9bc7b4260b8725de"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/9/index.html","9e845edcd4ed9428a73e15f931123c83"],["D:/hexo/ButterflyBlog/public/categories/index.html","1ed1f95402826c70d1262654a9e49301"],["D:/hexo/ButterflyBlog/public/css/index.css","015036838b971ea439334efa3a760be0"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/gallery/index.html","bea37311d6bf306a8ead9657d4848929"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","b4fe10d77bf5d687f029ac143bc7ab6a"],["D:/hexo/ButterflyBlog/public/java/index.html","a4be2f75030efa1c86e68fae1511aa20"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/movies/index.html","4df8ee40c5ea3a0ad820b12ab9ec4c47"],["D:/hexo/ButterflyBlog/public/music/index.html","e259c05fbff553ca1a0c77dd90125e42"],["D:/hexo/ButterflyBlog/public/page/10/index.html","8b08cb9fb8565ff0c1669efcccd9e4eb"],["D:/hexo/ButterflyBlog/public/page/11/index.html","b39cd32d14319aa0e5e39774d5bb0369"],["D:/hexo/ButterflyBlog/public/page/12/index.html","31c7af61131d4781df49c7824647739d"],["D:/hexo/ButterflyBlog/public/page/13/index.html","5441831d65488794a16ba10f8fbc897d"],["D:/hexo/ButterflyBlog/public/page/14/index.html","0c8a2c19c2594ce0bfe0bb23a1b2dc26"],["D:/hexo/ButterflyBlog/public/page/2/index.html","07dbb8db5289d89ba9ecc35332e0aea9"],["D:/hexo/ButterflyBlog/public/page/3/index.html","45bad99748ec41a5ebd675d395b73cf9"],["D:/hexo/ButterflyBlog/public/page/4/index.html","638469a8b569078783af7e38a7362a4c"],["D:/hexo/ButterflyBlog/public/page/5/index.html","43aa166e155e77b0fdc517432a6c2cd2"],["D:/hexo/ButterflyBlog/public/page/6/index.html","c71da7f79830e16989d07a32be1f1543"],["D:/hexo/ButterflyBlog/public/page/7/index.html","9f27c0dcac986806abbd73262cc03b4f"],["D:/hexo/ButterflyBlog/public/page/8/index.html","20501c0c6698ed2d8f4a55249b64027f"],["D:/hexo/ButterflyBlog/public/page/9/index.html","e6fadb1bf3e527ea84e9acb335d0e15d"],["D:/hexo/ButterflyBlog/public/python/index.html","78735d3f142f35a5e6aaae155be2fb2f"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","c2529562507dec91c22b2e00f7e3b94a"],["D:/hexo/ButterflyBlog/public/tags/Annontation/index.html","f6614d909ba6602ea28ac289ef53038e"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","f74b6ea82e4570d9959f4568d61db53f"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","e02d7b83a639eb1f5e7e853d6a42b154"],["D:/hexo/ButterflyBlog/public/tags/Druid/page/2/index.html","a15269a0b01bd77b4b613bd7d6b24b3b"],["D:/hexo/ButterflyBlog/public/tags/File/index.html","c0be84b92c3ca95797f78aa96873b631"],["D:/hexo/ButterflyBlog/public/tags/GUI/index.html","664eef0841540b0c2c5911b630f74679"],["D:/hexo/ButterflyBlog/public/tags/Http/index.html","ddbae5286c440d8ec8aa14025d3642ec"],["D:/hexo/ButterflyBlog/public/tags/IDEA/index.html","0febe7b992d773031455c30fa37ebc40"],["D:/hexo/ButterflyBlog/public/tags/IDEA插件/index.html","7502173df9e3d1a7f5a2ea1f8e3236eb"],["D:/hexo/ButterflyBlog/public/tags/IO/index.html","43175d576fc5f8b01465a847352c467f"],["D:/hexo/ButterflyBlog/public/tags/JDK/index.html","c695b2201b3ede50dc3366d6edb48649"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","12002961118a73e94f1c4373ced6afbf"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","9a2f8080951f7f992547ad11bacbaabf"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","fdf2e70d6c8e7c1723b629ad4bde0b88"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","77b9842c826df5a3850a46e35f126c15"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","6dfeeaa65b3af220d9e0419c1a74582b"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","06aecb50bdc75996034be3706132d0d1"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","87a87107cb0a050e346e25a0e581fda6"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/4/index.html","5ae095c88e61cf4cc17e038a7c853999"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","d2267272fa5f6fa2c2892aacfd7937ba"],["D:/hexo/ButterflyBlog/public/tags/Jsp/index.html","e5b6b9d475e34f34039c886e6ce937bc"],["D:/hexo/ButterflyBlog/public/tags/Linux/index.html","06b544b86bba7173ed65ce1da6dfac4b"],["D:/hexo/ButterflyBlog/public/tags/List/index.html","a528eefb523215d63ca286549fa765c5"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","0ada3c7fe9e44ae7207db2df23d8c76d"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","ee2a50760464f98bac04b32c75e84b23"],["D:/hexo/ButterflyBlog/public/tags/MVC/page/2/index.html","2558abe8c6ae85abb1c6b39e0854c0da"],["D:/hexo/ButterflyBlog/public/tags/Map/index.html","e9850a37c332f5a44277fad2d344da03"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","83a40c06a7ee7a97d72a89bac039bf25"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","b977560878ae2c1e68e45e108cec2202"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/3/index.html","bf96404a8f5c00b38f6505a7c524e459"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/4/index.html","9f786cf9200c73e5531581289d7bf301"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/5/index.html","a7d26f702ac9ea3370504b6f931bd003"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/6/index.html","4c61a2592525974e23763128be1e669d"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","a217425b36e57b867a09b4cd0e1c027b"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/page/2/index.html","2d343ccbe92e9363dd7dd0a3f5091faf"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","c344463f11d3e6d69626fa542e035a55"],["D:/hexo/ButterflyBlog/public/tags/SQL/index.html","82de494a35f58ba31e2c6a8f6105ab5d"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","9623350fd4e587699679eaf7ad8a1cf2"],["D:/hexo/ButterflyBlog/public/tags/Set/index.html","ea1704abc467a93926cbd71c9df6acd2"],["D:/hexo/ButterflyBlog/public/tags/Socket/index.html","46beb9fc43df22d5bd260d29127ccaf8"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","2debf3cf647e051ede85f2be81ba4c7f"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","e7ee37c388ff807d4d9b0f5b6656049a"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/3/index.html","3b662cc4028d924a673f7d5fa1751baa"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/4/index.html","ab3c179a31d39e11aa6c2a49095c70de"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","5704f819ea53efff5f57319e90429e0c"],["D:/hexo/ButterflyBlog/public/tags/SpringWeb/index.html","c6a3d594e909a5c14d77771a237a32ef"],["D:/hexo/ButterflyBlog/public/tags/Springtx/index.html","27db71e48f1bbef7c79cb8721e650f06"],["D:/hexo/ButterflyBlog/public/tags/index.html","69d8bd0f8d0db43cd38873cd07ef2cf2"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","52185e6723f730c4135c3a79305aabca"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","9c80e1e6f0434d846327e227c2dee9d9"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","0a2cf02f5f20ed1e70a751594e6c637e"],["D:/hexo/ButterflyBlog/public/tags/数组/index.html","4ed912f7881fb4a15e7dbe57c2907e5d"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","9765807e991b03b9eace2dfb651e563a"],["D:/hexo/ButterflyBlog/public/tags/架构/page/2/index.html","2f99e8e5cccb240877ebbb7bb875435c"],["D:/hexo/ButterflyBlog/public/tags/架构/page/3/index.html","3bb884219b78e22b9464cba942f9ef7b"],["D:/hexo/ButterflyBlog/public/tags/架构/page/4/index.html","bf51c947123b20303841a2de7a22033a"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","839d1199b007cd8285d5108b92b0cbff"]];
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







