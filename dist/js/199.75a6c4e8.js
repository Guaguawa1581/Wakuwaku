"use strict";(self["webpackChunkwakuwaku"]=self["webpackChunkwakuwaku"]||[]).push([[199],{1339:function(e,t,a){var s=a(7424),l=a.n(s);t["Z"]={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(l())(this.$refs.modal)}}},6199:function(e,t,a){a.r(t),a.d(t,{default:function(){return me}});var s=a(6252),l=a(9963),i=a(3577);const d=e=>((0,s.dD)("data-v-7ea1e848"),e=e(),(0,s.Cn)(),e),c={class:"container p-0"},o={class:"cart-list"},n=(0,s.uE)('<div data-v-7ea1e848><p class="fs-1 fw-bold text-center" style="color:#faa11f;" data-v-7ea1e848> 購物車清單 </p><div class="col-12 col-lg-10 mx-lg-auto" data-v-7ea1e848><ul class="multi-steps" data-v-7ea1e848><li class="active" id="progressbar_cart" data-v-7ea1e848><span data-v-7ea1e848>購物車</span></li><li id="progressbar_order" data-v-7ea1e848><span data-v-7ea1e848>訂單資料</span></li><li id="progressbar_check" data-v-7ea1e848><span data-v-7ea1e848>確認訂單</span></li><li id="progressbar_done" data-v-7ea1e848><span data-v-7ea1e848>完成訂單</span></li></ul></div></div><div class="d-md-none" style="min-height:0.5rem;background-color:rgba(255, 173, 59, 0.856);" data-v-7ea1e848></div><div class="list-table-title d-none d-md-flex" data-v-7ea1e848><div class="col-1" data-v-7ea1e848>選取</div><div class="col-2" data-v-7ea1e848>商品圖片</div><div class="mx-2 col-8 flex-row" data-v-7ea1e848><div class="col-md-4" data-v-7ea1e848>商品名稱</div><div class="col-md-3 col-lg-2" data-v-7ea1e848>價格</div><div class="col-md-5 col-lg-4" data-v-7ea1e848>數量</div><div class="col-lg-2 d-none d-lg-flex" data-v-7ea1e848></div></div></div><hr class="my-1" style="border-width:3px;" data-v-7ea1e848>',4),r={class:"item_content align-item-center py-2"},h={class:"d-flex"},u={class:"col-1 item-check"},m=["value"],p={class:"item-img col-3 col-md-2"},v=["src"],g={class:"col-8 item-info mx-2"},k={class:"mt-2 mb-0 me-2 col-md-4"},b={class:"item-price my-2 px-2 col-md-3 col-lg-2"},_={class:"text-danger"},f={key:0,class:"text-decoration-line-through text-secondary me-2"},w={class:"counter-group col-md-5 col-lg-4"},x=["onClick","disabled"],C=d((()=>(0,s._)("i",{class:"bi bi-dash"},null,-1))),y=[C],I=["onChange","onUpdate:modelValue","disabled"],$=["onClick","disabled"],M=d((()=>(0,s._)("i",{class:"bi bi-plus"},null,-1))),D=[M],U={class:"del-btn col-lg-2"},A=(0,s.Uk)("刪除"),q=["onClick"],E={key:0,class:"d-flex align-item-center flex-column"},L=d((()=>(0,s._)("div",{class:"lg-list-item p-2 mt-3 fs-2 fw-bold text-center",style:{color:"gray"}}," 購物車沒有商品 . . . ",-1))),S={class:"d-flex justify-content-center mt-3 mb-5"},T=(0,s.Uk)(" 前往商店 "),z=d((()=>(0,s._)("i",{class:"bi bi-arrow-bar-right"},null,-1))),O={class:"cart-footer"},V={class:"footer-item check_out p-2"},Y={class:"ms-1 align-items-center d-flex"},Z={class:"ms-2 d-flex me-2",for:"select_all"},W={class:"ms-auto me-3"},H={class:"mb-0"},X=(0,s.Uk)(" 小計: "),j={class:"ms-2 text-danger fs-5"},K=["disabled"];function P(e,t,a,d,C,M){const P=(0,s.up)("router-link"),B=(0,s.up)("DelModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",c,[(0,s._)("div",o,[n,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(C.carts,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"item_box",key:e.id},[(0,s._)("div",r,[(0,s._)("div",h,[(0,s._)("div",u,[(0,s.wy)((0,s._)("input",{class:"form-check-input select-btn cart_item_checkbox",type:"checkbox",value:e.id,"onUpdate:modelValue":t[0]||(t[0]=e=>C.checkedItems=e)},null,8,m),[[l.e8,C.checkedItems]])]),(0,s._)("div",p,[(0,s._)("div",null,[(0,s._)("img",{src:e.product.images[0],alt:""},null,8,v)])]),(0,s._)("div",g,[(0,s._)("p",k,(0,i.zw)(e.product.title),1),(0,s._)("div",b,[(0,s._)("div",_,[(0,s.Uk)(" $"+(0,i.zw)(e.total)+" ",1),e.product.origin_price>e.product.price?((0,s.wg)(),(0,s.iD)("span",f,"$"+(0,i.zw)(e.product.origin_price*e.qty),1)):(0,s.kq)("",!0)])]),(0,s._)("div",w,[(0,s._)("button",{class:"",onClick:t=>M.updateCart(e,-1),disabled:C.status.loadingItem===e.id},y,8,x),(0,s.wy)((0,s._)("input",{type:"number",class:"qty-input",min:"1",onChange:t=>M.updateCart(e),"onUpdate:modelValue":t=>e.qty=t,disabled:C.status.loadingItem===e.id},null,40,I),[[l.nr,e.qty,void 0,{number:!0}]]),(0,s._)("button",{class:"",onClick:t=>M.updateCart(e,1),disabled:C.status.loadingItem===e.id},D,8,$)]),(0,s._)("div",U,[(0,s.Wm)(P,{to:"",onClick:t=>M.openDelModal(e)},{default:(0,s.w5)((()=>[A])),_:2},1032,["onClick"])])])])]),(0,s._)("div",{class:"item_del my-2",onClick:t=>M.openDelModal(e)},"刪除",8,q)])))),128)),0===C.carts.length?((0,s.wg)(),(0,s.iD)("div",E,[L,(0,s._)("div",S,[(0,s.Wm)(P,{class:"btn text-white fw-semibold shadow-none",to:"/search?search=&category=all",style:{"background-color":"rgb(251 164 59)"}},{default:(0,s.w5)((()=>[T,z])),_:1})])])):(0,s.kq)("",!0)]),(0,s._)("div",O,[(0,s._)("div",V,[(0,s._)("div",Y,[(0,s.wy)((0,s._)("input",{class:"form-check-input select-btn",type:"checkbox",name:"select_all",id:"select_all","onUpdate:modelValue":t[1]||(t[1]=e=>C.checkedAll=e),onClick:t[2]||(t[2]=e=>M.selectAll())},null,512),[[l.e8,C.checkedAll]]),(0,s._)("label",Z,"全選 ("+(0,i.zw)(C.carts.length)+")",1)]),(0,s._)("div",W,[(0,s._)("p",H,[X,(0,s._)("span",j,"$"+(0,i.zw)(M.totalAmount),1)])]),(0,s._)("button",{class:"btn btn-danger",disabled:0==M.totalAmount,onClick:t[3]||(t[3]=(...e)=>M.toOrder&&M.toOrder(...e))}," 結帳 ",8,K)])])]),(0,s.Wm)(B,{ref:"delModal","item-title":C.tempCart.product.title,"item-id":C.tempCart.id,onDeleteItem:t[4]||(t[4]=e=>M.deleteCart(C.tempCart.id))},null,8,["item-title","item-id"])],64)}const B=e=>((0,s.dD)("data-v-2e67c37e"),e=e(),(0,s.Cn)(),e),F={class:"modal fade",tabindex:"-1",ref:"modal"},G={class:"modal-dialog modal-dialog-centered"},J={class:"modal-content"},N={class:"modal-body"},Q=(0,s.Uk)(" 是否從購物車移除 "),R={class:"fw-bold text-danger"},ee=(0,s.Uk)(" ? "),te=B((()=>(0,s._)("br",null,null,-1))),ae=(0,s.Uk)(" (移除後將無法恢復) "),se={class:"modal-footer"},le=B((()=>(0,s._)("button",{type:"button ",class:"btn esc-btn col-5 text-center","data-bs-dismiss":"modal"}," 取消 ",-1)));function ie(e,t,a,l,d,c){return(0,s.wg)(),(0,s.iD)("div",F,[(0,s._)("div",G,[(0,s._)("div",J,[(0,s._)("div",N,[(0,s._)("p",null,[Q,(0,s._)("span",R,(0,i.zw)(a.itemTitle),1),ee,te,ae])]),(0,s._)("div",se,[le,(0,s._)("button",{type:"button ",class:"btn del-btn col-5 text-center",onClick:t[0]||(t[0]=t=>e.$emit("delete-item",a.itemId))}," 移除 ")])])])],512)}var de=a(1339),ce={props:{itemTitle:{type:String,default(){return{}}},itemId:{type:String,default(){return{}}}},data(){return{modal:""}},mixins:[de.Z]},oe=a(3744);const ne=(0,oe.Z)(ce,[["render",ie],["__scopeId","data-v-2e67c37e"]]);var re=ne,he={data(){return{carts:[],tempCart:{product:{title:""},id:""},status:{loadingItem:""},checkedItems:[],unCheckItems:[],checkedAll:!1,coupon_code:"",isCoupon:!1}},components:{DelModal:re},watch:{checkedItems(){this.checkedItems.length===this.carts.length?this.checkedAll=!0:this.checkedAll=!1}},computed:{totalAmount(){let e=0,t=[];return this.checkedItems.forEach((a=>{let s=this.carts.filter((e=>e.id==a)),l=s[0];t.push(l),e+=l.total})),e}},methods:{itemSwipe(){let e=null;const t=document.querySelectorAll(".cart-list .item_box");for(let a=0;a<t.length;a++){let s,l,i,d,c,o;t[a].addEventListener("touchstart",(function(t){s=t.changedTouches[0].pageX,l=t.changedTouches[0].pageY,c=!0,o=!0,e&&e.classList.remove("swipeleft")})),t[a].addEventListener("touchmove",(function(t){i=t.changedTouches[0].pageX,d=t.changedTouches[0].pageY,c&&Math.abs(i-s)-Math.abs(d-l)>0&&(t.stopPropagation(),i-s>10&&(t.preventDefault(),this.classList.remove("swipeleft")),s-i>10&&(t.preventDefault(),this.classList.add("swipeleft"),e=this),o=!1),o&&Math.abs(i-s)-Math.abs(d-l)<0&&(c=!1)}))}},getCarts(){const e="https://vue3-course-api.hexschool.io/api/wakuwaku-api/cart";this.unCheckItems=[],this.isLoading=!0,this.$http.get(e).then((e=>{this.isLoading=!1,this.carts=e.data.data.carts,this.carts.forEach((e=>this.unCheckItems.push(e.id))),window.screen.width<992&&this.$nextTick((()=>{this.itemSwipe()})),this.$emitter.emit("cartsUpdate",{})}))},updateCart(e,t){this.status.loadingItem=e.id;const a=`https://vue3-course-api.hexschool.io/api/wakuwaku-api/cart/${e.id}`;let s;if(s=t?e.qty+t:e.qty,s<=0)return this.openDelModal(e),void(this.status.loadingItem="");const l={product_id:e.product_id,qty:s};this.$http.put(a,{data:l}).then((e=>{this.getCarts(),this.status.loadingItem="",this.$httpMessageState(e,"更新購物車")}))},openDelModal(e){this.tempCart={...e};const t=this.$refs.delModal;t.showModal()},deleteCart(e){const t=this.$refs.delModal,a=this.checkedItems.indexOf(e);-1!=a&&this.checkedItems.splice(a,1);const s=`https://vue3-course-api.hexschool.io/api/wakuwaku-api/cart/${e}`;this.$http.delete(s).then((e=>{t.hideModal(),this.$httpMessageState(e,"刪除商品"),this.getCarts()}))},selectAll(){this.checkedAll?this.checkedItems=[]:this.carts.forEach((e=>{-1==this.checkedItems.indexOf(e.id)&&this.checkedItems.push(e.id)}))},toOrder(){let e=this.unCheckItems.filter((e=>-1===this.checkedItems.indexOf(e)));e.forEach((e=>{let t=`https://vue3-course-api.hexschool.io/api/wakuwaku-api/cart/${e}`;this.$http.delete(t).then((e=>{this.$emitter.emit("cartsUpdate",{})}))})),this.$router.push("/order")}},created(){this.getCarts()},mounted(){}};const ue=(0,oe.Z)(he,[["render",P],["__scopeId","data-v-7ea1e848"]]);var me=ue}}]);
//# sourceMappingURL=199.75a6c4e8.js.map