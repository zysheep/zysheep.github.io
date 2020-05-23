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

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/03/01/JavaSE/JDK/00/index.html","f324c3f874681f576bc6bc367bda9dfc"],["D:/hexo/ButterflyBlog/public/2018/03/02/JavaSE/JDK/01/index.html","454dfcc3f74b2e7137fff4876b2bbaa8"],["D:/hexo/ButterflyBlog/public/2018/03/03/JavaSE/JDK/02/index.html","1a337d41cddde082c7a47e4ba601d4a7"],["D:/hexo/ButterflyBlog/public/2018/03/04/JavaSE/JLF/03/index.html","dc824b0900ce1dab5a71dfea7685834d"],["D:/hexo/ButterflyBlog/public/2018/03/05/JavaSE/JLF/04/index.html","3db3b370af1b47586db0f384b69a3c00"],["D:/hexo/ButterflyBlog/public/2018/03/06/JavaSE/JLF/05/index.html","5ada3a8c2dd49b3451d1464f1402e4bc"],["D:/hexo/ButterflyBlog/public/2018/03/07/JavaSE/JLF/06/index.html","5f1b1d97a082c5e0200f068a2253e6a5"],["D:/hexo/ButterflyBlog/public/2018/03/08/JavaSE/JLF/07/index.html","b16b41c97d005614ea07788c8ec72016"],["D:/hexo/ButterflyBlog/public/2018/03/10/JavaSE/API/9/index.html","7072da43344bd4c6f06be13a1320c984"],["D:/hexo/ButterflyBlog/public/2018/03/11/JavaSE/API/10/index.html","8d829349cbe3ac38562d4237e28f05e5"],["D:/hexo/ButterflyBlog/public/2018/03/12/JavaSE/API/11/index.html","b2693d0aa4af1772d7ab4d7748ce401f"],["D:/hexo/ButterflyBlog/public/2018/03/13/JavaSE/API/12/index.html","1e67a72f708b26752e2facaa604e5dc5"],["D:/hexo/ButterflyBlog/public/2018/03/14/JavaSE/API/13/index.html","1b2c781efc915c8e113187c060d3bc48"],["D:/hexo/ButterflyBlog/public/2018/03/15/JavaSE/API/14/index.html","b8a4404b9b40f7d12bf4775cd96a6f61"],["D:/hexo/ButterflyBlog/public/2018/03/16/JavaSE/API/15/index.html","e2f19f0353e9d07dfa8c748773363bcb"],["D:/hexo/ButterflyBlog/public/2018/03/17/JavaSE/IO/16/index.html","9a712258f495f5d3fc8d8ab9611d5c46"],["D:/hexo/ButterflyBlog/public/2018/03/18/JavaSE/IO/17/index.html","b87b756ed669656c725214c1c0a2c13d"],["D:/hexo/ButterflyBlog/public/2018/03/19/JavaSE/IO/18/index.html","81b21d1dcf692a33c862b8063cbeea08"],["D:/hexo/ButterflyBlog/public/2018/03/20/JavaSE/Exception/19/index.html","834aaf7c30622cbf6f6177c941a6ed46"],["D:/hexo/ButterflyBlog/public/2018/03/21/JavaSE/Exception/20/index.html","4580c1506a9a5b304a00a0afc5e5eaab"],["D:/hexo/ButterflyBlog/public/2018/03/22/JavaSE/GUI/21/index.html","8bad8a08b57c47c657982127ebbc4244"],["D:/hexo/ButterflyBlog/public/2018/03/23/JavaSE/OOP/22/index.html","09d25ac639a22a83a6b502ad305c3302"],["D:/hexo/ButterflyBlog/public/2018/03/24/JavaSE/OOP/23/index.html","ff688a8a418be74b1319e6b32facb90e"],["D:/hexo/ButterflyBlog/public/2018/03/25/JavaSE/OOP/24/index.html","26fafc990bfb77e0a632da38c052f5f3"],["D:/hexo/ButterflyBlog/public/2018/03/26/JavaSE/OOP/25/index.html","444714df50d2744830255a1e867161c7"],["D:/hexo/ButterflyBlog/public/2018/03/27/JavaSE/OOP/26/index.html","fae3cb8c791aa014ad90836fee19aa7c"],["D:/hexo/ButterflyBlog/public/2018/03/28/JavaSE/Thread/27/index.html","7ea67550d8f684290ccb5bf36e8f30f3"],["D:/hexo/ButterflyBlog/public/2018/03/29/JavaSE/Thread/28/index.html","fd0d8f484ae1fe963c33bbf311e93104"],["D:/hexo/ButterflyBlog/public/2018/03/30/JavaSE/Socket/29/index.html","d57f1318aadf3410ecfb291ce3103727"],["D:/hexo/ButterflyBlog/public/2018/04/01/JavaSE/Collection/30/index.html","eb446f66102111d1fe443e844bf575cd"],["D:/hexo/ButterflyBlog/public/2018/04/02/JavaSE/Collection/31/index.html","9e7f5dd669c93a099339a90010b89bc3"],["D:/hexo/ButterflyBlog/public/2018/04/03/JavaSE/jdk1.5/32/index.html","3c59dc6562935b0e32ebe618ff8b9623"],["D:/hexo/ButterflyBlog/public/2018/04/04/JavaSE/Collection/33/index.html","814575ef2b2049827781b332e70775f5"],["D:/hexo/ButterflyBlog/public/2018/04/05/JavaSE/Collection/34/index.html","710940c68da8ee64ba69e7adf7928a14"],["D:/hexo/ButterflyBlog/public/2018/04/06/JavaSE/Collection/35/index.html","69f4df16ab233b6e45622294f29783f9"],["D:/hexo/ButterflyBlog/public/2018/04/06/JavaSE/Collection/36/index.html","b2e2c09994a3f9b6c7deec86f8bae8b0"],["D:/hexo/ButterflyBlog/public/2018/04/06/JavaSE/Collection/37/index.html","dd07c1812ac531ac0d880ab9b29f551d"],["D:/hexo/ButterflyBlog/public/2018/04/07/JVM/38/index.html","e7f2710be79b97e56113279aee2cb137"],["D:/hexo/ButterflyBlog/public/2018/04/08/JVM/39/index.html","a6812577cab1d306ebb4bc77f8b823cb"],["D:/hexo/ButterflyBlog/public/2018/04/09/JavaSE/jdk1.5/41/index.html","eb8a69667f654b5afe5a4b10b4471f81"],["D:/hexo/ButterflyBlog/public/2018/04/10/JavaSE/jdk1.8/40/index.html","0b7a5bcc6db42d17444cd5c4b709c8a0"],["D:/hexo/ButterflyBlog/public/2018/04/11/JavaEE/41/index.html","e145d798c7e89200922fc27a8fc70484"],["D:/hexo/ButterflyBlog/public/2018/04/12/JavaEE/42/index.html","a6bca0137c4f8a0d6df8bd98ba9e3114"],["D:/hexo/ButterflyBlog/public/2018/04/13/JavaEE/43/index.html","371206d5803a3d71e6fcdb82ea56c164"],["D:/hexo/ButterflyBlog/public/2018/04/14/JavaEE/44/index.html","dadd788c3a08bd946b8678ca94bd1e4c"],["D:/hexo/ButterflyBlog/public/2018/09/14/SimpleApp/幂等性/33/index.html","e97ff42056f33ca05e20b6ddf0c34aac"],["D:/hexo/ButterflyBlog/public/2018/09/15/SimpleApp/三层架构+MVC/34/index.html","276aa005cbbfdec0409d085ba9408034"],["D:/hexo/ButterflyBlog/public/2018/09/17/SimpleApp/Apache HttpClient/35/index.html","c3c3fc2e6842291b12e718b0ca8dc14b"],["D:/hexo/ButterflyBlog/public/2018/09/18/SimpleApp/IDEA插件/36/index.html","a9c9876a753e4ef7342a0eaa83730ec0"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Intellij  IDEA/36/index.html","15bfeb4a55dfc05d4343f9dc6ac429a4"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Jackson/37/index.html","89ff73099bcf29d8afb5af365fa772d9"],["D:/hexo/ButterflyBlog/public/2018/09/20/SimpleApp/Java工具类/38/index.html","49d2d24f4e209c172036f837f1dfe2b4"],["D:/hexo/ButterflyBlog/public/2018/09/21/SimpleApp/Java工具类/39/index.html","0f94afbc39016f09f244948ca7dda271"],["D:/hexo/ButterflyBlog/public/2018/09/22/SimpleApp/Java工具类/40/index.html","a6f54a7abc93575fc61206a2b57926b6"],["D:/hexo/ButterflyBlog/public/2018/09/23/SimpleApp/JavaScript插件/41/index.html","3099880ae3d7d634399be963ed12e2aa"],["D:/hexo/ButterflyBlog/public/2018/09/24/SimpleApp/JavaScript插件/42/index.html","fe3cc3d876863553a006ba9de61681c9"],["D:/hexo/ButterflyBlog/public/2018/09/25/SimpleApp/JavaScript插件/43/index.html","f0a9e6ef7d1f499f24427817b254bd8a"],["D:/hexo/ButterflyBlog/public/2018/09/26/SimpleApp/JavaScript插件/44/index.html","6d3b46e9d6c6a413da7969a898f73cb1"],["D:/hexo/ButterflyBlog/public/2018/09/27/SimpleApp/JavaScript插件/45/index.html","660b3c6f70d7b2dd56a7527fe290d006"],["D:/hexo/ButterflyBlog/public/2018/09/28/SimpleApp/JavaScript插件/46/index.html","e1207d5d5903ebe1787cce6fe86c0446"],["D:/hexo/ButterflyBlog/public/2018/09/29/SimpleApp/JUnit/47/index.html","4dbd6a26f196d8352115b578ce401e56"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/48/index.html","134900ad551690b3800bbae4c059e197"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/49/index.html","06471fa5763943134f8642d355559706"],["D:/hexo/ButterflyBlog/public/2018/10/01/SimpleApp/Log4j/50/index.html","c333ea0307139654d7bc0566ccc772cf"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/51/index.html","ec61955d53eb85c84a99773b895161a3"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/52/index.html","f267f5f506df717ae8aebe94882dcecb"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Maven/53/index.html","fa2dd978470b1088ea83e1c7d68fcdf3"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/54/index.html","d9f91e7347b6111e5b48a7dc89265b4a"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/55/index.html","b342c27143b28975572c77fe6de4d5ed"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/56/index.html","fd5b8a3bd0d9b6542eadcab253cddbfd"],["D:/hexo/ButterflyBlog/public/2018/10/05/SimpleApp/Maven/57/index.html","3695ac8045d11bac3933b3a182dd1463"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/58/index.html","555600c1b8c093d990408992231a4728"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/59/index.html","3f3b9430a67f2a1f1cb7bc9ee5286c89"],["D:/hexo/ButterflyBlog/public/2018/10/07/SimpleApp/Maven/60/index.html","aeb79ac38f88fc0734b651a8c81623b1"],["D:/hexo/ButterflyBlog/public/2018/10/08/SimpleApp/Maven/61/index.html","1d73924f6c5ff36911b7c72cbebad94d"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/63/index.html","03c51547c59d80ed340f2db84cd5e7ef"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/64/index.html","62b3c32a184da97b23327fff3bbaaf6a"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/62/index.html","1f87ae4e8770398be940048987ad1e28"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/65/index.html","5d02a1b5afb37384aed9cb8e970ff49e"],["D:/hexo/ButterflyBlog/public/2018/10/12/SimpleApp/Mybatis/66/index.html","1cb6a91a131649c4a930d9bcfb9db461"],["D:/hexo/ButterflyBlog/public/2018/10/14/SimpleApp/Mybatis/68/index.html","224730d81bddd41bb33e556062c1ea1c"],["D:/hexo/ButterflyBlog/public/2018/10/15/SimpleApp/Mybatis/67/index.html","5101614512dc9f2c506f6025ba0ac36c"],["D:/hexo/ButterflyBlog/public/2018/10/16/SimpleApp/Mybatis/69/index.html","c422380243847d82495f6fe96625f9c2"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/70/index.html","156e481e80c354971156ec3dc3f65278"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/71/index.html","8e4d8866d60a87d84e850fbb52582302"],["D:/hexo/ButterflyBlog/public/2018/10/19/SimpleApp/RESTful/72/index.html","fcdee715e79c9b7e379ec5f16d2e1df6"],["D:/hexo/ButterflyBlog/public/2018/10/20/SimpleApp/Spring/73/index.html","83d6d301f53b3beb688ce0d9084481fd"],["D:/hexo/ButterflyBlog/public/2018/10/21/SimpleApp/Spring/74/index.html","055bf4daf13834599f4a6604fc8d94f9"],["D:/hexo/ButterflyBlog/public/2018/10/22/SimpleApp/Spring MVC/82/index.html","7fda53f3b0272c7c543e4e54a0d6cb4b"],["D:/hexo/ButterflyBlog/public/2018/10/23/SimpleApp/Spring MVC/75/index.html","059ee045cd3458e0de7a9440478a91a3"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/76/index.html","461914e24c985e692e5d27a1d421acfd"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/77/index.html","f099ec6193681021cb3f75264e408bdc"],["D:/hexo/ButterflyBlog/public/2018/10/26/SimpleApp/Spring MVC/78/index.html","fdcfa4da517c046404b34aacb389e9d0"],["D:/hexo/ButterflyBlog/public/2018/10/27/SimpleApp/Spring MVC/79/index.html","9e13b3a5f45e8b581d13a61217231b1b"],["D:/hexo/ButterflyBlog/public/2018/10/28/SimpleApp/Spring MVC/80/index.html","b456105db119be7da830147d5e7458a6"],["D:/hexo/ButterflyBlog/public/2018/10/29/SimpleApp/Spring MVC/81/index.html","758c11e45c15b5ed97cf603dff941b41"],["D:/hexo/ButterflyBlog/public/2018/11/01/SimpleApp/Spring MVC/83/index.html","332e8e50bcaaab770c48c16eea1c7b77"],["D:/hexo/ButterflyBlog/public/2018/11/02/SimpleApp/Spring Web/84/index.html","56c20b907c8cd46e141d84185b92b109"],["D:/hexo/ButterflyBlog/public/2018/11/03/SimpleApp/Spring Web/85/index.html","e14c059614b65f1bbe6bae7315cde430"],["D:/hexo/ButterflyBlog/public/2018/11/05/SimpleApp/Spring Web/86/index.html","c30ca1d9271b5d805f5e04d556f4ab9d"],["D:/hexo/ButterflyBlog/public/2018/11/06/SimpleApp/Spring Web/87/index.html","af7d4b764d3511064b214dcde9790603"],["D:/hexo/ButterflyBlog/public/2018/11/07/SimpleApp/Spring Web/88/index.html","3724e79f30e3f7720a2966e17d81a3bf"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/89/index.html","0c2f6c4901a3cebaba71d9bfed699c77"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/90/index.html","a5ba1702626b454bc66c852abfd1990a"],["D:/hexo/ButterflyBlog/public/2018/11/09/SimpleApp/Spring的事务管理/91/index.html","8161d3135d4bf0d9bdff8dd3cf751b0a"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","3bcc5e9c04898f895f5d95e99f079fa7"],["D:/hexo/ButterflyBlog/public/404.html","3cf503d510d85acf02c0d61391eb8f16"],["D:/hexo/ButterflyBlog/public/about/index.html","17379d78bd14a5cd74f9028492c94c61"],["D:/hexo/ButterflyBlog/public/archives/2018/03/index.html","12d14d19aaa1c24ae0460298581b19c1"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/2/index.html","42fbd816ce0470eb203f05a6b74976a5"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/3/index.html","bbeb4763f419d0f1d711d1be24a60e82"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/4/index.html","9b179e7155f7344850ac49cd69e504de"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/5/index.html","360e5d70935e07e253979bc5243e917b"],["D:/hexo/ButterflyBlog/public/archives/2018/04/index.html","3a4a66eda8be2e0b34ca9d11d15738c7"],["D:/hexo/ButterflyBlog/public/archives/2018/04/page/2/index.html","3528102fed8b04d3eec6a9cbf4170586"],["D:/hexo/ButterflyBlog/public/archives/2018/04/page/3/index.html","e3509a23bab8811752e8ec8eb1c2a586"],["D:/hexo/ButterflyBlog/public/archives/2018/09/index.html","ee0441a5e84a7a9805cb4732eccd7858"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/2/index.html","59a90d7307767c557a4e8ecf09e83f71"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/3/index.html","83132df5ff655d54f429a492549f4518"],["D:/hexo/ButterflyBlog/public/archives/2018/10/index.html","cd48d636bb1beb21f6917de5011d9b56"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/2/index.html","d31e39d66ce82c81c6cc2a70544eaa44"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/3/index.html","bdb1bd796800e053d161bf69495518bf"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/4/index.html","7099da715ee4adcff7cfc79e402caaf3"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/5/index.html","c429fc0871c1148c817fe6cf142fbe58"],["D:/hexo/ButterflyBlog/public/archives/2018/11/index.html","6c9e46ce6f098c0533ab4907dc019a5f"],["D:/hexo/ButterflyBlog/public/archives/2018/11/page/2/index.html","e1a371fffd78f787e9aecb80e4aff432"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","dafd6076b416229c3e0d2bc9419d7cfe"],["D:/hexo/ButterflyBlog/public/archives/2018/page/10/index.html","65c28960044930793058938d5bab0840"],["D:/hexo/ButterflyBlog/public/archives/2018/page/11/index.html","fc91355dd39e021ad8f0e5f3dfb57b58"],["D:/hexo/ButterflyBlog/public/archives/2018/page/12/index.html","f8f89c38b4fec4c928d3ee8b835f4c3d"],["D:/hexo/ButterflyBlog/public/archives/2018/page/13/index.html","58470ec0ef05f45171c72ed97af27eec"],["D:/hexo/ButterflyBlog/public/archives/2018/page/14/index.html","58f07d7457e50255cb96f7921e34021e"],["D:/hexo/ButterflyBlog/public/archives/2018/page/15/index.html","2bf97185a05bdbf7a401aafc45356e03"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","b848588b005b1bc6a02728f9cfd41bde"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","5b68a7703f10919f1a4da1a21be9a6f1"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","5c357d8bf931f28dfcaea3ab6da8e01f"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","7eae7de5543ba57d56b336026092a843"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","83ee97649a7fadf740ddc33b7aed52e5"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","5cd03501f9a692d44f267d89f90f9b2f"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","ba593c7675f6f6eaf9fe22e60ab068e3"],["D:/hexo/ButterflyBlog/public/archives/2018/page/9/index.html","7d10fcae954e2f1001c239a606796d74"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","9f249242788d513556bcb7c6b019ee14"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","36cd871917b0210dc217648c54bc9802"],["D:/hexo/ButterflyBlog/public/archives/index.html","c0a3c814c7218b903a7191b2e7976ad5"],["D:/hexo/ButterflyBlog/public/archives/page/10/index.html","e6797272c3371d0bc7f92a285c943033"],["D:/hexo/ButterflyBlog/public/archives/page/11/index.html","cf84080ef39115bc39d9a98b5d2cd7fe"],["D:/hexo/ButterflyBlog/public/archives/page/12/index.html","20da3bf6a5afa4cd0da2b89ab155aa62"],["D:/hexo/ButterflyBlog/public/archives/page/13/index.html","a09f22a222977b889406b94390e73c89"],["D:/hexo/ButterflyBlog/public/archives/page/14/index.html","ef8448f29c065b17a146fbe59c722a70"],["D:/hexo/ButterflyBlog/public/archives/page/15/index.html","ddb51e82b4ecbd1b9c4ac0b7c8695dc7"],["D:/hexo/ButterflyBlog/public/archives/page/16/index.html","fe5d09568ba6f1e2791368f55feb3a11"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","4b2a5cafaa5af4919dfeed6503064200"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","f759efea67d26fb03868b49cc27cd9dd"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","01cd77b838200022fd7b85ea8abf4a7a"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","301db201be97e764baa7832aab6ecc12"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","eeaadcb44effa913722a8da1984feee0"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","69e97b011a5c4ce0f8b9abcdfba1ad60"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","4cd0381348580342dcd55d5997f608de"],["D:/hexo/ButterflyBlog/public/archives/page/9/index.html","2f446d3bd28c08945c1a5f7d4498dfa2"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","b0deae9baf2d863d32c613f0546ba589"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/JVM篇/index.html","83bd626b302f2190814755361c8bf0d7"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java-面向对象/index.html","76019122fdc35f072597d80d94363d24"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/GUI/index.html","186be61c8b2163c05763789c44c5f3ba"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/JDK常用API/index.html","0f99c234c3dae5597bb70be3c76e49e5"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java-异常处理/index.html","d175d98174ca54d38a16fc363f319286"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java-流-Stream-、文件-File-和IO/index.html","6be27263c18b983eca7e7efd708c4da0"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java开发环境搭建/index.html","c7f560ba619c99345a57c38f33be8f01"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java语言基础/index.html","1bcbbed468ea9848192e7896c9ace88a"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/index.html","aadfcd0946285c6894525857ed8e59e2"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/page/2/index.html","c46812fdd1c8dbed2cc9e4a050608093"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/page/3/index.html","675cea7d7e2d989d57ad5e2e0191a625"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java高级篇/index.html","b9bddb59099c6f091dc41596e4230001"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java高级篇/page/2/index.html","68092e3e99962de4c5221d34d0e7eab9"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","72b4431c53aad4be104c11029077c421"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","8ac7d465361e4ce2d4a56553817fdfda"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","c1c65410929abfda5e9a095b946a9ff9"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/4/index.html","7a5f3484a9c3a869304593940f19885c"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/5/index.html","34cd121b286658ee64f11814ea0bbfaf"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/6/index.html","481c8e4b24e0aa998c108efa18afd497"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/index.html","5cfde1f2cc79a25be84d9189c6556f32"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/2/index.html","9e713936a5c51d98882cc683f419074a"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/3/index.html","4da7d8a32324c21fd648032ec2a0ee1f"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/4/index.html","881c9ae8435fb9971373f21bb2d09b6c"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/5/index.html","eebfd5a2c302312a502786d9e36099bd"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/6/index.html","91d6e4b01fff6e353e68a70078207cd2"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/7/index.html","6073c9e6fb3eccdc235afd4d83d0f698"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/8/index.html","06d3ae6e7ca1b9c14cf5b9c599a86bb7"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/9/index.html","bc1a005621daf7cb823680e3fbafc91e"],["D:/hexo/ButterflyBlog/public/categories/index.html","99b0528601117c661f56b43431268fe8"],["D:/hexo/ButterflyBlog/public/css/background.css","6c1994a210210a89e045a029b8a8db69"],["D:/hexo/ButterflyBlog/public/css/index.css","015036838b971ea439334efa3a760be0"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/gallery/index.html","84ab67dbdaf27c5269f866981e28602e"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","b9bfd33a562118149decf7140a785b68"],["D:/hexo/ButterflyBlog/public/java/index.html","75902ef0c0858b4ba3a3a0ce79aa8baf"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/movies/index.html","ab963322a7607473c274916cee543756"],["D:/hexo/ButterflyBlog/public/music/index.html","457ce87b2a16cfc01d059b4c3fe48ee0"],["D:/hexo/ButterflyBlog/public/page/10/index.html","f6c9119ef626910088af3d8fb40af9e2"],["D:/hexo/ButterflyBlog/public/page/11/index.html","fd79e1adf8b43b7140416fe4561dc44d"],["D:/hexo/ButterflyBlog/public/page/12/index.html","965797ee0616403fe3871509eb81ea5b"],["D:/hexo/ButterflyBlog/public/page/13/index.html","2368f050fa8b847834349b1670d7d9ae"],["D:/hexo/ButterflyBlog/public/page/14/index.html","2949e4e815766385091157d0e00faff5"],["D:/hexo/ButterflyBlog/public/page/15/index.html","100d2d5f7d7c0a0d9f6de78caff7f2f4"],["D:/hexo/ButterflyBlog/public/page/16/index.html","cc70821ab210a029d4f9af6323158bcb"],["D:/hexo/ButterflyBlog/public/page/2/index.html","a3e07c88bdfb8073433932632c550ca2"],["D:/hexo/ButterflyBlog/public/page/3/index.html","2431d7016e572c263baf0dd719439e57"],["D:/hexo/ButterflyBlog/public/page/4/index.html","e86162b4cae8a465cbff3422e1bee8dc"],["D:/hexo/ButterflyBlog/public/page/5/index.html","f78b0a998a7f00396fd13ab016e7439a"],["D:/hexo/ButterflyBlog/public/page/6/index.html","1a81276f15e16f19abb860ced264a0ed"],["D:/hexo/ButterflyBlog/public/page/7/index.html","645a2647b165b499f9dcbd419cd2b0b1"],["D:/hexo/ButterflyBlog/public/page/8/index.html","8400940904cadabe4d143307b12dd45c"],["D:/hexo/ButterflyBlog/public/page/9/index.html","821e4eb60297b9229a78a9b03a11ee5b"],["D:/hexo/ButterflyBlog/public/python/index.html","bbcb5e2c6aae432b992f6c97a189a52d"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","5cde88678fc1a8f4b719baa71c02045e"],["D:/hexo/ButterflyBlog/public/tags/Annontation/index.html","896e1ff6482d0e1a1772748e380faf1f"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","9fbcc67ba43c30c026cc2c55dd28d1c4"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","58a7d00d571232a76de84254dd6e4304"],["D:/hexo/ButterflyBlog/public/tags/Druid/page/2/index.html","8aacb85397b77f7787f6ae8aa724043a"],["D:/hexo/ButterflyBlog/public/tags/Http/index.html","6b502923a8506fa21f9eeeb2bd9e19be"],["D:/hexo/ButterflyBlog/public/tags/IDEA/index.html","cbf86cc47d0737b8bd6a808d1f159452"],["D:/hexo/ButterflyBlog/public/tags/IDEA插件/index.html","10924a62074068b0ac1a5f9afd2a5233"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","d5bc519d22d1c61c12a303453331f4cf"],["D:/hexo/ButterflyBlog/public/tags/JDK1-8新特性/index.html","e8b0210e57252e2129e737479f6840ea"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","731363418c33f233d4483c1198126647"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","87b483dbdafbc3b6b25b5935fbe40db7"],["D:/hexo/ButterflyBlog/public/tags/JVM/index.html","82ca40193ac082e07aa9c829b6b9b3a4"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","035514d66761ecce4e4395d700ef96dd"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","cd9dc367030a485f26d49d5ea4ee9c6c"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","baab7e1385e14296fea683b5ab31059a"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","51342aef04928438f913d85ebd7efa13"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/4/index.html","a557707cc7377f2d8faca1af56a7f2c4"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/5/index.html","f5f0391ce7f73b0bc2c37399238a4b1a"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/6/index.html","22e13a880d46e9281f923833c897f45a"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","b9c685f2144116c12ab531af0cc334c4"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","8ad996b4a404f153da47a78c2414462e"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","5bf7a5960a3c521f0677cc9ae68a93c2"],["D:/hexo/ButterflyBlog/public/tags/MVC/page/2/index.html","100023685516e7443b0acf2b47c02f7f"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","7682ede1b31c082490b30863bb5158bd"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","6206557d18aade6389952ed761e1d9e8"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/3/index.html","59d0c1c6fb5531960cc2dc9a6e7f4f04"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/4/index.html","6680620808c4ee1543cc05be355fd294"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/5/index.html","a164918b1daaa123aef3a7d01675b661"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/6/index.html","0bdb2ddc432eee6847aba8130bb65bb6"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","cc1b7042250dd330c1055207103f91f8"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/page/2/index.html","82d5347adf0ea308bd718a9f9419c24f"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","32f99204816766fcec6d8f960461d58b"],["D:/hexo/ButterflyBlog/public/tags/SQL/index.html","8fe91ec71ace012ef41a77f6cb2f077a"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","9344587da8e9b90ef6356cdca04d5db2"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","44249b7d619095d5a8f7ce86cd1b38cc"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","d8423efd7492f339e730c7356cd65c50"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/3/index.html","6dbf449d960693c0b5e27979eb7af9d9"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/4/index.html","8e3f6a6fb83ca1e00d1754f7d5a97cd1"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","3521405a238023938b0bee02f52f02bb"],["D:/hexo/ButterflyBlog/public/tags/SpringWeb/index.html","089c1bd0ac6b74fa043e0503f9825d04"],["D:/hexo/ButterflyBlog/public/tags/Springtx/index.html","23236332dcc567e20fae925b7eef3579"],["D:/hexo/ButterflyBlog/public/tags/index.html","bb976c35e2e8dc7a78f5eab3744175a9"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","30b78707599a2daa39c4d004d2d3d9cd"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","1d09f64a7295f389d99512d471216c5f"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","e46cec99f3497e95c277dc2b15ab0040"],["D:/hexo/ButterflyBlog/public/tags/数据结构/index.html","10eb33432a0aefdf45c9db8ca4160c6f"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","f771f4200f18fc420432fccb5119a318"],["D:/hexo/ButterflyBlog/public/tags/架构/page/2/index.html","9b0058a605edd101af5c092af61e849c"],["D:/hexo/ButterflyBlog/public/tags/架构/page/3/index.html","a0279626dfb12e0ba35639b0aa5e0d4e"],["D:/hexo/ButterflyBlog/public/tags/架构/page/4/index.html","ea2f566b7c89536b79fa2804439c23d3"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","40da0ce04445ad4610d88a3c4b200a09"]];
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







