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

var precacheConfig = [["D:/hexo/ButterflyBlog/public/2018/03/01/JavaSE/JDK/00/index.html","20983748d4c9958826395f5313a48f7e"],["D:/hexo/ButterflyBlog/public/2018/03/02/JavaSE/JDK/01/index.html","beb91c58c8d95ab7b8b0a68de402117c"],["D:/hexo/ButterflyBlog/public/2018/03/03/JavaSE/JDK/02/index.html","282f562043c55adf8964f30395171fdb"],["D:/hexo/ButterflyBlog/public/2018/03/04/JavaSE/JLF/03/index.html","b8907baa3b2d488af1ad4f3df368884d"],["D:/hexo/ButterflyBlog/public/2018/03/05/JavaSE/JLF/04/index.html","5ef9d27ad174b4833124295cd77fbf2b"],["D:/hexo/ButterflyBlog/public/2018/03/06/JavaSE/JLF/05/index.html","b9483529dde1daaedbb8a9a9f6dde742"],["D:/hexo/ButterflyBlog/public/2018/03/07/JavaSE/JLF/06/index.html","7826055204d90cb3253b4878df37e58d"],["D:/hexo/ButterflyBlog/public/2018/03/08/JavaSE/JLF/07/index.html","16a5a7c55f9ce705a23c4550aa7502d2"],["D:/hexo/ButterflyBlog/public/2018/03/10/JavaSE/API/9/index.html","6bc22fdc0da1bde64bf9cd4037f3855d"],["D:/hexo/ButterflyBlog/public/2018/03/11/JavaSE/API/10/index.html","9719b77b742638b36aea7e05d7090a33"],["D:/hexo/ButterflyBlog/public/2018/03/12/JavaSE/API/11/index.html","a416c9cee10568383b02a9405c349f37"],["D:/hexo/ButterflyBlog/public/2018/03/13/JavaSE/API/12/index.html","12ecbaf1bdf4c3cc5c50325df753bc5b"],["D:/hexo/ButterflyBlog/public/2018/03/14/JavaSE/API/13/index.html","7ac9848305092cb3a726a62cfd6cd630"],["D:/hexo/ButterflyBlog/public/2018/03/15/JavaSE/API/14/index.html","cbab4661435bf7f1399922ab90f2641b"],["D:/hexo/ButterflyBlog/public/2018/03/16/JavaSE/API/15/index.html","40fa6fe6382605588e1db384442b90b5"],["D:/hexo/ButterflyBlog/public/2018/03/17/JavaSE/IO/16/index.html","1331bb195620de23609711c9a46d1417"],["D:/hexo/ButterflyBlog/public/2018/03/18/JavaSE/IO/17/index.html","d82f769d014fcbd24df8c15201f2a071"],["D:/hexo/ButterflyBlog/public/2018/03/19/JavaSE/IO/18/index.html","da1bdea37a4b5f79a0011909d2ec9903"],["D:/hexo/ButterflyBlog/public/2018/03/20/JavaSE/Exception/19/index.html","335afa5a77a63848b4b252a0efd1bc6c"],["D:/hexo/ButterflyBlog/public/2018/03/21/JavaSE/Exception/20/index.html","2461f7ccc5a8770ecec79f744bf5044d"],["D:/hexo/ButterflyBlog/public/2018/03/22/JavaSE/GUI/21/index.html","1544c6bea2d38b28b7eabe3ef3d26797"],["D:/hexo/ButterflyBlog/public/2018/03/23/JavaSE/OOP/22/index.html","3c1ca8a984ec92b50374a99fc0f27215"],["D:/hexo/ButterflyBlog/public/2018/03/24/JavaSE/OOP/23/index.html","07aefc17cbd68abe3d5c941aa9d04d50"],["D:/hexo/ButterflyBlog/public/2018/03/25/JavaSE/OOP/24/index.html","605f6bda4cf5492e442b79b8b2574398"],["D:/hexo/ButterflyBlog/public/2018/03/26/JavaSE/OOP/25/index.html","2d93450da1251d8cb907e4b42428b2e8"],["D:/hexo/ButterflyBlog/public/2018/03/27/JavaSE/OOP/26/index.html","24abe44d678e0829b1257c21285aa89c"],["D:/hexo/ButterflyBlog/public/2018/03/28/JavaSE/Thread/27/index.html","81ea41a3ad84fd759d304f077b2abce5"],["D:/hexo/ButterflyBlog/public/2018/03/29/JavaSE/Thread/28/index.html","1599b67db262f641f6a9647de02cc116"],["D:/hexo/ButterflyBlog/public/2018/03/30/JavaSE/Socket/29/index.html","1bd264a46631cf4b9ce4466ee60bee1e"],["D:/hexo/ButterflyBlog/public/2018/04/01/JavaSE/Collection/30/index.html","07feeb02537baddf70a96fe6279b9b69"],["D:/hexo/ButterflyBlog/public/2018/04/02/JavaSE/Collection/31/index.html","9ddc2320c3aae9c6e1b024338df1e4a5"],["D:/hexo/ButterflyBlog/public/2018/04/03/JavaSE/jdk1.5/32/index.html","ae59f05a35127f2d5a37d43183feeb22"],["D:/hexo/ButterflyBlog/public/2018/04/04/JavaSE/Collection/33/index.html","63c8503b54a6b1f25b2ef51be2beb0ad"],["D:/hexo/ButterflyBlog/public/2018/04/05/JavaSE/Collection/34/index.html","379116f85bd2d3cb559bc4150ec56549"],["D:/hexo/ButterflyBlog/public/2018/04/06/JavaSE/Collection/35/index.html","bb181781d469457908818b0231e31749"],["D:/hexo/ButterflyBlog/public/2018/04/06/JavaSE/Collection/36/index.html","3867d51ff5f9c7652e736dcd4585247c"],["D:/hexo/ButterflyBlog/public/2018/04/06/JavaSE/Collection/37/index.html","b383ab595d51b2dbe0eb16e23d59d382"],["D:/hexo/ButterflyBlog/public/2018/04/07/JVM/38/index.html","f705f355638be0c2d2fd2e01b82e82eb"],["D:/hexo/ButterflyBlog/public/2018/04/08/JVM/39/index.html","03bb8157b0c6b117c83be032291b2dd5"],["D:/hexo/ButterflyBlog/public/2018/04/09/JavaSE/jdk1.5/41/index.html","a8a9a86c8e6d6ad48b08e0f2605034d1"],["D:/hexo/ButterflyBlog/public/2018/04/10/JavaSE/jdk1.8/40/index.html","4a628225bfde4995735f489a565f5a08"],["D:/hexo/ButterflyBlog/public/2018/04/11/JavaEE/41/index.html","fc081dcbad14b3e583debdb5bf21f119"],["D:/hexo/ButterflyBlog/public/2018/04/12/JavaEE/42/index.html","a39daf4b8826e6c9c2c2393d3b5fdb8a"],["D:/hexo/ButterflyBlog/public/2018/04/13/JavaEE/43/index.html","5109b8a6c7ad53c150646a390447f062"],["D:/hexo/ButterflyBlog/public/2018/04/14/JavaEE/44/index.html","242c83dd15fe27dbe77de6704950e1d2"],["D:/hexo/ButterflyBlog/public/2018/05/02/Git/42/index.html","2e9acfa6bf392cb54d945888adf958ee"],["D:/hexo/ButterflyBlog/public/2018/05/03/Git/43/index.html","b7d0bdbfee11ca88805b3f7268d831af"],["D:/hexo/ButterflyBlog/public/2018/05/04/Git/44/index.html","f9ba0b58eb55a45cad9f3f71bd2ee747"],["D:/hexo/ButterflyBlog/public/2018/05/05/jQuery/43/index.html","b759a3d99cc6c34f4228126aa1ca021a"],["D:/hexo/ButterflyBlog/public/2018/05/06/MySQL/44/index.html","1f4c0eca36fe947a3327f327ffea77b3"],["D:/hexo/ButterflyBlog/public/2018/05/07/MySQL/45/index.html","4024b51d82b3410bac9dada19d7559ea"],["D:/hexo/ButterflyBlog/public/2018/05/07/SimpleApp/Intellij  IDEA/46/index.html","be6fdb2acf0e61805e70247d9f909f36"],["D:/hexo/ButterflyBlog/public/2018/05/08/SimpleApp/Maven/53/index.html","ee7a3e77e79c64627d2313bf58b7e0f4"],["D:/hexo/ButterflyBlog/public/2018/05/09/SimpleApp/Maven/54/index.html","f82d17a786f7d681266392c231b26693"],["D:/hexo/ButterflyBlog/public/2018/05/10/SimpleApp/Maven/55/index.html","bfb4d29698c6b533090f607d482b2e6b"],["D:/hexo/ButterflyBlog/public/2018/05/11/SimpleApp/Maven/56/index.html","f9fff0102499fac4bb0937fc934f255e"],["D:/hexo/ButterflyBlog/public/2018/05/12/SimpleApp/Maven/57/index.html","f221295aabdf6360525c9706b417eeed"],["D:/hexo/ButterflyBlog/public/2018/05/13/SimpleApp/Maven/58/index.html","97ad1e7bd227ed59cdb6b2783ff83259"],["D:/hexo/ButterflyBlog/public/2018/05/14/SimpleApp/Maven/59/index.html","e3f50151901cf463530d511b06ee9bf8"],["D:/hexo/ButterflyBlog/public/2018/05/15/SimpleApp/Maven/60/index.html","bef08e187e79c64203054256c8f7af3b"],["D:/hexo/ButterflyBlog/public/2018/05/16/SimpleApp/Maven/61/index.html","e77cb3f11426ee26bcb1d509d77459cd"],["D:/hexo/ButterflyBlog/public/2018/05/16/SimpleApp/Maven/62/index.html","717746cce4cec380c1b7887dba8af0a8"],["D:/hexo/ButterflyBlog/public/2018/05/17/SimpleApp/MVC/62/index.html","a8e4f350951a232413785839fd8487d8"],["D:/hexo/ButterflyBlog/public/2018/05/18/SimpleApp/JUnit/63/index.html","735fbeea2993e8104f4a14cbe804dd12"],["D:/hexo/ButterflyBlog/public/2018/05/19/SimpleApp/Log4j/64/index.html","df01163796f27b698883a92efbdaf15b"],["D:/hexo/ButterflyBlog/public/2018/05/20/SimpleApp/Log4j/65/index.html","476e344ffa77ba498baf7a4605e1e2a5"],["D:/hexo/ButterflyBlog/public/2018/05/21/SimpleApp/Log4j/66/index.html","bdaacca4b1cd880a6dfcd3d087be4c5e"],["D:/hexo/ButterflyBlog/public/2018/05/22/SimpleApp/Mybatis/62/index.html","29716f56e1cc60416686a8a64867a3a1"],["D:/hexo/ButterflyBlog/public/2018/05/23/SimpleApp/Mybatis/63/index.html","6d51bf317221476be7d307b0fc5e00dc"],["D:/hexo/ButterflyBlog/public/2018/05/24/SimpleApp/Apache HttpClient/72/index.html","b102effb9808e5f69990e17b1ad07dca"],["D:/hexo/ButterflyBlog/public/2018/05/24/SimpleApp/Jackson/73/index.html","327a0b671d09baff619c3625c7b30d4d"],["D:/hexo/ButterflyBlog/public/2018/05/24/SimpleApp/Mybatis/64/index.html","7309400cbc00762fc4653c051c23b836"],["D:/hexo/ButterflyBlog/public/2018/05/25/SimpleApp/Mybatis/65/index.html","0ad2fe149eb5b2e887260bb7822570bd"],["D:/hexo/ButterflyBlog/public/2018/05/25/SimpleApp/RESTful/75/index.html","a4ccbbd7138f870ec80ffff412becf93"],["D:/hexo/ButterflyBlog/public/2018/05/26/SimpleApp/Mybatis/66/index.html","28fd8446dbae088a28f97bc70ca5d9ab"],["D:/hexo/ButterflyBlog/public/2018/05/26/SimpleApp/幂等性/76/index.html","b4a49291190b985386e4cbe0b51907f6"],["D:/hexo/ButterflyBlog/public/2018/05/27/SimpleApp/Mybatis/67/index.html","b3e2899d8f4116c5d0c112ecb44fccb1"],["D:/hexo/ButterflyBlog/public/2018/05/28/SimpleApp/Intellij  IDEA/77/index.html","b6350708ed37cc934ac26f83517fef0b"],["D:/hexo/ButterflyBlog/public/2018/05/28/SimpleApp/Mybatis/68/index.html","bc1ef34d1c87132acf39cc8703e66be9"],["D:/hexo/ButterflyBlog/public/2018/05/29/SimpleApp/JavaScript插件/78/index.html","23c8be6abfb2601f095738b77f6ef960"],["D:/hexo/ButterflyBlog/public/2018/05/29/SimpleApp/Mybatis/69/index.html","02dd90bf461e73c77b11a704fec31bff"],["D:/hexo/ButterflyBlog/public/2018/05/30/SimpleApp/JavaScript插件/79/index.html","caf77aca1f6b17ec7fbba72b99892d58"],["D:/hexo/ButterflyBlog/public/2018/05/30/SimpleApp/Mybatis/70/index.html","caa897a0dc1fe416786db331f31f86c6"],["D:/hexo/ButterflyBlog/public/2018/05/31/SimpleApp/Mybatis/71/index.html","954d3cf534e8efdc5a126da67af8e8b1"],["D:/hexo/ButterflyBlog/public/2018/06/01/SimpleApp/JavaScript插件/80/index.html","0543cd1b70abb841b84e49969826a871"],["D:/hexo/ButterflyBlog/public/2018/06/01/Spring/Spring MVC/102/index.html","d784185eb8f4555637834c56238988be"],["D:/hexo/ButterflyBlog/public/2018/06/02/SimpleApp/JavaScript插件/81/index.html","723623a97f15396131c95cbbf798478e"],["D:/hexo/ButterflyBlog/public/2018/06/02/Spring/Spring MVC/103/index.html","0062393bbc51a61d2d92af2a3c19df10"],["D:/hexo/ButterflyBlog/public/2018/06/03/SimpleApp/JavaScript插件/82/index.html","0720dd69b9310c3f6c9458d23f242de1"],["D:/hexo/ButterflyBlog/public/2018/06/04/SimpleApp/JavaScript插件/83/index.html","3c60eeca56685ae2d0504727854482ce"],["D:/hexo/ButterflyBlog/public/2018/06/04/SimpleApp/JavaScript插件/89/index.html","5fc7e73dab7555f3702b87ef5f0d444a"],["D:/hexo/ButterflyBlog/public/2018/06/04/SimpleApp/Java工具类/84/index.html","5837ee90eaa60e3b7cdfec2722c18dc8"],["D:/hexo/ButterflyBlog/public/2018/06/04/Spring/Spring MVC/105/index.html","56cf0aaf8cfb44043a46cd0717f62454"],["D:/hexo/ButterflyBlog/public/2018/06/05/SimpleApp/Java工具类/85/index.html","6dca13c6384d0fbecf5b43723126c445"],["D:/hexo/ButterflyBlog/public/2018/06/05/Spring/Spring MVC/107/index.html","d077658f47ac162b1a0ba50714d5f6d2"],["D:/hexo/ButterflyBlog/public/2018/06/06/SimpleApp/Java工具类/86/index.html","652efcf82310bd16c3d4db003f67aced"],["D:/hexo/ButterflyBlog/public/2018/06/06/SimpleApp/Kaptcha验证码/87/index.html","7435259d353034ae8998bcece555cbd6"],["D:/hexo/ButterflyBlog/public/2018/06/06/Spring/Spring tx/108/index.html","00925510690b314d2baa6222438541bd"],["D:/hexo/ButterflyBlog/public/2018/06/07/SimpleApp/Kaptcha验证码/88/index.html","17380403649c8caf6c71741a218c1ff4"],["D:/hexo/ButterflyBlog/public/2018/06/07/Spring/90/index.html","473a9a759eacf1dee8a0740e74d058cd"],["D:/hexo/ButterflyBlog/public/2018/06/08/Spring/92/index.html","d5f430acceaa5a7bd47a5e9e460fb94e"],["D:/hexo/ButterflyBlog/public/2018/06/08/Spring/93/index.html","de50560ee1bfbba301b19aaf8744f21c"],["D:/hexo/ButterflyBlog/public/2018/06/08/Spring/Spring tx/109/index.html","4941682c540056bdf43c2dc259775bb4"],["D:/hexo/ButterflyBlog/public/2018/06/09/Spring/91/index.html","88e2da07ec76a514e1d3e0d3633b95b6"],["D:/hexo/ButterflyBlog/public/2018/06/09/Spring/Spring Security/114/index.html","def70182b8e3616f357f4f10ac24bdbc"],["D:/hexo/ButterflyBlog/public/2018/06/09/Spring/Spring Web/95/index.html","645030bfc5f22cfa3f3a734924fdeeb9"],["D:/hexo/ButterflyBlog/public/2018/06/09/Spring/Spring tx/110/index.html","6554c50affae01cb9d287f6d08dd856b"],["D:/hexo/ButterflyBlog/public/2018/06/10/Spring/Spring Web/96/index.html","7fa87641d7563f8701232cfd5fada65d"],["D:/hexo/ButterflyBlog/public/2018/06/11/Spring/Spring Security/111/index.html","8ebdbdf9f5556254494a64ba6292e13e"],["D:/hexo/ButterflyBlog/public/2018/06/11/Spring/Spring Web/97/index.html","f64bac1b710343c92b8885c34c19f0e7"],["D:/hexo/ButterflyBlog/public/2018/06/12/Spring/Spring Security/112/index.html","46112c9df57ffab5b9c3a3ecf52022f9"],["D:/hexo/ButterflyBlog/public/2018/06/12/Spring/Spring Web/98/index.html","364ed9feb0ae6d87c660d3a3f8016a57"],["D:/hexo/ButterflyBlog/public/2018/06/13/Spring/Spring Boot 2.2.2/115/index.html","62d774b036677dcc5e781a8442d0a019"],["D:/hexo/ButterflyBlog/public/2018/06/13/Spring/Spring Boot 2.2.2/116/index.html","b6c81c5775c921db9724f12380fca41c"],["D:/hexo/ButterflyBlog/public/2018/06/13/Spring/Spring MVC/106/index.html","290118c3a3029b626affd3a53be9d3d6"],["D:/hexo/ButterflyBlog/public/2018/06/13/Spring/Spring Security/113/index.html","88091d831458d0c2b3d9d1fc8bd41546"],["D:/hexo/ButterflyBlog/public/2020/05/20/hello-world/index.html","b113c244ea15f1c3c3c98e2c1753d2e1"],["D:/hexo/ButterflyBlog/public/404.html","3d94722c117617185c9c3cfdef805ed2"],["D:/hexo/ButterflyBlog/public/about/index.html","f7f2b870f4e92ec094a465049effba53"],["D:/hexo/ButterflyBlog/public/archives/2018/03/index.html","105dfd5ea7d7f8828919822e1cb0120d"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/2/index.html","e460d759da229bd355700ad45d6e8ea5"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/3/index.html","098c8880b35df027af79f7d8059327e1"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/4/index.html","a8a3a7cb2d08c80de759567a540ce52b"],["D:/hexo/ButterflyBlog/public/archives/2018/03/page/5/index.html","9474031a812f4f4571a21f8be3faba7a"],["D:/hexo/ButterflyBlog/public/archives/2018/04/index.html","ec7afa9a9855f42fbe15ec48ce8234b9"],["D:/hexo/ButterflyBlog/public/archives/2018/04/page/2/index.html","cdf7ab3bc51bccfa6dc6b40c9a2ddd8b"],["D:/hexo/ButterflyBlog/public/archives/2018/04/page/3/index.html","2bd903cc1269f6124437391f4179fe6b"],["D:/hexo/ButterflyBlog/public/archives/2018/05/index.html","3ad17dc44634a28386886198cb02470a"],["D:/hexo/ButterflyBlog/public/archives/2018/05/page/2/index.html","285bb533af3f29f02a01f47229d9e7ca"],["D:/hexo/ButterflyBlog/public/archives/2018/05/page/3/index.html","62bb3c15d79ca958579c5956346b99d3"],["D:/hexo/ButterflyBlog/public/archives/2018/05/page/4/index.html","4d5648815506d672f4e0a5bb5435bc5c"],["D:/hexo/ButterflyBlog/public/archives/2018/05/page/5/index.html","482c9a39171d8763c8272ebb777fcfef"],["D:/hexo/ButterflyBlog/public/archives/2018/05/page/6/index.html","33b1ba7217913b7b204a0285ef649383"],["D:/hexo/ButterflyBlog/public/archives/2018/06/index.html","a4b4438818889f4078c4245da776ec9d"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/2/index.html","227f728fff768c105da8c3485464c2b1"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/3/index.html","5b3105a533eb63ac4146e881e87ba29b"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/4/index.html","c7d18c344f973e015039a6a9f99a9f87"],["D:/hexo/ButterflyBlog/public/archives/2018/06/page/5/index.html","b1bb27a40507cbc56698dc82faf32190"],["D:/hexo/ButterflyBlog/public/archives/2018/index.html","7f6335cb95cbb6e5f1115a37c1b05785"],["D:/hexo/ButterflyBlog/public/archives/2018/page/10/index.html","d0fd67648e093e3ef3acb3e3ca33325c"],["D:/hexo/ButterflyBlog/public/archives/2018/page/11/index.html","06d432eabb30e65ccd8cad1ce159e40e"],["D:/hexo/ButterflyBlog/public/archives/2018/page/12/index.html","0396386189b12cb808af742f26f09c0b"],["D:/hexo/ButterflyBlog/public/archives/2018/page/13/index.html","ff273e1a6297d5b20502d484253bcd9a"],["D:/hexo/ButterflyBlog/public/archives/2018/page/14/index.html","26f3bd19bac7903763f11048ca17c456"],["D:/hexo/ButterflyBlog/public/archives/2018/page/15/index.html","453b87bfe29a5d8470692246f31e637b"],["D:/hexo/ButterflyBlog/public/archives/2018/page/16/index.html","82d1e9ed3cd8ae69db6d582a26fc24e5"],["D:/hexo/ButterflyBlog/public/archives/2018/page/17/index.html","7ecdcdb39cbf8a13130284d4f15c6f8f"],["D:/hexo/ButterflyBlog/public/archives/2018/page/2/index.html","1d746b2ce7881111503a7ca86ec25688"],["D:/hexo/ButterflyBlog/public/archives/2018/page/3/index.html","02ba9fef85eb5b36f0acecb00ce532e4"],["D:/hexo/ButterflyBlog/public/archives/2018/page/4/index.html","e40aac746e82420485e01a2cc195b6cb"],["D:/hexo/ButterflyBlog/public/archives/2018/page/5/index.html","bbbe1718431d474fda27132329fd268f"],["D:/hexo/ButterflyBlog/public/archives/2018/page/6/index.html","64613b88077b1bdab740d4c7f3696dad"],["D:/hexo/ButterflyBlog/public/archives/2018/page/7/index.html","0b670908663df93dd8a877ac86366e3f"],["D:/hexo/ButterflyBlog/public/archives/2018/page/8/index.html","b72538d3958870509449e9ecf8b92d2c"],["D:/hexo/ButterflyBlog/public/archives/2018/page/9/index.html","2263972eab99af4d7e403c3480f75481"],["D:/hexo/ButterflyBlog/public/archives/2020/05/index.html","944bd16a736352c6adb6182d403731c6"],["D:/hexo/ButterflyBlog/public/archives/2020/index.html","7700a42ada0c04fac92efa65b1f4765f"],["D:/hexo/ButterflyBlog/public/archives/index.html","42523153d8f7735697da4bbbadd2c7d2"],["D:/hexo/ButterflyBlog/public/archives/page/10/index.html","b12e6a83080b02b29455607e058bb342"],["D:/hexo/ButterflyBlog/public/archives/page/11/index.html","b488ec6e0bf83cee587484171a653342"],["D:/hexo/ButterflyBlog/public/archives/page/12/index.html","bd6b6172bf13fd867a96109fcbde286f"],["D:/hexo/ButterflyBlog/public/archives/page/13/index.html","9f33cb4ba9827f8c27b819f5f264310e"],["D:/hexo/ButterflyBlog/public/archives/page/14/index.html","2df8b79bc85882f6110d5d768a3d1269"],["D:/hexo/ButterflyBlog/public/archives/page/15/index.html","3349fa60407a559eeabb6be6f02abf40"],["D:/hexo/ButterflyBlog/public/archives/page/16/index.html","1fbda80e4da05fa29a9df264608b3ec2"],["D:/hexo/ButterflyBlog/public/archives/page/17/index.html","8546afff90e6dc1ce760d5f3002d4577"],["D:/hexo/ButterflyBlog/public/archives/page/2/index.html","a05e22bc7d4959804dace38b3bc98be8"],["D:/hexo/ButterflyBlog/public/archives/page/3/index.html","d739f853e463b7ea13aee29fb48a1302"],["D:/hexo/ButterflyBlog/public/archives/page/4/index.html","9a80bb9818461ef2d4454d1040724c93"],["D:/hexo/ButterflyBlog/public/archives/page/5/index.html","aebc8167496ddcf3ac9a46f25114e76c"],["D:/hexo/ButterflyBlog/public/archives/page/6/index.html","0c2e9b68812381cf6483fe2fdfebdc52"],["D:/hexo/ButterflyBlog/public/archives/page/7/index.html","7b29ac8536787998d4a418ecd166081f"],["D:/hexo/ButterflyBlog/public/archives/page/8/index.html","bcaa0156e9387497a8129feeecaeba9e"],["D:/hexo/ButterflyBlog/public/archives/page/9/index.html","abec558e0cd88bfc7557d6bb981db4ef"],["D:/hexo/ButterflyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/ButterflyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/ButterflyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/ButterflyBlog/public/categories/Git/index.html","a76de7a9d416c0e141d06164b42a0768"],["D:/hexo/ButterflyBlog/public/categories/JavaEE/index.html","2174e1f45d3b4efc49168328601cccef"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/JVM篇/index.html","4e998a8cc7da3dbbce41183f2b718b90"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java-面向对象/index.html","f9443eb3b11089079bcd4156f22d630c"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/GUI/index.html","e3c2e3ea513e6902abdebe621d0ef089"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/JDK常用API/index.html","b14f41a1b8e044eb541496179d3e5924"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java-异常处理/index.html","9df2296f9b674d680829090d446a1805"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java-流-Stream-、文件-File-和IO/index.html","c128e47034baa1fcb06b86659204af16"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java开发环境搭建/index.html","ddc84cf85aab23cab44d16e930456925"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/Java语言基础/index.html","d98180fd8f57309fb8acd667b8aaa045"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/index.html","a3510b798dfd66b9557f20561916e516"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/page/2/index.html","2eac808e4f4ee82cadb75644d8492ff9"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java语法篇/page/3/index.html","4767dc156ec778fc106fec3b0e1bd770"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java高级篇/index.html","d960336ead6bb78e65403de4217f758b"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/Java高级篇/page/2/index.html","0178e5e9ca5cf6cd3db43862a9fda81c"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/index.html","990fe0fadd3d8fb6e9154c60a79fe293"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/2/index.html","87e4b40c5a2a7f26f94e791dbd4c4143"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/3/index.html","968a3a237a055dc48906401145dd0fca"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/4/index.html","01d50f739d4972204fa1180dc58c04d3"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/5/index.html","ce7834d439ad594c7285e066de0cb6b3"],["D:/hexo/ButterflyBlog/public/categories/JavaSE/page/6/index.html","0c0c372fed8e90be403ea41d43bef9d5"],["D:/hexo/ButterflyBlog/public/categories/MySQL/index.html","170fb4c25ba374e9b9fc30d4f7dbb7c4"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/Spring-Boot2-x/index.html","f9de47c99af85d6a06757be5a26e7491"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/Spring-MVC/index.html","2e993ba40490a6d5b2d93ac0bac22a1b"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/Spring-Security/index.html","31048ba8c74943e93c3eb8e86c469287"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/Spring-Web/index.html","2455ddc5a703e3d370cb765821059b36"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/Spring-tx/index.html","f60d9c700b5570c4d13bb055b436d019"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/Spring/index.html","34b982578c221772e30161256ac83fae"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/index.html","1842f45d5162310f0cc3681b108f9e50"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/page/2/index.html","2202948ea085c26b4c5c76d590c536ec"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/page/3/index.html","0106476e85d9ac6d2f74776f27beb564"],["D:/hexo/ButterflyBlog/public/categories/Spring全家桶/page/4/index.html","197b5f2180f924c07ce1cf0e2c5fdf1e"],["D:/hexo/ButterflyBlog/public/categories/index.html","2658a521cc1e8354cfa8dee903200790"],["D:/hexo/ButterflyBlog/public/categories/前端/index.html","54fab76abc6345a9a0fe2d755714c0cc"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/HttpClient/index.html","c5bb7a73e76ae6e60a8cc4969b22292c"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Intellij-IDEA/index.html","8794eb1907d00573b04065dc37fd9a34"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/JUnit/index.html","b31fc73c336cc88a9dcb56611001574b"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Jackson/index.html","dbcdd178fa304804ddc87e5b32ce9c0d"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/JavaScript插件/index.html","43ab3342889c2ac4c7c60c2caa1b71ba"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Kaptcha验证码/index.html","126e30e1844a18a43795fb1978b5b841"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Log4j/index.html","fa52c1ef3868142ef7e01b0c710a9a2f"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/MVC架构/index.html","e47469696649e2f80fe9eccf7c690470"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Maven/index.html","26c7269d0b9438b3715c65610ca5b3c6"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Maven/page/2/index.html","e6c7a77bff55e55c47f4702a2068a73a"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Mybatis/index.html","e181da28afba995fa958104b8dd835d5"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/Mybatis/page/2/index.html","2f4b747ef0d43f86e6dab5d8d546425c"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/RESTful/index.html","268a51556ca3a82beaf90208e8e1ea68"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/index.html","fa952261fed302e54ce2f0a49aadb1f8"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/page/2/index.html","a26f85bac8782825fc3ab6b6457e5598"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/page/3/index.html","5663cccf6a32baa068814e56576c9b5c"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/page/4/index.html","0c5f2490e38d7cdbe352790921071506"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/page/5/index.html","4bcbb1619b7bebe8b9e6ada988f809ca"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/page/6/index.html","861f89f62a5085e178311c8e9ea237ff"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/page/7/index.html","fe676c39fb2a23e9c115576bfbd0c8c3"],["D:/hexo/ButterflyBlog/public/categories/单体地狱/工具类/index.html","1a65815223e25f6a224937c664f9e64c"],["D:/hexo/ButterflyBlog/public/css/background.css","6c1994a210210a89e045a029b8a8db69"],["D:/hexo/ButterflyBlog/public/css/index.css","015036838b971ea439334efa3a760be0"],["D:/hexo/ButterflyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/ButterflyBlog/public/gallery/index.html","3b11e1ebb51875877a54bbe184920978"],["D:/hexo/ButterflyBlog/public/gallery/yangyang/index.html","2ee364753467340aa9b491f37698dd6d"],["D:/hexo/ButterflyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/ButterflyBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/ButterflyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/ButterflyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/ButterflyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/ButterflyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/ButterflyBlog/public/index.html","9ec907f60bfc2bbb09a42f4bd80cc66e"],["D:/hexo/ButterflyBlog/public/java/index.html","8b346f8cbfc826ff5bf4cb2665940126"],["D:/hexo/ButterflyBlog/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/hexo/ButterflyBlog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/hexo/ButterflyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/hexo/ButterflyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/hexo/ButterflyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/hexo/ButterflyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/hexo/ButterflyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/hexo/ButterflyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/hexo/ButterflyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/hexo/ButterflyBlog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/hexo/ButterflyBlog/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/hexo/ButterflyBlog/public/movies/index.html","22c936389d4a98a5943e71f1c47526e0"],["D:/hexo/ButterflyBlog/public/music/index.html","b5f2e3c40f251870fe1cc80aa05579ea"],["D:/hexo/ButterflyBlog/public/page/10/index.html","8a3fe45e151188c52717ba7003e286c0"],["D:/hexo/ButterflyBlog/public/page/11/index.html","4c09b4ce690ca1b72d626503751ced9f"],["D:/hexo/ButterflyBlog/public/page/12/index.html","6ac08513f002a138bef6bbdfcf4f0921"],["D:/hexo/ButterflyBlog/public/page/13/index.html","8a21d7a431251f3f2b7cd02eb1aee102"],["D:/hexo/ButterflyBlog/public/page/14/index.html","c1c9935b4786865f584e78f34d28a98d"],["D:/hexo/ButterflyBlog/public/page/15/index.html","14d99ca1ac4efcb8b025749fbc2d88ac"],["D:/hexo/ButterflyBlog/public/page/16/index.html","bf3027c8812a5684251f3e8d97015e4a"],["D:/hexo/ButterflyBlog/public/page/17/index.html","639d69b2e566e4ec36bdf3fce9a97517"],["D:/hexo/ButterflyBlog/public/page/2/index.html","914546cd6812a1a30607a7932e5292c4"],["D:/hexo/ButterflyBlog/public/page/3/index.html","c26572954b7bf1122eb022ed00059eeb"],["D:/hexo/ButterflyBlog/public/page/4/index.html","7c7840e3bde994dd436da55f76677abd"],["D:/hexo/ButterflyBlog/public/page/5/index.html","d923c7d53fa63bfe6881db972dd774a0"],["D:/hexo/ButterflyBlog/public/page/6/index.html","db8a220152c220249c4df23a63937de9"],["D:/hexo/ButterflyBlog/public/page/7/index.html","39b71d6613271f9d01b0b84fee48a651"],["D:/hexo/ButterflyBlog/public/page/8/index.html","d87d2b4fd6d4499f4e02214bc492e715"],["D:/hexo/ButterflyBlog/public/page/9/index.html","2170345781e26fbc088cafe45c44579c"],["D:/hexo/ButterflyBlog/public/python/index.html","2f3e374f55be6f0db0045cbe925ec033"],["D:/hexo/ButterflyBlog/public/tags/AOP/index.html","fd69f26b8efba6d0cfbd23c62afd227d"],["D:/hexo/ButterflyBlog/public/tags/BUG/index.html","c813d048dba4b567bef82f375ee0909e"],["D:/hexo/ButterflyBlog/public/tags/Druid/index.html","4a23dbfeeee4cf1d74ad19dbdec97a28"],["D:/hexo/ButterflyBlog/public/tags/Druid/page/2/index.html","321729b394e42bc4335fcfe96aed424c"],["D:/hexo/ButterflyBlog/public/tags/Git/index.html","da002402ab2621cf098e5770e259bdeb"],["D:/hexo/ButterflyBlog/public/tags/JDK1-5新特性/index.html","69ad3360ce913455f9e243bda8aaf691"],["D:/hexo/ButterflyBlog/public/tags/JDK1-8新特性/index.html","51bd3bfa9fb58a4ed2ce2d163a8cb35a"],["D:/hexo/ButterflyBlog/public/tags/JSON/index.html","c3a807a321f72e685edaa6e053b35d3c"],["D:/hexo/ButterflyBlog/public/tags/JUnit/index.html","ae1ab68d1d166a548353dc63eb522244"],["D:/hexo/ButterflyBlog/public/tags/JVM/index.html","5a1c3c54e727e91c4b509d559a3f1e53"],["D:/hexo/ButterflyBlog/public/tags/JavaEE/index.html","2475fc05e3f7f9d26a0c610ed0afb49b"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/index.html","c74f7a997f9101562fbaf7790d023bf5"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/2/index.html","0c65a3601f5c64959df39e726cd34c51"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/3/index.html","d83be6fe5a8b149e78183fd299fa31a8"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/4/index.html","bede3d31318be7163d1e6a2e06354a6d"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/5/index.html","3f78349ec8a10f1aa61566d609581650"],["D:/hexo/ButterflyBlog/public/tags/JavaSE/page/6/index.html","c90a3fa4b8136ece40ced74ed00010b3"],["D:/hexo/ButterflyBlog/public/tags/JavaScript/index.html","883d1ae87208f3195b9c24fc56e3316e"],["D:/hexo/ButterflyBlog/public/tags/Linux/index.html","cbe33a7af87d4b93573c61448eb107ad"],["D:/hexo/ButterflyBlog/public/tags/Log4j/index.html","29f696056bdb3edebbba0ec4bda0e7b4"],["D:/hexo/ButterflyBlog/public/tags/MVC/index.html","2196b0df91c29e000f4100f1de8df0b1"],["D:/hexo/ButterflyBlog/public/tags/Maven/index.html","6f1639725f151630067b0c2a0ac92ef9"],["D:/hexo/ButterflyBlog/public/tags/Maven/page/2/index.html","55ccc3f9c80bb7f3da82781290693341"],["D:/hexo/ButterflyBlog/public/tags/MySQL/index.html","44268a0b2c0fea6ec9e2df6ce7e5880e"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/index.html","20cb939b2ef9fe4782107380ccff9717"],["D:/hexo/ButterflyBlog/public/tags/Mybatis/page/2/index.html","29b350091420f942be5c476764e81cec"],["D:/hexo/ButterflyBlog/public/tags/RESTful/index.html","731df5f3a9aa4204f82467f7e9e5a213"],["D:/hexo/ButterflyBlog/public/tags/Servlet/index.html","ad0b3e2e39fbc2e035205b37284e8ce6"],["D:/hexo/ButterflyBlog/public/tags/Slf4j/index.html","957af8e20453c0213a3f1008d6e79a1e"],["D:/hexo/ButterflyBlog/public/tags/Spring-Boot2-x/index.html","4a4ded0164b4f60826ee6de77d200d9d"],["D:/hexo/ButterflyBlog/public/tags/Spring-MVC/index.html","63ab05d4196222ba7b0074e315de122e"],["D:/hexo/ButterflyBlog/public/tags/Spring-Security/index.html","77a020720f82ecb20a546f2fc2c492a6"],["D:/hexo/ButterflyBlog/public/tags/Spring-Web/index.html","8ace1991dcc46b2d9b5d4b96742d0671"],["D:/hexo/ButterflyBlog/public/tags/Spring-tx/index.html","0edabd3eab049d8ae79b17964e378668"],["D:/hexo/ButterflyBlog/public/tags/Spring/index.html","266073d6b20c1bec241ce8169844bcb2"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/2/index.html","ac9f4da4b9f702f9883514dcfdf10796"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/3/index.html","cd1051e9d1e781ed2c9fdc2a3e7ccaf3"],["D:/hexo/ButterflyBlog/public/tags/Spring/page/4/index.html","ff5edc1e7e4181644a306d67b86f5a9e"],["D:/hexo/ButterflyBlog/public/tags/SpringMVC/index.html","684e5890f9ca52320c51eba46462bd67"],["D:/hexo/ButterflyBlog/public/tags/index.html","fe4b17bf236006672c371d14711f0e7a"],["D:/hexo/ButterflyBlog/public/tags/jQuery/index.html","11b52a17ae9f8e2d451ceca32af3a703"],["D:/hexo/ButterflyBlog/public/tags/js插件/index.html","4e0bd074e644d63517b7f39c17ba39cd"],["D:/hexo/ButterflyBlog/public/tags/工具类/index.html","1e803b4cf8959f532ee955361c842b6c"],["D:/hexo/ButterflyBlog/public/tags/开发工具/index.html","23500145816b02315767aaf857224505"],["D:/hexo/ButterflyBlog/public/tags/插件/index.html","44d15f6f6b55a4aeb5fed740b63a638f"],["D:/hexo/ButterflyBlog/public/tags/数据结构/index.html","6680d341c71e0c5beea02ebb05a7ccce"],["D:/hexo/ButterflyBlog/public/tags/架构/index.html","4dcbb90af28f095e72a8d781e7b3a2ec"],["D:/hexo/ButterflyBlog/public/tags/随笔/index.html","97eccab8b455045d63d8525004a4123b"]];
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







