webpackJsonp([0],{57:function(t,o,e){e(62);var a=e(1)(e(58),e(61),"data-v-193e8fd6",null);t.exports=a.exports},58:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e(19),r=e.n(a),i=e(18),s=e.n(i),n=e(59),l=e(17);o.default={components:{"imagem-responsiva":r.a,"meu-botao":s.a},data:function(){return{foto:new n.a,id:this.$route.params.id}},methods:{grava:function(){var t=this;this.$validator.validateAll().then(function(o){o&&t.service.cadastra(t.foto).then(function(){t.id&&t.$router.push({name:"home"}),t.foto=new n.a},function(t){return console.log(t)})})}},created:function(){var t=this;this.service=new l.a(this.$resource),this.id&&this.service.busca(this.id).then(function(o){return t.foto=o})}}},59:function(t,o,e){"use strict";function a(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}var r=function t(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";a(this,t),this.titulo=o,this.url=e,this.descricao=r};o.a=r},60:function(t,o,e){o=t.exports=e(0)(),o.push([t.i,".controle[data-v-193e8fd6]{font-size:1.2em;margin-bottom:20px}.controle label[data-v-193e8fd6]{display:block;font-weight:700}.controle label+input[data-v-193e8fd6],.controle textarea[data-v-193e8fd6]{width:100%;font-size:inherit;border-radius:5px}.centralizado[data-v-193e8fd6]{text-align:center}.erro[data-v-193e8fd6]{color:red}",""])},61:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("h1",{staticClass:"centralizado"},[t._v("Cadastro")]),t._v(" "),e("h2",{staticClass:"centralizado"},[t._v(t._s(t.foto.titulo))]),t._v(" "),t.foto._id?e("h2",{staticClass:"centralizado"},[t._v("Alterando")]):e("h2",{staticClass:"centralizado"},[t._v("Incluindo")]),t._v(" "),e("form",{on:{submit:function(o){o.preventDefault(),t.grava()}}},[e("div",{staticClass:"controle"},[e("label",{attrs:{for:"titulo"}},[t._v("TÍTULO")]),t._v(" "),e("input",{directives:[{name:"validate",rawName:"v-validate"},{name:"model",rawName:"v-model",value:t.foto.titulo,expression:"foto.titulo"}],attrs:{"data-vv-as":"título",name:"titulo","data-vv-rules":"required|min:3|max:30",id:"titulo",autocomplete:"off"},domProps:{value:t._s(t.foto.titulo)},on:{input:function(o){o.target.composing||(t.foto.titulo=o.target.value)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("titulo"),expression:"errors.has('titulo')"}],staticClass:"erro"},[t._v(t._s(t.errors.first("titulo")))])]),t._v(" "),e("div",{staticClass:"controle"},[e("label",{attrs:{for:"url"}},[t._v("URL")]),t._v(" "),e("input",{directives:[{name:"validate",rawName:"v-validate"},{name:"model",rawName:"v-model",value:t.foto.url,expression:"foto.url"}],attrs:{name:"url","data-vv-rules":"required",id:"url",autocomplete:"off"},domProps:{value:t._s(t.foto.url)},on:{input:function(o){o.target.composing||(t.foto.url=o.target.value)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("url"),expression:"errors.has('url')"}],staticClass:"erro"},[t._v(t._s(t.errors.first("url")))]),t._v(" "),e("imagem-responsiva",{directives:[{name:"show",rawName:"v-show",value:t.foto.url,expression:"foto.url"}],attrs:{url:t.foto.url,titulo:t.foto.titulo}})],1),t._v(" "),e("div",{staticClass:"controle"},[e("label",{attrs:{for:"descricao"}},[t._v("DESCRIÇÃO")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.foto.descricao,expression:"foto.descricao"}],attrs:{id:"descricao",autocomplete:"off"},domProps:{value:t._s(t.foto.descricao)},on:{input:function(o){o.target.composing||(t.foto.descricao=o.target.value)}}})]),t._v(" "),e("div",{staticClass:"centralizado"},[e("meu-botao",{attrs:{rotulo:"GRAVAR",tipo:"submit"}}),t._v(" "),e("router-link",{attrs:{to:{name:"home"}}},[e("meu-botao",{attrs:{rotulo:"VOLTAR",tipo:"button"}})],1)],1)])])},staticRenderFns:[]}},62:function(t,o,e){var a=e(60);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(2)("f14ca878",a,!0)}});
//# sourceMappingURL=0.build.js.map