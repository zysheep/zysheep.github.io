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

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/06/05/javaSE/JDK/00/index.html","6f60d72f49e4625006616dd6c0d3f129"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/01/index.html","933c494881ce7e01e84203f120f38fa9"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JDK/02/index.html","5c16d74617328c889bf732355976b568"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/03/index.html","6dfd38003f66eca22d51d52c4a5aec01"],["D:/hexo/ButterflyBlog/public/2018/06/06/javaSE/JLF/04/index.html","223daa0a5982747c60cb8d9e578645fa"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/05/index.html","5bc2917e1890421ce1e709510190d663"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/JLF/06/index.html","e8f2c001b22f1a5a50d1709ec6f20d26"],["D:/hexo/ButterflyBlog/public/2018/06/07/javaSE/OOP/07/index.html","d75dd866c8c94554195a8006165bfcbf"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/08/index.html","d3374fa7482da106960800e084780c53"],["D:/hexo/ButterflyBlog/public/2018/06/08/javaSE/OOP/09/index.html","45e92031026cc74bbb20e3edd89ab979"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/10/index.html","0e772648db49c5e6012b3f071905a180"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/11/index.html","9b929db86d0b01b71d611f248bc05623"],["D:/hexo/ButterflyBlog/public/2018/06/09/javaSE/OOP/12/index.html","233d6215c485b79867fe6437842753a1"],["D:/hexo/ButterflyBlog/public/2018/06/10/javaSE/Thread/13/index.html","4a24302f964bebacb40b15b10e5fd764"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/String/15/index.html","d3893e28a48c2aa01b560a250f932066"],["D:/hexo/ButterflyBlog/public/2018/06/11/javaSE/Thread/14/index.html","24e813e3cd4f2a52f2a9795ffa689310"],["D:/hexo/ButterflyBlog/public/2018/06/12/javaSE/String/16/index.html","55a556f9c0234940a0f870d6e19fd842"],["D:/hexo/ButterflyBlog/public/2018/06/14/javaSE/Collection/21/index.html","84824845b54eda1d0dff110f1ba10ebd"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/17/index.html","556945e6203e477c5fbfc6826a3713c8"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/18/index.html","7b9e90ff69f2ac17e6960c1a3ebe9fb4"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/20/index.html","46fc24c388eb00f569defdaa2a2219a0"],["D:/hexo/ButterflyBlog/public/2018/06/17/javaSE/Collection/22/index.html","49d341ed116144e8d1751b80681bcca2"],["D:/hexo/ButterflyBlog/public/2018/06/18/javaSE/Collection/19/index.html","3b5db190ac9f27b269bdd089bdd45b48"],["D:/hexo/ButterflyBlog/public/2018/06/19/javaSE/IO/24/index.html","645f3ac2a5610b78540e3e6279079b5e"],["D:/hexo/ButterflyBlog/public/2018/06/20/javaSE/IO/23/index.html","aeb966db41be1605ad56e096aaf68ea2"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/29/index.html","b4374d75d5ea6a1a1dc3bf3fb476615e"],["D:/hexo/ButterflyBlog/public/2018/06/21/javaEE/30/index.html","2fa67c432e244fbf53b5f0c5777a5a83"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/31/index.html","33d3f0ef9b9b902686c5f53c9a3aaa88"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaEE/32/index.html","946daa5f376eb86e3e76046cd8ff45a0"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/GUI/27/index.html","02b723a3978a4ce9ad8386df9d8a6d85"],["D:/hexo/ButterflyBlog/public/2018/06/22/javaSE/Socket/28/index.html","5d14c3870b9d8fef8fb9d15ac5248ce6"],["D:/hexo/ButterflyBlog/public/2018/09/14/SimpleApp/幂等性/33/index.html","61a37be4ddaec84a24151cdd71a593f4"],["D:/hexo/ButterflyBlog/public/2018/09/15/SimpleApp/三层架构+MVC/34/index.html","cf3d2f1a4f057398fbf340792feacf81"],["D:/hexo/ButterflyBlog/public/2018/09/17/SimpleApp/Apache HttpClient/35/index.html","a6b2489f68ed50bd45bb9c27fff227f2"],["D:/hexo/ButterflyBlog/public/2018/09/18/SimpleApp/IDEA插件/36/index.html","4e100f68228058cc427ebc619535811b"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Intellij  IDEA/36/index.html","23298538407ec8d62e119f5472b49e79"],["D:/hexo/ButterflyBlog/public/2018/09/19/SimpleApp/Jackson/37/index.html","7d0b5f402ca30b46f98834a90644ea0f"],["D:/hexo/ButterflyBlog/public/2018/09/20/SimpleApp/Java工具类/38/index.html","ed96021033287c7d14968b3c8a5526da"],["D:/hexo/ButterflyBlog/public/2018/09/21/SimpleApp/Java工具类/39/index.html","be4b7dbe57d7a7dc0db152679ef2fec4"],["D:/hexo/ButterflyBlog/public/2018/09/22/SimpleApp/Java工具类/40/index.html","9b65b67241ec9634a3269081acd2f175"],["D:/hexo/ButterflyBlog/public/2018/09/23/SimpleApp/JavaScript插件/41/index.html","0790a4e81ab6fc9fbc0c9d3d6fe31928"],["D:/hexo/ButterflyBlog/public/2018/09/24/SimpleApp/JavaScript插件/42/index.html","b0bdab37bdc73dc757ede0e692f69a7e"],["D:/hexo/ButterflyBlog/public/2018/09/25/SimpleApp/JavaScript插件/43/index.html","044f96c56f245ee544a3dc76e03f0f45"],["D:/hexo/ButterflyBlog/public/2018/09/26/SimpleApp/JavaScript插件/44/index.html","e2fc7faacef21dc3d19a7a72d8210239"],["D:/hexo/ButterflyBlog/public/2018/09/27/SimpleApp/JavaScript插件/45/index.html","dfbef746a8f0e156aaa0045a61cabf08"],["D:/hexo/ButterflyBlog/public/2018/09/28/SimpleApp/JavaScript插件/46/index.html","4b16e6a41c5353bbabf301d7cc2c145e"],["D:/hexo/ButterflyBlog/public/2018/09/29/SimpleApp/JUnit/47/index.html","e954995ff9316115b89686182f1b0b60"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/48/index.html","a00a6f3c8cc0dbca551f4a419d56291d"],["D:/hexo/ButterflyBlog/public/2018/09/30/SimpleApp/Kaptcha验证码/49/index.html","8124a1d6267ae5d87ed832876f3ee3b9"],["D:/hexo/ButterflyBlog/public/2018/10/01/SimpleApp/Log4j/50/index.html","b0221617321c57f604217e88da78f18b"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/51/index.html","2db3445b69022bb8e6363fe3ad2a722c"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Log4j/52/index.html","78130aef90f93096cdc6babaddc8f11a"],["D:/hexo/ButterflyBlog/public/2018/10/02/SimpleApp/Maven/53/index.html","0c7055976d43a716144222ec9db8c995"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/54/index.html","ca7778c1a0d1df4c99dd4f32aed95e5a"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/55/index.html","9e01417cbed8e71abf50a57feb72fa23"],["D:/hexo/ButterflyBlog/public/2018/10/04/SimpleApp/Maven/56/index.html","70c8505b8b1ad5b0aed5008a58d9ddb9"],["D:/hexo/ButterflyBlog/public/2018/10/05/SimpleApp/Maven/57/index.html","acb33af450cd61230833b08a01a7ef64"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/58/index.html","e5a7685b3c3705c1a87b4382ac23a489"],["D:/hexo/ButterflyBlog/public/2018/10/06/SimpleApp/Maven/59/index.html","00cc5e1f872d7f926219be092c91f1da"],["D:/hexo/ButterflyBlog/public/2018/10/07/SimpleApp/Maven/60/index.html","ece81eaecf5668cf739e981b9b3fae13"],["D:/hexo/ButterflyBlog/public/2018/10/08/SimpleApp/Maven/61/index.html","76ef6eeed4bc16057eeda5fdabb2bdb6"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/63/index.html","a245aad1fbd71913539574e00b460966"],["D:/hexo/ButterflyBlog/public/2018/10/09/SimpleApp/Mybatis/64/index.html","839c6ee0a2515b8d639b2117c1f44822"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/62/index.html","c503f2611b647432eb6d533644ada089"],["D:/hexo/ButterflyBlog/public/2018/10/10/SimpleApp/Mybatis/65/index.html","856bf7182faa3217bd66ac28f5e1505b"],["D:/hexo/ButterflyBlog/public/2018/10/12/SimpleApp/Mybatis/66/index.html","a58a884f1588ef88bc9ffc3290d833d9"],["D:/hexo/ButterflyBlog/public/2018/10/14/SimpleApp/Mybatis/68/index.html","2566a95a21c4c7c18da6690bee49f9a7"],["D:/hexo/ButterflyBlog/public/2018/10/15/SimpleApp/Mybatis/67/index.html","773c47a8633cbb3d5d320397bcadb0d4"],["D:/hexo/ButterflyBlog/public/2018/10/16/SimpleApp/Mybatis/69/index.html","6c32fc0c3fcff4a5d47acd9f649ff21e"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/70/index.html","344542eb79377877d247f7e648972073"],["D:/hexo/ButterflyBlog/public/2018/10/17/SimpleApp/Mybatis/71/index.html","7c983bf17c3bba7bff85c291b84c3630"],["D:/hexo/ButterflyBlog/public/2018/10/19/SimpleApp/RESTful/72/index.html","d7285f06f0d7e83016e3ae609fcf9aea"],["D:/hexo/ButterflyBlog/public/2018/10/20/SimpleApp/Spring/73/index.html","1a8f1b3b97ada79675d5e9167244b41d"],["D:/hexo/ButterflyBlog/public/2018/10/21/SimpleApp/Spring/74/index.html","45f606bb5892a9a59804b1c5ffe8abcc"],["D:/hexo/ButterflyBlog/public/2018/10/22/SimpleApp/Spring MVC/82/index.html","cceab710bb343b2d234fe694af5904cb"],["D:/hexo/ButterflyBlog/public/2018/10/23/SimpleApp/Spring MVC/75/index.html","ee636c00b402cb7fb3888a38c13321c7"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/76/index.html","dc24610aba6f3ca4632522b462fd7890"],["D:/hexo/ButterflyBlog/public/2018/10/24/SimpleApp/Spring MVC/77/index.html","7e34f50c49c0533e379a99a0cac71b3f"],["D:/hexo/ButterflyBlog/public/2018/10/26/SimpleApp/Spring MVC/78/index.html","fca566e1088ed3e9aa1112e97371e0c8"],["D:/hexo/ButterflyBlog/public/2018/10/27/SimpleApp/Spring MVC/79/index.html","61b26d1a04620793f77e26d00f00a94a"],["D:/hexo/ButterflyBlog/public/2018/10/28/SimpleApp/Spring MVC/80/index.html","91638454d1bb5d41a2ee406e9617e496"],["D:/hexo/ButterflyBlog/public/2018/10/29/SimpleApp/Spring MVC/81/index.html","f96d8ba0337aef0b528c9251834e1270"],["D:/hexo/ButterflyBlog/public/2018/11/01/SimpleApp/Spring MVC/83/index.html","906839a1f43a7ab2900c1dea0050abd5"],["D:/hexo/ButterflyBlog/public/2018/11/02/SimpleApp/Spring Web/84/index.html","be6484f77b8cccf43a2c1aff39f1c4d0"],["D:/hexo/ButterflyBlog/public/2018/11/03/SimpleApp/Spring Web/85/index.html","9d4998410c72f081830f3c93a21f29ee"],["D:/hexo/ButterflyBlog/public/2018/11/05/SimpleApp/Spring Web/86/index.html","b57205bfec7642f3b3a3f6fc541168fd"],["D:/hexo/ButterflyBlog/public/2018/11/06/SimpleApp/Spring Web/87/index.html","b7ec4fd3f963246515f40fe3ea90cd13"],["D:/hexo/ButterflyBlog/public/2018/11/07/SimpleApp/Spring Web/88/index.html","8382bd0b1b91be83769de9279970d75c"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/89/index.html","8da36df598d201e24728b6d575ad4038"],["D:/hexo/ButterflyBlog/public/2018/11/08/SimpleApp/Spring的事务管理/90/index.html","51c5e081f3a2110079b9555b6680dc7d"],["D:/hexo/ButterflyBlog/public/2018/11/09/SimpleApp/Spring的事务管理/91/index.html","a6f6f6de7cf5ed9a4246243df521cfe3"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","df34e806e849abd727c0bea2b296539b"],["D:/hexo/ButterflyBlog/public/404.html","a04db7d4aa6ac9b9f9914331d064cf6c"],["D:/hexo/ButterflyBlog/public/about/index.html","abaa7e6f0ff9ea2c04e041f3a0908a05"],["D:/hexo/ButterflyBlog/public/archives/2018/06/index.html","4c865ac93ff74e6977063a0dfcb0ed50"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/2/index.html","9abeff6292e6d26dca665c63fe5bd2f8"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/3/index.html","e80969c13b1a64df22e5a9ec43bb8485"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/4/index.html","ecf6fe5c84c67f2c43c324792da828f6"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/5/index.html","d01edde07bff2b7914b950bdda49eac9"],["D:/hexo/ButterflyBlog/public/archives/2018/09/index.html","84d8df42cc5fb0cf008e61ea2a46185e"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/2/index.html","7292cd691d6444b8bbcd4cd46de4e966"],["D:/hexo/ButterflyBlog/public/archives/2018/09/page/3/index.html","c9064aef6b3413bc068e6185250c868d"],["D:/hexo/ButterflyBlog/public/archives/2018/10/index.html","9a05766808547a354fc38f2e3fcd1cd9"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/2/index.html","15be46ea4ba7e7f6dc9dc569fa5ff40f"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/3/index.html","5ee45f44480d7efd049a8a4f089a05e1"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/4/index.html","001c29f295a49ea058e37ebf49cb55de"],["D:/hexo/ButterflyBlog/public/archives/2018/10/page/5/index.html","d8704158f6e2f1c807133b8f39b7b3f5"],["D:/hexo/ButterflyBlog/public/archives/2018/11/index.html","79649f3f1c19264d108674835c0a88b2"],["D:/hexo/ButterflyBlog/public/archives/2018/11/page/2/index.html","6ce7604e8abeca28a7053d59f3117b54"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","82cafb550f4a436c18c84afe66698b86"],["D:/hexo/ButterflyBlog/public/archives/2018/page/10/index.html","8b8ba45185df542f1078ac48a3e8138d"],["D:/hexo/ButterflyBlog/public/archives/2018/page/11/index.html","b3e1224e67540f6f29ac8bb341d2f070"],["D:/hexo/ButterflyBlog/public/archives/2018/page/12/index.html","f0786377a8601c1a63d4c0983e86d28e"],["D:/hexo/ButterflyBlog/public/archives/2018/page/13/index.html","1994adcb2c1da2998493611ce1464435"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","fa9759539d15cb3bf5e8481b01daaf1e"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","a59fb3e09faf0c57d0f8acd997bef1fb"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","8615cdebc986fba30b308561b0d15bdf"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","e7d629459b474d7ea3170efc3f356992"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","d249cf7bfd67cef16f9623ef42722d7c"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","7013df4e42f984b1aa6f919e53bdea2d"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","8c664ef69700681539c8544cd0d59269"],["D:/hexo/ButterflyBlog/public/archives/2018/page/9/index.html","ccf6a6a0b38bdc940af2f7e91d9b616d"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","f910faeda02d883c3cd1337fa3972b26"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","722c297a0f7158c240e079a76455ffcb"],["D:/hexo/ButterflyBlog/public/archives/index.html","505884b0369313268bdb7526d92f06eb"],["D:/hexo/ButterflyBlog/public/archives/page/10/index.html","e4c284c367b8938fa46300e19f54b7ab"],["D:/hexo/ButterflyBlog/public/archives/page/11/index.html","de1ee596501faead34767a4ef0c087a4"],["D:/hexo/ButterflyBlog/public/archives/page/12/index.html","8d9fa7785a347597b17cfce4b8f22d18"],["D:/hexo/ButterflyBlog/public/archives/page/13/index.html","03d4c57561c31ccbc675211896737c4b"],["D:/hexo/ButterflyBlog/public/archives/page/14/index.html","be9942cc241f9ff54b2aaf09e640ea5a"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","ace44305e9e024015e85a777a69b0e04"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","b64692e327033fa4a7619be1d7caf08f"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","612d8675e6bc38a201c793b6b464cc43"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","e1a75101dcbcf8de638ee5c7bde43ee6"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","796363dcff2e5ca623a607ef33c6f47b"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","c784c78a38c56bf63aec345fe567705f"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","8ba856b7478e1ae8439690200ff76694"],["D:/hexo/ButterflyBlog/public/archives/page/9/index.html","7c8903989fa401540f3cb3e4c24148c9"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","0aba42a077603382777c44ab03e3a135"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","88053ea44d2953359f19cfabdaa73b8d"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","3e3943cd1ad28f4f3c4808fb2f76e47d"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","4c8cb4967b5299b8069a9075bacc98ba"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/4/index.html","3bee247b16e9fb272b6b96c3f6e5f42a"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/index.html","f9b052f3a4e78f90528211e799ed25e5"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/2/index.html","48607e253eaaab3d07f5b12a94a7bebb"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/3/index.html","ff35451d2e9a39cc2600d0748b56bf4c"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/4/index.html","2d9e43f6d91bac486be3468dabc0df20"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/5/index.html","8c251c7294063573c7f7d5b796c1abf8"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/6/index.html","36e60dcf3e672a733767084347da7e8c"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/7/index.html","a34baf79131e3c8cbfa9c2d5d38befe8"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/8/index.html","c61e15d7116817ad6f384636ab55b212"],["D:/hexo/ButterflyBlog/public/categories/SimpleApp/page/9/index.html","0633c22abaca3ef5de751f577edbcc0d"],["D:/hexo/ButterflyBlog/public/categories/index.html","daa5d6c0cf1c8ab395afdcf3d3c5172f"],["D:/hexo/ButterflyBlog/public/css/index.css","015036838b971ea439334efa3a760be0"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/gallery/index.html","b64df9a0c828aeed572bbda4bacda114"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","88e953a6ad87a97ffc7066cad7c420e4"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/movies/index.html","86b0706d65091d0d2555fa37cb5b5a92"],["D:/hexo/ButterflyBlog/public/music/index.html","52bc34e479ddb28e955ba8d6bf63ca37"],["D:/hexo/ButterflyBlog/public/page/10/index.html","4f8955b909dbb9c79e97e9c913097387"],["D:/hexo/ButterflyBlog/public/page/11/index.html","aee261447f9daefb8a502588b3f73e5b"],["D:/hexo/ButterflyBlog/public/page/12/index.html","d7add924c0a9ed51274c89eac0e54b57"],["D:/hexo/ButterflyBlog/public/page/13/index.html","cd16e5475ccd3d018336b258a7d01c69"],["D:/hexo/ButterflyBlog/public/page/14/index.html","ee9a04174a79ce3784c4f7ea51050b77"],["D:/hexo/ButterflyBlog/public/page/2/index.html","e87e2eee06f1710cf58b98b870cb627f"],["D:/hexo/ButterflyBlog/public/page/3/index.html","d4fb6c1203529be165516bf343cd5e18"],["D:/hexo/ButterflyBlog/public/page/4/index.html","f78dfb045ce919942ee30456826a8678"],["D:/hexo/ButterflyBlog/public/page/5/index.html","c97cc0398cae20f4bbd0a79ece7c0854"],["D:/hexo/ButterflyBlog/public/page/6/index.html","b3eae2bd9ccf7ed89c73ffe879c3aa06"],["D:/hexo/ButterflyBlog/public/page/7/index.html","6bd405ee8852d9387f12494509e2d879"],["D:/hexo/ButterflyBlog/public/page/8/index.html","d610e8461af90c11f3df8af0d77f3850"],["D:/hexo/ButterflyBlog/public/page/9/index.html","47b1a6354ee2940db2307666b5cd8dc7"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","1cd4bb6957c4f445b92483ba72f381e9"],["D:/hexo/ButterflyBlog/public/tags/Annontation/index.html","1a3bbf087c8059b53f8f8ced4f24cff2"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","4299bdd46bcabd36f19e45d020e63a81"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","4802fba0196b3a841937f45516c528c7"],["D:/hexo/ButterflyBlog/public/tags/Druid/page/2/index.html","7b84cd6c7705c113dfec148237386175"],["D:/hexo/ButterflyBlog/public/tags/File/index.html","05f06d66d61735944f648abaa7ad6c38"],["D:/hexo/ButterflyBlog/public/tags/GUI/index.html","455c80792536cc01ea8a533ad0c36fd7"],["D:/hexo/ButterflyBlog/public/tags/Http/index.html","450c6d4861e01c8663115a535b2c8dd7"],["D:/hexo/ButterflyBlog/public/tags/IDEA/index.html","7d9ccce97e88d162cecb3ef8a5e88023"],["D:/hexo/ButterflyBlog/public/tags/IDEA插件/index.html","70d5f06396de0443dc2bb28210464dfb"],["D:/hexo/ButterflyBlog/public/tags/IO/index.html","60d5dfe8716f726438d684bb01dca552"],["D:/hexo/ButterflyBlog/public/tags/JDK/index.html","8dfead623e3e1a3573a829a42615fb10"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","cb7f7ac34e56a1d105107710e8ad07be"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","06354c51442d503a1bc2d64572466ef5"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","04979694ed98df424a14c1c62bbc53f7"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","a1f16f0f2a9b83af4fcba76b98d9c298"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","41559abcaa56bddbc1014be294e27df3"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","42c7301ec6dc98e01d00a18487817866"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","40668c747a12b72bd5332e9eb6daf0b4"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/4/index.html","a001f7e31c2054788fcefc3ccd2c1c53"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","cfc83117bec660cb6ab03c8df8e430c0"],["D:/hexo/ButterflyBlog/public/tags/Jsp/index.html","d89c546f002feab17bb76a9cb320b141"],["D:/hexo/ButterflyBlog/public/tags/Linux/index.html","2587092a24802fd63082f2575a8136e4"],["D:/hexo/ButterflyBlog/public/tags/List/index.html","cd511261e0a92bfcce96d9fe866d5ec7"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","ea5d0b9626b13206f16c8c99972af989"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","4bd3a0f49115f0b6da6d4542a0443daf"],["D:/hexo/ButterflyBlog/public/tags/MVC/page/2/index.html","4dcfbdfe214ac208b65e2451b30cef04"],["D:/hexo/ButterflyBlog/public/tags/Map/index.html","c3b6bfed02c57873bed7cc24508f25fd"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","0ec2dfe42ba174e99965d310b15378eb"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","da0ab1ed95fe485040914bd737c4f04a"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/3/index.html","423c640c9de5005190f36b6f7e7aad74"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/4/index.html","9a41706ea3896c56e497ccb7513fde78"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/5/index.html","0b621b3c51d3d6d1f19c0c81aa2150aa"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/6/index.html","46ca6a92625b0e75ed90fc9a48e0fc15"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","64e5569b1f3737ee1c70b42efd6da5e9"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/page/2/index.html","8bf62e1dce1c77d94a3e633e7c346b72"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","fd803dc56ec977876fc584fb75e900fc"],["D:/hexo/ButterflyBlog/public/tags/SQL/index.html","fd3ef4acc0f1e6bc43c170fa22d91e4d"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","4d4ea16b9031d48678d914ce42d3c6f1"],["D:/hexo/ButterflyBlog/public/tags/Set/index.html","97adac3c48a30aa20564ab5aed111640"],["D:/hexo/ButterflyBlog/public/tags/Socket/index.html","f2c7d7af8c5c9143b71c0e178274540b"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","2af27ab72c814dc66ccdb4b31c2b947e"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","676c3e21d298b8977ee54ff2f7944fe3"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/3/index.html","5bb83427593697fda56a9b5a70a63e4c"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/4/index.html","74062f66bfd58b8b865833bf56a7c627"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","17dd0c8ae3815d108ca159300b953d13"],["D:/hexo/ButterflyBlog/public/tags/SpringWeb/index.html","efcb3b919a5c9558ea0af728c7acd856"],["D:/hexo/ButterflyBlog/public/tags/Springtx/index.html","e7f6845acfca1b3e0f6e1845f7182614"],["D:/hexo/ButterflyBlog/public/tags/index.html","1436b81da3643cc131989284e693942c"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","7e6749d4b3c2b3e634b120fca9711e16"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","b522d0dc97735337f10c6e036ea2f901"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","dab446ea740100d971fa794126f82045"],["D:/hexo/ButterflyBlog/public/tags/数组/index.html","63fb188377f2bc5b8a41b768a8cf433d"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","75bfbd393800ff5f142ec18b73255176"],["D:/hexo/ButterflyBlog/public/tags/架构/page/2/index.html","f28ea3dfb300bf50af24357c6e5f23a5"],["D:/hexo/ButterflyBlog/public/tags/架构/page/3/index.html","2e8ee4b173190cbd635e08a8ac0221ca"],["D:/hexo/ButterflyBlog/public/tags/架构/page/4/index.html","fc5b74fd1040809f4118d4ce2f1adf7c"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","4c2d82a7d8b9dfd8c578e7eac4b787c3"]];
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







