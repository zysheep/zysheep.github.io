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

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/03/01/JavaSE/JDK/00/index.html","57e800cf86a38acf93d51bb9e2e44446"],["D:/hexo/ButterflyBlog/public/2018/03/02/JavaSE/JDK/01/index.html","7ccbd8b562e3a78d4ec396c1e7a91d9a"],["D:/hexo/ButterflyBlog/public/2018/03/03/JavaSE/JDK/02/index.html","c5cbe8e34757c84b300c0eb3fb808ada"],["D:/hexo/ButterflyBlog/public/2018/03/04/JavaSE/JLF/03/index.html","9380970c2eb6d62f656f416664d3eb24"],["D:/hexo/ButterflyBlog/public/2018/03/05/JavaSE/JLF/04/index.html","899a232eb00b226120ba64ab0ec141af"],["D:/hexo/ButterflyBlog/public/2018/03/06/JavaSE/JLF/05/index.html","c350b9f61040333b96eb41c23f44a291"],["D:/hexo/ButterflyBlog/public/2018/03/07/JavaSE/JLF/06/index.html","9ef57c2dfc04f55f51e24015c1756ace"],["D:/hexo/ButterflyBlog/public/2018/03/08/JavaSE/JLF/07/index.html","33a2835008b3e70c7ccccf91ffdfc55e"],["D:/hexo/ButterflyBlog/public/2018/03/10/JavaSE/API/9/index.html","0cdce67e1b9ab0922c7df806a18c0c53"],["D:/hexo/ButterflyBlog/public/2018/03/11/JavaSE/API/10/index.html","604284de884f837aea3a3203ddd20ef3"],["D:/hexo/ButterflyBlog/public/2018/03/12/JavaSE/API/11/index.html","82e794b11cb643d40cc46e47d10b307d"],["D:/hexo/ButterflyBlog/public/2018/03/13/JavaSE/API/12/index.html","7b7387cab3e7417f39bb60017b300347"],["D:/hexo/ButterflyBlog/public/2018/03/14/JavaSE/API/13/index.html","5121209eca603380c501a7d624db0967"],["D:/hexo/ButterflyBlog/public/2018/03/15/JavaSE/API/14/index.html","d648ebd115213f57de7e8e43ddf6bf90"],["D:/hexo/ButterflyBlog/public/2018/03/16/JavaSE/API/15/index.html","bb771589888009d3d265b7b8dd615da9"],["D:/hexo/ButterflyBlog/public/2018/03/17/JavaSE/IO/16/index.html","e60d6a03c54b2a2ea7ff0bf96d9cde13"],["D:/hexo/ButterflyBlog/public/2018/03/18/JavaSE/IO/17/index.html","4fe14b27eedb1a9ea6df8f4f94465ce3"],["D:/hexo/ButterflyBlog/public/2018/03/19/JavaSE/IO/18/index.html","15166fb5da348cdec20b7323a10e9111"],["D:/hexo/ButterflyBlog/public/2018/03/20/JavaSE/Exception/19/index.html","b476aeadcbfbb90f0c9e8ace9a9415d7"],["D:/hexo/ButterflyBlog/public/2018/03/21/JavaSE/Exception/20/index.html","cac6132f72a2f548245fed618d023960"],["D:/hexo/ButterflyBlog/public/2018/03/22/JavaSE/GUI/21/index.html","4105ec3565d57c8bb966669ef4ea220c"],["D:/hexo/ButterflyBlog/public/2018/03/23/JavaSE/OOP/22/index.html","78b7b11c5ea0f03e5ed8f5dde3f10437"],["D:/hexo/ButterflyBlog/public/2018/03/24/JavaSE/OOP/23/index.html","755012376c58cd73736dd1cf1d2bef07"],["D:/hexo/ButterflyBlog/public/2018/03/25/JavaSE/OOP/24/index.html","9c40baedad80a083e8f5654d92b2df1c"],["D:/hexo/ButterflyBlog/public/2018/03/26/JavaSE/OOP/25/index.html","37cf70ffde10f34b31b15b8f8df55061"],["D:/hexo/ButterflyBlog/public/2018/03/27/JavaSE/OOP/26/index.html","aa98d65ca80f7ae267e7c13f1fcf2ff1"],["D:/hexo/ButterflyBlog/public/2018/03/28/JavaSE/Thread/27/index.html","4df67887b7c813cf847e257571df44af"],["D:/hexo/ButterflyBlog/public/2018/03/29/JavaSE/Thread/28/index.html","cd4ce21fae4f09b6d006586870238971"],["D:/hexo/ButterflyBlog/public/2018/03/30/JavaSE/Socket/29/index.html","09450091a6fe934af58355fad7de3c6e"],["D:/hexo/ButterflyBlog/public/2018/04/01/JavaSE/Collection/30/index.html","055cda7621000585c52ae706f9bd6445"],["D:/hexo/ButterflyBlog/public/2018/04/02/JavaSE/Collection/31/index.html","0ca29d413d34b667451fa00492d090cb"],["D:/hexo/ButterflyBlog/public/2018/04/03/JavaSE/jdk1.5/32/index.html","be0ba85d832630b85ff0206565c89909"],["D:/hexo/ButterflyBlog/public/2018/04/04/JavaSE/Collection/33/index.html","3c70fb43d64dffed82490645c4d8d5ba"],["D:/hexo/ButterflyBlog/public/2018/04/05/JavaSE/Collection/34/index.html","f754722f42fae309ff80a26f0177f978"],["D:/hexo/ButterflyBlog/public/2018/04/06/JavaSE/Collection/35/index.html","074d150a6b2411eec7cb851c44baed5b"],["D:/hexo/ButterflyBlog/public/2018/04/06/JavaSE/Collection/36/index.html","f29f85bdc9873a26490dee96458d3e70"],["D:/hexo/ButterflyBlog/public/2018/04/06/JavaSE/Collection/37/index.html","0574fdbd0086687150c67b0e51a703a3"],["D:/hexo/ButterflyBlog/public/2018/04/07/JVM/38/index.html","277a7b710275f2982da0d87e393b23aa"],["D:/hexo/ButterflyBlog/public/2018/04/08/JVM/39/index.html","c7f4c1086d27711363b7201b35f791e8"],["D:/hexo/ButterflyBlog/public/2018/04/09/JavaSE/jdk1.5/41/index.html","455160431cb5a5a68a53d89162515659"],["D:/hexo/ButterflyBlog/public/2018/04/10/JavaSE/jdk1.8/40/index.html","42143249e75d3e04966f17e3c1131153"],["D:/hexo/ButterflyBlog/public/2018/04/11/JavaEE/41/index.html","e787d30fd31797cb92320968cb546a99"],["D:/hexo/ButterflyBlog/public/2018/04/12/JavaEE/42/index.html","34a571c0bbeec9b0f05ba00d31f0822c"],["D:/hexo/ButterflyBlog/public/2018/04/13/JavaEE/43/index.html","43351a464e2082238007ad222e4ff4b4"],["D:/hexo/ButterflyBlog/public/2018/04/14/JavaEE/44/index.html","45330d0f94550f3d4ed9035a88f167de"],["D:/hexo/ButterflyBlog/public/2018/05/02/Git/42/index.html","384161b7d571bafc238909b0b24cfeb5"],["D:/hexo/ButterflyBlog/public/2018/05/03/Git/43/index.html","a421feb3780a20b4a9a757c354b2bd05"],["D:/hexo/ButterflyBlog/public/2018/05/04/Git/44/index.html","8b0c005c4b18d9ba080d1b5045e1736e"],["D:/hexo/ButterflyBlog/public/2018/05/05/jQuery/43/index.html","6de62b5aa1d71d48f500df91378df663"],["D:/hexo/ButterflyBlog/public/2018/05/06/MySQL/44/index.html","6ea3455773651ea739ce0e2712c4c34d"],["D:/hexo/ButterflyBlog/public/2018/05/07/MySQL/45/index.html","378e996ee006c5fe8f0fafce5325510c"],["D:/hexo/ButterflyBlog/public/2018/05/07/SimpleApp/Intellij  IDEA/46/index.html","df6cc1534eeec0a9a227d7ed720128cd"],["D:/hexo/ButterflyBlog/public/2018/05/08/SimpleApp/Maven/53/index.html","5d00cfa3b6863e1d68d8938a0c2140d9"],["D:/hexo/ButterflyBlog/public/2018/05/09/SimpleApp/Maven/54/index.html","0cba73bf6a6e3f9abf91c065f4de0147"],["D:/hexo/ButterflyBlog/public/2018/05/10/SimpleApp/Maven/55/index.html","a54dd7096bcc51c4b2e1e22fada52c24"],["D:/hexo/ButterflyBlog/public/2018/05/11/SimpleApp/Maven/56/index.html","46b832290c040e27f58a82367f050e69"],["D:/hexo/ButterflyBlog/public/2018/05/12/SimpleApp/Maven/57/index.html","ee067902e20ea9f0f574a07e2a0180a6"],["D:/hexo/ButterflyBlog/public/2018/05/13/SimpleApp/Maven/58/index.html","e189f5ec183cae6fbba115699a917b61"],["D:/hexo/ButterflyBlog/public/2018/05/14/SimpleApp/Maven/59/index.html","cb716d3fbf890d7483450ed3c023d978"],["D:/hexo/ButterflyBlog/public/2018/05/15/SimpleApp/Maven/60/index.html","5a19eb34fe632682a831b57d9571f0ff"],["D:/hexo/ButterflyBlog/public/2018/05/16/SimpleApp/Maven/61/index.html","5e9bdc9393b04110412d5a35696e3a34"],["D:/hexo/ButterflyBlog/public/2018/05/16/SimpleApp/Maven/62/index.html","8257728fe9aef3f7885edc76216b4217"],["D:/hexo/ButterflyBlog/public/2018/05/17/SimpleApp/MVC/62/index.html","a613ab0e26f5bd16b5ff43e4366a948f"],["D:/hexo/ButterflyBlog/public/2018/05/18/SimpleApp/JUnit/63/index.html","8684cf1e0c0163b54d3685123f7a437a"],["D:/hexo/ButterflyBlog/public/2018/05/19/SimpleApp/Log4j/64/index.html","c518f55ff0968cab2759be9c78d0e70c"],["D:/hexo/ButterflyBlog/public/2018/05/20/SimpleApp/Log4j/65/index.html","dc65053f9a8a6f049de52fe237c76b10"],["D:/hexo/ButterflyBlog/public/2018/05/21/SimpleApp/Log4j/66/index.html","4859b404d3b0c0dc968226bc5aec862b"],["D:/hexo/ButterflyBlog/public/2018/05/22/SimpleApp/Mybatis/62/index.html","bad0c14c1f2e27c1a8c846d2430d467c"],["D:/hexo/ButterflyBlog/public/2018/05/23/SimpleApp/Mybatis/63/index.html","e988f0ebbd5d64579b64d98a8b474b1c"],["D:/hexo/ButterflyBlog/public/2018/05/24/SimpleApp/Apache HttpClient/72/index.html","be3f0fc5d8bfbd5a11c921d8fa62e9d6"],["D:/hexo/ButterflyBlog/public/2018/05/24/SimpleApp/Jackson/73/index.html","f994200f3ec878a9c6114ed2bebb3012"],["D:/hexo/ButterflyBlog/public/2018/05/24/SimpleApp/Mybatis/64/index.html","0dc53bf715fb0b53949382f6412525c0"],["D:/hexo/ButterflyBlog/public/2018/05/25/SimpleApp/Mybatis/65/index.html","2d20a2033290706cb3da62333dbc0637"],["D:/hexo/ButterflyBlog/public/2018/05/25/SimpleApp/RESTful/75/index.html","a3152d36851d198f69545d73e5c301f9"],["D:/hexo/ButterflyBlog/public/2018/05/26/SimpleApp/Mybatis/66/index.html","413c07c62a2a846c9e3b3b57043d9744"],["D:/hexo/ButterflyBlog/public/2018/05/26/SimpleApp/幂等性/76/index.html","8a63c69df3ee9706d6f67674705b1cc0"],["D:/hexo/ButterflyBlog/public/2018/05/27/SimpleApp/Mybatis/67/index.html","7066c742e545316a8f84de8eb5fa4103"],["D:/hexo/ButterflyBlog/public/2018/05/28/SimpleApp/Intellij  IDEA/77/index.html","a3da78614cea81368e6e30893f9f102c"],["D:/hexo/ButterflyBlog/public/2018/05/28/SimpleApp/Mybatis/68/index.html","5797222953c80ec4b1f5aea8748b4a42"],["D:/hexo/ButterflyBlog/public/2018/05/29/SimpleApp/JavaScript插件/78/index.html","4800faf8a562344e5952394e81dd5a2c"],["D:/hexo/ButterflyBlog/public/2018/05/29/SimpleApp/Mybatis/69/index.html","8b5603c997cd3e44ebd686f709f9b74a"],["D:/hexo/ButterflyBlog/public/2018/05/30/SimpleApp/JavaScript插件/79/index.html","d6f2193324393fd7c8841919cb9685dc"],["D:/hexo/ButterflyBlog/public/2018/05/30/SimpleApp/Mybatis/70/index.html","316d63b25e042af655351ebe0ebe8727"],["D:/hexo/ButterflyBlog/public/2018/05/31/SimpleApp/Mybatis/71/index.html","0fdaae2edf8956c7932e8ae4cdee5204"],["D:/hexo/ButterflyBlog/public/2018/06/01/SimpleApp/JavaScript插件/80/index.html","1b345695301f879994fb124c60a0cce6"],["D:/hexo/ButterflyBlog/public/2018/06/01/Spring/Spring MVC/102/index.html","2510de22241cc89e11aeb25354f1406f"],["D:/hexo/ButterflyBlog/public/2018/06/02/SimpleApp/JavaScript插件/81/index.html","711d5821ccf716951c23789c264a125f"],["D:/hexo/ButterflyBlog/public/2018/06/02/Spring/Spring MVC/103/index.html","3217006a4341fcd5d0509f9493b88b69"],["D:/hexo/ButterflyBlog/public/2018/06/03/SimpleApp/JavaScript插件/82/index.html","f497bdde819849812ad90a40029736cc"],["D:/hexo/ButterflyBlog/public/2018/06/04/SimpleApp/JavaScript插件/83/index.html","3563a88e91205413c8f819a5f7277a11"],["D:/hexo/ButterflyBlog/public/2018/06/04/SimpleApp/JavaScript插件/89/index.html","c716bef44fb397b67a3b4d03024572a5"],["D:/hexo/ButterflyBlog/public/2018/06/04/SimpleApp/Java工具类/84/index.html","3df48bb8b36c1dff19fbd6fcd30d9abe"],["D:/hexo/ButterflyBlog/public/2018/06/04/Spring/Spring MVC/105/index.html","5da4edeadf4cdcc95b876ae89bf459f8"],["D:/hexo/ButterflyBlog/public/2018/06/05/SimpleApp/Java工具类/85/index.html","19de810a77a241c9c84194019bb6c297"],["D:/hexo/ButterflyBlog/public/2018/06/05/Spring/Spring MVC/107/index.html","65914c5194ed9e4d6a8fe882f360b785"],["D:/hexo/ButterflyBlog/public/2018/06/06/SimpleApp/Java工具类/86/index.html","a1ac8c1a5a3ede252f856172e8f06bfe"],["D:/hexo/ButterflyBlog/public/2018/06/06/SimpleApp/Kaptcha验证码/87/index.html","2dd68c49eef74a03c47dd50aed04f95c"],["D:/hexo/ButterflyBlog/public/2018/06/06/Spring/Spring tx/108/index.html","21a7fbd952f5666ce03858c06aecd681"],["D:/hexo/ButterflyBlog/public/2018/06/07/SimpleApp/Kaptcha验证码/88/index.html","700243e995ab7d3b6ecec1eec4c5b6f8"],["D:/hexo/ButterflyBlog/public/2018/06/07/Spring/90/index.html","d77f035964da8223a9dcb27602598bcc"],["D:/hexo/ButterflyBlog/public/2018/06/08/Spring/92/index.html","4cb93e76e6ef0296df844d2610710db1"],["D:/hexo/ButterflyBlog/public/2018/06/08/Spring/93/index.html","93cde2306e10714171d6cecba69e6d41"],["D:/hexo/ButterflyBlog/public/2018/06/08/Spring/Spring tx/109/index.html","5d2d32d2a31037fce0caea45f1da9f7a"],["D:/hexo/ButterflyBlog/public/2018/06/09/Spring/91/index.html","26f5d7ee10b2a2e6943efd065b11c6df"],["D:/hexo/ButterflyBlog/public/2018/06/09/Spring/Spring Security/114/index.html","e9d0d63a6f4ff754884b69a19da2d652"],["D:/hexo/ButterflyBlog/public/2018/06/09/Spring/Spring Web/95/index.html","0419b424fa10381d74c2e0a1ad62cecd"],["D:/hexo/ButterflyBlog/public/2018/06/09/Spring/Spring tx/110/index.html","47127f3efe33826b9c345616ca72e277"],["D:/hexo/ButterflyBlog/public/2018/06/10/Spring/Spring Web/96/index.html","1bb95a8c729c2557b4b43a0170709799"],["D:/hexo/ButterflyBlog/public/2018/06/11/Spring/Spring Security/111/index.html","eedd9e621b9fb439ddab4a4de5fb39ee"],["D:/hexo/ButterflyBlog/public/2018/06/11/Spring/Spring Web/97/index.html","385558e23dd51eaf3adb827e4c7ac3c8"],["D:/hexo/ButterflyBlog/public/2018/06/12/Spring/Spring Security/112/index.html","d98e0ea7aba8be294187f0193a4d3af9"],["D:/hexo/ButterflyBlog/public/2018/06/12/Spring/Spring Web/98/index.html","17c1c8d55ce13916bade6a20b8eb4ea0"],["D:/hexo/ButterflyBlog/public/2018/06/13/Spring/Spring Boot 2.2.2/115/index.html","8d33412e16533ccbfc49bd88ceee171d"],["D:/hexo/ButterflyBlog/public/2018/06/13/Spring/Spring Boot 2.2.2/116/index.html","23acb22bd59fcb9ea98bab4927518937"],["D:/hexo/ButterflyBlog/public/2018/06/13/Spring/Spring MVC/106/index.html","c6ef44b1b765b1094314715ac4b97479"],["D:/hexo/ButterflyBlog/public/2018/06/13/Spring/Spring Security/113/index.html","4baac7e165bbc9f632cf0fb8927c591e"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","836a95a81056be20f5db352857ff37cd"],["D:/hexo/ButterflyBlog/public/404.html","2889167fc2b7ec47168a166d69fb8eac"],["D:/hexo/ButterflyBlog/public/about/index.html","f68914b0e3132dad57fea48ca5af760f"],["D:/hexo/ButterflyBlog/public/archives/2018/03/index.html","dba5075a3d5b56fa6a6b2f0a41aaaa42"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/2/index.html","6b07a336a8d363fe375a462ed3164383"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/3/index.html","e35e88c2b04a9a8a84209835799e3c9c"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/4/index.html","fb651681e63b98dc8799b5f24d1d491f"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/5/index.html","2c0a564cfb0960b80408c53503948609"],["D:/hexo/ButterflyBlog/public/archives/2018/04/index.html","6a363c922ee25b5fc547b598d8690a46"],["D:/hexo/ButterflyBlog/public/archives/2018/04/page/2/index.html","30e159604d9cd669ffa31e2a660c80b9"],["D:/hexo/ButterflyBlog/public/archives/2018/04/page/3/index.html","608c5fda54128ea02fbca230856e1129"],["D:/hexo/ButterflyBlog/public/archives/2018/05/index.html","3ca82c33e318c6717f494f17256d7948"],["D:/hexo/ButterflyBlog/public/archives/2018/05/page/2/index.html","06ab6acfefbff7d1840d68a96d53af7a"],["D:/hexo/ButterflyBlog/public/archives/2018/05/page/3/index.html","59c08ad1f6568d0969644d0c9e5d9a61"],["D:/hexo/ButterflyBlog/public/archives/2018/05/page/4/index.html","dce24da813235670c0767a41604e5f42"],["D:/hexo/ButterflyBlog/public/archives/2018/05/page/5/index.html","930738982b6daf26b18c8fcddc480011"],["D:/hexo/ButterflyBlog/public/archives/2018/05/page/6/index.html","892fed6ec9782acad023b9f0fa279732"],["D:/hexo/ButterflyBlog/public/archives/2018/06/index.html","22bd1972e3fc12c7e1cda9088054c1b6"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/2/index.html","439a10b192cc55d5dc19c58ca7b44065"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/3/index.html","c36489e3c3e5e02506107bca2371882b"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/4/index.html","138e61a94395edd0690bbad51b7db594"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/5/index.html","af7d4bf6b6dfa0438688e2d0924156e1"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","d21e4d196f0a236ac84f791ae3e71be1"],["D:/hexo/ButterflyBlog/public/archives/2018/page/10/index.html","209f91746bd4e240dbf3aa10eff27f81"],["D:/hexo/ButterflyBlog/public/archives/2018/page/11/index.html","8c6312152c98be4c0813b358a31baa7c"],["D:/hexo/ButterflyBlog/public/archives/2018/page/12/index.html","4113307a688113fff4e1115e37ffe1f2"],["D:/hexo/ButterflyBlog/public/archives/2018/page/13/index.html","814e6875a6f4b537f5197af398b43041"],["D:/hexo/ButterflyBlog/public/archives/2018/page/14/index.html","34dccbc04ad4d36d536d3a27402d7e56"],["D:/hexo/ButterflyBlog/public/archives/2018/page/15/index.html","91a4eff41f2df737c373b3b126dab652"],["D:/hexo/ButterflyBlog/public/archives/2018/page/16/index.html","2b44a34af606f80ee1baa360c194088c"],["D:/hexo/ButterflyBlog/public/archives/2018/page/17/index.html","50ec8c18ba1292529f55cfad1ddbae6e"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","c5fb8f0e0f00970708d89c66986a1d2f"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","7f3362c46c2e6491ae9165e2487bddaf"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","0a874758ee88f173963d3eccdbd8aa27"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","f0e8e0ab371a38bdf9fb2ba1c128189d"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","4824ba37b5955ee7adddad180165f988"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","8ad239a242c5a46a25dd37b1faf52ba9"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","1d4a76a12f0b140006666f88f653b29b"],["D:/hexo/ButterflyBlog/public/archives/2018/page/9/index.html","8c7b7009337c354560723dc90c0d1be0"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","d643ba83fbe9b7f6c8c4ab2736f628ad"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","afd4ec6d978e670792d21233f4b68745"],["D:/hexo/ButterflyBlog/public/archives/index.html","3ba7daa7de2673c461f4f6bc3a8263c4"],["D:/hexo/ButterflyBlog/public/archives/page/10/index.html","8eacefa30a38dc7d0966e934c5ea3db6"],["D:/hexo/ButterflyBlog/public/archives/page/11/index.html","b995048d98c2ba14882fcf412553462d"],["D:/hexo/ButterflyBlog/public/archives/page/12/index.html","6e01273d7c9310018943ef095af90c19"],["D:/hexo/ButterflyBlog/public/archives/page/13/index.html","8b68bed7e30b15f4eb95e2407ec02d75"],["D:/hexo/ButterflyBlog/public/archives/page/14/index.html","775e3ce4cbf8698dbdca79ca7e995419"],["D:/hexo/ButterflyBlog/public/archives/page/15/index.html","ad63e83940134ce0956e3dcf1dce7099"],["D:/hexo/ButterflyBlog/public/archives/page/16/index.html","e38677578b4c6b21c8c4b9b0bd008377"],["D:/hexo/ButterflyBlog/public/archives/page/17/index.html","7fef71101f2b831519a7785b0c7ac19b"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","025935f58b033639276554c0a6f77e5a"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","b87356898b8280bd13c3e61de5982ae8"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","433b14c086b408f8a07725cb341e081c"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","47445e0f1906283e04e3f52842a5f0f2"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","6c9bb0bf0b673c3985f213c86203b8c0"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","846543b4b6078fe46a7b390bd12a0e0f"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","024b89d3fa58ad50441e92c34e6d3861"],["D:/hexo/ButterflyBlog/public/archives/page/9/index.html","142183901aa3c906cb58523f218db661"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/Git/index.html","859b508a2e2da3a42278d9b17d237bab"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","8cf65871ee792638d3a1f82d7eee177b"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/JVM篇/index.html","50aec10c60bd63bf406b653766ff69ed"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java-面向对象/index.html","6d7036809d546d90696badd7ab5c7c34"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/GUI/index.html","3fa059233f91d84ca5d1a09f06d96609"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/JDK常用API/index.html","374c21c7c4d059d623051ea1c7ba4a30"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java-异常处理/index.html","a566996c2fcce7ffe7745b1aa268098f"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java-流-Stream-、文件-File-和IO/index.html","0a79b35b5c0d5a6c55a60df4bca41b71"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java开发环境搭建/index.html","bc378b0c13b3f6a37a288fcc6b4d93ae"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java语言基础/index.html","abb357a58ce2d78728cf23f3903260c4"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/index.html","26a5c393373e84d63c6dda1d9d684b47"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/page/2/index.html","a53fa288c2707c07af7c143f491b4e17"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/page/3/index.html","7515c5491522faf89fc64f11c5056165"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java高级篇/index.html","6a662368eb5399c3abf4636985ab4811"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java高级篇/page/2/index.html","4e3f7834657183fe8356a270ff646ecb"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","80594bf31ac6972f26fa52194b722ee2"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","66640af318c2305f6d4da92958981fba"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","9cf133d5f6e15b4312c60064e001539e"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/4/index.html","60c88820adccab1950f9e00b274049eb"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/5/index.html","273bf9fadbbdbb459daf291059537910"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/6/index.html","f2a83ea5b6a2b3337d99f00052e5682e"],["D:/hexo/ButterflyBlog/public/categories/MySQL/index.html","03ad1fe36b5b90003407256fbd4ee361"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/Spring-Boot2-x/index.html","687e8b2cc44d5622669c947695109b79"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/Spring-MVC/index.html","46a59954cdb939cd7ad886b1571b100d"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/Spring-Security/index.html","1008c40a462a4183e549298579019a69"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/Spring-Web/index.html","7d19ffb0e8e3a0663978f059b4abbf4b"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/Spring-tx/index.html","c168f7e9b28488af929538687bf00007"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/Spring/index.html","4fd38e3881265a5a3caa3246e3eeed6e"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/index.html","8db284046b5fccc1fcc73fb7f6034269"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/page/2/index.html","dbcd04fac3f190a26c80c1aa5332b3a5"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/page/3/index.html","5c18878dcf01f918ac542d626e2c34d0"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/page/4/index.html","d1cac125ccb002925d2f1bed63e8c29f"],["D:/hexo/ButterflyBlog/public/categories/index.html","b0a7c991f13f635f5cf0771696c00ff5"],["D:/hexo/ButterflyBlog/public/categories/前端/index.html","efd6e04e3923df72ef40a6d303581c54"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/HttpClient/index.html","cc6724bd3ae09094392793f62de80c8e"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Intellij-IDEA/index.html","91b5dc0b08952e7c23fc89dde8db03b3"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/JUnit/index.html","ca6c36d9bb7f284e63a94dc25e53c1fa"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Jackson/index.html","2d64b52050b4f1497f403bc9917dfcf6"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/JavaScript插件/index.html","48935a9e73af443a145e16feae38a2d0"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Kaptcha验证码/index.html","98d7cac36ed72814713b47a618bf19ce"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Log4j/index.html","0dbfcd9ed31cc703b1efe1d8c5f139c3"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/MVC架构/index.html","0cc3d69eafb29c4b30f76bb801b14c7f"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Maven/index.html","af23c08f610f92316be9dc13df711d93"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Maven/page/2/index.html","da5ac7e9bc31c11d4931a4fdcb2b8681"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Mybatis/index.html","1664433620912f9f6eafb1e372871c1b"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Mybatis/page/2/index.html","f067d85c09d4ac67de20659a39531648"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/RESTful/index.html","74ab52b93190955d12e0e66433de7726"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/index.html","1386fd0cb5e30b0aed7aea481c6d19ac"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/page/2/index.html","5228ed7ee4dd0f9e60047c94b0cbae34"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/page/3/index.html","7d0625406ec632bfeac144c60b08e1c3"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/page/4/index.html","ca859068e062753b7cea9e6f68a16d40"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/page/5/index.html","a227b9d6634d5d61e3773ab98610fd69"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/page/6/index.html","ff215e1bd274b278f606802433be91c0"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/page/7/index.html","40424810ae5c2961bea75c8bb0336a09"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/工具类/index.html","6bc2df97d5d4a8c7a6da47f2cd1ddaf1"],["D:/hexo/ButterflyBlog/public/css/background.css","6c1994a210210a89e045a029b8a8db69"],["D:/hexo/ButterflyBlog/public/css/index.css","015036838b971ea439334efa3a760be0"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/gallery/index.html","141b576213834d28fd7f90d88f36379b"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","2bfb778e3bab85727b792e2ed0b79fab"],["D:/hexo/ButterflyBlog/public/java/index.html","c7fc486b735be8eec1586bb759016705"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/movies/index.html","0e52060539c275565f1514c9252c32dc"],["D:/hexo/ButterflyBlog/public/music/index.html","0e5d3a14f125c34230e00c2f0f6a897d"],["D:/hexo/ButterflyBlog/public/page/10/index.html","058e5d5ea52baf05b52c5ed3d1fdfbd8"],["D:/hexo/ButterflyBlog/public/page/11/index.html","4c3d2acc67fb1caa93160ed56eb6d04c"],["D:/hexo/ButterflyBlog/public/page/12/index.html","af3dc13039c76a73e1f11bcaf86c6876"],["D:/hexo/ButterflyBlog/public/page/13/index.html","b30d53525833f012b6efb0f6e6492783"],["D:/hexo/ButterflyBlog/public/page/14/index.html","fb3628167d32b290beb5ff60e2cdd4f7"],["D:/hexo/ButterflyBlog/public/page/15/index.html","53f107e6c390bbbf80bcb64cc47e7acd"],["D:/hexo/ButterflyBlog/public/page/16/index.html","c5d5ac43203d53b8d49aa12d1648e7e8"],["D:/hexo/ButterflyBlog/public/page/17/index.html","edf3af8d38ddeb0838e65b01c581defe"],["D:/hexo/ButterflyBlog/public/page/2/index.html","28e8411d2d0de204149a30da5e0e6ecd"],["D:/hexo/ButterflyBlog/public/page/3/index.html","3602b8889734f99b83fe307b3ef70e22"],["D:/hexo/ButterflyBlog/public/page/4/index.html","ed3e0a49e2a0d91c4e7e2288a30b0066"],["D:/hexo/ButterflyBlog/public/page/5/index.html","ef7cd110c33c505f7bc6f20f1f5cdbee"],["D:/hexo/ButterflyBlog/public/page/6/index.html","02dc9526d2c2839d76df028b3123bce8"],["D:/hexo/ButterflyBlog/public/page/7/index.html","8e3f533420911ed086ee7035bd91ee57"],["D:/hexo/ButterflyBlog/public/page/8/index.html","90e70d2afb22df3ab6b9781ba6632370"],["D:/hexo/ButterflyBlog/public/page/9/index.html","cbd2958c3b2e04026ec5ce324f08b0c4"],["D:/hexo/ButterflyBlog/public/python/index.html","a7e9da704a290eb87cc4eada598cdaf0"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","2c3658db7ab5d3497dc8a95c420eaec6"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","03d2a7bd1c975f0ffdadfd912b0a45b8"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","6a098fa0a894ba22e0e1a14cffba1d2f"],["D:/hexo/ButterflyBlog/public/tags/Druid/page/2/index.html","6f6042aa3c32ee07c52f602e1da53e7b"],["D:/hexo/ButterflyBlog/public/tags/Git/index.html","a8f6dcf466a264b57b9cc86ae7236fbd"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","93e18cd3337243fb7e5cc85b14887cf0"],["D:/hexo/ButterflyBlog/public/tags/JDK1-8新特性/index.html","c1d193705cd41a895a0c6e6a42582d55"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","864a233b755e0692af3b28cb6dea7527"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","f897fa786b5e6af435346edc5860318b"],["D:/hexo/ButterflyBlog/public/tags/JVM/index.html","e54e5b97e08c5d29f2607b830b2b7dfc"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","2daaad1a0a217fec938f9e8669ec58ba"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","a584c7ccf9fce52dfd32afa3bc327c0e"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","df09fe4020102c47aaf8448e622b472d"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","7ae29836c462c3bf16f8afeedd0f8d5c"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/4/index.html","765e95537ddc835c51a9b8975501c5df"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/5/index.html","aaee76c65399d5b9498718332822aa93"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/6/index.html","06e51e13ca044096319959ba0cd90cbf"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","e635e6cdcc2417131c9cdb84ae684de2"],["D:/hexo/ButterflyBlog/public/tags/Linux/index.html","75fb45ba893dee63241923e98e284233"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","f61dcb764d33be1b1a45127380cb5d9b"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","083bc34c7592b760a119ed8737ef7e2b"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","e0e6fa2b7f5266e02c52c11be7281d9e"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","fdbc3522e7b6fd8e13b8b0eccb737bb5"],["D:/hexo/ButterflyBlog/public/tags/MySQL/index.html","d2ab1fa39a947185fd16a4da18e9db3c"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","38b5222173f118ff61d879ebbd55bc12"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/page/2/index.html","d886f7389fdfd4ccd25a9c7aeebc1457"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","e258bf3fd98fefceb9e6bf724dd53c2e"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","cc97e1e57fa923418419cdf7962afbf6"],["D:/hexo/ButterflyBlog/public/tags/Slf4j/index.html","8771a92728341c78c1d5e2442561c61e"],["D:/hexo/ButterflyBlog/public/tags/Spring-Boot2-x/index.html","00efd3f130b12140801d7be6ebd6d218"],["D:/hexo/ButterflyBlog/public/tags/Spring-MVC/index.html","248154a8e8c962708cd674a86b29a713"],["D:/hexo/ButterflyBlog/public/tags/Spring-Security/index.html","d4769bd5a6e82c12e1d27bad936d2d4d"],["D:/hexo/ButterflyBlog/public/tags/Spring-Web/index.html","d944372d1272a2b1ab1112c8dc3bb85e"],["D:/hexo/ButterflyBlog/public/tags/Spring-tx/index.html","33b94ccaa65c6a7d3d451a055bd7aaba"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","7000fd0a37cc747f7f62769f220692f8"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","8c38938a82ad3601b698e36fa292f500"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/3/index.html","24d849dae3633103418c33311e8acffd"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/4/index.html","f1652fea66a6c33198f104226225a2f7"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","16634244c3d5c73783c9781a70fc4ac6"],["D:/hexo/ButterflyBlog/public/tags/index.html","001bdc50954dc70801e3ad3f470bf8c5"],["D:/hexo/ButterflyBlog/public/tags/jQuery/index.html","66c51664dfdc1f0efb8c241e1ec63a7c"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","0b1a77c563f44336b037b369fe2d896c"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","9a99644ab92c8813c70a0b086bacf5c6"],["D:/hexo/ButterflyBlog/public/tags/开发工具/index.html","8460cf5e5f6473e7ecbc4cacaf250647"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","3a20ca22f06ba75a654497b77ac482d6"],["D:/hexo/ButterflyBlog/public/tags/数据结构/index.html","c76bb95c46c6aec9ce0e31f80046c597"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","b1f102340d3c6abfbf0054a9c0990947"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","d913d75603f68ab7653cad27f0ed132a"]];
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







