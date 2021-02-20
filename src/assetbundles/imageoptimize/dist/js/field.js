/*!
 * @project        imageoptimize
 * @name           field.js
 * @author         Andrew Welch
 * @build          Sat Feb 20 2021 02:09:01 GMT+0000 (Coordinated Universal Time)
 * @copyright      Copyright (c) 2021 ©2020 nystudio107.com
 *
 */
(self.webpackChunkimageoptimize=self.webpackChunkimageoptimize||[]).push([[708],{2547:function(t,n,e){function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function a(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=n?1e3:1024;if(Math.abs(t)<i)return t+" B";var a=n?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],o=-1,r=Math.pow(10,e);do{t/=i,++o}while(Math.round(Math.abs(t)*r)/r>=i&&o<a.length-1);return t.toFixed(e)+" "+a[o]}e(9826),e(6977),e(4916),e(5306);var o,r=function(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return l=t.done,t},e:function(t){c=!0,r=t},f:function(){try{l||null==e.return||e.return()}finally{if(c)throw r}}}}(document.querySelectorAll("img.io-prevew-image"));try{for(r.s();!(o=r.n()).done;){var l=o.value,c=l.src||l.href;if(c&&c.length>0){var s=performance.getEntriesByName(c)[0];if(void 0!==s){var d=l.parentNode.parentNode.parentNode.nextElementSibling.querySelector(".io-file-size");d&&(d.innerHTML=a(s.decodedBodySize,!0))}}}}catch(t){r.e(t)}finally{r.f()}!function(t,n,e,i){var a="ImageOptimizeOptimizedImages",o={};function r(n,e){this.element=n,this.options=t.extend({},o,e),this._defaults=o,this._name=a,this.init()}r.prototype={init:function(n){t((function(){}))}},t.fn[a]=function(n){return this.each((function(){t.data(this,"plugin_"+a)||t.data(this,"plugin_"+a,new r(this,n))}))}}(jQuery,window,document),Craft.OptimizedImagesInput=Garnish.Base.extend({id:null,inputNamePrefix:null,inputIdPrefix:null,$container:null,$blockContainer:null,$addBlockBtnContainer:null,$addBlockBtnGroup:null,$addBlockBtnGroupBtns:null,blockSort:null,blockSelect:null,init:function(t,n,e){this.id=t,this.inputNamePrefix=n,this.inputIdPrefix=Craft.formatInputId(this.inputNamePrefix),this.$container=$("#"+this.id),this.$blockContainer=this.$container.children(".variant-blocks"),this.$addBlockBtnContainer=this.$container.children(".buttons"),this.$addBlockBtnGroup=this.$addBlockBtnContainer.children(".btngroup"),this.$addBlockBtnGroupBtns=this.$addBlockBtnGroup.children(".btn");var i=this;this.$blockContainer.find("> > .actions > .settings").each((function(t,n){var e,a=$(n);(e=a.data("menubtn")?a.data("menubtn"):new Garnish.MenuBtn(n)).menu.settings.onOptionSelect=$.proxy((function(t){this.onMenuOptionSelect(t,e)}),i)}));var a=this.$blockContainer.children();this.blockSort=new Garnish.DragSort(a,{handle:"> .actions > .move",axis:"y",collapseDraggees:!0,magnetStrength:4,helperLagBase:1.5,helperOpacity:.9,onSortChange:$.proxy((function(){this.resetVariantBlockOrder()}),this)}),this.addListener(this.$addBlockBtnGroupBtns,"click",(function(t){$(t.target).data("type");this.addVariantBlock(null)})),this.addAspectRatioHandlers(),this.reIndexVariants()},onMenuOptionSelect:function(t,n){var e=$(t),i=n.$btn.closest(".matrixblock");switch(e.data("action")){case"add":this.addVariantBlock(i);break;case"delete":e.hasClass("disabled")||this.deleteVariantBlock(i)}},getHiddenBlockCss:function(t){return{opacity:0,marginBottom:-t.outerHeight()}},reIndexVariants:function(){this.$blockContainer=this.$container.children(".variant-blocks");var t=this.$blockContainer.children();t.each((function(t,n){var e=t,i=$(n).find("div .field, label, input, select");$(i).each((function(t,n){var i=$(n).attr("id");i&&(i=i.replace(/\-([0-9]+)\-/g,"-"+e+"-"),$(n).attr("id",i)),(i=$(n).attr("for"))&&(i=i.replace(/\-([0-9]+)\-/g,"-"+e+"-"),$(n).attr("for",i)),(i=$(n).attr("name"))&&(i=i.replace(/\[([0-9]+)\]/g,"["+e+"]"),$(n).attr("name",i))}))}));var n=!1;1==t.length&&(n=!0),t.find("> .actions > .settings").each((function(t,e){var i,a=$(e);a.data("menubtn")&&(i=a.data("menubtn"),$menuItem=$(i.menu.$menuList[1]),n?$menuItem.find("> li > a").addClass("disabled").disable():$menuItem.find("> li > a").removeClass("disabled").enable())}))},addAspectRatioHandlers:function(){this.addListener($(".lightswitch"),"click",(function(t){$(t.target).closest(".matrixblock").find(".io-aspect-ratio-wrapper").slideToggle()})),this.addListener($(".io-select-ar-box"),"click",(function(t){var n,e,i=$(t.target),a=$(t.target).data("x"),o=$(t.target).data("y"),r=$(t.target).data("custom");(e=i.closest(".matrixblock")).find(".io-select-ar-box").each((function(t,n){$(n).removeClass("io-selected-ar-box")})),i.addClass("io-selected-ar-box"),r?e.find(".io-custom-ar-wrapper").slideDown():(e.find(".io-custom-ar-wrapper").slideUp(),n=e.find("input")[2],$(n).val(a),n=e.find("input")[3],$(n).val(o))}))},addVariantBlock:function(t){var n=this;$block=$(this.$blockContainer.children()[0]).clone(),$block.find(".io-select-ar-box").each((function(t,n){0===t?$(n).addClass("io-selected-ar-box"):$(n).removeClass("io-selected-ar-box")})),$block.find(".io-custom-ar-wrapper").hide(),field=$block.find("input")[0],$(field).val(1200),field=$block.find("input")[1],$(field).val(1),field=$block.find("input")[2],$(field).val(16),field=$block.find("input")[3],$(field).val(9),field=$block.find("select")[0],$(field).val(82),field=$block.find("select")[1],$(field).val("jpg"),$block.css(this.getHiddenBlockCss($block)).velocity({opacity:1,"margin-bottom":10},"fast",$.proxy((function(){t?$block.insertBefore(t):$block.appendTo(this.$blockContainer),this.blockSort.addItems($block),this.addAspectRatioHandlers(),$block.find(".settings").each((function(t,e){var i,a,o=$(e);a=n.$container.find(".io-menu-clone > .menu").clone(),$(a).insertAfter(o),(i=new Garnish.MenuBtn(e)).menu.settings.onOptionSelect=$.proxy((function(t){n.onMenuOptionSelect(t,i)}),this)})),this.reIndexVariants()}),this))},deleteVariantBlock:function(t){var n=this;t.velocity(this.getHiddenBlockCss(t),"fast",$.proxy((function(){t.remove(),n.reIndexVariants()}),this))},resetVariantBlockOrder:function(){this.reIndexVariants()}})}},0,[[2547,666,216]]]);
//# sourceMappingURL=field.js.map