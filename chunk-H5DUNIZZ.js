import{a as ie}from"./chunk-LKURBDSR.js";import{$ as X,Aa as J,Ba as o,Ea as Q,Eb as E,Fb as p,Ha as M,Ia as v,N as O,P as x,Pa as ee,Qa as te,R as Z,T as _,Wa as d,Xa as u,Ya as P,_ as pe,_a as A,a,aa as h,b as c,fb as f,ga as Y,ib as k,j as ce,ja as me,jb as ge,m as de,na as b,qa as K,r as he,sb as _e,x as fe}from"./chunk-W73KYLNK.js";var Ae=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(o(Q),o(K))}}static{this.\u0275dir=h({type:i})}}return i})(),Qe=(()=>{class i extends Ae{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=me(i)))(r||i)}})()}static{this.\u0275dir=h({type:i,features:[v]})}}return i})(),Ee=new _("");var et={provide:Ee,useExisting:x(()=>W),multi:!0};function tt(){let i=ie()?ie().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var it=new _(""),W=(()=>{class i extends Ae{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!tt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(o(Q),o(K),o(it,8))}}static{this.\u0275dir=h({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&A("input",function(l){return r._handleInput(l.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(l){return r._compositionEnd(l.target.value)})},features:[k([et]),v]})}}return i})();function m(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Fe(i){return i!=null&&typeof i.length=="number"}var we=new _(""),Ie=new _(""),nt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,V=class{static min(e){return rt(e)}static max(e){return st(e)}static required(e){return ot(e)}static requiredTrue(e){return at(e)}static email(e){return lt(e)}static minLength(e){return ut(e)}static maxLength(e){return ct(e)}static pattern(e){return dt(e)}static nullValidator(e){return Se(e)}static compose(e){return Ge(e)}static composeAsync(e){return Te(e)}};function rt(i){return e=>{if(m(e.value)||m(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function st(i){return e=>{if(m(e.value)||m(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function ot(i){return m(i.value)?{required:!0}:null}function at(i){return i.value===!0?null:{required:!0}}function lt(i){return m(i.value)||nt.test(i.value)?null:{email:!0}}function ut(i){return e=>m(e.value)||!Fe(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function ct(i){return e=>Fe(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function dt(i){if(!i)return Se;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(m(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Se(i){return null}function Ne(i){return i!=null}function Oe(i){return _e(i)?de(i):i}function xe(i){let e={};return i.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function Pe(i,e){return e.map(t=>t(i))}function ht(i){return!i.validate}function ke(i){return i.map(e=>ht(e)?e:t=>e.validate(t))}function Ge(i){if(!i)return null;let e=i.filter(Ne);return e.length==0?null:function(t){return xe(Pe(t,e))}}function Re(i){return i!=null?Ge(ke(i)):null}function Te(i){if(!i)return null;let e=i.filter(Ne);return e.length==0?null:function(t){let n=Pe(t,e).map(Oe);return fe(n).pipe(he(xe))}}function je(i){return i!=null?Te(ke(i)):null}function ve(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Be(i){return i._rawValidators}function Ue(i){return i._rawAsyncValidators}function ne(i){return i?Array.isArray(i)?i:[i]:[]}function R(i,e){return Array.isArray(i)?i.includes(e):i===e}function ye(i,e){let t=ne(e);return ne(i).forEach(r=>{R(t,r)||t.push(r)}),t}function Ce(i,e){return ne(e).filter(t=>!R(i,t))}var T=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Re(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=je(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},D=class extends T{get formDirective(){return null}get path(){return null}},N=class extends T{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},j=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ft={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ni=c(a({},ft),{"[class.ng-submitted]":"isSubmitted"}),He=(()=>{class i extends j{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(N,2))}}static{this.\u0275dir=h({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&te("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[v]})}}return i})(),Le=(()=>{class i extends j{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(D,10))}}static{this.\u0275dir=h({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&te("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[v]})}}return i})();var F="VALID",G="INVALID",y="PENDING",w="DISABLED",g=class{},B=class extends g{constructor(e,t){super(),this.value=e,this.source=t}},I=class extends g{constructor(e,t){super(),this.pristine=e,this.source=t}},S=class extends g{constructor(e,t){super(),this.touched=e,this.source=t}},C=class extends g{constructor(e,t){super(),this.status=e,this.source=t}},re=class extends g{constructor(e){super(),this.source=e}},se=class extends g{constructor(e){super(),this.source=e}};function $e(i){return(q(i)?i.validators:i)||null}function pt(i){return Array.isArray(i)?Re(i):i||null}function We(i,e){return(q(e)?e.asyncValidators:i)||null}function mt(i){return Array.isArray(i)?je(i):i||null}function q(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function gt(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new O(1e3,"");if(!n[t])throw new O(1001,"")}function _t(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new O(1002,"")})}var U=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=E(()=>this.statusReactive()),this.statusReactive=M(void 0),this._pristine=E(()=>this.pristineReactive()),this.pristineReactive=M(!0),this._touched=E(()=>this.touchedReactive()),this.touchedReactive=M(!1),this._events=new ce,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return p(this.statusReactive)}set status(e){p(()=>this.statusReactive.set(e))}get valid(){return this.status===F}get invalid(){return this.status===G}get pending(){return this.status==y}get disabled(){return this.status===w}get enabled(){return this.status!==w}get pristine(){return p(this.pristineReactive)}set pristine(e){p(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return p(this.touchedReactive)}set touched(e){p(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ye(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ye(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ce(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ce(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(c(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new S(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new S(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(c(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new I(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new I(!0,n))}markAsPending(e={}){this.status=y;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new C(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(c(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(r=>{r.disable(c(a({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new B(this.value,n)),this._events.next(new C(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(c(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(n=>{n.enable(c(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(c(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===y)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new B(this.value,t)),this._events.next(new C(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(c(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Oe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new C(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new b,this.statusChanges=new b}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(G)?G:F}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new I(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new S(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=pt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=mt(this._rawAsyncValidators)}},H=class extends U{constructor(e,t,n){super($e(t),We(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){_t(this,!0,e),Object.keys(e).forEach(n=>{gt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var qe=new _("CallSetDisabledState",{providedIn:"root",factory:()=>oe}),oe="always";function vt(i,e){return[...e.path,i]}function Ve(i,e,t=oe){ae(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Ct(i,e),Dt(i,e),Vt(i,e),yt(i,e)}function De(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),$(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function L(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function yt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function ae(i,e){let t=Be(i);e.validator!==null?i.setValidators(ve(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=Ue(i);e.asyncValidator!==null?i.setAsyncValidators(ve(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();L(e._rawValidators,r),L(e._rawAsyncValidators,r)}function $(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=Be(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(l=>l!==e.validator);s.length!==r.length&&(t=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=Ue(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(l=>l!==e.asyncValidator);s.length!==r.length&&(t=!0,i.setAsyncValidators(s))}}}let n=()=>{};return L(e._rawValidators,n),L(e._rawAsyncValidators,n),t}function Ct(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&ze(i,e)})}function Vt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&ze(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function ze(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Dt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function bt(i,e){i==null,ae(i,e)}function Mt(i,e){return $(i,e)}function At(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Et(i){return Object.getPrototypeOf(i.constructor)===Qe}function Ft(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function wt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===W?t=s:Et(s)?n=s:r=s}),r||n||t||null}function It(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function be(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Me(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var z=class extends U{constructor(e=null,t,n){super($e(t),We(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Me(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){be(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){be(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Me(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var St=i=>i instanceof z;var Ze=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=h({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Xe=new _("");var Nt={provide:D,useExisting:x(()=>le)},le=(()=>{class i extends D{get submitted(){return p(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=E(()=>this._submittedReactive()),this._submittedReactive=M(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new b,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&($(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return Ve(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){De(t.control||null,t,!1),It(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),Ft(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new re(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new se(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(De(n||null,t),St(r)&&(Ve(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);bt(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&Mt(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ae(this.form,this),this._oldForm&&$(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(o(we,10),o(Ie,10),o(qe,8))}}static{this.\u0275dir=h({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&A("submit",function(l){return r.onSubmit(l)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[k([Nt]),v,Y]})}}return i})();var Ot={provide:N,useExisting:x(()=>ue)},ue=(()=>{class i extends N{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,s,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new b,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=wt(this,s)}ngOnChanges(t){this._added||this._setUpControl(),At(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return vt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(o(D,13),o(we,10),o(Ie,10),o(Ee,10),o(Xe,8))}}static{this.\u0275dir=h({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[k([Ot]),v,Y]})}}return i})();var xt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=X({type:i})}static{this.\u0275inj=Z({})}}return i})();var Ye=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Xe,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:qe,useValue:t.callSetDisabledState??oe}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=X({type:i})}static{this.\u0275inj=Z({imports:[xt]})}}return i})();var Ke=class i{emailSent=!1;contactForm;constructor(){this.contactForm=new H({email:new z("",[V.required,V.email]),message:new z("",[V.required])})}ngOnInit(){}submit(){console.log("Form:: ",this.contactForm)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=pe({type:i,selectors:[["app-contact"]],standalone:!0,features:[ge],decls:26,vars:2,consts:[[1,"container","wrapper-nm-contact"],[1,"row","justify-content-center","text-center"],[1,"col-12","col-md-8"],[1,"row","justify-content-center"],[1,"col-2","d-none","d-sm-block"],["src","assets/Email-rav.png",1,"raven-decor"],[1,"col-10"],[3,"ngSubmit","formGroup"],[1,"one-row"],["for","email"],["type","email","name","email","id","email","formControlName","email"],["for","message"],["name","message","id","message","formControlName","message"],[1,"text-end"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(t,n){t&1&&(d(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),f(4,"Contact"),u(),d(5,"p"),f(6,"Feel free to contact me!"),u(),d(7,"p"),f(8,"This form is not connected to an email delivery service yet."),u(),d(9,"div",3)(10,"div",4),P(11,"img",5),u(),d(12,"div",6)(13,"form",7),A("ngSubmit",function(){return n.submit()}),d(14,"div",8)(15,"label",9),f(16,"*Email:"),u(),P(17,"input",10),u(),d(18,"div",8)(19,"label",11),f(20,"*Message:"),u(),P(21,"textarea",12),u(),d(22,"p",13),f(23,"*Required fields."),u(),d(24,"button",14),f(25,"Send"),u()()()()()()()),t&2&&(J(13),ee("formGroup",n.contactForm),J(11),ee("disabled",n.contactForm.invalid))},dependencies:[Ye,Ze,W,He,Le,le,ue],styles:[".wrapper-nm-contact[_ngcontent-%COMP%]{height:100%}.one-row[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:center;align-items:baseline;flex-direction:row;padding:0 0 1rem;font-size:1.5rem}.one-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:30%}.one-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .one-row[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:70%}.raven-decor[_ngcontent-%COMP%]{width:10rem}@media (max-width: 576px){.one-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1rem}}"]})};export{Ke as ContactComponent};
