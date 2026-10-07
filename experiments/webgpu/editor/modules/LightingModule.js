export function createLightingModule(ctx){
  return {render(){const {t,num,state}=ctx;return '<b>'+t('globalLighting')+'</b><small style="display:block;margin:5px 0 8px;opacity:.7">Environment → Scene Lights → Object Lights</small>'+num(t('sun'),state.sun(),0,8,.1,'sun')+num(t('sky'),state.sky(),0,5,.1,'hemi')+num(t('environment'),state.environment(),0,4,.05,'environment')+num(t('exposure'),state.exposure(),.2,2.5,.05,'exposure')},bind(){}};
}
