export function createLandscapeModule(ctx){
  function render(){
    const {state,num,materialLibraryHTML}=ctx;
    let h='<b>🌍 Terrain</b><div class="actions"><button data-terrain="create">＋ Create</button><button data-terrain="infinite">Infinite '+(state.terrainInfinite?'ON':'OFF')+'</button></div>';
    h+=num('Size '+Math.round(state.terrainSize)+'m',state.terrainSize,20,500,10,'terrainsize');
    h+=num('Gồ ghề '+state.terrainRough.toFixed(1),state.terrainRough,0,35,.5,'terrainrough');
    h+=num('Khoảng '+Math.round(state.terrainScale),state.terrainScale,5,100,1,'terrainscale');
    h+=num('Seed '+state.terrainSeed,state.terrainSeed,1,99,1,'terrainseed');
    h+='<small>Infinite V1: mở rộng vùng terrain preview; chunk streaming sẽ làm ở bước tối ưu.</small><hr>';
    if(state.selected?.userData.editor?.terrain){
      h+='<hr><b>Terrain Brush</b><div class="actions"><button data-brushtool="sculpt">Sculpt</button><button data-brushtool="paint">Paint</button></div>';
      h+=state.brushTool==='sculpt'?'<div class="actions">'+[['raise','Raise'],['lower','Lower'],['smooth','Smooth'],['flatten','Flatten']].map(x=>'<button data-sculpt="'+x[0]+'">'+x[1]+'</button>').join('')+'</div>':'<small>Chọn material bên dưới rồi Shift + kéo để Paint.</small>';
      h+=num('Brush '+state.sculptSize.toFixed(1)+'m',state.sculptSize,1,40,.5,'sculptSize');
      h+=state.brushTool==='sculpt'?num('Strength '+state.sculptStrength.toFixed(2),state.sculptStrength,.02,1,.02,'sculptStrength'):num('Paint Strength '+state.paintStrength.toFixed(2),state.paintStrength,.02,1,.02,'paintStrength');
      h+='<small>Giữ Shift + kéo chuột trái trực tiếp trên terrain.</small>';
    }
    h+='<hr><b>Water</b><div class="actions"><button data-watercreate="1">＋ Water Circle</button></div>';
    if(state.selected?.userData.editor?.water)h+=num('Water Size '+state.waterSize.toFixed(0)+'m',state.waterSize,2,300,1,'waterSize')+num('Opacity '+state.waterOpacity.toFixed(2),state.waterOpacity,.05,.95,.01,'waterOpacity');
    h+=materialLibraryHTML();
    return h;
  }
  function bind(root){
    const a=ctx.actions;
    root.querySelectorAll('[data-terrain]').forEach(b=>b.onclick=()=>a.terrain(b.dataset.terrain));
    root.querySelectorAll('[data-brushtool]').forEach(b=>b.onclick=()=>a.brushTool(b.dataset.brushtool));
    root.querySelectorAll('[data-sculpt]').forEach(b=>b.onclick=()=>a.sculpt(b.dataset.sculpt));
    root.querySelectorAll('[data-watercreate]').forEach(b=>b.onclick=a.createWater);
    root.querySelectorAll('[data-material]').forEach(b=>b.onclick=()=>a.material(b.dataset.material));
    root.querySelectorAll('[data-applymaterial]').forEach(b=>b.onclick=a.applyMaterial);
  }
  return {render,bind};
}
