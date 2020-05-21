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

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/06/05/javaSE/JDK/00/index.html","6fcfe21a78c564d0b931616ab58fa328"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/01/index.html","262c5a2fa80ec21df8c5c94490d7756a"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/02/index.html","6916420aabef6eeaf07437eb4cdcdf40"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/03/index.html","1472ac099721d7ffe6d8665023af5fff"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/04/index.html","5ee5f010a347c00ed6e0b5fb5a516fbe"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/05/index.html","8785e1ac258a1b88c9a0bbdadb7c442a"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/06/index.html","b3b1d2762f0e9e47d6963cd910ccb5a9"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/OOP/07/index.html","7d6eeacc1cb3e43a4537b71e7dfce97f"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/08/index.html","e40e0fcce640f4a1fb653650f79a07d2"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/09/index.html","47c7ff11b3c4b62e79ee8b7c7ae879c8"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/10/index.html","e36b1428d5396cb716056742b1d051dc"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/11/index.html","84b0ecd06f146b200e69ad6a33ee49ec"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/12/index.html","a14aecda8ed886d53e98d6c44d1b0d0c"],["D:/hexo/ButterflyBlog/public/2018/06/10/javaSE/Thread/13/index.html","8803907ede2a1d73316622e7f714e547"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/String/15/index.html","a7655aee94810e8b1106a10e639664d1"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/Thread/14/index.html","45e030ac4d5d850126148203f043e5a7"],["D:/hexo/ButterflyBlog/public/2018/06/12/javaSE/String/16/index.html","882c9c3ea42dbc4e3039f64a2ee4ef11"],["D:/hexo/ButterflyBlog/public/2018/06/14/javaSE/Collection/21/index.html","7ec37f213aa79c7650add6bb27fa0616"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/17/index.html","3291b7dcc810269c0e43229e41c1ab35"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/18/index.html","6b452f1bb88a42ef46c76c920899e2ba"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/20/index.html","fa72d54916543f3623cc06077a1e8107"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/22/index.html","dbe0544701396928c5a50b3c50edc61e"],["D:/hexo/ButterflyBlog/public/2018/06/18/javaSE/Collection/19/index.html","7d7ce825071437bc8defd1917be5a4b2"],["D:/hexo/ButterflyBlog/public/2018/06/19/javaSE/IO/24/index.html","e7539ce6ced7f96275beb357a70bcd57"],["D:/hexo/ButterflyBlog/public/2018/06/20/javaSE/IO/23/index.html","dddb916c5bd35c3b4a96e76b1163563f"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/29/index.html","41a0deb8312ef58bada0ebc649911ad1"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/30/index.html","8bcbeb491a75c20ee2101bfca366fb5f"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/31/index.html","41ffd0ca7f14cf69e46a7485701802c8"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/32/index.html","6a28aa26c11ee000fc2638a2014126d7"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/GUI/27/index.html","0de857f4e65107e29a69159d98f70945"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/Socket/28/index.html","3b2bb8972fa4f8c8cba18d03b8fb003c"],["D:/hexo/ButterflyBlog/public/2018/09/14/SimpleApp/幂等性/33/index.html","da576a808fb810b9f0232ef259f87ad9"],["D:/hexo/ButterflyBlog/public/2018/09/15/SimpleApp/三层架构+MVC/34/index.html","43182edf729f93815b809c16819d3a62"],["D:/hexo/ButterflyBlog/public/2018/09/17/SimpleApp/Apache HttpClient/35/index.html","316fa23090052254687eaf4433acc767"],["D:/hexo/ButterflyBlog/public/2018/09/18/SimpleApp/IDEA插件/36/index.html","398407f323a3b958c5a69b5abffdd0bd"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Intellij  IDEA/36/index.html","b89f24ce4ce3638e0aaeb584bb849b65"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Jackson/37/index.html","75be7d2d9ac21e16830220ca965a1f4a"],["D:/hexo/ButterflyBlog/public/2018/09/20/SimpleApp/Java工具类/38/index.html","985e165063f0e88e3d5493b0488feb7d"],["D:/hexo/ButterflyBlog/public/2018/09/21/SimpleApp/Java工具类/39/index.html","4a20db163cfcae74d5b41fe4fd4fdca4"],["D:/hexo/ButterflyBlog/public/2018/09/22/SimpleApp/Java工具类/40/index.html","38c5e9a1187986bfe5a95989a212f130"],["D:/hexo/ButterflyBlog/public/2018/09/23/SimpleApp/JavaScript插件/41/index.html","b8c4624345dd223776069d76199d096b"],["D:/hexo/ButterflyBlog/public/2018/09/24/SimpleApp/JavaScript插件/42/index.html","78c4beee6c2c87a7ae0877f072206d6d"],["D:/hexo/ButterflyBlog/public/2018/09/25/SimpleApp/JavaScript插件/43/index.html","717a5911578d6a604058f837b9f47d77"],["D:/hexo/ButterflyBlog/public/2018/09/26/SimpleApp/JavaScript插件/44/index.html","b3b8d78dc88398e201e16eec623eadfd"],["D:/hexo/ButterflyBlog/public/2018/09/27/SimpleApp/JavaScript插件/45/index.html","fddf4bde996a60517361043b369b620a"],["D:/hexo/ButterflyBlog/public/2018/09/28/SimpleApp/JavaScript插件/46/index.html","d98f706d10d66a2acdeca4a3c0544636"],["D:/hexo/ButterflyBlog/public/2018/09/29/SimpleApp/JUnit/47/index.html","2ad7212db0d446f988b98b63601342a8"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/48/index.html","c5481cc7bfee1e3665220da09e82acfa"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/49/index.html","b2008ada54cb59915f96173198e406e4"],["D:/hexo/ButterflyBlog/public/2018/10/01/SimpleApp/Log4j/50/index.html","9a51088a30791669129074ba820aef07"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/51/index.html","ac6cc99a6f346eec36c8faed1cd4ba1a"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/52/index.html","caceb13fd48596cc6a80c4a06cdc162d"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Maven/53/index.html","0d639f2be32f99ee2e71f6dbc23409ba"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/54/index.html","337d26e30ae3dc4779ce15ebf9545edd"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/55/index.html","aee4dbfec29e451355f13b458f843497"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/56/index.html","ee95fbb50d5ef2eb8a6d4f7f3ef1d981"],["D:/hexo/ButterflyBlog/public/2018/10/05/SimpleApp/Maven/57/index.html","efb3ade12318be3481e881d27ee65fcf"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/58/index.html","0a13308bde2e27fa0f671572473a1b76"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/59/index.html","10940e14ab9ddf737121945a404696fd"],["D:/hexo/ButterflyBlog/public/2018/10/07/SimpleApp/Maven/60/index.html","75d1bac8f568c5e7e269c2efe5149420"],["D:/hexo/ButterflyBlog/public/2018/10/08/SimpleApp/Maven/61/index.html","869a42f08da58f568948ba15fa8d47c7"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/63/index.html","bbbb9df7fb9da4e7fcce8542ea489a7a"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/64/index.html","ebd91c75f9eb9591cada45474819a972"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/62/index.html","c50bf26edbe5576f855bdb1082a4cf1a"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/65/index.html","a95bd280a2566502ad8290c2cd501f82"],["D:/hexo/ButterflyBlog/public/2018/10/12/SimpleApp/Mybatis/66/index.html","4ea92dd8ac47603be5fb12c76ab81b3b"],["D:/hexo/ButterflyBlog/public/2018/10/14/SimpleApp/Mybatis/68/index.html","9300da6799a0e77338cbe277f3d477f2"],["D:/hexo/ButterflyBlog/public/2018/10/15/SimpleApp/Mybatis/67/index.html","ecdcaa6653c94463df33cc6fee42b4b0"],["D:/hexo/ButterflyBlog/public/2018/10/16/SimpleApp/Mybatis/69/index.html","d37165ebcb6f8f25b2b849c8b45afb93"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/70/index.html","470d405e6d0fc05d905c46f28abe925a"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/71/index.html","f86ad77701f1947239a21d128e5a2438"],["D:/hexo/ButterflyBlog/public/2018/10/19/SimpleApp/RESTful/72/index.html","c6f770e1b114b9f52e31a03ed0234229"],["D:/hexo/ButterflyBlog/public/2018/10/20/SimpleApp/Spring/73/index.html","1c03576c82899f50e2bf31204e067c06"],["D:/hexo/ButterflyBlog/public/2018/10/21/SimpleApp/Spring/74/index.html","f8678c291ebcceba56975b346b8f91b9"],["D:/hexo/ButterflyBlog/public/2018/10/22/SimpleApp/Spring MVC/82/index.html","74aa2b13050cfcbb13e0e4c0f636c34c"],["D:/hexo/ButterflyBlog/public/2018/10/23/SimpleApp/Spring MVC/75/index.html","8f1f23c3e76b2b2b0102f73ad0dd6838"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/76/index.html","88e663e2d2d384fcd73982d045e78b4c"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/77/index.html","6e8456986e33cca9485e58c9a532a47c"],["D:/hexo/ButterflyBlog/public/2018/10/26/SimpleApp/Spring MVC/78/index.html","0e97e12db88fbdb4ed45d460003189ca"],["D:/hexo/ButterflyBlog/public/2018/10/27/SimpleApp/Spring MVC/79/index.html","2fd5569c844c31a1dd3f4ab0f295470d"],["D:/hexo/ButterflyBlog/public/2018/10/28/SimpleApp/Spring MVC/80/index.html","55a14ddd3e143a1d7747bc22dbb7b41a"],["D:/hexo/ButterflyBlog/public/2018/10/29/SimpleApp/Spring MVC/81/index.html","f5db26c8158f3b1c35c23edb9bd591b6"],["D:/hexo/ButterflyBlog/public/2018/11/01/SimpleApp/Spring MVC/83/index.html","03340fd87ca4cc90f4fee5782a08f109"],["D:/hexo/ButterflyBlog/public/2018/11/02/SimpleApp/Spring Web/84/index.html","9a1b8ad2b9c3ef35440f29b0c48113f1"],["D:/hexo/ButterflyBlog/public/2018/11/03/SimpleApp/Spring Web/85/index.html","7ea6f8558a2c2cd5f644004f688b447e"],["D:/hexo/ButterflyBlog/public/2018/11/05/SimpleApp/Spring Web/86/index.html","67c43a2908d7508a44b9c9976be2fa9d"],["D:/hexo/ButterflyBlog/public/2018/11/06/SimpleApp/Spring Web/87/index.html","9fe3f24b367ebbed7efc58dbf551cae2"],["D:/hexo/ButterflyBlog/public/2018/11/07/SimpleApp/Spring Web/88/index.html","013588b105dd2fcac52f42b49b5510f5"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/89/index.html","8b41aee1babfa640e21f7a3bf4e61532"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/90/index.html","c2b9cdc07365dcc1589f8cf2e789f233"],["D:/hexo/ButterflyBlog/public/2018/11/09/SimpleApp/Spring的事务管理/91/index.html","0fad27f865d0e411a10e6f0873e7b5e7"],["D:/hexo/ButterflyBlog/public/2020/05/20/Java从入门到精通/index.html","c8b70bf124628daee0d37e018e313b29"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","40412bfcbabc3800f16101d8f8ecb87b"],["D:/hexo/ButterflyBlog/public/2020/05/20/三月三对SpringBoot的理解/index.html","7cf609e0a7dabbc800ebaf5d8de8c001"],["D:/hexo/ButterflyBlog/public/2020/05/20/三月三是一个什么样的人/index.html","ff4c002380204c2e4d87cbf79143c8bc"],["D:/hexo/ButterflyBlog/public/404.html","841a031ad5b7c7fee11d12166a0b9f97"],["D:/hexo/ButterflyBlog/public/archives/2018/06/index.html","931dd74b166d3cf3b87471c706dc3d59"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/2/index.html","1f5de677a5986ae00e68727ae1e80f73"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/3/index.html","ca6679f6705c5cc8a73dd77b22e29178"],["D:/hexo/ButterflyBlog/public/archives/2018/09/index.html","e516d9284f1351ea733e63eff4b52b41"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/2/index.html","edbd1967c07c288ce42bb7af9425cbfa"],["D:/hexo/ButterflyBlog/public/archives/2018/10/index.html","1908be9d6ce496f8b77faf87c0853b51"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/2/index.html","ace83908f6a9f75e1a02afd44de09bc5"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/3/index.html","1721c1d65850b48e887a2bed73f9f4a7"],["D:/hexo/ButterflyBlog/public/archives/2018/11/index.html","463c23b8cbf8c36156de4b972e89f20f"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","d7b4755db44908b075663a9fc2c99872"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","67aed384e63272aca8e4591d5d3591d9"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","ea49fcdf397f165ae8b1097ff062b88e"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","94893e8ca6c7421d0639883367caf802"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","406581fe028b99ebecf1d80fad7ff965"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","95d246faf3c22e876eaf44881eda484f"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","0d53838dbb999222804d36caa45a70ed"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","249d824a383482e892d20209e73e5677"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","9c0dba2f4b8e2d9fbf0bb9fd83c18c22"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","67593aed7fd17a05bd7aa4135476c716"],["D:/hexo/ButterflyBlog/public/archives/index.html","64b4927de3c0b0f10f16469059fc6a55"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","4e6894fb8714ece15402ad678626eda9"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","f7c254b8a1c7de6e99e22d97926e1724"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","3f1bfe679527694cad216b4daf7cc9e7"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","54e7a92b486ff16d7d0189c6749e138c"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","f0f765d44a170ab2ac6dd4c3ff635d75"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","be0b3151977800f35f82df6ce423a326"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","125607cc25aa3d005d3f73ab7bea9f4c"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","f1cac132a960579a5045cb9662af0d33"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","5b16abf1edb324280f3d2fe8feabc529"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","156b268b7a6ec4ed4a9a0dd056d41079"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","f5f8b6faf79028a066200a68f4f7f09c"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/index.html","df5191888d0f85c4a572f8f92b4b6bf9"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/2/index.html","ad34f664d32630c27279462fe93ab908"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/3/index.html","f4eddccf4f162a079f8d866b5d87b1d4"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/4/index.html","29dc0e4cbc26b6b7c6fc28e1c6427283"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/5/index.html","fe3806265b15c720aede64ea5f0e6fbc"],["D:/hexo/ButterflyBlog/public/categories/index.html","c0221cefd60c8a683efeb2659adf10a5"],["D:/hexo/ButterflyBlog/public/css/index.css","50f2f84525817750a73514f77b0c55af"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","e1204af009ae0918ce2fbcf4b97a6079"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/link/index.html","d89467409c36280f19994ce28b15a61c"],["D:/hexo/ButterflyBlog/public/page/2/index.html","0c6a7ac63d99de58731615ca997f4fec"],["D:/hexo/ButterflyBlog/public/page/3/index.html","9938c5dcd7413cc4c313403135b287b0"],["D:/hexo/ButterflyBlog/public/page/4/index.html","4d40a416ce139a16dcae70a5314e7991"],["D:/hexo/ButterflyBlog/public/page/5/index.html","917bb3c527578516f5b9f3004e4e54de"],["D:/hexo/ButterflyBlog/public/page/6/index.html","7e2606e6f165abb247d32cb3c4f14736"],["D:/hexo/ButterflyBlog/public/page/7/index.html","a16a560c5f40ae2b085cc418f2c44abb"],["D:/hexo/ButterflyBlog/public/page/8/index.html","5aba98caea4740e750f34c970be76eb2"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","91a22e84865ed9341445d2037a2607da"],["D:/hexo/ButterflyBlog/public/tags/Annontation/index.html","6bfc498f8617fb6b97d60cf53b0f6bbf"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","8204ff9759611b952d70866688cb62dd"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","b5e6bf46a9931b4bf105e71f84296660"],["D:/hexo/ButterflyBlog/public/tags/File/index.html","6a2b540ee8cf38123d4dc09564c5f894"],["D:/hexo/ButterflyBlog/public/tags/GUI/index.html","723fce209f4dce31c7a65dcd4f5aa473"],["D:/hexo/ButterflyBlog/public/tags/Http/index.html","8aedcb055de3d0802f2466c8713b46ec"],["D:/hexo/ButterflyBlog/public/tags/IDEA/index.html","fc7f159186a7e329edb97b93885ff522"],["D:/hexo/ButterflyBlog/public/tags/IDEA插件/index.html","c1b899f4e5fa85f510aa53682ee0fd45"],["D:/hexo/ButterflyBlog/public/tags/IO/index.html","594f6ad3aa061b5ee82dbfa31ab897c6"],["D:/hexo/ButterflyBlog/public/tags/JDK/index.html","4c022f53875daa411e4f86c0ca91184d"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","9fed21a91866e6ebea08b9fb20007ef2"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","6cf2d98d2ea8e3f9cb1e574cb4913bee"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","9ef5284282577b56f00f48a1ae9e2b03"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","d787a2d4218a31fdd10b1c79d3e2492a"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","514e3d26bff87c0e50582b61ffb0e8e7"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","37257397655856a629ba585c5e8cb56b"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","03a146e98bf6aca2bf81925ea468ce96"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","eac58e691d344cdfd7c4e7a91ffa5c73"],["D:/hexo/ButterflyBlog/public/tags/Jsp/index.html","1b23a3f1e9592b8b399c4b3fccb3205d"],["D:/hexo/ButterflyBlog/public/tags/Linux/index.html","76aba151187ae76758f8a815ba964b27"],["D:/hexo/ButterflyBlog/public/tags/List/index.html","f46bde514079284051ca3d6634bb8c9b"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","e0615e97dbe5b4eaf0e561dd113fb7cf"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","39e508a47f4680510e0cdc58cff6ad7a"],["D:/hexo/ButterflyBlog/public/tags/Map/index.html","2d11abb1ae99e6a6a147cb3add729658"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","20ce67babba7e74fe2f9df0a78cbba0c"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","41ae5abedcb8c1eebbc874c41c3076b2"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/3/index.html","c47b43c710fb0b34197c082bb9a41a15"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/4/index.html","282795f1880972ad9b18ddb4aba4dc84"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","2865f832f88a17c5815de115091dd7f7"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","882ba89b2878e900e7b50b5e21249f06"],["D:/hexo/ButterflyBlog/public/tags/SQL/index.html","f9eba1826e5beccceccc5077b102690e"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","12f688656e12c7249c0603af44bec9d6"],["D:/hexo/ButterflyBlog/public/tags/Set/index.html","fffc4450cc6c694bca65a0e4197670a8"],["D:/hexo/ButterflyBlog/public/tags/Socket/index.html","72b5d3b576f9aaf7abdf44c49456443f"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","4dd6761a6da3f117284ef294a73a4928"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","c16ec36c01f7069e1518748567e9cabd"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","5ce3d7dfa19d890bf77bf8bcb0a33468"],["D:/hexo/ButterflyBlog/public/tags/SpringWeb/index.html","3277664aad8bf735b9710f1cbd7c4435"],["D:/hexo/ButterflyBlog/public/tags/Springtx/index.html","3ec7362ec50b2a82b37dfdc81bb22277"],["D:/hexo/ButterflyBlog/public/tags/index.html","1ca459cc7f7ce9fb80bb0fdb33925187"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","e0b44ddc805b8770be675535ff51b9ac"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","7fb0a3def5db5fbf80a3ddc79551f096"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","d9f45ce3b29b2a08905a79e33ee0006a"],["D:/hexo/ButterflyBlog/public/tags/数组/index.html","5f2c1c7444092d311b1760ec106dab75"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","e009bab580ac564aaa758782f018795f"],["D:/hexo/ButterflyBlog/public/tags/架构/page/2/index.html","3d9279aba4000d84aed99601124368ce"],["D:/hexo/ButterflyBlog/public/tags/架构/page/3/index.html","8370c1c2135bb8ec900530e73cb48b88"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","8a5f3726f88254e822959dc12367e14b"]];
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







